---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.plums-dried
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Plums, dried

## 1. Scope and Applicability

This PCR covers dried plums, including products marketed as prunes, produced from fresh plums by either sun drying or mechanical dehydration and supplied at the drying or packing facility gate. The declared product may be pitted or unpitted and may be bulk-packed or retail-packed. The foreground data package shall state the drying route, cultivar or commercial type when known, pit status, moisture basis and result, applicable commercial grade or contract specification, treatment or processing-aid use, and packaging format.

Fresh plums, plum puree, jams, juice, canned plums, freeze-dried plums represented by a materially different route, and mixtures in which dried plum is not the sole fruit product are excluded. Agricultural production of fresh plums is outside the foreground boundary but shall be represented by an upstream dataset. UNECE DDP-07 is used only for prune identity, condition, moisture determination, and commercial-quality measurement when the marketed product falls within that standard; it does not supply default life-cycle inventory amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.plums-dried |
| classification_refs | CPC 3.0: 21412, Plums, dried |
| covered_products | Dried plums and prunes made by one declared sun-drying or mechanical-dehydration route; pitted or unpitted; bulk- or retail-packed |
| excluded_products | Fresh plums; plum puree, jam, juice, or canned products; materially distinct freeze-dried products; multi-fruit mixtures |
| representative_product | Marketable dried plums at the drying or packing facility gate |
| production_route | Fresh-plum receipt and preparation; exactly one of sun drying or mechanical dehydration; finishing and packaging |
| market_state | Dried, conditioned and sorted; pit status, moisture, grade or contract specification, treatments, and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of marketable dried plums with declared commercial and physical condition |
| How much | 1 kg net mass of dried plums |
| How well | Meets the declared grade or contract specification and declared moisture requirement; pit status, treatments, and packaging format are stated |
| How long or cycle | One facility-gate delivery; no use-duration function is assigned |
| reference_flow_link | The functional unit is realized by the single Tiangong product flow identified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Plums, dried `f5f0869e-5528-4563-97be-b319c24516b2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | drying route: sun or mechanical; cultivar or commercial type if known; pitted or unpitted; moisture result and wet- or dry-basis convention; grade or contract specification; treatment and processing-aid status; bulk or retail packaging format; geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported inventory to 1 kg net dried-plum output; exclude packaging mass from the reference amount. |
| `moisture_declaration` | Fresh-plum input, drying intermediates, and reference product | Mass fraction | % wet basis or kg water/kg product | Record the sampling method, lot, measurement result, and wet- or dry-basis convention; use UNECE DDP-07 measurement provisions only when applicable to the marketed product and do not treat them as an LCI amount. |
| `weighing_consistency` | Lot inputs, intermediate transfers, rejects, residues, and final output | Mass | kg | Use calibrated scales or traceable transaction records and preserve gross, tare, and net quantities so the batch mass balance can be reconstructed. |
| `energy_carrier_preservation` | Electricity, purchased heat, and fuels | Energy or carrier mass/volume | kWh, MJ, kg, or m3 as recorded | Preserve each energy carrier and original unit; document conversion factors and lower- or higher-heating-value basis before normalization. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_receipt_to_gate` | Foreground dried-plum production | Include fresh-plum receipt, preparation, exactly one declared drying route, finishing, and packaging through facility-gate dried-plum output. | `eu-pef-2021-2279` |
| `boundary_upstream_supply` | Fresh plums and purchased inputs | Keep fresh plums, energy carriers, water, packaging, and processing aids visible as product inputs and link each material input to an appropriate upstream dataset; do not absorb upstream burdens into an undocumented aggregate. | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | Drying operations | Select sun drying or mechanical dehydration for a represented batch; never include both route processes for the same dried-plum quantity unless separately metered batches are modelled and recombined transparently. |  |
| `boundary_direct_releases` | On-site combustion and direct releases | Include substance-specific elementary flows from on-site fuel combustion and any other measured or calculated direct release; disclose the factor source and calculation basis. | `eu-pef-2021-2279` |
| `boundary_losses_and_packaging` | Rejects, pits, wastewater, and packaging | Include all material rejects, separated pits, wastewater, other wastes, and packaging that cross the foreground boundary, with destination or treatment route declared. | `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh plums received at the drying facility, with received net quantity, origin, moisture or condition record, and acceptance or rejection status declared |
| starting_condition_role | Entry point for foreground dried-plum processing; orchard production and transport before receipt are represented by linked upstream datasets |
| product_classification_scope | Dried plums within CPC 3.0 subclass 21412, independent of pit status or package format when the drying route remains in scope |
| recursive_input_rule | If dried plums enter an in-scope operation, record them as a visible product input linked to an upstream dried-plum dataset and do not expand the same product category again inside the current foreground package |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative datasets for fresh plums, utilities, fuels, packaging, processing aids, and waste treatment |
| disclosure | Declare fresh-plum origin, route selection, pitting point, moisture basis and result, treatments, packaging format, outsourced operations, upstream dataset choices, and exclusions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | Fresh-plum receipt and preparation | `required` | Always included | Foreground receiving, inspection, sorting, washing when used, and preparation | Per kg prepared plums transferred to the selected drying route |
| `sun_drying` | Sun drying | `conditional` | Include only when `drying_route = sun`; exclude when the mechanical route is selected | Foreground solar exposure, turning, and route-specific handling | Per kg sun-dried intermediate output |
| `mechanical_dehydration` | Mechanical dehydration | `conditional` | Include only when `drying_route = mechanical`; exclude when the sun route is selected | Foreground controlled dehydration and associated utilities | Per kg mechanically dried intermediate output |
| `finishing_and_packaging` | Finishing and packaging | `required` | Always included after the one selected drying route | Foreground conditioning, sorting, optional pitting, treatment when used, and packaging | Per 1 kg net dried-plum output |

### Process: Fresh-plum receipt and preparation (`receipt_and_preparation`)

#### Inputs

##### Product flows

###### Fresh plums supplied for drying (`fresh_plums_input`)

Fresh plums cross the foreground boundary at facility receipt. Obtain the quantity from traceable net lot weights and retain origin, cultivar or commercial type when known, condition, and acceptance records.

- Selected flow: Fresh plums
- Flow property / unit: Mass / kg
- Amount rule: Measured net accepted quantity assigned to the represented production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_and_quality`
- Range: Temporary candidate screening range; apply only when lot weights are unavailable and replace when one representative campaign of accepted-input and final-output records is available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg fresh plums/kg net dried-plum output
  - Basis: broad conditional mass-ratio estimate pending route- and moisture-specific foreground yield records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record metered or allocated water used for washing or other preparation steps only when those steps occur.

