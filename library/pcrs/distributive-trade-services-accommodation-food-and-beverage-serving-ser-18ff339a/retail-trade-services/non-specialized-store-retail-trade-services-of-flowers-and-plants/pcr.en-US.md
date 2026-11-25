---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-flowers-and-plants
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-specialized store retail services for nursery-potted ornamental plants

## 1. Scope and Applicability

This candidate covers receipt-cohort-based retail services for nursery-potted living ornamental plants sold in a non-specialized store. One dataset selects one species/cultivar, SKU, nursery-pot specification and grade, and customer collection at the store. It covers receiving, holding, condition checks, manual watering, checkout, handover, reversals and retailer-controlled residual management. It does not represent plant cultivation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-flowers-and-plants |
| classification_refs | CPC 3.0 62112; narrower: nursery-potted ornamental plants only |
| covered_products | Retail handover service for one sale-ready living ornamental plant in its original nursery pot; no transformation |
| excluded_products | Cut flowers, seeds, medicinal plants, specialist-store sales, online/home-delivery services, cultivation, repotting, fertilizer/pesticide treatment, dedicated refrigerated display, combustion heating and refrigeration equipment within the allocated retail zone; sold plant production is coupled separately under boundary rules |
| representative_product | In-store retail handover service for one nursery-potted ornamental plant |
| production_route | Accepted stocked nursery pot → non-specialized store holding/manual watering → customer handover → return-window closure; electrically heated/ventilated or naturally conditioned zone only |
| market_state | Living, sale-ready plant in the same nursery pot; species, health grade, pot volume, substrate and actual holding duration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | In-store retail handover service for one nursery-potted ornamental plant |
| How much | One completed service for one plant of the declared homogeneous SKU; a multi-plant sale yields that many services |
| How well | Contractually accepted species, grade, pot and health state; reversed sales are not qualified output |
| How long or cycle | Receipt through handover, including the declared contractual return window; no consumer growing-life promise |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | In-store retail handover service for one nursery-potted ornamental plant |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | species/cultivar; SKU; plant size/health grade; pot material/volume; substrate; receipt gate; store/channel; cohort/season; holding days; watering method; thermal regime; accepted handover; return window; loss-background boundary; packaging; allocation drivers |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N is the number of final non-reversed accepted one-plant handovers in closed receipt cohorts. A cancelled or reversed sale, refusal, internal transfer and disposal do not increase N. N must be positive. |
| m_normalize | all inventory rows except retail_service | Preserve each row property | row unit | Q_i is the attributed total exchange in the original row unit for the closed cohorts, before normalization. Report q_i = Q_i / N once. Internal handling and watering quantities are measured, never fixed to N. |
| m_convert | electricity; water; waste | Energy; volume; mass | MJ; m3; kg | Convert metered kWh to MJ using 3.6 MJ/kWh; convert L to m3 using 0.001. Do not convert plant counts to kg without measured same-configuration complete-pot masses, or infer wastewater volume from water input. Weigh residuals as received and record moisture/tare. |
| split_labour_time | cleaning | Time | h | Use signed actual purchased labour hours only; order counts, area and asset counts cannot replace h. Materials, energy, tools, travel and wastes are independent exchanges. In-house hours are QA only, with no invented purchased exchange; normalize attributed hours once by the original final reference denominator. |
| selected_energy_identity | split_support_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Plants accepted at the store receiving gate in original nursery pots; purchased utilities and retail consumables at their delivery gates |
| starting_condition_role | Retail-service foreground starting condition; no implied zero-burden lost merchandise |
| product_classification_scope | Narrow subset of CPC 62112; all non-potted/cut-flower/seed and other routes excluded |
| recursive_input_rule | A purchased same-category retail service is a separate supplier input only for a distinct documented operation. Do not recursively count this own service output or reclassify internal stock transfers as purchased service. |
| upstream_dataset_requirement | Use supply/production backgrounds for utilities, consumables, facility/equipment use, waste destinations and lost complete potted plants. Lost-plant background must reach the actual store receiving gate, including the corresponding inbound transport. |
| disclosure | Partial retail-service dataset: qualifying sold plants and their pre-receipt production/transport must be added by the downstream goods-plus-service model; plants without qualified final sale (B=L+F) are already included in this service. Report closure, coverage and excluded routes. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_goods | loss_plant | Include receiving-gate production and inbound transport for B = L + F unique plants without final qualified sale, once via loss_plant. L is actual on-site loss; F is final unqualified outward custody, not automatic waste. Downstream adds sold-plant receiving-gate backgrounds only for unique plants finally sold with N; surviving F plants carry an explicit already-accounted production flag if used in another model, avoiding a second identical production claim. Supplier returns retain their production with returned stock; retailer-controlled handling and return transport remain in the service. An unresolved final fate prevents closure. | unsd-cpc62112; ghg-product-standard |
| b_closure | cp_cohort | Close each original receipt cohort after physical fates and acceptance/return windows are resolved. Physical customer returns and financial POS reversals are separate events linked to original plant identity; neither is inferred from the other. A goodwill refund alone does not cancel a retained qualified acceptance. A cancelled unreturned or unaccepted outward plant is F, not L. Repeated return/resale events remain in the same identity history: only its final accepted retained sale contributes N, while all failed effort remains. Include every predeclared receipt-period cohort including zero-sale/all-loss cohorts. Late physical returns require correction/reopening of prior closure, never an unrelated new zero-burden receipt. When a late return reopens the original cohort, retain actual activity dates and add all subsequent transport back, care, checkout/resale and treatment to that original cohort numerator as well as correcting N/L/F/S. In each actual activity-period meter/service pool, the reopened original cohort remains an explicit beneficiary even if it has no new receipts that period. Revise the original cohort dataset with versioned adjustments, and reconcile the current-period totals; do not charge the same activities to a new receipt cohort. | unsd-cpc62112; ghg-product-standard |
| b_scope | holding; sale; residual | Include unloading/handling, holding, watering, seasonal electric conditioning, checkout, wrapping, failed sales, floor cleaning, attributed premises/equipment lifecycle use and residual treatment. Exclude customer travel/use, cultivation, chemical treatment and other declared excluded routes. Where an excluded route occurs, this PCR is not sufficient: stop completion and select appropriate additional methodology; never silently omit it. | unsd-cpc62112; ghg-product-standard |
| b_split | all inventory rows | Utilities supplied to the zone and physical consumables are separate exchanges. The defined premises service includes building fabric and fixed installation manufacture, maintenance and retirement only, excluding utilities, cleaning, checkout terminal and movable racks. Purchased checkout/cleaning services include only their explicitly contracted operations; subtract their included utility/material shares from other rows. Cleaning labour and physical quantities follow split_exchange_identity and cannot remain contained in checkout or premises backgrounds. Retain premises and checkout only as a genuine homogeneous use service with same-property service quantity, complete provider background and actual contract evidence; add cards for all actual uncovered resources. | unsd-cpc62112; ghg-product-standard |
| b_waste | residual | Track the complete discarded plant/substrate/original-pot stream once when these remain physically combined. If separated, replace that stream by measured individual streams and preserve a mass reconciliation. Send wastewater and solid streams to actual recipient treatment datasets once; do not add the carrier and its included constituents twice. No default biogenic uptake, respiration credit, avoided disposal or recycling credit is allowed. | ghg-product-standard |
| split_exchange_identity | all inventory rows | Each card has exactly one concrete exchange identity and one reference measurement property/unit; a unit group is not a second property, and auxiliary measurements are conversion evidence only. Labour cards no longer carry bundled materials/energy/equipment/wastes. Retained complete homogeneous assets, original packaged goods and real mixed waste carriers require matching actual whole-scope background/receiver treatment and full composition; heterogeneous collections or selectors are prohibited. An original exchange enters one core card or one split source only; reverse all old package characterization when replacing it and combine only disjoint raw quantities with identical identity/property/unit. Every other actual substance, part, fuel, refrigerant, emission and treatment gap requires a named bilingual card and process protocol; unknown is never zero or complete. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| holding | Receiving and holding | required | All selected closed cohorts | retail foreground | retail_service |
| sale | Checkout and handover | required | All selected closed cohorts | retail foreground | retail_service |
| residual | Residual management | required | All selected closed cohorts | retail foreground | retail_service |
| split_support | Separate physical exchanges of cleaning or maintenance | conditional | Actual occurrence; prove presence or absence for each exchange | Disjoint resources, equipment and waste | retail_service |

