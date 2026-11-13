---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wickerwork-cork-goods-cooper-ff9a5f21
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of finished oiled solid-beech chopping boards

## 1. Scope and Applicability

This PCR covers physical own-account B2B wholesale of supplier-complete finished oiled solid-beech kitchen chopping boards under ordinary ambient receiving, stock/condition control and handling to actual accepted commercial handover. Actual SKU, wood species/solid form, finished geometry, factory oil/finish state, net finished-board versus packaging/tare, moisture/condition and supplier/buyer acceptance evidence must be declared. No typical board size, density, mass or oil/moisture value defines the commercial service.

Exclude wood production, kiln drying, machining/shaping/sanding, merchant oiling/coating/sanitising, food-contact testing, consumer handwashing/use, repair/refinishing/repacking, bamboo/engineered-wood/plastic substitution, retail/agency and storage-only. Real independent quantity/component measurements require actual method/state/sample provenance and their own native units/bases; no routine destructive assay or treatment is prescribed. A changed transformation or active conditioning needs fresh route review, while inherited finish/pack and ambient holding do not create a preservation/packaging node.

All inherited complete board/wood/factory finish/pack manufacturing including upstream embodied in lost commodity stays outside service. Actual complete originally finished source-gate assigned demand and identical baseline-stage/loss coverage must link separately once before full-chain readiness; actual merchant handling and receiving treatment stay here once. The manufacturer product example establishes solid beech and oil as finished commodity constituents, not a service oil recipe or a net-weight/moisture/durability/food-safety guarantee.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wickerwork-cork-goods-cooper-ff9a5f21 |
| classification_refs | CPC3 61046; narrower oiled solid-beech kitchenware31912 within group319 |
| covered_products | Actual ambient merchant-owned finished oiled solid-beech chopping-board B2B commercial consignment service |
| excluded_products | Raw/unfinished wood or other species/material substitution; manufacturing/drying/sanding/oiling/testing/washing/refinishing; retail/agency/storage-only |
| representative_product | Actual SKU/lot complete finished beech/oil board and supplied pack state through accepted commercial handover |
| production_route | Complete finished/oiled supplier gate -> ownership receiving/ambient stock/handling -> B2B acceptance/resale |
| market_state | Counted physical service; board pieces, finished net mass, component wood/water/finish and packaging remain separate commodity audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account finished oiled solid-beech chopping-board wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual complete finished solid-beech/oiled state, quantity/moisture/condition and commercial acceptance; no future food-use or durability guarantee |
| How long or cycle | Actual receipt/ambient holding/handling/acceptance interval with separate stock/reporting periods and asset phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account finished oiled solid-beech chopping-board wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; SKU_lot_board_ids; beech_species_solid_form_evidence; finished_geometry_condition; inherited_factory_oil_finish_state; complete_finished_supplier_gate; actual_board_pack_counts; net_board_pack_tare_basis; moisture_native_unit_basis_method; component_measurement_state_time_source; actual_ambient_condition_acceptance; actual_start_end_duration_unit; site_campaign_period; original_gate_assigned_demand_loss_owner |

N>0 counts actual unique final accepted commercial consignments after reversals, not board/pack pieces, kg, dimensions, area or oil content; failed/unfinished cross-period resources remain.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | Count actual final accepted merchant consignment IDs, not boards or orders/invoice splits; Count support alone does not identify the service. |
| finished_net_components | merchandise | Actual native Count/Mass and component property | Actual pieces; kg; separately declared component units | Finished net board mass excludes actual pack/tare but includes its real finished wood/retained water/oil state. If oil or moisture is independently measured, retain each component quantity/unit/basis/method/state/sample time/source; whole-board kg is not that component unit. No universal wood density, moisture regain or coating fraction. |
| native_conversion | actual exchanges | Compatible native property | Actual native unit | Document actual count-to-mass or density conversions only where evidenced, including factor/unit/basis/source and temperature/state; nominal dimensions×generic density cannot establish actual net product or freight mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-complete finished oiled solid-beech chopping board, species/form/finish/geometry, actual net/tare/moisture/state and supplied pack evidence |
| starting_condition_role | Inherited finished kitchenware for physical merchant service, not raw timber conditioning or new finishing |
| product_classification_scope | Narrower61046 woodenware wholesale of31912finished wood kitchenware; no bamboo or all wooden goods average |
| recursive_input_rule | Keep traded finished boards/retained factory oil/water/packs as non-exchange commodity stock; do not consume or recursively manufacture them as current service oil/wood/water. |
| upstream_dataset_requirement | Separate complete finished-board gate covers actual wood preparation/drying/shaping/finishing/oiling/release and inherited pack manufacture as applicable; sawnwood/raw beech or oil-only predecessor is incomplete. |
| disclosure | Actual SKU/species/solid form/finish/moisture and independent component bases/state/sample time/source, net/tare/condition/count/time/acceptance, complete gate demand/loss and service/asset/provider/freight/treatment owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_finish | finished board and packs | All commodity manufacturing including inherited factory finish and lost upstream remains outside service. Actual physical handling and declared receiver/treatment are counted here once; retained oil on merchandise is not current service oil. |  |
| source_example | board_wholesale | Actual manufacturer evidence establishes solid beech and oil in a finished kitchen board, distinguishing material/finish from package listing. User first-use wash/handwash or dimension/weight information does not prescribe warehouse treatment or numeric content. | ikea-beech-oiled-board |
| component_state | commodity audit | Moisture/finish changes, cracks/warping, actual discard/fragments and measured release are distinct. Independently measured components need native unit/basis/method/state/time/source; unknown finished mass deficit is not moisture, oil loss, wood loss or pollutant. |  |
| ambient_events | actual merchant events | Inherited oiling/pack/ambient holding does not activate operated preservation/finishing/packaging. Index all actual receipts/checks/cleaning/idle/failed/unfinished/dispatch/return and final acceptance across lot/campaign/period; changed drying/oiling/sanitation/testing needs scope review. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| board_wholesale | Finished oiled-beech board merchant receiving and acceptance | required | Actual own-account B2B acceptance of complete finished oiled solid-beech chopping boards | Physical receipt/state/stock/handling and commercial handover, without drying/oiling/food use | `accepted_service` |

