---
pcr_id: pcr.stationary-full-waiter-service-meal-occasions
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Stationary full waiter-service meal occasions

## 1. Scope and Applicability

This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset.

One reference is one actually completed declared equivalent meal-service occasion, frozen by menu/components/recipe/portion and service-package version. It is not automatically one diner, dish, table, tray, invoice, order or eaten-food quantity. A shared dish or multi-course package retains its actual reference object and fulfillment evidence. All included food/related beverage components and actual service duties must reach their documented physical gate; checkout before self-dispensed coffee does not prove the coffee supplied. Actual declined optional components/refills follow the real package gate, not assumed zero use or an invented extra reference.

One integrated onsite meal node owns actual food formulation/treatment, serving, dining support and cleanup. Actual independently completed providers replace only matching physical stages; do not buy a fictitious complete meal to erase the kitchen. Offsite commissary preparation followed by transport/coldchain and onsite finishing, moving dining cars/ships/vehicles, beverage-only services, independent lodging/camp packages and unreviewed industrial preservation/energy conversion/water treatment/laundry routes are outside this selected method and require reviewed expansion.

Include all actual supply/upstream losses, ingredient and prepared-food stocks, food refills/rework/fates, water/steam/fat/other species, packaging/warewashing/cleaning, site/building/kitchen/reusable full life and actual receivers across all users and periods. Actual native evidence, completed missing-stage integration and concrete exchange verification gate final dataset use. Sources supply qualitative route examples only; no universal meal amount, nutrition, recipe yield, time, temperature, asset life, factor, range or UUID is guessed.

Other service configurations at a shared site are separate outputs. Retain their actual native quantities and resource consumption in the complete all-user denominator, without counting them in this dedicated reference. Delivery is included only where actual contract, physical gate and completed provider coverage require it.

Plate leftovers do not reverse an already physically fulfilled served meal. Actual ingredient and preparation/unserved losses remain in responsible service numerators. Food moisture, ingredient/component water, cleaning-solution/concentrate/active-content and whole-equipment fluid views are independent nonadditive audits, not additional duplicate purchased inputs. Reused frying oil appears in actual opening/closing/internal circulation stocks, never fresh input each cycle or automatic avoided-new credit. Actual distinct ingredients/procurement states must expand to concrete exchanges; no fixed umbrella UUID.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.stationary-full-waiter-service-meal-occasions |
| classification_refs | CPC 3.0:63310 (narrower) |
| covered_products | This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset. |
| excluded_products | Mobile dining/commissary-transport-onsitefinish; beverage-only; mere orders/payments/capacity; unequal recipes/portions/configurations without evidence; lodging/camp bundle |
| representative_product | Actually completed stationary full waiter-service meal occasion |
| production_route | Actual receiving/stocks -> onsite composition/preparation/cooking/coldassembly -> holding/portioning/serving -> recipient complete gate, returns/warewashing/cleanup |
| market_state | Physically supplied complete declared food-related service; food/component quantities and assets remain independent native views |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually completed stationary full waiter-service meal occasion |
| How much | 1 Item(s) |
| How well | One declared equivalent menu/component/recipe/portion/service-version actually fully supplied to its recipient gate; actual related beverages/refills/duties included and reversals reconciled; no universal diner or dish equivalence |
| How long or cycle | Actual serviceoccasion/component/batch start-end local time/UTC-offset/timezone/DST and elapsed duration; continuous readiness, stock/reporting and full asset life separately retained; no default duration |
| reference_flow_link | full_waiter_meal_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actually completed stationary full waiter-service meal occasion |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers |actual_site_operator_stationary_onsite_preparation; actual_menu_component_recipe_portion_version; equivalent_quality_and_service_configuration; actual_recipient_serviceoccasion_handoff_state_time; completed_all_included_food_related_beverage_service_gate; partial_declined_refill_recook_reversal_records; actual_raw_prepared_cooked_held_served_food_stocks_fates; actual_native_wet_dry_water_fat_other_component_basis; all_customer_staff_other_output_period_consumers; necessary_idle_failure_N0_source_carry_resolution; full_alluser_site_building_equipment_reusable_life; provider_direct_exclusive_completed_missing_stages; native_each_operand_unit_basis_method_state_sampletime_source; actual_receiver_species_medium_and_identity_gaps; actual_seated_individual_customer_full_waiter_service |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| meal_reference | full_waiter_meal_service | Count | Item(s) | Count unique actually completed compatible serviceoccasion IDs after component handoff/recook/reversal reconciliation under service_gate. No universal meal/diner/course/paidcover/eatenmass equivalence. |
| native_food_state | food_ingredients; recipe_water_ice; food fates; recipe_water_ice_liquid_tap | Mass; actual water content | kg actual state | As-received net means only tare removed before outbound returns. Preserve raw/thawed/cooked/held/as-served wet/dry/edible/bone/skin/fat/solute states; no universal recipe yield. Only same-sample water-only wet fraction w=m_water/m_wet and dry ratio r=m_water/m_nonwater imply w=r/(1+r), with percent converted first; loss-on-drying including other volatiles is not water. |
| native_operand | all inventory rows | Actual compatible property | Actual native unit | Every independent operand has own value/unit/basis/method/state/sampletime/source. EACH unit quantity times actual repetition once, TOTAL unchanged. Compatible volume-density-temperature or energy/calorific conversion requires actual source. Integrated kWh is not multiplied by hours again. |
| same_reference_once | all inventory rows | Native row property | per Item(s) service | Attribute actual duties to compatible target profile under all_user_pool, then divide by positive same-scope N_target once. Already-per-reference unchanged. N_target=0 retains source/pool/receiver/resolution without division or fake output. |
| fluid_roles | equipment_fluid_supply; fluid fates | Mass | kg actual fluid state | Stored/installed/recovered roles exclusive; recovery is internal transfer or actual useful/waste external fate. Retained recovery belongs in measured installed/stored totals, not an additional loss or purchase. Whole-equipment contents nonadditive. Independent emission evidence required; balance unknown is not air. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual stationary restaurant/cafe kitchen with declared onsite recipe preparation/treatment and actual completed served-service configuration |
| starting_condition_role | Real operating ready facility with complete full-life asset responsibility, not a burden-free existing building |
| product_classification_scope | This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset. |
| recursive_input_rule | No recursive identical completed-meal input replacing the actual kitchen. Real complementary providers replace exactly covered duties only; internal transfer same native state/quantity once |
| upstream_dataset_requirement | Complete actual food/utilities/material/asset/provider/receiver production and full life; actually missing stages completed integrated once with source/native quantity/state/time/owner/exclusions before full-chain use |
| disclosure | Actual menu/recipe/portion/service gate, all users/periods/duties, native food/stock/fates and all asset/land/provider/identity/evidence gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_gate | onsite_meal_service | Only actual completed compatible meal service is final. Record all contracted/included components, recipient, completed handoff, state/time and deviations; optional declined/refill rights follow actual package evidence. Ordering/payment/kitchen-ready alone insufficient. Coldplate and cooked courses retain actual formulation/treatment state; no universal nutrition or portion. | marriott-manho-service-current; ikea-counter-service-current |
| actual_kitchen_boundary | onsite_meal_service | Food ingredient/related beverage solids/liquids/oils/fats/seasonings and composition water/ice are actual composition roles; link actual recipe/formulation to prepared/cooked/held/as-served output. Same real kitchen owns input-state transformation, portion handoff and cleanup; no artificial double nodes. Actual offspec/rework/retained/useful/waste states each linked to original batch. | ivy-kitchen-current; marriott-signature-kitchen-current |
| complete_duties | all duties | Include actual upstream supplies/losses, site/building/fitout/equipment/reusable full manufacture-install-maintain-replace-EOL and actual waste receivers. One complete provider OR exclusive underlying stages; missing actual stage must be completed integrated once, not future plan/disclosure only. Moving/commissary/independent industrial routes require reviewed expansion. |  |
| food_fate_boundary | food stocks and fates | Opening/inbound/closing raw/prepared/held/served stocks, refills/rework/preparation/unserved/plate waste, water/steam/fat/solute/packaging and real accepted useful exits remain distinct native records. Whole meals/components/retained contents and service/eaten-mass views nonadditive; exclude internal transfers/enduse duplicate receiver views from terminal balances. Unknown residual is not waste/emission. |  |
| all_user_pool | all shared resources | Direct physical trace first OR for each record compatible raw quantity*target_driver/positive COMPLETE all_consumer_driver, then sum. Include target/other menu/mode/customer/staff/event/takeaway/nonfood building users and all actual periods. Necessary idle/failed/cancel/no-show/closed/readiness duties remain in responsible pool before attribution. Retain N0 source/carry/receiving/finalresolution; unresolved owner blocks completeness. Divide assigned total by positive identical-profile N_target once, already-per-reference unchanged. |  |
| full_life_land | asset_lifecycle; reusable_lifecycle; land interfaces | Full asset/provider/site life covers all observed use plus sourced compatible remaining service OR actual terminated total with replacements/maintenance/EOL, not annual N_target/nominal capacity or invented years. Native land occupation area*time and actual evidenced transformation prior/resulting-state/date/area/owner retain exact physical coverage links. Provider/asset-covered same land not repeated; missing actual land duty completed once before complete use. |  |
| other_output_native_gate | all intended outputs and useful transfers | For EACH target or other meal/nonfood output record its ownID/recipient/gate/state/handofftime/source and actual other_output_native_quantity with own native metadata; do not restrict the all-output ledger to meal count/food kg. Match actual usable food/reusable/fluid transferID and its actual native transfer quantity to recipient record; whole-service and subordinate transfer audits nonadditive. |  |
| terminal_water_closure | all actual water interfaces | Record actual water stock opening/closing, paired transfers and external terminal fate/receiver IDs/native quantities. Close terminal balance only: food moisture/composition water, cleaning-solution water, enduses/fills/internal transfers and contents retained in closing stocks are nonadditive views of the same physical source, not additional inputs/exits. Independent terminal exported water/airvapour/effluent and retained closing membership remain actual linked native evidence; unknown difference not vapour. |  |
| empty_duty_complete | freight and actual necessary empty returns | Zero kg*km cannot convey necessary empty vehicle duty. Use an actual matched complete carrier/provider covering the real empty return/positioning operation OR actually integrate exclusive uncovered vehicle operation/fuel/assets/native duty quantities once with source/state/time/owner/coverage links. Required actual empty-duty asset/provider stages must be completed, not deleted or replaced by fictitious cargo/meal. |  |
| fluid_native_roles | equipment-fluid ledgers | Each charge/lot/source/receiver paired role has actual IDs and paired_transfer_quantity; other actual receipts retain role/source/native other_receipt_quantity; whole-equipment export retains actual retained-content exitID and whole_equipment_retained_content_exit quantity, nonadditive with equipment/installed stock views. Include all actual nonair fates and independent measured release, unknown_balance never emission or new-manufacture credit. |  |
| presentation_boundary | onsite_meal_service | Before presentation food is actual prepared/cooked/held ready-to-eat state; actual portioned plated/tray-presented or protected takeaway state reaches declared recipient gate with actual composition/portion/temperature/pack condition. Actual reusable plates/trays/cutlery/glassware/linen and expendable cups/boxes/wrapping/napkins have own material/reuse roles, stock/loss/cleaning/end-of-use and real receiver. Keep food/pack interface native and nonadditive. Same onsite operation owns presentation; no extra artificial node. Distribution/logistics is separately declared freight/provider duty only when actual gate/coverage requires it, not packaging activity or automatic lastmile. | marriott-manho-service-current; ikea-counter-service-current; mcdonalds-pickup-2023-current |
| output_projection_once | all intended output ledgers and final projections | The complete all-output ledger is physical pre-attribution evidence: each other customer/menu/nonfood output retains its real native handoff amount, never raw amount times targetshare as its physical quantity. Declare output_role, actual process/subdivision versus genuinely joint co-product, allocation_stage, lineage and actual PCR-specific decision. In a target-allocated LCI, other independently produced meals/services are attribution evidence and not target co-product exchanges; subordinate courses/refills/internal transfers are not co-products. Preserve unallocated whole-pool only with complete inputs AND all native outputs and allocation at one designated step. Do not combine whole-pool outputs with already target-attributed resources or allocate twice. Output-specific quantity precedence: raw ledger keeps actual UNNORMALIZED native physical amounts. Only a true joint-output exchange retained by actual decision uses selected native physical output amount divided by positive same-profile N_target once, NEVER resource targetshare; already-per-reference unchanged. This output rule overrides generic assigned-resource normalization. |  |
| dedicated_classification_gate | full_waiter_meal_service | This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset. Dedicated scope eligibility and the actual completed output gate must both be evidenced. Keep other classifications and incompatible configurations out of N_target, but retain all real other consumers, idle duties and full-lifecycle burdens in their appropriate resource pools. Unknown eligibility blocks use; it is not zero. | unsd-cpc3-meal |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| onsite_meal_service | Actual onsite preparation serving and cleanup | required | Actual stationary onsite prepared food and completed compatible service gate | One real integrated kitchen/dining operation with actual formulation/treatment and full support responsibility | full_waiter_meal_service |

