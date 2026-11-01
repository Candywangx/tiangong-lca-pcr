---
pcr_id: pcr.ambient-own-account-wholesale-of-original-bagged-prepared-anthracite
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of original-bagged prepared anthracite

## 1. Scope and Applicability

Actual supplier-cleaned,washed,sized ANTHRACITE in ORIGINAL CLOSED BAGS,owned/purchased/resold through ambient B2B commercial consignments. Actual rank/grade/size/lot,coal-water/analysis state,netasreceivedcoal/bag tare,packing,condition,time and final buyer gate qualify service. Exclude briquettes/coke/other ranks,bulk-open routes,refined diesel/wood pellets,merchant screen/wash/dry/rebag/active climate/burning/energy generation/use,retail and fee agency. Real extra operations require separate complete scope review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ambient-own-account-wholesale-of-original-bagged-prepared-anthracite |
| classification_refs | CPC3.0:61091;narrower11011prepared originalbagged anthracite;not333diesel/39281woodpellets |
| covered_products | Completed original-closed-bag cleaned-washed-sized anthracite own-account wholesale consignment service |
| excluded_products | Otherfuels/openbulk/merchantprocessing-burning/use/retail/agency |
| representative_product | Actual rank-grade-size/closedbaglot/native asreceivedcoal-water-bagtare/qualitybases finalbusiness consignment |
| production_route | Supplierprepared closedbag receipt -> ambient stock/order handling -> dispatch -> final business acceptance |
| market_state | Physical wholesale add-on;preparedcoal/water/originalbags nonexchange merchandise stock |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed original-closed-bag cleaned-washed-sized anthracite own-account wholesale consignment service |
| How much | 1 Item(s),one unique FINAL accepted commercial consignment,not bag/kg/coalenergy/price |
| How well | Actual rank-grade-size/prep/closedbaglot/netcoal-water-tare/qualitybases/condition finalbuyergate |
| How long or cycle | Actual receipt/storage/returns/dispatch/acceptance source timestamps/timezones/cutoffs and all asset phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed original-closed-bag cleaned-washed-sized anthracite own-account wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | merchant_ownership_resale; final_business_buyer_gate; anthracite_rank_grade_size; supplier_clean_wash_size_state; original_closed_bag_lot; asreceived_coal_netmass_bagtare; water_sample_definition; ash_analysis_calorific_bases; period_timezone_condition; source_gate_coverage_integration; provider_asset_freight_scope; receiver_fates |

N requires actual merchant ownership/resale,business buyer and final gate after reversal;receipt alone insufficient. Unfinished/failed resources retain period/cohort;N=0 no division.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference1 Item(s) is one completed commercial service,bag/coal mass or energy does not multiply N. |
| coal_mass | nonexchange merchandise | Count; Mass | actual native count; kg | Net asreceived coal mass=sum unique actual packed coal(gross-bag/outerpack/support tare),using sourced native EACH count once or TOTAL unchanged. Reconcile actual bag/parent counts without adding parent+child views. Bag label weight is not measured actual batch net mass;asreceived coal includes actual water and mineral/ash-bearing material,not pure carbon. |
| water_quality | actual coal and fates | Mass; mass fraction; Energy | kg; actual native fraction/calorific units | For matching actual same-sample definitions,first convert native percent to ratio. w_wet=water/asreceived,w_dry=water/matching dry nonwater;dry_nonwater=asreceived*(1-w_wet),w_wet=w_dry/(1+w_dry) only matching sample/state/definitions. LOD may include other volatiles and is not automatically water. Moisture change alone does not establish dry-coal loss. Keep asreceived/dry/dry-ash-free,ash/volatile and NCV/GCV measurement definitions distinct;any basis conversion needs actual compatible same-sample water/ash data and independent native factors/source,never an assumed rank value. Elemental carbon is not proximate fixed carbon;no substitution or carbon-to-CO2 default. Calorific data qualify commodity,not service consumed fuel. |
| actual_configuration | actual exchanges | actual native property | actual native unit | Verify each actual SKU/provider/asset/receiver/species-medium gate and native property/unit. Generic electricity Energy cannot use fuel-specific NCV/GCV factors or Count substitute. Coal composition/calorific data do not verify service identity. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-cleaned-washed-sized anthracite originalclosedbaglot/rank-size/asreceived-water/quality/pack state |
| starting_condition_role | Prepared coal/water/originalbags nonexchange stock/throughflow |
| product_classification_scope | 11011anthracite within110/61091;coordinate only110120172311312331337,not refineddiesel333/woodpellets39281 |
| recursive_input_rule | Complete actual disjoint provider/receiver gates,no recursive same wholesale sale/duplicate resource/asset/carrier |
| upstream_dataset_requirement | Link complete actual mined/prepared/cleaned-washed-sized anthracite,any supplier drying actually performed,release and original packing. Raw unprepared mine mixture alone is incomplete. Original assigned demand/loss including baseline-covered and additional uncovered quantities needs actual state conversion/stage-loss owner. Missing actual stages and additional demand must be ACTUALLY integrated outside service once with completed status/link/time/timezone/source/owner/native quantities/result before complete-chain use;pending linkage is insufficient. Actual service loss handling/receiver treatment remains inside once. |
| disclosure | All qualifiers;native rank-size/coal-water-tare/analysis/stock/fate;original/assigned/loss/baseline/additional allterminal source quantities/conversion/coverage-owner and actually completed missingstage/demand integration;full duties |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_service | actual declared trade duties | Ambient own-account wholesale is a physical service add-on;traded prepared anthracite/water/original bags are nonexchange stock and throughflow,not fuel/water/material consumed by service. Actual receipt/order/dispatch and premises duties are inside;customer burning or supplier preparation is outside. |  |
| finished_gate | actual declared trade duties | Link complete actual mined/prepared/cleaned-washed-sized anthracite,any supplier drying actually performed,release and original packing. Raw unprepared mine mixture alone is incomplete. Original assigned demand/loss including baseline-covered and additional uncovered quantities needs actual state conversion/stage-loss owner. Missing actual stages and additional demand must be ACTUALLY integrated outside service once with completed status/link/time/timezone/source/owner/native quantities/result before complete-chain use;pending linkage is insufficient. Actual service loss handling/receiver treatment remains inside once. |  |
| excluded_operations | actual declared trade duties | No merchant screening,washing,drying,rebagging,active climate conditioning,burning,energy generation or use is assumed. Briquettes,coke,wood pellets,refined diesel,bulk-open coal and retail/fee agency are excluded from this narrower original-closedbag route. Real additional operations require separate complete review. |  |
| state_fates | actual declared trade duties | Water/ash/volatile/analysis bases and actual bag condition qualify coal state. Moisture or LOD change is not dry-coal loss,named release or automatic disposal. Actual wholebag/loose useful/fines/contained mixtures/pack/free water/direct species paths are exclusive;retained contents nonadditive,actual receiver treatment once,no automatic credit. |  |
| resources | actual declared trade duties | Include actual complete provider/merchant resources and shared assets manufacture-maintenance-cleaning-replacement-EOL across all users/periods. Declare physical causal native attribution and carrier/empty/support coverage owners;complete supplied service replaces covered direct duties only. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| original_bagged_anthracite_trade | Original-closed-bag prepared anthracite stock trade | required | Actual originalclosedbagpreparedanthracite owned-resold finalB2Btrade | Receipt/order/dispatch batches,real housekeeping periods,stock/returns and shared infrastructure across periods | `accepted_service` |

No mining/washing/drying/bagging/burning node is activated here. Link each actual duty/event/cohort/period/stock and reject state to useful retained or actual receiver routes. Unresolved rejects cannot count accepted output. Conditional actual material/provider/species configurations expand from evidence,not unknown-as-zero.

