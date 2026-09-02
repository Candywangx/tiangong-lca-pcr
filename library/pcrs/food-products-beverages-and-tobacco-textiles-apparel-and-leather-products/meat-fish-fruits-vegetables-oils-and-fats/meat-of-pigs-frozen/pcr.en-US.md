---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of pigs, frozen

## 1. Scope and Applicability

This PCR applies to edible meat of domestic pigs that leaves the reporting facility in a frozen state, including carcasses, half-carcasses, bone-in cuts, and boneless cuts. The foreground data package covers receipt of unfrozen pig meat, any on-site cutting or trimming needed for the declared product, packaging, freezing, frozen holding, and dispatch at the facility gate.

Pig breeding, feed production, animal husbandry, live-animal transport, slaughter, and dressing are upstream of the default foreground starting condition. They must be represented by linked upstream datasets appropriate to the incoming meat and must not be silently omitted. When one reporting organization operates those stages, their inventories remain separately identifiable and are linked to this frozen-meat foreground package. Downstream distribution beyond the dispatch gate, retail, thawing, cooking, consumption, and end-of-life are outside this PCR unless the study explicitly extends the boundary.

The PCR does not cover fresh or chilled pig meat sold without freezing, edible offal reported as a separate product, rendered fats, hides, prepared or preserved pork products, cooked pork, or mixed-species meat products. A producer shall declare the cut or carcass form, bone status, net product mass, packaging state, freezing technology, target dispatch temperature or temperature specification, storage duration, geography, and production period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-frozen |
| classification_refs | CPC 3.0: 21133 — Meat of pigs, frozen |
| covered_products | Edible frozen pig carcasses, half-carcasses, bone-in pork cuts, and boneless pork cuts whose reference output is net frozen pig meat |
| excluded_products | Fresh or chilled pig meat; separately marketed edible offal; rendered fats; hides; prepared, preserved, cooked, or mixed-species meat products |
| representative_product | Net frozen pork cuts at the freezing facility dispatch gate |
| production_route | Receipt of unfrozen pig meat; preparation and trimming as applicable; packaging; freezing; frozen holding; dispatch |
| market_state | Frozen edible meat, packaged or unpackaged as declared, at the facility dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Frozen edible pig meat supplied at the reporting facility dispatch gate |
| How much | 1,000 kg net frozen pig meat, excluding transport packaging unless packaging is explicitly included in the declared product mass |
| How well | Conforming to the declared cut or carcass form, bone status, packaging state, freezing method, and dispatch temperature specification |
| How long or cycle | One production lot through receipt, preparation, freezing, and the declared frozen-storage period until dispatch |
| reference_flow_link | `frozen_pork_reference_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Meat of pigs, frozen `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pig species; carcass or cut form; bone-in or boneless status; edible-product status; net-mass convention; packaging state; freezing technology; target dispatch temperature or specification; frozen-storage duration; facility geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference frozen pork output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg net frozen pork. Exclude packaging from product mass unless the declared commercial specification includes it, in which case disclose the packaging mass separately. |
| `incoming_meat_mass` | Incoming unfrozen pig meat and intermediate meat | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated scale records on a consistent net-mass and temperature-state basis; record tare, bone status, and whether surface ice or glaze is included. |
| `energy_conversion` | Electricity and fuels | Energy or carrier-specific property | kWh for electricity; declared unit for fuel | Preserve measured billing or meter units and conversion factors. Do not substitute primary energy for delivered electricity without an explicit conversion and source. |
| `temperature_time` | Freezing and frozen storage | Temperature and elapsed time | °C and h or d | Record product or validated proxy temperature, equipment setpoint, freezing start and end times, and storage duration; declare the measurement location and sampling frequency. |
| `refrigerant_mass` | Refrigerant additions, recovery, and calculated releases | Mass | kg | Record each refrigerant by chemical or blend designation. Never combine different refrigerants into one mass row before calculating releases. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Unfrozen edible pig meat received at the freezing facility gate after upstream slaughter and dressing, with actual temperature, carcass or cut form, bone status, net mass, and upstream dataset reference declared |
| starting_condition_role | Purchased or internally transferred upstream product input to the frozen-meat foreground package |
| product_classification_scope | Frozen edible meat of pigs corresponding to CPC 3.0 code 21133; classification is mapping context and does not replace the semantic product boundary |
| recursive_input_rule | If frozen pig meat in the same category is used as an input, record it as a separately quantified technosphere input with its own upstream dataset and declared purpose; do not recursively reapply this PCR to hide the input |
| upstream_dataset_requirement | Link representative upstream datasets for pig production, live-animal transport, slaughter, dressing, and any off-site chilled transport embodied in the incoming unfrozen meat |
| disclosure | Disclose facility gates, incoming meat state, included preparation operations, freezing technology, packaging sequence, storage duration, cut-offs, allocation method, and any integrated upstream stages represented as separate linked inventories |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | frozen_pork_foreground | Include receipt and temperature-controlled handling, on-site cutting and trimming when performed, packaging, freezing, frozen storage until dispatch, cleaning attributable to these operations, electricity, fuels, water, refrigerant management, packaging, wastes, wastewater, and direct releases. | fao-meat-industry-2004; fao-leap-pig-2018 |
| `sb_upstream_linkage` | incoming_unfrozen_pig_meat | Represent pig production, live-animal transport, slaughter, dressing, and off-site chilled transport through separately identifiable upstream datasets matching the declared incoming meat state. | fao-leap-pig-2018 |
| `sb_downstream_exclusion` | post_dispatch_stages | Exclude transport beyond the dispatch gate, distribution, retail, thawing, cooking, consumption, and end-of-life unless the study explicitly extends the system and reports those stages separately. | fao-leap-pig-2018 |
| `sb_cutoff_disclosure` | completeness_and_cutoffs | Draw and retain a process and material-flow map, disclose every cut-off, and justify exclusions; do not exclude a flow merely because its Tiangong UUID is unresolved. | fao-leap-pig-2018 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `meat_receipt_preparation` | Unfrozen meat receipt and preparation | required | Always required; cutting, deboning, and trimming activities are included only when performed at the reporting facility | Foreground receipt, temperature-controlled handling, preparation, and material balance | kg prepared pig meat transferred to freezing |
| `freezing_packaging` | Packaging and freezing | required | Always required; record the actual order of packaging and freezing | Foreground conversion to frozen pork | 1,000 kg net frozen pork leaving the freezing operation |
| `frozen_storage_dispatch` | Frozen storage and dispatch | required | Always required; storage duration may be zero only when direct dispatch is documented | Foreground frozen holding and facility-gate dispatch | 1,000 kg net frozen pork dispatched |

