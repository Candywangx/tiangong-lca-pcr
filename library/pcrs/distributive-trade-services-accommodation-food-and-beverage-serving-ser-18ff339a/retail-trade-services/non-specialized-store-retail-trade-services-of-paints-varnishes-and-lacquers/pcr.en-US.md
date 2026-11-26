---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paints-varnishes-and-lacquers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Retail services for original sealed cans of white water-based acrylic interior-wall paint

## 1. Scope and Applicability

A narrower incremental retail-service PCR for one actual homogeneous sealed factory-white waterborne acrylic interior-paint SKU/original 3.79 L can model in a non-specialized mixed-assortment store. Read sb_scope, sb_gates and sb_route_gate as mandatory applicability gates. No field quantity, full LCI, safe-use or compliance conclusion follows from the manufacturer specification. All support modules must be completed by actual source inventory before a complete-service dataset is claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paints-varnishes-and-lacquers |
| classification_refs | CPC3.0 62164; explanatory note group351; narrower scope proposal. Actual accepted edges and acceptance decisions are authoritative in classifications/mappings/cpc-3.0-to-pcr.yaml and its durable ADR references |
| covered_products | Incremental sealed original-can walk-in retail service for one white waterborne acrylic interior-paint SKU, with measured original wet-fill and package configuration |
| excluded_products | Specialized stores; other group351 goods; open/tinted/decanted/shaken/leaking paint; deliveries; coating manufacture or application |
| representative_product | Retail services for original sealed cans of white water-based acrylic interior-wall paint; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Receipt; sealed storage/display; electronic checkout/receipt; final valid sealed acceptance; conditional intact returns and intact waste |
| market_state | Wet formulated liquid inside intact sealed original complete package; no dry-film service equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Non-specialized mixed-store retail service for one sealed original pack of white waterborne acrylic interior paint |
| How much | One final-valid service for one distinct original can ID; no nominal-fill conversion |
| How well | Correct actual SKU, factory colour, sheen, sealed model and lot; intact condition and customer acceptance evidence |
| How long or cycle | Prospectively declared pool and return-observation cutoff, with all late source corrections retained |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-specialized mixed-store retail service for one sealed original pack of white waterborne acrylic interior paint |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and mixed assortment; actual SKU/batch; factory colour/sheen/formulation; nominal pack and actual wet-fill; full original can BOM; intact seal; no tint/opening route evidence; pool window and final acceptance criterion; source S/F/T/O; support models and provider stages; denominator/history version; uncertainty and identity gaps |

Required qualifiers shall be declared in dataset metadata, process notes or reference-flow comments; missing values make the dataset incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_reference | service_output | Number of items | Item(s) | Use one final-valid distinct service; per reference flow. Q_p is count, independent of measured net wet paint kg or nominal L. |
| mu_carrier | sealed_paint_waste; carton_waste | Mass | kg | Use actual full carrier consignment net kg, not nominal volume, dry solids or duplicated component weights; cp_waste. |
| mu_energy | electricity | Net calorific value | MJ | Record actual kWh and use 1kWh=3.6MJ once; energy is a numerator, service count is denominator. |
| split_labour_time | cleaning_service | Time | h | Use signed actual purchased labour hours only; order counts, area and asset counts cannot replace h. Materials, energy, tools, travel and wastes are independent exchanges. In-house hours are QA only, with no invented purchased exchange; normalize attributed hours once by the original final reference denominator. |
| selected_energy_identity | split_support_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |
| selected_freight_identity | loaded_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The selected road-freight identity uses the official goods-transport property/unit.1kg*km=0.001t*km; preserve the declared original quantity/attribution mode and convert only once. Actual vehicle, cargo conditions and provider stages remain independent applicability gates, with no assumed background or extra loaded share. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual sealed original paint-can stock at store receiving gate |
| starting_condition_role | Incremental retail service; original-gate source genealogy maintained |
| product_classification_scope | Narrower candidate subset of CPC3.0 62164 group351 goods |
| recursive_input_rule | Exclude successful original merchandise S only; characterize failed_original F and actual support inputs once, with custody satellites named in sb_custody |
| upstream_dataset_requirement | Actual complete same-gate original can, utility, asset, network, cleaning, carton and treatment source inventories; unresolved identity/provider prevents complete use |
| disclosure | Pool and returns cutoff; exclusions; source responsibilities; raw provenance, history corrections, all gaps and candidate status |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| sb_scope | all inventory rows | Admit only a documented non-specialized mixed-assortment walk-in store, one actual SKU and original package model: factory-white waterborne acrylic-dispersion interior paint, one sealed nominal 3.79 L can, no retailer-added tint, dilution or shaking. white acrylic interior-wall paint White(01) is a real specification anchor, not a mandatory brand. A different formulation, sheen, pack or route is a separate pool and applicability review. Manufacturer 100% acrylic describes the binder vehicle, not the whole wet formulation or solids fraction. Record actual lot identity and package BOM; no manufacturer nominal weight substitutes for field quantity. | un-cpc3-62164; bm-f551-2025 |
| sb_gates | all inventory rows | Start at store receipt and finish at final valid customer acceptance of the still-sealed original can. Include all same-configuration receiving, storage, merchandising, checkout, failures, closure and idle periods prospectively in pool p. No customer travel, home delivery, application, dry film, consumer cleanup or household disposal. Never confuse non-specialized mixed merchandise with non-exclusive brand authorization. CPC explanatory note covers group351; this PCR covers a narrower paint subset, not artists colours, ink, varnish or lacquer. | un-cpc3-62164 |
| sb_route_gate | all inventory rows | cp_route must establish no opened/leaking cans, tinting, decanting, retailer shaking, spraying, solvent cleaning, combustion, refrigerant equipment, powered handling, paper receipts, retailer bags or customer packaging. Electric resistance heat and ventilation may be included in electricity and the fixed-building asset. An unobserved condition is unknown, not absent. Any actual excluded activity blocks complete applicability until named state/species/material cards, raw protocols, conversions and bilingual projection are independently added and reviewed; do not assume sealed storage has a VOC emission factor, dry-film solids conversion or regulatory approval. | bm-f551-2025 |
| sb_original_sources | failed_original | The service excludes successful merchandise source S. For each original can source s, q_s and its complete supplier vector V_s include actual wet paint plus full original body/closure/liner/label/adhesive and upstream transport to this receiving gate. Partition original-source responsibility S_s+F_s+T_s+O_s=q_s; S is ultimately accepted goods, F is unrecovered loss/failed goods charged through failed_original, T is named continuing recipient/internal asset, O is actual open stock. Retain physical missing versus unresolved signed residual separately. A whole homogeneous original can may use one count vector. If components have different responsibility, replace the whole input by actual separately measured component cards and verified supplier component vectors, conserving the original vector; never split impacts by mass fraction. No acquisition for S is in the service; a separately declared downstream GOODS study may add S once. |  |
| sb_custody | supplier_handoff; external_retained; sealed_paint_waste | Only supplier_handoff and external_retained are non-characterized physical custody satellites; failed_original remains a characterized Product input. For supplier return record actual store dispatch gate/time and named supplier receiving gate/time, consignment and signed transport-responsibility party. Original goods source T continues at the signed receiving party; that change does not erase return movement. If the store provides/commissions the return, include its disjoint store-gate-to-supplier-receipt transport under cp_transport; if supplier-provided already in an evidenced supplier package, retain its source/boundary/responsible system and do not add it again. Uncovered or unknown transport responsibility blocks completeness. External retention without valid acceptance has actual named recipient/state and F/T responsibility, not automatic store waste. Actual intact cans dispatched as waste require measured full wet-carrier kg and accepted matching treatment. Responsibility transfer never creates a new physical movement. |  |
| sb_complete_support | operations; support_assets | Include actual local lighting/ventilation/electric heating, checkout/scanner, router, payment, security and administration electricity and the seven complete actual support-asset models. network_service is connectivity only by default. A genuine indivisible same-contract connection-hour package may contain payment/admin/security remote processing only when its exact service list, one unique connection-hour denominator, actual full remote operation/electricity/capital inventories and source IDs are evidenced. Otherwise use payment_processing_service, admin_ledger_service and security_retention_service for the actual remote activities, with complete actual provider inventories and disjoint source scope; local-only activity requires evidence of no remote service. These conditional rows are inactive only with signed inclusion-in-network or actual-absence proof, never assumed covered by connectivity. The original cleaning-provider inventory must expose actual water/detergent/tool/transport/wet-carrier/treatment quantities for separate cards. Any unsupported stage, constituent, overlap or service blocks complete-service use. cleaning_service is now purchased labour h only; the complete cleaning-provider inventory above is raw evidence for mandatory split_exchange_identity expansion of actual water, formulation, tools, travel and carriers, with old full-package characterization reversed. | jrc-retail-2013 |
| sb_provider | all inventory rows | Each background has object/model/BOM, geography, technology, original source-ID, lifecycle stages, period and exact operations. A different provider ID does not prove disjoint scope. Do not add electricity inside operating-service packages again; exclude outside transport, maintenance or end-of-life already in complete asset vectors and collection/treatment already in waste contracts. Provider gaps require actual atomic extension cards before completion. The network service excludes local powered devices/electricity; cleaning_service excludes store building and store-metered electricity. |  |
| split_exchange_identity | all inventory rows | Each card has exactly one concrete exchange identity and one reference measurement property/unit; a unit group is not a second property, and auxiliary measurements are conversion evidence only. Labour cards no longer carry bundled materials/energy/equipment/wastes. Retained complete homogeneous assets, original packaged goods and real mixed waste carriers require matching actual whole-scope background/receiver treatment and full composition; heterogeneous collections or selectors are prohibited. An original exchange enters one core card or one split source only; reverse all old package characterization when replacing it and combine only disjoint raw quantities with identical identity/property/unit. Every other actual substance, part, fuel, refrigerant, emission and treatment gap requires a named bilingual card and process protocol; unknown is never zero or complete. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Receiving, custody and final acceptance | required | All pools | Receiving, custody and final acceptance | per reference flow |
| operations | Electricity, network and cleaning support | required | All pools | Electricity, network and cleaning support | per reference flow |
| support_assets | Complete actual supporting asset models | required | All pools | Complete actual supporting asset models | per reference flow |
| cartons | Original transport-carton first use | conditional | Actual verified carton or intact discarded-carrier occurrence; prove absence otherwise | Original transport-carton first use | per reference flow |
| residual | Intact carrier dispatch and treatment | conditional | Actual verified carton or intact discarded-carrier occurrence; prove absence otherwise | Intact carrier dispatch and treatment | per reference flow |
| transportation | Independent omitted mass-capacity road transport | conditional | Actual disjoint transport not inside a complete source/provider package; absence/inclusion evidence otherwise | Loaded, empty and stationary activity with original owner history | per reference flow |
| split_support | Separate physical exchanges of cleaning or maintenance | conditional | Actual occurrence; prove presence or absence for each exchange | Disjoint resources, equipment and waste | service_output |