### Process: Original-closed-bag prepared anthracite stock trade (`original_bagged_anthracite_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_power_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned actual native physical quantity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual meters/equipment periods and physical all-consumer drivers,no calorific-to-service-power conversion.

###### Actual liquid treated tap-water supply (`housekeeping_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual native physical quantity / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need supplied/retained/free-collected/direct water evidence with source identity;unknown stock moisture change is not wastewater.

###### Actual independently recorded synthetic detergent supply (`housekeeping_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native SKU/formulation/carrier stock quantity and provenance,no default cleaning chemicals or dose.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed original-closed-bag cleaned-washed-sized anthracite own-account wholesale consignment service (`accepted_service`)

One unique FINAL commercial consignment of supplier-cleaned,washed,sized ANTHRACITE in ORIGINAL CLOSED BAGS,owned/purchased/resold by merchant and accepted by a business buyer. Actual rank/grade/size,bag/lot state,asreceived net coal mass,water/ash/analysis bases,pack/tare,time and gate qualify service;bag/kg/fuel value is not N.

- Selected flow: Completed original-closed-bag cleaned-washed-sized anthracite own-account wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coal`

Range evidence need: Need source ownership/resale,buyer/final gate/reversals and actual prepared-rank/size/closedbag/native coal-water-tare records,no bagweight/moisture/ash/calorific default.

##### Waste flows

###### Discarded original bag containing prepared anthracite (`whole_bag_waste_atomic_case`)

Conditional on independently recorded actual Discarded original bag containing prepared anthracite. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_bag_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded original bag containing prepared anthracite
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_coal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coal`

Range evidence need: Need actual gross/net/tare/ascollected state and receiver/treatment plus original-gate coal-loss quantity,state conversion and prior coverage.

###### Actual separately collected paper packaging waste (`packing_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need material/native count/mass/tare/retained-coal-water and receiver/carrier/treatment/exclusion links,no collection credit.


###### Actual separately collected metal packaging waste (`packing_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need material/native count/mass/tare/retained-coal-water and receiver/carrier/treatment/exclusion links,no collection credit.


