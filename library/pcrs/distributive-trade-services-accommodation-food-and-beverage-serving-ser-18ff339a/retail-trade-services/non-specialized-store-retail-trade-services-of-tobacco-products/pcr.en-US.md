---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-tobacco-products
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Dedicated manual-cabinet retail service for one factory-sealed 20-count filtered cigarette pack

## 1. Scope and Applicability

This is a partial incremental retail-service module for a staffed counter inside a non-specialized walk-in store: one homogeneous SKU of conventional combustible filtered cigarettes, exactly 20 sticks in a factory-sealed paperboard consumer pack with inner foil wrapper and outer protective film, received in corrugated master cases. The actual brand, tobacco blend, additives, filter design/material, stick dimensions, consumer-pack construction and receiving BOM are fixed and recorded; the specification is not a universal cigarette composition. Tobacco is cut processed leaf with any declared additives; filters and papers remain merchandise components. One SKU/pack construction per dataset; no equivalence across blends, filters, pack sizes, tax markets or altered supplier background. Cabinets are manually keyed steel roller-shutter security enclosures with original locks and anchors; existing underlying shelves, base and counter are separate completion assets; the actual installation must have no electric drive, lighting or active humidity control. Handling from the receiving gate is by hand; cabinet dusting uses one complete unpowered polypropylene dustpan-and-brush set. Cartons may be opened to obtain sealed consumer packs; consumer packs must not be opened, smoked, sampled, repacked or split for sale. This module ends at final qualified handover of a sealed pack for the buyer’s own use, after recorded refusal/return adjudication. It does not evaluate smoking, health outcomes or regulatory conformity. The full retail result is incomplete until the mandatory common modules and merchandise responsibility bridge below are supplied. The disclosed partial scope is a PCR design choice; neither FDA nor GHG guidance approves this restricted boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-tobacco-products |
| classification_refs | CPC3.0:62128; narrower |
| covered_products | One specified sealed20-count factory-made filtered combustible-cigarette SKU and its dedicated manual security-enclosure service only |
| excluded_products | Other tobacco/ENDS products, altered pack/SKU, manufacturing, consumer smoking/disposal, and known common retail modules until separately completed |
| representative_product | One actual brand/market/filter/20-count board-foil-film consumer pack, original receiving BOM required |
| production_route | Non-specialized store: receiving→hand restock→ambient manual keyed enclosure→staffed intact-pack final handover; dry dusting; no power in enclosure |
| market_state | Finished sealed consumer packs held ambient, with actual condition/specification acceptance; no on-site cigarette opening/combustion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dedicated incremental manual-cabinet custody/retrieval service ending in qualified own-use handover of one specified intact consumer pack |
| How much | One finally accepted original20-count consumer pack; one service Item(s), not20 service units and not a kg commodity flow |
| How well | Same declared SKU/market/pack, intact factory seal and actual eligible acceptance; no health/compliance performance claim |
| How long or cycle | Actual receiving-to-final-adjudication history in the prospectively fixed pool, including idle, failed and repeated handling |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated manual-cabinet retail service for one factory-sealed 20-count filtered cigarette pack |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual site/date pool and return cutoff; brand SKU market and exact20-stick pack count; tobacco blend/additives filter/paper/stick specification; complete original receiving BOM actual mass/moisture and inbound gate; board inner foil outer film exact construction; manual unpowered enclosure BOM distinct from existing shelf/base; actual start/end gates and qualified acceptance; original-pack custody and successful/failure/transfer/open responsibility; N and late correction version; all-beneficiary asset/reservation exposure; actual residual carrier treatment/transport scope; partial label and fixed common-module completion matrix; actual local eligibility evidence and unresolved identity list |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | retail_service; failed_background; supplier_return; internal_transfer; failed_retention; cabinet_asset; brush_asset; lock_replacement | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Each row counts its defined actual complete service/pack-background/asset/lock object. N is final service count; other counts are not fixed to N. Use calc_service, calc_background, calc_assets, calc_lock and calc_transfers. A20-stick label never supplies tobacco mass or a factor20 service output. |
| carrier_mass | carton_waste; pack_waste; dust_waste; lock_waste; cabinet_eol; brush_eol | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual full residual carrier gross/tare, state and source portions; no count-to-kg default. g/1000=kg only for measured grams, not a material-content conversion. Direct terminal net weighing excludes already removed parts; exclusive BOM reconstruction uses actual original composition/removal records. |
| one_denominator | all inventory rows |  |  | All inventory quantities are per reference flow: attributable raw pool quantity / N, once. Retain raw units and all allocation stages; no additional division for already-normalized results. Entirely zero-output pools remain unnormalizable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Retailer-accepted specified original sealed packs at the store receiving dock after supplier inbound transport |
| starting_condition_role | foreground_start |
| product_classification_scope | Narrower subset of CPC3.0 62128; that leaf includes all group250 tobacco products |
| recursive_input_rule | No same-service recursion; failed goods use one original same-SKU receiving-background service, not another retail-service input |
| upstream_dataset_requirement | Bind same-SKU original production/complete-pack/inbound background at exactly the receiving gate; B_f here and B_s downstream disjoint; unknown remains incomplete |
| disclosure | Partial dedicated-only incremental service; actual SKU/site/gates/pool/N/corrections, unresolved identities, measured states, reservations and fixed completion matrix required; no full retail/full-standard conformity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope | all | Use the declared narrow SKU, intact consumer-pack and manual-cabinet route only. Cigars, loose/rolling tobacco, smokeless tobacco, heated-tobacco consumables, electronic cigarettes, nicotine liquids, vending, self-service access, online delivery, refrigerated/humidified storage and retailer processing are outside this applicability. An observed excluded route cannot be treated as zero; stop applicability and create reviewed bilingual named cards/protocols for a separately disclosed extension before use. | un-cpc62128; pmi-manufacture; fda-retail |
| gates | all | Start at retailer acceptance of identified sealed packs at the store receiving dock, after inbound supplier transport; record supplier acceptance/rejection and actual timestamps. Supplier production, consumer packaging and inbound carriage are outside the incremental module but fixed to the same receiving gate in calc_background. Include dedicated cabinet occupation, all retrieval/return/restocking and dry dusting, cabinet/set acquisition and actual replacement locks, dedicated residuals and terminal asset treatment. End service after physical handover, intact-pack/specification acceptance and final adjudication of linked returns. Failed external retention has no service output. | ghg-product-2011; fda-retail |
| partial_completion | all | This module excludes common premises and fixed wiring, general lighting, HVAC, common security/IT, checkout equipment/payment/receipt paper, common cleaning/water/sewer, shared handling equipment, staff travel and retailer-controlled transport after the receiving gate. These are known completion modules, not insignificant or zero. cp_completion and calc_completion fix their collection, ownership, drivers, asset life and one-time aggregation to this same N and cohort. A total retail result requires every listed module either actually quantified with named atomic cards or evidenced absent at this site; partial-module output alone must retain the partial label. Consumer smoking and post-accepted-sale disposal remain outside even the completed retail boundary and must be separate consumer modules. | ghg-product-2011 |
| goods_ownership | goods_account | The final service is not cigarette manufacture. Attribute each original accepted source pack once to successful own-use sale, final retailer-responsible failure, continuing supplier/internal-transfer responsibility, or unresolved/open stock. The successful original production/packaging/inbound background B_s travels with the sold goods and is excluded here; the retailer-failure background B_f is included through failed_background. Do not also add all incoming goods. Actual returned or transferred goods retain one continuing owner; no negative recycling/return credit and no automatic waste classification. The original pack’s full background follows all waste descendants once, not once per component or carrier. | ghg-product-2011 |
| cohort | all | Before collection, fix a same-site/same-SKU/same-configuration responsibility pool, inventory opening and closing dates, return-adjudication cutoff and correction schedule. Keep all unsuccessful, idle and zero-sale cohorts in that pool. An entirely zero-N pool is unnormalizable and remains reported with raw burdens. Late physical returns or adjudication changes replace the original pool’s N, goods responsibility and every affected numerator; record actual occurrence dates and versioned corrections, with no second burden allocated to a new cohort. Financial refunds/discounts without changed physical acceptance do not cancel a service. | ghg-product-2011 |
| provider_carriers | all | Provider scope must distinguish original complete assets from later lock replacements, manufacturing/installation/initial transport from operation, and waste collection from treatment. Match each receiving product or waste-service background to the actual gate, composition, state and destination. A complete sealed cigarette pack or mixed carton/dust carrier is weighed whole; do not add its contained tobacco, nicotine, foil, adhesive or metal as additional waste exchanges. Distinct physically separated carriers require distinct named cards and original component IDs, not an invented split fraction. Treatment includes only evidenced provider utilities/transport; uncovered stages require explicit completion, never duplicate inclusion. | ghg-product-2011 |
| air_completion | cabinet | No cigarette combustion occurs in this module, so smoking smoke and ash are outside; this is not a zero-emission claim for stored tobacco. Pack-film permeability, damage, dust release and store/exterior air transfers must be screened in cp_completion. Cabinet dust captured as solid is not also an elementary air output. Any quantified volatile/dust release requires one actual species/receiving medium card and a terminal exterior-flux balance including internal storage, capture and exported carriers; an internal cabinet source is not automatically environmental emission. Unknown evidence remains incomplete. | pmi-manufacture; ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| goods_account | Pack custody, responsibility and final handover | required | Always in this dedicated partial route; event-specific cards need occurrence/absence evidence | delivery | retail_service |
| cabinet | Dedicated manual locked cabinet and dry dusting | required | Always in this dedicated partial route; event-specific cards need occurrence/absence evidence | storage | per reference flow |

