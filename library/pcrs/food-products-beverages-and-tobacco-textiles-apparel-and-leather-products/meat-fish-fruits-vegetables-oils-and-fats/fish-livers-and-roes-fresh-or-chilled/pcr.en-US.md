---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish livers and roes, fresh or chilled

## 1. Scope and Applicability

This PCR applies to foreground data packages for edible fish livers, fish roes, or a declared mixture of the two that is kept fresh or chilled and supplied as net product mass at the declared facility gate. It covers receipt, separation from fish or viscera when performed by the reporting facility, trimming, washing when used, sorting or grading, chilling, cold storage, packing, and dispatch preparation.

The dataset shall declare species or species group, wild-caught or aquaculture origin, liver/roe product part, incoming material form, whether separation occurs in the foreground, preservation state, added ingredients, packaging configuration, cold-storage duration, temperature-control method, and facility-gate geography. Whole fish, fish meat and fillets, frozen livers or roes, salted, smoked, cooked, canned, fermented or otherwise preserved products, prepared caviar, fish oils, liver oils, feed products, and non-food products are outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-fresh-or-chilled |
| classification_refs | CPC 3.0: 21225, exact mapping context |
| covered_products | Edible fish livers and edible fish roes supplied fresh or chilled, including declared liver/roe mixtures that remain within this preservation state |
| excluded_products | Whole fish; fish fillets or meat; frozen, salted, smoked, cooked, canned, fermented, shelf-stable or otherwise preserved liver or roe products; prepared caviar; fish oil and liver oil; non-food material |
| representative_product | Packed fresh or chilled edible fish livers or roes at the declared facility gate |
| production_route | Receipt of whole fish, viscera, or separated livers/roes; conditional separation; trimming, washing, sorting or grading; chilling and cold storage; packing and dispatch preparation |
| market_state | Fresh or chilled, food-grade, not frozen and not otherwise preserved |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of edible fish livers and/or roes in a declared fresh or chilled market state |
| How much | 1 kg net product mass, excluding packaging and free ice or meltwater |
| How well | Food-grade product meeting the declared species, product-part, preservation, temperature-control, hygiene, grading and packaging specifications |
| How long or cycle | One declared production lot through packed facility-gate release; actual cold-storage duration shall be reported |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fish livers and roes, fresh or chilled `883637e3-14e1-4d82-bed8-5328706084ef` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; wild-caught or aquaculture origin; liver, roe, or declared mixture; incoming material form; separation location; fresh or chilled state; storage duration; temperature-control method; added ingredients; packaging configuration; facility-gate geography |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg drained or otherwise net saleable liver/roe product; exclude packaging, free ice, glaze, free liquid and meltwater from reference mass. |
| `intermediate_mass_balance` | Material inputs and product, co-product, residual and waste outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure wet mass on a consistent basis for each lot and disclose any moisture, drainage or weighing-basis difference before mass-balance comparison. |
| `energy_measurement` | Electricity and thermal or refrigeration energy | Energy property to be resolved | kWh or MJ | Record metered or allocated energy by carrier and process; do not combine electricity with fuels or purchased cooling without a documented conversion and allocation basis. |
| `cold_storage_duration` | Chilling and cold storage | Time property to be resolved | h or d | Record lot-weighted residence time and the method used to maintain the declared chilled condition. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Foreground facility | Include all operations from the declared incoming condition through packed facility-gate release, including conditional organ separation, trimming, washing, grading, chilling, cold storage, packaging, wastewater and residual handling. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_link` | Incoming fish-derived material | Link incoming whole fish, viscera, or separated liver/roe to an upstream dataset covering production or harvest and delivery to the declared starting point; do not treat a marketable organ as burden-free without documented waste status and allocation reasoning. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | Temperature-controlled handling | Include ice, refrigeration energy, cold storage, refrigerant loss when applicable, and temperature-controlled handling under foreground control. | `codex-cxc-52-2003` |
| `boundary_exclusions` | Capital goods and downstream stages | Exclude capital goods unless required by the study method; exclude distribution after facility-gate release, retail, use, cooking and end-of-life unless the declared study scope explicitly adds them. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole fish, fish viscera, or already separated fish livers/roes received at the first foreground-controlled point, with preservation state and upstream ownership declared |
| starting_condition_role | Entry point for foreground processing; it does not erase upstream harvest, aquaculture, vessel, landing, transport, or prior-separation burdens |
| product_classification_scope | Edible fish livers and roes remaining fresh or chilled within CPC 3.0 subclass 21225 |
| recursive_input_rule | When an input is already a product within this PCR category, record it as an upstream product flow with its own conforming dataset and start the foreground at the first additional transformation; do not recreate its upstream operations in the receiving process |
| upstream_dataset_requirement | Require traceable datasets for the incoming fish-derived material and other material or energy inputs; disclose allocation, geography, technology, time period and any data gap |
| disclosure | Declare incoming form, separation location, species/origin, included operations, excluded operations, temperature-control route, storage duration, allocation point and treatment of all co-products and residuals |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_separation` | Receipt, inspection and conditional separation | required | Separation is included when whole fish or viscera are received; receipt and inspection always apply | Establish incoming condition and recover edible livers or roes | kg accepted organ material |
| `washing_grading` | Trimming, washing, sorting and grading | required | Wet washing is included only when performed; dry trimming, inspection and grading remain included | Prepare food-grade liver/roe material | kg cleaned organ material |
| `chilling_storage` | Chilling and cold storage | required | Applies to all products; record actual ice and/or mechanical refrigeration route | Maintain the declared fresh or chilled state | kg chilled organ material and lot-weighted storage time |
| `packing_dispatch` | Packing and facility-gate dispatch preparation | required | Include actual primary, secondary and reusable packaging configuration | Produce the reference product | 1 kg net packed product excluding packaging |