###### Actual separately collected plastic packaging waste (`packing_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need material/native count/mass/tare/retained-coal-water and receiver/carrier/treatment/exclusion links,no collection credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| final_N | actual declared trade duties | Source records verify ownership/resale,buyer and final acceptance after reversals. Unique final commercial N excludes unresolved rejects;failed/canceled/unfinished resources retain actual cohort/period duties,N=0 no division. No bag/kg/coal-energy/price to service conversion. |  |
| source_allterminal | actual declared trade duties | Use direct source trace OR original_gate_quantity*numerator_driver/positive complete source_all_exit_driver. Same compatible complete source cohort numerator/denominator with every accepted,closing/unsold/damaged-retained,useful-other,return and real whole/loose/mixed/liquid loss driver record,each native unit/basis/method/state/time/source/owner/source-link/exclusivity/numerator membership. No accepted-only denominator. Stage/loss baseline coverage owner and actual completed missing-stage/additional-demand integration outsideonce prevent repeated upstream. Prior closing becomes current opening carry at the same native quantity/state/source-gate burden owner,linked by prior_period_closing_link/current_period_opening_link;it is not a new purchase,repeated upstream demand or additional FINAL N. A linked carry is one cross-period transfer,not two terminal demands in the same source cohort. |  |
| supplies_life | actual declared trade duties | Supply S=opening+net_receipts-closing,NET material excludes container tare and retained closing/recoveries once. Gross input S with separate matched unused outward output OR consumed S-return input OMIT that output,no numeric S+return,double credit or unrelated inherited-content subtraction. Full asset burden uses compatible cohort driver/complete all-user lifetime driver,observed+sourced remainder/termination and uncertainty/update. |  |
| exclusive_physical | actual declared trade duties | Actual material/water/pack/carrier views retain original-source and receiver burden owners without extra physical outlets for retained content. Actual receiver treatment once,no avoided production by collection. Each unique freight load-leg actual causal share belongs INSIDE its summand,N once. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coal | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | merchant_id;ownership_purchase_resale_evidence;business_buyer_id;acceptance_gate;acceptance_gate_source;final_acceptance_record_id;reversal_record_ids;unfinished_event_ids;supplier_id;source_lot;rank_grade_identity;rank_grade_source;clean_wash_size_evidence;actual_supplier_drying_evidence;size_definition;size_analysis_source;original_closed_bag_state;bag_id;parent_package_id;count_extent_EACH_or_TOTAL;count_extent_source;condition_source;receipt_timestamp;storage_start;storage_end;dispatch_timestamp;acceptance_timestamp;timestamp_timezone;time_source;sample_id;sample_time;sample_state;moisture_definition;moisture_method;moisture_source;water_species_method_scope;matching_nonwater_definition;ash_definition;ash_analysis_source;ash_sample_link;volatile_definition;volatile_source;elemental_carbon_definition;elemental_analysis_source;proximate_fixed_carbon_definition;proximate_analysis_source;calorific_kind_NCV_or_GCV;calorific_basis;calorific_source;calorific_sample_link;source_gate_dataset_id;source_gate_reference;source_gate_state;baseline_stage_coverage;baseline_loss_coverage;missing_actual_stage_records;loss_owner;already_included_coverage;source_all_exit_driver_records;prior_period_closing_link;current_period_opening_link;terminal_exit_id;terminal_exit_kind;terminal_source_link;driver_owner;driver_exclusivity_key;numerator_record_links;direct_assignment_evidence;allocation_method;allocation_source;source_state_conversion_evidence;integration_status;integration_link;integration_timestamp;integration_timezone;integration_source;integration_owner;completed_integration_result;receiver_id;receiver_decision;treatment_scope;transfer_id;stream_exclusion_ids;opening_carried_quantity;opening_carried_quantity_unit;opening_carried_quantity_basis;opening_carried_quantity_method;opening_carried_quantity_state;opening_carried_quantity_sample_time;opening_carried_quantity_source;opening_carried_quantity_conversion_factor;opening_carried_quantity_conversion_unit;opening_carried_quantity_conversion_source;bag_count;bag_count_unit;bag_count_basis;bag_count_method;bag_count_state;bag_count_sample_time;bag_count_source;bag_count_conversion_factor;bag_count_conversion_unit;bag_count_conversion_source;bags_per_parent;bags_per_parent_unit;bags_per_parent_basis;bags_per_parent_method;bags_per_parent_state;bags_per_parent_sample_time;bags_per_parent_source;bags_per_parent_conversion_factor;bags_per_parent_conversion_unit;bags_per_parent_conversion_source;repeat_count;repeat_count_unit;repeat_count_basis;repeat_count_method;repeat_count_state;repeat_count_sample_time;repeat_count_source;repeat_count_conversion_factor;repeat_count_conversion_unit;repeat_count_conversion_source;packed_gross_mass;packed_gross_mass_unit;packed_gross_mass_basis;packed_gross_mass_method;packed_gross_mass_state;packed_gross_mass_sample_time;packed_gross_mass_source;packed_gross_mass_conversion_factor;packed_gross_mass_conversion_unit;packed_gross_mass_conversion_source;bag_pack_tare;bag_pack_tare_unit;bag_pack_tare_basis;bag_pack_tare_method;bag_pack_tare_state;bag_pack_tare_sample_time;bag_pack_tare_source;bag_pack_tare_conversion_factor;bag_pack_tare_conversion_unit;bag_pack_tare_conversion_source;net_asreceived_coal_mass;net_asreceived_coal_mass_unit;net_asreceived_coal_mass_basis;net_asreceived_coal_mass_method;net_asreceived_coal_mass_state;net_asreceived_coal_mass_sample_time;net_asreceived_coal_mass_source;net_asreceived_coal_mass_conversion_factor;net_asreceived_coal_mass_conversion_unit;net_asreceived_coal_mass_conversion_source;water_mass;water_mass_unit;water_mass_basis;water_mass_method;water_mass_state;water_mass_sample_time;water_mass_source;water_mass_conversion_factor;water_mass_conversion_unit;water_mass_conversion_source;wet_basis_water_fraction;wet_basis_water_fraction_unit;wet_basis_water_fraction_basis;wet_basis_water_fraction_method;wet_basis_water_fraction_state;wet_basis_water_fraction_sample_time;wet_basis_water_fraction_source;wet_basis_water_fraction_conversion_factor;wet_basis_water_fraction_conversion_unit;wet_basis_water_fraction_conversion_source;dry_basis_water_ratio;dry_basis_water_ratio_unit;dry_basis_water_ratio_basis;dry_basis_water_ratio_method;dry_basis_water_ratio_state;dry_basis_water_ratio_sample_time;dry_basis_water_ratio_source;dry_basis_water_ratio_conversion_factor;dry_basis_water_ratio_conversion_unit;dry_basis_water_ratio_conversion_source;dry_nonwater_mass;dry_nonwater_mass_unit;dry_nonwater_mass_basis;dry_nonwater_mass_method;dry_nonwater_mass_state;dry_nonwater_mass_sample_time;dry_nonwater_mass_source;dry_nonwater_mass_conversion_factor;dry_nonwater_mass_conversion_unit;dry_nonwater_mass_conversion_source;ash_mass;ash_mass_unit;ash_mass_basis;ash_mass_method;ash_mass_state;ash_mass_sample_time;ash_mass_source;ash_mass_conversion_factor;ash_mass_conversion_unit;ash_mass_conversion_source;ash_fraction;ash_fraction_unit;ash_fraction_basis;ash_fraction_method;ash_fraction_state;ash_fraction_sample_time;ash_fraction_source;ash_fraction_conversion_factor;ash_fraction_conversion_unit;ash_fraction_conversion_source;volatile_fraction;volatile_fraction_unit;volatile_fraction_basis;volatile_fraction_method;volatile_fraction_state;volatile_fraction_sample_time;volatile_fraction_source;volatile_fraction_conversion_factor;volatile_fraction_conversion_unit;volatile_fraction_conversion_source;elemental_carbon_fraction;elemental_carbon_fraction_unit;elemental_carbon_fraction_basis;elemental_carbon_fraction_method;elemental_carbon_fraction_state;elemental_carbon_fraction_sample_time;elemental_carbon_fraction_source;elemental_carbon_fraction_conversion_factor;elemental_carbon_fraction_conversion_unit;elemental_carbon_fraction_conversion_source;proximate_fixed_carbon_fraction;proximate_fixed_carbon_fraction_unit;proximate_fixed_carbon_fraction_basis;proximate_fixed_carbon_fraction_method;proximate_fixed_carbon_fraction_state;proximate_fixed_carbon_fraction_sample_time;proximate_fixed_carbon_fraction_source;proximate_fixed_carbon_fraction_conversion_factor;proximate_fixed_carbon_fraction_conversion_unit;proximate_fixed_carbon_fraction_conversion_source;calorific_value;calorific_value_unit;calorific_value_basis;calorific_value_method;calorific_value_state;calorific_value_sample_time;calorific_value_source;calorific_value_conversion_factor;calorific_value_conversion_unit;calorific_value_conversion_source;original_gate_quantity;original_gate_quantity_unit;original_gate_quantity_basis;original_gate_quantity_method;original_gate_quantity_state;original_gate_quantity_sample_time;original_gate_quantity_source;original_gate_quantity_conversion_factor;original_gate_quantity_conversion_unit;original_gate_quantity_conversion_source;assigned_source_quantity;assigned_source_quantity_unit;assigned_source_quantity_basis;assigned_source_quantity_method;assigned_source_quantity_state;assigned_source_quantity_sample_time;assigned_source_quantity_source;assigned_source_quantity_conversion_factor;assigned_source_quantity_conversion_unit;assigned_source_quantity_conversion_source;source_loss_quantity;source_loss_quantity_unit;source_loss_quantity_basis;source_loss_quantity_method;source_loss_quantity_state;source_loss_quantity_sample_time;source_loss_quantity_source;source_loss_quantity_conversion_factor;source_loss_quantity_conversion_unit;source_loss_quantity_conversion_source;baseline_covered_source_quantity;baseline_covered_source_quantity_unit;baseline_covered_source_quantity_basis;baseline_covered_source_quantity_method;baseline_covered_source_quantity_state;baseline_covered_source_quantity_sample_time;baseline_covered_source_quantity_source;baseline_covered_source_quantity_conversion_factor;baseline_covered_source_quantity_conversion_unit;baseline_covered_source_quantity_conversion_source;additional_uncovered_source_quantity;additional_uncovered_source_quantity_unit;additional_uncovered_source_quantity_basis;additional_uncovered_source_quantity_method;additional_uncovered_source_quantity_state;additional_uncovered_source_quantity_sample_time;additional_uncovered_source_quantity_source;additional_uncovered_source_quantity_conversion_factor;additional_uncovered_source_quantity_conversion_unit;additional_uncovered_source_quantity_conversion_source;missing_stage_quantity;missing_stage_quantity_unit;missing_stage_quantity_basis;missing_stage_quantity_method;missing_stage_quantity_state;missing_stage_quantity_sample_time;missing_stage_quantity_source;missing_stage_quantity_conversion_factor;missing_stage_quantity_conversion_unit;missing_stage_quantity_conversion_source;integrated_source_quantity;integrated_source_quantity_unit;integrated_source_quantity_basis;integrated_source_quantity_method;integrated_source_quantity_state;integrated_source_quantity_sample_time;integrated_source_quantity_source;integrated_source_quantity_conversion_factor;integrated_source_quantity_conversion_unit;integrated_source_quantity_conversion_source;numerator_driver;numerator_driver_unit;numerator_driver_basis;numerator_driver_method;numerator_driver_state;numerator_driver_sample_time;numerator_driver_source;numerator_driver_conversion_factor;numerator_driver_conversion_unit;numerator_driver_conversion_source;source_all_exit_driver;source_all_exit_driver_unit;source_all_exit_driver_basis;source_all_exit_driver_method;source_all_exit_driver_state;source_all_exit_driver_sample_time;source_all_exit_driver_source;source_all_exit_driver_conversion_factor;source_all_exit_driver_conversion_unit;source_all_exit_driver_conversion_source;driver_quantity;driver_quantity_unit;driver_quantity_basis;driver_quantity_method;driver_quantity_state;driver_quantity_sample_time;driver_quantity_source;driver_quantity_conversion_factor;driver_quantity_conversion_unit;driver_quantity_conversion_source;accepted_quantity;accepted_quantity_unit;accepted_quantity_basis;accepted_quantity_method;accepted_quantity_state;accepted_quantity_sample_time;accepted_quantity_source;accepted_quantity_conversion_factor;accepted_quantity_conversion_unit;accepted_quantity_conversion_source;return_quantity;return_quantity_unit;return_quantity_basis;return_quantity_method;return_quantity_state;return_quantity_sample_time;return_quantity_source;return_quantity_conversion_factor;return_quantity_conversion_unit;return_quantity_conversion_source;closing_quantity;closing_quantity_unit;closing_quantity_basis;closing_quantity_method;closing_quantity_state;closing_quantity_sample_time;closing_quantity_source;closing_quantity_conversion_factor;closing_quantity_conversion_unit;closing_quantity_conversion_source;useful_other_exit_quantity;useful_other_exit_quantity_unit;useful_other_exit_quantity_basis;useful_other_exit_quantity_method;useful_other_exit_quantity_state;useful_other_exit_quantity_sample_time;useful_other_exit_quantity_source;useful_other_exit_quantity_conversion_factor;useful_other_exit_quantity_conversion_unit;useful_other_exit_quantity_conversion_source;whole_loss_quantity;whole_loss_quantity_unit;whole_loss_quantity_basis;whole_loss_quantity_method;whole_loss_quantity_state;whole_loss_quantity_sample_time;whole_loss_quantity_source;whole_loss_quantity_conversion_factor;whole_loss_quantity_conversion_unit;whole_loss_quantity_conversion_source;loose_loss_quantity;loose_loss_quantity_unit;loose_loss_quantity_basis;loose_loss_quantity_method;loose_loss_quantity_state;loose_loss_quantity_sample_time;loose_loss_quantity_source;loose_loss_quantity_conversion_factor;loose_loss_quantity_conversion_unit;loose_loss_quantity_conversion_source;mixed_loss_quantity;mixed_loss_quantity_unit;mixed_loss_quantity_basis;mixed_loss_quantity_method;mixed_loss_quantity_state;mixed_loss_quantity_sample_time;mixed_loss_quantity_source;mixed_loss_quantity_conversion_factor;mixed_loss_quantity_conversion_unit;mixed_loss_quantity_conversion_source;liquid_loss_quantity;liquid_loss_quantity_unit;liquid_loss_quantity_basis;liquid_loss_quantity_method;liquid_loss_quantity_state;liquid_loss_quantity_sample_time;liquid_loss_quantity_source;liquid_loss_quantity_conversion_factor;liquid_loss_quantity_conversion_unit;liquid_loss_quantity_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Verify merchant ownership/purchase/resale,business buyer and unique FINAL acceptance after reversal links;N is commercial consignment Count,not receipts/bags/kg/fuel energy. Failed/unfinished/canceled/reversed duties keep physical resources/period/cohort;N=0 no division. Record actual prepared anthracite rank/grade/size,original closedbag lot/netasreceivedcoal versus packtare and representative same-sample quality bases. No merchant assay/washing/drying/bagging prescribed. Link complete actual mine/preparation/wash/size/any actually performed supplier drying/release/originalpack source. Direct assignment OR positive complete compatible all-terminal source driver records include accepted,closing/unsold/damaged-retained,useful-other,returns and real whole/loose/mixed/liquid losses,each native metadata/owner/source-link/exclusivity/numerator membership. Original/assigned/loss/baseline-covered/additional quantities and missing actual stages must be converted to original-gate state with evidence,coverage and owner. Before complete-chain use actual missing stages/additional demand must be integrated outside service once with COMPLETED status,link,time/timezone/source/owner/native integrated quantities and result,not merely pending. Real service loss handling/treatment inside once. Prior closing becomes current opening carry at the same native quantity/state/source-gate burden owner,linked by prior_period_closing_link/current_period_opening_link;it is not a new purchase,repeated upstream demand or additional FINAL N. A linked carry is one cross-period transfer,not two terminal demands in the same source cohort.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual bag/coal/water/analysis/time units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_power | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | meter_id;equipment_id;period_start;period_end;timezone;all_consumers;calibration_source;provider_coverage;coverage_owner;meter_opening;meter_opening_unit;meter_opening_basis;meter_opening_method;meter_opening_state;meter_opening_sample_time;meter_opening_source;meter_opening_conversion_factor;meter_opening_conversion_unit;meter_opening_conversion_source;meter_closing;meter_closing_unit;meter_closing_basis;meter_closing_method;meter_closing_state;meter_closing_sample_time;meter_closing_source;meter_closing_conversion_factor;meter_closing_conversion_unit;meter_closing_conversion_source;electricity;electricity_unit;electricity_basis;electricity_method;electricity_state;electricity_sample_time;electricity_source;electricity_conversion_factor;electricity_conversion_unit;electricity_conversion_source;power;power_unit;power_basis;power_method;power_state;power_sample_time;power_source;power_conversion_factor;power_conversion_unit;power_conversion_source;duration;duration_unit;duration_basis;duration_method;duration_state;duration_sample_time;duration_source;duration_conversion_factor;duration_conversion_unit;duration_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use real meter changes or sourced power-duration with native conversions and all-consumer physical drivers,idle/housekeeping included. Actual complete provider electricity scope replaces covered direct duty only. Fuel merchandise energy does not enter this meter ledger. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_water | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | water_source_identity;composition;composition_method;composition_source;receiver_id;collection_id;transfer_id;treatment_scope;stream_exclusion_ids;supplied_volume;supplied_volume_unit;supplied_volume_basis;supplied_volume_method;supplied_volume_state;supplied_volume_sample_time;supplied_volume_source;supplied_volume_conversion_factor;supplied_volume_conversion_unit;supplied_volume_conversion_source;retained_fluid;retained_fluid_unit;retained_fluid_basis;retained_fluid_method;retained_fluid_state;retained_fluid_sample_time;retained_fluid_source;retained_fluid_conversion_factor;retained_fluid_conversion_unit;retained_fluid_conversion_source;free_liquid_volume;free_liquid_volume_unit;free_liquid_volume_basis;free_liquid_volume_method;free_liquid_volume_state;free_liquid_volume_sample_time;free_liquid_volume_source;free_liquid_volume_conversion_factor;free_liquid_volume_conversion_unit;free_liquid_volume_conversion_source;free_liquid_mass;free_liquid_mass_unit;free_liquid_mass_basis;free_liquid_mass_method;free_liquid_mass_state;free_liquid_mass_sample_time;free_liquid_mass_source;free_liquid_mass_conversion_factor;free_liquid_mass_conversion_unit;free_liquid_mass_conversion_source;direct_water;direct_water_unit;direct_water_basis;direct_water_method;direct_water_state;direct_water_sample_time;direct_water_source;direct_water_conversion_factor;direct_water_conversion_unit;direct_water_conversion_source;density;density_unit;density_basis;density_method;density_state;density_sample_time;density_source;density_conversion_factor;density_conversion_unit;density_conversion_source;temperature;temperature_unit;temperature_basis;temperature_method;temperature_state;temperature_sample_time;temperature_source;temperature_conversion_factor;temperature_conversion_unit;temperature_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual supplied water and distinct retained/free-collected/direct paths,each native quantity/basis/state/source. Volume-mass conversion requires matching composition,density and temperature units/sources. Inherited coal moisture is not new service supply;retained fluid is nonadditive carrier content. Require actual receiver or direct-water evidence,never evaporation from residual. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual density/temperature/composition units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_supplies | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | supply_sku;formulation;carrier_identity;composition_basis;composition_method;composition_source;stock_convention;same_scope_supply_match;return_id;receiver_id;opening;opening_unit;opening_basis;opening_method;opening_state;opening_sample_time;opening_source;opening_conversion_factor;opening_conversion_unit;opening_conversion_source;receipt_gross;receipt_gross_unit;receipt_gross_basis;receipt_gross_method;receipt_gross_state;receipt_gross_sample_time;receipt_gross_source;receipt_gross_conversion_factor;receipt_gross_conversion_unit;receipt_gross_conversion_source;receipt_container_tare;receipt_container_tare_unit;receipt_container_tare_basis;receipt_container_tare_method;receipt_container_tare_state;receipt_container_tare_sample_time;receipt_container_tare_source;receipt_container_tare_conversion_factor;receipt_container_tare_conversion_unit;receipt_container_tare_conversion_source;net_receipts;net_receipts_unit;net_receipts_basis;net_receipts_method;net_receipts_state;net_receipts_sample_time;net_receipts_source;net_receipts_conversion_factor;net_receipts_conversion_unit;net_receipts_conversion_source;closing;closing_unit;closing_basis;closing_method;closing_state;closing_sample_time;closing_source;closing_conversion_factor;closing_conversion_unit;closing_conversion_source;unused_out;unused_out_unit;unused_out_basis;unused_out_method;unused_out_state;unused_out_sample_time;unused_out_source;unused_out_conversion_factor;unused_out_conversion_unit;unused_out_conversion_source;used;used_unit;used_basis;used_method;used_state;used_sample_time;used_source;used_conversion_factor;used_conversion_unit;used_conversion_source;density;density_unit;density_basis;density_method;density_state;density_sample_time;density_source;density_conversion_factor;density_conversion_unit;density_conversion_source;temperature;temperature_unit;temperature_basis;temperature_method;temperature_state;temperature_sample_time;temperature_source;temperature_conversion_factor;temperature_conversion_unit;temperature_conversion_source;unit_mass;unit_mass_unit;unit_mass_basis;unit_mass_method;unit_mass_state;unit_mass_sample_time;unit_mass_source;unit_mass_conversion_factor;unit_mass_conversion_unit;unit_mass_conversion_source;unit_length;unit_length_unit;unit_length_basis;unit_length_method;unit_length_state;unit_length_sample_time;unit_length_source;unit_length_conversion_factor;unit_length_conversion_unit;unit_length_conversion_source;unit_area;unit_area_unit;unit_area_basis;unit_area_method;unit_area_state;unit_area_sample_time;unit_area_source;unit_area_conversion_factor;unit_area_conversion_unit;unit_area_conversion_source;component_fraction;component_fraction_unit;component_fraction_basis;component_fraction_method;component_fraction_state;component_fraction_sample_time;component_fraction_source;component_fraction_conversion_factor;component_fraction_conversion_unit;component_fraction_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | S=opening+net_receipts-closing,real recoveries and retained closing once. NET receipts are material content excluding container tare. Gross input S with separate same-scope matched unused outward output OR consumed S-return input OMIT output;never numeric S+return or duplicate credit. Only matched standalone supplies net,not inherited coal/bag/water or asset contents. Waste-producing consumption retains full supply production burden. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply/fraction/density/temperature units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_provider | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | provider_id;job_id;completion_evidence;scope_start;scope_end;electricity_coverage;asset_life_coverage;transport_empty_coverage;receiver_treatment_coverage;coverage_owner;exclusion_links;native_job_quantity;native_job_quantity_unit;native_job_quantity_basis;native_job_quantity_method;native_job_quantity_state;native_job_quantity_sample_time;native_job_quantity_source;native_job_quantity_conversion_factor;native_job_quantity_conversion_unit;native_job_quantity_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | Confirm actual completed physical job and native property/unit,all resource/assetlife/carrier-empty/receiver gates. Complete provided service replaces only covered direct duties;uncovered duties retain actual rows. No money,bag or heating-energy conversion. | Item(s); actual provider native units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_assets | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | asset_id;asset_bom_scope;manufacture_coverage;maintenance_cleaning_records;replacement_records;eol_scope;all_users_periods;remaining_use_evidence;termination_evidence;uncertainty;sensitivity;update_source;provider_coverage;full_life_burden;full_life_burden_unit;full_life_burden_basis;full_life_burden_method;full_life_burden_state;full_life_burden_sample_time;full_life_burden_source;full_life_burden_conversion_factor;full_life_burden_conversion_unit;full_life_burden_conversion_source;asset_equivalent;asset_equivalent_unit;asset_equivalent_basis;asset_equivalent_method;asset_equivalent_state;asset_equivalent_sample_time;asset_equivalent_source;asset_equivalent_conversion_factor;asset_equivalent_conversion_unit;asset_equivalent_conversion_source;cohort_used_driver;cohort_used_driver_unit;cohort_used_driver_basis;cohort_used_driver_method;cohort_used_driver_state;cohort_used_driver_sample_time;cohort_used_driver_source;cohort_used_driver_conversion_factor;cohort_used_driver_conversion_unit;cohort_used_driver_conversion_source;all_user_used_driver;all_user_used_driver_unit;all_user_used_driver_basis;all_user_used_driver_method;all_user_used_driver_state;all_user_used_driver_sample_time;all_user_used_driver_source;all_user_used_driver_conversion_factor;all_user_used_driver_conversion_unit;all_user_used_driver_conversion_source;observed_history_driver;observed_history_driver_unit;observed_history_driver_basis;observed_history_driver_method;observed_history_driver_state;observed_history_driver_sample_time;observed_history_driver_source;observed_history_driver_conversion_factor;observed_history_driver_conversion_unit;observed_history_driver_conversion_source;remaining_driver;remaining_driver_unit;remaining_driver_basis;remaining_driver_method;remaining_driver_state;remaining_driver_sample_time;remaining_driver_source;remaining_driver_conversion_factor;remaining_driver_conversion_unit;remaining_driver_conversion_source;complete_lifetime_driver;complete_lifetime_driver_unit;complete_lifetime_driver_basis;complete_lifetime_driver_method;complete_lifetime_driver_state;complete_lifetime_driver_sample_time;complete_lifetime_driver_source;complete_lifetime_driver_conversion_factor;complete_lifetime_driver_conversion_unit;complete_lifetime_driver_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | Collect actual native asset/job equivalents and compatible used/all-user/observed-history/remaining/lifetime drivers,each own unit/basis/method/state/time/source/conversion. Full life denominator=observed history+sourced compatible remainder OR evidenced termination,total all users/periods. Attribute full manufacture/maintenance-cleaning/replacements/EOL with uncertainty/sensitivity/update,not accepted-only period. One burden owner for provider-covered equipment and reusable supports;traded coal excluded as asset. | Item(s); actual compatible driver equivalents | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_freight | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | load_id;leg_id;unique_load_leg_key;load_extent_EACH_or_TOTAL;carrier_id;actual_cargo_pack_support;tare_exclusion_evidence;empty_return_coverage;provider_coverage;repeat_count;repeat_count_unit;repeat_count_basis;repeat_count_method;repeat_count_state;repeat_count_sample_time;repeat_count_source;repeat_count_conversion_factor;repeat_count_conversion_unit;repeat_count_conversion_source;gross_load;gross_load_unit;gross_load_basis;gross_load_method;gross_load_state;gross_load_sample_time;gross_load_source;gross_load_conversion_factor;gross_load_conversion_unit;gross_load_conversion_source;noncargo_tare;noncargo_tare_unit;noncargo_tare_basis;noncargo_tare_method;noncargo_tare_state;noncargo_tare_sample_time;noncargo_tare_source;noncargo_tare_conversion_factor;noncargo_tare_conversion_unit;noncargo_tare_conversion_source;direct_payload;direct_payload_unit;direct_payload_basis;direct_payload_method;direct_payload_state;direct_payload_sample_time;direct_payload_source;direct_payload_conversion_factor;direct_payload_conversion_unit;direct_payload_conversion_source;distance;distance_unit;distance_basis;distance_method;distance_state;distance_sample_time;distance_source;distance_conversion_factor;distance_conversion_unit;distance_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | Record independent native gross/noncargo-tare/direct-payload,distance and sourced repeats with units/bases/method/state/time/source/conversions. Retain as-carried coal/water/bags/pack/cargo support. EACH repeats once,TOTAL unchanged;unique load-leg THAT physical share from compatible cohort/all-user drivers inside each summand,total divided by positive N once. Provider and empty-leg coverage exclusive;drycoal/carbon/energy cannot substitute actual payload. | kg*km; actual native mass/distance/count units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_fates | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | parent_bag_id;material_identity;source_lot_link;composition_basis;composition_method;composition_source;source_gate_link;state_change_conversion_evidence;receiver_id;receiver_classification;decision_source;treatment_scope;carrier_id;transfer_id;content_transfer_link;stream_exclusion_ids;sample_id;sample_time;sample_state;moisture_definition;moisture_method;moisture_source;water_species_method_scope;matching_nonwater_definition;gross_waste;gross_waste_unit;gross_waste_basis;gross_waste_method;gross_waste_state;gross_waste_sample_time;gross_waste_source;gross_waste_conversion_factor;gross_waste_conversion_unit;gross_waste_conversion_source;tare;tare_unit;tare_basis;tare_method;tare_state;tare_sample_time;tare_source;tare_conversion_factor;tare_conversion_unit;tare_conversion_source;net_material;net_material_unit;net_material_basis;net_material_method;net_material_state;net_material_sample_time;net_material_source;net_material_conversion_factor;net_material_conversion_unit;net_material_conversion_source;coal_fraction;coal_fraction_unit;coal_fraction_basis;coal_fraction_method;coal_fraction_state;coal_fraction_sample_time;coal_fraction_source;coal_fraction_conversion_factor;coal_fraction_conversion_unit;coal_fraction_conversion_source;dry_cleanup_carrier;dry_cleanup_carrier_unit;dry_cleanup_carrier_basis;dry_cleanup_carrier_method;dry_cleanup_carrier_state;dry_cleanup_carrier_sample_time;dry_cleanup_carrier_source;dry_cleanup_carrier_conversion_factor;dry_cleanup_carrier_conversion_unit;dry_cleanup_carrier_conversion_source;retained_fluid;retained_fluid_unit;retained_fluid_basis;retained_fluid_method;retained_fluid_state;retained_fluid_sample_time;retained_fluid_source;retained_fluid_conversion_factor;retained_fluid_conversion_unit;retained_fluid_conversion_source;retained_coal;retained_coal_unit;retained_coal_basis;retained_coal_method;retained_coal_state;retained_coal_sample_time;retained_coal_source;retained_coal_conversion_factor;retained_coal_conversion_unit;retained_coal_conversion_source;retained_pack;retained_pack_unit;retained_pack_basis;retained_pack_method;retained_pack_state;retained_pack_sample_time;retained_pack_source;retained_pack_conversion_factor;retained_pack_conversion_unit;retained_pack_conversion_source;actual_source_coal_equivalent;actual_source_coal_equivalent_unit;actual_source_coal_equivalent_basis;actual_source_coal_equivalent_method;actual_source_coal_equivalent_state;actual_source_coal_equivalent_sample_time;actual_source_coal_equivalent_source;actual_source_coal_equivalent_conversion_factor;actual_source_coal_equivalent_conversion_unit;actual_source_coal_equivalent_conversion_source;actual_non_source_added_material;actual_non_source_added_material_unit;actual_non_source_added_material_basis;actual_non_source_added_material_method;actual_non_source_added_material_state;actual_non_source_added_material_sample_time;actual_non_source_added_material_source;actual_non_source_added_material_conversion_factor;actual_non_source_added_material_conversion_unit;actual_non_source_added_material_conversion_source;water_mass;water_mass_unit;water_mass_basis;water_mass_method;water_mass_state;water_mass_sample_time;water_mass_source;water_mass_conversion_factor;water_mass_conversion_unit;water_mass_conversion_source;wet_basis_water_fraction;wet_basis_water_fraction_unit;wet_basis_water_fraction_basis;wet_basis_water_fraction_method;wet_basis_water_fraction_state;wet_basis_water_fraction_sample_time;wet_basis_water_fraction_source;wet_basis_water_fraction_conversion_factor;wet_basis_water_fraction_conversion_unit;wet_basis_water_fraction_conversion_source;dry_basis_water_ratio;dry_basis_water_ratio_unit;dry_basis_water_ratio_basis;dry_basis_water_ratio_method;dry_basis_water_ratio_state;dry_basis_water_ratio_sample_time;dry_basis_water_ratio_source;dry_basis_water_ratio_conversion_factor;dry_basis_water_ratio_conversion_unit;dry_basis_water_ratio_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Each real wholebag/loose useful/nonusable/mixed/pack/free-liquid/direct transfer needs actual receiver decision and native quantity/unit/basis/method/state/sampletime/source/conversion. Retained coal/water/pack in whole or mixed Waste are audit contents,not extra outlets. Original prepared-coal equivalent requires matching original/ascollected water/ash/contaminant state,not wet residue kg as drycoal loss. Use actual same-sample water definitions and conversions,LOD not automatically water. Unknown discrepancy stays unknown,not emissions/disposal. Actual receiver treatment once,no automatic recovery credit or assumed burn. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native coal/water/mixture units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |
| cp_species | original_bagged_anthracite_trade | Actual duty/stock/quality/fate ledger | Source-linked native physical records | species_identity;receiving_medium;particle_size_basis;measurement_source;factor_source;factor_complete;composition_basis;composition_method;composition_source;fate_basis;fate_source;coverage_owner;contained_receiver_exclusion;species_mass;species_mass_unit;species_mass_basis;species_mass_method;species_mass_state;species_mass_sample_time;species_mass_source;species_mass_conversion_factor;species_mass_conversion_unit;species_mass_conversion_source;activity;activity_unit;activity_basis;activity_method;activity_state;activity_sample_time;activity_source;activity_conversion_factor;activity_conversion_unit;activity_conversion_source;factor;factor_unit;factor_basis;factor_method;factor_state;factor_sample_time;factor_conversion_factor;factor_conversion_unit;factor_conversion_source;component_fraction;component_fraction_unit;component_fraction_basis;component_fraction_method;component_fraction_state;component_fraction_sample_time;component_fraction_source;component_fraction_conversion_factor;component_fraction_conversion_unit;component_fraction_conversion_source;fate_fraction;fate_fraction_unit;fate_fraction_basis;fate_fraction_method;fate_fraction_state;fate_fraction_sample_time;fate_fraction_source;fate_fraction_conversion_factor;fate_fraction_conversion_unit;fate_fraction_conversion_source;cohort_driver;cohort_driver_unit;cohort_driver_basis;cohort_driver_method;cohort_driver_state;cohort_driver_sample_time;cohort_driver_source;cohort_driver_conversion_factor;cohort_driver_conversion_unit;cohort_driver_conversion_source;all_user_driver;all_user_driver_unit;all_user_driver_basis;all_user_driver_method;all_user_driver_state;all_user_driver_sample_time;all_user_driver_source;all_user_driver_conversion_factor;all_user_driver_conversion_unit;all_user_driver_conversion_source;attribution_share;attribution_share_unit;attribution_share_basis;attribution_share_method;attribution_share_state;attribution_share_sample_time;attribution_share_source;attribution_share_conversion_factor;attribution_share_conversion_unit;attribution_share_conversion_source | Require exact actual species/medium/particle-size measurement or compatible evidenced activity-factor chemistry,each operand native metadata and coverage. Captured dust is contained carrier material. Complete factor already covering composition/fate fraction must not multiply it again. Coal marketing,carbon/fixedcarbon,moisture or LOD deficit is not zero emissions or identified release;no default combustion. | kg; actual compatible activity/fraction units | Each actual event and matching sample/period | Complete source/duty/cohort cutoffs and life phases | Actual merchant duties and all shared consumers | per reference flow | Each native quantity/unit/basis/method/state/sampletime/source/conversion/calibration/uncertainty/coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all exchanges | Per reference inventory=assigned actual native physical quantity/positive N,unique source-verified FINAL owned-resold B2B acceptance after reversals. At N=0 retain actual duty/cohort/period and report no normalized value,not zero burden. | native quantities;final gate and reversal records | native quantity per1 Item(s) service |  |
| bag_netmass | nonexchange merchandise | Net asreceived coal mass=sum unique actual packed coal(gross-bag/outerpack/support tare),using sourced native EACH count once or TOTAL unchanged. Reconcile actual bag/parent counts without adding parent+child views. Bag label weight is not measured actual batch net mass;asreceived coal includes actual water and mineral/ash-bearing material,not pure carbon. | cp_coal;native count/gross/tare records | unique actual coal/water versus packing audit |  |
| water_analysis_basis | actual coal and fates | For matching actual same-sample definitions,first convert native percent to ratio. w_wet=water/asreceived,w_dry=water/matching dry nonwater;dry_nonwater=asreceived*(1-w_wet),w_wet=w_dry/(1+w_dry) only matching sample/state/definitions. LOD may include other volatiles and is not automatically water. Moisture change alone does not establish dry-coal loss. Keep asreceived/dry/dry-ash-free,ash/volatile and NCV/GCV measurement definitions distinct;any basis conversion needs actual compatible same-sample water/ash data and independent native factors/source,never an assumed rank value. Elemental carbon is not proximate fixed carbon;no substitution or carbon-to-CO2 default. Calorific data qualify commodity,not service consumed fuel. | cp_coal;cp_fates;same-sample water/ash/analysis basis evidence | compatible native coal quality/state audit |  |
| source_demand | commodity outside service | Direct trace OR assigned_source=original_gate_quantity*numerator_driver/positive complete source_all_exit_driver. Record every compatible exclusive terminal driver including closing/unsold/damaged retained,useful-other,returns and actual whole/loose/mixed/liquid losses,each native metadata/owner/original-link/numerator membership. No accepted-only denominator. Convert original/assigned/loss/baseline/additional demand to matched finished source state with actual water/ash/contamination evidence. Actual missing-stage/additional demand integration outsideonce requires COMPLETED status,link,time/timezone/source/owner/native integrated quantities/results before whole-chain completion;actual service handling/treatment insideonce. Prior closing becomes current opening carry at the same native quantity/state/source-gate burden owner,linked by prior_period_closing_link/current_period_opening_link;it is not a new purchase,repeated upstream demand or additional FINAL N. A linked carry is one cross-period transfer,not two terminal demands in the same source cohort. | cp_coal;actual complete source/coverage/conversion/integration records | completed external source demand/loss/stage integration |  |
| physical_closure | actual stock and fates | Audit source coal/water/packing to retained accepted/returned/closing,retained wholebagWaste/mixedWaste/packWaste,independent useful/nonusable/free-liquid/direct species and explicit unknown. Each native quantity unit/basis/method/state/time/source/conversion required;retained contents nonadditive to physical carriers. Captured fines are not airborne by default,water/ash/contaminant state changes not original dry-coal loss. Unknowns block closure,not inferred emissions or disposal. | cp_coal;cp_fates;cp_water;cp_species;linked carriers | exclusive source-content/receiver closure |  |
| supplies_assets | independent supplies and assets | S=opening+net_receipts-closing,NET material excludes receipt container tare,actual retained closing/recovery once. Gross S input with separately recorded matched unused output OR consumed S-return input OMIT output. Asset allocation=full_life_burden*compatible cohort_used_driver/complete_lifetime_driver;complete lifetime=observed_history_driver+sourced remaining_driver OR evidenced termination across all users/periods. Each native burden/equivalent/driver has unit/basis/method/state/time/source/conversion,positive compatible denominator,uncertainty/sensitivity/update. | cp_supplies;cp_assets;native stock and full-life records | assigned physical supplies and complete-life assets |  |
| freight_sum | packed_freight | Freight=sum unique load+leg[(converted actual direct payload OR converted gross-noncargo tare,retaining cargo coal-water/bags/pack/support)*(actual sourced repeat count only for EACH;TOTAL unchanged)*converted actual distance*THAT record physical causal share]/positive N. Each independent native operand has unit/basis/method/state/time/source/conversion. Share inside every summand,N once,parent-child/provider/empty-leg coverage exclusive;dry coal or heat content not cargo substitute. | cp_freight;unique native load-leg/driver evidence | actual kg*km per1 Item(s) service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| concrete_identity | all actual exchanges | Exact native identity/property/unit and provider/material/species medium gate verified before finaldata use;no rank/fuel-property substitute. | Actual full flow/support detail and foreground records |
| water_analysis | coal stock and fates | Actual representative same-sample water definitions/ash/volatile/calorific/elemental-versus-fixedcarbon native basis/method/source/time,state and packingtare;LOD/moisture change not drycoal loss or species. | Supplier/lab/sample/weigh/bag and receiver evidence,no prescribed merchant assay |
| completed_chain | linked source and service | Actual complete mineprepwashsize/supplierdryIFactual/releasepack source demand/loss/stage coverage and completed missingstage/additional integration outsideonce,full actual service duties insideonce. Unknown/pending integration precludes complete-chain claim. | Native allterminal state conversions/owner/coverage and completedstatus-link-time-source-nativequantity-result;meters/life/carrier/receiver |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_power | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `warehouse_power` under `cp_power`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_power`; actual source-linked native records |
| housekeeping_water | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| housekeeping_materials | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_materials` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| additional_shipping_material | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `additional_shipping_material` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| external_physical_jobs | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `external_physical_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_full_life_assets | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_full_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| packed_freight | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packed_freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| useful_loose_coal | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `useful_loose_coal` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| whole_bag_waste | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_bag_waste` under `cp_coal`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_bag_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_coal`; actual source-linked native records |
| nonusable_coal_material | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `nonusable_coal_material` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| packing_waste | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packing_waste` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| spent_housekeeping_solids | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_housekeeping_solids` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| free_water_waste | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_water_waste` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| direct_species | original_bagged_anthracite_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### warehouse_power

