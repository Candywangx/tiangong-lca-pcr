---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fish-and-other-seafood
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pickup retail services for supplier-packed chilled raw skinless boneless Atlantic salmon fillets

## 1. Scope and Applicability

This candidate covers only the explicit route below, not the whole 62124 leaf, and has no scientific approval. The measurement, responsibility and boundary rules are auditable author-designed methodology; official sources support qualitative screening only. No shelf-life, temperature or emission compliance threshold is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fish-and-other-seafood |
| classification_refs | CPC 3.0 62124; narrower; Non-specialized store retail trade services, of fish and other seafood (official broad scope) |
| covered_products | Only non-specialized-store pickup service for supplier-sealed, raw, chilled, never-frozen, skinless boneless Salmo salar fillets in ordinary air packs. Record farm/wild origin, species, cut, pack formulation, net-drained-mass procedure and acceptance criteria before pooling. Exclude whole fish, live organisms, molluscs, frozen/thawed, cooked, smoked, salted, vacuum/MAP, filleting, repacking and delivery routes. |
| excluded_products | whole fish; live organisms; other species; frozen or thawed; cooked; vacuum/MAP; onsite processing; delivery |
| representative_product | Pickup retail services for supplier-packed chilled raw skinless boneless Atlantic salmon fillets; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | receiving; cabinet chilling; shelf rotation; qualified customer pickup acceptance; returns and final disposition closure |
| market_state | non-live; raw; never frozen; skinless boneless fillets; supplier-sealed consumer pack; continuously chilled |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide partial incremental in-store pickup retail service |
| How much | Service corresponding to 1 kg qualified accepted net drained fish flesh |
| How well | Against prospectively declared actual pack, species, cut, integrity, temperature history and acceptance specification; failure is not service |
| How long or cycle | From retail receiving gate through accepted pickup and original-cohort return/fate reconciliation closure; actual times recorded |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Incremental pickup retail service for supplier-packed chilled raw Atlantic salmon fillets |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species Salmo salar; farmed or wild and origin; skinless boneless cut; raw never frozen; air-sealed pack and absorbent; drained-net-flesh method; actual acceptance specification; cabinet model and R290; site and period; same-configuration cohort; receiving-gate background and F owner; partial incremental boundary and completion modules |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_mass | retail_service; failed_goods_background; external_failed_goods | Mass | kg | Service uses net drained flesh mass; exclude tare, ice/free water, absorbent and free drip. Whole discarded pack mass is different and must not be used as denominator. |
| energy_conversion | electricity | Net calorific value | MJ | kWh * 3.6 = MJ; applies only to electricity; no provider or grid inferred. |
| whole_carriers | cleaning_water; cleaner; carry_bag; cabinet_asset; door_gasket; propane_topup; effluent; rejected_pack_waste; case_waste; bag_waste; gasket_waste; cabinet_waste; propane_recovery; propane_air | Mass | kg | Measure each card complete material/carrier and state; volume-to-mass needs measured density and temperature; constituent mass is not another whole carrier. |
| selected_freight_identity | loaded_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The selected road-freight identity uses the official goods-transport property/unit.1kg*km=0.001t*km; preserve the declared original quantity/attribution mode and convert only once. Actual vehicle, cargo conditions and provider stages remain independent applicability gates, with no assumed background or extra loaded share. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sealed chilled fillets at retail receiving gate; actual original-pack and inbound-transport backgrounds end here |
| starting_condition_role | Foreground service starting point, not a fish-production reference flow |
| product_classification_scope | Explicit narrower route within CPC 3.0 62124 |
| recursive_input_rule | No recursive cancellation of same-category retail service; purchased same-category service requires nonoverlapping stages and original gate ownership |
| upstream_dataset_requirement | Goods production, supplier consumer/outer packaging and inbound transport to the identical retail receiving gate are excluded for finally accepted goods and continuing reusable goods. Couple B for service-caused irrecoverable fish loss and nonaccepted external retention at that exact gate. Keep customer/supplier continuation responsibility and final fate for all F; unresolved F stays provisionally charged in B and blocks final completeness. Release the provisional charge only through evidenced reassignment, never disappearance. No automatic avoided-product credit. |
| disclosure | This is a partial incremental cabinet-service dataset. Before claiming total retail service, join measured common building shell and fit-out, building maintenance and end-of-life, room HVAC, general lighting, shelves outside the cabinet, checkout hardware and power, trolley/pallet-jack handling, shared toilets and cleaning, staff/administrative equipment and customer carrier-bag end-of-life modules on the same cohort/D. Require a scope matrix assigning manufacture/installation, operation, maintenance, terminal and transport to exactly one module; subtract a cabinet submeter only from a parent that actually contains it. Missing join is incomplete, never zero. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_gate | retail_service | Only non-specialized-store pickup service for supplier-sealed, raw, chilled, never-frozen, skinless boneless Salmo salar fillets in ordinary air packs. Record farm/wild origin, species, cut, pack formulation, net-drained-mass procedure and acceptance criteria before pooling. Exclude whole fish, live organisms, molluscs, frozen/thawed, cooked, smoked, salted, vacuum/MAP, filleting, repacking and delivery routes. | fao-fish-2013 |
| partial_completion | retail_service | This is a partial incremental cabinet-service dataset. Before claiming total retail service, join measured common building shell and fit-out, building maintenance and end-of-life, room HVAC, general lighting, shelves outside the cabinet, checkout hardware and power, trolley/pallet-jack handling, shared toilets and cleaning, staff/administrative equipment and customer carrier-bag end-of-life modules on the same cohort/D. Require a scope matrix assigning manufacture/installation, operation, maintenance, terminal and transport to exactly one module; subtract a cabinet submeter only from a parent that actually contains it. Missing join is incomplete, never zero. | jrc-retail-2013 |
| gate_background | failed_goods_background | Goods production, supplier consumer/outer packaging and inbound transport to the identical retail receiving gate are excluded for finally accepted goods and continuing reusable goods. Couple B for service-caused irrecoverable fish loss and nonaccepted external retention at that exact gate. Keep customer/supplier continuation responsibility and final fate for all F; unresolved F stays provisionally charged in B and blocks final completeness. Release the provisional charge only through evidenced reassignment, never disappearance. No automatic avoided-product credit. | jrc-retail-2013 |
| internal_environment | propane_air; effluent | Fish drip retained inside an intact pack remains goods mass, not wastewater; record free drip separately from accepted drained flesh. No live-stock survival balance applies. Internal water vapour/condensation is not an elementary emission. Ice/direct icing and meltwater are excluded by this dry-cabinet route; site evidence of icing invalidates route and needs a revised atomic inventory. A measured combined drain is one carrier, not its contained water/cleaner/fish constituents again. | fao-fish-2013 |
| extra_exchanges | all inventory rows | Determine presence/absence of every conditional card from walkdown, invoices, logs and provider scope. Unknown is unverified. Additional real chemical, packaging, replacement, emission or carrier requires its own named card, one-process protocol and bilingual synchronization before completeness. Treat actual whole equipment, sealed rejected packs and mixed drain carriers as complete exchanges; do not mechanically split their contained materials into duplicate flows. | jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cold_retail | Incremental chilled-fillet retail service | required | Only scope_gate route; determine presence/absence of all conditional cards | foreground | 1 kg reference flow |

