---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.thorium-dioxide
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Manufactured solid thorium dioxide factory supply accounting

## 1. Scope and Applicability

This PCR defines public civilian LCA methodology for product and waste accounting of manufactured supplied single-species solid thorium dioxide (ThO2, CAS 1314-20-1). Foreground starts with supplied manufactured compound awaiting first acceptance at this declared gate in its original identified container and ends at its fixed manufacturer factory delivery gate; species is unchanged and no manufacturing operation is prescribed. Upstream manufacture requires a matching supplier dataset; missing coverage is not zero burden. Aggregate actual receipt, storage, first acceptance and dispatch into one foreground unit while retaining stage meters. Keep whole-compound mass, elemental thorium mass and individual radionuclide activity separate. Mixtures, supply solutions, metal, alloys, ceramic articles, other thorium salts, depleted uranium products and waste-disposal services are outside this reference identity. Isotope labels alone do not establish another PCR identity. Mining/mineral concentrates reuse the existing ore method and are outside this compound gate. Purification/separation, enrichment, fuel and weapons manufacturing operations are excluded. This methodology establishes neither complete CPC coverage, radiation dose nor regulatory authorization. `merck-thoria-89170`, `jrc-sic-2007`, `epa-marlap19-2004`

“Single-species” identifies the named unformulated ThO2 product grade; it does not mean analytical 100% purity. Actual impurities, moisture and assay denominators remain measured whole-product components.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.thorium-dioxide |
| classification_refs | CPC 3.0 33630; narrower product and route boundary |
| covered_products | Already manufactured supplied single-species solid ThO2 at manufacturer plant; civilian gate accounting only |
| excluded_products | Depleted uranium; other thorium species; mixtures/solutions; ores/concentrates; metal/alloy/ceramic articles; waste-disposal services; purification/separation/enrichment/fuel and weapons manufacturing |
| representative_product | Solid thorium dioxide |
| production_route | Receipt, storage, first acceptance and dispatch of already manufactured compound at the manufacturer plant; compound manufacture lies in explicitly linked upstream data, not a zero-burden cut-off |
| market_state | Already manufactured single-species solid ThO2 in original identified containers; production mix at plant, finished product; actual composition and supply state declared with no purity default |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply first-accepted manufactured solid thorium dioxide at the fixed manufacturer factory gate |
| How much | 1 kg |
| How well | Manufactured single-species solid ThO2 plus CAS 1314-20-1; actual SKU/lot plus supplier and origin; immutable independently measured first-acceptance net whole-product event Q plus original Q0 and cohort links plus complete same-basis D_new/FG_new/L_new destinations and measured conversions; composition plus assay denominator plus free moisture and structural water; civilian intended use; original container/packaging plus tare; fixed receiving and manufacturer factory delivery gates plus first-acceptance criterion; native production mix at plant plus finished manufactured state; upstream manufacture/transport/packaging coverage; reporting period plus storage duration; electricity supply plus voltage; actual cleaning/incident scope; residue/waste receivers; radionuclide species plus activity unit plus sample basis plus reference date plus uncertainty and detection capability; no default purity or yield or recipe or energy intensity or activity |
| How long or cycle | Gate supply in one declared reporting period; storage duration recorded separately |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uranium depleted in U235 and its compounds, thorium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium depleted in U235, thorium or compounds of these products `f9e02fdf-db98-4802-9f1d-10d680f67065` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Manufactured single-species solid ThO2 plus CAS 1314-20-1; actual SKU/lot plus supplier and origin; immutable independently measured first-acceptance net whole-product event Q plus original Q0 and cohort links plus complete same-basis D_new/FG_new/L_new destinations and measured conversions; composition plus assay denominator plus free moisture and structural water; civilian intended use; original container/packaging plus tare; fixed receiving and manufacturer factory delivery gates plus first-acceptance criterion; native production mix at plant plus finished manufactured state; upstream manufacture/transport/packaging coverage; reporting period plus storage duration; electricity supply plus voltage; actual cleaning/incident scope; residue/waste receivers; radionuclide species plus activity unit plus sample basis plus reference date plus uncertainty and detection capability; no default purity or yield or recipe or energy intensity or activity |

