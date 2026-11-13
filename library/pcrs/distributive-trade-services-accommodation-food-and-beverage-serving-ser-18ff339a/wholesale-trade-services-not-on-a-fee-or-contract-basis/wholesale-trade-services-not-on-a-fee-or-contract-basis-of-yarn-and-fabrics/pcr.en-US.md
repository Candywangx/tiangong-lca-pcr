---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-yarn-and-fabrics
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of finished cotton woven fabric rolls

## 1. Scope and Applicability

This PCR covers merchant-owned physical wholesale of supplier-complete finished cotton woven fabric in its original intact rolls, from ownership receipt through ordinary ambient warehouse control and handling to actual business-buyer accepted resale. Record actual fibre composition, weave/finish/SKU/roll identity, full and usable widths, selvage scope, length/area, net fabric mass and moisture/conditioning state, core/wrap tare, defects and adopted acceptance criteria. There is no standard roll size or count-to-mass equivalence.

Exclude cultivation/ginning/spinning/weaving/dyeing/finishing, special or knitted fabrics, cutting/slitting/rerolling, replacement roll presentation, routine washing or treatment, retail/fee agency and storage-only. Actual independent inspection or small analytical sampling is a separately recorded performed event with sample fate and uncertainty, not an assumed production cut or full-roll retest. A change in transformation or dedicated environmental intervention needs fresh route review.

All finished fabric and inherited core/wrap manufacture, including upstream manufacture embodied in lost stock, stays outside this service. Whole-chain readiness requires actual separately quantified finished-source-gate assigned demand and loss/stage coverage once. Actual handling and receiver/treatment operations within the declared service remain once. ASTM publisher public scope/abstract is not the paid test procedure or a mandatory wholesale conditioning/sampling recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-yarn-and-fabrics |
| classification_refs | CPC3 61031; narrower finished cotton woven original-roll wholesale within goods266 |
| covered_products | Merchant-owned B2B ambient consignment service of original finished cotton woven rolls |
| excluded_products | Cotton/lint/yarn manufacturing; weaving/finishing/cutting/rerolling; knitted/special cloth; agency/retail/storage-only |
| representative_product | Actual identified finished roll lot accepted as a commercial consignment with measured state/quantity qualifiers |
| production_route | Finished original-roll supplier gate -> ownership receipt/ambient control/handling -> B2B accepted resale |
| market_state | Counted service; metres/m2/conditioned textile kg/cores/packages remain merchandise audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account finished cotton woven original-roll wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual finished original-roll composition/finish/state, measurement basis, defects and commercial acceptance, no universal compliance claim |
| How long or cycle | Actual receipt/ambient holding/handling/acceptance intervals; separately indexed inventory/reporting and asset phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account finished cotton woven original-roll wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; fabric_SKU_composition_finish; roll_lot_ids; finished_supplier_gate; actual_length_unit_method; full_usable_width_selvage; compatible_area_basis; net_fabric_mass_core_wrap_tare; GSM_method_sample_representativeness; moisture_conditioning_time_temperature; defects_actual_acceptance; actual_start_end_duration_unit; site_campaign_period; original_gate_demand_loss_owner |

