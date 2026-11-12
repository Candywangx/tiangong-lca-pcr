---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-sugar-confectionery-and-bake-f8ce0490
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Controlled-dryroom own-account wholesale of sealed dark chocolate bars

## 1. Scope and Applicability

This PCR covers a physical own-account wholesale service for manufacturer-released,individually sealed plain dark-chocolate bars,received as finished merchandise and held in an actually operated temperature/humidity-controlled dryroom before accepted B2B resale. Monitored room conditioning and careful inter-zone handling preserve the declared bar/pack quality; a sealed label alone does not prove a preservation intervention.

Exclude cocoa growing/bean post-harvest,chocolate manufacture/refining/conching/tempering/moulding,filled chocolates,white or milk chocolate,deliberate remelting/retempering/repacking/rework,retail,commission-only agency and pure financial title transfer. Actual accidental package damage,returns/quarantine or disposal is recorded without silently adding a manufacturing route. Manufacturer-specific formulation,packaging and quality instructions remain actual qualifiers; no vendor temperature,humidity,storage-duration or shelf-life default is imposed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-sugar-confectionery-and-bake-f8ce0490 |
| classification_refs | CPC3.0:61025; narrower controlled-dryroom physical own-account service for sealed plain dark bars |
| covered_products | Completed accepted B2B commercial consignment service with actual released sealed dark bars and operated dryroom control |
| excluded_products | Bean/cocoa/chocolate manufacturing; filled,white or milk chocolate; deliberate rework/repack; retail/agency; passive title transfer |
| representative_product | One accepted commercial consignment with manufacturer,actual formulation/cocoa state,bar count,net chocolate mass,primary tare and thermal/humidity/quality gate recorded |
| production_route | Released sealed finished-bar receipt -> monitored actual room conditioning/stock rotation -> order handling and controlled transitions/dispatch -> buyer acceptance; actual exception/loss paths |
| market_state | Completed trade service,not a new chocolate product; released sealed merchandise at actual declared condition and handover |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed controlled-dryroom own-account sealed dark-chocolate-bar wholesale consignment service |
| How much | 1 Item(s),one uniquely completed accepted commercial consignment; no fixed bar count,kg,cocoa content or currency/margin conversion |
| How well | Actual formulation/primary-wrap integrity and buyer-agreed appearance/pack/thermal-humidity criteria accepted with recorded exceptions; not a generic safety or shelf-life guarantee |
| How long or cycle | Actual receipt/holding/zone-transition/dispatch/acceptance times,plus assigned idle/cleanup,reporting cutoffs and full-life asset periods |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed controlled-dryroom own-account sealed dark-chocolate-bar wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer_released_sealed_plain_dark_bar; actual_SKU_formulation_and_cocoa_state; primary_wrap_and_pack_count; net_chocolate_mass_and_package_tare; lot_manufacture_and_date_conditions; actual_product_room_ambient_temperature; humidity_condensation_and_odour_control; actual_receipt_storage_dispatch_acceptance_times; bloom_and_pack_condition_acceptance_decision; ownership_resale_business_buyer; unique_commercial_consignment; HVAC_provider_transport_and_treatment_scope; reporting_period_and_exclusive_stock_exits; original_released_bar_loss_adjustment_link |

N>0 counts actual unique accepted consignments after documented reversals. One service is not one wrapped bar. Rejected/quarantined/unfinished activity consumes real resources assigned to an evidenced accepted cohort or cross-period responsibility; it cannot disappear merely because a period has no completed sale.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual contractual consignment completion once; use 1 Item(s) reference amount,with merchandise bars and mass recorded separately. |
| bar_mass_state | merchandise and rejects | Count and Mass | bars; kg | Record actual bar count,gross wrapped mass,primary tare and net chocolate mass at the declared condition. Use measured SKU-specific unit-mass/conversion evidence; cocoa formulation or surface bloom is not a universal mass/yield factor. |
| quality_state | appearance and environment | categorical observations and actual measured units | declared temperature/humidity/time units | Separate actual fat/sugar bloom,pack breach,condensation and acceptance decision from quantitative physical exits. Migration/phase or dissolution/recrystallisation descriptions do not create new fat/sugar inputs,loss quantities or elementary emissions. |
| native_units | actual exchanges | actual native property | actual native unit | Keep supplied material/provider/asset units. Actual Count/Area/Length/Time/Volume variants need corresponding verified exchange/support; a measured mass view is not another additive quantity. |


## 5. System Boundary