### Process: Receiving, custody and final acceptance (`retail`)

#### Inputs

##### Product flows

###### Original sealed white waterborne acrylic interior paint can, actual homogeneous 3.79 L model, failed-source equivalent (`failed_original`)

Actual complete original source charged only to F, including missing and never-accepted goods whose responsibility is not transferred. Exact net wet fill and complete can BOM/vector must be provided.

- Selected flow: Original sealed white waterborne acrylic interior paint can, actual homogeneous 3.79 L model, failed-source equivalent
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_F/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_sales
- Sources: bm-f551-2025

#### Outputs

##### Product flows

###### Non-specialized mixed-store retail service for one sealed original pack of white waterborne acrylic interior paint (`service_output`)

One final-valid service, not the paint-production flow or coating-area function.

- Selected flow: Non-specialized mixed-store retail service for one sealed original pack of white waterborne acrylic interior paint
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_sales
- Sources:

###### Intact sealed original white waterborne acrylic paint can physically handed to supplier (`supplier_handoff`)

Conditional actual custody output; signed receiver continues the original-source background and transport responsibility.

- Selected flow: Intact sealed original white waterborne acrylic paint can physically handed to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_supplier_physical/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_sales
- Sources:

###### Intact sealed original white waterborne acrylic paint can retained externally without final acceptance (`external_retained`)

Conditional actual unaccepted carrier, with named recipient and F/T responsibility; never automatic store waste.

- Selected flow: Intact sealed original white waterborne acrylic paint can retained externally without final acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_external_unaccepted_physical/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_sales
- Sources:

### Process: Electricity, network and cleaning support (`operations`)

#### Inputs

##### Product flows

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`electricity`)

Historically verified Product identity at point of use; supplier, voltage, geography, period and full source split remain foreground requirements. Includes all actual local supporting device electricity.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6*E_p/Q_p MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_operations
- Sources: jrc-retail-2013

###### Actual contracted fixed-line connectivity connection-hour service, with only evidenced same-contract remote services (`network_service`)

Actual signed connection and payment/admin data service boundary includes remote infrastructure only when explicitly evidenced; no monetary-fee LCI proxy.

- Selected flow: Actual contracted fixed-line connectivity connection-hour service, with only evidenced same-contract remote services
- Flow property / unit: Connection duration / h
- Amount rule: N_net_p/Q_p h
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_operations
- Sources:

###### Wet floor-cleaning labour only (`cleaning_service`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Wet floor-cleaning labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / Q_p; cp_split_labour_operations.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_operations`
- Sources:

###### Actual remote payment authorization-request processing service (`payment_processing_service`)

Conditional actual backend processing event service; excludes local payment terminal/electricity and any same-contract network-contained service.

- Selected flow: Actual remote payment authorization-request processing service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_pay_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_backend
- Sources:

###### Actual remote retail stock-ledger event-processing service (`admin_ledger_service`)

Conditional actual homogeneous stock-ledger event processing service, with complete provider operation and capital inventory.

- Selected flow: Actual remote retail stock-ledger event-processing service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_admin_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_backend
- Sources:

###### Actual remote security-camera video retention service (`security_retention_service`)

Conditional actual retained-video service; source bytes and retained time measured separately from local camera operation and network connectivity.

- Selected flow: Actual remote security-camera video retention service
- Flow property / unit: Data storage duration / GB*h
- Amount rule: N_video_p/Q_p GB*h
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_backend
- Sources:

### Process: Complete actual supporting asset models (`support_assets`)

#### Inputs

##### Product flows

###### Complete actual store building and fixed-lighting/ventilation fixture model lifecycle package (`building_asset`)

One actual complete homogeneous model lifecycle source; exposure unit m2*h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual store building and fixed-lighting/ventilation fixture model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual steel paint shelf model lifecycle package (`shelf_asset`)

One actual complete homogeneous model lifecycle source; exposure unit m3*h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual steel paint shelf model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual checkout and scanner assembly model lifecycle package (`checkout_asset`)

One actual complete homogeneous model lifecycle source; exposure unit h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual checkout and scanner assembly model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual network-router model lifecycle package (`router_asset`)

One actual complete homogeneous model lifecycle source; exposure unit h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual network-router model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual payment-terminal model lifecycle package (`payment_asset`)

One actual complete homogeneous model lifecycle source; exposure unit h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual payment-terminal model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual security-camera model lifecycle package (`camera_asset`)

One actual complete homogeneous model lifecycle source; exposure unit h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual security-camera model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

###### Complete actual administration-computer model lifecycle package (`admin_asset`)

One actual complete homogeneous model lifecycle source; exposure unit h. Supply actual model/BOM/stage inventory and history. Exclude metered operation and other asset cards; contained fixtures/components require exact source-ID ownership.

- Selected flow: Complete actual administration-computer model lifecycle package
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_asset_a_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_assets
- Sources:

### Process: Original transport-carton first use (`cartons`)

#### Inputs

##### Product flows

###### Actual complete corrugated transport-carton model at first use (`carton_input`)