Declare every qualifier in dataset metadata, reference-flow comments or equivalent fields. The selected native product is broader than this PCR: only its manufactured solid ThO2 subset is used, with production mix at plant and finished-product state preserved. The UUID neither fixes composition nor selects a ThO2 supplier inventory. Confirm the actual complete product name, route, physical state, composition, comments and provider endpoint; do not average unlike family members or substitute ores, natural/enriched uranium, a component, service or elementary emission.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_product | reference_product | Mass | kg | Q is the sum of independently measured net whole-solid-product kg at unique first-acceptance events at this fixed gate in the period, locked to immutable original event/lot records and original acceptance basis. Reconcile Q = D_new + FG_new + L_new for the same newly accepted cohort on that same basis: net dispatch after linked returns, closing accepted FG and all other net post-acceptance destinations, including actual net returns not already in D_new/FG_new, loss, scrap, downgrade, use and closing transfer to rework/WIP. Destinations must be mutually exclusive and exhaustive; measured composition/moisture/basis changes require explicit conversions. Only evidence that all other net destinations are zero permits Q = D_new + FG_new. Later losses never lower Q; opening already accepted FG, returns, retests, reacceptance, relabeling and internal transfers add no Q. Never-accepted WIP adds no Q; previously accepted material in closing WIP belongs to L_new. cp_reference_product records Q, original Q0 and unique events. All cards use per 1 kg reference flow. |
| compound_element_activity | reference_product, feed_tho2, waste_tho2, th232_air, th232_water | Mass; Radioactivity | kg; kBq | Whole-product mass includes measured impurities and moisture; free/structural water and assay denominator remain separate. A supply solution is not solid product; separate solute/carrier water and require distinct applicability review. Elemental thorium mass requires measured elemental assay with an explicit denominator. Product kg is not elemental kg or activity. Individual radionuclide activity requires sample fraction, date, unit, uncertainty and detection capability; do not assume daughter equilibrium. Divide Bq by 1000 for kBq. |
| energy_water | electricity, clean_water, waste_water | Net calorific value; Volume; Mass | MJ; m3; kg | Retain raw electricity/water meters; multiply kWh by 3.6 for MJ. Convert water volume to mass using measured density at relevant temperature/composition, not a database screening density. Distinguish water demand, collected wastewater, internal circulation, stocks and actual environmental discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplied already manufactured single-species solid ThO2 lot in original container awaiting this plant gate first acceptance; declare manufacture endpoint and receiving gate and first-acceptance criterion |
| starting_condition_role | supplied intermediate |
| product_classification_scope | Solid ThO2 subset of CPC33630, not its mixed complete category |
| recursive_input_rule | Purchased same-category feed links a distinct upstream provider; cancel internal movements/returns without new supply or credit |
| upstream_dataset_requirement | Require physical supplied-compound, transport, original packaging, electricity, water and actual waste-treatment background coverage; disclose each gap |
| disclosure | Manufactured single-species solid ThO2 plus CAS 1314-20-1; actual SKU/lot plus supplier and origin; immutable independently measured first-acceptance net whole-product event Q plus original Q0 and cohort links plus complete same-basis D_new/FG_new/L_new destinations and measured conversions; composition plus assay denominator plus free moisture and structural water; civilian intended use; original container/packaging plus tare; fixed receiving and manufacturer factory delivery gates plus first-acceptance criterion; native production mix at plant plus finished manufactured state; upstream manufacture/transport/packaging coverage; reporting period plus storage duration; electricity supply plus voltage; actual cleaning/incident scope; residue/waste receivers; radionuclide species plus activity unit plus sample basis plus reference date plus uncertainty and detection capability; no default purity or yield or recipe or energy intensity or activity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_supplier | gate | This PCR selects a partial supply gate boundary. Account from declared supplied-material starting gate to fixed manufacturer factory delivery gate; supplier burdens are not zero and endpoints prevent double counting of manufacture/transport/packaging. | merck-thoria-89170 |
| boundary_controls | gate | Include measured storage/dispatch and actual cleaning/incident energy, water, residues, wastewater and releases; a no-release sealed-container claim requires coverage evidence. Add every actual fuel, cleaner, packaging component, filter, wipe and pollutant as its own atomic row without positive defaults. | jrc-sic-2007 |
| boundary_identity | gate | Exclude purification/separation, enrichment and manufacturing operating instructions. Original-container supply does not establish complete upstream manufacture; report missing coverage separately. | merck-thoria-89170 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| gate | Supplied-product receipt, storage, acceptance, dispatch and environmental ledger | required | Already manufactured original-container solid ThO2 at manufacturer plant; retain stage meters; actual cleaning/incidents included | Foreground gate service | per 1 kg reference flow |