- Selected flow: Process water supply
- Flow property / unit: Mass / kg
- Amount rule: Measured preparation water attributable to the represented batch; zero only when no water-using preparation occurs and that condition is documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Temporary conditional screening range; replace after a representative campaign has batch-level meter or allocation records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water/kg net dried-plum output
  - Basis: broad candidate estimate conditional on washing and water-handling practice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared plums transferred to drying (`prepared_plums_output`)

Prepared accepted plums leave receipt and preparation and enter exactly one drying route.

- Selected flow: Prepared fresh plums
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer quantity or calculated from accepted fresh plums minus recorded rejects and other documented preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared plums transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_and_quality`

##### Waste flows

###### Preparation rejects and residues (`preparation_rejects`)

Record rejected fruit, stems, leaves, stones removed before drying, and other separated preparation residues by destination.

- Selected flow: Preparation rejects and residues
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-derived quantity by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted fresh-plum input
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_and_residue_records`
- Range: Temporary physical screening range; replace when a representative campaign provides weighed reject records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg rejects/kg accepted fresh-plum input
  - Basis: conditional broad fraction bounded by the received accepted-input quantity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation when water-using steps occur, including its measured or balance-derived quantity and destination.

- Selected flow: Wastewater from fruit preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge or water balance attributable to the represented batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Range: Temporary conditional screening range; replace after a representative campaign has measured supply, retained water, and discharge records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: kg wastewater/kg net dried-plum output
  - Basis: broad candidate estimate conditional on preparation-water use and discharge practice
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Sun drying (`sun_drying`)

#### Inputs

##### Product flows

###### Prepared plums entering the sun route (`sun_route_plums_input`)

This transfer is included only for batches declared as sun-dried and shall match the preparation output assigned to this route.

