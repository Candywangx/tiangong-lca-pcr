---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wallpaper-and-floor-coverings
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mixed-store counter retail service for sealed single rolls of self-adhesive vinyl wallpaper

## 1. Scope and Applicability

This method covers ambient receiving, upright roll storage/display, original-seal inspection, payment and counter handover of one homogeneous single-roll SKU of removable self-adhesive vinyl wallpaper in a physical non-specialized mixed-assortment store. The representative is Tempaper Moire Dots Black and White MD10642, UPC651784106428, SINGLE ROLL, nominal20.5in ×16.5ft. A dataset fixes this SKU, colour, supplier BOM/version, lot configuration and actual store. The manufacturer distinguishes double rolls and samples and requests matching lot numbers. Its vinyl and self-adhesive description does not disclose the complete facing/adhesive/release-liner/core/wrapping BOM or quantified LCI. Obtain that actual supplier record; do not assume pure PVC mass, nominal density, catalog shipping weight or nominal28/28.18sqft equals measured content.

Exclude paper-only wallpaper, textile carpets, plastic floor tiles/sheet flooring, double rolls, samples, cut-to-length retail, store unrolling/cutting/pasting, installation, wall preparation and downstream use/removal. Installation pattern-match losses belong downstream and cannot be applied as a retail loss factor. A genuine mixed assortment requires store activity/assortment evidence; non-exclusive branding or a wallpaper specialist does not establish this channel. The Target listing corroborates a real retail product, not a particular in-store route or inventory. This restricted route has manual handling, natural ventilation, no refrigerant or combustion plant serving this pool and no purchased heat; verify these conditions from equipment/utility inspections. Unknown or contrary facts require a reviewed route extension before completeness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wallpaper-and-floor-coverings |
| classification_refs | CPC3.0 62163; narrower proposal; classifications/mappings/cpc-3.0-to-pcr.yaml and its accepted ADRs govern actual mapping, not this manifest. |
| covered_products | Sealed SINGLE ROLL MD10642 self-adhesive vinyl wallpaper counter service in actual mixed-assortment store |
| excluded_products | Exclude paper-only wallpaper, textile carpets, plastic floor tiles/sheet flooring, double rolls, samples, cut-to-length retail, store unrolling/cutting/pasting, installation, wall preparation and downstream use/removal. Installation pattern-match losses belong downstream and cannot be applied as a retail loss factor. A genuine mixed assortment requires store activity/assortment evidence; non-exclusive branding or a wallpaper specialist does not establish this channel. The Target listing corroborates a real retail product, not a particular in-store route or inventory. This restricted route has manual handling, natural ventilation, no refrigerant or combustion plant serving this pool and no purchased heat; verify these conditions from equipment/utility inspections. Unknown or contrary facts require a reviewed route extension before completeness. |
| representative_product | MD10642 Black and White; actual supplier facing/adhesive/release-liner/core/wrap BOM and lot required |
| production_route | Receipt → upright original-roll storage/display → seal/lot inspection → counter/payment → final qualified handover; separate failures, returns, support and waste |
| market_state | Original sealed dry-to-handle single roll; uninstalled, uncut, unused |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Qualified counter retail handover of the defined complete sealed single roll |
| How much | 1 final-valid original-roll service, counted Item(s) |
| How well | Actual same SKU/colour/lot specification, original seal intact and customer acceptance valid; no implied installed area or safety approval |
| How long or cycle | One prospective declared store/SKU/configuration reporting pool including failures, idle and later corrections |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter retail service for one sealed MD10642 single roll |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual non-specialized assortment/store/channel; SKU/colour/lot and sealed single-roll configuration; supplier complete facing/adhesive/liner/core/wrap BOM and source vector; actual receiving quantities and transport gate; Q and original acceptance/return IDs; prospective pool dates; S/F/T/O ledger and component mode; actual meter/driver/provider scope; all asset models/lifetime versions; support contracts/raw denominators; actual waste receiver/constituents/treatment; absence or extension of cutting/wet/HVAC/combustion routes; unresolved identities and range evidence |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | service; failed_original; supplier_return | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q counts actual original complete single-roll service; N_F_whole and supplier handoffs are independent ledgers, never nominal roll area conversions. |
| power_conversion | electricity | Net calorific value | MJ | 1kWh=3.6MJ; use actual attributable K_trade before final/Q. |
| mass_carriers | receipt_paper; carry_bag; external_damaged; roll_waste; paper_waste; film_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Direct calibrated net kg; record moisture/state and measured density/temperature only if converting actual volume; do not infer kg from nominal length/area. |
| clean_area | floor_cleaning | Time | h | Measure floor_cleaning by signed actual purchased labour h only, excluding materials, equipment, travel and treatment; cleaned area-events are attribution drivers, never a direct area/order-count conversion to labour h. Measure physical exchanges independently, never multiply them by labour h again. |
| selected_energy_identity | split_support_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier original sealed rolls at actual store receiving gate; supplier manufacturing/inbound source retained per original |
| starting_condition_role | Foreground custody gate; incremental service excludes successful-goods S background, includes irreversible F |
| product_classification_scope | Narrower vinyl-wallcovering subset of62163, not carpets/paper/floor coverings or all channels |
| recursive_input_rule | Only failed_original/verified component replacements carry F supply background; named physical satellites do not recursively purchase goods. Internal transfers preserve source once. |
| upstream_dataset_requirement | Actual SKU/BOM whole/component vectors including receiving transport; utilities/first-use consumables, complete asset packages, bounded off-site services and compatible waste treatment; deduplicate actual stages |
| disclosure | All module/provider boundaries, raw denominators/pools/versions, S/F/T/O owners, no installed-area function, remaining identity/quantity/coverage gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | all | Apply only the sealed single-roll route in section1. Any opened/part-used customer return is a distinct actual state, never a qualifying sealed sale. Quarantine it by original ID, measured whole-carrier kg, remaining face/liner/core/wrap quantities and recipient; complete its state-specific card/provider before dataset completeness. A full original package remains one exchange while all of its components share the same final source responsibility. | un-cpc62163; tempaper-moire |
| service_gate | service | Q is the count of distinct original roll IDs with final valid acceptance in the prospective same-store/SKU/configuration pool. Customer retention without qualified acceptance, refusal, repeat attempts, refund alone, internal transfer and lost stock are not extra service. Revocation removes the original ID from Q even without movement; a financial adjustment with valid acceptance leaves Q unchanged. Count each final-valid ID once; do not subtract revocations again. A later resale of the same roll corrects that original history, not another manufactured roll. | ghg-product-2011 |
| goods_responsibility | failed_original; service | At the same store receiving gate retain each original supplier vector V_s including complete facing/adhesive/liner/core/original wrap and upstream transport, with received quantity q_s in its native unit. Partition original responsibility S/F/T/O, sum fractions1 per original source: S final-valid customer goods; F irreversible retail failure including confirmed loss or retained external unaccepted goods; T named continuing supplier/internal custodian; O open stock. The incremental retail service excludes S production/inbound vector. failed_original includes F once; T/O carry the unassigned same source to their named future owner, never a zero or deleted burden. A downstream GOODS system may add S once separately. Receiving all goods is raw custody QA, not a second purchase input beside F. | ghg-product-2011 |
| component_gate | failed_original | A normal complete original roll remains one product. U_whole contains only original sources whose complete facing/adhesive/liner/core/wrap share one final S/F/T/O responsibility. If an opened pack has divergent component owners, remove its affected original source entirely from U_whole and failed_original, obtain supplier original component quantities/native units and component inventory vectors, and create each real component/state input card. That component card owns N_F_c_s=q_c_s*f_F_c_s in its own native unit and B_F_c_s=N_F_c_s*V_c_s; its amount N_F_c_s/Q links only B_F_c_s/Q, never a whole-roll identity. Original vectors and S/F/T/O must reconcile across all components; mass/count fractions cannot split an environmental vector. Without complete supplier vectors, concrete cards, protocols and bilingual sync the component mode is blocked. | ghg-product-2011 |
| custody_gate | supplier_return; external_damaged; roll_waste | Use goods-only stock: opening+receipts+all physical customer returns+internal receipts = closing goods+all gross customer handovers+physical supplier handoffs+internal exits+condemnation+confirmed missing+signed unresolved residual. Every physical event ID appears in one term; gross handovers already include never-accepted events. Revocation without movement only reclassifies an existing event. Condemnation moves goods internally to held-waste stock; waste dispatch removes held waste later, not goods twice. Reconcile held waste separately. Background T is not a physical transfer. supplier_return and external_damaged are named non-characterized physical custody satellites only; never exclude failed_original with them. External retained damage names recipient/state and its F or continuing T source, not automatic retailer waste. | ghg-product-2011 |
| support_gate | trade; custody; residual; capital; support | Cover all actual necessary premises, rack/trolley, lighting/fan, checkout/printer/payment, router/CCTV/admin computer, cleaning and off-site network/payment/admin service using the named cards and source ledger. Every complete lifecycle product package needs actual homogeneous model/BOM, installation, repair and terminal treatment inventories plus signed provider scope. It excludes operational electricity and other listed assets; actual included independent asset transport is removed from the separate transport module. Unknown model, boundary, quantity or package content blocks completion; no package may stand for unrelated summed repair masses. Additional actual model/formulation/waste state needs its own atomic card, protocol and aligned bilingual sync before completeness. | jrc-retail-2013; ghg-product-2011 |
| power_gate | electricity | Use at-point-of-use AC/MJ with actual provider voltage/geography/year/mix/loss gate. Sum direct disjoint meters and attributed shared source pools only. A submeter is subtracted only from a parent meter demonstrably containing it, once; an independent disjoint meter is never subtracted. Exclude contractor electricity only where the cleaning/provider package demonstrably includes the same measured activity; retain zero-sale/idle/closed consumption. No fuel/heat/refrigerant default is inferred from this identity. | ghg-product-2011 |
| consumables_gate | receipt_paper; carry_bag; paper_waste; film_waste | Record actual coated receipt-paper net kg excluding core and separate wrapping; coating remains paper. Fix one actual thermal-paper grade and one actual LDPE carry-bag configuration per pool. First use or irreversible unused condemnation/confirmed loss owns manufacturing and upstream transport once; never-used opening/purchased/closing/transfer/return stock carries its unassigned source. Already-used paper/WIP and reused bags carry original source-ID/version responsibility, not repeated manufacture or inbound. Supplier shipping cartons/film removed from S rolls during retail become separate source components only with supplier inventory vectors, or remain within an accepted complete mixed carrier whose treatment covers them. Do not charge full F pack and its source components again. | ghg-product-2011 |
| carrier_gate | roll_waste; paper_waste; film_waste | Waste cards are directly weighed consignment net kg at actual external dispatch, with distinct source/held-stock/event IDs. Do not adjust dispatch again by opening/closing stock. roll_waste is a whole condemned original vinyl-wallpaper roll carrier containing its actual remaining adhesive/liner/core/wrap; signed receiver acceptance must name actual constituents/state and compatible complete treatment. A photo/license alone is insufficient. Separately removed paper or film is disjoint; no constituent subtraction from direct whole-carrier net weighing. No default hazardous class, recycling credit, treatment yield or emission factor. Unknown waste, stock residual or provider coverage remains unresolved, never zero. Original-seal storage does not prove zero merchandise emissions: retain supplier packaging/barrier and site incident evidence; any actual escape/capture needs its specific species/state/path atomic card and original source responsibility before completeness, without nominal ventilation/VOC factors. | ghg-product-2011 |
| transport_gate | trade; custody; residual; capital; support | Counter handover excludes customer travel/home delivery/installation; original-goods inbound stays in its S/F/T/O receiving vector. Independent asset/repair/retirement transport belongs to its asset source then all historical fractions/version replacements. This PCR fixes capacity_unit=kg for allocation of unallocated shared trips ONLY when the actual contract, rated payload and dispatch loading evidence show mass-reserved payload capacity is the binding resource; use measured reserved gross payload kg including actual packaging. Volume-, pallet-position- or floor-space-constrained trips cannot substitute kg or choose another unit: complete a supported route extension with its own fixed capacity rule and atomic cards first. Already provider-attributed consignment quantities retain their actual native unit and allocation, with segment data only QA, not a new capacity fraction. Empty and stationary-idle reservations follow calc_transport. Additional replenishment/return/waste transport outside provider packages needs its actual atomic transport card before completeness. Compare constituent/event/time/asset/stage to exclude overlaps; different provider IDs alone prove nothing. | ghg-product-2011 |
| split_exchange_identity | all inventory rows | Each card has exactly one concrete exchange identity and one reference measurement property/unit; a unit group is not a second property, and auxiliary measurements are conversion evidence only. Labour cards no longer carry bundled materials/energy/equipment/wastes. Retained complete homogeneous assets, original packaged goods and real mixed waste carriers require matching actual whole-scope background/receiver treatment and full composition; heterogeneous collections or selectors are prohibited. An original exchange enters one core card or one split source only; reverse all old package characterization when replacing it and combine only disjoint raw quantities with identical identity/property/unit. Every other actual substance, part, fuel, refrigerant, emission and treatment gap requires a named bilingual card and process protocol; unknown is never zero or complete. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| trade | Receipt, display and counter transaction | required | Actual presence; conditional rows require evidence-backed absence or completed extension | Disjoint source and custody responsibility | 1 Item(s) |
| custody | Physical custody satellites | required | Actual presence; conditional rows require evidence-backed absence or completed extension | Disjoint source and custody responsibility | 1 Item(s) |
| residual | External residual carriers | required | Actual presence; conditional rows require evidence-backed absence or completed extension | Disjoint source and custody responsibility | 1 Item(s) |
| capital | Whole-asset lifecycle responsibility | required | Actual presence; conditional rows require evidence-backed absence or completed extension | Disjoint source and custody responsibility | 1 Item(s) |
| support | Bounded contracted support services | required | Actual presence; conditional rows require evidence-backed absence or completed extension | Disjoint source and custody responsibility | 1 Item(s) |
| split_support | Separate physical exchanges of cleaning or maintenance | conditional | Actual occurrence; prove presence or absence for each exchange | Disjoint resources, equipment and waste | service |

