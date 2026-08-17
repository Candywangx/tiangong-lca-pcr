---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.products-n-e-c-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates-dead-fish-cr-ab4063b5
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Products n.e.c. of fish, crustaceans, molluscs or other aquatic invertebrates; dead fish, crustaceans, molluscs or other aquatic invertebrates unfit for human consumption

## 1. Scope and Applicability

This PCR covers the exact generic scope of CPC 3.0 subclass 21299. It applies to otherwise unclassified products of fish, crustaceans, molluscs or other aquatic invertebrates and to dead aquatic animals explicitly unfit for human consumption when they leave the foreground site as a non-food product. The product identity, legal status, reason for non-food disposition, intended non-food use, physical state and route shall remain explicit. The reference flow shall never be described, validated or modelled as food.

Edible fishery products, live aquatic animals, inedible flours, meals and pellets classified in CPC 21291, and outputs that have legal waste status at the reference point are excluded. Upstream capture, landing, aquaculture and supplier processing are represented by linked upstream datasets when applicable, not recreated inside this foreground boundary. This candidate supports direct dispatch and one declared conditioning route; route inventories shall not be combined as if simultaneous.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.products-n-e-c-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates-dead-fish-cr-ab4063b5 |
| classification_refs | CPC 3.0: 21299, exact |
| covered_products | Otherwise unclassified non-food products of fish, crustaceans, molluscs or other aquatic invertebrates; dead aquatic animals unfit for human consumption and supplied as products for a declared non-food use |
| excluded_products | Products intended or represented as food; live aquatic animals; CPC 21291 inedible flours, meals and pellets; packaging; free liquid or removable ice reported separately; outputs having legal waste status at the reference point |
| representative_product | A lot of dead or derived aquatic material, explicitly classified as non-food, dispatched in bulk or packaged form for a declared non-food use |
| production_route | Exactly one route code per dataset: `direct_dispatch`, `chilled_or_iced`, `frozen_or_glazed`, `salted_or_brined`, or `dried_or_other_stabilized` |
| market_state | Non-food product at the foreground site gate; whole, pieces, mixed aquatic material or another declared form, with preservation state and destination declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a qualified CPC 21299 aquatic product explicitly intended for non-food use |
| How much | 1 kg net product mass at the foreground site gate |
| How well | Product identity, non-food status and reason, intended use, route, form, condition and applicable mass qualifiers are declared and traceable to the lot |
| How long or cycle | One production lot at final mass determination and dispatch; no service duration is implied |
| reference_flow_link | The functional unit is realized by the single Tiangong reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg qualified product net mass |
| Reference product flow | Products n.e.c. of fish, crustaceans, molluscs or other aquatic invertebrates; dead fish, crustaceans, molluscs or other aquatic invertebrates unfit for human consumption `96594bec-f1eb-4559-b4b2-2be03ec8f1cf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-food status and reason for unfitness or non-food disposition; intended non-food use and destination; aquatic taxon or declared mixed-material composition; whole, pieces or other physical form; route code; preservation and temperature state; source legal status as product or waste; net product mass and weighing basis; moisture content or declared wet/dry basis when material; salt content or brine salinity for `salted_or_brined`; gross and deglazed net mass plus deglazing method for `frozen_or_glazed`; drained mass, gross mass and draining method for product packed in liquid; packaging state; site, geography and lot period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comments, product descriptions or equivalent fields. Missing applicable qualifiers make the reference flow incomplete. Packaging, separately removable glaze or ice, and free packing liquid are excluded from the 1 kg net product mass; their masses remain separate inventory flows. If the commercial record uses a different basis, both the commercial mass and the converted reference net mass shall be reported.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg net product mass after excluding packaging, free packing liquid and separately removable ice or glaze. Record calibrated gross, tare and excluded masses. |
| `moisture_basis` | Wet, dried or composition-sensitive product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether mass is as-received, wet, drained or dry; measure moisture on a representative lot sample when conversion between wet and dry bases materially changes results. |
| `salt_brine_basis` | `salted_or_brined` route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report salt addition and removed or retained brine separately; declare product salt content or brine salinity, sampling method and whether the value is measured or calculated. |
| `glaze_and_drained_mass` | `frozen_or_glazed` or liquid-packed product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report gross mass, deglazed or drained net mass, excluded glaze or free liquid mass, and the documented deglazing or draining method; use only the qualified net product mass as reference. |

## 5. System Boundary

The foreground boundary is governed by the following rules:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground system | Begin with receipt of the declared aquatic source material or supplied CPC 21299 product and include on-site receipt, non-food identity verification, sorting, the one selected conditioning route, final mass determination, packaging when used, and handling of rejects, wastewater or spent brine to the next treatment or transfer interface. | `codex-cxc-52-2003`, `eu-pef-2021-2279` |
| `boundary_non_food_identity` | All product-bearing processes | Preserve explicit non-food identity and intended non-food destination throughout; Codex handling concepts are used for traceability, temperature and measurement practice only and shall not be interpreted as food conformity. | `unsd-cpc-3-0-21299`, `codex-cxc-52-2003` |
| `boundary_route_exclusivity` | Conditioning | Select exactly one route code. Include `conditioning_stabilization` only when the route is not `direct_dispatch`, and record only inputs and outputs used by the selected route. | `eu-pef-2021-2279` |
| `boundary_exclusions` | Foreground system | Exclude capture, aquaculture, landing, supplier processing, distribution after the site gate, non-food use and end-of-life; link material upstream datasets and disclose any study-specific extension instead of silently truncating it. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Aquatic material or an existing CPC 21299 product received at the foreground site with supplier, lot, physical state, temperature or preservation state, legal product-or-waste status, and reason for non-food disposition declared |
| starting_condition_role | Foreground input gate for non-food classification, optional conditioning and dispatch |
| product_classification_scope | Exact generic CPC 3.0 subclass 21299 only; CPC 21291 meals, flours and pellets and food products remain outside scope |
| recursive_input_rule | A purchased input already within CPC 21299 remains an explicit product input and is linked once to its supplier dataset; do not reproduce the same category's upstream production recursively inside the receiving process |
| upstream_dataset_requirement | Use supplier- or route-representative upstream datasets for capture, aquaculture, landing, earlier processing, transport to site and any supplied CPC 21299 input; disclose gaps and substitutions |
| disclosure | Declare source identity, legal status, non-food reason and destination, route code, excluded upstream stages, mass basis, moisture, salinity or salt content, glaze or drained mass where applicable, packaging and all waste or recovery destinations |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_classification` | Receipt, non-food classification and sorting | required | Always | Establish eligible CPC 21299 identity and lot mass balance without treating the material as food | kg received lot and kg eligible lot |
| `conditioning_stabilization` | Route-specific conditioning or stabilization | conditional | Include only for `chilled_or_iced`, `frozen_or_glazed`, `salted_or_brined`, or `dried_or_other_stabilized`; exactly one route is selected | Preserve or adjust the declared non-food product state | kg route output |
| `final_mass_dispatch` | Net-mass determination, packaging and dispatch | required | Always; packaging inputs are recorded only when used | Produce the qualified non-food reference product at the site gate | 1 kg qualified net product |