The controlled preservation node starts with already manufactured/released sealed bars and ends with actual buyer acceptance after monitored dryroom operation and declared handling transitions. Capture product/room/ambient conditions,pack integrity and actual inspection/acceptance exceptions. Technical storage/bloom guidance supports asking these questions,not a quantitative product recipe or compliance guarantee.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished plain dark bars already manufactured,released and sealed at the actual producer/commodity handover with lot,formulation and primary wrap known |
| starting_condition_role | Nonexchange merchandise stock/throughflow including original primary wrapping,not consumed chocolate production in this additive service |
| product_classification_scope | Controlled-dryroom own-account sealed plain dark-bar service,a narrower subset of CPC61025 |
| recursive_input_rule | An actual upstream warehousing/control provider requires disjoint complete resource scope and gate; do not recurse through the same sale or repeat its HVAC/transport |
| upstream_dataset_requirement | Actual resource/provider/full-life asset/receiving treatment scope compatible. Commodity baseline outside service must match released sealed bars; raw cocoa beans alone cannot represent refined/formulated/tempered/moulded/packed bars. Assemble all missing manufacture/primary-wrap stages exactly once outside service and match original-gate loss state |
| disclosure | All reference qualifiers; actual control/quality/stock/period/owner evidence; positive N; original released-bar loss quantity/state/unit/conversion and already-included coverage; complete provider,transport,asset/fluid and receiver boundaries |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | Exclude ALL traded-bar manufacture and original primary-wrap production,including embedded upstream burden of lost merchandise,from service exchanges. Require separately quantified original-gate saleable/lost commodity burdens and primary-wrap fates exactly once in linked commodity chain before whole-chain completeness; actual service loss handling/treatment stays inside. |  |
| boundary_condition | controlled_bar_trade | Require actual operated monitored temperature/humidity control and room/product/transition records matched to real manufacturer/buyer criteria. Vendor public qualitative storage text supports condition questions only; do not apply unseen video instructions,numeric defaults or a universal shelf-life/safety claim. | callebaut-chocolate-store-text |
| boundary_bloom | quality and stock exits | Treat bloom as observed quality/state,not automatic new fat/sugar production,mass loss,elementary release or Waste. Use actual quarantine/return/downgrade/accepted/discard decisions and physical quantities; no filled-centre migration recipe is transferred to plain bars. | callebaut-fat-bloom-text; callebaut-sugar-bloom-text |
| boundary_coverage | actual physical duties | Record one actual owner for own/provider control,utilities,transport,shared assets/initial charge and receiving treatment. Expand actual environmental water intake/outfalls,chemicals/solids/fluid wastes and specific releases from real evidence. Missing coverage blocks final package completeness. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| controlled_bar_trade | Operated dry-room preservation and own-account sealed dark-bar trade | required | Actual title purchase/resale plus monitored operated room-temperature/humidity control | One bounded preservation node from released sealed-bar usable intake to maintained-condition B2B acceptance; batch mode picking/dispatch/cleanup with continuous shared room-control periods | `accepted_service` |

Receipt/quality observation and secondary order packing do not create new chocolate manufacturing or independent grading nodes. Keep actual inter-zone/door/conditioning events,quarantined stock,returns and cleanup linked by lot/period. Conditional roles expand into actual SKU/material/fluid/substance/native unit/receiver; a missing actual role is not a zero. No deliberate tempering/remelting or opening of normal merchandise is authorized by this map.

### Process: Operated dry-room preservation and own-account sealed dark-bar trade (`controlled_bar_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`room_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed metered electricity / N; cp_room.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_room`

Range evidence need: Require actual product/room/ambient temperature and humidity,period meters and all-consumer physical driver; no vendor storage condition becomes an energy benchmark.

###### Diesel supplied for actual on-site handling equipment (`handling_diesel`)

Only actual assigned diesel equipment; carrier fuel is separately scoped. Distinguish supplied upstream fuel from actual combustion or any waste/spill.

The fixed identity represents generic supplied diesel on a Mass/kg reference basis; actual grade, formulation, supplier and heating value remain recorded attributes, not presets. Retain the native litre record and actual compatible density with temperature/state, mass-per-volume unit and source for any final kg conversion; the catalogue defines no default density. Missing density leaves final volume-to-mass conversion incomplete, never zero or an assumed value. Supplied diesel is not burned diesel, transport service or a direct emission.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Attributed diesel supply / N; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

Range evidence need: Need native opening/net receipts/closing and actual exhaustive fate records,not nominal runtime or residual burn.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable supplied water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use,actual outlet/retention and composition with volume/unit/state evidence; condensation on chocolate is not a prescribed ingredient or a quantified loss.

###### Actual independently recorded synthetic detergent supply (`cleaning_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual preparation supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require active/carrier basis,dilution,native purchase unit/density/temp/source and actual use; no safety-label quantity or default chemical release.

###### Actual separately recorded polyethylene packaging film (`extra_packing_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Attributed added packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native Count/Area/Length/Mass stock and returns,measured conversion and distinct original primary wrap; no assumed wrapping quantity per order.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed controlled-dryroom own-account sealed dark-chocolate-bar wholesale consignment service (`accepted_service`)

Unique actual B2B accepted ownership-resale consignment under documented room/product conditions and quality/pack gate. Commodity bars and original wrapping are not the service identity.

- Selected flow: Completed controlled-dryroom own-account sealed dark-chocolate-bar wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Reference count defines service normalization only,not bar count,net chocolate mass,margin or universal cocoa composition. Require actual commercial consignment gate and SKU quantities.

##### Waste flows

###### Discarded sealed dark-chocolate bar pack (`sealed_bar_rejects_atomic_case`)

Conditional on independently recorded actual Discarded sealed dark-chocolate bar pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `sealed_bar_rejects`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed dark-chocolate bar pack
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable whole rejected-unit mass / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual count,gross/primary tare/net chocolate,state/acceptance decision and original released sealed-bar loss conversion/owner. Appearance alone cannot define lost cocoa butter,sugar,kg or emissions.

