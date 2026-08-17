---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-offal-fish-fins-heads-tails-maws-and-other-edible-fish-offal
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Edible fish offal; fish fins, heads, tails, maws and other edible fish offal

## 1. Scope and Applicability

This PCR applies to foreground production of edible fish offal and edible anatomical parts such as fins, heads, tails, maws (swim bladders), and other declared fish offal prepared for human consumption. It covers separation or receipt of the edible parts, sorting, washing or trimming where performed, preservation or stabilization, packing, and release at the processor gate.

The data package shall identify the fish species or commercial species group, anatomical part, edible status, preservation route, product temperature state, and packaging form. Non-edible offal, fish meal, extracted oils, gelatin or collagen, pet food, feed, pharmaceuticals, whole fish, fillets, and cooked composite dishes are outside this PCR unless they cross the foreground boundary as an explicitly named input, co-product, or waste.

Food-safety controls are mandatory operational constraints but are not substitutes for jurisdiction-specific legal compliance. Numeric safety limits shall be taken from the applicable product, process, and market rules and shall not be inferred from the provisional LCA QA ranges in this candidate PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-fish-offal-fish-fins-heads-tails-maws-and-other-edible-fish-offal |
| classification_refs | CPC 3.0: 21234, exact |
| covered_products | Fish fins, heads, tails, maws or swim bladders, and other declared edible fish offal sold for human consumption |
| excluded_products | Non-edible offal; fish meal; fish oil; gelatin or collagen; feed, pet-food, pharmaceutical, or fertilizer products; whole fish and fillets; composite prepared meals |
| representative_product | Packed edible fish offal in the declared anatomical and preservation form at the processor gate |
| production_route | Separation or receipt -> sorting and preparation -> route-specific preservation or stabilization -> packing -> processor-gate release |
| market_state | Declared chilled, frozen, salted, brined, dried, smoked, or combined preserved state, fit for human consumption |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish offal in the declared anatomical, species, preservation, and packaging form |
| How much | 1 kg net product mass |
| How well | Fit for human consumption and meeting the declared product specification and applicable food-safety requirements |
| How long or cycle | One processor-gate product output; no service duration |
| reference_flow_link | `rf_edible_fish_offal` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product mass |
| Reference product flow | Edible fish offal, fish fins, heads, tails, maws and other edible fish offal `be045cb1-719b-41b1-9bec-bf27cf50c401` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or declared commercial species group; anatomical part; edible status; preservation route; chilled or frozen state and target temperature where applicable; salt, brine, drying, or smoking treatment where applicable; net mass basis; packaging form; processor-gate geography and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net edible product, excluding packaging, as the reference flow. |
| `wet_dry_salt_basis` | Product and material mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each mass is as-received, drained, wet, dry, or salt-inclusive; do not combine unlike bases without a recorded conversion. |
| `water_volume_conversion` | Metered water | Mass or volume | kg or m3 | Preserve measured volume where available; when converting water volume to mass, record the density assumption and measurement temperature. |
| `energy_carrier_separation` | Electricity and fuels | Energy or mass/volume appropriate to the carrier | kWh, MJ, kg, or m3 | Keep electricity, purchased heat, and each fuel separate; record conversion factors and lower or higher heating-value basis where energy conversion is used. |
| `net_packaging_exclusion` | Reference product and packaging | Mass | kg | Packaging is an inventory input and shall not be included in the 1 kg net product reference amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Edible fish anatomical parts separated at an upstream fish-processing operation or received from a supplier, with species or commercial group, part, mass basis, temperature or preservation state, origin, and edible disposition declared |
| starting_condition_role | Foreground input condition for preparation and preservation of edible offal; upstream capture, aquaculture, landing, and primary fish-processing burdens remain represented by linked upstream datasets |
| product_classification_scope | Edible fish offal and listed edible fish anatomical parts prepared for human consumption; CPC 3.0 code 21234 is an exact classification reference |
| recursive_input_rule | An incoming edible-offal product already within this PCR category shall be recorded once as a product input and linked to its upstream dataset; do not recreate its upstream preparation inventory inside the receiving process |
| upstream_dataset_requirement | Require a representative upstream dataset for the incoming fish or separated offal, including the allocation applied at the point where edible offal is separated from the main fish product |
| disclosure | Declare species or group, anatomical part, origin, incoming condition, preservation route, food-safety disposition, cut-off, allocation, packaging, storage duration, geography, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_include_foreground_operations` | All foreground routes | Include receiving, sorting, washing or trimming, route-specific chilling/freezing, salting/brining, drying, smoking or other declared stabilization, packing, on-site storage, utility use, rejects, wastewater, and direct refrigerant or combustion emissions when these operations occur. | `codex-cxc-52-2003` |
| `sb_link_upstream_supply` | Incoming fish or separated edible offal | Link upstream capture or aquaculture, landing, transport, and primary fish-processing burdens through representative upstream datasets rather than omitting them. | `eu-pef-2021` |
| `sb_exclude_downstream_by_default` | Processor-gate study | Exclude distribution, retail, consumer storage, cooking, consumption, and end-of-life unless the declared study goal extends the boundary; disclose every extension. | `eu-pef-2021` |
| `sb_food_safety_records` | Product-contact and preservation operations | Retain process control and food-safety records needed to demonstrate that the offal remained intended and suitable for human consumption; apply the product- and market-specific legal controls. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving, sorting, washing, and preparation | required | Always; individual washing, trimming, and icing operations are recorded when performed | Establishes edible product identity and prepared intermediate mass | kg prepared edible offal |
| `preservation_packing` | Preservation, stabilization, storage, and packing | required | At least one declared preservation or stabilization route; route-specific inputs apply only when used | Produces the packed processor-gate reference product | 1 kg net edible fish offal output |

### Process: Receiving, sorting, washing, and preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Incoming edible fish parts (`incoming_edible_parts`)

Record separated edible offal or fish parts entering foreground preparation, including supplier, species or group, anatomical part, incoming state, and the upstream dataset link.

- Selected flow: Incoming edible fish offal or fish parts; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass accepted into the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional incoming-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg/kg reference product
  - Basis: incoming wet or as-received mass per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and product-contact water (`preparation_water`)

Record metered water crossing the process boundary for washing, rinsing, de-salting, or product-contact preparation; keep sanitation water separable when feasible.

- Selected flow: Process water; Tiangong UUID pending review
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured water use allocated to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional water-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: water supplied per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice used during handling (`handling_ice`)

Record purchased or on-site produced ice used for product temperature control and avoid double counting its embedded water and ice-making electricity.

- Selected flow: Ice; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured ice issued to the lot, net of recovered and separately measured unused ice where justified
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_inputs`
- Range: Provisional ice-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg reference product
  - Basis: ice used per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared edible offal intermediate (`prepared_offal_intermediate`)

