---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-provisionally-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vegetables provisionally preserved

## 1. Scope and Applicability

This PCR covers factory-gate production of vegetables that are provisionally preserved as an intermediate product, remain unsuitable in that state for immediate consumption, and require further processing before consumption. It covers receipt and preparation of the vegetable, exactly one declared provisional-preservation route, and storage and dispatch. It excludes fresh, frozen, dried, ready-to-eat, canned or otherwise finally preserved vegetables and vegetables whose defining preservation route is vinegar or acetic acid.

The canonical category follows CPC 3.0 subclass 21330. The Tiangong flow `Tomato` is a narrower CPC-21330 representative: UUID `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` may identify only tomato datasets. A dataset for another vegetable requires a semantically appropriate Tiangong product flow before publication; the Tomato UUID shall not be reused for that dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-provisionally-preserved |
| classification_refs | CPC 3.0: 21330, Vegetables provisionally preserved |
| covered_products | vegetables provisionally preserved in a declared preservative solution or by a declared non-solution treatment; intermediate products unsuitable in that state for immediate consumption |
| excluded_products | fresh, frozen, dried, ready-to-eat, canned or otherwise finally preserved vegetables; vegetables preserved by vinegar or acetic acid as the defining finished-product route; fruit, nuts, pulses and potatoes outside the declared CPC scope |
| representative_product | provisionally preserved tomato; `Tomato` is a narrower representative and is not a generic flow for other vegetables |
| production_route | receipt and preparation; exactly one of solution preservation or gas/non-solution preservation; storage and factory-gate dispatch |
| market_state | bulk or non-retail intermediate product requiring further processing, with preservation medium, temperature and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provisionally preserved vegetable delivered as an intermediate input for further processing |
| How much | 1 kg of declared product mass at factory-gate handover |
| How well | vegetable identity, preparation state, selected preservation route, preservative identity and formulation, product-to-medium mass basis, packaging state and further-processing requirement are declared |
| How long or cycle | one production batch through the declared preservation and storage duration to factory-gate handover |
| reference_flow_link | the reference amount is the quantitative reference output of `storage_dispatch` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tomato `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | vegetable species and cultivar; tomato-only applicability of the selected UUID or verified replacement flow; vegetable form and preparation state; preservation route; preservative agent and formulation; gross, net or drained mass basis; accompanying medium included or excluded; storage temperature and duration; packaging state; factory-gate location; unsuitable-for-immediate-consumption status; required further processing |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. The reference amount includes preservation medium only when the declared product mass basis does so; vegetable mass and accompanying-medium mass shall be recorded separately.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg on the declared gross, net or drained product-mass basis and use that same basis for every normalized inventory amount. |
| `component_mass_separation` | vegetable and accompanying preservation medium | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate vegetable mass and accompanying-medium mass separately; disclose whether either component is included in the reference amount. |
| `batch_normalization` | all foreground inputs and outputs | applicable flow property | per kg reference product | Normalize batch totals by compliant reference-product mass at factory-gate handover; do not normalize by incoming raw-vegetable mass. |
| `formulation_measurement` | preservative medium and agent | mass or concentration property used by the facility | declared unit | Record the actual recipe, concentration basis, make-up quantity, recovered quantity and disposition; do not substitute a nominal recipe for a measured or controlled batch record. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground production | Include receipt, preparation, the one selected provisional-preservation route, storage and dispatch, together with all known material, water, energy, product, waste and direct elementary flows crossing those process boundaries. | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | preservation route | Select exactly one route for each modelled lot: `solution_preservation` or `gas_non_solution_preservation`. Do not model both as simultaneously occurring. A genuinely combined treatment is outside this candidate PCR until reviewed route-specific evidence expands the scope. |  |
| `boundary_upstream_links` | purchased inputs | Link representative upstream datasets for the incoming vegetable, water, preservative agents, energy, packaging and other purchased inputs; do not recreate those upstream processes inside the foreground. | `eu-pef-2021-2279` |
| `boundary_food_safety_controls` | food-contact operations | Include the activity records needed to describe and verify applicable GHP/HACCP controls, including water suitability, sanitation, formulation, time, temperature, pH or other facility-identified control parameters. | `codex-cxc-1-1969` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted fresh or otherwise declared pre-processed vegetable lot at the preserving facility gate |
| starting_condition_role | purchased product input with identity, condition, mass basis and upstream dataset declared |
| product_classification_scope | CPC 3.0 subclass 21330 intermediate vegetables provisionally preserved and unsuitable in that state for immediate consumption |
| recursive_input_rule | if an input is already a provisionally preserved vegetable in this same category, record it as a purchased starting-condition input and link a separate upstream dataset; do not repeat its earlier preservation operations in this foreground |
| upstream_dataset_requirement | representative datasets are required for all purchased vegetables, preservative agents, water, energy, packaging and waste-treatment services |
| disclosure | declare vegetable identity, incoming condition, route, formulation, reference-mass basis, accompanying medium, storage conditions, factory gate, exclusions and all data gaps or temporary estimates |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt_preparation | Vegetable receipt and preparation | required |  | foreground preparation | kg prepared vegetable leaving the process |
| solution_preservation | Solution provisional-preservation route | conditional | include only when the lot is preserved by immersion or contact with a declared preservative solution; exclude the gas/non-solution route | foreground preservation | kg solution-preserved intermediate leaving the process |
| gas_non_solution_preservation | Gas or non-solution provisional-preservation route | conditional | include only when the lot is preserved by a declared gas or other non-solution treatment; exclude the solution route | foreground preservation | kg treated intermediate leaving the process |
| storage_dispatch | Storage and factory-gate dispatch | required |  | foreground finishing | 1 kg reference product at factory-gate handover |

### Process: Vegetable receipt and preparation (`receipt_preparation`)

#### Inputs

##### Product flows

###### Accepted incoming vegetable lot (`incoming_vegetable`)

Record the accepted vegetable mass and its species, cultivar, condition and supplier-lot identity. Use a semantically appropriate product flow for the actual vegetable.

- Selected flow: Incoming vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: calibrated-scale mass of accepted vegetable lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product at factory-gate handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_vegetable`
- Sources:
- Range: Representative-batch incoming-vegetable intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg reference product
  - Basis: per kg reference product at factory-gate handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Preparation water (`preparation_water`)