N>0 is actual unique final accepted commercial consignments after reversals; rolls/metres/m2/kg/invoice lines are not this count. Failed/unfinished cross-period resources remain attributed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | Keep unique actual acceptance ID distinct from number of rolls and all fabric dimensions/mass. |
| roll_measurement | merchandise audit | Length; Area; Mass | m; m2; kg; actual GSM unit | Record length method/state; full versus usable width and included selvages. Area=L×W only for compatible actual state and included extent; variable widths need segment evidence. Mass=area×measured GSM only if sample/selvage/conditioning scope matches, with actual unit conversions. No assumed GSM, regain or whole-lot sample representation. |
| native_units | all actual supplies/services/outlets | Native compatible property | Native unit | Retain net/gross/tare, density, temperature and all conversion factors/unit/basis/source as required; monetary values and defect scores are not physical quantities. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-complete finished cotton woven original rolls, identity/finish/condition, dimensional and net mass/moisture/sample/tare evidence |
| starting_condition_role | Inherited finished commercial product for ambient merchant service, not new cloth production |
| product_classification_scope | Narrower61031 cotton woven goods266 merchant wholesale; cotton/lint/yarn are not this finished gate |
| recursive_input_rule | Keep traded finished cloth/core/wrap as non-exchange stock audit; do not consume or recursively remanufacture the same roll inside this service. |
| upstream_dataset_requirement | Separately match complete finished-roll supplier gate including actual spinning/weaving/dyeing/finishing/roll preparation as applicable, actual original-gate quantities and loss coverage; cotton/lint-only source is incomplete. |
| disclosure | Actual dimensions/selvage/GSM/sample/moisture/conditioning/defect/roll and core/wrap state; all lot/period/acceptance, source-demand/loss, asset/provider/freight/treatment boundaries and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_boundary | rolls/core/wrap | All inherited manufacturing including lost product is outside service; physical handling and actual declared receiver treatment stay inside once. |  |
| metrology_scope | roll audit | Public ASTM length/width/GSM scopes justify separate actual methods, extent and specimen representativeness. No numeric conditioning duration/temperature/humidity, sampling count or mandatory whole-roll retest is imported. | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| original_presentation | fabric_wholesale | Original roll wrapping and ordinary ambient holding are inherited state, not an operated preservation/packaging transformation. Actual breakage/defect/moisture/condition reject needs an evidenced return/downgrade/discard route; processing requires new scope. |  |
| period_stock | all actual events | Link actual roll/lot/campaign/period and inspection/sample/cleaning/idle/rejected/unfinished events. Paired internal movement and accepted/incomplete exits remain distinct; unknown length/mass deficit is not waste, moisture or emitted species. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabric_wholesale | Finished original-roll fabric merchant receiving and handover | required | Actual own-account receiving/ambient handling of finished original rolls through B2B acceptance | Physical commercial service/state/stock responsibility without weaving/finishing/cutting/rerolling | `accepted_service` |

Roll consignments overlap warehouse campaigns and continuous support intervals. Index actual receiving/inspection/sample/cleaning/changeover/idle/dispatch/return/rejected/unfinished/accepted events without assuming every roll is opened or remeasured. Off-spec defects/damage/moisture state require real quarantine/return/downgrade/discard; actual sample removal/return has its own quantity/fate, not ordinary cutting production. No-acceptance periods retain burdens, with explained cross-period assignment before a single per-N normalization.

### Process: Finished original-roll fabric merchant receiving and handover (`fabric_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual quantity allocated to this reference consignment with cp_energy; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need interval meter evidence and scope for all rolls/jobs, inspection/idle and shared users; a standard kWh per metre or commercial lot is unsupported.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual use purpose/meter quantity and external supplier scope; fabric regain, conditioning humidity and wastewater are not direct evidence of purchased water.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual protection SKU/level and measured mass or evidenced piece/area conversion, distinguishing inherited core/tare and reusable equipment. No new full-core/wrap manufacture per sale by default.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual formulation/concentration, net stock receipts/closing/return and receiver or release records. Presence of a chemical in inherited finish or an SDS is not new purchase or measured emission.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual opening/net receipts/closing and disjoint native fates plus any density/temperature/factor source. Fuel delivered to site is not necessarily burned for accepted rolls.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account finished cotton woven original-roll wholesale consignment (`accepted_service`)

One actual merchant ownership/resale consignment accepted by a business buyer with finished original-roll identity and true quantity/state/quality evidence. The counted service is not metres, square metres or manufactured fabric kg.

- Selected flow: Completed own-account finished cotton woven original-roll wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Require actual roll/SKU/composition/finished state, length/full-or-usable-width/selvage, area/net mass/GSM/moisture/conditioning/tare, dates/intervals and acceptance; never one consignment=one roll or fixed area.

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

###### Discarded finished cotton woven-fabric roll (`discarded_fabric_rolls_atomic_case`)

