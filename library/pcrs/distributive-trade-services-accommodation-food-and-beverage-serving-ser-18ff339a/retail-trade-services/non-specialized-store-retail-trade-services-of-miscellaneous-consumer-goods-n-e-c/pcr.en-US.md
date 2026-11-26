---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-consumer-goods-n-e-c
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Retail services for factory-sealed four-cell cardboard packs of LR6 alkaline batteries

## 1. Scope and Applicability

This PCR defines the incremental retail service for one final-valid original four-cell LR6 alkaline pack in paperboard packaging through an actual mixed-assortment store. It covers the full declared store route and explicitly separates original merchandise responsibility from service activity and old-battery takeback. The narrower method does not cover the whole classification leaf.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-consumer-goods-n-e-c |
| classification_refs | CPC3.0:62159; narrower |
| covered_products | Retail of homogeneous intact unused four-cell LR6 alkaline original paperboard packs |
| excluded_products | Tyres/tubes; musical instruments; other battery chemistry/size; loose cells; charging; delivery; whole-product life cycle |
| representative_product | Retail services for factory-sealed four-cell cardboard packs of LR6 alkaline batteries; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Supplier delivered receiving; manual ambient storage/display; electric checkout; walk-in handover; returns/controlled residual handling |
| market_state | Unused original sealed paperboard pack; intact cells/contacts; actual date/lot and acceptance specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Make one specified original pack available and hand it to an accepting walk-in customer |
| How much | One final-valid accepted whole four-cell pack retail service |
| How well | Same actual SKU, unopened original packaging, unused cells, verified acceptance and lot/date specification |
| How long or cycle | One receiving-through-final-fate cycle within declared pool, corrected for later returns/revocations |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for one sealed four-cell LR6 alkaline battery pack |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | SKU and actual GTIN; cell model and chemistry LR6 alkaline; exactly four unused cells; original paperboard packaging full BOM; lot/date and actual mass records; actual mixed assortment evidence; walk-in ambient electric-only route survey; receiving gate and original supplier vector; pool/closure and return horizon; Q and all-beneficiary drivers; S/F/O/T source ownership; old-battery program and disjoint carrier states; provider/treatment/source versions |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | service_output; failed_pack; external_pack | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count the actual complete pack; four cells are one pack and one service. Q final validity is separate from gross physical count. |
| energy_conversion | ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual attributed kWh using1kWh=3.6MJ; no nominal cell voltage/capacity becomes store electricity. |
| mass_state | water; cleaner; wipe; glove; absorbent; effluent; wet_wipe; used_glove; used_absorbent; cleaner_container; receipt; new_cells; pack_board; transport_board; receipt_waste; old_received; old_dispatched | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual state-specific net carrier mass and measured density/temperature for volume conversions; source-origin mass and carrier mass are independent. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-delivered original pack at store receiving with full production/consumer-pack/inbound vector |
| starting_condition_role | upstream_boundary |
| product_classification_scope | Narrower LR6 pack retail within62159, actual mixed assortment required |
| recursive_input_rule | Do not recurse this retail service as merchandise; original pack production is a different product input and only F is included here |
| upstream_dataset_requirement | Original supplier whole-pack vector or verified exclusive component/assembly/inbound mode; named S/F/O/T |
| disclosure | Incremental service; S merchandise background downstream; F included; O/T conserved; takeback separate; route and unbound identities disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope | store_sale | Only a demonstrably non-specialized mixed-assortment store, one homogeneous unused primary alkaline LR6 four-cell consumer SKU with intact original paperboard packaging, and walk-in handover qualify. Preserve manufacturer/order number, actual GTIN, cell model, four-cell count, lot/date, packaging full BOM and acceptance specification. VARTA4906 order04906 121414 (catalogue GTIN4008496559435) is a representative specification, not an LCI or a default mass. Brand non-exclusivity alone does not establish a non-specialized store. Exclude tyre, tube, instrument, rechargeable/lithium/other-size cell, loose-cell, repacking, installation, testing/discharge and delivery services. | un-cpc-62159; varta-catalogue-2025 |
| route | all processes | Use an ambient naturally ventilated store route with manual handling and electrically powered lighting, fan, radiant heating and checkout only where actual site survey confirms no refrigerant circuit, combustion fuel, purchased heat, on-site charging or powered handling. These are applicability conditions, never zero assumptions. Include actual shared building circuits through electricity allocation. Any different necessary source needs a named atomic extension with protocol, calculation and aligned translation before completeness; otherwise report this route inapplicable. | jrc-retail-2013 |
| gates | store_sale; residual | Start at supplier-delivered store receiving after original merchandise production and inbound transport, including its original consumer pack and allocated transport packaging. End at final-valid customer acceptance or the evidenced actual final fate; include storage, display, checkout, returns, failure handling, hygiene, capital and waste handover/treatment. Customer travel, use and normal post-sale disposal belong downstream. No customer bag/wrap is assumed: require actual no-additional-packaging policy and issue records, or add its measured material and fates. | jrc-retail-2013 |
| ownership | failed_pack; service_output | For each original pack source s fix S/F/O/T responsibility at the same receiving gate. S is an original eventually delivered with final-valid acceptance and remains a purchaser merchandise background; F is a failed/lost original whose production plus inbound responsibility remains this service; O is open stock; T transfers the SAME original source responsibility to a named supplier, external recipient or internal asset with evidence. Sum the fractions for each original to1. The actual failed_pack product input carries sum_s whole_mode_s*original_pack_count_s*F_s/Q and links the whole-mode original supplier vector exactly once; component mode follows source_integrity and its actual component cards, with whole_mode_s=0. A supplier refund does not erase production. A supplier return requires named continuing responsibility and actual transport records. Downstream whole-mode goods completion is sum_s (whole_mode_s*original_pack_count_s*S_s/Q)*the verified original supplier vector_s at that same gate, added to this incremental service once; retain O/T in their named owners, never add all receipts. Unknown recipient/responsibility is incomplete, never zero. |  |
| source_integrity | failed_pack; residual | Whole-pack mode stays intact when the entire original four-cell paperboard pack has one S/F/O/T owner: failed_pack=N_F/Q links its actual full supplier receiving-gate vector once. Component mode is permitted ONLY with verified supplier component inventory vectors and original quantity units that exactly reconstruct that original pack, assembly and inbound boundary. Use component_cell input for original LR6 cells in Item(s), component_board for the complete original printed/coated/adhesive paperboard consumer-package object in Item(s), component_assembly for the actual one-pack assembly service in Item(s), and component_inbound for the actual original-pack receiving-gate freight provision in Item(s) with exact consignment/route/load/empty-leg coverage. Each is one actual verified supplied object/service, never a guessed mass fraction of an environmental vector. For original s and component c record original amount n_s_c and mutually exclusive S_s_c/F_s_c/O_s_c/T_s_c fractions summing1; its foreground input is sum_s n_s_c*F_s_c/Q, while downstream S/T/O retains that SAME source vector and amount. Explicitly set whole_mode_s=0 for every component-mode original, so its whole-pack F input is excluded; whole-pack N_F=sum_s whole_mode_s*original_pack_count_s*F_s. Supplier assembly/inbound responsibilities must themselves be assigned and conserved, not omitted when cells/packaging differ. Different actual component models/vectors require distinct model-specific rows. No mechanical component splitting of a normal whole-pack original; no catalogue mass, LCI mass split or duplicated descendant background. | varta-catalogue-2025 |
| custody | residual | Maintain a goods-only count ledger: opening goods + receipts + physical customer returns + internal inward = closing goods + ALL gross customer handovers + physical supplier returns + internal outward + condemnation + unexplained loss. Gross customer handovers include accepted and never-accepted physical exits exactly once. Condemnation moves goods to held waste internally; subsequent waste dispatch removes held waste, never goods again. Count cells and packaging kg separately after opening; late revocation without movement reclassifies acceptance only. Physical externally retained failed intact packs use external_pack; external_partial/external_spent cover evidenced externally retained partly used/spent cells; opened unused externally retained cells require an actual state-specific additional card before completeness. No automatic retailer waste. |  |
| takeback_boundary | takeback | Keep the actual collector-admitted mixed old portable-battery carrier and its program/chemistry/state contract separate from new stock/returns. Takeback creates no new-pack output, virgin input or avoided-production credit. PCR allocation is fixed: directly segregated event/source records go to their evidenced beneficiary; a genuinely shared takeback program uses d_p=sum_intervals reserved_admitted_capacity_kg_p*reservation_hours_p and alpha_p=d_p/sum_all_b d_b across ALL actual retail cohorts/program sponsors/standalone collection beneficiaries. The capacity is actual reserved collector-admitted kg, not received kg, sales count, revenue or an unchosen downstream rule. Preserve idle/closed/zero-sale reservations; all-beneficiary denominator must be known positive. A standalone collection beneficiary keeps its own numerator rather than passing it to new-pack retail. Isolate actual program operation source totals first, then apply alpha ONCE to shared operation, received/dispatched old carrier kg and collection/treatment contract numerators; their raw physical stock ledger remains whole, not allocated twice. Do not multiply again by handler time or general-store allocation. For the bin use its OWN lifetime e/L or final e/E over all period/beneficiary reserved kg*h directly, never multiply the bin fraction by alpha again. New-stock returns remain in residual, not takeback. Unknown program, capacity, beneficiary or treatment prevents completeness. |  |
| asset_coverage | support | Premises is ONE actual complete physical building model/BOM including shell, floor, fixed lighting, fan, electric heater and wiring, manufacture/installation, actual maintenance and terminal treatment. Shelf, manual trolley, manual pallet jack, checkout station, network gateway, security system and administration workstation each have their OWN physically bounded model card. Shelf excludes every trolley/pallet jack; no shelf-handling bundle is presumed. Keep a multi-object package only if an actual single complete contract/model and measurable whole object are evidenced and all component/operation exclusions are explicit; otherwise separate actual objects with distinct rows and full vectors. Checkout includes its actual counter, terminal, scanner, printer, drawer, supplies/cables; gateway includes actual router/modem/switch/cabling; security includes actual cameras/alarm/controller; admin includes actual desk/computer/display. Each card instance binds one actual model and full vector, not an undefined item proxy. Exclude operational electricity, telecom/payment/monitoring/bookkeeping service, paper, cleaning and merchandise from these capital vectors. Complete life includes only that same object manufacture/installation, model-specific maintenance/replacements and terminal treatment/transport. Uncovered necessary devices require their concrete model-specific cards before completeness. | jrc-retail-2013 |
| leak_response | hygiene; residual | New-product leak response uses actually identified sepiolite granules and nitrile gloves only where actual safety procedure permits. Keep recovered electrolyte in whole contaminated absorbent/wipe carriers separate from remaining discarded cells; weigh terminal net carriers including retained contamination. No drain flushing, evaporation factor or automatic elementary release is allowed. Record observed escaped liquid, stocks, capture and final destination. Any uncontained release requires measured species/compartment and additional atomic cards; unresolved release cannot be zero. Third-party incident response not covered by the declared inputs requires a separate bounded service card. |  |
| return_transport | supplier_return_transport | Raw-segment supplier-return freight capacity choice is fixed by the actual contract constraint: use kg only when payload mass is the evidenced binding reservation constraint and cube/loading positions are nonbinding; use usable m3 only when cube/loading positions are evidenced binding and payload mass nonbinding. Record those proofs per segment. Where both bind, neither is known or a heterogeneous service cannot be physically partitioned into independently measured single-constraint segments, raw allocation is unavailable: obtain a provider already-attributed actual consignment vector with verified physical allocation/empty/idle coverage, otherwise incomplete. For each eligible segment use actual km times reserved capacity_p/sum_all_b reserved capacity_b in that fixed unit. Dedicated/empty reserved legs keep actual vehicle km and their booking capacity ownership, never zero tonne-km. Quantitatively verify actual stationary idle fuel in the matched full trip service vector; unknown coverage blocks completeness. Provider-attributed quantity is used directly without a second driver. Original inbound/waste/takeback transport already in other physical boundaries is excluded by physical route/stage/load and vector evidence, not different source IDs. |  |
| support_services | support | Include actual ICT/broadband access, attempted-payment authorization, remote security monitoring and bookkeeping service through named cards below, plus actual on-site gateway/security/admin capital cards. Each is conditional only on a signed site topology, contracts/invoices and activity records proving actual presence or absence across ALL pool/idle periods; a necessary missing provider or capital object is incomplete, never an assumed zero. cp_support_services fixes active/fixed allocation. Provider full vectors must cover their actual remote network/datacenter/office electricity and capital and exclude on-site AC, gateway/checkout/security/admin hardware already modeled. Record a physical coverage matrix by object serial/model, meter circuit, route/stage, time period, service function and supplier vector components. Match intersections even when source IDs differ; remove an overlap only through a verified original provider subvector/quantity, never an arbitrary percentage. Unknown overlap or inability to separate a provider-full package blocks completion. Add each real additional named card/protocol/calculation before complete data; no general expansion sentence waives these duties. |  |
| transport_source_ownership | support; store_sale; hygiene; residual; takeback | A full asset vector V_a_v includes actual delivery/installation, maintenance replacement freight and terminal removal/treatment transport for THAT asset. If separately sourced, measure and verify the original transport vector and bind it first to that asset source/version before constructing V_a_v; allocate by the same current e/L or final e/E and DeltaV for ALL historical beneficiaries. Never charge independent asset freight entirely to the current Q. Paper, cleaner formulation and complete packaging delivery vectors follow their original material source and first-consumption/stock responsibility fractions (paper_responsibility_l_pool or measured formulation consumption/original fill), including WIP carryover; original goods inbound follows whole/component S/F/O/T. Actual waste receiver vectors must explicitly cover each dispatch collection vehicle/empty return, treatment and necessary container life; missing transport/container becomes a concrete measured additional card before completeness. Record route/stage/consignment/time/object and physical vector overlaps. A different ID or invoice does not make duplicate freight disjoint. Normalize each original compatible numerator only after these responsibilities/version replacements. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| store_sale | Receiving, display and checkout | required | Declared route | Foreground service route | per reference flow |
| hygiene | Cleaning and controlled incident response | required | Actual route hygiene; conditional PPE/absorbent by event | Foreground service route | per reference flow |
| support | Complete asset provision | required | Actual defined complete packages | Foreground service route | per reference flow |
| residual | New-product custody and residual dispatch | required | Actual physical custody and discard events | Foreground service route | per reference flow |
| takeback | Post-consumer takeback | conditional | Actual admitted takeback program/obligation; absence evidenced | Foreground service route | per reference flow |