###### Discarded unpackaged dark chocolate (`separated_chocolate_waste_atomic_case`)

Conditional on independently recorded actual Discarded unpackaged dark chocolate. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `separated_chocolate_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded unpackaged dark chocolate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable chocolate residue / N; cp_loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loss`

Range evidence need: Need original lot,measured chocolate versus contamination/cleaning material,state and actual receiver,with separate original-gate loss linkage; no bloom-to-mass conversion.

###### Actual separately collected paper packaging waste (`packing_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material/tare/contamination and whole/part nonduplication,receiver and recovery/treatment boundary; collection alone is not recycling or avoided production.


###### Actual separately collected metal packaging waste (`packing_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material/tare/contamination and whole/part nonduplication,receiver and recovery/treatment boundary; collection alone is not recycling or avoided production.


###### Actual separately collected plastic packaging waste (`packing_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material/tare/contamination and whole/part nonduplication,receiver and recovery/treatment boundary; collection alone is not recycling or avoided production.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_actual_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need substance,medium and actual measurement or compatible activity/factor/composition/fate units,bases,sources; no unexplained stock deficit or odour-as-species quantity.


###### Actual separately evidenced fossil methane emitted to air (`other_actual_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need substance,medium and actual measurement or compatible activity/factor/composition/fate units,bases,sources; no unexplained stock deficit or odour-as-species quantity.