### Process: Supplied-product gate accounting (`gate`)

#### Inputs

##### Product flows

###### Thorium dioxide (`feed_tho2`)

Accept measured net solid ThO2 in the original identified container; retain lot composition, moisture, assay and upstream provider. Supply solution, ore and mixed-oxide feed are outside this identity.

- Selected flow: Uranium depleted in U235 and its compounds, thorium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium depleted in U235, thorium or compounds of these products `f9e02fdf-db98-4802-9f1d-10d680f67065`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual period boundary-crossing quantity under cp_feed_tho2; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed_tho2`
- Sources: `merck-thoria-89170`

###### Alternating current (`electricity`)

Meter the actual gate-service electricity. This identity applies only to grid-average consumption mix delivered to user at 1-35 kV. Confirm provider/geography/voltage and losses; no production-energy default.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual period boundary-crossing quantity under cp_electricity; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `jrc-sic-2007`

###### Paper box (`paperbox`)

Conditional actual supplementary folding paperboard carton made by cutting/folding/laminating. Weigh the whole carton; identity does not cover the primary container, lid, liner, rigid transport case or all packaging. Retain original-container packaging attribution and add each additional actual material separately.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual period boundary-crossing quantity under cp_paperbox; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paperbox`
- Sources: `jrc-sic-2007`

###### Treated tap water (`clean_water`)

Only actual metered cleaning water in an included incident or cleaning event; no routine positive demand assumed for intact-container supply. Supplier treatment/delivery boundary and measured density are required where volume enters a water mass balance.

- Selected flow: Treated tap water
- Flow property / unit: Volume / m3
- Amount rule: Collect actual period boundary-crossing quantity under cp_clean_water; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clean_water`
- Sources: `jrc-sic-2007`

#### Outputs

##### Product flows

###### Thorium dioxide (`reference_product`)

Exactly 1 kg of first-accepted net whole manufactured solid ThO2 at the declared manufacturer factory gate, excluding container and packaging. Retain lot assay and moisture. Q is the sum of unique first-acceptance event masses, reconciled with complete same-basis D_new/FG_new/L_new destinations. Later losses do not reduce Q; old accepted stock, returns, retests and reacceptance add no event quantity. This normalized reference row is an accounting coordinate, not an additional physical external output; actual net dispatch, losses and stocks are recorded independently once.

- Selected flow: Uranium depleted in U235 and its compounds, thorium and its compounds, alloys, dispersions, ceramic products and mixtures containing uranium depleted in U235, thorium or compounds of these products `f9e02fdf-db98-4802-9f1d-10d680f67065`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reference_product`
- Sources: `merck-thoria-89170`

##### Waste flows

###### Thorium dioxide powder residue (`waste_tho2`)

Only actual removed ThO2 powder residue transferred to a named external waste receiver; measure composition and whole residue mass. Contaminated wipes, filters, containers or mixed solids require separate atomic cards. Capture is not emission and internal return is not external waste.