Conditional on independently recorded actual Discarded finished cotton woven-fabric roll. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `discarded_fabric_rolls`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded finished cotton woven-fabric roll
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_rolls; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolls`

Range evidence need: Need real discard/recipient/treatment record and native mass or justified compatible area-to-mass measurement, plus original finished source-gate equivalent. Defect points, short length or moisture decline alone is not discarded kg.

###### Discarded finished cotton woven-fabric piece, without roll core or wrap (`discarded_fabric_rolls_fabric_piece`)

Only an independently evidenced actual discarded finished cotton woven-fabric piece, without roll core or wrap in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `discarded_fabric_rolls`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner.

- Selected flow: Discarded finished cotton woven-fabric piece, without roll core or wrap
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `discarded_fabric_rolls_fabric_piece` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolls`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_rolls`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

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

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_releases; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or compatible actual source/activity/burn, method/factor, composition/fate and conversion operands with units/sources. Generic total dust/volatile labels or a hazard limit cannot fix UUID or emitted kg.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_releases; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or compatible actual source/activity/burn, method/factor, composition/fate and conversion operands with units/sources. Generic total dust/volatile labels or a hazard limit cannot fix UUID or emitted kg.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual quantity allocated to this reference consignment with cp_releases; retain native measurement and compatible conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need measured species or compatible actual source/activity/burn, method/factor, composition/fate and conversion operands with units/sources. Generic total dust/volatile labels or a hazard limit cannot fix UUID or emitted kg.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_shared | all service rows | Attribute direct event use first; shared warehouse/handling/support requires evidenced compatible physical drivers across ALL consumers/periods, including rejected/unfinished/idle use. Divide attributed total by actual positive accepted N once, no default equal rolls/revenue share. |  |
| asset_life | shared_assets | Use complete manufacture/maintenance/replacement/end-of-life, compatible actual used/lifetime driver with observed history plus evidenced remaining/termination, uncertainty and sensitivity. One asset-equivalent fraction or lifecycle-complete provider service, never both or double per-N division. |  |
| stock_returns | operating supplies | For actual native standalone SKU/state S=attributed opening+net external receipts-closing. Choose exactly one: (1) gross S/N as INPUT and actual matched usable external return/N as a separate OUTPUT; (2) consumed-only (S-matched usable return)/N as INPUT and OMIT that matched return OUTPUT. Do not add return quantity to input or deduct it twice. Retained recovery stays closing, waste/loss retains upstream burden, no unrelated/negative netting. |  |
| finished_gate | merchandise | Trace actual complete finished-roll original-gate quantity assigned to accepted consignments and proven discard/state-change shares, closing and useful returns/other exits, with original unit/state and evidenced conversions. Additional linked demand=actual required gate demand minus identical already-covered demand/loss in baseline, matching stage/state/extent once outside service. Missing spinning/weaving/finishing from cotton/lint/yarn-only upstream must be assembled outside; no universal GSM, moisture/shrinkage or defect-to-loss multiplier. |  |
| exit_owner | all outlets | Actual receiving treatment must have one owner; whole discarded-roll/component views cannot duplicate waste. Useful goods returns/downgrades remain merchandise audit, no automatic avoided manufacture credit. Unknown original-gate or receiving scope blocks full-chain readiness. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | fabric_wholesale | accepted_service | Commercial gate and finished-roll acceptance | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; fibre_composition; weave; finish_state; supplier_release; supplier_finished_gate; roll_ids; actual_quantity_unit; seal_wrap_state; defect_acceptance; quality_criteria; receipt_date; dispatch_date; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | Verify actual original finished-roll identity and own-account accepted resale; preserve real declared quantities and adopted quality evidence. | Item(s) | Each acceptance/reversal | All actual linked service/stock/asset periods | Actual merchant commercial gate | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_rolls | fabric_wholesale | merchandise; discarded_fabric_rolls | Roll dimensions/conditioned mass and finished-gate stock ledger | site_id; campaign_id; period_id; consignment_id; lot_id; roll_id; event_id; event_time; time_zone; SKU; roll_count; roll_unit; length; length_unit; length_conversion_factor; length_factor_unit; length_factor_basis; length_factor_source; width_conversion_factor; width_factor_unit; width_factor_basis; width_factor_source; area_conversion_factor; area_factor_unit; area_factor_basis; area_factor_source; mass_conversion_factor; mass_factor_unit; mass_factor_basis; mass_factor_source; GSM_conversion_factor; GSM_factor_unit; GSM_factor_basis; GSM_factor_source; compatibility_basis; compatibility_source; length_method; length_source; full_width; usable_width; width_unit; width_method; width_source; selvage_inclusion; measured_segments; segment_units; actual_area; area_unit; area_extent; area_method; gross_roll_mass; core_mass; wrap_mass; other_tare; tare_unit; net_fabric_mass; mass_unit; measured_GSM; GSM_unit; GSM_method; GSM_source; specimen_type; sample_location; sample_selection; sample_size; sample_unit; sample_time; sample_removal; sample_return; sample_fate; lot_representativeness; conditioning_state; conditioning_start; conditioning_end; conditioning_duration; conditioning_duration_unit; temperature; temperature_unit; relative_humidity; humidity_unit; moisture; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; calibration; measurement_uncertainty; defects; defect_unit; defect_extent; original_wrap_state; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; conversion_unit; conversion_basis; conversion_source; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; baseline_same_loss_coverage; additional_gate_demand; commodity_owner; adjustment_status; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Retain each actually measured/inherited roll or specimen method/state/extent and uncertainty. Relate dimensions/GSM/mass only with compatible selvage and conditioning/sample scope; reconcile all stock and source-gate demand without inventing residual fates. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual m/m2/kg/GSM and native stock units | Each actual movement, measurement/sample and stock boundary | All actual linked service/stock/asset periods | Actual roll/lot/specimen and original finished supplier scope | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_energy | fabric_wholesale | electricity; fuel_supply | Actual warehouse meter and burn ledger | site_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; inspection_cleaning_idle_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record real event/period meter differences and separately measured burn; reconstructed burn needs complete mutually exclusive native stock fates and investigation of unknown loss. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel units | Each meter/event interval | All actual linked service/stock/asset periods | All actual service users | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_supplies | fabric_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | Actual native supply and external-return inventory | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; original_supply_owner; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure same-state net receipts/stock and real external fates; inherited cores/wraps are not new operating inputs. Netting requires matching standalone supply and omitted return exchange. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native supply unit | Each receipt/issue/return/stocktake | All actual linked service/stock/asset periods | Actual standalone service supply | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_assets | fabric_wholesale | shared_assets | Full-life asset and consumer/period records | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate all warehouse/handling/reusable asset users and phases, matching complete lifecycle and compatible used/lifetime units with evidenced remaining use. | Item(s) or actual lifecycle-native unit | Each asset event and period review | All actual linked service/stock/asset periods | All actual users and complete asset life | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_providers | fabric_wholesale | provider_services | Actual completed physical service and scope | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; performed_inspection_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | Verify actual performed result/native unit and complete scope, distinguishing inherited supplier reports and actual repeated inspection; reconcile direct/provider ownership. | Actual provider physical native unit | Each actual result | All actual linked service/stock/asset periods | Actual contracted responsibility | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_freight | fabric_wholesale | freight | Actual cargo/leg and provider coverage | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; fabric_mass; core_mass; wrap_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | Use actual transported fabric/core/wrap/tare extent and distance with explicit native conversion and all-user share; retain delivered-gate and empty/return scope once. | kg*km or actual freight-native unit | Each included real leg | All actual linked service/stock/asset periods | Actual commodity/service/waste transport scope | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_fates | fabric_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual source/receiver water and waste measurements | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; composition_basis; composition_source; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | Measure actual native source and received state/quantity with composition and treatment owner; keep intake, purchased water, contained transfer and direct outfall distinct and non-additive. | Actual native water/waste units | Each actual source/receiver/outfall event | All actual linked service/stock/asset periods | Actual service source and receiving scope | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |
| cp_releases | fabric_wholesale | direct_species | Actual source/species/medium measurement or factor ledger | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_species; receiving_medium; particle_size_basis; measurement; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use only actual species/medium proof and applicable actual source method with complete operands/units/sources; complete factors do not receive duplicate composition/fate multipliers. Unknown fabric moisture/mass difference is no pollutant or species method. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg actual species with native operands | Each actual measured/modeled interval | All actual linked service/stock/asset periods | Actual source and receiving medium | per reference flow | Actual measured/native records, calibration, scope ownership and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all rows | Assign real event use and compatible all-user shares to the actual consignment cohort, retaining idle/failed/unfinished work; divide by positive accepted N once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference service quantity |  |
| dimension_mass | roll audit | For compatible actual same-state/extent segments, area=sum(length_i×included_width_i) after actual conversions to m. Keep full and usable/selvage area separate. Net fabric mass=gross roll minus actual core/wrap/other tare. Area×measured GSM converts to mass only when specimen/lot/selvage/conditioning basis and unit factor agree; otherwise preserve distinct measurements and discrepancy, no default density/GSM/regain. | cp_rolls | Actual roll length/area/net mass with compatibility and uncertainty | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| stock_demand | roll memorandum | Compatible same-state roll stock: opening+external receipts+buyer returns-closing-physical dispatch-supplier returns-useful other exits-actual discard-net sample removal=unexplained residual. Independently reconcile actual dimensional/mass/state changes and map original finished-gate quantities to accepted demand/proven loss, closing/useful exits in original units/state. One additional linked demand accounts for identical baseline stage/loss coverage outside service; no residual-to-discard or universal defect/GSM/shrinkage factor. | cp_rolls; cp_consignment | Audited actual stock and separately linked finished-source-gate demand |  |
| freight_quantity | freight | Actual kg*km=actual included cargo converted to kg×actual distance converted to km, with documented non-overlap share and supplier/provider scope once. Other native freight units retain matching dataset support. | cp_freight | Actual attributed freight per reference |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Use actual species/medium measurement or compatible source-specific actual activity/burn and factor with all required composition/fate/conversion evidence once. Gas conversions retain actual pressure/temperature/composition; complete factor not multiplied twice. Stock shortages/defects/safety limits cannot quantify emitted species. | cp_releases; cp_energy; cp_rolls | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_state | all rows | Require actual material/service/species/receiver and native property support before final exchanges; Count support does not identify the fabric or service flow. | Verified details plus real foreground configuration |
| roll_basis | roll audit | Retain actual methods, compatible full/usable/selvage extent, net/tare/GSM/conditioning/moisture and specimen-to-lot representativeness. Public scopes do not supply numeric conditioning/sample defaults or paid procedures. | cp_rolls; actual supplier/adopted measurement evidence |
| scope_quality | all responsibilities | Keep direct/provider/asset/treatment scope once, finished supplier stages and baseline-loss assigned demand outside service, independent comparable ranges and unknown residuals explicit. | All-user/period/receiver coverage and measurement uncertainty |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | fabric_wholesale | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Meter actual lighting, roll-handling equipment, inspection when actually performed and business support; no weaving, dyeing or finishing energy is inserted in this service. Range evidence need: Need interval meter evidence and scope for all rolls/jobs, inspection/idle and shared users; a standard kWh per metre or commercial lot is unsupported. Measurement evidence: protocol `cp_energy`; original record basis Energy / kWh. The original amount constraint “Actual quantity allocated to this reference consignment with cp_energy; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `electricity_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_energy`; actual source-linked native records |
| facility_water | fabric_wholesale | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Actual cleaning/support water is separate from inherited fabric moisture and any upstream wet finishing. Real test/sample support is included only when performed and recorded. Range evidence need: Need actual use purpose/meter quantity and external supplier scope; fabric regain, conditioning humidity and wastewater are not direct evidence of purchased water. Measurement evidence: protocol `cp_supplies`; original record basis Volume / m3. The original amount constraint “Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `facility_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | fabric_wholesale | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Include only new external film/straps/labels actually added without slitting, rerolling or replacing the original roll presentation. Inherited core/wrap is commodity state; reusable handling cradles use asset life. Range evidence need: Need actual protection SKU/level and measured mass or evidenced piece/area conversion, distinguishing inherited core/tare and reusable equipment. No new full-core/wrap manufacture per sale by default. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `new_outer_protection_pe_film`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| operating_supplies | fabric_wholesale | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Expand actual lubricants, cleaners, absorbents, measurement/test consumables and other operated support in native SKU/state. Dyes, finishes, processing chemicals and automatic moth/mould treatments are outside this route. Range evidence need: Need actual formulation/concentration, net stock receipts/closing/return and receiver or release records. Presence of a chemical in inherited finish or an SDS is not new purchase or measured emission. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `operating_supplies_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| fuel_supply | fabric_wholesale | Which purchased fuel grade/formulation and supply gate are on the stock record? Identify any fuel other than the named diesel case and its native unit; obtain actual density before a volume-to-mass conversion. Keep actual grade/native supply and stock; record burn separately from nonburned returns/wastes/loss. A complete hired carrier/handling service may already cover this fuel. Range evidence need: Need actual opening/net receipts/closing and disjoint native fates plus any density/temperature/factor source. Fuel delivered to site is not necessarily burned for accepted rolls. Measurement evidence: protocol `cp_supplies`; original record basis Volume / L. The original amount constraint “Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `fuel_supply_diesel_supply`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| provider_services | fabric_wholesale | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Use real completed external handling/storage/inspection/testing/maintenance/hygiene and support in its native physical unit. Supplier measurement reports are inherited evidence, not proof of a repeated wholesale test. Range evidence need: Need actual result/unit, performed sample scope and all material/energy/asset/freight/treatment coverage. No full-roll inspection or paid-test procedure is inferred from public standard scope. Measurement evidence: protocol `cp_providers`; original record basis Count / Item(s). The original amount constraint “Actual quantity allocated to this reference consignment with cp_providers; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_providers`; actual source-linked native records |
| shared_assets | fabric_wholesale | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Cover actual building/racks/roll lifts/cradles/meters/ICT and reusable transport assets through full manufacture, maintenance, replacement and end-of-life across all users. Range evidence need: Need compatible used/lifetime driver units, observed history and evidenced remaining use/termination with uncertainty, plus all period/consumer links. A roll count is not the whole asset or a fixed lifespan. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Actual quantity allocated to this reference consignment with cp_assets; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| freight | fabric_wholesale | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Use transported actual fabric-plus-core/wrap/declared tare cargo, not saleable fabric area or nominal GSM alone. Separate delivered supplier-gate legs, returns and real empty/shared journeys. Range evidence need: Need actual load/tare/core/pack scope, leg distance and compatible conversion/share sources; no blanket kg per roll, width, area or truck loading factor. Measurement evidence: protocol `cp_freight`; original record basis Mass*distance / kg*km. The original amount constraint “Actual quantity allocated to this reference consignment with cp_freight; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_freight`; actual source-linked native records |
| environmental_water | fabric_wholesale | Identify the actual abstraction point, water body/aquifer, location and measured source volume from intake permits/meter records. Surface water and groundwater require distinct source identities; no direct withdrawal is established by purchased water use. Identify actual source withdrawal only when the warehouse directly extracts it. Inherited cotton moisture or an atmospheric conditioning state is not a fabricated water intake. Range evidence need: Need source/location/purpose meter quantity and reporting boundary; purchased facility water remains Product and no litre-per-fabric-metre factor is adopted. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual quantity allocated to this reference consignment with cp_fates; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | fabric_wholesale | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Only a real external return of the same standalone supply scope can match an operating input. Consumed-only accounting omits the corresponding return exchange; merchant fabric/core/wrap returns remain stock audit. Range evidence need: Need actual native transfer, recipient and input/state match, keeping retained recovery/internal loops in closing stock; no negative unmatched input or automatic credit. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_supplies; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| discarded_fabric_rolls | fabric_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Record actual receiver-approved discarded roll/portion/sample quantity and actual textile/core/wrap composition. When receiver takes the mixed roll its component audit views do not add second waste exchanges; inherited manufacture stays outside service. Range evidence need: Need real discard/recipient/treatment record and native mass or justified compatible area-to-mass measurement, plus original finished source-gate equivalent. Defect points, short length or moisture decline alone is not discarded kg. Measurement evidence: protocol `cp_rolls`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_rolls; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `discarded_fabric_rolls_atomic_case`; `discarded_fabric_rolls_fabric_piece`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_rolls`; actual source-linked native records |
| other_wastes | fabric_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Expand actual used support/cleaning fractions and service-added protection by real receiver/state; exclude discarded-roll constituent amounts already in its whole waste. Range evidence need: Need measured native quantity/conversions/composition and treatment coverage; discarded inherited core does not automatically cause a new purchased core input or recycled-material credit. Measurement evidence: protocol `cp_fates`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_fates; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| contained_wastewater | fabric_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Use actual liquid transferred to treatment from performed cleaning or real sample support. Routine wholesale does not wash/finish fabric or generate upstream textile effluent here. Range evidence need: Need collected/received volume, native composition/basis, purpose/source and treatment owner; fabric moisture or all incoming facility water cannot stand in for measured wastewater. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual quantity allocated to this reference consignment with cp_fates; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `contained_wastewater_aqueous_cleaning`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| water_outfalls | fabric_wholesale | Identify the direct outfall and receiving water/soil compartment, measured water amount and independently analysed pollutant species. A sewer transfer to treatment is not this outfall; the missing receiving compartment prevents a concrete elementary-flow selection. Only actual release to an environmental receiving medium is this flow, distinct from contained Waste transfer; retain actual quality and species views without duplicate volume. Range evidence need: Need actual outfall/location/interval measured volume and composition; sewer collection or unspecified dampness is not direct discharge evidence. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual quantity allocated to this reference consignment with cp_fates; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| direct_species | fabric_wholesale | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Expand only actual supported combustion/cleaning/maintenance or fabric-origin dust/water/chemical species and receiving medium. No fabric mass deficit or inherited finishing chemical implies emitted pollutant, particle size or formula. Range evidence need: Need measured species or compatible actual source/activity/burn, method/factor, composition/fate and conversion operands with units/sources. Generic total dust/volatile labels or a hazard limit cannot fix UUID or emitted kg. Measurement evidence: protocol `cp_releases`; original record basis Mass / kg. The original amount constraint “Actual quantity allocated to this reference consignment with cp_releases; retain native measurement and compatible conversion.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_releases`; actual source-linked native records |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_count | accepted_service | Verify actual merchant resale final positive accepted consignment N and every physical qualifier; no roll/metre/m2/kg equivalence. |  |
| roll_compatibility | merchandise | Check actual length/full-or-usable-width/selvage, net/core/wrap tare, moisture/temperature/conditioning/sample/GSM method and matched conversion; inconsistent basis or nonrepresentative swatch cannot establish lot mass. | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| route_exits | fabric_wholesale | Require actual accepted/rejected/damaged/sample/return/downgrade/discard state and receiver; do not silently introduce cutting/rerolling or count unresolved rejected roll as accepted. |  |
| upstream_interface | merchandise | Match complete actual finished original-gate states/assigned demand/conversions/closing/useful exits and identical already-covered losses once outside; cotton/lint/yarn alone is insufficient. |  |
| all_period_owners | all service obligations | Enumerate all users/periods/events, complete asset phases and compatible used/lifetime drivers with observed/evidenced remainder. Failed and unfinished work retains burden; no double provider, treatment, freight, per-N or return credit. |  |
| physical_evidence | all rows | Require actual native quantities, receiver and source/unit/basis conversion and species proof; omit matched return under consumed-only and retain non-additive whole-roll/component/water/species views. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after identity and actual completeness review |
| downstream_use | Finished original-roll cotton woven wholesale add-on linked separately to complete finished-fabric supplier gate and actual assigned demand/loss |
| allowed_use | Actual merchant-owned ambient original-roll finished cotton woven consignment with compatible dimensions/mass/conditioning and actual buyer acceptance |
| excluded_use | Standalone fabric footprint; cotton/lint/yarn or knitted/special fabric; manufacturing/cutting/rerolling; paid-test compliance recipe; agency/retail/storage-only |
| required_metadata | Actual SKU/composition/weave/finish/roll/lot/merchant/buyer/site/period, length/width/selvage/area/net/tare/GSM/moisture/conditioning/sample/defect/acceptance, finished gate and demand/loss owner, actual provider/asset/freight/treatment scope |
| required_quality_disclosure | Actual flow/support gaps, dimensional/conditioned mass/sample representativeness and range uncertainty, missing upstream stages/baseline loss coverage, unexplained stock/fates and all-user/lifetime assumptions |
| update_trigger | Changed fibre/finish/presentation/measurement/sample/state/acceptance or processing, dedicated preservation, supplier gate/loss interface, asset/provider/freight/treatment responsibilities |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-fabric-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed pages301–302,61031/group266. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: cotton woven fabric merchant service is a narrower yarn/fabrics wholesale subset. |
| astm-woven-length | standard | ASTM D3773/D3773M-10(2024), public publisher abstract/scope only. https://store.astm.org/d3773_d3773m-10r24.html | Full rolls/bolts and actual length-method distinction; no paid procedure or obligatory wholesale remeasurement adopted. |
| astm-fabric-width | standard | ASTM D3774-18(2024), public publisher scope only. https://store.astm.org/d3774-18r24.html | Full/usable width and declared selvage/roll-or-specimen extent; no universal width, sampling or conditioning values. |
| astm-fabric-gsm | standard | ASTM D3776/D3776M-20(2025), public publisher abstract/scope only. https://store.astm.org/d3776_d3776m-20r25.html | Mass-per-area, specimen/conditioning/selvage basis and limited small-swatch representativeness; actual adopted complete method/lot evidence required, no fixed GSM. |