### Process: Unfrozen meat receipt and preparation (`meat_receipt_preparation`)

#### Inputs

##### Product flows

###### Incoming unfrozen pig meat (`incoming_unfrozen_pig_meat`)

Unfrozen edible pig meat crosses the foreground gate from the declared upstream slaughter and dressing system. Its state and upstream dataset determine whether upstream burdens are complete.

- Selected flow: Unresolved — unfrozen pig carcass or cut input; do not use the frozen reference-product UUID
- Flow property / unit: Mass / kg
- Amount rule: measured net mass received and accepted for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_received_meat`
- Range: Provisional incoming-meat mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2500
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and sanitation water (`preparation_water`)

Record metered or otherwise reconciled water used for product-contact preparation, equipment cleaning, and sanitation attributable to this process.

- Selected flow: Unresolved — water supply product flow
- Flow property / unit: Volume / m3
- Amount rule: measured attributable water withdrawal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater`
- Range: Provisional preparation-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared pig meat transferred to freezing (`prepared_pig_meat`)

Record the net mass of prepared pig meat transferred to the freezing operation, with the cut and bone status aligned to the reference product.

- Selected flow: Unresolved — prepared unfrozen pig meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional prepared-meat mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marketed trimming co-products (`marketed_trimming_coproducts`)

Record separately marketed edible or rendering-bound trimming outputs by destination and product role. Do not combine them with waste.

- Selected flow: Unresolved — trimming co-product by declared destination
- Flow property / unit: Mass / kg
- Amount rule: measured net co-product mass by type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional co-product mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preparation solids rejected to treatment (`preparation_solid_waste`)

