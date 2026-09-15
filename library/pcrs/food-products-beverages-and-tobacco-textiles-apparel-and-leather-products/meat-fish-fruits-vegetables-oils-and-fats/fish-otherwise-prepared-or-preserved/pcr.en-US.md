---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish, Otherwise Prepared or Preserved

## 1. Scope and Applicability

This PCR covers fish products that are prepared or preserved by routes not represented by a more specific fish-product PCR. The representative product is frozen surimi: stabilized, washed and dewatered minced fish protein intended for later food manufacture. The foreground boundary covers the receiving and storage of fish and ingredients, fish preparation and meat separation, repeated washing and dewatering, refining, final dewatering, mixing with declared adjuvant ingredients, packaging, freezing, metal detection, frozen storage, and preparation for dispatch.

The PCR also applies to another otherwise-prepared or preserved fish product only when the foreground data package replaces the representative route with the actual preparation or preservation steps and declares product form, species, formulation, preservation method, thermal treatment, storage state, and packaging. It excludes caviar and caviar substitutes, fish fillets or minced fish sold without the surimi washing/stabilization route, prepared crustaceans or molluscs, and downstream surimi-based foods such as formed seafood analogues. Fishing or aquaculture, production of purchased ingredients and packaging, distribution after the factory gate, retail, cooking, consumption, and end-of-life are outside the foreground boundary and require linked upstream or downstream datasets when included in the study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21242, Fish, otherwise prepared or preserved |
| covered_products | Frozen surimi and other fish products otherwise prepared or preserved when their actual route and market state are declared |
| excluded_products | Caviar and caviar substitutes; plain fish fillets or minced fish without the surimi route; crustacean or mollusc products; downstream formed, cooked, flavoured, or imitation seafood made from surimi |
| representative_product | Frozen surimi |
| production_route | Fish reception and temperature-controlled storage; preparation and meat separation; repeated washing and dewatering; refining; final dewatering; mixing with declared adjuvant ingredients; packaging; freezing; metal detection; frozen storage and dispatch |
| market_state | Frozen, packaged intermediate food ingredient at the manufacturing facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide frozen surimi as an intermediate fish-protein ingredient for subsequent food manufacturing |
| How much | 1 kg net mass of frozen surimi, excluding packaging |
| How well | Conforms to the declared fish species or species mix, formulation, additive system, moisture, gel-strength or commercial grade, contaminant and food-safety controls, packaging configuration, and frozen product specification |
| How long or cycle | One production batch at the factory gate; any frozen-storage duration represented before dispatch is declared separately |
| reference_flow_link | Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species mix; raw-fish state; product form; frozen or other preservation state; formulation and adjuvant ingredients; moisture basis; gel-strength or commercial grade; net mass and packaging configuration; facility geography; production period; frozen-storage duration; allocation method |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Missing qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Surimi reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to exactly 1 kg of conforming surimi net output at the declared factory gate. |
| `net_mass_excludes_packaging` | Reference product and packaged output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine product net mass independently from primary, secondary, and transport packaging mass; record packaging as separate product inputs and waste outputs. |
| `wet_mass_basis` | Fish, washed mince, residues, ingredients, product, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record masses on the as-received or as-discharged wet basis and retain moisture or solids measurements needed to compare differing states. |
| `energy_conversion` | Electricity and fuels | Energy property appropriate to the selected flow | kWh or MJ | Preserve the metered unit and conversion factor; do not mix delivered electricity, fuel lower heating value, and thermal output without an explicit conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fish and all purchased ingredients and packaging are received at the surimi manufacturing facility with supplier identity, quantity, product state, origin, and transport hand-off documented. |
| starting_condition_role | factory_gate_input |
| product_classification_scope | Frozen surimi represents CPC 3.0 code 21242; another otherwise-prepared or preserved fish product is covered only with its actual route and qualifiers declared. |
| recursive_input_rule | Purchased surimi or another product within the same PCR scope is recorded as a visible technosphere input linked to an upstream dataset and is not recursively re-manufactured inside this foreground system. |
| upstream_dataset_requirement | Link fish production, fishing or aquaculture, ingredients, packaging, electricity, fuels, refrigerants, water supply, and inbound transport to geographically and technologically appropriate upstream datasets. |
| disclosure | Declare fish species and origin, raw-fish state, facility geography, route variants, preservation state, reporting period, frozen-storage duration, treatment of same-category inputs, cut-offs, and allocation choices. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | representative frozen-surimi manufacture | Include the actual facility steps from raw-material reception through preparation, meat separation, repeated washing and dewatering, refining, final dewatering, ingredient mixing, packaging, freezing, metal detection, frozen storage, and dispatch preparation. | `codex-cxc-52-2003` |
| `boundary_supporting_operations` | foreground supporting activities | Include measured cleaning and sanitation, process-water supply, wastewater handling before hand-off, refrigeration, on-site energy use, packaging losses, and handling of fish residues when they serve the represented production. | `codex-cxc-52-2003` |
| `boundary_upstream_links` | purchased inputs | Represent purchased fish, ingredients, packaging, utilities, refrigerants, and inbound transport as product inputs linked to upstream datasets; do not treat their upstream burdens as zero. | `ghg-protocol-product-2011` |
| `boundary_route_variants` | non-representative products or routes | Replace non-applicable representative steps with the actual preparation or preservation operations and disclose every material omission, addition, and preservation-state difference. | `codex-cxc-52-2003` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surimi_manufacturing` | Frozen surimi manufacturing and factory-gate cold storage | required | Always for the representative frozen-surimi route | Transform received fish into packaged, frozen, dispatch-ready surimi and record utilities, residues, wastewater, packaging, and refrigerant losses | 1 kg net frozen surimi output |

### Process: Frozen surimi manufacturing and factory-gate cold storage (`surimi_manufacturing`)

#### Inputs

##### Product flows

###### Accepted fish raw material (`accepted_fish_input`)

Record the wet mass of accepted fish or fish flesh entering the represented manufacturing route after receipt inspection. Keep species, catch or farm origin, supplier, fresh or frozen state, and lot identity with the record.

- Selected flow: Fish raw material; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured accepted wet mass entering the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `codex-cxc-52-2003`
- Range: provisional accepted-fish input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning water (`process_water_input`)

Record metered or reconciled water supplied for washing and dewatering cycles, equipment and area cleaning, ingredient preparation, and other foreground uses. Keep process water separable from sanitation water when meters or batch records permit.

- Selected flow: Process water; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to the represented production and supporting operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `codex-cxc-52-2003`
- Range: provisional total-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Adjuvant and formulation ingredients (`ingredient_input`)

Record each cryoprotective, pH-control, texture, salt, sugar, polyhydric-alcohol, phosphate, or other formulation ingredient separately using the approved formulation and actual issue or weigh records.

- Selected flow: Individual formulation ingredient; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass less documented return to inventory for each ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `codex-cxc-52-2003`

###### Primary, secondary, and transport packaging (`packaging_input`)

Record packaging components separately by material and component type using purchase, issue, or packing-line count records and measured component mass.

- Selected flow: Packaging material by polymer, paper, metal, or pallet type; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: component count multiplied by verified component mass, reconciled to issued packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-52-2003`
- Range: provisional packaging QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`electricity_input`)

