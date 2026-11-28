---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-food-products-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of sealed dry durum-semolina pasta

## 1. Scope and Applicability

This PCR covers merchant own-account wholesale of manufacturer-sealed plain dry pasta made from durum-wheat semolina, after finished forming/drying/packing release. Receiving verifies actual product/SKU/shape/lot/date and net-content/pack/moisture condition, ordinary ambient stock holding and electric handling precede actual business-buyer acceptance. Supplier drying and inherited seal do not prove a new merchant preservation intervention.

Exclude raw grain/semolina/flour manufacture, pasta mixing/forming/drying, fresh/egg/stuffed/cooked pasta, noodles/couscous/complete dishes, hydration/cooking/re-drying, product chemical treatment, retail repacking or resealing, dedicated climate intervention without route review, agency/retail and standalone storage/transport. An outsourced excluded operation remains physically real and requires reviewed scope. No consumer serving/cooking conversion, universal shelf life or food-safety guarantee is adopted.

The service excludes all traded-pasta and inherited-pack manufacturing burdens, including embodied upstream of lost material. A separate finished dried/packed supplier-gate system with actual assigned demand and compatible once-only loss adjustment is mandatory before full-chain use. Actual merchant handling, cleanup and receiver treatment remain covered once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-food-products-n-e-c |
| classification_refs | CPC 3.0:61029; narrower sealed dry plain durum-semolina pasta merchant service subset |
| covered_products | Own-account ordinary ambient wholesale of manufacturer-sealed plain dried durum-semolina pasta |
| excluded_products | Fresh/egg/stuffed/cooked or hydrated pasta, couscous/noodles/dishes; grain/flour/pasta manufacture, re-drying/repacking; agency/retail/standalone warehousing |
| representative_product | Actual supplier-released dry plain pasta SKU/shape/lot and sealed pack to a unique accepted commercial consignment |
| production_route | Finished dried/packed manufacturer release -> merchant receiving/stock/pack-condition checks -> ordinary ambient handling/holding -> actual business-buyer acceptance |
| market_state | Completed service with actual dry-pasta/pack/date/moisture qualifiers, not pasta manufacturing output or cooked portion |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account sealed dry durum-pasta wholesale service |
| How much | 1 Item(s) |
| How well | Actual finished dry/sealed product, net mass/declared moisture basis, pack/date/condition and buyer criteria qualify the accepted service |
| How long or cycle | Actual manufacturer release, merchant receipt/holding/dispatch/acceptance times and linked open cohorts, no standard storage duration |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account sealed dry durum-pasta wholesale consignment |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | supplier_id; product_sku; pasta_shape; source_lot_id; finished_dried_packed_gate; plain_durum_semolina_state; sealed_pack_state; pack_count; pack_unit; net_pasta_mass; mass_unit; moisture_value; moisture_basis; moisture_source; inherited_pack_tare; actual_date_mark; date_type; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N counts unique final buyer-accepted commercial consignment, never packs/pieces/pallet moves/invoices/kg/portions. |
| pasta_mass_basis | commodity audit | Mass; Count | kg; Item(s) | Record actual net as-received pasta mass after actual primary/outer/support tare and actual package counts. Moisture wet-basis vs dry-basis and method/source/time must be explicit before any dry-matter conversion; analytical views do not create new exchanges. |
| native_supplies_outlets | new supplies/wastes | native property | native unit | Actual unit/material/per-piece mass, density/temperature or other native conversion sources required; no standard package/recipe ratio. |
| physical_equivalence | providers/assets | Count | Item(s) | Use actual defined physical completed-package or whole complete-asset equivalent with matching native dataset coverage; other actual native units require appropriate expansion. |
| transport_native | freight | mass*distance | kg*km | Actual as-transported pasta plus packing/support payload times actual km and disjoint share; dry-matter mass cannot silently replace payload. |
| species_native | direct_species | Mass | kg | Actual species/medium/particle identity and compatible measured quantity or justified factor/composition/fate basis; no captured fines or moisture residual converted to emission. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual manufacturer released finished dried and sealed packed plain durum-semolina pasta with source/SKU/shape/lot, date and net-content/moisture/pack state |
| starting_condition_role | Merchant physical own-account ambient wholesale add-on after manufacturing release |
| product_classification_scope | Narrower food-wholesale subset, with independent finished-pasta commodity system |
| recursive_input_rule | Do not consume traded pasta as raw flour, cooking material or recursive same-service input. Keep merchandise stock/demand outside exchanges; actual supplies and physical providers have independent scopes. |
| upstream_dataset_requirement | Separate original-gate commodity dataset covers grain cultivation, milling to semolina, actual pasta production/forming/drying and inherited packaging/final release once. Raw grain/semolina alone cannot represent finished dried packed pasta. Actual compatible assigned demand and lost upstream are separately quantified outside service. |
| disclosure | Actual ownership/product/pack/date/moisture method/basis/net/tare and periods; source-gate assigned quantity/state/unit/source/conversion/owner/existing-loss coverage; real broken/reject/return/receiver fates; full physical resource/provider/asset/transport/treatment scopes |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_commodity | all traded goods | All grain/milling/pasta manufacturing/drying/inherited packing and lost upstream remain outside service. Source-gate demand must match actual finished dried/packed release; no new manufacture because of resale. |  |
| dry_pack_condition | received/accepted goods | Record actual ambient/moisture exposure, sealed-pack integrity and source/date/SKU buyer criteria. Manufacturer consumer FAQ supports qualitative dry-storage/date context only; no consumer universal storage practice, numerical time/temperature or automatic disposal threshold is imposed. | barilla-dry-pasta-storage |
| manufactured_state | finished supplier gate | Durum grain, semolina and finished manufactured/dried pasta are different upstream stages. Manufacturer product FAQ supports that distinction, not a manufacturing recipe, universal moisture assay or cooked-serving factor. | barilla-pasta-product-state |
| all_periods_attempts | actual stocks/attempts | Source lot/consignment/event/period records track actual opening/receipt/dispatch/return/rejection/breach/closing and paired internal movements. Unfinished/failed/repeated attempts retain resources even though only final unique acceptance creates N. |  |
| physical_scope | supplies/providers/assets/receivers | One owner per actual direct/provider/carrier/asset/treatment burden. Product treatment/repacking outsourced cannot disappear; actual scope extension must be reviewed. No service margin, stock discrepancy or speculative avoided-production credit substitutes physical records. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | Sealed dried-pasta merchant stock handling and accepted handover | required | Actual own-account sealed dried plain durum-pasta receiving/ambient holding/electric handling through accepted B2B gate | One physical merchant service with stock/pack/date/moisture and resource responsibility; no additional manufacturing or preservation node | `accepted_service` |

