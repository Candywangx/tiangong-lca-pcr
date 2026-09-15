---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.automatic-goods-vending-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Automatic goods vending machines

## 1. Scope and Applicability

This PCR covers factory-gate production of a new, complete automatic machine that accepts payment or another authorized transaction and dispenses packaged goods without on-site labour intervention. Covered configurations include ambient, heated, refrigerated, and combination machines when their configuration is declared. The foreground boundary includes receipt of purchased assemblies, final mechanical and electrical assembly, model-specific acceptance testing, refrigerant charging where applicable, and packaging for dispatch.

The PCR excludes machines that dispense only cash, tickets or services; automated teller machines; attended retail cabinets; beverage preparation or food-processing equipment whose principal function is processing rather than dispensing pre-packaged goods; loose spare parts; and rebuilt, repaired or refurbished machines. Manufacture of purchased components is represented by supplier-specific upstream datasets. Distribution after the factory gate, stocking goods, installation, use, maintenance and end-of-life are outside the declared product system unless a study adds them as separately disclosed modules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.automatic-goods-vending-machines |
| classification_refs | CPC 3.0: 43934, Automatic goods vending machines (`un-cpc-3-0-structure-2025`) |
| covered_products | New complete automatic goods vending machines for packaged food, beverages or non-food goods; ambient, heated, refrigerated and combination configurations |
| excluded_products | Cash dispensers and ATMs; ticket-only or service-only terminals; attended cabinets; principal-function food-processing machines; parts sold separately; rebuilt, repaired or refurbished machines |
| representative_product | One accepted production model of a complete automatic goods vending machine |
| production_route | Modular receipt of purchased cabinet, mechanical, electrical and optional refrigeration assemblies; final assembly; testing; optional refrigerant charging; dispatch packaging |
| market_state | New, functional, acceptance-tested machine at the factory gate, with dispatch packaging declared separately from net machine mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete automatic machine capable of accepting the declared payment or authorization method and dispensing the declared packaged goods without on-site labour intervention |
| How much | One accepted finished machine of the declared model |
| How well | Meets the manufacturer's declared vendible capacity, dispensing reliability, electrical safety, temperature function where applicable, and final acceptance criteria |
| How long or cycle | One machine with a declared design service life; this declaration describes function and durability, while this PCR quantifies factory-gate production only |
| reference_flow_link | Output row `finished_vending_machine` from process `machine_assembly_testing_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one accepted finished machine, excluding dispatch packaging |
| Reference product flow | Automatic goods vending machines `0b858929-f07a-4c83-b3f7-fa69f1fa8e0d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model identifier; manufacturing geography and reference year; net machine mass; cabinet and dispensing configuration; packaged-goods type; vendible capacity; payment or authorization technology; ambient, heated, refrigerated or combination configuration; compartment temperatures; rated voltage and frequency; measured acceptance-test energy; refrigerant species and factory charge when applicable; design service life; dispatch packaging; allocation method |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or otherwise verify the net mass of one accepted machine without dispatch packaging; report packaging as separate input rows and do not substitute shipping mass for reference mass. |
| `batch_to_machine` | batch production records | Mass, energy or item count as recorded | kg, MJ or item | Use model-specific batches. Divide batch totals only by accepted machines of the same declared model and retain rejected-unit and work-in-progress reconciliation. |
| `electricity_conversion` | assembly and acceptance-test electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading in kWh and convert to MJ with 1 kWh = 3.6 MJ; state voltage, grid geography and meter boundary. |
| `refrigerant_species_mass` | refrigerant charge and charging loss | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep each refrigerant species in a separate row. Reconcile purchased, returned, recovered, inventory-change, installed-charge and measured-release masses; never report a combined refrigerant amount. |

## 5. System Boundary

