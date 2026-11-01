---
pcr_id: pcr.own-account-wholesale-of-wet-salted-bovine-hides
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of wet-salted bovine hides

## 1. Scope and Applicability

This PCR covers the physical service of buying already wet-salted untanned bovine hides on own account, receiving and inspecting them at a declared warehouse, maintaining their existing preserved state by documented condition monitoring,stock rotation,operated ventilation and contained drainage, assembling a commercial lot and completing resale to a business buyer. It is a distribution-service add-on, not a second hide-production dataset. Moisture, incorporated salt, detachable salt and free brine make gross weight alone an inadequate description of the merchandise.

Exclude animal rearing, slaughter/flaying, initial preservation, active re-salting/brining, soaking, fleshing, trimming as production, tanning and leather manufacture; exclude dry hides, non-bovine skins, tanned leather, retail, fee-only agency and standalone warehousing without purchase/resale. If actual conditions require a new curing or other product-changing operation, stop finalization and review its bounded operation, inputs and outlets rather than quietly excluding the activity or treating it as ordinary holding. FAO2009 and JRC2013 distinguish preserved-state reception/storage from processing; neither supplies a mandatory salting recipe or default storage limit here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-wet-salted-bovine-hides |
| classification_refs | CPC 3.0:61015; narrower warehoused own-account service for already wet-salted raw bovine hides |
| covered_products | Buyer-accepted physical wholesale consignment service for already-preserved wet-salted bovine hides |
| excluded_products | Hide commodity production/curing/tanning; dry hides, other animal species or leather; fee agency; pure title transfer; storage-only service |
| representative_product | One completed B2B consignment with actual bovine type, preserved state, count/grade, compatible wet mass, salt/moisture basis and responsibility gate |
| production_route | Ownership/receipt check -> condition inspection and lot holding in actual warehouse conditions -> dispatch/resale acceptance; actual leaks,returns and rejected lots traced |
| market_state | Service completed at documented buyer acceptance; hides remain preserved untanned merchandise at the actual declared state |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account wet-salted bovine hide wholesale consignment service |
| How much | 1 Item(s), one distinct completed and accepted commercial consignment; no fixed hides, kg, m2 or margin equivalence |
| How well | Buyer accepts actual species/type, already-preserved state, grade/defects, physical quantity, salt/moisture and stated warehouse/handover conditions; no downstream leather-yield guarantee |
| How long or cycle | Actual intake/holding/dispatch-to-acceptance period with assigned cleaning,idle and asset-life periods and stock cutoffs |
| reference_flow_link | `accepted_trade` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed own-account wet-salted bovine hide wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | bovine_species; already_wet_salted_state; upstream_curing_gate; actual_ownership_and_business_buyer; unique_consignment_id; hide_count_and_grade; as_received_and_drained_net_mass; free_brine_and_salt_basis; moisture_and_incorporated_salt_basis; warehouse_condition_and_duration; inspection_and_buyer_acceptance_gate; actual_transport_and_treatment_responsibility; stock_period_and_return_reject_fates; original_gate_loss_adjustment_link |

Use N>0 uniquely accepted contractual consignments after documented cancellations/reversals. Failed shipments, unaccepted hides or internal pallet moves do not create accepted service units. Their actually assigned resource use remains in the appropriate accepted cohort or separately disclosed unfinished-period responsibility; never discard burdens merely because N is zero in an unfinished period.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One unique actual completed buyer acceptance is one service; do not redefine pallet,hide,invoice line or tonne as a consignment without the documented contractual gate. |
| hide_state | merchandise and discarded_hides; discarded_hides_atomic_case | Count and Mass | hides; kg | Record gross, package tare, detachable free brine/loose salt and drained net hide mass with actual draining method/time/temperature. Incorporated moisture and salt retain explicit analytical bases; do not assume total dry matter is collagen or water loss is hide loss. |
| native_unit | all actual supplies and services | actual native property | actual native unit | Preserve supplier/provider units; Count/Area/Length/Volume/Time variants require corresponding concrete exchanges. Any count/mass/area/density conversion needs actual compatible measured source and is a nonadditive view. |
| fluid_state | contained_liquids; cleanup_residues; actual_releases; actual_releases_co2_fossil_air; actual_releases_methane_fossil_air; actual_releases_nitrous_oxide_air | Volume and Mass | m3; kg | Separate contained brine/cleaning fluid, free salt, organic solids and actual direct substance releases. Use measured density,temperature,composition and fate bases, not an assumed water/salt/collagen residual. |