### Process: Incremental chilled-fillet retail service (`cold_retail`)

#### Inputs

##### Product flows

###### Supplier-packed chilled raw skinless boneless Atlantic salmon fillets at retail receiving gate (`failed_goods_background`)

Measured receiving-equivalent B = B_f_service+B_f_provisional couples service loss and provisional nonaccepted F, not default terminal flesh kg. Successful goods downstream add B_s/D receiving-gate background; continuing ownership remains explicit. Never input all receipts again.

- Selected flow: Supplier-packed chilled raw skinless boneless Atlantic salmon fillets at retail receiving gate
- Flow property / unit: Mass / kg
- Amount rule: B/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_goods`
- Sources: `jrc-retail-2013`

###### Alternating current (`electricity`)

Cabinet compressor, fans, integral lighting, controls and defrost only; use point, voltage and provider not inferred.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 3.6*E/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: `jrc-retail-2013`

###### Potable tap water supplied for cabinet cleaning (`cleaning_water`)

Measured fresh supply only; excludes internal reuse and water contained in purchased cleaning solution.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_liquids`
- Sources: `jrc-retail-2013`

###### Aqueous sodium hypochlorite cleaning solution (`cleaner`)

Conditional on actual product/SDS, concentration, density and use record; other formulations require separate cards before completeness.

- Selected flow: Aqueous sodium hypochlorite cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: C/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_liquids`
- Sources: `jrc-retail-2013`

###### Low-density polyethylene customer carrier bag (`carry_bag`)

Only retailer-added bags; original supplier packaging stays at the goods gate; document absence if no bag supplied.

- Selected flow: Low-density polyethylene customer carrier bag
- Flow property / unit: Mass / kg
- Amount rule: P/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-retail-2013`

###### Complete self-contained propane refrigerated display cabinet (`cabinet_asset`)

Manufacture and installation of one identified cabinet including compressor, evaporator, frame, doors, shelves, integral lighting, controls and factory charge; excludes operation, repair and terminal treatment.

- Selected flow: Complete self-contained propane refrigerated display cabinet
- Flow property / unit: Mass / kg
- Amount rule: A*f/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`

###### Complete elastomer refrigerator door gasket (`door_gasket`)

Conditional real repair, not a proxy sum of unrelated repair parts; additional actual repairs require named cards and matching exits.

- Selected flow: Complete elastomer refrigerator door gasket
- Flow property / unit: Mass / kg
- Amount rule: G/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`

###### Propane refrigerant supplied for cabinet replenishment (`propane_topup`)

R290 single-species configuration only; initial factory charge included in cabinet asset, not this input.

- Selected flow: Propane refrigerant supplied for cabinet replenishment
- Flow property / unit: Mass / kg
- Amount rule: T/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail-2013`

###### Loaded light-commercial-vehicle road freight service (`loaded_transport`)

Only actual outbound supplier-return or waste legs not included by waste provider; includes vehicle operation and manufacture via supplier; no duplicated fuel.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: V_load/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_transport`
- Sources: `jrc-retail-2013`

###### Empty light-commercial-vehicle road trip service (`empty_transport`)

Observed empty legs have nonzero vehicle-distance activity; exclude only with verified loaded-provider empty-return coverage.

