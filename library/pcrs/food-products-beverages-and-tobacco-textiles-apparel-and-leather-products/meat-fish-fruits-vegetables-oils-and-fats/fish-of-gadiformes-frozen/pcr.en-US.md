---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-of-gadiformes-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish of Gadiformes, frozen

## 1. Scope and Applicability

This PCR covers factory-gate production of frozen fish of the order Gadiformes in whole, eviscerated, headed, or another declared non-fillet form. It starts with fish received at the freezing or processing facility and ends with accepted frozen product packed or otherwise prepared for dispatch from frozen storage. Upstream fishing or aquaculture, landing, and transport to the facility are represented by linked supplier datasets rather than recreated inside the foreground plant inventory.

The PCR excludes fresh or chilled fish, fillets, minced fish meat, blocks made from fillets or minced flesh, smoked, dried, salted, brined, cooked, canned, or otherwise prepared products. A dataset must not use this PCR merely because a product is frozen; species order and product form must both conform. Distribution after factory dispatch, retail, consumer storage, cooking, and end-of-life are outside the default foreground boundary.

The required foreground route includes receipt and cold holding, product-form preparation when performed, freezing and optional glazing, packaging, frozen storage, and factory dispatch. Food-safety controls, rejected product, wastewater, refrigerant losses, co-products, and residues remain visible where they occur. `codex-cxs-190-1995` is used only for transferable quick-freezing, cold-chain, glaze, net-content, hygiene, and quality principles; because its direct scope is fish fillets, every application to whole or dressed Gadiformes must be justified in the dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-of-gadiformes-frozen |
| classification_refs | CPC 3.0 `21214` — Fish of Gadiformes, frozen |
| covered_products | Frozen Gadiformes fish sold whole, eviscerated, headed, or in another declared non-fillet/non-minced fish form |
| excluded_products | Non-Gadiformes fish; live, fresh, or chilled fish; fillets; minced fish meat; reconstituted blocks; smoked, dried, salted, brined, cooked, canned, or otherwise prepared fish |
| representative_product | Frozen Gadiformes fish in the declared species, source system, dressing state, glazing state, and sale configuration |
| production_route | Receipt and chilled holding; optional washing, grading, evisceration or heading; freezing; optional glazing; packaging; frozen storage and factory dispatch |
| market_state | Frozen product at the processing-facility gate, with packaging and added glaze excluded from the 1 kg net fish reference amount |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen Gadiformes fish supplied in a declared whole or dressed non-fillet form |
| How much | 1 kg net fish mass, excluding packaging and added glaze |
| How well | Accepted for the declared market specification and food-safety release; species, origin, dressing state, freezing method, glazing state, and storage condition declared |
| How long or cycle | One production lot through factory dispatch; frozen-storage duration for the represented lot declared |
| reference_flow_link | `frozen_gadiformes_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen fish mass |
| Reference product flow | Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or declared species mix; wild-caught or farmed origin; catch/farm and landing region; whole/eviscerated/headed or other non-fillet form; with/without skin and head; freezing technology; glazing state and glaze exclusion method; package configuration; frozen-storage temperature and duration; factory-gate geography and period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference frozen product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to exactly 1 kg accepted net fish mass after freezing and any deglazing or other declared glaze-exclusion determination; exclude packaging and added glaze water. |
| `material_mass_basis` | Raw fish, prepared fish, product, co-products, residues, rejects, glaze, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain reporting-period totals and state whether each amount is received, drained, deglazed, frozen, wet, or dry mass; convert only with measured lot-specific evidence. |
| `water_measurement` | Process, cleaning, and glazing water | Mass | kg | Meter or calculate water separately by use; document any volume-to-mass conversion and do not merge glaze retained on product with net fish mass. |
| `energy_measurement` | Preparation, freezing, packaging, and frozen storage | Energy | kWh or MJ | Record delivered energy by carrier and process; convert units using a documented factor and do not combine electricity, fuel, and purchased cooling without preserving carrier identity. |
| `temperature_time_record` | Product freezing and frozen storage | Temperature and time | °C and h or day | Retain time-stamped core or representative product temperature and storage records sufficient to demonstrate the declared freezing and cold-chain condition; where the CXS 190 benchmark is claimed, verify -18 °C or colder at the thermal centre after stabilization and during the declared storage instruction. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Gadiformes fish received at the processing or freezing facility in a declared species, source system, temperature, preservation, and dressing state |
| starting_condition_role | Supplier-linked product input and beginning of directly controlled foreground operations |
| product_classification_scope | Frozen Gadiformes fish in whole or declared dressed non-fillet/non-minced form |
| recursive_input_rule | If previously frozen Gadiformes fish is used as an input, keep it as a visible product input linked to an upstream dataset and do not recursively reconstruct its production inside this foreground package. |
| upstream_dataset_requirement | Fishing or aquaculture, landing, ice or chilling before receipt, and inbound transport require representative upstream datasets with species, origin, technology, geography, and period compatibility. |
| disclosure | Declare received fish form and temperature, source system, included preparation steps, freezing and glazing method, package configuration, frozen-storage duration, dispatch condition, co-product treatment, allocation basis, and all material exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Directly controlled facility operations | Include receipt and holding, required preparation, freezing, optional glazing, packaging, frozen storage, cleaning attributable to the route, quality rejection, wastewater handling before transfer, and refrigerant losses. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_upstream_links` | Purchased fish, energy, water, ice, packaging, cleaning materials, refrigerants, and transport | Link each material upstream input to an appropriate dataset and preserve its quantity and identity; do not treat a supplier input as burden-free because production occurs outside the plant. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | Freezing and frozen storage through factory dispatch | Include energy and refrigerant-related exchanges needed to establish and maintain the declared frozen condition through the dispatch gate. | `codex-cxs-190-1995` |
| `boundary_exclusions` | Downstream life-cycle stages | Exclude post-dispatch distribution, retail, consumer storage and preparation, and end-of-life unless the study explicitly extends the boundary and reports those stages separately. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_holding` | Receipt, inspection, and cold holding | required | All routes | Establish accepted raw-fish input and preserve lot identity and temperature | kg accepted raw fish |
| `fish_preparation` | Washing, grading, and product-form preparation | conditional | Include each preparation step actually performed, including optional evisceration or heading | Convert received fish to the declared pre-freezing form and separate residues | kg prepared fish |
| `freezing_glazing` | Freezing and optional glazing | required | Glazing inputs and outputs apply only when glazing occurs | Establish frozen condition and declared glaze state | kg net frozen fish excluding added glaze |
| `packing_storage` | Packaging, frozen storage, and factory dispatch | required | Packaging rows reflect the represented sale configuration | Release and dispatch the frozen reference product | 1 kg net reference product |

### Process: Receipt, inspection, and cold holding (`receipt_holding`)

#### Inputs

##### Product flows

###### Received Gadiformes fish (`raw_gadiformes_input`)

Record fish entering the facility by species or declared species mix, wild or farmed source, origin, supplier lot, preservation state, dressing state, and measured received mass.

- Selected flow: Gadiformes fish in declared received state (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted and rejected receipt mass before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-21214`; `codex-cxc-52-2003`
- Range: Provisional raw-fish input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg
  - Basis: per 1 kg net frozen reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fish for preparation or freezing (`accepted_fish_output`)