### Process: Receipt, inspection and conditional separation (`receipt_separation`)

#### Inputs

##### Product flows

###### Incoming fish-derived material (`incoming_fish_material`)

Record the actual whole fish, viscera, or separated liver/roe material crossing into foreground control. The selected non-reference Tiangong flow UUID remains subject to identity review.

- Selected flow: Declared whole fish, viscera, or separated fish liver/roe flow; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet input mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21225`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted liver or roe material (`accepted_organ_material`)

Measure organ material accepted for further preparation after inspection and, where applicable, separation.

- Selected flow: Accepted edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

###### Other recovered co-products (`other_recovered_coproducts`)

Record all separately marketed or internally used fish parts recovered at the same separation point so allocation is complete.

- Selected flow: Declared recovered fish co-product; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured output mass by destination and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Rejected or non-food fish material (`rejected_fish_material`)

Record rejected tissues and residues by actual destination; do not net them against product output.

- Selected flow: Declared fish residual or waste flow; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass by destination and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_wastewater_records`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Trimming, washing, sorting and grading (`washing_grading`)

#### Inputs

##### Product flows

###### Accepted organ material input (`accepted_material_input`)

Record the accepted intermediate transferred from receipt and separation.

- Selected flow: Accepted edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured transferred wet mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cleaned organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

###### Process water (`process_water`)

Record supplied water when washing, rinsing or sanitation-related product contact occurs within this process.

- Selected flow: Process water; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: metered, batch-recorded or defensibly allocated water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional water-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cleaned and graded liver or roe (`cleaned_graded_product`)

Record saleable intermediate after trimming, washing when used, sorting and grading.

- Selected flow: Cleaned and graded edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet output mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cleaned organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Trimming and grading residues (`trimming_residues`)

Record removed membranes, damaged material and other sorting residues by destination.

- Selected flow: Declared organic residual or waste flow; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass by destination and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cleaned organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_wastewater_records`
- Sources: `codex-cxc-52-2003`

###### Process wastewater (`process_wastewater`)

Record wastewater leaving foreground control, including measured or calculated water and product loss; retain treatment destination.

- Selected flow: Process wastewater; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated balance from recorded water inputs and retained/product water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_wastewater_records`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Chilling and cold storage (`chilling_storage`)

#### Inputs

##### Product flows

###### Cleaned organ material input (`cleaned_material_input`)

Record the cleaned and graded intermediate entering temperature-controlled handling.

- Selected flow: Cleaned and graded edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured transferred wet mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

###### Ice used for chilling (`chilling_ice`)

Record purchased or site-produced ice that crosses the process boundary, excluding free ice from net reference mass.

