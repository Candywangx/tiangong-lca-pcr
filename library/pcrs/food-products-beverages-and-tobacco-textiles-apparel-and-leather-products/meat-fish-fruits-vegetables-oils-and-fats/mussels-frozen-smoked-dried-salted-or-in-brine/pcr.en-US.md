---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mussels-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mussels, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers food-grade mussels, in shell or removed from shell, placed on the market after exactly one declared primary preservation route: frozen, smoked, dried, salted, or packed in brine. A smoked product may be cooked before or during smoking. Food-grade mussel flours, meals, and pellets are covered only when their preservation route and saleable mass basis remain traceable to this scope.

Live, fresh, or chilled mussels, otherwise prepared or preserved mussel products, inedible meals or pellets, dead mussels not fit for human consumption, and products outside the declared five preservation routes are excluded. Aquaculture or wild harvest is represented by upstream datasets and is not recreated inside the foreground processing boundary.

The five preservation routes are mutually exclusive alternatives for a concrete foreground data package. Do not stack freezing, smoking, drying, salting, and brining unless the actual marketed product intentionally uses more than one treatment; such a combined treatment is outside this PCR until separately reviewed. Route-specific water, energy, salt or brine, smoking medium, storage, yield, and waste records must never be averaged across unlike routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mussels-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21263, exact |
| covered_products | Food-grade mussels, whether in shell or not, frozen, smoked, dried, salted, or in brine; smoked mussels whether or not cooked before or during smoking; food-grade mussel flours, meals, and pellets when traceable to a covered route |
| excluded_products | Live, fresh, or chilled mussels; otherwise prepared or preserved mussels; inedible mussel flours, meals, or pellets; dead or unfit mussels; combined preservation routes not separately reviewed |
| representative_product | Qualified saleable mussel product from one declared preservation route |
| production_route | Receipt and preparation; exactly one of freezing, smoking, drying, salting, or brining; packing and release; controlled storage when required |
| market_state | Finished food product at the processing-facility gate, with preservation route, shell state, and mass basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A qualified saleable mussel food product produced through one declared covered preservation route |
| How much | 1 kg net mussel product on the applicable route-specific measurement basis |
| How well | Meets the declared product specification and applicable food-safety release criteria, with route, shell state, edible-portion basis, and relevant composition or drainage qualifiers recorded |
| How long or cycle | One production batch at processing-facility gate; storage duration is reported separately when controlled storage occurs |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Mussels, frozen, smoked, dried, salted or in brine `b40a9b04-158a-4482-8c52-022d30f1a99a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | preservation_route; species_or_species_mix; shell_state; edible_portion_basis; packaging_inclusion; moisture_content_if_dried; salt_content_or_brine_strength_if_salted_or_in_brine; glaze_presence_and_net_mass_excluding_glaze_if_frozen; drained_weight_basis_if_packed_in_brine; smoking_and_cooking_state_if_smoked |

When constructing a foreground data package, every applicable required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent field. The Tiangong flow is the exact generic CPC 21263 product flow; the qualifiers make a concrete product instance unambiguous.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg qualified saleable product, excluding packaging. Include shell mass only for a product declared and sold in shell; otherwise use edible mussel meat mass. |
| `frozen_net_mass` | frozen route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude ice glaze and packaging from the 1 kg reference mass; record glaze water and packaging separately. |
| `brine_drained_mass` | product packed in brine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use drained mussel product mass after the declared, reproducible drainage procedure; record packing brine separately and disclose the procedure and brine strength. |
| `route_composition_basis` | dried, salted, brined, or smoked route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure product at release and report moisture for dried product, salt content or brine strength for salted or brined product, and smoking and cooking state for smoked product. Do not compare routes unless shell state and mass/composition basis are harmonized. |
| `packaging_separation` | all routes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Packaging is inventoried inside production but is never counted in the 1 kg product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mussels received at the processing facility with species or mix, origin, live/raw/fresh/chilled/frozen condition, shell state, and received mass declared |
| starting_condition_role | Upstream product input to foreground preparation and preservation |
| product_classification_scope | The output is limited to the generic food-grade mussel products covered by CPC 3.0 21263 and one declared preservation route |
| recursive_input_rule | If a covered preserved mussel product is used as an input, record it as an upstream product flow with a compatible dataset and do not reopen its preservation inventory inside the receiving process |
| upstream_dataset_requirement | Require traceable upstream datasets for mussel production or harvest, received precursor, energy carriers, preservation materials, packaging, water supply, transport to the facility, and waste treatment when those systems cross the study boundary |
| disclosure | Declare geography, technology, reporting period, species, origin, shell state, preservation route, yield basis, mass and composition basis, packaging, storage conditions, cut-offs, proxies, allocation, and any reasoned estimates |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_route` | foreground processing | Include receipt/preparation, the one selected preservation route, packing/release, and actual controlled storage through the declared facility gate. | codex-cxc-52-2003; eu-pef-2021 |
| `sb_route_exclusivity` | preservation alternatives | Model freezing, smoking, drying, salting, and brining as mutually exclusive alternatives unless an intentionally combined product has been separately reviewed; never average route inventories. | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `sb_upstream_completeness` | upstream inputs | Connect all material product and service inputs to representative upstream datasets and disclose exclusions or proxies; do not duplicate an upstream preserved-mussel process. | eu-pef-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | Raw mussel receipt and preparation | required | Always | Foreground receipt, washing, grading, de-shelling or trimming as applicable | kg prepared mussels |
| `route_preservation` | Route-specific preservation | required | Select exactly one of frozen, smoked, dried, salted, or brined | Foreground preservation | kg preserved mussels |
| `packing_and_release` | Packing and release | required | Always | Foreground packing, quality release, and reference product output | 1 kg saleable product |
| `controlled_storage` | Controlled storage | conditional | Include when frozen, chilled, humidity-controlled, or other active holding occurs before facility gate | Foreground holding | kg packed product and storage time |