###### Actual separately evidenced nitrous oxide emitted to air (`other_actual_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need substance,medium and actual measurement or compatible activity/factor/composition/fate units,bases,sources; no unexplained stock deficit or odour-as-species quantity.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_accepted | all inventory | Use actual unique accepted cohort N and evidenced causal period/lot drivers. Retain failed,quarantined,returned-order,idle and cleanup resource duties and unfinished-period carry; do not delete activity or allocate by price/margin as a physical service quantity. |  |
| allocation_goods | nonexchange merchandise stock | Reconcile actual assigned opening,net receipts,buyer returns,closing,sold,supplier-return,other external exit and discard quantities with mutually exclusive states; quarantine is an internal movement. Quality bloom does not itself remove mass. Map real physical loss to compatible original released sealed-bar state and actual wrap fate,with quantity/unit/conversion source,burden owner and already-included loss coverage before separate once-only upstream integration. |  |
| allocation_supplies | extra supplies and usable_extra_return | Let S=attributed opening+true external net receipts-closing including recovered closing for each native supply. Internal issue/recovery is not new receipt. Choose gross INPUT S with separate matched unused outward-return OUTPUT OR consumed-only INPUT S-return with that same-scope matched return exchange omitted. No numerical S+return input,second subtraction or removal of nonreturned waste/spill upstream burden. |  |
| allocation_assets | shared_assets | Complete actual asset manufacture,maintenance/cleaning,replacements and EOL is attributed by cohort compatible driver/complete lifetime driver across all consumers/periods,then divided by N once. Establish observed life or actual history plus evidenced remaining use/termination with compatible units,source,uncertainty/sensitivity/update. Complete per-driver provider scope is an alternative representation,not added to equivalent asset burden. |  |
| allocation_room_periods | shared control and providers | For each measured compatible period use cohort physical driver/all-consumer driver on complete actual resource scope; reconcile all consumers,door/idle/cleanup/control events and provider overlap. Carry stock and actual replacement/termination duties across cutoffs exactly once. |  |
| allocation_hvac_fluid | hvac_fluid_supply; usable_hvac_return; hvac_fluid_waste; hvac_air_components | Close initial equipment charge,stored fluid,true external receipts,internal recovery/transfers and final charge/retained stock plus real external fates. Keep manufacture/provider-included initial charge/fluid production with one upstream owner. Usable external return is distinct from retained recovery; only proven same-scope independently supplied inventory may support consumed-only supply subtraction. An asset-origin export cannot reduce unrelated current makeup or create negative operating input; record actual Product transfer without automatic credit. Nonusable waste/release retains nonreturned upstream burden and actual receiving transport/treatment once. |  |
| allocation_outlets | actual rejects,residues and packing | Use actual exclusive whole sealed-unit or physically separated chocolate/wrap/cleaning residue quantities and receiving route. Returns/downgrades are not automatic Waste,coproducts or avoided-production credits. Do not add whole waste to its parts or infer loss from bloom/odour/thermal excursion alone. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | controlled_bar_trade | commercial acceptance,bar stock/state and commodity-loss link | manufacturer release,ownership,stock,quality and buyer records | site_id; node_id; period_id; consignment_id; supplier_id; buyer_id; SKU; manufacturer_release; original_gate; plain_dark_formulation; cocoa_state; primary_wrap; bar_count; gross_wrapped_mass; primary_tare; net_chocolate_mass; mass_unit; unit_mass; conversion_factor; conversion_basis; conversion_source; lot_id; manufacture_date; date_conditions; intake_time; dispatch_time; acceptance_time; product_temperature; temperature_unit; humidity; humidity_unit; condensation_event; odour_exposure; bloom_observation; pack_integrity; acceptance_decision; opening; net_receipts; buyer_returns; closing; accepted_sales; supplier_returns; quarantine_internal; other_actual_exits; discarded_whole_units; discarded_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; loss_conversion_basis; loss_conversion_source; assigned_quantity_owner; already_included_loss_coverage; primary_pack_burden_owner; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Count unique real accepted B2B consignments; reconcile mutually exclusive physical stock exits and actual quality decisions. Preserve original released sealed-bar reference quantities and state-specific conversion,loss coverage/owner and once-only commodity integration; bloom is not a measured physical loss.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); bars; kg | each receipt,condition check,acceptance,return or actual discard | actual manufacturer-released receipt through buyer acceptance and cutoffs | real dryroom/dispatch handoff scope | per reference flow | Ownership,release/lot,calibrated weights,quality/thermal/humidity records and quantified loss link |
| cp_room | controlled_bar_trade | operated dry-room electricity/condition periods | meters,loggers,equipment and all-consumer occupancy | site_id; node_id; period_id; consignment_id; room_id; equipment_id; meter_id; start_reading; end_reading; energy_unit; product_temperature; room_temperature; ambient_temperature; temperature_unit; humidity; humidity_unit; start_time; end_time; conditioning_event; door_event; idle_event; cleaning_event; cohort_driver; all_consumer_driver; driver_unit; attribution_share; driver_source; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual control/handling use and compare actual product/room/ambient conditions to declared requirements; assign compatible physical period shares including idle and cleaning over all consumers. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each meter/log/control event interval | holding,dispatch and attributed idle/cleanup | all actually operated conditioning/handling equipment | per reference flow | Meter/logger calibration,all-consumer closure and provider overlap proof |
| cp_fuel | controlled_bar_trade | fuel supply and actual burn/fates | native fuel stock,receipts and equipment use | site_id; node_id; period_id; consignment_id; fuel_id; equipment_id; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; usable_external_return; actual_burn; nonburned_waste; uncontained_loss; all_fates_complete; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual native quantities and receipts; distinguish actual burn,returns,closing,waste and uncontained loss. Incomplete balance requires investigation,not residual burn. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | L | each fuel event and cutoff | actual assigned equipment periods | actual on-site diesel responsibility | per reference flow | Calibrated stocks,receipts and real exhaustive nonoverlapping fates |
| cp_water | controlled_bar_trade | actual water,condensation and contained wastewater | meter,collection,composition and receiver records | site_id; node_id; period_id; consignment_id; event_id; origin; purchased_water; volume_unit; collected_cleaning_liquid; collected_condensate; retained_liquid; measured_evaporation; direct_abstraction; direct_outfall; receiving_medium; chocolate_contamination; cleaner_composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual purchased cleaning water and independently actual condensation/cleaning streams,retention and receiver; direct sources/outfalls require actual water/substance expansion,not visual bloom or residual estimates. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual sampling unit | each supply,use,collection and handoff | actual operated/cleanup periods | supply and actual contained treatment boundary | per reference flow | Meters,collection/state/composition measurements and receiving proof |
| cp_supplies | controlled_bar_trade | extra supplies and matched usable return | native SKU stock,receipts,use and external returns | site_id; node_id; period_id; consignment_id; SKU; material; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; usable_external_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_unit; conversion_source; matched_supply_id; same_supply_inventory_scope; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual independent added-packing/cleaning supplies in native units with matching unused returns. Choose gross supply input/separate matched return output or consumed-only same-scope supply omitting return exchange; closing/recovery internal,not new external movement. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply unit | each receipt,use,return and cutoff | actual service packing/cleaning periods | additional service supplies only | per reference flow | SKU unit,stocks,conversion and same-scope return provenance |
| cp_hvac | controlled_bar_trade | working-fluid supply,physical stocks and all external fates | fluid/equipment charge,recovery,service,stock and receiver records | site_id; node_id; period_id; consignment_id; equipment_id; fluid_id; component_id; component_fraction; component_fraction_basis; composition_source; native_unit; opening_stored_fluid; gross_external_receipts; tare; net_external_receipts; initial_equipment_charge; final_equipment_charge; recovered_retained_closing; stored_closing; actual_usable_export; actual_contained_waste; measured_release; wholefluid_release; fate; fate_basis; fate_source; factor_complete; transfer_id; external_owner; fluid_usable_state; container_gross; container_tare; fluid_net; receiver_id; treatment_gate; treatment_dataset; transport_owner; initial_factory_charge_scope; upstream_fluid_burden_owner; asset_or_provider_included_scope; origin_scope; matched_standalone_supply_id; matched_supply_inventory_scope; matched_return_quantity; unmatched_return_quantity; provenance_allocation_source; physical_ledger_closure; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N | Close actual initial equipment charge,stored fluid,true external receipts,internal recovery/transfers and final charge/stocks plus actual external fates. Keep initial asset/provider-charge production ownership separate; same-scope standalone supply provenance alone may support consumed-only return subtraction. Other actual usable exports transfer without automatic credit or unrelated makeup reduction. | kg | each real charge,service,recovery,export,waste/release and cutoff | whole actually assigned HVAC periods | actual equipment and independent fluid responsibility | per reference flow | Service/weighing/mixture/provenance/receiver/treatment and physical closure evidence |
| cp_provider | controlled_bar_trade | physically complete external service scope | contracts,completion and actual native/resource records | site_id; node_id; period_id; consignment_id; provider_id; job_id; completion_gate; actual_quantity; native_unit; scope_start; scope_end; environmental_control_scope; transport_scope; treatment_scope; asset_scope; included_resources; excluded_resources; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; N | Verify actual completion and complete resource/lifecycle boundary of a counted job. Other native service units require own concrete exchange/support,not forced price/time-to-Count. | Item(s); actual provider native unit | each completed job | actual contract service periods | explicit upstream/downstream provider gates | per reference flow | Physical completion,native support and complete overlap ownership |
| cp_assets | controlled_bar_trade | complete-life shared dry-room and transport assets | asset register,lifecycle and compatible use driver | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; initial_fluid_included_scope; maintenance_cleaning_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; all_consumers; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_unit; evidenced_remainder_driver; remainder_driver_unit; remainder_source; termination_state; uncertainty; sensitivity; update_evidence; provider_overlap; N | Obtain actual complete manufacture,maintenance/cleaning,replacement and EOL; share compatible lifetime use over all consumers/periods with observed life or history plus evidenced remainder/termination. Keep included initial HVAC charge and provider resource ownership unique. | Item(s); actual asset/service unit | each acquisition,maintenance,replacement and use period | observed history plus evidenced remaining life | all included shared assets | per reference flow | Complete lifecycle/native units,use/remaining-life source,sensitivity/update and overlap ledger |
| cp_transport | controlled_bar_trade | actual assigned freight and carrier control | weighed load,route,conversion and scope records | site_id; node_id; period_id; consignment_id; transfer_id; mode; gross_load; tare; net_load; mass_unit; actual_distance; distance_unit; mass_factor; mass_factor_unit; mass_factor_source; distance_factor; distance_factor_unit; distance_factor_source; temperature_humidity_scope; empty_return_scope; cohort_driver; all_consumer_driver; driver_unit; share; provider_dataset; overlap_owner; N | Pair actual loads and distances with evidenced unit conversions and any justified shared-leg shares. Verify carrier conditioning and empty-return scope and assign every leg/resource once. | kg*km | each actual assigned leg | declared bar,supply and waste logistics | unique owner per transport scope | per reference flow | Weighed loads/routes,factors/shares and complete carrier boundary |
| cp_loss | controlled_bar_trade | real accidental separated chocolate and loss conversion | incident,physical separation,composition and destination | site_id; node_id; period_id; consignment_id; incident_id; source_lot; breached_units; collected_gross; container_tare; collected_net; mass_unit; chocolate_fraction; packing_fraction; cleaning_carrier; composition_basis; composition_source; original_gate_quantity; original_gate_unit; conversion_factor; conversion_basis; conversion_source; whole_unit_overlap; commodity_loss_link; receiver_id; treatment_gate; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure actual accidental broken-pack residues and separate chocolate/wrap/cleaning fractions; quantify compatible original released-bar loss and actual receiver without whole-unit duplication. No bloom-state mass estimate. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | kg; actual compatible native unit | each real accident/cleanup/handoff | actual attributed incidents | real residue collection to treatment gate | per reference flow | Incident,weighing/composition,original-gate conversion and receiving proof |
| cp_waste | controlled_bar_trade | real separated wrapping and contained solids | classification,weighing and receiving-treatment | site_id; node_id; period_id; consignment_id; event_id; material; primary_or_extra_pack; quantity; native_unit; package_tare; chocolate_contamination; wet_state; whole_unit_overlap; receiver_id; receiving_route; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh actual material/state and receiver,check original primary-wrap upstream ownership and nonduplicate complete/part waste. Actual other chemical or cleanup-solid streams must be expanded by real identity/state. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual waste unit | each actual separation/collection/handoff | actual attributed loss/cleanup periods | foreground exit through receiving treatment | per reference flow | Weighing/material/state and full receiver/transport boundary |
| cp_species | controlled_bar_trade | actual non-HVAC direct substance/medium releases | measurement or matched activity/factor/chemistry evidence | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Establish actual substance and medium,then measured release or compatible activity-species factor/wholefluid-composition-fate. Complete species factor is not multiplied by composition/fate again; bloom,odour or inventory shortfall is not a release quantity. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg | each real release/source event | actual attributed service/cleanup periods | direct actual sources only,excluding provider embedded release | per reference flow | Actual measurement or justified matched source/basis/activity and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_trade | all inventory rows | Divide actual attributed physical quantity by positive N once; accepted_service is 1 Item(s),not bar count or chocolate mass. | attributed quantity; N; linked protocol | exchange quantity per reference flow |  |
| period_share | room_electricity; provider_jobs; freight; room_electricity_ac | For each compatible period multiply actual complete resource scope by cohort physical driver/all-consumer driver; sum nonoverlapping periods and apply normalize_trade. | period quantity; cohort driver; all-consumer driver; units; ownership scope | attributed quantity |  |
| asset_share | shared_assets | Complete asset equivalent = cohort compatible driver/complete lifetime driver; apply normalize_trade once. Use one asset-equivalent or one complete per-driver-provider representation for the same actual asset. | complete asset lifecycle; actual drivers and units; history; evidenced remainder; termination; cp_assets | attributed full asset equivalents |  |
| supply_stock | handling_diesel; cleaning_supplies; extra_packing; usable_extra_return; cleaning_supplies_synthetic_detergent; extra_packing_pe_film | S=attributed opening+external net receipts-closing including recovered closing. Record gross INPUT S plus separate matched unused return OUTPUT OR consumed-only INPUT S-return omitting matching return exchange. Real fuel burn,waste and spill remain distinct fates. | opening; gross/tare/net receipts; closing; matching same-scope return; representation; actual fuel fates; cp_fuel; cp_supplies | nonduplicated supplied and outward-return quantities |  |
| original_bar_loss | sealed_bar_rejects; separated_chocolate_waste; separated_chocolate_waste_atomic_case; sealed_bar_rejects_atomic_case | Use actual SKU/lot/count/net chocolate/primary tare and real disposition to quantify original released sealed-bar loss amount/burden in external commodity chain,matching state/unit/conversion source and actual primary-wrap fate. Include existing loss coverage/owner and once-only integration; no bloom-to-mass or raw-cocoa-to-finished-bar shortcut. | actual lot and released gate; original commodity dataset; assigned physical quantity; count/net/tare; loss state/unit/conversion source; other exits and coverage owner; integration proof; cp_lots; cp_loss | quantified separately linked original-gate lost bar/wrap burden |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all concrete exchanges | Verify exact actual flow,property/unit group,state/gate/medium before final exchange use; unresolved SKU/provider/fluid/species/support remains explicit. | Full compatibility/detail/support proof |
| quality_room | controlled_bar_trade | Evidence actual operated control,product/room/ambient temperature/humidity and relevant transition/odour/pack conditions,without universal vendor defaults. | Logger,meter,manufacturer/buyer criteria and quality decisions |
| quality_merchandise | bar stock and loss | Measure bar/gross/tare/net quantities and exclusive stock exits; appearance is not physical loss. Loss mapping must match actual released bar/primary-wrap state and existing upstream loss coverage. | Lot genealogy,weights,disposition and original-gate conversion/owner proof |
| quality_resources | all physical responsibilities | Close actual own/provider/transport/full-life asset and complete fluid stocks/initial-charge ownership/fates,plus actual waste/environmental paths once. | Period/driver/lifecycle/provenance/receiver and overlap records |
| quality_chain | whole commodity chain | Actual released sealed-bar production and primary-wrap baseline must be complete outside this service,with quantified original-gate saleable/lost burden exactly once; raw cocoa is not finished chocolate. | Complete commodity-stage scope and actual integration record |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| room_electricity | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `room_electricity` under `cp_room`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_room`; actual source-linked native records |
| cleaning_water | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| cleaning_supplies | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| extra_packing | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `extra_packing` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| hvac_fluid_supply | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hvac_fluid_supply` under `cp_hvac`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_hvac`; actual source-linked native records |
| provider_jobs | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_transport`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_transport`; actual source-linked native records |
| usable_extra_return | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_extra_return` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| usable_hvac_return | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_hvac_return` under `cp_hvac`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_hvac`; actual source-linked native records |
| sealed_bar_rejects | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `sealed_bar_rejects` under `cp_lots`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `sealed_bar_rejects_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_lots`; actual source-linked native records |
| separated_chocolate_waste | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separated_chocolate_waste` under `cp_loss`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `separated_chocolate_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_loss`; actual source-linked native records |
| packing_waste | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packing_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| contained_effluent | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_effluent` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| hvac_fluid_waste | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hvac_fluid_waste` under `cp_hvac`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_hvac`; actual source-linked native records |
| hvac_air_components | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hvac_air_components` under `cp_hvac`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_hvac`; actual source-linked native records |
| other_actual_species | controlled_bar_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_actual_species` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### room_electricity

Actual conditioning,dehumidification,air circulation,lighting and handling energy,including real idle/defrost/door and cleaning periods. Avoid electricity already inside complete external HVAC or warehouse scope.

Residual inventory requirement after the independently identified cases `room_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity for operated dry-room environmental control and handling
- Flow property / unit: Energy / kWh
- Amount rule: Attributed metered electricity / N; cp_room.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_room`

Range evidence need: Require actual product/room/ambient temperature and humidity,period meters and all-consumer physical driver; no vendor storage condition becomes an energy benchmark.

#### cleaning_water

No water addition to normally sealed bars. Record actual cleaning water and distinct condensation/effluent; an environmental source needs a separate actual source exchange.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for actual premises or container cleaning
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable supplied water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use,actual outlet/retention and composition with volume/unit/state evidence; condensation on chocolate is not a prescribed ingredient or a quantified loss.

#### cleaning_supplies

Actual material/SKU/formulation for premises/equipment,not chocolate formulation. Native-unit variants need actual concrete exchange and measured conversion if a mass view is used.

Residual inventory requirement after the independently identified cases `cleaning_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual commercial cleaning preparations for the warehouse
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual preparation supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require active/carrier basis,dilution,native purchase unit/density/temp/source and actual use; no safety-label quantity or default chemical release.

