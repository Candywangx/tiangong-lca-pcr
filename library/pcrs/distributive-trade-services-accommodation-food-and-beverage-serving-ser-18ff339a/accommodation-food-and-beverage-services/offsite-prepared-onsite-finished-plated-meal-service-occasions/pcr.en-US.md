---
pcr_id: pcr.offsite-prepared-onsite-finished-plated-meal-service-occasions
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Offsite-prepared onsite-finished plated meal-service occasions

## 1. Scope and Applicability

Actually supplied complete PLATED meal-service occasions made through an actual OFFSITE preparation kitchen, protected component dispatch and transport, and actual ONSITE receipt, finishing and recipient service. The physical route and declared complete menu/composition/portion/service-version establish the category. Event, ongoing-contract, customer, brand and waiter labels do not establish method identity. Physically identical ongoing contract meals may use this purpose-neutral physical method; CPC63391 is an explicit proxy rather than full leaf coverage. [krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route]

This bounded route excludes pure onsite preparation/serving, dropoff-only prepared food, beverage-only, grocery/wholesale, meal capacity/bookings/fees and whole event/lodging/entertainment products. Buffet or shared-component meals cannot be called equivalent plated complete-meal occasions without actual matching recipient/portion/menu/handoff evidence and reviewed physical equivalence. Canapés/snacks/unequal portions or menus are not silently interchangeable meals.

One actual recipient/occasion/version has ONE final fulfilled output. Mere prepared/held availability is an internal state and is not final supply. Actual offered-but-declined, unserved, partially served, accepted and reversed cases retain separate records. Do not equate swallowing food with receiving the declared physical meal service, treat planned covers as served, automatically promote a refused offer to a full meal, or erase already supplied components. A missing course/partial service requires the actual service-version acceptance rule and separately described output/responsibility. No generic course count, portion size, nutrition, duration or yield is imposed.

Two real nodes own offsite ingredient composition/preparation/cooking/packing/dispatch and attributed transport, then onsite receipt/finish/portion/plate/serve/clear/return. Actual mixing, treatment and packaging duties stay in their actual kitchens rather than fabricated plants. Actual dirty reusable and usable food returns have reverse paired transfers. Full ingredient and supply upstream, all actual stocks/food/water/fat/species fates, cleaning/washing, logistics/receivers and full site/land/building/kitchen/vehicle/equipment/reusable/textile life belong to exclusive responsible coverage. Necessary idle, failed/cancelled and zero-output periods retain real responsibility.

Primary operator pages establish qualitative actual route and service questions. Their example capacities, prices, times, menus/courses and staffing do not supply quantitative ranges, temperatures, food safety limits, recipes, lifetimes, allocation factors or UUIDs. All actual data and final concrete identity evidence remain mandatory; absence is not zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.offsite-prepared-onsite-finished-plated-meal-service-occasions |
| classification_refs | CPC3.0:63391 proxy; physical offsite-prepared onsite-finished plated complete-meal method may cross event/ongoing labels |
| covered_products | Actually supplied equivalent plated complete-meal occasion for one recipient with actual offsite preparation, transport, onsite finish and service |
| excluded_products | Pure onsite preparation; dropoff-only; beverage-only; whole event/camp/lodging; unfulfilled/planned covers; non-equivalent buffet/shared food/snack outputs |
| representative_product | Actual operator/offsite kitchen/onsite job/recipient/meal occasion/menu-composition-portion/service-version and fulfilled component gate |
| production_route | Actual ingredients -> offsite preparation/mix/cook/hold/protective packing -> dispatch/transport/onsite receipt -> finish/plate/supply -> clear/dirty and usable return/receiver |
| market_state | Physically supplied meal service; native food masses and actual course/component states independent from Count service output |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually supplied offsite-prepared onsite-finished plated complete-meal occasion |
| How much | 1 Item(s) |
| How well | One actual recipient/occasion of one declared equivalent complete plated menu/composition/portion/service-version; actual offered/supplied/declined/partial/accepted/reversed components evidenced; not planned covers or eaten mass |
| How long or cycle | Actual job/recipe/batch/service-window/start-end/timezone/UTC-offset/DST/elapsed duration, transport/holding/stock/reporting and full asset-life phases; no fixed duration or courses |
| reference_flow_link | site_fulfilled_meal |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actually supplied offsite-prepared onsite-finished plated complete-meal occasion |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_operator_offsite_onsite_job; actual_menu_recipe_composition_portion_service_version; actual_recipient_occasion_complete_plated_gate; actual_course_component_offer_supply_decline_partial_acceptance_reversal; actual_offsite_preparation_dispatch_transport_receipt_finish; actual_native_component_state_quantity_time_pack_temperature_source; matched_return_wash_and_food_redeployment; all_outputs_all_consumers_periods_necessary_idle_failure_N0; full_life_asset_land_provider_receiver_coverage; every_numeric_operand_unit_basis_method_state_sample_time_source |

N_target counts only unique physically fulfilled same-profile recipient/meal occasions after actual reversals under service_gate. Count support verifies Item(s), not concrete meal identity or equivalence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_gate | site_fulfilled_meal | Count | Item(s) | Freeze actual declared complete menu/portion/component/recipient/occasion gate and acceptance rule. Evidence actual provision; prepared availability alone is internal. Decline/partial/reversal is actual separate state; planned covers, payment, capacity and swallowed food cannot replace N_target. | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| native_operands | all inventory rows | Actual supported native property | Actual native unit | Each independent measurement/share/factor/density/concentration/duration/lifetime/count operand has own value, unit, basis, method, state, sample_time and source. Resolve EACH/TOTAL, property and dimension compatibility first; no global provenance badge. |  |
| handoff_same_state | offsite_prepared_dispatch; site_prepared_receipt; site_returned_food; offsite_returned_food_receipt; site_dirty_return; offsite_dirty_receipt | Mass and independent Count | kg; actual count | Actual paired transferID/receiver/gate/time/quantity/state on BOTH nodes. Dispatch-to-receipt real losses recorded separately, not forced identical. The selected receipt-gate output equals receipt-gate input; actual packed transport payload differs from net food/dirty component audits. Final same-profile N_target divides once, no fixed internal food/meal ratio. | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| food_state_basis | actual food and waste | Mass | kg | Retain supplied/raw/cooked/held/as-served/wet/dry/retained water/bone/skin state. Only same sample water-only wet_fraction=water_mass/wet_mass and dry_ratio=water_mass/nonwater_dry_mass imply wet_fraction=dry_ratio/(1+dry_ratio); convert percent first. Loss-on-drying with other volatiles is not water; no universal yield. |  |
| water_terminal | water and liquid fates | Volume; Mass | m3; kg | Actual compatible density/temperature conversion only. Purchased or abstracted input, ingredient water, retained content, wash/enduse/internal transfer, contained receiver output and direct water vapour are different views. Terminal balance excludes internal enduse/transfer and duplicate receiver views; independent actual water species/medium evidence. |  |
| normalization_once | all inventory rows | Native property and Count | per reference flow | Actual direct target duty OR compatible native quantity*target_driver/positive complete all_consumer_driver, then positive same-scope N_target once. ONLY an already-per-reference normalized quantity stays unchanged. Attribution alone is not normalization: assigned target TOTAL still divides by the same positive profile N_target once; necessary idle/failure/N0 resources retain real owner/carry/final resolution. |  |
| freight_work | offsite_freight; site_freight | Mass * Length | t*km | Each unique leg/load uses actual packed wet payload including food/ice/pack/support/equipment minus only noncargo vehicle tare. EACH repeats actual count once; TOTAL unchanged. THAT-record share remains inside sum, same positive N_target once; complete provider OR exclusive actual own-fleet duties. |  |
| full_life_driver | offsite_asset_life; site_asset_life; offsite_reusables_life; site_reusables_life | Actual compatible native asset service | Native driver; Count only actual counted case | Full life is observed plus sourced compatible remaining use or actual termination across all actual users/periods. Manufacture/install/maintain/replace/EOL and actual land area*time/from-to transformation remain covered once; annual targetN/nameplate capacity/invented years are not complete life. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual operating offsite preparation kitchen and actual serviced onsite location with identified menu/version/ingredients/component state, actual dispatch/receipt and responsibility records |
| starting_condition_role | Actual meal production/service and complete supporting lifecycle responsibility; existing kitchen/customer venue or leased equipment is not burden-free |
| product_classification_scope | CPC63391 proxy for selected physical route; event and ongoing labels do not define physical identity; full classification leaf not claimed |
| recursive_input_rule | Do not purchase final same meal again as its own input. Paired internal prepared-food/dirty-return/usable-return gates convey actual states and prior burdens once. Complete provider substitutes only exact actual covered stages; never duplicate covered direct resources/assets |
| upstream_dataset_requirement | Complete actual food/supply production and losses, utilities/transport/providers/receivers plus full site/land/building/kitchen/equipment/vehicle/reusable/textile manufacture-install-maintain-replace-EOL. Actually missing stages must be completed integrated once with source/native quantity/state/time/owner and coverage/exclusion links before complete-chain use |
| disclosure | Actual meal profile/recipient/gate/partials; two kitchen and freight/holding/return/wash coverage; all outputs/users/periods/idle/failure/N0 responsibilities; actual stock/water/species native balances; full-life provider/receiver/land coverage and identity/data gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_route | both nodes | Offsite multi-ingredient composition/treatment and protected packing, actual transport/receipt and onsite finishing/plated service/clear/return are real duties. Record before/after states, all input roles, handoffs and intended outputs versus residues. Mixing, cooking and packing remain in actual node; each cold/already-prepared component retains true route. Distribution is separately declared duty, not packaging. | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| complete_exclusive_coverage | all physical duties | Use complete physically matched provider OR direct underlying actual stages. Real missing food preparation/transport/wash/asset/receiver duties must be actually completed and integrated once, not promised future supplements or erased by an invoice. Unknown overlap/missing real duty blocks complete-chain claim. |  |
| transport_owner | offsite and onsite interfaces | Assign one actual owner per unique outbound/return/extra leg and associated holding/loading/cleaning/empty-run/asset/fuel/species responsibility. Own fleet requires actual fuel/electricity/maintenance/vehicle/site/receiver duties once; complete carrier dataset replaces exact covered portions only. |  |
| return_wash_owner | food and reusables returns | Pair actual forward and reverse transfers by ID/state/native quantity/time/receiver. Retained water/food in dirty load is nonadditive content. Wash at actual responsible node/provider and retain upstream manufacture/life; used return never unused supply credit. |  |
| full_asset_land | all assets and sites | Enumerate actual owned/leased/customer-supplied shared buildings, land, fitout, kitchens, vehicles, temporary equipment, containers/tableware/utensils/textiles and every consumer/period. Actual land native area*time and evidenced from/to transformation belong in complete asset/provider scope or separately completed interface; never convert land to Count. |  |
| zero_transfer_no_erasure | zero handoff or N_target | Zero actual prepared-food or return handoff cannot convey resources through a fake positive transfer. Retain real responsible pool and completed exclusive source/carry/receiver/supplement integration into actual final responsibility once. N0 unassigned burden or missing receiving/final resolution blocks completeness. |  |
| qualitative_limits | source use | Operator pages establish route questions only. Do not turn illustrative menu/courses/time/prices/counts into quantities, temperature/legal/nutrition/yield/lifetime/factors. Actual independently operated industrial preservation, laundry, energy generation or new production needs reviewed route expansion; actual normal holding/washing/cooking/logistics remain included. | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_projection | all output/resource projections | The whole-operation ALL-OUTPUT ledger is complete PRE-ATTRIBUTION evidence: every output keeps its actual FULL native quantity and lineage/recipient/gate/state/handofftime/source, never quantity*target_share. First decide actual independent-process subdivision versus genuine jointly produced co-products. For independent processes assign actual direct duties, then only real shared duty by supported physical driver. Genuine joint products require a documented PCR-specific actual attribution decision, owner and boundary; internal component/dirty/usable-return transfers are NOT co-products. Declare one projection variant and allocation_stage: (A) target-attributed LCI contains only target responsibility and actual linked internal duties; independent other-client/nonmeal outputs remain evidence-only, not extra co-products causing second allocation. (B) separately declared unallocated wholepool retains FULL inputs and ALL actual outputs and performs attribution at exactly one designated downstream step. Never mix A and B or reallocate A again. |  |
| exclusive_food_input_roles | food ingredient receipt and return inputs | site_ingredients covers ONLY actual additional externally bought independent food/ingredients not already covered by site_prepared_receipt. A paired internal receipt or usable-food return entering local stock is genealogy, not another external food manufacturing input. offsite_returned_food_receipt and dirty_receipt retain old-state original food/reusable burden, adding only actual new rework/wash/storage/transport duty. Identify source_input_role/internal_external/linked_input_coverage/nativequantity for each real input and exclude overlapping same physical food/stage from generic ingredient/reusable manufacture cards. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_product_output_quantity | all actual intended product outputs | The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| offsite_preparation_dispatch | Offsite kitchen preparation packing dispatch and responsible transport | required | Actual offsite kitchen component preparation/packing/dispatch with transport and returned-item responsibility | Actual composition/preparation/cooking/holding/packing and receipt-gate component handoff; actual carrier/own-fleet and offsite wash duties | offsite_prepared_dispatch |
| onsite_finish_service | Onsite receipt finishing plated meal service and return | required | Actual accepted prepared components received onsite and finished/plated/supplied to actual recipient | Actual receipt/finish/portion/plate/hold/serve/refill/clear and return/receiver responsibilities | site_fulfilled_meal |