The foreground boundary begins when purchased cabinet, mechanical, electronic, refrigeration and packaging items and factory utilities cross into final machine assembly. It ends when the accepted machine and its separately recorded dispatch packaging are ready at the factory gate. Supplier production of purchased items is upstream; use and end-of-life are downstream and excluded from the core result.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cabinet/frame, mechanical and electronic assemblies, optional refrigeration equipment and refrigerant, packaging, electricity and conditional cleaning water are received at the final assembly site |
| starting_condition_role | Factory-gate modular assembly starting point |
| product_classification_scope | Complete new automatic goods vending machine; parts and rebuilt machines are outside this product identity |
| recursive_input_rule | A complete used vending machine entering rebuilding is not recursively treated as a purchased new-machine input; model that route in a separately disclosed remanufacturing dataset |
| upstream_dataset_requirement | Use supplier- and geography-specific upstream datasets for every purchased component, refrigerant, utility and packaging item; disclose proxies and missing supplier data |
| disclosure | Declare component supply state, in-house versus purchased operations, configuration, refrigerant species and charge, test boundary, rejected units, packaging state, geography, year and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_complete_machine` | product identity | Include only a complete accepted machine in the reference output; cabinet, frame, dispensing, payment, refrigeration and display items remain component inputs. | `un-cpc-3-0-structure-2025` |
| `sb_factory_gate` | core product system | Include final assembly, wiring, firmware loading when performed at the site, acceptance testing, conditional refrigerant charging and dispatch packaging up to factory-gate readiness. | `ec-jrc-eup-lot12-2007` |
| `sb_refrigerated_route` | refrigerated and combination configurations | Include condensing equipment, declared refrigerant input and species-specific charging loss only when the machine contains that refrigeration route; disclose compartment temperatures and energy-test method. | `eu-2019-2024-direct-sales-refrigeration`; `us-epa-energy-star-vending-v4-2019` |
| `sb_downstream_modules` | distribution, use, maintenance and end-of-life | Exclude these stages from the core factory-gate result. If added, report them as separate modules with service life, vendible capacity, operating mode, daily energy, refrigerant leakage, repair and recovery assumptions. | `eu-2019-2024-direct-sales-refrigeration` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machine_assembly_testing_packaging` | Machine assembly, acceptance testing, refrigerant charging and packaging | required | All records; refrigeration and water rows apply only when their stated route condition is met | foreground production | One accepted finished machine represented by its measured net mass |

### Process: Machine assembly, acceptance testing, refrigerant charging and packaging (`machine_assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Purchased cabinet and frame (`cabinet_frame`)

Record the mass of the purchased cabinet-and-frame assembly crossing into final assembly.

- Selected flow: Vending machine cabinet and frame `14ae5c6a-36b0-4dbd-933f-8021dc4242bf`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass attributable to accepted machines of the declared model
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Refrigeration condensing unit (`refrigeration_condensing_unit`)

Record one purchased condensing-unit assembly only for a refrigerated or combination model; its UUID remains unresolved.

- Selected flow: Refrigeration condensing unit
- Flow property / unit: Mass / kg
- Amount rule: measured received mass when an integral condensing unit is installed; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted refrigerated or combination machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `eu-2019-2024-direct-sales-refrigeration`

###### Dispensing drive motor (`electric_motor`)

Record the mass of the declared electric motor installed for dispensing or fan duty; distinguish multiple motors in the raw bill of materials before aggregation to this identical-flow row.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: summed installed mass of electric motors in the accepted machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Main printed wiring board (`printed_wire_board`)

Record the installed mass of the main printed wiring board; declare populated or unpopulated supply state in component metadata.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: summed installed board mass in the accepted machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### User display module (`lcd_module`)

Record an assembled LCD module only when the declared model contains this display technology.

- Selected flow: LCD module, assembled `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass when an LCD module is fitted; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Dispensing mechanism assembly (`dispensing_mechanism`)

Record the model-specific spiral, conveyor, locker or other single dispensing-mechanism assembly; its UUID remains unresolved.

- Selected flow: Vending machine dispensing mechanism assembly
- Flow property / unit: Mass / kg
- Amount rule: measured installed assembly mass in the accepted machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Payment module assembly (`payment_module`)

Record the single embedded payment or authorization module installed in the declared model; its UUID remains unresolved.

- Selected flow: Vending machine payment module assembly
- Flow property / unit: Mass / kg
- Amount rule: measured installed module mass in the accepted machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Assembly and acceptance-test electricity (`assembly_electricity`)

Record electricity metered for final assembly, firmware loading and factory acceptance testing; upstream grid emissions are not direct elementary outputs of this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered kWh attributable to the model-specific batch multiplied by 3.6 MJ/kWh and divided by accepted machines
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_and_test_records`
- Sources:

###### Assembly cleaning water (`assembly_process_water`)

Record water only when it crosses the foreground boundary for machine or test-fixture cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered water attributable to the model-specific batch; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

###### R404A refrigerant charge (`r404a_charge`)

Record only when the accepted machine is charged with R404A; do not combine with another refrigerant species.

- Selected flow: Refrigerant, R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: cylinder-mass decrease attributable to accepted R404A machines, reconciled to installed charge, recovery and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted R404A machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `us-epa-energy-star-vending-v4-2019`

###### R134a refrigerant charge (`r134a_charge`)

Record only when the accepted machine is charged with R134a; do not combine with another refrigerant species.

