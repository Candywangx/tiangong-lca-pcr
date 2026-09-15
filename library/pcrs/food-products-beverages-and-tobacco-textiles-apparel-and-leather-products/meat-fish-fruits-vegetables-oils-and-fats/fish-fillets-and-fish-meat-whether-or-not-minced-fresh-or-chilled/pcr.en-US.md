---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-and-fish-meat-whether-or-not-minced-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish fillets and fish meat (whether or not minced), fresh or chilled

## 1. Scope and Applicability

This PCR applies to edible fish fillets and other fish meat, including minced fish meat, supplied fresh or chilled without a preservation treatment other than chilling. It covers foreground operations from receipt of fish or fish portions at the processing facility through preparation, filleting or meat recovery, optional mincing, washing where used, chilling, packing, cold storage, and dispatch at the facility gate.

It excludes whole fish sold without filleting or meat recovery, frozen products, dried, salted, smoked, cooked, canned, fermented, coated, or otherwise preserved fish, fish livers and roes, and products whose main material is crustacean, mollusc, or another aquatic invertebrate. Aquaculture or capture, landing, and inbound transport remain upstream unless operated within the reporting organization and explicitly included as additional processes. Species, production origin, received form, skin and bone condition, minced or non-minced form, chilling medium, and packaging format shall be declared because they materially affect yield, energy, water, and co-product treatment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-and-fish-meat-whether-or-not-minced-fresh-or-chilled |
| classification_refs | CPC 3.0: 21221, exact |
| covered_products | Fresh or chilled fish fillets; fresh or chilled fish meat, whether or not minced |
| excluded_products | Whole fish; frozen fish or fish meat; dried, salted, smoked, cooked, canned, fermented, coated, or otherwise preserved fish; fish livers and roes; crustaceans, molluscs, and other aquatic invertebrates |
| representative_product | Packed fresh or chilled edible fish fillet at the processing-facility gate |
| production_route | Receipt under temperature control; preparation and filleting/meat recovery; optional skinning, deboning, trimming, or mincing; washing where used; chilling; packing; cold storage and dispatch |
| market_state | Fresh or chilled, not frozen, ready for sale or further food preparation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish fillet or fish meat supplied for food use |
| How much | 1 kg net product mass |
| How well | Fresh or chilled, declared species and product form, meeting applicable food-safety and commercial quality requirements |
| How long or cycle | One delivery of product at the processing-facility gate; no use duration is assigned |
| reference_flow_link | The reference flow is the net mass of conforming packed product leaving the foreground system |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species mix; capture or aquaculture origin; received form; fillet or other meat form; minced or non-minced; skin and bone condition; fresh or chilled claim; product temperature criterion; chilling medium; packaging format; net mass basis; facility geography and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net saleable product, excluding packaging, free drainage water, and loose ice unless the declared product specification explicitly includes an ice glaze or packing medium; disclose any included medium separately. |
| `wet_mass_basis` | Fish inputs, edible outputs, offcuts, and waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual wet mass at the point each flow crosses the process boundary and do not convert between live, landed, gutted, fillet, and minced mass without a documented calculation rule. |
| `temperature_record` | Receipt, chilling, storage, and dispatch | Temperature | deg C | Record measured product or representative core temperature, the criterion applied, measurement location, instrument identity, and timestamp; temperature is a quality and safety qualifier and is not converted into the reference mass. |
| `energy_conversion` | Electricity and fuels | Energy | kWh or MJ | Preserve metered units and conversion factors; convert only with a documented factor and report refrigeration separately when submetering or engineering allocation permits. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish or fish portions received at the processing facility, with species, origin, received form, mass, temperature condition, supplier or lot, and upstream dataset reference declared |
| starting_condition_role | Upstream product input entering the foreground fish-processing system |
| product_classification_scope | Edible fish fillets and fish meat, whether or not minced, fresh or chilled |
| recursive_input_rule | A purchased fresh or chilled fillet or fish-meat input already within this category is recorded once as an upstream product input and is not recursively reprocessed in the same model; only actual additional foreground operations are inventoried |
| upstream_dataset_requirement | Use a representative upstream dataset for the received fish form and declared capture or aquaculture origin; do not substitute a fillet dataset for whole or gutted fish without documenting the mass and co-product consequences |
| disclosure | Declare capture or aquaculture origin, species, received form, prior preservation, inbound temperature condition, included facility operations, outsourced processing, allocation method, co-product destinations, packaging, geographic scope, and reporting period |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground system | Include all on-site operations required to convert the declared received fish form into conforming fresh or chilled fillets or fish meat through packed cold dispatch, including refrigeration, sanitation, water, packaging, and management of offcuts and wastewater. | `codex-cxc-52-2003` |
| `boundary_upstream_identity` | Received fish | Keep fishing or aquaculture, landing, and inbound transport upstream unless they are operated by the reporting organization or intentionally added; always link the received form to an upstream dataset with matching origin and form. | `eu-pef-2021-2279` |
| `boundary_cold_chain` | Product handling | Keep time and temperature control within the foreground boundary from receipt through dispatch and record deviations; fresh product shall not be represented as frozen or as preserved by another treatment. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_cold_holding` | Receipt and temperature-controlled holding | required | Always | Receive, weigh, inspect, and keep fish chilled before processing | kg accepted fish input |
| `filleting_meat_preparation` | Filleting and fish-meat preparation | required | Always; individual cutting, skinning, deboning, trimming, and mincing steps apply to the declared product route | Produce edible fillets or fish meat and separate co-products or residues | kg prepared edible output |
| `washing_chilling_packing` | Washing, chilling, packing, and cold dispatch | required | Always; washing and ice addition apply only when used | Bring product to the declared fresh or chilled market state and pack it | kg packed net product |
| `sanitation_wastewater_support` | Sanitation, refrigeration support, and wastewater handling | required | Always | Capture shared water, energy, cleaning agents, wastewater, and waste management | kg packed net product |

### Process: Receipt and temperature-controlled holding (`receipt_cold_holding`)

#### Inputs

##### Product flows

###### Received fish or fish portions (`received_fish`)

Record the actual received form that crosses the facility boundary. Do not assign an approximate Tiangong UUID before identity review.

- Selected flow: Received fish or fish portions
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_temperature`
- Sources: `codex-cxc-52-2003`
- Range: Provisional raw-fish input yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.25
  - Upper: 4.00
  - Unit: kg received fish/kg packed net product
  - Basis: per 1 kg packed net product; replace with species-, received-form-, and route-specific reviewed evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilling ice or chilled water at receipt (`receipt_chilling_medium`)