Record water entering washing, rinsing or other preparation operations when it crosses the foreground boundary.

- Selected flow: Water supply, facility-appropriate product flow
- Flow property / unit: Mass / kg
- Amount rule: metered water supplied to the process, less separately metered water routed outside the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared vegetable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `codex-cxc-1-1969`
- Range: Representative-batch preparation-water intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg prepared vegetable
  - Basis: per kg prepared vegetable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs

##### Product flows

###### Prepared vegetable routed to preservation (`prepared_vegetable`)

Record the mass of prepared vegetable released to exactly one declared preservation route.

- Selected flow: Prepared vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: calibrated-scale mass transferred to the selected preservation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared vegetable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prepared_vegetable`
- Sources:
- Range: Representative-batch preparation yield
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed prepared-vegetable mass per accepted input mass
  - Upper: maximum observed prepared-vegetable mass per accepted input mass
  - Unit: kg/kg accepted vegetable
  - Basis: per kg accepted incoming vegetable
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Removed vegetable matter and rejects (`preparation_rejects`)

Record trimmings, spoiled material and rejected vegetable fractions by actual destination; do not treat them as co-products without evidence of a product function and market.

- Selected flow: Vegetable preparation waste, destination-specific waste flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured mass by waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared vegetable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_rejects`
- Sources:
- Range: Representative-batch reject intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg prepared vegetable
  - Basis: per kg prepared vegetable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including its treatment destination and any separately measured entrained solids.

- Selected flow: Wastewater, treatment-specific waste flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or validated water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared vegetable output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_wastewater`
- Sources:
- Range: Representative-batch preparation-wastewater intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum measured or balanced value across the declared representative batch set
  - Upper: maximum measured or balanced value across the declared representative batch set
  - Unit: kg/kg prepared vegetable
  - Basis: per kg prepared vegetable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

### Process: Solution provisional-preservation route (`solution_preservation`)

This process is mutually exclusive with `gas_non_solution_preservation` for a modelled lot.

#### Inputs

##### Product flows

###### Prepared vegetable for solution treatment (`solution_route_vegetable`)

Record only prepared vegetable assigned to the solution route.

- Selected flow: Prepared vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the preparation output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg solution-preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solution_route_inputs`
- Sources:
- Range: Representative-batch solution-route vegetable intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg solution-preserved intermediate
  - Basis: per kg solution-preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Preservation solution and make-up agents (`preservation_solution`)