### Process: Receiving, display and checkout (`store_sale`)

#### Inputs

##### Product flows

###### Original unused four-cell LR6 alkaline battery pack in paperboard packaging (`failed_pack`)

This is a source-equivalent background input for failed originals, not gross receipts or a second cell input.

- Selected flow: Original unused four-cell LR6 alkaline battery pack in paperboard packaging
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F / Q; N_F=sum_s whole_mode_s*original_pack_count_s*F_s; component-mode originals have whole_mode_s=0 and never enter this whole-pack input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sale`
- Sources: `varta-catalogue-2025`

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`ac`)

Point-of-use AC, no inferred provider or voltage; total includes disjoint sale, cleaning and takeback circuits once.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_pool / Q; E_pool is attributed actual kWh including idle/failures.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `jrc-retail-2013`

###### Direct thermal receipt paper including coating (`receipt`)

Actual paper excludes cores and separate carton/wrap; no ink cartridge is inferred for direct thermal printing.

- Selected flow: Direct thermal receipt paper including coating
- Flow property / unit: Mass / kg
- Amount rule: P_pool / Q; P_pool = sum_l paper_source_kg_l*paper_responsibility_l_pool; use the original source version and conserve blank/printed stocks.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper`
- Sources:

###### Original unused LR6 alkaline cell of the actual supplier model (`component_cell`)

Conditional verified component mode only; whole_mode_s=0 for the SAME original. Each actual component/service model binds its own original quantity and source vector, S/F/O/T conserved.

- Selected flow: Original unused LR6 alkaline cell of the actual supplier model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_s n_s_cell*F_s_cell / Q; only component-mode original sources; verified actual supplier vector/quantity boundary, not an allocated fraction of the whole-pack vector.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources:

###### Complete original printed paperboard four-cell consumer package (`component_board`)

Conditional verified component mode only; whole_mode_s=0 for the SAME original. Each actual component/service model binds its own original quantity and source vector, S/F/O/T conserved.

- Selected flow: Complete original printed paperboard four-cell consumer package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_s n_s_board*F_s_board / Q; only component-mode original sources; verified actual supplier vector/quantity boundary, not an allocated fraction of the whole-pack vector.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources:

###### Assembly service for one actual original four-cell LR6 pack (`component_assembly`)

Conditional verified component mode only; whole_mode_s=0 for the SAME original. Each actual component/service model binds its own original quantity and source vector, S/F/O/T conserved.

- Selected flow: Assembly service for one actual original four-cell LR6 pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_s n_s_assembly*F_s_assembly / Q; only component-mode original sources; verified actual supplier vector/quantity boundary, not an allocated fraction of the whole-pack vector.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources:

###### Receiving-gate delivery provision for one actual original four-cell LR6 pack (`component_inbound`)

Conditional verified component mode only; whole_mode_s=0 for the SAME original. Each actual component/service model binds its own original quantity and source vector, S/F/O/T conserved.