Actual merchant equipment,idle and housekeeping electricity. Traded coal is merchandise,not coal burned by this service;no supplier coal-preparation or customer heat duty is inferred.

Residual inventory requirement after the independently identified cases `warehouse_power_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse handling and lighting electricity
- Flow property / unit: Energy / kWh
- Amount rule: Assigned actual native physical quantity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual meters/equipment periods and physical all-consumer drivers,no calorific-to-service-power conversion.

#### housekeeping_water

Only actual warehouse/equipment duty. Supplier wash water retained in coal is inherited merchandise content,not a second merchant water input. No merchant washing or dust-suppression prescription.

Residual inventory requirement after the independently identified cases `housekeeping_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual premises-housekeeping water supply
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual native physical quantity / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need supplied/retained/free-collected/direct water evidence with source identity;unknown stock moisture change is not wastewater.

#### housekeeping_materials

Only actual cleaner,wipes,absorbents or filters used by service. Coal fines and original bag material are not new cleaning preparation inputs.

Residual inventory requirement after the independently identified cases `housekeeping_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual independent housekeeping materials
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native SKU/formulation/carrier stock quantity and provenance,no default cleaning chemicals or dose.

#### additional_shipping_material

Only real new wrap,straps,labels or protection. Original closed bags and inherited supplier packing production remain commodity scope;merchant reusable supports follow full-life assets. No opening/rebagging assumed.

- Identity requirement: Actual added outer dispatch materials
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native count/area/length/mass/material/tare and stock conversions;coal net mass excludes bag tare.

#### external_physical_jobs

Real provider loading/handling tasks with full scope. Coal mining,washing,drying,bagging,combustion or waste-treatment contracts cannot be hidden inside an unspecified handling Count.

- Identity requirement: Actual completed native external handling jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned actual native physical quantity / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need physical completion quantity/unit and resource/asset/carrier/receiver coverage,not price,bag count or fuel energy.

#### shared_full_life_assets

Actual facilities,handling/record equipment and reusable supports across all users/periods include manufacture,maintenance-cleaning,replacements and EOL. Coal is merchandise,not an asset or consumed process fuel.

- Identity requirement: Full-life warehouse,handling and reusable support assets
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned actual native physical quantity / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need compatible native equivalents and used/all-user/observed/remaining/lifetime drivers with evidence;no catalogue lifetime default.

#### packed_freight

Payload includes actual as-carried coal/water,bags,outer pack and cargo pallets/support. Deduct only real vehicle/noncargo tare;dry coal or carbon/energy basis is not actual cargo mass.

- Identity requirement: Actual packed coal,supply and waste freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Assigned actual native physical quantity / N; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need native unique load-leg,EACH/TOTAL count and gross/tare/payload/distance records;THAT-record share inside sum/N once.

#### unused_supply_return

Only actual same-scope unused cleaning/added-pack supplies under gross-input convention. Intact useful bagged-coal returns remain stock. Consumed-only input omits matched output,no automatic credit.

- Identity requirement: Actual matched unused independent supply outward return
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need same-SKU provenance,native quantity/unit/source/receiver and stock choice,no inherited coal-water return netted against operating supply.

#### useful_loose_coal

Only actual useful independently collected incident material with receiver evidence. Whole useful bags remain merchandise;fines retained in a bag or mixed carrier are nonadditive contents. No prescribed merchant screening or resale yield.

- Identity requirement: Actual independently transferred useful loose coal or fines
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual rank/composition/net mass/water-state/source equivalent and receiver/exclusion records,no ash/carbon/purecoal assumption.

#### whole_bag_waste

Only evidenced nonusable whole-bag exit. Declare coal,water and bag/pack retained in the one physical stream;moisture shift,broken bag or uncertain quality is not automatic whole discard.

- Identity requirement: Actual whole bagged-coal waste transfer
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_coal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coal`

