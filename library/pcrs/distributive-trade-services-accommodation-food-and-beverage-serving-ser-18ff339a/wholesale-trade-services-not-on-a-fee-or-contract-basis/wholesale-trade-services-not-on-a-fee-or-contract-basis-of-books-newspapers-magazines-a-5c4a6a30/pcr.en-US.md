---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-books-newspapers-magazines-a-5c4a6a30
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of bound printed educational textbooks

## 1. Scope and Applicability

This PCR covers actual physical ordinary-ambient own-account B2B wholesale of finished bound printed educational textbooks. The source is a released finished printed/bound copy or actual multi-volume set with declared edition/ISBN/language/physical format and original packing; completion is documented buyer acceptance after unchanged receipt/holding/picking/dispatch. No fixed number of copies or book mass defines one commercial service.

Exclude ebooks/digital rights,newspapers,stationery,paper manufacture,printing/binding/digitization,restoration/repair/deacidification,fumigation,pulping/shredding,archival controlled preservation,retail and fee agency. Actual damaged/unsold/returned books retain real condition and fate records; any extra real processing/conditioning must be separately reviewed and fully inventoried.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-books-newspapers-magazines-a-5c4a6a30 |
| classification_refs | CPC3.0:61051; narrower:32210finished bound printed educational textbook ambient own-account service |
| covered_products | Completed actual commercial B2B physical wholesale consignments of finished bound printed educational textbooks |
| excluded_products | Ebooks/rights,newspapers/stationery; paper/book manufacture; restoration/archival treatment/pulping; retail/agency |
| representative_product | Accepted commercial consignment with edition/ISBN/language/format/binding/pagination and actual copy-set-volume-carton quantities/net/moisture/tare |
| production_route | Released finished bound printed-copy intake -> ordinary ambient stock/order handling -> dispatch -> actual business acceptance with real exceptions |
| market_state | Completed physical trade service; unchanged edition-specific books remain nonexchange commodity stock |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ambient own-account bound printed educational-textbook wholesale consignment service |
| How much | 1 Item(s),one unique accepted commercial consignment,not one copy,set,volume,carton,kg,page or money |
| How well | Actual physical edition/source equivalence,copy/set completeness,binding/paper/pack condition and buyer-agreed gate with recorded exceptions |
| How long or cycle | Actual receipt/stock/picking/dispatch/returns/acceptance periods plus assigned idle/cleanup,cutoffs and full shared-asset life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ambient own-account bound printed educational-textbook wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | finished_bound_printed_educational_textbook; actual_publisher_ISBN_edition_revision; actual_language_print_format_print_run_binding_pagination; actual_copy_set_volume_definition_and_source_equivalence; actual_carton_copy_volume_hierarchy_completeness; net_finished_book_mass_and_external_pack_tare; actual_moisture_measurement_state_and_condition; unsold_usable_return_damaged_retained_and_discard_distinction; actual_receipt_stock_dispatch_acceptance_periods; ownership_resale_business_buyer; actual_quality_exceptions_and_receiver_fates; actual_provider_asset_carrier_treatment_scope |

N>0 counts unique actual accepted service completions after documented reversals. Unsold stock,failed handovers,quarantine,returns and unfinished-period work retain actual resources and responsible cohort attribution even when period N is zero.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference output is 1 Item(s),one commercial acceptance service,not a printed copy or ISBN. |
| copy_hierarchy | book stock | Count | copies; sets; volumes; cartons | Record actual source-unit definition and edition equivalence,required volume/accessory scope and native nesting factors with unit/source. Page versus leaf counts and pagination do not establish copies,book yield or net mass. |
| book_mass_state | merchandise/loss | Mass | kg | Measure gross shipped package,external package tare and net finished book including cover/binding/ink. Moisture unit/basis/method/source/sample state/time and representative sampling govern actual wet/dry conversion,not archival targets or paper-only mass. |
| native_support | all exchanges | actual native property | actual native unit | Verify actual material/provider/asset/native conversion and property support; no money-to-Count,pages-to-kg or raw paper-to-bound-copy shortcut. Generic electricity cannot use thermal-content substitute. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |


## 5. System Boundary

