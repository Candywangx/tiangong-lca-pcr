---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.crude-oil
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Crude oil

## 1. Scope and Applicability

This PCR covers conventional crude oil recovered from petroleum reservoirs, separated and conditioned before the declared field production gate. It distinguishes well development, lift, oil/gas/water separation, produced-water handling and measured dispatch. Oil-shale retorting, oil-sand bitumen recovery, synthetic crude manufacture and refined fuels are excluded. Offshore operations require their own field-specific environmental and infrastructure evidence; the cited onshore guideline cannot establish an offshore inventory. CPC 3.0 12011 refers to conventional crude oil in SIEC 4100; the classification does not define field yield or a universal crude density. Sources: `un-cpc3-notes-2025`, `ifc-onshore-oil-gas-2007`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.crude-oil |
| classification_refs | CPC 3.0: 12011 |
| covered_products | Conventional crude petroleum at the declared field production gate |
| excluded_products | Non-conventional oils; mined shale or sand; refining; downstream fuel combustion |
| representative_product | Conventional crude petroleum at the declared field production gate |
| production_route | Well development and reservoir lift; separation, stabilization, water management and dispatch |
| market_state | Bulk crude refinery feedstock; specify stabilization, water/sediment and dilution status |



## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide crude petroleum feedstock for subsequent refining |
| How much | 1 kg net crude |
| How well | Declared crude grade, sulfur content, density at stated temperature, water/sediment and stabilization state |
| How long or cycle | One production-period output; no service lifetime |
| reference_flow_link | crude_dispatch |



| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Petroleum oils and oils obtained from bituminous minerals, crude `b7ce9d42-8843-4752-b408-040a32e6aa4e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | country; field or feedstock source; production period; extraction route; crude grade; density and temperature; sulfur; water and sediment; stabilization; added diluent identity and mass; production gate; co-products; allocation |



## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use net crude mass at the gate, excluding free water, sediment, exported gas and added diluent. Measure using cp_crude_dispatch. |
| volume_conversion | reference product | Mass | kg | Convert metered crude volume to mass using measured density at the same temperature and water/sediment corrections; retain the original volume, temperature and density evidence. Do not assume a universal barrel-to-kg factor. |
| gas_state | fuel_gas; natural_gas_coproduct | Volume | m3 | Retain gas composition, pressure, temperature and dry/wet convention; distinguish metered from standard volume. No assumed density or calorific value. |
| electric_energy | electricity | Net calorific value | MJ | Convert electricity records using 1 kWh = 3.6 MJ; this is a unit identity, not a fuel heating value. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Reservoir crude in ground, or purchased untreated conventional crude for a separately declared conditioning-only foreground package |
| starting_condition_role | Physical foreground inlet; never an assumption of zero upstream burden |
| product_classification_scope | Crude oils before refining; minerals and co-produced gas are separate inputs or outputs |
| recursive_input_rule | Purchased crude input carries a compatible upstream dataset; internal crude transfers are reconciled without adding a second external input or output |
| upstream_dataset_requirement | Link electricity, fuels, water, hydrogen and mined feedstocks to compatible supply datasets. If mining or drilling is outside foreground, attach its disclosed upstream burden; no silent zero-burden inlet |
| disclosure | Lift and separation technology; oil/gas/water balance; flaring; onshore/offshore scope; infrastructure and abandonment coverage |



| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | foreground | Include recovery, gathering, separation, conditioning, in-boundary storage, direct combustion, flaring and fugitive losses up to the declared gate; offshore operations require site evidence rather than treating onshore guidance as offshore measurements. | ifc-onshore-oil-gas-2007 |
| boundary_completeness | foreground | The cards are a collection core, not an exhaustive list for every field. Add one atomic row for each actual chemical formulation, diluent, drilling input, land occupation, waste and speciated discharge absent from the core. Retain evidence for absence; disclose capital and abandonment burdens via linked datasets or separate records. Exclude post-gate transport, refining and final combustion from foreground. | ifc-onshore-oil-gas-2007 |



## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Reservoir crude recovery | required | Conventional reservoir extraction | foreground production | per 1 kg reference flow |
| conditioning | Separation and residue handling | required | Crude separation and treatment before dispatch | foreground collection block | per 1 kg reference flow |
| development | Well development | conditional | Well drilling is inside the declared foreground boundary | foreground collection block | per 1 kg reference flow |
| dispatch | Production-gate storage and dispatch | required | Net crude measurement at the declared gate | foreground collection block | per 1 kg reference flow |



Process blocks partition one aggregate foreground system. Do not count internal transfers as external exchanges. Utility and direct-emission cards in recovery collect the system-wide totals once, with submetered attribution retained by operation. Each conditional card is included only when its stated physical exchange occurs.

### Process: Reservoir crude recovery (`recovery`)

#### Inputs

##### Product flows

###### Electricity (`electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Purchased electricity for all foreground operations; assign shared meters once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `ifc-onshore-oil-gas-2007`

###### Diesel fuel (`diesel`)

