---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electrical energy

## 1. Scope and Applicability

Electrical energy supplied at one declared generation net-export gate, storage-discharge gate or transmission/distribution delivery meter, including actual fossil/biogenic fuel or waste combustion, nuclear, hydro/pumped storage, wind, ocean wave/tidal, solar photovoltaic/thermal, geothermal, ambient/waste-heat conversion and electrochemical fuel-cell routes; actual national/regional/supplier portfolios are included with measured source weights. Select one actual technology or documented mix, geography/year, AC/DC form, voltage/frequency and meter interface; these alternatives are not simultaneous mandatory operations. Generation-only ends at net export; delivered electricity includes actual transformation/network losses and infrastructure through that gate. Storage is not primary generation: retain charging electricity, own use, measured losses, stock change, lifetime throughput and actual returned electricity without avoided-grid credits. Record upstream fuel/material production, actual construction/replacement/decommissioning, development/land, water and wastes, direct emissions, outage/standby own use and declared control systems; do not omit infrastructure because operating fuel is absent. Electricity supply is distinct from transmission service sold alone, fuel/heat as reference product, certificates sold alone and consumer equipment manufacture. CHP heat co-products may exist but this PCR reference remains electricity. One representative CN high-voltage AC production-mix identity does not narrow this full category. All other voltage/DC/geography/single-technology/delivery states require compatible identities. Public EPD scope supports the technology list only, not unacquired full-document cutoff/other rules; route-specific data collection below is foreground methodology requiring actual site evidence. `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy |
| classification_refs | CPC 3.0:17100 |
| covered_products | Electrical energy from actual generation technologies, portfolios, storage discharge or delivered networks at one declared gate |
| excluded_products | Fuel, useful heat or certificates as reference products; network service alone; electrical equipment manufacture; assumed avoided electricity |
| representative_product | Compatible CN high-voltage AC net production mix at plant |
| production_route | Construction replacement and decommissioning; Thermal and fuel-cell conversion; Nuclear power generation; Renewable resource conversion; Cooling and resource-water management; Emissions and waste control; Portfolio transformation and network delivery; Electrical storage operation; Metered electrical and useful heat outputs |
| market_state | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 MJ accepted net electrical energy at a specified meter interface; this is not1 MJ fuel heat or1 kg equipment |
| How much | 1 MJ |
| How well | site/geography/year; actual technology or source portfolio and providers; AC/DC, voltage/frequency, meter locations and calibration; generation gross/net, own-use source and matched net exports; delivery losses/voltage changes or charging/discharging and storage stock; accepted output period and positive D; actual fuel grade/moisture/NCV and fossil/biogenic fractions; heat enthalpy/return state if CHP; cooling withdrawal/return/consumption and basin; direct species/compartments and waste fate; measured construction/replacement/closure lifetime and accepted throughput; allocation and uncertainty; physical mix versus contractual attribute claim and retirement/residual disclosure. Representative ad12cfb1 is CN national AC production mix at plant35–330kV, not generic purchased or customer-delivered electricity; exact source weights and year are provider-defined. |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Alternating current `ad12cfb1-61f3-45d1-a12c-5903a2fc7202` |
| Reference flow property | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` |
| Reference unit | MJ |
| Required qualifiers | site/geography/year; actual technology or source portfolio and providers; AC/DC, voltage/frequency, meter locations and calibration; generation gross/net, own-use source and matched net exports; delivery losses/voltage changes or charging/discharging and storage stock; accepted output period and positive D; actual fuel grade/moisture/NCV and fossil/biogenic fractions; heat enthalpy/return state if CHP; cooling withdrawal/return/consumption and basin; direct species/compartments and waste fate; measured construction/replacement/closure lifetime and accepted throughput; allocation and uncertainty; physical mix versus contractual attribute claim and retirement/residual disclosure. Representative ad12cfb1 is CN national AC production mix at plant35–330kV, not generic purchased or customer-delivered electricity; exact source weights and year are provider-defined. |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Net calorific value | MJ | D is the positive accepted net gate-output total in MJ. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 MJ reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Net calorific value | MJ | D is independently calibrated metered accepted net electrical output MJ at the selected gate, positive after stock reconciliation;1 kWh =3.6 MJ. One dataset uses exactly one generation, storage or delivery output basis; never sum charging, gross generation, net export and delivery as outputs. Generation D equals actual metered net export; gross-minus-own-use may reproduce it only with matched meter boundaries and periods, keeping purchased auxiliaries as separate inputs and not subtracting them twice. Imported/resold electricity and internal transfers are identified independently. A mix uses each actual source contribution on the same net gate basis, with weights summing to1 and source losses/providers documented; do not multiply a source gross-output factor by net shares. Delivered electricity reconciles matched network input, accepted output, other exports, technical losses, theft/meter gaps and stock; input = D/(1-l) only for independently established matching loss fraction0<=l<1 and no unaccounted exports. Storage reconciles measured charging = discharged/other useful exports + measured electrical losses + actual stock increase on the same meter boundary; do not invent roundtrip efficiency, lifetime or avoided generation. Fuel energy is actual consumed mass times matched as-received NCV, or measured volume/density/calorific value at stated conditions; separate electrical MJ from thermal fuel MJ. Gas mass/standard volume conversion requires measured density/reference T/P, not assumed composition. Direct gas emissions use measured species/load or documented compatible activity factors; do not reuse purchased-electricity factors as onsite fuel emissions. Fossil/biogenic CO2, CH4,N2O and captured carbon are distinct; no assumed zero biomass/waste CO2. Useful steam heat = matched steam mass times supplied-minus-return enthalpy; hot-water heat uses actual mass and measured enthalpy difference, not total water mass as energy. Useful CHP heat and electricity stay separate co-products before declared allocation. Lifetime material/infrastructure quantities are assigned once over measured/justified expected accepted electrical throughput with sensitivity, never invented machine mass or output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual energy resource and upstream fuel/material inputs for generation; purchased charging electricity for storage; individually identified net-source electricity for portfolio/network delivery |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Electrical energy from actual generation technologies, portfolios, storage discharge or delivered networks at one declared gate |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/geography/year; actual technology or source portfolio and providers; AC/DC, voltage/frequency, meter locations and calibration; generation gross/net, own-use source and matched net exports; delivery losses/voltage changes or charging/discharging and storage stock; accepted output period and positive D; actual fuel grade/moisture/NCV and fossil/biogenic fractions; heat enthalpy/return state if CHP; cooling withdrawal/return/consumption and basin; direct species/compartments and waste fate; measured construction/replacement/closure lifetime and accepted throughput; allocation and uncertainty; physical mix versus contractual attribute claim and retirement/residual disclosure. Representative ad12cfb1 is CN national AC production mix at plant35–330kV, not generic purchased or customer-delivered electricity; exact source weights and year are provider-defined. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Electrical energy supplied at one declared generation net-export gate, storage-discharge gate or transmission/distribution delivery meter, including actual fossil/biogenic fuel or waste combustion, nuclear, hydro/pumped storage, wind, ocean wave/tidal, solar photovoltaic/thermal, geothermal, ambient/waste-heat conversion and electrochemical fuel-cell routes; actual national/regional/supplier portfolios are included with measured source weights. Select one actual technology or documented mix, geography/year, AC/DC form, voltage/frequency and meter interface; these alternatives are not simultaneous mandatory operations. Generation-only ends at net export; delivered electricity includes actual transformation/network losses and infrastructure through that gate. Storage is not primary generation: retain charging electricity, own use, measured losses, stock change, lifetime throughput and actual returned electricity without avoided-grid credits. Record upstream fuel/material production, actual construction/replacement/decommissioning, development/land, water and wastes, direct emissions, outage/standby own use and declared control systems; do not omit infrastructure because operating fuel is absent. Electricity supply is distinct from transmission service sold alone, fuel/heat as reference product, certificates sold alone and consumer equipment manufacture. CHP heat co-products may exist but this PCR reference remains electricity. One representative CN high-voltage AC production-mix identity does not narrow this full category. All other voltage/DC/geography/single-technology/delivery states require compatible identities. Public EPD scope supports the technology list only, not unacquired full-document cutoff/other rules; route-specific data collection below is foreground methodology requiring actual site evidence. | `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| infrastructure | Construction replacement and decommissioning | conditional | Actual attributable lifetime infrastructure | Foreground production | per 1 MJ reference flow |
| thermal | Thermal and fuel-cell conversion | conditional | Actual fuel/waste combustion or fuel-cell route only | Foreground production | per 1 MJ reference flow |
| nuclear | Nuclear power generation | conditional | Only actual nuclear technology | Foreground production | per 1 MJ reference flow |
| renewable | Renewable resource conversion | conditional | Actual hydro wind solar ocean or geothermal units individually identified | Foreground production | per 1 MJ reference flow |
| water | Cooling and resource-water management | conditional | Actual withdrawal return treatment and consumption | Foreground production | per 1 MJ reference flow |
| control | Emissions and waste control | conditional | Actual direct species and managed residues | Foreground production | per 1 MJ reference flow |
| network | Portfolio transformation and network delivery | conditional | Actual portfolio/network gate; absent for generation-only except actual step-up | Foreground production | per 1 MJ reference flow |
| storage | Electrical storage operation | conditional | Actual storage/discharge gate or expressly included storage | Foreground production | per 1 MJ reference flow |
| dispatch | Metered electrical and useful heat outputs | required | Every chosen electrical gate; heat only actual CHP | Foreground production | per 1 MJ reference flow |

### Process: Construction replacement and decommissioning (`infrastructure`)

#### Inputs

##### Product flows

###### Structural concrete (`concrete`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Structural concrete
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_concrete; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_concrete`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Reinforcing steel (`steel`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Reinforcing steel
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Wind-turbine assembly (`wind_turbine`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Wind-turbine assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wind_turbine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wind_turbine`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Monocrystalline-silicon photovoltaic module (`pv_module`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Monocrystalline-silicon photovoltaic module
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pv_module; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pv_module`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Lithium-ion storage-battery pack (`battery`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Lithium-ion storage-battery pack
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_battery; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_battery`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Construction and closure diesel (`construction_diesel`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_construction_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_construction_diesel`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Thermal and fuel-cell conversion (`thermal`)

#### Inputs

##### Product flows

###### Consumed hard coal (`coal`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed hard coal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_coal; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_coal`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Consumed lignite (`lignite`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed lignite
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lignite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lignite`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Consumed natural gas (`gas`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Consumed heavy fuel oil (`fuel_oil`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_fuel_oil; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel_oil`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Consumed wood chips (`wood`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed wood chips
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wood; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Consumed hydrogen for fuel cells (`hydrogen`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Consumed hydrogen for fuel cells
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_hydrogen; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrogen`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### Waste flows

###### Residual municipal waste sent to incineration (`residual_waste`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Residual municipal waste sent to incineration
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_residual_waste; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual_waste`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Nuclear power generation (`nuclear`)

#### Inputs

##### Product flows

###### Uranium-dioxide nuclear fuel assembly (`uo2_fuel`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Uranium-dioxide nuclear fuel assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_uo2_fuel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uo2_fuel`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### Outputs

##### Waste flows

###### Spent nuclear fuel assembly (`spent_fuel`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Spent nuclear fuel assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_fuel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_fuel`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Spent radioactive ion-exchange resin (`radioactive_resin`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Spent radioactive ion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_radioactive_resin; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_radioactive_resin`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Renewable resource conversion (`renewable`)

#### Inputs

##### Elementary flows

###### Incident solar radiation energy (`solar`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Incident solar radiation energy
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_solar; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solar`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Incident wind kinetic energy (`wind`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Incident wind kinetic energy
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_wind; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wind`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Intercepted ocean-wave energy (`wave`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Intercepted ocean-wave energy
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_wave; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wave`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Intercepted tidal mechanical energy (`tidal`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Intercepted tidal mechanical energy
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_tidal; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tidal`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Extracted geothermal heat (`geothermal`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Extracted geothermal heat
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_geothermal; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_geothermal`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Cooling and resource-water management (`water`)

#### Inputs

##### Product flows

###### Purchased process water (`purchased_water`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_purchased_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_water`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### Elementary flows

###### River water withdrawn (`river_water`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: River water withdrawn
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### Outputs

##### Waste flows

###### Cooling-system wastewater transferred for treatment (`wastewater`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Cooling-system wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### Elementary flows

###### Water returned to river (`river_return`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Water returned to river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_return; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_return`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Water evaporated to air (`evaporated_water`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Water evaporated to air
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_evaporated_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_evaporated_water`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Emissions and waste control (`control`)

#### Inputs

##### Product flows

###### Urea for flue-gas control (`urea`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Urea for flue-gas control
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_urea; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_urea`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Limestone for flue-gas desulfurization (`limestone`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Limestone for flue-gas desulfurization
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_limestone; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_limestone`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

#### Outputs

##### Product flows

###### Captured carbon dioxide transferred as product (`captured_co2`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Captured carbon dioxide transferred as product
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_captured_co2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_captured_co2`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### Waste flows

###### Collected combustion fly ash (`fly_ash`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Collected combustion fly ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_fly_ash; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fly_ash`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Combustion bottom ash (`bottom_ash`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Combustion bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_bottom_ash; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bottom_ash`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Flue-gas-desulfurization sludge (`fgd_sludge`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Flue-gas-desulfurization sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_fgd_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fgd_sludge`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

##### Elementary flows

###### Fossil carbon dioxide released to outdoor air (`fossil_co2`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_fossil_co2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fossil_co2`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Biogenic carbon dioxide released to outdoor air (`biogenic_co2`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Biogenic carbon dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_biogenic_co2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_biogenic_co2`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Methane released to outdoor air (`ch4`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Methane released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ch4; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ch4`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Nitrous oxide released to outdoor air (`n2o`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Nitrous oxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_n2o; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_n2o`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Sulfur dioxide released to outdoor air (`so2`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Sulfur dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_so2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Nitrogen dioxide released to outdoor air (`no2`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Nitrogen dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_no2; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### PM10 released to outdoor air (`pm10`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Sulfur hexafluoride released to outdoor air (`sf6`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Sulfur hexafluoride released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sf6; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sf6`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Hydrogen sulfide released to outdoor air (`h2s`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Hydrogen sulfide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_h2s; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_h2s`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Portfolio transformation and network delivery (`network`)

#### Inputs

##### Product flows

###### Purchased alternating-current source electricity (`source_power`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Purchased alternating-current source electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_source_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_source_power`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Sulfur hexafluoride for switchgear (`sf6_charge`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Sulfur hexafluoride for switchgear
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sf6_charge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sf6_charge`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Mineral insulating transformer oil (`transformer_oil`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Mineral insulating transformer oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_transformer_oil; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transformer_oil`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Electrical storage operation (`storage`)

#### Inputs

##### Product flows

###### Purchased alternating-current charging electricity (`charging_power`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Purchased alternating-current charging electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_charging_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_charging_power`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

### Process: Metered electrical and useful heat outputs (`dispatch`)

#### Outputs

##### Product flows

###### Useful steam supplied as co-product (`steam_heat`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Useful steam supplied as co-product
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_steam_heat; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam_heat`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Useful hot-water heat supplied as co-product (`hot_water_heat`)

Only if this individual exchange actually occurs in the selected route; establish physical state, provider/fate and matched period; add each other actual exchange separately.

- Selected flow: Useful hot-water heat supplied as co-product
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_hot_water_heat; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hot_water_heat`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

###### Compatible CN high-voltage AC net production mix at plant (`final_product`)

Representative only for independently compatible CN national AC production mix at plant35–330kV and the actual agreed net meter interface. Provider specifies source weights/year/net basis. Other generation technologies, voltages, DC, storage and delivered product gates require their own exact identity before completed dataset use; full PCR scope remains unchanged.

- Selected flow: Alternating current `ad12cfb1-61f3-45d1-a12c-5903a2fc7202`
- Flow property / unit: Net calorific value / MJ
- Amount rule: 1 MJ
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 MJ reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epd-electricity-scope`, `ipcc-stationary-2006`, `ghg-scope2-2015`, `epa-chp-output`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide actual electricity generation, network transformation/storage and useful heat supply where possible. Retain unallocated CHP/waste-treatment inventories; demonstrate causal allocation or matched economic sensitivity when needed. Electricity and thermal output share only a justified allocation rule, not automatic equal-value MJ. Waste treatment as a service and generated electricity require actual upstream waste-status and burdens; supplied waste is not automatically a free fuel. Certificates do not physically displace grid output or remove infrastructure/fuel-cycle emissions. No automatic avoided-grid, heat, waste-disposal or storage credits; retain actual useful heat quantities separately. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_concrete | infrastructure | `concrete` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain actual supplier specification and independently measured installed/replaced net product mass, documented service life, replacement count, disassembly/closure fate and lifetime accepted electrical throughput; allocate only attributable quantities once to D with sensitivity. For assemblies measure actual configured product mass; never invent a per-machine weight. Internal component manufacture included in supplied assembly is not added again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel | infrastructure | `steel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain actual supplier specification and independently measured installed/replaced net product mass, documented service life, replacement count, disassembly/closure fate and lifetime accepted electrical throughput; allocate only attributable quantities once to D with sensitivity. For assemblies measure actual configured product mass; never invent a per-machine weight. Internal component manufacture included in supplied assembly is not added again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wind_turbine | infrastructure | `wind_turbine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain actual supplier specification and independently measured installed/replaced net product mass, documented service life, replacement count, disassembly/closure fate and lifetime accepted electrical throughput; allocate only attributable quantities once to D with sensitivity. For assemblies measure actual configured product mass; never invent a per-machine weight. Internal component manufacture included in supplied assembly is not added again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pv_module | infrastructure | `pv_module` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain actual supplier specification and independently measured installed/replaced net product mass, documented service life, replacement count, disassembly/closure fate and lifetime accepted electrical throughput; allocate only attributable quantities once to D with sensitivity. For assemblies measure actual configured product mass; never invent a per-machine weight. Internal component manufacture included in supplied assembly is not added again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_battery | infrastructure | `battery` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain actual supplier specification and independently measured installed/replaced net product mass, documented service life, replacement count, disassembly/closure fate and lifetime accepted electrical throughput; allocate only attributable quantities once to D with sensitivity. For assemblies measure actual configured product mass; never invent a per-machine weight. Internal component manufacture included in supplied assembly is not added again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_construction_diesel | infrastructure | `construction_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_coal | thermal | `coal` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lignite | thermal | `lignite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gas | thermal | `gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_fuel_oil | thermal | `fuel_oil` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wood | thermal | `wood` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_hydrogen | thermal | `hydrogen` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual consumed fuel mass and stocks by individual fuel; assay moisture, matched as-received NCV, carbon/ash and fossil/biogenic fraction. Volume-derived gas mass uses measured density at stated temperature/pressure and composition; heating-value conversion uses compatible conditions and units. Retain fuel energy separately from electric D; no fixed mixture, assumed heat value, efficiency or default factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_residual_waste | thermal | `residual_waste` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_urea | control | `urea` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_limestone | control | `limestone` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_uo2_fuel | nuclear | `uo2_fuel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure received/loaded and replaced fuel-assembly mass and inventories, uranium mass/isotopic assay and burnup/operating records with actual nuclear fuel-cycle provider. Keep assembly versus UO2/uranium basis explicit and count provider components once; no invented enrichment, utilization or fuel efficiency. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_fuel | nuclear | `spent_fuel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_radioactive_resin | nuclear | `radioactive_resin` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_solar | renewable | `solar` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Only when an actual resource-energy exchange is modelled: record calibrated site/time resource measurements, declared interception or extraction interface, area/flow/enthalpy or justified mechanical-energy integration and uncertainty; distinguish incident/extracted energy from electrical output and losses. Do not substitute electrical D for natural resource energy, impose a conversion efficiency or invent a resource identity. If used only as site metadata, do not create a fictitious exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wind | renewable | `wind` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Only when an actual resource-energy exchange is modelled: record calibrated site/time resource measurements, declared interception or extraction interface, area/flow/enthalpy or justified mechanical-energy integration and uncertainty; distinguish incident/extracted energy from electrical output and losses. Do not substitute electrical D for natural resource energy, impose a conversion efficiency or invent a resource identity. If used only as site metadata, do not create a fictitious exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wave | renewable | `wave` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Only when an actual resource-energy exchange is modelled: record calibrated site/time resource measurements, declared interception or extraction interface, area/flow/enthalpy or justified mechanical-energy integration and uncertainty; distinguish incident/extracted energy from electrical output and losses. Do not substitute electrical D for natural resource energy, impose a conversion efficiency or invent a resource identity. If used only as site metadata, do not create a fictitious exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tidal | renewable | `tidal` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Only when an actual resource-energy exchange is modelled: record calibrated site/time resource measurements, declared interception or extraction interface, area/flow/enthalpy or justified mechanical-energy integration and uncertainty; distinguish incident/extracted energy from electrical output and losses. Do not substitute electrical D for natural resource energy, impose a conversion efficiency or invent a resource identity. If used only as site metadata, do not create a fictitious exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_geothermal | renewable | `geothermal` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Only when an actual resource-energy exchange is modelled: record calibrated site/time resource measurements, declared interception or extraction interface, area/flow/enthalpy or justified mechanical-energy integration and uncertainty; distinguish incident/extracted energy from electrical output and losses. Do not substitute electrical D for natural resource energy, impose a conversion efficiency or invent a resource identity. If used only as site metadata, do not create a fictitious exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | water | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purchased_water | water | `purchased_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_return | water | `river_return` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_evaporated_water | water | `evaporated_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | water | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_fossil_co2 | control | `fossil_co2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_biogenic_co2 | control | `biogenic_co2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ch4 | control | `ch4` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_n2o | control | `n2o` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_so2 | control | `so2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_no2 | control | `no2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10 | control | `pm10` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sf6 | control | `sf6` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_h2s | control | `h2s` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Determine the exact gas/particle identity, compartment and matched-period release using calibrated species-selective concentration and actual exhaust/vent flow or measured gas inventory loss; alternatively use documented fuel/species/technology-compatible activity and factor with units/uncertainty and independent original support. Convert concentration times matched volume to kg with correct units; distinguish NO2 species from NOx-as-NO2-equivalent, particle-size class and fossil/biogenic CO2. Captured gas and background are reconciled separately; no factor or zero-emission default. Actual radionuclides need individual species and measured activity units separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_fly_ash | control | `fly_ash` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_bottom_ash | control | `bottom_ash` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_fgd_sludge | control | `fgd_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_captured_co2 | control | `captured_co2` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_source_power | network | `source_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain each actual supplier separately with original calibrated accepted/import meter kWh converted by3.6 to MJ; record exact source state/voltage/geography/net basis and source provider, yearly weights, actual transform/network losses, other exports and reconciliation. No waste-incineration UUID as generic grid electricity. Contract attributes do not replace physical delivered inventory; claims require unique retirement/vintage/market and residual disclosure. Add each DC or otherwise distinct supplier as its own exchange. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sf6_charge | network | `sf6_charge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_transformer_oil | network | `transformer_oil` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing/metering or traceable physical transfer records for this exact exchange; record actual composition/state, opening/closing stocks, period, origin/provider or environmental compartment, uncertainty and applicable allocation; normalize attributable quantity by the same independently metered positive electrical D MJ. Do not combine species or infer missing quantity as zero. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_charging_power | storage | `charging_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated charging and accepted discharge meters, each kWh converted by3.6 to MJ; retain actual source provider/state, auxiliary draw, beginning/end stored energy, separate roundtrip stages and losses at one boundary/period; no invented efficiency or avoided-grid credit. Provider lifetime quantities match real storage throughput. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steam_heat | dispatch | `steam_heat` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual net supplied steam kg and measured delivery pressure/temperature/enthalpy and condensate-return mass/state. Useful heat MJ uses matched supplied-minus-return enthalpy with explicit reference state; no default steam enthalpy or heat output from electric D. Retain heat/condensate allocation boundary and period, without counting internal recovery as external output. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_hot_water_heat | dispatch | `hot_water_heat` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual supplied/returned water mass and matching measured inlet/outlet thermodynamic states; integrate mass times enthalpy difference in MJ over same period, retaining return and network losses. Do not count water mass as heat or assume temperature, heat capacity, efficiency or CHP output share. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated accepted net electrical meter output D MJ, from original kWh readings times3.6 if applicable; match selected gate, AC/DC, voltage/frequency, geography/provider/year, own-use and import/export meters, stored-energy change and period. D must be positive; no assumed conversion efficiency. Reference property is the confirmed database energy chain labelled Net calorific value, not fuel heating-value content or electrical combustion. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One measured net AC/DC electricity product, declared voltage and generation/storage/delivery gate | per 1 MJ reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 MJ reference flow |  |
| physical_balance | production | D is independently calibrated metered accepted net electrical output MJ at the selected gate, positive after stock reconciliation;1 kWh =3.6 MJ. One dataset uses exactly one generation, storage or delivery output basis; never sum charging, gross generation, net export and delivery as outputs. Generation D equals actual metered net export; gross-minus-own-use may reproduce it only with matched meter boundaries and periods, keeping purchased auxiliaries as separate inputs and not subtracting them twice. Imported/resold electricity and internal transfers are identified independently. A mix uses each actual source contribution on the same net gate basis, with weights summing to1 and source losses/providers documented; do not multiply a source gross-output factor by net shares. Delivered electricity reconciles matched network input, accepted output, other exports, technical losses, theft/meter gaps and stock; input = D/(1-l) only for independently established matching loss fraction0<=l<1 and no unaccounted exports. Storage reconciles measured charging = discharged/other useful exports + measured electrical losses + actual stock increase on the same meter boundary; do not invent roundtrip efficiency, lifetime or avoided generation. Fuel energy is actual consumed mass times matched as-received NCV, or measured volume/density/calorific value at stated conditions; separate electrical MJ from thermal fuel MJ. Gas mass/standard volume conversion requires measured density/reference T/P, not assumed composition. Direct gas emissions use measured species/load or documented compatible activity factors; do not reuse purchased-electricity factors as onsite fuel emissions. Fossil/biogenic CO2, CH4,N2O and captured carbon are distinct; no assumed zero biomass/waste CO2. Useful steam heat = matched steam mass times supplied-minus-return enthalpy; hot-water heat uses actual mass and measured enthalpy difference, not total water mass as energy. Useful CHP heat and electricity stay separate co-products before declared allocation. Lifetime material/infrastructure quantities are assigned once over measured/justified expected accepted electrical throughput with sensitivity, never invented machine mass or output. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 MJ, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently calibrated metered accepted net electrical output MJ at the selected gate, positive after stock reconciliation;1 kWh =3.6 MJ. One dataset uses exactly one generation, storage or delivery output basis; never sum charging, gross generation, net export and delivery as outputs. Generation D equals actual metered net export; gross-minus-own-use may reproduce it only with matched meter boundaries and periods, keeping purchased auxiliaries as separate inputs and not subtracting them twice. Imported/resold electricity and internal transfers are identified independently. A mix uses each actual source contribution on the same net gate basis, with weights summing to1 and source losses/providers documented; do not multiply a source gross-output factor by net shares. Delivered electricity reconciles matched network input, accepted output, other exports, technical losses, theft/meter gaps and stock; input = D/(1-l) only for independently established matching loss fraction0<=l<1 and no unaccounted exports. Storage reconciles measured charging = discharged/other useful exports + measured electrical losses + actual stock increase on the same meter boundary; do not invent roundtrip efficiency, lifetime or avoided generation. Fuel energy is actual consumed mass times matched as-received NCV, or measured volume/density/calorific value at stated conditions; separate electrical MJ from thermal fuel MJ. Gas mass/standard volume conversion requires measured density/reference T/P, not assumed composition. Direct gas emissions use measured species/load or documented compatible activity factors; do not reuse purchased-electricity factors as onsite fuel emissions. Fossil/biogenic CO2, CH4,N2O and captured carbon are distinct; no assumed zero biomass/waste CO2. Useful steam heat = matched steam mass times supplied-minus-return enthalpy; hot-water heat uses actual mass and measured enthalpy difference, not total water mass as energy. Useful CHP heat and electricity stay separate co-products before declared allocation. Lifetime material/infrastructure quantities are assigned once over measured/justified expected accepted electrical throughput with sensitivity, never invented machine mass or output. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 MJ accepted net electrical energy at a specified meter interface; this is not1 MJ fuel heat or1 kg equipment |
| excluded_use | Fuel, useful heat or certificates as reference products; network service alone; electrical equipment manufacture; assumed avoided electricity |
| required_metadata | site/geography/year; actual technology or source portfolio and providers; AC/DC, voltage/frequency, meter locations and calibration; generation gross/net, own-use source and matched net exports; delivery losses/voltage changes or charging/discharging and storage stock; accepted output period and positive D; actual fuel grade/moisture/NCV and fossil/biogenic fractions; heat enthalpy/return state if CHP; cooling withdrawal/return/consumption and basin; direct species/compartments and waste fate; measured construction/replacement/closure lifetime and accepted throughput; allocation and uncertainty; physical mix versus contractual attribute claim and retirement/residual disclosure. Representative ad12cfb1 is CN national AC production mix at plant35–330kV, not generic purchased or customer-delivered electricity; exact source weights and year are provider-defined. |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epd-electricity-scope | official_guidance | EPD International, PCR2007:08 public category description, listed version5.0.2, snapshot1 October2026. https://www.environdec.com/pcr-library/pcr2007-08 | Public technology/category scope only; full portal PDF was not acquired. No claimed PCR cutoff threshold, allocation formula or full conformity. |
| ipcc-stationary-2006 | official_guidance | IPCC, 2006 Guidelines Volume2 Chapter2 Stationary Combustion, corrected April2007, original PDF p.11/printed2.11, section2.3.1 and Equation2.1. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Fuel-specific activity and compatible gas-factor accounting; national inventory method does not supply a site default factor, oxidation fraction or complete LCA. |
| ghg-scope2-2015 | official_guidance | GHG Protocol, Scope2 Guidance2015, original PDF p.62/printed60, Table7.1. https://ghgprotocol.org/sites/default/files/2023-03/Scope%202%20Guidance.pdf | Unique electricity-attribute claims, retirement, temporal/market match and residual-mix disclosure; corporate direct-GHG claims are not zero life-cycle burdens. Revision consultation is not adopted as final guidance. |
| epa-chp-output | official_guidance | US EPA, Methods for Calculating CHP Efficiency, snapshot1 October2026, Total System Efficiency and net useful outputs. https://www.epa.gov/chp/methods-calculating-chp-efficiency | Net useful electric/thermal outputs and parasitic losses; no efficiency benchmark, example or automatic heat allocation. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