The service is an additive physical trade module,not a standalone textbook footprint or a collection-preservation guarantee. Library of Congress collection advice informs qualitative condition questions only; source assignment,stock/full-life/transport calculations below are declared PCR methodology,not quantitative collection-guide factors.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released finished bound printed textbook copy or declared complete volume set with edition/ISBN/language/format and original product/pack definition |
| starting_condition_role | Nonexchange merchandise stock/throughflow including paper/ink/cover/binding/adhesive and inherited original pack |
| product_classification_scope | Narrower32210printed educational-textbook ambient own-account route inside61051books322 |
| recursive_input_rule | Actual external physical services need complete disjoint gates; no same-sale recursion or duplicated provider/transport/asset scope |
| upstream_dataset_requirement | Complete actual released bound printed-copy baseline matching publisher/edition/ISBN/language/format,including paper/printing/ink/cover/binding/adhesive/accessories/original pack as relevant,or missing manufacture assembled once outside service. Paper sheets,pulp or printing alone is incomplete. Actual resources/providers/receiving treatment require compatible native scope |
| disclosure | All qualifiers; source-edition equivalence/count hierarchy/net/moisture/tare/stock/period/fates; original-gate assigned demand/state/loss/conversion/exits/coverage owner/integration; full resources/assets/providers/carriers/receivers |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | Exclude ALL traded book production and original packing,including paper/cover/ink/binding/adhesive and embedded upstream burden of sold AND lost books,from service exchanges. Outside this add-on integrate a complete compatible finished bound printed-copy baseline and actual original-gate assigned demand/state/loss/other exits/coverage owner once before whole-chain completeness. Actual service loss handling and receiving treatment remain inside once. |  |
| boundary_edition | copy/set/volume equivalence | Match actual publisher/ISBN scope,edition/revision,language,format/print run,binding and pagination to original physical source. A same title or page count is not proof of equivalent book; set/volume/carton nesting and actual source-unit conversion need evidence. Count each original finished-copy assignment once through returns,retained damaged books and eventual waste,without adding parent set and children. |  |
| boundary_ordinary | merchant route | Ordinary ambient receiving/stock/picking/dispatch is not archival preservation,printing/binding,digitization,restoration,deacidification,fumigation or pulping. Actual additional conditioning/processing/repair requires explicit bounded review and complete resources,not omission or presumed zero. |  |
| boundary_source | qualitative guidance | Library of Congress collection-storage guidance supports qualitative structural support,handling/light/moisture condition questions only. No numerical archival temperature/rH,cleaning method,housing material,book life or generic waste percentage is imposed on ordinary wholesale. Actual publisher/buyer/warehouse conditions govern. | loc-book-storage |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| printed_textbook_trade | Ambient printed-textbook stock and own-account trade | required | Actual own-account physical ordinary-ambient printed textbook trade with business acceptance | One intake/stock/picking/dispatch responsibility; order and cleanup batches share warehouse infrastructure over reporting periods | `accepted_service` |

No printing/binding/preservation node is created by a book or storage label. Normal books remain finished and unchanged; actual incomplete/returned/damaged/discarded states and actual cleanup/receivers stay within the bounded trade responsibility. Expand conditional actual material/provider/waste/substance identities without zeroing missing data.

### Process: Ambient printed-textbook stock and own-account trade (`printed_textbook_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual metered electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need measured period/device scope and compatible causal all-user drivers; no power per ISBN,page or copy from paper labels or archival recommendations.

###### Actual liquid treated tap-water supply (`premises_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual measured supply / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require source/use and actual retained/collected/direct outlet evidence; damp or water-damaged books do not quantify service water supply,effluent or evaporation.

###### Actual independently recorded synthetic detergent supply (`actual_housekeeping_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native material supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual SKU/dry material/active-carrier formulation,stock/use/returns and native density/temp/conversion sources; mixed preparation and contents are alternate views,not double supply.

###### Actual separately recorded polyethylene packaging film (`added_order_materials_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual newly added material / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require actual native Count/Area/Length/Mass stock,tare/material and conversion/source; no acid-free folder,archival enclosure or new wrapper per copy as a universal requirement.

###### Paperboard carton supplied for additional shipping protection (`added_order_materials_paperboard_carton`)

Only an independently evidenced actual paperboard carton supplied for additional shipping protection in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `added_order_materials`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Use only when the added package is established as a paperboard carton. Record construction, net paperboard-carton mass and provider gate. A plastic crate, wood box or composite carton with a materially different identity needs a separate card; inherited packaging and returnable assets are excluded. No fibre grade, recycled share or mass-per-carton is assumed.

- Selected flow: Paperboard carton supplied for additional shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `added_order_materials_paperboard_carton` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_materials`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed ambient own-account bound printed educational-textbook wholesale consignment service (`accepted_service`)

One actual unique commercial ownership-purchase/resale consignment accepted by a business buyer for declared edition/ISBN/language/format,bound-copy or actual volume-set configuration and condition. Printed copy,set,volume and carton counts are separate stock measures.

- Selected flow: Completed ambient own-account bound printed educational-textbook wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_books`

Range evidence need: Need actual acceptance and publisher/ISBN/edition/print format/binding/pagination,physical count hierarchy,net book mass/moisture/tare and period/quality; no copy=service or pages-to-kg default.