Commercial consignments overlap warehouse campaigns and continuous support intervals. Link real receiving/visual-document state checks/cleaning/changeover/idle/rejected/unfinished events before accepted-cohort attribution. No every-board moisture/oil/food-contact test is assumed. Cracks/warping/contamination/pack damage require actual quarantine/return/downgrade/discard receiver paths, not presumed sanding/re-oiling repair. Real independent measurement samples retain removal/return/fate records. No-acceptance intervals retain resources, explained across periods before one per-N normalization.

### Process: Finished oiled-beech board merchant receiving and acceptance (`board_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual native quantity from cp_energy, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter intervals/all-user assignments including failed/idle work and matched warehouse scope; no energy-per-board or drying factor from inherited wood moisture.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose/meter/native volume and supplier scope with actual fates; board moisture measurements, oil content or wet packaging cannot quantify purchased water or wastewater.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual inherited/new packaging level/SKU and measured mass or evidenced count/area conversion; no fixed package weight or full new pallet per delivery.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU/purpose, net receipts/stock/return, composition and spent cleanup carrier/absorbed contents/source; finish present on a traded board does not prove a new lubricant purchase or released chemical.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable returns and complete disjoint burn/waste/loss with applicable density/temperature/conversion sources; receipts do not equal burned quantity by default.

###### Paperboard carton supplied for additional shipping protection (`new_outer_protection_paperboard_carton`)

Only an independently evidenced actual paperboard carton supplied for additional shipping protection in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `new_outer_protection`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Use only when the added package is established as a paperboard carton. Record construction, net paperboard-carton mass and provider gate. A plastic crate, wood box or composite carton with a materially different identity needs a separate card; inherited packaging and returnable assets are excluded. No fibre grade, recycled share or mass-per-carton is assumed.

- Selected flow: Paperboard carton supplied for additional shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `new_outer_protection_paperboard_carton` / accepted N once; preserve an already-per-reference quantity without dividing again.
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

###### Completed own-account finished oiled solid-beech chopping-board wholesale consignment (`accepted_service`)

One real merchant-owned B2B accepted consignment of supplier-complete finished oiled solid-beech kitchen chopping boards in actual supplied presentation. Actual SKU/species/form/finish/state/quantity qualify service, not manufactured boards or a food-use guarantee.

- Selected flow: Completed own-account finished oiled solid-beech chopping-board wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need actual board/pack IDs/counts, beech/solid form and factory finish evidence, net/tare/moisture/condition/time and commercial gate. No board=consignment, fixed dimensions, net mass, moisture range or oil dose.

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

###### Discarded finished oiled solid-beech chopping board (`discarded_board_packs_atomic_case`)

Conditional on independently recorded actual Discarded finished oiled solid-beech chopping board. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain identity evidence decisions under `discarded_board_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded finished oiled solid-beech chopping board
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity from cp_boards, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_boards`

Range evidence need: Need actual disposition/native quantity/state/net-tare/receiver treatment and original-finished-gate equivalence; a visual defect or wet mass change alone is not discarded board kg or oil/wood loss.

###### Collected oiled solid-beech chopping-board fragment (`discarded_board_packs_beech_board_fragment`)

Only an independently evidenced actual collected oiled solid-beech chopping-board fragment in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `discarded_board_packs`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner.

- Selected flow: Collected oiled solid-beech chopping-board fragment
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `discarded_board_packs_beech_board_fragment` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_boards`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_boards`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

###### Discarded premises-cleaning wipe with retained contamination (`other_wastes_spent_wipe`)

