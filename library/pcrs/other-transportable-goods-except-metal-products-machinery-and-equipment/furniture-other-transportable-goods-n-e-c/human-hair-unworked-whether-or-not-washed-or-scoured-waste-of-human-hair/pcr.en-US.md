---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.human-hair-unworked-whether-or-not-washed-or-scoured-waste-of-human-hair
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Natural-colour unworked cut ponytail hair: purchased-lot intake and release

## 1. Scope and Applicability

This PCR specifies a bounded purchased supply route: receive already cut, clean, thoroughly dry, natural-colour human ponytail hair with root direction preserved at cutting; weigh, inspect, secure and package through the receiver's first quality release. Only unbleached, undyed and otherwise unworked physical hair qualifies; actual seller, lot, history and acceptance evidence are required. Intended later wig manufacture does not make this raw material a wig. The merchant's subsequent pattern matching, dressing and wig making are outside this route. Manual inspection and securing existing bundles exclude thinning, drawing, dressing or turning mixed-root hair.

Purchasing is the selected route. Donation guidance is independent corroboration and counterevidence for clean/dry preparation and secured cutting, not measurements of the merchant's lots. Donation does not establish zero burden or acceptance. Some dyed hair accepted by the charity falls outside this narrower product. Do not model human growth or metabolism as inputs. Identify haircut services, supplier cleaning/drying, procurement and physical acceptance separately. Hair waste belongs to the wider 38971 family, but mixed floor sweepings and waste-treatment services are outside this reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.human-hair-unworked-whether-or-not-washed-or-scoured-waste-of-human-hair |
| classification_refs | CPC 3.0:38971, accepted narrower association for unworked natural-colour cut-hair ponytails. Worked hair and wigs in 38972 are outside this scope. |
| covered_products | Natural-colour clean dry unworked cut ponytail hair |
| excluded_products | 38972 dressed, thinned, bleached or otherwise worked hair, wigs and articles; animal hair; synthetic fibre; mixed-root sweepings |
| representative_product | Unworked ponytails first accepted from an actual purchased lot |
| production_route | Receipt of clean dry cut ponytails → inspection/weighing → securing/packing → first release |
| market_state | Loose raw-hair intermediate awaiting downstream processing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted unworked natural-colour cut human hair |
| How much | 1 kg net human hair at first release |
| How well | Document buyer acceptance, clean/dry state, original root direction and actual length distribution; no sanitation performance claim |
| How long or cycle | One traceable receiving cohort; no wearing lifetime |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unworked natural-colour cut human ponytail hair |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual seller and lot; purchase rather than donation; natural colour and untreated history; root direction and cuticle condition; length distribution; receiving specification and pass/reject records; drying and moisture measurement conditions; net hair mass and tare; receipt/release dates; stocks and returns; supplier cleaning/drying/cutting and transport boundary/burdens; packaging composition; metering and shared-service allocation evidence; treatment destinations; site and period |