Record the mass transferred from receipt to the next in-scope operation without losing lot identity.

- Selected flow: Accepted Gadiformes fish (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Calculated as received mass less rejected or diverted mass and verified against transfer weights
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected fish and receipt residues (`receipt_rejects`)

Record rejected fish, damaged material, and receipt residues separately by reason and destination; a saleable diversion is a product or co-product, not waste.

- Selected flow: Rejected fish or receipt residue by destination (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by rejection reason and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Washing, grading, and product-form preparation (`fish_preparation`)

#### Inputs

##### Product flows

###### Process and cleaning water (`preparation_water`)

Record metered water used for washing, equipment cleaning, and sanitation attributable to this route, separated from glaze water.

- Selected flow: Process water (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Metered use or documented batch allocation from a calibrated shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional process-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity for conveyors, pumps, grading, cutting, sanitation support, and other preparation equipment when these loads are not separately metered.

- Selected flow: Electricity, supplied (UUID pending exact review)
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or documented equipment-load allocation to production hours
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Provisional preparation-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fish transferred to freezing (`prepared_fish_output`)

Record the fish mass after actual washing, grading, and dressing steps and before freezing.

- Selected flow: Prepared Gadiformes fish (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled with raw fish, retained co-products, residues, and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-yield QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 1
  - Unit: kg/kg
  - Basis: kg prepared fish per kg accepted raw fish
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Saleable fish co-products (`fish_coproducts`)

Record heads, viscera, frames, trimmings, roe, liver, or other outputs as co-products only when they have a documented beneficial destination and transaction or internal use.

- Selected flow: Fish co-product by material and destination (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by co-product type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Preparation residues (`preparation_residues`)

Record non-saleable organic residues and off-spec fish by material state and treatment destination.

- Selected flow: Fish-processing residue by destination (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated residue sent to each treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination`
- Sources:
- Range: Provisional residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater transferred to treatment, preserving whether measurements are discharge volume, mass, or pollutant load.

- Selected flow: Wastewater to treatment (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or documented water-balance calculation, with treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_balance`
- Sources:
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Freezing and optional glazing (`freezing_glazing`)

#### Inputs

##### Product flows

###### Freezing energy (`freezing_energy`)

Record electricity, fuel, purchased cooling, or other energy used to freeze product, keeping each carrier separate.

- Selected flow: Energy carrier used for freezing (UUID pending exact review)
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Sub-metered consumption or engineering allocation using measured load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxs-190-1995`
- Range: Provisional freezing-energy QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 5
  - Unit: kWh
  - Basis: per 1 kg net frozen fish output; convert other carriers separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glaze_water`)

When glazing occurs, record water or glazing solution applied and the measured retained glaze separately from net fish mass.

- Selected flow: Potable water or clean seawater for glazing (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Metered glazing water and measured retained glaze by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish output excluding glaze
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glaze_net_mass`
- Sources: `codex-cxs-190-1995`
- Range: Provisional retained-glaze QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net frozen fish excluding glaze
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant added to the equipment serving freezing and in-scope frozen storage and allocate shared systems using documented operating evidence.

- Selected flow: Refrigerant by chemical identity (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Purchase and service records adjusted for inventory change and assigned to the represented equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net frozen Gadiformes fish before packing (`net_frozen_fish_output`)

Record accepted frozen fish on the declared deglazed or otherwise glaze-excluded net fish basis.

- Selected flow: Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured accepted frozen fish mass excluding added glaze and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net frozen fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_glaze_net_mass`
- Sources: `codex-cxs-190-1995`

##### Waste flows

##### Elementary flows

###### Fugitive refrigerant emissions (`refrigerant_loss_to_air`)

Record calculated losses to air by refrigerant chemical identity; do not use an unspecified generic refrigerant emission.

- Selected flow: Refrigerant emission to air by chemical identity (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant make-up plus opening stock minus closing stock and documented recovery or transfer, allocated to in-scope equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-pef-2021-2279`
- Range: Provisional refrigerant-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg net frozen fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging, frozen storage, and factory dispatch (`packing_storage`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging by material and reusable status without adding packaging to net fish mass.

- Selected flow: Packaging material by material type (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-material or issue records reconciled to packed units and packaging scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packing and frozen-storage electricity (`storage_electricity`)

Record packing-line and frozen-storage electricity through factory dispatch, allocating shared cold rooms by measured energy and compatible occupancy or product-time drivers.

- Selected flow: Electricity, supplied (UUID pending exact review)
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered consumption or documented allocation from facility meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxs-190-1995`
- Range: Provisional packing-and-storage electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg net reference product for the declared factory storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen Gadiformes reference output (`frozen_gadiformes_reference_output`)

This is the quantitative reference leaving the factory system after release and before downstream distribution.

- Selected flow: Fish of Gadiformes, frozen `d2a5f478-6f93-455d-83df-ddfd9e622c9d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg accepted net frozen fish excluding packaging and added glaze after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `unsd-cpc-3-21214`; `codex-cxs-190-1995`

##### Waste flows

###### Packaging scrap and rejected packed product (`packing_waste`)

Record packaging scrap and rejected packed product separately by material, reason, and destination.

- Selected flow: Packaging or product waste by destination (UUID pending exact review)
- Flow property / unit: Mass / kg
- Amount rule: Measured waste or reconciled difference between issued, incorporated, returned, and stocked material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Species, product forms, batches, and separable preparation lines | First avoid allocation by collecting separate records or subdividing operations where inputs and outputs can be causally assigned without creating artificial burden-free products. | `eu-pef-2021-2279` |
| `allocation_reuse_closed_loop` | Internal rework returned to the same product route | Do not create a co-product credit for internal rework; keep its energy, handling, losses, and stock movement in the foreground mass balance. | `eu-pef-2021-2279` |
| `allocation_physical_relation` | Joint fish products and co-products where subdivision is not feasible | Use a documented physical relation only when it represents the causal use or generation of the joint outputs; do not assume mass allocation is automatically causal. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Saleable co-products without a defensible physical causal relation | If allocation remains necessary, use contemporaneous net economic values with declared geography, period, price source, zero or negative-value treatment, and sensitivity analysis. | `eu-pef-2021-2279` |
| `allocation_waste_destination` | Waste, residues, wastewater, and rejected product | Record treatment inputs, recovered outputs, fees or revenues, and the point where responsibility transfers; do not relabel a co-product as waste or omit burdens solely because a stream leaves the site. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_holding`; `fish_preparation`; `freezing_glazing`; `packing_storage` | Fish inputs, transfers, product, stock, rejects, and co-products | Scale, ERP, batch, and inventory records | lot_id; species; source_system; origin; product_form; gross_mass; tare; glaze_basis; accepted_mass; rejected_mass; opening_stock; closing_stock | Calibrated scales linked to lot and production records | kg | Each lot and reporting-period close | At least the represented production period, including start/end stock | All facilities and lines represented | Sum compatible lots; reconcile input + opening stock = outputs + losses + closing stock before normalization | Scale calibration, signed lot records, ERP extracts, and documented reconciliation |
| `cp_utility_records` | `fish_preparation` | Water and shared preparation utilities | Meter and invoice records | meter_id; opening_reading; closing_reading; calibration; use_area; production_hours; allocation_driver | Direct sub-meter or documented allocation from calibrated shared meter | kg, m3, kWh, or MJ | Per batch where available and at least monthly | Same period as production denominator | All represented preparation operations | Aggregate by carrier and use; convert with documented factors; allocate only residual shared use | Meter calibration, invoices, allocation worksheet, and exception log |
| `cp_energy_records` | `fish_preparation`; `freezing_glazing`; `packing_storage` | Electricity, fuel, purchased cooling, and storage energy | Sub-meter, fuel, and equipment records | carrier; meter_id; reading; fuel_mass_or_volume; load; operating_time; cooling_purchase; process; storage_days | Direct measurement preferred; documented engineering allocation otherwise | kWh, MJ, kg, L | Continuous or per shift, reconciled monthly | Same period as production plus represented storage | All relevant freezing, packing, and cold-store equipment | Aggregate separately by carrier and process; allocate shared cold storage using measured energy and compatible product-time | Meter calibration, invoices, load tests, run-hour logs, and allocation worksheet |
| `cp_glaze_net_mass` | `freezing_glazing`; `packing_storage` | Glaze application and net fish mass | Batch recipe, water meter, gross/net weight, and deglazing test | lot_id; pre_glaze_mass; applied_water; post_glaze_mass; deglazed_mass; test_method; sample_count | Lot measurement using documented glaze-exclusion method | kg | Each represented glazing campaign and release lot | Same period as reference output | Every glazing line and product form represented | Calculate retained glaze and net fish by lot; production-weight aggregate only compatible products | Scale calibration, sample record, test method, and release record |
| `cp_residue_destination` | `receipt_holding`; `fish_preparation`; `packing_storage` | Rejects, co-products, organic residues, and packaging waste | Weighbridge, bin, sales, and waste-transfer records | material; mass; wet_or_dry_basis; destination; sale_or_fee; transporter; treatment | Weigh each dispatch or use documented container tare and count | kg and currency where relevant | Each transfer | Full represented production period | All represented lines and contracted destinations | Aggregate separately by material and destination; preserve saleable co-products separately from waste | Tickets, invoices, manifests, destination confirmation, and moisture record where used |
| `cp_water_wastewater_balance` | `fish_preparation` | Water input and wastewater transfer | Water meters, discharge meters, sampling, and treatment records | water_input; product_retention; evaporation; wastewater_mass_or_volume; pollutant_load; destination | Metering plus documented balance; sample pollutant loads under applicable permit or plant plan | kg, m3, and measured load units | Meter readings at least monthly; sampling at required frequency | Same period as production | All represented wet-processing areas and discharge points | Reconcile water input to retained, evaporated, reused, and discharged quantities without inventing missing pollutant concentrations | Meter calibration, laboratory results, permit records, and balance closure |
| `cp_refrigerant_balance` | `freezing_glazing`; `packing_storage` | Refrigerant make-up, recovery, inventory, and fugitive loss | Purchase, service, cylinder, and equipment records | refrigerant_identity; opening_stock; purchases; additions; recovery; transfer; closing_stock; equipment_id; service_date | Technician records and mass balance by chemical | kg | Each service event and annual/reporting-period close | Same period as production, with stock boundaries | All freezing and cold-store equipment in scope | Calculate loss by chemical; allocate shared equipment using documented operating or cooling-load evidence | Service certificates, purchase records, cylinder weights, recovery records, and signed balance |
| `cp_packaging_records` | `packing_storage` | Primary, secondary, and tertiary packaging | BOM, issue, return, scrap, and packed-unit records | material; unit_mass; units_issued; units_returned; units_packed; scrap; reusable_cycles | Verified BOM plus periodic weighing and inventory reconciliation | kg | Per configuration and reporting period | Same period as packed output | All represented sale configurations | Sum by material; reconcile issued = packed + scrap + returns + stock change | Supplier specifications, check weights, inventory records, and reusable-asset logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground exchanges | normalized amount = reporting-period exchange / reporting-period accepted net frozen fish excluding packaging and added glaze | Exchange totals; accepted net frozen fish | Exchange per 1 kg reference product | `codex-cxs-190-1995` |
| `calc_mass_balance` | Each process and the full facility route | opening stock + measured inputs = measured outputs + documented losses + closing stock; investigate rather than force-close unexplained difference | Fish, water where relevant, co-products, residues, rejects, glaze, packaging, and stocks | Reconciled balance and disclosed closure difference | `codex-cxc-52-2003` |
| `calc_glaze_exclusion` | Glazed frozen product | net fish mass = gross glazed product mass - measured retained glaze mass using the declared test method | Gross mass; deglazed mass or retained-glaze measurement | Net fish mass and glaze mass | `codex-cxs-190-1995` |
| `calc_refrigerant_loss` | Freezing and cold-store equipment | loss = opening refrigerant inventory + purchases + transfers in - closing inventory - recovered refrigerant - transfers out | Refrigerant stock, purchase, service, recovery, and transfer records | Loss to air by refrigerant chemical identity | `eu-pef-2021-2279` |
| `calc_allocation_factor` | Unavoidable joint production | physical factor = selected causal physical quantity for output / total selected causal quantity; economic factor = net value of output / total positive net value, with zero or negative values treated explicitly | Output quantities; causal measure or contemporaneous net values | Declared allocation factors and sensitivity result | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and raw fish | Preserve species or species mix, wild/farmed source, origin, product form, glazing state, lot, and supplier linkage; do not aggregate materially different products without disclosed weights. | Product specification, supplier records, lot traceability, and `unsd-cpc-3-21214` |
| `dq_temporal_geographic_technology` | All inputs and outputs | Use foreground records and upstream datasets representative of the declared production period, facility geography, fishing/aquaculture system, preparation route, freezing technology, and storage duration. | Coverage matrix, dataset metadata, and variance explanation |
| `dq_completeness` | Process map | Demonstrate that all required and applicable conditional processes, product flows, wastes, elementary emissions, utilities, refrigerants, and destinations were assessed; quantify any exclusion. | Completed inventory checklist and mass/energy reconciliation |
| `dq_food_safety_release` | Accepted reference output | Link each represented lot to applicable hygiene, hazard-control, temperature, sensory/physical, and release records; PCR conformance does not replace legal food-safety compliance. | HACCP or equivalent records, temperature logs, inspection and release records, and `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `dq_estimate_replacement` | Provisional QA ranges | Treat every `reasoned_estimate` range as a screening flag, not a default truth; replace or explicitly approve it with representative foreground or reviewed source evidence before activation. | Review decision, foreground distribution, or source-backed replacement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require Product flow `d2a5f478-6f93-455d-83df-ddfd9e622c9d`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg accepted net frozen fish excluding packaging and added glaze. | `unsd-cpc-3-21214`; `codex-cxs-190-1995` |
| `validate_scope_identity` | Product category | Reject records that do not demonstrate Gadiformes identity and a frozen whole or declared dressed non-fillet/non-minced form; require a different PCR for excluded forms. | `unsd-cpc-3-21214` |
| `validate_required_qualifiers` | Dataset metadata | Require every reference-flow qualifier or an explicit not-applicable justification, including species, source system, origin, form, freezing technology, glaze basis, package configuration, storage condition, geography, and period. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_process_coverage` | Foreground inventory | Require receipt, applicable preparation, freezing, optional glazing disclosure, packaging, frozen storage, dispatch, cleaning allocation, rejects, residues, wastewater, and refrigerant review; identify every skipped conditional process. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_mass_balance` | Process and route mass balances | Require measured or calculated closure using aligned periods and bases; report unexplained differences rather than silently assigning them to product, waste, or evaporation. | `codex-cxc-52-2003` |
| `validate_cold_chain` | Freezing and frozen storage | Require time-temperature evidence for the declared freezing and storage condition; if claiming the CXS 190 benchmark, verify -18 °C or colder at the thermal centre after stabilization and the stated storage instruction. | `codex-cxs-190-1995` |
| `validate_glaze_net_content` | Glazed products | Require measured glaze and net fish mass separately and prevent added glaze water from entering the 1 kg reference amount. | `codex-cxs-190-1995` |
| `validate_allocation` | Multi-output operations | Require the allocation hierarchy, selected basis, input data, factors, zero/negative-value treatment, and sensitivity result; fail if saleable co-products are omitted or treated as waste without evidence. | `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | All provisional ranges | Flag every value outside a provisional QA guardrail for investigation and flag every unreplaced `reasoned_estimate` before activation; a value inside a broad range is not proof of quality. |  |
| `validate_uuid_completeness` | Tiangong references | Accept the exact UUIDs only for the reference flow, Mass property, and Units of mass group; keep every other semantic inventory flow unresolved until exact Tiangong review and reject approximate UUID substitution. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen Gadiformes fish at the processing-facility gate |
| downstream_use | May support `secondary_dataset` or `background_dataset` use after independent review, validation, and publication |
| allowed_use | Product-footprint, process comparison, supply-chain, and life-cycle modelling where species/form, source system, geography, technology, glaze basis, storage duration, allocation, and data quality are compatible |
| excluded_use | Unqualified proxy for other fish orders, fillets or minced meat, fresh/chilled or otherwise preserved fish, fisheries or aquaculture production alone, post-dispatch cold chain, retail, cooking, nutrition, or food-safety certification |
| required_metadata | PCR id and version; reference-flow UUIDs; species/mix; wild/farmed source; origin; received and sale forms; freezing and glazing methods; net-mass method; package configuration; facility geography; period; storage temperature/duration; process coverage; allocation method; upstream dataset identities |
| required_quality_disclosure | Foreground and upstream coverage, sample and meter quality, mass/energy closure, estimate share, data gaps, allocation sensitivity, co-product and waste destinations, temperature evidence, glaze exclusion, refrigerant calculation, and unresolved UUIDs |
| update_trigger | Material change in species mix, source system, facility or line, preparation form, freezing technology, glaze practice, packaging, storage duration, co-product market, allocation basis, refrigerant, upstream datasets, regulation, Codex guidance, or reviewed range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21214` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21214 “Fish of Gadiformes, frozen”, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-08-11) | Classification identity and scope separation from other fish product forms |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official Codex listing https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (accessed 2026-08-11) | Fish-product hygiene and process-control framework; no unreviewed numerical criterion is taken from this source |
| `codex-cxs-190-1995` | standard | Codex Alimentarius, CXS 190-1995, Standard for Quick-Frozen Fish Fillets, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%252B190-1995%252FCXS_190e.pdf (accessed 2026-08-11) | Transferable quick-freezing, cold-chain, glaze/net-content, hygiene, labelling, and quality-control principles; direct scope limitation to fillets is disclosed |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (accessed 2026-08-11) | Life-cycle boundary completeness, upstream links, multifunctionality hierarchy, allocation disclosure, data quality, and refrigerant inventory treatment |