### Process: Receipt, display and counter transaction (`trade`)

#### Inputs

##### Product flows

###### Original sealed MD10642 single-roll wallpaper retail package (`failed_original`)

Only U_whole homogeneous whole-original-source F packages use N_F_whole; B_F_whole contains no component-split background. Bind the complete actual supplier inventory and receiving transport vector to each original package ID. Component-divergent portions are excluded and replaced under component_gate. This is a background source-equivalent product input, not a second physical receipt.

- Selected flow: Original sealed MD10642 single-roll wallpaper retail package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F_whole / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `tempaper-moire`; `ghg-product-2011`

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`electricity`)

At-use customer-side alternating-current consumption for receipt/display/counter and the named support devices. K_trade is attributed kWh from calc_shared after meter containment reconciliation; it never implies a generation mix.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * K_trade / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_power`
- Sources: `jrc-retail-2013`

###### Coated thermal receipt paper, actual fixed grade (`receipt_paper`)

Net actual first-used paper including coating, excluding separately weighed core and wrapping; retain roll/print job IDs and printed unused WIP source versions. No meter of paper becomes kg from a catalog grammage.

- Selected flow: Coated thermal receipt paper, actual fixed grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: (M_paper_first + M_paper_failed_unused) / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `ghg-product-2011`

###### Finished LDPE wallpaper carry bag, actual fixed configuration (`carry_bag`)

Conditional actual retail-added LDPE bag only. Weigh complete bag including actual integral handles/print; verify formulation/provider. No bag handover means documented absence, not an assumed mandatory bag. Supplier original wrap is outside this row.

- Selected flow: Finished LDPE wallpaper carry bag, actual fixed configuration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: (M_bag_first + M_bag_failed_unused) / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_consumables`
- Sources: `ghg-product-2011`