Reasoned-estimate ranges below are deliberately broad candidate-stage screening aids, not publication defaults or product specifications. They apply only when direct route- and site-specific records are temporarily unavailable. Replace them when the representative route and facility are selected, supplier/site records become available, or at least three representative production batches have been measured. An out-of-range record triggers review and disclosure, not automatic replacement by the estimate.

### Process: Raw mussel receipt and preparation (`raw_material_preparation`)

#### Inputs

##### Product flows

###### Received mussels (`received_mussels`)

Record the measured mass and declared condition of mussels entering preparation, including shell state and origin.

- Selected flow: Received food-grade mussels
- Flow property / unit: Mass / kg
- Amount rule: measured received mass normalized to prepared output and final reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Range: Provisional received-mussel screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg final reference product
  - Basis: route-, shell-, and yield-dependent received mass per 1 kg final product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation utilities (`preparation_utilities`)

Record water and energy separately by actual flow and unit for washing, conditioning, grading, de-shelling, and cleaning.

- Selected flow: Process water and preparation energy carriers, each recorded separately
- Flow property / unit: Mass / kg for water; Energy / kWh or carrier-specific unit for energy
- Amount rule: metered or invoice-derived use allocated to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared mussels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: codex-cxc-52-2003
- Range: Provisional utility screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water or kWh energy per kg prepared mussels, interpreted separately by flow
  - Basis: broad candidate-stage utility screen; never sum unlike units
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared mussels (`prepared_mussels`)

Record prepared mussels transferred to the selected preservation route, with shell and edible-portion basis unchanged or explicitly converted.

- Selected flow: Prepared mussels
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`

##### Waste flows

###### Preparation rejects and effluent (`preparation_losses`)

Record shells, unsuitable mussels, solids, and wastewater as separate waste flows even when reported under this shared role.

- Selected flow: Preparation wastes, separated by destination
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated waste by type and treatment destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared mussels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_batch`
- Range: Provisional preparation-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg prepared mussels
  - Basis: combined wet waste before separation by destination
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Route-specific preservation (`route_preservation`)

#### Inputs

##### Product flows

###### Prepared mussels transferred to preservation (`preservation_feed`)

Record only the feed to the selected route and retain its preparation batch linkage.

