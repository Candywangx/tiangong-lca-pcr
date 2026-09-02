---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.salmonidae-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Salmonidae, frozen

## 1. Scope and Applicability

This PCR covers foreground production of frozen fish of the family Salmonidae supplied as whole, headed, gutted, dressed, or comparable non-fillet presentations. Products may be glazed or unglazed and bulk- or retail-packed. The product is preserved by freezing and remains frozen through the declared dispatch gate.

The foreground route begins with reception of identified salmonid fish at the processing facility and includes applicable receiving, grading, washing, bleeding or evisceration, freezing, glazing, packaging, frozen storage, and dispatch operations. Aquaculture, fishing, hatchery, feed production, vessel operation, and transport to the declared facility gate are represented by linked upstream datasets rather than silently absorbed into the foreground.

This PCR excludes fresh or chilled fish; frozen fillets; separated or minced fish meat; smoked, dried, salted, cooked, canned, or otherwise prepared fish; non-salmonid species; and products whose principal preservation route is not freezing. A repacking-only operation using already-frozen salmonid input must declare that starting condition and must not claim an unperformed freezing process.

Food-safety and quality controls are recorded because they define the valid production state and the records needed to interpret the inventory. Conformity with this PCR is not a food-safety certification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.salmonidae-frozen |
| classification_refs | CPC 3.0: 21212, Salmonidae, frozen |
| covered_products | Frozen Salmonidae supplied whole, headed, gutted, dressed, or in another non-fillet presentation; glazed or unglazed; bulk- or retail-packed |
| excluded_products | Frozen fish fillets; separated or minced fish meat; fresh or chilled fish; smoked, dried, salted, cooked, canned, or otherwise preserved fish; non-salmonid species |
| representative_product | Frozen salmonid fish, dressed and packaged, at the processor frozen-store dispatch gate |
| production_route | Identified salmonid reception; applicable preparation; quick freezing; optional glazing; packaging; frozen storage; dispatch |
| market_state | Frozen product for further processing, wholesale, food service, or retail, with presentation, glaze, packaging, and cold-chain condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen Salmonidae in the declared non-fillet presentation, maintained in a frozen state and suitable for the declared downstream market |
| How much | 1 kg net mass of target frozen product |
| How well | Species or taxon, wild or farmed origin, presentation, evisceration and heading status, glaze status, packaging format, freezing route, and dispatch temperature condition are declared |
| How long or cycle | One production lot delivered at the processor frozen-store dispatch gate; frozen-storage duration is declared separately |
| reference_flow_link | `rf_salmonidae_frozen_net` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net target-product mass |
| Reference product flow | Salmonidae, frozen `a9f77412-4b2a-4d64-b893-7356d0173ed0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | salmonid species or declared taxon; wild or farmed origin; whole, headed, gutted, dressed, or other non-fillet presentation; skin and bone status; glaze status and glaze fraction; packaging format; freezing location and technology; received product state; dispatch temperature condition; frozen-storage duration; geography and production period |

When constructing a foreground data package, all `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

