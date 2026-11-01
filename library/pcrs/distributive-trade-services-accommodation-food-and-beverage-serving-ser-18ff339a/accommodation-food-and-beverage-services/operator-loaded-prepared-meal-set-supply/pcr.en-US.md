---
pcr_id: pcr.operator-loaded-prepared-meal-set-supply
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Operator-loaded prepared meal-set supply

## 1. Scope and Applicability

For actual offsite kitchen-prepared protected meal-set supply transported and loaded to a specified operator galley/receiving gate. The actual equivalent menu/recipe/component/portion/pack/state/service-version, quality and complete operator receipt define one output. Airline, other customer, contract duration, brand and CPC labels alone create no methodology. One actual equivalent set may require several separately tracked components; flight, trolley, passenger, tray or invoice is not automatically one set. [gategroup-finalizer-current; gategroup-transport-current]

One integrated provider process owns real composition/preparation/cooking or cold assembly, protective packing/holding, dispatch, ground transport and operator loading, plus actual contract-owned postgate returns/sorting/wash/cleanup/receiver duties. Every real stage/run/leg/return retains its own owner and native records, not a fictitious independent kitchen product bought again. The reference gate is operator received loaded supply; no passenger-plated/eaten service or universal entire-flight passenger transport is claimed. Actual operator-owned onboard storage/reheat/serve remains separately disclosed responsibility; an expanded served-meal claim requires reviewed stages and changed gate. [gategroup-cook-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current]

Include all actual upstream food/supply/losses and full site/land/building/kitchen/refrigeration/ground fleet/high-loader/equipment/reusable/textile life, necessary idle/failed/cancelled/N0 duties and actual receiver scope. Actual protected food, package counts, trolley counts, wet cargo, stock/food moisture/fat/solute/water fates are distinct nonadditive views. Rejected/partial/reversed supply does not manufacture fulfilled output. No universal recipe/portion/nutrition/temperature/holding time/flight/return/waste or lifetime factor is inferred.

Pure onsite served meals, offsite-prepared onsite-finished recipient plated services, beverage-only, whole passenger journeys, industrial preserved/frozen manufacturing and unrelated lounge/retail/laundry/energy/water production are outside this bounded method unless actually reviewed and expanded. Ordinary actual cooking/cold holding/wash and contracted returns stay included. Public operator duties establish qualitative route questions, not a signed target contract or legal safety threshold. Missing actual quantities/identities are gaps with restricted use, never zeros.