Record electricity used by meat separation, washing and dewatering, refining, mixing, packaging, freezing, metal detection, frozen storage, wastewater handling, cleaning, and allocated facility services.

- Selected flow: Market electricity appropriate to facility geography; exact Tiangong UUID pending review
- Flow property / unit: Energy / kWh
- Amount rule: metered consumption or reconciled equipment consumption assigned to the represented production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: provisional electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: kWh/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refrigerant makeup (`refrigerant_makeup_input`)

Record refrigerant charged to freezing and cold-storage equipment during the reporting period and identify the refrigerant substance.

- Selected flow: Refrigerant substance used at the facility; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant additions reconciled with service and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output during the reporting period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows

No waste input is expected for the representative route. If externally generated fish material or wastewater is accepted for treatment, record it as a separate waste input with its origin and treatment obligation.

##### Elementary flows

No direct elementary input is prescribed. Record groundwater, surface water, or other direct resource extraction only when it crosses the environment-to-foreground boundary at the facility.

#### Outputs

##### Product flows

###### Frozen surimi at the factory gate (`surimi_output`)

The reference output is conforming packaged frozen surimi ready for dispatch after the declared factory-gate storage period.

- Selected flow: Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net mass after normalization; preserve measured gross batch output before normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net mass reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Fish preparation and refining residues (`fish_residue_output`)

Record heads, viscera, bones, skin, scales, dark meat, refining rejects, insoluble solids, and other separated fish material by destination. A marketed material is treated as a co-product rather than waste and enters the allocation decision.