## 5. System Boundary

The foreground begins with documented already-preserved hides received into wholesale ownership and ends at the declared accepted B2B handover. One node owns the bounded holding intervention: usable preserved intake condition, maintained actual condition and inspected buyer gate. This narrow route requires an actually operated and monitored ventilated holding intervention with contained drainage and inspected lot rotation; a passive label or unmonitored stockpile alone does not establish it. Additional cooling is included only if actually operated, never inferred solely from a wet-salted label. Cleaning/contact-material use, saline drainage containment, inspection rejects and all real service overhead are inside.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already wet-salted untanned bovine hides at an identified upstream curing/commodity gate with actual grade,count,state-specific quantity and salt/moisture information |
| starting_condition_role | Merchandise stock/throughflow audit, not a consumed upstream hide-production exchange in this service add-on |
| product_classification_scope | A physical own-account wet-salted bovine-hide consignment-service subset of hides/skins/leather wholesale CPC61015 |
| recursive_input_rule | Only a separately contracted actual upstream service with disjoint resources may be used; never recursively buy the same wholesale service for its own consignment |
| upstream_dataset_requirement | Actual service supplies,assets,providers and receiving treatments with compatible units and complete scope; merchandise production and original-gate loss burden linked separately |
| disclosure | Ownership/buyer gate; source/curing state; warehouse conditions and duration; count and state-specific mass; salt/moisture/free-liquid bases; positive N; periods; returns/rejects/loss adjustment; physical resource/provider/transport responsibility |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_addon | whole service | Exclude ALL traded-hide upstream production, including upstream burden of losses, from this additive service. Require a separate quantified original-gate lost-commodity adjustment and saleable-commodity burden exactly once in the linked commodity chain before whole-chain completeness. Include actual handling,treatment and service resources for losses here. |  |
| scope_preserved | salted_hide_trade | Document before/after hide condition, operated ventilation/contained-drainage intervention, condition monitoring and stock rotation, actual holding environment, inspection criteria and accepted gate. Sorting for trade is not tanning or manufacturing; actual new curing/soaking/trimming changes require explicit operation/scope review before final dataset. | fao-hides-value-2009; jrc-hide-reception-2013 |
| scope_outlets | actual inventory | Assign actual brine/drips,loose salt,damaged hides,packing and cleanup streams to their distinct origins and receivers. Contained wastes are not direct environmental emissions; actual abstraction/outfalls/substances must be expanded explicitly with real medium and no assumed zero. |  |
| scope_overlap | all responsibilities | Record once-only ownership for own equipment,external services,transport,temperature control and receiving treatment, including resources already embedded in an upstream provider or commodity dataset. Unknown coverage is a final-data blocker. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| salted_hide_trade | Inspected wet-salted hide holding and own-account trade | required | Actual purchase/resale ownership and physical warehouse responsibility | Single preservation responsibility: inspected already-salted usable intake to maintained-condition B2B acceptance; batch mode receipt/dispatch and cleaning,continuous shared warehouse periods | `accepted_trade` |

Keep the least independently meaningful node. Lot inspection,commercial grading and packing inside this responsibility do not imply new manufacturing nodes. Actual unacceptable hides have documented return,downgrade,recovery or disposal paths from this node; rehandling retains its resources without creating a second accepted service. Variable cards require actual native-unit/material/provider/substance/receiver expansion. An actually operated refrigerant system requires actual fluid supply/recovery/waste and atmospheric-component obligations; an actual environmental water source or outfall requires dedicated exchanges, not a silent omission.

### Process: Inspected wet-salted hide holding and own-account trade (`salted_hide_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Allocated measured electricity / N; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Establish actual equipment/room conditions, metered period and all-consumer allocation including idle/cleaning; neither refrigeration nor a storage energy benchmark is assumed.

###### Diesel for operated on-site handling vehicles (`liquid_diesel`)

Only actual diesel handling vehicles inside responsibility; expand any other actual fuel in its own property/unit. Fuel purchased and fuel burned are separate physical records.

The fixed identity represents generic supplied diesel on a Mass/kg reference basis; actual grade, formulation, supplier and heating value remain recorded attributes, not presets. Retain the native litre record and actual compatible density with temperature/state, mass-per-volume unit and source for any final kg conversion; the catalogue defines no default density. Missing density leaves final volume-to-mass conversion incomplete, never zero or an assumed value. Supplied diesel is not burned diesel, transport service or a direct emission.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Attributed diesel supplied / N; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