Declare every required qualifier in dataset metadata, process notes or equivalent fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass | kg | Q is net hair mass at unique first quality release; weigh on calibrated scales excluding bands, envelopes and separable foreign matter; record measured moisture and conditioning conditions. Dry does not mean oven-dry or a prescribed regain. |
| count_mass | all inventory rows | Mass | kg | Bundle count and length describe lots but do not replace mass. Conversion requires paired same-lot weighing. Multiply g by 0.001 for kg. Merchant payment by ounce does not establish which ounce convention applies; verify before converting transaction mass. |
| denominator | all inventory rows | Actual exchange property | native unit | All inventory rows are per 1 kg reference flow; preserve each numerator unit and normalize by positive same-cohort first-release Q. Rejects, returns, waste, opening released goods and repeated releases do not enter Q. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of already cut, clean dry natural-colour raw hair with preserved direction |
| starting_condition_role | Supplied physical material with upstream burdens; transaction acceptance is distinct from physical arrival |
| product_classification_scope | Narrower purchased raw-hair route within 38971; excludes 38972 |
| recursive_input_rule | Same-category hair retains actual supplier boundary/burdens; internal transfers cancel without repeated production |
| upstream_dataset_requirement | Match actual supplier cleaning/drying/cutting, transport, electricity and individual packaging providers; missing links remain explicitly unknown |
| disclosure | Disclose foreground start, supplier interface, rejection handling, stocks, period and site; do not claim complete cradle-to-gate before upstream assembly |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_unworked | intake | Allow receiving inspection, weighing and securing preserved root direction only. Washing alone does not exclude 38971, but no receiver rewash is presumed here. Exclude subsequent dressing, thinning, turning mixed-root hair, bleaching, dyeing, pattern matching, wefting and wig making. | un-cpc-3-2025; banbury-ethical |
| boundary_acceptance | intake | Retain every arriving lot and disposition. Only physical hair meeting actual buyer specifications with documented release enters Q; posting or payment is not acceptance. Record rejected returns separately. | banbury-selling |
| boundary_upstream | intake | Document actual supplier cleaning, drying, cutting and transport services and attributable burdens; do not model human growth, assign an entire personal haircut, or default upstream burdens to zero. Clean/dry instructions do not provide energy or water quantities. | banbury-selling; lpt-donation-2025 |
| boundary_complete | intake | A conditional flow is inapplicable only with evidence of physical absence; missing data or UUID never means zero. Add an atomic card for each actual additional substance, cleaner, water, drying carrier, waste and emission and reassess route applicability. Retain all burdens of failed lots and zero-output periods. |  |
| boundary_packaging | intake | Apply the complete receipt/return ledger in boundary_packaging_interfaces separately to each band, envelope and container. Record physical quantities separately from burden inclusion; never omit first attached or loan receipts. Packaging does not enter Q, internal reuse creates no new purchase, and production burdens already inside the hair provider are not loaded again. |  |
| boundary_origin_gate | intake | Link first securing/cutting records to source acquisition/voluntary authorization and applicable compliance evidence, seller lot, preserved root direction, cleaning/drying/cutting/transport burdens and the first accepted raw-material release event. Hair already previously released by a buyer as equivalent accepted raw material cannot generate new Q through reinspection, resale, repacking or repeated stock receipt. Quarantine lots without demonstrated first-gate provenance outside Q; do not disclose personal identities. | banbury-selling; banbury-ethical |
| boundary_unreleased_carry | intake | Carry unreleased cohorts across periods with net hair quantity, moisture state and itemized inherited upstream and incurred foreground exchange vectors into next-period opening stock. Do not discard burdens or enter Q early. Attribute carried and additional burdens on eventual first release; on return transfer inherited vectors under allocation_inherited_returns while retaining attributable actual failed services. Closing unresolved stock is not allocated as produced output. |  |
| boundary_packaging_interfaces | intake | For each article separately: opening empty/attached/borrowed stocks + new purchase receipts + first supplier-included receipts + first nonpurchase/loan receipts + genuine receipts of the same previously dispatched objects = closing stocks + accepted-hair dispatch + refused-hair returns + loan returns + other external dispatch + waste. Events are mutually exclusive and linked by object ID or evidenced lot correspondence; internal transfers cancel. At each interface record whether inherited burden is inside the hair provider, independently acquired or a loan service; load it once. Unknown material/ownership/burden interfaces remain unresolved, not zero-filled. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| intake | Purchased raw-hair receipt inspection and first release | required | Declared purchasing route | Receiving quality gate, packaging and subsequent attributable services | per 1 kg reference flow |

No verified general yield, recipe or energy range is available. The sources provide qualitative intake conditions; quantities require collection. Accepted hair is the unique reference product; packaging is not a coproduct. All cards inherit the complete section 5 and 7 conditions.

### Process: Purchased raw-hair intake and release (`intake`)