- Selected flow: Receiving-gate delivery provision for one actual original four-cell LR6 pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_s n_s_inbound*F_s_inbound / Q; only component-mode original sources; verified actual supplier vector/quantity boundary, not an allocated fraction of the whole-pack vector.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_components`
- Sources:

#### Outputs

##### Product flows

###### Retail service for one sealed four-cell LR6 alkaline battery pack (`service_output`)

One final-valid handover of a whole original pack, never four cell services.

- Selected flow: Retail service for one sealed four-cell LR6 alkaline battery pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sale`
- Sources:

### Process: Cleaning and controlled incident response (`hygiene`)

#### Inputs

##### Product flows

###### Tap water at store inlet (`water`)

Actual imported water; do not subtract internal reuse from an import meter.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_pool / Q; W_pool = attributed sum_i V_in_i*rho_in_i.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources: `jrc-retail-2013`

###### Aqueous neutral nonionic floor-cleaner formulation (`cleaner`)

Actual supplier formulation/SDS and batch density are mandatory; no generic concentration is assumed.

- Selected flow: Aqueous neutral nonionic floor-cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: C_pool / Q; actual formulation-origin kg consumed, excluding retained reusable formulation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Dry nonwoven cellulose wiping sheet (`wipe`)

Single identified material and construction; use and disposal are event based.

- Selected flow: Dry nonwoven cellulose wiping sheet
- Flow property / unit: Mass / kg
- Amount rule: D_pool / Q; actual dry sheet kg withdrawn.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Single-use nitrile protective glove (`glove`)

Conditional actual use including leak response; absent only with signed procedure and issue ledger.

- Selected flow: Single-use nitrile protective glove
- Flow property / unit: Mass / kg
- Amount rule: G_pool / Q; actual net glove kg withdrawn for included handling.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Dry sepiolite absorbent granules (`absorbent`)

Conditional actual approved leak response; do not treat unobserved loss as absorbed.

- Selected flow: Dry sepiolite absorbent granules
- Flow property / unit: Mass / kg
- Amount rule: A_pool / Q; actual net dry granule kg used.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Complete HDPE cleaner bottle and closure package (`cleaner_bottle`)

Supplier full bottle/body/closure/liner/label/adhesive BOM or verified whole package vector; if already included in cleaner supply, remove exact duplicate packaging vector here.

- Selected flow: Complete HDPE cleaner bottle and closure package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B_pool / Q; B_pool = sum_s bottle_count_s*formulation_consumed_s_pool/original_fill_kg_s; actual measured original fill and persistent source-ID fractions, not a nominal bottle size.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

#### Outputs

##### Waste flows

###### Collected spent aqueous floor-cleaning effluent (`effluent`)

Measure actual whole liquid at dispatch/drain; dissolved dirt and cleaner remain in carrier. No supply-balance deductions from metered discharge.

- Selected flow: Collected spent aqueous floor-cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: J_pool / Q; direct mode J_pool = attributed sum_i V_out_i*rho_out_i.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Spent wet cellulose wiping sheet with retained contamination (`wet_wipe`)

Includes retained water/formulation/electrolyte/dirt only as measured; not multiplied by formulation fraction.

- Selected flow: Spent wet cellulose wiping sheet with retained contamination
- Flow property / unit: Mass / kg
- Amount rule: H_pool / Q; actual whole wet consignment net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Discarded contaminated nitrile protective glove (`used_glove`)

Keep disjoint from mixed absorbent carriers; actual contamination changes treatment suitability.

- Selected flow: Discarded contaminated nitrile protective glove
- Flow property / unit: Mass / kg
- Amount rule: K_pool / Q; actual whole glove consignment net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Spent sepiolite absorbent containing alkaline-cell electrolyte (`used_absorbent`)

Electrolyte captured here is excluded from remaining cell mass and every other terminal carrier.

- Selected flow: Spent sepiolite absorbent containing alkaline-cell electrolyte
- Flow property / unit: Mass / kg
- Amount rule: U_pool / Q; actual whole contaminated granule consignment net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

###### Empty HDPE cleaner bottle with retained cleaner residue (`cleaner_container`)

Only the actual evidenced complete HDPE bottle/closure package admitted by treatment; its manufacture is separately in cp_hygiene supplier package inputs, not cleaner active mass.

- Selected flow: Empty HDPE cleaner bottle with retained cleaner residue
- Flow property / unit: Mass / kg
- Amount rule: Z_pool / Q; actual whole empty bottle and closure/residue net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hygiene`
- Sources:

### Process: Complete asset provision (`support`)

#### Inputs

##### Product flows

###### Complete service-life provision of the actual store premises (`premises`)

One actual identified whole-life package as defined by asset_coverage, not an undefined item proxy.

- Selected flow: Complete service-life provision of the actual store premises
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f_a_pool_v=e_a_pool_v/L_a_v while open, or e_a_pool_final/E_a at actual retirement; ONE homogeneous actual asset/model/BOM/vector only; lifetime version replacements apply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual shelving model (`shelving`)

One actual complete shelving object/BOM only; excludes every trolley and pallet jack; driver reserved usable storage m3*h.

- Selected flow: Complete service-life provision of one actual shelving model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f_a_pool_v=e_a_pool_v/L_a_v while open, or e_a_pool_final/E_a at actual retirement; ONE homogeneous actual asset/model/BOM/vector only; lifetime version replacements apply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of the actual checkout station (`checkout`)

One actual identified whole-life package as defined by asset_coverage, not an undefined item proxy.

- Selected flow: Complete service-life provision of the actual checkout station
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f_a_pool_v=e_a_pool_v/L_a_v while open, or e_a_pool_final/E_a at actual retirement; ONE homogeneous actual asset/model/BOM/vector only; lifetime version replacements apply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual manual hand trolley model (`manual_trolley`)

Conditional actual object only; signed topology/BOM/invoices must prove presence or absence. No pooled different models; manufacture/maintenance/end/transport only, on-site AC separate.

- Selected flow: Complete service-life provision of one actual manual hand trolley model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f=e_a_pool_v/L_a_v or final e_a_pool_final/E_a; one exact actual model/BOM/full vector; driver reserved rated payload kg*h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual manual pallet-jack model (`manual_pallet_jack`)

Conditional actual object only; signed topology/BOM/invoices must prove presence or absence. No pooled different models; manufacture/maintenance/end/transport only, on-site AC separate.

- Selected flow: Complete service-life provision of one actual manual pallet-jack model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f=e_a_pool_v/L_a_v or final e_a_pool_final/E_a; one exact actual model/BOM/full vector; driver reserved rated payload kg*h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual store network gateway model (`gateway_asset`)

Conditional actual object only; signed topology/BOM/invoices must prove presence or absence. No pooled different models; manufacture/maintenance/end/transport only, on-site AC separate.

- Selected flow: Complete service-life provision of one actual store network gateway model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f=e_a_pool_v/L_a_v or final e_a_pool_final/E_a; one exact actual model/BOM/full vector; driver reserved device-position*h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual store security-system model (`security_asset`)

Conditional actual object only; signed topology/BOM/invoices must prove presence or absence. No pooled different models; manufacture/maintenance/end/transport only, on-site AC separate.

- Selected flow: Complete service-life provision of one actual store security-system model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f=e_a_pool_v/L_a_v or final e_a_pool_final/E_a; one exact actual model/BOM/full vector; driver protected floor m2*h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete service-life provision of one actual administration-workstation model (`admin_asset`)

Conditional actual object only; signed topology/BOM/invoices must prove presence or absence. No pooled different models; manufacture/maintenance/end/transport only, on-site AC separate.

- Selected flow: Complete service-life provision of one actual administration-workstation model
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f=e_a_pool_v/L_a_v or final e_a_pool_final/E_a; one exact actual model/BOM/full vector; driver reserved device-position*h.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Fixed broadband access at the actual store subscriber port (`broadband`)

One actual provider service with verified full remote electricity/capital boundary; excludes every already-modeled on-site circuit/device and intersecting provider component by physical coverage matrix.

- Selected flow: Fixed broadband access at the actual store subscriber port
- Flow property / unit: Subscriber time / h
- Amount rule: H_net_pool / Q; actual subscriber hours attributed by fixed interval reserved-display-volume ownership; provider remote scope only.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_services`
- Sources:

###### Authorization processing of one attempted retail payment (`payment`)

One actual provider service with verified full remote electricity/capital boundary; excludes every already-modeled on-site circuit/device and intersecting provider component by physical coverage matrix.

- Selected flow: Authorization processing of one attempted retail payment
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_pay_pool / Q; sum_attempts payment_attempt_count*checkout_line_seconds_attempt_p/sum_all_b checkout_line_seconds_attempt_b, including refused/reversed attempts and every basket beneficiary; direct assignment only when one evidenced beneficiary. Known positive complete basket driver required.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_services`
- Sources:

###### Remote monitoring of the actual store security system (`monitoring`)

One actual provider service with verified full remote electricity/capital boundary; excludes every already-modeled on-site circuit/device and intersecting provider component by physical coverage matrix.

- Selected flow: Remote monitoring of the actual store security system
- Flow property / unit: Monitoring time / h
- Amount rule: H_security_pool / Q; actual monitoring hours attributed by protected floor m2*h share across all beneficiaries.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_services`
- Sources:

###### External bookkeeping processing for actual retail events (`bookkeeping`)

One actual provider service with verified full remote electricity/capital boundary; excludes every already-modeled on-site circuit/device and intersecting provider component by physical coverage matrix.

- Selected flow: External bookkeeping processing for actual retail events
- Flow property / unit: Processing time / h
- Amount rule: H_admin_pool / Q; actual provider processing hours for traced cases including failures/returns; common fixed service hours use reserved-display m3*h ownership.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_services`
- Sources:

### Process: New-product custody and residual dispatch (`residual`)

#### Inputs

##### Product flows

###### Diesel light-goods-vehicle road freight service for supplier returns (`supplier_return_transport`)

Actual complete freight contract includes vehicle/fuel/upstream/maintenance and observed empty return legs; excludes original supplier inbound and old/waste collection transport already in receiver contracts.

- Selected flow: Diesel light-goods-vehicle road freight service for supplier returns
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: R_return / Q; R_return = sum_t_s distance_t_s*reserved_capacity_t_s_pool/sum_b reserved_capacity_t_s_b; provider already-attributed consignment quantity used directly without this allocation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_return_transport`
- Sources:

#### Outputs

##### Product flows

###### Failed intact original unused four-cell LR6 alkaline battery pack retained externally (`external_pack`)

Non-characterized physical custody satellite; recipient, state and SAME S/F/O/T source responsibility are mandatory and independent of physical movement.

- Selected flow: Failed intact original unused four-cell LR6 alkaline battery pack retained externally
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: X_pool / Q; actual intact external retained pack count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources:

###### Partly used LR6 alkaline cells from revoked original-pack acceptance retained externally (`external_partial`)

Non-characterized custody satellite, original recipient and SAME original source S/F/O/T mandatory; original paperboard fate remains separately evidenced.

- Selected flow: Partly used LR6 alkaline cells from revoked original-pack acceptance retained externally
- Flow property / unit: Mass / kg
- Amount rule: X_partial / Q; actual evidenced external retained net cell kg; no new physical exit at revocation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources:

###### Spent LR6 alkaline cells from revoked original-pack acceptance retained externally (`external_spent`)

Non-characterized custody satellite, original recipient and SAME original source S/F/O/T mandatory; original paperboard fate remains separately evidenced.

- Selected flow: Spent LR6 alkaline cells from revoked original-pack acceptance retained externally
- Flow property / unit: Mass / kg
- Amount rule: X_spent / Q; actual evidenced external retained net cell kg; no new physical exit at revocation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources:

##### Waste flows

###### Discarded unused LR6 alkaline cells including measured residual contents (`new_cells`)

Actual stream only, with source/stock and receiver treatment evidence; direct dispatch mass is not corrected again by generation/stock balance.

- Selected flow: Discarded unused LR6 alkaline cells including measured residual contents
- Flow property / unit: Mass / kg
- Amount rule: C_cell / Q; actual dispatched consignment net kg once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `jrc-retail-2013`

###### Discarded printed paperboard battery consumer packaging (`pack_board`)

Actual stream only, with source/stock and receiver treatment evidence; direct dispatch mass is not corrected again by generation/stock balance.

- Selected flow: Discarded printed paperboard battery consumer packaging
- Flow property / unit: Mass / kg
- Amount rule: C_board / Q; actual dispatched consignment net kg once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `jrc-retail-2013`

###### Discarded corrugated transport carton (`transport_board`)

Actual stream only, with source/stock and receiver treatment evidence; direct dispatch mass is not corrected again by generation/stock balance.

- Selected flow: Discarded corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: C_carton / Q; actual dispatched consignment net kg once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `jrc-retail-2013`

###### Discarded direct thermal receipt paper including coating (`receipt_waste`)

Actual stream only, with source/stock and receiver treatment evidence; direct dispatch mass is not corrected again by generation/stock balance.

- Selected flow: Discarded direct thermal receipt paper including coating
- Flow property / unit: Mass / kg
- Amount rule: C_receipt / Q; actual dispatched consignment net kg once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `jrc-retail-2013`

###### Discarded partly used returned LR6 alkaline cells (`returned_partial`)

Retain the SAME original-pack source and revocation history; actual residual cell kg excludes separately captured electrolyte.

- Selected flow: Discarded partly used returned LR6 alkaline cells
- Flow property / unit: Mass / kg
- Amount rule: C_partial / Q; actual dispatched net kg disjoint from unused new_cells and post-consumer takeback.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources:

###### Discarded spent returned LR6 alkaline cells (`returned_spent`)

Retain the SAME original-pack source and revocation history; actual residual cell kg excludes separately captured electrolyte.

- Selected flow: Discarded spent returned LR6 alkaline cells
- Flow property / unit: Mass / kg
- Amount rule: C_spent / Q; actual dispatched net kg disjoint from unused new_cells and post-consumer takeback.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources:

### Process: Post-consumer takeback (`takeback`)

#### Inputs

##### Product flows

###### Complete service-life provision of the actual waste-battery collection bin (`takeback_bin`)

Actual bin and compatible liner, manufacture/maintenance/terminal package; exclude collected batteries, operation, collection transport and treatment.

- Selected flow: Complete service-life provision of the actual waste-battery collection bin
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: f_a_pool_v / Q; f_a_pool_v=e_a_pool_v/L_a_v while open, or e_a_pool_final/E_a at actual retirement; ONE homogeneous actual asset/model/BOM/vector only; lifetime version replacements apply.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_takeback`
- Sources:

##### Waste flows

###### Mixed portable household waste-battery consignment (`old_received`)

Actual collector-admitted mixture with composition/state evidence; old batteries never become new merchandise.

- Selected flow: Mixed portable household waste-battery consignment
- Flow property / unit: Mass / kg
- Amount rule: T_in_pool / Q; actual attributable received whole waste-carrier net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_takeback`
- Sources:

#### Outputs

##### Waste flows

###### Mixed portable household waste-battery consignment (`old_dispatched`)

Attach actual authorized collection transport/treatment once; no duplicate new-cell waste or virgin credit.