Range evidence need: Need calibrated fuel stocks and receipts, measured use or complete audited fates, engine scope and actual burn-factor basis; fuel spills are not combustion.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Metered attributable purchased water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use-resolved volume and compatible wastewater/retained/evaporation evidence with density/temperature when converting; not all liquid outlets are the same water input.

###### Actual independently recorded synthetic detergent supply (`hygiene_preparations_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed preparation supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native purchase unit, composition and active/carrier basis, actual dilution and measured conversion. Never assume a disinfectant, concentration, chemical fate or authorization from a historical guide.

###### Actual separately recorded polyethylene packaging film (`packing_material_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Attributed packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual packing identity, unit and stock/return data; only evidence-backed mass conversion is permitted and its physical view is nonadditive.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wet-salted bovine hide wholesale consignment service (`accepted_trade`)

Buyer-accepted physical consignment service with purchase/resale ownership, inspected already-preserved hide condition and documented warehouse handover. The hide commodity itself is not this service flow.

- Selected flow: Completed own-account wet-salted bovine hide wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_trade`

Range evidence need: Reference count defines normalization, not a hide count, weight, area, grade or commercial margin. Record actual buyer gate and lot composition.

##### Waste flows

###### Discarded wet-salted bovine hide (`discarded_hides_atomic_case`)

Conditional on independently recorded actual Discarded wet-salted bovine hide. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_hides`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded wet-salted bovine hide
- Flow property / unit: Mass / kg
- Amount rule: Measured attributed discarded hide mass / N; cp_trade.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_trade`

Range evidence need: Need hide counts plus compatible as-received/drained wet mass, salt/water/free-brine evidence and original supplier gate link; do not infer collagen mass or original green-hide burden from wet waste kg.

###### Actual separately collected paper packaging waste (`packing_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Measured packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/contamination/wet state, quantity and receiving treatment coverage; collection does not establish recycling or avoided production.


###### Actual separately collected metal packaging waste (`packing_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Measured packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/contamination/wet state, quantity and receiving treatment coverage; collection does not establish recycling or avoided production.


###### Actual separately collected plastic packaging waste (`packing_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Measured packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/contamination/wet state, quantity and receiving treatment coverage; collection does not establish recycling or avoided production.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`actual_releases_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or supported actual-activity substance release / N; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual release or compatible species factor/composition/fate with units,basis,sources,uncertainty. Unknown stock or hide mass deficits are not automatically atmospheric or aquatic emissions.


###### Actual separately evidenced fossil methane emitted to air (`actual_releases_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or supported actual-activity substance release / N; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual release or compatible species factor/composition/fate with units,basis,sources,uncertainty. Unknown stock or hide mass deficits are not automatically atmospheric or aquatic emissions.