###### Unused synthetic detergent returned to supplier (`unused_supply_return_detergent_return`)

Only an independently evidenced actual unused synthetic detergent returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `unused_supply_return`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `actual_housekeeping_supplies_synthetic_detergent` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `unused_supply_return_detergent_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_materials`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Unused polyethylene film returned to supplier (`unused_supply_return_pe_film_return`)

Only an independently evidenced actual unused polyethylene film returned to supplier in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `unused_supply_return`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Match the unused material exactly to input `added_order_materials_pe_film` in formulation, supplied state and native mass. It is an external usable return, not waste, closing stock or internal circulation. Include this output only with the gross-supply convention; omit the matched return output entirely when the input has already been netted by that return. No automatic avoided-production credit.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `unused_supply_return_pe_film_return` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_materials`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

##### Waste flows

###### Discarded complete bound printed educational textbook (`actual_whole_book_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete bound printed educational textbook. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `actual_whole_book_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete bound printed educational textbook
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual whole-book waste / N; cp_books.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_books`

Range evidence need: Need exact edition/copy/set/volume scope,count/net book/pack tare/moisture/state and actual receiver/sourcegate loss mapping. An incomplete multi-volume set does not prove all remaining books were discarded.

###### Actual independently collected non-packaging waste paper (`separated_book_material_waste_paper`)

Only an actually independent collected paper/cardboard waste stream whose paper identity and as-collected composition are established at the receiver. Non-paper laminates, composite debris, wire/plastic mixtures and contaminated cleanup solids retain their own residual identities. Whole book/reel, packaging and this independent paper outlet are physically exclusive; retained paper components are non-additive audits. No pulping, shredding, sorting, recovery credit or occurrence is assumed.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated material / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need measured wet/dry/composite fractions,origin/edition and actual receiving treatment; fragment/pulp mass or pagination is not a copy count or a generic source-gate book yield.

###### Actual separately collected paper packaging waste (`actual_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require actual product-versus-package scope,tare/material/contamination and whole/part exclusions,receiver/transport/treatment. Recycling markings or collection do not establish avoided paper production.


###### Actual separately collected metal packaging waste (`actual_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require actual product-versus-package scope,tare/material/contamination and whole/part exclusions,receiver/transport/treatment. Recycling markings or collection do not establish avoided paper production.