The reference amount is net target-product mass. Packaging, removable glaze, free water, pallets, and transport containers are not part of the 1 kg reference amount. Bones, skin, head, and viscera are included only when retained in the declared sale presentation.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net frozen Salmonidae product at dispatch. Exclude packaging, removable glaze, free water, pallets, and transport containers from reference mass. |
| `lot_mass_balance` | Fish, product, co-products, and residuals | Mass | kg | Use one consistent wet-mass basis for each lot and reconcile received fish with reference product, co-products, wastes, retained samples, and measured mass changes. |
| `water_ice_separation` | Process water, ice, and glaze | Mass | kg | Record process water, cooling ice, and glaze water separately. Do not count ice or glaze as target-product net mass. |
| `energy_carriers` | Electricity and fuels | Energy | kWh for electricity; MJ or physical fuel unit with conversion factor for fuels | Record metered quantities by process where available and disclose any allocation of shared utilities. Do not combine electricity and thermal energy without preserving carrier-specific quantities and conversion factors. |
| `temperature_time` | Freezing and frozen storage | Temperature and time | °C and h or d | Retain calibrated temperature records, monitoring locations, freezing completion criterion, storage duration, and excursions. Do not infer energy use from temperature records alone. |
| `refrigerant_mass` | Refrigerant charge and losses | Mass | kg | Record refrigerant type, additions, recovery, inventory change, and confirmed losses; calculate emitted loss only from reconciled service and inventory records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Salmonid fish received at the processing facility as live, fresh, chilled, or already frozen material, with species or taxon, origin route, presentation, mass, temperature condition, supplier, geography, and receipt time declared |
| starting_condition_role | Foreground gate input whose upstream aquaculture or capture, feed, hatchery, fishing-vessel, landing, and inbound-transport burdens are supplied by linked upstream datasets |
| product_classification_scope | Frozen Salmonidae in non-fillet presentations corresponding to CPC 3.0 code 21212; classification is mapping context and does not replace semantic product qualifiers |
| recursive_input_rule | When already-frozen Salmonidae enters the foreground, record it as a same-category product input, link its upstream dataset, and include only handling, storage, repacking, glazing, or re-freezing actually performed in the reporting foreground |
| upstream_dataset_requirement | Link representative upstream datasets for received fish, electricity, fuels, water supply, ice, packaging materials, refrigerants, and treatment of exported wastes or wastewater; disclose geographic, temporal, and technology mismatches |
| disclosure | Declare the facility gate, received product state, included operations, excluded operations, species or taxon, origin route, presentation, freezing and glazing route, packaging, frozen-storage duration, dispatch condition, co-product fate, allocation method, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_01_foreground_gate` | Foreground system | Include all operations actually performed from receipt of identified salmonid input through frozen-store dispatch, including rejects, cleaning, freezing, glazing, packaging, storage, utility use, refrigerant losses, wastewater, and residual handling. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_02_cold_chain` | Freezing and frozen handling | Preserve the frozen-state chain from completion of freezing through dispatch; record time-temperature monitoring, excursions, product losses, and rework instead of assuming uninterrupted cold storage. | `codex-cxc-52-2003` |
| `sb_03_upstream_links` | Upstream inputs | Keep aquaculture or capture, feed, vessel operation, inbound transport, electricity generation, material manufacture, and downstream treatment outside the foreground only when explicit upstream datasets are linked. | `eu-pef-2021-2279` |
| `sb_04_recursive_input` | Already-frozen same-category input | Prevent double counting by treating received already-frozen Salmonidae as an upstream product input and modelling only the subsequent operations actually performed by the reporting facility. | `eu-pef-2021-2279` |
| `sb_05_food_safety_records` | Product validity | Retain lot identity, hygiene controls, hazard-control records, freezing records, glaze and net-mass records, and packaging integrity evidence needed to show that inventory represents marketable frozen fish. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p01_reception` | Raw material reception and grading | required | Always | Establish lot identity, received state, accepted mass, rejects, and upstream links | kg accepted salmonid input |
| `p02_preparation` | Washing and physical preparation | conditional | Include when washing, bleeding, heading, gutting, dressing, trimming, or size grading is performed | Produce the declared non-fillet presentation and separate co-products and wastes | kg prepared salmonid output |
| `p03_freezing` | Freezing | required | Include when the facility freezes fresh or chilled input; for already-frozen input include only actual re-freezing and declare it | Convert prepared salmonid product to the verified frozen state | kg frozen product before glaze and packaging |
| `p04_glazing_packaging` | Glazing and packaging | conditional | Include every glazing and packaging operation actually performed | Protect product, establish net mass, and produce the declared sales format | kg packaged frozen target product |
| `p05_frozen_storage_dispatch` | Frozen storage and dispatch | required | Always | Maintain the frozen state until the declared dispatch gate | kg net frozen target product dispatched |

### Process: Raw material reception and grading (`p01_reception`)

#### Inputs

##### Product flows

###### Received salmonid fish (`received_salmonid`)

Record the measured mass and state of each received salmonid lot together with its upstream dataset link.

- Selected flow: Salmonidae input; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured accepted plus rejected lot mass at receipt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen target product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Range: Provisional raw-fish input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3.5
  - Unit: kg
  - Basis: per 1 kg net frozen target product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted salmonid fish (`accepted_salmonid`)

Record the mass transferred to preparation or directly to freezing.

- Selected flow: Accepted Salmonidae; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`

