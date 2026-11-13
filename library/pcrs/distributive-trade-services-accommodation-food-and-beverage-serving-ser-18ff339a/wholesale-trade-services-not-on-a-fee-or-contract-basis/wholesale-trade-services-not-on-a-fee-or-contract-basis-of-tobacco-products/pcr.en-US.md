---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-tobacco-products
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of sealed filtered cigarettes

## 1. Scope and Applicability

This PCR covers physical own-account purchase and B2Bresale of factory-released manufacturer-sealed filtered combustible cigarettes in an ordinary ambient electric warehouse. The declared service begins at released sealed-pack usable intake and ends at actual business-buyer acceptance,with stock,aggregation,handling and real exceptional dispositions traceable.

Exclude raw/curing tobacco,hand-rolling tobacco,cigars,heated/electronic/vaping/battery products,manufacture/filter making/paper making,opening/repacking/reprocessing,smoking,retail,fee agency and purely financial ownership transfers. No active warehouse thermal/humidity treatment or combustion is assumed; actual additional physical operation needs explicit bounded review and full inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-tobacco-products |
| classification_refs | CPC3.0:61028; narrower: ambient own-account sealed filtered-cigarette wholesale |
| covered_products | Accepted physical wholesale commercial consignments of factory-sealed filtered cigarettes |
| excluded_products | Rawleaf/manufacture/other nicotine devices/retail/agency/active conditioning/repacking |
| representative_product | Actual commercial accepted consignment with SKU/style,sticks/packs/cartons,net mass/moisture/tare and hierarchy/gate qualifiers |
| production_route | Released sealed-pack receipt -> ambient warehouse stock/physical handling and actual aggregation -> business dispatch and buyer acceptance |
| market_state | Completed physical trade service; unchanged finished sealed cigarettes are nonexchange merchandise |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ambient own-account sealed filtered-cigarette wholesale consignment service |
| How much | 1 Item(s): one unique accepted commercial consignment,not fixed sticks,packs,kg or currency |
| How well | Actual manufacturer/SKU,sealed presentation,physical condition and agreed traceability/buyer criteria with recorded exceptions |
| How long or cycle | Actual receipt,holding,picking,dispatch/return and acceptance periods plus assigned idle/cleanup,cutoffs and full asset life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ambient own-account sealed filtered-cigarette wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer_released_finished_filtered_cigarettes; actual_manufacturer_SKU_style; sealed_unit_pack_and_primary_presentation; actual_sticks_packs_cartons_and_hierarchy_factors; actual_parent_child_ID_levels_and_events; net_cigarette_tobacco_filter_paper_mass; moisture_basis_and_primary_pack_tare; actual_ambient_conditions_and_periods; actual_receipt_departure_return_acceptance_gates; ownership_resale_business_buyer; condition_and_traceability_acceptance; actual_scope_provider_transport_responsibility |

N>0 counts completed accepted services after documented reversals. Unfinished,rejected and cross-period duties require an evidenced responsible cohort,not deletion when no current sale completes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference output is 1 Item(s),one commercial service,not cigarette stick,pack,carton,scan or tax quantity. |
| hierarchy_count | merchandise | Count | actual native count | Use actual SKU-specific sticks/pack,packs/carton and parent-child relationships with factor/source; count each physical stock once at selected level. No assumed universal pack size or stick UID. |
| component_mass | merchandise and exits | Mass | kg | Separate whole cigarette mass,tobacco/filter/paper,moisture basis and inherited primary tare; measured native conversion/state/source. A dry tobacco view is not whole finished cigarette or another additive flow. |
| native_units | all exchanges | actual native property | actual native unit | Preserve material/provider/asset units and actual property support. No margin/tax-to-service,leaf-to-cigarette,or generic Energy substitution. |


## 5. System Boundary