###### Actual separately evidenced nitrous oxide emitted to air (`actual_releases_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or supported actual-activity substance release / N; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual release or compatible species factor/composition/fate with units,basis,sources,uncertainty. Unknown stock or hide mass deficits are not automatically atmospheric or aquatic emissions.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_count | all inventory | Attribute the real complete service burden to the actual accepted cohort N with causal period/lot drivers; retain failed,rejected,unfinished and cleanup responsibilities and define cross-period carry rather than divide by zero or delete activity. No price/margin-to-physical conversion. |  |
| alloc_goods | merchandise audit | Reconcile hide counts and state-compatible mass across opening,net receipts,buyer returns,closing,sales,supplier returns,downgrades and discards. A water or salt change is not automatically lost hide; collagen/organic hide-equivalent quantity requires its own actual definition and analysis, not dry mass by subtraction. Trace the quantified original-gate lost amount,conversion source,dataset,boundary owner and integration proof outside this service. |  |
| alloc_stock | service supplies and usable_supply_return | For each native supplied item, S = assigned opening + external net receipts - closing including recovered closing; obtain net receipts from measured gross/tare as appropriate. Internal issue is not another purchase. Choose gross-with-outlets S plus matched usable external return OR consumed-only S minus usable external return with the matched usable-return exchange OMITTED, and normalize once. Closing stock is not external return; nonreturned waste/spill retains upstream supply burden. |  |
| alloc_assets | warehouse_assets | Use complete manufacture,maintenance,replacement and end-of-life per actual asset. Cohort asset equivalents = cohort compatible driver / whole-life driver, across all users and periods; normalize by N once. Evidence may be observed lifetime or observed history plus evidenced remainder and termination, with driver units,source,sensitivity and updates. Alternative full-life per-driver services are not added to the same asset-equivalent view. |  |
| alloc_period | shared own/provider resources | For each reporting or cleaning/receipt/dispatch period, allocate actual complete resource quantity by cohort driver / all-consumer driver with compatible units and evidence; reconcile idle and changeover burdens and prevent repeating shared resources across overlapping consignments. Carry stock and lifetime responsibilities across periods once. |  |
| alloc_reject | rejects and outlets | Keep saleable downgrade/supplier return in merchandise audit; actual discarded hides are Waste only at documented receiver. Keep brine/salt/contact/packing streams separate and use actual disposal/recovery burden without automatic coproduct or avoided-material credit. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_trade | salted_hide_trade | wholesale acceptance, merchandise condition and loss linkage | ownership/receiving/inspection/dispatch and supplier lot records | site_id; node_id; period_id; consignment_id; source_lot_id; supplier_id; buyer_id; purchase_resale_evidence; upstream_curing_gate; intake_time; acceptance_time; reversal_id; bovine_species; hide_count; grade; defects; as_received_gross_mass; package_tare; separable_free_brine_mass; separable_loose_salt_mass; drained_net_hide_mass; mass_unit; draining_method; draining_duration; temperature; temperature_unit; moisture_fraction; moisture_basis; moisture_source; incorporated_salt_fraction; salt_basis; salt_source; opening_count; receipts_count; buyer_return_count; closing_count; accepted_sale_count; supplier_return_count; downgrade_count; discarded_count; discarded_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; conversion_method; conversion_factor; conversion_basis; conversion_source; loss_burden_owner; already_included_scope; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Inspect received already-salted condition; count unique buyer-accepted consignments, reconcile physical hide numbers and compatible state-specific masses, trace actual rejects/returns and quantified original-gate lost-commodity adjustment in the separate commodity chain.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); hides; kg | each receipt,inspection,dispatch,return or discard | actual intake through acceptance with reporting cutoffs | all actual receiving/holding/handover points | per reference flow | Ownership/B2B acceptance, calibrated weighing, inspection/condition, salt/moisture analysis and linked loss integration proof |
| cp_utilities | salted_hide_trade | actual electrical operation | meter and equipment/occupancy records | site_id; node_id; period_id; consignment_id; equipment_id; room_id; meter_id; start_reading; end_reading; energy_unit; actual_operation; temperature; temperature_unit; cohort_driver; all_consumers_driver; driver_unit; attribution_share; driver_evidence; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual electricity and allocate compatible period totals to all consuming cohorts, including idle and cleaning; preserve external complete-service overlap ownership. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each meter/operation period | receipt,holding,dispatch and attributed idle/cleanup | actual warehouse electrical scope | per reference flow | Meter calibration, equipment scope and all-consumer reconciliation |
| cp_fuel | salted_hide_trade | supplied diesel and actual burn | fuel stock and vehicle records | site_id; node_id; period_id; consignment_id; equipment_id; fuel_id; native_unit; opening_stock; gross_receipts; receipt_tare; net_receipts; closing_including_recovered_stock; outward_usable_return; nonburned_waste; uncontained_loss; measured_burn; burn_method; all_fates_complete; uncertainty; cohort_driver; all_consumers_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record native tank quantities and receipt netting; distinguish actual burn from closing stock, usable outward return, nonburned waste and actual uncontained loss. Incomplete fate audit requires investigation, never inferred burn. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | L | each fuel event and stock cutoff | actual operated vehicle periods | included diesel vehicles only | per reference flow | Tank/receipt calibration, netting and exhaustive nonoverlap fate records |
| cp_water | salted_hide_trade | cleaning water and actual saline/aqueous outlets | water meter, collection, sampling and receiver records | site_id; node_id; period_id; consignment_id; event_id; fluid_id; fluid_origin; purchased_cleaning_water; volume_unit; collected_drips; collected_cleaning_waste; retained_liquid; direct_intake; direct_outfall; receiving_medium; measured_evaporation; density; density_unit; temperature; temperature_unit; salt_or_chloride_fraction; composition_basis; composition_source; organic_state; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure purchased cleaning water separately from water/salt leaving already-cured hides; record collected saline streams and chemistry/receiver. Direct abstraction/outfall and actual species require separate exchanges; no water-by-difference estimate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; kg for evidenced mass view | each use,drip collection,cleaning or transfer | actual warehouse and cleanup periods | water supply through actual containment/treatment boundary | per reference flow | Meters, collection weights/volumes, sample/composition sources and receiving evidence |
| cp_supplies | salted_hide_trade | packing and hygiene supplies plus usable outward returns | actual native SKU stock and receipt/return records | site_id; node_id; period_id; consignment_id; sku_id; material; formulation; native_unit; opening; gross_receipts; receipt_tare; net_receipts; closing_including_recovered_stock; outward_usable_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_basis; conversion_source; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect native actual SKU stocks/receipts and matched unused outward returns; preserve upstream exchange unit and evidence any mass view without adding duplicate native/mass quantities. No hidden new hide-preserving treatment. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual SKU native unit | each supply,use,return and cutoff | all attributed handling/packing/cleaning periods | actual service consumables | per reference flow | Supplier unit/SKU identity, calibrated conversion, matched return and stock scope |
| cp_providers | salted_hide_trade | complete external service jobs | contract/completion/native scope records | site_id; node_id; period_id; consignment_id; provider_id; job_id; contract_id; actual_completed_gate; physical_quantity; native_unit; scope_start; scope_end; included_resources; omitted_resources; treatment_scope; overlap_owner; cohort_driver; all_consumers_driver; driver_unit; N | Verify actual completion and all resources for each complete counted job; a differently measured provider uses actual native exchange and support, not a price/hour-to-Count conversion. | Item(s); actual provider native unit | each completed job | relevant contract performance period | defined provider responsibility | per reference flow | Physical completion, contract scope, full-life/native-unit support and overlap ledger |
| cp_assets | salted_hide_trade | shared full-life warehouse resources | asset lifecycle and actual compatible use-driver records | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; maintenance_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_driver_unit; evidenced_remaining_driver; evidenced_remaining_driver_unit; remainder_source; all_consumers; termination_state; uncertainty; sensitivity_evidence; update_evidence; provider_overlap; N | Obtain complete manufacture,maintenance,replacements and end-of-life; allocate via compatible cohort/full-life use across every consumer and period. Establish actual lifetime use or observed history plus evidenced remainder and termination, without assuming depreciation life. | Item(s); actual asset/service native unit | each acquisition/maintenance/replacement and period | observed history plus supported future use to termination | all included shared assets | per reference flow | Asset/support inventory, driver units, observed/evidenced life, sensitivity and no provider duplication |
| cp_transport | salted_hide_trade | assigned actual shipment activity | load,route and carrier-boundary records | site_id; node_id; period_id; consignment_id; transfer_id; mode; load_gross; tare; net_load_mass; mass_unit; distance; distance_unit; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; temperature_control_scope; empty_return_scope; cohort_driver; all_consumers_driver; driver_unit; attribution_share; provider_dataset; overlap_owner; N; load_id; leg_id; gross_basis; tare_basis; tare_source; payload_includes_cargo_pack_brine; load_each_or_total; repeated_load_count; repeated_load_count_unit; repeated_load_count_source; that_record_share; that_record_share_basis; that_record_share_source; unique_leg_check | Pair actual state-consistent loads and distances; apply evidenced unit factors and any justified shared-load share, including declared empty-return/thermal coverage only once.  Use actual packedpayload retaining merchandise water/salt/freebrine and all cargo packaging/supports. When derived from vehiclegross subtract ONLY vehicle/noncargo tare, never cargo packaging; record gross/tare basis. Unique load-leg EACH repeats actualcount once/TOTALunchanged; sum eachactual packedkg×actualkm×THAT_record_share with that leg completeallconsumer evidence INSIDE SUM, then positiveacceptedN once, alreadyattributed scope not allocated twice. | kg*km | each actual transport leg | explicitly assigned intake/outbound/resource/waste legs | declared transport owner boundary | per reference flow | Load/tare proof, actual route/unit factors, complete carrier coverage |
| cp_waste | salted_hide_trade | packing and actual contained cleanup residues | segregated measurement and treatment records | site_id; node_id; period_id; consignment_id; event_id; material; stream_id; quantity; native_unit; wet_state; salt_fraction; organic_fraction; absorbent_fraction; composition_basis; composition_source; receiver_id; receiving_treatment; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh actual classified packing/loose-salt/absorbed/chemical wastes and identify real recovery/disposal receiver; separate whole-fluid/residue view from substance emissions. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual waste native unit | each collected stream and handoff | all attributed holding/cleanup periods | foreground exit through actual treatment scope | per reference flow | Weighing,composition basis and receiving destination evidence |
| cp_releases | salted_hide_trade | actual direct substance/medium exchanges | measurement or activity/factor/chemistry records | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; actual_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Require actual substance and medium, measured release or matched species-factor/wholefluid-composition-fate evidence. Do not multiply a complete species factor again by composition/fate, nor infer emissions from unexplained mass deficits. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg | each actual release/source event | all attributed operation and cleanup periods | direct actual sources only, not provider-embedded releases | per reference flow | Measurement or source/activity compatibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| per_consignment | all inventory rows | Report attributed physical exchange quantity / N once; accepted_trade is 1 Item(s). N counts uniquely accepted consignments, not hide units. | attributed quantity; N; linked protocol | exchange quantity per reference flow |  |
| allocate_period | electricity; external_jobs; freight; electricity_ac | Multiply measured complete period quantity by cohort compatible driver / all-consumer driver; sum disjoint periods and apply per_consignment. | period quantity; cohort driver; all-consumer driver; units; coverage owner | attributed physical quantity |  |
| asset_equivalent | warehouse_assets | Divide cohort compatible driver by actual complete lifetime driver to obtain asset equivalents; apply per_consignment. Use one asset-equivalent or one complete per-driver service representation. | complete asset lifecycle; cohort driver; lifetime driver; units; history; evidenced remainder; termination; cp_assets | attributed asset equivalents |  |
| supply_stock | liquid_diesel; hygiene_preparations; packing_material; usable_supply_return; hygiene_preparations_synthetic_detergent; packing_material_pe_film | S = assigned opening + external net receipts - closing including recovered closing. Use gross-with-outlets S and matched unused outward return OR consumed-only S minus matched return with the matched usable-return exchange OMITTED. Retain nonburned fuel waste/spill and actual combustion as separate fates. | opening; gross receipts; receipt tare; net receipts; closing; usable external return; chosen representation; burn; cp_fuel; cp_supplies | consistent upstream supply and nonadditive usable-return view |  |
| hide_loss_link | discarded_hides; discarded_hides_atomic_case | Map actual discarded hide quantities to the original commodity reference gate using lot/analytical salt-moisture-state and evidenced conversion. Quantify excluded upstream loss burden in the separate commodity chain with owner and once-only integration proof; no universal wet-to-green or collagen conversion. | source lot; upstream gate and dataset; actual hide count and compatible mass; salt moisture free brine bases; conversion quantity/unit/basis/source; loss owner and already-included scope; integration result; cp_trade | quantified separate original-gate commodity loss adjustment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all exchanges | Before final exchange use verify exact concrete UUID,property/unit group and actual gate; unresolved semantics and support remain explicit. | Detailed compatibility and support evidence |
| q_condition | cp_trade | Differentiate actual wet-salted state and grade from fresh,dry,tanned or newly re-cured product; record inspection and scope-change disposition. | Intake/gate/condition and operation records |
| q_quantity | merchandise and fluids | Use measured counts,gross/tare/drained states,composition bases and actual outlets; never equate kg saline waste to kg collagen or fresh-hide input. | Calibrated weighing,analyses,draining and linked supplier conversion evidence |
| q_coverage | all resources | Complete own/provider/native-unit/full-asset-life and actual waste/environmental scope once; investigate missing records or balance differences. | Resource/period/receiver/lifetime reconciliation |
| q_integration | whole commodity chain | Link original-gate saleable and lost commodity upstream burdens plus this service without duplicated resources or omitted losses. Standalone service is not a full hide footprint. | Quantified integration record and scope ownership |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_water | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| hygiene_preparations | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_preparations` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| packing_material | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packing_material` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| external_jobs | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `external_jobs` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| warehouse_assets | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `warehouse_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_transport`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_transport`; actual source-linked native records |
| usable_supply_return | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_return` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_hides | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_hides` under `cp_trade`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_hides_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_trade`; actual source-linked native records |
| contained_liquids | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_liquids` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| packing_waste | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packing_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| cleanup_residues | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleanup_residues` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| actual_releases | salted_hide_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_releases` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual lighting, ventilation, handling and any operated temperature control. An externally supplied complete operation must not also contribute the same electricity.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity for actual hide warehouse operation
- Flow property / unit: Energy / kWh
- Amount rule: Allocated measured electricity / N; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Establish actual equipment/room conditions, metered period and all-consumer allocation including idle/cleaning; neither refrigeration nor a storage energy benchmark is assumed.

#### cleaning_water

Water is for actual floor/contact-equipment cleaning, not an invented hide washing/soaking step. Environmental abstraction requires its own source-specific elementary input.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water for actual premises and equipment cleaning
- Flow property / unit: Volume / m3
- Amount rule: Metered attributable purchased water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use-resolved volume and compatible wastewater/retained/evaporation evidence with density/temperature when converting; not all liquid outlets are the same water input.

#### hygiene_preparations

Record SKU/formulation and actual use on premises/equipment; preservatives added to the hides would change the declared route and require scope review before final data.

Residual inventory requirement after the independently identified cases `hygiene_preparations_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual supplied warehouse cleaning preparations
- Flow property / unit: Mass / kg
- Amount rule: Attributed preparation supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native purchase unit, composition and active/carrier basis, actual dilution and measured conversion. Never assume a disinfectant, concentration, chemical fate or authorization from a historical guide.