### Process: Pack custody, responsibility and final handover (`goods_account`)

#### Inputs

##### Product flows

###### Production and inbound supply of one factory-sealed 20-count filtered cigarette pack to the store receiving gate (`failed_background`)

A homogeneous same-SKU upstream service, including actual cigarettes, complete consumer/master packaging and inbound transport to the declared gate, only for final retailer-responsible failures. It is not another retail service, tobacco-only mass, or all received packs. Bind one compatible service background and its included scope before quantity completion.

B_f/N Item(s) using cp_goods and calc_background, after raw source-parent responsibility closure; no successful-goods background or transfer credit.

- Selected flow: Production and inbound supply of one factory-sealed 20-count filtered cigarette pack to the store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B_f/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `pmi-manufacture`

#### Outputs

##### Product flows

###### Dedicated manual-cabinet retail service for one factory-sealed 20-count filtered cigarette pack (`retail_service`)

The final qualified incremental dedicated manual-cabinet retail service for one intact original pack, not the physical cigarettes. The common-module partial label and merchandise bridge remain required.

1 Item(s) = N/N using cp_goods and calc_service; only for N>0.

- Selected flow: Dedicated manual-cabinet retail service for one factory-sealed 20-count filtered cigarette pack
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`; `fda-retail`

###### Factory-sealed 20-count filtered cigarette pack returned to the supplier (`supplier_return`)

Actual separately accepted supplier return with continuing ownership, state and receipt. Supplier acceptance does not itself generate a negative production burden.

T/N Item(s) using cp_goods and calc_transfers; original pack IDs and signed background responsibility required.

- Selected flow: Factory-sealed 20-count filtered cigarette pack returned to the supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: T/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### Factory-sealed 20-count filtered cigarette pack transferred to another retail establishment (`internal_transfer`)

An actual crossing to another establishment, not a move between this store’s shelves. The receiver continues the same original goods background.

I/N Item(s) using cp_goods and calc_transfers; exclude internal shelf moves and service output.

- Selected flow: Factory-sealed 20-count filtered cigarette pack transferred to another retail establishment
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: I/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### 20-count filtered cigarette consumer pack physically retained externally without qualified retail acceptance (`failed_retention`)

One specified original pack left with an identified external recipient after failed acceptance; state may be damaged and must be recorded. This is not retailer waste or a qualified service. Keep B_f unless a signed continuing owner validly takes B_t.

F_ext/N Item(s) using cp_goods, calc_transfers and calc_background; unknown recipient/fate blocks closure.

- Selected flow: 20-count filtered cigarette consumer pack physically retained externally without qualified retail acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: F_ext/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

### Process: Dedicated manual locked cabinet and dry dusting (`cabinet`)

#### Inputs

##### Product flows

###### Installed manual steel roller-shutter tobacco security enclosure with original keyed locks and anchors (`cabinet_asset`)

One actual complete security enclosure: frame, shutter, original locking system and actual anchors, manufacture/installation/initial transport only to the declared installed gate. Existing underlying shelves/base/counter are excluded and separately completed; the manufacturer’s optional drawer base and reusable ordinary shelf are not evidence of enclosure inclusion. No powered drive, lamp or humidity unit. Use actual contract/BOM; no catalogue mass/dimension/time default.

sum_j(f_jc)/N Item(s), one complete enclosure per original asset, using cp_assets and calc_assets. Existing shelf/base manufacture is not included here or duplicated.

- Selected flow: Installed manual steel roller-shutter tobacco security enclosure with original keyed locks and anchors
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_j(f_jc)/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `schaefer-cabinet`

###### Complete unpowered polypropylene dustpan-and-brush set (`brush_asset`)

One actually specified paired cleaning set, including pan, body and polypropylene bristles, as one evidenced complete supplied object. No cleaning liquid, powered vacuum or disposable bag is included. Unmatched polymer/material configuration requires a named revised identity before use.

sum_j(f_jc)/N Item(s) using cp_assets and calc_assets; count complete sets, not cleaning minutes disguised as Item(s).

- Selected flow: Complete unpowered polypropylene dustpan-and-brush set
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_j(f_jc)/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

###### Complete keyed brass cabinet lock cylinder with matching cam and supplied keys (`lock_replacement`)

Conditional on an actual replacement event of the recorded homogeneous model. Original factory lock remains in the enclosure background; this row covers only later new cylinders and their actual supply gate.

sum_k(n_k*A_k)/N Item(s) using cp_lock and calc_lock; evidence absence when no replacement, never unknown=0.

- Selected flow: Complete keyed brass cabinet lock cylinder with matching cam and supplied keys
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: sum_k(n_k*A_k)/N Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lock`
- Sources: `ghg-product-2011`