- Selected flow: Ice; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured or batch-recorded ice supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional ice-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for chilling and cold storage (`cold_chain_electricity`)

Record metered electricity or a documented allocation from shared refrigeration and cold-room systems.

- Selected flow: Electricity, declared market and voltage; UUID to be resolved
- Flow property / unit: Energy / kWh
- Amount rule: metered use or calculated allocation from equipment power, operating time and load share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_records`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`
- Range: Provisional cold-chain electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled liver or roe intermediate (`chilled_product`)

Record chilled product transferred to packing, with storage time and temperature-control records linked to the lot.

- Selected flow: Chilled edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet output mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled organ material
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_chain_records`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Meltwater and cold-room washdown (`cold_chain_wastewater`)

Record meltwater and applicable washdown wastewater by discharge or treatment route without including free water in product mass.

- Selected flow: Wastewater; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_wastewater_records`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_loss`)

Record actual refrigerant type and loss allocated to this product when charge loss, servicing or leakage occurs in foreground-controlled equipment.

- Selected flow: Declared refrigerant emission to air; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: calculated from inventory reconciliation, service records or measured loss and documented allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`

### Process: Packing and facility-gate dispatch preparation (`packing_dispatch`)

#### Inputs

##### Product flows

###### Chilled organ material input (`chilled_material_input`)

Record chilled material transferred from cold storage to packing.

- Selected flow: Chilled edible fish liver or roe intermediate; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured transferred wet mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `codex-cxc-52-2003`

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material separately, including reusable packaging loss or trip allocation where applicable.

- Selected flow: Declared packaging material by material and format; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: purchasing and issue records reconciled to packed lot output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product output (`reference_product_output`)

The reference output is net fresh or chilled fish liver/roe product mass at facility-gate release.

