---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.eggs-not-in-shell-and-egg-yolks-fresh-or-preserved-egg-albumin
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refrigerated Pasteurized Liquid Whole Egg

## 1. Scope and Applicability

This PCR guides foreground data package construction for one deliberately narrow product form: unformulated refrigerated pasteurized liquid whole chicken egg, with yolk and albumen retained in the natural whole-egg proportion, filled in a food-grade bulk container and released at the processor cold-store gate.

It covers shell-egg receipt, optional shell washing, breaking, inspection, filtration, whole-egg blending or homogenization, thermal pasteurization, rapid cooling, bulk filling, refrigerated storage, cleaning-in-place (CIP), and foreground waste and wastewater handling. The reference product is not frozen, dried, cooked, sweetened, salted, stabilized for ambient storage, fractionated, or reformulated.

Separate yolk, albumen, yolk-enriched blend, egg-white blend, frozen liquid, dried powder, cooked egg, chemically preserved product, high-pressure processed product, and manothermosonication routes are excluded. A dataset must not average any of those routes with the selected liquid-whole-egg route. Any facility using a materially different product form or lethality route requires a separately declared product-specific dataset and reviewed applicability decision.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.eggs-not-in-shell-and-egg-yolks-fresh-or-preserved-egg-albumin` |
| classification_refs | CPC 3.0 `23993`, `Eggs, not in shell, and egg yolks, fresh or preserved; egg albumin` |
| covered_products | unformulated refrigerated pasteurized liquid whole chicken egg retaining yolk and albumen in the natural whole-egg proportion |
| excluded_products | separate yolk; separate albumen; yolk- or white-enriched blends; salted, sugared, stabilized, fermented, cooked, frozen, dried, or ambient-stable products; non-thermal lethality routes |
| representative_product | refrigerated pasteurized liquid whole chicken egg, no added salt, sugar, preservative, water, yolk, or albumen |
| production_route | shell-egg receipt and breaking; inspection and filtration; whole-egg blending or homogenization; validated thermal pasteurization; rapid cooling; bulk filling; refrigerated storage |
| market_state | liquid, pasteurized, bulk-filled, maintained at or below 4 °C, at processor cold-store gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | refrigerated pasteurized liquid whole chicken egg |
| How much | 1 kg net product |
| How well | unformulated; natural whole-egg yolk-to-albumen proportion; validated thermal pasteurization; no visible shell or foreign matter; product temperature at or below 4 °C at gate |
| How long or cycle | one production batch through cold-store gate; storage duration declared in hours |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Eggs, not in shell, and egg yolks, fresh or preserved, egg albumin `8ee52550-935f-4209-b758-c2d060bba326` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=chicken; product_form=liquid_whole_egg; formulation=unformulated; lethality_route=thermal_pasteurization; preservation_state=refrigerated_not_frozen; gate=processor_cold_store; product_temperature_c; storage_duration_h; packaging_route=ldpe_lined_reusable_stainless_steel_bulk_tote; thermal_supply_route; refrigeration_refrigerant=R717_ammonia |

All required qualifiers must be declared in dataset metadata or equivalent machine-readable fields. The Tiangong flow identity spans the wider CPC subclass; these qualifiers narrow the dataset to the single product form governed by this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to net liquid whole-egg mass, excluding the bulk tote and liner. |
| `whole_egg_identity` | raw, filtered, pasteurized, and final egg streams | Mass and formulation record | kg | Keep yolk and albumen together in the natural whole-egg proportion; do not combine separate yolk or albumen production records. |
| `pasteurization_schedule` | thermal pasteurization | temperature and minimum residence time | °C and min | Record the validated time-temperature schedule and flow-diversion evidence. For unformulated whole egg below 24% solids, 60 °C for 3.5 min is an official baseline; an alternative schedule requires documented validation and jurisdictional acceptance. |
| `cold_chain_temperature` | post-pasteurization cooling and storage | temperature and duration | °C and h | Record continuous or batch-linked temperature history; the declared product at gate must be at or below 4 °C. |
| `electricity_measurement` | each electricity card | Energy | kWh | Use submetered electricity by unit operation; allocate a shared meter only by documented operating time and rated load or a validated mass-throughput rule. |
| `thermal_energy_measurement` | purchased steam, hot water, or on-site natural-gas route | Energy or carrier quantity | MJ, kg steam, m3 hot water, or kg fuel | Preserve the original carrier quantity, temperature/pressure where applicable, lower heating value for fuel, and conversion formula. |
| `water_measurement` | shell washing, cooling, CIP, and wastewater | Volume | m3 | Keep intake, recirculated, recovered, and discharged water separate; do not record gross recirculation as net withdrawal. |
| `refrigerant_measurement` | R717 ammonia system | Mass | kg | Use charge, purchases, additions, recovery, and disposal records; calculate losses by refrigerant mass balance. |
| `packaging_measurement` | LDPE liner and reusable stainless-steel tote | Mass and item count | kg and item-use | Record liner mass per batch and tote identity, tare, capacity, trip count, and reuse allocation separately. |
| `pollutant_measurement` | water and air elementary flows | Mass | kg | Calculate each named substance separately from measured concentration and discharge volume or from a documented carrier-specific factor. |

## 5. System Boundary

The foreground boundary begins with accepted shell eggs and utility/material inputs crossing the processor gate and ends with refrigerated pasteurized liquid whole egg in the declared bulk tote at the processor cold-store gate. Upstream shell-egg production, electricity generation, purchased steam production, natural-gas supply, water supply, chemical manufacture, and packaging manufacture are linked as upstream datasets rather than recreated in this foreground package.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground process map | Include receipt/breaking, filtration/blending, thermal pasteurization/rapid cooling, bulk filling/refrigerated storage, and CIP/wastewater handling. | `codex-cxc-15-1976`, `usda-fsis-egg-products`, `beitia-et-al-2024` |
| `boundary_raw_treated_separation` | facility and inventory scope | Keep raw shell-egg and untreated-liquid operations physically and record-wise separate from pasteurized product, packaging, and finished cold storage. | `codex-cxc-15-1976`, `cfia-egg-preventive-controls` |
| `boundary_product_form_gate` | all datasets | Include only unformulated thermally pasteurized refrigerated liquid whole egg; reject any average with yolk, albumen, frozen, dried, cooked, stabilized, or non-thermal routes. | `usda-fsis-egg-products`, `cfia-egg-preventive-controls` |
| `boundary_thermal_supply_gate` | pasteurization and CIP heat | Select either purchased steam or on-site natural-gas heat for each reporting period. If both are used, meter them separately by batch; never substitute a weighted generic heat carrier. | `jrc-fdm-bref-2019` |
| `boundary_refrigeration_gate` | cooling and cold storage | The representative route is an R717 ammonia system. Other refrigerants are outside this route and require separately named atomic input and emission cards before use. | `ipcc-2019-refrigeration` |
| `boundary_packaging_gate` | bulk filling | Use the declared LDPE-lined reusable stainless-steel bulk-tote route; exclude consumer cartons, HDPE pails, bag-in-box, tanker, and aseptic ambient packaging from this dataset. | `beitia-et-al-2024` |
| `boundary_wastewater_gate` | wastewater outputs | Select off-site treatment as one wastewater waste flow or on-site treatment with separately measured direct-to-water elementary flows. Do not report both for the same wastewater mass. | `us-epa-egg-processing-waste-1971` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | accepted_shell_egg_batch_at_processor_gate |
| starting_condition_role | upstream_product_input_and_foreground_batch_identity |
| product_classification_scope | current CPC 3.0 subclass `23993`, narrowed to unformulated refrigerated thermally pasteurized liquid whole chicken egg |
| recursive_input_rule | purchased untreated liquid whole egg in the same CPC subclass must be recorded as an upstream input dataset with treatment_status=untreated and must not be represented as the finished reference product |
| upstream_dataset_requirement | supplier-specific shell-egg dataset or disclosed proxy with species, production system, geography, date, accepted mass, reject mass, and allocation status |
| disclosure | disclose shell-egg source, whole-egg formulation, pasteurization schedule, cooling record, thermal supply route, R717 charge and loss, packaging route, cold-store duration, coproduct fate, wastewater route, and every provisional estimate |

## 6. Process Inventory Structure

Inventory profile: `atomic_flows:v1`. Every card represents one named flow. Collection placeholders such as energy, materials, chemicals, fuels, refrigerants, packaging, wastes, or emissions are prohibited.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| shell_egg_receipt_and_breaking | Shell-Egg Receipt and Breaking | required | `always` | foreground_raw_material_conversion | accepted_shell_egg_mass |
| filtration_and_whole_egg_blending | Filtration and Whole-Egg Blending | required | `always` | foreground_conditioning | filtered_liquid_whole_egg_mass |
| thermal_pasteurization_and_rapid_cooling | Thermal Pasteurization and Rapid Cooling | required | `always` | foreground_lethality_and_cooling | pasteurized_cooled_liquid_whole_egg_mass |
| bulk_filling_and_refrigerated_storage | Bulk Filling and Refrigerated Storage | required | `always` | foreground_packaging_and_gate_release | reference_product_mass |
| cip_and_wastewater_management | CIP and Wastewater Management | required | `always` | foreground_sanitation_and_residual_management | reference_product_mass |

### Process: Shell-Egg Receipt and Breaking (`shell_egg_receipt_and_breaking`)

#### Inputs

##### Product flows

###### Accepted shell eggs (`accepted_shell_eggs`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `shell_eggs`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Shell eggs
- Flow property / unit: Mass / kg
- Measurement basis: `net_accepted_mass_at_receipt`
- Amount rule: measured accepted shell-egg mass by supplier lot after receipt rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_scale_certificate; supplier_delivery_record; receiving_batch_reconciliation`
- Sources: `codex-cxc-15-1976`, `beitia-et-al-2024`