Record the weighed edible intermediate transferred to preservation and keep its state and mass basis consistent with the receiving mass balance.

- Selected flow: Prepared edible fish offal intermediate; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`

##### Waste flows

###### Rejected or non-edible fish residues (`preparation_residues`)

Record trimmings, rejected parts, spoiled material, and other residues by destination and legal classification; do not relabel an economically sold co-product as waste.

- Selected flow: Fish-processing residues; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated residue mass by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`
- Range: Provisional residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: kg/kg reference product
  - Basis: preparation residues per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including product solids and salt where relevant, and link it to the actual treatment route.

- Selected flow: Fish-processing wastewater; Tiangong UUID pending review
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or a documented water-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_wastewater`
- Range: Provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg/kg reference product
  - Basis: wastewater discharged per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Preservation, stabilization, storage, and packing (`preservation_packing`)

#### Inputs

##### Product flows

###### Prepared edible offal input (`prepared_offal_input`)

Transfer the prepared intermediate without adding another upstream burden; the row closes the foreground process link.

- Selected flow: Prepared edible fish offal intermediate; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: equal to the measured output transferred from `receiving_preparation`, adjusted only for documented inter-process storage loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_balance`

###### Salt or brine ingredients (`salt_brine_input`)

Record salt and prepared brine separately when salting, brining, de-salting, or salt-assisted preservation occurs.