Diesel-powered equipment where present; exclude downstream delivery fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_diesel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diesel`
- Sources: `ifc-onshore-oil-gas-2007`

###### natural gas in the gaseous state (`fuel_gas`)

Externally supplied gaseous natural gas burned on site; internally recovered gas is an internal transfer, not a purchased input.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_fuel_gas.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel_gas`
- Sources: `ifc-onshore-oil-gas-2007`

###### Tap water (`water`)

Supplied tap water where used; separate reservoir water and internally recycled water.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `ifc-onshore-oil-gas-2007`

###### Heat from steam (`steam`)

Imported heat delivered by steam for conventional-crude conditioning; report pressure and steam quality. Measure imported heat energy in MJ. On-site generation is modelled using its fuel and water without counting imported heat.

- Selected flow: Heat from steam `c333ae82-c22d-4cb0-8f0a-b10017eec1f7`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_steam.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources:

##### Elementary flows

###### Crude petroleum in ground (`oil_resource`)

Reservoir oil extraction only; distinguish resource removal from marketable product.

- Selected flow: Crude petroleum in ground
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_oil_resource.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oil_resource`
- Sources: `ifc-onshore-oil-gas-2007`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Direct fossil CO2 from combustion, flaring and processing; outdoor air with unspecified subcompartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_co2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2`
- Sources: `ifc-onshore-oil-gas-2007`

###### methane (fossil) (`methane`)

Direct fossil methane from vents, leaks, tanks and flare slip; do not equate all flare-feed gas with methane emitted.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_methane.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_methane`
- Sources: `ifc-onshore-oil-gas-2007`

###### Nitrogen oxides, expressed as nitrogen dioxide (`nox`)

Measured outdoor combustion NOx reported as NO2-equivalent mass; retain reporting convention, not N2O.

- Selected flow: Nitrogen oxides, expressed as nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_nox.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nox`
- Sources: `ifc-onshore-oil-gas-2007`

###### Sulfur dioxide to outdoor air (`so2`)

Sulfur dioxide where sulfur-bearing fuel or gas is processed; outdoor release only.

- Selected flow: Sulfur dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_so2.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2`
- Sources: `ifc-onshore-oil-gas-2007`

###### carbon monoxide (fossil) (`co`)

Direct fossil carbon monoxide from combustion or flaring to outdoor air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_co.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co`
- Sources: `ifc-onshore-oil-gas-2007`

###### hydrogen sulfide (`h2s`)

Hydrogen sulfide released to outdoor air where sour fluids are present.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_h2s.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_h2s`
- Sources: `ifc-onshore-oil-gas-2007`

###### particles (PM2.5) (`pm`)

Measured PM2.5 from combustion or material handling; do not substitute total dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_pm.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm`
- Sources: `ifc-onshore-oil-gas-2007`

### Process: Separation and residue handling (`conditioning`)

#### Outputs

##### Product flows

###### natural gas in the gaseous state (`natural_gas_coproduct`)

Saleable separated gaseous natural gas exported across the production boundary; internal use, reinjection and flaring are not co-product exports.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_natural_gas_coproduct.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas_coproduct`
- Sources: `ifc-onshore-oil-gas-2007`

##### Waste flows

###### Saline produced water transferred for treatment (`produced_water`)

Produced water transferred to external treatment or disposal; record salinity, hydrocarbon content and fate. Internal reinjection is recorded in the water balance only.

- Selected flow: Saline produced water transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_produced_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_produced_water`
- Sources: `ifc-onshore-oil-gas-2007`

### Process: Well development (`development`)

#### Outputs

##### Waste flows

###### Water-based drilling cutting (`drill_cuttings`)

Water-based drilling in well development inside the foreground boundary; retain drilling-fluid contamination and disposal records.

- Selected flow: Water-based drilling cutting `a813d7ec-7db6-4922-be7e-130d41033c6c`
- Flow property / unit: Mass / kg
- Amount rule: Collect the measured period total of this exchange; normalize to net crude output using cp_drill_cuttings.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_cuttings`
- Sources: `ifc-onshore-oil-gas-2007`

### Process: Production-gate storage and dispatch (`dispatch`)

#### Outputs

##### Product flows

###### Petroleum oils and oils obtained from bituminous minerals, crude (`crude_dispatch`)

Net crude at declared production gate; associated gas, free water, mineral solids and added diluent are excluded from the reference mass.

- Selected flow: Petroleum oils and oils obtained from bituminous minerals, crude `b7ce9d42-8843-4752-b408-040a32e6aa4e`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crude_dispatch`
- Sources: `un-cpc-3-structure`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_operations | Use cp_allocation to separate directly metered crude-only, gas-only and shared operations before assigning shared burdens. Keep crude, gas and recovered products distinct; returned gas and water are internal flows. |  |
| allocation_causal | shared_burdens | Use documented process-specific causal relationships from cp_allocation. If no defensible physical relationship exists, use declared period revenue shares with actual product quantities and prices, and report a physical-allocation sensitivity. Do not assume one universal energy or mass fraction; no displacement credit for flaring or disposal. |  |
| allocation_losses | losses | Assign losses and treatment burdens to the operation that caused them, using the same declared allocation method as its products. Compare pre-allocation total balances and retain the unallocated inventory. |  |



## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_oil_resource | recovery | Crude petroleum in ground | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_electricity | recovery | Electricity | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | MJ | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_diesel | recovery | Diesel fuel | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_fuel_gas | recovery | natural gas in the gaseous state | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | m3 | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_water | recovery | Tap water | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | m3 | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_steam | recovery | Heat from steam | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Use a calibrated heat meter to record imported steam heat in MJ; retain steam mass flow, pressure, temperature, quality and condensate-return conditions supporting the meter output. | MJ | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_co2 | recovery | carbon dioxide (fossil) | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_methane | recovery | methane (fossil) | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_nox | recovery | Nitrogen oxides, expressed as nitrogen dioxide | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_so2 | recovery | Sulfur dioxide to outdoor air | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_co | recovery | carbon monoxide (fossil) | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_h2s | recovery | hydrogen sulfide | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_pm | recovery | particles (PM2.5) | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_natural_gas_coproduct | conditioning | natural gas in the gaseous state | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | m3 | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_produced_water | conditioning | Saline produced water transferred for treatment | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_drill_cuttings | development | Water-based drilling cutting | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Meter, weigh or use traceable supplier/waste-transfer records for this named exchange; emissions require species-resolved monitoring or a documented source-specific model with measured activity | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_crude_dispatch | dispatch | Petroleum oils and oils obtained from bituminous minerals, crude | measurement_record | period; site; operation; exchange amount; meter unit; uncertainty; net crude output kg; internal transfer exclusion; allocation evidence | Calibrated crude mass/volume meter with same-temperature density, water/sediment and diluent corrections; reconcile dispatch with tank inventory | kg | each shift; monthly reconciliation | complete production year or justified representative period | same field or production site and gate | per 1 kg reference flow | calibration, original records and uncertainty |
| cp_allocation | conditioning | co-products and shared burdens | allocation_record | product amounts; prices; shared meters; causal relationships; period; currency | Reconcile shared burdens by operation; document physical causality and same-period sales records | kg; m3; currency | monthly | same production year | same production boundary | burden assigned to crude normalized per 1 kg reference flow | unallocated inventory and sensitivity results |



### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Divide period net exchange amount by same-period net crude output mass; assign shared burdens using cp_allocation first; reference output is 1 kg | exchange collection protocols; cp_crude_dispatch; cp_allocation | exchange per 1 kg reference flow |  |
| gas_balance | natural_gas_coproduct; methane | Reconcile recovered gas with export, internal fuel use, reinjection, venting and flaring; calculate species emissions only from measured composition and combustion efficiency, not total gas volume | gas meters, composition and fate records | species emissions and gas balance | ifc-onshore-oil-gas-2007 |



### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | Confirm declared crude state, route and all required qualifiers; mineral feedstock or refined fuel cannot be the reference product | product tests and gate records |
| dq_completeness | foreground | Reconcile every actual exchange against the site process diagram; disclose estimates, uncertainty and recollection needs; missing data is not zero | site balances, procurement, transfers and emissions |
| dq_range | important flows | Use inferred empirical ranges only with at least two independent original-text-verified sources compatible in boundary and state; no external empirical range is prescribed here | foreground records and source applicability analysis |



## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | crude_dispatch | Confirm reference output is 1 kg net crude and every row and collection aggregation uses the same gate, period and net-mass denominator |  |
| validate_balance | foreground | Reconcile pre-allocation oil, gas, water and solids balances; disclose stock changes and measurement uncertainty; output mass must not duplicate assumed resource extraction |  |
| validate_emissions | direct_emissions | Reconcile combustion, flaring, venting and fugitive sources separately; species, mass units and air compartments must agree; NOx cannot be substituted by N2O | ifc-onshore-oil-gas-2007 |
| validate_uuid | inventory | Check public flow identity, state, type, property and units for each row; unresolved identity remains a named exchange and cannot receive an unverified proxy UUID |  |



## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Crude production supply for refinery feedstock with compatible route, state and boundary |
| excluded_use | Fuel combustion, refining stage or undeclared mixed-route comparisons |
| required_metadata | field, country, route, gate, period, crude properties, dilution state, co-products and allocation, upstream datasets |
| required_quality_disclosure | coverage, missing data, unresolved identities, measurement/model uncertainty, allocation sensitivity, infrastructure and abandonment boundary |
| update_trigger | material change in route, feedstock, recovery technology, gate state, measurement or upstream supply |



## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-structure | official_guidance | Central Product Classification (CPC) Version 3.0 Structure; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-30 | category identity; CSV rows 446-456 |
| ifc-onshore-oil-gas-2007 | official_guidance | Environmental, Health, and Safety Guidelines for Onshore Oil and Gas Development; https://www.ifc.org/content/dam/ifc/doc/2000/2007-onshore-oil-gas-development-ehs-guidelines-en.pdf; retrieved 2026-09-30 | production separation, air sources, flare records, produced water; pages 2, 4-5, 27 |

| `un-cpc3-notes-2025` | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pp.56–57. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category distinction only; does not establish process quantities |