### Process: Receipt, non-food classification and sorting (`receipt_classification`)

#### Inputs

##### Product flows

###### Incoming aquatic source lot (`incoming_aquatic_lot`)

The received lot crosses the foreground gate for identity verification and sorting. Record supplier mass, legal status, physical state and the documented reason for non-food disposition.

- Selected flow: Aquatic source material or supplied CPC 21299 product
- Flow property / unit: Mass / kg
- Amount rule: measured received net mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg qualified reference product dispatched from the same lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot`
- Range: Provisional receipt-to-output screening estimate; applies to unprocessed or mechanically handled lots and shall be replaced by reviewed site mass balances after at least three representative lots or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 2.00
  - Unit: kg/kg reference product
  - Basis: received lot mass per kg qualified reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Eligible non-food lot (`eligible_non_food_lot`)

This intermediate output contains only material that retains product status and meets the declared CPC 21299 non-food identity.

- Selected flow: Eligible non-food aquatic material
- Flow property / unit: Mass / kg
- Amount rule: received net mass minus measured rejects and measured retained foreign matter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receipt lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receipt_lot`

##### Waste flows

###### Receipt and sorting rejects (`receipt_rejects`)

Record rejected matter with legal status and destination; material unfit for human consumption is not automatically waste.

- Selected flow: Sorting rejects, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received aquatic lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot`
- Range: Provisional reject-fraction screen; applies only before representative site records exist and shall be replaced after three representative lots or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg received lot
  - Basis: reject mass fraction of the received lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-specific conditioning or stabilization (`conditioning_stabilization`)

#### Inputs

##### Product flows

###### Eligible lot entering the selected route (`route_material_input`)

Record the eligible mass entering the single declared route; bypassed material belongs to `direct_dispatch` and does not enter this process.

- Selected flow: Eligible non-food aquatic material
- Flow property / unit: Mass / kg
- Amount rule: measured route input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per route batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_route`