- Selected flow: Fish-processing residues by physical form and treatment route; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured or mass-balance-calculated wet mass dispatched to each treatment or recovery route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_records`
- Sources: `codex-cxc-52-2003`
- Range: provisional fish-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process wastewater (`wastewater_output`)

Record wastewater from washing, dewatering, sanitation, thawing, and other wet operations at the point it leaves the foreground process for on-site or off-site treatment. Preserve measured volume or mass and available solids or organic-load data.

- Selected flow: Fish-processing wastewater to the declared treatment route; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or water-balance estimate reconciled with water inputs and retained product moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `codex-cxc-52-2003`
- Range: provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging rejects and other solid waste (`packaging_waste_output`)

Record rejected packaging, labels, cartons, liners, pallets, and other non-fish solid wastes separately by material and destination.

- Selected flow: Packaging waste by material and treatment route; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass or verified count-to-mass calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste_records`
- Range: provisional packaging-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fugitive refrigerant emissions to air (`refrigerant_emission_output`)

Calculate direct emissions of each refrigerant from inventory change, additions, removals, and documented recovery; do not substitute a generic refrigerant identity when the installed substance is known.

- Selected flow: Refrigerant substance emitted to air; exact Tiangong UUID pending review
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass balance for the reporting period allocated to represented production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen surimi output during the reporting period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Range: provisional fugitive-emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg net frozen surimi
  - Basis: per 1 kg net frozen surimi output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | separately measurable lines, batches, or operations | Avoid allocation where practicable by subdividing independently metered production lines, batches, storage periods, and treatment operations. | `ghg-protocol-product-2011` |