#### extra_packing

Only added outer cases,liners,labels or wraps supplied here. Manufacturer-sealed primary wrapping belongs to original bar commodity upstream and is not a new input for each resale.

Residual inventory requirement after the independently identified cases `extra_packing_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added wholesale secondary packing supplies
- Flow property / unit: Mass / kg
- Amount rule: Attributed added packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native Count/Area/Length/Mass stock and returns,measured conversion and distinct original primary wrap; no assumed wrapping quantity per order.

#### hvac_fluid_supply

Conditional actual named refrigerant or working-fluid purchases with composition and exact scope. Initial factory charge already embedded in equipment/provider manufacture cannot be purchased again in this operating-fluid input.

- Identity requirement: Actual independent HVAC working-fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Attributed independently supplied working fluid / N; cp_hvac.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hvac`

Range evidence need: Need actual fluid identity,charge/source ownership,stocks,charging/recovery/exports/waste/release fates and component basis. Makeup is not leak; recovery is not a new external receipt.

#### provider_jobs

Only physically completed contractual Count jobs with complete upstream resources. An actual provider sold by area-time,mass,hour,energy or freight must use its native verified exchange,not invoice price or a forced Count.

- Identity requirement: Complete counted external dry-room support jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed completed service jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need actual completion gate,environmental-control/resource/asset/treatment scope and overlap owner; a missing provider boundary prevents completeness.