Record non-marketed tissue, contaminated material, and floor or screening solids sent to a declared treatment route.

- Selected flow: Unresolved — animal-tissue preparation waste
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-reconciled waste mass by treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional preparation-waste QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving the foreground process before any on-site or off-site treatment, avoiding double counting with water retained in product or collected solids.

- Selected flow: Unresolved — wastewater to declared treatment
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or calculated water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_wastewater`
- Range: Provisional wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packaging and freezing (`freezing_packaging`)

#### Inputs

##### Product flows

###### Prepared pig meat input (`prepared_pig_meat_input`)

Record the net prepared-meat mass entering packaging and freezing. It shall reconcile with the transfer output from `meat_receipt_preparation`.

- Selected flow: Unresolved — prepared unfrozen pig meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Range: Provisional freezing-input mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity (`freezing_electricity`)

Record dedicated electricity meters where available; otherwise allocate a reconciled facility meter to freezing using documented equipment runtime and power data.

- Selected flow: Unresolved — market electricity supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: measured or calculated electricity attributable to packaging and freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_energy_temperature`
- Range: Provisional freezing-electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 5000
  - Unit: kWh
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record each refrigerant addition separately by chemical or blend designation and retain service records for the refrigeration system used by the lot.

- Selected flow: Unresolved — refrigerant product by declared chemical or blend
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant added during the reporting period and attributed to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional refrigerant-make-up QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Product packaging materials (`product_packaging`)

Record primary, secondary, and tertiary packaging by material and net mass, separating reusable packaging from consumed packaging.

- Selected flow: Unresolved — packaging material by declared material
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging less documented returns and unused stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Range: Provisional packaging-mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen pork reference output (`frozen_pork_reference_output`)

This is the only inventory row that uses the verified Tiangong reference-product flow UUID. Record net frozen pork mass at the freezing-operation exit on the declared mass basis.

- Selected flow: Meat of pigs, frozen `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg net frozen pork
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging scrap (`packaging_scrap`)

Record packaging material that does not become product packaging, separated by material and treatment route.

- Selected flow: Unresolved — packaging waste by declared material
- Flow property / unit: Mass / kg
- Amount rule: measured discarded packaging plus stock reconciliation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Range: Provisional packaging-scrap QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released to air (`refrigerant_release_air`)

Calculate releases separately for each refrigerant from the documented charge and service balance; do not report all make-up as an emission when recovery or inventory change is documented.

- Selected flow: Unresolved — elementary emission to air for declared refrigerant
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance release calculated under `calc_refrigerant_release`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Range: Provisional refrigerant-release QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Frozen storage and dispatch (`frozen_storage_dispatch`)

#### Inputs

##### Product flows

###### Frozen pork entering storage (`frozen_pork_storage_input`)

Record the net mass transferred from freezing into frozen storage, including documented transfer losses but excluding packaging mass from the net product basis.

- Selected flow: Unresolved — internal frozen pork intermediate; do not duplicate the reference-product UUID as a purchased input
- Flow property / unit: Mass / kg
- Amount rule: measured net frozen pork transferred into storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch`
- Range: Provisional storage-input mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`storage_electricity`)

Record electricity attributable to the declared storage duration and dispatch handling. Use dedicated metering or a documented load, volume, and time allocation from reconciled facility meters.

- Selected flow: Unresolved — market electricity supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: measured or calculated storage and dispatch electricity for the declared lot and duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch`
- Range: Provisional frozen-storage electricity QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh
  - Basis: per 1,000 kg net frozen pork reference output for the declared storage duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen pork dispatched at facility gate (`frozen_pork_dispatched`)

Record the dispatched net mass and confirm it represents the same lot, product qualifiers, and temperature specification as the reference flow.

- Selected flow: Unresolved — dispatch transfer of the reference frozen pork product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dispatch mass normalized to 1,000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch`

##### Waste flows

###### Storage and dispatch product losses (`storage_product_loss`)

Record damaged, thawed, rejected, or otherwise undispatched meat by fate and keep it distinct from marketed co-products.