Conditional original transport carton source, measured complete object/BOM rather than pure board kg; no new retailer customer packaging is admitted.

- Selected flow: Actual complete corrugated transport-carton model at first use
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: N_carton_p/Q_p Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_carton
- Sources:

### Process: Intact carrier dispatch and treatment (`residual`)

#### Outputs

##### Waste flows

###### Intact sealed original can with wet white waterborne acrylic paint, receiver-accepted treatment carrier (`sealed_paint_waste`)

Conditional actual intact discarded full can, not a dry metal can or loose paint; direct consignment weighing and complete receiving treatment are required.

- Selected flow: Intact sealed original can with wet white waterborne acrylic paint, receiver-accepted treatment carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: N_waste_r_p/Q_p kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: bm-f551-2025

###### Used corrugated transport carton, actual whole dispatch carrier (`carton_waste`)

Conditional direct actual carton dispatch; signed receiver accepts its attached closure/adhesive state; no overlap with paint-can waste or component dispatch.

- Selected flow: Used corrugated transport carton, actual whole dispatch carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: N_waste_r_p/Q_p kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: jrc-retail-2013

### Process: Independent omitted mass-capacity road transport (`transportation`)

#### Inputs

##### Product flows

###### Actual mass-capacity truck model loaded freight service, disjoint stage (`loaded_transport`)

Conditional actual loaded-only provider vector; gross carried source mass and segment distance, no assumed empty/idle coverage.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: N_loaded_p/Q_p t*km
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_transport
- Sources:

###### Actual same truck model empty-route vehicle-distance service, disjoint stage (`empty_transport`)

Conditional actual empty-only source; nonzero actual vehicle distance allocated by positive same-kg capacity reservations.

- Selected flow: Actual same truck model empty-route vehicle-distance service, disjoint stage
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: N_empty_p/Q_p vehicle*km
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_transport
- Sources:

###### Actual same truck model stationary-idle vehicle-time service, disjoint stage (`idle_transport`)

Conditional actual stationary-idle-only source, including fuel/energy and capital per matched provider boundary; zero distance does not erase idle h.

- Selected flow: Actual same truck model stationary-idle vehicle-time service, disjoint stage
- Flow property / unit: Vehicle duration / vehicle*h
- Amount rule: N_idle_p/Q_p vehicle*h
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_transport
- Sources:

### Process: Separate physical support exchanges (`split_support`)

Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

#### Inputs

##### Product flows

###### Dry unimpregnated cellulose cleaning wipe (`split_cleaning_wipe`)

Only actual first-used dry wipes of this composition; do not infer consumption from floor area or count wet used-wipe mass as supply. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Dry unimpregnated cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete manual polypropylene-bristle floor broom (`split_cleaning_broom`)

One homogeneous complete broom model, excluding replaceable consumables and operating energy; use its persistent lifetime beneficiary fraction once. Repairs are separate event exchanges. Manufacture/initial installation only; excludes maintenance and terminal treatment, which have independent actual exchanges. A packaging first-use quantity is not additionally multiplied by a tool exposure share. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete manual polypropylene-bristle floor broom
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Potable mains water supplied to floor cleaning (`split_cleaning_water`)

Independent fresh-water import at the cleaning inlet; direct mass or measured volume times matching measured density. Exclude internal recirculation and water already in purchased formulation. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Aqueous sodium dodecyl sulfate floor-cleaning formulation (`split_cleaning_sds`)

Conditional candidate only if the actual supplier/SDS confirms this single formulation. Measure as-supplied wet formulation mass, concentration and source lot; no prescribed chemical, default use or invented fraction. A different actual formulation requires its own named card before completeness. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Aqueous sodium dodecyl sulfate floor-cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete reusable manual cotton-head floor mop (`split_cleaning_mop`)

One fixed complete model and its original head/handle, using the persistent lifetime allocation once. Separately installed replacement heads need their own named event input/output cards. Manufacture/initial installation only; excludes maintenance and terminal treatment, which have independent actual exchanges. A packaging first-use quantity is not additionally multiplied by a tool exposure share. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete reusable manual cotton-head floor mop
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Complete empty HDPE-body cleaner bottle with polypropylene closure (`split_cleaner_bottle`)

Conditional actual matching packaging configuration only. Manufacture/first use is separate from the formulation net wet mass; exclude this bottle manufacture from the formulation background or document source-level removal before adding it. Reuse uses an actual lifetime ledger. Other actual packaging needs a named card. Manufacture/initial installation only; excludes maintenance and terminal treatment, which have independent actual exchanges. A packaging first-use quantity is not additionally multiplied by a tool exposure share. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Complete empty HDPE-body cleaner bottle with polypropylene closure
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Collected aqueous retail-floor cleaning effluent at treatment handoff (`split_cleaning_effluent`)

Directly measure actual whole-liquid dispatch net kg or V_discharge*rho_discharge at matched temperature/composition. Do not subtract evaporation, reuse or stock from a directly measured discharge. Dissolved detergent is composition of this carrier, not another waste exchange. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Collected aqueous retail-floor cleaning effluent at treatment handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Retired complete manual cotton-head floor mop with retained soil (`split_mop_waste`)