### Process: Receiving and holding (`holding`)

#### Inputs

##### Product flows

###### Attributed retail-zone electricity (`electricity`)

3.6 * E_kWh / N, where E_kWh is direct plus attributed holding/check-out electric use after removing utilities included in services. Record natural/electric heating, fans, humidity-control operation and seasonal coverage; dedicated refrigeration/combustion is outside this route.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_kWh / N, where E_kWh is direct plus attributed holding/check-out electric use after removing utilities included in services. Record natural/electric heating, fans, humidity-control operation and seasonal coverage; dedicated refrigeration/combustion is outside this route.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `isu-houseplant-care`

###### Water supplied for manual plant care (`water`)

W_m3 / N; W_m3 is municipal fresh water crossing the retail boundary, determined by exactly one declared fresh-water calculation method. An external-supply meter already excludes internal reuse, so never subtract reuse again. Drainage D is measured independently.

- Selected flow: Municipal tap water supplied to the retail holding zone
- Flow property / unit: Volume / m3
- Amount rule: W_m3 / N; W_m3 is municipal fresh water crossing the retail boundary, determined by exactly one declared fresh-water calculation method. An external-supply meter already excludes internal reuse, so never subtract reuse again. Drainage D is measured independently.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `isu-houseplant-care`

###### Receiving-gate background of plants without qualified final sale (`loss_plant`)

B / N; B = L + F. L is unique original pots irreversibly lost on site; F is unique original pots finally leaving custody without qualified accepted sale, including refunded-without-physical-return, unaccepted external handover and donation. Include their receiving-gate production and inbound transport once. F is not presumed waste or dead plant. Supplier returns S retain production with returned goods.

- Selected flow: Living ornamental plant in original nursery pot of the declared SKU at store receipt
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B / N; B = L + F. L is unique original pots irreversibly lost on site; F is unique original pots finally leaving custody without qualified accepted sale, including refunded-without-physical-return, unaccepted external handover and donation. Include their receiving-gate production and inbound transport once. F is not presumed waste or dead plant. Supplier returns S retain production with returned goods.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort`
- Sources:

###### Attributed retail premises lifecycle service (`premises`)

A_year / N; measured occupied area-time after shared-pool allocation, with building/fixed installation lifecycle coverage under b_split; 1 a is the declared accounting year duration.

- Selected flow: Retail premises occupancy service
- Flow property / unit: Area multiplied by time / m2*a
- Amount rule: A_year / N; measured occupied area-time after shared-pool allocation, with building/fixed installation lifecycle coverage under b_split; 1 a is the declared accounting year duration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard`

###### Allocated movable steel display rack (`rack`)

R_kg / N; R_kg is the measured complete-rack mass at manufacturing gate times cohort attributed occupied area-hours divided by total actual rack service-life occupied area-hours. The background stops at manufacturing gate. Repairs and retirement are separate actual events under a_maintenance and cp_assets; never add repair mass to complete-rack manufacturing mass.

- Selected flow: Steel retail display rack
- Flow property / unit: Mass / kg
- Amount rule: R_kg / N; R_kg is the measured complete-rack mass at manufacturing gate times cohort attributed occupied area-hours divided by total actual rack service-life occupied area-hours. The background stops at manufacturing gate. Repairs and retirement are separate actual events under a_maintenance and cp_assets; never add repair mass to complete-rack manufacturing mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard`

###### Allocated HDPE watering can (`watering_can`)

K_kg / N; K_kg is the measured complete HDPE can mass at manufacturing gate times cohort delivered watering volume divided by its documented lifetime delivered volume. The background excludes repair and retirement. Record each repair independently and retire the complete can once; no repair mass masquerades as new complete-can mass.

- Selected flow: HDPE watering can
- Flow property / unit: Mass / kg
- Amount rule: K_kg / N; K_kg is the measured complete HDPE can mass at manufacturing gate times cohort delivered watering volume divided by its documented lifetime delivered volume. The background excludes repair and retirement. Record each repair independently and retire the complete can once; no repair mass masquerades as new complete-can mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard`

### Process: Checkout and handover (`sale`)

#### Inputs

##### Product flows

###### Checkout terminal lifecycle use (`checkout`)