- Selected flow: Refrigerant R134a `1ed335ef-341f-46cc-be90-6bf805244f28`
- Flow property / unit: Mass / kg
- Amount rule: cylinder-mass decrease attributable to accepted R134a machines, reconciled to installed charge, recovery and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted R134a machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `us-epa-energy-star-vending-v4-2019`

###### Propane R290 refrigerant charge (`propane_r290_charge`)

Record propane only when refrigerant-grade R290 is charged; retain purity and safety classification in foreground records.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass / kg
- Amount rule: cylinder-mass decrease attributable to accepted R290 machines, reconciled to installed charge, recovery and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted R290 machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `us-epa-energy-star-vending-v4-2019`

###### EURO wooden dispatch pallet (`euro_wooden_pallet`)

Record a EURO wooden pallet only when supplied with the machine; state whether it is new, reused or returnable.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass multiplied by the attributable pallet fraction per packed machine; otherwise document not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packed machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

###### Corrugated-board dispatch boxes (`corrugated_board_boxes`)

Record the mass of formed corrugated-board boxes supplied with the packed machine, including accessory cartons.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-box mass attributable to one accepted packed machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted packed machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_and_packaging_mass`
- Sources: `ec-jrc-eup-lot12-2007`

##### Waste flows

No waste flow enters the final assembly process.

##### Elementary flows

No elementary flow enters the final assembly process.

#### Outputs

##### Product flows

###### Accepted finished automatic goods vending machine (`finished_vending_machine`)

Record the accepted complete machine at net mass before dispatch packaging.

- Selected flow: Automatic goods vending machines `0b858929-f07a-4c83-b3f7-fa69f1fa8e0d`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of one accepted finished machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_machine_acceptance`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Assembly cleaning wastewater (`assembly_wastewater`)

Record wastewater sent to on-site or off-site treatment only when process water is used; retain composition and treatment destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass attributable to the model-specific batch; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

##### Elementary flows

###### R404A charging loss to air (`r404a_charging_loss`)

Record a direct R404A release only for the R404A route; the elementary-flow UUID remains unresolved.

- Selected flow: Refrigerant R404A emission to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: positive unaccounted R404A mass from the species-specific charging balance after excluding captured material; otherwise document not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted R404A machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-2019-2024-direct-sales-refrigeration`

###### HFC-134a charging loss to air (`r134a_charging_loss`)

Record a direct HFC-134a release only for the R134a route. TianGong provides no Chinese baseName for this UUID.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: positive unaccounted R134a mass from the species-specific charging balance after excluding captured material; otherwise document not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted R134a machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-2019-2024-direct-sales-refrigeration`

###### Propane R290 charging loss to air (`propane_charging_loss`)

Record a direct propane release only for the R290 route; the elementary-flow UUID remains unresolved.