- Selected flow: Prepared mussels
- Flow property / unit: Mass / kg
- Amount rule: measured route feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`

###### Route preservation inputs (`preservation_inputs`)

Record each actual input separately: refrigeration or freezing energy for frozen product; smoking fuel or medium and energy for smoked product; heat and airflow energy for dried product; salt for salted product; or salt, water, and prepared brine for brined product.

- Selected flow: Route-specific energy carriers and preservation materials, each recorded separately
- Flow property / unit: Native flow property and unit, with energy additionally reportable in kWh
- Amount rule: metered, purchased, or batch-formulation amount for the one selected route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved mussels
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Sources: codex-cxc-52-2003
- Range: Provisional route-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg material or kWh energy per kg preserved mussels, interpreted separately by flow
  - Basis: broad route-specific candidate screen; never sum unlike units or apply to an unselected route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Preserved mussels (`preserved_mussels`)

Record preserved output mass with the selected route and its applicable moisture, salt/brine, glaze, shell, drainage, and smoking/cooking qualifiers.

- Selected flow: Route-qualified preserved mussels
- Flow property / unit: Mass / kg
- Amount rule: measured preserved output at route completion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Range: Provisional route-yield screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2
  - Unit: kg/kg prepared mussels
  - Basis: route-dependent output-to-feed mass ratio before final packing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Preservation wastes (`preservation_wastes`)

Record spent brine, wastewater, condensate, smoking residues, rejects, and off-specification product separately by actual route and destination.

- Selected flow: Route-specific preservation waste, separated by type and destination
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated route waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved mussels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_batch`
- Sources: codex-cxc-52-2003
- Range: Provisional preservation-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg preserved mussels
  - Basis: wet route waste before separation by waste type
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct route emissions (`direct_route_emissions`)

Record measured or calculated direct smoke, combustion, particulate, or refrigerant emissions only when they cross the environment boundary at the facility; do not duplicate treatment emissions already represented upstream.

- Selected flow: Route-specific direct elementary emissions, each recorded separately
- Flow property / unit: Mass / kg
- Amount rule: measured emission or calculation from collected fuel or refrigerant records using a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved mussels
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_batch`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg preserved mussels per individual elementary flow
  - Basis: broad candidate-stage screen for onsite direct emissions
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packing and release (`packing_and_release`)

#### Inputs

##### Product flows

###### Preserved mussels transferred to packing (`packing_feed`)

Record the measured preserved product transferred to packing under the same route and mass qualifiers.

- Selected flow: Route-qualified preserved mussels
- Flow property / unit: Mass / kg
- Amount rule: measured packing feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_batch`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and tertiary packaging separately by material and measured purchased or issued mass; exclude all packaging from reference product mass.

- Selected flow: Packaging materials, each recorded separately
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issued minus returned usable stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_batch`
- Sources: eu-pef-2021
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg final reference product
  - Basis: all packaging material placed on the market per 1 kg product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Qualified saleable reference product (`reference_product`)

This is the quantitative reference output after release checks and route-specific mass adjustment.

- Selected flow: Mussels, frozen, smoked, dried, salted or in brine `b40a9b04-158a-4482-8c52-022d30f1a99a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net qualified saleable product on the declared measurement basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: eu-pef-2021

##### Waste flows

###### Packing rejects and packaging waste (`packing_waste`)

Record off-specification product and unused or damaged packaging separately by treatment destination.