#### packing_material

Actual wrapping/strapping/liners used in this trading operation, segregated from salt and brine accompanying the merchandise. Native-count/area/length supplies require actual expanded upstream exchanges.

Residual inventory requirement after the independently identified cases `packing_material_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Mass-accounted protective hide packing consumables
- Flow property / unit: Mass / kg
- Amount rule: Attributed packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual packing identity, unit and stock/return data; only evidence-backed mass conversion is permitted and its physical view is nonadditive.

#### external_jobs

An input represents a physically completed contracted counted service with all included resources disclosed. Noncounted transport, treatment, handling or cooling contracts require native-unit expansion.

- Identity requirement: Complete counted third-party warehouse-support jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Allocated completed job count / N; cp_providers.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual completion gate, physical native unit and resource/treatment boundary. Invoice price or hours is not proof of one complete job.

#### warehouse_assets

Buildings, contained-drainage equipment, racks/pallets, scales and handling plant receive their actual complete-life burden across every consuming consignment and period.

- Identity requirement: Complete-life equivalents of shared hide warehouse assets
- Flow property / unit: Count / Item(s)
- Amount rule: Allocated full-asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture, maintenance, replacements and end-of-life plus compatible observed lifetime driver or history and evidenced remainder; no fixed depreciation age or lifetime output.

#### freight

Use actual shipment mass/state, route and mode for included legs. Commodity supplier and carrier service may already own transport; identify the unique owner including empty and temperature-control scopes.

- Identity requirement: Actual assigned freight for hides and service resources
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Attributed actual kg*km / N; cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Need compatible mass/distance units and factors/sources, actual tare/load basis, allocation drivers/shares and carrier full upstream coverage; no nominal truck capacity assumption.

#### usable_supply_return

Match actual outward return of unused service supplies to original supply and receiving owner. Reusable pallet circulation and closing stock are different ledger events.

- Identity requirement: Usable unconsumed mass-accounted supplies returned externally
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable outward usable return / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need matched native identity/state/quantity and choice of gross-with-outlets or consumed-only representation; no second credit or closing-stock return.

#### discarded_hides

Discarded damaged/decomposed or otherwise rejected hides by actual state and route. A downgraded saleable hide or supplier return is merchandise, not automatically Waste.

- Identity requirement: Actually discarded raw hides at verified receiving handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributed discarded hide mass / N; cp_trade.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_trade`