Measure the actual whole residual carrier after prior removals; retain moisture/state and complete recipient treatment scope. Attribute retirement over the same asset history, not only the retirement-period sales. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Retired complete manual cotton-head floor mop with retained soil
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_support`
- Sources:

###### Used HDPE-body cleaner bottle with polypropylene closure and retained formulation residue (`split_cleaner_bottle_waste`)

Actual whole carrier dispatched with closure/residue only if the receiver accepts its measured composition/state; no duplicate residue or cap waste. Direct net kg is independent of original wet formulation kg. Reusable returns need a distinct custody route, not automatic waste. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Used HDPE-body cleaner bottle with polypropylene closure and retained formulation residue
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / Q_p; cp_split_support.
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
| al_pool | all inventory rows | Declare pool p before observing sales: same store, SKU/pack configuration, route and fixed measurement window. Retain zero-sale, failure, closed and idle intervals; a pool with Q_p=0 remains unnormalizable and carries raw sources forward under a prospectively recorded same-configuration pooling rule, never deletion. No sales-revenue or refund driver. Direct meters and source subdivision take precedence over shared allocation. |  |
| al_drivers | electricity; cleaning_service | Allocate each disjoint source subpool c only by its fixed same-unit driver: lighting/ventilation/electric heat and premises fixed standby use occupied-and-reserved floor m2*h including closed reservation; checkout/payment active use measured service seconds; their idle and fixed/closed continuous subpools each use reserved terminal h; local router electricity active use measured data bytes; its idle and fixed/closed continuous subpools each use reserved local-device h; camera and admin active pools use measured supported task seconds, while their idle and fixed/closed continuous subpools each use reserved device h. Never add these dimensions. Connection-hour quantities use calc_network exclusively. Cleaning uses actual cleaned m2, not store sales. Allocate A_c_p=A_c_total*d_c_p/sum_all_b(d_c_b), including all actual merchandise/other beneficiaries. Positive known full denominators and parent-meter reconciliation are mandatory; unknown/zero driver with nonzero source requires investigation and subdivision, never silent zero. |  |
| al_assets | support_assets | For each homogeneous actual asset/model/BOM/scope source a keep complete disjoint lifecycle vector V_a: manufacture, installation, actual repairs, asset-related transport and retirement; exclude operation electricity already metered. Initial fraction f_a_h=e_a_h/L_a uses same-unit exposures: building/fixtures m2*h; shelf reserved shelf-volume m3*h; checkout/payment/admin/camera/router reserved device h. L is evidenced expected lifetime total across all beneficiaries; retain unused reservation and idle service. At retirement f_final_a_h=e_actual_a_h/sum_all_h(e_actual_a_h). Every lifespan, exposure, repair or vector revision replaces EVERY historical beneficiary numerator by delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a. Do not charge all final repairs/transport to retirement sales or use 1-sum_old_f as an allocation shortcut. Track cumulative fractions<=1 and reconcile final sum=1. Separate model cards before aggregating; do not sum unlike devices as Item(s). |  |
| al_carton | carton_input; carton_waste | A complete actual transport carton model includes board, seams/adhesive, printing and any attached closure. Use either the supplier whole-package vector or verified component vectors exclusively. Its manufacture and receiving transport follow first use: unused cartons and supplier returns carry unassigned source; at first opening allocate the complete source by actual original-can gross mass among all contents; reused cartons never repeat manufacture/inbound. Keep unused, previously used reusable, returned and discarded carton stock separately. carton_waste is directly weighed dispatch kg, not carton-input count times a catalog tare. |  |
| al_complete | all inventory rows | For any mandatory supplier module, accept only actual inventory with source-ID, module version, original denominator D_m, beneficiary ledger and complete covered stages. Recover raw numerator N_m_r=q_m_r*D_m only if normalized, or retain supplied raw N_m_r; apply a still-unassigned beneficiary share once, retaining already-attributed modules unchanged. Deduplicate by physical source/event/period/asset/stage, not provider name; add compatible core N_core_r and disjoint N_m_r only when exchange identity/property/unit match, then divide (N_core_r+sum_m N_m_r)/Q_p once. Keep unlike kg/MJ/m2 exchanges separate. Includes failed_original; never lose or add F twice. Missing actual cards, protocols, source field or stage blocks a complete-service claim. |  |
| al_transport | transportation | For an actually omitted independent road-transport stage admit only one verified mass-capacity-limited truck/model/provider vector per card. Record every loaded segment i, true empty segment i and stationary idle interval j with actual gates, km/h and kg payload-capacity reservation. Loaded tkm L_s=sum_i actual_source_gross_kg_s_i*distance_km_i/1000. Empty vehicle-km U_s=sum_i empty_distance_km_i*reserved_capacity_kg_s_i/sum_all_b(reserved_capacity_kg_b_i); stationary vehicle-h I_s=sum_j idle_h_j*reserved_capacity_kg_s_j/sum_all_b(reserved_capacity_kg_b_j). Measured source gross payloads reconcile to actual_payload_kg_i and must not exceed actual_available_payload_capacity_kg; reservation sums must not exceed that actual same-stage available kg capacity. Positive known all-beneficiary reservation denominators retain zero-load and idle sources. No idle distance0 denominator, empty tkm0 deletion or volume-limited route substitution. For each stage distinguish attribution_level: unassigned_vehicle, source_only and final_owner_pool under calc_transport. Source-only quantities skip vehicle allocation but still need original-source owner_fraction; only evidenced exact-final-owner/pool quantities skip that owner step; loaded-only, empty-only and idle-only vectors must be evidenced disjoint. A complete provider vector already covering those stages makes outside stage cards inactive with actual inclusion proof. Unknown inclusion or different capacity-limiting route blocks completion pending actual reviewed cards. Owner rules: original-goods inbound source follows S/F/T/O at its original receiving gate, with F_s/q_s charged to service and S excluded; original carton inbound follows the same first-use source fraction as carton manufacture, unused source remains stock; asset acquisition/repair/retirement transport belongs to that actual asset V and follows EVERY historical f_a_h and delta_a_h under al_assets, never all current/retirement Q. Waste/return transport belongs to the original event/source pool, with historical replacements for late events; supplier return gates/responsible party follow sb_custody. Exact-final-owner quantities never receive owner_fraction twice; original-source attribution alone is not final service/F/asset-history ownership. No separate stage if already in original V or provider package. |  |
| al_backend | payment_processing_service; admin_ledger_service; security_retention_service | Use one homogeneous complete actual provider service/vector per admitted service class, excluding local assets/electricity and network-contained sources. Payment request_id identifies one real authorization attempt, including each real refused/retry attempt; only an exclusive single-source attempt receives count1 directly. For a shared multi-SKU attempt allocate that ONE count by measured item-line processing seconds over all actual item lines under calc_backend; source tags alone do not establish a whole count. One exclusive homogeneous stock-ledger record event may be directly assigned; a genuine multi-source batch-event allocates its ONE event by measured record-line processing seconds across the complete batch, with distinct processing classes/vectors kept separate. Security footage exclusively protecting one evidenced source may be direct; shared capture fixes source ownership once from the actual protected area and original capture interval, including idle/reserved and all other beneficiaries. Retained bytes inherit that original capture/source/history map through every later storage interval, never current sales shares. Provider quantities already assigned to the exact final owner/pool are not multiplied again. Unknown line timing, area mapping, source denominator or full remote operation/electricity/capital inventory blocks completeness; additional services require actual named cards/protocols. |  |
| split_attribution | cleaning_service; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | Prefer exclusive direct measurements. For shared cleaning events attribute each raw physical quantity by actual cleaned area-events across all beneficiaries; for maintenance use the repaired asset physical driver over all beneficiaries of the actual supported work-order cycle. Retain idle, failed, closed and zero-driver loads and their original carryover rules, never discard them using sales. New tool manufacture/retirement uses persistent lifetime ledgers and historical revision deltas; installed replacement parts are charged once to their actual maintenance event, not again as an original whole-asset acquisition. Do not reapply a share to an already-attributed source or charge terminal tools only to the retirement period. Remove any contained quantity from its old background or replace the entire package with this split; never characterize both. |  |
## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_route | retail | service_output; failed_original; supplier_handoff; external_retained | foreground ledger | store_id; mixed_assortment_evidence; pool_id; window; SKU; batch; formulation_id; binder_type; sheen; colour; nominal_pack; seal_state; actual_BOM; receiving_net_wet_kg; actual_L; gross_kg; tare_kg; density_kg_L; temperature; actual_solids_method; excluded_activity_presence; absence_records; support_scope | Before pool entry inspect receiving and every shift for sb_route_gate; retain store assortment and route evidence. Weigh each actual lot or traceable representative homogeneous fill/tare sample with calibrated scales and uncertainty; supplier verified batch net-fill records are allowed when traceable to the same actual lot. Keep can intact during sale; destructive tare/solids tests use a separate representative QC sample outside sold IDs and retain its own fate/source. If only measured volume is used, net_wet_kg=actual_L*density_kg_L at matching batch/temperature; nominal3.79L is a SKU label only. Solids/density may describe comparability but never convert the service to dry-film mass or derive releases. | Item(s); kg; L; kg/L; degC | Entry and every shift; every batch/configuration change | Full prospective pool, including returns and all historical corrections | Assigned store and all admitted stock | per reference flow | Signed observations; calibrated-scale records; batch fill/BOM evidence; route and absence register |
| cp_sales | retail | service_output; failed_original; supplier_handoff; external_retained | foreground ledger | pool_id; original_can_id; source_id; q_s; V_s; S_s; F_s; T_s; O_s; receipt_id; receipts; physical_customer_returns; all_gross_customer_handovers; supplier_handoffs; internal_transfers; event_id; actual_event_date; gross_handover; physical_return; final_valid; refusal; revocation; financial_adjustment; recipient_id; seal_state; supplier_handoff; store_dispatch_gate; store_dispatch_time; supplier_receiving_gate; supplier_receipt_time; return_consignment_id; transport_responsibility_party; signed_return_contract; N_supplier_physical; N_external_unaccepted_physical; opening_goods; closing_goods; internal_transfer; condemnation_event_id; condemnation_count; confirmed_missing_count; signed_unresolved_count; old_version; new_version; numerator_correction; Q_p | Scan original-can IDs at each custody/acceptance event; record receipt lot and evidence-backed whole-source supplier vector through the same receiving gate. Review final state after declared return observation cutoff, retain later reopening. Execute vr_acceptance, vr_balance and sb_original_sources; do not infer physical return from refund or failure from a discount. Source state replacement keeps original IDs and historical dates. | Item(s); kg | Every event; pool closure and every late revision | Full prospective pool, including returns and all historical corrections | All actual can sources and external recipients; not just successful sales | per reference flow | POS acceptance evidence; signed recipient records; stock counts; supplier actual complete source inventory |
| cp_operations | operations | electricity; network_service | foreground ledger | source_id; module_version; period; meter_id; parent_meter_id; submeter_id; E_kWh_c_total; d_c_p; d_c_b; driver_unit; active_idle_fixed; reserved_area_m2; reserved_h; task_seconds; bytes; connection_id; interval_id; start_i; end_i; h_i; reserved_connection_h_i_p; reserved_connection_h_i_b; h_i_p; provider_attributed_connection_h; network_mode; same_contract_id; remote_service_list; remote_inventory_source_ids; remote_capital_scope; provider_attributed; area_m2_event; cleaned_area_event_p; cleaned_area_event_b; share_event_p; water_kg; V_discharge; rho_discharge; water_meter_id; detergent_formulation_id; detergent_origin_kg; tool_model; wet_carrier_kg; receiver; treatment_scope; cleaning_provider_inventory; network_provider_inventory; Q_p | Read calibrated meter start/end data and circuit inclusion diagrams; separately measure active/idle/fixed source subpools and all beneficiaries under al_drivers, including closed reservations. For connectivity log unique connection IDs and disjoint real start/end intervals including idle/fixed reservation; collect all same-interval beneficiary reservations and execute calc_network once. Do not recreate hours by electricity activity mode. Inspect actual signed same-contract service list, one common connection-hour denominator and full remote operation/electricity/capital inventories. Mere internet access/fee does not prove backend coverage; apply sb_complete_support and cp_backend for uncovered actual remote services. For every actual cleaning event verify signed cleaned area and complete provider raw inventory: inlet water meter/actual density, exact detergent wet-origin mass, tools, disjoint wet-carrier dispatch and treatment. Supplier method must conserve original detergent-origin kg by mutually exclusive FINAL used/rinsed/retained/dispatched-container-residue destinations: intermediate used-to-rinsed/retained is a replacement of state, never quantities added twice. Keep original formulation-origin kg separate from complete wet-carrier kg; import meter excludes internal reuse already. Direct wastewater=measured actual V_discharge*rho_discharge without stock/evaporation deductions. No unknown chemical/emission is silently omitted. If provider cannot supply complete verified quantities, actual atomic extension is mandatory under vr_completeness. | kWh; h; s; bytes; m2; kg | Meter interval and each service event; pool reconciliation | Full prospective pool, including returns and all historical corrections | All site electricity and actual network/cleaning provider scope | per reference flow | Meter calibration; complete source reconciliation; signed full provider inventory; exact detergent identity and carrier acceptance |
| cp_assets | support_assets | building_asset; shelf_asset; checkout_asset; router_asset; payment_asset; camera_asset; admin_asset | foreground ledger | asset_id; source_id; model; BOM; scope; period; beneficiary_id; exposure_unit; e_a_h; L_a; e_actual_a_h; f_a_h; f_old_a_h; f_new_a_h; V_old_a; V_new_a; N_asset_a_p; delta_a_h; manufacture; installation; repair_event_id; transport_event_id; retirement_event_id; provider_inclusions; original_history_version; Q_p | Inventory every actual building/fixed fixture and model/serial device. Verify complete source V by signed model/BOM/stage inventories, including repairs/transport/EOL and excluded operational electricity. Geometric survey and reserved-hour logs measure al_assets exposure across EVERY actual beneficiary. Record evidence-based L and update complete history at each revision and actual retirement. Use the same historical asset fractions for its independent transport/repair/EOL, not retirement-period Q. A contained complete component is not another input or terminal waste. Unknown missing model or lifecycle stage blocks completion; reconstruct actual atomic stage cards and project them before use. | Item(s); m2*h; m3*h; h | Every reserved interval, asset event and lifetime revision | Full prospective pool, including returns and all historical corrections | All seven actual support asset model sources and all historical beneficiaries | per reference flow | Asset/source register; signed complete model inventory; measured geometry; exposure and final-life reconciliation |
| cp_carton | cartons | carton_input | foreground ledger | source_id; carton_model; actual_BOM; n_carton_source; first_use_id; paint_gross_kg_contents; gross_kg_contents; unused_open; unused_close; used_open; used_close; supplier_return; transfer; discard; inbound_source; Q_p | Count actual complete carton models and record supplier whole-package or verified component vector exclusively. Weigh original contents on calibrated scales at first use; keep source assignment and unused versus used stock through reuse/return. Reconcile actual cartoning and absence separately; supplier included original can packaging is not this transport carton. | Item(s); kg | Each receipt, first use, reuse and return | Full prospective pool, including returns and all historical corrections | Actual carton sources and every original contents beneficiary | per reference flow | Complete package BOM; calibrated contents weights; first-use genealogy and stock reconciliation |
| cp_waste | residual | sealed_paint_waste; carton_waste | foreground ledger | waste_mode; dispatch_id; source_id; original_can_id; condemnation_event_id; carrier_state; receiver_id; accepted_constituents; treatment_scope; collection_transport_included; current_gross_kg; current_tare_kg; condemned_kg; direct_source_net_kg_w_p; gross_kg_w; tare_kg_w; carrier_net_kg_w; current_carrier_net_kg_w_p; current_carrier_net_kg_w_b; share_w_p; provider_attributed_net_kg; opening_waste_kg; closing_waste_kg; actual_dispatch_kg; confirmed_missing_waste_kg; signed_unresolved_waste_kg; Q_p | At every actual condemnation scan original_can_id/condemnation_event_id and weigh the full current wet can on a calibrated scale, removing only external weighing-container tare; retain individual current_gross_kg/current_tare_kg and sum condemned_kg, independently of condemnation_count. Separately count goods and weigh held waste at opening/closing. At dispatch select and document one calc_waste mode per source/consignment: direct source-separated net weighing first; otherwise actual current homogeneous whole-carrier source kg with complete all-source reconciliation; already-attributed net kg unchanged. Preserve calibration, receiver net receipt, missing-waste investigation and signed residual. Obtain exact wet-formulation/full-package or carton state acceptance and treatment inventory. Different states/compositions are never pooled under one flow. Collection transport already inside the actual treatment package is QA only; independent omissions execute al_transport/calc_transport and cp_transport before completeness. No inferred recycling credit or second stock deduction. | kg | Each actual dispatch and pool stock count | Full prospective pool, including returns and all historical corrections | Actual held waste and accepted treatment boundary | per reference flow | Calibrated weighbridge/scales; signed receiver consignment and treatment inventory; actual state photos support but do not replace acceptance |
| cp_completion | retail | service_output; failed_original; supplier_handoff; external_retained | foreground ledger | source_id; module_version; exchange_id; flow_type; property; unit; N_core_r; N_m_r; q_m_r; D_m; delta_a_h; all_beneficiary_driver; attributed_status; stage; period; overlap_event_ids; Q_p | Read each actual module original inventory and source bindings; apply al_complete/calc_complete at source level. This retail protocol is the integration view of the same operations/assets/carton/waste source records, not a second collection or another process. Each added module card must have its own real process protocol. Verify all mandatory scope in sb_complete_support, including remote payment/security/admin support, before completeness. | row-specific original units | Each module version, pool closure and history replacement | Full prospective pool, including returns and all historical corrections | All actual suppliers and core sources | per reference flow | Original inventories; full provenance; overlap map; actual parsed card/protocol coverage |
| cp_backend | operations | payment_processing_service; admin_ledger_service; security_retention_service | foreground ledger | request_id; request_source_id; request_owner_mode; pay_line_start; pay_line_end; pay_line_id; pay_line_original_pool_id; pay_line_seconds_r_p; pay_line_seconds_r_b; pay_share_r_p; event_id; event_source_id; ledger_owner_mode; ledger_line_start; ledger_line_end; ledger_record_id; ledger_line_original_pool_id; ledger_line_seconds_e_p; ledger_line_seconds_e_b; admin_share_e_p; processing_class; capture_owner_mode; capture_source_evidence; capture_cohort_id; capture_start_k; capture_end_k; capture_h_k; protected_polygon_id; protected_area_m2_k_p; protected_area_m2_k_b; exclusive_protected_area_m2_k_p; common_protected_area_m2_k; reserved_protected_footprint_m2_k_p; reserved_protected_footprint_m2_k_b; capture_share_k_p; source_id; origin_pool_id; capture_history_version; retained_bytes_i_k; retention_interval_id; retention_h_i; provider_attributed_request_count; provider_attributed_event_count; provider_attributed_GBh; provider_final_owner_pool_id; network_contained; Q_p; module_version; provider_id; service_class; same_contract_id; absence_evidence; request_time; request_result; event_time; retention_start_i; retention_end_i; remote_operation_inventory; remote_electricity_inventory; remote_capital_inventory; original_denominator; excluded_local_scope; overlap_source_ids | For each actual remote contract retain complete operation/electricity/capital inventories, homogeneous processing class and original denominator. Inspect whether each real payment attempt is exclusive or shared; measure every item-line processing start/end in seconds, retain line IDs and original pool IDs, and reconcile all allocated shares to that one attempt including refused/retries. For a stock-ledger single-record event establish sole ownership; for a real homogeneous batch-event measure each actual record-line processing seconds, retain the complete batch membership and allocate one event under calc_backend, not count1 per tag. Zero or missing shared timing blocks completeness. Survey camera protection polygons and original capture-period beneficiary footprints/reservations, including shared zones, other beneficiaries and idle reservations; reconcile disjoint mapped area to the whole polygon. Freeze capture cohort/source/original-pool fractions and history before retention. Measure actual retained bytes by capture cohort at each state change and exact disjoint retained hours; retain source genealogy through deletion/re-encoding and later intervals. Do not use transmitted-but-unstored bytes or recalculate owners using current sales. Provider already-final-owner quantities require exact pool/source/allocation-version evidence and are not multiplied again. Corrections replace original historical source allocations. Signed same-network-package inclusion or real route absence can deactivate a row; otherwise missing remote LCI/identity/scope blocks completeness. | Item(s); s; m2; bytes; h; GB*h | Each actual request/event and every retention-state interval | Full pool plus remote source lifetime/period coverage | Actual remote provider and all source-tagged beneficiary events | per reference flow | Signed complete provider inventory; source-tagged logs; overlap map and original denominator |
| cp_transport | transportation | loaded_transport; empty_transport; idle_transport | foreground ledger | transport_source_id; provider_id; truck_model; mass_capacity_limited_evidence; actual_available_payload_capacity_kg; source_id; source_owner_mode; origin_pool_id; stage_mode; attribution_level; attribution_evidence; original_source_id; owner_pool_id; owner_responsibility_class; owner_allocation_version; final_owner_loaded_p; final_owner_empty_p; final_owner_idle_p; provider_attributed_loaded_tkm; provider_attributed_empty_vehicle_km; provider_attributed_idle_vehicle_h; segment_id; actual_origin_gate; actual_destination_gate; dispatch_time; signed_receipt_time; responsibility_party; actual_source_gross_kg_s_i; actual_payload_kg_i; distance_km_i; empty_distance_km_i; reserved_capacity_kg_s_i; reserved_capacity_kg_b_i; idle_interval_id; idle_h_j; reserved_capacity_kg_s_j; reserved_capacity_kg_b_j; included_stage_source_ids; original_source_q_s; F_s; carton_first_use_fraction_s_p; unused_source_stock; asset_id; e_a_h; L_a; f_a_h; f_old_a_h; f_new_a_h; V_old_a; V_new_a; delta_a_h; event_source_fraction_s_p; owner_fraction_s_p; L_s; U_s; I_s; N_loaded_p; N_empty_p; N_idle_p; history_version; Q_p | Obtain actual disjoint provider stage inventory and real gate/consignment/telematics records. Collect calibrated source/payload kg, verified segment km, stationary elapsed idle h with energy/fuel retained, and all-beneficiary same-kg capacity reservations under al_transport. For every source/stage record read provider attribution evidence: unassigned_vehicle needs the vehicle allocation; source_only identifies actual original_source_id and skips that allocation but still follows its F/carton/asset-history/event owner fraction; final_owner_pool requires exact original_source_id, owner_pool_id, responsibility class and allocation-version proof, and skips both already-completed steps. Never infer final-owner status from a consignment or original source ID alone. Preserve stage units and original owner/history, and execute calc_transport. Revalidate/replace all final-owner historical asset receipts at each lifespan/vector revision/retirement or reconstruct source-level history; no second f and no retirement-only charge. Included complete-provider/V stages are QA only. Supplier returns retain actual store dispatch/supplier receipt gates and signed transport party. Asset stage construction is not a parallel addition beside V containing it. Unknown capacity, scope or attribution blocks completeness. | kg; km; h; t*km; vehicle*km; vehicle*h | Every segment, empty trip, stationary interval and source/history revision | All original source/event pools and asset historical beneficiaries | Actual gates, truck model and all beneficiaries | per reference flow | Calibrated weights; verified trip/time logs; signed gate receipt and responsibility; exact stage/provider inventory |
| cp_split_labour_operations | operations | cleaning_service | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | service_output | Q_p=count(distinct final_valid original_can_id); service_output=Q_p/Q_p=1 Item(s) when Q_p>0. | original_can_id; final_valid; pool_id; cp_sales | service_output |  |
| calc_source | failed_original | N_F=sum_s F_s; failed_original=N_F/Q_p. Each F_s original can carries its own complete original source V_s once; retain S_s/F_s/T_s/O_s and actual source-equivalent count, not count multiplied by package nominal mass. | q_s; S_s; F_s; T_s; O_s; V_s; Q_p; cp_sales | failed_original |  |
| calc_custody | supplier_handoff; external_retained | supplier_handoff=N_supplier_physical/Q_p; external_retained=N_external_unaccepted_physical/Q_p. These are disjoint actual state/event IDs, not T or F responsibility counts. | N_supplier_physical; N_external_unaccepted_physical; Q_p; cp_sales | custody satellite quantities |  |
| calc_energy | electricity | E_p=sum_c E_kWh_c_total*d_c_p/sum_all_b(d_c_b); electricity=3.6*E_p/Q_p MJ. Subtract a submeter only from a parent that actually includes it; retain direct disjoint meters without subtraction. | E_kWh_c_total; d_c_p; d_c_b; parent_meter_id; submeter_id; Q_p; cp_operations | electricity |  |
| calc_network | network_service | For one actual homogeneous connection-hour provider vector, deduplicate connection_id and disjoint interval i: h_i=(end_i-start_i) in h. Each real connection interval appears once, including idle/fixed reservation. Allocate h_i_p=h_i*reserved_connection_h_i_p/sum_all_b(reserved_connection_h_i_b); N_net_p=sum_i h_i_p; network_service=N_net_p/Q_p. Reservations are recorded for all actual beneficiaries in the same interval and denominator is positive/known. Active/idle/fixed electricity subpools do not create extra connection hours; byte/task drivers never allocate this h quantity. Already-attributed connection h are used directly with reservation evidence as QA. Distinct vectors/contracts or overlapping distinct services need separate actual cards; no summing unlike complete-service h vectors. | connection_id; interval_id; start_i; end_i; h_i; reserved_connection_h_i_p; reserved_connection_h_i_b; h_i_p; provider_attributed_connection_h; network_mode; Q_p; cp_operations | network_service |  |
| calc_cleaning | cleaning_service | Record actual purchased labour h per event and attribute it once by the original cleaned_area_event_p/sum_all_b(cleaned_area_event_b) driver; area is not labour quantity. Attribute each raw physical quantity independently under cp_split_support and reverse the old complete cleaning package; cleaning_service=attributed labour h/Q_p. Normalize once with c_split_quantity, without a full-package background or duplicate store electricity. | measured_purchased_labour_h_event; cleaned_area_event_p; cleaned_area_event_b; Q_p; cp_split_labour_operations | cleaning_service h per reference flow |  |
| calc_asset | building_asset; shelf_asset; checkout_asset; router_asset; payment_asset; camera_asset; admin_asset | For each a and original beneficiary h: f_a_h=e_a_h/L_a; N_asset_a_p=sum_h_in_p f_a_h for one homogeneous complete asset source. At retirement use e_actual_a_h/sum_all_h(e_actual_a_h); replace all historical vector allocations by delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a. Each asset card=N_asset_a_p/Q_p Item(s); preserve actual vector deltas for calc_complete. | asset_id; model; BOM; scope; e_a_h; L_a; e_actual_a_h; f_a_h; f_new_a_h; f_old_a_h; V_a; V_new_a; V_old_a; N_asset_a_p; Q_p; cp_assets | asset fractions and historical replacement numerators |  |
| calc_carton | carton_input | N_carton_p=sum_first_use n_carton_source*paint_gross_kg_contents/sum_all_contents(gross_kg_contents); carton_input=N_carton_p/Q_p. Keep first-use source assignment and opening/closing unused and previously-used stock; returned unused carries source forward. | n_carton_source; paint_gross_kg_contents; gross_kg_contents; first_use_id; unused_open; unused_close; used_open; used_close; Q_p; cp_carton | carton_input |  |
| calc_waste | sealed_paint_waste; carton_waste | For each actual consignment w and one identical accepted carrier/state r, use direct source-separated calibrated net weighing first: N_waste_r_p=sum_w direct_source_net_kg_w_p. Only if the SAME real homogeneous carrier is shared and unassigned: carrier_net_kg_w=gross_kg_w-tare_kg_w; share_w_p=current_carrier_net_kg_w_p/sum_all_b(current_carrier_net_kg_w_b); N_waste_r_p=sum_w carrier_net_kg_w*share_w_p. current_carrier_net_kg is measured for each original-source portion in its current complete wet-carrier state, same consignment/time, and sums to carrier_net_kg_w. Already-attributed provider net kg are used unchanged; allocation evidence becomes QA only. These three modes are exclusive per source/event, and waste_r=N_waste_r_p/Q_p. Original can counts, dry solids and previous-state mass never substitute for this current-carrier share. Different compositions/states need separate matched cards/consignments. Stock balances under vr_balance are independent QA, not another correction of directly measured dispatch. | waste_mode; dispatch_id; receiver_id; direct_source_net_kg_w_p; gross_kg_w; tare_kg_w; carrier_net_kg_w; current_carrier_net_kg_w_p; current_carrier_net_kg_w_b; share_w_p; provider_attributed_net_kg; Q_p; cp_waste | waste quantities |  |
| calc_complete | all inventory rows | N_final_r=N_core_r+sum_disjoint_m N_m_r; N_m_r=q_m_r*D_m for previously normalized modules only; q_final_r=N_final_r/Q_p. Preserve source IDs, module versions and asset historical delta_a_h; combine identical exchange/property/unit only, and apply unassigned attribution once. | N_core_r; N_m_r; q_m_r; D_m; source_id; module_version; delta_a_h; Q_p; cp_completion | q_final_r |  |
| calc_backend | payment_processing_service; admin_ledger_service; security_retention_service | For each distinct request attempt r, exclusive single-source pay_share_r_p=1 for its sole original pool; otherwise pay_share_r_p=pay_line_seconds_r_p/sum_all_b(pay_line_seconds_r_b), where each line seconds=pay_line_end-pay_line_start, summed by its original pool; each measured item-line is mapped once and all lines are included. N_pay_p=sum_r pay_share_r_p. For each distinct actual ledger event e, exclusive single-record admin_share_e_p=1; a homogeneous multi-source batch-event uses admin_share_e_p=ledger_line_seconds_e_p/sum_all_b(ledger_line_seconds_e_b), where each actual record-line seconds=ledger_line_end-ledger_line_start is summed by original pool, and N_admin_p=sum_e admin_share_e_p. Each shared denominator must be known positive, sum_all_p(pay_share_r_p)=1 and sum_all_p(admin_share_e_p)=1; all-pool counts reconcile to real requests/events, not number of source tags. Keep different processing classes/vectors separate. At original capture cohort k, exclusive protection has capture_share_k_p=1; shared protection uses capture_share_k_p=protected_area_m2_k_p*capture_h_k/sum_all_b(protected_area_m2_k_b*capture_h_k). Survey the actual camera protection polygon and original beneficiary footprint/reservation map: disjoint dedicated zones use actual area; common protected zones split once by those original beneficiaries measurable reserved protected-footprint m2, including other goods, operations and idle reservation; Use protected_area_m2_k_p=exclusive_protected_area_m2_k_p+common_protected_area_m2_k*reserved_protected_footprint_m2_k_p/sum_all_b(reserved_protected_footprint_m2_k_b); common-zone denominator must be positive/known. Resulting area shares reconcile to the actual whole protected polygon without double-counting overlap. Freeze capture_share_k_p with original source_id/origin_pool_id and capture_history_version; later byte changes inherit it. N_video_p=sum_i sum_k(retained_bytes_i_k/1e9)*retention_h_i*capture_share_k_p in GB*h for disjoint actual retention intervals. Never allocate later retained GB*h again by current sales or current protected area. Evidence-backed already-final-owner provider request/event counts or GB*h are used unchanged; their allocation logs are QA only. Revisions replace the original historical pool/source mapping rather than charge a new pool. Network-contained sources are not added. Each service quantity divides Q_p once. | request_id; request_source_id; request_owner_mode; pay_line_start; pay_line_end; pay_line_id; pay_line_original_pool_id; pay_line_seconds_r_p; pay_line_seconds_r_b; pay_share_r_p; event_id; event_source_id; ledger_owner_mode; ledger_line_start; ledger_line_end; ledger_record_id; ledger_line_original_pool_id; ledger_line_seconds_e_p; ledger_line_seconds_e_b; admin_share_e_p; processing_class; capture_owner_mode; capture_source_evidence; capture_cohort_id; capture_start_k; capture_end_k; capture_h_k; protected_polygon_id; protected_area_m2_k_p; protected_area_m2_k_b; exclusive_protected_area_m2_k_p; common_protected_area_m2_k; reserved_protected_footprint_m2_k_p; reserved_protected_footprint_m2_k_b; capture_share_k_p; source_id; origin_pool_id; capture_history_version; retained_bytes_i_k; retention_interval_id; retention_h_i; provider_attributed_request_count; provider_attributed_event_count; provider_attributed_GBh; provider_final_owner_pool_id; network_contained; Q_p; cp_backend | remote service quantities |  |
| calc_transport | loaded_transport; empty_transport; idle_transport | For every disjoint transport_source_id/stage record require attribution_level with evidence. unassigned_vehicle: calculate L_s/U_s/I_s exactly by al_transport, then apply owner_fraction_s_p. source_only: use provider_attributed_loaded_tkm/empty_vehicle_km/idle_vehicle_h as L_s/U_s/I_s already assigned to original_source_id s; do not repeat vehicle mass/capacity allocation, but STILL multiply the matching owner_fraction_s_p. final_owner_pool: only when the provider documents exact original_source_id, owner_pool_id p, responsibility class F/carton/asset-historical/event and owner_allocation_version, use its quantities as final_owner_loaded_p/final_owner_empty_p/final_owner_idle_p unchanged; do not multiply vehicle share or owner_fraction again. Missing final-owner evidence is never final_owner_pool. owner_fraction_s_p is fixed by source_owner_mode: original_goods=F_s/original_source_q_s with S excluded; carton=carton_first_use_fraction_s_p with unused stock carried; asset=sum_h_in_p f_a_h with EVERY historical allocation replaced and delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a; retail_waste_or_return=event_source_fraction_s_p from the original event ledger. N_loaded_p=sum_source_records L_s*owner_fraction_s_p+sum_final_owner_records final_owner_loaded_p; analogously N_empty_p=sum_source_records U_s*owner_fraction_s_p+sum_final_owner_records final_owner_empty_p and N_idle_p=sum_source_records I_s*owner_fraction_s_p+sum_final_owner_records final_owner_idle_p. Keep units separate and each source/stage in exactly one attribution mode. Every asset lifespan/vector revision or retirement revalidates/replaces provider-final-owner receipts for ALL original historical pools, or reconstructs source-level history; it never freezes outdated f or charges retirement/current Q. Already-included V/provider stages are not added. Divide each final quantity by Q_p once; asset stage construction and whole-asset expansion remain exclusive views under al_complete. | source_owner_mode; stage_mode; attribution_level; attribution_evidence; original_source_id; owner_pool_id; owner_responsibility_class; owner_allocation_version; final_owner_loaded_p; final_owner_empty_p; final_owner_idle_p; actual_source_gross_kg_s_i; distance_km_i; empty_distance_km_i; reserved_capacity_kg_s_i; reserved_capacity_kg_b_i; idle_h_j; reserved_capacity_kg_s_j; reserved_capacity_kg_b_j; L_s; U_s; I_s; F_s; original_source_q_s; carton_first_use_fraction_s_p; unused_source_stock; event_source_fraction_s_p; owner_fraction_s_p; f_a_h; f_new_a_h; f_old_a_h; V_new_a; V_old_a; delta_a_h; provider_attributed_loaded_tkm; provider_attributed_empty_vehicle_km; provider_attributed_idle_vehicle_h; N_loaded_p; N_empty_p; N_idle_p; Q_p; cp_transport | separate loaded empty idle quantities and historical source replacements |  |
| c_split_quantity | cleaning_service; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | For each exact identity r in its single unit, restore normalized source q_source with its original denominator D_source as x_raw=q_source*D_source; already-raw quantities are not restored again. Apply only missing attribution once under split_attribution, deduplicate source/event/version and reverse old package and historical versions. Sum disjoint raw quantities as X_r; q_r=X_r/Q_p, dividing by the final reference denominator once. Labour uses measured purchased h only, never old order counts/area; in-house hours are QA only. Calculate asset counts, material kg, electricity kWh, vehicle*km and waste-carrier kg separately; never add across properties or multiply already-measured physical quantities by labour hours. Unknown quantity/identity/background blocks completeness. | X_r; D_source; q_source; Q_p; cp_split_labour_operations; cp_split_support | q_r |  |
### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_measurement | all inventory rows | Calibrate scales/meters and record units, time coverage, uncertainty, missing records and actual source boundaries; unknown quantities remain unresolved. No invented fill, lifetime, emission or zero default. | Calibration certificates; complete raw interval/source records |
| dq_translation | all inventory rows | Keep identical ordered row/rule/protocol IDs, direction/type, UUIDs, units, formula variables, conditions and obligation strength in both languages; every mandatory formula input and protocol process/flow_role must parse. | Bilingual semantic comparison and real parser reports |
| dq_scope | all inventory rows | Disclose candidate status, narrower applicability, every unresolved identity/provider/stage and measured completeness. No whole-leaf, safety, legal or full-standard conformity claim. | Actual route register and source/module coverage ledger |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| vr_acceptance | service_output | Q_p=count of distinct original_can_id with final valid sealed-can acceptance in p. Record gross physical handovers, physical returns, refusals, repeated attempts and acceptance revocations separately. Revoke acceptance even without a return; financial refunds/discounts with valid acceptance do not revoke it. Never subtract revocations again after counting final-valid IDs. Return/resale retains original ID and source; late events replace original denominator AND numerator/fate attribution with dated versions, not a new cohort charge. |  |
| vr_balance | failed_original; supplier_handoff; external_retained; sealed_paint_waste | Use two dimensional ledgers linked by condemnation_event_id and original_can_id. Goods-only counts in Item(s): opening_goods+receipts+physical_customer_returns=closing_goods+all_gross_customer_handovers+supplier_handoffs+internal_transfers+condemnation_count+confirmed_missing_count+signed_unresolved_count. All gross handovers include never-accepted movements; never subtract them again. Condemnation is an internal goods-to-held-waste state change. Separately weigh the complete current carrier at that event: condemned_kg=sum_event(current_gross_kg-current_tare_kg), with can body/closure and wet contents included, outer weighing container excluded. Held-waste kg: opening_waste_kg+condemned_kg=closing_waste_kg+actual_dispatch_kg+confirmed_missing_waste_kg+signed_unresolved_waste_kg. Each term has the same carrier scope, time and kg unit; carton waste uses its own carrier balance. No count is added to kg, no nominal count-to-mass default, and waste dispatch is never subtracted from goods counts. Keep wet-paint net kg independent from complete-carrier kg. Signed unresolved residuals and missing evidence block completeness. |  |
| vr_identity | all inventory rows | Every unbound row requires actual exact bilingual flow identity, product/waste/elementary type, property/unit and applicable compartment/provider matching before quantified use. The historically verified AC Product flow is provider/voltage unspecified and does not establish a supply mix. Blank UUID is unresolved, never a manufactured identifier or a property UUID used as a flow. Complete wet original can input needs actual paint net mass and full packaging BOM/vector, not nominal litres or SDS ingredients. |  |
| vr_waste | sealed_paint_waste; carton_waste | Measure actual consignment net full-carrier kg with calibrated scales and receiver receipt. Intact wet paint can plus closure is one actual mixed carrier only when receiver signed acceptance names exact wet formulation and full package state and treatment covers them; photos/licence alone do not establish this. Do not add its paint and metal masses as duplicate waste. Dispatched cardboard excludes separately dispatched constituents and paint cans. Actual used, unused, customer-held, retained and dispatch states reconcile; unknown route is not zero, credit or benign disposal. | bm-f551-2025; jrc-retail-2013 |
| vr_completeness | all inventory rows | No dataset is complete until cp_route, every present card, support-provider boundary, raw-to-final formula and original source ownership reconcile. Required support asset models must be independently bound or explicitly contained in a verified other model with source-ID deduplication. Actual additional model, repair, consumable or waste requires its own bilingual card and protocol before completion. Preserve uncertainty and candidate review-required state; no safety/legal/VOC-limit conformity is inferred. |  |
| split_completeness | all inventory rows | Check every exact identity and single reference property, all actual work-order constituents, disjoint measurements, old-package reversal, no duplicated source/asset terminal scope, all-beneficiary historical attribution and one final normalization. Unverified sources, uncarded actual exchanges, unknown quantities or a mere claim of contract inclusion are incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One incremental retail service after actual source completion; optional separate GOODS system adds S once |
| allowed_use | Same measured product/pack/route service studies with explicit boundary and uncertainty |
| excluded_use | Whole group351 or all-store comparisons; coating manufacture/application equivalence; safety/legal/VOC compliance; incomplete support as complete business |
| required_metadata | Required qualifiers; pool and final Q; all original sources and module versions; provider/stage scope; every unresolved identity |
| required_quality_disclosure | Actual completeness and unknowns; original field methods; measured stock/ownership closure; lifetime and late-return corrections |
| update_trigger | SKU/formulation/pack/channel change; any opening/leak; new support model/constituent; late return; asset retirement or source revision |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Title | Reference | Used for |
| --- | --- | --- | --- | --- |
| un-cpc3-62164 | official_guidance | UNSD CPC Version3.0 subclass62164 explanatory note | UNSD CPC Version3.0 subclass62164 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62164 | Classification scope: actual note links group351; no quantity or full-leaf applicability |
| bm-f551-2025 | handbook | Benjamin Moore Regal Select Premium Interior Paint & Primer Semi-Gloss F551, F551 CE040225 | Benjamin Moore Regal Select Premium Interior Paint & Primer Semi-Gloss F551, F551 CE040225; https://media.benjaminmoore.com/WebServices/prod/assets/production/datasheets/TDS_0551/F551_TDS_CE.pdf | Pages1–2: real white acrylic-vehicle waterborne product and nominal3.79L specification; distinction from opening, thinning and application. No actual fill/BOM/LCI, emission factor or regulatory conclusion adopted. |
| jrc-retail-2013 | official_guidance | JRC Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN, 2013 | JRC Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN, 2013; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | PDF pages18,149–150,351,361–362: retail utility, lighting, packaging and waste process coverage only. PCR equations are declared methods with field collection, not JRC numerical benchmarks or complete-standard conformity. |