An operator-accepted loaded supply that later returns unused or as leftovers does not automatically reduce fulfilled N_target. Actual refusal/rejection/cancellation or evidenced acceptance-gate reversal is distinct from postgate return. Postgate food genealogy and actual supplier-owned transport/wash/fate responsibility remain, without another final output or automatic negative credit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.operator-loaded-prepared-meal-set-supply |
| classification_refs | CPC3.0:63392 proxy |
| covered_products | Actual equivalent protected prepared meal-set supply at actual loaded operator receipt with actual supplier-owned return/wash duties |
| excluded_products | Passenger served/eaten meal, whole flights, pure onsite service, non-equivalent portions/components, planned capacity, unreviewed industrial routes |
| representative_product | Actual operator-loaded receipt of equivalent prepared meal-set supply of actual menu/recipe/portion/pack/state/version |
| production_route | Actual ingredients -> kitchen composition/treatment -> protected packing/holding -> ground transport/loading/operator receipt -> actual contract returns/wash/receivers |
| market_state | Actual physically loaded received prepared supply; no universal hot/cold/cooked state |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual operator-loaded receipt of equivalent prepared meal-set supply |
| How much | 1 Item(s) |
| How well | One actual equivalent full components/portion/menu/recipe/pack/state/service-version physically loaded and operator received under operator_gate; quality/order changes/partials/reversals reconciled |
| How long or cycle | Actual batch/loading/receipt/return/wash/stock/reporting periods, full life phases and timezone/UTC offset/DST/elapsed durations; no default flight duration |
| reference_flow_link | meal_set_supply |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actual operator-loaded receipt of equivalent prepared meal-set supply |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_provider_kitchen_loading_operator_galley; actual_menu_recipe_components_portion_pack_service_version; actual_operator_loaded_receipt_state_time_acceptance; actual_required_quantity_quality_and_order_changes; no_assumed_flight_trolley_passenger_equivalence; actual_contract_owned_return_wash_receiver_duties; actual_food_pack_wet_cargo_stock_water_native_views; all_outputs_users_periods_idle_failed_N0_resolution; complete_alluser_asset_land_reusable_life; exclusive_completed_provider_missing_stages; each_numeric_operand_unit_basis_method_state_sample_time_source |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_gate | meal_set_supply | Count | Item(s) | Count only actual complete equivalent prepared meal-set supply received by the specified operator/galley after physical loading, required component/quality/quantity checks, actual order changes and acceptance/reversal reconciliation. Actual contract gate must be evidenced; public job pages are not signed receipts. Do not substitute prepared availability, scheduled meals, flights, passengers, trolley count, invoice or eaten mass. |
| native_operand | all inventory rows | Actual compatible native property | Actual native unit | Each independent number has its own value/unit/basis/method/state/sample_time/source including shares/factors/stocks/lifetimes. State-compatible sourced conversion only; EACH repeats once, TOTAL unchanged. |
| food_water_state | ingredients; recipe_water; food fates; recipe_water_liquid_tap | Mass; actual water content | kg actual state | Preserve actual raw/thawed/prepared/cooked/held/loaded/returned wet/dry/edible/bone/skin/water/fat/solute states, recipe and stock quantities; no universal yield. Same-sample water-only wet fraction w=water/wet and dry ratio r=water/nonwater imply w=r/(1+r), percent first; loss-on-drying with other volatiles is not water. Terminal balances use actual external terminal exits plus actual closing stocks, excluding internal enduse/transfer, component contents and duplicate receiver views. Water vapour is water species to air Mass; contained effluent is Waste. Independent actual species/medium/particle/basis/factor evidence required; unknown residual not emission or zero. |
| normalization_once | all inventory rows | Native property | per Item(s) | Direct physical trace and independent-process subdivision first. For actual shared duty assign each compatible raw record times THAT target_driver divided by positive complete all_consumer_driver, then sum. Include every customer/menu/flight/job/staff/nonfood user and period; necessary idle/failed/cancelled/closed/readiness resources remain in responsible pool. N_target=0 or zero transfer retains source/carry/receiving/finalresolution without division or fake output; unresolved responsibility blocks completeness. Assigned target TOTAL still divides same positive profile N_target once; only already-per-reference quantities remain unchanged. |
| stock_exclusivity | all stocks and fluids | Mass | kg actual state | Net receipts remove only tare before outbound returns. Gross drawn S=attributed opening+inbound-closing plus actual paired responsibility transfers. Use S input+matched UNUSED return output OR (S-UNUSED) input and omit that output. Used ware/food/fluids retain original burden, not virgin supply deduction or automatic credit. Stored/installed/recovered fluid roles exclusive; factory new charge absent opening is equipment entry, not another purchase. Track all actual useful/waste/wholeequipment retained-content/direct-release fates; whole/component contents nonadditive, unknown balance not emission. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual operating kitchen/provider with specified operator galley/receipt and equivalent protected meal-set state/version |
| starting_condition_role | Real prepared-supply production and supporting full-life responsibility; existing assets not burden-free |
| product_classification_scope | CPC63392 proxy; actual bounded operator-loaded supply route |
| recursive_input_rule | No identical final supply purchased recursively; actual external prepared components retain upstream coverage, internal receipts/returns preserve prior burden once |
| upstream_dataset_requirement | Include upstream actual food/material/utilities/losses and complete site/building/fitout/kitchen/vehicle/high-loader/refrigeration/equipment/reusable/textile manufacture-install-maintain-replace-EOL. Match every physical stage to one complete provider OR direct actual duty; missing stages must be actually completed and integrated once with native amount/state/source/time/owner/coverage/exclusions before complete-scope use. Invoice, lease or future plan is insufficient. |
| disclosure | Actual contract/operator gate and responsibility/quality/version, complete all users/periods/assets/provider/receiver/native stocks and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operator_gate | final output | Count only actual complete equivalent prepared meal-set supply received by the specified operator/galley after physical loading, required component/quality/quantity checks, actual order changes and acceptance/reversal reconciliation. Actual contract gate must be evidenced; public job pages are not signed receipts. Do not substitute prepared availability, scheduled meals, flights, passengers, trolley count, invoice or eaten mass. | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| physical_route | meal_set_supply | Actual individual ingredients, prepared components, recipe water/ice/oils/seasonings enter real kitchen composition/preparation/cooking or cold assembly. Record before/after formulation/treatment states, actual food losses/offspec routes and protected pack state. Holding, dispatch, ground transport and customer-specified loading have separate event/owner links in this integrated provider process; no fabricated extra factory or purchased identical final supply. | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| packing_logistics | food and package interfaces | Link actual prepared food before packing to protected meal components/pack/tray/trolley loaded gate; packaging material/contact/thermal/label/reuse roles, rejects and end-of-use explicit. Distribution/transport/loading is a separately recorded duty, not a packaging conversion. Actual net food, pack count, packed wet cargo and trolley count are independent nonadditive measurements; no fixed meal/trolley ratio. | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| contract_boundary | all stages | Final product is operator-loaded prepared supply, not passenger served/eaten meal. Include all ACTUAL supplier-contract-owned postgate returns, collection, sorting, food/waste disposition, wash/cleaning and receivers in its numerator. Record actual operator-owned onboard holding/reheating/plating/serving responsibility separately; do not silently claim these completed or universal whole-flight passenger traction. A claim of passenger complete-meal service requires actual reviewed expanded stages and changed gate. | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| exclusive_coverage | all inputs assets providers | Include upstream actual food/material/utilities/losses and complete site/building/fitout/kitchen/vehicle/high-loader/refrigeration/equipment/reusable/textile manufacture-install-maintain-replace-EOL. Match every physical stage to one complete provider OR direct actual duty; missing stages must be actually completed and integrated once with native amount/state/source/time/owner/coverage/exclusions before complete-scope use. Invoice, lease or future plan is insufficient. |  |
| all_user_pool | resource duties | Direct physical trace and independent-process subdivision first. For actual shared duty assign each compatible raw record times THAT target_driver divided by positive complete all_consumer_driver, then sum. Include every customer/menu/flight/job/staff/nonfood user and period; necessary idle/failed/cancelled/closed/readiness resources remain in responsible pool. N_target=0 or zero transfer retains source/carry/receiving/finalresolution without division or fake output; unresolved responsibility blocks completeness. Assigned target TOTAL still divides same positive profile N_target once; only already-per-reference quantities remain unchanged. |  |
| full_life_land | assets land reusables | Enumerate actual asset/service consumers, nodes, life phases, stock/reporting/maintenance/replacement/termination and receiver periods. Use observed all-user life plus sourced compatible remaining service OR actual terminated total; never annual targetN/nameplate capacity/invented years. Actual land occupation area*time and evidenced from-state/to-state/event/date/area are native quantities, not Count. Provider-covered land/life is not repeated; actually complete excluded stages once. |  |
| stock_return_fluid | all stock pools | Net receipts remove only tare before outbound returns. Gross drawn S=attributed opening+inbound-closing plus actual paired responsibility transfers. Use S input+matched UNUSED return output OR (S-UNUSED) input and omit that output. Used ware/food/fluids retain original burden, not virgin supply deduction or automatic credit. Stored/installed/recovered fluid roles exclusive; factory new charge absent opening is equipment entry, not another purchase. Track all actual useful/waste/wholeequipment retained-content/direct-release fates; whole/component contents nonadditive, unknown balance not emission. |  |
| native_food_water | food water air and fates | Preserve actual raw/thawed/prepared/cooked/held/loaded/returned wet/dry/edible/bone/skin/water/fat/solute states, recipe and stock quantities; no universal yield. Same-sample water-only wet fraction w=water/wet and dry ratio r=water/nonwater imply w=r/(1+r), percent first; loss-on-drying with other volatiles is not water. Terminal balances use actual external terminal exits plus actual closing stocks, excluding internal enduse/transfer, component contents and duplicate receiver views. Water vapour is water species to air Mass; contained effluent is Waste. Independent actual species/medium/particle/basis/factor evidence required; unknown residual not emission or zero. |  |
| freight_empty | transport and loading | Each unique actual leg/load uses full packed wet cargo including food/ice/pack/support/equipment, removing only noncargo vehicle tare. EACH quantity repeats actual count once; TOTAL unchanged; THAT-record share inside sum. Complete matched carrier OR exclusive actual own-fleet fuel/electricity/loading/holding/maintenance/full assets/species/receiver once. Zero cargo kg*km cannot carry necessary empty/positioning/return/failed duties: include actual matched complete coverage or completed native underlying duty once, never fictitious payload or output. |  |
| output_projection | all intended outputs | Complete pre-attribution ALL-OUTPUT ledger keeps each outputID/recipient/gate/state/handofftime/source and its own full UNNORMALIZED native quantity, including other meal/nonmeal/asset/fluid handoffs. First distinguish independent subdivision from genuine joint products; document actual PCR-specific attribution decision/physical evidence/owner/lineage/allocation_stage. In target-allocated LCI, independent other meals/services are evidence-only, not extra co-products after resource assignment. A retained genuine joint output final exchange uses SELECTED actual physical amount / same positive profile N_target once, never resource targetshare; already-per-reference unchanged. Separate unallocated wholepool requires full inputs+alloutputs and one designated attribution step. This output rule takes precedence over generic resource rule. |  |
| reject_rework | food pack returns and batches | Link every raw/prepared/held/loaded rejected/partial/reversed or returned state to producing batch, actual rework/reheat/redeploy/retained stock/usable export/discard and real receiver. Original burden stays; add only actual new work/transport/wash/storage. Internal old-state food/dirty returns are genealogy, not new manufacture or final meal-set counts. Paired transfer has real source/receiver/gate/state/time/receipt quantity on both sides, transit differences separately evidenced. Rejects are not accepted output. |  |


freight_empty has precedence for freight: record_share is the SAME evidenced target_driver/all_consumer_driver share, applied ONCE inside each leg sum (direct physical target trace share=1). A freight total already assigned by freight_sum is not rescaled under all_user_pool; divide by same positive compatible N_target once only. Already-per-reference freight remains unchanged. Do not multiply record_share and the identical generic target share twice.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| meal_set_supply | Integrated kitchen prepared-supply loading and actual return/wash responsibility | required | Actual recipe/preparation/pack/groundloading/operator receipt and contract duties | Real provider kitchen formulation/treatment/packing and ground logistics/loading/return/wash, actual stage IDs and owners | meal_set_supply |

Batch recipe/preparation/packing/loading/wash runs overlap continuous cold holding/readiness. Link each input/output/cleaning/changeover to actual run and period, keeping one actual shared burden owner. Before/after formulated/treated food state, food-contact/thermal packing state and actual loaded handoff are mandatory. Formulation/treatment/packing may be same real kitchen; not all components are mixed or heated.

Actual dispatch/receipt/return pairs retain source+receiving node, transferID/state/time and native receipt quantity on both actual sides; dispatch losses separately evidenced. Internal prepared food/dirtyware/usable return retains prior burden; net food, packed wet cargo and dirty load/component views nonadditive. These genealogical transfers are not independent final outputs or new external manufacture. Every actual output and all users/periods have distinct native ledger under output_projection.

### Process: Integrated provider prepared meal-set supply loading and actual return/wash (`meal_set_supply`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`recipe_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_food and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive responsible native quantity under cp_utilities and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual externally delivered useful heat (`thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive responsible native quantity under cp_utilities and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual liquid treated tap-water supply (`water_supply_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive responsible native quantity under cp_water and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual independently recorded synthetic detergent supply (`materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_materials and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual operator-loaded receipt of equivalent prepared meal-set supply (`meal_set_supply`)

Actual protected prepared equivalent set fulfilled at loaded operator receipt gate under operator_gate; not final passenger plated/eaten meal.

