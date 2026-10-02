---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.steam-and-hot-water
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Steam and hot water

## 1. Scope and Applicability

This PCR covers useful thermal energy supplied in steam or hot water from boilers, electric heaters, cogeneration, recovered-heat exchangers and heat pumps. The foreground package declares one carrier, its thermodynamic state, one metered supply gate and one accounting period. A mixed production portfolio is disaggregated by carrier and state before aggregation. Equipment manufacture, electricity as a reference product, unheated water, ice, cooling services and downstream heat use are excluded from this product identity. Infrastructure and its end of life are included through linked datasets when material; all exclusions and cut-offs require an explicit assessment.

The professional category translation is 蒸汽和热水: 蒸汽 denotes water vapour supplied for heat, and 热水 denotes the liquid heat carrier. The Chinese category title is an authored translation of the verified UNSD English title, not an asserted official UNSD Chinese label.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.steam-and-hot-water |
| classification_refs | CPC 3.0: 17300; classification identity only, no accepted mapping asserted |
| covered_products | Supplied steam heat; supplied hot-water heat |
| excluded_products | Boilers and turbines as equipment; unheated water; cooling; heat-use services |
| representative_product | Metered thermal energy supplied in one declared steam or hot-water state |
| production_route | Combustion boiler; electric heating; cogeneration; heat recovery; heat pump |
| market_state | Thermal energy at a declared producer or consumer supply gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply useful thermal energy through one declared heat carrier |
| How much | 1 MJ net supplied heat |
| How well | Declared pressure, temperature, phase and steam quality; supply and return enthalpy basis; gate |
| How long or cycle | Accounting period declared; include startup, shutdown and seasonal operation |
| reference_flow_link | supplied_heat |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Heat from steam or hot water `8c96c869-cd82-4301-bb74-b2f9f61ce109` |
| Reference flow property | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | MJ |
| Required qualifiers | carrier; phase; pressure; supply temperature; steam quality when wet; return temperature and pressure or explicit no-return baseline; metering gate; production technology; fuels; geography; accounting period; CHP allocation; network extent |


The reference flow is one energy exchange. Its database name covers the product category; a dataset must fix its carrier rather than combine alternative carrier exchanges. Qualifiers belong in metadata, product description or reference-flow comments. The database property label is retained for identity; thermal heat is measured as net transferred energy, not by assigning a combustion calorific value to water.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| heat_basis | supplied_heat | Energy | MJ | All quantities use per reference flow: 1 MJ net heat at the declared gate. Collection uses cp_heat with the same accounting period. |
| heat_meter | supplied_heat | Energy | MJ | Use calibrated net heat metering. Otherwise integrate supply and return enthalpy flows separately, subtracting the net exported carrier mass times a declared make-up-water baseline enthalpy. Record state, enthalpy method and steam quality; do not assume equal supply and return mass for open steam systems. |
| electric_units | generation_power; delivery_power; chp_electricity | Energy | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; retain raw readings and meter boundary. |
| gas_volume | gas_fuel | Volume | m3 | Retain gas meter reference temperature, absolute pressure, compressibility correction and supplier calorific-value basis; volume cannot be compared without matching reference conditions. |
| chemical_mass | alkali; oxygen_scavenger | Mass | kg | Record chemical product mass, purity and solution concentration; active chemical mass equals product mass times its measured mass fraction. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered fuels, electricity, make-up water and purchased steam at identified site inlets; separately declared recovered-heat inlet |
| starting_condition_role | Foreground starts at measured site receipts; background represents upstream production |
| product_classification_scope | Steam and hot-water thermal energy; electricity co-product retains separate identity |
| recursive_input_rule | Record imported steam once as imported_steam_heat; link its supplier dataset and do not unfold the same supplier recursively |
| upstream_dataset_requirement | Link compatible supplier fuel, electricity, water, chemical, imported-heat, waste-treatment and material infrastructure datasets |
| disclosure | Declare plant versus consumer gate; network length and ownership; return loop; recovery source; CHP scope; infrastructure; cut-offs and upstream coverage |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operation | foreground | Include water management, heat generation, metering and delivery, startup and standby consumption within the declared gate. | `doe-steam-boiler-water` |
| boundary_returns | water_management | Measure make-up and return separately; internal condensate circulation is a balance record, not repeated purchased-water input. Record external blowdown and leakage. | `doe-steam-boiler-water` |
| boundary_network | heat_delivery | At a consumer gate include network pumping and losses; at a plant gate disclose the excluded downstream network. | `doe-steam-boiler-water` |
| boundary_chp | heat_generation | Include the whole CHP generation and heat-recovery unit before splitting common burdens; subtract internal electrical loads from gross electrical production. | `epa-chp-efficiency` |
| boundary_additions | all processes | Add individual atomic exchanges for actual fuels, treatment agents, ash streams, refrigerants and environmental heat sources absent from the common inventory. No blanket omission of unlisted exchanges is permitted. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| water_management | Water conditioning and return accounting | required | Within declared supply gate | foreground | 1 MJ net supplied heat |
| heat_generation | Heat generation and recovery | required | Within declared supply gate | foreground | 1 MJ net supplied heat |
| heat_delivery | Metering and thermal delivery | required | Within declared supply gate | foreground | 1 MJ net supplied heat |