Range evidence need: Need actual gross/net/tare/ascollected state and receiver/treatment plus original-gate coal-loss quantity,state conversion and prior coverage.

#### nonusable_coal_material

Only real separately transferred coal/fines/sludge or other contained incident material. Exclude retained wholebag/mixed/free-water contents;actual receiver classification and treatment once,not presumed combustion/recycling.

- Identity requirement: Actual independent nonusable coal or contained residue
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual native composition/water/contaminants/state-source conversion and receiver;wet residue kg is not dry coal loss.

#### packing_waste

Only actual physically separated packing exits. Coal/water retained on packing are content audits;packing retained in wholebag/mixed waste is not another outlet.

Residual inventory requirement after the independently identified cases `packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual independent discarded bags and outer packing
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need material/native count/mass/tare/retained-coal-water and receiver/carrier/treatment/exclusion links,no collection credit.

#### spent_housekeeping_solids

Actual wipes,absorbents,filters or captured cleanup mixtures with retained coal,fines,water and packing. Dry carrier/retained contents describe one gross physical stream;do not add independent outlets again.

- Identity requirement: Actual spent housekeeping carriers and captured mixtures
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need each carrier/coal/fluid/pack native quantity/unit/basis/method/state/sampletime/source,gross-tare closure and receiver.

#### free_water_waste

Actual free collected water/liquid only,with composition and receiver. Bagged-coal moisture and retained wet carriers are not extra liquid outputs;unknown water balance is not evaporation.

- Identity requirement: Actual independently collected free water or liquid
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual native physical quantity / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need actual volume/density/temperature/native units/sources and composition/receiver/exclusions,no supplier washwater factor.

#### direct_species

Only measured or supported compatible species/particle-medium releases. Captured coal dust is contained material,not automatically airborne;moisture/LOD/coal deficit does not identify water vapour,carbon or combustion products. Promotional low-smoke wording does not establish zero emissions.

- Identity requirement: Actual direct named species or particle release and medium
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native physical quantity / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need exact species/particle-size/medium and native activity-factor/composition/fate basis/source/coverage;no assumed carbon-to-CO2 burning.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| final_service | actual declared trade duties | Verify owned-resold business final gates/reversals and unique N,not receipts/bags/kg/energy/money. Failed/unfinished duties retained,N0 no division. |  |
| actual_coal | actual declared trade duties | Require actual rank/grade/size,closed originalbag lot/prep state,netasreceivedcoal versus tare and same-sample native water/ash/volatile/elemental/proximate/calorific basis. No default bagmass/moisture/ash/screen/CNS/NCVGCV or manufacturer promotional emissions claim. |  |
| complete_linked_chain | actual declared trade duties | Actual source stage/loss baseline coverage and additional demand have native original-state conversion and exclusive owner. Missing actual stages and additional quantities must be actually integrated outsideonce with completed status/link/time/timezone/source/owner/native quantities/result before final whole-chain use,not pending. Whole/mixed retained contents and independent material/liquid/species paths nonadditive actual receiver/treatment once. |  |
| native_resources | actual declared trade duties | Check all actual provider/resource/carrier/full-life all-user duties and operand native provenance,NETsupplies stock choice,per-record EACH/TOTAL share-inside-sum/N once. Actual quantities, compatible native units/state/basis/method/time/source, verified concrete identities and applicable acceptance/coverage evidence remain mandatory; unknown is not zero. A missing generic numerical Range alone is disclosed and does not block an otherwise evidenced actual package; never invent bounds. A claimed source-backed interval needs a traceable source and compatible basis; only an empirical plausibility guardrail additionally needs independent comparable reference evidence, not the same batch maximum validating itself. Preserve applicable actual source-specific acceptance intervals and uncertainty requirements. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after verified actual identities/quantities |
| downstream_use | Physical originalclosedbagpreparedanthracite wholesale add-on in actually completed originalgate source chain |
| allowed_use | Actual rank-grade-size/cleanwashsize/originalclosedbaglot/netcoal-water-tare/qualitybases/condition/period/finalbusiness gate |
| excluded_use | Standalonecoal footprint;otherfuels/bulkopen/merchantprocessing/burning/generation/use/retailagency;bag/kg/energy/value serviceproxy or pendingcompletechain |
| required_metadata | All qualifiers;native samplewater/ash/analysis/calorific/stock/fates/pack;original/assigned/loss/baseline/additional native source quantities/allterminal records/conversion/coverageowner and completedactualmissingstage/demand integration;full resources/providers/assets/carriers/receivers |
| required_quality_disclosure | Unresolved concrete identities/support/Range,rank-size-water/analysis-state/source/receiver/lifetime uncertainty and incompleteintegration status |
| update_trigger | Changed sourceprep/rank-size-bag/moisture-analysis/stock-condition/fates/actualoperations/providers/assets/carriers/receivers/acceptance or sourcecoverage/integration |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-fuel-trade | official_guidance | UNSD CPC3.0 explanatory notes printed308-30961091groups110120172311312331337;11011anthracite: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Narrow anthracite trade classification only;refineddiesel333/woodpellets39281 excluded,no coal recipe or service conversion. |
| blaschak-prepared-bagged-coal | handbook | Blaschak,ResidentialUses,Convenientsection: https://www.blaschakanthracite.com/residential-uses/ | Qualitative supplier cleans,washes,sizes before bagging sourcegate questions only. No universal bagmass,water/ash/size/CNS/calorific values. Promotional virtually-no-smoke/emissions/environmental claims explicitly rejected as zero/scientific LCA factors. No burning/health/legal inference. Native mass/water/analysis/source-stock/full-life/freight methods independently declared foreground protocols,not webpage quantitative factors. |