Actual recipe/dispatch/service/clear/wash batches overlap continuous refrigeration/readiness/holding. Link inputs, outputs, cleaning and changeover events to actual run IDs/time boundaries; no repeated shared-run burdens. Offsite ingredient formula produces actual prepared protected component state; onsite finishing may combine further actual ingredients before actual plated served state. Enumerate composition inputs, before/after treatment states, packaging before/after protection or plating, pack material/contact/thermal roles and reuse/enduse. Actual treatment aids/energy/water and prep/cooking/spill/offspec losses remain distinct. No forced two-input mixing or heating for every component. [krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route]

Protected food is an internal measured receipt-gate handoff. Actual preparation dispatch state, transport/holding changes/loss and onsite receipt record reconcile; offsite output card and onsite input card use the SAME receipt-gate quantity/state/transferID. Actual net food, actual packed cargo wet payload and actual native count are distinct, not added. Returning usable food and dirty equipment carry their actual old state and prior responsibility to their real receiver, not new purchases or additional final meal output. All are normalized with the same finalN once, never a nominal ingredient-meal ratio.

Every actual independent intended output has its own outputID/recipient/menu-or-product-version/gate/state/handoff/time/source/native quantity and owner. Includes other client meals/menus, actual staff-support duties, separately sold food/drink/other products and partial outputs. Expand actual incompatible property/unit exchanges; the Count other-meal card is not a universal nonmeal placeholder. Meal components inside one final occasion are not independent coproducts allocated away. Staff meals necessary to the supported operation follow actual responsible pool, not automatic other-sales deletion.

Rejected/raw/offspec/overprepared/held food and returned items retain producing node/lot and actual accepted rework/reheat/redeploy/WIP/useful export/discard/receiver path. Real loops retain prior burdens and actual extra duty without duplicate virgin inputs or accepted meals. Actual food quality/temperature/holding/service criteria must be sourced; no universal safe-food limits. Necessary failed/cancelled/closed/idle work retains responsible pool including zero service and zero transfer periods.

### Process: Offsite kitchen preparation packing dispatch and responsible transport (`offsite_preparation_dispatch`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`offsite_recipe_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured batch addition and compatible ice/liquid mass basis. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual liquid treated tap-water supply (`offsite_operating_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Supplier/meter scope and actual enduse/stock/receiver states. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual alternating-current electricity at point of use (`offsite_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual meter/charging interval, coverage, all-consumer and idle allocation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual externally delivered useful heat (`offsite_thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Delivered thermal quantity, native units, temperature/service state and complete provider boundary. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual independently recorded synthetic detergent supply (`offsite_cleaning_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual material receipt/stock/dilution/composition and enduse/fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual protected prepared food components at onsite receipt (`offsite_prepared_dispatch`)

Actual recipe/lot components prepared offsite, protected/packed, dispatched, transported and accepted at onsite receipt. Receipt state/quantity includes actual holding changes and separately recorded transit losses. Same transferID, native quantity/state and responsibility on BOTH sides; dispatch and receipt views reconcile, not identical if documented real losses.

- Selected flow: Actual protected prepared food components at onsite receipt
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual dispatch/receipt native wet/dry composition, transit loss, time/state/temperature and pack exclusion. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Waste flows

###### Actual discarded unserved prepared food (`offsite_unserved_waste`)