###### Electricity for receipt and breaking (`receipt_breaking_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_receipt_breaking_electricity`
- Amount rule: measured electricity for conveyors, inspection, washer, dryer, breaker, pumps, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; equipment_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional unit-operation electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screening range pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Potable shell-wash water (`shell_wash_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `potable_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Measurement basis: `net_shell_wash_water_withdrawal`
- Amount rule: measured water only when shell washing occurs at the foreground facility
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `water_meter_calibration; potable_water_certificate; batch_wash_log`
- Sources: `codex-cxc-15-1976`, `beitia-et-al-2024`

###### Hot water for shell washing (`shell_wash_hot_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `hot_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Hot water
- Flow property / unit: Volume and temperature / m3 and °C
- Measurement basis: `net_hot_water_volume_and_inlet_outlet_temperature`
- Amount rule: measured hot-water service when shell washing uses a separately supplied hot-water loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `flowmeter_calibration; temperature_sensor_calibration; wash_cycle_log`
- Sources: `codex-cxc-15-1976`

###### Sodium hypochlorite shell-wash sanitizer (`shell_wash_sodium_hypochlorite`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `sodium_hypochlorite`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Sodium hypochlorite solution
- Flow property / unit: Mass / kg solution and kg active chlorine
- Measurement basis: `solution_mass_and_active_chlorine_fraction`
- Amount rule: measured sanitizer issue only when sodium hypochlorite is used in shell washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; sanitation_batch_record`
- Sources: `codex-cxc-15-1976`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Untreated liquid whole egg (`untreated_liquid_whole_egg`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `untreated_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Untreated liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_after_breaking_and_inspection`
- Amount rule: measured liquid whole-egg mass transferred to filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; transfer_batch_record; shell_to_liquid_mass_balance`
- Sources: `usda-fsis-egg-products`, `codex-cxc-15-1976`

###### Recovered eggshell coproduct (`recovered_eggshell_coproduct`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `eggshell_coproduct`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Recovered eggshell material
- Flow property / unit: Mass / kg wet or dry basis declared
- Measurement basis: `separately_weighed_saleable_eggshell_mass`
- Amount rule: measured only when the shell material meets a documented product specification and is transferred for beneficial use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per shell-egg breaking batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; product_specification; consignee_transfer_record`
- Sources: `us-epa-egg-processing-waste-1971`

##### Waste flows

###### Eggshell waste (`eggshell_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `eggshell_waste`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Eggshell waste
- Flow property / unit: Mass / kg wet or dry basis declared
- Measurement basis: `weighed_eggshell_waste_by_fate`
- Amount rule: measured only when eggshells are discarded; mutually exclusive with recovered eggshell coproduct for the same mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; waste_manifest; mass_balance`
- Sources: `us-epa-egg-processing-waste-1971`, `beitia-et-al-2024`
- Range: Provisional eggshell and membrane mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.08
  - Upper: 0.25
  - Unit: kg/kg reference product
  - Basis: broad shell and membrane mass screen after breaking
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected shell eggs (`rejected_shell_eggs`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `rejected_shell_eggs`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Rejected shell eggs
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_reject_mass_by_reason_and_fate`
- Amount rule: measured broken, leaking, dirty, spoiled, or otherwise unsuitable eggs rejected before breaking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `reject_log; calibrated_scale_record; disposal_or_recovery_manifest`
- Sources: `codex-cxc-15-1976`

###### Shell-wash wastewater (`shell_wash_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `shell_wash_wastewater`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Shell-wash wastewater
- Flow property / unit: Volume / m3
- Measurement basis: `measured_wastewater_volume_to_declared_treatment_route`
- Amount rule: measured shell-wash discharge kept separate from CIP wastewater when separately routed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `discharge_flowmeter_calibration; composite_sample_chain_of_custody; treatment_transfer_record`
- Sources: `us-epa-egg-processing-waste-1971`

##### Elementary flows

### Process: Filtration and Whole-Egg Blending (`filtration_and_whole_egg_blending`)

#### Inputs

##### Product flows

###### Untreated liquid whole egg input (`untreated_liquid_whole_egg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `untreated_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Untreated liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_transfer_mass_into_filtration`
- Amount rule: measured transfer mass from the matched breaking batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per filtration batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `tank_load_cell_record; batch_linkage; transfer_reconciliation`
- Sources: `usda-fsis-egg-products`

###### Electricity for filtration and blending (`filtration_blending_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_filtration_blending_electricity`
- Amount rule: measured electricity for filter, pumps, agitator, and homogenizer when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; equipment_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional unit-operation electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screening range pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Filtered blended liquid whole egg (`filtered_blended_liquid_whole_egg`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `filtered_blended_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Filtered blended liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_after_filtration_and_blending`
- Amount rule: measured batch mass released to pasteurization without added ingredients
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; filtration_release_record; formulation_zero_addition_check`
- Sources: `usda-fsis-egg-products`, `cfia-egg-preventive-controls`

##### Waste flows

###### Chalazae and filter residue (`chalazae_and_filter_residue`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `chalazae_and_filter_residue`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Chalazae and filter residue
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_wet_residue_mass_by_fate`
- Amount rule: measured residue removed by inspection and filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; residue_container_log; waste_manifest`
- Sources: `beitia-et-al-2024`

##### Elementary flows

### Process: Thermal Pasteurization and Rapid Cooling (`thermal_pasteurization_and_rapid_cooling`)

#### Inputs

##### Product flows

###### Filtered liquid whole egg input (`filtered_liquid_whole_egg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `filtered_blended_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Filtered blended liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_into_pasteurizer`
- Amount rule: measured matched-batch feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per pasteurization batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `tank_load_cell_record; batch_linkage; pasteurizer_feed_totalizer`
- Sources: `cfia-egg-preventive-controls`

###### Electricity for pasteurization and cooling (`pasteurization_cooling_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_pasteurizer_pump_heat_exchanger_and_chiller_electricity`
- Amount rule: measured electricity for product pumps, controls, heat exchange, chilling, and R717 compressors allocated to matched batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; submeter_calibration; compressor_and_pasteurizer_runtime_log`
- Sources: `beitia-et-al-2024`

###### Purchased steam for pasteurization (`pasteurization_purchased_steam`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `steam`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased steam
- Flow property / unit: Mass and enthalpy / kg and MJ
- Measurement basis: `metered_steam_mass_pressure_and_condensate_return`
- Amount rule: measured only when thermal_supply_route=purchased_steam; mutually exclusive with natural-gas heat for the same duty
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `steam_meter_calibration; pressure_temperature_log; supplier_invoice; condensate_record`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas for on-site pasteurization heat (`pasteurization_natural_gas`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `natural_gas`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Natural gas
- Flow property / unit: Fuel mass or volume and net energy / kg or m3 and MJ
- Measurement basis: `metered_fuel_quantity_and_lower_heating_value`
- Amount rule: measured only when thermal_supply_route=onsite_natural_gas; mutually exclusive with purchased steam for the same duty
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `custody_transfer_meter; fuel_invoice; lower_heating_value_certificate; boiler_runtime_log`
- Sources: `ipcc-2006-stationary-combustion`

###### Cooling water for heat exchange (`pasteurization_cooling_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `cooling_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Cooling water
- Flow property / unit: Volume / m3
- Measurement basis: `net_makeup_water_not_gross_recirculation`
- Amount rule: measured net make-up water for the closed or once-through cooling circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `makeup_water_meter_calibration; cooling_loop_log; blowdown_record`
- Sources: `beitia-et-al-2024`

###### R717 ammonia refrigerant make-up (`r717_ammonia_makeup`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `R717_ammonia`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: R717 ammonia refrigerant
- Flow property / unit: Mass / kg
- Measurement basis: `refrigerant_purchase_and_charge_mass_balance`
- Amount rule: calculated R717 make-up allocated to cooling and cold storage during the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: `refrigerant_purchase_invoice; service_log; cylinder_scale_calibration; opening_closing_charge_reconciliation`
- Sources: `ipcc-2019-refrigeration`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pasteurized rapidly cooled liquid whole egg (`pasteurized_cooled_liquid_whole_egg`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `pasteurized_cooled_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Pasteurized rapidly cooled liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_released_after_validated_time_temperature_and_cooling`
- Amount rule: measured batch mass released only after pasteurization and cooling records pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: quantitative reference of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pasteurization_and_cold_chain_records`
- Quality evidence: `continuous_temperature_chart; legal_hold_time_test; flow_diversion_test; release_authorization; calibrated_outlet_mass_totalizer`
- Sources: `codex-cxc-15-1976`, `cfia-egg-preventive-controls`

##### Waste flows

###### Pasteurizer start-up and diverted liquid egg (`pasteurizer_diverted_product_waste`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `diverted_liquid_whole_egg_waste`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Diverted liquid whole egg waste
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_or_totalized_diverted_product_mass_by_fate`
- Amount rule: measured start-up, shutdown, under-temperature, or failed-release product sent to rework or waste; rework and waste masses kept separate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `flow_diversion_log; mass_totalizer; rework_or_waste_manifest`
- Sources: `cfia-egg-preventive-controls`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`natural_gas_fossil_carbon_dioxide_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `carbon_dioxide_fossil`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_co2_factor`
- Amount rule: calculate only for on-site natural-gas combustion; do not add when purchased steam is selected
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; lower_heating_value_certificate; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### Methane from natural-gas combustion (`natural_gas_methane_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `methane`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_ch4_factor`
- Amount rule: calculate separately from natural-gas energy and documented boiler factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; boiler_technology_record; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrous oxide from natural-gas combustion (`natural_gas_nitrous_oxide_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `nitrous_oxide`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Measurement basis: `natural_gas_energy_times_selected_n2o_factor`
- Amount rule: calculate separately from natural-gas energy and documented boiler factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_combustion_records`
- Quality evidence: `fuel_meter; boiler_technology_record; factor_source_and_equation_record`
- Sources: `ipcc-2006-stationary-combustion`

###### R717 ammonia loss to air (`r717_ammonia_to_air`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `R717_ammonia`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Measurement basis: `refrigerant_mass_balance_loss`
- Amount rule: calculate R717 loss from charge, purchases, recovery, transfers, and closing inventory; record major incidents separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Quality evidence: `service_log; cylinder_scale_record; leak_detection_record; annual_charge_reconciliation`
- Sources: `ipcc-2019-refrigeration`

### Process: Bulk Filling and Refrigerated Storage (`bulk_filling_and_refrigerated_storage`)

#### Inputs

##### Product flows

###### Pasteurized cooled liquid whole egg input (`pasteurized_cooled_liquid_whole_egg_input`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `pasteurized_cooled_liquid_whole_egg`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Pasteurized cooled liquid whole egg
- Flow property / unit: Mass / kg
- Measurement basis: `net_mass_into_filling`
- Amount rule: measured matched-batch transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per filling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_tank_load_cell; batch_linkage; transfer_reconciliation`
- Sources: `codex-cxc-15-1976`

###### Electricity for filling and refrigerated storage (`filling_cold_storage_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_filling_and_cold_store_electricity`
- Amount rule: measured electricity for filler, pumps, controls, cold-room fans, and allocated R717 compression during declared storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; cold_store_submeter; storage_duration_and_occupancy_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional cold-store electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screen dependent on storage duration and cold-store utilization
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE bulk-tote liner (`ldpe_bulk_tote_liner`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `low_density_polyethylene_liner`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Low-density polyethylene liner
- Flow property / unit: Mass / kg
- Measurement basis: `issued_liner_count_times_verified_tare_mass`
- Amount rule: calculated from liner issue count and supplier or measured tare mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `supplier_specification; packaging_issue_log; sampled_tare_mass_record`
- Sources: `beitia-et-al-2024`

###### Reusable stainless-steel bulk tote service (`reusable_stainless_steel_bulk_tote`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `reusable_stainless_steel_bulk_tote_service`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Reusable stainless-steel food-grade bulk tote service
- Flow property / unit: Item use / item-use
- Measurement basis: `tote_use_allocated_by_verified_lifetime_trips`
- Amount rule: one tote use per filled tote, with tote manufacture allocated by documented lifetime trips; do not add full tote mass per trip
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `asset_register; tote_capacity_and_tare_record; trip_counter; retirement_record`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refrigerated pasteurized liquid whole egg reference product (`reference_product`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `refrigerated_pasteurized_liquid_whole_egg`
- Direction: Outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Eggs, not in shell, and egg yolks, fresh or preserved, egg albumin `8ee52550-935f-4209-b758-c2d060bba326`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Measurement basis: `net_filled_product_mass_excluding_liner_and_tote`
- Amount rule: fixed reference amount after fill-mass reconciliation and cold-chain release
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_material_and_product_mass_records`
- Quality evidence: `calibrated_filler_or_scale; net_content_record; pasteurization_release; cold_store_temperature_record`
- Amount: 1 kg

##### Waste flows

###### Filling and storage liquid-egg loss (`filling_storage_product_loss`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `liquid_whole_egg_product_loss`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Liquid whole-egg product loss
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_or_mass_balance_loss_by_fate`
- Amount rule: measured spills, retained product, failed fills, and expired cold-store product by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `spill_log; reject_record; inventory_reconciliation; waste_manifest`
- Sources: `us-epa-egg-processing-waste-1971`
- Range: Historical loss QA screen before waste-conservation controls
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg liquid egg output
  - Basis: historical maximum liquid-egg loss to sewer; not a default or allowed loss
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-egg-processing-waste-1971`

###### LDPE liner scrap (`ldpe_liner_scrap`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `low_density_polyethylene_scrap`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Low-density polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Measurement basis: `weighed_unused_damaged_or_discarded_liner_mass`
- Amount rule: measured LDPE scrap by recycling, recovery, or disposal fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Quality evidence: `packaging_inventory_reconciliation; waste_scale_record; recycler_or_disposal_manifest`
- Sources: `beitia-et-al-2024`

##### Elementary flows

### Process: CIP and Wastewater Management (`cip_and_wastewater_management`)

#### Inputs

##### Product flows

###### Potable CIP and final-rinse water (`cip_potable_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `potable_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Measurement basis: `net_cip_and_final_rinse_water_withdrawal`
- Amount rule: measured water by CIP circuit and cleaning cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_cycle_records`
- Quality evidence: `water_meter_calibration; potable_water_certificate; cip_recipe_log`
- Sources: `cfia-egg-preventive-controls`, `beitia-et-al-2024`

###### Electricity for CIP (`cip_electricity`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `electricity`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Measurement basis: `submetered_cip_pump_and_heating_electricity`
- Amount rule: measured electricity for CIP pumps, dosing, recovery, and electric heating when present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Quality evidence: `utility_invoice; cip_submeter; cycle_runtime_log`
- Sources: `beitia-et-al-2024`
- Range: Provisional CIP electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg reference product
  - Basis: broad non-publishable screen pending industrial foreground data
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hot water for CIP (`cip_hot_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `hot_water`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Hot water
- Flow property / unit: Volume and temperature / m3 and °C
- Measurement basis: `net_hot_water_volume_and_inlet_outlet_temperature`
- Amount rule: measured hot-water service by cleaning cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Quality evidence: `flowmeter_calibration; temperature_sensor_calibration; cip_cycle_log`
- Sources: `cfia-egg-preventive-controls`

###### Sodium hydroxide CIP detergent (`cip_sodium_hydroxide`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `sodium_hydroxide`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass / kg solution and kg active NaOH
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: measured issue and return by CIP cycle; record active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; cip_recipe_log`
- Sources: `beitia-et-al-2024`

###### Nitric acid CIP detergent (`cip_nitric_acid`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `nitric_acid`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Nitric acid solution
- Flow property / unit: Mass / kg solution and kg active HNO3
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: measured issue and return by acid CIP cycle; record active concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; cip_recipe_log`
- Sources: `beitia-et-al-2024`

###### Peracetic acid final sanitizer (`cip_peracetic_acid`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `peracetic_acid`
- Direction: Inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Peracetic acid solution
- Flow property / unit: Mass / kg solution and kg active peracetic acid
- Measurement basis: `solution_mass_and_active_fraction`
- Amount rule: measured only when peracetic acid is used for the final sanitation step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Quality evidence: `supplier_certificate_of_analysis; dosing_pump_calibration; concentration_test; sanitation_release_record`
- Sources: `cfia-egg-preventive-controls`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Combined CIP and process wastewater (`combined_process_wastewater`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `egg_processing_wastewater`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Egg-processing wastewater
- Flow property / unit: Volume / m3
- Measurement basis: `measured_wastewater_volume_to_declared_treatment_route`
- Amount rule: measured total to off-site treatment or on-site treatment influent; keep route and product losses explicit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `discharge_flowmeter_calibration; composite_sample_chain_of_custody; treatment_invoice_or_operator_log`
- Sources: `us-epa-egg-processing-waste-1971`, `beitia-et-al-2024`
- Range: Historical wastewater-volume QA screen before in-plant conservation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.0075
  - Unit: m3/kg liquid egg output
  - Basis: historical wastewater volume before waste-conservation modifications; not a default or allowed discharge
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-egg-processing-waste-1971`

###### Wastewater treatment sludge (`wastewater_treatment_sludge`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `wastewater_treatment_sludge`
- Direction: Outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass / kg wet and dry solids basis
- Measurement basis: `weighed_sludge_mass_and_dry_solids_fraction`
- Amount rule: measured only when on-site treatment generates sludge; record destination and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_waste_records`
- Quality evidence: `calibrated_scale_record; dry_solids_test; waste_manifest`
- Sources: `us-epa-egg-processing-waste-1971`

##### Elementary flows

The following direct-to-water cards are conditional on on-site treatment followed by direct discharge. They are not used when the wastewater waste flow is transferred off-site.

###### Biochemical oxygen demand to water (`bod5_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `biochemical_oxygen_demand_5_day`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_bod5_concentration_times_direct_discharge_volume`
- Amount rule: calculate from accredited post-treatment composite sample and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### Chemical oxygen demand to water (`cod_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `chemical_oxygen_demand`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_cod_concentration_times_direct_discharge_volume`
- Amount rule: calculate from accredited post-treatment composite sample and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `total_nitrogen`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg N
- Measurement basis: `post_treatment_total_n_concentration_times_direct_discharge_volume`
- Amount rule: calculate from accredited post-treatment composite sample and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `total_phosphorus`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg P
- Measurement basis: `post_treatment_total_p_concentration_times_direct_discharge_volume`
- Amount rule: calculate from accredited post-treatment composite sample and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

###### Total suspended solids to water (`total_suspended_solids_to_water`)

Record this named flow as a separate atomic exchange for the unit process; preserve its declared route, source or disposition and do not aggregate it with another flow.

- Flow name: `total_suspended_solids`
- Direction: Outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Measurement basis: `post_treatment_tss_concentration_times_direct_discharge_volume`
- Amount rule: calculate from accredited post-treatment composite sample and direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater_records`
- Quality evidence: `accredited_lab_report; chain_of_custody; discharge_flowmeter; permit_compliance_record`
- Sources: `us-epa-egg-processing-waste-1971`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_batch` | all unit operations | Partition utilities, cleaning cycles, losses, and packaging by measured batch, line, operating time, and mass throughput before allocation. | `jrc-fdm-bref-2019` |
| `allocation_no_product_form_average` | product outputs | Never allocate a combined whole-egg/yolk/albumen/frozen/dried campaign into this reference product. Maintain separate campaign records and datasets. | `cfia-egg-preventive-controls` |
| `allocation_eggshell_route` | eggshell output | Treat eggshell as waste unless a separately weighed output meets a product specification and has a documented consignee. If it is a coproduct, apply economic allocation using contemporaneous net revenue and disclose the sensitivity to mass allocation. | `us-epa-egg-processing-waste-1971` |
| `allocation_rework` | diverted or off-spec liquid egg | Return conforming rework to its originating batch where traceable; otherwise treat it as a separately measured input to the receiving batch and disclose the transfer. Waste is never credited as rework. | `cfia-egg-preventive-controls` |
| `allocation_reusable_tote` | stainless-steel tote service | Allocate tote manufacture and end-of-life by verified lifetime trips or item-uses; allocate wash utilities to the actual cleaning cycle. | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The machine-field values in this table are locale-independent and must be retained unchanged in bilingual renderings.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_product_mass_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | raw_intermediate_and_final_product_mass | `batch_mass_record` | `batch_id; supplier_lot; product_state; gross_mass; tare_mass; net_mass; timestamp; scale_id; disposition` | `calibrated_scale_tank_load_cell_or_mass_totalizer` | `kg` | `each_batch_and_transfer` | `complete_reporting_period` | `foreground_facility_and_declared_gate` | `reconcile_each_transfer_then_normalize_to_reference_product_mass` | `calibration_certificate; signed_batch_record; mass_balance` |
| `cp_electricity_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage; cip_and_wastewater_management | unit_operation_electricity | `meter_and_runtime_record` | `meter_id; opening_kwh; closing_kwh; timestamp; process_id; runtime_h; rated_kw; allocation_basis; production_mass_kg` | `revenue_meter_submeter_or_validated_runtime_allocation` | `kWh` | `continuous_or_each_batch` | `complete_reporting_period` | `foreground_facility` | `submeter_first_else_runtime_times_rated_load_then_normalize` | `utility_invoice; meter_calibration; runtime_log; allocation_worksheet` |
| `cp_water_and_wastewater_records` | shell_egg_receipt_and_breaking; thermal_pasteurization_and_rapid_cooling; cip_and_wastewater_management | water_intake_recirculation_wastewater_and_direct_discharge | `meter_and_composite_sample_record` | `meter_id; intake_m3; recirculated_m3; makeup_m3; discharge_m3; route; sample_id; bod5_mg_l; cod_mg_l; total_n_mg_l; total_p_mg_l; tss_mg_l; timestamp` | `calibrated_flowmeter_and_accredited_composite_sampling` | `m3; mg/L` | `daily_and_each_sampling_event` | `complete_reporting_period` | `foreground_facility_and_discharge_point` | `reconcile_net_withdrawal_and_discharge_then_calculate_each_pollutant_mass` | `meter_calibration; chain_of_custody; accredited_lab_report; permit_record` |
| `cp_thermal_utility_records` | shell_egg_receipt_and_breaking; thermal_pasteurization_and_rapid_cooling; cip_and_wastewater_management | steam_and_hot_water | `utility_meter_record` | `route; meter_id; carrier_quantity; unit; pressure; inlet_temperature_c; outlet_temperature_c; condensate_return; timestamp; process_id; production_mass_kg` | `steam_meter_flowmeter_and_temperature_pressure_log` | `kg; m3; MJ; °C` | `continuous_or_each_batch` | `complete_reporting_period` | `foreground_facility` | `calculate_net_thermal_energy_then_normalize_without_route_averaging` | `meter_calibration; sensor_calibration; supplier_invoice; cycle_log` |
| `cp_fuel_and_combustion_records` | thermal_pasteurization_and_rapid_cooling | natural_gas_and_combustion_emissions | `fuel_meter_and_factor_record` | `fuel_type; quantity; unit; lower_heating_value_mj_unit; boiler_id; technology; timestamp; process_id; co2_factor; ch4_factor; n2o_factor; factor_source` | `custody_transfer_meter_and_documented_factor_calculation` | `kg; m3; MJ; kg_emission` | `continuous_or_each_reporting_period` | `complete_reporting_period` | `foreground_boiler` | `fuel_energy_times_substance_specific_factor_then_normalize` | `fuel_invoice; meter_calibration; heating_value_certificate; boiler_record; factor_citation; calculation_sheet` |
| `cp_refrigerant_records` | thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | r717_charge_makeup_recovery_and_loss | `refrigerant_mass_balance_record` | `refrigerant=R717_ammonia; equipment_id; opening_charge_kg; purchases_kg; additions_kg; recovered_kg; transferred_kg; closing_charge_kg; incident_loss_kg; service_date` | `service_log_cylinder_scale_and_annual_mass_balance` | `kg` | `each_service_event_and_annual_reconciliation` | `complete_reporting_period` | `foreground_refrigeration_system` | `loss=opening_charge+purchases+additions-recovered-transferred-closing_charge` | `purchase_invoice; service_log; scale_calibration; leak_detection_record; reconciliation` |
| `cp_cleaning_chemical_records` | shell_egg_receipt_and_breaking; cip_and_wastewater_management | sodium_hypochlorite_sodium_hydroxide_nitric_acid_and_peracetic_acid | `chemical_issue_and_concentration_record` | `chemical_name; solution_mass_kg; active_fraction; batch_id; dosing_pump_id; cycle_id; return_mass_kg; timestamp; process_id` | `inventory_issue_dosing_meter_and_concentration_test` | `kg_solution; kg_active` | `each_cleaning_cycle` | `complete_reporting_period` | `foreground_sanitation_system` | `calculate_active_mass_by_named_chemical_then_normalize_separately` | `supplier_coa; dosing_calibration; concentration_test; cip_recipe_log` |
| `cp_cip_cycle_records` | cip_and_wastewater_management | cip_water_energy_chemicals_and_wastewater | `cip_cycle_record` | `cycle_id; equipment_id; recipe_id; water_m3; electricity_kwh; thermal_utility_quantity; chemical_name; chemical_mass_kg; wastewater_m3; start_time; end_time; allocated_product_mass_kg` | `validated_cip_controller_meter_issue_log_and_cycle_reconciliation` | `m3; kWh; kg; h` | `each_cip_cycle` | `complete_reporting_period` | `foreground_cip_system` | `reconcile_each_cycle_and_allocate_once_to_linked_production_lots` | `controller_export; meter_calibration; chemical_issue_log; operator_signoff; cycle_mass_balance` |
| `cp_packaging_records` | bulk_filling_and_refrigerated_storage | ldpe_liner_and_reusable_stainless_steel_tote | `packaging_issue_and_asset_record` | `batch_id; liner_count; liner_tare_kg; tote_id; tote_capacity_kg; tote_tare_kg; lifetime_trip_count; current_trip; damaged_scrap_kg; disposition` | `warehouse_issue_log_sampled_tare_and_asset_register` | `kg; item-use` | `each_filling_batch` | `complete_reporting_period` | `filling_area_and_tote_pool` | `liner_mass=count_times_tare; tote_service=one_use_divided_by_verified_lifetime_trips` | `supplier_specification; tare_measurement; issue_log; asset_register; retirement_record` |
| `cp_residue_and_waste_records` | shell_egg_receipt_and_breaking; filtration_and_whole_egg_blending; thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage; cip_and_wastewater_management | eggshell_reject_residue_product_loss_packaging_scrap_and_sludge | `waste_and_recovery_record` | `batch_id; material_name; wet_mass_kg; dry_mass_kg; moisture_fraction; reason; product_or_waste_status; destination; manifest_id; timestamp` | `segregated_container_weighing_and_manifest_reconciliation` | `kg` | `each_event_or_batch` | `complete_reporting_period` | `foreground_facility_and_first_receiver` | `sum_each_named_material_by_status_and_fate_then_normalize` | `scale_calibration; product_specification_if_coproduct; transfer_record; waste_manifest; mass_balance` |
| `cp_pasteurization_and_cold_chain_records` | thermal_pasteurization_and_rapid_cooling; bulk_filling_and_refrigerated_storage | time_temperature_flow_diversion_cooling_and_storage | `critical_control_and_release_record` | `batch_id; formulation; total_solids_percent; inlet_temperature_c; legal_temperature_c; holding_time_min; flow_rate; diversion_events; outlet_temperature_c; cooling_end_time; cold_store_temperature_c; storage_duration_h; release_status` | `validated_continuous_recorder_flow_test_and_batch_release_review` | `°C; min; kg/h; h` | `continuous_and_each_batch_release` | `complete_batch_and_storage_to_gate` | `pasteurizer_cooler_and_cold_store` | `accept_only_forward_flow_and_released_mass_meeting_validated_schedule_and_temperature_gate` | `recorder_calibration; holding_time_test; diversion_test; chart_review; release_signature; cold_store_log` |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all inventory rows | `normalized_amount = measured_or_calculated_amount / released_reference_product_mass_kg` | `measured_or_calculated_amount; released_reference_product_mass_kg` | `amount_per_1_kg_reference_product` | `mass-balance-identity` |
| `reconcile_shell_to_product_mass` | shell_egg_receipt_and_breaking through bulk_filling_and_refrigerated_storage | `accepted_shell_egg_mass = reference_product_mass + recovered_eggshell_coproduct_mass + eggshell_waste_mass + rejected_or_residue_mass + product_loss_mass + measured_water_or_cleaning_carryover_adjustment` | `all_named_mass_outputs_on_consistent_basis` | `batch_mass_balance_and_unexplained_difference` | `mass-balance-identity` |
| `calculate_pasteurization_acceptance` | thermal_pasteurization_and_rapid_cooling | `accepted_mass = forward_flow_mass where recorded_temperature_c >= validated_minimum_temperature_c and actual_holding_time_min >= validated_minimum_holding_time_min` | `temperature_chart; holding_time_test; flow_rate; diversion_log; formulation` | `released_or_diverted_mass` | `cfia-egg-preventive-controls` |
| `calculate_natural_gas_emissions` | natural-gas combustion cards | `emission_kg = fuel_quantity * lower_heating_value_mj_per_unit / 1000000 * emission_factor_kg_per_tj` calculated separately for CO2, CH4, and N2O | `fuel_quantity; lower_heating_value; substance_specific_factor` | `kg_substance_per_1_kg_reference_product` | `ipcc-2006-stationary-combustion` |
| `calculate_refrigerant_loss` | R717 input and air-emission cards | `r717_loss_kg = opening_charge_kg + purchases_kg + additions_kg - recovered_kg - transferred_kg - closing_charge_kg` | `refrigerant_mass_balance_fields` | `kg_R717_to_air_per_1_kg_reference_product` | `ipcc-2019-refrigeration` |
| `calculate_direct_water_emission` | each direct-to-water elementary flow | `emission_kg = post_treatment_concentration_mg_l * direct_discharge_volume_m3 / 1000` | `substance_specific_concentration_mg_l; direct_discharge_volume_m3` | `kg_substance_per_1_kg_reference_product` | `us-epa-egg-processing-waste-1971` |
| `calculate_ldpe_liner_mass` | LDPE liner input | `liner_mass_kg = liner_count * verified_liner_tare_kg` | `liner_count; verified_liner_tare_kg` | `kg_LDPE_per_1_kg_reference_product` | `mass-balance-identity` |
| `calculate_tote_service` | reusable stainless-steel tote | `allocated_tote_item_use = filled_tote_count / verified_lifetime_trip_count` | `filled_tote_count; verified_lifetime_trip_count` | `item_use_per_1_kg_reference_product` | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_formulation` | all datasets | Declare chicken species, liquid whole-egg form, zero added salt/sugar/preservative/water/yolk/albumen, thermal route, refrigerated state, gate, and CPC context. | `batch_formulation; product_specification; dataset_metadata` |
| `no_route_averaging` | all processes | Keep whole egg, yolk, albumen, frozen, dried, non-thermal, packaging, thermal-supply, and wastewater routes separate; no weighted generic route is conforming. | `campaign_schedule; route_selection; allocation_worksheet` |
| `mass_balance` | each batch | Reconcile shell-egg input, intermediates, reference product, coproduct, all named wastes, rework, and unexplained difference on one mass basis. | `calibrated_mass_records; batch_reconciliation` |
| `critical_control_validity` | pasteurization and cooling | Retain formulation-specific validated schedule, calibration, holding-time test, flow diversion, cooling, and release records. | `critical_control_chart; validation_study; calibration_and_release_records` |
| `utility_separation` | electricity, steam, hot water, natural gas, and cooling water | Record each carrier separately by unit operation and route; preserve original unit and conversion. | `meters; invoices; runtime_logs; conversion_sheet` |
| `atomic_flow_completeness` | all inventory | Each concrete material, chemical, fuel, refrigerant, waste, and elementary emission has its own card with no collective placeholder. | `atomic_flows:v1_audit` |
| `wastewater_route_consistency` | wastewater and water emissions | Report either off-site wastewater transfer or on-site direct discharge for the same volume; direct emissions use post-treatment samples. | `flowmeter; treatment_contract_or_permit; lab_reports` |
| `temporal_representativeness` | all records | Cover at least one complete production and sanitation cycle and the full reporting period; disclose seasonal or partial-period data. | `production_calendar; cip_log; meter_coverage_report` |
| `estimate_disclosure` | every `reasoned_estimate` | Identify the range as provisional and replace it with reviewed foreground or external evidence before publication-critical use. | `review_metadata; uncertainty_register` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exactly 1 kg net refrigerated pasteurized liquid whole chicken egg with UUID `8ee52550-935f-4209-b758-c2d060bba326`, Mass property, and every required qualifier. | `tiangong_identity_reference` |
| `validate_scope_exclusions` | product and route metadata | Fail if the dataset includes or averages separate yolk, albumen, enriched blend, salted, sugared, frozen, dried, cooked, ambient-stable, or non-thermal product. | `usda-fsis-egg-products` |
| `validate_process_map` | foreground inventory | Require all five required process ids and at least one matched batch through each process. | `codex-cxc-15-1976`, `beitia-et-al-2024` |
| `validate_pasteurization` | thermal pasteurization | Require formulation-specific validated time-temperature records, holding-time evidence, diversion records, and release approval; the 60 °C/3.5 min baseline is not transferable to an excluded formulation. | `cfia-egg-preventive-controls` |
| `validate_cold_chain` | cooling and cold storage | Require rapid post-pasteurization cooling and product temperature at or below 4 °C at gate with declared storage duration. | `codex-cxc-15-1976`, `eu-reg-853-2004`, `cfia-egg-preventive-controls` |
| `validate_atomic_flows` | inventory cards | Fail any collection placeholder and require flow_name, direction, flow_type, measurement_basis, unit, collection_protocol, and quality_evidence for every card. | — |
| `validate_uuid_scope` | inventory identities | Permit a flow UUID only on the reference product flow; all non-reference flow UUID fields remain blank until separately reviewed. | `tiangong_identity_reference` |
| `validate_route_gates` | utilities, refrigeration, packaging, and wastewater | Require purchased-steam versus on-site-natural-gas selection, R717 refrigeration, LDPE-lined reusable stainless-steel tote packaging, and one wastewater route without averaging. | `cfia-egg-preventive-controls`, `ipcc-2019-refrigeration` |
| `validate_mass_balance` | batch inventory | Require explained mass balance for shell eggs, intermediates, product, coproduct, waste, rework, and losses. | `mass-balance-identity` |
| `validate_estimates` | amount ranges | Flag every `reasoned_estimate` as provisional and fail publication use unless reviewed acceptance or stronger evidence is recorded. | `beitia-et-al-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package eligible for review as a `secondary_dataset` or `background_dataset` |
| downstream_use | ingredient input to refrigerated food manufacturing or food-service lifecycle models requiring thermally pasteurized liquid whole egg |
| allowed_use | unformulated refrigerated thermally pasteurized liquid whole chicken egg at processor cold-store gate with complete batch, utility, sanitation, waste, and route disclosures |
| excluded_use | separate yolk or albumen; enriched blends; salted, sugared, preserved, frozen, dried, cooked, ambient-stable, or non-thermal products; consumer-pack or tanker routes; datasets averaging mutually exclusive routes |
| required_metadata | canonical PCR id; CPC 3.0 `23993`; species; formulation; solids content; product state; validated pasteurization schedule; cooling endpoint; cold-store duration; geography; reporting period; thermal supply route; R717 system; packaging route; wastewater route; allocation basis |
| required_quality_disclosure | unresolved unit-group and non-reference UUIDs; meter and sampling coverage; mass-balance difference; rework; estimate use; eggshell status and allocation; energy and water allocation; refrigerant reconciliation; discharge permit and post-treatment sampling |
| update_trigger | revise when the Tiangong reference identity changes, industrial liquid-whole-egg foreground evidence replaces provisional ranges, official pasteurization or cooling requirements change, or another product, packaging, thermal, refrigeration, or wastewater route is proposed for inclusion |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-15-1976` | official_guidance | FAO/WHO Codex, Code of Hygienic Practice for Eggs and Egg Products, CXC 15-1976, revised 2007. <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ro/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B15-1976%252FCXC_015e.pdf> (retrieved 2026-08-13) | clean-egg acceptance, breaking hygiene, raw/treated separation, validated microbiocidal treatment, rapid cooling, refrigeration, packaging and traceability rules |
| `cfia-egg-preventive-controls` | official_guidance | Canadian Food Inspection Agency, Preventive controls for food: Eggs and processed egg products. <https://inspection.canada.ca/en/food-safety-industry/preventive-control-plans/controls-food/eggs-and-processes-egg-products> (retrieved 2026-08-13) | whole-egg time-temperature baseline, cooling limits, pasteurizer records, flow diversion, holding-time verification, CIP separation, and critical-control evidence |
| `eu-reg-853-2004` | standard | Regulation (EC) No 853/2004, Annex III, Section X, Egg Products. <https://eur-lex.europa.eu/eli/reg/2004/853/oj> (retrieved 2026-08-13) | separation of washing/breaking/other operations, rapid processing, liquid-egg pre-processing storage, post-processing cooling to at most 4 °C, and shell-particle specification context |
| `usda-fsis-egg-products` | official_guidance | USDA Food Safety and Inspection Service, Egg Products and Food Safety. <https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/eggs/egg-products-and-food-safety> (retrieved 2026-08-13) | product-form distinctions and process decomposition: breaking, filtration, mixing, pasteurization, cooling, packaging, and refrigerated handling |
| `beitia-et-al-2024` | literature | Beitia, E. et al. (2024), Life cycle assessment of the manothermosonication of liquid whole egg: A comparative evaluation with conventional thermal preservation, LWT 213, 116953. <https://doi.org/10.1016/j.lwt.2024.116953> | conventional thermal-route process map; 1 kg functional unit; shell-egg, water, packaging, CIP chemical and energy benchmarks; cold-storage significance; evidence limitations |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre (2019), Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627. <https://publications.jrc.ec.europa.eu/repository/handle/JRC118627> (retrieved 2026-08-13) | resource metering, process-integrated water and energy management, cleaning, wastewater, and route-specific BAT context |
| `us-epa-egg-processing-waste-1971` | dataset | U.S. Environmental Protection Agency, Egg Breaking and Processing Waste Control and Treatment, Water Pollution Control Research Series 12060 FQF 11/71. <https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101RJ45.TXT> (retrieved 2026-08-13) | shell and product-loss fate, wastewater volume, BOD/COD/nitrogen/phosphorus/suspended-solids characterization, waste-conservation QA screens, and treatment-route evidence |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC (2006), Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion. <https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf> (retrieved 2026-08-13) | carrier- and technology-specific CO2, CH4, and N2O calculation method for on-site natural-gas combustion |
| `ipcc-2019-refrigeration` | method_factor | IPCC (2019), Refinement to the 2006 Guidelines, Volume 3, Chapter 7: Emissions of Fluorinated Substitutes for Ozone Depleting Substances. <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/3_Volume3/19R_V3_Ch07_ODS_Substitutes.pdf> (retrieved 2026-08-13) | refrigerant inventory fields, mass-balance method, service/use loss accounting, and documentation expectations adapted to the declared R717 system |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity. | batch reconciliation, normalization, liner calculation, tote-service allocation, and transfer consistency |