Actual batch/run/campaign indices connect ingredient input/composition and pre-treatment state to real washing/thawing/mixing/coldassembly/heating/cooking/holding/portioning and prepared-ready-to-eat served state. Inputs, outputs, recipe/changeover cleaning and continuous refrigeration/readiness periods remain linked. Not every dish undergoes every operation. Enumerate real recipe components and actual upstream/downstream gate/state/quantity/time; same-node internal events remain audit links, not duplicated external exchanges. Offspec/returned/unserved/plate residues follow actual reheat/rework/retained/useful transfer/discard route with parent batch. Real cold/heat operation and water/fat/solute fate must be evidenced before recipe/yield comparison.

### Process: Actual onsite preparation serving and cleanup (`onsite_meal_service`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`recipe_water_ice_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_food; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_energy; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual externally delivered useful heat (`purchased_thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_energy; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual liquid treated tap-water supply (`operating_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_water; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual independently recorded synthetic detergent supply (`cleaning_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_supplies; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

##### Waste flows

No routine waste inputs is asserted; any actual new interface requires identified native evidence and reviewed expansion, not a default zero.

##### Elementary flows

#### Outputs

##### Product flows

###### Actually completed stationary full waiter-service meal occasion (`full_waiter_meal_service`)

Final product at actual recipient completed declared equivalent menu/component/portion/service-version gate. Related component/refill records link to one service; neither each plate nor payment creates a second final service.

- Selected flow: Actually completed stationary full waiter-service meal occasion
- Flow property / unit: Count `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources: `marriott-manho-service-current`; `ikea-counter-service-current`

##### Waste flows

###### Actual discarded unserved prepared food (`unserved_food_waste`)

Actual cold-assembled, cooked or held prepared food discarded before recipient delivery; retained usable stocks or actual useful transfers excluded from this waste. Reject/recook status linked to producing batch.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual discarded unserved prepared food `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual returned dining and plate leftovers waste (`plate_waste`)