Prepared/held/available food not supplied is separate from unprepared stocks, retained WIP, usable export and recipient plate waste. Actual disposition governs waste.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual discarded unserved prepared food `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual prepared/endstock/availability/supplied/declined/redeploy/discard reconciliation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual returned plate and served-food waste (`offsite_plate_waste`)

Actual food after recipient supply returns as plate/serving leftovers; consumed quantity is a separate evidence view and not final service denominator. Expand actual dish/material/receiver.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual returned plate and served-food waste `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual collection at clear-down, supplied-state mass/return mass and no overlap with unserved. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately collected paper packaging waste (`offsite_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately collected metal packaging waste (`offsite_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Elementary flows

###### Actual water vapour released to air (`offsite_vapour`)

Actual water species emitted to air from real cooking/holding/wash process. No supply-minus-effluent residual inference; exhaust heat is not water mass.

- Selected flow: Actual water vapour released to air `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured or independently supported water vapour amount/basis/source, not unknown residual. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`offsite_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced fossil methane emitted to air (`offsite_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced nitrous oxide emitted to air (`offsite_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

### Process: Onsite receipt finishing plated meal service and return (`onsite_finish_service`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`site_recipe_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured batch addition and compatible ice/liquid mass basis. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual liquid treated tap-water supply (`site_operating_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Supplier/meter scope and actual enduse/stock/receiver states. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual alternating-current electricity at point of use (`site_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual meter/charging interval, coverage, all-consumer and idle allocation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual externally delivered useful heat (`site_thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Delivered thermal quantity, native units, temperature/service state and complete provider boundary. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual independently recorded synthetic detergent supply (`site_cleaning_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual material receipt/stock/dilution/composition and enduse/fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual protected prepared food components at onsite receipt (`site_prepared_receipt`)

Matched actual receipt of offsite components at declared onsite input gate; same offsite output/native state/quantity/transferID. Transport dispatch/receipt audit not extra final meal, no forced internal mass=finalN.

- Selected flow: Actual protected prepared food components at onsite receipt
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual paired transfer, component identity/composition/state, native actual quantities and complete upstream/transport coverage. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actually supplied offsite-prepared onsite-finished plated complete-meal occasion (`site_fulfilled_meal`)

Actual full declared equivalent plated-menu/portion service supplied at recipient/place and service window, with course/offer/acceptance/decline/reversal records. Meal identity, fulfilled gate, partials and actual resource pool are governed by service_gate. Count support is not concrete service identity.

- Selected flow: Actually supplied offsite-prepared onsite-finished plated complete-meal occasion
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_service`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual unique recipient/occasion/version/menu/course-component and fulfilled handoff records. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Waste flows

###### Actual discarded unserved prepared food (`site_unserved_waste`)

Prepared/held/available food not supplied is separate from unprepared stocks, retained WIP, usable export and recipient plate waste. Actual disposition governs waste.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual discarded unserved prepared food `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual prepared/endstock/availability/supplied/declined/redeploy/discard reconciliation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual returned plate and served-food waste (`site_plate_waste`)

Actual food after recipient supply returns as plate/serving leftovers; consumed quantity is a separate evidence view and not final service denominator. Expand actual dish/material/receiver.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual returned plate and served-food waste `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual collection at clear-down, supplied-state mass/return mass and no overlap with unserved. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately collected paper packaging waste (`site_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately collected metal packaging waste (`site_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

##### Elementary flows

###### Actual water vapour released to air (`site_vapour`)

Actual water species emitted to air from real cooking/holding/wash process. No supply-minus-effluent residual inference; exhaust heat is not water mass.

- Selected flow: Actual water vapour released to air `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured or independently supported water vapour amount/basis/source, not unknown residual. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`site_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced fossil methane emitted to air (`site_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

###### Actual separately evidenced nitrous oxide emitted to air (`site_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_intended_outputs | both nodes | Enumerate every actual independently intended output and its outputID/recipient/gate/state/actual handoff/time/source/native quantity before attribution. Actual same-meal course/components/internal transfers are not new final outputs. Separate other menus/jobs/staff support/food products/nonmeal duties and partials by compatible output gate; distinguish usable product, retained stock/rework, residue and waste. |  |
| physical_attribution | each resource/event | Use actual exclusively measured target duty first. Otherwise use supported compatible native physical causal driver for actual complete all-consumer pool, including staff/support/other clients/periods/idle and failure. For that record, target resource=quantity*target_driver/all_consumer_driver with positive complete denominator; then positive same-profile N_target once. Do not choose revenue/headcount/planned covers/capacity as unexplained proxy. Record reason/driver uncertainty and reject incompatible pooling. |  |
| period_and_shared_life | all shared operation/assets | Enumerate recipe/run/changeover/reporting/stock/holding/transport/service/cleaning phases and full asset manufacture-install-maintain-replace-termination/EOL phases. Link each resource/asset/output/event/consumer to actual periods. Actual shared asset/service is allocated once across every consuming node/job/user/period by sourced compatible lifetime driver: observed plus sourced remaining service or actual terminated total. Target annualN is not lifetime. |  |
| rework_and_exit | offspec/unused/used/return | Rejected or partial output never becomes accepted meal automatically. Link source batch/node/oldstate and actual rework/downgrade/useful transfer/waste exit; retain original and incremental burdens once. Useful export/recovery gets actual responsible attribution decision, not automatic virgin offset/substitution credit. Grossunused and netunused accounting are exclusive. |  |
| zero_and_carry | necessary idle/failed/N0 duties | Retain actual responsible pool, source/carry period, receiver and final resolution even when no target meal or internal transfer exists. Allocate actual necessary duty only to evidenced responsible real outputs or completed explicit linked supplement, never create fake positive output/divide by zero/drop resources. Unassigned or merely planned future resolution blocks full-chain use. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| projection_once | all independently intended outputs | Apply allocation_projection: complete whole-operation output evidence before attribution; actual physical output quantity never multiplied by targetshare. Subdivide actual independent process duties before real shared attribution. Genuine jointly produced co-products need explicit actual PCR-specific decision. Target-attributed and unallocated-wholepool variants are mutually exclusive; independent other outputs cannot trigger second allocation of already target-attributed inputs. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| joint_output_precedence | actual joint outputs retained as exchanges | The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_offsite_food | offsite_preparation_dispatch | Ingredient stock composition preparation and all food fates | Lot stock recipe batch production and weighed fate records | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; ingredient_id; recipe_version; component_id; species_material; supplied_state; actual_operation; food_fate; path_id; upstream_dataset_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; ingredient_amount; ingredient_amount_unit; ingredient_amount_basis; ingredient_amount_method; ingredient_amount_state; ingredient_amount_sample_time; ingredient_amount_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_food_mass; served_food_mass_unit; served_food_mass_basis; served_food_mass_method; served_food_mass_state; served_food_mass_sample_time; served_food_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; unserved_mass; unserved_mass_unit; unserved_mass_basis; unserved_mass_method; unserved_mass_state; unserved_mass_sample_time; unserved_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; prep_loss_mass; prep_loss_mass_unit; prep_loss_mass_basis; prep_loss_mass_method; prep_loss_mass_state; prep_loss_mass_sample_time; prep_loss_mass_source; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_sample_time; wet_sample_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify every actual ingredient/component and supplier/prepared-state scope. Weigh tare-separated opening/inbound/closing/paired unused and used returns; link actual recipe additions and before/after prep/cook/hold/finish states by batch. Independently weigh refill/unserved/plate/prep/spill/retained WIP/useful return/discard and actual destinations. Preserve sample moisture basis and all intended output links. Apply food_stock and food_reconcile; no nominal menu or universal yield. Apply exclusive_food_input_roles: site generic ingredients are additional external inputs only; internal receipts/old-state food or dirty returns are genealogy, not repeated manufacture; add actual new duty only. | kg and actual compatible native composition units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_utilities | offsite_preparation_dispatch | Actual node energy fuel water and operating stocks | Meter interval supplier tank charge and duty log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; carrier_id; grade; meter_id; enduse; asset_id; provider_dataset_id; stock_pool_id; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; water_volume; water_volume_unit; water_volume_basis; water_volume_method; water_volume_state; water_volume_sample_time; water_volume_source; water_meter_opening_reading; water_meter_opening_reading_unit; water_meter_opening_reading_basis; water_meter_opening_reading_method; water_meter_opening_reading_state; water_meter_opening_reading_sample_time; water_meter_opening_reading_source; water_meter_closing_reading; water_meter_closing_reading_unit; water_meter_closing_reading_basis; water_meter_closing_reading_method; water_meter_closing_reading_state; water_meter_closing_reading_sample_time; water_meter_closing_reading_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_inbound; water_stock_inbound_unit; water_stock_inbound_basis; water_stock_inbound_method; water_stock_inbound_state; water_stock_inbound_sample_time; water_stock_inbound_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; water_paired_transfer_in; water_paired_transfer_in_unit; water_paired_transfer_in_basis; water_paired_transfer_in_method; water_paired_transfer_in_state; water_paired_transfer_in_sample_time; water_paired_transfer_in_source; water_paired_transfer_out; water_paired_transfer_out_unit; water_paired_transfer_out_basis; water_paired_transfer_out_method; water_paired_transfer_out_state; water_paired_transfer_out_sample_time; water_paired_transfer_out_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; burned_fuel; burned_fuel_unit; burned_fuel_basis; burned_fuel_method; burned_fuel_state; burned_fuel_sample_time; burned_fuel_source; thermal_energy; thermal_energy_unit; thermal_energy_basis; thermal_energy_method; thermal_energy_state; thermal_energy_sample_time; thermal_energy_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; duty_duration; duty_duration_unit; duty_duration_basis; duty_duration_method; duty_duration_state; duty_duration_sample_time; duty_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual supplier/meter/tank/charging records for this node and interval; meter opening/closing READINGS and their sourced increment are not water stock opening/closing. Independently collect real water storage and paired responsibility transfer quantities when used; resolve source/enduse/coldchain/ownfleet/provider coverage. Weigh or source opening/inbound/closing and genuinely paired unused returns separately from consumption; reconcile independent burned activity. Record supported compatible native conversions and complete all-user/necessary-idle pool. Apply exclusive_coverage and normalize_once. | kWh; MJ; kg; m3; actual native compatible units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_materials | offsite_preparation_dispatch | Separate consumables pack and standalone operating fluids | Material receipt stock use dilution packing and equipment-service log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; material_id; formulation; pack_id; contact_thermal_role; reuse_status; equipment_id; species_id; stock_pool_id; retained_content_role; old_state_transfer_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; other_receipt_mass; other_receipt_mass_unit; other_receipt_mass_basis; other_receipt_mass_method; other_receipt_mass_state; other_receipt_mass_sample_time; other_receipt_mass_source; paired_transfer_in_mass; paired_transfer_in_mass_unit; paired_transfer_in_mass_basis; paired_transfer_in_mass_method; paired_transfer_in_mass_state; paired_transfer_in_mass_sample_time; paired_transfer_in_mass_source; paired_transfer_out_mass; paired_transfer_out_mass_unit; paired_transfer_out_mass_basis; paired_transfer_out_mass_method; paired_transfer_out_mass_state; paired_transfer_out_mass_sample_time; paired_transfer_out_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_recovered_mass; used_recovered_mass_unit; used_recovered_mass_basis; used_recovered_mass_method; used_recovered_mass_state; used_recovered_mass_sample_time; used_recovered_mass_source; material_mass; material_mass_unit; material_mass_basis; material_mass_method; material_mass_state; material_mass_sample_time; material_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; solution_mass; solution_mass_unit; solution_mass_basis; solution_mass_method; solution_mass_state; solution_mass_sample_time; solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; wholeequipment_content_exit_mass; wholeequipment_content_exit_mass_unit; wholeequipment_content_exit_mass_basis; wholeequipment_content_exit_mass_method; wholeequipment_content_exit_mass_state; wholeequipment_content_exit_mass_sample_time; wholeequipment_content_exit_mass_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; factory_content_mass; factory_content_mass_unit; factory_content_mass_basis; factory_content_mass_method; factory_content_mass_state; factory_content_mass_sample_time; factory_content_mass_source; installed_content_mass; installed_content_mass_unit; installed_content_mass_basis; installed_content_mass_method; installed_content_mass_state; installed_content_mass_sample_time; installed_content_mass_source; recovered_closing_mass; recovered_closing_mass_unit; recovered_closing_mass_basis; recovered_closing_mass_method; recovered_closing_mass_state; recovered_closing_mass_sample_time; recovered_closing_mass_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each actual separate material/pack/formulation/species and stock pool; weigh excluding actual packaging tare only before outbound returns. Pair truly unused returns. Track packaging before/after protected food state, rejects/reuse/enduse. Gross/tare/net, concentrate/solution/active/dilution-water, each independent receipt/paired transfer and wholeequipment retained-content exit have their own measured native quantities and seven-field operand records. Separate factory-installed charge, standalone supply, stored/installed/recovered contents and actual all fates; apply food_stock and fluid_exclusivity. Do not net used recovery against virgin supply. | kg; actual count and compatible concentration/volume units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_assets | offsite_preparation_dispatch | Complete alluser site land equipment and reusable life | Asset register procurement installation maintenance retirement and native-life records | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; asset_id; asset_material; lifecycle_stage; consumer_id; consumer_node; life_phase; remaining_source_id; land_prior_state; land_after_state; provider_dataset_id; physical_coverage; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Identify actual site/building/fitout/kitchen/refrigeration/vehicle/temp equipment/tableware/container/linen asset and all consumers/nodes/periods. Inspect procurement/install/maintain/replace/EOL and observed service history with sourced compatible remaining use OR actual termination. Collect native area/time and evidenced land from/to event. Integrate completed missing stages once under asset_life and exclusive_coverage; never use annual target count or nominal capacity as complete life. | Actual compatible native asset/land/service units; Count only genuine counted service cases | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_providers | offsite_preparation_dispatch | Complete actual provider and exclusive missing stages | Completed work acceptance linked dataset and component coverage matrix | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; provider_id; provider_dataset_id; completion_id; stage_id; component_id; exclusion_id; direct_record_link; missing_stage_dataset_id; coverage_owner_id; provider_native_amount; provider_native_amount_unit; provider_native_amount_basis; provider_native_amount_method; provider_native_amount_state; provider_native_amount_sample_time; provider_native_amount_source; missing_stage_quantity; missing_stage_quantity_unit; missing_stage_quantity_basis; missing_stage_quantity_method; missing_stage_quantity_state; missing_stage_quantity_sample_time; missing_stage_quantity_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Obtain actual completed provider result, native quantity and dataset coverage for food/transport/wash/laundry/assets/receivers/support. Crosswalk each physical stage/component/site/time with direct records. Use complete provider OR completed exclusive missing-stage supplement with actual source/owner/quantity/state/time links. Unclear missing/overlap blocks completeness; apply exclusive_coverage, not an invoice-to-Count conversion. | Actual provider native units; Item(s) only genuinely counted compatible service | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_freight | offsite_preparation_dispatch | Actual packed wet cargo unique outbound return and receiver legs | Load manifest vehicle/provider trip meter and receipt log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; load_id; leg_id; mode; vehicle_id; carrier_id; outbound_return; payload_components; holding_record_id; empty_run_id; provider_dataset_id; cargo_gross_mass; cargo_gross_mass_unit; cargo_gross_mass_basis; cargo_gross_mass_method; cargo_gross_mass_state; cargo_gross_mass_sample_time; cargo_gross_mass_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; packed_payload_mass; packed_payload_mass_unit; packed_payload_mass_basis; packed_payload_mass_method; packed_payload_mass_state; packed_payload_mass_sample_time; packed_payload_mass_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Read each actual load+leg manifest, weigh full wet cargo including food/ice/pack/container/support/equipment, remove only actual noncargo vehicle tare and source actual distance. Reconcile dispatch/receipt and EACH/TOTAL repeats. Assign THAT-record share inside freight_sum; actual complete provider OR ownfleet direct fuel/charging/maintenance/assets/species/receiver and necessary empty duties once. No dry-food-only payload. A zero cargo kgkm cannot carry necessary empty return/failed delivery/idle vehicle duty: require actual matched complete carrier coverage including these duties OR independently measured own vehicle fuel/electricity/assets/maintenance/species/native duties integrated once with exclusive responsibility. | kg/t; km; t*km; actual compatible carrier units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_environment | offsite_preparation_dispatch | Actual source withdrawals and substance-specific direct releases | Calibrated environmental measurement or supported activity-factor-fate record | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; species_id; particle_size; receiving_medium; environment_source; measurement_id; factor_id; factor_scope; fate_id; covered_provider_id; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; species_mass; species_mass_unit; species_mass_basis; species_mass_method; species_mass_state; species_mass_sample_time; species_mass_source; water_vapour_mass; water_vapour_mass_unit; water_vapour_mass_basis; water_vapour_mass_method; water_vapour_mass_state; water_vapour_mass_sample_time; water_vapour_mass_source; activity_amount; activity_amount_unit; activity_amount_basis; activity_amount_method; activity_amount_state; activity_amount_sample_time; activity_amount_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; stream_volume; stream_volume_unit; stream_volume_basis; stream_volume_method; stream_volume_state; stream_volume_sample_time; stream_volume_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify actual source/withdrawal or exact released substance/species/particle/basis and receiving medium before quantity and UUID selection. Independently measure or substantiate compatible factor/activity/fate with native operands; keep water vapour to air separate from contained wastewater and unknown residual. Ownfleet/cooking/refrigerant emissions only actual uncovered duties. Apply terminal_reconcile; never infer leak or zero from topup/odour/discrepancy. | kg species; m3 withdrawal; actual supported factor and activity units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_fates | offsite_preparation_dispatch | All separate product returns contained wastes and terminal fates | Actual collection weigh stock recovery and receiving-treatment acceptance | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; terminal_record_id; terminal_membership_id; paired_receiver_record_id; closing_membership_id; internal_or_external; stream_id; material_species_id; mixture_id; whole_component_relation; unused_or_used; original_receipt_id; receiver_treatment_id; path_id; terminal_role; stock_pool_id; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; closing_stock_quantity; closing_stock_quantity_unit; closing_stock_quantity_basis; closing_stock_quantity_method; closing_stock_quantity_state; closing_stock_quantity_sample_time; closing_stock_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; retained_closing_mass; retained_closing_mass_unit; retained_closing_mass_basis; retained_closing_mass_method; retained_closing_mass_state; retained_closing_mass_sample_time; retained_closing_mass_source; recovered_export_mass; recovered_export_mass_unit; recovered_export_mass_basis; recovered_export_mass_method; recovered_export_mass_state; recovered_export_mass_sample_time; recovered_export_mass_source; receiver_amount; receiver_amount_unit; receiver_amount_basis; receiver_amount_method; receiver_amount_state; receiver_amount_sample_time; receiver_amount_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure and classify each actual usable old-state export, matched unused return, separate material/pack/capture/wholeasset/fluid/wastewater fate and actual receiver. Retain genuine mixture and component/retained-content audit nonadditively. Link downstream treatment ownership, carry and final resolution. Each terminal external exit and actual closing membership has an addressable recordID, material/water state, actual native quantity and paired receiver record/quantity. Terminal balance excludes internal enduse/transfer and duplicate receiver views. Apply fluid_exclusivity and terminal_reconcile; unknown residual is not emission. | kg; actual compatible native receiver unit | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_handoff | offsite_preparation_dispatch | Paired prepared-food dirty reusable and usable-food transfers | Paired dispatch receipt return wash and batch-state ledger | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; handoff_role; component_id; recipe_version; source_node; receiving_node; receipt_gate; dispatch_gate; wash_event_id; reuse_destination_id; stock_pool_id; native_quantity_record_id; native_food_mass; native_food_mass_unit; native_food_mass_basis; native_food_mass_method; native_food_mass_state; native_food_mass_sample_time; native_food_mass_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; wet_item_mass; wet_item_mass_unit; wet_item_mass_basis; wet_item_mass_method; wet_item_mass_state; wet_item_mass_sample_time; wet_item_mass_source; dry_substrate_mass; dry_substrate_mass_unit; dry_substrate_mass_basis; dry_substrate_mass_method; dry_substrate_mass_state; dry_substrate_mass_sample_time; dry_substrate_mass_source; retained_food_mass; retained_food_mass_unit; retained_food_mass_basis; retained_food_mass_method; retained_food_mass_state; retained_food_mass_sample_time; retained_food_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; dispatch_mass; dispatch_mass_unit; dispatch_mass_basis; dispatch_mass_method; dispatch_mass_state; dispatch_mass_sample_time; dispatch_mass_source; receipt_mass; receipt_mass_unit; receipt_mass_basis; receipt_mass_method; receipt_mass_state; receipt_mass_sample_time; receipt_mass_source; transit_loss_mass; transit_loss_mass_unit; transit_loss_mass_basis; transit_loss_mass_method; transit_loss_mass_state; transit_loss_mass_sample_time; transit_loss_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source | Physically identify and measure each forward and reverse transfer at actual gates; pair transferID/owner/receiver/time/state/native receipt quantity across actual nodes. Reconcile dispatch/receipt differences with actual transit loss, not invented loss. Prepared food net mass, dirty wet load and nonadditive components/cargo remain distinct. Retain wash/rework actual owner, burden and carry. Apply paired_handoff and normalize_once; never force internal food mass to finalN. Apply exclusive_food_input_roles: site generic ingredients are additional external inputs only; internal receipts/old-state food or dirty returns are genealogy, not repeated manufacture; add actual new duty only. | Actual kg and separately actual count; temperature/time native units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_offsite_outputs | offsite_preparation_dispatch | Complete all intended outputs other menus clients staff and partials | Actual product/service handoff and complete consumer ledger | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; output_version; output_property; intended_or_residue; provided_gate; acceptance_id; component_ids; support_responsibility; other_job_id; native_output_amount; native_output_amount_unit; native_output_amount_basis; native_output_amount_method; native_output_amount_state; native_output_amount_sample_time; native_output_amount_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Identify every actual independently intended output and recipient/version/gate/state/source/time/native quantity, including other clients/menu versions and real staff support. Reconcile actual handoffs/partial/reversal and shared resources; do not omit nonmeal outputs or force incompatible units into Count. Record allocation precedence and physical-driver evidence under all_intended_outputs and physical_attribution. Preserve full native output quantities before attribution, with projection_variant/allocation_stage/evidence-or-exchange and independent-or-joint-output decision. Physical output quantity never gets targetshare. Apply allocation_projection: target-attributed LCI excludes independent other outputs as exchanges/co-products; unallocated wholepool keeps full inputs/alloutputs and exactly one designated attribution step. | Native output property/unit; Item(s) only counted meal/service cases | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_food | onsite_finish_service | Ingredient stock composition preparation and all food fates | Lot stock recipe batch production and weighed fate records | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; ingredient_id; recipe_version; component_id; species_material; supplied_state; actual_operation; food_fate; path_id; upstream_dataset_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; ingredient_amount; ingredient_amount_unit; ingredient_amount_basis; ingredient_amount_method; ingredient_amount_state; ingredient_amount_sample_time; ingredient_amount_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_food_mass; served_food_mass_unit; served_food_mass_basis; served_food_mass_method; served_food_mass_state; served_food_mass_sample_time; served_food_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; unserved_mass; unserved_mass_unit; unserved_mass_basis; unserved_mass_method; unserved_mass_state; unserved_mass_sample_time; unserved_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; prep_loss_mass; prep_loss_mass_unit; prep_loss_mass_basis; prep_loss_mass_method; prep_loss_mass_state; prep_loss_mass_sample_time; prep_loss_mass_source; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_sample_time; wet_sample_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify every actual ingredient/component and supplier/prepared-state scope. Weigh tare-separated opening/inbound/closing/paired unused and used returns; link actual recipe additions and before/after prep/cook/hold/finish states by batch. Independently weigh refill/unserved/plate/prep/spill/retained WIP/useful return/discard and actual destinations. Preserve sample moisture basis and all intended output links. Apply food_stock and food_reconcile; no nominal menu or universal yield. Apply exclusive_food_input_roles: site generic ingredients are additional external inputs only; internal receipts/old-state food or dirty returns are genealogy, not repeated manufacture; add actual new duty only. | kg and actual compatible native composition units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_utilities | onsite_finish_service | Actual node energy fuel water and operating stocks | Meter interval supplier tank charge and duty log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; carrier_id; grade; meter_id; enduse; asset_id; provider_dataset_id; stock_pool_id; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; water_volume; water_volume_unit; water_volume_basis; water_volume_method; water_volume_state; water_volume_sample_time; water_volume_source; water_meter_opening_reading; water_meter_opening_reading_unit; water_meter_opening_reading_basis; water_meter_opening_reading_method; water_meter_opening_reading_state; water_meter_opening_reading_sample_time; water_meter_opening_reading_source; water_meter_closing_reading; water_meter_closing_reading_unit; water_meter_closing_reading_basis; water_meter_closing_reading_method; water_meter_closing_reading_state; water_meter_closing_reading_sample_time; water_meter_closing_reading_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_inbound; water_stock_inbound_unit; water_stock_inbound_basis; water_stock_inbound_method; water_stock_inbound_state; water_stock_inbound_sample_time; water_stock_inbound_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; water_paired_transfer_in; water_paired_transfer_in_unit; water_paired_transfer_in_basis; water_paired_transfer_in_method; water_paired_transfer_in_state; water_paired_transfer_in_sample_time; water_paired_transfer_in_source; water_paired_transfer_out; water_paired_transfer_out_unit; water_paired_transfer_out_basis; water_paired_transfer_out_method; water_paired_transfer_out_state; water_paired_transfer_out_sample_time; water_paired_transfer_out_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; burned_fuel; burned_fuel_unit; burned_fuel_basis; burned_fuel_method; burned_fuel_state; burned_fuel_sample_time; burned_fuel_source; thermal_energy; thermal_energy_unit; thermal_energy_basis; thermal_energy_method; thermal_energy_state; thermal_energy_sample_time; thermal_energy_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; duty_duration; duty_duration_unit; duty_duration_basis; duty_duration_method; duty_duration_state; duty_duration_sample_time; duty_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual supplier/meter/tank/charging records for this node and interval; meter opening/closing READINGS and their sourced increment are not water stock opening/closing. Independently collect real water storage and paired responsibility transfer quantities when used; resolve source/enduse/coldchain/ownfleet/provider coverage. Weigh or source opening/inbound/closing and genuinely paired unused returns separately from consumption; reconcile independent burned activity. Record supported compatible native conversions and complete all-user/necessary-idle pool. Apply exclusive_coverage and normalize_once. | kWh; MJ; kg; m3; actual native compatible units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_materials | onsite_finish_service | Separate consumables pack and standalone operating fluids | Material receipt stock use dilution packing and equipment-service log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; material_id; formulation; pack_id; contact_thermal_role; reuse_status; equipment_id; species_id; stock_pool_id; retained_content_role; old_state_transfer_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; other_receipt_mass; other_receipt_mass_unit; other_receipt_mass_basis; other_receipt_mass_method; other_receipt_mass_state; other_receipt_mass_sample_time; other_receipt_mass_source; paired_transfer_in_mass; paired_transfer_in_mass_unit; paired_transfer_in_mass_basis; paired_transfer_in_mass_method; paired_transfer_in_mass_state; paired_transfer_in_mass_sample_time; paired_transfer_in_mass_source; paired_transfer_out_mass; paired_transfer_out_mass_unit; paired_transfer_out_mass_basis; paired_transfer_out_mass_method; paired_transfer_out_mass_state; paired_transfer_out_mass_sample_time; paired_transfer_out_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_recovered_mass; used_recovered_mass_unit; used_recovered_mass_basis; used_recovered_mass_method; used_recovered_mass_state; used_recovered_mass_sample_time; used_recovered_mass_source; material_mass; material_mass_unit; material_mass_basis; material_mass_method; material_mass_state; material_mass_sample_time; material_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; solution_mass; solution_mass_unit; solution_mass_basis; solution_mass_method; solution_mass_state; solution_mass_sample_time; solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; wholeequipment_content_exit_mass; wholeequipment_content_exit_mass_unit; wholeequipment_content_exit_mass_basis; wholeequipment_content_exit_mass_method; wholeequipment_content_exit_mass_state; wholeequipment_content_exit_mass_sample_time; wholeequipment_content_exit_mass_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; factory_content_mass; factory_content_mass_unit; factory_content_mass_basis; factory_content_mass_method; factory_content_mass_state; factory_content_mass_sample_time; factory_content_mass_source; installed_content_mass; installed_content_mass_unit; installed_content_mass_basis; installed_content_mass_method; installed_content_mass_state; installed_content_mass_sample_time; installed_content_mass_source; recovered_closing_mass; recovered_closing_mass_unit; recovered_closing_mass_basis; recovered_closing_mass_method; recovered_closing_mass_state; recovered_closing_mass_sample_time; recovered_closing_mass_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each actual separate material/pack/formulation/species and stock pool; weigh excluding actual packaging tare only before outbound returns. Pair truly unused returns. Track packaging before/after protected food state, rejects/reuse/enduse. Gross/tare/net, concentrate/solution/active/dilution-water, each independent receipt/paired transfer and wholeequipment retained-content exit have their own measured native quantities and seven-field operand records. Separate factory-installed charge, standalone supply, stored/installed/recovered contents and actual all fates; apply food_stock and fluid_exclusivity. Do not net used recovery against virgin supply. | kg; actual count and compatible concentration/volume units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_assets | onsite_finish_service | Complete alluser site land equipment and reusable life | Asset register procurement installation maintenance retirement and native-life records | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; asset_id; asset_material; lifecycle_stage; consumer_id; consumer_node; life_phase; remaining_source_id; land_prior_state; land_after_state; provider_dataset_id; physical_coverage; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Identify actual site/building/fitout/kitchen/refrigeration/vehicle/temp equipment/tableware/container/linen asset and all consumers/nodes/periods. Inspect procurement/install/maintain/replace/EOL and observed service history with sourced compatible remaining use OR actual termination. Collect native area/time and evidenced land from/to event. Integrate completed missing stages once under asset_life and exclusive_coverage; never use annual target count or nominal capacity as complete life. | Actual compatible native asset/land/service units; Count only genuine counted service cases | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_providers | onsite_finish_service | Complete actual provider and exclusive missing stages | Completed work acceptance linked dataset and component coverage matrix | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; provider_id; provider_dataset_id; completion_id; stage_id; component_id; exclusion_id; direct_record_link; missing_stage_dataset_id; coverage_owner_id; provider_native_amount; provider_native_amount_unit; provider_native_amount_basis; provider_native_amount_method; provider_native_amount_state; provider_native_amount_sample_time; provider_native_amount_source; missing_stage_quantity; missing_stage_quantity_unit; missing_stage_quantity_basis; missing_stage_quantity_method; missing_stage_quantity_state; missing_stage_quantity_sample_time; missing_stage_quantity_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Obtain actual completed provider result, native quantity and dataset coverage for food/transport/wash/laundry/assets/receivers/support. Crosswalk each physical stage/component/site/time with direct records. Use complete provider OR completed exclusive missing-stage supplement with actual source/owner/quantity/state/time links. Unclear missing/overlap blocks completeness; apply exclusive_coverage, not an invoice-to-Count conversion. | Actual provider native units; Item(s) only genuinely counted compatible service | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_freight | onsite_finish_service | Actual packed wet cargo unique outbound return and receiver legs | Load manifest vehicle/provider trip meter and receipt log | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; load_id; leg_id; mode; vehicle_id; carrier_id; outbound_return; payload_components; holding_record_id; empty_run_id; provider_dataset_id; cargo_gross_mass; cargo_gross_mass_unit; cargo_gross_mass_basis; cargo_gross_mass_method; cargo_gross_mass_state; cargo_gross_mass_sample_time; cargo_gross_mass_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; packed_payload_mass; packed_payload_mass_unit; packed_payload_mass_basis; packed_payload_mass_method; packed_payload_mass_state; packed_payload_mass_sample_time; packed_payload_mass_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Read each actual load+leg manifest, weigh full wet cargo including food/ice/pack/container/support/equipment, remove only actual noncargo vehicle tare and source actual distance. Reconcile dispatch/receipt and EACH/TOTAL repeats. Assign THAT-record share inside freight_sum; actual complete provider OR ownfleet direct fuel/charging/maintenance/assets/species/receiver and necessary empty duties once. No dry-food-only payload. A zero cargo kgkm cannot carry necessary empty return/failed delivery/idle vehicle duty: require actual matched complete carrier coverage including these duties OR independently measured own vehicle fuel/electricity/assets/maintenance/species/native duties integrated once with exclusive responsibility. | kg/t; km; t*km; actual compatible carrier units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_environment | onsite_finish_service | Actual source withdrawals and substance-specific direct releases | Calibrated environmental measurement or supported activity-factor-fate record | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; species_id; particle_size; receiving_medium; environment_source; measurement_id; factor_id; factor_scope; fate_id; covered_provider_id; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; species_mass; species_mass_unit; species_mass_basis; species_mass_method; species_mass_state; species_mass_sample_time; species_mass_source; water_vapour_mass; water_vapour_mass_unit; water_vapour_mass_basis; water_vapour_mass_method; water_vapour_mass_state; water_vapour_mass_sample_time; water_vapour_mass_source; activity_amount; activity_amount_unit; activity_amount_basis; activity_amount_method; activity_amount_state; activity_amount_sample_time; activity_amount_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; stream_volume; stream_volume_unit; stream_volume_basis; stream_volume_method; stream_volume_state; stream_volume_sample_time; stream_volume_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify actual source/withdrawal or exact released substance/species/particle/basis and receiving medium before quantity and UUID selection. Independently measure or substantiate compatible factor/activity/fate with native operands; keep water vapour to air separate from contained wastewater and unknown residual. Ownfleet/cooking/refrigerant emissions only actual uncovered duties. Apply terminal_reconcile; never infer leak or zero from topup/odour/discrepancy. | kg species; m3 withdrawal; actual supported factor and activity units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_fates | onsite_finish_service | All separate product returns contained wastes and terminal fates | Actual collection weigh stock recovery and receiving-treatment acceptance | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; terminal_record_id; terminal_membership_id; paired_receiver_record_id; closing_membership_id; internal_or_external; stream_id; material_species_id; mixture_id; whole_component_relation; unused_or_used; original_receipt_id; receiver_treatment_id; path_id; terminal_role; stock_pool_id; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; closing_stock_quantity; closing_stock_quantity_unit; closing_stock_quantity_basis; closing_stock_quantity_method; closing_stock_quantity_state; closing_stock_quantity_sample_time; closing_stock_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; retained_closing_mass; retained_closing_mass_unit; retained_closing_mass_basis; retained_closing_mass_method; retained_closing_mass_state; retained_closing_mass_sample_time; retained_closing_mass_source; recovered_export_mass; recovered_export_mass_unit; recovered_export_mass_basis; recovered_export_mass_method; recovered_export_mass_state; recovered_export_mass_sample_time; recovered_export_mass_source; receiver_amount; receiver_amount_unit; receiver_amount_basis; receiver_amount_method; receiver_amount_state; receiver_amount_sample_time; receiver_amount_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure and classify each actual usable old-state export, matched unused return, separate material/pack/capture/wholeasset/fluid/wastewater fate and actual receiver. Retain genuine mixture and component/retained-content audit nonadditively. Link downstream treatment ownership, carry and final resolution. Each terminal external exit and actual closing membership has an addressable recordID, material/water state, actual native quantity and paired receiver record/quantity. Terminal balance excludes internal enduse/transfer and duplicate receiver views. Apply fluid_exclusivity and terminal_reconcile; unknown residual is not emission. | kg; actual compatible native receiver unit | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_handoff | onsite_finish_service | Paired prepared-food dirty reusable and usable-food transfers | Paired dispatch receipt return wash and batch-state ledger | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; handoff_role; component_id; recipe_version; source_node; receiving_node; receipt_gate; dispatch_gate; wash_event_id; reuse_destination_id; stock_pool_id; native_quantity_record_id; native_food_mass; native_food_mass_unit; native_food_mass_basis; native_food_mass_method; native_food_mass_state; native_food_mass_sample_time; native_food_mass_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; wet_item_mass; wet_item_mass_unit; wet_item_mass_basis; wet_item_mass_method; wet_item_mass_state; wet_item_mass_sample_time; wet_item_mass_source; dry_substrate_mass; dry_substrate_mass_unit; dry_substrate_mass_basis; dry_substrate_mass_method; dry_substrate_mass_state; dry_substrate_mass_sample_time; dry_substrate_mass_source; retained_food_mass; retained_food_mass_unit; retained_food_mass_basis; retained_food_mass_method; retained_food_mass_state; retained_food_mass_sample_time; retained_food_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; dispatch_mass; dispatch_mass_unit; dispatch_mass_basis; dispatch_mass_method; dispatch_mass_state; dispatch_mass_sample_time; dispatch_mass_source; receipt_mass; receipt_mass_unit; receipt_mass_basis; receipt_mass_method; receipt_mass_state; receipt_mass_sample_time; receipt_mass_source; transit_loss_mass; transit_loss_mass_unit; transit_loss_mass_basis; transit_loss_mass_method; transit_loss_mass_state; transit_loss_mass_sample_time; transit_loss_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source | Physically identify and measure each forward and reverse transfer at actual gates; pair transferID/owner/receiver/time/state/native receipt quantity across actual nodes. Reconcile dispatch/receipt differences with actual transit loss, not invented loss. Prepared food net mass, dirty wet load and nonadditive components/cargo remain distinct. Retain wash/rework actual owner, burden and carry. Apply paired_handoff and normalize_once; never force internal food mass to finalN. Apply exclusive_food_input_roles: site generic ingredients are additional external inputs only; internal receipts/old-state food or dirty returns are genealogy, not repeated manufacture; add actual new duty only. | Actual kg and separately actual count; temperature/time native units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_service | onsite_finish_service | Final fulfilled complete plated-meal occasion gate | Actual recipient service-version course/portion supply acceptance and reversal ledger | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; recipient_occasion_id; menu_version; recipe_version; course_id; portion_version; component_id; offer_record_id; supply_handoff_id; decline_reason; physical_acceptance_rule; acceptance_id; refill_id; reversal_id; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; offered_declined_count; offered_declined_count_unit; offered_declined_count_basis; offered_declined_count_method; offered_declined_count_state; offered_declined_count_sample_time; offered_declined_count_source; unserved_count; unserved_count_unit; unserved_count_basis; unserved_count_method; unserved_count_state; unserved_count_sample_time; unserved_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; component_portion_mass; component_portion_mass_unit; component_portion_mass_basis; component_portion_mass_method; component_portion_mass_state; component_portion_mass_sample_time; component_portion_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; served_mass; served_mass_unit; served_mass_basis; served_mass_method; served_mass_state; served_mass_sample_time; served_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Freeze actual complete-menu/composition/portion/service-version and recipient/time-window gate. Crosscheck physical course/component handoffs, offers/declines, partials and acceptance/reversals against service and preparation/return ledgers. Count unique actually fulfilled compatible recipient/occasion once under service_gate. Mere prepared availability/planned covers/fees/eaten-only mass is insufficient. Record declined/unserved/partial duty and actual final responsibility without false whole output. Preserve full native output quantities before attribution, with projection_variant/allocation_stage/evidence-or-exchange and independent-or-joint-output decision. Physical output quantity never gets targetshare. Apply allocation_projection: target-attributed LCI excludes independent other outputs as exchanges/co-products; unallocated wholepool keeps full inputs/alloutputs and exactly one designated attribution step. | Item(s) and independent actual kg/time/portion units | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |
| cp_site_outputs | onsite_finish_service | Complete all intended outputs other menus clients staff and partials | Actual product/service handoff and complete consumer ledger | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; output_version; output_property; intended_or_residue; provided_gate; acceptance_id; component_ids; support_responsibility; other_job_id; native_output_amount; native_output_amount_unit; native_output_amount_basis; native_output_amount_method; native_output_amount_state; native_output_amount_sample_time; native_output_amount_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | Identify every actual independently intended output and recipient/version/gate/state/source/time/native quantity, including other clients/menu versions and real staff support. Reconcile actual handoffs/partial/reversal and shared resources; do not omit nonmeal outputs or force incompatible units into Count. Record allocation precedence and physical-driver evidence under all_intended_outputs and physical_attribution. Preserve full native output quantities before attribution, with projection_variant/allocation_stage/evidence-or-exchange and independent-or-joint-output decision. Physical output quantity never gets targetshare. Apply allocation_projection: target-attributed LCI excludes independent other outputs as exchanges/co-products; unallocated wholepool keeps full inputs/alloutputs and exactly one designated attribution step. | Native output property/unit; Item(s) only counted meal/service cases | Each actual stock/batch/meter/service/transfer/receiver/asset event; continuous intervals read at actual cutoffs | Actual job/batch/holding/trip/stock/reporting periods and full lifecycle phases with actual timestamps/timezones/DST | This real node and every actual contributing supplier/onsite/offsite/transport/provider/receiver duty with all consumers | per reference flow | Original source records, calibration/acceptance/coverage links, all output and consumer completeness, native operands and actual carry/final resolution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| food_stock | food fuel materials and fluid stock | For one matching state/pool gross_drawn S = attributed opening + actual net receipts - attributed closing plus actually paired responsibility transfers. Net receipts remove packaging/noncargo tare only, BEFORE outbound returns. Choose S input with matching UNUSED output OR (S-UNUSED) input and OMIT that output. USED recovery/dirty return does not reduce new supply manufacture; actual returned usable/WIP burden remains linked. | Actual opening/inbound/closing/paired unused and used return records with native operands | Exclusive actual stock draw and return exchanges |  |
| food_reconcile | each recipe/batch/occasion | Reconcile actual ingredient/water additions and returned food with prepared/retained state, actual supplied/refill, usable export/rework/unserved discard/prep/cooking/spill losses, plate returns and independently supported direct water/other releases. Retained/consumed/wholemix/component views are nonadditive. No residual assumed loss/emission or fixed yield; every unresolved fate stays gap. | Node food and paired-transfer records; actual composition/moisture and distinct food fates | Complete state- and owner-linked food audit |  |
| paired_handoff | each actual forward/reverse transfer | At chosen same receipt gate offsite output amount/state/transferID equals onsite input; onsite dirty/usable return equals actual offsite receipt gate. Dispatch and receipt are separate observations reconciled with actual transit loss/holding change. Retain native measured quantities; do not fix food or dirty returns to final Count. Both nodes use same actual final-profile normalization once. | Paired source/receiver/handoff/state/time/native measurement and loss records | One actual linked internal quantity and responsibility |  |
| normalize_once | all inventory rows | First retain actual exclusive direct target quantity OR calculate actual same-pool quantity*target_driver/positive complete all_consumer_driver. Sum unique compatible attributed records then divide positive same-profile N_target ONCE; already per-reference unchanged. N_target=0 carries real owner/source/receiver/final resolution without division; no fictional output. | Each native quantity/driver with own metadata, actual all consumers/periods and N_target | per reference flow |  |
| freight_sum | offsite_freight; site_freight | freight_per_reference = sum_unique_load_leg(actual_packed_wet_payload_t * actual_distance_km * actual_EACH_repeat_or_TOTAL_once * THAT_record_actual_share) / positive_same_profile_N_target. Only actual vehicle/noncargo tare is removed. Food/ice/pack/container/support/equipment carried mass retained. Complete provider OR actual exclusive ownfleet energy/assets/species/receiver/empty duty; already per-reference unchanged. | Native gross/tare/payload/distance/repeat/share with own metadata and unique load-leg IDs | Actual t*km and exclusive complete transport responsibility per reference flow |  |
| exclusive_coverage | all provider/direct/asset/receiver duties | Crosswalk physical stage/component/site/time/owner/native amount to complete matching provider dataset OR direct duties. Actually missing stages must be completed integrated once with source/native quantity/state/time/owner and explicit coverage/exclusions before complete-chain use. Overlap, unknown owner or merely planned supplement blocks completeness. | Completed provider and direct stage matrix plus datasets/native quantities/exclusions | Complete exclusive physical responsibility |  |
| asset_life | all actual shared assets and land | Attribute complete manufacture/install/maintain/replace/EOL quantity by actual target_life_driver/positive complete all_life_driver across every user/node/period. Full driver=actual observed plus sourced compatible remaining service OR actual terminated total; no double use of both. Native land area*time and evidenced transformation from/to event are separate compatible interfaces. Annual targetN/nominal capacity/default years are not complete life. | Actual asset stages/alluser history/sourced remaining or termination and land records | Actual full-life target responsibility once then per reference flow |  |
| fluid_exclusivity | each material/species stock and equipment | Keep standalone opening/new supply, stored/installed/recovered closing, matched UNUSED return, useful recovered old-state export, contained waste and independently supported direct release mutually exclusive. Each other receipt/paired inflow/paired outflow and whole-equipment retained-content exit has its own actual native quantity/metadata. Factory-new retained content absent standalone opening stays equipment responsibility. Actual wholeasset content/component audit is nonadditive; unknown difference is not emission. USED export gives no virgin manufacture subtraction or automatic credit. | Equipment service/material stock/wholecontent/receiver/environment records with native operands | Exclusive species/stock/content/fate audit |  |
| terminal_reconcile | water mixtures pollutants and receivers | Reconcile independent measured input/stock/retained/terminal outputs by matching material/species/state/owner/time. Exclude internal enduse/transfer and duplicate receiver views from terminal sum. Whole genuine mixture is one stream with nonadditive components; separate unrelated streams/species/receiving media expand independently. Water vapour to air is Elementary Mass; contained wastewater is Waste; unresolved residual stays explicit unknown. | Native independently measured water/mixture/content/species/stock/fate records and actual receiver links | Nonduplicated actual terminal responsibility and explicit gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| reference_complete | site_fulfilled_meal | Actual complete compatible menu/portion/recipient/occasion supply, all components/declines/partials/reversals reconciled; Count not food equivalence. | Service ledger, physical gate and actual acceptance rule |
| native_complete | every numeric operand | Own value/unit/basis/method/state/sample_time/source and actual each-total/conversion evidence; collection raw keys are individual operands, not one general provenance flag. | Original native instruments/records/conversion sources |
| outputs_complete | both actual nodes | Every independently intended output and recipient/gate/state/handoff/time/source/nativequantity and complete alluser driver retained; staff support not automatic excluded sales. | Output/consumer and allocation ledger |
| physical_complete | all actual lifecycle duties | Complete provider OR completed exclusive missing stages for food/transport/wash/receiver/assets/land; no unsupported omission/overlap. | Actual stage-coverage matrix and completed integrated data links |
| state_and_fate | food water material fluids | Actual supplied/prepared/served/stock/wetdry/retained content/waste/usable product/species/medium resolved separately; genuine whole/component audits nonadditive. | Paired batch/stock/sampling/receiver/environment records |
| period_and_life | full alluser life and N0 | Observed plus sourced compatible remaining or termination across all users/periods, actual idle/failure/source/carry/receiver/final resolution. Unassigned duty blocks completeness. | Full asset history/lifetime source and final resolved pool ledger |
| identity_restriction | all exchanges | Each actual concrete exchange needs verified UUID/support/property/unit and gate-compatible evidence before final data use. Semantic candidate umbrellas require actual typed expansion. A verified electricity or heat flow using the ILCD energy-property label Net calorific value is allowed on its evidenced energy basis; do not substitute a fuel-specific calorific factor or an unmatched state. | Actual identity/detail/support verification; explicit unresolved metadata |
| complete_offsite_ingredients | offsite_preparation_dispatch | Expand each actual case under `offsite_ingredients` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_food` |
| complete_offsite_recipe_water | offsite_preparation_dispatch | Expand each actual case under `offsite_recipe_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_food` |
| complete_offsite_operating_water | offsite_preparation_dispatch | Expand each actual case under `offsite_operating_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_utilities` |
| complete_offsite_electricity | offsite_preparation_dispatch | Expand each actual case under `offsite_electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_utilities` |
| complete_offsite_fuel | offsite_preparation_dispatch | Expand each actual case under `offsite_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_utilities` |
| complete_offsite_thermal | offsite_preparation_dispatch | Expand each actual case under `offsite_thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_utilities` |
| complete_offsite_cleaning_materials | offsite_preparation_dispatch | Expand each actual case under `offsite_cleaning_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_materials` |
| complete_offsite_packaging | offsite_preparation_dispatch | Expand each actual case under `offsite_packaging` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_materials` |
| complete_offsite_asset_life | offsite_preparation_dispatch | Expand each actual case under `offsite_asset_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_assets` |
| complete_offsite_reusables_life | offsite_preparation_dispatch | Expand each actual case under `offsite_reusables_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_assets` |
| complete_offsite_provider | offsite_preparation_dispatch | Expand each actual case under `offsite_provider` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_providers` |
| complete_offsite_freight | offsite_preparation_dispatch | Expand each actual case under `offsite_freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_freight` |
| complete_offsite_fluid_supply | offsite_preparation_dispatch | Expand each actual case under `offsite_fluid_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_materials` |
| complete_offsite_returned_food_receipt | offsite_preparation_dispatch | Expand each actual case under `offsite_returned_food_receipt` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_handoff` |
| complete_offsite_dirty_receipt | offsite_preparation_dispatch | Expand each actual case under `offsite_dirty_receipt` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_handoff` |
| complete_offsite_withdrawal | offsite_preparation_dispatch | Expand each actual case under `offsite_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_environment` |
| complete_offsite_unused_return | offsite_preparation_dispatch | Expand each actual case under `offsite_unused_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_useful_food | offsite_preparation_dispatch | Expand each actual case under `offsite_useful_food` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_food` |
| complete_offsite_usable_reusables | offsite_preparation_dispatch | Expand each actual case under `offsite_usable_reusables` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_recovered_fluid | offsite_preparation_dispatch | Expand each actual case under `offsite_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_other_meals | offsite_preparation_dispatch | Expand each actual case under `offsite_other_meals` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_outputs` |
| complete_offsite_prep_waste | offsite_preparation_dispatch | Expand each actual case under `offsite_prep_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_food` |
| complete_offsite_pack_waste | offsite_preparation_dispatch | Expand each actual case under `offsite_pack_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_cleaning_solids | offsite_preparation_dispatch | Expand each actual case under `offsite_cleaning_solids` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_asset_waste | offsite_preparation_dispatch | Expand each actual case under `offsite_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_effluent | offsite_preparation_dispatch | Expand each actual case under `offsite_effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_fluid_waste | offsite_preparation_dispatch | Expand each actual case under `offsite_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_fates` |
| complete_offsite_species | offsite_preparation_dispatch | Expand each actual case under `offsite_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_offsite_environment` |
| complete_site_ingredients | onsite_finish_service | Expand each actual case under `site_ingredients` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_food` |
| complete_site_recipe_water | onsite_finish_service | Expand each actual case under `site_recipe_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_food` |
| complete_site_operating_water | onsite_finish_service | Expand each actual case under `site_operating_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_utilities` |
| complete_site_electricity | onsite_finish_service | Expand each actual case under `site_electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_utilities` |
| complete_site_fuel | onsite_finish_service | Expand each actual case under `site_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_utilities` |
| complete_site_thermal | onsite_finish_service | Expand each actual case under `site_thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_utilities` |
| complete_site_cleaning_materials | onsite_finish_service | Expand each actual case under `site_cleaning_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_materials` |
| complete_site_packaging | onsite_finish_service | Expand each actual case under `site_packaging` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_materials` |
| complete_site_asset_life | onsite_finish_service | Expand each actual case under `site_asset_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_assets` |
| complete_site_reusables_life | onsite_finish_service | Expand each actual case under `site_reusables_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_assets` |
| complete_site_provider | onsite_finish_service | Expand each actual case under `site_provider` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_providers` |
| complete_site_freight | onsite_finish_service | Expand each actual case under `site_freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_freight` |
| complete_site_fluid_supply | onsite_finish_service | Expand each actual case under `site_fluid_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_materials` |
| complete_site_withdrawal | onsite_finish_service | Expand each actual case under `site_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_environment` |
| complete_site_unused_return | onsite_finish_service | Expand each actual case under `site_unused_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_useful_food | onsite_finish_service | Expand each actual case under `site_useful_food` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_food` |
| complete_site_usable_reusables | onsite_finish_service | Expand each actual case under `site_usable_reusables` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_recovered_fluid | onsite_finish_service | Expand each actual case under `site_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_returned_food | onsite_finish_service | Expand each actual case under `site_returned_food` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_handoff` |
| complete_site_dirty_return | onsite_finish_service | Expand each actual case under `site_dirty_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_handoff` |
| complete_site_other_meals | onsite_finish_service | Expand each actual case under `site_other_meals` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_outputs` |
| complete_site_prep_waste | onsite_finish_service | Expand each actual case under `site_prep_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_food` |
| complete_site_pack_waste | onsite_finish_service | Expand each actual case under `site_pack_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_cleaning_solids | onsite_finish_service | Expand each actual case under `site_cleaning_solids` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_asset_waste | onsite_finish_service | Expand each actual case under `site_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_effluent | onsite_finish_service | Expand each actual case under `site_effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_fluid_waste | onsite_finish_service | Expand each actual case under `site_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_fates` |
| complete_site_species | onsite_finish_service | Expand each actual case under `site_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_site_environment` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### offsite_ingredients

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Expand each actual species/material/formulation/lot/supplied state separately; include retained moisture/bone/skin and real preparation losses. Prepared component bought externally retains complete upstream food/preparation scope. Food is not combined with package tare.

- Selected flow: Actual individual food beverage and composition ingredients
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual stock receipts and supplier lot state, recipe amount, preparation and food fate evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_recipe_water

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual composition water/ice only; state/phase and actual melting/retention collected. Operational washing water is separate, not a second recipe input.

Residual inventory requirement after the independently identified cases `offsite_recipe_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual added recipe water and ice
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured batch addition and compatible ice/liquid mass basis. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_operating_water

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual purchased washing/dishwashing/hygiene/holding/cleaning water. Not presumed equal wastewater or vapour. Real source abstraction is its own elementary row.

Residual inventory requirement after the independently identified cases `offsite_operating_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased preparation cleaning and equipment water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Supplier/meter scope and actual enduse/stock/receiver states. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_electricity

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual node-owned powered duties and necessary standby. Offsite duties include actual own cold-chain/vehicle charging only if not provider-covered; onsite duties include actual venue/temp kitchen loads only once.

Residual inventory requirement after the independently identified cases `offsite_electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen transport holding finishing and cleaning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual meter/charging interval, coverage, all-consumer and idle allocation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_fuel

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Expand actual carrier/grade/state and duty. Fuel-stock supply and burned quantity are separate; complete transport/provider-covered fuel is not repeated. No particular stove/vehicle/generator presumed.

- Selected flow: Actual individual cooking transport and equipment fuel supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Opening, net receipts, closing and paired unused returns plus separately supported consumption and emission evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_thermal

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual externally delivered useful thermal service at evidenced state/gate; do not duplicate provider fuel/plant/losses or infer an energy plant from ordinary cooking.

Residual inventory requirement after the independently identified cases `offsite_thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased useful heating or cooling service
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Delivered thermal quantity, native units, temperature/service state and complete provider boundary. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_cleaning_materials

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Each actual detergent/disinfectant/cloth/absorbent/aid is separate by material/formulation and stock. Stock netting removes only matching unused supply, not USED dirty returns.

Residual inventory requirement after the independently identified cases `offsite_cleaning_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual separate cleaning sanitation and support materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual material receipt/stock/dilution/composition and enduse/fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_packaging

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Before packing food state and after packing protected state are linked to actual container/lid/liner/label/contact or thermal role. Single-use consumption, rejects and waste distinct from reusable life/return. Distribution is not packaging activity.

- Selected flow: Actual individual single-use protective food and serving packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack material/size/count/mass, EACH versus TOTAL, food-contact state and reuse/enduse records. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_asset_life

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Conditional counted compatible asset-service cases only. Full building/site/fitout/kitchen/refrigeration/vehicle/temp oven/hot-box/wash/ICT/equipment manufacture-install-maintain-replace-EOL across every consumer/period. Land is native area/time, not Count; actual land interfaces expand separately if not fully covered.

- Selected flow: Actual complete-life site kitchen transport and equipment service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_assets; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_assets`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual asset identity/coverage, full-life observed plus sourced compatible remaining use or actual termination, native driver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_reusables_life

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Each actual counted reusable asset service has real manufacture/installation where applicable/maintenance/replacement/EOL and all-user life. Dirty return is old-state transfer, not new manufacture or automatic negative credit. Wash/provider resources exclusive.

- Selected flow: Actual complete-life reusable containers tableware utensils and textiles
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_assets; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_assets`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual item/material, observed and sourced remaining cycles or terminated total, wash and retirement coverage. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_provider

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Only genuinely counted completed compatible service cases. Complete physical scope OR actual completed exclusive missing-stage supplement before use. Actual provider native mass/energy/distance/time basis must expand with verified property/unit, never forced into Count. Generic invoice/outsourcing cannot swallow real kitchen/transport/wash/assets.

- Selected flow: Actual complete complementary physical provider services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_providers; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_providers`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Stage-owner/covered-excluded component matrix, completed actual quantities and provider links. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_freight

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual unique load/leg full wet food plus ice/pack/container/support/equipment cargo. Offsite owns outgoing and return interface unless exact disjoint scope evidenced onsite. Complete carrier coverage OR direct exclusive own-fleet energy/assets/species/receivers, never both.

- Selected flow: Actual unique packed food equipment supply and receiver freight
- Flow property / unit: Mass * Length / t*km
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_freight; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_freight`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual packed wet payload, distance, EACH/TOTAL repetition, THAT-record share inside sum and same finalN once. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_fluid_supply

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Actual independent material/species/grade make-up or new standalone stock. Factory-installed new-equipment charge belongs equipment content, not new standalone supply when absent opening stock. Stored/installed/recovered roles exclusive.

- Selected flow: Actual standalone operating refrigerant and heat-transfer fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Exact species, stock, equipment service events, unused returns, retained charge and all fates. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_returned_food_receipt

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Same actual food return transferID/state/native quantity as onsite return; collect completed accepted destination and retain prior burden/stock genealogy. Not negative manufacture or extra virgin supply. Preserve original burden and linked native quantity/coverage; do not add another ingredient/reusable manufacture. Include only actual new rework/wash/storage/transport responsibility.

- Selected flow: Actual usable unserved food returned to offsite kitchen
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual paired old-state return/rework/retained WIP and independently identified discard fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_dirty_receipt

Owner and original flow role: offsite_preparation_dispatch / inputs / product

Paired onsite dirty-return transferID/wet state/native quantity to actual receiving offsite wash. Retained food/water content audit is nonadditive with whole load; actual extra wash energy/material/water and receiver fates collected here once. Preserve original burden and linked native quantity/coverage; do not add another ingredient/reusable manufacture. Include only actual new rework/wash/storage/transport responsibility.

- Selected flow: Actual used reusable items returned for offsite washing
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual returned count/wet mass, actual wash event and complete owner/receiver scope. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_withdrawal

Owner and original flow role: offsite_preparation_dispatch / inputs / elementary

Only actual direct environmental source and compartment at node; no purchased supply duplicated as resource abstraction. Expand sources separately.

- Selected flow: Actual direct source-specific water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual source/permit/meter/event, geography and source medium identity. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_unused_return

Owner and original flow role: offsite_preparation_dispatch / outputs / product

Only genuinely unused supply returned to actual receiver. Match original material/state and stock pool. Gross S input plus UNUSED output OR (S-UNUSED) input and omit output; do not mix. Used items/fluids are not unused.

- Selected flow: Actual matched unused food and supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Paired original receipt/stock/return native mass/state/receiver/time and selected accounting convention. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_useful_food

Owner and original flow role: offsite_preparation_dispatch / outputs / product

Actual lawful accepted usable product/donation/redeployment boundary exit with species/composition/state/receiver/native quantity. Not target meal service and not automatically waste/substitution credit. Internal returned food uses paired transfer instead. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual accepted usable prepared-food external transfer
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual disposition, recipient/handoff/quality, recorded quantity/state and burden responsibility. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_usable_reusables

Owner and original flow role: offsite_preparation_dispatch / outputs / product

Actual retained usable old-state asset/material export, not new manufacture avoided automatically. Internal dirty return is separate paired transfer; supplier-covered reused life not repeated. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual usable reusable equipment and textile external transfers
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual component/material state, prior ownership burden, receiver/native quantity and destination. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_recovered_fluid

Owner and original flow role: offsite_preparation_dispatch / outputs / product

Exact independently recovered usable old-state species accepted by actual receiver, separate from unused supply and contained waste. No virgin manufacture deduction or automatic credit. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual usable recovered equipment-fluid export
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Recovery work order, species/mass/retained state, receiver/quality and all content fates. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_other_meals

Owner and original flow role: offsite_preparation_dispatch / outputs / product

Each actual independently intended other meal/service-version/recipient output has its own identity, exact supplied gate, time/source and native Count after reversals. Do not count internal components/returns as final services. Other real food goods use useful_food; independently supplied nonmeal products must expand into their actual property/unit cards, not be forced into Count or omitted from shared drivers. This is full PRE-ATTRIBUTION operation evidence, not automatic extra co-product in target-attributed LCI. Physical output quantity is never multiplied by targetshare. Follow allocation_projection for independent subdivision versus genuine jointly produced outputs. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual other independently supplied meal-service occasions
- Flow property / unit: Count / Item(s)
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_outputs`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: All intended-output ledger including other client jobs, staff-support responsibility, partials, and compatible native output quantity/state/handoff. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_prep_waste

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Expand trimming/peels/bones/spill/offspec/cooking residues by actual material and receiving treatment. Rework/retained WIP/usable return are not discarded waste.

- Selected flow: Actual distinct preparation cooking handling and transport food residual waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Source batch and native wet/dry composition, actual path and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_pack_waste

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Each actual material/food-residue/receiver condition separately. Whole contained load and packaging/component audit are nonadditive; reusable washing/return not single-use disposal.

Residual inventory requirement after the independently identified cases `offsite_pack_waste_paper_pack`; `offsite_pack_waste_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual independent food and serving packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_cleaning_solids

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Whole genuine mixture plus nonadditive substrate/captured food/fat/chemical/fluid audit. Independent species/materials or separate fates are expanded rather than merged.

- Selected flow: Actual spent wipes filters absorbents and captured solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual substrate/capture genealogy and measured native mass/component/receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_asset_waste

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Actual whole retained-content asset OR separately removed component exits, never additive duplicate whole/component loads. Preserve factory fluid and retained contents in nonadditive audit.

- Selected flow: Actual discarded equipment containers utensils textiles and components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual retirement/repair/part-replacement, full asset ownership and real receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_effluent

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Actual liquid/food/fat/chemical state passed to sewer/tank/provider receiver; not environmental vapour and not assumed purchased-water residual. Unrelated separated oil/solids expand own actual exchanges.

- Selected flow: Actual contained preparation washing and cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured recipient handoff/composition/stock and treatment coverage; actual terminal water view. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_fluid_waste

Owner and original flow role: offsite_preparation_dispatch / outputs / waste

Actual contained collected waste by exact species/state and receiver, separate from direct air release or useful recovered export. Whole equipment retained charge is nonadditive content.

- Selected flow: Actual contained refrigerant or heat-transfer-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Service recovery/stock/whole equipment and final receiver evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### offsite_species

Owner and original flow role: offsite_preparation_dispatch / outputs / elementary

Expand each actual pollutant/species/particle size/basis and receiving medium, including supported actual own transport/cooking/cleaning/refrigerant emissions. Water vapour row excluded here to avoid duplicate. Contained waste is not direct emission; odour or top-up proves neither release nor zero.

Residual inventory requirement after the independently identified cases `offsite_species_co2_fossil_air`; `offsite_species_methane_fossil_air`; `offsite_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual individual species-specific environmental releases
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_offsite_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_offsite_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_ingredients

Owner and original flow role: onsite_finish_service / inputs / product

Expand each actual species/material/formulation/lot/supplied state separately; include retained moisture/bone/skin and real preparation losses. Prepared component bought externally retains complete upstream food/preparation scope. Food is not combined with package tare. ONLY actual additional external independent food/ingredients: exclude every identical physical component/stage already received under site_prepared_receipt. Internal receipts/old-state returns in local stock retain genealogy, not a second upstream food manufacture input.

- Selected flow: Actual individual food beverage and composition ingredients
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual stock receipts and supplier lot state, recipe amount, preparation and food fate evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_recipe_water

Owner and original flow role: onsite_finish_service / inputs / product

Actual composition water/ice only; state/phase and actual melting/retention collected. Operational washing water is separate, not a second recipe input.

Residual inventory requirement after the independently identified cases `site_recipe_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual added recipe water and ice
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured batch addition and compatible ice/liquid mass basis. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_operating_water

Owner and original flow role: onsite_finish_service / inputs / product

Actual purchased washing/dishwashing/hygiene/holding/cleaning water. Not presumed equal wastewater or vapour. Real source abstraction is its own elementary row.

Residual inventory requirement after the independently identified cases `site_operating_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased preparation cleaning and equipment water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Supplier/meter scope and actual enduse/stock/receiver states. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_electricity

Owner and original flow role: onsite_finish_service / inputs / product

Actual node-owned powered duties and necessary standby. Offsite duties include actual own cold-chain/vehicle charging only if not provider-covered; onsite duties include actual venue/temp kitchen loads only once.

Residual inventory requirement after the independently identified cases `site_electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen transport holding finishing and cleaning electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual meter/charging interval, coverage, all-consumer and idle allocation. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_fuel

Owner and original flow role: onsite_finish_service / inputs / product

Expand actual carrier/grade/state and duty. Fuel-stock supply and burned quantity are separate; complete transport/provider-covered fuel is not repeated. No particular stove/vehicle/generator presumed.

- Selected flow: Actual individual cooking transport and equipment fuel supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Opening, net receipts, closing and paired unused returns plus separately supported consumption and emission evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_thermal

Owner and original flow role: onsite_finish_service / inputs / product

Actual externally delivered useful thermal service at evidenced state/gate; do not duplicate provider fuel/plant/losses or infer an energy plant from ordinary cooking.

Residual inventory requirement after the independently identified cases `site_thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased useful heating or cooling service
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_utilities; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_utilities`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Delivered thermal quantity, native units, temperature/service state and complete provider boundary. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_cleaning_materials

Owner and original flow role: onsite_finish_service / inputs / product

Each actual detergent/disinfectant/cloth/absorbent/aid is separate by material/formulation and stock. Stock netting removes only matching unused supply, not USED dirty returns.

Residual inventory requirement after the independently identified cases `site_cleaning_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual separate cleaning sanitation and support materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual material receipt/stock/dilution/composition and enduse/fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_packaging

Owner and original flow role: onsite_finish_service / inputs / product

Before packing food state and after packing protected state are linked to actual container/lid/liner/label/contact or thermal role. Single-use consumption, rejects and waste distinct from reusable life/return. Distribution is not packaging activity.

- Selected flow: Actual individual single-use protective food and serving packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack material/size/count/mass, EACH versus TOTAL, food-contact state and reuse/enduse records. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_asset_life

Owner and original flow role: onsite_finish_service / inputs / product

Conditional counted compatible asset-service cases only. Full building/site/fitout/kitchen/refrigeration/vehicle/temp oven/hot-box/wash/ICT/equipment manufacture-install-maintain-replace-EOL across every consumer/period. Land is native area/time, not Count; actual land interfaces expand separately if not fully covered.

- Selected flow: Actual complete-life site kitchen transport and equipment service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_assets; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_assets`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual asset identity/coverage, full-life observed plus sourced compatible remaining use or actual termination, native driver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_reusables_life

Owner and original flow role: onsite_finish_service / inputs / product

Each actual counted reusable asset service has real manufacture/installation where applicable/maintenance/replacement/EOL and all-user life. Dirty return is old-state transfer, not new manufacture or automatic negative credit. Wash/provider resources exclusive.

- Selected flow: Actual complete-life reusable containers tableware utensils and textiles
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_assets; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_assets`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual item/material, observed and sourced remaining cycles or terminated total, wash and retirement coverage. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_provider

Owner and original flow role: onsite_finish_service / inputs / product

Only genuinely counted completed compatible service cases. Complete physical scope OR actual completed exclusive missing-stage supplement before use. Actual provider native mass/energy/distance/time basis must expand with verified property/unit, never forced into Count. Generic invoice/outsourcing cannot swallow real kitchen/transport/wash/assets.

- Selected flow: Actual complete complementary physical provider services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_providers; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_providers`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Stage-owner/covered-excluded component matrix, completed actual quantities and provider links. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_freight

Owner and original flow role: onsite_finish_service / inputs / product

Actual unique load/leg full wet food plus ice/pack/container/support/equipment cargo. Offsite owns outgoing and return interface unless exact disjoint scope evidenced onsite. Complete carrier coverage OR direct exclusive own-fleet energy/assets/species/receivers, never both.

- Selected flow: Actual unique packed food equipment supply and receiver freight
- Flow property / unit: Mass * Length / t*km
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_freight; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_freight`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual packed wet payload, distance, EACH/TOTAL repetition, THAT-record share inside sum and same finalN once. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_fluid_supply

Owner and original flow role: onsite_finish_service / inputs / product

Actual independent material/species/grade make-up or new standalone stock. Factory-installed new-equipment charge belongs equipment content, not new standalone supply when absent opening stock. Stored/installed/recovered roles exclusive.

- Selected flow: Actual standalone operating refrigerant and heat-transfer fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_materials; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_materials`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Exact species, stock, equipment service events, unused returns, retained charge and all fates. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_withdrawal

Owner and original flow role: onsite_finish_service / inputs / elementary

Only actual direct environmental source and compartment at node; no purchased supply duplicated as resource abstraction. Expand sources separately.

- Selected flow: Actual direct source-specific water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual source/permit/meter/event, geography and source medium identity. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_unused_return

Owner and original flow role: onsite_finish_service / outputs / product

Only genuinely unused supply returned to actual receiver. Match original material/state and stock pool. Gross S input plus UNUSED output OR (S-UNUSED) input and omit output; do not mix. Used items/fluids are not unused.

- Selected flow: Actual matched unused food and supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Paired original receipt/stock/return native mass/state/receiver/time and selected accounting convention. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_useful_food

Owner and original flow role: onsite_finish_service / outputs / product

Actual lawful accepted usable product/donation/redeployment boundary exit with species/composition/state/receiver/native quantity. Not target meal service and not automatically waste/substitution credit. Internal returned food uses paired transfer instead. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual accepted usable prepared-food external transfer
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual disposition, recipient/handoff/quality, recorded quantity/state and burden responsibility. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_usable_reusables

Owner and original flow role: onsite_finish_service / outputs / product

Actual retained usable old-state asset/material export, not new manufacture avoided automatically. Internal dirty return is separate paired transfer; supplier-covered reused life not repeated. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual usable reusable equipment and textile external transfers
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual component/material state, prior ownership burden, receiver/native quantity and destination. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_recovered_fluid

Owner and original flow role: onsite_finish_service / outputs / product

Exact independently recovered usable old-state species accepted by actual receiver, separate from unused supply and contained waste. No virgin manufacture deduction or automatic credit. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual usable recovered equipment-fluid export
- Flow property / unit: Mass / kg
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Recovery work order, species/mass/retained state, receiver/quality and all content fates. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_returned_food

Owner and original flow role: onsite_finish_service / outputs / product

Only actually accepted usable old-state food returned for documented reuse/redeployment within same system; storage/WIP/ownership burden retained. Spoiled/unsafe discarded food is waste. Return loop does not create new purchased ingredient or new final meal.

- Selected flow: Actual usable unserved food returned to offsite kitchen
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Paired food lot/state/quantity/owner/source/receiver/time and actual reuse or final fate. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_dirty_return

Owner and original flow role: onsite_finish_service / outputs / product

Actual dirty container/tableware/utensil/textile transfer with wet retained food/water content. It conveys existing items to offsite wash, not manufacture or new reusable life. Food removed before return remains own actual waste.

- Selected flow: Actual used reusable items returned for offsite washing
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_handoff; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_handoff`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual item count/wet mass/dry substrate/retained components; paired receiver and wash responsibility. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_other_meals

Owner and original flow role: onsite_finish_service / outputs / product

Each actual independently intended other meal/service-version/recipient output has its own identity, exact supplied gate, time/source and native Count after reversals. Do not count internal components/returns as final services. Other real food goods use useful_food; independently supplied nonmeal products must expand into their actual property/unit cards, not be forced into Count or omitted from shared drivers. This is full PRE-ATTRIBUTION operation evidence, not automatic extra co-product in target-attributed LCI. Physical output quantity is never multiplied by targetshare. Follow allocation_projection for independent subdivision versus genuine jointly produced outputs. The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step.

- Selected flow: Actual other independently supplied meal-service occasions
- Flow property / unit: Count / Item(s)
- Amount rule: Preserve full UNNORMALIZED actual native physical output in pre-attribution ledger. Independent output audit-only in target-attributed LCI. Only actual PCR-specific retained genuine joint output uses selected actual physical quantity / same positive profile N_target once; already-per-reference unchanged. Do not apply resource targetshare; follow physical_product_output_quantity precedence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_outputs`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: All intended-output ledger including other client jobs, staff-support responsibility, partials, and compatible native output quantity/state/handoff. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_prep_waste

Owner and original flow role: onsite_finish_service / outputs / waste

Expand trimming/peels/bones/spill/offspec/cooking residues by actual material and receiving treatment. Rework/retained WIP/usable return are not discarded waste.

- Selected flow: Actual distinct preparation cooking handling and transport food residual waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_food; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_food`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Source batch and native wet/dry composition, actual path and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_pack_waste

Owner and original flow role: onsite_finish_service / outputs / waste

Each actual material/food-residue/receiver condition separately. Whole contained load and packaging/component audit are nonadditive; reusable washing/return not single-use disposal.

Residual inventory requirement after the independently identified cases `site_pack_waste_paper_pack`; `site_pack_waste_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual independent food and serving packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual pack removal, contamination state, weighed tare-corrected quantities and receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_cleaning_solids

Owner and original flow role: onsite_finish_service / outputs / waste

Whole genuine mixture plus nonadditive substrate/captured food/fat/chemical/fluid audit. Independent species/materials or separate fates are expanded rather than merged.

- Selected flow: Actual spent wipes filters absorbents and captured solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual substrate/capture genealogy and measured native mass/component/receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_asset_waste

Owner and original flow role: onsite_finish_service / outputs / waste

Actual whole retained-content asset OR separately removed component exits, never additive duplicate whole/component loads. Preserve factory fluid and retained contents in nonadditive audit.

- Selected flow: Actual discarded equipment containers utensils textiles and components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual retirement/repair/part-replacement, full asset ownership and real receiver. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_effluent

Owner and original flow role: onsite_finish_service / outputs / waste

Actual liquid/food/fat/chemical state passed to sewer/tank/provider receiver; not environmental vapour and not assumed purchased-water residual. Unrelated separated oil/solids expand own actual exchanges.

- Selected flow: Actual contained preparation washing and cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measured recipient handoff/composition/stock and treatment coverage; actual terminal water view. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_fluid_waste

Owner and original flow role: onsite_finish_service / outputs / waste

Actual contained collected waste by exact species/state and receiver, separate from direct air release or useful recovered export. Whole equipment retained charge is nonadditive content.

- Selected flow: Actual contained refrigerant or heat-transfer-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_fates; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_fates`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Service recovery/stock/whole equipment and final receiver evidence. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.

#### site_species

Owner and original flow role: onsite_finish_service / outputs / elementary

Expand each actual pollutant/species/particle size/basis and receiving medium, including supported actual own transport/cooking/cleaning/refrigerant emissions. Water vapour row excluded here to avoid duplicate. Contained waste is not direct emission; odour or top-up proves neither release nor zero.

Residual inventory requirement after the independently identified cases `site_species_co2_fossil_air`; `site_species_methane_fossil_air`; `site_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual individual species-specific environmental releases
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility native quantity / positive same-profile N_target once under cp_site_environment; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_environment`
- Sources: `krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

Range evidence need: Actual measurement or matched supported factor/activity/fate with each operand/source and exact substance/medium. No universal per-meal factor, recipe, yield, temperature, lifetime or zero default.


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | actual reference/output | Require actual complete meal-version/recipient/occasion/portion/gate and offered/supplied/declined/partial/reversal evidence. Unique physical fulfilled same-profile N_target, not contractcovers/booking/capacity/eaten mass. No unsupported equivalence across menus/service durations/food quantities. |  |
| validate_route_modules | both real kitchens | Require actual composition input roles, before/after treatment and packing/presentation states, material/service roles, protected receipt-gate handoff and final plated gate. Batch/continuous operation, run/changeover/cleaning/holding linkage and reject/rework/return path complete. No extra fictitious independent nodes or new production swallowed by generic service. | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| validate_pairs | each internal transfer | Same selected receipt-gate ID/quantity/state/time/owner/receiver both sides; dispatch difference actual losses separately; no fixed internal ratio to finalN. Dirty food/water/pack cargo audits nonadditive and oldstate return not virgin credit. |  |
| validate_outputs_allusers | all intended output/resource pools | Every actual intended output and handoff/native quantity, all consumers/nodes/periods and actual attribution decision; positive complete compatible driver and same positive finalN once. Necessary idle/failure/closed/cancel/N0 duty with resolved source/carry/receiver, not erased or fake output. |  |
| validate_native_stocks | food supplies fluids assets | All independent numeric operands have own unit/basis/method/state/sampletime/source. Gross draw and UNUSED output versus net draw/omitted return exclusive; used recovery/installed/stored/factory content separate; native wet/dry/percent/density/temperature/each-total and full-life fields compatible. |  |
| validate_transport | freight and ownfleet/provider | Unique actual load+leg packed wet food/ice/pack/support/equipment; remove only noncargo vehicle tare, repeats once, THAT-record share inside sum and finalN once. Complete carrier OR actual own-fleet energy/vehicle/maintenance/species/receiver/empty-duty coverage once. |  |
| validate_life_coverage | full physical boundary | Actual alluser observed+sourced compatible remaining full-life OR termination, full asset/land/stage matrix and completed missing-stage integration; pending supplements and annual target count do not close boundary. Full kitchen/venue/equipment/reusables/wash/receivers cannot be omitted under contract labels. |  |
| validate_fates | food water direct species | Actual ingredient/prepared/served/unserved/plate/prep/return/rework fate reconciliation; terminal water balance excludes internal/duplicate receiver views; whole/component audit nonadditive. Water vapour Elementary Mass to air; contained wastewater Waste. Exact pollutants/medium, no unknown residual as release or zero. |  |
| validate_identity_and_readiness | final data production | Verify actual concrete flow/support identity/property/unit and matching state/gate/direction before final exchanges; explicit gaps restrict use. Candidate methodology and checker pass are not external UUID verification or publication readiness; quantitative source examples never default factors. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_projection_stage | all input/output variants | Require declared projection_variant/allocation_stage, full pre-attribution output ledger and actual independent-versus-joint-output decision. Full native output amounts/lineage/gates remain unscaled by targetshare. Target-attributed LCI excludes independent other-output evidence as exchanges/co-products; wholepool variant contains full inputs/alloutputs and one designated allocation only. Internal receipts/returns are not co-products. |  |
| validate_input_role_exclusivity | ingredient/internal/returned input cards | Check every source_input_role/internal_external/linked_input_coverage/nativequantity pair. Generic site_ingredients excludes identical physical prepared-receipt quantity/stage. Internal receipt and returned old-state food/reusables do not create second external manufacturing inputs; only actual new rework/wash/storage duty added once. |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_product_quantity_precedence | output ledger and real joint exchanges | The raw ALL-OUTPUT ledger keeps UNNORMALIZED actual full native quantities, not targetshare-scaled or per-reference. In target-attributed LCI independent other meals/products are audit-only, not co-product exchanges. If a documented actual PCR-specific decision retains a genuine joint product as final exchange, use its SELECTED ACTUAL PHYSICAL output quantity / same positive profile N_target ONCE (already-per-reference unchanged); never apply generic resource target-driver share to that physical output. This output rule has precedence over generic resource assignment. Separate unallocated wholepool variant keeps full inputs/alloutputs and exactly one designated attribution step. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only when actual declared boundary and evidence complete |
| downstream_use | Foreground collection package then process and lifecyclemodel projections with true physical receipt/final/return gates and same final reference |
| allowed_use | Physically matching purpose-neutral offsite preparation/transport/onsitefinish complete plated-menu occasions; actual compatible recipient service profile and full exclusive physical chain |
| excluded_use | Unverified concrete exchange binding; missing actual data/full-life/provider/receiver/N0 responsibility; whole event or fullCPC63391 coverage; dropoff-only/pureonsite/non-equivalent shared food; default recipes/yields/nutrition/temperatures/lifetimes |
| required_metadata | Actual operator/sites/job/menu-recipe-composition-portion/service-version/recipient/occasion/gate/timezones; every native operand/source; all outputs/users/periods/stock/transfer/fates; full life and complete provider/receiver coverage |
| required_quality_disclosure | Actual declared projection_variant/allocation_stage, pre-attribution all-output ledger/independent-versus-joint decision and one attribution step; actual collection/calibration/uncertainty/equivalence/attribution, completed missing-stage links and unresolved identities/ranges/source gaps; no complete-chain claim while duties unassigned |
| update_trigger | Actual menu/portion/gate/route/packing/holding/wash/transport/provider/site/asset/receiver or lifetime/identity evidence changes; each independently expanded route reviewed |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD Central Product Classification Version3.0 explanatory notes30Jun2025, printed356–358; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official63391 and neighbouring63310/20/92/93 exclusions; classification context only, not physical route/quantity proof |
| krisp-current-commissary-event-service | handbook | Krisp Events, current operator route/menu/services; https://www.krispevents.com/ | Primary qualitative own commissary/preparation/delivery/onsitefinish/plated menu/staff/rentals/setup/breakdown; no numeric factors |
| box-current-private-dining | handbook | The Box Events and Catering, current Private Dining; https://theboxeventsandcatering.co.uk/private-dining/ | Primary qualitative own kitchen preparation/transport/onsitefinish/setup/service/cleanup; illustrative course count not requirement |
| silverfeast-current-event-route | handbook | Silver Feast Catering, current operator route/run of show; https://silverfeastcatering.ca/ | Primary qualitative component coldchain/equipment loadout/onsite ovens-hotboxes-plating/course service/cleanup/rental pickup; illustrative time/guest/price figures not factors |
| sodexo-central-kitchen-2024 | handbook | Sodexo Indonesia, Introducing Central Kitchen,6Feb2024; https://id.sodexo.com/newsroom/2024/sodexo-central-kitchen | Primary qualitative offsite central kitchen serving events and daily employee meals; labels do not define method; announcement not actual client contract/quantity |