Each card has its own inclusion_condition. Absence requires an auditable not-applicable record, not an assumed zero. These processes form one foreground system; internal heat and water transfers are reconciled without becoming additional external purchases. Environmental heat extraction and recovered heat must be measured and declared as individual additional exchanges in relevant routes.

### Process: Water conditioning and return accounting (`water_management`)

#### Inputs

##### Product flows

###### Tap water (`makeup_water`)

Inclusion condition (`inclusion_condition`): Purchased water enters the make-up circuit.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_material; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `doe-steam-boiler-water`

###### Sodium hydroxide (`alkali`)

Inclusion condition (`inclusion_condition`): Sodium hydroxide is used in the declared water-treatment recipe.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_material; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `doe-steam-boiler-water`

###### Sodium sulfite (`oxygen_scavenger`)

Inclusion condition (`inclusion_condition`): Sodium sulfite is dosed for oxygen removal.

- Selected flow: Sodium sulfite `4fbdce66-c23d-4890-b16e-d53c39afa224`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_material; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `doe-steam-boiler-water`

#### Outputs

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown`)

Inclusion condition (`inclusion_condition`): Boiler blowdown leaves for external treatment.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_waste; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `doe-steam-boiler-water`

### Process: Heat generation and recovery (`heat_generation`)

#### Inputs

##### Product flows

###### Alternating current (`generation_power`)

Inclusion condition (`inclusion_condition`): Electricity is imported for generation equipment, heaters or heat pumps.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the exchange amount using cp_energy; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Pipeline-quality natural gas (`gas_fuel`)

Inclusion condition (`inclusion_condition`): Pipeline natural gas is burned.

- Selected flow: Pipeline-quality natural gas `7766e51e-0b64-4fbb-89cb-489c33293137`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect the exchange amount using cp_fuel; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

###### Bituminite (`coal_fuel`)

Inclusion condition (`inclusion_condition`): Bituminous coal is burned.

- Selected flow: Bituminite `f10e7264-fc49-491a-a886-f717e3c7a437`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_fuel; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

###### heavy fuel oil (`oil_fuel`)

Inclusion condition (`inclusion_condition`): Heavy fuel oil is burned.

- Selected flow: heavy fuel oil `9490cf0e-a790-44a1-9c2f-3793bbdb452d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_fuel; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

###### Wood chips (`wood_fuel`)

Inclusion condition (`inclusion_condition`): Wood chips are burned.

- Selected flow: Wood chips `e0ccd0e1-9f75-4f2a-a9b9-5ebc8b3e5315`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect the exchange amount using cp_fuel; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`
- Sources:

###### Heat from steam (`imported_steam_heat`)

Inclusion condition (`inclusion_condition`): Purchased steam supplies a heat exchanger; upstream generation is outside the foreground.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the exchange amount using cp_heat; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources:

#### Outputs

##### Product flows

###### Alternating current (`chp_electricity`)

Inclusion condition (`inclusion_condition`): A CHP unit exports net electricity after its own electricity consumption.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the exchange amount using cp_energy; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-chp-efficiency`

##### Waste flows

###### Coal combustion bottom ash (`bottom_ash`)

Inclusion condition (`inclusion_condition`): Coal bottom ash leaves for disposal; sale as a co-product requires separate classification and allocation.

- Selected flow: Coal combustion bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_waste; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Inclusion condition (`inclusion_condition`): Fossil carbon is oxidized within the foreground.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon dioxide, biogenic, to air (`biogenic_co2`)

Inclusion condition (`inclusion_condition`): Biogenic carbon is oxidized within the foreground.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen oxides, to air (`nitrogen_oxides`)

Inclusion condition (`inclusion_condition`): Combustion releases nitrogen oxides.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Sulfur dioxide, to air (`sulfur_dioxide`)