#### Outputs

##### Waste flows

###### Discarded corrugated cigarette master-case carrier with its attached tape and labels (`carton_waste`)

One actual whole empty carrier after intact consumer-pack removal; attached adhesive/tape/labels remain in the weighed mixture. Consumer packs and detached film are excluded. Supply of the same upstream case is inside goods background, not a second retail input.

sum_c(a_c*m_c)/N kg using cp_residuals and calc_residuals, actual dispatch carrier/destination scope; no assumed recycling credit.

- Selected flow: Discarded corrugated cigarette master-case carrier with its attached tape and labels
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_c(a_c*m_c)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `ghg-product-2011`; `pmi-manufacture`

###### Discarded specified 20-count filtered-cigarette consumer-pack composite carrier (`pack_waste`)

An actual rejected pack carrier containing only what physically remains: original cigarettes/filter/papers, board, foil and film. Damaged or opened remainder is weighed as that recorded carrier, not assumed full label20 or full original pack mass. Detached portions are excluded and linked to their actual separate carriers. Tobacco/nicotine inside is not separately emitted.

sum_c(a_c*m_c)/N kg using cp_residuals and calc_residuals; link each original failed pack once in calc_background, not again for every component.

- Selected flow: Discarded specified 20-count filtered-cigarette consumer-pack composite carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_c(a_c*m_c)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `ghg-product-2011`

###### Dry mixed solid dust collected by manual tobacco-cabinet dusting (`dust_waste`)

The actual captured solid carrier, with measured ambient-dust and merchandise-origin portions where relevant. No assumed nicotine fraction, no liquid effluent, and no conversion of cabinet-source dust into outdoor elementary emission. The reusable pan is tared out. Actual disposable containment would need its own material/scope completion, not an invented zero.

sum_c(a_c*m_c)/N kg using cp_residuals and calc_residuals, actual gross-tare solid mass and capture record; captured portions excluded from other carrier rows.

- Selected flow: Dry mixed solid dust collected by manual tobacco-cabinet dusting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_c(a_c*m_c)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residuals`
- Sources: `ghg-product-2011`

###### Removed complete brass cabinet lock cylinder with its actual attached components (`lock_waste`)

Actual predecessor cylinder removed at the same identified replacement event. Weigh what leaves, record detached keys/cams separately if physically different carriers, and exclude the removed cylinder from eventual enclosure carrier.

sum_k(net_removed_kg_k*A_k)/N kg using cp_lock and calc_lock; event share once, not multiplied by enclosure manufacture share.

- Selected flow: Removed complete brass cabinet lock cylinder with its actual attached components
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_k(net_removed_kg_k*A_k)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lock`
- Sources: `ghg-product-2011`

###### Retired manual steel roller-shutter tobacco security enclosure as a complete residual carrier (`cabinet_eol`)

Actual residual frame/shutter/locks/anchors present at retirement, excluding separately removed parts and any underlying shelf/base outside original scope. An intact unit transferred for reuse is a continuing asset, not this waste.

sum_j(m_end_j*f_final_jc)/N kg using cp_assets and calc_assets; direct net weighing OR exclusive original-BOM/removal reconstruction, never both.