- Selected flow: Unresolved — frozen meat loss to declared treatment
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass or inventory reconciliation difference after investigating unexplained loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen pork reference output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_dispatch`
- Range: Provisional storage-loss QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net frozen pork reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_inputs | Avoid allocation by separately metering and subdividing receipt, preparation, freezing, packaging, storage, and waste-treatment operations wherever technically feasible. | fao-leap-pig-2018 |
| `allocation_frozen_pork_group` | covered_frozen_pork_presentations | Do not allocate among carcass, half-carcass, bone-in, or boneless frozen pork presentations that remain inside the declared covered-product group; aggregate their net mass unless the goal requires separately measured product packages. | fao-leap-pig-2018 |
| `allocation_coproduct_hierarchy` | marketed_non_reference_outputs | When subdivision is not feasible, apply a documented physical or biophysical relationship only for outputs with similar functions and markets; otherwise allocate shared burdens by contemporaneous net economic value and test sensitivity to the allocation choice. | fao-leap-pig-2018 |
| `allocation_waste_treatment` | waste_and_residual_outputs | Do not treat a disposal-bound output as a co-product. Retain attributable collection and treatment burdens in the foreground package; if an output has a documented market and subsequent use, reclassify it consistently and apply the co-product hierarchy. | fao-leap-pig-2018 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_meat` | `meat_receipt_preparation` | incoming unfrozen pig meat | weighbridge, platform-scale, receiving, and supplier records | lot_id; supplier; upstream_dataset_id; gross_mass; tare_mass; net_mass; temperature; carcass_or_cut_form; bone_status; acceptance_status | Calibrated scale reading reconciled to receiving documents | kg and °C | Each received lot | Complete representative production period, normally at least 12 consecutive months or all campaigns if seasonal | All facilities and suppliers represented by the dataset | Sum accepted net mass by compatible product qualifier; normalize with `calc_reference_normalization` | Scale calibration, tare method, receiving document, lot traceability, and upstream dataset match |
| `cp_water_wastewater` | `meat_receipt_preparation` | preparation water and wastewater | meters, invoices, submeter estimates, and discharge records | meter_start; meter_end; water_source; attributable_share; discharge_volume; retained_water; cleaning_event; treatment_route | Dedicated meter preferred; otherwise reconcile facility water balance and documented allocation driver | m3 | Meter interval and each material cleaning campaign | Same period as production output | All preparation and sanitation operations in scope | Sum attributable withdrawal and discharge; separate sources and treatment routes; normalize with `calc_reference_normalization` | Meter calibration, invoices, allocation basis, water-balance reconciliation, and treatment records |
| `cp_preparation_outputs` | `meat_receipt_preparation` | prepared meat, co-products, and solid waste | transfer scales, yield sheets, sales records, and waste manifests | lot_id; prepared_meat_mass; coproduct_type; coproduct_mass; coproduct_destination; waste_type; waste_mass; treatment_route | Calibrated mass records at each outgoing route | kg | Each lot or shift | Same period as received meat | All preparation lines in scope | Sum by output role and destination; reconcile with received mass under `calc_meat_mass_balance` | Scale calibration, signed transfer or sales record, waste manifest, and investigated reconciliation variance |
| `cp_freezing_energy_temperature` | `freezing_packaging` | freezing electricity and time-temperature profile | electricity meters, equipment logs, and temperature records | meter_start; meter_end; equipment_id; rated_power; runtime; lot_id; product_start_temperature; product_end_temperature; setpoint; freezing_start; freezing_end | Dedicated meter plus product-temperature logger preferred; calculated equipment load only when meter separation is unavailable | kWh, °C, and h | Meter interval and each lot | Same period as frozen output | All freezing equipment and auxiliary loads in scope | Sum dedicated electricity; otherwise allocate reconciled electricity by documented equipment runtime and load; normalize with `calc_reference_normalization` | Meter calibration, logger calibration, equipment record, facility-bill reconciliation, and allocation calculation |
| `cp_refrigerant_balance` | `freezing_packaging` | refrigerant make-up and release | refrigerant inventory and service records | refrigerant_id; system_id; opening_charge; additions; closing_charge; recovered_mass; returned_mass; service_date; operation_share | Refrigerant inventory and service-record mass balance by chemical or blend | kg | Each service event and reporting-period opening and close | Same period as freezing and storage output | All refrigeration circuits serving in-scope operations | Calculate release separately by refrigerant with `calc_refrigerant_release`; allocate shared systems using documented operation share | Service invoices, cylinder weights, technician records, charge inventory, and reconciliation review |
| `cp_packaging_materials` | `freezing_packaging` | product packaging and packaging scrap | purchase, stock, issue, reuse, and waste records | material_id; opening_stock; receipts; closing_stock; returned_reuse; packaged_product_assignment; scrap_mass; treatment_route | Stock reconciliation supported by purchase, issue, and waste records | kg | Each stock period and material change | Same period as frozen output | All primary, secondary, and tertiary packaging in scope | Calculate consumed packaging by material; separate reusable returns and scrap; normalize with `calc_reference_normalization` | Supplier invoices, stock counts, material specification, reuse log, and waste manifest |
| `cp_storage_dispatch` | `frozen_storage_dispatch` | stored and dispatched pork, storage electricity, temperature, duration, and losses | warehouse, dispatch, meter, and temperature records | lot_id; storage_entry_mass; dispatch_mass; entry_time; dispatch_time; storage_zone; setpoint; temperature_log; meter_start; meter_end; load_share; rejected_mass; loss_fate | Calibrated dispatch scales, continuous or representative temperature logger, and dedicated meter or reconciled load allocation | kg, kWh, °C, h, and d | Each lot; electricity meter interval; temperature at validated frequency | Same period as frozen output, including the full declared storage duration | All frozen rooms and dispatch handling in scope | Calculate storage duration per lot; allocate storage electricity by documented mass-time, pallet-space-time, or validated load share; reconcile output and losses; normalize with `calc_reference_normalization` | Scale, meter, and logger calibration; warehouse ledger; dispatch record; allocation calculation; loss investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory values | normalized_value = attributable_period_value / net_frozen_pork_dispatched × 1,000 kg | Attributable period value; net frozen pork dispatched on the declared mass basis | Inventory value per 1,000 kg net frozen pork |  |
| `calc_meat_mass_balance` | `meat_receipt_preparation` and `frozen_storage_dispatch` | Reconcile received or transferred meat mass with reference product, separately marketed co-products, wastes, and documented moisture or inventory change; investigate and disclose any residual | Incoming meat; prepared meat; frozen output; co-products; wastes; stock change; documented moisture change | Lot and reporting-period mass-balance reconciliation | fao-leap-pig-2018 |
| `calc_refrigerant_release` | Refrigeration circuits serving freezing and storage | release = opening_charge + additions - closing_charge - recovered_mass - returned_mass, bounded at zero only after investigating inconsistent records | Refrigerant-specific opening and closing charge; additions; recovery; returns; attributable operation share | kg release by refrigerant and normalized reference flow |  |
| `calc_packaging_consumption` | Packaging materials | consumed_packaging = opening_stock + receipts - closing_stock - reusable_returns; report scrap and product-associated packaging separately | Packaging stock, receipts, reusable returns, scrap, and product assignment by material | kg packaging consumed and kg scrap by material |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and incoming meat | Maintain lot linkage from incoming unfrozen meat through preparation, freezing, storage, and dispatch, including upstream dataset id and every required product qualifier. | Receiving records, production lot ledger, warehouse ledger, dispatch record, and upstream dataset reference |
| `dq_temporal_coverage` | Foreground activity data | Use one coherent representative period, normally at least 12 consecutive months unless seasonality or campaign production justifies another period; disclose deviations and stock changes. | Dated meter, production, stock, service, and dispatch records; period-coverage calculation |
| `dq_representativeness` | Facilities, technologies, geography, and suppliers | Document technological, geographical, and temporal representativeness, completeness, and accuracy; disclose proxy data and assess its effect on results. | Data-quality assessment following `fao-leap-pig-2018` and retained proxy-data justification |
| `dq_measurement_control` | Mass, electricity, water, refrigerant, and temperature | Retain current calibration or verification evidence and investigate missing intervals, negative balances, unexplained meter resets, and inconsistent units. | Calibration certificates, maintenance records, exception log, and reconciliation worksheet |
| `dq_reasoned_estimates` | All provisional ranges | Treat every `reasoned_estimate` range only as a broad QA screen. Do not use its midpoint or bounds as a final foreground value; replace with collected data or reviewed source-backed evidence before publication-critical use. | Review record showing replacement evidence or explicit continued QA-only treatment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_flow | Require product flow `e7b009bd-ea26-4617-9ccf-f14d12e2c0b6`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and all required product qualifiers. |  |
| `validation_process_coverage` | foreground_processes | Require all three process ids and an explicit declaration of actual cutting, trimming, packaging sequence, freezing technology, frozen-storage duration, and any integrated upstream stages. | fao-meat-industry-2004 |
| `validation_mass_balance` | meat_and_packaging_balances | Require reconciled incoming, intermediate, reference-product, co-product, waste, packaging, and stock-change masses; unexplained residuals are findings and must not be silently assigned to the reference product. | fao-leap-pig-2018 |
| `validation_energy_temperature` | freezing_and_storage | Require electricity records, freezing time-temperature records, storage duration, temperature monitoring, and a documented allocation method for any shared meter. |  |
| `validation_refrigerant` | refrigeration_system | Require refrigerant identity and a non-negative, record-reconciled mass balance by refrigerant; unresolved elementary-flow UUIDs remain explicit and the reference-product UUID must not be reused. |  |
| `validation_allocation` | multifunctional_outputs | Require subdivision evidence or the selected physical, biophysical, or economic allocation key, product grouping, price period where relevant, and sensitivity analysis for material allocation choices. | fao-leap-pig-2018 |
| `validation_estimate_status` | provisional_qa_ranges | Flag any final inventory amount populated from a `reasoned_estimate` QA guardrail as nonconforming unless reviewed evidence explicitly authorizes that use. |  |
| `validation_data_quality` | dataset_completeness | Require temporal, technological, geographical, completeness, and accuracy assessment; disclose cut-offs, proxies, missing records, and validation checks skipped. | fao-leap-pig-2018 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for frozen pig meat production at the freezing facility dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, source resolution, and quality disclosure |
| allowed_use | Attributional LCI and lifecycle-model construction for frozen pork matching the declared product qualifiers, technology, geography, period, upstream linkage, and facility gate |
| excluded_use | Unsupported comparative assertions; fresh or chilled meat; prepared or preserved pork; different species; studies that omit required upstream pig-meat datasets or substitute QA estimates for foreground values |
| required_metadata | PCR id and version state; product and reference-flow UUIDs; CPC mapping context; cut or carcass form; bone status; net-mass convention; packaging state; freezing technology; dispatch temperature specification; storage duration; facility geography; period; upstream dataset ids; cut-offs; allocation method; unresolved UUIDs |
| required_quality_disclosure | Record coverage; calibration status; meter and scale allocation; mass-balance residuals; proxy and estimate use; source versions; temporal, technological, and geographical representativeness; completeness; uncertainty and sensitivity results; checks skipped |
| update_trigger | Material change in incoming meat specification, supplier or upstream dataset, cut mix, freezing or refrigeration technology, packaging, storage duration, allocation, facility geography, regulation, or representative energy and material performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-pig-2018` | `official_guidance` | FAO. 2018. *Environmental performance of pig supply chains: Guidelines for assessment (Version 1).* Livestock Environmental Assessment and Performance Partnership. ISBN 978-92-5-130377-1. https://openknowledge.fao.org/3/i8686en/I8686EN.pdf (retrieved 2026-08-11) | Pig-product functional-unit and boundary linkage; material-flow accounting; allocation hierarchy and sensitivity; primary-data, data-gap, representativeness, completeness, and quality rules |
| `fao-meat-industry-2004` | `official_guidance` | FAO. 2004. *Good practices for the meat industry.* FAO Animal Production and Health Manual. ISBN 92-5-105146-1. https://www.fao.org/4/y5454e/y5454e00.htm (retrieved 2026-08-11) | Meat-process decomposition, carcass handling, establishment hygiene, traceability, and HACCP-oriented foreground record structure |