#### Inputs

##### Product flows

###### Incoming cut ponytail hair (`raw_hair`)

Record every incoming lot, including returned nonaccepted lots. Incoming hair already is clean and dry; keep water and impurities as non-additive composition records. Supplier cleaning, drying, cutting and transport burdens require upstream evidence.

- Selected flow: Unworked natural-colour cut human ponytail hair
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_hair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hair`
- Sources: `banbury-selling`; `banbury-ethical`

###### Intake electricity (`intake_electricity`)

Conditional on actual powered lighting, weighing, handling or storage; obtain metered attributable consumption. Do not invent drying energy at intake.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable exchange quantity per reference flow; cp_exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_exchange`
- Sources:

###### New securing band (`band_input`)

Conditional on a verified natural-rubber band purchase. Existing bands arriving with hair have a separate physical ledger; do not repurchase their burdens. Another band material needs its own card.

- Selected flow: Natural-rubber hair band
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### New dispatch envelope (`envelope_input`)

Conditional on actual cardboard envelope use; measure net packaging mass. A carton or plastic bag is a distinct exchange requiring an additional card.

- Selected flow: Cardboard envelope
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Natural-rubber band arriving with hair (`band_received`)

Conditional on verified material. Count each first physical receipt of an attached band, including supplier-included and nonpurchased receipts. Identify owner, lot and whether production burden is already inside the hair provider; attach it once, never as a second new-band purchase.

- Selected flow: Natural-rubber hair band
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Cardboard envelope arriving with hair (`envelope_received`)

Conditional on actual material. Record first supplier-included or nonpurchased envelope receipt, actual mass and inherited burden boundary. Keep separate from new purchases and genuine returns of previously dispatched envelopes.

- Selected flow: Cardboard envelope
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Borrowed polypropylene transport box received (`borrowed_box_received`)

Conditional on an actual verified polypropylene box loan. Record box ID, owner, receipt event, mass, previous uses, upstream service burden and contracted return. A first loan is not an external return or a purchase. Another material needs its own card.

- Selected flow: Reusable polypropylene hair-transport box
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

#### Outputs

##### Product flows

###### Accepted raw hair (`reference_product`)

Only the unique first documented quality release of accepted physical hair enters Q. Amount is 1 kg. Root direction retained from cutting is not a claim of subsequent dressing.

- Selected flow: Unworked natural-colour cut human ponytail hair
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hair`
- Sources: `banbury-selling`; `banbury-ethical`

###### Unaccepted hair returned to sender (`returned_hair`)

Record gross returned physical hair even when no purchase is completed. This is a return, not another accepted product or waste credit.

- Selected flow: Unaccepted cut human ponytail hair returned to sender
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_hair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hair`
- Sources: `banbury-selling`; `banbury-ethical`

###### Band leaving with accepted hair (`band_attached`)

Conditional on the declared band material. Packaging content is excluded from Q and is not a coproduct. Include inherited attached bands in the physical ledger without duplicating purchases.

- Selected flow: Natural-rubber hair band
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Envelope leaving with accepted hair (`envelope_attached`)

Conditional on actual dispatch. Distinguish first release into stock from later dispatch; do not count hair production again.

- Selected flow: Cardboard envelope
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Received band returned with refused hair (`band_returned`)

Conditional on actual same-band return. Link incoming object/lot to return event and inherited burden vector; do not also count it as accepted-hair dispatch or waste. An unrelated replacement is a new article, not a true return.

- Selected flow: Natural-rubber hair band
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Received envelope returned to sender (`envelope_returned`)

Conditional on actual return of the same received envelope. Identify event and object; preserve inherited burden with it. A discarded envelope is waste, and a replacement return envelope is separately acquired packaging.

- Selected flow: Cardboard envelope
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Borrowed polypropylene box returned to owner (`borrowed_box_returned`)