Actual residual food after service by component/state and receiver; separately measure dish/pack tare, liquids and retained fats/water. Eaten quantity is not final service count.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual returned dining and plate leftovers waste `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

##### Elementary flows

###### Actual water vapour released to air (`water_vapour_to_air`)

Actual food/cooking/holding/drying water vapour to identified air compartment. Source-specific measurement or compatible water-only composition/fate needed; total volatile loss is not all water.

- Selected flow: Actual water vapour released to air `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_air; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_air; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual separately evidenced fossil methane emitted to air (`other_direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_air; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

###### Actual separately evidenced nitrous oxide emitted to air (`other_direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_air; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule |
| --- | --- | --- |
| output_completeness | all outputs | Enumerate every intended target and other actual menu/version/portion/service/customer/staff/complimentary/nonfood output with ownID/recipient/gate/state/handoff/time/source/native quantity. Distinguish useful other output from residue/waste and internal rework. No universal dish-to-service or food-mass-to-service ratio. |
| physical_precedence | all resources | Apply all_user_pool resource-specific direct task/meter trace first; otherwise evidence-compatible full physical drivers, record decision and sensitivity. No price, nutrition, counts of unequal meals or service-mode label substitutes actual causal evidence. Independent output handoffs cannot count same service twice. |
| run_period_closure | all runs periods assets | Preparation/cooking/holding/serving/cleanup/changeover batches link to continuous refrigeration/readiness periods and actual inventory closure. Shared runs and recipe changes retain compatible output attribution and original burdens; no universal yield, rejected counts as final, or second new-input burden for internal rework. Crossperiod carry has real source/recipient/finalresolution. |
| returns_exclusive | actual supplies and fluids | S is attributed opening plus actual inbound minus closing with paired responsibility transfers. Use gross S input plus matched UNUSED external return output OR input S minus that UNUSED and omit that return output. Net receipt only removes tare before returns. USED usable recovery retains old state/original burden and is never unused new supply or automatic credit. |
| full_life_once | assets providers land | Apply full_life_land and all_user_pool to complete all-user lifecycle numerator and compatible observed+sourced remaining or terminated denominator. Physical provider/underlying stage matrix prevents overlap. Calendar capacity-time attribution must retain necessary idle numerator; productive-service attribution needs full evidenced lifetime service, never target annual N. |
| output_stage_precedence | all intended products and useful transfers | Apply output_projection_once. First evidence real independent physical subdivision where available; genuine joint co-products require actual PCR-specific burden decision with output native quantity/quality/gate and documented precedence. Do not scale other independent physical output quantities by targetshare, create automatic co-products from all-user ledger, or allocate a target-allocated LCI again. Unallocated wholepool requires all inputs/outputs and one designated allocation step; preserve roles/stage/lineage evidence. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Numeric raw keys below are actual independent operand slots; each expands its own _unit/_basis/_method/_state/_sample_time/_source fields. These metadata attach to THAT value, not a protocol-wide badge. Categorical IDs are not quantities. Methods cite stable rules above to avoid hiding incomplete calculations. Each protocol owns the one actual onsite_meal_service node.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | onsite_meal_service | actual final/other outputs | Physical fulfillment ledger | service_id; recipient_id; site_id; menu_version; recipe_version; component_id; portion_spec; service_mode; gate_evidence; state; handoff_time; reversal_id; partial_id; other_output_id; idle_pool_id; carry_source_id; receiving_period_id; final_resolution; other_output_recipient_id; other_output_gate; other_output_state; other_output_handoff_time; other_output_source_id; food_transfer_id; reusable_transfer_id; fluid_transfer_id; output_role; allocation_stage; lineage_source_id; physical_process_id; subdivision_id; joint_coproduct_decision_id; projection_treatment; allocation_step_id; resource_allocation_applied; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; component_count; component_count_unit; component_count_basis; component_count_method; component_count_state; component_count_sample_time; component_count_source; portion_mass; portion_mass_unit; portion_mass_basis; portion_mass_method; portion_mass_state; portion_mass_sample_time; portion_mass_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; other_output_native_quantity; other_output_native_quantity_unit; other_output_native_quantity_basis; other_output_native_quantity_method; other_output_native_quantity_state; other_output_native_quantity_sample_time; other_output_native_quantity_source; food_transfer_native_quantity; food_transfer_native_quantity_unit; food_transfer_native_quantity_basis; food_transfer_native_quantity_method; food_transfer_native_quantity_state; food_transfer_native_quantity_sample_time; food_transfer_native_quantity_source; reusable_transfer_native_quantity; reusable_transfer_native_quantity_unit; reusable_transfer_native_quantity_basis; reusable_transfer_native_quantity_method; reusable_transfer_native_quantity_state; reusable_transfer_native_quantity_sample_time; reusable_transfer_native_quantity_source; fluid_transfer_native_quantity; fluid_transfer_native_quantity_unit; fluid_transfer_native_quantity_basis; fluid_transfer_native_quantity_method; fluid_transfer_native_quantity_state; fluid_transfer_native_quantity_sample_time; fluid_transfer_native_quantity_source | Observe actual recipient component/course/refill handoffs, ready state and complete package criteria; reconcile recook/returns/reversals with order/KDS/service evidence. Enumerate ALL actual other outputs, actual supplied staff/complimentary meals and real failures, never POS/payment alone. Execute service_gate and all_user_pool. Execute other_output_native_gate for every independent output and linked useful food/reusable/fluid transfer. | Item(s); independent native food kg and actual time | Each handoff/component and continuous linked reporting periods | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_food | onsite_meal_service | food composition transformation and stocks | Lot recipe state ledger | source_id; supplier_id; lot_id; recipe_version; composition_role; species_sku; raw_prepared_state; operation_id; batch_id; run_id; changeover_id; handoff_id; receiver_id; rework_parent; retained_stock_id; sample_id; fate_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; recipe_input_mass; recipe_input_mass_unit; recipe_input_mass_basis; recipe_input_mass_method; recipe_input_mass_state; recipe_input_mass_sample_time; recipe_input_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_mass; served_mass_unit; served_mass_basis; served_mass_method; served_mass_state; served_mass_sample_time; served_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; retained_mass; retained_mass_unit; retained_mass_basis; retained_mass_method; retained_mass_state; retained_mass_sample_time; retained_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; moisture_value; moisture_value_unit; moisture_value_basis; moisture_value_method; moisture_value_state; moisture_value_sample_time; moisture_value_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh actual as-received net and tare separately, map each ingredient/composition water/ice and related beverage role to versioned recipe and real coldassembly/heating/holding/serving state. Weigh prepared/retained/refill/transfer states; link each rework/offspec to originating batch and destination. Reconcile actual food state flows under food_fate_boundary and returns_exclusive; no assumed recipe or yield. | kg actual state; independent pieces/composition/density/temperature | Each lot/recipe batch/state transition and stock cutoff | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_energy | onsite_meal_service | electricity fuels useful heat | Actual meter stock equipment ledger | meter_id; carrier_id; equipment_id; event_id; run_id; interval_start; interval_end; provider_id; coverage_id; consumer_id; pool_id; idle_reason; carry_source_id; receiving_period_id; final_resolution; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; delivered_heat; delivered_heat_unit; delivered_heat_basis; delivered_heat_method; delivered_heat_state; delivered_heat_sample_time; delivered_heat_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read calibrated matched meter interval or actual interval-average power and actual elapsed duration, retain integrated energy unchanged; reconcile fuel stocks/native basis and actual useful heat gate. Trace real equipment/runs/idle/other consumers and exact provider stages. Apply native_operand and all_user_pool; combustion factor/species requires cp_air evidence. | kWh; MJ; kg or independently converted native fuel units | Each actual metered interval/stock period/event | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_water | onsite_meal_service | water sources composition enduses fates | Actual source meter water fate ledger | source_id; water_type; meter_id; run_id; enduse_id; sample_id; state; receiver_id; medium; coverage_id; consumer_id; pool_id; carry_source_id; receiving_period_id; final_resolution; water_stock_id; paired_water_transfer_id; terminal_fate_id; terminal_receiver_id; closing_membership_id; content_water_view_id; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; supply_volume; supply_volume_unit; supply_volume_basis; supply_volume_method; supply_volume_state; supply_volume_sample_time; supply_volume_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; reuse_volume; reuse_volume_unit; reuse_volume_basis; reuse_volume_method; reuse_volume_state; reuse_volume_sample_time; reuse_volume_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; vapour_mass; vapour_mass_unit; vapour_mass_basis; vapour_mass_method; vapour_mass_state; vapour_mass_sample_time; vapour_mass_source; effluent_volume; effluent_volume_unit; effluent_volume_basis; effluent_volume_method; effluent_volume_state; effluent_volume_sample_time; effluent_volume_source; dissolved_mass; dissolved_mass_unit; dissolved_mass_basis; dissolved_mass_method; dissolved_mass_state; dissolved_mass_sample_time; dissolved_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; paired_water_transfer_quantity; paired_water_transfer_quantity_unit; paired_water_transfer_quantity_basis; paired_water_transfer_quantity_method; paired_water_transfer_quantity_state; paired_water_transfer_quantity_sample_time; paired_water_transfer_quantity_source; terminal_fate_quantity; terminal_fate_quantity_unit; terminal_fate_quantity_basis; terminal_fate_quantity_method; terminal_fate_quantity_state; terminal_fate_quantity_sample_time; terminal_fate_quantity_source; terminal_water_quantity; terminal_water_quantity_unit; terminal_water_quantity_basis; terminal_water_quantity_method; terminal_water_quantity_state; terminal_water_quantity_sample_time; terminal_water_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual purchase/abstraction separately, link food-washing/composition/warewashing/cleaning/equipment/reuse enduses and actual contained effluent receiver. Independently sample mass/composition and state; reconcile reuse/retention/vapour/effluent without supply=drain inference. Apply food_fate_boundary, native_operand and all_user_pool. Execute terminal_water_closure including actual stock opening/closing and paired receiver fates. | native m3; independent kg/components/temperature | Each source/enduse interval/batch and discharge event | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_supplies | onsite_meal_service | cleaning packaging and unused returns | Actual SKU stock issue return ledger | sku_id; lot_id; material_identity; composition; concentrate_solution_active_state; pack_id; event_id; run_id; consumer_id; paired_return_id; receiver_id; coverage_id; pool_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; supplied_concentrate_mass; supplied_concentrate_mass_unit; supplied_concentrate_mass_basis; supplied_concentrate_mass_method; supplied_concentrate_mass_state; supplied_concentrate_mass_sample_time; supplied_concentrate_mass_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; solution_water_mass; solution_water_mass_unit; solution_water_mass_basis; solution_water_mass_method; solution_water_mass_state; solution_water_mass_sample_time; solution_water_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Inventory each actual physical SKU/lot and packaging provenance; weigh net before outbound returns and record tare, actual issued/prepared/unused/used state and destination. Expand independent concentrate/solution/active quantities; use returns_exclusive without used-recovery credit, native_operand and all_user_pool. Food/component water and solution_water_mass link the same actual physical water source; no duplicate water purchase. | native kg; independent count/fraction/volume | Each receipt/issue/return/use and stock cutoff | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_assets | onsite_meal_service | full site equipment reusable life | Actual full-life asset ledger | asset_id; component_id; material_state; life_phase; manufacture_source; install_event; maintenance_event; replacement_event; termination_event; all_user_id; provider_id; covered_stage; uncovered_stage; actual_completion_id; usable_or_waste_receiver; content_view_id; period_id; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; life_burden_quantity; life_burden_quantity_unit; life_burden_quantity_basis; life_burden_quantity_method; life_burden_quantity_state; life_burden_quantity_sample_time; life_burden_quantity_source; observed_alluser_driver; observed_alluser_driver_unit; observed_alluser_driver_basis; observed_alluser_driver_method; observed_alluser_driver_state; observed_alluser_driver_sample_time; observed_alluser_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | Collect actual asset manufacture/install/maintenance/replacements/EOL and all-user observed history plus source-compatible remaining service OR actual terminated total. Record complete building/site/kitchen/dining/reusable scopes and material/native quantity, not invoices/annual N/capacity alone. Execute full_life_land, full_life_once, all_user_pool; whole equipment/retained contents nonadditive. | actual native asset/piece count; kg and full-life driver units | Each life phase/event plus complete historic and sourced remaining periods | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_providers | onsite_meal_service | completed complementary providers | Actual stage gate and coverage ledger | provider_id; dataset_id; service_id; physical_stage; gate; state; time; source_id; site_id; asset_id; consumer_id; covered_stage; excluded_stage; missing_stage; actual_completion_id; owner_id; delivered_native_quantity; delivered_native_quantity_unit; delivered_native_quantity_basis; delivered_native_quantity_method; delivered_native_quantity_state; delivered_native_quantity_sample_time; delivered_native_quantity_source; equivalent_count; equivalent_count_unit; equivalent_count_basis; equivalent_count_method; equivalent_count_state; equivalent_count_sample_time; equivalent_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | Obtain actual completed native service gate/quantity and provider stage scope through full supply/operation/asset/receiver life. For every gap actually integrate exclusive evidenced underlying stage with quantity/state/time/source/owner/exclusion; a planned supplement is incomplete. Match completed_support_providers only to real duties, not fictitious meal purchase. | actual contracted native unit; evidenced Item(s) equivalent only | Each completed delivery and lifecycle coverage revision | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_freight | onsite_meal_service | unique freight legs | Actual carrier manifest route ledger | leg_id; source_id; receiver_id; carrier_id; cargo_id; condition; pack_id; support_id; each_total_extent; covered_leg_id; consumer_id; period_id; empty_duty_id; empty_return_provider_id; empty_duty_coverage_id; uncovered_vehicle_operation_id; uncovered_asset_id; actual_missing_stage_completion_id; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; food_wet_mass; food_wet_mass_unit; food_wet_mass_basis; food_wet_mass_method; food_wet_mass_state; food_wet_mass_sample_time; food_wet_mass_source; packaging_mass; packaging_mass_unit; packaging_mass_basis; packaging_mass_method; packaging_mass_state; packaging_mass_sample_time; packaging_mass_source; support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_state; support_mass_sample_time; support_mass_source; noncargo_vehicle_tare; noncargo_vehicle_tare_unit; noncargo_vehicle_tare_basis; noncargo_vehicle_tare_method; noncargo_vehicle_tare_state; noncargo_vehicle_tare_sample_time; noncargo_vehicle_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repetition; repetition_unit; repetition_basis; repetition_method; repetition_state; repetition_sample_time; repetition_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; empty_native_operation_quantity; empty_native_operation_quantity_unit; empty_native_operation_quantity_basis; empty_native_operation_quantity_method; empty_native_operation_quantity_state; empty_native_operation_quantity_sample_time; empty_native_operation_quantity_source; empty_native_fuel_quantity; empty_native_fuel_quantity_unit; empty_native_fuel_quantity_basis; empty_native_fuel_quantity_method; empty_native_fuel_quantity_state; empty_native_fuel_quantity_sample_time; empty_native_fuel_quantity_source; empty_native_asset_quantity; empty_native_asset_quantity_unit; empty_native_asset_quantity_basis; empty_native_asset_quantity_method; empty_native_asset_quantity_state; empty_native_asset_quantity_sample_time; empty_native_asset_quantity_source | Match actual cargo/leg/distance and packed wet payload; remove only noncargo vehicle tare. EACH repeats once, TOTAL unchanged; THAT record attribution share multiplies inside each leg term before sum. Exclude exactly provider-covered leg, then apply same_reference_once; dry/edible food not transported gross cargo. Execute empty_duty_complete; zero payload cannot convey necessary empty operation burden. | kg*km; separate actual kg/km/count/share | Each actual unique cargo leg and empty attributable duty | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_fluids | onsite_meal_service | fluid supply stocks recovery fates | Actual species charge stock recovery ledger | fluid_species; composition; lot_id; equipment_id; event_id; role; new_recovered_state; opening_membership; factory_charge_coverage; recovery_id; receiver_id; whole_equipment_view; period_id; owner_id; paired_role_id; paired_source_event_id; paired_receiver_event_id; other_receipt_source_id; other_receipt_role; whole_equipment_exit_id; retained_content_exit_id; stored_opening; stored_opening_unit; stored_opening_basis; stored_opening_method; stored_opening_state; stored_opening_sample_time; stored_opening_source; installed_opening; installed_opening_unit; installed_opening_basis; installed_opening_method; installed_opening_state; installed_opening_sample_time; installed_opening_source; standalone_receipt; standalone_receipt_unit; standalone_receipt_basis; standalone_receipt_method; standalone_receipt_state; standalone_receipt_sample_time; standalone_receipt_source; factory_new_entry; factory_new_entry_unit; factory_new_entry_basis; factory_new_entry_method; factory_new_entry_state; factory_new_entry_sample_time; factory_new_entry_source; stored_closing; stored_closing_unit; stored_closing_basis; stored_closing_method; stored_closing_state; stored_closing_sample_time; stored_closing_source; installed_closing; installed_closing_unit; installed_closing_basis; installed_closing_method; installed_closing_state; installed_closing_sample_time; installed_closing_source; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_sample_time; retained_recovery_source; unused_return; unused_return_unit; unused_return_basis; unused_return_method; unused_return_state; unused_return_sample_time; unused_return_source; usable_export; usable_export_unit; usable_export_basis; usable_export_method; usable_export_state; usable_export_sample_time; usable_export_source; waste_export; waste_export_unit; waste_export_basis; waste_export_method; waste_export_state; waste_export_sample_time; waste_export_source; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; unknown_balance; unknown_balance_unit; unknown_balance_basis; unknown_balance_method; unknown_balance_state; unknown_balance_sample_time; unknown_balance_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; fraction; fraction_unit; fraction_basis; fraction_method; fraction_state; fraction_sample_time; fraction_source; other_receipt_quantity; other_receipt_quantity_unit; other_receipt_quantity_basis; other_receipt_quantity_method; other_receipt_quantity_state; other_receipt_quantity_sample_time; other_receipt_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; whole_equipment_retained_content_exit; whole_equipment_retained_content_exit_unit; whole_equipment_retained_content_exit_basis; whole_equipment_retained_content_exit_method; whole_equipment_retained_content_exit_state; whole_equipment_retained_content_exit_sample_time; whole_equipment_retained_content_exit_source; other_actual_fate_quantity; other_actual_fate_quantity_unit; other_actual_fate_quantity_basis; other_actual_fate_quantity_method; other_actual_fate_quantity_state; other_actual_fate_quantity_sample_time; other_actual_fate_quantity_source | Measure actual stored/installed totals and exclusive lot/charge roles; retained recovery is already inside those totals. Count factory new entry only if absent opening/other receipt and uncovered by complete equipment. Reconcile all fates/other receipts/transfers; whole equipment retained fluid nonadditive. Independently prove air release under cp_air; unknown stays unknown. Apply returns_exclusive and fluid_roles. Match each paired role/source/receiver and other actual receipt plus whole-equipment retained-content exit using fluid_native_roles. | kg actual species/state; independent fraction/density/temperature | Every receipt/charge/recovery/export and stock cutoff | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_fates | onsite_meal_service | preparation unserved plate pack and other wastes | Actual receiver weighed fate ledger | stream_id; source_lot; recipe_batch; service_id; state; component_identity; mixture_view_id; receiver_id; handoff_time; treatment_route; coverage_id; rework_parent; sample_id; period_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh each real preparation/unserved/plate/pack/cleaning stream with actual tare and state, confirm receiver handoff and actual treatment owner. Trace rejects/recook/rework/retained/useful routes distinctly. Whole stream and sampled components nonadditive; food_fate_boundary terminal balance excludes internal/use duplicate views. No disappearance/automatic waste credit. | kg actual wet/dry state; independent fractions/counts | Each batch/collection/handoff and complete period closure | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_air | onsite_meal_service | actual species medium and vapour | Actual measurement or sourced factor ledger | species_id; particle_size_class; medium; source_event; equipment_id; sample_id; reported_basis; factor_reference_id; composition_source; fate_source; capture_stream_id; coverage_id; period_id; particle_size_value; particle_size_value_unit; particle_size_value_basis; particle_size_value_method; particle_size_value_state; particle_size_value_sample_time; particle_size_value_source; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; activity_quantity; activity_quantity_unit; activity_quantity_basis; activity_quantity_method; activity_quantity_state; activity_quantity_sample_time; activity_quantity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_sample_time; release_fraction_source; capture_mass; capture_mass_unit; capture_mass_basis; capture_mass_method; capture_mass_state; capture_mass_sample_time; capture_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual species/air-water-soil compartment or apply documented compatible activity/factor/composition/fate with independent native operand metadata. Water vapour requires water-only evidence, captured grease/dust goes to waste, no residual-as-emission; never select NOx/VOC/PM umbrella as concrete substance. Retain uncertainty and unknowns. | kg species to actual medium; factor/activity own units | Each actual source/run/event/sample period | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |
| cp_land | onsite_meal_service | actual occupation transformation | Actual spatial temporal land ledger | site_polygon; land_state; location_source; owner_id; life_stage; provider_coverage; from_state; to_state; event_id; event_date; period_start; period_end; actual_completion_id; consumer_id; occupation_area; occupation_area_unit; occupation_area_basis; occupation_area_method; occupation_area_state; occupation_area_sample_time; occupation_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | Obtain actual spatial boundary/state and sourced occupation interval; collect real before/after transformation event only where evidenced, matched area/date/owner. Match exact building/provider coverage and complete uncovered actual duty once. Native area*time/area distinct from Count; apply full_life_land/all_user_pool. | m2*a actual interval conversion; independent m2 | Actual occupation periods and transformation events | Actual full reporting/stock/run intervals and all linked historic/sourced remaining life; source/carry/receiving resolution retained | Actual site/kitchen/dining, suppliers/receivers/providers and complete all-user scope relevant to this protocol | per reference flow | Traceable raw source, calibrated/sourced measurement, independent operand metadata, matching gate/state/time and complete owner/provider coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_count | full_waiter_meal_service | N_target = unique completed compatible serviceoccasion IDs after actual component/gate/reversal reconciliation under service_gate; partials retain separate scope. | service_id; gate_evidence; component_id; reversal_id; cp_service | N_target |  |
| attribute_pool | all inventory rows | Execute all_user_pool per record with direct trace OR compatible raw quantity times that target driver divided by complete positive all-consumer driver; then sum, retain necessary idle/N0/carry responsibility. | raw_quantity; target_driver; all_consumer_driver; coverage_id | assigned_target_quantity |  |
| normalize_once | all inventory rows | Assigned same-profile target quantity divided by positive same-scope N_target once; already-per-reference unchanged; N_target=0 retains source/receiver/finalresolution without division. | assigned_target_quantity; N_target | per_reference_quantity |  |
| stock_returns | actual supplies fluids food | Execute returns_exclusive from actual opening/inbound/closing and paired transfers; gross drawn with matched unused output OR net consumed with that output omitted, not both. | opening_mass; inbound_mass; closing_mass; paired_transfer_mass; unused_return_mass | exclusive_stock_quantity |  |
| food_reconcile | food stocks and fates | Execute food_fate_boundary on actual same-basis stock/batch food/component/water states, including actual recipe inputs, served/refill/retained/usable/waste/air fates. Internal transfer and whole/component audits nonadditive; unexplained gap remains unknown. | cp_food; cp_water; cp_fates; cp_air | state_balance_and_gaps |  |
| freight_sum | freight | Sum actual unique leg packed wet cargo times distance times EACH repetition if applicable times THAT record share inside sum; TOTAL unchanged; provider-covered leg excluded once; normalize_once only afterward. | packed_wet_payload; distance; repetition; record_share; cp_freight | attributable_freight |  |
| asset_life | asset_lifecycle; reusable_lifecycle | Execute full_life_land and full_life_once using complete actual life numerator and compatible observed plus sourced remaining service OR actual terminated total; preserve all users/replacements/EOL and exclusive complete provider stage coverage. | cp_assets; cp_land; cp_providers | attributable_full_life_duty |  |
| fluid_reconcile | equipment_fluid_supply; fluid fates | Execute fluid_roles over exclusive opening/receipt/factory entry/closing/recovery/export/release roles; factory new entry absent opening and other receipts; retained contents/whole equipment nonadditive and unknown not release. | cp_fluids; cp_air; cp_assets | exclusive_fluid_balance |  |
| source_species | direct_water_withdrawal; other_direct_species; water_vapour_to_air; other_direct_species_co2_fossil_air; other_direct_species_methane_fossil_air; other_direct_species_nitrous_oxide_air | Actual compatible measurement OR sourced activity/factor/composition/fate only with each own unit/basis/method/state/sampletime/source; do not manufacture factor, recipe yield, species or medium. | cp_air; cp_water | actual_species_quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_native | all exchanges | Expand conditional actual cards to concrete actual material/species/state/gate/direction/type/property/unit/receiver and verify identity before final exchange. Count support only supports Item(s), not meal equivalence or service identity. | Actual detail/support evidence and native record sources |
| menu_gate_quality | full_waiter_meal_service | Actual declared menu/component/recipe/portion/service version and complete supply gate mandatory; unequal profiles not pooled by generic meal or diner count. | cp_service; service_gate |
| native_operand_quality | all protocols | Every independent numeric field retains own unit/basis/method/state/sampletime/source including sample composition, factors, area/time, lifetime drivers, target/allconsumer shares and repetitions. Missing quantity is not zero. | Raw metadata field audit |
| full_scope_quality | all duties | Actual complete all-output/all-period pool, full asset/land/provider/receiver stages, replaced/retained material and N0 source/receiving/finalresolution must close before complete use. | Coverage matrix and actual completed missing stages |
| honest_source_quality | all evidence | Operator pages are qualitative source examples. No source-derived universal recipe/meal mass/nutrition/time/temperature/lifetime/factor/range is asserted; actual compatible site records mandatory. Unavailable identity/numerics remain gaps with restricted use. | Source extent and actual source date/site applicability |
| complete_food_ingredients | onsite_meal_service | Expand each actual case under `food_ingredients` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_food` |
| complete_recipe_water_ice | onsite_meal_service | Expand each actual case under `recipe_water_ice` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_food` |
| complete_electricity | onsite_meal_service | Expand each actual case under `electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_operating_fuels | onsite_meal_service | Expand each actual case under `operating_fuels` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_purchased_thermal | onsite_meal_service | Expand each actual case under `purchased_thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_operating_water | onsite_meal_service | Expand each actual case under `operating_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_cleaning_supplies | onsite_meal_service | Expand each actual case under `cleaning_supplies` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_single_use_serving | onsite_meal_service | Expand each actual case under `single_use_serving` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_asset_lifecycle | onsite_meal_service | Expand each actual case under `asset_lifecycle` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_reusable_lifecycle | onsite_meal_service | Expand each actual case under `reusable_lifecycle` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_completed_support_providers | onsite_meal_service | Expand each actual case under `completed_support_providers` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_freight | onsite_meal_service | Expand each actual case under `freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_freight` |
| complete_equipment_fluid_supply | onsite_meal_service | Expand each actual case under `equipment_fluid_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_direct_water_withdrawal | onsite_meal_service | Expand each actual case under `direct_water_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_land_occupation | onsite_meal_service | Expand each actual case under `land_occupation` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |
| complete_land_transformation_from | onsite_meal_service | Expand each actual case under `land_transformation_from` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |
| complete_unused_supply_return | onsite_meal_service | Expand each actual case under `unused_supply_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_usable_food_transfer | onsite_meal_service | Expand each actual case under `usable_food_transfer` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_food` |
| complete_usable_reusable_transfer | onsite_meal_service | Expand each actual case under `usable_reusable_transfer` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_usable_recovered_fluid | onsite_meal_service | Expand each actual case under `usable_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_preparation_waste | onsite_meal_service | Expand each actual case under `preparation_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_packaging_waste | onsite_meal_service | Expand each actual case under `packaging_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_cleaning_capture_waste | onsite_meal_service | Expand each actual case under `cleaning_capture_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_retired_asset_waste | onsite_meal_service | Expand each actual case under `retired_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_contained_wastewater | onsite_meal_service | Expand each actual case under `contained_wastewater` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_contained_fluid_waste | onsite_meal_service | Expand each actual case under `contained_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fluids` |
| complete_other_direct_species | onsite_meal_service | Expand each actual case under `other_direct_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_air` |
| complete_land_transformation_to | onsite_meal_service | Expand each actual case under `land_transformation_to` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### food_ingredients

Owner and original flow role: onsite_meal_service / inputs / product

Actual distinct animal/plant ingredients, prepared components, oils/fats, sauces, seasonings and related beverage solids/liquids by recipe role/species/SKU/lot and raw/chilled/frozen/cooked state. Actual two-or-more-input formulation only where composition records prove it; whole mixture and ingredients remain nonadditive audit views.

- Selected flow: Actual supplied food ingredients and related beverage components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_food; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`
- Sources: `ivy-kitchen-current`; `marriott-signature-kitchen-current`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### recipe_water_ice

Owner and original flow role: onsite_meal_service / inputs / product

Water/ice actually added or retained in food/drink composition; separate purchased water from source-specific direct abstraction and independent cleaning water. Evaporated water remains a separate real fate, not universal yield loss.

Residual inventory requirement after the independently identified cases `recipe_water_ice_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual food-composition water and ice
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_food; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### electricity

Owner and original flow role: onsite_meal_service / inputs / product

Actual preparation, cooking, holding, refrigeration, ventilation, lighting, service systems, warewashing and necessary readiness/idle energy. Exact provider-covered electricity excluded once; no nameplate or universal meal factor.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen dining and support electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_energy; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### operating_fuels

Owner and original flow role: onsite_meal_service / inputs / product

Actual evidenced fuel carrier and equipment use only. Native volume/density/temperature and calorific basis independently supported; real combustion species/medium measured or source-matched, not hidden in fuel mass.

- Selected flow: Actual cooking and support fuel supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_energy; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### purchased_thermal

Owner and original flow role: onsite_meal_service / inputs / product

Actual delivered thermal service at defined meter/state/temperature/enthalpy gate, if present. Do not repeat provider fuel/plant/losses or count direct electric cooling as purchased cooling.

Residual inventory requirement after the independently identified cases `purchased_thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual externally supplied useful heating or cooling
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_energy; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### operating_water

Owner and original flow role: onsite_meal_service / inputs / product

Actual food washing, dishwashing, sanitation, cleaning and equipment water by enduse. Same water reused or composition water is not another supply; purchased input is not equal sewer output.

Residual inventory requirement after the independently identified cases `operating_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased washing cleaning and equipment water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_water; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### cleaning_supplies

Owner and original flow role: onsite_meal_service / inputs / product

Actual chemical/wipe/filter/absorbent SKU, concentrate/prepared-solution/active-substance state, composition and pack tracked independently. Prepared solution mass is not all active substance.

Residual inventory requirement after the independently identified cases `cleaning_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual cleaning sanitation and hygiene materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_supplies; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### single_use_serving

Owner and original flow role: onsite_meal_service / inputs / product

Actual napkins, wrapping, cups, boxes and other expendables, if used. Incoming ingredient packaging already covered by source is linked, not purchased again. Reusable dishware belongs to full-life assets.

- Selected flow: Actual single-use serving and packaging supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_supplies; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Sources: `ikea-counter-service-current`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### asset_lifecycle

Owner and original flow role: onsite_meal_service / inputs / product

Actual building/siteworks/fitout, cooking/holding/refrigeration/ventilation/warewashing equipment, furniture and systems: manufacture-install-maintain-replace-EOL with all users/periods. Native land interfaces separate from Count asset equivalence.

- Selected flow: Complete-life site building kitchen and dining assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_assets; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### reusable_lifecycle

Owner and original flow role: onsite_meal_service / inputs / product

Actual plates, cutlery, glassware, trays, linen and reusable supports by material/condition and unique piece or evidenced equivalent. Washing is real operation, not repeated new manufacture; loss/breakage and retained usable items have actual paths.

- Selected flow: Complete-life reusable dishware textiles and service supports
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_assets; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `marriott-manho-service-current`; `ikea-counter-service-current`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### completed_support_providers

Owner and original flow role: onsite_meal_service / inputs / product

Conditional actual maintenance, completed external textile care, pest/cleaning or other support with native delivered gate and full exact lifecycle coverage. Not a blanket complete meal purchase hiding the real onsite kitchen; underlying uncovered stages actually completed once.

- Selected flow: Actual completed complementary support provider services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_providers; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### freight

Owner and original flow role: onsite_meal_service / inputs / product

Actual source/recipient legs and packed wet cargo including food moisture, packaging and supports. Remove only noncargo vehicle tare. Provider-covered legs excluded by precise link; no direct diner travel by default.

- Selected flow: Actual unique ingredient supply asset and receiver freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_freight; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### equipment_fluid_supply

Owner and original flow role: onsite_meal_service / inputs / product

Actual species/composition/lot and new, retained recovered or bought recovered state. Installed factory charge belongs to complete equipment OR exclusive missing-stage addition, absent from opening/other receipts when counted new entry.

- Selected flow: Actual standalone operating refrigerant and transfer-fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fluids; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### direct_water_withdrawal

Owner and original flow role: onsite_meal_service / inputs / elementary

Conditional direct environmental source/location/water-type abstraction; not purchased supply. Actual amount and source ecosystem evidence determine concrete elementary identity.

- Selected flow: Actual source-specific direct water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_water; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### land_occupation

Owner and original flow role: onsite_meal_service / inputs / elementary

Actual site footprint/state/location, attributable occupation interval and native area*time. Provider/building-covered same land is nonadditive; no habitat class, fixed annual duration or transformation inferred from restaurant existence.

- Selected flow: Actual land occupation over evidenced duration
- Flow property / unit: Area*time / m2*a
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_land; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### land_transformation_from

Owner and original flow role: onsite_meal_service / inputs / elementary

Only actual evidenced historical/new transformation prior state/date/area and owner, matched to after-state row. Unknown applicable history is a gap, not a manufactured conversion.

- Selected flow: Actual evidenced land transformation from prior state
- Flow property / unit: Area / m2
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_land; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### unused_supply_return

Owner and original flow role: onsite_meal_service / outputs / product

Only traceable unused original-state external returns paired with original lot/input. Apply exclusive gross-drawn-plus-return or net-consumed-omit-return treatment; used recovery is never unused new material.

- Selected flow: Actual matched unused food or supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_supplies; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### usable_food_transfer

Owner and original flow role: onsite_meal_service / outputs / product

Actual accepted useful other output, retained state/quality/recipient and original recipe/burden links. Internal rework/retained food is not an external output or new meal. No assumed donation/recycling credit. Execute output_projection_once for actual output role and projection stage; other independent outputs are pre-attribution native evidence and omitted from target-allocated co-product exchanges unless a genuine joint-output decision applies.

- Selected flow: Actual accepted usable prepared-food external transfer
- Flow property / unit: Mass / kg
- Amount rule: Under cp_food and output_projection_once, raw ledger keeps actual UNNORMALIZED native handoff quantity/state/unit. Only a true joint-output final exchange retained by actual decision uses selected native physical output quantity / positive same-profile N_target once, without resource targetshare; already-per-reference unchanged. This output-specific precedence overrides assigned-resource normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_food`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### usable_reusable_transfer

Owner and original flow role: onsite_meal_service / outputs / product

Actual usable old-state ownership transfer with recipient/condition/native unit and lifecycle burden treatment; not waste by book depreciation or new manufacture deduction. Execute output_projection_once for actual output role and projection stage; other independent outputs are pre-attribution native evidence and omitted from target-allocated co-product exchanges unless a genuine joint-output decision applies.

- Selected flow: Actual usable equipment and reusable service-item export
- Flow property / unit: Count / Item(s)
- Amount rule: Under cp_assets and output_projection_once, raw ledger keeps actual UNNORMALIZED native handoff quantity/state/unit. Only a true joint-output final exchange retained by actual decision uses selected native physical output quantity / positive same-profile N_target once, without resource targetshare; already-per-reference unchanged. This output-specific precedence overrides assigned-resource normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### usable_recovered_fluid

Owner and original flow role: onsite_meal_service / outputs / product

Real old-state usable exported fluid distinct from internal retained recovery, unused supply return and contained waste; no automatic avoided manufacture. Execute output_projection_once for actual output role and projection stage; other independent outputs are pre-attribution native evidence and omitted from target-allocated co-product exchanges unless a genuine joint-output decision applies.

- Selected flow: Actual usable recovered equipment-fluid export
- Flow property / unit: Mass / kg
- Amount rule: Under cp_fluids and output_projection_once, raw ledger keeps actual UNNORMALIZED native handoff quantity/state/unit. Only a true joint-output final exchange retained by actual decision uses selected native physical output quantity / positive same-profile N_target once, without resource targetshare; already-per-reference unchanged. This output-specific precedence overrides assigned-resource normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### preparation_waste

Owner and original flow role: onsite_meal_service / outputs / waste

Actual bones/skin/trim/spoiled inputs/cooking solids or spent frying oils individually identified by wet state/composition and real receiver. Captured grease or particulates are waste, not ambient emissions.

- Selected flow: Actual ingredient preparation and cooking waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### packaging_waste

Owner and original flow role: onsite_meal_service / outputs / waste

Actual separate source/serving packaging types, contamination and receiver route; inherited material burden remains upstream once. Do not duplicate mixed-food stream contents as separate waste.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual independent packaging and expendable serving waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### cleaning_capture_waste

Owner and original flow role: onsite_meal_service / outputs / waste

Actual wipes/filters/absorbents/grease captures with composition/native state, exclusive of separately measured captured component views.

- Selected flow: Actual spent cleaning materials filters and captured residues
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fates; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### retired_asset_waste

Owner and original flow role: onsite_meal_service / outputs / waste

Actual retirement/breakage receiver handoff, material/components/retained contents and coverage owner. Whole equipment and contained fluid/material views nonadditive.

- Selected flow: Actual discarded site kitchen dining and reusable components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_assets; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### contained_wastewater

Owner and original flow role: onsite_meal_service / outputs / waste

Actual drain/collection/treatment handoff with pollutants/solids/liquids/salts/fats measured separately and real receiver. Purchased water volume is not effluent and contained wastewater is not elementary direct discharge.

- Selected flow: Actual contained preparation warewashing and cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_water; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### contained_fluid_waste

Owner and original flow role: onsite_meal_service / outputs / waste

Actual contained unwanted fluid routed to treatment with species/composition/recipient; exclude usable recovery and fluid retained in whole exported equipment. Unknown balance is not waste or air release.

- Selected flow: Actual contained refrigerant or equipment-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_fluids; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluids`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### other_direct_species

Owner and original flow role: onsite_meal_service / outputs / elementary

Only independently evidenced combustion/refrigerant/process/waste release species and actual air/water/soil medium; NOx/VOC/PM or mixed pollutant labels require actual species/basis/size before concrete binding. No unexplained fluid/food mass residual converted into emissions.

Residual inventory requirement after the independently identified cases `other_direct_species_co2_fossil_air`; `other_direct_species_methane_fossil_air`; `other_direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual species-specific releases to identified media
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_air; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.

#### land_transformation_to

Owner and original flow role: onsite_meal_service / outputs / elementary

Actual resulting state/date/area matched to prior-state event and exclusive owner. Transformation from/to and occupation are distinct native interfaces, never asset counts.

- Selected flow: Actual evidenced land transformation to resulting state
- Flow property / unit: Area / m2
- Amount rule: Actual exclusive assigned native quantity per reference flow under cp_land; apply same_reference_once and actual conditional activation, N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`

Range evidence need: Actual compatible native site/provider/state/quantity evidence required; no generic numeric range or factor is supported. Missing actual data restricts use and is not zero.


## 9. Validation Rules

| rule_id | applies_to | rule |
| --- | --- | --- |
| reference_complete | final output | Check actual compatible service version/portion/components and complete recipient gate, reversals/recook/partials and one positive same-scope N_target. No paid/order/capacity/eaten-only substitute. |
| route_complete | onsite_meal_service | Check actual ingredient formulation/treatment input/output states, actual cold/hot operation, served gate and prep/held/refill/reject/rework/retained/useful/waste paths. Excluded commissary/mobile/industrial routes cannot be hidden in generic service. |
| native_complete | all exchanges | Check every independent native numeric operand metadata, EACH/TOTAL once, state-compatible conversion, wet/dry/water distinction, exclusive stocks/returns/fluids and full packed freight with each share inside sum. |
| output_period_complete | all resources | Check all intended outputs/recipient gates/native amounts, resource-specific full all-user/period drivers and necessary idle/failed/closed duties, N0 carry/finalresolution, same positive N once. Unassigned actual responsibility blocks complete use. |
| life_provider_complete | assets providers land | Check full manufacture-install-maintain-replace-EOL/alluser observed+sourced remaining or terminated life; native land area/time and transformation evidence; actual missing stages completed once and precise provider exclusions. Annual N or planned supplements do not pass. |
| fate_species_complete | waste elementary | Check actual contained wastewater/waste receiver versus real elementary species/medium, water vapour Mass, pollutant basis/size, independent release evidence, nonadditive whole/components and terminal balance gaps. Unknown residual not emission/zero. |
| bilingual_projection_identity | all methodology | Check same EN/ZH IDs/gates/qualifiers/nodes/cards/native units/protocols/rules and deterministic current canonical projection; concrete identity/support unresolved gaps mandatory before final exchange. Checker pass alone not scientific review/publication readiness. |
| output_stage_check | all outputs and projections | Check output_role/allocation_stage/lineage/source and actual subdivision or genuine joint-coproduct decision before projection. Other independent output native amounts remain physical ledger evidence, not targetshare products or target co-products after resource allocation. Reject mixed wholepool/targetallocated basis or duplicate allocation; unallocated wholepool only complete input+output closure and one designated step. |
| validate_dedicated_classification_gate | full_waiter_meal_service | This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset. Dedicated scope eligibility and the actual completed output gate must both be evidenced. Keep other classifications and incompatible configurations out of N_target, but retain all real other consumers, idle duties and full-lifecycle burdens in their appropriate resource pools. Unknown eligibility blocks use; it is not zero. | unsd-cpc3-meal |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | Foreground and downstream models of one Actually completed stationary full waiter-service meal occasion |
| allowed_use | This PCR applies only to onsite food preparation and related beverages at a stationary restaurant, cafe or eating facility providing full waiter service to individual customers seated at tables, counters or booths. Record the actual full service and each included physical handoff; a brand, app-delivery button or payment is insufficient. Seated self-service/counter-only service, no-seating takeaway, ongoing contract/concession canteen services, event catering, transport-operator catering and beverage-only service are outside this dedicated route. Moving dining cars and shipboard operations require their own reviewed route and are not covered by this stationary subset. |
| excluded_use | Moving/commissary-transport-finish/independent industrial routes without review; beverage-only/lodging bundle; universal meal/nutrition/yield; incomplete gate/asset/pool/provider/identity data |
| required_metadata | actual_site_operator_stationary_onsite_preparation; actual_menu_component_recipe_portion_version; equivalent_quality_and_service_configuration; actual_recipient_serviceoccasion_handoff_state_time; completed_all_included_food_related_beverage_service_gate; partial_declined_refill_recook_reversal_records; actual_raw_prepared_cooked_held_served_food_stocks_fates; actual_native_wet_dry_water_fat_other_component_basis; all_customer_staff_other_output_period_consumers; necessary_idle_failure_N0_source_carry_resolution; full_alluser_site_building_equipment_reusable_life; provider_direct_exclusive_completed_missing_stages; native_each_operand_unit_basis_method_state_sampletime_source; actual_receiver_species_medium_and_identity_gaps |
| required_quality_disclosure | Actual site/date/recipe/service source applicability, measured/modelled native quantities, uncertainty, all unresolved identity/numeric/range/species/medium/lifetime/provider/pool/land/receiver gaps and restricted use |
| update_trigger | Changed recipe/components/portion/servicegate/state/site/actual kitchen route, all-user outputs/provider/asset/land scope, replacement/termination/native conversion/fate/identity evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3 explanatory notes30June2025 printed356–358. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope63310/20 and food/beverage/contract neighbours only; not route/quantity defaults. |
| marriott-manho-service-current | handbook | Current Marriott ManHo F&B Service Expert job26126497, accessed2026-10-20, operational duties. https://careers.marriott.com/f-b-service-expert-man-ho/job/P1-7075895-0 | Qualitative actual table orders/kitchen communications/delivery/clearing, reusable goods/stock/cleanup; mixed event/room tasks not universally imposed. |
| ivy-kitchen-current | handbook | Current IvyTempleRowBirmingham Chef dePartie page, accessed2026-10-20. https://careers.ivycollection.com/job/6hLlXY9hbVfTwKQ9e8R6GQ | Qualitative actual same kitchen preparation team, recipe cooking, ingredient stock and cleanup; no numerical recipe/yield. |
| marriott-signature-kitchen-current | handbook | Current SingaporeEDITION SignatureRestaurantKitchen job26126377, accessed2026-10-20. https://careers.marriott.com/chef-de-partie-signature-restaurant-kitchen-the-singapore-edition/job/P1-7075872-0 | Qualitative actual thawing/hot and cold food/portion/presentation/logs/excess coordination; different property not transplanted target inventory. |
| ikea-counter-service-current | handbook | IKEAFrance official restaurant procedure, accessed2026-10-20, actual steps1–4. https://www.ikea.com/fr/fr/customer-service/knowledge/articles/9ac94d4c-ba28-4d4d-b351-7fcda6b6b68e.html | Actual tray/cutlery/glass/napkin, counter hotdish service and later selfdispensed coffee illustrate distinct component gates; employee counter serving not full waiter proof. |
| mcdonalds-pickup-2023-current | handbook | McDonalds current hosted FAQ dated31March2023, accessed2026-10-20, actual pickup methods. https://www.mcdonalds.com/us/en-us/faq/how-do-i-complete-and-pick-up-my-order.html | Qualitative table/counter/curbside/drive-through options vary restaurant/time; physical handover distinct from app charge and not full-waiter classification evidence. |
| chipotle-kitchen-current | handbook | Current WestHartford KitchenLeader job, accessed2026-10-20, operative27–49. https://jobs.chipotle.com/job/west-hartford/kitchen-leader/282/71274739232 | Actual prep/grill/saute, food waste/inventory, cleaning and equipment maintenance corroborate physical kitchen duties only, no target recipe/quantity. |
| chipotle-digital-design-2021 | handbook | Chipotle own release16December2021, design45–51, accessed2026-10-20. https://ir.chipotle.com/2021-12-16-CHIPOTLE-TO-OPEN-FIRST-CHIPOTLANE-DIGITAL-KITCHEN | Dated prototype had dedicated digital make-line, pickup window/drive-through, no inside dining room and patio seating; historical design example not current operation or no-seating classification proof. |


| unsd-cpc3-meal | official_guidance | UNSD CPC Version 3.0 explanatory notes, 30 June 2025, pp.355–357; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no numeric factor or service equivalence. |