- Selected flow: Prepared fresh plums
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled batch transfer to the sun-drying route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg sun-dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_batch_balance`

###### Auxiliary electricity for sun drying (`sun_auxiliary_electricity`)

Record electricity for fans, turning, conveying, controls, or other route equipment when used; do not assign electricity to passive operations without a record.

- Selected flow: Site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-time-allocated electricity for the sun-drying batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg sun-dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Temporary conditional screening range; replace after a representative sun-drying campaign has metered or defensibly allocated electricity records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg sun-dried intermediate output
  - Basis: broad candidate estimate conditional on auxiliary equipment use
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Sun-dried plum intermediate (`sun_dried_intermediate`)

Record the route output after the declared drying endpoint and before shared finishing.

- Selected flow: Sun-dried plums, intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net route output at the declared moisture endpoint
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg sun-dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_batch_balance`

##### Waste flows

##### Elementary flows

###### Water transferred to air during sun drying (`sun_drying_water_to_air`)

Represent moisture removed during drying as a mass-balance elementary transfer when required by the modelling system; do not infer a measured atmospheric emission beyond the water balance.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Prepared-plum input minus dried intermediate, rejects, and other recorded transfers on a consistent moisture and mass basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg prepared plums entering sun drying
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_batch_balance`
- Range: Temporary mass-balance screening range; replace with batch moisture and weight records for the represented route
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg water/kg prepared plums entering sun drying
  - Basis: conditional broad fraction bounded by prepared-plum input on a consistent mass basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Mechanical dehydration (`mechanical_dehydration`)

#### Inputs

##### Product flows

###### Prepared plums entering the mechanical route (`mechanical_route_plums_input`)

This transfer is included only for batches declared as mechanically dehydrated and shall match the preparation output assigned to this route.

- Selected flow: Prepared fresh plums
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled batch transfer to mechanical dehydration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg mechanically dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_batch_balance`

###### Mechanical-dehydration electricity (`mechanical_drying_electricity`)

Record metered or equipment-time-allocated electricity for fans, conveyors, controls, heat pumps, and electric heating used by the represented batch.

- Selected flow: Site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly allocated electricity for mechanical dehydration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg mechanically dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Temporary candidate screening range; replace after a representative mechanical-drying campaign has metered or defensibly allocated electricity records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg mechanically dried intermediate output
  - Basis: broad conditional estimate covering different mechanical configurations before foreground evidence is available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mechanical-dehydration fuel or purchased heat (`mechanical_drying_thermal_energy`)

Record each fuel or purchased-heat carrier separately. Do not combine lower- and higher-heating-value quantities or different carrier datasets without documented conversion.

- Selected flow: Declared fuel or purchased heat supply
- Flow property / unit: Energy / MJ, with carrier quantity retained in its recorded unit
- Amount rule: Metered, invoiced, or defensibly allocated thermal energy for mechanical dehydration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg mechanically dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Temporary candidate screening range; replace after a representative mechanical-drying campaign has carrier-specific fuel or purchased-heat records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: MJ/kg mechanically dried intermediate output
  - Basis: broad conditional estimate for non-electric thermal demand before foreground evidence is available
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically dried plum intermediate (`mechanically_dried_intermediate`)

Record the route output after the declared drying endpoint and before shared finishing.

- Selected flow: Mechanically dried plums, intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net route output at the declared moisture endpoint
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg mechanically dried intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_batch_balance`

##### Waste flows

##### Elementary flows

###### Water transferred to air during mechanical dehydration (`mechanical_drying_water_to_air`)

Represent moisture removed during dehydration as a mass-balance elementary transfer when required by the modelling system; do not infer a measured atmospheric emission beyond the water balance.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Prepared-plum input minus dried intermediate, rejects, and other recorded transfers on a consistent moisture and mass basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg prepared plums entering mechanical dehydration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_batch_balance`
- Range: Temporary mass-balance screening range; replace with batch moisture and weight records for the represented route
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg water/kg prepared plums entering mechanical dehydration
  - Basis: conditional broad fraction bounded by prepared-plum input on a consistent mass basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Substance-specific on-site combustion inventory (`mechanical_combustion_releases`)

This aggregate card requires individual elementary-flow rows in the completed dataset when fuel is combusted on site; no generic quantity applies across substances.