Only an independently evidenced actual discarded premises-cleaning wipe with retained contamination in this process is covered. Record its own physical state, net kg, event/source and handover gate. Other states or receivers require their own identity decision `other_wastes`; this card is not a substitute for them. Do not infer occurrence or zero from missing records. Activate only for an actual independently collected transfer to a waste receiver, not for a component retained in a whole article, pack or mixed collected stream. Keep retained constituents as non-additive composition records. No opening, cutting, dismantling, deliberate drying, recovery yield or treatment route is prescribed. Treatment/transport coverage has one owner. Identify the actual wipe substrate and retained contamination at the receiver. A filter, loose absorbent or independently collected liquid is not this wipe. The spent whole mass includes retained contamination once; dry supplied wipe mass is only a component audit.

- Selected flow: Discarded premises-cleaning wipe with retained contamination
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned kg for `other_wastes_spent_wipe` / accepted N once; preserve an already-per-reference quantity without dividing again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require event-linked native kg, state/composition, receiver or provider gate, allocation records and exclusion links to all whole/component or matched-input records; use protocol `cp_fates`. No numeric default or conversion factor is supplied. A different native unit requires evidenced conversion before use.

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
- Amount rule: Actual native quantity from cp_releases, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need real source and compatible measured species or actual activity/burn/factor/composition/fate plus native conversions. Whole-board mass cannot substitute an independently measured oil/water component or species unit.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity from cp_releases, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need real source and compatible measured species or actual activity/burn/factor/composition/fate plus native conversions. Whole-board mass cannot substitute an independently measured oil/water component or species unit.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity from cp_releases, allocated and converted on documented compatible evidence per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need real source and compatible measured species or actual activity/burn/factor/composition/fate plus native conversions. Whole-board mass cannot substitute an independently measured oil/water component or species unit.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| event_shared | all service inventory | Assign direct event use first, then evidenced compatible physical shared drivers across ALL real users/periods including rejected/unfinished/idle work. Divide assigned accepted-cohort total by positive N once; no automatic equal-board/order or financial share. |  |
| asset_full_life | shared_assets | Use complete manufacture/maintenance/actual replacements/end-of-life with compatible actual used/lifetime drivers, observed history plus sourced evidenced remaining/termination and uncertainty/sensitivity/update. Choose one asset-equivalent or lifecycle-complete provider view, not both or repeated per-N. |  |
| supply_stock_returns | operating supplies | For actual native standalone SKU/state S=assigned opening+net external receipts-closing including retained recovery. Gross-with-outlets uses S/N and real matched external usable return; consumed-only uses (S-matched return)/N and OMITs that outlet. Internal loops stay stock, waste/loss retains upstream, no unrelated or negative netting; inherited finish cannot offset current equipment lubricant. |  |
| original_finished_gate | merchandise | Choose exactly one assignment view for each actual source lot/state: directly traced/measured assigned quantity with unit/state/source and source-to-exclusive-exit record evidence; OR Qassigned_target = Qsource_actual × Dtarget / Dall_exits, with Qsource actual quantity/unit/state/source, Dall_exits >0 and complete compatible source-exit records. Each accepted/useful-other-exit/return/closing-carry/proven-loss record has quantity/unit/basis/source/link and one target owner; Dall_exits equals the sum of all competing record drivers. If a target groups accepted demand with an attributed proven-loss share, identify those exclusive loss records and allocation evidence once, removing them from all other targets. Do not use accepted-only denominator, infer missing loss as zero, or overlay direct and driver-assignment views. Assigned/additional/baseline demand must match original unit/state after sourced conversion; original finished manufacturing stays outside service. Additional linked demand = actual required original-gate demand minus identical already-covered baseline demand/loss, matching stage/state once outside service. Raw wood or finish-only predecessors need missing finished-board stages assembled outside; no nominal mass/density/moisture/oil multiplier. |  |
| fate_views | all actual outlets | Whole finished-board/pack waste and wood/moisture/finish component audits, cleanup dry carrier+absorbed liquid/fragments and free liquid are non-additive receiver views. One treatment owner, useful board/finish/pack exits stay commodity audit, no automatic avoided-manufacture/recycling credit. Unknown source or receiver scope blocks complete-chain readiness. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | board_wholesale | accepted_service | Actual finished-board commercial acceptance | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; lot_ids; board_ids; species_identity; solid_form_evidence; finished_geometry; factory_oil_finish_evidence; supplied_presentation; manufacturer_release; complete_finished_gate; actual_board_quantity; board_unit; actual_pack_quantity; pack_unit; adopted_condition_quality; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | Verify actual finished oiled beech/solid form, merchant ownership/resale and final B2B acceptance with native quantities/state and agreed quality. Inherited finish evidence is not an oil purchase. | Item(s) | Each actual acceptance/reversal | Actual linked service/stock/reporting and asset periods | Actual merchant and commercial buyer gate | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_boards | board_wholesale | merchandise; discarded_board_packs | Finished board/wood-water-oil state and original-gate stock ledger | site_id; campaign_id; period_id; consignment_id; lot_id; board_id; event_id; event_time; time_zone; SKU; species; species_source; solid_form; form_source; length; width; thickness; dimension_unit; geometry_method_source; factory_finish_identity; factory_finish_source; net_finished_board_mass; board_mass_unit; gross_pack_mass; inherited_pack_tare; other_tare; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; count_to_mass_factor; count_factor_unit; count_factor_basis; count_factor_source; actual_measurement_method; calibration; board_count; board_unit; pack_count; pack_unit; component_water_quantity; component_water_unit; component_water_basis; component_water_method; component_water_state; component_water_sample_time; component_water_source; moisture_reading; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; component_oil_quantity; component_oil_unit; component_oil_basis; component_oil_method; component_oil_state; component_oil_sample_time; component_oil_source; component_wood_quantity; component_wood_unit; component_wood_basis; component_wood_method; component_wood_state; component_wood_sample_time; component_wood_source; sample_selection; sample_quantity; sample_unit; sample_representativeness; sample_removal; sample_return; sample_fate; temperature; temperature_unit; relative_humidity; humidity_unit; conditioning_state; condition_record; defects; pack_state; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragments; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; whole_component_method; whole_component_factor; whole_component_unit; whole_component_basis; whole_component_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; original_gate_quantity_source; original_gate_direct_record; assignment_view; traced_assigned_quantity; traced_assigned_unit; traced_assigned_state; traced_assigned_source; traced_source_exit_links; target_group_definition; target_exit_record_ids; target_driver_quantity; target_driver_unit; target_driver_basis; target_driver_source; target_driver_record_links; source_all_exit_driver_quantity; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; competing_exit_driver_records; exit_category; exit_driver_quantity; exit_driver_unit; exit_driver_basis; exit_driver_source; exit_driver_record_links; loss_owner_links; allocation_scope_basis; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Choose exactly one assignment view for each actual source lot/state: directly traced/measured assigned quantity with unit/state/source and source-to-exclusive-exit record evidence; OR Qassigned_target = Qsource_actual × Dtarget / Dall_exits, with Qsource actual quantity/unit/state/source, Dall_exits >0 and complete compatible source-exit records. Each accepted/useful-other-exit/return/closing-carry/proven-loss record has quantity/unit/basis/source/link and one target owner; Dall_exits equals the sum of all competing record drivers. If a target groups accepted demand with an attributed proven-loss share, identify those exclusive loss records and allocation evidence once, removing them from all other targets. Do not use accepted-only denominator, infer missing loss as zero, or overlay direct and driver-assignment views. Assigned/additional/baseline demand must match original unit/state after sourced conversion; original finished manufacturing stays outside service. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual pieces/kg finished state and separately declared component units | Each actual stock/movement/measurement/state event | Actual linked service/stock/reporting and asset periods | Actual supplier finished board/lot and original gate | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_energy | board_wholesale | electricity; fuel_supply | Actual warehouse meter and burn evidence | site_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_cleaning_failed_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual warehouse/support intervals and all-user shares; burn separately measured or reconstructed only with complete disjoint native fates and unexplained-loss investigation, not delivered-fuel or board moisture proxy. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel native units | Each actual interval/event | Actual linked service/stock/reporting and asset periods | All included service consumers | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_supplies | board_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | Actual service supply versus inherited finish ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; actual_equipment_or_facility_purpose; inherited_factory_finish_exclusion; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use real same-state service supplies/net receipts/closing/external returns and cleanup carriers, proving equipment/facility purpose separately from inherited board finish. Same-scope return netting keeps original input ownership and omits matched outlet. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each receipt/issue/return/stocktake | Actual linked service/stock/reporting and asset periods | Actual standalone service supply | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_assets | board_wholesale | shared_assets | Complete life and real consumer records | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate all actual warehouse/handling/reusable asset users and periods, full lifecycle and compatible used/lifetime drivers with sourced remaining use/termination; one asset or complete provider view. | Item(s) or actual lifecycle-native unit | Each asset event/period review | Actual linked service/stock/reporting and asset periods | All real users and full asset life | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_providers | board_wholesale | provider_services | Actual completed physical support and scope | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; actual_visual_document_measurement_scope; component_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage; changed_treatment_or_test_scope | Verify performed result/native unit and any actual independent measurement/sample resources; no merchant drying/oiling/sanitation/food-contact testing or consumer washing hidden in support. Reconcile direct/provider scope once. | Actual provider-native physical unit | Each actual completed result | Actual linked service/stock/reporting and asset periods | Actual external responsibility | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_freight | board_wholesale | freight | Actual finished-state cargo and real leg ledger | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; finished_board_mass; inherited_pack_mass; added_outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check; measurement_view; weigh_record_link; quantity_source; unique_load_id; load_count; quantity_each_or_total; each_load_quantity; each_load_unit; total_load_quantity; total_load_unit; vehicle_gross; vehicle_gross_unit; vehicle_gross_source; vehicle_gross_conversion_factor; vehicle_gross_factor_unit; vehicle_gross_factor_basis; vehicle_gross_factor_source; vehicle_non_cargo_tare; vehicle_tare_unit; vehicle_tare_source; vehicle_tare_conversion_factor; vehicle_tare_factor_unit; vehicle_tare_factor_basis; vehicle_tare_factor_source; cargo_pack_mass; cargo_pack_unit; retained_board_oil_moisture_basis; share_driver_source; share_scope; normalization_count_N; N_record_link | Choose actual measured packed cargo OR same-state vehicle gross minus ONLY actual vehicle/non-cargo tare. Retain all actual original/new cargo packaging and board-retained moisture/oil in payload; never subtract them as tare. Each unique load/leg uses one payload view. Record whether native quantity is EACH or already TOTAL: multiply an evidenced repeated-load count only for EACH, never again for TOTAL, and do not add component audit masses to whole payload. Convert real load to kg and real leg distance to km with factor units/bases/sources. Attribute each load-leg once by compatible complete all-user share, sum assigned kg*km across unique records and divide by accepted N once. Keep supplier-delivered/provider/empty-return scope non-overlapping. | kg*km or actual freight-native unit | Each included actual leg | Actual linked service/stock/reporting and asset periods | Actual merchandise/service/waste freight scope | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_fates | board_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual source/receiver mixed cleanup and free-liquid ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; actual_oil_water_wood_component_role; component_native_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | Measure real native source/receiver quantity/state including mixed carrier/absorbed contents/fragments and separate free liquid. Any independent oil/water/wood component needs own native unit/basis/method/state/time/source, and whole-board mass is not substitute. Whole-pack/component/solid/liquid views non-additive with one treatment owner. | Actual native mass/volume and independent component units | Each source/cleanup/receiver/outfall event | Actual linked service/stock/reporting and asset periods | Actual source and receiving service scope | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |
| cp_releases | board_wholesale | direct_species | Actual source/species/medium measurement or method | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_component_identity; native_component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual measured species/medium or compatible evidenced actual activity/factor with all native operands; whole-board mass/odour/biogenic content/residual alone is no release method. Independent component units/bases and complete factor/composition/fate are applied once. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg identified species with actual native operands | Each actual measured/modeled interval | Actual linked service/stock/reporting and asset periods | Actual source and receiving medium | per reference flow | Actual native records/state/method/calibration and coverage uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all service rows | Attribute actual direct and evidenced compatible all-user shares retaining failed/rejected/unfinished/idle activity, then divide assigned actual cohort total by positive accepted N once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference service inventory |  |
| board_stock_state | merchandise | Reconcile actual same-state board/pack stocks: opening+external receipts+buyer returns-closing-physical dispatch-supplier returns-useful other exits-actual discard-net sample removal=unexplained residual. Pair internal moves; measure finished net/tare/moisture/condition independently with uncertainty. If separate wood/water/oil components are measured, use each own native quantity/unit/basis/method/state/time/source and compatible non-overlap views, never infer component loss or emission from whole-board residual. | cp_boards | Audited real finished/component state and fates |  |
| source_gate_demand | merchandise interface | Choose exactly one assignment view for each actual source lot/state: directly traced/measured assigned quantity with unit/state/source and source-to-exclusive-exit record evidence; OR Qassigned_target = Qsource_actual × Dtarget / Dall_exits, with Qsource actual quantity/unit/state/source, Dall_exits >0 and complete compatible source-exit records. Each accepted/useful-other-exit/return/closing-carry/proven-loss record has quantity/unit/basis/source/link and one target owner; Dall_exits equals the sum of all competing record drivers. If a target groups accepted demand with an attributed proven-loss share, identify those exclusive loss records and allocation evidence once, removing them from all other targets. Do not use accepted-only denominator, infer missing loss as zero, or overlay direct and driver-assignment views. Assigned/additional/baseline demand must match original unit/state after sourced conversion; original finished manufacturing stays outside service. Independently compare actual required linked demand against identical baseline stage/loss coverage and add only missing compatible demand once outside; never overlay original manufacturing as this service input. | cp_boards; cp_consignment | Explicit separately linked complete finished-gate demand |  |
| actual_freight | freight | Choose actual measured packed cargo OR same-state vehicle gross minus ONLY actual vehicle/non-cargo tare. Retain all actual original/new cargo packaging and board-retained moisture/oil in payload; never subtract them as tare. Each unique load/leg uses one payload view. Record whether native quantity is EACH or already TOTAL: multiply an evidenced repeated-load count only for EACH, never again for TOTAL, and do not add component audit masses to whole payload. Convert real load to kg and real leg distance to km with factor units/bases/sources. Attribute each load-leg once by compatible complete all-user share, sum assigned kg*km across unique records and divide by accepted N once. Keep supplier-delivered/provider/empty-return scope non-overlapping. | cp_freight | Actual native freight per reference |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Use actual identified species/medium measurement or compatible actual activity/burn/factor, with native component or gas/concentration conversion operands and required composition/fate applied once. Complete factors not multiplied again; measured component oil/water is not automatically released and board mass/biogenic content is not species quantity. | cp_releases; cp_boards; cp_energy | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_finish | all rows | Resolve actual beech/solid form/finished oil state and each service/material/species/receiver native identity/support before final exchanges; Count support does not identify board or service. | Actual supplier/specimen identity and detailed support evidence |
| component_method | commodity and component measurements | Each independently measured wood/water/oil quantity has native unit/basis/method/state/sampletime/source and actual sample representativeness; no whole-board kg, nominal moisture or standard oil dose substitutes. | cp_boards; cp_fates; cp_releases |
| source_scope_life | all responsibilities | Keep complete finished gate and original-unit/state/source assigned/baseline demand outside, actual service/provider/receiver treatment once and all-user complete asset phases with sourced remainder. Disclose unknown residuals/fates and independent range gaps. | Actual coverage matrix, native measurements and lifetime proof |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | board_wholesale | Which supply point, AC/DC state, voltage and supplier dataset cover the meter record? Reconcile the listed AC row with any evidenced other supply; do not use the AC UUID for a different carrier. Meter real lighting, powered handling and business-support operations; no kiln drying, sanding, oil curing or food-contact test energy is part of this merchant route. Range evidence need: Need actual meter intervals/all-user assignments including failed/idle work and matched warehouse scope; no energy-per-board or drying factor from inherited wood moisture. Measurement evidence: protocol `cp_energy`; original record basis Energy / kWh. The original amount constraint “Actual native quantity from cp_energy, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `electricity_ac`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_energy`; actual source-linked native records |
| facility_water | board_wholesale | Does the supplier record establish treated tap water, or a different named water quality/source? Identify the supply state and gate; do not replace a non-tap-water supply with the tap-water card. Include actual facility sanitation/support water, distinct from inherited wood moisture and downstream handwashing. Consumer wash-before-first-use is not a merchant board-washing activity. Range evidence need: Need purpose/meter/native volume and supplier scope with actual fates; board moisture measurements, oil content or wet packaging cannot quantify purchased water or wastewater. Measurement evidence: protocol `cp_supplies`; original record basis Volume / m3. The original amount constraint “Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `facility_water_liquid_tap`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | board_wholesale | Obtain the package bill/specification, material or laminate identity and actual added-versus-inherited ownership. Determine each missing sleeve, seal, label, strap or support identity from that record; an integral composite is not several additive material exchanges. Record real new service-added cartons/film/straps/labels, not the manufacture of inherited retail wrap/labels or finished oil. Reusable handling/transport equipment belongs to lifetime service. Range evidence need: Need actual inherited/new packaging level/SKU and measured mass or evidenced count/area conversion; no fixed package weight or full new pallet per delivery. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `new_outer_protection_pe_film`; `new_outer_protection_paperboard_carton`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| operating_supplies | board_wholesale | Obtain the purchased SKU, formulation/SDS, supplied concentration, physical state, purpose and stock/issue records for the named cleaning or maintenance duty in this record. Identify the actual non-detergent material individually; do not prescribe a chemical, filter substrate or dose from this PCR. Expand actual equipment lubricants, cleaners, wipes, absorbents, filters and administrative consumables with native formulation and real use. Factory board oil is inherited commodity, never automatically current service oil; no sanding/oiling/sanitising or mandatory treatment is introduced. Range evidence need: Need SKU/purpose, net receipts/stock/return, composition and spent cleanup carrier/absorbed contents/source; finish present on a traded board does not prove a new lubricant purchase or released chemical. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `operating_supplies_synthetic_detergent`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| fuel_supply | board_wholesale | Which purchased fuel grade/formulation and supply gate are on the stock record? Identify any fuel other than the named diesel case and its native unit; obtain actual density before a volume-to-mass conversion. Keep real grade/native stock supply separate from burn and nonburned exits, checking whether hired handling/transport already covers the fuel. Range evidence need: Need opening/net receipts/closing/usable returns and complete disjoint burn/waste/loss with applicable density/temperature/conversion sources; receipts do not equal burned quantity by default. Measurement evidence: protocol `cp_supplies`; original record basis Volume / L. The original amount constraint “Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `fuel_supply_diesel_supply`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| provider_services | board_wholesale | Obtain the provider contract/completed-result record for each named duty in this record, with native billed physical unit and included resources. Identify the individual service result; inspection, cleaning and handling are different services, and price/hours cannot be relabelled as Item(s). Use actual completed storage/handling/visual or document condition checks/hygiene/maintenance and business support in native physical units. Supplier species/finish records do not establish a new merchant moisture assay, oil analysis or food-contact test. Range evidence need: Need performed result/unit and actual measurement scope plus full materials/energy/assets/freight/treatment coverage; consumer care instructions or a certificate alone is not performed service. Measurement evidence: protocol `cp_providers`; original record basis Count / Item(s). The original amount constraint “Actual native quantity from cp_providers, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_providers`; actual source-linked native records |
| shared_assets | board_wholesale | For each explicitly named asset in this record, obtain the asset register identifier, configuration and matching complete-lifecycle dataset. The missing decision is the individual asset/service identity and lifetime all-user denominator; a warehouse, forklift and pallet cannot share one Count exchange or inherit a default life. Cover actual buildings/racks/lifts/meters/ICT and reusable pallets/crates across all real consumers/periods through complete life stages. The traded chopping board is not a warehouse capital good. Range evidence need: Need manufacture/maintenance/actual replacement/end-of-life, compatible used/lifetime driver units, observed plus sourced remaining/termination and uncertainty/sensitivity/update; no universal asset life or full new crate per trip. Measurement evidence: protocol `cp_assets`; original record basis Count / Item(s). The original amount constraint “Actual native quantity from cp_assets, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_assets`; actual source-linked native records |
| freight | board_wholesale | For each actual inbound, outbound, return and waste leg, obtain mode/vehicle, temperature service, origin/destination, actual load and distance plus provider coverage. The missing mode/configuration prevents selection of one freight identity; never collapse unlike modes into one kg*km flow. Measure real transported boards including retained finish/moisture and actual package/tare scope for actual legs. Net board mass, wood-only dry mass and listed package mass differ; supplier-delivered and empty/return/shared scope has one owner. Payload includes actual original and newly added cargo packs and retained board moisture/oil; vehicle-gross calculation subtracts only vehicle/non-cargo tare. Range evidence need: Need actual load/state/tare, distance and native conversions/share sources; no area×thickness×universal-density or nominal kg-per-board cargo default. Measurement evidence: protocol `cp_freight`; original record basis Mass*distance / kg*km. The original amount constraint “Actual native quantity from cp_freight, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_freight`; actual source-linked native records |
| environmental_water | board_wholesale | Identify the actual abstraction point, water body/aquifer, location and measured source volume from intake permits/meter records. Surface water and groundwater require distinct source identities; no direct withdrawal is established by purchased water use. Record real extraction/location/purpose only for directly operated water supply; inherited board moisture or ambient uptake does not create a service withdrawal. Range evidence need: Need source meter/interval and extraction boundary with purchased water separate; never convert timber/board moisture content into litres withdrawn. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual native quantity from cp_fates, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | board_wholesale | Match the external return ticket to exactly one input SKU, state and native unit, and identify the receiver. Under consumed-only input accounting omit its matched return exchange; merchandise returns and closing inventory are separate audit records. Only real same-scope standalone SKU/state return matches service supply. Consumed-only accounting OMITs the matching return exchange; retained recovery/internal loops stay closing and traded boards/finish/pack returns remain commodity audit. Range evidence need: Need recipient/native transfer and matched original input/provenance; no original board-finish recovery netted against unrelated warehouse oil, no negative supply or automatic credit. Measurement evidence: protocol `cp_supplies`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_supplies, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_supplies`; actual source-linked native records |
| discarded_board_packs | board_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Use actual receiver quantities/composition of rejected cracked/warped/damaged boards, real fragments or mixed original packs. Whole finished board and wood/moisture/oil/pack component audits are non-additive; upstream finished manufacture stays outside service. Range evidence need: Need actual disposition/native quantity/state/net-tare/receiver treatment and original-finished-gate equivalence; a visual defect or wet mass change alone is not discarded board kg or oil/wood loss. Measurement evidence: protocol `cp_boards`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_boards, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `discarded_board_packs_atomic_case`; `discarded_board_packs_beech_board_fragment`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_boards`; actual source-linked native records |
| other_wastes | board_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Record actual spent wipes/absorbents/filters, equipment residues and added outer protection by native receiver state; dry carrier plus absorbed liquid/collected fragments is a mixed view, not duplicate whole-board or liquid waste. No board sanding waste is invented. Range evidence need: Need received mixed wet/dry mass and each carrier/absorbed liquid/fragment native unit/basis/source with composition and treatment owner; neither inherited oil presence nor new wipe purchase measures spent solids. Measurement evidence: protocol `cp_fates`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_fates, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `other_wastes_spent_wipe`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| contained_wastewater | board_wholesale | Obtain the independent transfer ticket for the actual outlet described in this record, including parent item/SKU, physical state, retained composition, receiver and treatment scope. Match it to one listed physical case; an unmatched part, fluid or contaminated mixture needs its own named identity, not this record ID as a waste flow. Record actual free liquid sent to treatment from real facility work, distinct from wood moisture, retained finish and absorbed cleanup solids. No wholesale board washing/oiling/food-contact sanitation effluent is assumed. Range evidence need: Need collected/received volume/composition/event/source and receiver/treatment scope; purchased water, moisture assays and wet wipe mass are not a wastewater-volume proxy. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual native quantity from cp_fates, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `contained_wastewater_aqueous_cleaning`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| water_outfalls | board_wholesale | Identify the direct outfall and receiving water/soil compartment, measured water amount and independently analysed pollutant species. A sewer transfer to treatment is not this outfall; the missing receiving compartment prevents a concrete elementary-flow selection. Only actual water crossing a direct environmental outfall belongs here; contained transfer is Waste and internal board/pack moisture change remains a state audit until actual fate is established. Range evidence need: Need actual location/interval native volume and composition/medium evidence; damp boards, stain or a cleaning incident does not prove direct discharge. Measurement evidence: protocol `cp_fates`; original record basis Volume / m3. The original amount constraint “Actual native quantity from cp_fates, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_fates`; actual source-linked native records |
| direct_species | board_wholesale | Identify each measured release at its source/event, chemical or particle-size identity, origin and receiving compartment using the emission/sampling record. Unknown species, unresolved particle fraction or unknown medium must remain a specific evidence gap; neither total chemical use nor stock loss supplies that identity. Expand actual supported chemical/species/particle-size/medium from real combustion/maintenance/cleanup or material incidents. Factory finish, wood biogenic content, odour, crack or board mass deficit is not automatically oil emission, VOC, dust, CO2 or water vapour. Range evidence need: Need real source and compatible measured species or actual activity/burn/factor/composition/fate plus native conversions. Whole-board mass cannot substitute an independently measured oil/water component or species unit. Measurement evidence: protocol `cp_releases`; original record basis Mass / kg. The original amount constraint “Actual native quantity from cp_releases, allocated and converted on documented compatible evidence per reference consignment.” applies separately only to identity/unit-compatible individual rows; it creates no category-total exchange and does not assign the original unit to a different material or service. Do not normalize an already-per-reference quantity again. Defined flow cards: `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Other actual states require the specific evidence decision above before any identity is assigned. This evidence record is not an exchange and cannot produce a category-total quantity. | `cp_releases`; actual source-linked native records |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commercial_acceptance | accepted_service | Require actual unique own-account final B2B accepted consignment N>0 and all species/form/finish/quantity/state/time/gate qualifiers, not board-piece or kg identity. |  |
| finished_components | merchandise | Verify finished net versus gross/pack/tare and any independent wood/water/oil native component units/bases/method/state/sampletime/source. Factory finish remains inherited commodity, not service oil; unknown residual is no loss/species or default zero. | ikea-beech-oiled-board |
| actual_route_exits | board_wholesale | Check actual ambient handling and crack/warp/contamination/sample/return/downgrade/discard paths; do not hide merchant drying/oiling/sanding/sanitation/food testing/consumer washing in providers. |  |
| original_finished_source | commodity interface | Require actual source quantity/unit/state/source and exactly one direct-trace or recomputable driver assignment. Recompute Dall_exits as complete accepted/useful-other/return/closing-carry/proven-loss record drivers, each with quantity/unit/basis/source/link; denominator positive and compatible, all records exclusively assigned, no accepted-only denominator or direct+driver overlap. Validate target loss shares once, original-unit/state conversions and identical baseline stage/loss coverage outside. Unknown records/loss cannot default zero. |  |
| all_users_asset | all service resources | Require actual events/periods/all consumers and complete asset manufacture/maintenance/replacement/EOL, compatible used/lifetime units with observed+sourced remaining/termination and one per-N/provider/asset view; no-acceptance burdens retained. |  |
| nonadditive_stock_fates | all actual inventory | Verify measured native supplies/return provenance/receiver/conversions, consumed-only matched-return omission and whole board/component/mixed cleanup/free-liquid/direct-species non-overlap with one treatment owner and no automatic credits. |  |
| packed_freight | freight | Validate unique load/leg IDs, EACH-versus-TOTAL/count provenance, measured packed-cargo or vehicle-gross-minus-noncargo-tare exclusive view, retained cargo packs/oil/moisture, native factor units/sources, complete allocation share and one final per-N normalization. |  |
| validate_concrete_identity_decisions | all inventory rows | Resolve each actual identity evidence decision to a physically specific card and native quantity or evidenced non-applicability. Evidence-checkpoint IDs are not exchanges. Missing occurrence, species, state, receiver or provider configuration blocks final data completion; no assumed zero. Whole streams and components, gross inputs and matched returns must remain mutually exclusive where required. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Finished oiled solid-beech chopping-board merchant service add-on, separately linked to complete finished source product and actual assigned demand/loss coverage |
| allowed_use | Actual supplier-complete oiled solid-beech kitchen board ambient own-account B2B consignment with compatible native finished/component/pack/state evidence |
| excluded_use | Standalone board footprint, raw wood or other materials; merchant drying/sanding/oiling/food-contact testing/washing; consumer food use; retail/agency/storage-only |
| required_metadata | Actual SKU/species/solid form/finish/geometry/board-pack IDs/count/net-tare/moisture and independent component-unit/basis/method/state/sampletime/source, actual condition/time/acceptance/site/period, complete finished-gate demand/loss and each service/asset/provider/freight/treatment owner |
| required_quality_disclosure | Identity/support/component/sampling/state and quantity uncertainty, inherited finish versus actual service supply, original-demand/baseline coverage/receiver gaps and unexplained stock, all-user lifetime remainder assumptions and independent range limitations |
| update_trigger | Changed wood species/form/finish/presentation/moisture/component measurement/acceptance or active drying/oiling/treatment, source gate/loss coverage, provider/asset/freight/treatment or native conversion method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-woodware-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),31912 wood kitchenware and61046/group319. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: finished wood kitchenware within a narrower woodenware merchant service, not31913 or raw timber manufacture. |
| ikea-beech-oiled-board | official_guidance | IKEA, PROPPMATT chopping board302.334.18, current public manufacturer product/materials/pack body. https://www.ikea.com/ma/en/p/proppmaett-chopping-board-beech-30233418/ | Qualitative actual finished solid-beech/oil form and net-versus-pack questions only; no dimension/weight/moisture/oil recipe/life/food-use assurance or consumer washing as merchant operation. |