Record purchased or internally supplied ice or chilled water that crosses the receipt process boundary.

- Selected flow: Ice or chilled water
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from issued mass and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected fish and receiving residues (`receiving_rejects`)

Record fish rejected at receipt and residues removed before accepted-input weighing, with destination and cause.

- Selected flow: Rejected fish and receiving residues
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destination_mass`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

None expected as direct elementary flows unless site-specific refrigerant leakage or another direct release is assigned to this process.

#### Outputs

##### Product flows

###### Accepted chilled fish for preparation (`accepted_fish`)

Record accepted wet mass transferred to preparation.

- Selected flow: Accepted chilled fish
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balanced transferred wet mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_temperature`
- Sources: `codex-cxc-52-2003`

##### Waste flows

None beyond the receiving rejects recorded above.

##### Elementary flows

None expected.

### Process: Filleting and fish-meat preparation (`filleting_meat_preparation`)

#### Inputs

##### Product flows

###### Accepted fish for cutting or meat recovery (`fish_for_preparation`)

Record the accepted chilled fish transferred from receipt.

- Selected flow: Accepted chilled fish
- Flow property / unit: Mass / kg
- Amount rule: transferred wet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared edible output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_temperature`
- Sources: `codex-cxc-52-2003`

###### Process water used in preparation (`preparation_water`)

Record water used for product-contact rinsing, washing, or line operation in this process.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: submetered volume converted using documented density, or allocated facility meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources: `codex-cxc-52-2003`
- Range: Provisional process-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg water/kg packed net product
  - Basis: broad first-pass screen; replace with reviewed site or source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None as inputs unless externally managed residues are returned for further processing; disclose such recirculation separately.

##### Elementary flows

None expected.

#### Outputs

##### Product flows

###### Prepared edible fillets or fish meat (`prepared_edible_meat`)

Record edible product after cutting, optional skinning or deboning, trimming, meat recovery, and optional mincing.

- Selected flow: Prepared edible fish fillets or fish meat
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass released to final chilling and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared edible output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destination_mass`
- Sources: `codex-cxc-52-2003`