- Selected flow: Substance-specific elementary flows from on-site combustion
- Flow property / unit: Descriptive record; completed dataset uses Mass / kg per substance
- Amount rule: Not applicable to this aggregate card; calculate each emitted substance from measured carrier use and a declared factor source
- Value mode: Not applicable (`not_applicable`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per kg mechanically dried intermediate output for the completed substance-specific rows
- Basis kind: Process output (`process_output`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `eu-pef-2021-2279`

### Process: Finishing and packaging (`finishing_and_packaging`)

#### Inputs

##### Product flows

###### Dried-plum intermediate from the selected route (`selected_route_intermediate`)

Receive output from exactly one drying route for each represented batch; separately metered route batches may be combined only after their quantities and burdens remain traceable.

- Selected flow: Dried plums, intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer from the selected drying route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_batch_balance`

###### Packaging materials (`packaging_materials`)

Record each primary, secondary, and tertiary packaging material separately by material and supplier dataset.

- Selected flow: Declared packaging material supplies
- Flow property / unit: Mass / kg
- Amount rule: Measured bill-of-material or purchase-and-stock-balanced quantity allocated to the represented output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Temporary candidate screening range; replace when the declared package bill of materials and net packed output are available
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg packaging/kg net dried-plum output
  - Basis: broad conditional estimate covering bulk and retail packaging before product-specific records are available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing electricity (`finishing_electricity`)

Record electricity for conditioning, sorting, optional pitting, conveying, treatment, and packing equipment actually used.

- Selected flow: Site electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-time-allocated electricity for finishing and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dried-plum output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Temporary candidate screening range; replace after a representative finishing campaign has metered or defensibly allocated electricity records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net dried-plum output
  - Basis: broad conditional estimate covering facility-specific finishing and package formats before foreground evidence is available
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried plums at facility gate (`dried_plums_output`)

This output realizes the reference flow after the declared finishing and packaging operations.

- Selected flow: Plums, dried `f5f0869e-5528-4563-97be-b319c24516b2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net dried-plum output after allocation and normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Pits and finishing rejects (`pits_and_finishing_rejects`)

Record separated pits, off-grade fruit, and other finishing residues by destination; record zero only when the corresponding operation does not occur and the condition is documented.

- Selected flow: Pits and finishing residues
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-derived quantity by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dried-plum intermediate entering finishing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reject_and_residue_records`
- Range: Temporary physical screening range; replace when a representative finishing campaign provides weighed pit and reject records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg pits and rejects/kg dried-plum intermediate input
  - Basis: conditional broad fraction bounded by the dried-plum intermediate input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Route batches and separable operations | Keep sun-dried and mechanically dehydrated batches separate and subdivide metered operations before allocating shared burdens. | `eu-pef-2021-2279` |
| `allocation_shared_operations` | Unavoidable shared utilities or finishing | When subdivision or direct metering is not possible, apply and justify an allocation basis consistent with the PEF method hierarchy; disclose quantities, relationship, formula, and sensitivity where material. | `eu-pef-2021-2279` |
| `allocation_recovered_outputs` | Pits and other recovered outputs | Record recovered outputs and their destinations separately; do not assign zero burdens solely because an output is called a residue, and document any allocation or substitution treatment. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_and_quality` | `receipt_and_preparation` | Fresh-plum receipt, accepted transfer, and finished lot quality | Scale tickets and quality-control records | lot_id; date; origin; cultivar_or_type; gross_mass; tare_mass; accepted_mass; rejected_mass; moisture_result; moisture_basis; condition_or_grade | Calibrated weighing plus documented sampling and test method | kg; % or kg/kg for moisture | Each received and finished lot | At least one representative production campaign and the stated reference period | All facilities and suppliers represented | Sum traceable lot quantities; reconcile accepted input, transfers, and output before normalization | Calibration records, sample plan, test method, lot traceability, and exceptions |
| `cp_utility_records` | `all_applicable_processes` | Water, electricity, fuels, and purchased heat | Meter, invoice, tank, or equipment-runtime records | period; process_or_equipment; carrier; opening_reading; closing_reading; purchase_quantity; allocation_driver; unit; heating_value_basis | Prefer submetering; otherwise use documented engineering allocation to represented batches | kg; m3; kWh; MJ; carrier unit | Each batch or no longer than monthly | Same representative campaign and reference period as production | Every in-scope facility and outsourced operation | Subtract non-production uses, allocate with a disclosed driver, preserve carrier identity, and normalize to process output | Meter calibration, invoices, runtime logs, conversion factors, and allocation worksheet |
| `cp_reject_and_residue_records` | `receipt_and_preparation_and_finishing` | Preparation rejects, pits, and finishing residues | Weigh tickets, container counts, and destination records | batch_id; residue_type; gross_mass; tare_mass; destination; sale_or_disposal_status; moisture_basis_if_material | Weigh each stream or use validated container factors with periodic checks | kg | Each batch or shipment | Same representative campaign and reference period as production | All represented facilities | Aggregate by stream and destination; reconcile against process input and output | Scale checks, container-factor validation, destination receipts, and mass-balance reconciliation |
| `cp_water_balance` | `receipt_and_preparation` | Preparation water and wastewater | Supply and discharge meter records or documented water balance | batch_or_period; supplied_water; retained_water; discharged_water; evaporation_or_other_loss; allocation_driver | Meter supply and discharge where practicable; otherwise calculate with disclosed balance terms | kg or m3 with density conversion | Each batch or no longer than monthly | Same representative campaign and reference period as production | All water-using preparation operations | Reconcile supply with discharge, retention, and other losses; normalize to final output | Meter calibration, density conversion, discharge record, and balance closure |
| `cp_route_batch_balance` | `selected_drying_route` | Route input, dried intermediate, moisture change, and transfers | Batch weights, moisture tests, route logs, and transfer records | batch_id; drying_route; input_mass; input_moisture; output_mass; output_moisture; rejects; other_transfers; start_time; end_time | Weigh route input and output and test moisture on the same declared basis | kg; % or kg/kg for moisture | Each drying batch | At least one representative campaign covering declared route conditions | Every represented drying site and route | Calculate water removed and yield on a consistent mass and moisture basis; keep route batches separate | Scale calibration, moisture method, route log, and closed batch balance |
| `cp_combustion_inventory` | `mechanical_dehydration` | On-site combustion elementary flows | Fuel records, equipment logs, and documented emission factors | carrier; quantity; unit; heating_value_basis; substance; factor; factor_unit; factor_source; control_efficiency | Calculate each substance from measured carrier quantity and an explicitly cited applicable factor | kg per substance | Each batch or reporting period matching fuel records | Same representative campaign and reference period as mechanical dehydration | Every represented on-site combustion source | Sum substance-specific results and normalize to mechanical route output without merging carriers or factor bases | Fuel reconciliation, factor citation, applicability check, and calculation worksheet |
| `cp_packaging_records` | `finishing_and_packaging` | Primary, secondary, and tertiary packaging | Bill of materials, purchase records, and packed-output records | package_format; material; component_mass; units_used; recycled_content_if_claimed; packed_net_output; losses | Weigh representative components or use verified supplier specifications and reconcile purchases and stock | kg | Each package design and production campaign | Current package design during the stated reference period | Every package format represented | Sum component mass and packaging losses by material; normalize to net packed output | Component weigh records, supplier specification, bill-of-material revision, and stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = quantity assigned to represented output / net kg dried-plum output after allocation | assigned quantity; net dried-plum output; allocation result | Amount per 1 kg reference flow |  |
| `calc_drying_water_balance` | Selected drying route | water transferred to air = route input mass - dried intermediate mass - rejects - other documented mass transfers, with every term on a consistent measurement basis | input and output weights; moisture basis; rejects; other transfers | kg water transferred per route basis |  |
| `calc_direct_combustion_releases` | On-site fuel combustion | substance amount = measured carrier quantity × applicable documented factor × (1 - documented control efficiency), with carrier and factor units reconciled | carrier quantity; heating-value basis where relevant; substance factor; control efficiency | kg of each elementary flow |  |
| `calc_route_selection` | Drying process map | Exactly one route flag is true for each represented batch; separately metered route batches may be aggregated only after independent normalization | batch_id; sun_route_flag; mechanical_route_flag; route-specific output | Validated exclusive route assignment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and input lots | Retain CPC context, product name, cultivar or commercial type when known, pit status, treatment status, packaging format, and applicable grade or contract specification. | Lot and product specifications; `unsd-cpc-30-21412`; `unece-ddp-07-2025` when applicable |
| `dq_measurement_traceability` | Mass, moisture, utilities, and packaging | Retain calibration, sampling, test method, meter, invoice, conversion, and allocation evidence sufficient to reproduce normalized amounts. | Protocol records and calculation worksheets; `unece-ddp-07-2025` for applicable quality and moisture measurement |
| `dq_temporal_and_site_coverage` | Foreground production | Cover a representative campaign for each declared route, site, seasonal condition, and package format, and disclose any omitted or estimated operation. | Production calendar, batch register, site list, and coverage assessment; `eu-pef-2021-2279` |
| `dq_completeness_and_balance` | Each process and route | Reconcile input, output, reject, residue, wastewater, moisture-loss, and stock-change terms; explain every material imbalance and provisional estimate. | Process mass balances, destination records, and estimate-replacement log |
| `dq_source_and_factor_currency` | Upstream datasets and emission factors | Record geography, technology, reference year, version, and applicability; replace provisional estimates when representative foreground records or reviewed source-backed values become available. | Dataset metadata, factor citations, update log, and `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference product | Confirm the Tiangong product-flow UUID, Mass UUID, Units-of-mass UUID, kg unit, and exactly 1 kg net output; packaging mass shall not be included in the reference amount. |  |
| `validate_product_condition` | Product identity and quality | Confirm drying route, pit status, moisture result and basis, grade or contract specification, treatment status, package format, geography, and reference period; apply UNECE DDP-07 condition and measurement rules only when its product scope applies. | `unece-ddp-07-2025` |
| `validate_route_exclusivity` | Process map and inventory | Confirm exactly one of sun drying and mechanical dehydration is active for each represented batch and that no quantity or burden is counted in both routes. |  |
| `validate_upstream_links` | Product inputs | Confirm fresh plums, utilities, fuels, packaging, processing aids, and waste-treatment services use declared upstream datasets with representative metadata. | `eu-pef-2021-2279` |
| `validate_mass_and_moisture_balance` | Each batch and process | Confirm a consistent mass and moisture basis reconciles inputs, outputs, rejects, pits, wastewater, water transferred to air, and other transfers; investigate and disclose material imbalance. |  |
| `validate_direct_releases` | On-site combustion | When fuel is combusted on site, confirm substance-specific elementary flows are calculated from measured carrier use and cited applicable factors with unit and control-efficiency checks. | `eu-pef-2021-2279` |
| `validate_allocation_and_estimates` | Shared operations and provisional values | Confirm the allocation hierarchy and basis are disclosed, every reasoned estimate is identified as temporary and conditional, and each is replaced when its stated foreground-record trigger is met. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dried-plum production data package and facility-gate product dataset |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for food-product process and lifecyclemodel construction after review |
| allowed_use | Comparative or attributional studies whose product identity, route, geography, period, quality, pit status, treatment, and package format are compatible with the dataset metadata |
| excluded_use | Fresh plums, plum preparations other than dried whole or pitted fruit, materially distinct freeze-drying, undeclared route mixtures, or studies requiring an unrepresented quality or packaging state |
| required_metadata | PCR id and version; reference-flow UUIDs; CPC context; geography; reference period; facility and route coverage; drying route; cultivar or commercial type when known; pit status; moisture result and basis; grade or contract specification; treatments; packaging format; allocation; upstream datasets; source and factor versions |
| required_quality_disclosure | Foreground versus estimated shares; meter and scale coverage; sampling and moisture methods; route and site coverage; mass-balance closure; allocation; exclusions; data gaps; provisional estimates and their replacement status |
| update_trigger | New or changed route, equipment, fuel, package design, product specification, pit or treatment status, facility mix, upstream dataset, emission factor, allocation method, or representative foreground evidence that replaces a provisional estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-30-21412` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, subclass 21412, “Plums, dried” | Classification context and product-category identity only |
| `unece-ddp-07-2025` | Standard (`standard`) | UNECE Standard DDP-07 concerning the marketing and commercial quality control of prunes, current UNECE WP.7 listing (2025) | Prune and dried-plum identity, condition, moisture determination, and commercial-quality measurement when applicable; not LCI default amounts |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods | System-boundary completeness, allocation hierarchy, data-quality disclosure, calculation traceability, and validation method |