The true node owns actual receiving/checking/holding/handling/hygiene events. Pasta/pack stock is non-exchange merchandise audit; conditional actual suppliers, packing units, assets, residues and environmental species expand only when identified from records. Intact rejection, broken usable pasta, discarded material and actual direct release are different states.

### Process: Sealed dried-pasta merchant stock handling and accepted handover (`ambient_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use source meter intervals, actual equipment operation/charging coverage and all-user allocation with idle/hygiene/open-order treatment; no standard kWh per pasta tonne, nominal equipment-hour use or manufacturing drying load.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual meter/event source-treatment records and allocation are needed; no cooking water ratio, assumed leak-to-sewer fraction or water from pasta wet-weight deficit.

###### Actual independently recorded synthetic detergent supply (`hygiene_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new hygiene supply mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU/formulation/consumable state, opening/receipt/closing/unused return and composition/fate evidence; no universal cleanup kit or chemical release ratio.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account sealed dry durum-pasta wholesale consignment (`accepted_service`)

A real unique business-buyer accepted commercial consignment of manufacturer-sealed plain dried durum-semolina pasta under merchant ownership. Actual source/SKU/shape/lot/release, pack-unit count, net pasta mass and declared moisture basis, inherited tare, date/condition history, period and buyer acceptance qualify the completed service. No standard package count, mass, invoice or cooking portion equivalence.

- Selected flow: Completed own-account sealed dry durum-pasta wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pasta`

Range evidence need: Comparable completed service needs actual supplier release, accepted commercial gate and product/pack/moisture/date qualifiers; no fixed load, shelf-life window, moisture percentage, defect tolerance or accepted yield.

###### Unused synthetic detergent returned to supplier (`unused_mass_returns_detergent_return`)

Only an independently evidenced actual unused synthetic detergent returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `unused_mass_returns`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `hygiene_supplies_synthetic_detergent` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `unused_mass_returns_detergent_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_supplies`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

###### Discarded sealed dry durum-wheat pasta pack (`intact_pack_waste_atomic_case`)

Conditional on independently recorded actual Discarded sealed dry durum-wheat pasta pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `intact_pack_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed dry durum-wheat pasta pack
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable sealed whole-pack waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pasta`

Range evidence need: Actual rejected SKU/lot/date/condition, whole-pack mass/tare inclusion and receiver disposition required; best-by passage alone does not prove physical disposal, contamination or environmental release.

###### Discarded loose dry durum-wheat pasta piece (`loose_pasta_waste_atomic_case`)

Conditional on independently recorded actual Discarded loose dry durum-wheat pasta piece. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `loose_pasta_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded loose dry durum-wheat pasta piece
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable collected pasta-residue mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual collection mass/moisture basis/fate and rejected-versus-usable state; no stock-deficit=spillage, broken fraction=discarded yield or captured fines=particulate emission.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packaging-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material/SKU tare, remaining pasta/residue, net transfer and receiver/sorting/treatment basis; no standard bag/cardboard mass or recovered-material substitution factor.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packaging-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material/SKU tare, remaining pasta/residue, net transfer and receiver/sorting/treatment basis; no standard bag/cardboard mass or recovered-material substitution factor.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packaging-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material/SKU tare, remaining pasta/residue, net transfer and receiver/sorting/treatment basis; no standard bag/cardboard mass or recovered-material substitution factor.