Record water, salt and every preservative or formulation component separately in the underlying data package, with actual recipe and concentration basis.

- Selected flow: Preservation solution components, component-specific product flows to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured make-up and replenishment mass less separately measured recovered solution reused in the same batch system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg solution-preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solution_route_inputs`
- Sources: `codex-cxc-1-1969`
- Range: Representative-batch solution-component intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed for each declared component across the representative batch set
  - Upper: maximum observed for each declared component across the representative batch set
  - Unit: kg/kg solution-preserved intermediate
  - Basis: per kg solution-preserved intermediate output, reported separately by component
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs

##### Product flows

###### Solution-preserved vegetable intermediate (`solution_preserved_intermediate`)

Record treated vegetable and accompanying medium on separately measured mass bases before combination into any declared shipped-product mass.

- Selected flow: Provisionally preserved vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured vegetable mass plus only the accompanying medium included by the declared product-mass basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg solution-preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solution_product_mass`
- Sources:
- Range: Representative-batch solution-route yield
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed output mass per prepared-vegetable input mass
  - Upper: maximum observed output mass per prepared-vegetable input mass
  - Unit: kg/kg prepared vegetable
  - Basis: per kg prepared vegetable assigned to the solution route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Waste flows

###### Spent or purged preservation solution (`spent_solution`)

Record the mass and destination of solution purged from the process; reused solution remaining within the same batch system is not a boundary output.

- Selected flow: Spent preservation solution, treatment-specific waste flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured purge mass or validated solution mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg solution-preserved intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_solution`
- Sources:
- Range: Representative-batch spent-solution intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum measured or balanced value across the declared representative batch set
  - Upper: maximum measured or balanced value across the declared representative batch set
  - Unit: kg/kg solution-preserved intermediate
  - Basis: per kg solution-preserved intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

### Process: Gas or non-solution provisional-preservation route (`gas_non_solution_preservation`)

This process is mutually exclusive with `solution_preservation` for a modelled lot.

#### Inputs

##### Product flows

###### Prepared vegetable for gas or non-solution treatment (`gas_route_vegetable`)

Record only prepared vegetable assigned to this route.

- Selected flow: Prepared vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the preparation output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg gas/non-solution-treated intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_route_inputs`
- Sources:
- Range: Representative-batch gas-route vegetable intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg treated intermediate
  - Basis: per kg gas/non-solution-treated intermediate output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

###### Gas or non-solution preservative agent (`gas_route_agent`)

Record each actual treatment agent and carrier separately; no particular chemical is mandatory under this candidate PCR.

- Selected flow: Preservative agent, agent-specific product flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass from batch issue, cylinder change or calibrated dosing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg gas/non-solution-treated intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_route_inputs`
- Sources: `codex-cxc-1-1969`
- Range: Representative-batch treatment-agent intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed for each declared agent across the representative batch set
  - Upper: maximum observed for each declared agent across the representative batch set
  - Unit: kg/kg treated intermediate
  - Basis: per kg gas/non-solution-treated intermediate output, reported separately by agent
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

#### Outputs

##### Product flows

###### Gas or non-solution treated vegetable intermediate (`gas_treated_intermediate`)

Record the measured treated vegetable mass and declared treatment condition.

- Selected flow: Provisionally preserved vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: calibrated-scale mass released from the declared treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg gas/non-solution-treated intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_product_mass`
- Sources:
- Range: Representative-batch gas/non-solution route yield
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed output mass per prepared-vegetable input mass
  - Upper: maximum observed output mass per prepared-vegetable input mass
  - Unit: kg/kg prepared vegetable
  - Basis: per kg prepared vegetable assigned to this route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

##### Elementary flows

###### Uncaptured treatment-agent release (`treatment_agent_release`)

Include only an actual direct release crossing to air, water or soil. Identify the substance and compartment; do not equate charged agent mass with emitted mass.

