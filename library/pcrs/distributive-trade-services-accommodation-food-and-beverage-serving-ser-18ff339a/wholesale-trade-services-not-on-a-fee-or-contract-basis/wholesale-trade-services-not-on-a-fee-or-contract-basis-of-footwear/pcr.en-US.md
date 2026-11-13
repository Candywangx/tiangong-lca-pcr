---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-footwear
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of boxed leather-upper shoes with PU components

## 1. Scope and Applicability

This PCR defines ordinary ambient own-account wholesale of new manufacturer-boxed non-sports leather-upper shoes with evidenced PU sole components, from actual ownership receipt to accepted business-buyer resale. Actual style/size system/colour, left/right identities and matching, complete pair/box contents, material configuration, net footwear versus inherited packaging, manufacture/component dates and prior history, ambient/quality conditions and contract gate must be declared. Counted commercial service is distinct from footwear pairs or pieces.

Exclude shoe/component manufacture, sports/protective/special footwear, replacement soles, repair/polishing/chemical treatment, use/wear demonstrations, automatic destructive testing, reconditioning or repacking, retail/agency and storage-only. Real performed inspection or sample testing retains actual sampled items, returned/removed state, resource/treatment ownership and uncertainty. A changed operated preservation or treatment requires new scope/module review; inherited boxes and ambient placement do not constitute such an intervention.

All completed shoe/component/inherited box/insert manufacture including lost upstream remains outside this service add-on. Link actual complete originally boxed shoe-gate assigned demand and identical existing stage/loss coverage once outside before whole-chain readiness; actual physical handling and receiving treatment remain included once. Historical SATRA technical articles support qualitative material/package and PU-history distinctions only, not universal age limits, legal thresholds, tests or emission/loss factors.

Performed sampling here means representative non-wear measurement or laboratory material specimens, with real preparation/receiver scope. Wear/use testing and product treatment are not hidden inside provider services; an actual commissioned operation of that kind needs a new reviewed scope before inventory construction.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-footwear |
| classification_refs | CPC3 61034; narrower boxed leather-upper non-sports shoe wholesale within293 |
| covered_products | Own-account ambient B2B commercial service for new originally boxed leather-upper shoes with actual PU sole components |
| excluded_products | Other sole-material substitution without evidence; manufacturing/repair/treatment/wear/repacking; sports/protective/special shoes; retail/agency/storage-only |
| representative_product | Actual style/size matched new boxed shoe lot with complete material/date/history/condition evidence through an accepted consignment |
| production_route | Complete manufacturer boxed-shoe gate -> ownership receipt/ambient stock/handling -> accepted B2B resale |
| market_state | Counted physical service; footwear pairs/singles/materials/boxes remain non-exchange merchandise audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account boxed leather-upper PU-component shoe wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual new boxed matched shoes, component/material/date/condition/quantity and buyer acceptance, no automatic future wear-life guarantee |
| How long or cycle | Real receipt/ambient holding/handling/acceptance interval, separately recording earlier component/manufacture history, stock/reporting and asset phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed leather-upper PU-component shoe wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; style_size_system_colour; matched_left_right_pair_ids; actual_piece_pair_box_quantities; leather_upper_and_PU_component_evidence; complete_supplier_boxed_gate; sole_component_manufacture_history; shoe_manufacture_release_history; net_shoe_pack_tare_state; actual_moisture_method_condition; actual_temperature_humidity_exposure; actual_start_end_duration_unit; quality_sample_acceptance_reversal; source_gate_assigned_demand_loss_owner |