Range evidence need: Need hide counts plus compatible as-received/drained wet mass, salt/water/free-brine evidence and original supplier gate link; do not infer collagen mass or original green-hide burden from wet waste kg.

#### contained_liquids

Keep merchant-stage drips/leachate separate from purchased cleaning water by actual composition and collection event; expand receiving treatment-specific streams. No soaking effluent is invented.

- Identity requirement: Collected saline drips and actual cleaning wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed collected aqueous waste / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need measured volume/mass/density/temp, chloride/salt/organic state and provider gate. Direct outfalls require actual medium/water/species exchanges, not this contained-waste proxy.

#### packing_waste

Record actual separated liner/wrap/strap wastes and verified destination. Materials still usable for return and merchandise salt are not automatically packing waste.

Residual inventory requirement after the independently identified cases `packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Used contaminated or separated packing materials
- Flow property / unit: Mass / kg
- Amount rule: Measured packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/contamination/wet state, quantity and receiving treatment coverage; collection does not establish recycling or avoided production.

#### cleanup_residues

Conditional floor sweepings, loose salt, absorbents and dirty contact materials with actual identity/state. Expand each receiver-compatible stream, including any actual refrigerant/chemical waste.

- Identity requirement: Actual contained dry or absorbed warehouse cleanup residues
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable contained residues / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need separate water/salt/organic/absorbent basis and actual disposal/recovery record; whole residue is not a measured substance emission.

#### actual_releases

Expand verified actual combustion, dust, wastewater/land spill, evaporation or refrigerant components by substance and medium. Odour, salinity, COD or total brine is not one concrete species identity.

Residual inventory requirement after the independently identified cases `actual_releases_co2_fossil_air`; `actual_releases_methane_fossil_air`; `actual_releases_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified substances released to their receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Measured or supported actual-activity substance release / N; cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual release or compatible species factor/composition/fate with units,basis,sources,uncertainty. Unknown stock or hide mass deficits are not automatically atmospheric or aquatic emissions.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_gate | accepted_trade | Require actual ownership-resale to a business buyer,unique positive accepted cohort and all state/count/grade/gate qualifiers; reject pure financial,fee-agent or canceled outputs. |  |
| v_state | merchandise | Wet-salted condition,free salt/brine,incorporated salt/moisture and actual duration/environment must be known; no universal conversion,temperature or preservation claim. New curing/processing outside declared route requires reviewed scope before finalization. | fao-hides-value-2009; jrc-hide-reception-2013 |
| v_units | all inventory | All actual native units,conversions,N denominators and property supports must align; no count=kg/area,margin=service or energy property substitution. |  |
| v_fates | returned/rejected/liquid material | Prove actual origin,return/downgrade/discard/recovery and receiver,including nonreturned loss handling. Separate contained liquids from actual medium/substance releases; neither stock nor drained-hide deficit proves emissions. |  |
| v_assets | warehouse_assets and shared resources | Require whole-life manufacture,maintenance,replacement,EOL,compatible drivers and history/remainder/termination sources; close all-consumer period totals and prevent provider/asset duplication. |  |
| v_chain | service and commodity system | All traded-hide upstream production remains outside service; quantified linked original-gate loss adjustment and saleable burden must appear exactly once before complete-chain claims, with evidence for salt/moisture/state differences. |  |
| v_data | all concrete releases/providers | Missing actual substance/medium,fluid composition/fate/unit/source,provider completed physical gate or overlap owner blocks final package completeness; do not fill gaps with guessed zero or nearest UUID. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after concrete exchange identities and actual quantities are established |
| downstream_use | An additive physical wet-salted bovine-hide own-account wholesale service in a separately modelled compatible commodity chain |
| allowed_use | Declared B2B ownership-resale,warehouse operation,state/grade/count/mass and period/quality stratum with limits disclosed |
| excluded_use | Whole hide/leather footprint by itself; animal/slaughter/curing/tanning process; fresh,dry or non-bovine product; retail or fee agency; monetary margin dataset |
| required_metadata | All reference qualifiers; upstream curing/commodity gate; positive N; physical merchandise/salt/moisture stock and loss linkage; room/resource/provider/transport/receiver scope; complete asset lifetime |
| required_quality_disclosure | Unresolved exact flows/support,conditional actual expansions,measurement/analysis/conversion uncertainties,Range needs,provider/life/period scope and separate commodity-loss integration state |
| update_trigger | Changed preservation state or actual operation,condition/grade/salt-moisture basis,asset use/life,resource or provider/transport/treatment scope,loss conversion or acceptance gate |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC Version3.0 explanatory notes, division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification of own-account B2B wholesale only, not resource or emission defaults. |
| fao-hides-value-2009 | official_guidance | Leach,I.; Wilson,R.T. (2009). Higher value addition through hides and skins. FAO Diversification booklet8, preservation and marketing chapters; https://www.fao.org/4/i0523e/i0523e.pdf | Differences among preserved states,merchant storage/sale and condition/quantity questions only; no historical numerical prescription or financial-to-physical factor. |
| jrc-hide-reception-2013 | official_guidance | Black,M. et al. (2013). BAT Reference Document for the Tanning of Hides and Skins, EUR26130EN, sections2.1–2.2; https://eippcb.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf | Reception/sorting/storage versus curing/soaking/fleshing process boundaries; as-received pallet storage conditions depend on curing state. Tannery context, not automatic wholesale legal/BAT compliance. |
