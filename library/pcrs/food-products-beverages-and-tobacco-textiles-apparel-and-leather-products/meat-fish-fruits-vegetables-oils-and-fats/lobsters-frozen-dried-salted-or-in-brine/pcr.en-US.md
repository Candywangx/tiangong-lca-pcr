---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.lobsters-frozen-dried-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Lobsters, frozen, dried, salted or in brine

## 1. Scope and Applicability

This PCR covers foreground production of lobster preserved by one declared route: frozen, dried, salted, or held in brine. A sequential combination is included only when it is the actual declared production route; route-specific inputs and outputs shall not be averaged across products made by different routes. The foreground boundary begins with received live, raw, chilled, or otherwise unpreserved lobster at the processing gate and ends with packaged preserved lobster at the facility gate after on-site storage.

Fishing or aquaculture, production of purchased materials and utilities, distribution, retail, consumer preparation, and packaging end-of-life are outside the foreground boundary and require appropriate upstream or downstream datasets. Food-safety conformity is a prerequisite for data acceptance, not an environmental performance claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.lobsters-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21253, Lobsters, frozen, dried, salted or in brine |
| covered_products | Lobsters in the CPC 21253 semantic scope preserved by freezing, drying, dry salting, wet salting, or brining, including raw or cooked and shell-on, tail, or meat presentations when declared |
| excluded_products | Live, fresh, or chilled lobster; rock lobster and other sea crawfish; Norway lobster; crabs; shrimps and prawns; prepared meals; products whose lobster content cannot be separated from other food ingredients |
| representative_product | Packaged preserved lobster conforming to the declared species, presentation, and preservation route |
| production_route | Receipt and preparation, one declared preservation route (or an explicitly declared sequential combination), packaging, and on-site storage |
| market_state | Frozen, dried, salted, or in brine; raw or cooked; presentation and storage condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preserved lobster of the declared species, presentation, and preservation route, suitable for its declared market use |
| How much | 1 kg net mass of target lobster product |
| How well | Meets the applicable product specification and food-safety acceptance criteria; route, presentation, and composition are declared |
| How long or cycle | At the facility gate after the declared preservation and on-site storage period |
| reference_flow_link | The reference product output row `final_lobster_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Lobsters, frozen, dried, salted or in brine `e7ed95ac-7ca1-4d41-8a1b-9a26e6259795` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/common and scientific name; preservation route; raw or cooked state; shell-on, tail, or meat presentation; net-mass convention; moisture or water activity where relevant; salt concentration and whether dry-salted or brined where relevant; glaze and free-brine treatment; packaging format; storage temperature and duration; production geography and reference period |

Net target-product mass excludes packaging, external ice glaze, and free covering brine. If a regulated commercial net- or drained-mass convention differs, report both and retain the conversion record.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg net target-product mass; exclude packaging, glaze, and free brine from the denominator and document any drained-mass conversion. |
| `route_separation` | Route-dependent activity data | Native meter or mass property | kg, kWh, MJ, h, °C, or % as recorded | Preserve measured native units and route/lot identity; convert only with a documented factor and never combine frozen, dried, salted, and brined observations without a declared production-weighted calculation. |
| `mass_balance` | Received lobster, product, residues, wastewater, moisture loss, glaze, and brine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Close a wet-mass batch balance on a consistent boundary; separately identify retained product water, removed moisture, free brine, glaze, solid residues, and wastewater. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received live, raw, chilled, or otherwise unpreserved lobster at the processing-facility gate, with species, source, condition, temperature, mass, and upstream dataset declared |
| starting_condition_role | Upstream product input to foreground receipt and preparation |
| product_classification_scope | Lobster products within the CPC 21253 semantic boundary only |
| recursive_input_rule | If purchased input is already frozen, dried, salted, or in brine within this category, represent it as an upstream product dataset with its incoming preservation state and mass; do not recursively reproduce its preservation, and do not count that preservation again in the foreground route. |
| upstream_dataset_requirement | Require geographically and technologically representative fishing or aquaculture and purchased-material datasets; disclose gaps, proxies, allocation, and temporal mismatch. |
| disclosure | Declare lobster origin and species, received state, cooking state, preservation route, process yield, mass convention, storage conditions, packaging, co-products, wastes, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | All foreground datasets | Include receipt, preparation, the actually declared preservation steps, packaging, on-site storage, rejects and residues, wastewater or spent brine, direct refrigerant loss, and on-site utility use; exclude unperformed alternative-route operations. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream` | Purchased lobster, water, ice, salt, packaging, energy, and treatment services | Link each material input and exported treatment service to a representative upstream dataset and prevent double counting of already-preserved lobster inputs. | `eu-pef-2021-2279` |
| `boundary_food_safety` | Product acceptance and route records | Retain time, temperature, hygiene, salt/brine, and drying-control records required by the applicable Codex route guidance; rejected or reworked lots remain in the mass and energy inventory. | `codex-cxc-52-2003`; `codex-cxs-95-1981` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and preparation | `required` | Always included | Foreground receipt, washing, cooking when applicable, cutting or meat removal, and preparation | kg prepared lobster leaving the process |
| `preservation_route` | Declared preservation route | `required` | Include only cards belonging to the declared frozen, dried, salted, brined, or explicitly sequential route | Foreground preservation | kg preserved lobster leaving the route |
| `packing_storage` | Packaging and on-site storage | `required` | Always included; cold-storage and refrigerant cards apply only to frozen product | Foreground finishing and facility-gate output | 1 kg net target product |