N>0 counts unique actual final accepted commercial consignments after reversals. A pair/two singles/one box is not one service consignment; matching and physical counts are separately audited, with failed/unfinished cross-period resources retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| consignment_count | accepted_service | Count | Item(s) | Actual merchant commercial acceptance IDs, not footwear pair/piece/box count, price or invoice split. |
| matching_material_state | merchandise | Actual count; Mass | Declared pair/piece/box unit; kg | Verify real left/right/style/size-system match and box mapping; count complete pairs separately from single returns/fragments. Measure footwear net mass separately from boxes/tissue/spacers/sachets/cartons/tare and moisture/conditioning state; no kg per pair or universal sole composition. |
| history_condition | actual PU component and package | Actual time/state evidence | Actual date/duration/temperature/humidity units | Declare component-moulding/manufacture/release/transit/storage histories and sources, uncertainty and unknowns; warehouse receipt is not necessarily beginning of PU age. Actual PU identity and adopted quality evidence are required; anecdotes do not establish shelf life or emitted mass. |
| native_conversions | all exchanges | Compatible native property | Actual native units | Retain net/gross/tare, densities with unit/temperature/source, conversion factor/unit/basis/source and species-specific evidence where actually needed. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released new boxed leather-upper non-sports matched shoes with verified PU sole component/material/date/history/pack/condition state |
| starting_condition_role | Complete inherited saleable boxed merchandise for physical merchant service, not new footwear production |
| product_classification_scope | Narrower293 leather-upper shoe wholesale within61034; no all-footwear or all-PU-aging average |
| recursive_input_rule | Do not consume or recursively manufacture traded shoes/PU/leather/boxes as this service inputs; retain original-gate stock/demand audit separately. |
| upstream_dataset_requirement | Separate complete originally boxed shoe dataset/stages for actual leather/PU/other components, assembly/finishing/release/inherited packaging; leather or PU-resin-only predecessor is incomplete. |
| disclosure | Actual pair/single/style/size/box and material/history/moisture/condition evidence, lot/period/event/acceptance, original-gate demand/loss and service/asset/provider/freight/treatment owners and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_upstream | shoes and inherited packaging | All commodity manufacturing including upstream lost portions remains outside service; actual physical handling and declared receiver treatment are counted here once. |  |
| moisture_package | boxed merchandise | Actual shoe/package moisture and temperature/humidity/condensation state need separate evidence and compatible component mass bases; internal condensation is not new utility water, direct outfall or chemical emission. Source technical tests/limits are not imposed as universal operations. | satra-cartons-moisture |
| PU_history | actual PU component | Apply qualitative moisture/time degradation context only after actual PU component is established. Record prior manufacture/transit/warehouse history and real condition; no fixed age/shelf-life, forced destructive testing, re-soling, discard or emitted-species factor. | satra-footwear-failures |
| event_periods | all actual jobs | Link campaign/lot/period, receipt/inspection/sample/cleaning/idle/failed/unfinished/dispatch/return and final acceptance. Missing/mismatched single shoes and actual fragments keep actual fate and resources; no stock residual becomes discarded pair or pollutant. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| shoe_wholesale | Boxed new leather-upper shoe merchant handling and acceptance | required | Actual merchant ownership/B2B acceptance of new original-box leather-upper shoes with actual PU sole component | Receipt/matching/state/stock/handling and commercial handover, no manufacture/repair/wear/treatment | `accepted_service` |

Commercial consignments overlap warehouse campaigns and continuous support intervals. Link performed inspection/sample/cleaning/changeover/idle/failed/rejected/unfinished events before attribution to actual accepted cohorts. Mismatches/missing singles, moisture/mould/box damage or real PU-component failure require actual quarantine/return/downgrade/discard; no assumed repair/re-soling or forced destructive tests. Real samples have separate removal/return/receiver records. No-acceptance periods retain resources, with cross-period allocation before one per-N normalization.

### Process: Boxed new leather-upper shoe merchant handling and acceptance (`shoe_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed native quantity from cp_energy, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need real meters/intervals and all shoe-lot/user attribution including failed/idle jobs; no standard kWh per pair or fixed storage age.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose, quantity and supplier boundary; moisture condensation or all received wastewater cannot quantify this supply.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new level, actual SKU/count/area/mass and conversion evidence; reusable pallets use their full life and box age/damage does not prove new supply.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual stock/net receipts, concentration/composition and dry-cleanup material plus absorbed-liquid/fragment basis. A chemical mentioned in inherited PU/leather or an SDS is not a purchased service input or emitted species.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable returns, actual burn and nonburned waste/loss records with conversions/density/temperature where used; purchase quantity is no burn default.

###### Paperboard carton supplied for additional shipping protection (`new_outer_protection_paperboard_carton`)