- Selected flow: Empty light-commercial-vehicle road trip service
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: V_empty/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_transport`
- Sources: `jrc-retail-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Incremental pickup retail service for supplier-packed chilled raw Atlantic salmon fillets (`retail_service`)

Service quantity is accepted net drained flesh mass, not a fish production flow.

- Selected flow: Incremental pickup retail service for supplier-packed chilled raw Atlantic salmon fillets
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_goods`
- Sources: `jrc-retail-2013`

###### Supplier-packed chilled raw skinless boneless Atlantic salmon fillets transferred without qualified acceptance (`external_failed_goods`)

Only physically retained by an identified external recipient without qualified acceptance; supplier returns tracked to final disposition.

- Selected flow: Supplier-packed chilled raw skinless boneless Atlantic salmon fillets transferred without qualified acceptance
- Flow property / unit: Mass / kg
- Amount rule: F/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_goods`
- Sources: `jrc-retail-2013`

##### Waste flows

###### Cabinet-cleaning wastewater with fish drip and defrost condensate (`effluent`)

One real combined drain carrier including dissolved cleaner, fish matter and condensate; no duplicate dissolved constituents or internal water-vapour air emissions.

- Selected flow: Cabinet-cleaning wastewater with fish drip and defrost condensate
- Flow property / unit: Mass / kg
- Amount rule: J/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_liquids`
- Sources: `jrc-retail-2013`

###### Discarded sealed salmon fillet consumer pack including fish and original packaging (`rejected_pack_waste`)

Actual retailer disposal only; terminal treatment matched to full pack composition. Do not separately output contained fish, drip or original pack as waste.

- Selected flow: Discarded sealed salmon fillet consumer pack including fish and original packaging
- Flow property / unit: Mass / kg
- Amount rule: Z/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-retail-2013`

###### Discarded corrugated cardboard transport case (`case_waste`)

Actual removed outer cases, disjoint from unopened discarded packs; receiving-gate production responsibility remains with goods.

- Selected flow: Discarded corrugated cardboard transport case
- Flow property / unit: Mass / kg
- Amount rule: K/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-retail-2013`

###### Discarded low-density polyethylene carrier bag (`bag_waste`)

Only bags discarded under retailer control; bags handed to customers have downstream fate disclosure, not retailer disposal.

- Selected flow: Discarded low-density polyethylene carrier bag
- Flow property / unit: Mass / kg
- Amount rule: U/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_materials`
- Sources: `jrc-retail-2013`

###### Removed complete elastomer refrigerator door gasket (`gasket_waste`)

Actual repair event removals; excluded from terminal cabinet if already removed.

- Selected flow: Removed complete elastomer refrigerator door gasket
- Flow property / unit: Mass / kg
- Amount rule: H/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`

###### Decommissioned drained self-contained refrigerated display cabinet (`cabinet_waste`)

Whole drained terminal cabinet; excludes separately recovered propane and previously removed parts; direct net weighing and BOM reconstruction are mutually exclusive.

- Selected flow: Decommissioned drained self-contained refrigerated display cabinet
- Flow property / unit: Mass / kg
- Amount rule: A_end*f_end/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assets`
- Sources: `jrc-retail-2013`

###### Recovered propane refrigerant sent for external treatment (`propane_recovery`)

Actual exported complete pure-propane recovery carrier; R is assigned only after disjoint raw circuit extraction, recovery storage and air-capture custody reconcile. Treatment excludes cabinet shell and air emission.