T_h / N; logged terminal use including reversals. Background covers terminal manufacture, maintenance and retirement; electricity remains in electricity unless explicitly included and deducted.

- Selected flow: Checkout terminal use service
- Flow property / unit: Time / h
- Amount rule: T_h / N; logged terminal use including reversals. Background covers terminal manufacture, maintenance and retirement; electricity remains in electricity unless explicitly included and deducted.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_checkout`
- Sources: `ghg-product-standard`

###### Kraft paper plant-pot wrapper (`kraft_wrap`)

Q_kraft_wrap / N; actual consumed mass including failed wraps, net of unopened returns and stock change; record specification and fate. Only apply when used.

- Selected flow: Kraft paper plant-pot wrapper
- Flow property / unit: Mass / kg
- Amount rule: Q_kraft_wrap / N; actual consumed mass including failed wraps, net of unopened returns and stock change; record specification and fate. Only apply when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Polypropylene plant sleeve (`pp_sleeve`)

Q_pp_sleeve / N; actual consumed mass including failed wraps, net of unopened returns and stock change; record specification and fate. Only apply when used.

- Selected flow: Polypropylene plant sleeve
- Flow property / unit: Mass / kg
- Amount rule: Q_pp_sleeve / N; actual consumed mass including failed wraps, net of unopened returns and stock change; record specification and fate. Only apply when used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Paper plant identification tag (`paper_tag`)

Q_paper_tag / N; weigh actual retail-added identification tags issued to plants, including misprinted/replaced tags, net of unused stock and returns. Nursery-attached tags already in plant background are excluded from this new input.

- Selected flow: Paper plant identification tag
- Flow property / unit: Mass / kg
- Amount rule: Q_paper_tag / N; weigh actual retail-added identification tags issued to plants, including misprinted/replaced tags, net of unused stock and returns. Nursery-attached tags already in plant background are excluded from this new input.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### In-store retail handover service for one nursery-potted ornamental plant (`retail_service`)

1 Item(s)

- Selected flow: In-store retail handover service for one nursery-potted ornamental plant
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort_sale`
- Sources:

### Process: Residual management (`residual`)

#### Inputs

##### Product flows

###### Retail floor-cleaning labour only (`cleaning`)

Actual purchased labour hours only; excludes materials, equipment lifecycle, electricity, travel, wastes and treatment. For in-house work retain hours as QA but do not invent a purchased service exchange. Record physical exchanges independently in split_support or named extensions, deduplicating existing cards.

- Selected flow: Retail floor-cleaning labour only
- Flow property / unit: Time / h
- Amount rule: Measured exclusive or once-attributed purchased labour h / N; cp_split_labour_residual.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_split_labour_residual`
- Sources:

#### Outputs

##### Waste flows

###### Collected plant-care drainage (`drainage`)

D_m3 / N; separately measure collected discharge and identify receiving sewer/treatment. Do not equate supplied water with discharge; retention, evaporation and return water are reconciled separately.

- Selected flow: Pot-plant watering drainage sent to sewer
- Flow property / unit: Volume / m3
- Amount rule: D_m3 / N; separately measure collected discharge and identify receiving sewer/treatment. Do not equate supplied water with discharge; retention, evaporation and return water are reconciled separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_residual`
- Sources: `isu-houseplant-care`

###### Discarded complete nursery-potted ornamental plant (`dead_pot`)

Q_dead_pot / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. Whole-pot mass includes plant, substrate and pot only when discarded together; never add those components again.

- Selected flow: Discarded complete nursery-potted ornamental plant
- Flow property / unit: Mass / kg
- Amount rule: Q_dead_pot / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. Whole-pot mass includes plant, substrate and pot only when discarded together; never add those components again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources:

###### Removed ornamental-plant leaf trimming (`plant_trim`)

Q_plant_trim / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.

- Selected flow: Removed ornamental-plant leaf trimming
- Flow property / unit: Mass / kg
- Amount rule: Q_plant_trim / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources:

###### Waste kraft paper wrapping (`waste_paper`)

Q_waste_paper / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.

- Selected flow: Waste kraft paper wrapping
- Flow property / unit: Mass / kg
- Amount rule: Q_waste_paper / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources:

###### Waste polypropylene plant sleeve (`waste_pp`)

Q_waste_pp / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.

- Selected flow: Waste polypropylene plant sleeve
- Flow property / unit: Mass / kg
- Amount rule: Q_waste_pp / N; weigh this actual stream separately with tare and as-discarded moisture/state, record recipient, transport and treatment. No quantity is inferred from final service count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources:

###### Waste retail-added paper identification tag (`waste_tag`)

Q_waste_tag / N; separately weigh failed/removed retail-added paper tags at discard; nursery-supplied tags in whole-pot waste are already included there.

- Selected flow: Waste paper plant identification tag
- Flow property / unit: Mass / kg
- Amount rule: Q_waste_tag / N; separately weigh failed/removed retail-added paper tags at discard; nursery-supplied tags in whole-pot waste are already included there.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources:

###### Discarded complete steel retail display rack (`rack_retirement`)

Q_rack_retirement / N; weigh the actual retired complete asset once, excluding components already removed in repairs. Attribute its retirement transport/treatment by the same documented lifetime beneficiary shares as its manufacturing input; manufacturing backgrounds must not already include this retirement.

- Selected flow: Discarded complete steel retail display rack
- Flow property / unit: Mass / kg
- Amount rule: Q_rack_retirement / N; weigh the actual retired complete asset once, excluding components already removed in repairs. Attribute its retirement transport/treatment by the same documented lifetime beneficiary shares as its manufacturing input; manufacturing backgrounds must not already include this retirement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_residual`
- Sources:

###### Discarded complete HDPE watering can (`can_retirement`)

Q_can_retirement / N; weigh the actual retired complete asset once, excluding components already removed in repairs. Attribute its retirement transport/treatment by the same documented lifetime beneficiary shares as its manufacturing input; manufacturing backgrounds must not already include this retirement.

- Selected flow: Discarded complete HDPE watering can
- Flow property / unit: Mass / kg
- Amount rule: Q_can_retirement / N; weigh the actual retired complete asset once, excluding components already removed in repairs. Attribute its retirement transport/treatment by the same documented lifetime beneficiary shares as its manufacturing input; manufacturing backgrounds must not already include this retirement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets_residual`
- Sources:

### Process: Separate physical support exchanges (`split_support`)

Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

#### Inputs

##### Product flows

###### Dry unimpregnated cellulose cleaning wipe (`split_cleaning_wipe`)

Only actual first-used dry wipes of this composition; do not infer consumption from floor area or count wet used-wipe mass as supply. Only actual identified physical exchanges are active. A candidate here does not establish occurrence, chemical composition, supplier scope or UUID. Before completeness, inspect the actual work order, purchases, equipment and dispatch records; prove absence or bind this exact identity and add a separate bilingual card for every other actual substance, component, fuel, refrigerant, carrier or emission. Never replace an unknown exchange with an aggregate label.

- Selected flow: Dry unimpregnated cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured homogeneous complete-model count times its persistent lifetime beneficiary fraction once / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
- Amount rule: Measured exclusive or once-attributed raw quantity of this exact exchange / N; cp_split_support.
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
| a_direct | all inventory rows | First subdivide/submeter the SKU holding zone and checkout operation. Assign measured SKU-specific water, wrapping and loss directly. Retain burdens of spoiled stock and failed sales in the SKU cohort; do not allocate them to an imaginary saleable coproduct. | ghg-product-standard |
| a_shared | electricity; premises; rack; checkout; cleaning | Subdivide/submeter first. For residual holding/premises/rack pools use actual occupied area-hours of every beneficiary in that same pool and period, so d_all is the sum of actual all-beneficiary drivers, not full-floor theoretical capacity. Retain idle, closed-store and empty-display burdens in the pool and allocate to the period beneficiaries by these shares. Checkout pools use all beneficiary transaction seconds including failed and reversal operations; cleaning uses actual beneficiary cleaned area-events. For a zero-driver interval, carry its unavoidable availability/standby burden into the same asset/zone documented operating-cycle pool and allocate over that complete cycle, including off-season and zero-sale cohorts. Predeclare cycle dates, retain every interval and reconcile all allocated shares to the complete measured pool. If the full cycle still has no beneficiary driver, or recorded drivers are not causally representative, do not invent a denominator or discard load: report the pool unresolved and block complete dataset status. This common-pool attribution does not multiply the complete rack/can manufacturing or retirement quantities: those use exactly one lifetime share under a_asset_ledger. The asset protocol aggregation and card equations describe that same single attribution, not a second multiplication. | ghg-product-standard |
| a_assets | rack; watering_can; premises; checkout | For complete steel rack and HDPE can inputs use manufacturing-gate measured complete-asset mass only, with their documented actual lifetime beneficiary shares. Do not include repair mass or retirement in that manufacturing input/background. Whole-asset retirement is a distinct measured waste output attributed with the same lifetime shares. Missing asset mass/lifetime/service quantities prevent completion; no invented defaults. Premises and checkout service lifecycle boundaries remain explicit and must not include these movable assets. | ghg-product-standard |
| a_maintenance | rack; watering_can; rack_retirement; can_retirement | Each actual repair is a separately dated event with actual replacement component/material, work, energy and removed-part waste identities, quantities and supplier gate. Before completing an affected dataset, add each concrete exchange independently and exclude amounts already inside a complete purchased repair service. Attribute that event once to all beneficiaries in the documented maintenance accounting cycle using the repaired asset driver and the idle/zero-driver rule; do not spread it over the original asset entire lifetime or merge it into complete-asset mass. Multiple repairs remain multiple traceable events. | ghg-product-standard |
| a_asset_ledger | rack; watering_can; rack_retirement; can_retirement | Maintain one persistent ledger per physical asset id across all periods and all beneficiaries, including reopened cohorts. For rack use lifetime occupied area-hours; for can use lifetime delivered watering volume. Each cohort receives one fraction f_asset,cohort of complete manufacturing mass and one corresponding fraction of actual whole-asset retirement. Posting is by delta against previously posted quantities: never restart full manufacturing/retirement burden when period or service-life estimate changes. Cumulative fractions across all beneficiaries must remain within 0..1; a final retired asset reconciles to1. Keep numerator, lifetime denominator, prior/new lifetime version, cumulative posted fraction, correction delta and recipient cohort. A revised lifetime triggers explicit reversal/reposting of affected prior cohorts, with conserved full asset mass. Replacement uses a new physical asset id; retirement subtracts parts already removed and retains actual transport/treatment. Unknown future/lifetime support remains unresolved, not a fresh allocation baseline. The cp_assets aggregation and rack/can card formulas are views of this one ledger calculation; do not apply c_shared again. | ghg-product-standard |
| split_attribution | cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | Prefer exclusive direct measurements. For shared cleaning events attribute each raw physical quantity by actual cleaned area-events across all beneficiaries; for maintenance use the repaired asset physical driver over all beneficiaries of the actual supported work-order cycle. Retain idle, failed, closed and zero-driver loads and their original carryover rules, never discard them using sales. New tool manufacture/retirement uses persistent lifetime ledgers and historical revision deltas; installed replacement parts are charged once to their actual maintenance event, not again as an original whole-asset acquisition. Do not reapply a share to an already-attributed source or charge terminal tools only to the retirement period. Remove any contained quantity from its old background or replace the entire package with this split; never characterize both. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | holding | loss_plant | Cohort ledger | original plant/lot id; receipt gate/cohort; SKU/species/pot; physical receipt/return/outward timestamps; gross physical handovers; POS sale/reversal/refund event ids and amounts; accepted final retained sale N; on-site irreversible loss L; unqualified final external fate F; supplier return S; stock/transfer counts; final receiver/fate; production-accounted flag; return-window dates; reopened original cohort; late-return actual activity dates; care/transport/resale/treatment adjustment ids; original and revised dataset version | Trace the same original plant through every physical and financial event separately; match proof of custody, contractual acceptance, POS/refund and fate evidence. A refund is not evidence of physical return or death. Obtain receiving-gate backgrounds for L and F and record whether a recipient background has already been charged. | Item(s) | Each event and cohort closure | Receipt through final fate and return-window closure; representative full operating seasons | One SKU, actual store gate and its retained cohorts | per reference flow | Stocktakes, POS receipts, refunds, loss photos, supplier gates and delivered-plant background Shared underlying record family: cp_cohort. This process-scoped view is not an additional physical quantity or burden. |
| cp_cohort_sale | sale | retail_service | Cohort ledger | original plant/lot id; receipt gate/cohort; SKU/species/pot; physical receipt/return/outward timestamps; gross physical handovers; POS sale/reversal/refund event ids and amounts; accepted final retained sale N; on-site irreversible loss L; unqualified final external fate F; supplier return S; stock/transfer counts; final receiver/fate; production-accounted flag; return-window dates; reopened original cohort; late-return actual activity dates; care/transport/resale/treatment adjustment ids; original and revised dataset version | Trace the same original plant through every physical and financial event separately; match proof of custody, contractual acceptance, POS/refund and fate evidence. A refund is not evidence of physical return or death. Obtain receiving-gate backgrounds for L and F and record whether a recipient background has already been charged. | Item(s) | Each event and cohort closure | Receipt through final fate and return-window closure; representative full operating seasons | One SKU, actual store gate and its retained cohorts | per reference flow | Stocktakes, POS receipts, refunds, loss photos, supplier gates and delivered-plant background Shared underlying record family: cp_cohort. This process-scoped view is not an additional physical quantity or burden. |
| cp_energy | holding | electricity | Meter and activity log | meter id; start/end kWh; circuit; heating/fan/humidity operation; area-hours by SKU and all users; season; service-included kWh; complete all-beneficiary driver; idle/closed intervals; zero-driver carryover pool/cycle id | Read calibrated submeter; where shared, reconcile whole meter and allocation drivers; observe installed equipment and fuel/refrigerant absence | kWh | Daily meter/activity logs; monthly reconciliation | All retained cohorts and full seasonal operation | Declared retail zone; no excluded thermal route | per reference flow | Calibration, bills, circuit diagrams, equipment inspection and complete-user shares Shared underlying record family: cp_energy. This process-scoped view is not an additional physical quantity or burden. |
| cp_water | holding | water | Water and drain log | SKU; species; soil condition; watering time; calibrated container/meter volume; source; collected drain; retained water; reuse; seasonal conditions; receiver; selected method (external_meter or application_reconstruction); municipal external meter start/end; source-resolved total applications/internal reused applications; net fresh-water storage change; pre-application fresh-water spills; supply-versus-application meter boundary water_source_id; parent_meter_id; event_id; row_owner; plant_water_m3; other_nonclean_water_m3; cleaning_water_m3; actual_supply_density; final_dispatch_direct_or_pre_diversion_reconstruction; measurement_plane; pre_diversion_quantity; reuse_diversion; direct_final_discharge | Select exactly one fresh-water method for the same measured boundary/period. external_meter: read attributed external municipal import and do not subtract internal reuse. application_reconstruction: measure all applications by source, remove recorded internal-reuse applications once, and reconcile net fresh-water storage change and pre-application spills; unsupported corrections block completion. Never combine the two supply totals. Inspect species/moisture and record actual watering; measure collected drainage independently. Apply c_fresh_water source-to-row partition once, retaining exact parent and child quantities and density. Final discharge measurements do not receive another reuse subtraction under c_waste; distinguish an upstream reconstruction explicitly. | L; m3 | Each watering/draining event | All cohort holding days, including unsold and returned plants | Holding area and actual sewer destination | per reference flow | Container calibration, water bills, moisture observations, discharge destination Shared underlying record family: cp_water. This process-scoped view is not an additional physical quantity or burden. |
| cp_water_residual | residual | drainage | Water and drain log | SKU; species; soil condition; watering time; calibrated container/meter volume; source; collected drain; retained water; reuse; seasonal conditions; receiver; selected method (external_meter or application_reconstruction); municipal external meter start/end; source-resolved total applications/internal reused applications; net fresh-water storage change; pre-application fresh-water spills; supply-versus-application meter boundary water_source_id; parent_meter_id; event_id; row_owner; plant_water_m3; other_nonclean_water_m3; cleaning_water_m3; actual_supply_density; final_dispatch_direct_or_pre_diversion_reconstruction; measurement_plane; pre_diversion_quantity; reuse_diversion; direct_final_discharge | Select exactly one fresh-water method for the same measured boundary/period. external_meter: read attributed external municipal import and do not subtract internal reuse. application_reconstruction: measure all applications by source, remove recorded internal-reuse applications once, and reconcile net fresh-water storage change and pre-application spills; unsupported corrections block completion. Never combine the two supply totals. Inspect species/moisture and record actual watering; measure collected drainage independently. Apply c_fresh_water source-to-row partition once, retaining exact parent and child quantities and density. Final discharge measurements do not receive another reuse subtraction under c_waste; distinguish an upstream reconstruction explicitly. | L; m3 | Each watering/draining event | All cohort holding days, including unsold and returned plants | Holding area and actual sewer destination | per reference flow | Container calibration, water bills, moisture observations, discharge destination Shared underlying record family: cp_water. This process-scoped view is not an additional physical quantity or burden. |
| cp_assets | holding | premises; rack; watering_can | Asset lifecycle and occupancy log | asset id; manufacturing-gate complete-asset mass; all-beneficiary occupied area-hours; can lifetime/cohort watering volumes; actual service life; fixed-versus-movable coverage; each repair event/date/component/material/work/removed waste; repair-cycle beneficiaries; idle/closed intervals; retired mass/tare; recipient/transport/treatment; persistent asset id; all-period/all-beneficiary ledger; lifetime version; prior/new posted fraction; correction delta; replaced asset id; actual retirement | Measure asset mass and actual service history; isolate manufacturing gate from maintenance and retirement. Log each repair independently, with actual component/material identities; weigh complete retired asset net of already removed parts. Retain idle intervals and all-beneficiary cycle evidence. | m2*a; kg | Asset change; occupancy daily | Full cohort and applicable asset life | Complete facility user pool | per reference flow | Plans, supplier lifecycle reports, scale certificates, repair and retirement records Shared underlying record family: cp_assets. This process-scoped view is not an additional physical quantity or burden. |
| cp_assets_residual | residual | rack_retirement; can_retirement | Asset lifecycle and occupancy log | asset id; manufacturing-gate complete-asset mass; all-beneficiary occupied area-hours; can lifetime/cohort watering volumes; actual service life; fixed-versus-movable coverage; each repair event/date/component/material/work/removed waste; repair-cycle beneficiaries; idle/closed intervals; retired mass/tare; recipient/transport/treatment; persistent asset id; all-period/all-beneficiary ledger; lifetime version; prior/new posted fraction; correction delta; replaced asset id; actual retirement | Measure asset mass and actual service history; isolate manufacturing gate from maintenance and retirement. Log each repair independently, with actual component/material identities; weigh complete retired asset net of already removed parts. Retain idle intervals and all-beneficiary cycle evidence. | m2*a; kg | Asset change; occupancy daily | Full cohort and applicable asset life | Complete facility user pool | per reference flow | Plans, supplier lifecycle reports, scale certificates, repair and retirement records Shared underlying record family: cp_assets. This process-scoped view is not an additional physical quantity or burden. |
| cp_checkout | sale | checkout | Terminal event log | terminal; SKU transaction; start/end; cancellation/refund time; total all-user time; lifecycle contract; electricity inclusion; complete all-beneficiary driver; idle/closed intervals; zero-driver carryover pool/cycle id | Timestamp checkout and reversal operations; obtain terminal lifecycle service scope | s; h | Each transaction/reversal | All cohort sales and return window | Terminal serving the declared SKU | per reference flow | POS timestamps, service contract and all-user reconciliation Shared underlying record family: cp_checkout. This process-scoped view is not an additional physical quantity or burden. |
| cp_packaging | sale | kraft_wrap; pp_sleeve; paper_tag | Material stock and use log | each material specification; opening; purchases; unopened returns; closing; failed wrapping; product attachments; mass; recycling destination | Weigh each concrete material separately; distinguish nursery-supplied tags/pots from additional retail inputs | kg | Each SKU batch and monthly stocktake | Same closed cohorts | Retail-added packaging only | per reference flow | Scales, invoices, stocktake and nursery bill of materials Shared underlying record family: cp_packaging. This process-scoped view is not an additional physical quantity or burden. |
| cp_cleaning | residual | cleaning | Cleaning original-source QA ledger | cleaned area; event; contract; utilities/materials/waste included; allocation area-events; in-house chemical identities if any; complete all-beneficiary driver; idle/closed intervals; zero-driver carryover pool/cycle id | Reconcile original contract and actual events; labour h uses cp_split_labour_residual, physical quantities use cp_split_support. Cleaned area-events are all-beneficiary attribution drivers, not exchange quantities. | h; area-events as driver only | Each cleaning event and contract change | All cohort holding and closure operations | Affected store area only | per reference flow | Cleaning logs, provider boundary and utility deductions Shared underlying record family: cp_cleaning. This process-scoped view is not an additional physical quantity or burden. |
| cp_residual | residual | dead_pot; plant_trim; waste_paper; waste_pp; waste_tag | Residual transfer record | stream; cohort; count; gross/tare mass; composition; moisture; separation; recipient; route/distance; treatment; sale/reuse status; unique consignment | Weigh each stream at dispatch, photograph whole-pot/separated condition, obtain recipient technology and transport evidence | kg | Every discard/transfer | All cohort fates including closure | Retail boundary through actual residual treatment | per reference flow | Weigh tickets, receiver permits/records, manifests and waste background boundaries Shared underlying record family: cp_residual. This process-scoped view is not an additional physical quantity or burden. |
| cp_split_labour_residual | residual | cleaning | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | Separate raw-exchange ledger | event_id; source_id; occurrence/absence evidence; exact substance/model; actual composition/SDS; reference property; unit; raw quantity; original denominator; labour start/end; meter interval/containment; density/temperature; whole-carrier net mass; receiver/treatment scope; tool asset_ID; original/replacement part; lifetime/all historical beneficiaries; historical revision delta; all-beneficiary driver; direct/already-attributed status; old-package reversal; overlapping sources water_source_id; parent_meter_id; event_id; row_owner; plant_water_m3; other_nonclean_water_m3; cleaning_water_m3; actual_supply_density; final_dispatch_direct_or_pre_diversion_reconstruction; measurement_plane; pre_diversion_quantity; reuse_diversion; direct_final_discharge | Verify actual supply and dispatch per event; use signed start/end labour records, measured material/waste weights, disjoint electricity meters and actual vehicle-route km. Resolve original denominator, composition, background, receiver/treatment and every beneficiary; apply split_attribution and c_split_quantity. A different actual formulation/model or additional emission requires an exact new card; never default to these candidates. Apply c_fresh_water source-to-row partition once, retaining exact parent and child quantities and density. Final discharge measurements do not receive another reuse subtraction under c_waste; distinguish an upstream reconstruction explicitly. | One property/unit per card | Every event and source revision | Original full source cycle and all beneficiary history | Actual work order and disjoint site/provider gate | per reference flow | Signed time, calibration, composition, deduplication and receipt evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_can | watering_can | K_kg = measured complete-can manufacturing-gate mass * cohort watering volume / documented lifetime watering volume. Repairs and retirement remain independent actual exchanges under a_maintenance and cp_assets. | cp_assets; cp_water | K_kg | ghg-product-standard |
| c_normalize | all inventory rows except retail_service | q_i = Q_i / N; Q_i is the final attributed cohort total in its row unit, N is qualified services from cp_cohort. Do not divide an already normalized background factor by N again. | Q_i; N; cp_cohort | q_i | ghg-product-standard |
| c_energy | electricity | Q_electricity = 3.6 * E_kWh; meter total equals direct plus all allocated users plus documented residual; residual is investigated, not erased. | E_kWh; cp_energy | Q_electricity | ghg-product-standard |
| c_losses | loss_plant; retail_service | B = L + F; Q_loss_plant = B; Q_retail_service = N; q_retail_service = 1 Item(s). N, L, F and S are mutually exclusive final states of unique original receipt identities under cp_cohort; no POS-only subtraction creates N or L. | B; L; F; N; S; cp_cohort | q_loss_plant; retail_service | ghg-product-standard |
| c_shared | premises; checkout; cleaning; electricity | Q_i = Q_direct_i + Q_complete_pool_i * d_SKU / sum(d_all_actual_beneficiaries). Include idle/off-season loads in the complete same-cycle pool under a_shared. Zero-driver intervals carry to that documented complete cycle; if its full denominator remains zero, status is unresolved and completion fails. All beneficiary allocations must sum to the full measured pool; then divide by N only once. | Q_direct_i; Q_pool_i; d_SKU; d_all; cp_assets; cp_checkout; cp_cleaning | Q_i | ghg-product-standard |
| c_waste | drainage; dead_pot; plant_trim; waste_paper; waste_pp | For each actual waste stream record measurement_mode, measurement plane and disjoint event IDs. final_dispatch_direct uses actual mass/volume at the final discharge gate; remove actual external collection-vessel tare once where applicable, NEVER subtract internal reuse, evaporation or storage again. pre_diversion_reconstruction applies only to an observed pre-diversion source total, subtracting evidenced actual internal-reuse diversion and other nonexport portions once in the same control volume; do not also enter the final outlet reading. Reconstruction is eligible only when final direct measurement is absent and diversion/stock evidence is complete. Modes are exclusive per source/period. Mass streams retain whole-carrier kg; volume streams retain the matching provider unit or convert with actual same-state whole-carrier density. Reconcile discharge, water-component and supply ledgers separately; unknown is not zero. Attribute and normalize once, matching treatment basis without another included composition/route fraction. | cp_water; cp_residual; measurement_mode; measurement_plane; pre_diversion_quantity; reuse_diversion; direct_final_discharge; whole_carrier_density | Q_stream | ghg-product-standard |
| c_fresh_water | water | Choose one mutually exclusive mode for the same boundary and period. external_meter: W_m3 = attributed external municipal meter imports; subtract no internal reuse. application_reconstruction: W_m3 = total recorded application volume - source-identified internal-reuse application volume + measured net fresh-water storage increase + measured fresh-water losses before application. Subtract reuse once only in this reconstruction; it is not a deduction from an external import meter. Include independently measured non-watering fresh-water uses once. Missing source/stock/spill reconciliation prevents completion rather than implying zero. Do not sum the two modes. D_m3 is independently measured actual discharge; W_m3 is not D_m3. The reconstructed or directly metered gross source total is BEFORE row ownership. Partition that total by original source/meter/event into disjoint plant-water, other non-cleaning fresh-water and cleaning-water portions, reconciling all portions to the parent. W_m3 on water is plant-water plus other non-cleaning portions ONLY; cleaning-water is represented only on split_cleaning_water in kg=its measured m3*actual supply-water density. A shared event receives one measured all-beneficiary attribution; already-attributed portions receive none again. Mixed-use unknown portions remain unresolved, never copied to both rows or deleted. Same source in m3 and kg is not disjoint. | cp_water; method; external_meter; application_volumes; internal_reuse; storage_change; spills; water_source_id; parent_meter_id; row_owner; plant_water_m3; other_nonclean_water_m3; cleaning_water_m3; actual_supply_density | W_m3 | ghg-product-standard |
| c_aggregate_cp_cohort | loss_plant | Physical balance: opening+receipts+physical customer returns+transfers in = gross physical customer handovers+supplier returns+on-site losses+other physical outward transfers+transfers out+closing. POS reversals are not physical balance entries. After internal transfer elimination, a closed original-plant cohort must satisfy unique received plants = N+L+F+S, with closing=0 and each original identity in one final state. Derive N from final retained acceptance, not gross handovers minus financial reversals. B=L+F. Repeated physical return/resale does not create another original production. Late returns revise both fate counts and all subsequent actual numerator activities of the original cohort; preserve actual period and current-pool beneficiary reconciliation, without creating a duplicate new cohort. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_cohort; N | q_i | ghg-product-standard |
| c_aggregate_cp_cohort_sale | retail_service | Physical balance: opening+receipts+physical customer returns+transfers in = gross physical customer handovers+supplier returns+on-site losses+other physical outward transfers+transfers out+closing. POS reversals are not physical balance entries. After internal transfer elimination, a closed original-plant cohort must satisfy unique received plants = N+L+F+S, with closing=0 and each original identity in one final state. Derive N from final retained acceptance, not gross handovers minus financial reversals. B=L+F. Repeated physical return/resale does not create another original production. Late returns revise both fate counts and all subsequent actual numerator activities of the original cohort; preserve actual period and current-pool beneficiary reconciliation, without creating a duplicate new cohort. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_cohort_sale; N | q_i | ghg-product-standard |
| c_aggregate_cp_energy | electricity | Sum direct kWh plus shared pool times area-hour share; remove double-counted service energy; convert once Include idle and zero-driver intervals under a_shared and reconcile the complete pool, never theoretical empty-capacity shares. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_energy; N | q_i | ghg-product-standard |
| c_aggregate_cp_water | water | Determine W_m3 exclusively by c_fresh_water; external-meter totals receive no reuse subtraction. Separately sum D_m3 from actual discharge. Reconcile imports, reuse loops, storage, plant/substrate retention, evaporation, spills and discharge without equating W and D or treating unknown terms as zero. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_water; N | q_i | ghg-product-standard |
| c_aggregate_cp_water_residual | drainage | Determine W_m3 exclusively by c_fresh_water; external-meter totals receive no reuse subtraction. Separately sum D_m3 from actual discharge. Reconcile imports, reuse loops, storage, plant/substrate retention, evaporation, spills and discharge without equating W and D or treating unknown terms as zero. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_water_residual; N | q_i | ghg-product-standard |
| c_aggregate_cp_assets | premises; rack; watering_can | Premises is only the retained occupancy service in m2*a: attribute its measured area-time once using c_shared; do not apply rack/can manufacturing mass or lifetime mass fractions to premises. Rack and watering-can manufacturing mass, and their separately measured whole-asset retirement, use only the respective persistent lifetime beneficiary fraction under a_asset_ledger. Post differences against prior ledger postings; this protocol aggregation and the card formula describe one allocation, never a second multiplication. Repairs remain independent actual events in their documented maintenance cycle. Retain mass/treatment identities and all idle/zero-driver rules. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_assets; N | q_i | ghg-product-standard |
| c_aggregate_cp_assets_residual | rack_retirement; can_retirement | Premises is only the retained occupancy service in m2*a: attribute its measured area-time once using c_shared; do not apply rack/can manufacturing mass or lifetime mass fractions to premises. Rack and watering-can manufacturing mass, and their separately measured whole-asset retirement, use only the respective persistent lifetime beneficiary fraction under a_asset_ledger. Post differences against prior ledger postings; this protocol aggregation and the card formula describe one allocation, never a second multiplication. Repairs remain independent actual events in their documented maintenance cycle. Retain mass/treatment identities and all idle/zero-driver rules. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_assets_residual; N | q_i | ghg-product-standard |
| c_aggregate_cp_checkout | checkout | Sum attributable seconds including failures; divide by 3600; reconcile total users before N normalization Include idle and zero-driver intervals under a_shared and reconcile the complete pool, never theoretical empty-capacity shares. Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_checkout; N | q_i | ghg-product-standard |
| c_aggregate_cp_packaging | kraft_wrap; pp_sleeve; paper_tag | Opening+purchases-unopened returns-closing; allocate direct issue to SKU; product attachments already in plant background are not new purchases Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_packaging; N | q_i | ghg-product-standard |
| c_aggregate_cp_cleaning | cleaning | Cleaning card is purchased labour h only: attribute measured hours once per event using all-beneficiary cleaned area-events, then divide by N once. Physical exchanges are independently measured under cp_split_support and c_split_quantity; no complete cleaning package remains. | cp_cleaning; N | q_i | ghg-product-standard |
| c_aggregate_cp_residual | dead_pot; plant_trim; waste_paper; waste_pp; waste_tag | Sum each physical stream once; link treatment and transport once per consignment; material with continued sale/use is transferred stock, not automatic waste Normalize the resulting attributed quantity once per reference flow using c_normalize. | cp_residual; N | q_i | ghg-product-standard |
| c_split_quantity | cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | For each exact identity r in its single unit, restore normalized source q_source with its original denominator D_source as x_raw=q_source*D_source; already-raw quantities are not restored again. Apply only missing attribution once under split_attribution, deduplicate source/event/version and reverse old package and historical versions. Sum disjoint raw quantities as X_r; q_r=X_r/N, dividing by the final reference denominator once. Labour uses measured purchased h only, never old order counts/area; in-house hours are QA only. Calculate asset counts, material kg, electricity kWh, vehicle*km and waste-carrier kg separately; never add across properties or multiply already-measured physical quantities by labour hours. Unknown quantity/identity/background blocks completeness. | X_r; D_source; q_source; N; cp_split_labour_residual; cp_split_support | q_r |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Resolve specific supplier/recipient/flow identity, state, property and unit before declaring a usable completed dataset. Unbound identities remain explicit; no zero or invented UUID. | Direct records, linked background boundaries and identity checks |
| dq_conditions | holding; residual | Inspect all conditional operations, including pests, trimming, humidification, electric heating, watering and wrapping. Absence requires logs/inspection; presence outside the selected route blocks completion until additional methodology is applied. | Equipment/operation register and recorded non-occurrence |
| dq_missing | all inventory rows | Missing meters, lifetimes, stock closure, receiver identity or background coverage are unresolved data needs, not zero. Disclose uncertainty, representativeness and correction actions; do not publish a complete footprint from unresolved material exchanges. | Gap register, completeness review and correction log |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | retail_service | Require homogeneous declared SKU and all reference qualifiers, positive N, closed cohort balance and return-window closure; final service amount must equal 1 Item(s). | ghg-product-standard |
| v_loss | loss_plant | Reconcile unique original plants as N+L+F+S, physical movements separately from financial events, and L separately from actual waste. Require evidence of final F receiver/fate and receiving-gate background, including inbound transport; F is not automatic whole-pot waste. Check repeated returns/resales and downstream backgrounds for duplicate or omitted production. | ghg-product-standard |
| v_cards | all inventory rows | Require each selected exchange to retain process, direction, type, state, unit, amount, protocol and actual conditional occurrence. Resolve actual additional materials/waste streams as individual exchanges before completing the dataset; do not hide them under a collection label. | ghg-product-standard |
| v_double | all inventory rows | Check utilities inside service backgrounds, fixed versus movable assets, nursery attachments, complete-pot constituents, waste transport/treatment and normalization for double counting. No assumed carbon or recycling credits. | ghg-product-standard |
| v_quality | all inventory rows | Require calibration, stock/utility reconciliation, seasonal coverage, complete allocation denominators, receiver evidence and supported background boundary. Report unknown identities, open cohorts and absent routes separately; unresolved material scope prevents a complete result. | ghg-product-standard |
| v_asset_ledger | rack; watering_can; rack_retirement; can_retirement | Check persistent physical asset identity, all-period/all-beneficiary ledger, cumulative fraction<=1, final retirement closure=1, lifetime revision delta postings, replacement id and no second c_shared multiplier. Reopened-cohort activity adjustments must reconcile both old dataset versions and actual activity-period pools. | ghg-product-standard |
| split_completeness | all inventory rows | Check every exact identity and single reference property, all actual work-order constituents, disjoint measurements, old-package reversal, no duplicated source/asset terminal scope, all-beneficiary historical attribution and one final normalization. Unverified sources, uncarded actual exchanges, unknown quantities or a mere claim of contract inclusion are incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial retail-service foreground dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Combine with same-SKU receiving-gate background of finally sold plants and downstream customer use, while preserving the loss accounting boundary |
| excluded_use | Standalone plant cradle-to-grave footprint, all-CPC62112 coverage, comparisons across different SKU/grade/cohorts or excluded routes, methodology approval |
| required_metadata | species/cultivar; SKU; plant size/health grade; pot material/volume; substrate; receipt gate; store/channel; cohort/season; holding days; watering method; thermal regime; accepted handover; return window; loss-background boundary; packaging; allocation drivers |
| required_quality_disclosure | Cohort closure, N/L/F/S/B, loss-background coupling, reference configuration, conditional route register, utilities/services overlap, allocation, uncertainties and unbound identities |
| update_trigger | SKU/species/pot, service gate/returns policy, thermal route, watering/packaging, supplier/receiver, assets, loss fate or material data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc62112 | official_guidance | UNSD CPC 3.0 subclass 62112 — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62112 | Official broader trade-service scope; this PCR intentionally covers only potted ornamental living plants |
| isu-houseplant-care | extension_guidance | Iowa State University Extension and Outreach, How to Care for Houseplants — https://yardandgarden.extension.iastate.edu/how-to/how-care-houseplants | Qualitative care-process screening: water demand depends on conditions/species/season; drainage, light and temperature; no numeric dose or universal care limit adopted |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9 — https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Function/reference-flow definition, transparent partial boundary and process subdivision/allocation. The specific retail service boundary/drivers here are PCR operational choices supported by declared collection; no whole-standard conformance claim. |