Inclusion condition (`inclusion_condition`): Fuel sulfur produces sulfur dioxide after any abatement.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Carbon monoxide, to air (`carbon_monoxide`)

Inclusion condition (`inclusion_condition`): Incomplete combustion releases carbon monoxide.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Particulate matter less than 2.5 micrometres, to air (`fine_particles`)

Inclusion condition (`inclusion_condition`): Fine particles cross the stack or fugitive air boundary.

- Selected flow: Particulate matter less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Methane, to air (`methane_emission`)

Inclusion condition (`inclusion_condition`): Methane leaks or incomplete combustion are present.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Dinitrogen monoxide, to air (`nitrous_oxide`)

Inclusion condition (`inclusion_condition`): Combustion releases nitrous oxide.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### 1,1,1,2-Tetrafluoroethane, to air (`refrigerant_loss`)

Inclusion condition (`inclusion_condition`): The declared heat pump contains R134a and leaks; other refrigerants require separate atomic rows.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the exchange amount using cp_emissions; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

### Process: Metering and thermal delivery (`heat_delivery`)

#### Inputs

##### Product flows

###### Alternating current (`delivery_power`)

Inclusion condition (`inclusion_condition`): Pumps or distribution equipment use purchased electricity.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the exchange amount using cp_energy; retain the unallocated total and provide the allocated amount per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Heat from steam or hot water (`supplied_heat`)

Inclusion condition (`inclusion_condition`): One declared carrier and one supply gate define the dataset output.

- Selected flow: Heat from steam or hot water `8c96c869-cd82-4301-bb74-b2f9f61ce109`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 1 MJ
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | all processes | Assign separately metered equipment and delivery loads directly before allocating shared generation burdens. |  |
| allocation_chp | heat_generation | For indivisible CHP common burdens use a declared physical allocation consistent with the study method. Collect net exported electricity, useful heat by grade and common fuel use; document why energy, exergy or another causal model represents the coupled process. Do not silently impose equal-value energy allocation across different heat grades. | `epa-chp-efficiency` |
| allocation_recovery | imported_steam_heat | Recovered heat requires a stated upstream burden or cut-off agreement and linked source process. Avoided heat or electricity is a separate consequential comparison; never subtract it from attributional inventory without declaring system expansion. |  |
| allocation_losses | heat_delivery | Assign actual generation and network losses to heat delivered at the declared gate. Return condensate is internal recovery, not an automatic avoided-production credit. | `doe-steam-boiler-water` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_heat | heat_delivery | thermal output and imported heat | meter and state records | carrier; gate; supplied and returned masses; pressure; temperatures; steam quality; supply and return enthalpy; net heat; make-up baseline enthalpy | Calibrated heat meter or thermodynamic integration; reconcile supplier heat meters and return-loop records | MJ | continuous with monthly reconciliation | same full declared operating period | declared heat supply gates | per reference flow | calibration; enthalpy method version; heat balance |
| cp_energy | heat_generation | electrical input and output | electricity meters | meter id; process; gross generation; own use; imported and exported electricity; kWh | Submeter heaters, auxiliaries and network pumps; reconcile purchases and CHP generation | MJ | continuous with monthly reconciliation | same full declared operating period | site and included network | per reference flow | meter calibration; bills; no gross-net double count |
| cp_fuel | heat_generation | individual fuel receipts and use | fuel stock and meter records | fuel identity; opening stock; receipts; closing stock; moisture; heating value; reference conditions | Reconcile meter or weighed receipts with stock change and supplier analyses for each fuel | kg or m3 as specified by row | each receipt and monthly balance | same full declared operating period | generation units inside foreground | per reference flow | weighing; meter correction; fuel certificates |
| cp_material | water_management | water and individual chemicals | meter and dosing records | make-up mass; return mass; chemical identity; delivered mass; concentration; stock change | Meter make-up separately from circulation; reconcile chemical dosing and purchase stocks | kg | continuous water and each chemical batch | same full declared operating period | water-conditioning system | per reference flow | calibration; dosing logs; recipe and assay |
| cp_waste | water_management | blowdown and ash leaving site | discharge and transfer records | waste identity; mass; moisture; destination; treatment; discharged water composition | Meter discharges; weigh ash shipments; keep treatment manifests; exclude internal circulation | kg | each transfer and monthly totals | same full declared operating period | external waste exits | per reference flow | discharge analyses; treatment and weighing records |
| cp_emissions | heat_generation | individual air emissions | stack tests; balances; leak logs | chemical identity; compartment; stack concentration and flow; hours; fuel carbon; biogenic fraction; refrigerant charge and replacement | Integrate species-specific monitoring; if estimated retain site activity, validated factor, method and uncertainty; retain refrigerant stock balance | kg | continuous where monitored; otherwise each test and monthly activity | same full declared operating period | direct stack and fugitive sources | per reference flow | test reports; factor original source; mass-balance closure |