###### Saleable fish co-products (`saleable_coproducts`)

Record heads, frames, skins, trimmings, mince fractions, or other materials that leave as products, by destination and quality status.

- Selected flow: Saleable fish co-products
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass by co-product and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared edible output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destination_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Non-saleable offcuts and spoiled material (`processing_residues`)

Record non-product organic residues by treatment route; do not combine them with saleable co-products.

- Selected flow: Fish processing residues
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared edible output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destination_mass`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

None expected.

### Process: Washing, chilling, packing, and cold dispatch (`washing_chilling_packing`)

#### Inputs

##### Product flows

###### Prepared edible fish product (`prepared_product_for_packing`)

Record prepared edible output received for final conditioning and packing.

- Selected flow: Prepared edible fish fillets or fish meat
- Flow property / unit: Mass / kg
- Amount rule: transferred wet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packed net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_temperature`
- Sources: `codex-cxc-52-2003`

###### Final-stage water and ice (`final_water_ice`)

Record water and ice used for final washing, chilling, or packing, separated when records permit.

- Selected flow: Process water and ice
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or metered volume with documented conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources: `codex-cxc-52-2003`
- Range: Provisional ice-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg ice/kg packed net product
  - Basis: broad first-pass screen; replace with reviewed product- and route-specific evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material by material type and measured issued mass, net of documented returns.

- Selected flow: Packaging materials
- Flow property / unit: Mass / kg
- Amount rule: measured or bill-of-material mass by packaging component
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources:
- Range: Provisional packaging-mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg packaging/kg packed net product
  - Basis: broad first-pass screen; replace with reviewed pack-format evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

None as inputs.

##### Elementary flows

None expected.

#### Outputs

##### Product flows

###### Packed fresh or chilled fish fillets or meat (`reference_product`)

This is the reference product leaving the facility gate.

- Selected flow: Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net product mass after allocation and normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_lot_mass_temperature`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Packaging rejects and final product losses (`packing_losses`)

Record rejected product and packaging waste by material and destination.

- Selected flow: Packing losses and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass or reconciled issue-minus-product balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packed net product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destination_mass`
- Sources:

##### Elementary flows

None expected.

### Process: Sanitation, refrigeration support, and wastewater handling (`sanitation_wastewater_support`)

#### Inputs

##### Product flows

###### Electricity and fuels (`facility_energy`)

Record energy used by refrigeration, cutting, pumping, ice making, compressed air, lighting, and other included facility operations.

- Selected flow: Electricity and fuels by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured by submeter; otherwise allocate facility records using documented engineering drivers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources:
- Range: Provisional electricity-use screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 5
  - Unit: kWh/kg packed net product
  - Basis: broad first-pass screen for facility electricity; replace with reviewed site or source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water and agents (`sanitation_inputs`)

Record water, detergents, and disinfectants used for included sanitation activities.

- Selected flow: Cleaning water, detergent, and disinfectant by material
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity or procurement-and-stock balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_materials`
- Sources: `codex-cxc-52-2003`

##### Waste flows

None as inputs.

##### Elementary flows

None expected as inputs.

#### Outputs

##### Product flows

None expected.

##### Waste flows

###### Process wastewater (`process_wastewater`)

Record wastewater mass or volume and treatment destination, with measured load indicators when available.

- Selected flow: Fish-processing wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered discharge or water balance, segregated by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_refrigerant`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

###### Direct refrigerant releases (`refrigerant_release`)

Record direct refrigerant loss to air from included refrigeration equipment by refrigerant species.