The boundary is an additive warehouse/handling/traceability service,not a stand-alone cigarette footprint. UK HMRC records provide a primary example of physical event/aggregation accountability,not a globally mandated legal scheme. Allocation mathematics and stock conventions below are declared methodology,not quantitative HMRC claims.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released factory-sealed finished filtered cigarettes with known primary presentation and SKU |
| starting_condition_role | Nonexchange merchandise stock/throughflow,not consumed tobacco/filter/paper/primarypack inputs |
| product_classification_scope | Narrower ambient physical sealed-cigarette own-account service within61028 tobacco wholesale |
| recursive_input_rule | Actual upstream providers need disjoint complete physical gates; never recursively purchase the same consignment or repeat included IT/transport/assets |
| upstream_dataset_requirement | Commodity baseline outside service must match released sealed finished cigarettes including tobacco processing/cigarette/filter/paper/primarypack manufacture or assemble missing stages once. Raw cured leaf alone is incomplete. Actual resources/providers/receiving treatment need compatible gates |
| disclosure | All qualifiers,actual count/component/moisture/tare/stock and accepted period,loss demand/source-gate conversions/coverage/owner,integration result and complete asset/provider/carrier/receiver scope |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all exchanges | ALL merchandise manufacture including tobacco,filter,paper and factory primary packaging for saleable and lost cigarettes is outside the service add-on. A compatible released sealed finished-cigarette baseline and quantified original-gate assigned demand/loss,existing coverage and owner must be integrated once outside service before whole-chain completeness. Actual loss handling/receiving treatment remains inside once. |  |
| boundary_events | stock and identifiers | Use actual SKU physical counts and tracked parent-child aggregation events. Pack/carton/pallet UIDs,facility/operator identities,commercial documents and completed service Count are distinct. Do not force a UID per stick,default pack size,or physical label manufacturing from an inherited identifier. | hmrc-selling-storing |
| boundary_status | returns and losses | Actual returned/quarantined/lost/stolen/destroyed states need exclusive quantity and responsibility records. Unknown fate is unresolved,not assumed atmosphere,Waste,burn or recovered product. No inferred dry tobacco loss from gross/stock/moisture deficit. | hmrc-selling-storing |
| boundary_operations | ambient warehouse | This route has actual ambient electric handling/storage/IT,not active thermal/humidity preservation,on-site combustion,opening/repacking tobacco or manufacture. Actual additional conditioning,fuel,fluid or reprocessing requires bounded route review and complete added exchanges; it cannot be omitted or represented as zero. Carrier temperature equipment must be declared in provider scope. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_cigarette_trade | Ambient sealed-cigarette warehousing and own-account wholesale | required | Actual own-account ambient physical warehouse service with business acceptance | One receiving/stock/handling/aggregation/dispatch responsibility; batch jobs share continuous-period warehouse/IT infrastructure | `accepted_service` |

Actual hierarchy/disaggregation is a record/handling event,not new cigarette manufacture or a preservation process. Expand conditional actual materials,provider native units,waste and species by concrete identity/receiver; unresolved is not zero.

### Process: Ambient sealed-cigarette warehousing and own-account wholesale (`sealed_cigarette_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_power_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed measured electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual meters,periods,device duties and all-consumer physical drivers; identifiers or transaction counts alone are not energy factors.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Measured assigned supply / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require actual supply,retention,contained effluent and any direct outfall/evaporation evidence; no residual water balance assigned automatically to air.

###### Actual independently recorded synthetic detergent supply (`cleaning_preparations_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual preparation supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purchase and use records,active/carrier basis,dilution,density/temperature and unit conversions with sources; safety classification is not released mass.

###### Actual separately recorded polyethylene packaging film (`added_outer_material_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual added material supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require physical SKU/native stock,tare/material composition and measured conversion; no default label per stick or pack,or tax value as material.

###### Paperboard carton supplied for additional shipping protection (`added_outer_material_paperboard_carton`)

Only an independently evidenced actual paperboard carton supplied for additional shipping protection in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `added_outer_material`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Use only when the added package is established as a paperboard carton. Record construction, net paperboard-carton mass and provider gate. A plastic crate, wood box or composite carton with a materially different identity needs a separate card; inherited packaging and returnable assets are excluded. No fibre grade, recycled share or mass-per-carton is assumed.

- Selected flow: Paperboard carton supplied for additional shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `added_outer_material_paperboard_carton` / accepted N once; preserve an already-per-reference quantity without dividing again.
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

###### Completed ambient own-account sealed filtered-cigarette wholesale consignment service (`accepted_service`)

One actual unique ownership-purchase/resale consignment accepted by a business buyer with physical and traceability qualifiers; cigarette stick/pack/carton counts remain separate merchandise quantities.

- Selected flow: Completed ambient own-account sealed filtered-cigarette wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual completed commercial gate and SKU/count/net mass/moisture/tare/period/acceptance records; no fixed sticks,kg,price,margin or tax per service.