###### Collected dry durum-wheat pasta fines (`loose_pasta_waste_pasta_fines`)

Only an independently evidenced actual collected dry durum-wheat pasta fines in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `loose_pasta_waste`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner.

- Selected flow: Collected dry durum-wheat pasta fines
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `loose_pasta_waste_pasta_fines` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_outlets`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Discarded premises-cleaning wipe with retained contamination (`cleanup_waste_spent_wipe`)

Only an independently evidenced actual discarded premises-cleaning wipe with retained contamination in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `cleanup_waste`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. Identify the actual wipe substrate and retained contamination at the receiver. A filter, loose absorbent or independently collected liquid is not this wipe. The spent whole mass includes retained contamination once; dry supplied wipe mass is only a component audit.

- Selected flow: Discarded premises-cleaning wipe with retained contamination
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `cleanup_waste_spent_wipe` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_outlets`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Collected aqueous premises-cleaning wastewater sent to treatment (`wastewater_aqueous_cleaning`)

Only an independently evidenced actual collected aqueous premises-cleaning wastewater sent to treatment in this process is covered. Record its own physical state, net m3, event/source and handover gate. Other states or receivers require their own identity decision `wastewater`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. This is the aqueous premises-cleaning stream, with its actual dissolved/suspended load and measured received volume. Exclude separately collected undiluted merchandise, organic fluid, condensate or sanitary wastewater. If these actually mix before one transfer, identify that real mixture separately; do not sum constituent volumes or label it pure cleaning water. No quantity is inferred from supplied water.