### Process: Receiving and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received lobster (`received_lobster`)

Record the mass and condition of lobster entering the facility, linked to the applicable upstream fishing or aquaculture dataset.

- Selected flow: Unpreserved lobster, pending Tiangong UUID review
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received batch mass normalized to net final product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional yield-screening input
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 3.0
  - Unit: kg/kg net target product
  - Basis: received lobster per 1 kg net target product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water and ice (`preparation_water_ice`)

Record metered or purchased water and ice used for washing, chilling, thawing, cooking, or cooling; keep water and ice quantities distinguishable in raw records.

- Selected flow: Process water and ice, pending separate Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured water plus ice mass, with component values retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional combined water-and-ice screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared lobster
  - Basis: combined process water and ice per 1 kg prepared lobster output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared lobster intermediate (`prepared_lobster`)

Record the prepared lobster transferred to preservation, retaining species, presentation, cooked/raw state, and batch identity.

- Selected flow: Prepared lobster intermediate, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Solid rejects and residues (`preparation_residues`)

Record shells, viscera, damaged product, and other separately managed solids; distinguish marketed co-products from wastes.

- Selected flow: Lobster preparation residues, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination and regulatory status
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional residue-screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg prepared lobster
  - Basis: solids leaving preparation per 1 kg prepared lobster output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater sent to on-site or off-site treatment, excluding water retained in product and separately recorded spent brine.

- Selected flow: Wastewater, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional wastewater-screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared lobster
  - Basis: discharged preparation wastewater per 1 kg prepared lobster output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Declared preservation route (`preservation_route`)

#### Inputs

##### Product flows

###### Prepared lobster supplied to preservation (`preservation_lobster_input`)

Record the prepared intermediate entering the declared route; the route identifier shall follow the batch through all route-specific records.

- Selected flow: Prepared lobster intermediate, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Preservation electricity or heat (`preservation_energy`)

For frozen product record freezing electricity; for dried product record dryer electricity and thermal energy separately; include salting or brining energy only when actually consumed.

- Selected flow: Electricity and thermal energy carriers, pending separate Tiangong UUID review
- Flow property / unit: Energy / kWh and MJ in separate raw fields
- Amount rule: metered or allocated route-specific energy by carrier
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg preserved lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Range: Provisional preservation-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 100
  - Unit: MJ-eq/kg preserved lobster
  - Basis: combined disclosed electricity and thermal energy after documented conversion per 1 kg route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salt and brine water (`salt_brine_inputs`)