##### Waste flows

###### Rejected fish and foreign material (`reception_rejects`)

Record rejected biomass, damaged packaging, and foreign material separately by fate.

- Selected flow: Reception rejects; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by material and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`

### Process: Washing and physical preparation (`p02_preparation`)

#### Inputs

##### Product flows

###### Process water and ice (`preparation_water_ice`)

Record metered or mass-balanced water and ice used for washing, bleeding, chilling, or equipment contact, separated by use.

- Selected flow: Process water and ice; UUIDs pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured water and ice supplied, with recovered or recirculated quantities reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared salmonid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice`
- Range: Provisional combined water-and-ice QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg prepared salmonid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity for pumps, conveyors, cutting, washing, and other preparation equipment.

- Selected flow: Electricity; UUID pending exact market and voltage review
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or allocated facility-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared salmonid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

#### Outputs

##### Product flows

###### Prepared salmonid product (`prepared_salmonid`)

Record the mass and presentation transferred to freezing.

- Selected flow: Prepared Salmonidae; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured prepared product transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`

###### Separated salmonid co-products (`salmonid_coproducts`)

Record saleable heads, viscera, trimmings, roe, or other separated material by actual destination; do not presume co-product status for discarded material.

- Selected flow: Salmonid co-product by presentation; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured saleable output mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared salmonid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`

##### Waste flows

###### Preparation residuals (`preparation_residuals`)

Record non-saleable fish material and other solids by treatment route.

- Selected flow: Fish-processing residual waste; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by material and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared salmonid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater volume or mass and, where available, measured pollutant load sent to treatment.

- Selected flow: Fish-processing wastewater; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water balance, reported separately from direct elementary emissions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared salmonid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg prepared salmonid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Freezing (`p03_freezing`)

#### Inputs

##### Product flows

###### Freezing electricity (`freezing_electricity`)

Record electricity attributable to freezer compressors, fans, conveyors, pumps, and defrost during the freezing operation.

- Selected flow: Electricity; UUID pending exact market and voltage review
- Flow property / unit: Energy / kWh
- Amount rule: submetered freezing electricity or documented allocation from shared refrigeration meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen product before glaze and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Range: Provisional freezing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg frozen product before glaze and packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant replacement (`freezing_refrigerant_makeup`)

Record refrigerant supplied to the refrigeration system and attribute only the reconciled freezing share.

- Selected flow: Refrigerant by chemical identity; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: calculated freezing share of reconciled refrigerant addition and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen product before glaze and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Range: Provisional refrigerant-replacement QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg frozen product before glaze and packaging
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Frozen salmonid before glaze (`frozen_salmonid_unpacked`)

Record the net frozen product mass after verified completion of freezing and before glaze and packaging.

- Selected flow: Frozen Salmonidae before glaze; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured frozen transfer mass excluding removable glaze and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg frozen output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_cold_chain`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

###### Refrigerant emission to air (`refrigerant_to_air`)

Record confirmed or mass-balance-estimated refrigerant loss by chemical identity; do not record the full equipment charge as an emission.

- Selected flow: Refrigerant emission to air by chemical identity; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: reconciled refrigerant loss attributed to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg frozen product before glaze and packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

### Process: Glazing and packaging (`p04_glazing_packaging`)

#### Inputs

##### Product flows

###### Glaze water (`glaze_water`)

Record water applied as glaze separately from product net mass and from cleaning water.

- Selected flow: Potable or otherwise legally suitable glaze water; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured applied glaze water less recovered water, with glaze fraction checked by net-mass records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged frozen target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glaze_packaging`
- Sources: `codex-cxc-52-2003`
- Range: Provisional glaze-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: per 1 kg net packaged frozen target product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging separately by material.