- Selected flow: Recovered propane refrigerant sent for external treatment
- Flow property / unit: Mass / kg
- Amount rule: R/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail-2013`

##### Elementary flows

###### Propane released to outside ambient air (`propane_air`)

Measured final transfer to outside air only; internal cabinet/store release is an intermediate source until storage/capture/vent transfer reconciles.

- Selected flow: propane `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: L_out/D
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_refrigerant`
- Sources: `jrc-retail-2013`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| same_configuration_pool | retail_service | Declare prospective site/cabinet/species/cut/pack configuration and observation window; include failed, closed, idle and zero-sale cohorts. Retain cross-period stock and late returns by original goods ID. Q = successful accepted net flesh; reverse physically returned or later disqualified quantities in their original Q and revise original numerator/fates too. A refund/discount alone changes neither physical stock nor Q. Repeated handling/resale is not new net service for a previously counted mass unless the earlier acceptance was reversed. Entire zero-Q pools remain unnormalizable and are carried to the declared same-configuration pool; never erase them. | ghg-product-2011 |
| causal_allocation | all inventory rows | Prefer disjoint direct meters and event subdivision. Allocate shared refrigeration using measured occupied shelf-volume-hours across all beneficiaries, supported by load/temperature evidence; allocate idle periods by predeclared reserved capacity-hours, retaining losses and failures. Full beneficiary shares must sum to one and reconcile to each measured pool. If the driver is absent or unjustified, report unresolved allocation. Count allocation once before dividing by D; financial revenue and default equal shares are not substitutes. | ghg-product-2011 |
| persistent_assets | cabinet_asset; cabinet_waste | Keep asset ID ledger across periods and beneficiaries. f = f_v = e_bp / E_life_v where e includes allocated idle/reserved capacity-hours and E is documented expected lifetime total installed-capacity-hours; replace all old-version allocations after any lifetime revision rather than restart manufacture. Cumulative manufacturing fractions <= 1; at retirement distribute the remaining 1-sum(previous corrected fractions) by final measured lifetime beneficiary exposure. Terminal f_end is the final corrected lifetime beneficiary share, applied to terminal carrier once, never multiplied by manufacture f again. Record corrections in original cohort versions. | ghg-product-2011 |
| fates_no_credit | rejected_pack_waste; external_failed_goods | Do not allocate service output to failed goods, donor retention or supplier return before qualified acceptance. External refusal is F with actual recipient/state and continuing gate responsibility, not automatic retailer waste. Recycling/disposal treatment belongs to actual carrier and recipient; keep provider transport, recovery and treatment boundary disjoint; no speculative energy, recycling or resale credit. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | cold_retail | Goods acceptance, stock, loss and background | original foreground record | goods_id; supplier_lot; species; origin; cut; pack; dates; gross_pack_kg; tare_kg; free_drip_kg; net_drained_flesh_kg; Q_original; Q_reversed; H_gross; R_phys; S; F; recipient; state; final_owner; gate_background; SKU; label_net_kg; sample_id; age_stratum; drain_time; drain_mesh; drain_temperature; sample_flesh_kg; sample_pack_pad_kg; sample_free_liquid_kg; r_f; sample_recipient; uncertainty; R_i; R_flesh; d_i; k_i; w_is; w_if; w_iopen; w_iF; B_s; B_f; B_open; B_f_service; B_f_continuing; B_f_provisional; F_receipt; consumer_pack_sourced_removed_mass; source_component_matrix | At receiving, each handover, return, loss and closing count, scan each pack and calibrated scale record. Verify net flesh by representative destructive sampling within same SKU, supplier lot and receipt/dispatch storage-age strata: first weigh intact unopened pack, then pair net flesh, pack/absorbent and free liquid weights under a declared fixed drain time, mesh and temperature without squeezing; measure ice separately, and any ice invalidates this never-frozen route. Define r_f = sum(sample drained flesh)/sum(matched sample labelled net content) within stratum; estimate unopened sale-pack flesh as labelled net content*r_f. Reconcile paired gross pack = flesh + pack/pad + free liquid and propagate scale, sampling and within-stratum variation uncertainty to D, F, loss and stock; invent neither precision nor sample count. Receiving-gate background must use the same net-flesh basis; a juice-inclusive production basis cannot be combined with juice-exclusive D without conversion. Retain each sampled pack as a physical removal event with original ID, sample recipient/state and final disposition; samples are not service, external retention is F or actual disposal uses its whole carrier, never deleted. Actual sale packs remain sealed; unseparated drip accompanies goods and is not retailer effluent/loss. Record actual acceptance specification, temperature/history, integrity and shelf-life decision; no numerical compliance default. Apply calc_service and calc_background; one final division by positive D; keep original cohort corrections and free-liquid ledger separate Pair source-resolved receipt and terminal samples within SKU/lot/storage-age strata to measure R_i-to-d_i k_i and every final-fate mapping; intact packs follow IDs, true splits use measured flesh and its derived liquid portions to derive w fractions. Use identical draining procedure at receiving and terminal; record design, variation and uncertainty for longitudinal representative packs or matched same-lot controls, never default conversion one. Attribute original receiving flesh of an intact accepted pack, including its later contained drip, to B_s; each R_i fate shares close to one, unknown remains B_open rather than loss. Build original-consumer-pack source matrix for actual waste/drain portions; imported water/cleaner in J, bags and cases cannot enter pack stock closure. | kg | Each event and each supplier lot audit; inventory closure daily | All receiving, refused and successful packs, zero-sale intervals and late returns through cohort reconciliation | Receiving gate to pickup desk and all actual recipients | per 1 kg reference flow | Scale calibration with traceable masses before/after campaign; lot audit design, uncertainty, stock reconciliation, traceability and acceptance evidence |
| cp_energy | cold_retail | Cabinet electricity | original foreground record | meter_id; circuit_map; timestamps; kWh_start; kWh_end; reset; cabinet_id; temperature; occupied_volume_hours; reserved_capacity_hours; beneficiaries | Read dedicated cabinet meter with cumulative registers and interval logging; log product temperature continuously with excursion/event links and compare receiving/dispatch checks. Identify compressor/fan/defrost/integral lights; validate circuit inclusion before any subtraction. calc_energy after causal_allocation; once per 1 kg reference flow | kWh; h; m3*h | Continuous interval logging with daily register reconciliation | Full campaign including nights, closed days, idle and repair | One cabinet and every actual shared beneficiary | per 1 kg reference flow | Meter accuracy/calibration certificate, timestamp/reset audit and temperature probe check against traceable reference |
| cp_liquids | cold_retail | Cleaning supply and combined drain | original foreground record | event_id; fresh_volume; water_temperature; water_density; cleaner_product; SDS; concentration; cleaner_mass; outlet_volume; effluent_density; fish_drip; condensate; reuse; storage | Meter cabinet fresh-water branch and actual drain; weigh whole cleaner solution dispensed. Measure density with calibrated mass/volume at recorded temperature; take representative whole-liquid composite each cleaning/defrost regime and record dissolved fish/cleaner for characterization. Route defrost to the measured shared drain or document separately captured carrier with added card. calc_liquids after direct attribution; actual J once per 1 kg reference flow; separate supply reconciliation | m3; kg; kg/m3 | Each cleaning and defrost event; daily cumulative meter readings | Full campaign and all regimes including spill/repair events | Cabinet cleaning branch and final drain transfer, not whole-site sewer | per 1 kg reference flow | Meter calibration, calibrated scales/volumetric vessel, sample chain, density temperature and drain recipient/treatment acceptance |
| cp_materials | cold_retail | Added bag and discarded complete carriers | original foreground record | event_id; product_lot; bag_count; sample_net_mass; opening; purchase; closing; Z; K; U; full_carrier_mass; composition; recipient; treatment; provider_transport | Weigh each waste dispatch on calibrated scale, tare external collection bins; intact rejected packs stay whole with recorded fish/pack/drip composition. Weigh same-lot complete bags and reconcile count ledger; segregate removed cardboard from consumer packs. calc_materials after one attribution; per 1 kg reference flow | kg; count | Each issue/dispatch; each bag lot sampling; daily ledger closure | Full campaign, all fates including failed sales | Retailer control to actual carrier recipient | per 1 kg reference flow | Scale checks, sampling coverage/uncertainty, receipts and waste-provider scope excluding duplicate transport/treatment |
| cp_assets | cold_retail | Complete cabinet lifetime, repairs and terminal | original foreground record | asset_id; manufacturer; model; serial; A; installation_scope; capacity; e_bp; E_life_v; life_version; prior_fractions; G; H; A_end; terminal_mode; removed_parts; factory_charge; recovery | Obtain traceable whole installed cabinet weighing or manufacturer complete-machine mass verified to configuration; never invent mass. Record cumulative capacity-hours across sites/users, actual repairs and complete gaskets with calibrated net weights; at retirement directly weigh drained cabinet, or use documented component-BOM reconstruction exclusively. calc_asset for A/A_end and calc_materials for G/H, one final D division; never restart old manufacture | kg; m3*h | Installation, every period and repair, every lifetime revision and terminal event | Entire life ledger retained including earlier/future beneficiary corrections | One physical cabinet including integral components; excludes common premises modules | per 1 kg reference flow | Mass certificates, bill of components, dated lifetime evidence, fractions sum audit, repair invoices, recovery and terminal treatment receipt |
| cp_refrigerant | cold_retail | Propane custody and final atmospheric transfer | original foreground record | installed_gate_id; installed_gate_time; installed_charge_raw; initial_factory_charge_raw; pre_gate_commissioning_charge_raw; pre_gate_commissioning_loss_raw; commissioning_provider_scope; purchased_makeup_raw; asset_id; event_id; species; opening_charge_raw; T_raw; closing_charge_raw; R_raw; other_circuit_transfer_raw; recovery_store_open_raw; recovery_store_close_raw; R_circuit_sent_raw; reused_recovery_raw; other_recovery_transfer_raw; air_storage_start_raw; air_storage_end_raw; capture_storage_start_raw; capture_storage_end_raw; captured_air_sent_raw; custody_id; C_in_kg_m3_raw; C_out_kg_m3_raw; F_in_m3_h_raw; F_out_m3_h_raw; blank_mode; blank_concentration; temperature; pressure; dry_wet_basis; regime_duration_h; beneficiary_event_share; f_end | At every intervention retain unallocated raw technician calibrated cylinder before/after weights and custody plus circuit/recovery storage. Measure air-species and air-capture-only storage at start/end separately as signed disjoint inventory changes; capture storage excludes R_raw already extracted from the circuit. Actual outside flux uses synchronized absolute inlet/outlet C (kg/m3) times respective F (m3/h), converted to the same gas temperature, pressure and dry/wet basis. Blank mode chooses either one blank deduction from raw concentration or already blank-corrected concentration; never both. outside_flux_raw = integral(C_out_corrected*F_out-C_in_corrected*F_in) dt, summed over each actual vent and measured emitting regime in hours to kg; inlet already accounts for room/ambient background, never subtract it again. Do not multiply undefined air-mass flow by volume concentration. Reconcile with L_out_raw and measured storage/capture changes; retain instrument coverage, detection limits and gap uncertainty; unknown below-limit flux is not zero. Close raw quantities under calc_refrigerant first, then apply explicit event/terminal beneficiary shares, and divide by D once. At the post-initial-commissioning installed handover gate record gate ID/time and measured contained installed_charge_raw; this is first-interval opening_charge_raw once, with closing stock carried thereafter, never an additional factory-charge input. Retain original factory/initial-commissioning charge and pre-gate loss evidence plus actual manufacture/installation provider-package scope; pre-gate responsibility is counted once there, and unknown coverage cannot be assumed. For each post-gate event separately weigh purchased_makeup_raw from new supply and reused_recovery_raw; reconcile T_raw to their sum, and only purchased_makeup_raw enters numerator T. Actual post-gate repair/recommissioning losses belong to foreground outside flux, verifying the provider does not also include the same event; terminal retained charge is never another new input. | kg; kg/h; h | Every intervention; synchronized continuous absolute concentration/volume-flow in each emitting regime and start/end storage measurements | Full campaign and terminal recovery; retain gaps as unresolved | Cabinet circuit, store air and actual outside transfer planes | per 1 kg reference flow | Cylinder/flowmeter calibration, gas analyzer standards, blank/inlet data, measured temperature/pressure, custody IDs and gap/uncertainty report |
| cp_transport | cold_retail | Actual outbound loaded and empty legs | original foreground record | trip_id; leg_id; vehicle; route; load_kg; loaded_km; empty_km; timestamps; recipient; shared_load_driver; provider_scope; inbound_gate_exclusion loaded_attribution_mode; target_gross_kg; vehicle_total_gross_kg; target_payload_kg; all_other_payload_kg; provider_reference_unit; provider_attribution_level | Read GPS/odometer and weigh gross carrier loads for every actual supplier-return/waste trip. Retain failed collection/positioning/return legs and test loaded-provider coverage of the observed empty route; obtain operational/manufacture and refrigeration scope. Provider transport inside treatment is excluded by explicit trip IDs. calc_transport; assign shared activity once and divide once per 1 kg reference flow Tag every scale reading as whole vehicle or target consignment before calculation; check both modes against the same full manifest, provider basis and actual segment. An already target-attributed kg/t*km quantity receives no second allocation. | kg; km; t*km; vehicle*km | Every trip and leg | All actual campaign outbound legs including empty/failed legs | Retail gate to named supplier or waste recipient; inbound excluded | per 1 kg reference flow | Calibrated payload scale, odometer/GPS checks, route invoices, provider declarations and no-overlap trip register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service; external_failed_goods | D = sum(Q_original-Q_reversed); F = terminal drained flesh externally retained without qualified acceptance. Close the complete consumer-pack gross-mass ledger: opening+receipts+R_phys = closing+H_gross+S+consumer_pack_sourced_removed_mass. H_gross, R_phys and S include all original flesh, free liquid, absorbent and pack actually handed over/returned/transferred. The last term contains full Z for intact discarded packs, plus ONLY measured source-resolved portions originating in those original consumer packs for actual samples, separated/leaked liquids and other exits. It must exclude imported water/cleaner within J, added LDPE bags, outer cardboard cases and all other separately imported material. A whole J carrier cannot enter this consumer-pack balance. Keep a source-component matrix that reconciles each original-pack portion once to actual full carriers and recipients; full wastewater/waste exchanges retain their whole-carrier mass separately. Removed outer cases and added bags have separate purchase/stock/fate ledgers. Internal transfers cancel. Unseparated drip accompanies customer goods physically but is excluded from D and is not automatically retailer waste/loss. Track the measured receiving-equivalent mapping in calc_background; D must be positive before final normalization. | Q_original; Q_reversed; F; H_gross; R_phys; S; opening; receipts; closing; Z; consumer_pack_sourced_removed_mass; source_component_matrix; cp_goods | D; F; physical_closure | fao-fish-2013 |
| calc_background | failed_goods_background | Measure R_i as receiving-gate drained flesh for original pack ID i from matched receipt SKU/lot samples. At each storage-age/final-fate stratum measure paired receipt-equivalent and terminal drained flesh plus contained drip; for an intact finally accepted pack k_i = R_i / d_i and its successful gate requirement is k_i*d_i = R_i, not d_i. No default k_i=1. For split/leaked/sampled packs derive disjoint receiving-flesh fate fractions w_is, w_if and w_iopen from paired source-specific flesh/liquid measurements and unique history; include flesh-derived drip with its originating goods fate, never automatically as loss. Require measured mapping and propagated uncertainty; unavailable mapping blocks completeness. B_s = sum(R_i*w_is); B_f = sum(R_i*w_if); B_open = sum(R_i*w_iopen). During open reconciliation R_flesh = B_s+B_f+B_open; at final closure B_open=0 and R_flesh = B_s+B_f. D is terminal accepted drained flesh after reversals. Successful-goods downstream coupling MUST add B_s/D kg receiving-equivalent flesh with original packaging and actual inbound transport to the identical gate, not a default 1 kg; this partial service excludes that successful-goods production. Partition B_f = B_f_service+B_f_continuing+B_f_provisional by final background owner: true service-caused irrecoverable losses and assigned nonaccepted F enter service responsibility; reusable supplier-return/F retain traced continuing owner; unresolved F stays provisional and blocks final completeness. B = B_f_service+B_f_provisional is the failed_goods_background input numerator. Receiving-equivalent F_receipt = sum(R_i*w_iF) is a tracked subset of B_f, while physical F/D remains terminal net flesh. Revise original B_s/B_f, D and ownership on late return/resale; never charge successful goods production twice or delete a continuing responsibility. | R_i; R_flesh; d_i; k_i; w_is; w_if; w_iopen; w_iF; B_s; B_f; B_open; B_f_service; B_f_continuing; B_f_provisional; F_receipt; final_owner; cp_goods; D | B; B_s; B_f; F_receipt | jrc-retail-2013 |
| calc_energy | electricity | E = sum(cabinet meter kWh assigned by causal_allocation). Convert kWh to MJ with 3.6 once, then divide by D. Submeter subtraction is allowed only from the parent measured boundary containing it; independent disjoint meters are added without subtraction. Include closed hours, alarms, maintenance downtime and defrost. | meter_start; meter_end; interval; beneficiary_exposure; cp_energy; D | E; MJ_per_reference | jrc-retail-2013 |
| calc_liquids | cleaning_water; cleaner; effluent | W = sum(fresh imported volume * measured supply density); C = sum(whole supplied cleaner solution mass); J = sum(actual outlet volume * measured whole-effluent density) after attribution. Do not subtract evaporation, stock, reuse or cleaner from directly metered J. Separate supply balance tracks purchased-solution water, captured defrost/ambient condensate, fish drip, evaporation and storage. No reconstruction alternative is authorized. Dissolved cleaner/fish already in J must not be output again; sampling concentration is characterization, not another carrier quantity. | supply_volume; supply_density; cleaner_mass; concentration; outlet_volume; effluent_density; condensate; drip; storage; cp_liquids; D | W; C; J | jrc-retail-2013 |
| calc_materials | carry_bag; door_gasket; rejected_pack_waste; case_waste; bag_waste; gasket_waste | P,G,Z,K,U,H are disjoint observed whole-item/whole-carrier masses assigned once to the pool, then each divided by D. For bags, count * measured same-lot mean complete bag mass is allowed with tare and sampling coverage; never sum unrelated repair parts as a complete gasket. Reconcile purchased + opening - closing = handed out + discarded for bags; match waste recipient, state, actual treatment and transport exclusions. | P; G; Z; K; U; H; item_count; tare; sample_mass; recipients; cp_materials; cp_assets; D | material_mass_per_reference | jrc-retail-2013 |
| calc_asset | cabinet_asset; cabinet_waste | Manufacture A*f/D and terminal A_end*f_end/D follow persistent_assets separately. Direct terminal drained whole-device net weighing already excludes removed parts and recovered charge: do not subtract these twice. Alternative BOM reconstruction sums only components physically present at terminal, excludes recovered charge and removed components once, and is mutually exclusive with direct net weighing. Event repair inputs/outputs use calc_materials, not manufacture fractions; supplier package excludes repairs and terminal treatment. | A; A_end; e_bp; E_life_v; f; f_end; historical_fractions; lifetime_version; cp_assets; D | asset_mass_per_reference | ghg-product-2011 |
| calc_refrigerant | propane_topup; propane_recovery; propane_air | Establish whole-equipment physical closure with unallocated species-kg raw data: L_internal_raw = opening_charge_raw+T_raw-closing_charge_raw-R_raw-other_circuit_transfer_raw. Fix the installed gate at documented handover after initial commissioning, declaring installed_gate_id and time. For the first foreground interval opening_charge_raw = installed_charge_raw: enter actual asset-contained charge measured at that gate once as opening stock, never add initial_factory_charge_raw again; subsequent intervals carry forward prior closing_charge_raw. Factory and initial-commissioning charge supply, manufacture/installation handling and actual pre-gate commissioning losses belong to the cabinet manufacture/installation background with evidenced actual provider scope, once only; unknown coverage blocks completeness, never reinsert them into foreground T or outside emissions. After the gate T_raw = purchased_makeup_raw+reused_recovery_raw, where purchased_makeup_raw is only new purchased makeup supply actually charged into the circuit after that gate, excluding factory/initial-commissioning charge already contained in the asset; R_raw is extraction directly from the circuit, never air capture. Any post-gate recommissioning/repair losses enter this raw balance and actual outside flux as foreground responsibility, with provider-included handling scope removed to avoid overlap. Terminal remaining charge continues through closing_charge_raw/recovery history, never as another initial or makeup input. Circuit-recovery storage closure is recovery_store_open_raw+R_raw = recovery_store_close_raw+R_circuit_sent_raw+reused_recovery_raw+other_recovery_transfer_raw. Do not equate extraction with external dispatch. Independently L_out_raw = L_internal_raw-delta_air_storage_raw-delta_air_capture_retained_raw-captured_air_sent_raw. Both delta terms are measured signed end-minus-start inventories; air storage excludes capture storage, and capture storage excludes circuit-recovered charge. captured_air_sent_raw is actual pure propane recovered from leaked room air and dispatched, with custody IDs disjoint from R_raw and R_circuit_sent_raw; never deduct a circuit-recovery event twice. Recovery output raw custody total is R_sent_raw = R_circuit_sent_raw+captured_air_sent_raw. Other sorbent/mixed capture carriers require their own named cards before completeness. Only after raw balances and independent outside flux reconcile, allocate external replenishment T = allocated(purchased_makeup_raw), actual recovery export R = allocated(R_sent_raw), and L_out = allocated(L_out_raw) to beneficiaries once. Maintenance uses actual current-beneficiary event shares; terminal residual charge/recovery and associated outside transfer use final lifetime f_end once, never manufacture f again. Then divide T, R and L_out by D. Keep all raw stocks, corrections and historical beneficiary revisions; unresolved or negative incompatible closure blocks completeness. | installed_gate_id; installed_gate_time; installed_charge_raw; initial_factory_charge_raw; pre_gate_commissioning_charge_raw; pre_gate_commissioning_loss_raw; commissioning_provider_scope; purchased_makeup_raw; opening_charge_raw; T_raw; closing_charge_raw; R_raw; other_circuit_transfer_raw; recovery_store_open_raw; recovery_store_close_raw; R_circuit_sent_raw; reused_recovery_raw; other_recovery_transfer_raw; delta_air_storage_raw; delta_air_capture_retained_raw; captured_air_sent_raw; R_sent_raw; f_end; beneficiary_event_share; outside_flux_raw; cp_refrigerant; D | T; R; L_out | jrc-retail-2013 |
| calc_transport | loaded_transport; empty_transport | Choose exactly one loaded attribution mode per source/segment. target_consignment: V_load=sum(target_gross_kg/1000*loaded_leg_km) where target_gross_kg is already the measured actual target consignment gross payload; NEVER multiply shared-load share or allocation_once. unassigned_vehicle: V_load=sum(vehicle_total_gross_kg/1000*loaded_leg_km*target_payload_kg/vehicle_total_gross_kg) only for unassigned whole-vehicle activity and a compatible actual mass-basis t*km provider. Target plus other actual gross payload kg must reconcile to the same-segment vehicle total with known positive denominator. Keep a provider already-attributed target quantity unchanged; reconstruction is QA only. Retain raw/target attribution level and provider reference unit. Do not reduce target-kg-derived t*km by another occupied-volume share; volume-capacity allocation of a whole-vehicle environmental vector needs a matching actual provider and separate atomic activity, not a correction to target kg. Retain uncovered actual empty vehicle*km, allocating once by all-beneficiary actual route-capacity reservations. Retain stationary powered idle h/fuel in matching named completion cards; never erase them by zero load/distance. Original goods inbound and treatment-contained actual legs occur once; unknown coverage blocks completeness. Normalize once by final reference denominator D. | load_kg; loaded_leg_km; empty_vehicle_km; route_share; provider_scope; cp_transport; D; loaded_attribution_mode; target_gross_kg; vehicle_total_gross_kg; target_payload_kg; all_other_payload_kg; provider_reference_unit; provider_attribution_level | V_load; V_empty | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | all inventory rows | Keep walkdown presence/absence and scope matrix for each actual exchange, disjoint provider stages and named downstream completion modules; reject entire-leaf coverage claims. | Dated walkdown, supplier scope, route/pack photos and join manifest |
| q_records | all inventory rows | Keep original timestamps, IDs, raw units, calibration, sample plan and missing-data uncertainty; no defaults, implied zero or invented threshold. Retain all zero-driver intervals and prospectively declared cohort pool. | Original meters, logs, calibration and signed reconciliation including unresolved differences |
| q_acceptance | retail_service | Use declared actual local/customer acceptance specification without claiming Codex legal conformity. Continuous temperature/integrity/rotation evidence supplements shipment checks; raw chilled fish is not ready-to-eat. | Pack labels, original specifications, temperature excursions and actual disposition |
| q_history | cabinet_asset; cabinet_waste; retail_service | Preserve versioned lifetime, original cohort revisions and final background ownership; no silent reassignment, reset or loss deletion. | Lifetime/stock revision ledger and corrected prior outputs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_binding | all inventory rows | No dataset completeness until each applicable row resolves to one official flow original and matching receipt, public state, exact bilingual name, type, state/medium and property-unit chain. An unbound service cannot reuse a salmon production UUID. AC UUID establishes point-of-use energy identity only; supplier/grid/voltage background remains to be evidenced. |  |
| denominator_closure | retail_service | Check positive D, physical mass closure independently, unique pack history, late-return numerator and denominator correction, all zero-sale pools retained, and final owner/background for F. Financial refunds cannot substitute for physical evidence. |  |
| measurement_completeness | all inventory rows | Check actual quantity, uncertainty, calibration, full frequency/coverage, matching protocol process and one final normalization. J is complete carrier V*rho without supply deductions; propane final outside flux requires measured capture/storage closure. Conditional absence needs evidence; unknown never passes. |  |
| scope_no_overlap | all inventory rows | Verify asset cumulative fractions <=1, final residual correction, exclusive terminal modes, repair event boundaries, full carrier treatment, actual loaded/empty route coverage and no duplicated upstream goods/transport/refrigerant recovery. Report partial incremental scope until every named common-premises completion module is joined; no conformity or published approval is established by these checks. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental foreground service; candidate methodology |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Incremental service comparison within identical scope; total retail model requires named completion modules first |
| excluded_use | fish production; whole 62124; live fish; full-life-cycle claims; legal conformity; results with incomplete identity/background |
| required_metadata | all required qualifiers; period and cohort; D and physical ledger; F and B ownership; asset history; provider scope matrix |
| required_quality_disclosure | unbound flows; missing quantities and uncertainty; allocation basis; background coverage; partial boundary and missing joins; no scientific approval |
| update_trigger | species/cut/fresh-frozen/pack change; icing; refrigerant or cabinet change; acceptance/return revision; lifetime change; provider scope change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-fish-2013 | official_guidance | FAO/WHO Codex, Code of Practice for Fish and Fishery Products CAC/RCP 52-2003, amendments through 2013, section 18.1.1/18.1.3/18.1.7; https://www.fao.org/input/download/standards/10273/CXP_052e.pdf; retrieved 2026-10-27 | Qualitative receiving, chilled storage, packaging protection, rotation, drip and display screening; no numeric threshold or legal conformity adopted |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, 2013, section 1.2.1/Table 1.2; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf; retrieved 2026-10-27 | Qualitative direct retail input/output and goods-chain distinction; partial boundary, cards, measurement and ownership are this PCR design |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9/Table 9.1/9.2, printed page 63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-10-27 | Subdivision-first and causal physical allocation principles; specific ledgers, drivers and lifetime equations are PCR design, not complete-standard conformity |