###### Water or ice for the selected route (`conditioning_water_or_ice`)

Record only water or ice that crosses the process boundary for the selected chilling, glazing, rinsing or other conditioning operation.

- Selected flow: Process water or ice
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed water and ice supplied, with recovered water excluded from gross supply and recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_route`
- Range: Provisional water-or-ice screen; applies only to routes using water or ice and shall be replaced by route-specific meter or purchase records after three representative campaigns or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg/kg route output
  - Basis: supplied water and ice per kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt or prepared brine (`conditioning_salt_or_brine`)

Record this row only for the `salted_or_brined` route, separating dry salt, make-up water and reused brine where records permit.

- Selected flow: Salt or prepared brine
- Flow property / unit: Mass / kg
- Amount rule: measured salt and brine input, with brine salinity declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg salted or brined route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_route`
- Range: Provisional salt-and-brine screen; applies only to `salted_or_brined` and shall be replaced by formulation and salinity records for three representative campaigns or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg route output
  - Basis: salt plus prepared brine input per kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for conditioning (`conditioning_electricity`)

Record metered electricity for freezing, cooling, drying, pumping or other selected-route equipment; exclude uses belonging to another route.

- Selected flow: Electricity, site supply mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered use, or allocated equipment-meter use following section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_route`
- Range: Provisional conditioning-electricity screen; applies only when electrically powered conditioning occurs and shall be replaced by submetered or engineering evidence after three representative campaigns or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5.0
  - Unit: kWh/kg route output
  - Basis: electricity used by selected-route equipment per kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned non-food route output (`conditioned_route_output`)

Record route output mass together with moisture, salt, glaze or drained-mass qualifiers applicable to the selected route.

- Selected flow: Conditioned non-food aquatic product
- Flow property / unit: Mass / kg
- Amount rule: measured qualified route output mass on the declared basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per route batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_route`

##### Waste flows

###### Wastewater or spent brine (`conditioning_liquid_waste`)

Record discharged water or brine by treatment destination; reused liquid remains an internal loop and is disclosed separately.

- Selected flow: Wastewater or spent brine, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass, or calculated from metered inputs, retained water and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_route`
- Range: Provisional liquid-waste screen; applies only to routes generating wastewater or spent brine and shall be replaced by measured discharge or reviewed mass-balance records after three representative campaigns or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2.0
  - Unit: kg/kg route output
  - Basis: liquid waste sent to treatment per kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Net-mass determination, packaging and dispatch (`final_mass_dispatch`)

#### Inputs

##### Product flows

###### Lot entering final mass determination (`final_lot_input`)

Use the eligible direct-dispatch lot or the output of the one selected conditioning route, never both for the same product mass.

- Selected flow: Qualified non-food aquatic lot before final mass determination
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass entering final weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per dispatch lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_mass_dispatch`

###### Packaging materials used (`dispatch_packaging`)

Record each packaging material only when used; bulk unpackaged dispatch records zero packaging.

- Selected flow: Packaging material, material-specific
- Flow property / unit: Mass / kg
- Amount rule: measured or purchase-reconciled packaging mass excluding reusable packaging outside the declared boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg qualified reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_mass_dispatch`
- Range: Provisional packaging screen; applies to packaged dispatch only and shall be replaced by bill-of-materials or weighed packaging evidence before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg/kg reference product
  - Basis: packaging mass per kg qualified net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified CPC 21299 non-food reference product (`reference_product_output`)

This is the exact generic CPC 21299 product flow. Keep the unfit-for-human-consumption or other declared non-food identity explicit; do not model it as food.

- Selected flow: Products n.e.c. of fish, crustaceans, molluscs or other aquatic invertebrates; dead fish, crustaceans, molluscs or other aquatic invertebrates unfit for human consumption `96594bec-f1eb-4559-b4b2-2be03ec8f1cf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg qualified net product by definition after applying all applicable mass exclusions and conversions
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Exact normalization and QA equality
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference flow
  - Basis: qualified net product mass per one reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Final weighing or packing rejects (`dispatch_rejects`)

Record product loss, spilled material and damaged packaging separately by legal status and destination.