#### Outputs

##### Product flows

###### Counter retail service for one sealed MD10642 single roll (`service`)

Exactly one final-valid original sealed roll counter service; physical wallpaper production is not the service output vector. Apply service_gate and return_replacement.

- Selected flow: Counter retail service for one sealed MD10642 single roll
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `tempaper-moire`; `un-cpc62163`

### Process: Physical custody satellites (`custody`)

#### Outputs

##### Product flows

###### Sealed MD10642 single roll physically handed back to supplier (`supplier_return`)

Non-characterized physical custody satellite only. Actual signed supplier handoff and continuing T/F source responsibility are separate; T cannot generate this movement. Opened returns need a state-specific extension.

- Selected flow: Sealed MD10642 single roll physically handed back to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier_handoff / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources: `tempaper-moire`

###### Damaged unaccepted MD10642 roll retained by named external recipient (`external_damaged`)

Actual remaining whole roll carrier at external recipient, documented state and full remaining constituent quantities; not qualified service, not automatically waste dispatch. Bind its original F/T vector and recipient obligation; opened/part-used state requires its separate real card before completeness.

- Selected flow: Damaged unaccepted MD10642 roll retained by named external recipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: M_external / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources: `ghg-product-2011`

### Process: External residual carriers (`residual`)

#### Outputs

##### Waste flows

###### Whole condemned vinyl-wallpaper roll carrier for external treatment (`roll_waste`)

Actual whole net dispatched condemned original roll, including only its remaining adhesive/liner/core/wrap. Receiver must sign actual mixture acceptance and full treatment scope; no separately dispatched constituent counted here. F source input is distinct from this physical disposal.

- Selected flow: Whole condemned vinyl-wallpaper roll carrier for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_roll / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ghg-product-2011`

###### Discarded coated thermal receipt paper for external treatment (`paper_waste`)

Separate actual offcuts/failed receipts and retained printed stock condemned to this carrier, directly weighed at dispatch; coating compatibility and receiving treatment verified. No supplier core, clean board or roll liner silently included.

- Selected flow: Discarded coated thermal receipt paper for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_paper / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ghg-product-2011`

###### Discarded LDPE carry-bag film for external treatment (`film_waste`)

Actual separately collected bags/film from carry_bag only; independently weighed and treatment bound. Different original wrapping resin or mixed carrier requires another actual card, not this selector.

- Selected flow: Discarded LDPE carry-bag film for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_film / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ghg-product-2011`

### Process: Whole-asset lifecycle responsibility (`capital`)

#### Inputs

##### Product flows

###### Whole as-built naturally ventilated retail building (`building`)

One actual homogeneous model/BOM per card. F_building=sum_j f_j_h for matching physical instances only, using floor-area-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Whole as-built naturally ventilated retail building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_building / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Upright wallpaper-roll display rack (`rack`)

One actual homogeneous model/BOM per card. F_rack=sum_j f_j_h for matching physical instances only, using floor-area-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Upright wallpaper-roll display rack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_rack / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Manual roll-handling trolley (`trolley`)

One actual homogeneous model/BOM per card. F_trolley=sum_j f_j_h for matching physical instances only, using measured rated-payload-capacity-hours in kg*h under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Manual roll-handling trolley
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_trolley / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete retail lighting luminaire (`luminaire`)

One actual homogeneous model/BOM per card. F_luminaire=sum_j f_j_h for matching physical instances only, using floor-area-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete retail lighting luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_luminaire / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete electric ventilation fan (`fan`)

One actual homogeneous model/BOM per card. F_fan=sum_j f_j_h for matching physical instances only, using floor-area-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete electric ventilation fan
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_fan / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete checkout computer terminal (`checkout`)

One actual homogeneous model/BOM per card. F_checkout=sum_j f_j_h for matching physical instances only, using full busy plus disjoint reserved idle/closed device-seconds under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete checkout computer terminal
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_checkout / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete thermal receipt printer (`printer`)

One actual homogeneous model/BOM per card. F_printer=sum_j f_j_h for matching physical instances only, using full busy plus disjoint reserved idle/closed device-seconds under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete thermal receipt printer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_printer / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete electronic payment terminal (`payment_terminal`)

One actual homogeneous model/BOM per card. F_payment_terminal=sum_j f_j_h for matching physical instances only, using full busy plus disjoint reserved idle/closed device-seconds under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete electronic payment terminal
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_payment_terminal / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete network router (`router`)

One actual homogeneous model/BOM per card. F_router=sum_j f_j_h for matching physical instances only, using workstation-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete network router
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_router / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete CCTV security camera (`camera`)

One actual homogeneous model/BOM per card. F_camera=sum_j f_j_h for matching physical instances only, using workstation-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete CCTV security camera
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_camera / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Complete retail administration computer (`admin_computer`)

One actual homogeneous model/BOM per card. F_admin_computer=sum_j f_j_h for matching physical instances only, using workstation-hours under asset_allocation. Provider V_j covers manufacture/installation/actual repair and terminal treatment of this complete object, excluding operating electricity, other listed assets and independent transport added separately. Signed complete package inventory is required, not inferred from a purchase invoice. Building excludes all listed fixtures/electronics; the fixture cards exclude building. Actual absence of fan/trolley etc needs inspection evidence.

- Selected flow: Complete retail administration computer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_admin_computer / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

### Process: Bounded contracted support services (`support`)

#### Inputs

##### Product flows

###### Dry floor-sweeping labour only (`floor_cleaning`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Dry floor-sweeping labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q; cp_split_labour_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_support`
- Sources:

###### Contracted off-site network connectivity service (`network_service`)

One bounded actual provider service, contract/time/task IDs and complete server/office/energy/capital inventories at the declared external gate. Excludes store-side devices/energy in capital/electricity. Signed service quantity and source scope required; a fee or provider name is not an LCI. Attribute this card service quantity by the corresponding calc_support connection/attempt/task formula across every basket beneficiary; use its matching beneficiary-specific provider vector, preserving any existing provider attribution once. Provider shared/idle source pools follow calc_support, never price.

- Selected flow: Contracted off-site network connectivity service
- Flow property / unit: Duration / h
- Amount rule: H_network_h / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Contracted off-site electronic payment processing service (`payment_service`)

One bounded actual provider service, contract/time/task IDs and complete server/office/energy/capital inventories at the declared external gate. Excludes store-side devices/energy in capital/electricity. Signed service quantity and source scope required; a fee or provider name is not an LCI. Attribute this card service quantity by the corresponding calc_support connection/attempt/task formula across every basket beneficiary; use its matching beneficiary-specific provider vector, preserving any existing provider attribution once. Provider shared/idle source pools follow calc_support, never price.

- Selected flow: Contracted off-site electronic payment processing service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_payment_h / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

###### Contracted off-site retail administration service (`admin_service`)

One bounded actual provider service, contract/time/task IDs and complete server/office/energy/capital inventories at the declared external gate. Excludes store-side devices/energy in capital/electricity. Signed service quantity and source scope required; a fee or provider name is not an LCI. Attribute this card service quantity by the corresponding calc_support connection/attempt/task formula across every basket beneficiary; use its matching beneficiary-specific provider vector, preserving any existing provider attribution once. Provider shared/idle source pools follow calc_support, never price.