| `allocation_physical_relation` | unavoidable shared burdens and co-products | When subdivision is not practicable, use a documented physical relationship that reflects how inputs and emissions change with surimi and co-product outputs; use measured wet mass only when mass is the relevant causal relation. | `ghg-protocol-product-2011` |
| `allocation_economic_fallback` | co-products without a defensible physical relationship | If no defensible physical relationship exists, apply economic allocation using aligned price, quantity, geography, and reporting-period records, and disclose sensitivity to the selected period. | `ghg-protocol-product-2011` |
| `allocation_waste_status` | fish residues, recovered solids, and other outputs | Classify an output as waste only when the holder discards it and no product revenue or intended beneficial use is represented; otherwise treat it as a co-product and apply the allocation hierarchy. | `ghg-protocol-product-2011` |
| `allocation_consistency` | all foreground products and residues | Apply the same allocation method consistently to similar inputs and outputs, report allocation factors before normalization, and retain an unallocated mass-and-energy reconciliation. | `ghg-protocol-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `surimi_manufacturing` | accepted fish and formulation ingredients | receiving, weigh, issue, return, formulation, and lot records | date; lot_id; supplier; species; origin; state; ingredient_id; gross_mass; tare_mass; returned_mass; unit | calibrated scales and inventory reconciliation | kg | each lot and batch | full represented production period | all represented receiving and formulation points | sum accepted or net-issued mass by material and batch, then normalize to net output | calibration records; supplier and lot traceability; formulation authorization; reconciliation |
| `cp_water_records` | `surimi_manufacturing` | process and cleaning water | meter, batch, and sanitation records | meter_id; start_reading; end_reading; batch_id; use_area; unit | submeter reading or reconciled facility water balance | kg or m3 | each batch where metered, otherwise at least monthly | full represented production period | all represented process and sanitation uses | convert volume using declared density when necessary, subtract excluded uses, and normalize to net output | meter calibration; coverage map; balance reconciliation |
| `cp_packaging_records` | `surimi_manufacturing` | packaging inputs | packing-line count, issue, return, and component-mass records | component_id; material; count_used; count_returned; sampled_component_mass; unit | verified count-to-mass calculation reconciled to stores | kg | each packaging configuration and batch | full represented production period | all represented packing lines | net component count multiplied by verified component mass, summed by material | sampling record; scale calibration; issue-return reconciliation |
| `cp_energy_records` | `surimi_manufacturing` | electricity and other energy | utility meter, invoice, submeter, equipment runtime, and production records | meter_id; opening; closing; unit; period; equipment; runtime; output_mass | direct submetering preferred; otherwise documented engineering or production allocation | kWh or MJ | continuous or monthly, aligned to production | full represented production period including declared frozen storage | all represented processing, refrigeration, storage, sanitation, and treatment operations | subtract excluded loads, allocate shared loads under section 7, convert units explicitly, and normalize to net output | meter calibration; invoices; load inventory; reconciliation |
| `cp_product_output_records` | `surimi_manufacturing` | conforming surimi output | batch, checkweigh, grade, moisture, release, storage, and dispatch records | batch_id; product_id; species; formulation; gross_mass; packaging_mass; net_mass; moisture; grade; freeze_time; storage_duration; release_status | calibrated checkweighing and quality-release system | kg | each batch | full represented production period | all represented output and cold-storage locations | sum released net mass by product, exclude packaging and rejects, retain gross pre-normalization total | scale calibration; quality release; lot traceability; cold-chain log |
| `cp_residue_records` | `surimi_manufacturing` | fish residues and recovered solids | bin weights, dispatch tickets, recovery records, and mass balance | batch_id; residue_type; wet_mass; moisture_or_solids; destination; revenue_status; unit | direct weighing preferred; reconciled mass balance when direct measurement is unavailable | kg | each batch or dispatch | full represented production period | all preparation, washing, refining, and wastewater-solids points | sum by residue type and destination, then normalize to net output | scale calibration; dispatch ticket; receiver record; mass-balance closure |
| `cp_wastewater_records` | `surimi_manufacturing` | process wastewater | discharge meter, tank, laboratory, and treatment records | period; discharge_mass_or_volume; solids; organic_load; destination; treatment_stage; unit | direct discharge measurement or documented water balance with sampling | kg or m3 | continuous, batch, or representative sampling | full represented production period | all represented discharge points | aggregate by treatment destination, convert volume when necessary, and normalize to net output | meter calibration; sampling plan; laboratory result; water-balance closure |
| `cp_packaging_waste_records` | `surimi_manufacturing` | packaging and other solid waste | waste weights, counts, dispatch tickets, and treatment records | period; material; count; component_mass; waste_mass; destination; unit | direct weighing or verified count-to-mass calculation | kg | each batch or dispatch | full represented production period | all represented packing and storage areas | sum by material and destination, then normalize to net output | scale calibration; dispatch ticket; count-to-mass sampling |
| `cp_refrigerant_records` | `surimi_manufacturing` | refrigerant makeup and emissions | inventory, purchase, charge, recovery, disposal, and service records | refrigerant_id; opening_stock; purchases; additions; recoveries; disposals; closing_stock; equipment_id; period; unit | substance-specific refrigerant mass balance | kg | each service event and reporting-period close | full represented production period | all represented freezing and cold-storage systems | calculate loss by substance, allocate shared systems under section 7, and normalize to net output | service tickets; invoices; inventory reconciliation; equipment register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_surimi_mass` | packaged surimi output | net_surimi_mass = gross_packaged_mass - packaging_mass - nonconforming_product_mass | gross packaged mass; packaging mass; nonconforming product mass | kg conforming net surimi |  |
| `calc_normalized_amount` | every inventory row | normalized_amount = allocated_period_or_batch_amount / conforming_net_surimi_mass | allocated row amount; conforming net surimi mass | row unit per kg net surimi |  |
| `calc_wet_mass_balance` | manufacturing batch or reporting period | mass_balance_gap = fish + water + ingredients + other mass inputs - surimi - residues - wastewater - other mass outputs, all on aligned wet-mass boundaries | collected input and output masses; inventory changes; moisture-state notes | absolute and percentage mass-balance gap before normalization |  |
| `calc_packaging_mass` | packaging input and waste | packaging_mass = verified_component_count x sampled_component_mass for each material and component | component count; sampled component mass; return and reject counts | kg packaging by material |  |
| `calc_refrigerant_loss` | freezing and cold-storage systems | refrigerant_loss = opening_stock + purchases - closing_stock - documented_inventory_increase - recovered_or_disposed_mass | substance-specific inventory and service records | kg refrigerant emitted by substance before allocation |  |
| `calc_allocation_factor` | shared operations and co-products | calculate and disclose the selected physical or economic allocation factor from aligned quantities and, when applicable, prices; all factors for an allocation set shall sum to one | subdivision evidence; co-product quantities; causal relation or price records | dimensionless allocation factors | `ghg-protocol-product-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_primary_foreground` | all foreground operations | Use facility-specific primary records for processes under the operator's control; document any secondary estimate, its reason, and replacement priority. | `ghg-protocol-product-2011`; source records and calculation workbook |
| `dq_representativeness` | all data and linked datasets | Assess technological, geographical, and temporal representativeness against the declared species, route, facility, equipment, reporting period, electricity supply, and storage duration. | `ghg-protocol-product-2011`; representativeness assessment |
| `dq_traceability` | fish, ingredients, packaging, and output | Retain supplier, lot or batch, species, origin, formulation, release, and destination links sufficient to reproduce each aggregated value. | `codex-cxc-52-2003`; receiving, batch, formulation, and dispatch records |
| `dq_food_safety_controls` | reception through frozen dispatch | Retain the facility-specific HACCP flow diagram, hazard analysis, critical control and corrective-action records, sanitation records, metal-detection checks, and product-release evidence applicable to the represented route. | `codex-cxc-52-2003`; HACCP and release records |
| `dq_temperature_control` | fish, washed mince, mixing, freezing, frozen storage, and dispatch | Retain time-temperature records and deviations against the facility's declared product specification and applicable food-safety limits; include the represented cold-storage duration. | `codex-cxc-52-2003`; calibrated temperature logs and corrective actions |
| `dq_mass_balance` | each batch and aggregation period | Reconcile product, residues, wastewater, ingredient, packaging, and inventory-change records on consistent wet-mass and net-mass bases; investigate material gaps before release. | mass-balance workbook; scale and meter calibration records |
| `dq_completeness` | full foreground inventory | Document every excluded foreground flow and demonstrate that excluded operations are not silently shifted to an unlinked upstream or downstream stage. | completeness checklist; process map; cut-off register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Confirm that the output uses Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and exactly 1 kg net mass excluding packaging. |  |
| `validate_qualifiers` | dataset identity | Fail completeness when any required species, raw-fish state, product form, preservation state, formulation, moisture basis, grade, packaging, geography, period, storage duration, or allocation qualifier is missing. | `codex-cxc-52-2003` |
| `validate_route_completeness` | representative process map | Confirm that every applicable reception, preparation, separation, washing and dewatering, refining, mixing, packaging, freezing, metal-detection, storage, and dispatch step is included or explicitly justified as not applicable. | `codex-cxc-52-2003` |
| `validate_collection_links` | collected and calculated rows | Confirm that every foreground-record or calculated row links to an implemented collection protocol and retains its raw evidence and unit conversion. | `ghg-protocol-product-2011` |
| `validate_mass_balance` | batch and reporting period | Confirm that wet-mass and packaging reconciliations were performed before normalization and that unexplained gaps are investigated and disclosed. |  |
| `validate_allocation` | shared operations and co-products | Confirm subdivision was considered first, the selected physical or economic relationship is justified, factors sum to one, waste versus co-product status is documented, and the method is consistent across similar flows. | `ghg-protocol-product-2011` |
| `validate_cold_chain_and_haccp` | product quality and food safety | Confirm that facility-specific HACCP, sanitation, metal-detection, time-temperature, deviation, corrective-action, and release records cover the represented production and frozen-storage period. | `codex-cxc-52-2003` |
| `validate_estimate_disclosure` | provisional QA ranges and secondary estimates | Confirm that every `reasoned_estimate` is identified as provisional and is not presented as an industry benchmark or source-backed acceptance limit. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Background or foreground-linked modelling of frozen surimi supply at the manufacturing facility gate and later food-manufacturing systems |
| allowed_use | Studies whose product, route, geography, technology, reporting period, cold-storage duration, allocation method, and quality requirements are compatible with the dataset metadata |
| excluded_use | Fishery or aquaculture production without linked upstream datasets; caviar, crustacean, mollusc, plain fillet or minced-fish, or downstream surimi-based product substitution; retail or consumer-stage claims; food-safety certification by the LCA dataset alone |
| required_metadata | PCR id; product and flow UUID; CPC reference; species and origin; raw-fish state; formulation and additives; moisture and grade; net mass and packaging; facility geography; technology; production period; cold-storage duration; boundary; linked upstream datasets; allocation; data sources; QA status |
| required_quality_disclosure | Primary-data share and gaps; meter and scale coverage; mass-balance result; route deviations; temporal, geographical, and technological representativeness; food-safety and cold-chain record coverage; provisional estimates; allocation sensitivity; unresolved flow identities |
| update_trigger | Change in species or origin, formulation, product state, processing or refrigeration technology, facility geography, energy supply, packaging, storage duration, co-product market, allocation basis, regulatory requirement, or material foreground performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, official FAO/WHO text, https://www.fao.org/docrep/pdf/011/a1553e/a1553e00.pdf, retrieved 2026-08-11 | Frozen-surimi definition; typical process decomposition; raw-material handling; washing and dewatering; refining; ingredient mixing; packaging; freezing; metal detection; frozen storage; temperature control; HACCP and food-safety records |
| `ghg-protocol-product-2011` | standard | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf, retrieved 2026-08-11 | Foreground primary-data expectations; technological, geographical, and temporal data-quality assessment; system-boundary completeness; subdivision and physical/economic allocation hierarchy; allocation disclosure and consistency |