- Selected flow: Final-stage rejects, destination-specific
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg qualified reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_mass_dispatch`
- Range: Provisional final-reject screen; applies only before representative lot records exist and shall be replaced after three representative lots or before activation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg reference product
  - Basis: final-stage reject mass per kg qualified net product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

Apply the following hierarchy:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared foreground operations | Avoid allocation by separate route batches, direct metering or process subdivision wherever technically feasible. | `eu-pef-2021-2279` |
| `allocation_output_status` | Products, co-products and waste | Classify each output from documented intended use, legal status and destination. Non-food or unfit-for-human-consumption status alone does not make an output waste and does not justify zero burden. | `eu-pef-2021-2279` |
| `allocation_fallback` | Unavoidable shared burdens | When subdivision is not feasible, use a demonstrable physical causal relationship; if none can be established, use an economic or other justified relationship and disclose the method, prices or physical parameters, period and sensitivity. | `eu-pef-2021-2279` |
| `allocation_recovery` | Recycling, recovery or waste treatment | Keep treatment burdens and recovered-material or energy benefits consistent with the selected PEF-compatible end-of-life approach; do not add an avoided-product credit without declaring the substituted function and method. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_lot` | `receipt_classification` | incoming lot, eligible lot and rejects | scale tickets, supplier records, inspection and disposition records | lot_id; supplier; taxon_or_composition; legal_status; non_food_reason; intended_destination; gross_mass; tare_mass; net_received_mass; reject_mass_by_destination; eligible_mass; receipt_condition; receipt_time | Calibrated weighing plus documented lot inspection and reconciliation | kg | Every lot | Representative reporting period, normally at least 12 months or all campaigns if seasonal | Every included foreground site | Sum by lot and destination, then normalize to qualified reference-product mass; investigate unresolved mass difference | Calibration records, supplier declaration, inspection record, disposition record and signed reconciliation |
| `cp_conditioning_route` | `conditioning_stabilization` | route inputs, output and liquid waste | batch log and meter records | batch_id; route_code; input_mass; water_mass; ice_mass; salt_or_brine_mass; salinity; electricity_kwh; output_mass; moisture; glaze_mass; drained_mass; liquid_waste_mass; inventory_change | Calibrated weighing, meters, route log and applicable moisture or salinity tests | kg; kWh; declared composition unit | Every conditioning batch | Representative period covering seasonal and route variation | Each route and site separately | Aggregate within one route and site; reconcile mass; normalize to route output and reference product | Calibration, test method, route log, batch reconciliation and exception record |
| `cp_final_mass_dispatch` | `final_mass_dispatch` | net product, excluded mass, packaging and rejects | dispatch weighing and packing record | lot_id; route_code; gross_mass; tare_mass; packaging_mass; glaze_or_ice_mass; free_liquid_mass; drained_mass; net_product_mass; moisture; salt_or_salinity; reject_mass; destination; dispatch_time | Calibrated gross-tare weighing, applicable deglazing or draining, and packaging reconciliation | kg; declared composition unit | Every dispatch lot | Representative period, normally at least 12 months or all seasonal campaigns | Every included foreground site | Separate net product from packaging, removable glaze, free liquid and rejects; normalize to 1 kg net product | Calibration, deglazing or draining record, packaging specification, dispatch record and lot sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_received_net_mass` | Receipt lot | received net mass = gross received mass - tare mass | gross_mass; tare_mass | net_received_mass | `mass-balance-identity` |
| `calc_reference_net_mass` | Final dispatch lot | reference net mass = gross dispatch mass - tare and packaging mass - separately removable glaze or ice - free packing liquid; use documented drained mass when liquid-packed | gross_mass; tare_mass; packaging_mass; glaze_or_ice_mass; free_liquid_mass; drained_mass | qualified_net_product_mass | `codex-cxc-52-2003`, `mass-balance-identity` |
| `calc_route_mass_balance` | Each receipt or conditioning batch | unresolved mass difference = measured inputs + opening inventory - measured products - measured wastes - closing inventory; disclose evaporation or retained water separately when material | input_masses; opening_inventory; product_masses; waste_masses; closing_inventory; moisture_or_water_change | unresolved_mass_difference | `mass-balance-identity`, `eu-pef-2021-2279` |
| `calc_normalized_inventory` | All inventory rows | normalized amount = reporting-period attributable amount / qualified net reference-product mass from the same route and period | attributable_amount; qualified_net_product_mass | amount per kg reference product | `eu-pef-2021-2279`, `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Every lot | Retain taxon or mixed-material description, supplier, legal status, non-food reason, intended destination, route and lot linkage; no record may imply food conformity. | Supplier declaration, inspection and disposition record, lot identifier and dispatch record |
| `dq_measurement` | Mass, energy, moisture and salinity records | Use calibrated instruments or documented purchase reconciliation; retain test method, precision and conversions for moisture, salinity, glaze and drained mass. | Calibration certificates, meter records, laboratory or operational test sheets and calculation workbook |
| `dq_temporal_route_coverage` | Foreground averages | Cover representative seasonal and route variation; keep route-specific data separate and disclose excluded campaigns, abnormal events and data gaps. | Coverage table by month, site and route; exception log |
| `dq_completeness_balance` | Each process and reporting period | Reconcile material inputs, qualified output, rejects, liquid wastes and material inventory; investigate and disclose material unresolved differences. | Signed lot or batch mass balance and corrective-action record |
| `dq_secondary_data` | Upstream and treatment links | Record geography, technology, time period, cut-off, allocation and substitution rationale for each secondary dataset. | Dataset metadata and PEF data-quality assessment |