#### shared_assets

Actual warehouse/HVAC/sensors/racks/pallets/crates owned by the scope across all consumers/periods; include full manufacture,maintenance/cleaning,replacements and end-of-life.

- Identity requirement: Complete-life dry-room,handling and reusable transport-asset equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need compatible cohort/lifetime drivers with observed use or history plus evidenced remainder/termination,source,uncertainty/sensitivity/update; not a new pallet per trip or depreciated-zero asset.

#### freight

Use actual leg/load/route and unique commodity/provider/service owner; disclose any temperature/humidity equipment and empty-return burden inside carrier service.

- Identity requirement: Actual assigned freight for bars,supplies and waste
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Attributed actual freight kg*km / N; cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Need gross/tare/net load,distance,compatible conversion factors/units/sources and allocated shares/all-user drivers; no nominal capacity or guessed route.

#### usable_extra_return

Only matched unused supplies returned to an external owner. Product stock returns,original manufacturer primary packs,reusable assets and recovered closing supplies are not automatically this outlet.

- Identity requirement: Actual unused additional service supplies returned externally
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable unused supply outward / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require same-scope native supply provenance,state,quantity and receiver. Gross supply input plus separate usable-return output OR consumed-only matched supply omitting return exchange; never input S+return or second credit.

#### usable_hvac_return