Conditional on actual return of the identified loan box. Match the same box receipt and retained stock; record real return transport and any cleaning service separately. Neither a second receipt nor a new box production credit arises.

- Selected flow: Reusable polypropylene hair-transport box
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

##### Waste flows

###### Discarded hair (`hair_waste`)

Conditional on actual discard rather than return; record destination and payer. A rejected consignment is not automatically waste.

- Selected flow: Discarded cut human hair
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_hair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hair`
- Sources:

###### Discarded band (`band_waste`)

Conditional on actual discarded bands of this material; keep separate from hair and cardboard.

- Selected flow: Discarded natural-rubber hair band
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Discarded envelope (`envelope_waste`)

Conditional on actual discarded envelopes; follow the documented treatment route.

- Selected flow: Discarded cardboard envelope
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange quantity per reference flow; cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_services | intake | Prefer subdivision and direct measurement; allocate shared weighing, storage and transport using measured attributable drivers with time, load and complete denominators. Do not use sale proceeds or a zero donation price as environmental burden drivers. |  |
| allocation_haircut | supplier | Subdivide common hair-material and haircut-service burdens first; attribute actual collection-specific services and evidenced shared portions with causal justification. Unjustified allocation remains unknown; do not assign an entire haircut or zero burden automatically. |  |
| allocation_returns | intake | No saleable coproduct is presumed. Rejected returns, discarded hair, packaging and waste create neither additional Q nor avoided-disposal credit. Keep attributable collection, inspection and handling burdens of failures and returns in the same-cohort numerators. A real saleable coproduct requires further allocation and boundary review. |  |
| allocation_inherited_returns | raw_hair; returned_hair | Physical arrival does not prove acquisition. Do not load another purchased-hair provider for unacquired temporarily held hair returned to its owner. For acquired hair subsequently returned, transfer its inherited upstream exchange vector with that physical return instead of also retaining it in the accepted-hair numerator. Actual intake, failed inspection and return-service burdens remain attributable by evidenced drivers. Keep the full physical ledger without avoided-disposal credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hair | intake | raw hair; accepted hair; returns; discarded hair | weighing | lot; purchase/donation; seller; colour/history; root direction; lengths; moisture; gross/tare; incoming, Q, returns, discarded hair and opening/closing unreleased stocks | Calibrated net weighing per lot; verify first securing/cutting event, source authorization/compliance evidence, supplier lot and burden vectors against first release; detect previous equivalent release and quarantine resale lots; sign period carryover of quantities/vectors through release or return; no drawing or dressing | kg | each lot | complete cohort through return closure | collector and receiver separately | per 1 kg reference flow | acceptance forms, scale calibration, moisture conditions, stock records |
| cp_exchange | intake | electricity and shared services | meter and activity ledger | submeter electricity; opening/closing readings; drivers and complete served populations; supplier/transport interfaces | Prefer direct meters; attribute shared portions by evidenced drivers; retain failures and zero-output periods | kWh | each cohort and meter period | complete matched cohort/period | actual supplier and receiving sites | per 1 kg reference flow | meters, time logs, supplier interfaces and attribution basis |
| cp_pack | intake | each packaging article and its waste | article ledger | mass per packaging material; purchases; incoming attached quantities; stocks; dispatch; external returns and waste destinations | Weigh each object/material; record owner, first-receipt class (new purchase, supplier-included, nonpurchase or loan), actual same-object return links, period empty/attached/borrowed stocks and ultimate dispatch/return/discard; reconcile mutually exclusive boundary_packaging_interfaces ledger; verify each inherited burden against hair-provider inclusion without duplication | kg | each lot and closing stock | same cohort including later packaging horizon | receiving and dispatch sites | per 1 kg reference flow | material declarations, invoices, stocks, treatment receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| inventory_normalization | all inventory rows | For each same-cohort exchange divide its attributable total by positive first-release net Q to obtain the amount per 1 kg reference flow; do not multiply by bundle count or divide by length again. If Q is zero retain totals without a unit result. | cp_hair; cp_exchange; cp_pack; Q | each exchange per 1 kg reference flow |  |
| hair_balance | intake | Opening unreleased hair + arrivals = first-release Q + returned hair + discarded hair + closing unreleased hair + independently evidenced net moisture/foreign-matter losses. Q includes this cohort closing released stock; later dispatch is not new Q. Measure composition independently; do not use one residual to infer both moisture and unknown hair loss. | cp_hair | physical ledger closure and explicit discrepancies |  |
| supplier_interface | raw_hair | Incoming physical hair carries inherited supplier services. Record actual supplier water, cleaner, drying energy and transport individually with their collection bases and conversion to this delivered lot; presume no recipe or values. Receiver does not count the same upstream burdens again. | cp_hair; cp_exchange; supplier data | traceable supplier boundary and gaps | lpt-donation-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_intake | intake | Verify natural untreated colour, preserved roots, clean/dry state and actual intake criteria per lot. Merchant minimum 14 inches and charity minimum 10 inches with encouragement to reach 12 inches are distinct institutional terms, not a universal threshold or one lot specification. | banbury-selling; banbury-ethical; lpt-donation-2025 |
| quality_numbers | all inventory rows | Use collection where no defensible general range exists; do not supply yields, energy/water use, regain or wig lifetimes. Sources provide qualitative conditions rather than this lot measurements. | cp_hair; cp_exchange; cp_pack |
| quality_identity | all inventory rows | Verify each UUID, actual provider, packaging material and treatment route; unresolved identities do not establish a completed database match. | verifiable original data and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | intake | Verify actual unworked incoming history; 38972 prepared hair/articles and donation data substituted for purchased-lot evidence fail applicability. | un-cpc-3-2025; lpt-donation-2025 |
| validate_reference | reference_product | Link the unique product output reference_product at 1 kg; Q must be positive and include only first-accepted physical hair, excluding rejects and packaging. |  |
| validate_completeness | all inventory rows | Verify each measured numerator, same-cohort Q, stock closure, gaps and conditional-flow existence evidence; retain unexplained differences, missing upstream and unresolved identities explicitly without claiming completeness or approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Bounded raw-hair supply input before downstream processing |
| allowed_use | Use only with matched actual start, state, specifications and supplier burdens after independent dataset quality review |
| excluded_use | Finished wigs/wearing services; dressed/thinned/dyed hair; donation performance; zero-burden or avoided-disposal claims |
| required_metadata | Seller/lot, quality gate, net mass/moisture, direction/length, site/period, supplier/packaging interfaces |
| required_quality_disclosure | Measurement coverage, rejected returns, stocks, shared services, UUID/upstream gaps and scientific review state |
| update_trigger | Changed supply start, treatment, buyer specification, packaging material or provider |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC 3.0 Structure and Explanatory Notes, 30 June 2025, PDF p.197, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38971/38972 boundary; page gives no additional process quantities |
| banbury-selling | literature | Banbury Postiche, Selling your hair, https://www.banburypostiche.co.uk/sellingYourHair | First-party purchase and rejected-return conditions; not measured lot data or downstream wig inventory |
| banbury-ethical | literature | Banbury Postiche, Ethical Policy, https://www.banburypostiche.co.uk/EthicalPolicy | First-party raw-hair purchasing, preserved root direction/cuticle; not independent ethical certification or proof of an unworked terminal |
| lpt-donation-2025 | literature | The Little Princess Trust, Hair Donation Guidelines, May 2025, https://www.littleprincesses.org.uk/Documents/Hair%20Donation%20Guidelines%20-%20English%20-%20May%202025%20WEB.pdf | Distinct donation route: clean/dry preparation, rinsing out conditioners, secured cutting and cardboard envelope guidance; dyed-hair allowance is scope counterevidence, not purchased-lot quantities |