- Selected flow: Fish livers and roes, fresh or chilled `883637e3-14e1-4d82-bed8-5328706084ef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net product per reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `unsd-cpc-3-0-21225`

##### Waste flows

###### Packaging scrap and damaged packaging (`packaging_waste`)

Record packing scrap and rejected packaging separately by material and treatment route.

- Selected flow: Declared packaging waste flow; UUID to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from material issues, product-packed packaging and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Shared foreground operations | First avoid allocation through process subdivision, separate metering and lot-specific material and energy records wherever the relevant operations can be distinguished. | `eu-pef-2021-2279` |
| `allocation_upstream_organs` | Whole-fish or viscera inputs yielding liver, roe and other outputs | Carry the upstream dataset and its documented multifunctionality treatment to the separation point; include every co-product and residual, and do not assign zero burden solely because an organ was formerly treated as low value. | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | Remaining inseparable multifunctionality | When subdivision or system expansion is not applicable, use a documented physical relationship that reflects the causal relationship; if no defensible physical relationship exists, use an economic or other justified relationship and report prices, reference period and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_status` | Residual and waste outputs | Document legal or contractual waste status, treatment destination, credits and burdens consistently; marketable or internally used outputs shall not be silently classified as waste. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_separation`; `washing_grading`; `chilling_storage`; `packing_dispatch` | Incoming, intermediate, product, co-product and residual mass | Weighing and lot records | lot_id; species; origin; incoming_form; separation_location; gross_mass; net_mass; tare; output_mass; destination; timestamp | Calibrated scales and reconciled production records | kg | Each lot and material movement | At least one representative continuous 12-month period or the full campaign when seasonal | Each foreground facility and relevant line | Sum by lot and normalize to net reference output; retain separate species and product forms | Calibration records, tare checks, lot reconciliation and signed production records |
| `cp_water_records` | `washing_grading` | Process water | Meter or batch records | meter_start; meter_end; batch_volume; product_contact_use; cleaning_use; lot_id | Submetering preferred; otherwise documented batch measurement or defensible allocation | kg or m3 | Each batch or daily with lot allocation | Same period as production data | Each foreground facility and water source | Convert volume with declared density when needed, allocate by measured driver and normalize to reference output | Meter calibration, invoices, allocation rationale and water-source identity |
| `cp_cold_chain_records` | `chilling_storage` | Ice, electricity, residence time and temperature control | Meter, purchase, equipment and temperature logs | lot_id; ice_mass; electricity_meter; equipment_power; run_time; storage_start; storage_end; temperature_record; load_share | Metered records plus lot-linked temperature and residence-time logs | kg, kWh, h or d | Per lot; energy at least daily or by operating batch | Same period as production data and covering seasonal temperature variation | Each cold room, ice system and refrigeration system under foreground control | Allocate shared energy using measured operating time and load; normalize to net reference output | Meter records, logger calibration, equipment list and allocation calculation |
| `cp_packaging_records` | `packing_dispatch` | Packaging input and packaging waste | Purchase, issue, bill-of-material and stock records | material; format; unit_mass; units_issued; reusable_trips; stock_change; scrap_mass; lot_id | Weigh representative components and reconcile issues to packed lots | kg | Each packaging configuration; stock reconciliation monthly | Same period as production data | Each packing line and supplier configuration | Calculate material mass by type, apply documented reusable-trip allocation and normalize to net reference output | Scale calibration, supplier specification, stock reconciliation and reusable-trip evidence |
| `cp_residual_wastewater_records` | `receipt_separation`; `washing_grading`; `chilling_storage` | Residuals, wastewater and meltwater | Weighing, discharge, treatment and balance records | lot_id; residual_type; wet_mass; water_input; discharge_volume; destination; treatment; solids_content | Direct measurement preferred; otherwise documented water or mass balance | kg or m3 | Each lot or daily with lot allocation | Same period as production data | Each discharge point and residual destination | Keep streams separate, convert to mass where needed, and normalize to reference output | Scale or meter calibration, manifests, treatment invoices and balance closure |
| `cp_refrigerant_records` | `chilling_storage` | Refrigerant loss to air | Charge, purchase and service records | refrigerant_type; opening_charge; additions; recovery; closing_charge; equipment_id; service_date; allocation_driver | Annual inventory reconciliation with service-event checks | kg | Each service event and annual reconciliation | Same annual period as production data | Each foreground-controlled refrigeration system | Calculate unrecovered loss and allocate by documented equipment service or load driver | Technician records, purchase records, recovery documentation and equipment register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Divide the period or lot amount assigned to this product by net reference product output; keep packaging and free ice outside the denominator. | Assigned flow amount; net product kg | Flow amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_mass_balance` | Each material transformation | Compare wet input mass with product, co-product, residual, wastewater-carried solids and documented stock change on the same weighing basis; investigate unexplained difference. | Input and output masses; stock change; moisture or drainage basis | Lot mass-balance closure and unexplained difference | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `calc_shared_energy` | Shared refrigeration and utilities | Allocate metered shared energy using measured equipment runtime, load or another causal driver; disclose the driver and test material alternatives when allocation is influential. | Metered energy; runtime; load; product throughput | Energy assigned to the reference product | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Foreground refrigeration | Opening charge plus additions minus recovered refrigerant minus closing charge equals unrecovered loss; allocate only the documented share serving this product. | Charge inventory and service records | kg refrigerant emitted per reference product | `eu-pef-2021-2279` |
| `calc_packaging_mass` | Packaging | Multiply verified component mass by units consumed, adjust for stock change and scrap, and divide reusable packaging by evidenced trips before normalization. | Component mass; units; stock change; scrap; trips | kg packaging material and waste per reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and incoming material | Preserve species or species group, origin, organ type, incoming form, separation location, preservation state, added ingredients and packaging identity at lot level. | Lot, supplier, receiving and product specification records; `unsd-cpc-3-0-21225`; `codex-cxc-52-2003` |
| `dq_temporal_representativeness` | Foreground data | Use a representative continuous 12-month period where production is year-round, or the complete campaign for seasonal production; explain abnormal downtime and seasonal gaps. | Production calendar, meter coverage and excluded-period log; `eu-pef-2021-2279` |
| `dq_technology_geography` | Each foreground facility | Describe equipment, refrigeration technology, water source, treatment routes, facility geography and capacity utilization; do not combine materially different routes without weighted records. | Equipment register, site records and weighting calculation; `eu-pef-2021-2279` |
| `dq_completeness` | Inventory and process map | Account for every required or triggered process and all material, energy, packaging, wastewater, refrigerant, product, co-product and residual streams; disclose omissions and cut-off application. | Mass and energy reconciliation, purchase records, waste manifests and cut-off disclosure; `eu-pef-2021-2279` |
| `dq_cold_chain` | Chilling and storage | Retain lot-linked time and temperature-control evidence and identify excursions or rejected lots; never infer chilled-state compliance from product name alone. | Temperature logs, residence-time records, calibration and disposition records; `codex-cxc-52-2003` |
| `dq_allocation` | Multifunctional operations | Report the allocation point, all outputs, avoided-allocation steps, selected relationship, factors, reference period and sensitivity when the choice is influential. | Allocation worksheet and source records; `eu-pef-2021-2279` |
| `dq_estimate_replacement` | Provisional reasoned-estimate ranges | Treat the water, electricity, ice and packaging ranges only as QA screens; replace them with reviewed source evidence or foreground records before activation. | Foreground protocol records and reviewer disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | Product identity | Fail when the output is not edible fish liver and/or roe in fresh or chilled state, or when excluded preservation methods or product forms are present. | `unsd-cpc-3-0-21225` |
| `validate_reference_flow` | Reference flow | Fail unless the reference output is exactly 1 kg net product using the specified product-flow, Mass-property and unit-group UUIDs and all required qualifiers are declared. | `unsd-cpc-3-0-21225` |
| `validate_boundary_processes` | Process coverage | Fail when receipt/inspection, applicable separation, preparation, chilling/cold storage, packing, wastewater/residual handling or required upstream dataset linkage is missing without a documented scope reason. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_cold_chain_records` | Cold chain | Fail when storage duration, temperature-control method, energy or ice route, or applicable refrigerant records are absent for foreground-controlled chilling and storage. | `codex-cxc-52-2003` |
| `validate_mass_balance` | Material flows | Fail when product, co-product, residual, waste and stock-change records cannot be reconciled to incoming material on a consistent wet-mass basis or the unexplained difference is not investigated and disclosed. | `eu-pef-2021-2279` |
| `validate_allocation` | Multifunctionality | Fail when a multifunctional separation or shared operation lacks avoided-allocation analysis, complete output inventory, selected allocation rationale, factors and sensitivity where material. | `eu-pef-2021-2279` |
| `validate_data_quality` | Dataset production | Fail when temporal, geographic, technological, completeness, calibration or source-traceability evidence required by section 8 is missing or material gaps are undisclosed. | `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | Provisional ranges | Flag each retained `reasoned_estimate` for reviewer replacement; it shall not be represented as an industry benchmark or source-backed allowed range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package that may be published after review as a secondary_dataset and/or background_dataset |
| downstream_use | Construction of product flows, unit processes, aggregated processes and lifecyclemodel projections for fresh or chilled fish liver/roe supply |
| allowed_use | Studies whose product identity, starting condition, production route, geography, technology, time period, allocation and preservation state match the declared dataset |
| excluded_use | Frozen, salted, smoked, cooked, canned, fermented, prepared-caviar, oil, whole-fish, fish-meat, retail, cooking or consumption modelling without an explicit scope extension |
| required_metadata | PCR id and version; species/origin; liver/roe form; incoming condition; separation location; facility and geography; technology; reporting period; net-mass basis; cold-storage duration; temperature-control route; packaging; upstream datasets; allocation; cut-offs; data sources |
| required_quality_disclosure | Protocol coverage; measured versus calculated values; unresolved UUIDs; retained reasoned estimates; mass-balance closure; data gaps; allocation sensitivity; cold-chain records; representativeness and uncertainty limitations |
| update_trigger | Material change in species mix, origin, incoming form, separation point, process route, refrigeration system, storage duration, packaging, allocation, regulation, source evidence or foreground data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21225` | official_guidance | United Nations Statistics Division, CPC Version 3.0, subclass 21225, Fish livers and roes, fresh or chilled. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/21225 (retrieved 2026-08-11) | Product-category boundary, preservation state and classification context |
| `codex-cxc-52-2003` | standard | FAO/WHO Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, 2019 edition. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-11) | Process decomposition, receiving and processing hygiene, chilling, cold storage, time/temperature control and lot-quality records |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-11) | Life-cycle boundary linkage, multifunctionality hierarchy, company-specific data, data quality, cut-off and reporting rules |