###### Actual separately collected plastic packaging waste (`actual_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require actual product-versus-package scope,tare/material/contamination and whole/part exclusions,receiver/transport/treatment. Recycling markings or collection do not establish avoided paper production.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_service | all duties | Use positive actual unique accepted commercial N and causal physical cohort/period driver shares. Failed/cancelled/quarantined/returned orders,idle/cleanup and unfinished periods retain duties even when no current service completes; copy/carton count or margin alone is not N. |  |
| allocation_goods | nonexchange book stock | Reconcile attributed opening,net receipts,buyer returns,closing unsold/damaged retained,accepted transfers,publisher/supplier returns,other exits,actual whole/fragment discard and remaining usable volumes by exclusive source-edition and count hierarchy. Internal quarantine/incomplete sets are not exits. For allocated source assignment,retain source_all_exit_driver_records for every competing accepted transfer,external return,closing carry/unsold or damaged-retained stock,usable other exit and actual whole/fragment loss. Each mutually exclusive end-state/exit driver record has quantity,unit,basis,source,original-source/edition link,cohort/period and exclusivity key; reconcile intermediate return movements to their final state rather than counting both. Numerator and complete denominator must refer to the same compatible original-source cohort and driver basis. Denominator=sum these complete mutually exclusive records,including unsold/closing carry and useful exits,never accepted-only; missing destination coverage blocks allocated assignment. Quantify actual original finished-copy demand/state/whole-part loss in matching source unit/state with actual conversions/owner/existing loss coverage and once-only integration outside service; fragments or wet/dry changes never become copies by assumption. |  |
| allocation_supplies | independent supply and unused_supply_return | S=assigned opening+true external net receipts-closing including recovered retained independent supplies. Choose gross INPUT S with separate same-scope matched usable OUTPUT OR consumed-only INPUT S-return omitting that output. Internal recovery is not receipt;no numeric S+return,double deduction or removal of nonreturned waste/spill upstream burden. Book merchandise returns and original covers are not service-supply credits. |  |
| allocation_life_scope | resources/assets/providers | Compatible-period complete resource attribution=cohort physical driver/all-user driver. Full-life asset equivalent=compatible cohort driver/complete lifetime driver across users/periods,including manufacture,maintenance/cleaning,replacements and EOL. Evidence observed life or history plus sourced remainder/termination,driver units,uncertainty/sensitivity/update. Complete provider scope replaces covered own resources/assets rather than adding them. |  |
| allocation_outlets | actual book/fragment/pack/cleanup flows | Actual whole books,fragments,packing,absorbed-liquid cleanup solids and independent contained liquid are exclusive physical streams. Paper/ink/glue/cover/moisture fractions are nonadditive contents with transfer/exclusion links. Actual receiver/transport/treatment once,no automatic pulping,recycling/substitution credit or waste subtraction from supply. Only actual identified direct substances/media use supported measurement/fates; receiver emissions stay in receiver scope once. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_books | printed_textbook_trade | accepted commercial service and exclusive copy/volume stock | Original physical-event,meter/scope/source and fate ledger | consignment_id; publisher; title; ISBN; ISBN_scope; edition; revision; language; print_format; print_run; binding; pagination; page_or_leaf_definition; pagination_source; copy_or_set_definition; parent_set_id; volume_id; volume_count; copy_count; count_unit; carton_id; carton_count; copies_per_carton; nested_count_factor; nested_count_factor_unit; nested_count_factor_source; original_source_edition_equivalence; equivalence_evidence; required_volume_accessory_list; actual_completeness; condition; unique_stock_record; gross_pack_mass; external_pack_tare; net_finished_book_mass; mass_unit; each_or_total_mass_record; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; sample_id; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_state; sample_time; supplier_evidence_date; temperature; temperature_unit; humidity; humidity_unit; observation_time; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing_unsold; damaged_retained; accepted_transfer; publisher_supplier_returns; incomplete_internal; quarantine_internal; other_exits; actual_whole_discard; actual_fragment_exit; retained_usable_volumes; disposition; physical_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_quantity_source; allocation_method; allocation_source; direct_assignment_evidence; source_cohort_driver; source_cohort_driver_unit; source_cohort_driver_basis; source_cohort_driver_source; source_cohort_driver_record_ids; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; source_all_exit_driver_records; driver_record_id; driver_exit_state; driver_quantity; driver_quantity_unit; driver_basis; driver_source; driver_original_source_link; driver_source_edition_link; driver_source_cohort_id; driver_period; driver_exclusivity_key; driver_conversion_factor; driver_conversion_unit; driver_conversion_source; driver_coverage_reconciliation; assigned_source_quantity; assigned_source_unit; assigned_source_quantity_source; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; product_package_fate_links; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Match actual accepted commercial gate to publisher/ISBN/edition/language/physical format and source equivalence. Reconcile copy/set/volume/carton hierarchy and actual mass/moisture/tare without parent-child double count or pages-to-copies inference. Record usable returns/unsold/damaged retained and actual waste separately; assign compatible original finished-copy demand/loss outside service. For allocated source assignment,retain source_all_exit_driver_records for every competing accepted transfer,external return,closing carry/unsold or damaged-retained stock,usable other exit and actual whole/fragment loss. Each mutually exclusive end-state/exit driver record has quantity,unit,basis,source,original-source/edition link,cohort/period and exclusivity key; reconcile intermediate return movements to their final state rather than counting both. Numerator and complete denominator must refer to the same compatible original-source cohort and driver basis. Denominator=sum these complete mutually exclusive records,including unsold/closing carry and useful exits,never accepted-only; missing destination coverage blocks allocated assignment.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); copies; sets; volumes; cartons; kg; actual condition units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_power | printed_textbook_trade | actual warehouse electricity and period drivers | Original physical-event,meter/scope/source and fate ledger | meter_id; period_start; period_end; opening_reading; closing_reading; energy_unit; equipment_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_user_driver; all_user_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter complete actual device/period coverage and causal all-user physical drivers,including idle/cleanup/unfinished duties. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_water | printed_textbook_trade | actual water source/outlets and contained stream | Original physical-event,meter/scope/source and fate ledger | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; actual_outfall; receiver; composition; composition_basis; composition_source; density; density_unit; density_source; temperature; temperature_unit; wet_book_or_solid_retained_exclusion; stream_exclusion_ids; evaporation_evidence; fate_basis; fate_source; transport_scope; treatment_scope; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual source/use/physical outlets,retention and composition/receiver with wet book/solid exclusions; no residual-to-liquid/air assignment. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual composition units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_materials | printed_textbook_trade | actual independent service material and unused return | Original physical-event,meter/scope/source and fate ledger | material_id; SKU; native_quantity; native_unit; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; external_receiver; stock_representation; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; actual_fate; fate_basis; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Close actual native supply/stock/returns; gross input S with independent same-scope usable outward output OR consumed-only S-return with matching output omitted. Inherited book materials are not new service supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_provider | printed_textbook_trade | completed external physical jobs and overlap | Original physical-event,meter/scope/source and fate ledger | provider_id; job_id; native_quantity; native_unit; completed_gate; completion_time; actual_operation; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; treatment_scope; upstream_dataset; overlap_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Verify actual native job completion and complete resource/asset/carrier/receiver scope; only proven own overlap removed. Printing/restoration/pulping intervention is outside this normal route and needs separate bounded review. | Item(s); actual provider units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_assets | printed_textbook_trade | full-life shared stock/handling assets | Original physical-event,meter/scope/source and fate ledger | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | Use complete actual asset lifecycle and compatible all-user/period lifetime driver attribution,observed life or history plus sourced remaining use/termination,sensitivity/update. No archived-book lifespan as asset life. | Item(s); actual compatible driver units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_transport | printed_textbook_trade | actual packed cargo/legs/carrier shares | Original physical-event,meter/scope/source and fate ledger | leg_id; origin; destination; carrier; period; stock_records_in_load; gross_load; gross_load_source; load_tare; load_tare_role; load_tare_source; packed_payload_state; net_packed_load; load_unit; distance; distance_unit; distance_source; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_scope; carrier_resource_scope; commodity_service_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; share_source; source; N | Measure actual packed load and route/native conversions with physical all-user shares; subtract only declared vehicle/noncargo tare,not book covers or cargo packing. Do not add cartons and their copies as separate loads. | kg*km; actual native leg units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_waste | printed_textbook_trade | actual whole/fragment/pack/cleanup exclusions | Original physical-event,meter/scope/source and fate ledger | event_id; publisher; ISBN; edition; language_format; set_id; volume_id; stock_record; material; product_or_package_scope; whole_or_fragment; native_count; count_unit; wet_mass; dry_mass; mass_unit; paper_ink_glue_cover_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleanup_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_state; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; actual_pulping_owner_if_any; commodity_loss_link; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh real exclusive whole books/fragments/packing/spent cleanup and retained liquid as composition audits linked to physical outlets. Actual receiving pulping/recycling if any requires real coverage,not assumption or automatic credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual component/count units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_species | printed_textbook_trade | actual direct substance and receiving medium | Original physical-event,meter/scope/source and fate ledger | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Identify actual direct source/substance/medium then measure or apply compatible supported activity/factor/composition/fate once. Discoloration,dampness,content or deficit alone is not release evidence. | kg; actual compatible activity units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | Attributed actual physical quantity / positive unique N once; accepted_service is 1 Item(s). | attributed quantity; N; protocol | quantity per reference flow |  |
| supply_stock | materials and unused_supply_return | S=assigned opening+true external net receipts-closing including recovered retained independent supplies. Choose gross INPUT S with separate same-scope matched usable OUTPUT OR consumed-only INPUT S-return omitting that output. Internal recovery is not receipt;no numeric S+return,double deduction or removal of nonreturned waste/spill upstream burden. Book merchandise returns and original covers are not service-supply credits. | opening; true net external receipts; closing including retained recovery; same-scope matched unused outward; representation; cp_materials | nonduplicated supplied/returned material |  |
| shared_life_share | resources/assets/providers | Compatible-period complete resource attribution=cohort physical driver/all-user driver. Full-life asset equivalent=compatible cohort driver/complete lifetime driver across users/periods,including manufacture,maintenance/cleaning,replacements and EOL. Evidence observed life or history plus sourced remainder/termination,driver units,uncertainty/sensitivity/update. Complete provider scope replaces covered own resources/assets rather than adding them. | actual period/resource scope; cohort/all-user/lifetime drivers/units; observed/history/remainder/termination/source; cp_assets | attributed complete resources/asset equivalents |  |
| finished_book_net_mass | nonexchange copy stock | Net finished-book mass=sum actual unique stock/package readings(gross-external packaging tare),converted once with native factor/unit/source and edition/sample representativeness. Covers/binding/ink remain product,not external tare. Use per-instance readings OR documented total,never total times copy/carton count again; parent set and its bound volumes are alternate views. Page count/nominal sheet mass alone cannot supply net copy mass. | edition/source-unit equivalence; unique stock records; gross/external tare; each/total; native mass factor/unit/source; sample representativeness; cp_books | net finished-copy mass,nonexchange audit |  |
| original_gate_assignment | commodity outside service | Use actual directly measured/traced assigned source quantity/unit/state/source and direct-assignment evidence; otherwise assigned source quantity=actual original-gate quantity*compatible source cohort driver/source all-exit driver with positive complete denominator,units,allocation method/source. Do not combine direct and allocated views. For allocated source assignment,retain source_all_exit_driver_records for every competing accepted transfer,external return,closing carry/unsold or damaged-retained stock,usable other exit and actual whole/fragment loss. Each mutually exclusive end-state/exit driver record has quantity,unit,basis,source,original-source/edition link,cohort/period and exclusivity key; reconcile intermediate return movements to their final state rather than counting both. Numerator and complete denominator must refer to the same compatible original-source cohort and driver basis. Denominator=sum these complete mutually exclusive records,including unsold/closing carry and useful exits,never accepted-only; missing destination coverage blocks allocated assignment. Match actual edition/source-unit and whole/fragment loss/state conversion with coverage owner/exclusive exits before once-only integration outside service; no fragments/pulp/pages-to-copy factor without real evidence. | originalgate quantity/unit/state/source; direct evidence OR allocation method/source/cohort/allexitdrivers/units; assigned source; edition equivalence; loss conversions/owner/coverage/exits/integration; cp_books | reproducible assigned finished-copy demand/loss quantity |  |
| packed_load_freight | packed_freight | For actual legs,sum[(actual packed payload native load*load-to-kg factor)*(actual distance*distance-to-km factor)*actual attribution share]/positive N. Cargo includes actual books/covers/binding and factory/additional cargo packing; subtract only evidenced vehicle/noncargo tare. Factors/shares carry compatible units/bases/sources and all-user drivers where allocated. Never add same parent carton and contained copies or net paper and complete bound book. | actual packed load/state or gross/noncargo tare; native distance; load/distance factors/units/sources; actual share/all-user drivers; N; cp_transport | kg*km per service reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_actual_identity | all exchanges | Verify actual concrete flow,state/gate,property/unit and medium before final use; actual configurations remain distinct. | Full detail/support proof |
| quality_source_copy | commodity stock | Actual publisher/ISBN/edition/language/format/source equivalence,count nesting,net/moisture/tare and exclusive unsold/returns/damaged retained/waste records,not title/page equivalence. | Original publisher/source,stock/weight/state/fate records |
| quality_complete | all duties | Complete original bound-copy commodity demand/loss integration outside service and actual resource/provider/carrier/full-life asset/receiving treatment scope once,with uncertainty and updates. | Originalgate/conversion/coverage/integration and meter/lifetime/receiver proof |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | printed_textbook_trade | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Measure actual lighting,lifting,picking,records equipment and assigned standby/cleanup. A preservation guide does not establish operated conditioned storage,printing machinery or restoration loads. Range evidence need: Need measured period/device scope and compatible causal all-user drivers; no power per ISBN,page or copy from paper labels or archival recommendations. Measurement evidence: protocol `cp_power`; original record basis Energy / kWh. The original amount constraint “Attributed actual metered electricity / N; cp_power.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `warehouse_electricity_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_power`; actual source-linked native records |
| premises_water | printed_textbook_trade | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Only actual premises/equipment housekeeping,not book washing,deacidification,humidification or paper manufacture. Real environmental abstraction must retain its source identity. Range evidence need: Require source/use and actual retained/collected/direct outlet evidence; damp or water-damaged books do not quantify service water supply,effluent or evaporation. Measurement evidence: protocol `cp_water`; original record basis Volume / m3. The original amount constraint “Assigned actual measured supply / N; cp_water.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `premises_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_water`; actual source-linked native records |
| actual_housekeeping_supplies | printed_textbook_trade | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Include actual native preparations,wipes,absorbents or filters when used. No preservative,fumigant,deacidification agent,book vacuuming or restoration solvent is prescribed by a collection-storage guide. Range evidence need: Need actual SKU/dry material/active-carrier formulation,stock/use/returns and native density/temp/conversion sources; mixed preparation and contents are alternate views,not double supply. Measurement evidence: protocol `cp_materials`; original record basis Mass / kg. The original amount constraint “Attributed actual native material supply / N; cp_materials.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `actual_housekeeping_supplies_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_materials`; actual source-linked native records |
| added_order_materials | printed_textbook_trade | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Only real new cartons,wraps,edge supports,labels or ties at wholesale. Printed covers,binding boards,glue,ink,endpapers,jackets and original manufacturer packing inherited with books remain commodity production outside service. Range evidence need: Require actual native Count/Area/Length/Mass stock,tare/material and conversion/source; no acid-free folder,archival enclosure or new wrapper per copy as a universal requirement. Measurement evidence: protocol `cp_materials`; original record basis Mass / kg. The original amount constraint “Attributed actual newly added material / N; cp_materials.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `added_order_materials_pe_film`; `added_order_materials_paperboard_carton`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_materials`; actual source-linked native records |
| external_physical_jobs | printed_textbook_trade | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Count only physically completed contractual native jobs with complete resource/asset gate. Actual hour,mass,area-time or freight services need corresponding native exchanges; licence/ISBN registration,price or margin is not a physical job quantity. Range evidence need: Need actual completion/unit and complete resource/asset/carrier/receiver coverage with overlap owner; procurement order or scan alone is not completion. Measurement evidence: protocol `cp_provider`; original record basis Count / Item(s). The original amount constraint “Assigned actual completed jobs / N; cp_provider.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_provider`; actual source-linked native records |
| full_life_assets | printed_textbook_trade | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Cover actual racks,supports,building,lifts/IT,pallets/crates through manufacture,maintenance/cleaning,replacements and EOL across all users/periods. A book shelf-life or archival lifespan is not a warehouse-asset driver. Range evidence need: Need compatible cohort/lifetime driver identities/units,observed life or history plus evidenced remaining use/termination/source,uncertainty/sensitivity/update; reusable-container return is not new manufacture. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Attributed complete asset equivalents / N; cp_assets.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| packed_freight | printed_textbook_trade | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Use actual packed cargo/legs and carrier/empty-running scope with exclusive commodity/service responsibility. Edition/carton nesting describes the cargo and cannot multiply the same books into several additive loads. Range evidence need: Need gross/tare/packed-payload role,actual distance and compatible factors/units/sources plus share/all-user evidence; page count,nominal capacity and price are not shipping mass or distance. Measurement evidence: protocol `cp_transport`; original record basis Mass * distance / kg*km. The original amount constraint “Assigned actual packed load-distance / N; cp_transport.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_transport`; actual source-linked native records |
| unused_supply_return | printed_textbook_trade | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Only actual unused independent service supplies with same-scope provenance and external receiver. Unsold books,useful publisher/buyer returns and retained reusable containers remain their own commodity/asset stock responsibilities,not this supply-return output. Range evidence need: Need native matching/state/quantity: gross input S with separate matched usable output OR consumed-only S-return input omitting that output,no numeric S+return,double credit or removal of waste supply burden. Measurement evidence: protocol `cp_materials`; original record basis Mass / kg. The original amount constraint “Assigned measured same-scope outward supply / N; cp_materials.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `unused_supply_return_detergent_return`; `unused_supply_return_pe_film_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_materials`; actual source-linked native records |
| actual_whole_book_waste | printed_textbook_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only actual discard decisions and waste-receiver gate. Unsold,obsolete edition,damaged retained copy,return or quarantine is not automatically pulping or physical book loss. Whole books include covers/binding/ink and any measured included pack,not repeated separated paper outputs. Range evidence need: Need exact edition/copy/set/volume scope,count/net book/pack tare/moisture/state and actual receiver/sourcegate loss mapping. An incomplete multi-volume set does not prove all remaining books were discarded. Measurement evidence: protocol `cp_books`; original record basis Mass / kg. The original amount constraint “Assigned measured actual whole-book waste / N; cp_books.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `actual_whole_book_waste_atomic_case`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_books`; actual source-linked native records |
| separated_book_material_waste | printed_textbook_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only actual accidental loose pages,cover/binding pieces or collected debris at a documented receiver,not planned pulping/shredding/restoration. Expand actual paper/ink/adhesive/laminate/material state; exclusive with the same whole book and wet cleanup outlet. Range evidence need: Need measured wet/dry/composite fractions,origin/edition and actual receiving treatment; fragment/pulp mass or pagination is not a copy count or a generic source-gate book yield. Measurement evidence: protocol `cp_waste`; original record basis Mass / kg. The original amount constraint “Assigned measured actual separated material / N; cp_waste.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `separated_book_material_waste_paper`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_waste`; actual source-linked native records |
| actual_pack_waste | printed_textbook_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only packing actually removed and handed to receiver. Cover,binding board,jacket or integral slipcase follows its actual product definition; do not automatically call book constituents external carton waste. Original retained cartons continue with merchandise. Range evidence need: Require actual product-versus-package scope,tare/material/contamination and whole/part exclusions,receiver/transport/treatment. Recycling markings or collection do not establish avoided paper production. Measurement evidence: protocol `cp_waste`; original record basis Mass / kg. The original amount constraint “Assigned measured separated package waste / N; cp_waste.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `actual_pack_waste_paper_pack`; `actual_pack_waste_metal_pack`; `actual_pack_waste_plastic_pack`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_waste`; actual source-linked native records |
| spent_housekeeping_solids | printed_textbook_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Conditional actually collected service-cleaning solids and their retained liquid/book dust/packing/chemical contamination. Contents are nonadditive composition audits; the same book fragments,wet-solid liquid or pack fractions cannot be physical outputs twice. Range evidence need: Need actual native supply link,dry material/retained-fluid amount/unit/state/source and gross/tare/net,stream exclusions and receiving treatment; no mandatory book vacuuming/filter dose or dust yield. Measurement evidence: protocol `cp_waste`; original record basis Mass / kg. The original amount constraint “Assigned measured actual spent solids / N; cp_waste.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_waste`; actual source-linked native records |
| contained_cleanup_liquid | printed_textbook_trade | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Only actual collected stream with real composition and receiver; not a paper-pulping,book-washing or restoration process by assumption. Liquid contained in whole wet book/material/absorbed-solid waste is not this second physical outlet. Range evidence need: Need actual volume/density/temperature with units,composition/state/source and exclusion/receiver/treatment/transport evidence. Moisture or wet mass deficit never supplies a wastewater quantity. Measurement evidence: protocol `cp_water`; original record basis Volume / m3. The original amount constraint “Assigned measured actual collected liquid / N; cp_water.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_water`; actual source-linked native records |
| actual_direct_substances | printed_textbook_trade | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Only actual measured or source-supported direct events with named substance and medium. Paper yellowing,mould observation,ink/adhesive content,odour and wet/dry stock deficit do not establish spores,dust,VOC,water-vapour or carbon release mass. Range evidence need: Require compatible measurement or actual activity/factor/composition/fate values,units,bases and sources; complete species-specific factors are not multiplied by fractions twice. Measurement evidence: protocol `cp_species`; original record basis Mass / kg. The original amount constraint “Assigned supported actual substance release / N; cp_species.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_species`; actual source-linked native records |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | Require actual own-account commercial B2B acceptance,all qualifiers and positive unique N. Book/copy/set/volume/carton Count or registration/payment is not service completion. |  |
| validate_physical_identity | edition and stock | Verify actual ISBN scope,edition/revision/language/format/print run,binding/pagination and physical source equivalence,copy/set/volume/carton nesting and actual completeness/mass/moisture/tare. No title/page-count equivalence or fixed copies-per-carton universal factor. |  |
| validate_ordinary | actual operation | No archival environmental numbers,housing/cleaning/repair prescriptions or book-life claims become ordinary merchant activities. Actual extra conditioning/printing/binding/restoration/pulping needs reviewed separate scope and complete inventory. | loc-book-storage |
| validate_chain | commodity outside addon | Require complete actual released finished bound printed educational-copy baseline including paper,printing/ink,cover/binding/adhesive,actual accessories and original pack,or missing production assembled once outside service. Original-gate quantity/unit/state/source,direct-or-allocated assignment,actual state/whole-part loss/conversions/exits/owner/already-covered loss and integration must match edition and physical source. For allocated source assignment,retain source_all_exit_driver_records for every competing accepted transfer,external return,closing carry/unsold or damaged-retained stock,usable other exit and actual whole/fragment loss. Each mutually exclusive end-state/exit driver record has quantity,unit,basis,source,original-source/edition link,cohort/period and exclusivity key; reconcile intermediate return movements to their final state rather than counting both. Numerator and complete denominator must refer to the same compatible original-source cohort and driver basis. Denominator=sum these complete mutually exclusive records,including unsold/closing carry and useful exits,never accepted-only; missing destination coverage blocks allocated assignment. |  |
| validate_fates_scope | all inventory | Actual unsold/useful return/damaged retained copy is not pulp waste; real discard/fragment receiver and full treatment must be evidenced. Whole/fragment/pack/retained-liquid streams and source assignments are exclusive. Verify native identities/support,conversion units/sources,all-user full-life asset/provider/carrier scope and actual direct species; no paper-content/odour/moisture-deficit release. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual concrete identity and quantitative review |
| downstream_use | Physical ordinary-ambient printed-textbook own-account wholesale add-on for complete released bound-copy commodity chain |
| allowed_use | Actual publisher/ISBN/edition/language/format/binding/source-copy stratum and count/net/moisture/tare,condition/period/accepted route |
| excluded_use | Standalone textbook footprint; ebooks/rights/newspapers/stationery; paper/printing/binding manufacture; restoration/archive treatment/pulping; retail/agency; pages/copy-to-service or monetary proxy |
| required_metadata | All qualifiers; actual source-edition equivalence/copy-volume-carton stock and real fates; originalgate assigned demand/state/loss/conversion/exits/coverage owner/integration; full resource/provider/asset/carrier/receiver scope |
| required_quality_disclosure | Unresolved actual identities/support,foreground quantities/Range evidence,edition/count/moisture/fate/source limits and lifetime/conversion uncertainty |
| update_trigger | Changed edition/ISBN/language/format/binding/physical source,carton/copy configuration,warehouse operation,provider/asset/carrier/receiver scope,acceptance or loss/fate evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-books | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61051; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 322printed books includes32210educationaltextbooks inside61051;classification only. |
| loc-book-storage | official_guidance | Library of Congress.Storing Your Books,Preserving Your Books,last updated2026-07-23; https://guides.loc.gov/preserving-your-books/storing | Qualitative structural support,handling/light/moisture condition context for collections. Numerical archival climate/housing/cleaning prescriptions are not imposed on ordinary wholesale; no universal lifespan or loss rate inferred. |