Actual recovered/unused fluid is Product only when usable state and external receiver/gate are established; retained recovery is closing stock. Initial asset-charge origin must stay distinct from operating makeup.

- Identity requirement: Actual usable HVAC fluid transferred to external ownership
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual usable-fluid export / N; cp_hvac.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hvac`

Range evidence need: Need matched fluid/source-charge scope and receiver; only same independently supplied inventory may support consumed-only deduction. Asset-origin export is an actual transfer without reducing unrelated makeup or automatic substitution credit.

#### sealed_bar_rejects

Only actual documented waste decision/receiver. Bloom,expired date,quarantine or buyer return alone is not proof of Waste or physical loss; whole bar-plus-wrap state must not also be counted as separated parts.

- Identity requirement: Actually discarded whole sealed bar units at waste handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable whole rejected-unit mass / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual count,gross/primary tare/net chocolate,state/acceptance decision and original released sealed-bar loss conversion/owner. Appearance alone cannot define lost cocoa butter,sugar,kg or emissions.

#### separated_chocolate_waste

Conditional real broken/opened-pack accidents and cleanup,not deliberate remelting,retempering or recovery. Separate chocolate,residual wrap and cleaning carrier without repeated wholepack waste.

- Identity requirement: Actually collected chocolate residues from accidental breaches
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable chocolate residue / N; cp_loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loss`

Range evidence need: Need original lot,measured chocolate versus contamination/cleaning material,state and actual receiver,with separate original-gate loss linkage; no bloom-to-mass conversion.

#### packing_waste

Actual material at real waste receiver; original primary wrap production remains commodity upstream,while actual loss handling/treatment is inside the service. Never assume every received wrap is warehouse waste.

Residual inventory requirement after the independently identified cases `packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separated wrapping and added packing waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material/tare/contamination and whole/part nonduplication,receiver and recovery/treatment boundary; collection alone is not recycling or avoided production.

#### contained_effluent

Only actual collected stream,with origin and chocolate/cleaner contamination recorded separately. Direct outfalls need real receiving water and substance exchanges,not a contained proxy.

- Identity requirement: Actual contained cleaning or HVAC condensate streams to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable contained liquid waste / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require volume/state,density/temp/composition basis and real receiver. Do not infer condensed water or sugar release from a visual sugar-bloom diagnosis.

#### hvac_fluid_waste

Nonusable actual fluid to verified treatment/recovery,distinct from usable export,retained recovery and atmospheric release. Actual receiver and upstream production burden ownership are retained.

- Identity requirement: Actual contained nonusable HVAC fluid at recovery or treatment gate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable contained working-fluid waste / N; cp_hvac.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hvac`