###### Unused synthetic detergent returned to supplier (`usable_supply_return_detergent_return`)

Only an independently evidenced actual unused synthetic detergent returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `usable_supply_return`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `cleaning_preparations_synthetic_detergent` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `usable_supply_return_detergent_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Unused polyethylene film returned to supplier (`usable_supply_return_pe_film_return`)

Only an independently evidenced actual unused polyethylene film returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `usable_supply_return`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `added_outer_material_pe_film` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `usable_supply_return_pe_film_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

###### Discarded sealed filter-cigarette pack (`discarded_sealed_units_atomic_case`)

Conditional on independently recorded actual Discarded sealed filter-cigarette pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `discarded_sealed_units`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed filter-cigarette pack
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured whole-unit waste / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual sticks/packs/cartons,net cigarette/tobacco/filter/paper mass,moisture,primary tare,state and original finished-gate loss conversion/owner; no assumed burn,smoking or leaf-equivalent loss.

###### Collected cigarette tobacco filling, separated from filter and paper (`separated_solid_waste_loose_tobacco`)

Only an independently evidenced actual collected cigarette tobacco filling, separated from filter and paper in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `separated_solid_waste`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner.

- Selected flow: Collected cigarette tobacco filling, separated from filter and paper
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `separated_solid_waste_loose_tobacco` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_waste`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Collected aqueous premises-cleaning wastewater sent to treatment (`contained_effluent_aqueous_cleaning`)

Only an independently evidenced actual collected aqueous premises-cleaning wastewater sent to treatment in this process is covered. Record its own physical state, net m3, event/source and handover gate. Other states or receivers require their own identity decision `contained_effluent`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. This is the aqueous premises-cleaning stream, with its actual dissolved/suspended load and measured received volume. Exclude separately collected undiluted merchandise, organic fluid, condensate or sanitary wastewater. If these actually mix before one transfer, identify that real mixture separately; do not sum constituent volumes or label it pure cleaning water. No quantity is inferred from supplied water.

- Selected flow: Collected aqueous premises-cleaning wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned m3 for `contained_effluent_aqueous_cleaning` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require event-linked native m3, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_water`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | all inventory | Use positive actual unique accepted N and causal physical period/cohort shares. Include failed/cancelled/quarantined/returned-order,standby,cleanup and unfinished cross-period duties; no activity disappears when period N is zero. Tax/excise/margin/currency are not physical denominators. |  |
| allocation_stock | merchandise nonexchange ledger | Reconcile attributed opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,known discard and other external exits with exclusive states; quarantine and aggregation are internal moves. Map assigned finished-cigarette demand/loss to original gate with measured component/moisture/primary tare conversion,unit/basis/source and owner/already-included coverage. Raw cured leaf alone is not a finished-cigarette baseline. |  |
| allocation_supply | actual supplies and usable_supply_return | S=attributed opening+true external net receipts-closing including retained recovered supplies. Choose gross supply INPUT S plus separate same-scope matched usable return OUTPUT OR consumed-only INPUT S-return with matching outward exchange omitted. Internal recovery is not new receipt; no numeric S+return input,second deduction or removal of waste/spill upstream burden. |  |
| allocation_shared | power/providers/assets/freight | Measured compatible-period resource share=cohort physical driver/all-consumer driver. Full-life asset equivalent=compatible cohort driver/complete lifetime driver across all users/periods; include manufacture,maintenance/cleaning,replacements and EOL once. Use observed lifetime or history plus evidenced remainder/termination,driver units,sources,sensitivity/update. A complete provider representation is an alternative to own covered burdens. |  |
| allocation_outlets | actual waste and releases | Use actual mutually exclusive whole-unit or separated components with receiver/treatment and transport once. A wet stream and its contents/components are alternate composition views,not additive physical exits. No automatic recycling/substitution credit or upstream supply subtraction for waste. Direct identified substances need actual receiving media and supported fate. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | sealed_cigarette_trade | accepted consignments and nonexchange cigarette stock | event,pack hierarchy,stock and disposition ledger | consignment_id; lot_id; manufacturer; SKU; cigarette_style; sticks_per_pack; packs_per_carton; aggregate_level; parent_id; child_ids; count_unit; hierarchy_factor; hierarchy_factor_source; facility_id; arrival_time; departure_time; return_flag; acceptance_time; ownership_gate; buyer_gate; opening; gross_receipts; tare; net_receipts; buyer_returns; closing; accepted_quantity; supplier_returns; quarantine_internal; other_exits; lost_status; stolen_status; destroyed_status; actual_fate; gross_mass; net_cigarette_mass; tobacco_mass; filter_mass; paper_mass; primary_pack_tare; moisture_value; moisture_basis; moisture_unit; moisture_method; moisture_source; sample_id; sample_time; supplier_moisture_evidence_date; mass_unit; measurement_state; conversion_factor; conversion_unit; conversion_source; original_gate_dataset_id; original_gate_reference; assigned_source_quantity; assigned_source_unit; source_gate_state; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; burden_owner; already_included_loss_coverage; separate_pack_fate; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link actual completed buyer acceptance to physical stock and actual tracked pack/carton/pallet parent-child IDs; reconcile counts and measured components/moisture without forced stick UIDs or default pack factors. Quantify original released finished-cigarette assigned demand/loss outside service.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); sticks; packs; cartons; kg; declared moisture units | each actual event and acceptance | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_power | sealed_cigarette_trade | warehouse electricity | meter and device-period responsibility ledger | meter_id; period_start; period_end; meter_opening; meter_closing; energy_unit; device_scope; idle_cleaning; cohort_driver; cohort_driver_unit; all_consumer_driver; all_consumer_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure complete actual electric scope by compatible period and all-consumer physical shares; include idle/cleanup and unfinished attribution. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each measured period | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_water | sealed_cigarette_trade | supplied water and actual liquid fates | water meter and outlet sampling ledger | source_id; period; supplied_volume; volume_unit; retained_volume; contained_volume; outfall_id; receiver; density; density_unit; temperature; temperature_unit; composition; composition_basis; composition_source; evaporation_evidence; source; fate_basis; fate_source; treatment_scope; transport_scope; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual supply and outlets; distinguish contained receiver stream from direct substances,retention and proved evaporation without residual inference. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual composition units | each use and collection | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_supplies | sealed_cigarette_trade | actual new materials and matched unused outward returns | native-unit stock and use ledger | material_id; SKU; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; period; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; receiver; source_scope_match; stock_representation; native_unit; conversion_factor; conversion_unit; density; density_unit; temperature; temperature_unit; conversion_source; fate; fate_basis; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each actual new material in native units and matched return provenance; choose gross supply with separate return or consumed-only matched supply with omitted return outlet. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native material units | each receipt/use/return/cutoff | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_provider | sealed_cigarette_trade | actual external physical support jobs | contract completion and coverage record | provider_id; job_id; actual_gate; native_quantity; native_unit; completion_time; energy_coverage; IT_asset_coverage; maintenance_EOL_coverage; transport_empty_coverage; treatment_coverage; included_direct_release; overlap_owner; upstream_dataset; source; cohort_driver; all_consumer_driver; driver_unit; attribution_share; N | Verify actual completed native service and complete resource/asset boundary; separate financial tax/excise/fees from physical quantities and remove overlapping own scope. | Item(s); actual provider units | each completed job/period | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_assets | sealed_cigarette_trade | complete-life shared assets and reusable containers | asset genealogy and full-life driver ledger | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning; replacements; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | Attribute complete lifecycle using compatible all-user lifetime drivers,observed life or history plus evidenced remainder/termination; retain stock/return movement rather than new asset each trip. | Item(s); actual compatible driver units | each acquisition/use/replacement/cutoff | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_transport | sealed_cigarette_trade | actual assigned freight | leg/load/distance and responsibility ledger | leg_id; origin; destination; carrier; period; gross_load; load_tare; net_load; load_unit; distance; distance_unit; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_run_coverage; temperature_equipment_coverage; commodity_provider_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; share_source; source; N | Use actual load and distance with evidenced conversions/share and complete carrier/empty-run coverage; identify each leg owner once. | kg*km; actual leg native units | each actual leg | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_waste | sealed_cigarette_trade | actual separated solids and receiving treatment | incident/separation and receiver transfer ledger | event_id; lot_id; origin; whole_or_part; material; wet_mass; dry_mass; mass_unit; moisture; moisture_basis; moisture_unit; moisture_method; moisture_source; sample_id; sample_state; sample_time; tobacco_fraction; filter_fraction; paper_fraction; packing_fraction; fraction_basis; fraction_source; contamination; gross; tare; net; actual_fate; receiver; transfer_gate; transport_coverage; treatment_recovery_scope; upstream_loss_link; source; attribution_share; all_consumer_driver; driver_unit; N | Weigh actual mutually exclusive whole/part materials and document receiver/treatment; known disposition is separate from lost/stolen status and actual commodity-loss baseline. | kg; actual component basis | each real incident/separation/transfer | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |
| cp_species | sealed_cigarette_trade | actual direct substances and media | measurement or supported activity-factor/fate record | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; attribution_share; all_consumer_driver; driver_unit; N | Establish actual substance and medium before measuring or applying compatible activity/factor/composition/fate evidence; complete species factor cannot be multiplied twice. | kg; actual compatible activity units | each actual release/source event | actual assigned periods and cutoffs | actual single-node duties and all shared consumers | per reference flow | Original records,compatible units/bases/conversion sources,complete responsibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | Attributed physical quantity / positive N once; accepted_service is 1 Item(s). | attributed quantity; N; linked protocol | exchange quantity per reference flow |  |
| supply_stock | supplies and usable_supply_return | S=attributed opening+true external net receipts-closing including retained recovered supplies. Choose gross supply INPUT S plus separate same-scope matched usable return OUTPUT OR consumed-only INPUT S-return with matching outward exchange omitted. Internal recovery is not new receipt; no numeric S+return input,second deduction or removal of waste/spill upstream burden. | opening; external net receipts; closing; same-scope matched return; representation; cp_supplies | nonduplicated supply/return quantities |  |
| period_asset_share | shared resources | Measured compatible-period resource share=cohort physical driver/all-consumer driver. Full-life asset equivalent=compatible cohort driver/complete lifetime driver across all users/periods; include manufacture,maintenance/cleaning,replacements and EOL once. Use observed lifetime or history plus evidenced remainder/termination,driver units,sources,sensitivity/update. A complete provider representation is an alternative to own covered burdens. | measured resource; cohort/all-consumer/lifetime drivers and units; history/remainder source; cp_power; cp_assets | attributed resource/full asset equivalents |  |
| original_finished_gate | commodity only outside service | ALL merchandise manufacture including tobacco,filter,paper and factory primary packaging for saleable and lost cigarettes is outside the service add-on. A compatible released sealed finished-cigarette baseline and quantified original-gate assigned demand/loss,existing coverage and owner must be integrated once outside service before whole-chain completeness. Actual loss handling/receiving treatment remains inside once. Reconcile attributed opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,known discard and other external exits with exclusive states; quarantine and aggregation are internal moves. Map assigned finished-cigarette demand/loss to original gate with measured component/moisture/primary tare conversion,unit/basis/source and owner/already-included coverage. Raw cured leaf alone is not a finished-cigarette baseline. | original finished dataset/gate; assigned demand; loss amount/unit/state/component/moisture/tare conversion/source; other exits; included coverage/owner; integration result; cp_lots | quantified original finished-gate demand/loss burden outside service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | Actual concrete flow,state/gate,property/unit/medium confirmation before final use; each umbrella expands by actual identity. | Full details and support proof |
| quality_stock | cigarette stock | Actual count hierarchy/component/moisture/tare and exclusive exit/fate ledger,source conversions and complete finished gate. | Original lot/event/weights/disposition/integration records |
| quality_coverage | all responsibilities | Complete native physical resources,providers,all-user full-life assets,carriers and receiving treatment once,with uncertainty and updates. | Meter/scope/driver/lifetime/receiver sources |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_power | sealed_cigarette_trade | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Actual electric handling,lighting,scanning,printing and attributable IT operation including standby and cleanup; no presumed conditioning load. Complete provider-included electricity is not added again. Range evidence need: Need actual meters,periods,device duties and all-consumer physical drivers; identifiers or transaction counts alone are not energy factors. Measurement evidence: protocol `cp_power`; original record basis Energy / kWh. The original amount constraint “Attributed measured electricity / N; cp_power.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `warehouse_power_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_power`; actual source-linked native records |
| cleaning_water | sealed_cigarette_trade | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Actual housekeeping water only,not a cigarette ingredient or prescribed humidification. Environmental abstraction requires its actual separate source and support. Range evidence need: Require actual supply,retention,contained effluent and any direct outfall/evaporation evidence; no residual water balance assigned automatically to air. Measurement evidence: protocol `cp_water`; original record basis Volume / m3. The original amount constraint “Measured assigned supply / N; cp_water.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `cleaning_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_water`; actual source-linked native records |
| cleaning_preparations | sealed_cigarette_trade | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Specify actual SKU/composition and native supply unit. Diluted commercial mixture,active substance and carrier views must not be added as separate supplies. Range evidence need: Need purchase and use records,active/carrier basis,dilution,density/temperature and unit conversions with sources; safety classification is not released mass. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Assigned actual preparation supply / N; cp_supplies.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `cleaning_preparations_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| added_outer_material | sealed_cigarette_trade | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Only newly supplied service materials such as outerwrap,label stock or ink. Existing factory primary packs/cartons,printed marks,UIDs and registration records are inherited merchandise/records,not new manufacture at each scan. Expand actual Count/Area/Length variants in native units. Range evidence need: Require physical SKU/native stock,tare/material composition and measured conversion; no default label per stick or pack,or tax value as material. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Assigned actual added material supply / N; cp_supplies.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `added_outer_material_pe_film`; `added_outer_material_paperboard_carton`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| external_jobs | sealed_cigarette_trade | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Count only actual contractually completed physical service jobs with complete electricity,IT/asset and operating scope. Other native provider units require their corresponding concrete exchanges,not monetary fees converted to Count. Range evidence need: Need provider gate,quantity unit,resource/IT/asset/transport coverage and overlap owner; a registration ID or paid excise alone does not establish a physical job. Measurement evidence: protocol `cp_provider`; original record basis Count / Item(s). The original amount constraint “Attributed completed jobs / N; cp_provider.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_provider`; actual source-linked native records |
| shared_assets | sealed_cigarette_trade | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Actual buildings,racks,electric handling,scanners/printers/IT and reusable pallets/crates across all users and periods; include manufacture,maintenance/cleaning,replacements and end-of-life once. Range evidence need: Need compatible cohort and full-lifetime driver identities/units,observed history plus evidenced remainder/termination,source,uncertainty,sensitivity and update; do not manufacture a reusable pallet per movement. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Attributed complete asset equivalents / N; cp_assets.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| freight | sealed_cigarette_trade | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Declare actual legs and carrier boundary including empty runs and any provider-owned temperature equipment; no duplicate inbound commodity or already complete provider transport. Range evidence need: Need actual gross/tare/net load,distance factors/units/sources and any share/all-user drivers; capacity,invoice cost and assumed routes are insufficient. Measurement evidence: protocol `cp_transport`; original record basis Mass * distance / kg*km. The original amount constraint “Assigned actual load-distance / N; cp_transport.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_transport`; actual source-linked native records |
| usable_supply_return | sealed_cigarette_trade | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Only real unused supplies with same-scope origin and receiver; inherited cigarettes/primary packs,retained stock and reusable assets are not this supply return. No automatic substitution credit. Range evidence need: Require same-scope matching and native amounts: gross supply INPUT S with separate return OUTPUT OR consumed-only INPUT S-return omitting that output. No numeric S+return input,negative unrelated supply or second deduction. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Assigned measured usable return / N; cp_supplies.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `usable_supply_return_detergent_return`; `usable_supply_return_pe_film_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| discarded_sealed_units | sealed_cigarette_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only documented physical discarded units with actual receiver/treatment route; quarantine,expiry,missing identifiers,theft or loss status alone is not Waste. Whole cigarette-plus-primary-pack waste excludes the same separated parts. Range evidence need: Need actual sticks/packs/cartons,net cigarette/tobacco/filter/paper mass,moisture,primary tare,state and original finished-gate loss conversion/owner; no assumed burn,smoking or leaf-equivalent loss. Measurement evidence: protocol `cp_lots`; original record basis Mass / kg. The original amount constraint “Assigned measured whole-unit waste / N; cp_lots.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `discarded_sealed_units_atomic_case`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_lots`; actual source-linked native records |
| separated_solid_waste | sealed_cigarette_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Conditional accidental breakage and real cleanup/outerpack waste,not deliberate cigarette opening/reprocessing. Expand actual tobacco,filter,paper,primary/added packing and contaminated cleaning fractions with receiver identity; no repeated whole-unit outlet. Range evidence need: Need measured wet/dry/component basis and exclusive whole/part ledger,origin and actual transport/treatment coverage; collection is not recycling or avoided production. Measurement evidence: protocol `cp_waste`; original record basis Mass / kg. The original amount constraint “Assigned actual separated waste / N; cp_waste.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `separated_solid_waste_loose_tobacco`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_waste`; actual source-linked native records |
| contained_effluent | sealed_cigarette_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only measured collected liquid with actual nicotine/tobacco/cleaner contamination where evidenced,at receiving treatment gate. Whole wet-solid waste and its liquid view are not additive outlets. Range evidence need: Need origin,volume,density/temperature,composition basis and receiver/treatment; no presumed tobacco leachate or wastewater from missing merchandise. Measurement evidence: protocol `cp_water`; original record basis Volume / m3. The original amount constraint “Assigned measured contained effluent / N; cp_water.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `contained_effluent_aqueous_cleaning`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_water`; actual source-linked native records |
| actual_direct_species | sealed_cigarette_trade | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Expand only actual measured or supported substance/medium sources,such as real cleanup spills or releases. No smoking/combustion is in normal sealed trade; theft,odour,moisture deficit and product nicotine content are not released species amounts. Range evidence need: Need substance,medium,activity/factor units,bases,sources,composition and actual fate proof; complete species factors are not multiplied by composition/fate twice. Measurement evidence: protocol `cp_species`; original record basis Mass / kg. The original amount constraint “Assigned supported actual species release / N; cp_species.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_species`; actual source-linked native records |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_completion | accepted_service | Require actual own-account commercial B2Bacceptance,all qualifiers and positive unique N; warehouse scan,pack count,payment and excise do not alone complete the reference service. |  |
| validate_hierarchy | stock and traceability | Reconcile actual tracked parent-child identities and native sticks/pack/carton quantities with measured factors; no duplicated parent plus child merchandise quantities or fictitious stick identifiers. HMRC guidance is a jurisdiction-specific record example,not universal law,issuer,deadline or tax rule. | hmrc-selling-storing; hmrc-id-issuer |
| validate_loss | commodity linkage | Require compatible released sealed finished-cigarette production/primarypack baseline with missing stages assembled once outside service,assigned original-gate loss quantity/unit/state/conversion/source and existing coverage owner/integration result. Theft or residual imbalance does not prove physical fate or dry-tobacco emission. |  |
| validate_resources | physical coverage | Verify native units/support,full asset life/all-user compatible drivers and own/provider/carrier/receiver boundaries once. Actual additional operated conditioning/fuel/fluids triggers scope expansion; no generic Energy substitute,fee-to-Count or blanket zero. |  |
| validate_fates | actual outputs | Require measured exclusive whole/part waste and actual receiver/treatment; specific direct species/activity/factor/composition/fate sources must be compatible. Nicotine content,odour,missing identifiers and moisture deficits are not release quantities. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual quantitative and identity evidence |
| downstream_use | Additive physical ambient own-account wholesale service for complete released sealed filtered-cigarette commodity chain |
| allowed_use | Actual declared SKU/style,pack hierarchy,net mass/moisture/tare,period/condition and accepted B2Broute |
| excluded_use | Standalone whole-cigarette footprint,manufacture,rawleaf,other nicotine devices,smoking,retail/agency,active conditioning/reprocessing or monetary/tax proxy |
| required_metadata | All reference qualifiers; actual physical stock hierarchy and periods; source-gate assigned demand/loss conversion/owner/coverage/integration; full provider/carrier/asset/receiver scope |
| required_quality_disclosure | Unresolved actual identities/support,quantities,Range evidence and actual physical fates; source jurisdiction limits and lifetime/conversion uncertainty |
| update_trigger | Changed SKU/style/pack hierarchy,warehouse operation,provider/asset/transport/treatment,acceptance,loss/fate evidence or source-gate scope |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale | official_guidance | UNSD.CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 61028 includes group250 tobacco products; classification only,not process quantities. |
| hmrc-selling-storing | official_guidance | HMRC.Selling and storing tobacco products,last updated1July2022; https://www.gov.uk/guidance/selling-and-storing-tobacco-products | UK examples of arrival/departure/return and aggregation identities plus distinct lost/stolen/destroyed records; no global obligation,numeric timing,tax or physical loss factor. |
| hmrc-id-issuer | official_guidance | HMRC.Register with the ID issuer if you are in the tobacco product supply chain; https://www.gov.uk/guidance/register-with-the-id-issuer-if-youre-in-the-tobacco-product-supply-chain | Distinction of actual operator/facility and product/aggregate identifiers in that jurisdiction; not a mandated global issuer or physical consumable. |