- Selected flow: Actual operator-loaded receipt of equivalent prepared meal-set supply
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

##### Waste flows

###### Actual discarded prepared but unserved food (`unserved_waste`)

Actual held/loaded-not-received/refused/returned unserved disposition; not all prepared food is cooked and not every return is waste.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual discarded prepared but unserved food `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual supplier-responsibility returned served-food waste (`plate_waste`)

Only actual contracted downstream returned served leftovers; operator gate stays final and leftovers do not reverse fulfilled supply automatically. Keep unserved/plate streams and foreign/other-job returns separate.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual supplier-responsibility returned served-food waste `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual separately collected paper packaging waste (`pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual separately collected metal packaging waste (`pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

##### Elementary flows

###### Actual water vapour released to air (`water_vapour`)

Independent actual water species to air quantity/basis; unknown terminal difference not water vapour.

- Selected flow: Actual water vapour released to air `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_air and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_air and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_air and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_air and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_user_pool | resource duties | Direct physical trace and independent-process subdivision first. For actual shared duty assign each compatible raw record times THAT target_driver divided by positive complete all_consumer_driver, then sum. Include every customer/menu/flight/job/staff/nonfood user and period; necessary idle/failed/cancelled/closed/readiness resources remain in responsible pool. N_target=0 or zero transfer retains source/carry/receiving/finalresolution without division or fake output; unresolved responsibility blocks completeness. Assigned target TOTAL still divides same positive profile N_target once; only already-per-reference quantities remain unchanged. |  |
| full_life_land | assets land reusables | Enumerate actual asset/service consumers, nodes, life phases, stock/reporting/maintenance/replacement/termination and receiver periods. Use observed all-user life plus sourced compatible remaining service OR actual terminated total; never annual targetN/nameplate capacity/invented years. Actual land occupation area*time and evidenced from-state/to-state/event/date/area are native quantities, not Count. Provider-covered land/life is not repeated; actually complete excluded stages once. |  |
| stock_return_fluid | all stock pools | Net receipts remove only tare before outbound returns. Gross drawn S=attributed opening+inbound-closing plus actual paired responsibility transfers. Use S input+matched UNUSED return output OR (S-UNUSED) input and omit that output. Used ware/food/fluids retain original burden, not virgin supply deduction or automatic credit. Stored/installed/recovered fluid roles exclusive; factory new charge absent opening is equipment entry, not another purchase. Track all actual useful/waste/wholeequipment retained-content/direct-release fates; whole/component contents nonadditive, unknown balance not emission. |  |
| output_projection | all intended outputs | Complete pre-attribution ALL-OUTPUT ledger keeps each outputID/recipient/gate/state/handofftime/source and its own full UNNORMALIZED native quantity, including other meal/nonmeal/asset/fluid handoffs. First distinguish independent subdivision from genuine joint products; document actual PCR-specific attribution decision/physical evidence/owner/lineage/allocation_stage. In target-allocated LCI, independent other meals/services are evidence-only, not extra co-products after resource assignment. A retained genuine joint output final exchange uses SELECTED actual physical amount / same positive profile N_target once, never resource targetshare; already-per-reference unchanged. Separate unallocated wholepool requires full inputs+alloutputs and one designated attribution step. This output rule takes precedence over generic resource rule. |  |
| reject_rework | food pack returns and batches | Link every raw/prepared/held/loaded rejected/partial/reversed or returned state to producing batch, actual rework/reheat/redeploy/retained stock/usable export/discard and real receiver. Original burden stays; add only actual new work/transport/wash/storage. Internal old-state food/dirty returns are genealogy, not new manufacture or final meal-set counts. Paired transfer has real source/receiver/gate/state/time/receipt quantity on both sides, transit differences separately evidenced. Rejects are not accepted output. |  |


freight_empty has precedence for freight: record_share is the SAME evidenced target_driver/all_consumer_driver share, applied ONCE inside each leg sum (direct physical target trace share=1). A freight total already assigned by freight_sum is not rescaled under all_user_pool; divide by same positive compatible N_target once only. Already-per-reference freight remains unchanged. Do not multiply record_share and the identical generic target share twice.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | meal_set_supply | service | Actual service ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; output_id; operator_id; recipient_galley; contract_gate; menu_recipe_portion_pack_version; required_components; actual_acceptance_id; order_change_id; reversal_id; load_id; quality_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; portion_mass; portion_mass_unit; portion_mass_basis; portion_mass_method; portion_mass_state; portion_mass_sample_time; portion_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; holding_duration; holding_duration_unit; holding_duration_basis; holding_duration_method; holding_duration_state; holding_duration_sample_time; holding_duration_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | Observe each required physical loaded component and customer-specification quality/quantity against actual order changes, operator receipt and reversal records. Freeze equivalent profile before counting distinct fulfilled supply IDs; retain rejected/partial cases and real resources. Execute operator_gate and reject_rework. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_food | meal_set_supply | food | Actual food ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; food_id; species_material; recipe_id; batch_id; input_role; internal_external; linked_input_coverage; stock_pool; food_state; wet_dry_basis; edible_bone_skin; handoff_id; source_node; receiving_node; receiver_id; dispatch_gate; receipt_gate; handoff_time; transfer_state; dispatch_food_mass; dispatch_food_mass_unit; dispatch_food_mass_basis; dispatch_food_mass_method; dispatch_food_mass_state; dispatch_food_mass_sample_time; dispatch_food_mass_source; receipt_food_mass; receipt_food_mass_unit; receipt_food_mass_basis; receipt_food_mass_method; receipt_food_mass_state; receipt_food_mass_sample_time; receipt_food_mass_source; transit_food_loss_mass; transit_food_loss_mass_unit; transit_food_loss_mass_basis; transit_food_loss_mass_method; transit_food_loss_mass_state; transit_food_loss_mass_sample_time; transit_food_loss_mass_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_mass; unused_mass_unit; unused_mass_basis; unused_mass_method; unused_mass_state; unused_mass_sample_time; unused_mass_source; recipe_component_mass; recipe_component_mass_unit; recipe_component_mass_basis; recipe_component_mass_method; recipe_component_mass_state; recipe_component_mass_sample_time; recipe_component_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; wet_fraction; wet_fraction_unit; wet_fraction_basis; wet_fraction_method; wet_fraction_state; wet_fraction_sample_time; wet_fraction_source; dry_ratio; dry_ratio_unit; dry_ratio_basis; dry_ratio_method; dry_ratio_state; dry_ratio_sample_time; dry_ratio_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh calibrated receipts/stocks/recipe batches at actual state with tare, origin and each component. Record actual added water/ice, moisture/wet/dry/fat/solute views, input-to-prepared/cooked/held/protected state, losses/rework and useful/waste receiver paths. Internal receipt/old-state food is lineage, not new manufacture. Execute physical_route, native_food_water and stock_return_fluid. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_utilities | meal_set_supply | utilities | Actual utilities ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; meter_id; fuel_id; stock_pool; energy_carrier; equipment_id; operation_id; provider_coverage; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; fuel_burned; fuel_burned_unit; fuel_burned_basis; fuel_burned_method; fuel_burned_state; fuel_burned_sample_time; fuel_burned_source; useful_thermal; useful_thermal_unit; useful_thermal_basis; useful_thermal_method; useful_thermal_state; useful_thermal_sample_time; useful_thermal_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual meter/fuel stock/charging/thermal records over exact active and necessary idle intervals; separate supply from burn. Compatible conversions require own source/state, integrated kWh not hours again. Exclude provider-covered duty and actual fleet aircraft boundary under exclusive_coverage. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_water | meal_set_supply | water | Actual water ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; source_id; meter_id; stock_pool; enduse_id; terminal_exit_id; closing_membership_id; paired_receiver_id; transfer_id; internal_external; receiver_id; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; inbound_water; inbound_water_unit; inbound_water_basis; inbound_water_method; inbound_water_state; inbound_water_sample_time; inbound_water_source; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_sample_time; closing_stock_source; enduse_water; enduse_water_unit; enduse_water_basis; enduse_water_method; enduse_water_state; enduse_water_sample_time; enduse_water_source; internal_transfer_water; internal_transfer_water_unit; internal_transfer_water_basis; internal_transfer_water_method; internal_transfer_water_state; internal_transfer_water_sample_time; internal_transfer_water_source; terminal_water; terminal_water_unit; terminal_water_basis; terminal_water_method; terminal_water_state; terminal_water_sample_time; terminal_water_source; paired_receiver_water; paired_receiver_water_unit; paired_receiver_water_basis; paired_receiver_water_method; paired_receiver_water_state; paired_receiver_water_sample_time; paired_receiver_water_source; effluent_mass; effluent_mass_unit; effluent_mass_basis; effluent_mass_method; effluent_mass_state; effluent_mass_sample_time; effluent_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual water stocks separately from meter readings, bought/direct inputs, internal uses/transfers and external terminal fates. Pair receiver and retained closing membership; independently sample actual density/water content, keeping whole effluent and water components nonadditive. Execute native_food_water; withdrawal source and contained effluent types distinct. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_materials | meal_set_supply | materials | Actual materials ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; material_id; pack_id; food_contact_thermal_role; formulation; stock_pool; unused_return_id; receiver_id; reuse_enduse; before_after_pack_state; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_mass; unused_mass_unit; unused_mass_basis; unused_mass_method; unused_mass_state; unused_mass_sample_time; unused_mass_source; pack_count; pack_count_unit; pack_count_basis; pack_count_method; pack_count_state; pack_count_sample_time; pack_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each distinct material/pack/stock/formulation and actual protective role; weigh gross/tare/net and independent count/unit mass, concentration/solution/active/dilution water. Pair true unused returns and actual reject/enduse; used wares not unused supply. Execute packing_logistics and stock_return_fluid. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_assets | meal_set_supply | assets | Actual assets ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; asset_id; asset_material; consumer_id; consumer_node; life_phase; stage_id; period_id; replacement_id; termination_id; provider_dataset; land_from_state; land_to_state; land_event_id; land_event_date; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_service; observed_service_unit; observed_service_basis; observed_service_method; observed_service_state; observed_service_sample_time; observed_service_source; remaining_service; remaining_service_unit; remaining_service_basis; remaining_service_method; remaining_service_state; remaining_service_sample_time; remaining_service_source; terminated_total; terminated_total_unit; terminated_total_basis; terminated_total_method; terminated_total_state; terminated_total_sample_time; terminated_total_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | Inspect actual manufacture/install/maintain/replace/EOL and every node/user/period for buildings/kitchen/coldstore/highloader/fleet/ware/textiles. Obtain observed alluser use plus sourced compatible remaining service OR actual terminated total; collect native land area*time and from/to event. Execute full_life_land and exclusive_coverage, completing actual uncovered stages once. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_providers | meal_set_supply | providers | Actual providers ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; provider_id; dataset_id; stage_id; component_id; coverage_id; excluded_stage; completion_id; missing_stage_dataset; direct_record_link; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | Crosswalk actual accepted provider product and precise component/stage/site/time coverage with direct records. Actual complete provider OR completed exclusive missing-stage supplement integrated with real native quantity/state/source/owner links, never future plan; execute exclusive_coverage. Native unit may differ from counted placeholder and must be expanded. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_freight | meal_set_supply | freight | Actual freight ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; leg_id; load_id; vehicle_id; carrier_id; provider_coverage; outbound_return_empty; payload_components; dispatch_gate; receipt_gate; ownfleet_link; gross_load_mass; gross_load_mass_unit; gross_load_mass_basis; gross_load_mass_method; gross_load_mass_state; gross_load_mass_sample_time; gross_load_mass_source; noncargo_vehicle_tare; noncargo_vehicle_tare_unit; noncargo_vehicle_tare_basis; noncargo_vehicle_tare_method; noncargo_vehicle_tare_state; noncargo_vehicle_tare_sample_time; noncargo_vehicle_tare_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; empty_operation_quantity; empty_operation_quantity_unit; empty_operation_quantity_basis; empty_operation_quantity_method; empty_operation_quantity_state; empty_operation_quantity_sample_time; empty_operation_quantity_source; dispatch_quantity; dispatch_quantity_unit; dispatch_quantity_basis; dispatch_quantity_method; dispatch_quantity_state; dispatch_quantity_sample_time; dispatch_quantity_source; receipt_quantity; receipt_quantity_unit; receipt_quantity_basis; receipt_quantity_method; receipt_quantity_state; receipt_quantity_sample_time; receipt_quantity_source; transit_loss; transit_loss_unit; transit_loss_basis; transit_loss_method; transit_loss_state; transit_loss_sample_time; transit_loss_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | Read actual unique load/leg manifest and distance; full wet cargo includes food/ice/pack/trolley/support, minus noncargo vehicle tare only. Apply EACH/TOTAL and THAT-record share before sum; independently cover necessary empty/failed/positioning/return native duty via complete carrier OR actual ownfleet fuel/charging/loading/assets/species once. Execute freight_empty and reconcile actual dispatch/receipt losses. freight_empty has precedence for freight: record_share is the SAME evidenced target_driver/all_consumer_driver share, applied ONCE inside each leg sum (direct physical target trace share=1). A freight total already assigned by freight_sum is not rescaled under all_user_pool; divide by same positive compatible N_target once only. Already-per-reference freight remains unchanged. Do not multiply record_share and the identical generic target share twice. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_fluids | meal_set_supply | fluids | Actual fluids ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; equipment_id; species_id; charge_lot; stored_installed_recovered; factory_entry_id; stock_pool; receiver_id; paired_transfer_id; retained_content_exit_id; coverage_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; standalone_inbound; standalone_inbound_unit; standalone_inbound_basis; standalone_inbound_method; standalone_inbound_state; standalone_inbound_sample_time; standalone_inbound_source; factory_new_charge; factory_new_charge_unit; factory_new_charge_basis; factory_new_charge_method; factory_new_charge_state; factory_new_charge_sample_time; factory_new_charge_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_sample_time; closing_stored_source; recovered_retained; recovered_retained_unit; recovered_retained_basis; recovered_retained_method; recovered_retained_state; recovered_retained_sample_time; recovered_retained_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; other_receipt_quantity; other_receipt_quantity_unit; other_receipt_quantity_basis; other_receipt_quantity_method; other_receipt_quantity_state; other_receipt_quantity_sample_time; other_receipt_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; useful_export_mass; useful_export_mass_unit; useful_export_mass_basis; useful_export_mass_method; useful_export_mass_state; useful_export_mass_sample_time; useful_export_mass_source; contained_waste_mass; contained_waste_mass_unit; contained_waste_mass_basis; contained_waste_mass_method; contained_waste_mass_state; contained_waste_mass_sample_time; contained_waste_mass_source; wholeequipment_retained_content_exit; wholeequipment_retained_content_exit_unit; wholeequipment_retained_content_exit_basis; wholeequipment_retained_content_exit_method; wholeequipment_retained_content_exit_state; wholeequipment_retained_content_exit_sample_time; wholeequipment_retained_content_exit_source; independent_release_mass; independent_release_mass_unit; independent_release_mass_basis; independent_release_mass_method; independent_release_mass_state; independent_release_mass_sample_time; independent_release_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | Measure exclusive fluid roles/stock/service events/species and each actual receipt, transfer, unused return, recovery and final receiver. Factory charge absent opening not duplicated as standalone purchase. Wholeequipment retained content audit nonadditive; direct release independently sourced, unknown not leak. Execute stock_return_fluid. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_fates | meal_set_supply | fates | Actual fates ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; stream_id; food_batch; whole_component_relation; material_species; receiver_id; treatment_dataset; terminal_membership; paired_receiver_id; retained_closing_membership; rework_path; producing_node; stock_pool; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; dry_mass; dry_mass_unit; dry_mass_basis; dry_mass_method; dry_mass_state; dry_mass_sample_time; dry_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; retained_closing_quantity; retained_closing_quantity_unit; retained_closing_quantity_basis; retained_closing_quantity_method; retained_closing_quantity_state; retained_closing_quantity_sample_time; retained_closing_quantity_source; useful_exit_quantity; useful_exit_quantity_unit; useful_exit_quantity_basis; useful_exit_quantity_method; useful_exit_quantity_state; useful_exit_quantity_sample_time; useful_exit_quantity_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh each actual prep/unserved/returned-served/pack/cleaning/retired/waste stream and accepted useful exit at actual state and receiver. Trace actual rejected/rework/redeploy/retained paths to producing batch; whole mixture and components/retained contents nonadditive. Independently close external terminal exits plus actual closing, exclude internal use/transfers/duplicate receiver views. Execute reject_rework and native_food_water. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_air | meal_set_supply | air | Actual air ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; source_event; species_id; particle_size_class; reported_basis; receiving_medium; factor_reference_id; capture_stream; provider_coverage; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; water_vapour; water_vapour_unit; water_vapour_basis; water_vapour_method; water_vapour_state; water_vapour_sample_time; water_vapour_source; activity_quantity; activity_quantity_unit; activity_quantity_basis; activity_quantity_method; activity_quantity_state; activity_quantity_sample_time; activity_quantity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_sample_time; release_fraction_source; particle_size; particle_size_unit; particle_size_basis; particle_size_method; particle_size_state; particle_size_sample_time; particle_size_source; captured_mass; captured_mass_unit; captured_mass_basis; captured_mass_method; captured_mass_state; captured_mass_sample_time; captured_mass_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Independently measure actual released substance and receiving medium or source compatible activity/factor/composition/fate evidence, each operand with native metadata. Water vapour Mass to air distinct from effluent; captured food/grease/particles go actual waste route, no unknown-as-release. Execute native_food_water; expand concrete species before final exchange. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |
| cp_outputs | meal_set_supply | outputs | Actual outputs ledger | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; output_id; recipient_id; gate; output_state; handoff_time; source_record; native_property; output_role; allocation_stage; lineage; actual_subdivision; joint_decision_id; job_flight_menu; partial_reversal_id; native_output_quantity; native_output_quantity_unit; native_output_quantity_basis; native_output_quantity_method; native_output_quantity_state; native_output_quantity_sample_time; native_output_quantity_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; joint_selected_quantity; joint_selected_quantity_unit; joint_selected_quantity_basis; joint_selected_quantity_method; joint_selected_quantity_state; joint_selected_quantity_sample_time; joint_selected_quantity_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | Enumerate EACH actual intended meal/nonmeal/asset/fluid output with own native quantity, recipient/state/gate/time/source. Keep full pre-attribution physical ledger UNNORMALIZED. Actual direct subdivision then shared-duty evidence; independent other outputs audit-only in targetLCI. Retained true joint output follows output_projection precedence, not resource share. Separate full wholepool variant has one designated attribution step. | Actual compatible native units by operand; Item(s) only genuine count | Each actual batch/load/stock/receipt/return/meter/sample/asset/receiver event | Actual full batch/loading/return/stock/reporting intervals and observed+sourced remaining or terminated full lifecycle | Real kitchen/loading provider and all actual contributing suppliers/receivers/consumers/periods | per reference flow | Traceable source/calibration/acceptance, native seven fields, coverage/owner/carry and final resolution |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_count | meal_set_supply | N_target is unique actual compatible completed operator-loaded receipt supply IDs after required components/quality/quantity/orderchange/acceptance/reversal under operator_gate. | cp_service; output_id; actual_acceptance_id | N_target |  |
| assign_resource | all inventory rows | Direct physical trace and independent-process subdivision first. For actual shared duty assign each compatible raw record times THAT target_driver divided by positive complete all_consumer_driver, then sum. Include every customer/menu/flight/job/staff/nonfood user and period; necessary idle/failed/cancelled/closed/readiness resources remain in responsible pool. N_target=0 or zero transfer retains source/carry/receiving/finalresolution without division or fake output; unresolved responsibility blocks completeness. Assigned target TOTAL still divides same positive profile N_target once; only already-per-reference quantities remain unchanged. | raw_quantity; target_driver; all_consumer_driver | assigned_target_total |  |
| normalize_once | all inventory rows | Assigned target total divided by same positive profile N_target once; already-per-reference unchanged; N0 no division and real carry/finalresolution. | assigned_target_total; N_target | per_reference_quantity |  |
| stock_quantity | all stocks and fluids | Net receipts remove only tare before outbound returns. Gross drawn S=attributed opening+inbound-closing plus actual paired responsibility transfers. Use S input+matched UNUSED return output OR (S-UNUSED) input and omit that output. Used ware/food/fluids retain original burden, not virgin supply deduction or automatic credit. Stored/installed/recovered fluid roles exclusive; factory new charge absent opening is equipment entry, not another purchase. Track all actual useful/waste/wholeequipment retained-content/direct-release fates; whole/component contents nonadditive, unknown balance not emission. | cp_food; cp_materials; cp_fluids | exclusive_stock_quantity |  |
| terminal_balance | food water and fates | Preserve actual raw/thawed/prepared/cooked/held/loaded/returned wet/dry/edible/bone/skin/water/fat/solute states, recipe and stock quantities; no universal yield. Same-sample water-only wet fraction w=water/wet and dry ratio r=water/nonwater imply w=r/(1+r), percent first; loss-on-drying with other volatiles is not water. Terminal balances use actual external terminal exits plus actual closing stocks, excluding internal enduse/transfer, component contents and duplicate receiver views. Water vapour is water species to air Mass; contained effluent is Waste. Independent actual species/medium/particle/basis/factor evidence required; unknown residual not emission or zero. | cp_food; cp_water; cp_fates; cp_air | actual_terminal_balance_and_gaps |  |
| freight_sum | freight | Each unique actual leg/load uses full packed wet cargo including food/ice/pack/support/equipment, removing only noncargo vehicle tare. EACH quantity repeats actual count once; TOTAL unchanged; THAT-record share inside sum. Complete matched carrier OR exclusive actual own-fleet fuel/electricity/loading/holding/maintenance/full assets/species/receiver once. Zero cargo kg*km cannot carry necessary empty/positioning/return/failed duties: include actual matched complete coverage or completed native underlying duty once, never fictitious payload or output. | cp_freight; packed_wet_payload; distance; repeat_count; record_share | assigned_transport_duty |  |
| asset_life | assets; reusables | Enumerate actual asset/service consumers, nodes, life phases, stock/reporting/maintenance/replacement/termination and receiver periods. Use observed all-user life plus sourced compatible remaining service OR actual terminated total; never annual targetN/nameplate capacity/invented years. Actual land occupation area*time and evidenced from-state/to-state/event/date/area are native quantities, not Count. Provider-covered land/life is not repeated; actually complete excluded stages once. | cp_assets; cp_providers | actual_full_life_duty |  |
| physical_output | all product outputs | Complete pre-attribution ALL-OUTPUT ledger keeps each outputID/recipient/gate/state/handofftime/source and its own full UNNORMALIZED native quantity, including other meal/nonmeal/asset/fluid handoffs. First distinguish independent subdivision from genuine joint products; document actual PCR-specific attribution decision/physical evidence/owner/lineage/allocation_stage. In target-allocated LCI, independent other meals/services are evidence-only, not extra co-products after resource assignment. A retained genuine joint output final exchange uses SELECTED actual physical amount / same positive profile N_target once, never resource targetshare; already-per-reference unchanged. Separate unallocated wholepool requires full inputs+alloutputs and one designated attribution step. This output rule takes precedence over generic resource rule. | cp_outputs; cp_service; native_output_quantity; joint_selected_quantity | selected_output_quantity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all exchanges | Every actual concrete material/service/species state/type/direction/gate/nativeproperty/unit and support identities verified before final exchange. Count only supports Item(s), not food or service identity. | Actual detail/support and foreground record evidence |
| gate_quality | meal_set_supply | Count only actual complete equivalent prepared meal-set supply received by the specified operator/galley after physical loading, required component/quality/quantity checks, actual order changes and acceptance/reversal reconciliation. Actual contract gate must be evidenced; public job pages are not signed receipts. Do not substitute prepared availability, scheduled meals, flights, passengers, trolley count, invoice or eaten mass. | cp_service; actual contract and loading receipt |
| native_quality | all protocols | Every numeric operand own seven fields, honest zero/gap/state/uncertainty and compatible conversion. | Actual source and raw-field audit |
| full_scope_quality | all duties | Include upstream actual food/material/utilities/losses and complete site/building/fitout/kitchen/vehicle/high-loader/refrigeration/equipment/reusable/textile manufacture-install-maintain-replace-EOL. Match every physical stage to one complete provider OR direct actual duty; missing stages must be actually completed and integrated once with native amount/state/source/time/owner/coverage/exclusions before complete-scope use. Invoice, lease or future plan is insufficient. | Completed coverage matrix and native stage evidence |
| source_quality | all source use | Sources are qualitative route corroboration across actual operator sites, not one observed target inventory. No public signed target contract, generic factors/recipe/yield/temperature/lifetime/range asserted. Gaps restrict use. | Source actual extent and target applicability |
| complete_ingredients | meal_set_supply | Expand each actual case under `ingredients` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_food` |
| complete_recipe_water | meal_set_supply | Expand each actual case under `recipe_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_food` |
| complete_electricity | meal_set_supply | Expand each actual case under `electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_fuel | meal_set_supply | Expand each actual case under `fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_thermal | meal_set_supply | Expand each actual case under `thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_water_supply | meal_set_supply | Expand each actual case under `water_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_materials | meal_set_supply | Expand each actual case under `materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_materials` |
| complete_packaging | meal_set_supply | Expand each actual case under `packaging` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_materials` |
| complete_assets | meal_set_supply | Expand each actual case under `assets` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_reusables | meal_set_supply | Expand each actual case under `reusables` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_providers | meal_set_supply | Expand each actual case under `providers` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_freight | meal_set_supply | Expand each actual case under `freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_freight` |
| complete_fluid_supply | meal_set_supply | Expand each actual case under `fluid_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_water_withdrawal | meal_set_supply | Expand each actual case under `water_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_land_occupation | meal_set_supply | Expand each actual case under `land_occupation` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_land_transformation_from | meal_set_supply | Expand each actual case under `land_transformation_from` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_other_outputs | meal_set_supply | Expand each actual case under `other_outputs` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_outputs` |
| complete_unused_return | meal_set_supply | Expand each actual case under `unused_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_materials` |
| complete_usable_food | meal_set_supply | Expand each actual case under `usable_food` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_usable_ware | meal_set_supply | Expand each actual case under `usable_ware` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_recovered_fluid | meal_set_supply | Expand each actual case under `recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_prep_waste | meal_set_supply | Expand each actual case under `prep_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_pack_waste | meal_set_supply | Expand each actual case under `pack_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_cleaning_waste | meal_set_supply | Expand each actual case under `cleaning_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_asset_waste | meal_set_supply | Expand each actual case under `asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_effluent | meal_set_supply | Expand each actual case under `effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_fluid_waste | meal_set_supply | Expand each actual case under `fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_direct_species | meal_set_supply | Expand each actual case under `direct_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_air` |
| complete_land_transformation_to | meal_set_supply | Expand each actual case under `land_transformation_to` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### ingredients

Owner and original flow role: meal_set_supply / inputs / product

Actual additional external supplies only, each species/material/formulation/lot/supplied state; retain full upstream preparation scope for bought prepared components. Internal food receipts and returns carry prior burden once and are excluded from duplicate purchase.

- Selected flow: Actual distinct food and beverage composition ingredients
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_food and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### recipe_water

Owner and original flow role: meal_set_supply / inputs / product

Actual composition addition and phase, distinct from retained ingredient moisture and operating washing water.

Residual inventory requirement after the independently identified cases `recipe_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual recipe water and ice
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_food and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### electricity

Owner and original flow role: meal_set_supply / inputs / product

Actual meters/charging duties and necessary idle; integrated energy not multiplied by duration again.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual uncovered kitchen holding wash loading and vehicle electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive responsible native quantity under cp_utilities and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### fuel

Owner and original flow role: meal_set_supply / inputs / product

Actual grade/state supply/stock and combustion activity distinct; exclude full-provider-covered fuel and aircraft passenger traction outside scope.

- Selected flow: Actual separate cooking and ground-fleet fuels
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_utilities and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### thermal

Owner and original flow role: meal_set_supply / inputs / product

Actual delivered thermal property/state/provider boundary; no independent energy plant inferred from cooking.

Residual inventory requirement after the independently identified cases `thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased useful thermal service
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive responsible native quantity under cp_utilities and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### water_supply

Owner and original flow role: meal_set_supply / inputs / product

Actual preparation wash cleaning and equipment enduses; meter readings are not water stocks.

Residual inventory requirement after the independently identified cases `water_supply_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased operating water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive responsible native quantity under cp_water and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### materials

Owner and original flow role: meal_set_supply / inputs / product

Expand actual formulated concentrate/prepared solution/active/dilution-water roles nonadditively; distinct receipts and unused returns with stock identity.

Residual inventory requirement after the independently identified cases `materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual separate cleaning and support materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_materials and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### packaging

Owner and original flow role: meal_set_supply / inputs / product

Actual food-contact/thermal/lid/liner/label/wrapping roles and pack rejects/enduse; actual pack masses and counts independently measured.

- Selected flow: Actual single-use food protection presentation and loading packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_materials and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### assets

Owner and original flow role: meal_set_supply / inputs / product

Item(s) only genuinely counted compatible complete asset-service case; expand actual native mass/area/time/service basis instead of forcing into Count. Include high-loaders/refrigeration/wash infrastructure and all life stages.

- Selected flow: Actual full-life site kitchen ground-loading and equipment service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive responsible native quantity under cp_assets and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### reusables

Owner and original flow role: meal_set_supply / inputs / product

Actual manufacture/maintain/replace/EOL over all-user life; wash/returns do not repurchase new ware.

- Selected flow: Actual full-life trays trolleys ware containers and textiles
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive responsible native quantity under cp_assets and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### providers

Owner and original flow role: meal_set_supply / inputs / product

Only actual counted compatible service; expand each provider native unit. Precise food/preparation/transport/wash/laundry/receiver/full-life coverage and completed missing stages, never invoice-only completeness.

- Selected flow: Actual complementary complete physical provider services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive responsible native quantity under cp_providers and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### freight

Owner and original flow role: meal_set_supply / inputs / product

Actual unique supply/load/return/receiver legs; underlying ownfleet energy/assets exclusive with complete carrier and actual empty duty coverage. freight_empty has precedence for freight: record_share is the SAME evidenced target_driver/all_consumer_driver share, applied ONCE inside each leg sum (direct physical target trace share=1). A freight total already assigned by freight_sum is not rescaled under all_user_pool; divide by same positive compatible N_target once only. Already-per-reference freight remains unchanged. Do not multiply record_share and the identical generic target share twice.

- Selected flow: Actual full wet packed cargo transport work
- Flow property / unit: Mass * Length / t*km
- Amount rule: Actual freight total assigned ONCE by the same evidenced record share under cp_freight and freight_empty; divide same positive compatible N_target once only; no further all_user_pool rescaling; already-per-reference unchanged; N0 retained.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### fluid_supply

Owner and original flow role: meal_set_supply / inputs / product

Each exact species/material/state; factory equipment charge role separate, no double count stored/installed/recovered.

- Selected flow: Actual standalone refrigerant and heat-transfer-fluid supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fluids and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### water_withdrawal

Owner and original flow role: meal_set_supply / inputs / elementary

Only actual environmental source/compartment; purchased water is not duplicate abstraction.

- Selected flow: Actual source-specific direct water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive responsible native quantity under cp_water and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### land_occupation

Owner and original flow role: meal_set_supply / inputs / elementary

Conditional only actual site/land occupation not already covered by complete asset/provider scope. Actual area and sourced occupation interval, all users/periods/full-life attribution; no Count substitution or invented zero/history.

- Selected flow: Actual uncovered land occupation over complete service interval
- Flow property / unit: Area * Time / m2*a
- Amount rule: Only actual uncovered native land duty under full_life_land and cp_assets; assign once then divide same positive profile N_target once; already-per-reference unchanged; unknown not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: actual area/interval/event/prior-resulting state sources and full physical coverage; no universal area/lifetime or land-change assumption.

#### land_transformation_from

Owner and original flow role: meal_set_supply / inputs / elementary

Conditional only actual evidenced transformation event with native area, prior state, event/date/owner/source and matching resulting-state record. Existing site does not prove a transformation; provider-covered same event not repeated.

- Selected flow: Actual evidenced land transformation from prior state
- Flow property / unit: Area / m2
- Amount rule: Only actual uncovered native land duty under full_life_land and cp_assets; assign once then divide same positive profile N_target once; already-per-reference unchanged; unknown not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: actual area/interval/event/prior-resulting state sources and full physical coverage; no universal area/lifetime or land-change assumption.

#### other_outputs

Owner and original flow role: meal_set_supply / outputs / product

Conditional Count only genuine other meal/service cases; EACH other meal/nonmeal/reusable/fluid output owns native property/quantity/gate. Expand incompatible native units. Independent other outputs audit-only in targetLCI; apply output_projection precedence.

- Selected flow: Actual other intended outputs and useful transfers
- Flow property / unit: Count / Item(s)
- Amount rule: Actual selected native quantity under output_projection and cp_outputs; same positive compatible N_target once; already-per-reference unchanged.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outputs`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### unused_return

Owner and original flow role: meal_set_supply / outputs / product

Only unused original state matched to source stock; choose gross input plus this output OR net consumed input and omit this output. Used returns excluded.

- Selected flow: Actual matched unused supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_materials and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### usable_food

Owner and original flow role: meal_set_supply / outputs / product

Actual accepted usable food at real receiver and state, not target accepted set or automatic waste credit. Internal redeployment is genealogy only.

- Selected flow: Actual accepted useful prepared-food external exits
- Flow property / unit: Mass / kg
- Amount rule: Actual selected native quantity under output_projection and cp_fates; same positive compatible N_target once; already-per-reference unchanged.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### usable_ware

Owner and original flow role: meal_set_supply / outputs / product

Actual receiver/quality/old burden and native quantity; no automatic new-manufacture deduction.

- Selected flow: Actual useful old-state ware equipment and textile exits
- Flow property / unit: Mass / kg
- Amount rule: Actual selected native quantity under output_projection and cp_fates; same positive compatible N_target once; already-per-reference unchanged.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### recovered_fluid

Owner and original flow role: meal_set_supply / outputs / product

Exact recovered species and actual acceptance; retained internal recovered stock not extra export or virgin credit.

- Selected flow: Actual usable recovered-fluid external exits
- Flow property / unit: Mass / kg
- Amount rule: Actual selected native quantity under output_projection and cp_fluids; same positive compatible N_target once; already-per-reference unchanged.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### prep_waste

Owner and original flow role: meal_set_supply / outputs / waste

Actual trimmings/bone/spills/offspec discarded receiver; keep retained/rework/useful food separate, whole food and component audit nonadditive.

- Selected flow: Actual preparation cooking packing and transport food residues
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### pack_waste

Owner and original flow role: meal_set_supply / outputs / waste

Separate actual materials/contact/food contamination/receiver, no whole/component duplicate or reusable-disposal assumption.

Residual inventory requirement after the independently identified cases `pack_waste_paper_pack`; `pack_waste_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual distinct packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### cleaning_waste

Owner and original flow role: meal_set_supply / outputs / waste

Whole genuine mixtures with nonadditive food/fat/chemical/fluid components; separate independent materials/fates.

- Selected flow: Actual spent cleaning substrates filters and captured solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### asset_waste

Owner and original flow role: meal_set_supply / outputs / waste

Whole equipment retained contents versus removed components exclusive; lifecycle-covered disposal not repeated.

- Selected flow: Actual retired ware equipment textiles and components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fates and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### effluent

Owner and original flow role: meal_set_supply / outputs / waste

Actual tank/sewer/provider receiver with water/food/fat/chemical state, distinct separated fat/solids actual separate fates; no supply-minus-vapour assumption.

- Selected flow: Actual contained wash and preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_water and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### fluid_waste

Owner and original flow role: meal_set_supply / outputs / waste

Exact species and contained receiver fate distinct from useful recovery/air release/retained wholeequipment content.

- Selected flow: Actual contained equipment-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_fluids and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### direct_species

Owner and original flow role: meal_set_supply / outputs / elementary

Expand actual combustion/cooking/fluid release exact substance, particle/basis/medium. Broad VOC/NOx/PM and topup are not concrete species/release proof.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual distinct substance releases to identified medium
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive responsible native quantity under cp_air and all_user_pool / same positive profile N_target once; already-per-reference unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

Range evidence need: actual compatible foreground quantities, stocks, sources, complete physical responsibility and verified concrete identity required; no universal meal/trolley/flight/recipe/yield/temperature/waste/lifetime factor or zero default.

#### land_transformation_to

Owner and original flow role: meal_set_supply / outputs / elementary

Conditional only same actual evidenced transformation event as land_transformation_from with actual resulting state and native area/date/owner/source. Same spatial coverage/event matched, unknown history not assumed change or zero; provider-covered duplicate excluded.

- Selected flow: Actual evidenced land transformation to resulting state
- Flow property / unit: Area / m2
- Amount rule: Only actual uncovered native land duty under full_life_land and cp_assets; assign once then divide same positive profile N_target once; already-per-reference unchanged; unknown not zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: actual area/interval/event/prior-resulting state sources and full physical coverage; no universal area/lifetime or land-change assumption.


## 9. Validation Rules

| rule_id | applies_to | rule |
| --- | --- | --- |
| gate_complete | meal_set_supply | Count only actual complete equivalent prepared meal-set supply received by the specified operator/galley after physical loading, required component/quality/quantity checks, actual order changes and acceptance/reversal reconciliation. Actual contract gate must be evidenced; public job pages are not signed receipts. Do not substitute prepared availability, scheduled meals, flights, passengers, trolley count, invoice or eaten mass. |
| route_complete | meal_set_supply | Actual individual ingredients, prepared components, recipe water/ice/oils/seasonings enter real kitchen composition/preparation/cooking or cold assembly. Record before/after formulation/treatment states, actual food losses/offspec routes and protected pack state. Holding, dispatch, ground transport and customer-specified loading have separate event/owner links in this integrated provider process; no fabricated extra factory or purchased identical final supply. |
| contract_complete | all stages | Final product is operator-loaded prepared supply, not passenger served/eaten meal. Include all ACTUAL supplier-contract-owned postgate returns, collection, sorting, food/waste disposition, wash/cleaning and receivers in its numerator. Record actual operator-owned onboard holding/reheating/plating/serving responsibility separately; do not silently claim these completed or universal whole-flight passenger traction. A claim of passenger complete-meal service requires actual reviewed expanded stages and changed gate. |
| scope_life_complete | assets providers land | Include upstream actual food/material/utilities/losses and complete site/building/fitout/kitchen/vehicle/high-loader/refrigeration/equipment/reusable/textile manufacture-install-maintain-replace-EOL. Match every physical stage to one complete provider OR direct actual duty; missing stages must be actually completed and integrated once with native amount/state/source/time/owner/coverage/exclusions before complete-scope use. Invoice, lease or future plan is insufficient. Enumerate actual asset/service consumers, nodes, life phases, stock/reporting/maintenance/replacement/termination and receiver periods. Use observed all-user life plus sourced compatible remaining service OR actual terminated total; never annual targetN/nameplate capacity/invented years. Actual land occupation area*time and evidenced from-state/to-state/event/date/area are native quantities, not Count. Provider-covered land/life is not repeated; actually complete excluded stages once. |
| native_terminal_complete | all exchanges | Preserve actual raw/thawed/prepared/cooked/held/loaded/returned wet/dry/edible/bone/skin/water/fat/solute states, recipe and stock quantities; no universal yield. Same-sample water-only wet fraction w=water/wet and dry ratio r=water/nonwater imply w=r/(1+r), percent first; loss-on-drying with other volatiles is not water. Terminal balances use actual external terminal exits plus actual closing stocks, excluding internal enduse/transfer, component contents and duplicate receiver views. Water vapour is water species to air Mass; contained effluent is Waste. Independent actual species/medium/particle/basis/factor evidence required; unknown residual not emission or zero. Net receipts remove only tare before outbound returns. Gross drawn S=attributed opening+inbound-closing plus actual paired responsibility transfers. Use S input+matched UNUSED return output OR (S-UNUSED) input and omit that output. Used ware/food/fluids retain original burden, not virgin supply deduction or automatic credit. Stored/installed/recovered fluid roles exclusive; factory new charge absent opening is equipment entry, not another purchase. Track all actual useful/waste/wholeequipment retained-content/direct-release fates; whole/component contents nonadditive, unknown balance not emission. |
| output_period_complete | all resources | Direct physical trace and independent-process subdivision first. For actual shared duty assign each compatible raw record times THAT target_driver divided by positive complete all_consumer_driver, then sum. Include every customer/menu/flight/job/staff/nonfood user and period; necessary idle/failed/cancelled/closed/readiness resources remain in responsible pool. N_target=0 or zero transfer retains source/carry/receiving/finalresolution without division or fake output; unresolved responsibility blocks completeness. Assigned target TOTAL still divides same positive profile N_target once; only already-per-reference quantities remain unchanged. |
| freight_complete | freight | Each unique actual leg/load uses full packed wet cargo including food/ice/pack/support/equipment, removing only noncargo vehicle tare. EACH quantity repeats actual count once; TOTAL unchanged; THAT-record share inside sum. Complete matched carrier OR exclusive actual own-fleet fuel/electricity/loading/holding/maintenance/full assets/species/receiver once. Zero cargo kg*km cannot carry necessary empty/positioning/return/failed duties: include actual matched complete coverage or completed native underlying duty once, never fictitious payload or output. |
| output_stage_complete | all outputs | Complete pre-attribution ALL-OUTPUT ledger keeps each outputID/recipient/gate/state/handofftime/source and its own full UNNORMALIZED native quantity, including other meal/nonmeal/asset/fluid handoffs. First distinguish independent subdivision from genuine joint products; document actual PCR-specific attribution decision/physical evidence/owner/lineage/allocation_stage. In target-allocated LCI, independent other meals/services are evidence-only, not extra co-products after resource assignment. A retained genuine joint output final exchange uses SELECTED actual physical amount / same positive profile N_target once, never resource targetshare; already-per-reference unchanged. Separate unallocated wholepool requires full inputs+alloutputs and one designated attribution step. This output rule takes precedence over generic resource rule. |
| rework_complete | food pack returns | Link every raw/prepared/held/loaded rejected/partial/reversed or returned state to producing batch, actual rework/reheat/redeploy/retained stock/usable export/discard and real receiver. Original burden stays; add only actual new work/transport/wash/storage. Internal old-state food/dirty returns are genealogy, not new manufacture or final meal-set counts. Paired transfer has real source/receiver/gate/state/time/receipt quantity on both sides, transit differences separately evidenced. Rejects are not accepted output. |
| bilingual_complete | all methodology | Require same EN/ZH card/node/rule/protocol IDs, actual gates/states/native units, mandatory fields and current deterministic projection; missing concrete identities/quantities block final use, checker pass is not scientific review/publication. |


Check actual elementary land occupation area*time and evidenced prior/resulting transformation interfaces, only actual uncovered responsibility. Check freight already assigned by the one record share is not reattributed.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | Actual operator-loaded receipt of equivalent prepared meal-set supply |
| allowed_use | Actual equivalent protected set at evidenced loaded operator receipt with complete actual supplier responsibility |
| excluded_use | Passenger meal/eating/wholeflight claims; unreviewed routes; absent receipt/identity/native quantities/fulllife/owner coverage |
| required_metadata | actual_provider_kitchen_loading_operator_galley; actual_menu_recipe_components_portion_pack_service_version; actual_operator_loaded_receipt_state_time_acceptance; actual_required_quantity_quality_and_order_changes; no_assumed_flight_trolley_passenger_equivalence; actual_contract_owned_return_wash_receiver_duties; actual_food_pack_wet_cargo_stock_water_native_views; all_outputs_users_periods_idle_failed_N0_resolution; complete_alluser_asset_land_reusable_life; exclusive_completed_provider_missing_stages; each_numeric_operand_unit_basis_method_state_sample_time_source |
| required_quality_disclosure | Actual source/site/date applicability, measured/modelled quantities, uncertainty and all identity/numeric/range/stock/species/medium/asset/land/provider/receiver gaps and restrictions |
| update_trigger | Changed menu/component/recipe/portion/pack/state/service-version/operator gate/contract return duties, physical route, provider/assets/land/alloutput/period/fate/identity |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; accessed2026-10-20 | 63392 covers contractual food preparation and supply for airline and other transportation companies. 63391 specific event,63393 ongoing other customer locations/concessions;63399 no-seating/mobile;63400 beverage-only. Classification scope only; cannot establish physical route, universal product, quantity or lifecycle boundary. |
| gategroup-finalizer-current | handbook | https://jobs.gategroup.com/en/job/inwood/flight-finalizer-24-50-weekly-pay/49234/91463570224; accessed2026-10-20 | Flight finalizer checks provided meal quality/quantity against customer requirements and fulfillment of order changes. Actual customer-specified version and fulfilled quantity gate is supported, rather than planned passenger or flight count. Role description supplies qualitative check, not actual customer contract, signed acceptance, food quantity, temperature or portion. |
| gategroup-transport-current | handbook | https://jobs.gategroup.com/en/job/new-york/transportation-supervisor/49234/102017487952; accessed2026-10-20 | Kitchen-driver/dock coordination; control sheets assign drivers to actual aircraft/flights; airline service updates and equipment changes; proper galley transportation, vehicle cleanliness, airline diagrams/specifications and fleet maintenance. Page posting/submit/close dates disagree; do not rely on active vacancy status. Does establish currently hosted operator duties; no quantitative route, flight factors or ownership contract. |
| gategroup-wash-current | handbook | https://jobs.gategroup.com/en/job/denver/dishroom-attendant-23-00-hr/49234/90811028672; accessed2026-10-20 | Washable trays/bowls/plates/cups/glasses/cutlery are separated, conveyor washed, retrieved and stowed; some packing follows customer diagrams. No washing water/chemical/energy cycle factor, equipment lifetime, or evidence every site uses identical machinery. |
| gategroup-cook-current | handbook | https://jobs.gategroup.com/en/job/seattle/specialty-cook-chinese-cuisine-28-00-hr/49234/91320795040; accessed2026-10-20 | Actual airline-specification menus/recipes; cooking equipment and presentation; washing/cutting foods and transfers between storage/work areas; cleaning of foodservice equipment/facilities. Specific cuisine role supports route duties, not mandatory cooking for cold components or universal recipe/yield/temperature. |
| ekfc-airline-current | handbook | https://www.emiratesflightcatering.com/services/airline-and-airport-services/; accessed2026-10-20 | Operating central commissary with bakery, customer-tailored inflight menus, equipment/inventory handling, maintenance and high-loader transport; also distinct lounge and other support services. Illustrative site-wide totals not used as PCR factors. Page does not expose actual contract gate/portion/receipt proof. Laundry/other ancillary service is distinct and not automatically complete under meal input. |
| lsg-trolley-historical | handbook | https://www.lsg-group.com/news/day-life-trolley-lsg-sky-chefs/; accessed2026-10-20; historical operator description, publication date not verified | Historical direct operator description: used trolleys return, sorting/emptying/washing, trays/equipment wash, prepared trays packed, cooled, trucked and loaded/secured aboard aircraft. Historical corroboration only, not sole current route proof; no current universal safety temperature, wash consumption, cycle or burden factor. |
| gategroup-equipment-current | handbook | https://jobs.gategroup.com/en/job/schiller-park/equipment-supervisor/49234/101157537872; accessed2026-10-20 | Dishroom, preload, beverage and transport areas support catering; actual customer airline diagrams/specifications, customer-material inventory, daily temperature records, stock supply and machinery maintenance. Qualitative real responsibility source only; no universal airline configuration, factor, temperature limit or actual target contract. Site differs from other corroborating operator roles, not asserted one observed plant dataset. |