- Selected flow: Collected aqueous premises-cleaning wastewater sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned m3 for `wastewater_aqueous_cleaning` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require event-linked native m3, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_outlets`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| source_gate_quantity | merchandise | Assign actual finished dried/packed original-gate input to accepted consignment/cohort on compatible state/unit/moisture basis with source and explicit allocation/conversion. Include evidenced originally supplied material and ordinary moisture/state-change share without assuming it is dry pasta loss; returns/closing/other exits exclusively assigned. Final dispatch mass plus measured discarded dry material cannot replace original-gate demand. Quantify compatible actual loss adjustment once outside service under one owner and check already-included loss coverage. Unknown wet-weight deficit is unresolved, not default loss or zero. |  |
| all_consumer_driver | warehouse periods | Use actual source interval and all-consumer/event/period causal handling/occupied-space-time or other justified driver with native unit/source/rationale, including idle/hygiene/failures/open cohorts. Equal consignment or pasta mass shares not presumed; unfinished resources carry without fictitious N. |  |
| new_supply_returns | new service supplies | S=opening_supply+net_receipts-closing_supply. Gross input S/N with actual matching native unused outward return separately output OR consumed-only (S-usable_outward_return)/N with that return exchange omitted and no additional deduction. Require same-scope standalone supplystock match; retained recoveries belong to closing, inherited merchandise/asset content cannot reduce unrelated current supply. |  |
| full_lifetime_assets | shared_assets | asset_equivalent=(job_driver/life_driver)/N for compatible complete whole asset across all consumers/periods. Include manufacture/maintenance/actual replacements/retirement/end-of-life and observed history plus source-backed remainder, uncertainty/sensitivity/update. Remove direct/provider current-event overlaps only when same physical burden covered once elsewhere; no new pallet every turn or duplicate rent/asset view. |  |
| actual_fates | all real outlets | Usable commercial return and retained rejection are commodity stocks/exits, not negative service. Intact whole-pack waste and actual separate loose pasta/pack/mixed cleanup/liquid streams are exclusive physical states. Record actual native composition/fate/receiver; component analyses do not add duplicate physical transfers or species. Treatment ownership once, no assumed recycling/substitution credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pasta` | ambient_wholesale | reference and non-exchange finished pasta/pack stock | pasta_pack_acceptance_stock_record | site_id; merchant_id; warehouse_id; supplier_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; pasta_shape; source_lot_id; finished_dried_packed_gate; manufacturer_release_date_time; plain_durum_semolina_state; sealed_pack_state; product_ingredients_evidence; pack_material; actual_date_mark; date_type; date_source; applicable_acceptance_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; exposure_event; pack_integrity; visual_condition; broken_usable_quantity; actual_rejected_quantity; pack_count; pack_unit; packs_per_case; case_count; labelled_net_mass; labelled_mass_unit; gross_quantity; primary_pack_tare; outer_pack_tare; pallet_support_tare; tare_unit; net_pasta_mass; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_time; moisture_fraction; dry_matter_quantity; dry_matter_unit; basis_conversion; conversion_source; opening_quantity; receipts; buyer_dispatch; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; actual_breach_event; collected_pasta_residue; residue_unit; residue_moisture; residue_moisture_basis; residue_composition_source; intact_waste_transfer_mass; intact_waste_unit; actual_loss_fate; unknown_weight_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; assigned_moisture_state_change_share; state_share_unit; state_share_source; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Join actual finished dry/packed manufacturer release, merchant ownership, SKU/shape/lot/date and buyer condition criteria to final unique accepted consignment. Measure net as-received pasta after actual packing/support tare. Record moisture assay basis/method/sample/time, distinguish dry-matter analytical conversion and source-gate state. Reconcile stocks/actual returns/closing/internal movements, broken usable vs rejected/breached/collected material and unknown weight changes. Assign original finished-gate demand and compatible loss with actual source/conversion/owner/existing coverage outside service once. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual pasta kg and compatible moisture/state native units | each receipt/check/movement/rejection/breach/acceptance/stocktake or moisture observation | Actual supplier release through merchant acceptance and prior/later stocks/failed/unfinished cohorts | One actual merchant responsibility plus independent manufacturer commodity and buyer interfaces | per reference flow | Actual SKU/date/pack/release/buyer evidence; calibrated masses/tare and compatible moisture assay/source/fate investigation |
| `cp_supplies` | ambient_wholesale | actual hygiene/packing supplies and unused returns | new_supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_source; conversion; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual native SKU receipts/stock/use/closing and matching outward unused return. Distinguish added secondary packing and clean hygiene supply from inherited commodity pack and spent mixed waste. One gross-plus-output or consumed-only-omit-output view, with independent actual native conversions/composition. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; Item(s); actual native units/conversions | each actual receipt/use/return/stock event | Complete supply/use/return periods including open cohorts | Named standalone direct supply scope excluding covered provider resources | per reference flow | Actual SKU/unit/stock pairing, calibrated net values, conversion/composition sources |
| `cp_utilities` | ambient_wholesale | source meter and all-user attribution | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breach_cleanup_event_id; equipment_charging_coverage; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual source import/export or matched submeter and disjoint interval. Attribute all-consumer causal handling/space-time or justified driver including idle/hygiene/failed/open work. No manufacturing dryer/cooking-water load or unreviewed dedicated climate intervention. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual meter/driver units | each matched actual meter/consumer/event interval | All service source intervals, consumers and idle/cleaning/open cohorts | Actual direct utility and supply treatment boundary excluding provider overlap | per reference flow | Meter calibration/source directions and real all-user driver evidence/rationale |
| `cp_provider` | ambient_wholesale | actual physical service package | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | Obtain actual complete physical package/native unit and completed quantity, with full resource/result scope. Match direct/provider/carrier/treatment/asset owners once. Actual pasta treatment/repacking is outside and must be reviewed, not hidden in package. | Item(s) equivalent or actual separately expanded native unit | each completed physical provider event | Actual package source/operation/treatment periods | Named actual physical provider package and explicit exclusions | per reference flow | Actual contract/completion/native conversion and scope matrix |
| `cp_assets` | ambient_wholesale | full-life warehouse/handling infrastructure | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | Identify actual whole assets and matching full-life dataset. Include complete manufacture, maintenance, actual replacement/retirement/EOL, observed all-user history plus evidenced remainder and uncertainty/sensitivity/update. Compatible job/life driver units and direct/provider/carrier scope avoid per-turn pallet manufacture or rent duplicate. | Item(s) equivalent; actual compatible all-consumer lifetime driver units | each actual asset period/maintenance/replacement/retirement review | Full manufacture-to-EOL history/remainder and all consumers/periods | One actual complete asset responsibility with explicit overlap ownership | per reference flow | Asset coverage/history/source-backed remainder and driver units/uncertainty |
| `cp_freight` | ambient_wholesale | actual transported complete load | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; as_transported_pasta_mass; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_pallet_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | Collect actual as-transported pasta plus disjoint primary/inherited/added pack and supports, real route distance and matched load share. Record empty/multi-drop/return coverage and native work conversions; carrier embedded energy/assets counted once. | kg*km; actual payload/distance/native-work units | each actual shipment and real return leg | Actual agreed transport gates including matching empty/return periods | Named carrier work dataset coverage and exclusions | per reference flow | Real load/route/share records and compatible conversions |
| `cp_outlets` | ambient_wholesale | collected pasta/pack/cleanup/liquid outlets | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; moisture_value; moisture_basis; moisture_method; moisture_source; remaining_pasta; remaining_pasta_unit; composition; composition_basis; composition_source; retained_fluid; intact_pack_exclusion; loose_pasta_exclusion; separate_pack_exclusion; density; density_unit; density_temperature; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure actual separated loose pasta, packaging, mixed cleanup solids or contained cleaning liquid in native state. Declare moisture/remaining contents and nonadditive composition view; avoid intact whole-pack/component duplicates and retained-stock exports. Receiver classification/acceptance/treatment and provider boundary once; pollutant load independent evidence. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | kg; m3; actual stream-state/native units | each actual collection/transfer and receiver acceptance | All actual cleanup/loss/receiver periods with retained stocks separate | Actual contained receiver interface, not direct environmental emission | per reference flow | Actual net measures/moisture/density/composition/load sources and receiver treatment |
| `cp_environment` | ambient_wholesale | actual direct species and receiving medium | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | Establish actual species/particle size where relevant and receiving medium before identity selection. Choose measured species mass OR applicable matched activity/factor OR actual whole-stream composition/fate with native conversions. Complete species factor forbids extra composition/fate. Captured fines/contained waste/unknown weight deficit are not direct release. | kg species; all actual activity/whole-stream/concentration native units | each actual release event or justified matched monitoring interval | Actual release period and evidence applicability, no stock-residual proxy | Named direct environment interface excluding receiver-contained treatment | per reference flow | Measurement/calibration or matched factor/composition/fate sources and conversion uncertainty |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_pasta | One actual completed service qualified by product/pack/date/moisture/time/gate |  |
| pasta_content_moisture | non-exchange pasta audit | net_pasta_mass=gross_quantity-primary_pack_tare-outer_pack_tare-pallet_support_tare on compatible boundary. Convert actual reported moisture to fraction with source; dry_matter_quantity=net_pasta_mass*(1-moisture_fraction) only for wet-basis fraction, OR net_pasta_mass/(1+moisture_fraction) for dry-basis moisture. Use actual stated basis/method/sample/time; dry-matter and as-received views are not additive exchanges. | cp_pasta | Actual contents/tare and moisture-basis analytical audit |  |
| finished_gate_demand | non-exchange source gate | assigned_source_gate_quantity=actual compatible evidenced source_gate_input_quantity allocation/conversion to accepted cohort, including evidenced assigned_moisture_state_change_share while excluding quantities exclusively assigned to returns/closing/other exits. commodity_source_gate_demand=assigned_source_gate_quantity/N outside service. Reconcile actual loss_adjustment_quantity/unit/basis/source/owner with already_included_loss_coverage once; final mass+discard shortcut and wet-deficit loss inference prohibited. | cp_pasta; N | Separate finished dried/packed demand and actual compatible upstream-loss interface |  |
| new_supply_stock | hygiene/packing supplies; unused returns | S=opening_supply+net_receipts-closing_supply; net_receipts=gross_receipts-receipt_tare. Gross input S/N plus separate matching usable_outward_return/N OR consumed-only (S-usable_outward_return)/N with matching return exchange omitted. Retained recovery included in closing; actual native conversion sources required. | cp_supplies; N | Actual supply and chosen unused-return convention per reference flow |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading on actual import/export direction OR matched direct_submeter_quantity; attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N for disjoint all-user intervals including idle/hygiene/open resources. | cp_utilities; N | Actual purchased utility quantity per reference flow |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N only with actual matching physical completed unit and complete resource scope once. | cp_provider; N | Actual equivalent package quantity per reference flow |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N; life_driver=observed_driver+remaining_driver in compatible units and complete all-consumer history/evidenced remainder with actual replacement/EOL; one view, no duplicate normalization. | cp_assets; N | Compatible complete asset-equivalent share per reference flow |  |
| whole_load_freight | freight | whole_payload_mass=as_transported_pasta_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_pallet_support_mass with disjoint real load components; freight_work=whole_payload_mass*route_distance*load_share/N after actual native conversion and exclusive empty/return coverage. | cp_freight; N | Actual complete-load transport work per reference flow |  |
| contained_outlets | actual waste outlets | intact_pack_waste=intact_waste_transfer_mass/N for actual intact whole-pack transfer. Other outlet_quantity=(gross_quantity-tare_quantity)/N in actual native stream units or actual volume/N, with moisture/composition/density-temperature basis as needed. Whole-stream and component views do not duplicate; retained stock/internal movement not outward transfer. | cp_pasta; cp_outlets; N | Disjoint actual contained outlet quantities and receiver treatment per reference flow |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N after compatible sourced native conversions, one method selected. factor_complete prevents extra composition/fate, whole-stream/species outputs not physically duplicated. | cp_environment; N | Actual species mass with receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| finished_state | received/accepted goods | Actual finished dry/plain durum product and sealed pack/SKU/shape/lot/date and buyer conditions recorded; no raw-semolina gate or universal consumer storage/quality threshold. | Actual manufacturer release/date/product and buyer acceptance |
| mass_moisture_loss | merchandise and actual fates | Net as-received mass/tare and moisture basis/method/sample/time compatible; broken usable/rejected/discarded/moisture-change/unknown differences distinct. Original gate assigned demand/loss source/state/unit/owner/coverage external once. | cp_pasta compatible measured quantity/state/fate and commodity link |
| complete_resources | all users/providers/assets/transport/receivers | Actual native drivers/periods, complete physical package and all-life asset observed+remaining source/replacement/EOL, current-event overlaps and hygiene/open attempts included once. | Source meter/stock/driver/provider/carrier/receiver/lifecycle records |
| specific_exchange_ranges | actual expanded rows | Verify concrete identities/property-unit support and receiver/species roles before final dataset; empirical ranges need comparable evidence, no manufactured threshold. | Actual detail/support and numerical-range applicability evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Actual electric stock-handling equipment charging, lighting, ordinary ventilation, inspection and hygiene equipment electricity, with real meter/provider boundaries. No onsite combustion, dedicated cooling/dehumidification, product re-drying or other stabilization intervention is included; an actual such operation requires route review. Range evidence need: Use source meter intervals, actual equipment operation/charging coverage and all-user allocation with idle/hygiene/open-order treatment; no standard kWh per pasta tonne, nominal equipment-hour use or manufacturing drying load. Measurement evidence: protocol `cp_utilities`; original record basis Energy / kWh. The original amount constraint “Actual attributable electricity per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `electricity_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_utilities`; actual source-linked native records |
| cleaning_water | ambient_wholesale | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Actual externally supplied floor/equipment cleaning utility water only. Do not hydrate pasta, infer manufacturing water, equate product moisture change to utility input, or duplicate provider-contained water. Actual sanitary event and liquid receiver scopes remain explicit. Range evidence need: Actual meter/event source-treatment records and allocation are needed; no cooking water ratio, assumed leak-to-sewer fraction or water from pasta wet-weight deficit. Measurement evidence: protocol `cp_utilities`; original record basis Volume / m3. The original amount constraint “Actual attributable purchased cleaning water per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `cleaning_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_utilities`; actual source-linked native records |
| hygiene_supplies | ambient_wholesale | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Expand actual named formulated cleaning products and mass-measured wipes/absorbents used on warehouse equipment/surfaces or actual breach cleanup, each by real SKU/state/native mass and stock. No chemical treatment of pasta, recipe, disinfection dose or unrecorded pest chemical is prescribed. Range evidence need: Require actual SKU/formulation/consumable state, opening/receipt/closing/unused return and composition/fate evidence; no universal cleanup kit or chemical release ratio. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual attributable new hygiene supply mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `hygiene_supplies_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| added_packing | ambient_wholesale | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Only actual added outer transit cases, straps, wrap units or protective supports, with real unit definition/material and per-unit mass conversion if needed. Manufacturer primary seal/labels and inherited outer packing remain traded-pack audit, not new manufacturing inputs. Reusable pallets are lifecycle assets. Range evidence need: Actual pack-unit stock/use/unused return and per-piece material mass required; no default retail pack mass, bags per box, wrap consumption or automatically added outer pack. Measurement evidence: protocol `cp_supplies`; original record basis Count / Item(s). The original amount constraint “Actual attributable new secondary transit packing units per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| provider_packages | ambient_wholesale | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Actual provider-defined physical receiving/checking, sanitation, handling or maintenance packages with matching completed unit and full resource coverage. Invoice/margin/finance does not define a resource-free Count service. Outsourced pasta re-drying, hydration, fumigation/product treatment or repacking remains an actual material operation requiring separate reviewed scope. Range evidence need: Need actual provider package/native unit, completed quantity, conversion and energy/material/asset/treatment coverage; no standard price, service duration or unspecified task equivalence. Measurement evidence: protocol `cp_provider`; original record basis Count / Item(s). The original amount constraint “Actual attributable equivalent completed physical packages per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_provider`; actual source-linked native records |
| shared_assets | ambient_wholesale | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Actual warehouse/racks/electric handlers/reusable pallets/scales/condition-monitoring equipment using one complete compatible whole-asset equivalent. Include manufacturing, maintenance, actual replacement, retirement and end-of-life across all users/periods; per-turn pallet use is not new pallet manufacture. Range evidence need: Need asset identity/full lifecycle scope, native all-user drivers, observed history and evidenced remaining use with uncertainty; no assumed life, cycles, annual utilization or zero retirement burden. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Actual attributable complete asset equivalents per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| freight | ambient_wholesale | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Actual agreed transport and return legs using real pasta contents plus primary/inherited/added packing and transported pallets/supports. Moisture-basis dry matter is not automatic payload. Carrier already embedded energy/vehicle assets and shared/multi-drop/empty return scope must have one owner. Range evidence need: Actual compatible as-transported payload, route distance, load share and empty/return/native-work conversion needed; no dry-to-cooked serving ratio, nominal box weight or default road distance. Measurement evidence: protocol `cp_freight`; original record basis mass*distance / kg*km. The original amount constraint “Actual attributable complete-load freight work per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_freight`; actual source-linked native records |
| unused_count_returns | ambient_wholesale | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Actual unused new Count packing returned externally and matched to its same-scope input supplystock, native unit and recipient acceptance. Retained/internal movement is stock. Select gross input with separate return exchange OR consumed-only input with return exchange omitted; no duplicate deduction. Range evidence need: Require original supply pairing, real returned quantity/unit/receiver and chosen view; no standard return fraction or avoided packaging-production credit. Measurement evidence: protocol `cp_supplies`; original record basis Count / Item(s). The original amount constraint “Actual attributable returned unused packing units per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| unused_mass_returns | ambient_wholesale | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Real unconsumed external return of mass-measured service supplies matched to the original standalone input-stock scope and exact product/state. Commercial pasta returns are commodity movements, not negative service supply. Spent contaminated material remains waste. Range evidence need: Actual supply/return pairing, calibrated net mass and recipient state needed; no credit against unrelated current supplies, commodity inventory or inherited asset components. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual attributable returned unused supply mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `unused_mass_returns_detergent_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| intact_pack_waste | ambient_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only actual sealed finished packs transferred to a waste receiver, measured as the whole contents-plus-pack state. Usable supplier/buyer returns and retained rejected stock are different. The same contained pasta and pack are not also duplicate separate physical outlets. Loss upstream remains outside service, but actual handling/receiver treatment stays once. Range evidence need: Actual rejected SKU/lot/date/condition, whole-pack mass/tare inclusion and receiver disposition required; best-by passage alone does not prove physical disposal, contamination or environmental release. Measurement evidence: protocol `cp_pasta`; original record basis Mass / kg. The original amount constraint “Actual attributable sealed whole-pack waste mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `intact_pack_waste_atomic_case`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_pasta`; actual source-linked native records |
| loose_pasta_waste | ambient_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Actual loose dry pasta pieces/fines physically collected after real breach or handling failure, with actual moisture/state/composition and residual contaminant basis. Breakage may change condition without loss; swept/captured material is a contained waste, not automatically airborne dust or pure dry solids. Range evidence need: Require actual collection mass/moisture basis/fate and rejected-versus-usable state; no stock-deficit=spillage, broken fraction=discarded yield or captured fines=particulate emission. Measurement evidence: protocol `cp_outlets`; original record basis Mass / kg. The original amount constraint “Actual attributable collected pasta-residue mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `loose_pasta_waste_atomic_case`; `loose_pasta_waste_pasta_fines`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_outlets`; actual source-linked native records |
| packaging_waste | ambient_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Actual separately transferred primary or inherited/added secondary packaging with material/state/remaining contents recorded, excluding whole intact-pack waste and mixed cleanup-stream inclusion. There is no new retail packaging manufacturing or automatic recycling credit on resale. Range evidence need: Need actual material/SKU tare, remaining pasta/residue, net transfer and receiver/sorting/treatment basis; no standard bag/cardboard mass or recovered-material substitution factor. Measurement evidence: protocol `cp_outlets`; original record basis Mass / kg. The original amount constraint “Actual attributable separated packaging-waste mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_outlets`; actual source-linked native records |
| cleanup_waste | ambient_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Actual used wipes/absorbents/cleaning residues transferred as declared mixed physical streams, including retained pasta/fluid/chemicals only where measured in the stream. Keep clean supply and constituent analyses as nonadditive views; avoid duplicating loose-pasta or separated-pack transfers. Range evidence need: Actual measured net mass, state/constituent basis, retained-fluid and stream exclusion records needed; no purchased consumables=spent mass or assumed pasta moisture becomes wastewater. Measurement evidence: protocol `cp_outlets`; original record basis Mass / kg. The original amount constraint “Actual attributable mixed cleanup-solid mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `cleanup_waste_spent_wipe`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_outlets`; actual source-linked native records |
| wastewater | ambient_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Actual collected cleaning/incident liquid transferred to a receiver with native volume or compatible mass-density-temperature conversion, actual suspended/dissolved load and provider coverage. This route does not cook/rinse/hydrate pasta. Contained liquid and pollution-load analyses are distinct from direct environmental species. Range evidence need: Need actual collection and receiver record, density/temperature or volumetric basis and treatment/load evidence; no cooked-pasta water ratio, default COD or percentage-to-drain. Measurement evidence: protocol `cp_outlets`; original record basis Volume / m3. The original amount constraint “Actual attributable contained wastewater volume per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `wastewater_aqueous_cleaning`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Only actual named species and receiving medium established independently by measured mass or justified matched activity/factor/composition/fate. Captured/swept fines, pack residues and contained wastewater are not direct species. Moisture difference, aroma, visual defect or ingredient list is not proof of dust, carbon dioxide, water-vapour or chemical release. Range evidence need: Require actual substance/particle size where relevant, medium, release activity and factor/composition/fate/conversion sources; no residual-to-air, flour-dust factor transplanted to sealed pasta or SDS=release. Measurement evidence: protocol `cp_environment`; original record basis Mass / kg. The original amount constraint “Actual attributable directly released species mass per reference flow” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_environment`; actual source-linked native records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | Unique final B2B accepted consignment N>0 with actual finished dry/packed release/SKU/shape/date/net/tare/moisture basis/state/timing; no pack/kg/cooked portion reference. |  |
| processing_check | whole route | No hidden raw milling/pasta manufacture/hydration/cooking/re-drying/repacking/product treatment or unreviewed climate intervention, including actual outsourced operations. |  |
| commodity_loss_check | non-exchange merchandise | Finished-gate assigned quantity and evidenced moisture-state share with exclusive returns/closing/other exits and actual compatible originalgate loss source/unit/state/owner/existing coverage outside once. No wet-weight deficit=dry solids loss/waste/species, no default zero. |  |
| physical_owner_check | resources periods assets | All actual user/source intervals/causal driver units and full life/remainder/EOL, direct/provider/carrier/treatment scope, new supply return convention and unfinished resources once; no per-turn pallet manufacture. |  |
| state_outlet_check | actual fates | Commercial usable returns/retained rejects distinct intact wholepack waste, loose captured pasta, separate pack/mixed cleanup/liquid and directly measured species. No component duplicates or capturedfines=airdust; actual receiver/treatment ownership. |  |
| bilingual_raw_contract | all content | Actual raw seven identity/five functional/six boundary/six reference/seven profile fields and every protocol12 fields/calculation body nonempty; row/evidence/units/rawoperands/sources/rules ENZH and deterministic projection align. Pass is not product-quality or final UUID proof. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after actual foreground completion and concrete exchange verification |
| downstream_use | Physical ambient own-account sealed dry-pasta wholesale add-on, linked to separate finished dried/packed commodity demand and actual compatible loss once; not complete delivered pasta footprint |
| allowed_use | Declared plain dry durum-semolina SKU/shape sealed packs through actual merchant B2B accepted cohort/gate with mass/moisture/date/pack/period qualifiers |
| excluded_use | Raw grain/flour or manufacture, fresh/egg/stuffed/cooked/hydrated pasta/noodles/couscous/dishes, re-drying/repacking/treatment/climate intervention without review, retail/agency/standalone storage; safety/shelf-life guarantee |
| required_metadata | Supplier/SKU/shape/source lot/finished release/merchant/buyer; actual net pasta and inherited tare/pack counts, date type/value and moisture method/basis/source/sample/time; actual conditions/stock/fates/periods; all-user resources/providers/assets/carriers/receivers; originalgate assigned quantity/state/unit/source/conversion/allocation/loss owner/existing coverage |
| required_quality_disclosure | Actual mass/tare/calibration/moisture basis and native conversion compatibility; usable broken vs actual reject/disposal/captured residue/unknown changes; source-gate demand/loss adjustment and overlap; causal all-consumer driver/full-life remainder uncertainty; concrete flow/support/quantitative range gaps |
| update_trigger | Product/SKU/ingredients/dry/seal/date/acceptance or actual storage state changes; introduced treatment/re-drying/repack/climate intervention; changed asset/provider/carrier/receiver boundaries; material loss/reject/release or source evidence change |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| barilla-dry-pasta-storage | literature | Barilla manufacturer FAQ, Pasta Storage and Pasta Sauce Storage. https://www.barilla.com/en-us/help-with/storage-reheat-and-product-faqs/pasta-and-pasta-sauce-storage | Primary manufacturer consumer qualitative dry-storage/moisture and product-dependent package-date context only; no universal wholesale duration, loss/quality factor, cooked/sauce method or numeric condition adopted. |
| barilla-pasta-product-state | literature | Barilla manufacturer General Pasta Product FAQs. https://www.barilla.com/en-us/help-with/storage-reheat-and-product-faqs/general-product-faqs | Primary manufacturer durum/semolina/finished manufactured-dried product distinction and actual date/visual-condition context; no consumer serving/cooking conversion, universal moisture test/limit or guarantee adopted. |