- Selected flow: Packaging material by polymer, fibre, metal, or other material; UUIDs pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged frozen target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glaze_packaging`
- Sources: `codex-cxc-52-2003`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg net packaged frozen target product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Packaged frozen Salmonidae (`packaged_frozen_salmonidae`)

Record packaged product gross mass and calculated net target-product mass, with glaze and packaging excluded from the reference amount.

- Selected flow: Salmonidae, frozen `a9f77412-4b2a-4d64-b893-7356d0173ed0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated net product mass from verified weighing records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged frozen target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_glaze_packaging`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`

##### Waste flows

###### Packaging offcuts and rejects (`packaging_waste`)

Record packaging waste by material and destination.

- Selected flow: Packaging waste by material; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: measured or stock-balanced packaging waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged frozen target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals_wastewater`

### Process: Frozen storage and dispatch (`p05_frozen_storage_dispatch`)

#### Inputs

##### Product flows

###### Frozen-storage electricity (`frozen_storage_electricity`)

Record electricity for refrigeration, fans, defrost, lighting, and attributable warehouse services over the declared storage duration.

- Selected flow: Electricity; UUID pending exact market and voltage review
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by documented storage service driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg-day of occupied frozen storage, then converted to the reference flow using actual duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Range: Provisional storage-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.0001
  - Upper: 0.1
  - Unit: kWh/kg-day
  - Basis: per kg-day of occupied frozen storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net frozen Salmonidae at dispatch (`rf_salmonidae_frozen_net`)

This is the reference flow delivered at the declared frozen-store dispatch gate.

- Selected flow: Salmonidae, frozen `a9f77412-4b2a-4d64-b893-7356d0173ed0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1 kg net target-product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net frozen target product at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-v3-2025`

##### Elementary flows

###### Cold-store refrigerant emission to air (`cold_store_refrigerant_to_air`)

Record reconciled refrigerant loss attributed to the product's actual frozen-storage service.

- Selected flow: Refrigerant emission to air by chemical identity; UUID pending exact semantic review
- Flow property / unit: Mass / kg
- Amount rule: facility refrigerant loss allocated by documented refrigeration service driver and actual storage duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen target product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_01_avoid` | Multi-output foreground operations | First avoid allocation by subdivision, separate metering, or expansion of independently operated steps when this is consistent with the declared goal and system model. | `eu-pef-2021-2279` |
| `alloc_02_physical` | Unavoidable joint production | When subdivision is not feasible, use a documented physical causal relationship that reflects how inputs and emissions change with the co-products; do not select mass merely because mass data are available. | `eu-pef-2021-2279` |
| `alloc_03_economic_fallback` | Joint production lacking a defensible physical relationship | Use economic allocation only as a disclosed fallback, based on temporally and geographically representative prices and accompanied by a sensitivity result against a plausible physical basis. | `eu-pef-2021-2279` |
| `alloc_04_waste_status` | Fish residuals, rejects, wastewater, and packaging waste | Classify an output as a co-product only when it has a documented destination and economic or functional value. Otherwise model it as waste and include treatment burdens; do not assign an avoided-product credit without an explicit consequential scenario. | `eu-pef-2021-2279` |
| `alloc_05_shared_utilities` | Shared refrigeration, water, cleaning, and warehouse services | Allocate shared utilities using measured process energy, operating time and load, occupied kg-day, water submetering, or another documented causal driver; disclose the driver and test material shared loads. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `p01_reception`; `p02_preparation` | Lot identity and fish mass | Receiving, scale, and production record | lot_id, supplier, species_or_taxon, origin_route, presentation, received_state, gross_mass, tare, accepted_mass, rejected_mass, transfer_mass, timestamp | Calibrated scales joined to traceable lot records | kg | Every lot and transfer | Representative production period, normally at least 12 months or justified campaign | All included lines and facilities | Sum by lot and process; preserve species, origin, presentation, and state; normalize only after reconciliation | Scale calibration, lot traceability, invoices, weigh tickets, and reconciliation record |
| `cp_water_ice` | `p02_preparation`; `p04_glazing_packaging` | Water, ice, and glaze | Meter, batch, or purchase record | meter_start, meter_end, ice_mass, recovered_water, glaze_applied, use_type, lot_id, timestamp | Submetering preferred; otherwise documented water balance | kg | Each batch or shift | Same period as production | All included water and ice points | Net supplied mass by use divided by corresponding process output | Meter calibration, purchase record, batch sheet, and water-balance closure |
| `cp_energy` | `p02_preparation`; `p03_freezing`; `p05_frozen_storage_dispatch` | Electricity and fuel | Meter and equipment operating record | meter_start, meter_end, carrier, fuel_quantity, conversion_factor, equipment, runtime, load, production_mass, storage_kg_day | Process submetering preferred; otherwise reconcile facility meters and allocate by documented causal driver | kWh, MJ, or physical fuel unit | Continuous, batch, shift, or monthly with production reconciliation | Same representative period as production and seasonal storage | All included lines, freezers, and cold stores | Sum by carrier and process; subtract documented excluded uses; normalize by process output or kg-day | Meter calibration, invoices, equipment logs, and allocation worksheet |
| `cp_freezing_cold_chain` | `p03_freezing`; `p05_frozen_storage_dispatch` | Freezing completion and cold chain | Time-temperature and dispatch record | lot_id, sensor_id, sensor_location, start_time, end_time, core_temperature, store_temperature, excursion, corrective_action, dispatch_condition | Calibrated sensors and recorded checks at defined critical locations | °C, h, d | Each lot plus continuous or defined periodic storage monitoring | Entire freezing and storage interval | Every included freezer, cold room, and dispatch lot | Preserve raw time series or checks; summarize completion, duration, and excursions by lot | Calibration certificates, alarm logs, corrective-action records, and dispatch checks |
| `cp_glaze_packaging` | `p04_glazing_packaging` | Glaze, packaging, gross and net mass | Batch, bill-of-material, and weight-control record | lot_id, gross_mass, tare, package_mass, glaze_mass_or_fraction, net_product_mass, packaging_material, packaging_mass, rejected_packaging | Calibrated scales, documented deglazing or validated net-content procedure, and packaging bill of materials | kg | Each lot and packaging specification | Same period as production | All included products and packaging lines | Calculate net product mass and aggregate packaging by material; reconcile to output count and mass | Scale calibration, net-content checks, packaging specifications, and stock reconciliation |
| `cp_refrigerant` | `p03_freezing`; `p05_frozen_storage_dispatch` | Refrigerant additions and losses | Service and charge inventory record | refrigerant_identity, opening_charge, additions, recovery, closing_charge, confirmed_release, equipment, service_date, runtime_or_load_driver | Reconciled refrigerant mass balance by system and chemical | kg | Every service event and at least annual reconciliation | Same representative period as production | All refrigeration systems serving included processes | Calculate loss by chemical; allocate shared system loss by documented causal refrigeration-service driver | Technician service records, purchase and recovery records, charge inventory, and leak-test records |
| `cp_residuals_wastewater` | `p01_reception`; `p02_preparation`; `p04_glazing_packaging` | Co-products, solid waste, and wastewater | Scale, container, manifest, meter, and laboratory record | material, mass, destination, sale_status, wastewater_volume_or_mass, pollutant_parameter, concentration, sampling_time, treatment_route | Weighing or stock balance for solids; metering and representative sampling for wastewater | kg and parameter-specific units | Each lot, container, shipment, or sampling plan | Same period as production | All included discharge and residual points | Aggregate by material, status, and destination; calculate pollutant load from flow and concentration without double counting treated effluent | Weigh tickets, sales records, waste manifests, meter calibration, laboratory reports, and treatment invoices |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_net_mass` | Reference product | net target-product mass = gross packaged mass - packaging mass - removable glaze mass - free water and non-product tare | gross_mass, package_mass, glaze_mass_or_fraction, tare | kg net frozen target product | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `calc_02_yield` | Preparation and full foreground | net yield = net frozen target-product mass / accepted salmonid input mass; report co-product and waste fractions separately | accepted_mass, net_product_mass, co-product_mass, waste_mass | yield ratio and reconciled mass fractions |  |
| `calc_03_energy` | Each foreground process | process energy per process output = reconciled carrier-specific process energy / measured process output | meter readings, excluded use, allocation driver, output mass | kWh or MJ per kg process output |  |
| `calc_04_storage_service` | Frozen storage | storage service = occupied product mass multiplied by actual storage duration; allocate storage electricity and shared refrigerant loss by the documented service driver | kg in storage, entry and exit time, storage electricity, shared system loss | kg-day, kWh/kg-day, and kg refrigerant per kg-day |  |
| `calc_05_refrigerant_loss` | Refrigeration systems | refrigerant loss = opening charge + additions - recovery - closing charge, reconciled by chemical and excluding transfers documented to another system | opening_charge, additions, recovery, closing_charge | kg loss by refrigerant chemical |  |
| `calc_06_allocation` | Multi-output operations | apply subdivision first; otherwise apply the selected documented causal physical relationship; use economic fallback only with price-period and sensitivity disclosure | process inputs and emissions, co-product quantities, physical driver or representative prices | allocated inventory by output | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01_identity_traceability` | All product lots | Preserve species or taxon, origin route, supplier, presentation, received state, lot links, and mass transfers from receipt through dispatch. | Receiving records, production genealogy, labels, and dispatch documents; `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `dq_02_temporal_representativeness` | Foreground inventory | Cover a representative production period including material seasonality and cold-storage duration, normally 12 months; justify a shorter campaign and disclose excluded shutdowns or abnormal operation. | Meter coverage, production calendar, storage records, and representativeness statement |
| `dq_03_measurement` | Mass, water, energy, temperature, and refrigerant data | Use calibrated instruments where measurement is required; retain units, conversion factors, missing-data treatment, and meter-to-process reconciliation. | Calibration certificates, raw readings, invoices, and reconciliation worksheets |
| `dq_04_completeness` | Foreground boundary | Account for all included processes, utilities, packaging, glaze, co-products, wastes, wastewater, refrigerant losses, rework, and product loss; quantify and justify exclusions. | Process map, mass and energy balances, waste manifests, and gap register; `eu-pef-2021-2279` |
| `dq_05_cold_chain_quality` | Freezing and storage | Retain lot-specific freezing completion evidence, storage duration, temperature monitoring, excursions, corrective action, and packaging or glaze integrity checks. | Time-temperature records, alarms, inspections, and corrective-action records; `codex-cxc-52-2003` |
| `dq_06_safety_context` | Food-contact operations | Retain hygiene, water suitability, hazard-control, contamination prevention, and packaging conformity records needed to demonstrate that the modelled output was marketable product. | Facility prerequisite and hazard-control records; `codex-cxc-52-2003`; conditionally `codex-cxs-190-1995` |
| `dq_07_provisional_ranges` | Every reasoned-estimate range | Treat the range as a replaceable screening guardrail, flag values outside it for investigation, and replace it with foreground or reviewed source-backed evidence before reviewed or published use where material. | Manifest review metadata, reviewer decision, and replacement evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_01_reference_identity` | Reference flow | Require exactly 1 kg net target-product mass, product flow UUID `a9f77412-4b2a-4d64-b893-7356d0173ed0`, Mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `unsd-cpc-v3-2025` |
| `val_02_qualifiers` | Reference product metadata | Fail completeness when species or taxon, origin route, presentation, received state, glaze status, packaging, freezing route, storage duration, dispatch condition, geography, or production period is absent. | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `val_03_net_mass` | Product amount | Check that packaging, removable glaze, free water, pallets, and transport containers are excluded from the reference amount and that gross-to-net calculation inputs reconcile. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_04_process_coverage` | Foreground boundary | Require reception, applicable preparation, actual freezing or explicit already-frozen starting condition, applicable glazing and packaging, frozen storage, and dispatch; require reasons for every omitted conditional process. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_05_cold_chain` | Frozen product validity | Require freezing-completion and storage time-temperature records, excursion and corrective-action disclosure, and a frozen condition at the declared dispatch gate. | `codex-cxc-52-2003` |
| `val_06_balances` | Mass, water, and energy data | Require lot mass reconciliation, water and ice separation, carrier-specific energy totals, allocation of shared utilities, and quantified unexplained balance gaps. | `eu-pef-2021-2279` |
| `val_07_allocation` | Co-products and shared services | Require the allocation hierarchy, selected driver, co-product or waste classification, price period when economic fallback is used, and sensitivity disclosure for material allocation choices. | `eu-pef-2021-2279` |
| `val_08_refrigerants` | Refrigeration | Require refrigerant chemical identity and reconciled service records; reject treating the full equipment charge as an emission and flag unassigned confirmed losses. |  |
| `val_09_reasoned_estimates` | Provisional ranges | Identify every `reasoned_estimate`, require justification and replacement status, and flag values outside a QA range for investigation rather than automatic substitution. |  |
| `val_10_food_safety_context` | Product validity | Require the applicable hygiene, hazard-control, water-suitability, glaze or net-content, packaging-integrity, and lot-traceability evidence; report that PCR validation is not food-safety certification. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen Salmonidae at the processor frozen-store dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and upstream links |
| allowed_use | Attributional LCA, product footprinting, supply-chain modelling, procurement comparisons, and lifecycle-model construction for the declared species or taxon, origin route, presentation, geography, technology, and period |
| excluded_use | Food-safety certification; nutritional claims; comparisons that ignore species, wild or farmed origin, presentation, glaze, storage duration, allocation, or upstream differences; use for fillets, minced meat, non-salmonid fish, or non-frozen products without explicit adaptation |
| required_metadata | PCR id and version; product-flow UUID; species or taxon; origin route; received and sold presentation; glaze and packaging; facility geography; production period; freezing technology and location; cold-storage duration; dispatch condition; upstream dataset links; co-product fate; allocation; data owners and review status |
| required_quality_disclosure | Measurement coverage and calibration; mass, water, and energy reconciliation; meter allocation; cold-chain records and excursions; refrigerant accounting; co-product and waste destinations; wastewater data; provisional estimates; source and technology mismatches; exclusions and uncertainty |
| update_trigger | Material change in species mix, wild or farmed origin, received state, presentation, facility, freezing or refrigeration technology, glaze or packaging specification, storage duration, refrigerant, energy supply, yield, co-product market, allocation, regulation, source evidence, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21212 “Salmonidae, frozen”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-11) | Classification context and frozen Salmonidae product boundary |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Fish-processing scope, freezing and frozen storage, glazing, packaging, cold-chain, hygiene, hazard-control, and quality records |
| `codex-cxs-190-1995` | standard | Codex Alimentarius, CXS 190-1995, Standard for Quick Frozen Fish Fillets, official standards catalogue https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ (retrieved 2026-08-11) | Conditional frozen-fish product and net-content cross-check; does not expand this PCR to fillets |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | System-boundary completeness, primary-data quality, allocation hierarchy, shared-service treatment, and disclosure |