- Selected flow: Contracted off-site retail administration service
- Flow property / unit: Duration / h
- Amount rule: H_admin_h / Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-retail-2013`; `ghg-product-2011`

### Process: Separate physical support exchanges (`split_support`)

Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

#### Inputs

##### Product flows

###### Dry unimpregnated cellulose cleaning wipe (`split_cleaning_wipe`)

Only actual first-used dry wipes of this composition; do not infer consumption from floor area or count wet used-wipe mass as supply. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Dry unimpregnated cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete manual polypropylene-bristle floor broom (`split_cleaning_broom`)

One homogeneous complete broom model, excluding replaceable consumables and operating energy; use its persistent lifetime beneficiary fraction once. Repairs are separate event exchanges. Manufacture/initial installation only; excludes operation, maintenance and terminal treatment. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete manual polypropylene-bristle floor broom
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Alternating-current electricity for the identified support work (`split_support_electricity`)

Only measured support electricity not already characterized in any store/asset/provider row. Allocate a containing meter to disjoint intervals/sources; the same kWh cannot be added again. Record voltage/provider; no grid mix inferred. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

The selected flow uses the single Net calorific value energy property. The inventory keeps its stated measured energy unit; Units of energy supports1kWh=3.6MJ. Apply this conversion once when expressing a kWh record in reference MJ, including compatible-source aggregation; retain the original kWh meter numerator and source attribution, without adding another electricity demand.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Diesel light-commercial-vehicle operation for the identified support visit (`split_support_travel`)

Conditional candidate for actual documented diesel light-commercial vehicle visits only, measured vehicle-km including actual empty repositioning. Match complete vehicle-operation background and all beneficiaries; other propulsion/vehicle modes require distinct cards. Do not also add included fuel or movement from an existing transport/asset provider. Stationary idle energy absent from this provider needs its own named exchange. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Diesel light-commercial-vehicle operation for the identified support visit
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

#### Outputs

##### Waste flows

###### Used cellulose cleaning wipe with retained retail-floor soil (`split_used_wipe`)

Measure the actual dispatched whole carrier, including retained liquid/soil; document state and recipient acceptance. Exclude free liquid dispatched separately. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Used cellulose cleaning wipe with retained retail-floor soil
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Dry retail-floor sweepings at the actual waste handoff (`split_sweepings`)

One physically collected mixed solid carrier with recorded constituents and compatible treatment; not a sum of separate waste categories. Exclude independently dispatched wipes and retired tools. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Dry retail-floor sweepings at the actual waste handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Retired complete manual polypropylene-bristle floor broom (`split_broom_waste`)

Whole residual broom after prior removed parts; measured terminal net mass uses the same persistent lifetime beneficiary history as its acquisition. No duplicate constituent wastes. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Retired complete manual polypropylene-bristle floor broom
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | all | Declare the same-store/SKU/configuration reporting pool and all beneficiaries prospectively. Keep failure/zero-sale/closed periods. For each source k split active/idle/fixed X_k_c in the SAME source unit, reconcile their sum to the parent, and allocate each class separately. Counter/printer/payment active sources use measured beneficiary processing seconds. Their idle sources use reserved idle device-seconds and fixed sources reserved all-state device-seconds, never zero transaction seconds. Before each interval i map actual dedicated/reserved selling-and-storage floor area A_h_i in m2 to every beneficiary, including failed/zero-sale cohorts and reserved empty slots; sum_h A_h_i covers all eligible dedicated/reserved area. Common aisles follow these same shares. Reserved idle/all-state device seconds R_k_c_h=sum_i device_seconds_k_c_i*A_h_i/sum_g A_g_i; include closed stationary intervals and require positive known area totals. This map cannot be retrospectively changed to erase failures. Rack/display/lighting/building idle/fixed sources use measured occupied/reserved floor-area-hours. Router/CCTV/admin sources use reserved supported workstation-hours. Dedicated direct sources retain measured attribution. Never add unlike driver dimensions; reconcile all beneficiaries back to every original X_k_c. Positive source with zero/unknown required driver total blocks completion. | ghg-product-2011 |
| asset_allocation | capital | For each physical homogeneous asset j, f_j_h=e_j_h/L_j in the SAME exposure unit across all past/future beneficiaries. Building/rack/luminaire/fan use occupied/reserved floor-area-hours. Checkout/printer/payment use full lifecycle device-seconds: e_j_h=busy_device_s_j_h+reserved_idle_device_s_j_h over disjoint busy versus idle/closed intervals; busy seconds use actual per-beneficiary processing shares, idle/closed seconds use the prospective A_h_i area map in pool_allocation. Include zero-transaction reserved time; never sum overlapping fixed and active exposure. Router/CCTV/admin computer use reserved supported workstation-hours. Trolley uses rated payload-capacity-hours in kg*h: for each measured job i assign its actual rated C_j_kg*duration_i_h by each beneficiary actual loaded gross kg share; the same job reservation follows its empty return. Idle/closed capacity C_j_kg*idle_duration_i_h uses the prospective A_h_i shares. Require actual trolley rating, weighed complete loads and all interval reservations; no floor-area-hour proxy for its handling exposure. L_j is expected total lifetime exposure in the corresponding same unit. Keep sum f<=1 and unassigned exposure explicit. Lifetime/BOM/provider revision replaces EVERY historical numerator by f_new_j_h*V_new_j-f_old_j_h*V_old_j. At actual retirement E_j=sum_all_h e_actual_j_h and f_final_j_h=e_actual_j_h/E_j; replace all historical allocations. Residual1-sum_old_f is QA only. Manufacture never restarts; terminal carrier and asset-owned independent transport follow the same f once. | ghg-product-2011 |
| return_replacement | all | Late returns/revocations replace the ORIGINAL pool Q, all original operational/capital/transport numerators and S/F/T/O ownership versions, using actual event dates. Retract the old normalized version before installing the corrected one. Goods returning and resold keep one original supply vector. Retain zero-output pools as unnormalizable raw inventories and carry them in the prospectively fixed same-configuration reporting pool; entirely zero-output pools cannot publish a normalized1-service inventory. No economic credit or allocation by selling price. | ghg-product-2011 |
| completion_allocation | all | calc_completion is mandatory: restore every external normalized module to its evidenced raw original denominator/pool/version; compare actual constituent/event/time/asset/lifecycle stage and source-ID to remove only proven overlaps. Add compatible identical exchange/property/unit raw core numerators (including failed_original whole source plus separately completed component cards and AC) and disjoint external raw numerators row by row, then divide common Q once. Never add kg to MJ, raw to normalized quantities, S merchandise background to this service, or F twice. Until every necessary actual module has atomic bilingual cards, protocols, identity/provider evidence and compatible raw reconstruction, disclose partial incremental inventory and reject complete-retail-service use. | ghg-product-2011 |
| split_attribution | floor_cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | Prefer exclusive direct measurements. For shared cleaning events attribute each raw physical quantity by actual cleaned area-events across all beneficiaries; for maintenance use the repaired asset physical driver over all beneficiaries of the actual supported work-order cycle. Retain idle, failed, closed and zero-driver loads and their original carryover rules, never discard them using sales. New tool manufacture/retirement uses persistent lifetime ledgers and historical revision deltas; installed replacement parts are charged once to their actual maintenance event, not again as an original whole-asset acquisition. Do not reapply a share to an already-attributed source or charge terminal tools only to the retirement period. Remove any contained quantity from its old background or replace the entire package with this split; never characterize both. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | trade | failed_original; service | Original goods and acceptance ledger | original_id; SKU; lot; seal/state; nominal_spec; actual_length_m; actual_width_m; measured_gross_kg; facing_adhesive_liner_core_wrap_kg; supplier_BOM; q_s; V_s; source_id; source_version; receiving_gate; inbound_vector; q_c_s; V_c_s; f_F_s; f_F_c_s; source_component_id; source_fraction_S_F_T_O; S_F_T_O_owner; N_F_whole; gross_handover_id; return_id; valid_acceptance; revocation_date; pool_id; Q; U_whole; B_F_whole; component_native_unit; N_F_c_s; B_F_c_s | Barcode and original-ID scan at receiving/every movement; supplier lot-specific measured BOM and background boundary; calibrated scale/length instrument checks on received lots without counting destructively opened QA samples as sealed output; signed counter acceptance and dated replacement versions. service_gate; goods_responsibility; component_gate; calc_goods; one final Q | Item(s); kg; m | Every event; stock close each period | Complete prospective reporting period and historical corrections | Actual store; one homogeneous SKU/BOM pool | per reference flow | Supplier signed full component vector; calibrated instrument IDs; duplicate-free event trace and S/F/T/O conservation |
| cp_custody | custody | supplier_return; external_damaged | Physical custody and continuing responsibility | event_id; original_id; sender; recipient; timestamp; seal/opened/used_state; N_supplier_handoff; M_external; actual_remaining_component_kg; S_F_T_O_owner; opening; receipts; customer_returns; gross_handovers; closing; condemnation; held_waste; confirmed_missing; signed_residual | Scan each physical handoff; signed receiving evidence; scale-weigh actual remaining whole carrier; reconcile goods-only and held-waste ledgers independently. No movement is invented for acceptance revocation. custody_gate; raw stock balance is independent from corrected Q | Item(s); kg | Every handoff; period-end and later corrections | Complete prospective reporting period and historical corrections | Actual sending and receiving custody gates | per reference flow | Recipient/state signatures; original IDs; confirmed missing versus unresolved residual |
| cp_power | trade | electricity | AC meter and allocation source | meter_id; source_id; start_end_kWh; containing_parent; submeter_id; provider_gate; voltage; geography; year; X_k_c; driver_unit; d_k_c_h; all_beneficiaries; zero_idle_closed; directly_measured_trade_kWh; K_trade; processing_s_k_h; device_seconds_k_c_i; A_h_i; A_g_i; R_k_idle_h; R_k_all_h; prospective_area_map_id; interval_state | Calibrated interval meter readings at receipt/display/counter/device circuits and documented parent diagram; time logs and mapped occupied floor/workstation records; retain failures and closed intervals. power_gate; calc_shared gives K_trade; then3.6*K_trade/Q once | kWh; s; m2; m2*h; device*s; workstation*h | Every meter interval; reconcile each reporting period | Complete prospective reporting period and historical corrections | All measured store circuits and all source beneficiaries | per reference flow | Calibration certificates; parent containment; source and driver totals |
| cp_consumables | trade | receipt_paper; carry_bag | First-use consumables ledger | source_id; grade; resin; complete_BOM; roll_id; batch; received_net_kg; core_kg; wrap_kg; never_used_opening; purchases; never_used_closing; never_used_transfer_return; first_use_id; printed_WIP; customer_handover; used_stock; dispatch; prior_vector_version; M_paper_first; M_bag_first; M_paper_failed_unused; M_bag_failed_unused; first_use_net_kg; never_used_condemned_kg; never_used_confirmed_missing_kg | Calibrated tare-corrected net scale measurements and stock scans per grade; match print jobs/bags to initial source; supplier manufacture/inbound vector checked. Separate never-used stock from used/printed stock. calc_consumables; originals carried through reused/WIP versions without repeat background | kg | Every receipt/first use/dispatch; period close | Complete prospective reporting period and historical corrections | Declared grade/configuration at actual site | per reference flow | Supplier grade/BOM; tare calibration; first-use and destination reconciliation |
| cp_waste | residual | roll_waste; paper_waste; film_waste | Actual dispatched waste carriers | consignment_id; source_id; original_id; constituent_state; gross_kg; tare_kg; W_roll; W_paper; W_film; held_opening; generation; held_closing; confirmed_missing; signed_residual; receiver; acceptance; treatment_vector; treatment_transport_scope | Calibrated whole-consignment weighing at external handover, tare separately verified; receiver signs actual materials/state and compatible treatment boundary. Whole direct carrier weighing excludes independently removed components already. W=actual gross-tare; divide Q once; held-stock balance is QA only | kg | Every dispatch and held-stock close | Complete prospective reporting period and historical corrections | Actual store collection point and external receiver | per reference flow | Weigh tickets; signed constituent acceptance; disjoint source/events; treatment and transport inventory |
| cp_assets | capital | building; rack; trolley; luminaire; fan; checkout; printer; payment_terminal; router; camera; admin_computer | Whole-asset lifetime and version ledger | asset_j; model; serial; actual_BOM; package_scope; N_j; V_old_j; V_new_j; old_version; new_version; installation; repair_event_id; terminal_carrier_kg; removed_parts; independent_transport; provider_inclusions; beneficiary_h; e_old_j_h; e_new_j_h; L_old_j; L_new_j; f_old_j_h; f_new_j_h; actual_retirement; E_j; prior_pool_Q; delta_j_h; e_actual_j_h; capacity_unit; trip_t; segment_s; X_t_s; moving_source; idle_source; reserved_capacity; segment_km; idle_hours; d_t_s_h; provider_original_allocation; transport_event_id; F_building; F_rack; F_trolley; F_luminaire; F_fan; F_checkout; F_printer; F_payment_terminal; F_router; F_camera; F_admin_computer; busy_device_s_j_h; reserved_idle_device_s_j_h; A_h_i; A_g_i; prospective_area_map_id; trolley_capacity_kg; trolley_job_gross_kg_h; trolley_job_duration_h; trolley_empty_return_reservation; trolley_idle_duration_h; capacity_unit_kg; mass_constraint_evidence; reserved_gross_payload_kg_t_s_h; segment_km_t_s; idle_hours_t_s; originating_job_reservation | Inventory each physical asset/model and signed complete provider lifecycle vector; measured floor/workstation reservation, disjoint busy and idle/closed device-seconds, actual trolley payload rating, per-job gross load and reserved duration assigned by asset_allocation; measured terminal whole net kg or verified BOM reconstruction exclusively. Inspect replacements/repairs and all historical beneficiary exposures; never reuse a nominal lifespan default. calc_assets; final e/E replaces all e/L versions; transport follows same fractions once | Item(s); kg; m2*h; device*s; workstation*h; kg*h | Every acquisition/repair/revision/retirement; every beneficiary-period | Complete prospective reporting period and historical corrections | All actual historical/future asset beneficiaries and original sources | per reference flow | Signed BOM/scope, complete lifecycle inventories, calibration, prior allocation register and full historical correction receipts |
| cp_support | support | network_service; payment_service; admin_service | Contract-defined bounded support service | contract_id; provider; boundary; actual_model_inventory; constituents; source_id; original_denominator; pool_version; accepted_clean_area_each_pass; A_clean; X_k_c; d_k_c_h; all_beneficiaries; included_energy; included_capital; included_waste_treatment; exclusions; overlap_event; route_absence; processing_s; reserved_terminal_h; supported_workstation_h; reserved_connection_h; admin_task_h; A_h_i; A_g_i; prospective_area_map_id; H_connection_p; R_port_p_h; R_port_p_g; processing_s_a_h; processing_s_a_g; b_a_h; task_active_h_t; task_seconds_t_h; task_seconds_t_g; admin_reserved_idle_h; reserved_workstation_s_h; reserved_workstation_s_g; reserved_terminal_s_h; already_attributed_quantity_h; already_attributed_vector_h; H_network_h; N_payment_h; H_admin_h | Signed actual accepted dry-cleaning pass geometry; network reserved connection hours; distinct actual processing-attempt IDs including failed/reversed requests; actual admin task hours. Obtain provider original source totals and active/idle/fixed split, complete upstream/capital/waste scope and device/utility exclusions; contract price never substitutes quantity. calc_support and calc_completion; no duplicated store energy/capital | m2; h; Item(s); s; port*s; terminal*s; workstation*s | Every pass/task/period, including idle and failed work | Complete prospective reporting period and historical corrections | Actual store and declared external provider control volume | per reference flow | Signed service acceptance; original inventories/denominators; full beneficiary driver ledger; scope and overlap proof |
| cp_split_labour_support | support | floor_cleaning | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_goods | service; failed_original | Q=count(distinct final-valid original_id). For s in U_whole only, N_F_whole=sum_s q_s*f_F_s in Item(s) and B_F_whole=sum_s q_s*f_F_s*V_s; failed_original=N_F_whole/Q links ONLY B_F_whole/Q. Each divergent original source is excluded from U_whole, never partly retained on that whole-roll row. Each actual new component/state card separately owns N_F_c_s=q_c_s*f_F_c_s in q_c_s native unit and B_F_c_s=N_F_c_s*V_c_s, amount N_F_c_s/Q. Component background vectors enter calc_completion only through those component cards, not failed_original. Preserve sum_owner f_owner_s=1 for S/F/T/O and each original/component vector; T/O retain the same unassigned source. Missing component source or card blocks completion. | original_id; valid_acceptance; revocation_date; U_whole; q_s; f_F_s; V_s; q_c_s; component_native_unit; f_F_c_s; V_c_s; N_F_whole; B_F_whole; N_F_c_s; B_F_c_s; S_F_T_O_owner; Q | Q; N_F_whole/Q; B_F_whole/Q; component_card_N_F_c_s/Q; component_card_B_F_c_s/Q | ghg-product-2011 |
| calc_shared | electricity | For each active/idle/fixed source class use its fixed driver from pool_allocation: d_k_active_h=measured processing seconds for counter/printer/payment; d_k_idle_h=R_k_idle_h and d_k_fixed_h=R_k_all_h for their reserved device seconds. R_k_c_h=sum_i device_seconds_k_c_i*A_h_i/sum_g A_g_i. Other source classes use the explicitly listed same-unit driver. K_trade=sum_k_c X_k_c*d_k_c_trade/sum_all_h d_k_c_h plus disjoint directly measured trade kWh; sum_c X_k_c equals parent kWh and all beneficiary allocations reproduce each X_k_c. Never add class drivers. Convert MJ=3.6*K_trade; final electricity=MJ/Q. | X_k_c; processing_s_k_h; device_seconds_k_c_i; A_h_i; A_g_i; R_k_idle_h; R_k_all_h; d_k_c_trade; d_k_c_h; all_beneficiaries; directly_measured_trade_kWh; containing_parent; submeter_id; K_trade; Q | K_trade; MJ/Q | ghg-product-2011 |
| calc_consumables | receipt_paper; carry_bag | M_first=sum first_use_net_kg by distinct original source; M_failed_unused=sum never_used_condemned_kg+never_used_confirmed_missing_kg. Reconcile never_used_opening+purchases=never_used_closing+never_used_transfer_return+M_first+M_failed_unused+signed_residual; any unresolved residual blocks completion. Reconcile first-used source kg to customer handover+used stock+actual discard+confirmed missing+signed residual. Printed WIP retains original paper and actual printing-energy source numerator/version; withdrawal replaces its original ownership version, never charges source twice. Final rows (M_paper_first+M_paper_failed_unused)/Q and (M_bag_first+M_bag_failed_unused)/Q. | never_used_opening; purchases; never_used_closing; never_used_transfer_return; confirmed_missing; signed_residual; customer_handover; used_stock; actual_discard; printed_WIP; prior_vector_version; M_paper_first; M_bag_first; M_paper_failed_unused; M_bag_failed_unused; first_use_net_kg; never_used_condemned_kg; never_used_confirmed_missing_kg; Q | (M_paper_first+M_paper_failed_unused)/Q; (M_bag_first+M_bag_failed_unused)/Q | ghg-product-2011 |
| calc_assets | capital | For checkout/printer/payment e_j_h is busy plus disjoint reserved idle/closed device-seconds; for trolley it is measured rated-payload-capacity-hours in kg*h under asset_allocation; other asset units stay as specified there. For every asset j and historical pool h, f_j_h=e_j_h/L_j; F_row=sum matching_j f_j_h. At actual retirement E_j=sum_all_h e_actual_j_h and f_final_j_h=e_actual_j_h/E_j. For every historical h replace old numerator: delta_j_h=f_new_j_h*V_new_j-f_old_j_h*V_old_j, including asset-owned independent transport. No residual shortcut. Record old and new Q_h and replace normalized version only after complete raw numerator correction. Final physical product package quantity=F_row/Q; terminal carrier source amount in V_j multiplied by same f once. | e_j_h; L_j; e_actual_j_h; E_j; f_old_j_h; f_new_j_h; V_old_j; V_new_j; independent_transport; old_version; new_version; Q_h; Q; F_row; busy_device_s_j_h; reserved_idle_device_s_j_h; A_h_i; A_g_i; trolley_capacity_kg; trolley_job_gross_kg_h; trolley_job_duration_h; trolley_empty_return_reservation; trolley_idle_duration_h | F_row/Q; historical_corrected_numerator | ghg-product-2011 |
| calc_support | support | H_clean is actual purchased labour h attributed once using the all-beneficiary cleaned area-event driver under cp_split_labour_support and c_split_quantity; A_clean remains a driver only. For each shared connection-period p, H_network_h=sum_p H_connection_p*R_port_p_h/sum_g R_port_p_g, where R_port_p_h is reserved supported device-port-seconds assigned across beneficiaries by measured busy time plus prospective idle/closed area shares; one physical port second is partitioned once. For each actual processing attempt a, b_a_h=processing_s_a_h/sum_g processing_s_a_g; N_payment_h=sum_a b_a_h, including failed/reversed attempts once. Shared basket overhead is assigned to lines in the same measured processing-second shares; sum_h b_a_h=1 and sum_h N_payment_h equals actual distinct attempts, never one full attempt per SKU pool. For each administration task t, active task hours are split by actual task-seconds_h/sum_g task-seconds_g; shared idle/closed reserved administration hours split by reserved supported workstation-seconds_h/sum_g reserved supported workstation-seconds_g from the prospective area map. H_admin_h sums those disjoint active and reserved-idle service hours; never give full office hours to every SKU. Preserve already provider-attributed beneficiary quantities and source vectors without another fraction; these equations apply only to unallocated shared service quantities. Restore provider active/idle/fixed source numerators separately: network active/idle/fixed uses reserved port-seconds, payment active uses processing seconds and idle/fixed reserved terminal-seconds, admin active task-seconds and idle/fixed reserved workstation-seconds. Reconstruct a matching beneficiary-specific provider vector from those raw attributed source numerators before linking the attributed service quantity; do not multiply a common whole-contract vector by a different share. A positive provider numerator with zero attributed service output remains a raw zero-output module in the prospective same-configuration pool and blocks normalized package use until actual compatible service quantity exists or a separately evidenced availability-service card is completed; never discard it. Divide each attributed service quantity by common Q once. | accepted_clean_area_each_pass; A_h_i; A_g_i; H_connection_p; R_port_p_h; R_port_p_g; processing_s_a_h; processing_s_a_g; b_a_h; payment_attempt_ID; failed_attempts; reversed_attempts; task_active_h_t; task_seconds_t_h; task_seconds_t_g; admin_reserved_idle_h; reserved_workstation_s_h; reserved_workstation_s_g; already_attributed_quantity_h; already_attributed_vector_h; X_k_c; d_k_c_h; reserved_terminal_s_h; all_beneficiaries; Q; measured_purchased_labour_h; cp_split_labour_support | H_clean/Q; H_network_h/Q; N_payment_h/Q; H_admin_h/Q | ghg-product-2011 |
| calc_transport | trade; custody; residual; capital; support | For an unallocated shared trip first verify the mass-constrained gate in transport_gate; capacity_unit is kg, never selected later from alternatives. For trip t segment s split measured same-unit source X_t_s into moving/idle pools. Moving driver=actual reserved gross payload kg_t_s_h*segment_km_t_s; idle driver=actual reserved gross payload kg_t_s_h*idle_hours_t_s. Empty returns preserve the originating signed job reservation to beneficiaries despite zero actual payload t*km; stationary idle uses actual duration. Sum_all_h allocations reproduce each source and positive sources require positive known total drivers. Actual volume/position-constrained routes require the separate supported extension before this method is usable. Provider already-attributed quantity keeps its native unit and original allocation; never multiply another reservation fraction. Asset transport first attaches to V_j then historical calc_assets f; original-goods inbound to S/F/T/O. Bind actual specific transport cards before completeness. | trip_t; segment_s; X_t_s; moving_source; idle_source; capacity_unit_kg; mass_constraint_evidence; reserved_gross_payload_kg_t_s_h; segment_km_t_s; idle_hours_t_s; originating_job_reservation; all_beneficiaries; provider_original_allocation; asset_j; V_j; f_j_h; S_F_T_O_owner; Q | transport_raw_numerator; original_source_attachment | ghg-product-2011 |
| calc_completion | all | For each actual core or added module m and identical exchange/property/unit x, restore N_m_x=normalized_m_x*D_original_m from the verified original pool/version. If already raw use it directly, never multiply twice. N_complete_x=N_core_x+sum_m N_disjoint_m_x after proven source/event/stage overlap removal. I_x=N_complete_x/Q. N_core includes B_F_whole through failed_original, each B_F_c_s through its own completed component card, and AC once; exclude merchandise S. Add and bind missing actual atomic cards/protocols/provider vectors in both languages, including component-divergent source, off-site/repair/transport or new actual wastes. A name list alone cannot complete the system. | normalized_m_x; D_original_m; original_pool; original_version; N_core_x; B_F_whole; B_F_c_s; AC; N_disjoint_m_x; source_id; overlap_event; lifecycle_stage; Q | I_x=N_complete_x/Q | ghg-product-2011 |
| c_split_quantity | floor_cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_support_electricity; split_support_travel | For each exact identity r in its single unit, restore normalized source q_source with its original denominator D_source as x_raw=q_source*D_source; already-raw quantities are not restored again. Apply only missing attribution once under split_attribution, deduplicate source/event/version and reverse old package and historical versions. Sum disjoint raw quantities as X_r; q_r=X_r/Q, dividing by the final reference denominator once. Labour uses measured purchased h only, never old order counts/area; in-house hours are QA only. Calculate asset counts, material kg, electricity kWh, vehicle*km and waste-carrier kg separately; never add across properties or multiply already-measured physical quantities by labour hours. Unknown quantity/identity/background blocks completeness. | X_r; D_source; q_source; Q; cp_split_labour_support; cp_split_support | q_r |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | Every row has either verified actual flow/type/property/unit/provider scope or explicit unresolved identity and completion condition; no generic collection selector. | Direct native identity records and matching property/unit chains; supplier signed inventories |
| collection | all | Calibrated instruments, complete period/event coverage including zero/failure/idle; unknown is not zero; important amounts have actual records rather than invented ranges. | Calibration and source totals; failures and residual register |
| package | capital; support | Complete asset or bounded service package is permitted only with signed constituent/stage inventory, real quantity denominator and explicit exclusions; unknown package contents prevent completeness. | Actual models/contracts, original provider vectors/denominators and overlap matrix |
| stock | all | Separate never-used and used/WIP stocks, goods-only balance and held waste, physical handover and acceptance ledger; every original source conserves S/F/T/O. | Original IDs, signed owners and version replacement history |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all | Require actual channel/assortment, sealed SKU/lot/BOM and no unreviewed cut/opened/wet/heat/refrigerant route. All required qualifiers are mandatory dataset fields. Manufacturer/retailer specifications establish product feasibility only, not field quantity, supply LCI, safe-use approval or whole-leaf coverage. | tempaper-moire; target-moire; un-cpc62163 |
| validate_source | all | Check each original and component vector conservation, physical satellite scope, F actual product input, S excluded once, T/O named continuing owner; late versions replace complete original numerators and Q. Require actual final-valid ID count and independent gross physical stock balance. | ghg-product-2011 |
| validate_quantity | all | Reject missing/unknown numerator, nonpositive Q, orphan protocol/process/card, contradictory basis, mixed-unit addition or repeated allocation/composition fractions. Q=0 remains unnormalizable raw inventory. Every final card has reference_flow basis. No nominal installed coverage, shipping weight, density, lifetime, loss rate or treatment factor can replace measurement. | ghg-product-2011 |
| validate_complete | all | Verify complete support packages and actual necessary model/module coverage, source-specific active/idle/fixed driver totals, all historical e/L→e/E corrections, independent transport attachment, actual receiver mixture acceptance and calc_completion raw restoration. Unknown identity/provider/range evidence remains disclosed and blocks affected use; method candidate status is not scientific approval. Do not claim complete service while any actual required module/card/source remains unfinished. | ghg-product-2011 |
| split_completeness | all inventory rows | Check every exact identity and single reference property, all actual work-order constituents, disjoint measurements, old-package reversal, no duplicated source/asset terminal scope, all-beneficiary historical attribution and one final normalization. Unverified sources, uncarded actual exchanges, unknown quantities or a mere claim of contract inclusion are incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Incremental counter-service input for this exact store/SKU/channel/configuration only after completion gates |
| allowed_use | Disclosed actual complete incremental service; partial modules only with calc_completion and explicit incompleteness |
| excluded_use | Installed wall-area function, all62163, specialist/cut-to-length route, successful-goods S manufacture, unbound complete-business claims |
| required_metadata | Required qualifiers; original supplier and asset vectors; measured raw denominators/pools/versions; source/event deduplication; Q and channel evidence |
| required_quality_disclosure | Identity/provider and empirical-range gaps; temporal/geographic representativeness; actual measured uncertainty; no default numeric ranges in this candidate |
| update_trigger | SKU/BOM/lot/channel/route/provider/model changes; new sources; final acceptance returns; asset lifetime/retirement revisions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62163 | official_guidance | United Nations, CPC3.0, EN/2100/62163; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62163 | Classification includes272,32194,3691; only narrower actual self-adhesive vinyl-wallcovering retail subset. |
| tempaper-moire | handbook | Tempaper, Moire Dots Peel and Stick Wallpaper; https://tempaper.com/products/moire-dots-peel-stick-wallpaper | Primary manufacturer product/roll variants, vinyl/self-adhesive/lot distinctions; no complete BOM, quantified LCI or field amount. No installation waste factor adopted. |
| target-moire | handbook | Target, Tempaper Moire Dots Black/White, UPC651784106428; https://www.target.com/p/-/A-92367713 | Primary retail specification corroboration; mixed-retailer product listing, not proof of particular physical store availability or eligible route. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard(2011), chapters6 and9, PDFpp29–32,64–65; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit of analysis/reference flow and allocation hierarchy. The source does not mandate this PCR’s counter-service scope, causal drivers, S/F/T/O or lifetime equations; these are explicit candidate method choices with collection duties, no full-standard conformity claim. |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector(2013), EUR25998EN, PDFpp18–19; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail energy, water/chemicals, waste, transport, packaging, lighting and value-chain process identification only; no numerical defaults or benchmark limits. |