- Selected flow: Refrigerant emission to air by species
- Flow property / unit: Mass / kg
- Amount rule: calculated from charge, additions, recovery, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packed net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_refrigerant`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Multi-output processing | Avoid allocation by separately metering or subdividing filleting, mincing, chilling, and packing operations where technically feasible. | `eu-pef-2021-2279` |
| `allocation_physical_relation` | Shared operations with saleable fish co-products | Where subdivision is not feasible and a defensible physical relationship represents resource use, allocate shared inputs and emissions using that relationship; wet mass may be used only when it reasonably reflects the underlying process relationship. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Joint outputs without a defensible physical relationship | Use a documented economic relationship only when subdivision and a representative physical relationship are not feasible; report prices, geography, time basis, averaging, and sensitivity to the allocation choice. | `eu-pef-2021-2279` |
| `allocation_waste_not_coproduct` | Offcuts, spoiled fish, sludge, and packaging waste | Classify an output as a co-product only when it leaves as a product with a documented destination and value or function; otherwise model it as waste and include treatment attributable to the foreground system. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_temperature` | `receipt_cold_holding`; `filleting_meat_preparation`; `washing_chilling_packing` | Lot mass, product form, and temperature | weighbridge or scale record; receiving and dispatch log; temperature log | lot_id; species; origin; received_form; input_mass_kg; transferred_mass_kg; packed_net_mass_kg; temperature_deg_c; criterion; timestamp; instrument_id; rejection_mass_kg | Calibrated scale and calibrated temperature instrument, linked to production lot | kg; deg C | Each lot and each required control point | Representative continuous 12-month period or complete declared campaign | Every included facility and outsourced foreground step | Sum masses by lot and product; calculate mass-weighted annual or campaign intensity; retain exceptional lots and explain exclusions | Calibration records; lot traceability; temperature-monitoring record; reconciliation sign-off |
| `cp_utilities_materials` | All processes | Water, ice, energy, packaging, and cleaning materials | meter; invoice; stock issue; bill of materials | period; meter_id; carrier_or_material; opening_stock; purchases; closing_stock; issued_quantity; returned_quantity; unit; allocation_driver | Submetering preferred; otherwise reconciled procurement/stock record with documented engineering allocation | kg; m3; kWh; MJ | Per batch where available and at least monthly | Same period as product output, normally 12 consecutive months | Every included facility; separate material or energy carrier | Net use divided by allocated packed output after stock reconciliation | Meter calibration; invoices; stock ledger; allocation worksheet |
| `cp_output_destination_mass` | `receipt_cold_holding`; `filleting_meat_preparation`; `washing_chilling_packing` | Product, co-product, reject, and waste mass and destination | scale ticket; dispatch record; waste manifest | lot_id; output_type; product_or_waste_status; mass_kg; destination; value_or_function; treatment_route; timestamp | Weigh each material stream or use a documented mass balance when direct weighing is impracticable | kg | Each dispatch or disposal event | Same period as reference product | Every included facility and external destination category | Sum by output identity and destination; no netting of product and waste | Scale calibration; sales or transfer record; waste manifest; mass-balance reconciliation |
| `cp_wastewater_refrigerant` | `sanitation_wastewater_support` | Wastewater and refrigerant release | discharge meter and sampling record; refrigerant service log | discharge_volume; load_indicator; concentration; treatment_route; refrigerant_species; opening_charge; additions; recovery; closing_charge | Direct measurement where available; otherwise documented water balance and refrigerant mass balance | m3; kg; concentration unit | Per discharge sample and service event; aggregate monthly | Same period as reference product | Every included facility | Aggregate measured discharge and calculate species-specific refrigerant loss; allocate only shared support quantities | Laboratory record; meter calibration; service invoice; charge reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | normalized amount = allocated included-period amount / packed net reference-product mass | allocated amount; packed_net_mass_kg | amount per 1 kg reference product |  |
| `calc_mass_balance` | Each process and reporting period | mass-balance difference = total mass inputs - total product outputs - total co-product outputs - total waste outputs - documented water carryover or evaporation | measured input and output wet masses; documented moisture or carryover terms | absolute and relative reconciliation difference | `codex-cxc-52-2003` |
| `calc_refrigerant_loss` | Refrigeration system | refrigerant loss = opening charge + additions - recovered refrigerant - closing charge, not less than zero unless a documented correction is applied | opening_charge; additions; recovery; closing_charge | kg refrigerant released by species |  |
| `calc_allocation` | Shared multi-output operations | Apply the selected subdivision, physical, or economic allocation rule consistently to all shared inputs and emissions; preserve unallocated totals and allocation fractions | shared totals; output quantities; physical driver or prices | allocated inventory by output | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and fish inputs | Preserve lot linkage among species, origin, received form, temperature records, processing route, and packed output. | Lot records and traceability reconciliation; `codex-cxc-52-2003` |
| `dq_temporal_representativeness` | Foreground activity data | Use a representative continuous 12-month period where operations are ongoing; for seasonal or campaign production, cover the complete declared campaign and disclose why it is representative. | Period coverage table and production summary; `eu-pef-2021-2279` |
| `dq_geographic_technology_scope` | Facilities and outsourced foreground steps | Include every facility and technology represented by the dataset or disclose exclusions and their share of output; do not pool materially different filleting, mincing, chilling, or packing routes without stratification or justification. | Facility list, route description, coverage calculation; `eu-pef-2021-2279` |
| `dq_measurement_control` | Mass, temperature, utilities, and releases | Retain instrument identity, calibration or verification status, sampling method, missing-data treatment, and reconciliation evidence. | Calibration certificates, meter logs, sampling records, and QA sign-off |
| `dq_food_safety_context` | Fresh or chilled product | Retain the applicable time-temperature criterion, monitoring results, corrective actions, and hygiene-control evidence; PCR conformance does not replace food-safety compliance. | Temperature log, sanitation record, deviation and corrective-action record; `codex-cxc-52-2003` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Confirm exactly 1 kg net product mass, the specified product-flow UUID, Mass property UUID, unit-group UUID, kg unit, and all required qualifiers. |  |
| `validate_scope_state` | Product identity and boundary | Reject datasets for frozen or otherwise preserved product; verify that the received form and included processing route can produce the declared fresh or chilled fillet or fish-meat output. | `codex-cxc-52-2003` |
| `validate_cold_chain_records` | Receipt through dispatch | Require time-temperature records and documented response to deviations for every declared control point. | `codex-cxc-52-2003` |
| `validate_mass_balance` | Each process and reporting period | Reconcile fish inputs with edible output, saleable co-products, rejects, waste, and documented carryover; investigate rather than automatically accept values outside the provisional QA screen. |  |
| `validate_allocation` | Multi-output operations | Confirm that subdivision was considered first, the selected driver is justified, outputs are not double counted as both co-product and waste, and allocation fractions reconcile to the unallocated total. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | QA guardrails | Treat all `reasoned_estimate` ranges as non-normative screening values; flag exceedances for review and replace or confirm the ranges with reviewed evidence before activation. |  |
| `validate_data_completeness` | Foreground package | Require full facility, temporal, route, utility, packaging, co-product, waste, wastewater, refrigerant, and source disclosure or an explicit documented exclusion. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for fresh or chilled fish fillets and fish meat |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product and process LCA where species or species mix, origin, received form, processing route, market state, geography, technology, allocation, and data period are representative |
| excluded_use | Frozen, preserved, cooked, or non-fish products; upstream capture or aquaculture impacts without a linked upstream dataset; retail, consumer preparation, or end-of-life claims outside the declared boundary |
| required_metadata | PCR id and status; product-flow UUID; species and origin; received form; product form; skin/bone/mincing state; chilling medium and temperature criterion; packaging; facility geography; technology route; period; allocation method; co-product and waste destinations; upstream dataset references |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; facility and output coverage; measurement and calibration evidence; mass-balance result; missing-data treatment; provisional estimate use; allocation sensitivity; food-safety criterion and deviations |
| update_trigger | Change in species mix, origin, received form, yield, equipment, refrigeration system, chilling or packing method, co-product destination, allocation driver, facility mix, regulation, or evidence that materially changes normalized results or scope |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | FAO/WHO Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official PDF: https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (retrieved 2026-08-11) | Fresh/chilled product meaning; filleting, skinning, trimming, washing and hygiene process decomposition; time-temperature and cold-chain controls; quality and food-safety records |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint method: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | System-boundary disclosure; allocation hierarchy; foreground data quality, representativeness, completeness, and validation requirements |