- Selected flow: Substance- and compartment-specific elementary flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or calculation from charged, retained, recovered and captured quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg gas/non-solution-treated intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_treatment_agent_release`
- Sources:
- Range: Representative-batch direct-release intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum measured or balanced release across the declared representative batch set
  - Upper: maximum measured or balanced release across the declared representative batch set
  - Unit: kg/kg treated intermediate
  - Basis: per kg gas/non-solution-treated intermediate output, separately by substance and compartment
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Collected record (`collected_record`)

### Process: Storage and factory-gate dispatch (`storage_dispatch`)

#### Inputs

##### Product flows

###### Intermediate from the selected preservation route (`selected_route_intermediate`)

Record output from exactly one preservation route and preserve the route identifier in the batch link.

- Selected flow: Provisionally preserved vegetable, product-specific Tiangong flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: measured route-output mass received into storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product at factory-gate handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_selected_route_intermediate`
- Sources:
- Range: Representative-batch storage-input intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across the declared representative batch set
  - Upper: maximum observed across the declared representative batch set
  - Unit: kg/kg reference product
  - Basis: per kg reference product at factory-gate handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Packaging supplied to the product (`dispatch_packaging`)

Record primary, secondary and transport packaging that remains with the dispatched product, separately by material and reuse status.

- Selected flow: Packaging material, material-specific product flow to be selected
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued packaging mass allocated to dispatched compliant product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product at factory-gate handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_packaging`
- Sources:
- Range: Representative-batch packaging intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed by packaging configuration across the declared representative batch set
  - Upper: maximum observed by packaging configuration across the declared representative batch set
  - Unit: kg/kg reference product
  - Basis: per kg reference product at factory-gate handover, separately by material
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Metered storage and dispatch electricity (`dispatch_electricity`)

Use this row when representative meters or a validated submeter allocation are available. It is mutually exclusive with `unmetered_energy_screening` for the same equipment and time interval.

- Selected flow: Electricity supply, geography- and voltage-appropriate product flow to be selected
- Flow property / unit: Energy / kWh
- Amount rule: metered consumption attributable to storage and dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product at factory-gate handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_energy`
- Sources:
- Range: Representative-batch metered electricity intensity
  - Range role: Typical range (`typical_range`)
  - Lower: minimum observed across representative storage-duration and operating-condition strata
  - Upper: maximum observed across representative storage-duration and operating-condition strata
  - Unit: kWh/kg reference product
  - Basis: per kg reference product at factory-gate handover
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Collected record (`collected_record`)

###### Temporary unmetered energy screening estimate (`unmetered_energy_screening`)

Use only for candidate screening when the same equipment and time interval are not represented by `dispatch_electricity`: estimate electricity as equipment nameplate power multiplied by logged operating hours and a documented load factor, divided by compliant output. This is a provisional `reasoned_estimate`, not a conformity value. Replace it when representative-batch metering, a validated facility energy balance or reviewed transferable evidence becomes available.

- Selected flow: Electricity supply, geography- and voltage-appropriate product flow to be selected
- Flow property / unit: Energy / kWh
- Amount rule: sum(nameplate kW × logged operating h × documented load factor) / compliant reference-product kg
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg reference product at factory-gate handover for the declared equipment and operating scenario
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Sources:
- Range: Temporary equipment-scenario screening interval
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: calculated minimum across declared plausible equipment load scenarios
  - Upper: calculated maximum across declared plausible equipment load scenarios
  - Unit: kWh/kg reference product
  - Basis: per kg reference product for the declared equipment, operating hours and storage duration
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Provisionally preserved vegetable at factory gate (`reference_product_output`)

This is the quantitative reference output. For the representative tomato dataset use the selected Tiangong flow; another vegetable requires a semantically appropriate flow before publication.