- Selected flow: Thorium dioxide powder residue
- Flow property / unit: Mass / kg
- Amount rule: Collect actual period boundary-crossing quantity under cp_waste_tho2; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_tho2`
- Sources: `jrc-sic-2007`

###### Thorium-contaminated cleaning wastewater (`waste_water`)

Only actual collected cleaning wastewater sent to a named external treatment receiver. Weigh liquid or convert measured volume using measured density and retain dissolved/suspended material and activity separately. This transfer is not an elementary water release.

- Selected flow: Thorium-contaminated cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect actual period boundary-crossing quantity under cp_waste_water; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_water`
- Sources: `jrc-sic-2007`, `epa-marlap19-2004`

##### Elementary flows

###### thorium-232 (`th232_air`)

Conditional measured Th-232 crossing the site boundary to outdoor air, unspecified; reject workplace concentration, retained activity, gross-alpha total and long-term disposal as substitutes. Convert Bq to kBq by division by 1000; retain date, sample fraction, uncertainty, detection capability and actual release quantity.

- Selected flow: thorium-232 `08a91e70-3ddc-11dd-997f-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual period boundary-crossing quantity under cp_th232_air; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_th232_air`
- Sources: `epa-marlap19-2004`

###### thorium-232 (`th232_water`)

Conditional measured Th-232 actually released to fresh water. No proxy for liquid sent to treatment, unspecified water, groundwater, marine water or long-term disposal. Activity concentration must be reconciled with actual discharged mass/volume, sampling coverage, date and uncertainty; no equilibrium or default release fraction.