- Selected flow: Retired manual steel roller-shutter tobacco security enclosure as a complete residual carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_j(m_end_j*f_final_jc)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`; `schaefer-cabinet`

###### Retired polypropylene dustpan-and-brush set as a complete residual carrier (`brush_eol`)

Actual remaining set at retirement after removable captured dust is dispatched separately. Exclude dust already weighed in dust_waste; unmeasured wear/lost fragments remain a reconciliation gap requiring actual fate cards before completeness.

sum_j(m_end_j*f_final_jc)/N kg using cp_assets and calc_assets; actual complete terminal carrier and one final responsibility fraction.

- Selected flow: Retired polypropylene dustpan-and-brush set as a complete residual carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum_j(m_end_j*f_final_jc)/N kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_order | all | First use dedicated measurements and record IDs. For a genuinely shared cabinet, use reserved usable shelf-volume-hours per beneficiary including storage/returns; allocate fixed idle capacity across declared reservations, never delete empty time. Every common pool must cover all actual beneficiaries with fractions summing to one. Zero-driver intervals use the prospectively recorded reservation-capacity share, not a post-hoc sale share; unknown reservations block closure. Direct goods failures/packaging residuals remain directly traced. Never allocate by price, turnover or tobacco mass by default. | ghg-product-2011 |
| assets | cabinet | For each unique cabinet and dustpan/brush set, apply calc_assets using all-beneficiary lifetime exposure, keeping cumulative allocations and forecast revisions. Original complete security enclosure includes frame, shutter, original locks and anchors, excluding existing underlying shelves/base/counter; original set includes pan/body/bristles. Later actual replacement cylinder production and its removed predecessor are event burdens. A complete-asset manufacturing background must exclude later maintenance; no second lock/anchor/set-component manufacture. Measured complete terminal carriers receive their final corrected lifetime responsibility share once; no extra manufacturing fraction, arbitrary service-life default or reset after a life extension. | ghg-product-2011 |
| no_credit | all | No coproduct substitution or avoided-disposal credit is assigned. Actual reusable goods leaving for continuing sale are product transfers, and actual discarded carriers are waste outputs with documented treatment only. Internal stock movement is neither another retail service nor new goods production. Completion modules reuse original event IDs and one N; a previously normalized result is multiplied by its actual service count before aggregation and divided once, not divided again as if raw. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | goods_account | source-pack custody and retail acceptance | linked receiving/POS/physical-return/recipient ledger | original_pack_id; sku; brand_market; actual_stick_count; blend_additives_filter_spec; complete_receiving_BOM; gross_pack_kg; actual_state; original_inbound_gate; O; R; C; H; T; I; Wp; K; qualified_acceptance; F_ext; final_fate; continuing_owner; cutoff; correction_version | At dock, cabinet and staffed counter scan or assign unique pack IDs; reconcile manufacturer pack20 declaration with same-SKU representative destructive QC outside sale route, never open sale packs. Weigh representative actual gross/consumer components using calibrated scale and supplier traceable BOM for original tobacco/additives, moisture, filters/papers and packaging; record sampling frame/lot/sample size/precision, no assumed mass from20. Log every attempted sale, refusal, gross handover, actual return, damage, disposal, transfer and final own-use acceptance with timestamps. Verify current local sale/age/pack requirements from retained applicable official evidence at dataset time; FDA contextual source does not establish local conformity or preset limits. Only necessary anonymized eligibility confirmation is retained. Apply calc_service, calc_stock, calc_background and calc_transfers to original raw IDs; retain B_open until resolved; attribute then divide once by N per reference flow. Same original goods across resales have one background and at most one final service. | Item(s); kg | Every event; opening/closing census; reconcile at least each stock period and cutoff, reopen for late corrections | Whole prospectively declared pool, including failures, zero sales and return-adjudication horizon | One named store receiving/cabinet/counter and same-SKU supplier path | per reference flow | Supplier invoice/BOM/transport boundary; sealed-pack photos; scale calibration and uncertainty; source-pack sample protocol; anonymized acceptance and signed recipient/correction audit trail |
| cp_assets | cabinet | complete enclosure and PP cleaning-set lifetime responsibility | installed-asset and all-beneficiary lifetime ledger | asset_id; serial_model; original_scope_BOM; enclosure_vs_shelf_base_counter; installed_supply_gate; commissioning_date; initial_actual_quantity; supplier_service_life_basis; e_jcv; reserved_shelf_m3h; cleaning_loaded_empty_position_return_minutes; idle_reservations; L_jv; historic_allocations; forecast_version; E_j; actual_removed_parts; terminal_mode; gross_kg; tare_kg; final_receiver; f_final_jc | Inspect actual unpowered keyed enclosure and actual paired PP pan/brush set; match purchase/delivery/installation scope and weigh only when kg required. Record original locks/anchors, all separate existing shelf/base/counter IDs and provider transport. Measure usable reserved shelf volume with traceable length tools and time logs; task timer records full dusting, empty return/positioning and standby reservations. Read all past beneficiaries/exposure, actual condition/service records and prospective duty to derive expected lifetime exposure, revising versions. At actual retirement weigh complete residual with calibrated scale, taring containers; exclusive BOM alternative retains original component weights and every removal. Track reuse transfers, fragments/wear and terminal provider inclusions. Use calc_assets, replace old-version allocations, cumulative fractions never exceed1 and final sum1; multiply actual terminal kg by final responsibility fraction once and divide by N per reference flow. | Item(s); m3*h; min; kg | At acquisition, every reservation/task, every life revision/removal, and actual terminal transfer; reconcile each pool and lifetime closure | Entire original asset lifetime across all beneficiaries, including before and after this pool | Installed enclosure and cleaning set only; shelf/base/counter assets separately in cp_completion | per reference flow | Actual contract/BOM, dated photos/installation, unpowered-state inspection, dimensions/timers/calibration, full beneficiary ledger, forecast rationale, replacement/reuse and disposal receipts, direct-vs-BOM exclusive flag |
| cp_lock | cabinet | specific replacement brass lock cylinder and removed carrier | dated replacement work order and waste receipt | replacement_event_id; cabinet_asset_id; cylinder_model; complete_scope; n_k; keys_cam_scope; removed_lock_id; removed_net_kg; actual_remaining_scope; benefit_period; all_beneficiaries; A_k; technician_other_materials; provider_inclusions | At each actual replacement match original/new model and count complete supplied cylinders. Weigh removed cylinder with calibrated scale after identifying attached components; never assume input count implies terminal kg. Inspect period maintenance ledger and obtain signed no-event statement when absent. Identify labour/travel/lubricants/other parts and common-module duty, not hidden in this product. Cross-check new lock still present or actually removed at terminal asset gate. Use calc_lock event allocation; quantities raw first, event A_k once, then N once per reference flow. Do not apply asset manufacture fraction to removed lock. | Item(s); kg; m3*h | Every event plus each-pool explicit occurrence/absence reconciliation | All pool maintenance and benefit periods, with later related terminal corrections | Assigned enclosure and actual compatible homogeneous cylinder model | per reference flow | Purchase/work order, original/new photos and IDs, measured removal ticket/calibration, reserved benefit ledger, no-event statement or complete event evidence |
| cp_residuals | cabinet | dedicated carton, rejected-pack and dry-dust carriers | weighing, parent-portion and receiver/treatment register | carrier_id; original_pack_id; source_portion_id; material_state; retained_original_pack_components; detached_components; gross_kg; tare_kg; moisture_state; dispatch_date; residual_open_close; receiver; destination; treatment_gate; transport_scope; actual_containment; a_c | At creation/capture retain source component IDs; at each actual dispatch weigh each named whole carrier gross/tare on calibrated suitable scale and document actual state/moisture without assumed composition. Keep carton with attached tape distinct from detached film and consumer-pack remainder. Collect dry dust by actual PP pan, taring pan; identify merchandise-origin portions when damaged original packs contribute. Other actual carrier materials require named cards, not invented assignment to carton/dust. Obtain receiver acceptance, actual treatment/transport inclusions and container ownership. Reconcile retained opening/closing residual stock separately from dispatch. Use calc_residuals: actual net kg→one direct/shared responsibility factor→one division by N per reference flow. Sum portions to full carrier and map unique originals to calc_background; no composition/destination duplication or captured-solid air emission. | kg | Every capture/discard/dispatch, with opening/closing residual stock check and each-pool reconciliation | Full pool, zero-sale intervals and subsequent origin-linked dispatch/corrections | Receiving-case removal, dedicated enclosure and actual residual handover gate | per reference flow | Calibrated gross/tare tickets, photos/state, component-by-origin matrix, receiver/treatment/transport contracts and receipts, no-event evidence, retained inventory and uncertainty logs |
| cp_completion | goods_account | mandatory common-module and exterior-transfer completion plan | prospectively fixed source/ownership/driver matrix | pool_version; N; fixed_completion_matrix; enclosure_shelf_base_scope; premises_lighting_HVAC_security_IT_checkout_cleaning_water_sewer; handling_assets; technician_events; staff_travel; retailer_transport; air_path_species; actual_meter_scope; original_record_ids; drivers; idle_reservations; all_beneficiaries; asset_history; actual_provider_inclusions; external_module_value; external_module_is_normalized; original_module_reference_denominator_N_d; original_module_pool_version; compatible_identity_property_unit_state_medium_gate; already_applied_attribution; liquid_S_open_close; source_water_solute_merchandise_kg; evaporated_water_kg; exported_original_liquid_portion_ids_kg; other_identified_liquid_sinks_kg; absence_evidence; unresolved_flags | Before observation the responsible store analyst inventories each excluded-but-required common module and existing shelf/base/counter, names owners/source gates and fixes calc_completion drivers. During the whole pool collect original meter/transaction/time/area/condition/task/vehicle/asset records and supplier scopes; instrument actual loads/routes when needed. Inspect condition occurrence each shift/maintenance event and retain dated photos/zero-event attestations. Check actual intact-film damage/permeability and indoor/exterior paths with supplier spec, site walkdown and species screening; unknown is not absence. Retain actual terminal-air measurement conditions/capture/export/stock data when a release exists, adding species-specific cards. Responsible analyst must create named atomic bilingual cards/protocols for each actual completion exchange and bind compatible product/waste/elementary identities, calibrations and provider boundaries before total retail aggregation. A module with missing source/driver/identity remains explicitly uncompleted; the partial module may be used only as labeled partial. Apply calc_completion and calc_assets fixed methods; use same original IDs, one responsibility factor and same N once per reference flow; keep named common results separate until exact scope/overlap reconciliation. All actual beneficiaries and failed/idle periods remain in pools. | MJ; kWh; kg; m3; m2*h; min; Item(s); vehicle-km; t*km | Plan before collection; continuous meters/each task-event; daily occurrence screen; period and final cutoff reconciliation; reopen late corrections | Same exact pool/version/return horizon as cp_goods; full asset history for each common asset | Named store/common providers and actual receiving/exterior terminal gates; outside dedicated-module card scope | per reference flow | Signed completion matrix/owner, original meter calibration and bills, task/time/area/vehicle/asset ledgers, provider scope and IDs, species/path/blank evidence, occurrence/absence attestations and explicit unresolved list |
| cp_refrigerant_completion | goods_account | mandatory actual HVAC refrigerant raw-balance completion | source-lot circuit/recovery-store/air-path ledger | refrigerant_species; circuit_id; source_lot; factory_charge_in_asset_scope; C_open; F_factory_installed; T_ext; T_reuse; C_close; R_extract; X_intact; S_rec_open; S_rec_close; R_sent; X_rec; L_rec_room; external_makeup_open_receipts_close_transfer_loss; A_open; A_close; K_open; K_close; captured_species_sent; other_contained_species_sent; species_transformed; exterior_C_F_T_P_wetdry; other_source_flux; allocation_driver; final_asset_responsibility; N | At commissioning and each actual charge/extraction/transfer, identify refrigerant and full device/provider initial-charge scope, measure actual circuit and cylinder gross/tare kg with calibrated instruments, retain source-lot IDs and measured mixture composition. Establish actual opening/closing circuit charge by validated controlled recovery-and-weigh with measured residual/line-transfer corrections and logged recharge, or exact controlled commissioning-and-all-transfer mass history with documented uncertainty; nominal nameplate charge alone is not actual stock. Log stock-testing extraction/recharge as the same R_extract/T_reuse events once, including actual test resource/loss burdens. Weigh recovery/makeup cylinders gross-tare and measure retained capture stocks separately. At actual operating/terminal regimes measure exterior paths, inlet/outlet concentration, flow, T/P/wet-dry state and background with validated species-specific calibrated method, sampling frequency covering regime changes and uncertainty. Observe actual capture/export/transform and independent other-source flux; unknown is not0. Responsible analyst records each actual presence/absence and creates named matching bilingual refrigerant cards/protocols for that HVAC completion module before total aggregation. Use calc_refrigerant_completion and calc_completion; raw balances first, disjoint attribution then same N once. per reference flow | kg; kg/m3; m3/h; T; P | Each charge/extraction/transfer; opening/closing and actual retirement; continuous or regime-stratified exterior sampling with documented coverage | Same cohort/version and complete original-charge/recovery history across all beneficiaries | Actual common HVAC equipment, recovery/makeup/capture stores and every actual exterior air gate; no cabinet electricity/charge invented | per reference flow | Original nameplate/BOM and provider charge scope, calibrated mass/species/flow instruments, full stock/event/origin ledger, actual receiver/treatment/capture evidence and absence/unknown flags |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | N is the count of unique original packs finally accepted intact for own-use at the declared cutoff. Count one qualifying original pack once after linked returns/resale; repeated handovers are not additional outputs. N excludes final refusal, unqualified retention, supplier return, internal transfer, loss and unresolved/open stock. For N>0 the reference output is N/N = 1 Item(s). Any final revocation of qualified acceptance removes that original service and revises all attributed burdens, even if the recipient physically retains the pack; record that failed-retained pack in F_ext and B_f/B_t. Physical recovery is not required to revoke N. A price-only adjustment with valid final acceptance changes none. | original_pack_id; sku; actual_handover_dates; qualified_acceptance; physical_return_links; adjudication_version; cutoff | N Item(s); 1 Item(s) reference output | ghg-product-2011; fda-retail |
| calc_stock | goods_account | Gross custody balance: O + R + C = H + T + I + Wp + K, in original-pack equivalents, where O opening custody, R newly received, C physical customer returns, H every physical outbound customer handover including failures/repeats, T supplier returns, I external internal-chain transfers, Wp original packs removed into waste, K closing custody. The same pack can appear in multiple physical events; event links cancel re-entry. Use this only as a custody check, not N. Independently weigh source-pack gross masses at each event; damaged descendants sum their actual original goods/pack portions. Separate external dust, moisture changes and carton material. Never equate label20 with a mass or equate total dust/whole collection-container mass with Wp. Explain any measured mass drift with actual state/uncertainty; unexplained differences block completeness. | opening_pack_ids; receiving_ids; gross_handover_ids; return_ids; supplier_receipts; transfer_ids; waste_parent_ids; closing_count; actual_gross_kg | count custody reconciliation and separate kg component reconciliation | ghg-product-2011 |
| calc_background | failed_background | Partition every original accepted source pack at its receiving gate into B_s successful, B_f final retailer-responsible failure, B_t continuing transfer/supplier responsibility, B_open still open/unresolved; B_receipt = B_s+B_f+B_t+B_open. In the intact whole-pack route these are actual source-pack counts, not label tobacco kg; B_s = N only after one-origin/one-final-pack evidence. Mark each original background exactly once. This module adds only B_f/N Item(s) of the actual SKU production-and-inbound service at that same receiving gate. B_f includes an external failed-retained pack if the retailer retains its burden; its separate physical output F_ext is not waste. Signed recipient assumption can move it to B_t once, never erase responsibility. Successful downstream goods require B_s/N actual original-pack backgrounds, with actual cigarette count, tobacco/additive mass and moisture, filter/paper/adhesive, consumer/transport packaging and inbound route supplied by verified same-SKU supplier BOM or measured representative destructive source samples with uncertainty; 20 is a count specification, not a mass/composition default. Any retailer-destructively-tested QC source pack outside the sale route remains a recorded failed/sample origin in B_f with actual residual carriers and test resources in cp_completion; supplier QC already included in its background is not added again. B_open is not silently zero: keep the pool provisional until responsibility resolves and revise all linked numerators. Waste descendants never each receive a new source-pack background. | original_receiving_pack_id; responsibility_owner; final_fate; sku_supplier_BOM; transport_gate; original_mass_state; B_s; B_f; B_t; B_open; N | B_f/N Item(s) failed background; B_s/N downstream goods bridge | ghg-product-2011; pmi-manufacture |
| calc_residuals | carton_waste; pack_waste; dust_waste | For each uniquely weighed physical carrier c, m_c = gross_c-tare_c in kg at actual dispatch moisture/state; x_c = sum_c(a_c*m_c)/N. Direct source attribution sets a_c=1 for that pool; shared dry dust/cartons use measured parent-source portions or reserved cabinet exposure from allocation_order, exactly once. Split ledger is component-by-origin-by-destination, sum of actual portions equals whole carrier mass. Pack waste includes actual tobacco, filters, papers, inner foil, board and film still in that discarded carrier; residues separated into dust carry their original portion ID and are excluded from whole-pack residual mass. Cabinet ambient dust is not assumed tobacco or nicotine. Include actual accumulated residuals and corrections across zero-sale intervals. Stock at closing is not dispatched waste; carry it forward with origin. Never multiply whole-carrier mass by composition and then apply a second destination fraction already embodied in weighing. | carrier_id; source_portion_id; gross_kg; tare_kg; moisture_state; pickup_date; actual_receiver; accepted_treatment_scope; a_c; N | kg of each actual waste carrier per reference service | ghg-product-2011 |
| calc_assets | cabinet_asset; brush_asset; cabinet_eol; brush_eol | For asset j, beneficiary c and version v: e_jcv is attributable exposure in the pool; cabinet exposure is reserved usable shelf m3*h including occupied, held-return and idle reserved time, brush/set exposure is actual cleaning task minutes including empty positioning/return, plus reserved idle time allocated by the declared cleaning reservation shares. Forecast L_jv is expected total lifetime exposure of that same asset across all beneficiaries, including exposure before the pool; obtain installed date, service records, supplier condition evidence and prospective planned duty, not a default life. f_jcv=e_jcv/L_jv; input_j=sum f_jcv/N Item(s) for each complete unit. Preserve original asset ID, original manufacture quantity and all prior beneficiary fractions. A changed L recalculates and replaces all old-version fractions; it does not start a second asset. At retirement reconcile lifetime actual exposure E_j and final fractions e_jc/E_j, allocating the residual and correction to original pools so sum_c f_final=1. Terminal direct net mass m_end is weighed complete after actual removed parts; x_EOL=sum_j(m_end_j*f_final_jc)/N, exactly one responsibility fraction. Exclusive alternative BOM reconstruction subtracts recorded actual removed components only when using original BOM mass, never again from direct net weighing. Reused intact asset transfers retain original ledger and manufacture responsibility; they are not terminal waste. If E or L or prior beneficiaries are unknown, retain uncertainty/incompleteness, never f=0 or fabricated service life. | asset_id; original_complete_scope; commissioning_date; all_beneficiary_ledger; task_minutes; reserved_shelf_m3h; forecast_version; L_jv; E_j; removal_ids; terminal_net_kg; N | Item(s) asset manufacture share and kg terminal carrier per service | ghg-product-2011; schaefer-cabinet |
| calc_lock | lock_replacement; lock_waste | Replacement locks are actual complete keyed brass-cylinder units of one recorded model, purchased after original cabinet manufacture. For each event record actual units n_k, compatible body/cam/key scope, task date and affected reservation beneficiaries. A_k is direct assignment or that event’s reserved cabinet shelf-volume-hour share over its declared maintenance-benefit period; sum A_k across all beneficiaries=1 including no-sales reservations. x_lock=sum(n_k*A_k)/N Item(s). Removed predecessor cylinder waste is actual net kg times its event responsibility A_k/N once. A later whole-cabinet terminal carrier contains only components physically remaining; do not add a removed lock again. Labour, technician travel, lubricants and any different repair material are not hidden in a lock Item(s): cp_completion requires their actual named exchanges and event drivers before a completed retail result. | replacement_event_id; model; n_k; removed_lock_id; net_removed_kg; benefit_period; A_k; cabinet_asset_id; N | Item(s) replacement cylinder and kg removed cylinder per service | ghg-product-2011 |
| calc_transfers | supplier_return; internal_transfer; failed_retention | Each actual external product handover has one receiver, timestamp, original pack IDs, intact/damaged state and signed continuing owner. Quantity is actual identified packs at that physical gate divided by N: T/N, I/N, F_ext/N Item(s), separately. The supplier_return and internal_transfer cards apply only to actually intact factory-sealed verified20-count packs. Damaged/open/part-consumed transfers are not equivalent to these selected flows: retain raw origin/state/recipient responsibility, and block complete dataset use until a separately precisely named state/component carrier card and compatible single-process protocol are reviewed and synchronized; never silently bind them to the sealed-pack card. These custody outputs are not retail-service outputs. Transfers between shelf and backstock inside this boundary remain internal ledger movements and are not exchanges. Repeated physical passages are reconciled by event IDs, not mistaken for new original production. F_ext remains physically product held by an external recipient pending/after failed acceptance, not retailer waste; its background is B_f or B_t according to calc_background. | T; I; F_ext; receiver; gate_timestamp; original_pack_ids; state; responsibility_signoff; N | Item(s) of each separate physical transfer per reference service | ghg-product-2011 |
| calc_completion | all | Fix and disclose the completion matrix before collection. Each actual common process is linked to the same pool/version/N and a disjoint provider-scope ledger. Submeter electricity by actual circuit and time, convert kWh*3.6 to MJ; subtract a submeter from a parent only if the parent contains it. Shared lighting/fixed premises/security use reserved floor area*h including closed/idle reservations; shared HVAC uses measured thermal loads by zone or measured conditioned area*h within zones, separately by heating/cooling regime; actual refrigerant flows must additionally follow cp_refrigerant_completion and calc_refrigerant_completion; payment/checkout use actual terminal active+idle reserved minutes across all attempted transactions including failed attempts, not successful sales alone. Common cleaning and water/sewer use traced tasks/actual metered quantities, then actual cleaned area*task frequency for unavoidable shared pools. Water import is not reduced again by internal reuse. Direct effluent kg=actual discharged m3*actual full-liquid density at measured composition/T; exclusive reconstruction uses source-pool full-liquid mass: M_discharge = S_open + M_source_water + M_source_solute + M_source_merchandise - S_close - M_evaporated_water - M_exported_original_liquid_portions - M_other_identified_liquid_sinks. All terms are measured kg for that same liquid pool/origin and period, with opening/closing stock changes. Exported portions contain only mass originally from this liquid pool; never subtract the outside dry cloth/container mass, whole solid carrier or added material unrelated to the liquid source. No water-only volume equation multiplied by unrelated density. Shared moving equipment uses loaded+empty task minutes and reserved idle minutes, not load alone or distance alone. For each actual compatible identity/state/flow-type/medium/provider-gate/property/unit row separately, restore any supplied normalized result y_d to its already-attributed numerator y_d*N_d using its actual original reference denominator, pool and correction version before same-pool reconciliation; incompatible or unknown reference mapping blocks aggregation. Never mix raw and normalized values, kg and MJ, different carriers/states or unbound identities merely sharing a label. Use explicit valid unit conversion only, avoid reapplying a previously applied attribution factor, sum the disjoint compatible raw numerators, then divide once by this same N. All module raw totals are attributed first and normalized once by this N; every pool fraction sums1 across all beneficiaries, with predeclared reservation shares for zero drivers and failures retained. Existing shelves/base/counter, building, HVAC, checkout, IT/security and handling assets use separate asset IDs, actual complete provider BOM/gate and calc_assets exposure/lifetime/residual method with matching stated drivers, no overlapping cabinet/lock manufacture or treatment. Technician services, travel and other maintenance are actual event quantities with exactly one compatible homogeneous signed contract unit or actual mass/hours/distance; heterogeneous work orders require distinct named cards. Transport records actual vehicle/mode/route, loaded mass and distance, return/empty distance, fuel or compatible transport service; direct fuel and service scopes are exclusive. A t*km service covers observed empty repositioning only if provider evidence includes it, otherwise add vehicle-km for that empty segment with overlaps removed. Staff travel is actual trips/occupants/mode/distance assigned by recorded work time including idle/failure, separately disclosed. For air transfers screen actual pack permeability/specification, indoor source, background and exterior paths; measure actual species absolute inlet/outlet concentration*flow at consistent T/P/wet-dry state, or already differential/blank-corrected data in mutually exclusive modes; subtract background once, reconcile exterior flux with internal stock changes/capture/export. Captured dust/volatile species stay with actual whole carriers, not duplicated elementary emissions. Unknown flow/species/provider/driver remains a blocking completion gap, never zero. Materially changed configuration needs reviewed bilingual named atomic cards and collection protocols before total-result aggregation; no downstream modeller chooses denominator or ownership afresh. | completion_matrix; common_source_ids; raw_meter_totals; parent_scope; actual_activity; reservations; all_beneficiaries; asset_ledgers; provider_gate_matrix; actual_carriers; exterior_flux; external_module_value; external_module_is_normalized; original_module_reference_denominator_N_d; original_module_pool_version; compatible_identity_property_unit_state_medium_gate; already_applied_attribution; liquid_S_open_close; source_water_solute_merchandise_kg; evaporated_water_kg; exported_original_liquid_portion_ids_kg; other_identified_liquid_sinks_kg; N | separately disclosed complete common modules and one-N aggregate; partial result retained until complete | ghg-product-2011; pmi-manufacture |
| calc_refrigerant_completion | all | For every actual HVAC refrigerant species r and circuit j, fix original charge identity/composition and kg at the installed gate before collection; add separately named matching input, recovery/contained-transfer and exterior-air cards in the common module, never a selector flow. Use raw unallocated species kg first. Circuit: L_room = C_open + F_factory_installed + T_ext + T_reuse - C_close - R_extract - X_intact. C_open/C_close are actual circuit stocks; F_factory_installed is only new factory-contained charge entering through a newly commissioned asset in this period and is never also in C_open. T_ext is actual external-origin makeup charged, T_reuse only actual internally recovered charge; R_extract is actual circuit extraction, and X_intact is charge actually leaving still inside an intact transferred/retired circuit, not extracted recovery. Internal recovery-origin store: S_rec_open + R_extract = S_rec_close + T_reuse + R_sent + X_rec + L_rec_room; any external purchased recovered refrigerant is tracked as external-origin makeup in a separate origin partition, not falsely free T_reuse. External makeup store is likewise reconciled by actual opening+external receipts=closing+T_ext+actual outward transfers+measured store losses; production input follows actual source-attributed external makeup consumed/lost, not all purchases or all T_ext+T_reuse. Factory initial-charge production belongs to the actual complete asset background once, never an extra makeup input, but its physical leakage remains in the raw mass balance. Original/source-lot IDs follow every retained/recovered portion across periods. At the actual indoor air boundary G_room = L_room + L_rec_room + actual attributable makeup-store/other identified target-source release. Exterior original-species release E = G_room + A_open-A_close + K_open-K_close - captured_species_sent - other_contained_species_sent - species_transformed; A and K are measured original-species kg in indoor air and retained capture stock. Transformation needs actual species composition/stoichiometry, never an assumed disappearance; original unchanged species is not also reported in transformed/captured carriers. Independently measure every actual exterior path by integral(C_out*F_out-C_in*F_in)dt at consistent measured T/P/wet-dry basis, with exclusive absolute/differential/already-blank-corrected modes and background removed once; subtract only independently measured other-source exterior contribution to compare the target E. Raw circuit extraction R_extract is not air capture; R_sent and X_intact and captured-species exports are mutually exclusive actual portions, not subtracted twice. A whole recovery cylinder/sorbent/device carrier includes its contained species; do not also count those species as exterior air. Quantify each actual mixture carrier with compatible identity/quantity and measured composition only where conversion requires it; no assumed purity/capture0. Only after all raw stocks and terminal paths reconcile, apply the fixed all-beneficiary HVAC/event driver in calc_completion once to operating makeup/loss/recovery, and divide by this N once. Terminal device/residual recovery/treatment uses its single final lifetime responsibility from calc_assets, never another manufacturing fraction. Initial charge background is not counted again at terminal. Unknown circuit, retained stock, exterior path, mixture, factor, provider or owner blocks completion; no default refrigerant, zero leakage or default emission factor. | refrigerant_species; circuit_id; source_lot; factory_charge_in_asset_scope; C_open; F_factory_installed; T_ext; T_reuse; C_close; R_extract; X_intact; S_rec_open; S_rec_close; R_sent; X_rec; L_rec_room; external_makeup_open_receipts_close_transfer_loss; A_open; A_close; K_open; K_close; captured_species_sent; other_contained_species_sent; species_transformed; exterior_C_F_T_P_wetdry; other_source_flux; allocation_driver; final_asset_responsibility; N | Actual named refrigerant input/recovery/carrier and exterior-species kg rows in separately completed HVAC module, per same reference service | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | Every selected flow is presently a concrete unbound semantic identity. Bind a direct-read official UUID, public state and exact record bytes/hash with a matching receipt before declaring identity verified, then compare official bilingual names, product/waste/elementary type, state, property/unit and compartment to the actual card. Count and Mass support UUIDs identify properties only, never the service, enclosure or cigarette pack. Unavailable identity/provider background blocks a complete dataset; it is not an error to retain candidate unbound rows with these explicit duties. | Original official response and matching receipt; property/unit chain; per-row unresolved/completion ledger |
| coverage | all | All actual required events, zero/failed cohorts, goods partitions, terminal carriers, reservations and historical asset beneficiaries must reconcile. Calibration and uncertainty are source-specific: retain scale resolution, repeated checks, count reconciliation, timer/length verification, sampling error and supplier uncertainty; do not invent thresholds or default ranges. Missing/unknown is flagged and resolved by measurement, verified compatible source or an explicitly reviewed estimate with sensitivity, never numeric0. Whole-zero N cannot be normalized. | Complete raw source/event/asset/residual reconciliation; calibration certificates; uncertainty and resolution register |
| translation_projection | all | Check every mandatory boundary, formula, denominator, input field, protocol link, qualifier and deduplication duty in English, Chinese and generated structured rules, then in consumer guidance. Each protocol process_id names exactly one real process. Source IDs and stable rule/row IDs must remain valid with no orphan old names. Generate from canonical Markdown only; a populated Chinese file or projection fingerprint alone is not semantic alignment or scientific approval. | Actual populated-field/array bilingual comparison and rule-by-rule reading; exact generated projection; runtime guidance source references |
| partial | all | Disclose candidate status, all unbound flows, actually observed site dates and the dedicated-only boundary prominently. The mandatory completion matrix is not optional and cannot be replaced by a modeller’s later choice. Known excluded common processes remain unquantified until separately supplied; no full-retail, full-product-life-cycle, legal or standards-conformity claim follows from a passed schema/measurement check or classification mapping. | Published profile, fixed completion matrix, actual coverage/unknown flags and review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference | all | Reject a dataset if SKU/20-count sealed-pack route, partial label, final acceptance criterion, actual gates, N or qualifier fields are missing/contradictory. Refuse normalization for N=0. Reject counted repeat services, price-only reversals treated as physical returns, and unqualified external retention counted as success. | ghg-product-2011; fda-retail |
| quantity | all | Require raw custody and independent mass reconciliation, complete receiving-background partitions, all-beneficiary allocation and old-version correction, cumulative asset fractions and terminal residual closure. Reject label-count-to-mass defaults, missing receiving BOM, transferred/waste backgrounds duplicated, carrier/contained-species duplication, double-normalization, unknown=0, direct-net/BOM double subtraction or terminal f squared. | ghg-product-2011 |
| complete_scope | all | A partial result may expose only its stated dedicated module with explicit unresolved identities; reject any total retail claim until every common module in cp_completion has actual quantified or evidenced-absent status and compatible named bilingual cards/protocols. Check shelf/base/counter separate from the enclosure, initial/maintenance/EOL ownership, actual empty handling/trips, idle/zero-driver shares and terminal air/carrier overlap. | ghg-product-2011; schaefer-cabinet |
| identity_projection | all | Reject verified-identity claims without original official response/receipt/type/property/unit/compartment agreement. Require current source-generated projection and matching EN/ZH ordered rule IDs, actual populated business fields, formulas/units, card identities, source IDs and single-process protocol links. A marker/check pass cannot approve scientific method, complete translation or publication. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only as the explicitly partial dedicated manual-cabinet module for the same declared SKU/gates, with verified identities/backgrounds when available; completed retail totals require cp_completion and calc_background integration |
| allowed_use | Same-SKU dedicated-route collection and separately labeled partial service; compare only identical completion/goods/asset/cutoff scopes |
| excluded_use | Whole tobacco leaf coverage, different products/routes/pack counts, manufacture or consumer smoking/health footprint, legal/standards certification, full-retail result without fixed common modules |
| required_metadata | All reference qualifiers; site/SKU/source period/gates; N/raw ledgers/correction versions; all-beneficiary fractions/asset history; source hashes/UUID evidence; provider gate matrix; partial/completion status |
| required_quality_disclosure | Candidate/unbound identity status; actual measured/calculated records and uncertainty; missing B_open/driver/receiver/asset evidence; zero-output pools; explicit uncompleted common modules and source-specific limits |
| update_trigger | Changed SKU/pack/BOM/market/route/gate; actual powered equipment or cleaning/material/transport route; provider identity/scope; lifetime forecast/retirement; new/late returns/failures; source/translation/projection changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62128 | official_guidance | UNSD CPC Version3.0 explanatory note62128: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62128 | Classification context includes group250 tobacco products; this specific service subset is narrower. No authoring identity or positive mapping is created by the note. |
| fda-retail | official_guidance | US FDA, Selling Tobacco Products in Retail Stores, Rules for Cigarettes section, web observation2026-10-27: https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/selling-tobacco-products-retail-stores | Context for intact manufacturer packs and count-based retail handling. This PCR deliberately uses one20-count SKU and staffed handover; no copied age/pack legal limits or cross-jurisdiction compliance claim. Actual applicable eligibility evidence must be collected. |
| pmi-manufacture | handbook | Philip Morris International, How cigarettes are made, manufacturing/final-pack sections, web observation2026-10-27: https://www.pmi.com/faq-section/smoking-and-cigarettes/how-cigarettes-are-made | Manufacturer evidence for processed tobacco, papers/filters and foil/pack/protective-film/carton/case sequence. It supplies no SKU composition, pack mass, emission rate or default background; brand-specific quantities require original supplier records. Marketing/health comparisons are not adopted. |
| schaefer-cabinet | handbook | J.W.Schaefer Metallverarbeitung, ROX cigarette display, manual handling/technical specification/options, web observation2026-10-27: https://www.schaefer-mv.de/en/rox-cigarette-display/ | Feasibility of manual steel frame/shutter/keyed enclosure. Ordinary existing shelves and optional drawer base require actual disjoint foreground BOM ownership. Catalogue dimensions, mass, thickness, installation time and security/insurance claims are not defaults or verified site specifications. |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapters6–7 and9: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Service unit, explicit process boundary and allocation hierarchy context only. Specific custody/background, partial completion, lifetime exposure and waste equations are declared PCR collection methods. This deliberately partial module does not claim full-standard conformity or supply numerical factors. |