- Selected flow: Mixed portable household waste-battery consignment
- Flow property / unit: Mass / kg
- Amount rule: T_out_pool / Q; actual attributable dispatched whole waste-carrier net kg.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_takeback`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| denominator | service_output | Prospectively fix one same-SKU same-configuration reporting pool and retain every idle/closed/failed/zero-sale interval. Q is the count of DISTINCT original pack IDs with final-valid acceptance at the disclosed closure, not cell count, transaction count, revenue or gross handover. A returned original resold after revocation has one eventual service, with all attempts in its original pool. Later revocation removes that original ID from Q even without physical return; pure price adjustment with acceptance valid does not. Replace the original numerator/fates/denominator version using actual event dates; do not count corrections in a new cohort. Entirely zero-Q pools remain unnormalizable with raw totals and are merged only by a prospectively stated same-configuration rule. |  |
| shared | store_sale; hygiene; residual; takeback | Prefer physical subdivision/meters. Split each actual source j into measured disjoint active/idle/fixed numerator pools R_j_k, sum_k equal the parent in one source unit. Use one fixed same-unit driver per pool across ALL beneficiaries: lighting/premises=reserved floor m2*h; security active/continuous/standby=protected floor m2*h; hygiene=actual cleaned m2; storage=occupied/reserved shelf m3*h; checkout active=actual processing seconds including failed/reversed attempts; checkout idle/fixed/startup=reserved checkout-position seconds, whose interval ownership is resolved by each beneficiary actual reserved display m3 divided by all-beneficiary reserved display m3. The resulting seconds alone are the driver, not seconds+m3. Gateway/ICT active power=actual attributable transmitted bytes; gateway fixed/idle power=reserved subscriber-position*h with ownership resolved by those same interval display-volume shares. Administration active source=actual task seconds including returns/failures; admin fixed/idle device source=reserved workstation-position*h with that same display-reservation ownership. Telecom, monitoring and payment/bookkeeping provider service numerators follow their own cp_support_services drivers and exclude already assigned on-site power/capital. Allocate each R_j_k*d_j_k_p/sum_all_b d_j_k_b once; retain closed/failure/zero-sale periods. Known positive full drivers required; no source disappears for zero/unknown driver. Program-isolated takeback pools use only the takeback alpha, not this second driver. Subtract a submeter only if its physical circuit is contained in its parent; different IDs do not establish disjointness. | ghg-product-2011 |
| lifetime | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset; takeback_bin | Each asset card instance binds ONE actual asset a and one homogeneous model/BOM/full-package vector V_a_v in version v. For an open life use f_a_p_v=e_a_p_v/L_a_v; e is actual pool p exposure, L is evidenced expected TOTAL lifetime exposure over ALL actual beneficiaries in the exact same driver unit. At retirement use E_a=sum_all_p e_a_p and f_a_p_final=e_a_p/E_a for EVERY historical pool. E_a must be known positive; preserve zero-exposure periods and investigate unjustified unassigned exposures. Replace every prior allocation with f_new*V_new, recording DeltaV_a_p=f_a_p_new*V_a_new-f_a_p_old*V_a_old row by row only for matching exchange/property/unit and physical source boundary; do not add Delta as a fresh full manufacture. Revise all original pools and their Q versions. Cumulative fractions<=1 in every version and sum=1 at final closure. Different model/BOM/maintenance/full vectors cannot accumulate under one Item(s) card: create distinct actual model-specific cards/rows and source vectors before completeness. Premises driver=reserved usable m2*h; shelf=reserved usable storage m3*h; trolley/pallet jack=reserved rated payload kg*h; checkout/network/admin terminal=reserved device-position*h; security system=protected floor m2*h; bin=reserved admitted waste capacity kg*h. Idle/closed reservation stays with all actual reserved beneficiaries. Unknown lifetime, positive-total driver or full vector blocks completeness. | ghg-product-2011 |
| single_normalization | all inventory rows | Keep raw measured totals, attributed source numerators and final inventory distinct. Every final exchange is its attributed numerator/Q once. Restore any provider normalized module to its evidenced original raw denominator/pool/version, deduplicate exact source IDs against core and other modules, add only compatible same-flow/property/unit raw numerators and divide by the common Q once. Keep failed_pack and AC among core numerators. No kg+MJ sums, no raw+normalized sums, no manufacture fraction on top of a full-life package fraction and no waste-recycling substitution credit. Physical satellites external_pack/external_partial/external_spent are non-characterized custody records only; failed_pack is always an actual background-linked input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sale | store_sale | service_output; failed_pack | Original pack event and background ledger | pool_id; original_pack_id; SKU; actual GTIN; manufacturer; cell_model; cell_count4; paperboard_BOM; batch; receipt_event_id; event_date; gross_handover_id; acceptance_valid; revocation_date; physical_return_id; original_pool; S_s; F_s; O_s; T_s; original_pack_count_s; N_F; Q; supplier_vector_id; inbound_route; source_version; whole_mode_s; component_mode_original_ids; physical_overlap_matrix | At receiving inspect actual four-cell sealed pack and match supplier full BOM/vector, weigh actual received pack/cell/packaging samples on calibrated scale without catalogue defaults. Record each receipt/handover/return/revocation/refusal/loss separately at event time, original IDs and actual final recipient/state; reconcile stock and source vector through disclosed closure and subsequent return corrections. Aggregation calculation: Raw Q and N_F by source ID; final Q/Q and N_F/Q per reference flow, never count a revocation twice | Item(s); kg | Every event and closing reconciliation | Whole declared pool including closed/failure periods and later corrections | One SKU/store configuration; all original-pack sources | per reference flow | Supplier invoices/BOM/LCI boundary, calibrated sample records, dated acceptance/return logs and signed source-responsibility transfer |
| cp_energy | store_sale | ac | Meter topology and allocation ledger | pool_id; meter_id; parent_id; submeter_id; included_in_parent; start_reading; end_reading; kWh; R_j_k; d_j_k_pool; d_j_k_b; beneficiary_id; active_idle_fixed; E_pool; geography; year; voltage; provider; mix; source_id; source_device_serial; source_active_idle_fixed; checkout_processing_seconds_p; checkout_position_seconds; reserved_display_m3_p; reserved_display_m3_b; transmitted_bytes_p; transmitted_bytes_b; subscriber_position_hours; administration_task_seconds; administration_reserved_position_hours; protected_floor_m2_h; physical_overlap_matrix; takeback_program_source_id; takeback_alpha_applied | Read calibrated meters each interval at point of use, identify parent/submeter boundaries and all sale/hygiene/takeback circuits. Partition same-unit source pools and record every beneficiary driver with floor/shelf geometry and duration or checkout seconds. Record idle/closed operation and bills; independent meters are disjoint, not subtracted. Follow shared exactly: checkout active seconds, idle/fixed/startup reserved position-seconds with interval display-volume ownership; ICT active bytes and idle subscriber-position*h; admin active task seconds and idle reserved position*h. Keep source components separate and reconcile parent circuits; physical overlap matrix, not differing IDs, establishes disjointness. Takeback program-isolated source uses alpha only. Aggregation calculation: E_pool = sum_j_k R_j_k*d_j_k_pool/sum_b d_j_k_b; 3.6*E_pool/Q per reference flow | kWh; MJ | Interval metering and billing reconciliation | Every interval in pool including closed and zero-sale | Full relevant store and shared-building circuits/all beneficiaries | per reference flow | Calibration, circuit map, bills, driver logs and source-provider boundary |
| cp_paper | store_sale | receipt | Paper stock and WIP source ledger | pool_id; source_id; roll_id; supplier_spec; net_paper_kg; core_kg; separate_wrap_kg; opening_blank; receipts; closing_blank; printed_WIP_open; printed_WIP_close; WIP_original_electricity; customer_handover_kg; discard_kg; P_pool; paper_source_kg_l; paper_responsibility_l_pool; unused_return; blank_transfer_in; blank_transfer_out; source_version; original_delivery_vector; first_consumption_source_fraction; stock_responsibility_version; physical_overlap_matrix | Weigh actual direct-thermal paper on calibrated scale excluding measured cores and separate wrap/carton, retaining coating. Record printer withdrawals and customer/cancelled/duplicate receipts. Blank roll stock and already-printed WIP are separate. Carry original paper AND actual printing-electricity source IDs across periods and replace old pool allocations on later WIP use, never charge twice. Actual cores/wrap require their own named cards unless supplier provides verified return with continuing responsibility. Paper_source_kg_l is actual net original paper kg; paper_responsibility_l_pool is its evidenced pool fraction, cumulative across handover/discard/WIP recipients<=1. Opening blank+receipts+blank transfers in=closing blank+unused return+blank transfers out+actual printing withdrawals; printing withdrawals+opening printed WIP=customer handover+discard+closing printed WIP, each source preserved. Independently billed material/package delivery joins the original source vector before applying its actual first-consumption/stock fractions; preserve WIP/retained source versions and physical route overlaps even with different source IDs. Aggregation calculation: P_pool = attributed net paper consumption after exclusive WIP source transfer; P_pool/Q per reference flow; paper + electricity source responsibility conserved | kg | Each roll/event and pool close | Pool plus cross-period WIP history | Actual printer and every beneficiary checkout | per reference flow | Scale calibration, roll/BOM invoices, printer logs, WIP versions and customer/discard reconciliation |
| cp_hygiene | hygiene | water; cleaner; wipe; glove; absorbent; effluent; wet_wipe; used_glove; used_absorbent; cleaner_container; cleaner_bottle | Cleaning and incident full-carrier/source ledger | reconstruction_full_liquid_inputs; dissolved_solids; opening_liquid_stock; closing_liquid_stock; source_pool_carrier_exports; evaporation; mode_selector; pool_id; event_id; source_id; batch; supplier_formulation; SDS; bottle_full_BOM; whole_package_vector; source_duplicate_ids; package_count; bottle_count_s; formulation_consumed_s_pool; original_fill_kg_s; bottle_source_fraction_s_pool; B_pool; V_in_i; rho_in_i; V_out_i; rho_out_i; temperature; concentration; opening_formulation; formulation_added; formulation_to_effluent; formulation_to_wipe; formulation_to_glove; formulation_to_absorbent; formulation_container_dispatch; formulation_retained; unused_return; rinse_water; dirt; captured_electrolyte; dry_sheet_kg; glove_net_kg; dry_granule_kg; carrier_net_kg; W_pool; C_pool; D_pool; G_pool; A_pool; J_pool; H_pool; K_pool; U_pool; Z_pool; cleaned_m2; all_beneficiary_cleaned_m2; receiver; waste_stock; actual_leak; escape_destination; original_delivery_vector; first_consumption_source_fraction; stock_responsibility_version; physical_overlap_matrix | At each actual clean/incident weigh inputs and separately whole wet terminal carriers on calibrated scales; read actual inlet/discharge meters and measured batch-temperature densities. Identify real neutral nonionic formulation and whole bottle/closure/BOM; split supplier packaging source vector only with evidence. Direct liquid mode is V_out*rho_out without supply deductions. If discharge unmetered, exclusively use a full-liquid kg balance with measured all imported liquids, dissolved solids, whole liquid opening/closing stocks, captured exports, evaporation and storage; no water-only volume reconstruction. Record measured source-origin formulation destinations separately from carrier kg and independently added rinse water/dirt. Observe actual leakage/capture and final fate; no unmeasured elementary flux. Independently billed material/package delivery joins the original source vector before applying its actual first-consumption/stock fractions; preserve WIP/retained source versions and physical route overlaps even with different source IDs. Aggregation calculation: Attribute raw same-unit totals by direct use or cleaned area; each named pool total/Q per reference flow. Opening formulation+added = mutually exclusive final effluent/wipe/glove/absorbent/container-dispatch/retained/unused-return source-origin kg; reused intermediate states replaced, never added twice. Whole carriers measured independently. Allocate each original bottle manufacturing vector by its measured formulation consumed/original fill fraction across all users/periods; cumulative<=1, final residual/revisions replace prior versions. Allocate the actual bottle terminal-carrier mass to those same source users once, with dispatch mass independent of source formulation residue; no second manufacturing fraction. Imported complete liquid already includes its dissolved solids; additional dissolved_solids in reconstruction means only independently added dry source matter not already counted. | kg; m3; kg/m3; m2 | Every event and monthly/pool reconciliation | All operation/idle incidents and retained/reused stocks across pools | Store hygiene and actual beneficiaries; leak/new/old stock identities separate | per reference flow | Calibration, density/temperature, SDS, full bottle BOM/LCI source dedup, cleaning/incident log, receiver records and source/whole-carrier balances |
| cp_assets | support | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset | Persistent complete-asset exposure register | asset_id; model; package_BOM; source_id; source_version; installation; maintenance_events; replacement_model; included_EOL; exclusions; e_a_pool; L_a; beneficiary_id; reserved_usable_m2; reserved_capacity_m3; operating_positions; reserved_hours; lifetime_exposure; cumulative_fraction; residual; previous_allocations; revised_allocations; retirement_date; asset_serial; homogeneous_vector_hash; e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; V_a_old; V_a_new; f_a_p_old; f_a_p_new; DeltaV_a_p; rated_payload_kg; device_positions; protected_floor_m2; independent_transport_vector; asset_transport_source_version; physical_overlap_matrix | Verify ONE actual serial/model/BOM/full vector per card instance; separate different model/BOM/vector rows. Shelf excludes every separately listed manual handling object. Measure the actual prescribed exposure by asset: premises usable m2*h; shelf usable m3*h; manual trolley/pallet jack rated payload kg*h; checkout/gateway/admin reserved device-position*h; security protected m2*h. Include all idle/closed reserved beneficiaries. Independently sourced delivery/maintenance/end transport is measured and first bound to this same asset source/version, then included in V_a_v. Open f=e/L; at actual retirement E=sum_all actual beneficiary exposure and f=e/E for all historical pools. Replace every prior pool vector with f_new*V_new and record Delta=f_new*V_new-f_old*V_old by matched physical exchange/property/unit; reconcile every original Q version, cumulative<=1 and final sum1. No full current-period charge for independent freight or model revision. Aggregation calculation: One actual asset/card uses f_a_pool_v/Q, with open e/L and retirement e/E; all historical f_new*V_new-f_old*V_old replacements, final sum1. | Item(s); m2*h; m3*h; kg*h; device-position*h | Every exposure interval, maintenance/revision and retirement | Full lifetime and current pool, never restart ledger | Actual separately bounded premises, shelf, manual trolley, manual pallet jack, checkout, gateway, security or administration model; all lifetime beneficiaries | per reference flow | Signed complete lifecycle model/BOM boundary, survey, capacity/hour logs, invoices, maintenance/EOL and versioned full allocation ledger |
| cp_residual | residual | external_pack; new_cells; returned_partial; returned_spent; pack_board; transport_board; receipt_waste; external_partial; external_spent | New-product custody and waste dispatch | pool_id; original_pack_id; source_id; event_id; receipt_date; gross_handover; customer_return; supplier_return; internal_in; internal_out; condemnation; unexplained_loss; opening_goods; closing_goods; cell_count; pack_BOM; held_waste_open; held_waste_generated; held_waste_close; dispatch_id; net_kg; receiver; treatment; X_pool; C_cell; C_partial; C_spent; X_partial; X_spent; C_board; C_carton; C_receipt; captured_electrolyte; external_state; recipient; continuing_responsibility; inbound_packaging_source; receiver_transport_vector; empty_return_coverage; necessary_container_life_vector; physical_overlap_matrix | Record each physical event once separately from acceptance. Weigh actual waste consignments net of external transport container with calibrated scale, identify remaining cell contents and disjoint captured electrolyte, pack paperboard and carton; use actual receiver treatment/transport contract. Intact pack discarded as a whole requires a matching whole-pack waste card before completeness, or evidenced safe separation into actual measured cell/board carriers. Supplier returns need actual custody/recipient/transport and same original background transfer, not another input. Unknown material or mixed hazardous carrier needs its actual admitted named card. Receiver vectors explicitly cover actual dispatch transport/empty return, treatment and necessary container life. Match physical routes/stages/objects/time, even differing IDs; actual missing coverage needs a named measured additional card before completeness. Aggregation calculation: Attribute C_cell/C_partial/C_spent/C_board/C_carton/C_receipt and X_pool from actual events, divide each by Q per reference flow once; held-waste opening+generation=dispatch+closing independently validates direct dispatch | Item(s); kg | Every custody event/dispatch and pool-close | Original history and held waste until actual dispatch | Actual new-product/receipt waste and external recipients | per reference flow | Calibrated net weigh tickets, new-cell state, transport/treatment manifests, source ownership, stock event partition and signed external receipt |
| cp_takeback | takeback | old_received; old_dispatched; takeback_bin | Old-battery takeback and bin lifetime ledger | pool_id; consignment_id; program_id; mixture_chemistry; actual_state; collector_acceptance; opening_waste_kg; received_net_kg; dispatched_net_kg; closing_waste_kg; receiver; transport_treatment_contract; obligation_beneficiary; allocation_rule; T_in_pool; T_out_pool; bin_id; bin_full_BOM; liner_spec; bin_lifecycle_vector; source_id; e_bin_pool; L_bin; reserved_capacity_kg; reserved_hours; lifetime_exposure; previous_allocations; revised_allocations; residual; reserved_admitted_capacity_kg_p; reservation_hours_p; d_p; d_b; alpha_p; whole_received_kg; whole_dispatched_kg; program_operation_source_total; collector_contract_vector; actual_direct_beneficiary; E_a; e_a_pool_final; f_a_pool_v; V_a_old; V_a_new; f_a_p_old; f_a_p_new; DeltaV_a_p; homogeneous_vector_hash; bin_transport_vector; bin_source_version; physical_overlap_matrix; e_a_pool_v; L_a_v | Weigh actual old mixed battery receipts/dispatches separately using calibrated scale; inspect collector contract admitting actual mixture/state and signed responsibility for bundled operation. Reconcile opening+received=dispatch+closing without new-stock merging. Survey absence with complete program/event ledger if no takeback. Obtain full model-specific bin/liner manufacture-maintenance-EOL package, exclude collected contents and collection/treatment. Track all beneficiaries reserved kg*h and full lifetime revisions/residual as lifetime rule. Extra actual containers/treatment not in contract require additional named card. Apply the PCR-fixed takeback_boundary hierarchy: direct segregated event/source to its evidenced beneficiary, otherwise d_p=sum reserved admitted kg*reservation h and alpha=d_p/sum_all_b d_b across every retail/program/standalone beneficiary including idle/no-sale. Attribute program-isolated operation, actual whole-carrier receiving/dispatch and full collector transport/treatment numerator by alpha ONCE; raw stock stays whole. Do not apply handler-time/general shared driver again. Bin ONE actual model/full vector uses its own lifetime e/L or final e/E over all reserved kg*h directly, including independent bin delivery/maintenance/end freight; update every historical vector by f_new*V_new-f_old*V_old, no extra alpha and no current-Q freight charge. Aggregation calculation: Shared program physical/service numerators receive alpha once, then /Q; direct beneficiary mode exclusive; one model bin f/Q uses lifetime e/L or final e/E with every historical vector replacement and no alpha. | kg; Item(s); kg*h | Every receipt/dispatch, interval and lifetime revision | All takeback and stock periods including zero-sale | Actual program/receiver and all bin/operation beneficiaries | per reference flow | Calibration, collector mixture acceptance, treatment/transport manifest, signed obligation/allocation, bin BOM/model and lifetime ledger |
| cp_return_transport | residual | supplier_return_transport | Supplier-return freight segment record | pool_id; trip_id; segment_id; distance_t_s; reserved_capacity_t_s_pool; reserved_capacity_t_s_b; capacity_unit; actual_stationary_idle_hours; actual_idle_fuel_in_contract; empty_leg; idle_reservation; beneficiary_id; provider_attribution_mode; provider_quantity; R_return; Q; full_contract_boundary; original_pack_id; source_id; duplicate_transport_ids; binding_payload_mass_evidence; binding_cube_loading_position_evidence; nonbinding_other_constraint_evidence; raw_mode_eligibility; provider_physical_allocation; physical_overlap_matrix | Read actual vehicle odometer/GPS and signed consignment/reservation logs on each supplier-return segment. Record capacity in one kg or m3 basis per segment, all beneficiaries, empty legs and stationary reservation duration. Verify contract covers actual diesel vehicle/fuel/upstream/maintenance and empty return; separate provider-attributed and raw-segment modes, remove exact duplicated original inbound/waste/takeback contract source IDs. Allocation of a trip with an unknown/zero full driver is unresolved. Fixed capacity unit is kg ONLY for proved mass-binding/cube-nonbinding, usable m3 ONLY for proved cube-binding/mass-nonbinding. Both/unknown constraints forbid raw mode; provider already-attributed actual consignment vector with verified physical allocation or incomplete. Record actual full-trip idle fuel and empty-route coverage. Different source IDs do not prove transport disjointness. Aggregation calculation: per reference flow | vehicle*km; kg; m3; h | Every actual trip/segment and pool close | All return segments including failed/empty/idle | Actual supplier-return freight and all consignment beneficiaries | per reference flow | Odometer/GPS, contract and source-boundary checklist, capacity/reservation logs and receiver custody |
| cp_components | store_sale | component_cell; component_board; component_assembly; component_inbound | Verified original supplier component-vector ledger | original_pack_id; original_source_s; whole_mode_s; supplier_component_vector_id; component_model; component_BOM; component_unit; n_s_cell; F_s_cell; S_s_cell; O_s_cell; T_s_cell; n_s_board; F_s_board; S_s_board; O_s_board; T_s_board; n_s_assembly; F_s_assembly; S_s_assembly; O_s_assembly; T_s_assembly; n_s_inbound; F_s_inbound; S_s_inbound; O_s_inbound; T_s_inbound; original_route; consignment; actual_empty_idle_coverage; reconstructed_original_vector; whole_original_vector; physical_overlap_matrix; Q | Read actual signed supplier component/assembly/inbound inventories with original quantities and units; verify one model-specific vector per actual card. For cell originals n_s_cell is actual four-cell source quantity; paperboard is one actual COMPLETE printed/coated/adhesive package, not pure body mass. Verify exact vector sum reconstructs full original pack and receiving-gate boundary without missing assembly or freight. Track component original S/F/O/T and actual recipient through every state; exclude same original whole-pack F through whole_mode_s=0. No mass ratio decomposes a whole environmental vector. Different actual vectors need distinct authored cards before completeness. Aggregation calculation: per reference flow | Item(s) | Each original/source change and pool closure | All originals in component mode and later corrections | Actual source original, all supplier vectors and their physical boundaries | per reference flow | Signed supplier vectors/BOM/quantities, reconstruction with matched exchange/property/unit, original gate transport and source-state conservation |
| cp_support_services | support | broadband; payment; monitoring; bookkeeping | Actual ICT/payment/security/administration provider boundary ledger | pool_id; interval_id; provider_id; contract; service_model; source_vector; physical_overlap_matrix; subscriber_hours; reserved_display_m3_p; reserved_display_m3_b; H_net_pool; payment_event_id; original_pack_id; payment_attempt_count; checkout_line_seconds_attempt_p; checkout_line_seconds_attempt_b; attempted_authorizations; N_pay_pool; protected_floor_m2_h_p; protected_floor_m2_h_b; monitoring_hours; H_security_pool; admin_case_id; processing_seconds_p; processing_seconds_b; common_fixed_hours; H_admin_pool; idle_closed_hours; presence_absence_evidence; all_beneficiaries; Q; reserved_display_m3_h_p; reserved_display_m3_h_b | Read actual topology, provider contracts/invoices, activity logs and full remote electricity/capital vector boundaries. Separate active event sources from fixed/idle sources physically and by period. Broadband actual subscriber hours use each interval reserved display m3 share across all beneficiaries, including idle/closed reservations. Payment uses actual attempted authorizations linked to original IDs, refused/reversed included; each shared basket attempt is attributed by actual measured checkout line-processing seconds for this pool divided by ALL basket beneficiaries line-processing seconds, known positive, once. Unavailable basket timing leaves allocation incomplete; do not count one whole attempt for every original pack. Monitoring hours use protected floor m2*h shares. Bookkeeping direct actual case seconds include returns/failures; common fixed provider hours use reserved display m3*h shares, never add seconds and m3*h. Full denominator known positive. Program-isolated takeback provider sources instead use takeback alpha once. Identify same device/circuit/route/function intersections even under different source IDs; remove overlaps only using verified original provider subvector, else incomplete. Signed absence requires full period topology/contract/activity evidence. Aggregation calculation: per reference flow | h; Item(s) | Every event/interval and billing reconciliation | Full pool including idle/closed/failed/zero-sale | All actual provider services and all benefiting cohorts/functions | per reference flow | Contracts/invoices, event/time logs, physical scope and actual capital/power overlap matrix, source subvector evidence and absence survey |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | service_output | Q = count(distinct original_pack_id where acceptance_valid at closure); re-open original pool on late change, replace rather than subtract revocations again. | original_pack_id; acceptance_valid; revocation_date; original_pool; cp_sale | Q |  |
| failed_background | failed_pack | N_F=sum_s whole_mode_s*original_pack_count_s*F_s; inventory=N_F/Q; whole_mode_s=0 for every component-mode original. | whole_mode_s; original_pack_count_s; F_s; Q; supplier_vector_id; cp_sale; cp_components | N_F/Q |  |
| electricity | ac | E_pool = sum_j_k R_j_k*d_j_k_pool/sum_b d_j_k_b; inventory =3.6*E_pool/Q; 1kWh=3.6MJ. | R_j_k; d_j_k_pool; d_j_k_b; Q; cp_energy | MJ per reference flow | ghg-product-2011 |
| asset_fraction | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset | For ONE actual homogeneous asset/vector: open f_a_pool_v=e_a_pool_v/L_a_v; retirement E_a=sum_all_p e_a_pool_final and f_a_pool_final=e_a_pool_final/E_a; inventory=f_a_pool_v/Q. Replace EVERY historical attributed vector using DeltaV_a_p=f_a_p_new*V_a_new-f_a_p_old*V_a_old by identical exchange/property/unit and actual physical boundary; independent asset transport joins V_a before this fraction. Distinct models/vectors require distinct cards. | e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; f_a_p_new; V_a_new; f_a_p_old; V_a_old; DeltaV_a_p; Q; independent_transport_vector; asset_transport_source_version; cp_assets | Item(s) per reference flow | ghg-product-2011 |
| water_direct | water | W_pool = attributed sum_i V_in_i*rho_in_i; inventory = W_pool/Q; actual density at recorded temperature. | V_in_i; rho_in_i; temperature; Q; cp_hygiene | kg per reference flow |  |
| effluent_direct | effluent | J_pool = attributed sum_i V_out_i*rho_out_i in direct mode; inventory=J_pool/Q; evaporation/storage are independent supply QA only. Reconstruction mode exclusively uses measured full-liquid kg inputs plus dissolved solids plus opening liquid stock minus closing liquid stock minus other whole-carrier exports minus evaporation, without counting new external dry wipe/container mass as source-liquid export. | V_out_i; rho_out_i; temperature; Q; cp_hygiene; reconstruction_full_liquid_inputs; dissolved_solids; opening_liquid_stock; closing_liquid_stock; source_pool_carrier_exports; evaporation | kg per reference flow |  |
| material_totals | receipt; cleaner; wipe; glove; absorbent; cleaner_bottle | P_pool=sum_l paper_source_kg_l*paper_responsibility_l_pool; B_pool=sum_s bottle_count_s*formulation_consumed_s_pool/original_fill_kg_s; each inventory equals its separately measured and attributed P_pool/C_pool/D_pool/G_pool/A_pool/B_pool numerator divided by Q once; retain corresponding property/unit and exclusive supplier packaging dedup. | P_pool; C_pool; D_pool; G_pool; A_pool; B_pool; paper_source_kg_l; paper_responsibility_l_pool; bottle_count_s; formulation_consumed_s_pool; original_fill_kg_s; Q; source_duplicate_ids; cp_paper; cp_hygiene | Separate kg or Item(s) per reference flow |  |
| terminal_carriers | wet_wipe; used_glove; used_absorbent; cleaner_container; new_cells; returned_partial; returned_spent; pack_board; transport_board; receipt_waste | Each actual dispatch inventory = its separately measured attributed whole net-carrier numerator H_pool/K_pool/U_pool/Z_pool/C_cell/C_partial/C_spent/C_board/C_carton/C_receipt divided by Q. No second stock correction or composition fraction. | H_pool; K_pool; U_pool; Z_pool; C_cell; C_partial; C_spent; C_board; C_carton; C_receipt; Q; cp_hygiene; cp_residual | Separate kg per reference flow |  |
| takeback_totals | old_received; old_dispatched; takeback_bin | d_p=sum_intervals reserved_admitted_capacity_kg_p*reservation_hours_p; alpha_p=d_p/sum_all_b d_b; T_in_pool=whole_received_kg*alpha_p and T_out_pool=whole_dispatched_kg*alpha_p for shared program, exclusive with evidenced direct beneficiary mode. Inventory old carrier=T_in_pool/Q or T_out_pool/Q. Bin ONE model vector uses f=e/L or final e/E directly and f/Q; EVERY historical vector replacement Delta=f_new*V_new-f_old*V_old, no second alpha. Program operation/collector service source numerators receive alpha once, not a handler/general-store second driver. | reserved_admitted_capacity_kg_p; reservation_hours_p; d_p; d_b; alpha_p; whole_received_kg; whole_dispatched_kg; actual_direct_beneficiary; T_in_pool; T_out_pool; program_operation_source_total; collector_contract_vector; e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; f_a_p_new; V_a_new; f_a_p_old; V_a_old; DeltaV_a_p; Q; bin_transport_vector; cp_takeback | Separate kg and Item(s) per reference flow |  |
| external_custody | external_pack | Inventory=X_pool/Q for evidenced intact unused original packs retained externally; source responsibility independently remains S/F/O/T and no characterization or automatic waste. | X_pool; Q; recipient; external_state; continuing_responsibility; cp_residual | Item(s) per reference flow |  |
| supplier_return | supplier_return_transport | Raw-segment mode R_return=sum_t_s distance_t_s*reserved_capacity_t_s_pool/sum_b reserved_capacity_t_s_b; attributed-provider mode R_return=provider_quantity, exclusively; inventory=R_return/Q. Empty/idle reservations stay in allocation with actual distance and reservation evidence. Raw mode is eligible only under PCR-fixed mass-binding/cube-nonbinding kg or cube-binding/mass-nonbinding usable m3 evidence; both/unknown constraints require verified provider-attributed mode or incomplete. | distance_t_s; reserved_capacity_t_s_pool; reserved_capacity_t_s_b; provider_quantity; provider_attribution_mode; Q; cp_return_transport; binding_payload_mass_evidence; binding_cube_loading_position_evidence; nonbinding_other_constraint_evidence; raw_mode_eligibility; provider_physical_allocation; actual_stationary_idle_hours; actual_idle_fuel_in_contract | vehicle*km per reference flow |  |
| external_used | external_partial; external_spent | Each external state inventory=X_partial/Q or X_spent/Q separately, only actual evidenced net cell kg; same original source ownership and no extra physical exit at revocation. | X_partial; X_spent; Q; recipient; external_state; continuing_responsibility; cp_residual | Separate kg per reference flow |  |
| component_background | component_cell; component_board; component_assembly; component_inbound | Each component c input=sum_s n_s_c*F_s_c/Q in its actual original Item(s) unit, with per-original S/F/O/T sum1. Sum verified component original vectors by matched exchange/property/unit to reconstruct the whole original supplier receiving-gate vector; whole_mode_s=0 excludes same original whole-pack F. Component S downstream=sum_s n_s_c*S_s_c/Q times SAME component vector; O/T retain named responsibility. No mass-based vector split. | whole_mode_s; n_s_cell; F_s_cell; S_s_cell; O_s_cell; T_s_cell; n_s_board; F_s_board; S_s_board; O_s_board; T_s_board; n_s_assembly; F_s_assembly; S_s_assembly; O_s_assembly; T_s_assembly; n_s_inbound; F_s_inbound; S_s_inbound; O_s_inbound; T_s_inbound; Q; supplier_component_vector_id; cp_components | Separate Item(s) per reference flow |  |
| support_activity | broadband; payment; monitoring; bookkeeping | H_net_pool=sum_intervals subscriber_hours*reserved_display_m3_p/sum_all_b reserved_display_m3_b; N_pay_pool=sum_attempts payment_attempt_count*checkout_line_seconds_attempt_p/sum_all_b checkout_line_seconds_attempt_b; H_security_pool=monitoring_hours*protected_floor_m2_h_p/sum_all_b protected_floor_m2_h_b; H_admin_pool=actual direct case processing_seconds_p/3600 plus common_fixed_hours*reserved_display_m3_h_p/sum_all_b reserved_display_m3_h_b, with physically disjoint direct/fixed sources. Each named service numerator/Q once; program-isolated takeback instead alpha once. | subscriber_hours; reserved_display_m3_p; reserved_display_m3_b; payment_event_id; original_pack_id; payment_attempt_count; checkout_line_seconds_attempt_p; checkout_line_seconds_attempt_b; attempted_authorizations; monitoring_hours; protected_floor_m2_h_p; protected_floor_m2_h_b; processing_seconds_p; common_fixed_hours; reserved_display_m3_h_p; reserved_display_m3_h_b; H_net_pool; N_pay_pool; H_security_pool; H_admin_pool; Q; cp_support_services | Separate h or Item(s) per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| specification | service_output; failed_pack | Confirm four actual unused LR6 alkaline cells, original paperboard package full BOM and SKU/GTIN; supplier lot supersedes representative catalogue. No catalogue mass/capacity used as measured flow. | Supplier signed specification/BOM, receiving inspection and calibrated measurements |
| reconstruction_inputs | effluent | If exclusive reconstruction used, record reconstruction_full_liquid_inputs; dissolved_solids; opening_liquid_stock; closing_liquid_stock; source_pool_carrier_exports; evaporation as measured kg with source IDs and uncertainty. Direct measurement and reconstruction cannot be mixed. | cp_hygiene full-liquid kg balance and mode selector |
| coverage | all processes | Signed absence/presence survey for route energy, bag/wrap, paper cores, additional transport, actual incidents and takeback; absence is evidence, unknown blocks completeness. Unbound rows require direct-read identity and matched supplier/treatment boundary. | Site diagrams, invoices, program/custody logs, direct-read records and row-level completion register |
| balances | all processes | Reconcile independent physical goods/held waste/old battery/source-origin cleaning balances and S/F/O/T, original background conservation, same-unit meter totals and persistent asset histories. Record explanations and uncertainty for discrepancies rather than forcing a zero. | Event partition, calibrated weights, all-beneficiary allocation and versioned raw ledgers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | all inventory rows | Before a complete dataset bind each unverified row to an actual Tiangong flow and matching property/unit, type, state and provider/treatment boundary. Preserve historical identity observation limits. Confirm AC supplier geography/year/voltage/mix separately; its generic UUID does not supply a grid model. Exact product specification, paperboard full BOM and pack-count service remain mandatory even with a generic flow UUID. |  |
| closure_gate | all processes | Reconcile goods-only count, new-cell count, source ownership, all waste stocks/dispatch, receipt paper, cleaning formulation-origin mass and all-beneficiary meter allocation. Counts, kg and service Q never substitute each other. Unknown is not zero; missing absence evidence, unresolved leak, provider gap, unsupported asset exposure or denominator<=0 prevents complete normalized data. Record actual uncertainty and calibration; no invented numerical acceptance limits. |  |
| additional_gate | all processes | Every actual additional material, energy, package, repair, transport or emission must have one named state-specific atomic card, executable raw protocol and calculation, responsibility and aligned Chinese before claiming completeness. Presence/absence survey covers all conditional cards including no-sale periods and third-party takeback. Candidate methodology is not scientific approval, legal compliance, a whole-product footprint or complete GHG-standard conformity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Incremental service for specified actual pack/route plus explicit downstream S merchandise production/inbound; compatible same-boundary comparisons |
| excluded_use | Whole product footprint, battery electricity supply, entire62159 or regulatory conformity without additional evidence |
| required_metadata | SKU and actual GTIN; cell model and chemistry LR6 alkaline; exactly four unused cells; original paperboard packaging full BOM; lot/date and actual mass records; actual mixed assortment evidence; walk-in ambient electric-only route survey; receiving gate and original supplier vector; pool/closure and return horizon; Q and all-beneficiary drivers; S/F/O/T source ownership; old-battery program and disjoint carrier states; provider/treatment/source versions |
| required_quality_disclosure | Unbound rows, original source vectors, full asset/takeback model boundaries, uncertainty and Q/late-correction versions |
| update_trigger | SKU/BOM/route/provider/asset lifetime/takeback/acceptance or source-boundary change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62159 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62159 | CPC3.0 scope only:361,383,464; narrower selection does not imply whole-leaf methodology |
| varta-catalogue-2025 | handbook | VARTA General Catalogue2025/26 pages19 and126–127; https://www.varta-ag.com/fileadmin/varta/consumer/downloads/general-catalogue/en/9018212241_EN_GC_AW2025-26_v01_SS-LQ_w-o-SHD.pdf | Representative4906 LR6 four-cell consumer order04906 121414 and paperboard route; specifications only, no supplier LCI/actual weight |
| jrc-retail-2013 | official_guidance | JRC EUR25998EN2013 Best Environmental Management Practice in the Retail Trade Sector; PDF pages18–19,149–150,351,361–362; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail energy, lighting and waste coverage context only; no benchmark quantity adopted |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapter9 printed63/PDF65; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision before causal allocation; PCR equations are declared foreground design, no complete-standard conformity claim |