- Selected flow: thorium-232 `08a91e70-3ddc-11dd-9983-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual period boundary-crossing quantity under cp_th232_water; reconcile stocks and attribution then divide by Q. Missing measurement remains unknown, not assumed zero.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_th232_water`
- Sources: `epa-marlap19-2004`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | gate | Prefer measured direct attribution and subdivision; assess subdivision/system expansion before partitioning shared services by an empirically demonstrated physical relation. Specific energy/transport rules prevail. This PCR presumes neither co-products nor shares; cp_site records actual drivers and coverage. Activity is not an automatic allocation key. | ef-allocation-2021 |
| allocation_physical_ledger | gate | Retain unallocated physical mass, water and radionuclide ledgers separately from allocated burdens and provider allocation. Do not multiply measured product/waste output by burden shares. Internal links have equal quantities at both ends; returns, captured powder and waste shipment are not automatic co-products or avoided-burden credits. | ef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The authoritative Q is the independently measured net whole-product quantity summed once over unique first-acceptance events at the fixed reference gate, each cohort locked to its immutable original event and acceptance basis. Reconcile Q = D_new + FG_new + L_new for that same complete cohort and basis: D_new is net dispatch after linked returns, FG_new is closing accepted FG, and L_new is all other net post-acceptance destinations including actual net returns, loss, scrap, downgrade, use and closing rework/WIP, without overlap. Locate returned parcels once in FG_new or their actual L_new destination after deducting them from dispatch. These are mutually exclusive exhaustive net states, not gross movements. Record measured composition/moisture/basis conversions; only independently evidenced zero other destinations permits the two-term form. Opening FG, internal transfers, returns, retests and reacceptance never add Q; later losses never lower it. Acceptance Q is an event account, not another external physical output added to dispatch, waste or stocks. Retain independent actual-period mass, water, elemental and isotope-activity records without deriving activity from the mass bridge. Actual failed/rework services within the declared unchanged-species gate retain their causal cohort burdens; they imply no permitted manufacturing or transformation operation. Later services retain original positive Q0; zero/missing original quantities and incomplete event/destination evidence prohibit normalization.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed_tho2 | gate | feed_tho2 | meter and acceptance record | receipt lot and container; supplier manufacture endpoint; upstream burden vector; gross/tare/net kg; calibrated scale; assay denominator; free moisture; receiving date; raw/WIP stock and cohort | Weigh or independently verify receipt net mass from traceable gross/tare or calibrated net records; reconcile physical receipt separately from upstream burden and gate first acceptance. | kg | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_electricity | gate | electricity | meter and acceptance record | submeter start/end; kWh; meter multiplier/resets; time intervals; actual supply voltage/geography; losses coverage; standby/cleaning load; causal shared driver and cohort | Read calibrated submeter over the complete gate cycle; subtract verified counter readings with multiplier/reset correction; retain actual bills and convert kWh to MJ by 3.6; apply evidenced exchange-specific allocation. | MJ | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_paperbox | gate | paperbox | meter and acceptance record | box construction; supplier batch; measured net mass; stock receipts/issues/scrap; original packaging coverage; lot/cohort; scale calibration | Weigh actual folding paperboard boxes or use verified count times measured representative box net mass; reconcile stock issues and packaging already included upstream; keep every other packaging component separate. | kg | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_clean_water | gate | clean_water | meter and acceptance record | cleaning event; actual water supplier/treatment boundary; meter start/end; m3; density at actual temperature/composition; stock and circuit; cohort | Meter actual cleaning-water supply over the matching event; record source and delivery boundary; use measured density only for the separate water-mass reconciliation. No routine positive demand is presumed. | m3 | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_reference_product | gate | reference_product | first acceptance ledger | immutable lot/event id; first-acceptance time/criterion; independently measured gross/tare/net whole-product kg at that event; original acceptance basis; net D_new and linked returns; FG_new closing accepted stock; disjoint L_new loss/scrap/downgrade/use/net-return/closing rework-WIP destinations; opening raw/WIP/FG; gross transfers/retests/reacceptance; actual failed/rework services within scope; assay/moisture and measured basis conversions; uncertainty; locked Q; original cohort Q0 | Use calibrated scales and independent first-acceptance records; deduplicate immutable event/lot identifiers and lock Q to their measured net masses. Reconcile complete same-cohort same-original-basis Q = D_new + FG_new + L_new, with mutually exclusive exhaustive destinations. Subtract linked returns from dispatch and locate their remaining net destination once in FG_new or actual L_new; never add gross loops or reacceptance to Q. Exclude packaging and previously accepted events from new Q; preserve separate physical stocks/external movements and original Q0. | kg | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, immutable events, complete same-basis destination records, analyses and completeness evidence |
| cp_waste_tho2 | gate | waste_tho2 | meter and acceptance record | residue stream; species/assay; gross/tare/net kg; moisture; capture date; temporary stock; named external receiver; transfer manifest; cohort | Weigh the specific powder residue on calibrated scales and reconcile capture, interim stock and external transfer. Retained material is not release; other contaminated solids have separate cards. | kg | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_waste_water | gate | waste_water | meter and acceptance record | cleaning-liquid stream; collected volume/mass; density at actual temperature/composition; dissolved/suspended assays; radionuclide activity; storage; receiver and transfer date; cohort | Weigh collected cleaning wastewater or convert metered volume using measured density; reconcile temporary stock and treatment transfer; match laboratory samples and do not classify treatment-bound liquid as direct freshwater release. | kg | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_th232_air | gate | th232_air | boundary monitoring | radionuclide; compartment/subcompartment; interval activity and released quantity; sample fraction; reference date; blanks; detection capability; uncertainty; flow/coverage; unit | Retain competent-laboratory radionuclide results and actual boundary monitoring; match activity concentration to release quantity, not workplace concentration. | kBq | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_th232_water | gate | th232_water | boundary monitoring | radionuclide; compartment/subcompartment; interval activity and released quantity; sample fraction; reference date; blanks; detection capability; uncertainty; flow/coverage; unit | Retain competent-laboratory radionuclide results and actual boundary monitoring; match activity concentration to release quantity, not workplace concentration. | kBq | each lot/event and period totals | same declared reporting period | selected actual supply gate and all applicable stages | per 1 kg reference flow | original metrology, calibration, transfers, analyses and completeness evidence |
| cp_site | gate | scope and attribution | site ledger | actual route/boundary map; internal paired links; unique first-acceptance events and Q; complete same-basis D_new/FG_new/L_new with measured conversions; exchange-specific shared drivers; raw/WIP/FG opening/closing stocks; inherited and current burden vectors; original Q0 and prior-cohort services; actual failed/rework loads within scope; upstream coverage; no-flow evidence | Reconcile separate physical-before-allocation, acceptance-event/destination and burden-after-allocation ledgers; review actual causal drivers and provider coverage. Preserve actual failed/rework services and old-cohort Q0 without changing the locked acceptance event quantity. | kg; m3; MJ; kBq | each period | same reporting period | whole declared site/gate | per 1 kg reference flow | original balances, provider definitions, actual time/quantities and monitoring scope |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Keep complete-period raw boundary exchanges, including actual failures, rejects, rework, standby, cleaning, post-acceptance losses and zero-output intervals within the declared gate scope. Apply demonstrated exchange-specific shared drivers to burdens after preserving physical quantities. Reconcile raw/WIP/FG stocks and inherited vectors under acceptance_stock_vectors, then divide each exchange or burden assigned to the new first-accepted cohort by its original event-locked positive Q once. Old-cohort corrections retain original Q0. Later losses, return-to-WIP or reacceptance change no original denominator. The reference product is 1 kg as an event accounting coordinate, not an additional physical external output. Collection and card division denote this same final reporting operation, not a second division. | period records; Q; cp_site | normalized exchange | merck-thoria-89170; ef-allocation-2021; jrc-ilcd-lci-2010 |
| activity_reporting | th232_air, th232_water | Actual radionuclide released activity [kBq] divided by Q [kg]; convert Bq by division by 1000 and preserve date/sample basis and uncertainty. Individual isotope and total activity cannot double-characterize the same radiological burden. | activity; matched discharge quantity; Q | kBq per kg reference flow | epa-marlap19-2004 |
| acceptance_stock_vectors | all inventory rows | Q is the sum of unique independently measured first-acceptance event whole-product masses, locked on the original acceptance basis. Reconcile the exhaustive mutually exclusive same-basis D_new/FG_new/L_new bridge under acceptance_event_bridge; only independently evidenced zero other net post-acceptance destinations permits the two-term form. Preserve separate opening/closing raw/WIP/FG stocks with historical per-exchange burden vectors and original gate/product/route/state/cohort links. For each exchange e, reconcile opening inherited burden plus current attributable complete-period burden equals burden assigned to newly accepted output plus closing carried burden plus separately disclosed other-output or prior-cohort service burden. Actual failed/rework/handling/loss services within scope retain their causal burdens once. This is a burden identity, not a physical-output formula. Old FG dispatch, returns, retests, internal transfers and reacceptance neither enlarge Q nor reset inherited burdens; later losses never shrink Q. Accepted material returned to WIP carries its original event and vector. Later storage/dispatch/return services attach to the original accepted cohort and original positive Q0, never new Q. Missing inherited vectors or unresolved attribution keeps results incomplete. Zero or unevidenced Q/Q0 retains raw totals and all stocks/vectors, holds unit results and cannot borrow another denominator. | cp_reference_product; cp_site; complete exchange totals and stock vectors | once-only accepted cohort and conserved burden accounts | jrc-ilcd-lci-2010 |
| species_balance | feed_tho2, reference_product, waste_tho2, waste_water, th232_air, th232_water | Reconcile total material, water and elemental-thorium balances separately using measured composition and uncertainty. Do not treat thorium mass, compound mass and radionuclide activity as interchangeable. Any actual transformation outside the declared unchanged-species gate requires a separately reviewed production boundary with its actual species formation G_X and consumption C_X, supported by reaction stoichiometry and measured reaction extent; an element total or environmental allocation factor does not determine G or C. No such transformation is prescribed or assigned default quantities here. | independent masses; measured assays; cp_site; cp_th232_air; cp_th232_water | separate physical and activity reconciliations | epa-marlap19-2004; jrc-ilcd-lci-2010 |
| acceptance_event_bridge | all inventory rows | Lock Q to the sum of unique independently measured first-acceptance event whole-product masses. Reconcile Q = D_new + FG_new + L_new for the same cohort on the same original acceptance basis: net dispatch after linked returns, closing accepted FG and all other net post-acceptance destinations, including actual net returns/losses/scrap/downgrade/use/closing rework-WIP. The three terms must be mutually exclusive and exhaustive; put linked returned parcels in FG_new or actual L_new once, never an added gross-return term. Explicitly reconcile measured water/composition/basis changes. For 100 kg first accepted, 60 kg net dispatch, 30 kg closing FG and 10 kg loss, Q=100 kg; 100 attributed burden units/Q=1 unit/kg, whereas an incomplete 90 kg denominator gives an invalid 1.111... . Only demonstrated zero other net destinations permits the two-term bridge. Later loss/services retain original Q or Q0; internal/return/rework/reacceptance throughput adds no Q or external output. Actual event and destination evidence remains unresolved if incomplete; never assume zero loss or rewrite Q to force closure. This mass bridge does not infer isotope activity, equilibrium or releases. | cp_reference_product; original acceptance events; same-basis net destination records; original cohort quantities | auditable positive event Q and separate physical stock bridge |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | Species, CAS, composition, name, actual route and supply state agree; verify support references against actual property/unit chains. Identity does not establish background-basis compatibility. | merchant/lot originals, measured composition, provider definition and raw database metadata |
| measurement_quality | gate | Q is independently event-measured and positive, with complete mutually exclusive same-basis D_new/FG_new/L_new destinations and explicit measured conversions. Preserve original Q0, actual failed/rework loads within scope, and separate whole-compound mass, elemental quantities, isotope activity, container and moisture records. No universal purity, yield, consumption, clean-up efficiency, emission, activity or dose. | cp_reference_product; cp_site; epa-marlap19-2004 |
| coverage_quality | gate | Period/site/storage duration match all relevant receipts, dispatches, stocks and monitoring. Distinguish unmeasured, below-detection, absent flows and zero. Add separate rows for other actual isotopes, particulate fractions, cleaners and container wastes; do not add nested PM bins twice or remove actual biogenic CO2 for a GHG reporting convention. | cp_site; actual stream and monitoring register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Confirm the native whole-product reference chain and exact solid-ThO2 qualifiers together; missing chemical identity cannot be replaced by another oxide, ore, element or radioactive elementary flow. A broader native identity cannot establish the required chemical or provider evidence by itself. | merck-thoria-89170 |
| validate_balance | gate | Both renderings use 1 kg; every row and collection aggregation uses the same event-locked cohort Q or original old-cohort Q0; exactly one reference product coordinate. Reconcile actual physical mass/water/element ledgers including opening/closing raw/WIP/FG, external dispatch/returns and actual waste/releases within measured uncertainty; disclose residuals. First acceptance and internal rework/reacceptance are not additional external outputs. Keep this storage-inclusive physical account separate from the same-acceptance-basis mass bridge and independent isotope-activity records. Measure feed, product, waste, environmental outputs and stocks independently, never derive product as feed minus assumed waste. | epa-marlap19-2004 |
| validate_release | th232_air, th232_water | Match isotope and compartment/subcompartment/time; use Radioactivity/kBq rather than Mass/kg. Wastewater sent to treatment is not an additional site freshwater release. Separate treatment release and retention; cross-identify PM mass and radionuclide activity ledgers to avoid duplicate radiological characterization. Missing/unknown measurements remain unresolved. | epa-marlap19-2004 |
| validate_cohort | gate | Check event-locked unique first-acceptance Q against independent raw event/lot records and the complete mutually exclusive same-original-basis D_new/FG_new/L_new bridge with measured conversions. Later losses cannot reduce Q; opening FG, returns/retests, transfers to WIP and reacceptance cannot increase it. Require separate raw/WIP/FG physical stocks and conserved inherited/current per-exchange burden vectors, retaining actual failed/rework/handling/loss loads within scope. Later services use original accepted cohort Q0, not new Q. Q/Q0 zero/missing, incomplete destination/event evidence, missing raw data or inherited vectors blocks unit results while preserving raw totals and reviewable gaps. | jrc-ilcd-lci-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified supplied-gate data only after independent complete dataset acceptance; methodology authorship does not establish scientific review or dataset qualification |
| allowed_use | Bounded civilian solid-ThO2 supply LCA; disclose gate increment separately from results including upstream coverage |
| excluded_use | Whole-CPC proxy; other chemical/physical states; purification/separation/enrichment/fuel or weapons manufacturing; dose/safety/compliance determinations; waste-disposal service as product supply |
| required_metadata | Manufactured single-species solid ThO2 plus CAS 1314-20-1; actual SKU/lot plus supplier and origin; immutable independently measured first-acceptance net whole-product event Q plus original Q0 and cohort links plus complete same-basis D_new/FG_new/L_new destinations and measured conversions; composition plus assay denominator plus free moisture and structural water; civilian intended use; original container/packaging plus tare; fixed receiving and manufacturer factory delivery gates plus first-acceptance criterion; native production mix at plant plus finished manufactured state; upstream manufacture/transport/packaging coverage; reporting period plus storage duration; electricity supply plus voltage; actual cleaning/incident scope; residue/waste receivers; radionuclide species plus activity unit plus sample basis plus reference date plus uncertainty and detection capability; no default purity or yield or recipe or energy intensity or activity |
| required_quality_disclosure | identity gaps; upstream/site coverage; uncertainty/detection capability; attribution drivers; background property/quantity bases; physical and burden-ledger completeness |
| update_trigger | Changed species/supply state/actual route, provider or background definition; additional actual streams/monitoring; reference-UUID resolution; source/boundary/attribution revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-sic-2007 | official_guidance | European Commission, SIC BREF, August 2007; Scope PDF27/29, printed xxv/xxvii; section2.3 PDF48, printed18. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf | General chemical handling and storage inventory considerations only; no thorium-specific synthesis, BAT limit or factor. |
| merck-thoria-89170 | literature | Merck/Sigma-Aldrich official product89170, Thorium oxide; product identity/formula/CAS block, snapshot2026-10-13. https://www.sigmaaldrich.com/US/en/product/aldrich/89170 | One marketed ThO2 compound identity; merchant assay/activity values are not generic defaults or emission measurements. |
| epa-marlap19-2004 | official_guidance | US EPA et al., MARLAP, July2004, chapter19 sections19.1,19.3.2,19.3.8; PDF1,5,9-10 / printed19-1,19-5,19-9–19-10. https://www.epa.gov/sites/default/files/2015-05/documents/402-b-04-001c-19-final.pdf | Measurand, sample/date basis and measurement uncertainty reporting; no laboratory separation procedure or quantity default. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU)2021/2279, AnnexI section4.5, PDF/printed63. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Generic multifunctionality hierarchy and empirical physical relationship only; section-specific rules prevail; no default allocation share or complete PEF-conformity claim. |
| jrc-ilcd-lci-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment Detailed guidance, first edition March 2010, sections 7.4.2.6-7 and 7.4.2.9, printed pp.200-204 (PDF pp.220-224). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Complete operating-cycle coverage and raw-exchange scaling to matching reference output. First-acceptance deduplication, conserved stock/cohort burden vectors and nonpositive-Q hold are conservative PCR consistency rules derived from these principles; no literal handbook ledger formula, thoria production quantity or recipe is claimed. |