Include salt for dry-salted products and salt plus water for wet salting or brining; exclude this row for a solely frozen or unsalted dried route.

- Selected flow: Food-grade salt and water, pending separate Tiangong UUID review
- Flow property / unit: Mass / kg, recorded separately
- Amount rule: measured salt and brine-water inputs by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg salted or brined route output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_control_records`
- Range: Provisional salt-and-brine screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 12
  - Unit: kg combined input/kg salted or brined output
  - Basis: combined salt and brine water per 1 kg applicable route output, with components retained
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved lobster intermediate (`preserved_lobster`)

Record only the actual route output and its route-specific state; do not aggregate unlike route outputs into one foreground observation.

- Selected flow: Preserved lobster intermediate, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured route-output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

###### Preservation rejects and spent brine (`preservation_waste`)

Record rejected product and, for salting or brining, spent brine by treatment destination; keep the components separate in raw records.

- Selected flow: Preservation waste and spent brine, pending separate Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance quantity by waste type and destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg preserved lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional preservation-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: kg/kg preserved lobster
  - Basis: combined rejects and spent brine per 1 kg route output, with components retained
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Moisture released during drying (`drying_moisture`)

Include only for a drying route and calculate water removed from mass and moisture records; disclose whether condensate becomes wastewater rather than an air release.

- Selected flow: Water to air or condensate, pending route-specific Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: calculated water removed, reconciled with mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg dried lobster output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_control_records`
- Range: Provisional drying-moisture screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg dried lobster
  - Basis: water removed per 1 kg dried route output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packaging and on-site storage (`packing_storage`)

#### Inputs

##### Product flows

###### Preserved lobster supplied to packing (`packing_lobster_input`)

Record the route-qualified preserved lobster entering packaging.

- Selected flow: Preserved lobster intermediate, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`

###### Packaging materials (`packaging_materials`)

Record primary, secondary, and allocated tertiary packaging separately by material and recycled-content specification.

- Selected flow: Packaging materials, pending material-specific Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: measured issue or bill-of-material mass less documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`
- Range: Provisional packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 0.2
  - Unit: kg/kg net target product
  - Basis: total packaging issued per 1 kg net target product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`cold_storage_electricity`)

Include only for frozen product and record electricity for the declared on-site storage duration, using submetering or a documented physical allocation.

- Selected flow: Electricity, pending Tiangong UUID review
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated cold-store electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg frozen target product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Range: Provisional cold-storage electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 10
  - Unit: kWh/kg frozen target product
  - Basis: declared on-site frozen storage period per 1 kg product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final packaged preserved lobster (`final_lobster_output`)

This is the reference product output after excluding packaging, external glaze, and free covering brine from net target-product mass.

- Selected flow: Lobsters, frozen, dried, salted or in brine `e7ed95ac-7ca1-4d41-8a1b-9a26e6259795`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net target-product mass after batch normalization
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_mass_balance`

##### Waste flows

##### Elementary flows

###### Refrigerant loss from freezing and cold storage (`refrigerant_loss`)

Include only when refrigeration equipment serves the frozen route; identify refrigerant and calculate loss from charge and service records.

- Selected flow: Refrigerant emission by substance, pending Tiangong UUID review
- Flow property / unit: Mass / kg
- Amount rule: calculated annual or campaign refrigerant loss allocated to frozen throughput
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg frozen target product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_chain_records`
- Range: Provisional refrigerant-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg refrigerant/kg frozen target product
  - Basis: refrigeration-system loss allocated per 1 kg frozen product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Lots, routes, and independently metered operations | First separate lots and preservation routes and use direct mass and utility records; do not allocate burdens from an unperformed route or average unlike route inventories. | `eu-pef-2021-2279` |