Range evidence need: Need fluid/composition,container tare/net,transfer and treatment/transport coverage; no supply subtraction for waste or automatic recycling credit.

#### hvac_air_components

Expand only actual component/substance and air-medium release with verified measurements or supported complete fate evidence. Makeup and charge deficits are not automatically leak amounts.

- Identity requirement: Actual identified HVAC fluid components released to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable component air release / N; cp_hvac.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hvac`

Range evidence need: Need named fluid,component fraction basis/source,actual release/fate and uncertainty; complete species factors are not multiplied by composition/fate twice.

#### other_actual_species

Conditional actual combustion,chemical spill,water or other non-HVAC release. Fat/sugar bloom is a quality-state observation,not a direct elementary flow or new fat/sugar production.

Residual inventory requirement after the independently identified cases `other_actual_species_co2_fossil_air`; `other_actual_species_methane_fossil_air`; `other_actual_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Other actual identified direct substances and receiving media
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need substance,medium and actual measurement or compatible activity/factor/composition/fate units,bases,sources; no unexplained stock deficit or odour-as-species quantity.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_count | accepted_service | Require real ownership/resale,B2B acceptance,unique positive N and every reference qualifier; product count,pallet move,quarantine or canceled order is not automatically a completed service. |  |
| validate_control | controlled_bar_trade | Require real operated monitored dryroom intervention and actual bar/pack/quality/thermal-humidity conditions; exclude deliberate manufacture/rework and vendor-default or guaranteed-safety claims. | callebaut-chocolate-store-text |
| validate_quality | stock and bloom | Observed fat/sugar bloom,condensation,odour or expiry must have an actual inspection/disposition record; none alone quantifies mass loss,chemical input,emission or Waste. | callebaut-fat-bloom-text; callebaut-sugar-bloom-text |
| validate_native | all inventory | Maintain actual native units,N/conversion sources and property supports; no bar=kg,price=Count,raw cocoa=finished bar or generic Energy substitute. |  |
| validate_scope | assets,providers,fluid and freight | Require complete scope,whole-life driver units/history/remainder/termination and all-consumer closure. No double factory HVAC charge,external recovery as new receipt,asset-origin return netted against unrelated makeup,or automatic credit. |  |
| validate_outlets | actual waste and releases | Prove actual whole/part-exclusive residues,receiver/treatment and substance/medium. Actual direct water/chemical/fluid roles require dedicated exchanges; no unexplained deficit or total formulation as a species. |  |
| validate_chain | commodity and service combination | All merchandise manufacture/primary packaging inclloss upstream remains outside service; actual original-gate loss state/assigned quantity/other exits/existing coverage and burden owner must yield once-only complete commodity integration. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual concrete exchanges and quantitative evidence are verified |
| downstream_use | Physical additive controlled-dryroom own-account wholesale service for an actual released sealed plain-dark-bar commodity chain |
| allowed_use | Declared operated room-control B2Broute and actual formulation,cocoa state,pack/count/net mass,thermal-humidity/time and acceptance stratum |
| excluded_use | Whole chocolate footprint alone; cocoa or chocolate manufacture; filled/milk/white products; deliberate remelt/retemper/repack/rework; retail/agency; monetary margin or universal quality/mass conversion |
| required_metadata | All reference qualifiers; actual released commodity/buyer gates; positive N; exclusive stocks,other exits and loss conversion/coverage; control/provider/transport/treatment and full asset/fluid scope |
| required_quality_disclosure | Unresolved concrete identity/support/configuration; condition/quality/measurement/conversion/Range limits; actual lifetime/source-charge provenance and receiver/provider overlap; commodity loss integration/uncertainty |
| update_trigger | Changed formulation/cocoa state,pack,control conditions/technology,HVAC fluid or asset lifetime,use/provider/transport/treatment scope,observed loss/disposition basis,acceptance gate or evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD.CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Own-account cocoa/chocolate/confectionery wholesale classification within61025 only; not product facts or quantities. |
| callebaut-chocolate-store-text | handbook | Callebaut.Chocolate Academy.How to store chocolate products,public written text; https://www.callebaut.com/en-US/callebaut-chocolate-academy/tutorials/storing/how-to-store | Qualitative stable-temperature,condensation/humidity and odour exposure questions for product quality; no unseen video content or numeric operating defaults. |
| callebaut-fat-bloom-text | handbook | Callebaut.The storage temperature was too high,public written text; https://www.callebaut.com/en-US/chocolate-technique/troubleshooting/storage-temperature-high | Limited appearance/heat-temperature-change and fat-migration context; filled-centre mechanisms not treated as this plain-bar recipe or a mass-loss/safety test. |
| callebaut-sugar-bloom-text | handbook | Callebaut.Sugar bloom,a common issue in the world of chocolate,public written text; https://www.callebaut.com/en-US/callebaut-chocolate-academy/tutorials/sugar-bloom | Condensation/humidity and surface sugar dissolution/recrystallisation as a quality-state context only,not actual ingredient,water/emission quantity or disposal decision. |