- Selected flow: Tomato `4dc258f9-c5fc-47d7-821e-12526fe6b5d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg on the declared product-mass basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product at factory-gate handover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `eu-pef-2021-2279`
- Range: Fixed reference-flow amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | route and process-specific burdens | Avoid allocation by separately recording preparation, the selected preservation route, storage and dispatch, and by submetering or subdividing shared operations where feasible. | `eu-pef-2021-2279` |
| `allocation_physical` | inseparable shared operations | If subdivision is not feasible, allocate by a documented relevant physical relationship that reflects causality, such as metered operating time, treated mass or occupied storage capacity and duration. Report the factor and all quantities used. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | remaining multifunctionality | Use another relationship, including economic allocation, only after documenting why subdivision/system expansion and a relevant physical relationship are not feasible; disclose prices, period and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rejects` | vegetable rejects, spent solution and treatment residues | Treat a stream as waste and assign its treatment burden to the foreground unless a demonstrated product function and destination support co-product treatment; do not claim an avoided burden by default. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_incoming_vegetable | receipt_preparation | accepted incoming vegetable lot | receiving and scale record | lot id; species; cultivar; supplier; incoming condition; gross mass; tare; accepted mass; timestamp | calibrated scale linked to receiving record | kg | per lot | declared representative production period | all supplying lots for the foreground site | sum accepted mass by product and batch; normalize to reference output | scale calibration; lot traceability; rejection record |
| cp_preparation_water | receipt_preparation | preparation water | water-meter record | meter id; opening; closing; batch id; routed-away water | calibrated meter or verified vessel-volume log | kg | per batch or continuous meter interval | declared representative production period | all preparation lines in scope | subtract separately routed water and normalize to prepared output | meter calibration or vessel verification; batch linkage |
| cp_prepared_vegetable | receipt_preparation | prepared vegetable | transfer-scale record | batch id; vegetable identity; gross mass; tare; net mass; destination route | calibrated scale at route transfer | kg | per batch transfer | declared representative production period | all preparation lines in scope | sum net transfer mass by selected route | scale calibration; route reconciliation |
| cp_preparation_rejects | receipt_preparation | removed vegetable matter and rejects | waste log | batch id; waste type; mass; destination; timestamp | calibrated scale or destination weigh ticket | kg | per waste movement | declared representative production period | all preparation lines in scope | sum separately by destination and normalize to prepared output | scale calibration; transporter or treatment receipt |
| cp_preparation_wastewater | receipt_preparation | preparation wastewater | discharge and water-balance record | batch id; discharge meter; water input; retained water; entrained solids; destination | discharge meter or validated input-output balance | kg | per batch or discharge interval | declared representative production period | all preparation lines in scope | measured discharge, or water input minus measured retained/routed quantities | meter calibration; signed mass-balance review |
| cp_solution_route_inputs | solution_preservation | solution-route vegetable and formulation inputs | recipe and issue record | batch id; vegetable mass; component id; component mass; concentration basis; replenishment; recovered reuse | calibrated dosing, scale and recipe-control records | kg | per solution batch | declared representative production period | every solution-preservation line in scope | sum each component separately; subtract only measured same-system reuse | scale/doser calibration; approved recipe; batch reconciliation |
| cp_solution_product_mass | solution_preservation | solution-preserved intermediate | product and medium mass record | batch id; vegetable mass; accompanying-medium mass; product-mass basis; release timestamp | calibrated scale with separate component measurement or validated component mass balance | kg | per batch release | declared representative production period | every solution-preservation line in scope | combine components only as specified by the declared reference-mass basis | calibration; batch release; component reconciliation |
| cp_spent_solution | solution_preservation | spent or purged solution | purge and destination record | batch id; purge mass; recovered mass; treatment destination; solids content if measured | calibrated tank/scale record or validated solution balance | kg | per purge | declared representative production period | every solution-preservation line in scope | sum purge by destination and normalize to route output | calibration; balance closure; treatment receipt |
| cp_gas_route_inputs | gas_non_solution_preservation | gas-route vegetable and treatment agents | treatment batch record | batch id; vegetable mass; agent identity; charged mass; carrier mass; dose setting; cylinder or inventory change | calibrated scale, dosing system or reconciled cylinder/inventory record | kg | per treatment batch | declared representative production period | every gas/non-solution line in scope | sum each agent separately and normalize to treated output | scale/doser calibration; inventory reconciliation; approved treatment specification |
| cp_gas_product_mass | gas_non_solution_preservation | gas/non-solution-treated intermediate | release-scale record | batch id; product identity; gross mass; tare; net mass; treatment condition | calibrated scale at treatment release | kg | per batch release | declared representative production period | every gas/non-solution line in scope | sum compliant released mass | calibration; batch release record |
| cp_treatment_agent_release | gas_non_solution_preservation | uncaptured treatment-agent release | emission measurement or agent balance | batch id; substance; compartment; charged; retained; recovered; captured; measured release; method | direct monitor where available, otherwise validated agent balance | kg | per batch or monitoring interval | declared representative production period | every emission point in scope | report separately by substance and compartment; do not use charged mass as release | monitor calibration or signed balance and capture-efficiency evidence |
| cp_selected_route_intermediate | storage_dispatch | intermediate from selected route | storage receiving record | batch id; route id; product identity; vegetable mass; medium mass; total received mass; timestamp | calibrated receiving scale and batch-link record | kg | per storage intake | declared representative production period | all in-scope storage intakes | accept one route id per lot and sum received mass | scale calibration; route genealogy; duplicate-route check |
| cp_dispatch_packaging | storage_dispatch | packaging supplied to product | packaging issue record | batch id; material id; packaging mass; units; reuse status; product mass | purchase/issue records checked by sample weighing | kg | per packaging configuration and batch | declared representative production period | all packaging used for dispatched product | sum by material and reuse status; normalize to dispatched product | invoice/issue record; sample-scale calibration |
| cp_dispatch_energy | storage_dispatch | metered storage and dispatch electricity | energy-meter record | meter id; opening; closing; interval; batch ids; storage duration; allocation driver | calibrated dedicated meter or validated submeter allocation | kWh | continuous or per dispatch interval | representative seasons and operating modes in the declared period | all storage and dispatch equipment in scope | subtract out-of-scope loads; allocate by documented causal driver; normalize to dispatched product | meter calibration; load map; allocation reconciliation |
| cp_final_product_mass | storage_dispatch | provisionally preserved vegetable at factory gate | dispatch-scale and release record | batch id; vegetable identity; route; product-mass basis; vegetable mass; medium mass; gross mass; tare; compliant net mass; gate; timestamp | calibrated dispatch scale linked to release certificate | kg | per dispatched lot | declared representative production period | all compliant factory-gate output | sum compliant mass on one declared basis; normalize all inventory to 1 kg | calibration; release certificate; route and formulation traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every batch inventory amount | normalized amount = batch amount / compliant factory-gate product mass on the declared basis × 1 kg | applicable collection protocol; cp_final_product_mass | amount per kg reference product | `eu-pef-2021-2279` |
| `calc_component_mass` | shipped solution-route product | declared product mass = measured vegetable mass + measured accompanying-medium mass only when that medium is included by the declared mass basis | cp_solution_product_mass | kg declared product and separate component fractions |  |
| `calc_route_mass_balance` | each foreground process | reconcile measured inputs = product outputs + waste outputs + direct releases + measured inventory change; report residual and facility acceptance rationale | process-specific mass protocols | batch mass-balance residual and normalized flows |  |
| `calc_agent_release` | direct treatment-agent release | release = charged agent - agent retained in product - recovered agent - captured agent - closing inventory adjustment, separately by substance and compartment | cp_gas_route_inputs; cp_treatment_agent_release | kg direct elementary flow |  |
| `calc_unmetered_energy_screening` | temporary candidate energy estimate | estimate = sum(nameplate power × logged operating time × documented load factor) / compliant product mass; apply only to declared equipment and operating scenario, and never together with metered energy for the same interval | equipment nameplates; operating logs; documented load-factor rationale; cp_final_product_mass | provisional kWh/kg reasoned estimate |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product_identity | reference and intermediate product flows | Demonstrate semantic match between vegetable identity and selected Tiangong flow. UUID `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` is acceptable only for tomato datasets; another vegetable needs an appropriate flow before publication. | product specification; flow review; batch genealogy |
| dq_completeness | foreground inventory | Include all known inputs and outputs, with exclusions and residual mass-balance terms documented. | protocol coverage matrix; mass balance; `eu-pef-2021-2279` |
| dq_representativeness | activity data | State technological, geographical and time-related representativeness and precision; representative batches shall span declared operating modes, route, formulation and storage conditions. | sampling rationale; batch list; DQR record; `eu-pef-2021-2279` |
| dq_measurement | mass, water, agents, energy and releases | Retain calibration status, measurement method, unit conversions and batch linkage; do not mix gross, net and drained mass bases. | calibration certificates; raw records; reconciliation sheets |
| dq_food_control_records | formulation and preservation controls | Retain the actual product description and applicable GHP/HACCP monitoring evidence for water suitability, sanitation, formulation, time, temperature, pH or other identified controls. | approved specification; control records; `codex-cxc-1-1969` |
| dq_reasoned_estimate_replacement | unmetered energy screening | Mark the estimate provisional and limited to the declared equipment scenario. Replace it when representative-batch metering, a validated facility energy balance or reviewed transferable evidence becomes available; publication shall not rely on an unreviewed temporary estimate. | estimate sheet; replacement decision; meter or reviewed evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_semantics` | reference product flow | Fail if the dataset product is not tomato while the reference product UUID remains `4dc258f9-c5fc-47d7-821e-12526fe6b5d7`; require a verified semantically appropriate flow before publication. |  |
| `validate_route_exclusivity` | process selection | Require exactly one of `solution_preservation` and `gas_non_solution_preservation` for each lot; fail on neither, both, or an undeclared combined route. |  |
| `validate_product_state` | category applicability | Require evidence that the output is provisionally preserved, unsuitable in that state for immediate consumption and intended for further processing; otherwise reject CPC-21330 applicability. | `unsd-cpc-v3-21330` |
| `validate_reference_mass_basis` | reference and normalized amounts | Require one declared gross, net or drained mass basis, separate vegetable and medium masses, and consistent use of that basis in every normalization. |  |
| `validate_inventory_coverage` | foreground processes | Require all known material, water, energy, product, waste and direct elementary flows, with every exclusion and data gap disclosed. | `eu-pef-2021-2279` |
| `validate_mass_balance` | each batch and process | Require non-negative amounts and a documented mass-balance residual within the facility's declared acceptance criterion; investigate and disclose failures. |  |
| `validate_food_control_evidence` | applicable preservation controls | Require product description, intended use and applicable monitoring/verification records defined by the facility's GHP/HACCP system. | `codex-cxc-1-1969` |
| `validate_reasoned_estimate` | temporary unmetered energy row | Require declared equipment, operating hours, load-factor rationale, scenario bounds, temporary status and replacement trigger; fail publication if the estimate remains unreviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process data package for a provisionally preserved vegetable intermediate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | factory-gate datasets within CPC 21330 that match the declared vegetable, route, formulation, product-mass basis, storage conditions, geography and unsuitable-for-immediate-consumption state |
| excluded_use | fresh, frozen, dried, ready-to-eat or finally preserved vegetables; undeclared combined preservation routes; non-tomato datasets using the Tomato UUID; comparative assertions across unlike products, mass bases or routes without further review |
| required_metadata | vegetable species and cultivar; Tiangong flow and semantic review; CPC reference; route; formulation; vegetable and medium mass; reference-mass basis; batch and site; geography; storage temperature and duration; packaging; factory gate; further-processing requirement; temporal coverage; protocol coverage; allocation; exclusions |
| required_quality_disclosure | foreground-data coverage; calibration and reconciliation evidence; technological, geographical and temporal representativeness; precision; mass-balance residuals; food-control records; reasoned estimates and replacement status |
| update_trigger | change in vegetable or Tiangong flow; route, agent, formulation, equipment, storage, packaging, geography or allocation; representative-batch evidence replacing an estimate; revised CPC, Codex or PEF evidence; review finding affecting scope or controls |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21330` | standard | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21330 and official explanatory-notes publication, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | classification identity, applicability and product-state validation |
| `codex-cxc-1-1969` | standard | Codex Alimentarius, General Principles of Food Hygiene, CXC 1-1969, revised 2022, https://workspace.fao.org/sites/codex/Standards/CXC%201-1969/CXC_001e.pdf (retrieved 2026-08-11) | product and process description, GHP/HACCP controls, water suitability, monitoring and records |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 of 15 December 2021, Product Environmental Footprint method, http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-11) | functional unit, system boundary, inventory completeness, multifunctionality hierarchy and data quality |