Protocol process_id identifies its lead process; cp_heat also covers imported_steam_heat, cp_energy also covers heat_delivery, and cp_waste also covers heat_generation. Preserve raw totals. After direct attribution and declared allocation, divide the applicable period total by net heat supplied in MJ to obtain the per-reference-flow exchange. Record supplied heat as exactly 1 MJ, not the period total. No cross-route numeric range is prescribed.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| heat_integration | supplied_heat; imported_steam_heat | For each interval: supplied mass times supply specific enthalpy minus returned mass times return specific enthalpy minus net exported mass times baseline specific enthalpy; sum and divide by 1000 for kg and kJ/kg to yield MJ. Equal-mass closed loops reduce to mass times enthalpy difference; no-return steam uses the declared baseline. | cp_heat | net supplied heat in MJ |  |
| period_normalization | all inventory rows | Divide the attributed period exchange total by net supplied heat in MJ; supplied_heat is 1 MJ. Apply the documented allocation before division. | cp_heat; cp_energy; cp_fuel; cp_material; cp_waste; cp_emissions | exchange per reference flow |  |
| electric_conversion | generation_power; delivery_power; chp_electricity | Multiply recorded kWh by 3.6 to obtain MJ. | cp_energy | electrical energy in MJ |  |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_period | all inventory rows | Use one consistent full operating period and preserve seasonal operation, outages and startup. | meter and production logs |
| quality_balance | foreground | Reconcile fuel, heat, water, stock and electricity balances; disclose residuals and measurement uncertainty without inventing a tolerance. | balance sheets and calibration |
| quality_state | supplied_heat | No interchangeability across unmatched carrier, temperature, pressure, enthalpy baseline or gate. | state and supply agreement |
| quality_emissions | heat_generation | Separate fossil and biogenic carbon; declare NOx reporting convention and particle size; estimates require traceable factors and local activity. | emission tests and site records |
| quality_completeness | all processes | Add actual atomic exchanges absent from the common inventory and document route-specific absences; identify all unverified identities and missing range evidence. | site flow diagram and source review |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | supplied_heat | Require exactly 1 MJ output, all required qualifiers and the same denominator for every inventory row and collection protocol. |  |
| validate_identity | all inventory rows | Check atomic exchange identity, flow type, product state, property, unit and public UUID support; an unresolved UUID remains explicit. |  |
| validate_balance | foreground | Check period balances, allocation sums, double counting of purchased heat, imported/exported electricity and recycled water; unexplained residuals require correction or disclosure. |  |
| validate_gate | heat_delivery | A consumer-gate dataset must contain actual delivery pumping and loss accounting, rather than assuming plant output equals delivered heat. | `doe-steam-boiler-water` |
| validate_evidence | all inventory rows | Do not replace site records with an unsupported industry range; missing quantitative evidence must remain a collection requirement. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified thermal-energy inputs in process and lifecyclemodel projections |
| allowed_use | Matching carrier, thermodynamic grade, gate, region and technology |
| excluded_use | Unqualified fuel substitution; cooling services; equipment production; automatic avoided-electricity claims |
| required_metadata | reference qualifiers; accounting period; boundary; flow identity; supplier links; allocation method; infrastructure assessment |
| required_quality_disclosure | measurement uncertainty; missing records; estimated emissions; unresolved identities; upstream coverage; range limitations |
| update_trigger | Fuel or technology change; revised gate or heat grade; network or return-loop change; new emissions measurement |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-structure | official_guidance | UNSD, Central Product Classification Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; original rows 526-532; retrieved 2026-10-01 | Product identity only |
| doe-steam-boiler-water | official_guidance | U.S. Department of Energy, Best Management Practice #8: Steam Boiler Systems; https://www.energy.gov/cmei/femp/best-management-practice-8-steam-boiler-systems ; Operations and Maintenance Options and Retrofit Options; retrieved 2026-10-01 | Make-up metering, condensate recovery, blowdown and water-treatment collection |
| epa-chp-efficiency | official_guidance | U.S. EPA, Methods for Calculating CHP Efficiency; https://www.epa.gov/chp/methods-calculating-chp-efficiency ; Total System Efficiency; updated 13 February 2026; retrieved 2026-10-01 | CHP net useful outputs and caution about equating electrical and thermal energy; no efficiency ranges adopted |