- Selected flow: Salt and brine ingredients; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured net issue to the lot, with brine concentration and recovery declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_inputs`
- Range: Provisional salt-equivalent QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: salt-equivalent input per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smoking material (`smoking_material`)

Record wood, chips, condensate, smoke flavouring, or other smoking material only for the declared route, with direct emissions separately inventoried where applicable.

- Selected flow: Smoking material; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured material consumed by the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_inputs`
- Range: Provisional smoking-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: smoking material consumed per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity (`electricity_input`)

Record metered or allocated electricity for preparation support, refrigeration, freezing, drying, smoking, ventilation, storage, and packing without double counting on-site generation fuel.

- Selected flow: Electricity, market-specific; Tiangong UUID pending review
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented allocation from facility meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 10
  - Unit: kWh/kg reference product
  - Basis: electricity used per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased heat or fuel (`thermal_energy_input`)

Record purchased heat and each fuel separately for drying, smoking, hot-water generation, or other thermal operations.

- Selected flow: Purchased heat or process fuel; Tiangong UUID pending review
- Flow property / unit: Energy, mass, or volume / MJ, kg, or m3
- Amount rule: metered heat or measured fuel issue converted with a documented factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ/kg reference product
  - Basis: purchased thermal energy per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_input`)

Record primary, secondary, and tertiary packaging by material and net supplied mass; reusable packaging shall include trip count and loss assumptions.

- Selected flow: Packaging material by type; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material or measured packaging use, net of separately recorded internal scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Range: Provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: packaging supplied per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant make-up (`refrigerant_makeup`)

Record refrigerant purchased or added to equipment serving the product route and allocate it using service records, equipment charge, operating time, or another disclosed driver.

- Selected flow: Refrigerant by substance; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: calculated product share of documented refrigerant make-up
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Range: Provisional refrigerant-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg/kg reference product
  - Basis: refrigerant make-up attributed per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed edible fish offal reference product (`rf_edible_fish_offal`)

This is the net processor-gate output realizing the functional unit; packaging mass is excluded from its amount.

- Selected flow: Edible fish offal, fish fins, heads, tails, maws and other edible fish offal `be045cb1-719b-41b1-9bec-bf27cf50c401`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net edible product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Preservation and packaging wastes (`preservation_wastes`)

Record product losses, spent brine or salt, ash, smoking residues, and packaging scrap separately by treatment or recovery destination.

- Selected flow: Preservation and packaging wastes by material; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass or documented mass-balance result
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_wastewater`

###### Preservation wastewater (`preservation_wastewater`)

Record discharged brine, cleaning water, thawing water, and other route-specific wastewater with salinity or relevant treatment attributes where available.