| `allocation_shared_inputs` | Shared utilities, storage, and common preparation | Prefer a documented physical causal parameter such as equipment time, thermal load, or metered use. Use mass only when it reasonably represents the physical relation; if no physical relation is defensible, use documented economic allocation and report a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_residues` | Shells, meat fractions, and other secondary outputs | Treat discarded or treatment-bound material as waste with treatment included. If an output is intentionally produced and sold as a co-product, disclose its status, quantity, price or physical relation, allocation method, and sensitivity; do not credit an unverified market. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receiving_preparation`; `preservation_route`; `packing_storage` | Material inputs, transfers, outputs, residues, wastewater, packaging | Scales, invoices, issue records, drain meter or batch mass balance | batch_id, route_id, species, presentation, received_mass_kg, water_kg, ice_kg, prepared_mass_kg, salt_kg, brine_water_kg, preserved_mass_kg, packaging_by_material_kg, final_net_mass_kg, glaze_kg, free_brine_kg, residues_by_destination_kg, wastewater_kg, spent_brine_kg | Calibrated scales and meters; reconcile transfers by batch | kg | Each batch; utilities at shortest representative meter interval | Representative production year, with season and atypical lots identified | Each included facility and route | Sum by homogeneous route and lot, then normalize by qualifying final net mass; production-weight only after route-specific results are retained | Calibration, invoices, batch sheets, reconciliation, destination records, and missing-data log |
| `cp_utility_records` | `preservation_route`; `packing_storage` | Electricity and thermal energy | Submeters, fuel records, invoices, equipment runtime and rated load | meter_id, carrier, opening_reading, closing_reading, unit, route_id, equipment_id, runtime_h, allocation_driver, storage_duration | Meter by operation where possible; otherwise document physical allocation | native kWh, MJ, kg, or m3 | Meter interval or each campaign | Same representative period as production | Each energy system serving included operations | Subtract opening from closing, deduct excluded loads, allocate with disclosed physical driver, and preserve carrier-specific results | Meter calibration, invoice reconciliation, load map, and allocation worksheet |
| `cp_route_control_records` | `preservation_route` | Preservation controls and product acceptance | Batch control, laboratory, and food-safety records | route_id, time, product_temperature, room_temperature, salt_mass_fraction, brine_concentration, moisture, water_activity, cooking_state, nonconformance, rework | Record parameters required by the applicable route specification and sampling plan | native units including h, °C, %, and water activity | Each batch or validated continuous logger interval | Full included production period | Each route and line | Keep route-specific distributions and link rejected or reworked lots to the mass balance | Calibrated instruments, laboratory methods, logger completeness, corrective-action records |
| `cp_cold_chain_records` | `packing_storage` | Frozen storage and refrigerant | Temperature loggers, refrigerant inventory and service logs | equipment_id, refrigerant_identity, opening_charge_kg, additions_kg, recovered_kg, closing_charge_kg, frozen_throughput_kg, storage_duration, temperature_series | Continuous temperature logging and reconciled refrigerant balance | °C, h or day, kg | Continuous temperature; each service event and annual/campaign balance | Full frozen-product period | Each refrigeration system serving included product | Allocate calculated loss and energy only to served frozen throughput with disclosed driver | Logger calibration/completeness and signed service records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory quantities | normalized amount = qualifying route-specific quantity / final net target-product mass; packaging, glaze, and free brine are excluded from the denominator | Route-specific collected quantity; final_net_mass_kg | Amount per 1 kg reference flow |  |
| `calc_mass_balance` | Each batch and route | unexplained mass = total mass inputs - identified product, co-product, waste, wastewater, moisture, and other outputs; report the signed difference and investigate material imbalance | All mass fields from `cp_batch_mass_balance` and moisture from `cp_route_control_records` | Yield, residue fractions, and unexplained mass |  |
| `calc_route_weighting` | Multi-lot reporting | Calculate each declared route separately; if a portfolio result is required, production-weight route results by qualifying net product mass and publish the route shares and route-specific results alongside it | Route-specific normalized results; route final_net_mass_kg | Transparent route-specific and optional portfolio results |  |
| `calc_refrigerant_loss` | Frozen-route refrigeration | loss = opening charge + additions - recovered refrigerant - closing charge; allocate only a positive reconciled loss using the documented refrigeration-service driver | Refrigerant charge and service fields; served frozen throughput | kg refrigerant emission per kg frozen target product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and route | Species, CPC scope, preservation route, presentation, cooked/raw state, net-mass convention, origin, and lot linkage shall be complete. | Product specification, supplier record, lot traceability, and batch sheet; `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `dq_measurement` | Mass, utilities, controls, and refrigerant | Use calibrated or reconciled measurements; retain native units, conversion factors, allocation drivers, and treatment destinations. | Calibration certificates, invoices, meter records, laboratory methods, service logs; `eu-pef-2021-2279` |
| `dq_temporal` | Representative production | Cover a representative production year or justify a shorter campaign; disclose seasonality, downtime, exceptional losses, and storage duration. | Coverage report and production schedule; `eu-pef-2021-2279` |
| `dq_completeness` | Foreground inventory | Reconcile every included route from received lobster to qualifying product and identify unmeasured water, ice, energy, salt/brine, packaging, residues, wastewater, moisture, and refrigerant flows. | Mass/energy reconciliation and missing-data log |
| `dq_food_safety` | Route acceptance | Retain applicable hygiene and preservation-control evidence. For quick-frozen lobster, verify the applicable temperature requirement and document deviations and corrective action. | Route-control records; `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `dq_estimates` | Provisional ranges and substituted data | Reasoned-estimate ranges are QA screens only, not foreground values; disclose every proxy and replace it with reviewed evidence before activation. | Data-quality disclosure and manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference flow and product metadata | Fail if the reference amount is not 1 kg net target-product mass, the product UUID or Mass UUID/unit group differs, or any required product or route qualifier is missing. | `unsd-cpc-3-0` |
| `validate_route` | Process inventory | Fail if alternative route inputs are included without an actual declared route, if unlike routes are unconditionally averaged, or if sequential preservation lacks batch evidence. | `codex-cxc-52-2003` |
| `validate_balance` | Batch mass and energy records | Flag unexplained mass, negative calculated refrigerant loss, missing conversion factors, or unresolved allocation; the producer shall investigate and disclose the resolution rather than silently balancing. | `eu-pef-2021-2279` |
| `validate_frozen_control` | Frozen products | Require complete time-temperature records and conformity with the applicable quick-frozen lobster specification; nonconforming or reworked lots remain represented in resource and waste flows. | `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `validate_sources_and_estimates` | Evidence and data quality | Fail activation readiness while non-reference UUIDs or source-backed replacements for provisional reasoned-estimate ranges remain unresolved; candidate use shall disclose these limits. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for preserved lobster at the facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-footprint and LCA models matching the declared lobster species, source, preservation route, presentation, geography, technology, and reference period |
| excluded_use | Fresh or live lobster; other crustaceans; undeclared mixes of freezing, drying, salting, and brining; consumer-ready meals; comparisons that ignore material route, origin, or allocation differences |
| required_metadata | PCR id/version, facility and geography, period, species and source, raw/cooked state, presentation, preservation route, net-mass convention, yield, storage time and temperature, packaging, allocation, upstream datasets, proxy and estimate flags |
| required_quality_disclosure | Route-specific coverage, measurement and calibration, missing data, mass/energy balance, cold-chain and food-safety records, co-product/waste treatment, allocation sensitivity, provisional estimates, UUID gaps, and source representativeness |
| update_trigger | Change in species/source, preservation route, cooking or presentation, facility technology, energy/refrigerant system, yield, packaging, allocation, regulation/specification, or data older than the accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, code 21253, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | Product-category boundary and exclusions |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10196/CXP_052e.pdf (retrieved 2026-08-11) | Processing-route decomposition, hygiene, preservation controls, nonconforming product records |
| `codex-cxs-95-1981` | `standard` | Codex Alimentarius, Standard for Quick Frozen Lobsters, CXS 95-1981, https://www.fao.org/input/download/standards/11099/CXS_095e.pdf (retrieved 2026-08-11) | Frozen-lobster product and time-temperature conformity |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Boundary completeness, allocation hierarchy, data quality, representativeness, and disclosure |