Only an independently evidenced actual paperboard carton supplied for additional shipping protection in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `new_outer_protection`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Use only when the added package is established as a paperboard carton. Record construction, net paperboard-carton mass and provider gate. A plastic crate, wood box or composite carton with a materially different identity needs a separate card; inherited packaging and returnable assets are excluded. No fibre grade, recycled share or mass-per-carton is assumed.

- Selected flow: Paperboard carton supplied for additional shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `new_outer_protection_paperboard_carton` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed leather-upper PU-component shoe wholesale consignment (`accepted_service`)

One real accepted business-buyer consignment with merchant ownership/resale and new boxed non-sports leather-upper shoes having actual evidenced PU sole components. Matched left/right/style/size pairs and physical quantities qualify the service, not a manufactured shoe output.

- Selected flow: Completed own-account boxed leather-upper PU-component shoe wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Require actual pair/single/box IDs, material/component and date/history evidence, net/tare/moisture/condition/time and commercial gate; no pair=consignment, standard box contents or universal shelf life.

###### Unused synthetic detergent returned to supplier (`usable_supply_returns_detergent_return`)

Only an independently evidenced actual unused synthetic detergent returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `usable_supply_returns`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `operating_supplies_synthetic_detergent` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `usable_supply_returns_detergent_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Unused polyethylene film returned to supplier (`usable_supply_returns_pe_film_return`)

Only an independently evidenced actual unused polyethylene film returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `usable_supply_returns`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `new_outer_protection_pe_film` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `usable_supply_returns_pe_film_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

###### Discarded boxed leather-upper shoe with polyurethane components (`discarded_shoe_packs_atomic_case`)

Conditional on independently recorded actual Discarded boxed leather-upper shoe with polyurethane components. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `discarded_shoe_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded boxed leather-upper shoe with polyurethane components
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_shoes, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shoes`

Range evidence need: Need actual fate/recipient/native mass and net/tare/component basis with treatment coverage and original-gate equivalence; missing partner, age or apparent crumbling alone is not whole-pair discarded mass or chemical release.

###### Discarded leather-upper shoe with polyurethane components, without outer box (`discarded_shoe_packs_single_shoe`)

Only an independently evidenced actual discarded leather-upper shoe with polyurethane components, without outer box in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `discarded_shoe_packs`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner.

- Selected flow: Discarded leather-upper shoe with polyurethane components, without outer box
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `discarded_shoe_packs_single_shoe` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shoes`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_shoes`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Discarded premises-cleaning wipe with retained contamination (`other_wastes_spent_wipe`)

Only an independently evidenced actual discarded premises-cleaning wipe with retained contamination in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `other_wastes`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. Identify the actual wipe substrate and retained contamination at the receiver. A filter, loose absorbent or independently collected liquid is not this wipe. The spent whole mass includes retained contamination once; dry supplied wipe mass is only a component audit.