- Selected flow: Preservation-process wastewater; Tiangong UUID pending review
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured discharge or documented water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_wastewater`
- Range: Provisional preservation-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: wastewater discharged per 1 kg net finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refrigerant emissions (`refrigerant_emissions`)

Report each refrigerant substance emitted to air from equipment serving the declared route; do not report make-up as both a product input and an elementary emission unless the system model requires both linked representations.

- Selected flow: Refrigerant emission to air by substance; Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: calculated from service records and inventory balance under `calc_refrigerant_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid_by_subdivision` | Shared fish-processing and preservation operations | Prefer process subdivision, submetering, and lot-specific mass records so burdens can be assigned directly before allocation. | `eu-pef-2021` |
| `al_upstream_separation` | Incoming edible offal separated with a main fish product | Require the upstream dataset to disclose the separation point and allocation. Where a measurable physical causal relation supports joint production, apply it consistently; otherwise use an economic relation based on representative prices and report a sensitivity case. | `eu-pef-2021` |
| `al_foreground_coproducts` | Saleable products leaving the foreground route | Treat an output as a co-product only when it has a demonstrated market or intended beneficial use. Allocate shared burdens with the selected physical or economic driver and report quantities, prices or physical parameters, reference period, and sensitivity. | `eu-pef-2021` |
| `al_waste_and_credits` | Wastes, recovered materials, and energy | Keep waste handling burdens in the foreground system. Do not apply avoided-burden or recycling credits unless the declared study method explicitly requires them; disclose the formula and prevent double counting. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | `receiving_preparation`; `preservation_packing` | incoming, intermediate, product, residue, and loss masses | weighbridge, scale, lot, and stock records | lot_id; species_or_group; anatomical_part; state; gross_mass; tare; net_mass; moisture_or_drained_basis; disposition | calibrated scales and reconciled lot records | kg | each lot; monthly reconciliation | representative continuous 12-month period or declared campaign | all foreground lines and storage steps in scope | sum net mass by homogeneous product route; normalize to accepted net reference output | calibration records; stock reconciliation; rejected-lot log; mass-balance closure |
| `cp_water_energy` | both processes | water, electricity, heat, and fuels | meters, invoices, and equipment logs | meter_id; opening; closing; unit; fuel_type; heating_value_basis; allocation_driver; production_mass | submeter first; otherwise documented facility-meter allocation | native unit and normalized kg, m3, kWh, or MJ | meter interval and monthly | same period as production, covering seasonal operation | all equipment serving the declared route | subtract documented non-production use; allocate shared use with operating time, throughput, or another causal driver | meter checks; invoices; conversion factors; allocation worksheet |
| `cp_preservation_inputs` | `preservation_packing` | ice, salt, brine, smoking material, and route-specific additives | issue, recipe, tank, and batch records | lot_id; material; mass; concentration; recovered_mass; route; batch_output | weighed issue and recipe or tank balance | kg | each batch | same period as production | all declared preservation routes | net consumed amount divided by net reference output | scale calibration; recipe authorization; brine concentration or recovery record |
| `cp_packaging` | `preservation_packing` | primary, secondary, and tertiary packaging | bills of material, purchase, and scrap records | material; unit_mass; units_used; scrap; reuse_cycles; loss_rate | item count times verified unit mass, reconciled to issues and scrap | kg | each specification change; monthly aggregation | same period as production | all packaging used for the reference product | net packaging supplied divided by net product; reusable packaging allocated by verified trips | specification sheet; unit-mass check; scrap log; reuse evidence |
| `cp_waste_wastewater` | both processes | solid waste, residues, wastewater, and destinations | scales, manifests, meters, laboratory, and treatment records | waste_type; mass_or_volume; destination; date; salinity_or_relevant_parameter; treatment | direct measurement preferred; documented material or water balance otherwise | kg or m3 | each collection or discharge; monthly aggregation | same period as production | all foreground waste and discharge points | aggregate by composition and destination; no netting against co-products | manifests; meter records; treatment invoices; balance reconciliation |
| `cp_refrigerant` | `preservation_packing` | refrigerant make-up and direct loss | service and refrigerant stock records | substance; equipment_id; charge; opening_stock; purchases; additions; recovery; closing_stock; service_date; allocation_driver | annual inventory balance reconciled to service records | kg by substance | each service event; annual balance | at least the production reference period | all cooling and freezing equipment serving the route | calculate loss by substance and allocate using causal equipment service or operating data | technician records; purchase invoices; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_output` | Reference product | net product mass = gross packed mass - packaging tare; normalize all flows by total conforming net product mass | gross packed mass; tare; rejected output | kg net reference product |  |
| `calc_normalized_flow` | Every quantitative inventory row | normalized amount = amount attributable to homogeneous route / kg net reference product output | collected amount; allocation driver; net output | amount per kg reference product | `eu-pef-2021` |
| `calc_mass_balance` | Both processes | incoming material + added materials = product + co-products + wastes + measured stock change + quantified losses, using consistent wet, dry, drained, and salt bases | all mass rows; stock change; basis conversions | mass-balance closure and unexplained difference |  |
| `calc_refrigerant_loss` | Refrigeration equipment | loss by substance = opening stock + purchases - closing stock - recovered stock, reconciled to equipment additions; allocate only the route-attributable share | refrigerant inventory and service records; allocation driver | kg refrigerant emitted per kg reference product |  |
| `calc_allocation_share` | Joint operations | allocation share = declared product driver / sum of the same driver for all co-products; apply one consistent driver to shared burdens | product masses or other physical driver; representative net revenues where economic allocation is used | dimensionless allocation share | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and reference flow | Record species or group, anatomical part, edible status, route, product state, net-mass basis, packaging, geography, and period. | product specification; lot records; label; flow UUID confirmation |
| `dq_temporal` | Foreground activity data | Use a representative 12-month period where continuous production exists, or disclose the complete campaign and seasonal limitation. | dated meter, lot, invoice, stock, and production records |
| `dq_completeness` | Process inventory | Cover all in-scope process steps, declare the achieved coverage of attributable foreground mass and energy, and disclose every omitted or estimated remainder rather than silently cutting it off. | coverage table; meter map; mass and energy reconciliation |
| `dq_mass_balance` | Material flows | Reconcile incoming mass, additions, product, co-products, wastes, stock change, moisture change, and losses; declare and justify the site-specific reconciliation tolerance and investigate differences outside it. | signed balance worksheet and basis conversions |
| `dq_route_representativeness` | Preservation route | Do not combine chilled/frozen, salted/brined, dried, and smoked routes without production-weighted data and explicit route shares. | route-level production and utility records |
| `dq_source_hierarchy` | Estimated or secondary values | Prefer site and supplier records; identify every proxy, reasoned estimate, and secondary dataset and state the replacement plan or uncertainty. | data-source register and quality assessment `eu-pef-2021` |
| `dq_food_safety_traceability` | Edible disposition and preservation | Retain traceability, temperature or preservation-control, sanitation, rejection, and corrective-action records required for the declared product and market. | HACCP or equivalent control records; lot release records `codex-cxc-52-2003` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow` | Reference product | Verify exactly one reference output of 1 kg net edible fish offal with the specified product-flow, Mass-property, unit-group UUIDs, and all required qualifiers. |  |
| `vr_scope_route` | Product identity and boundary | Verify the dataset represents edible fish offal for human consumption, declares one or more preservation routes, and includes every performed foreground step and linked upstream supply. | `unsd-cpc-3-2025`; `codex-cxc-52-2003` |
| `vr_mass_balance` | All mass flows | Verify consistent mass bases, a documented mass balance, and a justified site-specific reconciliation tolerance; a difference outside that tolerance shall produce a finding. |  |
| `vr_energy_water_waste` | Foreground inventory | Verify water, ice, energy, salt or brine, smoking material, packaging, waste, wastewater, and refrigerant rows are present when applicable, with collected values or an explicit justified zero or non-applicability statement. | `codex-cxc-52-2003`; `eu-pef-2021` |
| `vr_allocation` | Shared and joint operations | Verify allocation choice, driver, co-product set, upstream separation treatment, and sensitivity are disclosed and no burden or credit is double counted. | `eu-pef-2021` |
| `vr_estimate_disclosure` | Provisional data | Verify every use of a provisional range is labelled `reasoned_estimate`; such ranges are screening flags, not evidence of conformity, and require replacement or uncertainty disclosure. |  |
| `vr_food_safety_disclosure` | Route controls | Verify applicable food-safety control records and market-specific numeric limits are identified; do not validate legal compliance from this PCR's LCA QA ranges. | `codex-cxc-52-2003` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for packed edible fish offal at the processor gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and quality disclosure |
| allowed_use | Product-footprint and LCA modelling for the declared species or group, anatomical part, preservation route, geography, technology, and period |
| excluded_use | Whole-fish, fillet, fish-meal, fish-oil, gelatin, feed, pet-food, pharmaceutical, composite-meal, or unrepresented preservation routes; legal food-safety conformity assessment |
| required_metadata | PCR id; product-flow UUID; species or group; anatomical part; edible status; preservation route; product temperature/state; packaging; net-mass basis; geography; technology; reference period; upstream dataset; allocation; cut-off; route shares |
| required_quality_disclosure | Record coverage; mass-balance closure; meter and scale quality; route representativeness; estimates and proxies; reasoned-estimate replacements; allocation sensitivity; food-safety record scope; unresolved UUIDs |
| update_trigger | Material change in species mix, anatomical part, preservation technology, energy system, packaging, yield, allocation, plant geography, legal control, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21234, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official classification title and product-category boundary context |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, current official Codex text indexed by FAO; https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | Fish-product hygiene process decomposition, handling and preservation controls, traceability, and food-safety record boundary |
| `eu-pef-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | Life-cycle boundary, data quality, allocation hierarchy, documentation, and sensitivity principles |