- Selected flow: Propane R290 emission to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: positive unaccounted propane mass from the species-specific charging balance after excluding captured material; otherwise document not applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted R290 machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-2019-2024-direct-sales-refrigeration`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_models` | mixed-model production | Prefer model-specific production orders, meters, work centres and bills of material so unlike machines are not pooled before normalization. |  |
| `al_shared_operations` | shared assembly, test and packaging burdens | Allocate a shared burden by a documented physical causal driver such as machine-specific cycle time, measured test energy, component mass or packaging count. Accepted-unit count may be used only when models consume materially equivalent operations. |  |
| `al_rejected_units` | rejected and reworked machines | Attribute rework and rejected-unit burdens to the production batch that caused them; do not remove those burdens from accepted output without disclosure. |  |
| `al_no_recycling_credit` | scrap, returnable packaging and recovered refrigerant | Report recovered material crossing the boundary separately when present. Do not assign avoided-burden or recycling credit inside the core factory-gate dataset unless a separately declared study method requires it. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_and_packaging_mass` | `machine_assembly_testing_packaging` | purchased components and dispatch packaging | bill of material, receipt, scale record | model_id; component_id; flow_name; supplier; supply_state; quantity; unit_mass; total_mass; pallet_share; reuse_state | Reconcile approved bill of material to receipts and weigh representative components or packed units | kg and item | each model revision; reconcile monthly | current model revision and reporting year | final assembly site and declared suppliers | Sum identical-flow masses for accepted model units; keep different component identities separate | calibrated-scale record, supplier specification, receipt and revision-controlled bill of material |
| `cp_utility_and_test_records` | `machine_assembly_testing_packaging` | assembly and test electricity | submeter and test log | meter_id; start_kWh; end_kWh; model_id; accepted_units; rejected_units; test_mode; voltage; timestamp | Read dedicated meter or allocate a shared meter by logged machine-specific cycle time | kWh | each production batch | representative production period, normally at least 12 consecutive months | final assembly and acceptance-test boundary | Subtract verified non-production loads, convert kWh to MJ and divide by accepted model units | meter calibration, time log, production order and reconciliation |
| `cp_water_balance` | `machine_assembly_testing_packaging` | process water and wastewater | meter, invoice and discharge record | inlet_mass_or_volume; wastewater_mass_or_volume; density; batch_id; model_id; treatment_destination; composition | Meter process-only water and wastewater or reconcile calibrated tank/weight records; keep sanitary water outside the boundary | kg, with measured density for volume conversion | each batch or monthly | same period as production inventory | final assembly and test-fixture cleaning boundary | Attribute only assembly or test-fixture cleaning records to the model-specific batch | meter calibration, invoices, sampling results and discharge manifest |
| `cp_refrigerant_mass_balance` | `machine_assembly_testing_packaging` | refrigerant charge and release | cylinder scale, charge station and recovery log | species; cylinder_open_mass; cylinder_close_mass; purchased_mass; returned_mass; recovered_mass; inventory_change; accepted_installed_charge; rejected_unit_charge; captured_loss; measured_release | Perform a closed mass balance separately for R404A, R134a and propane R290 using calibrated scales and charge-station records | kg | each cylinder and production batch | same period as refrigerated-model production | final refrigerant charging and recovery boundary | Reconcile each species; assign installed charge to accepted units and positive uncaptured imbalance to the matching elementary-emission row | scale calibration, cylinder IDs, machine serial numbers, leak check and recovery record |
| `cp_finished_machine_acceptance` | `machine_assembly_testing_packaging` | accepted reference product | scale, serial-number and acceptance record | model_id; serial_number; net_mass; packaged_mass; vendible_capacity; configuration; temperature_class; voltage; frequency; test_energy; refrigerant; charge; acceptance_result | Weigh each unit or a justified model sample and link acceptance results to the production order | kg and declared performance units | each accepted unit or statistically controlled lot | current model revision and reporting year | final assembly and acceptance-test boundary | Average net mass only within one materially unchanged model; reference amount is the declared model value | calibrated scale, acceptance checklist, safety test and model specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_batch_normalization` | batch component, utility, water and waste totals | normalized amount = attributable batch amount / accepted machines of the same model; retain rejected-unit and work-in-progress reconciliation | attributable batch amount; accepted model units; rejected units; work in progress | amount per accepted finished machine |  |
| `calc_electricity_mj` | `assembly_electricity` | electricity_MJ = net metered kWh × 3.6 / accepted machines of the same model | start and end kWh; excluded loads; accepted model units | MJ per accepted finished machine |  |
| `calc_refrigerant_charge_and_loss` | refrigerant input and species-specific charging-loss rows | net refrigerant used = opening inventory + purchases - closing inventory - returns; uncaptured loss = net used - accepted installed charge - rejected-unit charge - recovered or captured mass. Investigate negative or materially unbalanced results. | species-specific cylinder, inventory, installed-charge, recovery and release records | installed charge and uncaptured loss in kg per accepted machine | `eu-2019-2024-direct-sales-refrigeration` |
| `calc_reference_mass_reconciliation` | reference output and packaging | packaged mass check = net machine mass + wooden pallet share + corrugated-board boxes + any separately declared packaging; unexplained difference requires correction or disclosure | net and packaged scale records; each packaging row | reconciled reference mass and packaging disclosure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Link product name, model identifier, serial or lot, vendible capacity, configuration and acceptance result to the weighed reference output. | model specification, production order and acceptance record |
| `dq_completeness` | foreground inventory | Reconcile all received component, utility, refrigerant, packaging and waste records to the model-specific production order; explain exclusions and data gaps. | bill-of-material reconciliation and mass/energy balances |
| `dq_temporal` | reporting period | Use data representative of the declared production year and current model revision; disclose shutdowns, prototypes and abnormal rework periods. | dated meters, orders and revision history |
| `dq_geography_technology` | upstream inputs | Match supplier geography, component supply state, electricity grid, refrigeration technology and packaging reuse state; disclose every proxy. | supplier declarations and dataset metadata |
| `dq_refrigerant` | refrigerated routes | Preserve refrigerant species, purity/grade, cylinder identity, installed charge and direct charging loss without aggregation across species. | charge-station and calibrated-scale reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | reference flow | Confirm the output UUID is the complete CPC 43934 machine, not a cabinet, frame or machinery part, and confirm the reference amount equals the declared model's measured net mass. | `un-cpc-3-0-structure-2025` |
| `vr_atomic_inventory` | every inventory row | Reject collection labels and combined utilities, components, refrigerants, wastes or emissions; each row must identify one physical exchange and one applicable property/unit. |  |
| `vr_component_completeness` | purchased assemblies | Reconcile the cabinet, condensing unit when applicable, motors, board, display, dispensing mechanism and payment module to the model bill of material; disclose additional material components rather than hiding them in a combined row. | `ec-jrc-eup-lot12-2007` |
| `vr_energy` | `assembly_electricity` | Verify meter boundary, kWh-to-MJ conversion, model-specific allocation and exclusion of use-phase electricity. | `eu-2019-2024-direct-sales-refrigeration` |
| `vr_refrigerant_route` | refrigerant inputs and outputs | Require exactly the declared refrigerant species rows for each refrigerated model, reconcile charge and loss, and reject a combined refrigerant row or an emission assigned to the wrong air compartment. | `us-epa-energy-star-vending-v4-2019` |
| `vr_bilingual_uuid` | UUID-bearing rows | Confirm English and Chinese use the same UUID and that Chinese uses the direct-read TianGong baseName; for HFC-134a retain the English baseName because TianGong provides no Chinese baseName. |  |
| `vr_range_evidence` | amount ranges | Reject an externally inferred range unless at least two independent original sources have compatible boundary, functional unit and product state; specification limits are not empirical ranges. |  |
| `vr_boundary_disclosure` | dataset profile | Confirm the core result ends at factory-gate readiness and that any distribution, use, maintenance or end-of-life scenario is a separate disclosed module. | `eu-2019-2024-direct-sales-refrigeration` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate secondary dataset derived from verified foreground production records |
| downstream_use | Background dataset for manufacture of the declared automatic goods vending machine; input to separately parameterized distribution, use, maintenance and end-of-life lifecycle models |
| allowed_use | Comparisons within the same complete-machine scope, model configuration, reference mass, geography, year, allocation rule and packaging boundary; scenario modelling with separately disclosed downstream modules |
| excluded_use | Generic use-energy claims; attribution to rebuilt machines or parts; comparison of unlike dispensing, capacity or temperature functions without normalization; substitution for supplier component data when supply state differs |
| required_metadata | PCR id and version; model and configuration; geography and year; net and packaged mass; vendible capacity; dispensing and payment technology; temperature function; voltage/frequency; test energy; refrigerant and charge; design life; upstream dataset list; allocation; exclusions; data owner |
| required_quality_disclosure | primary-data coverage; meter and scale calibration; model/batch reconciliation; supplier-data share; proxies; refrigerant balance; rejected units; missing ranges; uncertainty and reviewer status |
| update_trigger | model or bill-of-material revision; new dispensing/payment/refrigeration technology; refrigerant substitution; more than 10% change in net mass, manufacturing electricity or major component mass; supplier geography change; packaging change; new reviewed UUID; or new independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official CPC 43934 product identity and complete-machine classification wording |
| `samr-gbt-4706-72-2024` | standard | State Administration for Market Regulation, GB/T 4706.72-2024, Safety of household and similar electrical appliances - Part 72: Particular requirements for commercial dispensing appliances and vending machines. https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=4BD2A369B6E03605A53E8E812ECE4B1E (retrieved 2026-09-06) | Professional Chinese vending-machine terminology and commercial vending-machine scope context |
| `eu-2019-2024-direct-sales-refrigeration` | standard | European Commission, Commission Regulation (EU) 2019/2024 laying down ecodesign requirements for refrigerating appliances with a direct sales function. https://eur-lex.europa.eu/eli/reg/2019/2024/oj/eng (retrieved 2026-09-06) | Refrigerated-vending-machine definition, use-energy significance, refrigerant disclosure, repair/recovery context and daily-energy fields |
| `ec-jrc-eup-lot12-2007` | official_guidance | European Commission preparatory study, Lot 12: Commercial refrigerators and freezers, Final Report, December 2007. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581682650/BIO_EuP_Lot_12_Final_Report.pdf (retrieved 2026-09-06) | Modular vending-machine component decomposition, bill-of-material record fields, packaging and production/use separation; not used as an empirical range |
| `us-epa-energy-star-vending-v4-2019` | standard | U.S. EPA ENERGY STAR, Product Specification for Refrigerated Beverage Vending Machines, Version 4.0, 30 July 2019. https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Refrigerated%20Beverage%20Vending%20Machines%20Version%204.0%20Final_1.pdf (retrieved 2026-09-06) | Refrigerated and combination configuration qualifiers, vendible-capacity and test fields, and R404A, R290 and R134a refrigerant examples; not used as an empirical range |