- Selected flow: Packing waste, separated by material and destination
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_batch`
- Range: Provisional packing-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg final reference product
  - Basis: combined product and packaging waste before separation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Controlled storage (`controlled_storage`)

#### Inputs

##### Product flows

###### Packed product entering storage (`storage_feed`)

Record packed product entering active storage and preserve its route and batch linkage.

- Selected flow: Packed route-qualified mussel product
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering controlled storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage lot
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

###### Storage energy (`storage_energy`)

Record metered refrigeration, freezing, ventilation, humidity control, or other active storage energy for the actual duration; omit this process when no active storage occurs.

- Selected flow: Storage energy carriers, each recorded separately
- Flow property / unit: Energy / kWh or carrier-specific unit
- Amount rule: metered or invoice-derived energy allocated by stored mass and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: codex-cxc-52-2003
- Range: Provisional storage-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg product
  - Basis: active storage through the facility gate for the declared duration
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Stored saleable product (`stored_product`)

Record saleable product leaving controlled storage; losses and changes in glaze, moisture, or drained mass must be reconciled before normalization to the reference flow.

- Selected flow: Mussels, frozen, smoked, dried, salted or in brine `b40a9b04-158a-4482-8c52-022d30f1a99a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net saleable mass leaving storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per storage lot
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_records`

##### Elementary flows

###### Refrigerant loss during storage (`storage_refrigerant_loss`)

Record refrigerant loss to air only for refrigeration equipment inside the boundary, calculated from charge and service records with a disclosed substance-specific method.

- Selected flow: Refrigerant emission to air, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: calculated loss from equipment charge and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Range: Provisional refrigerant-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg stored product
  - Basis: broad candidate-stage screen for onsite refrigerant loss
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Avoid allocation by subdividing separately metered operations and directly assigning route-specific inputs, outputs, wastes, and emissions wherever feasible. | eu-pef-2021 |
| `allocation_residuals` | shells, rejects, recovered materials, or other co-products | First distinguish waste from a co-product using the applicable study rules. Assign treatment burdens to waste; for a co-product, use a documented physical causal relationship when defensible, otherwise use economic allocation and disclose prices, period, geography, and sensitivity. | eu-pef-2021 |
| `allocation_no_cross_route` | shared equipment or utilities | Allocate shared services only among products actually using them during the reporting period; never distribute burdens from an unselected preservation route to the selected route. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_batch` | `raw_material_preparation` | received mass, utilities, prepared output, rejects and effluent | batch ticket, scale record, meter, invoice, waste manifest | batch_id; species; origin; received_condition; shell_state; input_mass; water; energy_by_carrier; prepared_mass; waste_by_type | calibrated scales and meters, reconciled to batch records | kg; kWh; carrier-specific unit | each batch with monthly reconciliation | representative reporting year or disclosed campaign | each processing facility | sum by flow and divide by conforming prepared or final output as specified | calibration records, invoices, batch traceability, waste receipts |
| `cp_preservation_batch` | `route_preservation` | route feed, route inputs, preserved output, wastes and direct emissions | batch recipe, meter, scale, process log, laboratory result | batch_id; preservation_route; feed_mass; energy_by_carrier; water; salt; brine; smoking_medium; output_mass; moisture; salt_content; glaze_mass; drained_mass; waste; direct_emission_inputs | route-specific metering and scales with laboratory or specification checks | kg; kWh; carrier-specific unit; percent where applicable | each batch | representative reporting year with seasonal coverage | each route at each facility | aggregate only identical declared routes and mass bases; normalize to preserved and final output | calibration, recipe, meter, lab, release, and traceability records |
| `cp_packing_batch` | `packing_and_release` | preserved feed, packaging, reference product, packing waste | packing order, bill of materials, scale, release record | batch_id; route; feed_mass; packaging_by_material; net_product_mass; shell_state; glaze_or_drained_adjustment; rejects; release_status | reconcile issued packaging and measured net product to released units | kg | each packing batch | representative reporting year | each packing line and facility | sum conforming outputs and normalize all inputs and wastes to 1 kg reference product | scale calibration, packaging specifications, release and reconciliation records |
| `cp_storage_records` | `controlled_storage` | stored mass, duration, energy, refrigerant loss | stock ledger, temperature log, meter, invoice, refrigerant service log | lot_id; route; mass_in; mass_out; time_in; time_out; temperature_or_humidity_setpoint; energy_by_carrier; refrigerant_type; charge; additions; recoveries | reconcile stock-time with metered energy and equipment service records | kg; hour or day; kWh; refrigerant-specific kg | continuous or each lot with monthly reconciliation | actual storage period within representative reporting year | each controlled store and refrigeration system | allocate measured energy by a disclosed mass-time or causal driver; calculate net refrigerant loss by substance | meter records, continuous logs, inventory reconciliation, service certificates |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground flows | normalized flow = batch flow divided by qualified saleable product mass on the applicable route-specific reference basis | batch flow; qualified net product mass excluding packaging, glaze, or packing brine as applicable | flow per 1 kg reference product | eu-pef-2021 |
| `calc_route_yield` | preparation and preservation | yield = qualified output mass divided by input mussel mass, retaining route, shell state, moisture, salt/brine, glaze, and drainage basis | input mass; output mass; qualifiers | disclosed process yield | codex-cxc-52-2003 |
| `calc_mass_reconciliation` | each process and batch | reconcile mass inputs, product outputs, wastes, measured water loss or gain, stock change, and unresolved difference; disclose the residual and investigation threshold | collected masses and composition adjustments | batch mass balance and residual | codex-cxc-52-2003 |
| `calc_storage_energy` | controlled storage | allocated storage energy = metered store energy multiplied by the product allocation driver divided by total driver; prefer a causal mass-time or equipment-zone driver | meter energy; product mass; residence time; zone or equipment data | storage energy per kg product | eu-pef-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and route | Retain species or mix, origin, route, shell state, edible-portion basis, packaging inclusion, and all applicable route-specific qualifiers. | batch traceability and release specification |
| `dq_measurement` | mass, energy, water, materials, wastes, and emissions | Use calibrated or verified measurement systems, preserve native units, document conversions, and keep route-specific records separate. | calibration, meter, invoice, scale, laboratory, and service records |
| `dq_temporal` | foreground dataset | Cover a representative reporting year where available or disclose campaign dates, seasonality, shutdowns, and deviations. | dated batch and operational records |
| `dq_completeness` | foreground and upstream links | Reconcile product and waste flows, include material utilities and packaging, link upstream and treatment datasets, and disclose exclusions, proxies, and unresolved mass-balance residuals. | mass balance, data-gap register, dataset links, and reviewer record |
| `dq_reasoned_estimate` | all provisional ranges | Use a reasoned estimate only while direct data are unavailable; disclose its temporary status and replace it when route/site records are obtained or three representative batches are measured. | estimate register and replacement review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Require product UUID `b40a9b04-158a-4482-8c52-022d30f1a99a`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg qualified product. | unsd-cpc-30-21263 |
| `validation_qualifiers` | product metadata | Fail completeness when preservation route, shell state, edible-portion basis, packaging inclusion, or any applicable moisture, salt/brine, glaze, drainage, smoking, or cooking qualifier is missing. | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `validation_route_exclusivity` | process inventory | Require exactly one covered preservation route and reject cross-route averaging; flag an intentional combined route for separate methodology review. | unsd-cpc-30-21263; codex-cxc-52-2003 |
| `validation_mass_basis` | reference product | Require packaging to be excluded; require glaze exclusion for frozen product, drained product mass and disclosed drainage for brined product, and harmonized shell and composition basis before comparisons. | codex-cxc-52-2003 |
| `validation_inventory` | foreground processes | Require the three core processes, require controlled storage when its condition applies, reconcile measured inputs, outputs, wastes, and stock changes, and disclose residuals and upstream data gaps. | codex-cxc-52-2003; eu-pef-2021 |
| `validation_estimates` | reasoned estimates | Require each reasoned estimate to remain labelled provisional with its applicability and replacement trigger; it must not silently override foreground data or become a publication-critical allowed range. | eu-pef-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared mussel preservation route and facility-gate output |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route-specific process or lifecycle modelling when geography, technology, time, shell state, mass basis, packaging, storage, allocation, and data quality are compatible |
| excluded_use | Generic averaging across preservation routes; comparison across unlike shell, edible-portion, moisture, salt/brine, glaze, drainage, or packaging bases; use of candidate reasoned estimates as reviewed default factors |
| required_metadata | PCR id; product UUID; CPC reference; species or mix; origin; facility geography; technology; reporting period; preservation route; shell state; edible-portion basis; packaging; applicable moisture, salt/brine, glaze, drainage, smoking and cooking qualifiers; storage; allocation; cut-offs; upstream datasets |
| required_quality_disclosure | Primary-data share; measurement and calibration evidence; temporal and route representativeness; mass-balance residuals; exclusions; proxies; allocation sensitivity; reasoned estimates and replacement status |
| update_trigger | New reviewed route-specific evidence; changed product specification, technology, regulation, source, UUID, or system boundary; representative foreground records replacing any reasoned estimate; material mass-balance or validation failure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-30-21263` | official_guidance | United Nations Statistics Division. CPC, Version 3.0, code 21263. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2100/21263 (retrieved 2026-08-11) | Exact category scope, included and excluded products, and preservation-route identity |
| `codex-cxc-52-2003` | standard | FAO and WHO. 2020. Code of Practice for Fish and Fishery Products, CXC 52-2003. https://doi.org/10.4060/cb0658en (retrieved 2026-08-11) | Bivalve receiving and handling, route-specific freezing, smoking, drying, salting and brining process controls, packing, storage, hygiene, traceability, and quality records |
| `eu-pef-2021` | official_guidance | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Reference-flow definition, system-boundary completeness, primary data, allocation hierarchy, packaging, data quality, and disclosure |