- Selected flow: Discarded premises-cleaning wipe with retained contamination
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `other_wastes_spent_wipe` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_fates`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Collected aqueous premises-cleaning wastewater sent to treatment (`contained_wastewater_aqueous_cleaning`)

Only an independently evidenced actual collected aqueous premises-cleaning wastewater sent to treatment in this process is covered. Record its own physical state, net m3, event/source and handover gate. Other states or receivers require their own identity decision `contained_wastewater`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. This is the aqueous premises-cleaning stream, with its actual dissolved/suspended load and measured received volume. Exclude separately collected undiluted merchandise, organic fluid, condensate or sanitary wastewater. If these actually mix before one transfer, identify that real mixture separately; do not sum constituent volumes or label it pure cleaning water. No quantity is inferred from supplied water.

- Selected flow: Collected aqueous premises-cleaning wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned m3 for `contained_wastewater_aqueous_cleaning` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require event-linked native m3, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_fates`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_operations | all service inventory | Assign actual direct event use first; shared warehouse/handling/support uses evidenced compatible physical drivers across ALL users/periods including idle/rejected/unfinished jobs. Divide actual attributed total by positive accepted N once, no automatic equal pair/order or monetary share. |  |
| asset_lifetime | shared_assets | Use complete manufacture/maintenance/replacement/end-of-life and compatible actual used/lifetime drivers. Lifetime is observed history plus sourced evidenced remaining/termination with uncertainty/sensitivity/update; one asset-equivalent or lifecycle-complete provider view, never both or twice per-N. |  |
| supply_stock | operating supplies | Per actual native standalone SKU/state S=attributed opening+net external receipts-closing including retained recoveries. Gross-with-outlets uses S/N and actual matched usable external return; consumed-only uses (S-matched return)/N and OMITs that return exchange. Waste/loss retains production, internal loops stay stock, no unrelated/negative netting. |  |
| original_boxed_gate | merchandise | Trace actual complete originally boxed shoe-gate quantity assigned to accepted demand, actual proven discard/state-change shares, closing and useful returns/other exits using original unit/state/component-to-pair conversion and exclusive allocations. One missing or returned single does not automatically mean a whole-pair loss. Additional linked demand=actual required original-gate demand minus identical existing demand/loss coverage in baseline, compatible stages and state once outside service; assemble missing shoe components/assembly/boxing if only leather/PU material data exist. No age, moisture or nominal-pair-weight multiplier. |  |
| receiver_views | all actual outlets | Treat whole mixed shoe-pack waste, component audits, cleanup carrier plus absorbed contents and free liquid as non-additive physical views; actual receiver/treatment has one owner. Useful shoe/box returns remain merchandise audit, no automatic avoided-manufacture credit. Unknown stock/source/receiver scope blocks complete-chain use. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | shoe_wholesale | accepted_service | Actual boxed-shoe commercial acceptance | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; style; size; size_system; colour; new_unworn_state; leather_upper_evidence; PU_sole_component_evidence; pair_ids; left_right_matching; box_ids; actual_pair_quantity; pair_unit; actual_single_quantity; single_unit; actual_box_quantity; box_unit; supplier_release; complete_boxed_gate; adopted_quality_criteria; inspection_sample_scope; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | Verify actual ownership/resale and final buyer acceptance with real matched original-box contents, materials/state/quantity and adopted quality criteria. | Item(s) | Each consignment/reversal | Actual linked event/stock/reporting and asset periods | Actual merchant and buyer gate | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_shoes | shoe_wholesale | merchandise; discarded_shoe_packs | Actual footwear/box/history and source-gate stock ledger | site_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; style; size; size_system; colour; pair_id; left_id; right_id; matching_status; pair_count; pair_unit; single_count; single_unit; box_id; box_count; box_unit; upper_material; sole_component_id; sole_component_material; PU_identity_source; actual_component_composition; composition_basis; composition_source; component_mould_date; component_date_source; shoe_manufacture_date; release_date; prior_transit_storage_history; history_source; history_unknown; gross_pack_mass; net_footwear_mass; shoe_mass_unit; box_tissue_spacer_sachet_mass; outer_pack_mass; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; moisture; moisture_unit; moisture_component_basis; moisture_wet_dry_basis; moisture_method; moisture_source; sample_selection; sample_time; sample_quantity; sample_unit; sample_representativeness; sample_removed; sample_returned; sample_fate; temperature; temperature_unit; relative_humidity; humidity_unit; conditioning_state; exposure_start; exposure_end; duration; duration_unit; condensation_observation; condition_method_source; material_condition; box_condition; defect_record; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragment_quantity; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; component_to_pair_method; component_to_pair_factor; component_to_pair_unit; component_to_pair_basis; component_to_pair_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Track actual matching/material/component/history and compatible measured net/tare/moisture/condition. Reconcile all counts and actual stock/exits/sample fates with original boxed-gate quantities and exclusive partial-pair shares. Record unknowns, never infer mass/species/discard solely from age, missing single or residual. Assigned/additional gate demand units and states must match the original-gate unit/state after any explicitly evidenced conversion, with dedicated quantity-source evidence; no implicit pair/single conversion. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual pair/piece/box and kg/state | Each stock/movement/condition/sample event | Actual linked event/stock/reporting and asset periods | Actual supplier-lot pair/single/box and complete original gate | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_energy | shoe_wholesale | electricity; fuel_supply | Actual support meter and burn records | site_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_inspection_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual physical service and all-user shares; burn is measured separately or reconstructed only with complete disjoint native stock fates and investigated unknown losses. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel unit | Each actual interval | Actual linked event/stock/reporting and asset periods | All included service consumers | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_supplies | shoe_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | Actual supply/cleanup inputs and stock-return scope | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record actual same-state native net receipts/stock/external returns and performed cleanup carriers; inherited shoe/package components are not newly supplied. Netting requires original same-scope provenance and omission of matched outlet. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each receipt/issue/return/stocktake | Actual linked event/stock/reporting and asset periods | Actual standalone service supplies | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_assets | shoe_wholesale | shared_assets | Complete-life all-consumer asset records | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Match actual asset users/periods and all life stages with compatible used/lifetime drivers and sourced remaining use, keeping a single provider or asset-equivalent view. | Item(s) or actual lifecycle-native unit | Each asset event/period review | Actual linked event/stock/reporting and asset periods | All users and complete lifecycle | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_providers | shoe_wholesale | provider_services | Actual physical result and responsibility coverage | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; performed_inspection_test_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | Verify actual completed result/native unit, physical test scope and supplier certificate versus performed work; map full direct/provider responsibility and missing stages once. | Actual provider-native physical unit | Each actual result | Actual linked event/stock/reporting and asset periods | Actual external service responsibility | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_freight | shoe_wholesale | freight | Actual boxed cargo/leg and coverage ledger | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; footwear_net_mass; inherited_box_insert_mass; outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | Use actual whole cargo and journey distance/native conversions, non-overlap share and real empty/return/provider/delivered-gate scope. | kg*km or actual native freight unit | Each included actual leg | Actual linked event/stock/reporting and asset periods | Actual merchandise/service/waste freight | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_fates | shoe_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual mixed-cleanup/free-liquid/source-receiver ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; moisture_component_basis; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | Measure actual direct source and receiver native state, including mixed cleanup carrier/absorbed contents and separate free liquid. Whole-pack/component/mixed-solid/liquid views are non-additive, with one actual treatment owner and no assumed condensate discharge. | Actual native mass/volume and composition units | Each actual source/cleanup/receiver/outfall event | Actual linked event/stock/reporting and asset periods | Actual service source and receiving scope | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_releases | shoe_wholesale | direct_species | Actual identified species/medium and method evidence | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; material_component_identity; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty | Require actual source/species/medium measurement or compatible evidenced activity/factor with all operands; no PU/box/leather age/state residual or anecdote is an emission method. Complete factor is not multiplied again by composition/fate. | kg actual species with native operands | Each measured/modeled real interval | Actual linked event/stock/reporting and asset periods | Actual source and receiving medium | per reference flow | Actual native records, state/method/calibration and one responsibility owner |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all service rows | Assign actual direct event and evidenced all-user share, retaining failed/unfinished/idle burdens, then divide attributed total by positive accepted N once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference inventory |  |
| stock_pair_state | merchandise | Reconcile compatible pair/single/box inventories separately: opening+external receipts+buyer returns-closing-physical dispatch-supplier returns-useful other exits-actual discard-net sample removal=unexplained residual. Link actual left/right matching and fragments, net shoe/pack/moisture/state measurements with uncertainty. Do not turn one unmatched single or mass residual into a whole discarded pair, age loss or species release. | cp_shoes | Audited actual counts/state/fates |  |
| gate_demand | merchandise interface | At complete original boxed-shoe gate, map actual accepted-demand and allocated proven discard/state-change demand plus exclusive closing/useful return/other-exit shares to source quantities in original state/unit. Actual component/single-to-original-pair method and conversions need sourced non-overlap allocation. Link only additional required demand not identically covered by baseline stage/loss outside service once; missing assembly/boxing beyond leather/PU predecessor is assembled outside. | cp_shoes; cp_consignment | Explicit separately linked original finished-gate demand |  |
| cargo_freight | freight | Actual kg*km=actual included footwear/pack/tare cargo converted to kg×actual distance converted to km, using explicit factors/bases/sources and non-overlapping shared/provider coverage. Other native units retain matching dataset support. | cp_freight | Actual native freight per reference |  |
| species_method | direct_species | Use actual species/medium measurement or compatible actual activity/burn and source-specific factor, retaining composition/fate/native concentration or pressure/temperature gas conversions only where needed once. Complete factors are not multiplied again; hydrolysis observation, absorbed moisture and unknown stock deficit give no emission amount. | cp_releases; cp_shoes; cp_energy | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all exchanges | Resolve actual shoe/service/material/chemical/receiver identity and native property support before final exchanges; Count support alone is neither shoe nor merchant service identity. | Actual detail/foreground and reference support chain |
| material_history | actual PU shoe/pack audit | Verify actual PU sole component, new state, left/right/style/size/box mapping, manufacture/component/prior history and applicable supplier/buyer quality criteria. Do not generalize consumer case ages to material shelf-life or force tests. | cp_consignment; cp_shoes; satra-footwear-failures |
| moisture_fates | merchandise and cleanup | Keep actual component moisture/sample/method/basis/time/temp/humidity and package/condensate/state uncertainty, separate useful exits/whole-pack waste/mixed cleanup/free liquid/species with measured receiver coverage. | cp_shoes; cp_supplies; cp_fates; satra-cartons-moisture |
| coverage_life | all service scope | Match complete finished original-gate stages and actual assigned demand/baseline loss outside, all asset phases/consumers/periods and direct/provider treatment/freight once; disclose unknowns and independent range gaps. | Scope matrix and full-life/actual quantitative evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | shoe_wholesale | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Measure actual lighting, powered handling and performed inspection/business support. The service does not manufacture shoes, operate wear testing by default or create a dedicated conditioning process from ambient holding. Range evidence need: Need real meters/intervals and all shoe-lot/user attribution including failed/idle jobs; no standard kWh per pair or fixed storage age. Measurement evidence: protocol `cp_energy`; original record basis Energy / kWh. The original amount constraint “Actual attributed native quantity from cp_energy, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `electricity_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_energy`; actual source-linked native records |
| facility_water | shoe_wholesale | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Record actual warehouse sanitation and real analytical-support water only when used. Inherited leather, box or air moisture is a state audit, not new cleaning water or a shoe-washing step. Range evidence need: Need actual meter/issue purpose, quantity and supplier boundary; moisture condensation or all received wastewater cannot quantify this supply. Measurement evidence: protocol `cp_supplies`; original record basis Volume / m3. The original amount constraint “Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `facility_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | shoe_wholesale | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Use real extra outer carton/film/straps/labels only as actually added. Manufacturer shoe boxes, tissue, spacers and any inherited sachets belong to complete commodity state; no automatic new packing or moisture-control treatment is prescribed. Range evidence need: Need inherited/new level, actual SKU/count/area/mass and conversion evidence; reusable pallets use their full life and box age/damage does not prove new supply. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `new_outer_protection_pe_film`; `new_outer_protection_paperboard_carton`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| operating_supplies | shoe_wholesale | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Expand real cleaners, lubricants, wipes, absorbents, filters and sample consumables with native formulation/state and actual fates. No default polish, biocide, desiccant, leather treatment or repair adhesive is introduced; an actual changed treatment needs scope review. Range evidence need: Need actual stock/net receipts, concentration/composition and dry-cleanup material plus absorbed-liquid/fragment basis. A chemical mentioned in inherited PU/leather or an SDS is not a purchased service input or emitted species. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `operating_supplies_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| fuel_supply | shoe_wholesale | Which purchased fuel grade/formulation and supply gate are on the stock record? Identify any fuel other than the named diesel case and its native unit; obtain actual density before a volume-to-mass conversion. Keep actual grade/native supplied stock separately from actual burn/nonburned fates; do not duplicate a complete hired transport or handling package. Range evidence need: Need opening/net receipts/closing/usable returns, actual burn and nonburned waste/loss records with conversions/density/temperature where used; purchase quantity is no burn default. Measurement evidence: protocol `cp_supplies`; original record basis Volume / L. The original amount constraint “Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `fuel_supply_diesel_supply`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| provider_services | shoe_wholesale | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Expand completed real storage/handling/inspection/testing/hygiene/maintenance and business support in matching native units. Manufacturer certificates or a public SATRA article do not prove another performed destructive test. Only representative non-wear measurements or laboratory material specimens belong to this sampling role; no wear/use or product-treatment route is included. Range evidence need: Need actual physical result/unit/sample scope and materials/energy/assets/freight/treatment responsibility; no number of shoes tested or test-life factor is fixed. Measurement evidence: protocol `cp_providers`; original record basis Count / Item(s). The original amount constraint “Actual attributed native quantity from cp_providers, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_providers`; actual source-linked native records |
| shared_assets | shoe_wholesale | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Attribute actual building/racks/lifts/meters/ICT and reusable pallet/container service over all real consumers and periods, including full maintenance/replacement/end-of-life. Range evidence need: Need manufacture, compatible used/lifetime driver units, observed history plus sourced remaining use/termination, uncertainty and sensitivity; no full new pallet per trip or universal asset life. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Actual attributed native quantity from cp_assets, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| freight | shoe_wholesale | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Record actual transported shoes/boxes/tissue/spacers/cartons/pallet scope and real legs, not only net shoes or number of pairs. Retain actual supplier-delivered gate, return and empty/shared journey ownership. Range evidence need: Need actual cargo/tare and leg distance, conversion factors/bases/sources and all-user share/provider coverage; no nominal kg-per-pair or fixed carton capacity. Measurement evidence: protocol `cp_freight`; original record basis Mass*distance / kg*km. The original amount constraint “Actual attributed native quantity from cp_freight, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_freight`; actual source-linked native records |
| environmental_water | shoe_wholesale | Identify the actual abstraction point, water body/aquifer, location and measured source volume from intake permits/meter records. Surface water and groundwater require distinct source identities; no direct withdrawal is established by purchased water use. Include only measured direct extraction with source/location and purpose. Atmospheric moisture held by shoes or packaging does not establish an environmental service intake. Range evidence need: Need actual source meter/interval and withdrawal boundary; purchased water remains Product and no formula converts leather moisture or shoe counts to water supply. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | shoe_wholesale | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Use only a real external transfer matching the same standalone operating SKU/state. Under consumed-only input OMIT this matched return exchange; retained recovery stays closing and commercial shoes/boxes remain non-exchange stock audit. Range evidence need: Need real recipient/native quantity and input provenance; no unrelated/negative supply netting, stock-as-return or automatic avoided-production credit. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| discarded_shoe_packs | shoe_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Track actual receiver quantities/composition for discarded whole boxes, single shoes, parts/fragments or performed-test samples. A received mixed whole-pack waste and its shoe/PU/leather/box component audit cannot create duplicate waste or manufacture here. Range evidence need: Need actual fate/recipient/native mass and net/tare/component basis with treatment coverage and original-gate equivalence; missing partner, age or apparent crumbling alone is not whole-pair discarded mass or chemical release. Measurement evidence: protocol `cp_shoes`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_shoes, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `discarded_shoe_packs_atomic_case`; `discarded_shoe_packs_single_shoe`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_shoes`; actual source-linked native records |
| other_wastes | shoe_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Record actual used wipes/absorbents/filters, maintenance residues and new outer protection by receiver/native state. Mixed cleanup may include dry carrier plus collected moisture/fragment/chemical; component views are non-additive and do not duplicate discarded-shoe or contained-liquid waste. Range evidence need: Need received wet/dry mixed quantity, carrier/absorbed component composition/basis and receiver treatment; receipt of a wipe or visible residue does not establish spent quantity, and no recycling credit is automatic. Measurement evidence: protocol `cp_fates`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `other_wastes_spent_wipe`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| contained_wastewater | shoe_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Record only actual free liquid transferred to treatment from performed sanitation/testing, distinct from moisture retained in shoes/boxes or absorbed in spent solid cleanup material. No routine shoe washing or PU treatment is assumed. Range evidence need: Need collected/received volume/composition/interval and treatment owner; shoe moisture, supply water and wet wipe mass do not substitute for this volume or a direct outfall. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `contained_wastewater_aqueous_cleaning`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| water_outfalls | shoe_wholesale | Identify the direct outfall and receiving water/soil compartment, measured water amount and independently analysed pollutant species. A sewer transfer to treatment is not this outfall; the missing receiving compartment prevents a concrete elementary-flow selection. Only actual water crossing a direct environmental outfall is this flow; collected free liquid sent to treatment is Waste and absorbed cleanup is its measured solid waste view. Range evidence need: Need real outfall/location/native volume and composition/receiving medium; condensation inside a shoebox is internal state, not proof of discharge. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| direct_species | shoe_wholesale | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Expand actual source/chemical/particle-size/medium only from measurement or an applicable method. PU deterioration, leather/box moisture change or product staining is not automatically CO2, VOC, microplastic, water vapour or another emitted species. Range evidence need: Need real source/interval/species and medium, compatible activity/burn/factor/composition/fate plus required native gas/volume/concentration conversions. Age anecdotes, material hazard or unknown stock deficit supply no emission factor or fixed UUID. Measurement evidence: protocol `cp_releases`; original record basis Mass / kg. The original amount constraint “Actual attributed native quantity from cp_releases, converted only on compatible evidence, per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_releases`; actual source-linked native records |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_service | Verify actual own-account final accepted commercial N>0 and all matching/material/quantity/history/condition qualifiers; shoes/pairs/boxes are not service count. |  |
| material_time | merchandise | Check evidenced PU identity and sole-component date/history through actual storage interval; no universal shelf-life from cases, no moisture/age residue-to-species/discard rule. | satra-footwear-failures |
| state_exits | shoe_wholesale | Require actual mismatched/missing/sampled/damaged/rejected/useful-return/downgrade/discard receiver paths and burden retention; do not silently introduce repair/re-soling/treatment/use. |  |
| finished_source | merchandise interface | Reconcile complete originally boxed source stages, original-unit/state/conversion and partial-pair exclusive assignments, actual demand/loss/closing/useful exits and identical baseline coverage once outside. |  |
| lifespan_coverage | all service resources | All users/events/periods and complete asset stages require compatible used/lifetime drivers, observed+sourced remaining/termination and one provider/asset/per-N view; failed/incomplete jobs do not disappear. |  |
| nonadditive_views | all actual inventory | Verify measured native supply/fates and original-owner scope; consumed-only omits matched return. Mixed whole pack/components/spent carrier absorbed contents/free liquid/outfall/species must not overlap or produce automatic avoided credits. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Physical boxed leather-upper PU-component shoe wholesale add-on linked separately to complete originally boxed commodity and actual assigned demand/loss |
| allowed_use | Actual new original-box non-sports leather-upper shoe consignment with evidenced PU sole component, matching pair/size/history/condition and business-buyer acceptance |
| excluded_use | Standalone shoe footprint; generic all-material footwear aging or fixed shelf life; manufacturing/repair/treatment/wear; test compliance recipe; retail/agency/storage-only |
| required_metadata | Actual SKU/style/size system/colour/left-right/pair/single/box/material/PU component/net/tare/moisture/date/prior history/condition/acceptance; site/lot/period; complete original gate demand/loss and every service/asset/provider/freight/treatment owner |
| required_quality_disclosure | Flow/support and prior-history gaps, component/moisture/sample/state uncertainty, mismatches/unknown stock/source-demand/receiver coverage, all-user lifetime assumptions and independent range limitations |
| update_trigger | Changed upper/sole component/presentation/history/condition/acceptance, repair/treatment/preservation operation, source-stage/loss coverage, measurement/test/provider/asset/freight/treatment scope |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-shoe-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed page302,61034/group293. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: selected narrower new non-sports leather-upper boxed footwear merchant service. |
| satra-cartons-moisture | official_guidance | SATRA, Assessing cartons and cardboard boxes, February2018 public technical article. https://www.satra.com/bulletin/article.php?id=2024 | Qualitative footwear/packaging moisture/condensation and actual material/pack-state distinctions only; no test/stacking/legal threshold or universal countermeasure adopted. |
| satra-footwear-failures | official_guidance | SATRA, Learning from footwear failures – part1,2021 public technical article, cases5/6. https://www.satra.com/bulletin/article.php?id=2760 | Actual PU-specific moisture/time and whole post-component-manufacture history context; anecdotes are not numerical shelf-life, forced test, loss or chemical-emission factors. |