## 9. Validation Rules

A foreground data package conforms only when all applicable rules pass:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_non_food` | Product identity | The canonical id and CPC 3.0 code 21299 are declared; non-food status, reason, intended use and destination are explicit; neither names nor metadata represent the reference product as food. | `unsd-cpc-3-0-21299` |
| `validate_reference_mass` | Reference flow | The reference amount equals 1 kg qualified net product using the stated UUIDs and Mass/kg basis; packaging, removable glaze or ice and free liquid are excluded, and moisture, salt or salinity, deglazed or drained mass qualifiers are present when applicable. | `codex-cxc-52-2003`, `mass-balance-identity` |
| `validate_route_exclusivity` | Process map | Exactly one route code is declared; conditioning inventory is absent for `direct_dispatch`, and only the selected route's inputs and outputs are present otherwise. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Receipt, conditioning and dispatch | Lot and batch mass balances reconcile within the site's documented scale and inventory uncertainty; any unresolved difference is quantified, investigated and disclosed rather than hidden in the reference product. | `mass-balance-identity`, `eu-pef-2021-2279` |
| `validate_allocation_destinations` | Shared burdens and outputs | Subdivision is attempted first; every co-product and waste has legal status and destination; any fallback allocation or recovery credit is justified, parameterized and sensitivity-tested. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for an exact generic CPC 21299 non-food aquatic product |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Modelling a declared non-food CPC 21299 product from the stated receiving condition through the site gate for the same route, mass basis, legal status and geography |
| excluded_use | Food products; CPC 21291 meals, flours or pellets; undeclared route mixtures; substitution for capture, aquaculture, rendering, feed, fertilizer, disposal, use or end-of-life datasets without an explicit scope extension |
| required_metadata | Canonical PCR id, CPC reference, product UUID, Mass and unit-group UUIDs, non-food reason and destination, taxon or composition, legal status, route, condition, site and period, upstream links, net-mass basis, moisture, salinity or salt, glaze or drained mass where applicable, packaging, allocation and waste destinations |
| required_quality_disclosure | Primary-data share, route and seasonal coverage, calibration and test methods, mass-balance differences, reasoned-estimate substitutions, secondary-dataset quality, allocation sensitivity and limitations |
| update_trigger | Replace each provisional reasoned estimate when reviewed route- and site-specific evidence is available or before active review; update when product legal status, route, reference-flow UUID, measurement method, allocation method or material process technology changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21299` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21299, https://unstats.un.org/unsd/classifications/Econ/cpc, authoring reference date 2026-08-11 | Exact product-category identity, scope and non-food wording |
| `codex-cxc-52-2003` | Standard (`standard`) | Codex Alimentarius Commission, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/, authoring reference date 2026-08-11 | Directly relevant fishery-product handling concepts, lot controls, temperature and water or ice records, and net, deglazed or drained mass practice; not evidence of food status |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279, authoring reference date 2026-08-11 | System boundary, process subdivision, allocation hierarchy, recovery consistency, data quality and normalization |
| `mass-balance-identity` | Method factor (`method_factor`) | Conservation-of-mass identity applied to measured foreground inputs, outputs and inventory change | Net-mass calculation, normalization and process mass-balance validation |
