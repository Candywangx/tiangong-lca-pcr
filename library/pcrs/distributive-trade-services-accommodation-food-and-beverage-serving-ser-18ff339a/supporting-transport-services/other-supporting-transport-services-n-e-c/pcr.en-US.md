---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-transport-services-n-e-c
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other supporting transport services n.e.c.

## 1. Scope and Applicability

This reviewed narrower methodology covers natural-gas liquefaction and regasification performed for transportation only. It excludes the residual category's aircraft type-rating and GPS/radio-navigational aid locating services and all other unreviewed functions. It is not a generic cross-industry utility-service PCR. Liquefaction and regasification have independent mandatory route/state scenarios; one kg in one route is not assumed functionally interchangeable with one kg in the other. [Source: `un-cpc-transport-phase`]

Exclude natural-gas extraction/production and separately supplied upstream treatment, independent transport, cargo handling, independent storage (67220), gas distribution/retail and downstream customer combustion. Include only actual feed conditioning agreed within the service inlet, pumps, compression, refrigeration/vaporization, necessary process buffer/turnover, BOG management, utilities, maintenance and assets attributable to the selected conversion. Separate contracts and facility interfaces determine overlap, not the fact that they share a terminal.

| route | Actual accepted transformation | Mandatory physical scope |
| --- | --- | --- |
| liquefaction | Declared gaseous inlet to qualified net LNG at the defined outlet | Actual feed conditioning, pressure, composition, refrigeration cycle/components, compression duty, actual cold-end state/quality, BOG recovery and net delivery. No default density, volume reduction or specific energy. |
| regasification | Declared LNG inlet to qualified net gaseous send-out at the defined outlet | Actual inlet composition/state, ORV/SCV/air/intermediate-fluid or other demonstrated vaporizer, pump/send-out pressure, heat source, recondenser/BOG and net delivered quality. Keep technology/conditions separate. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-transport-services-n-e-c |
| classification_refs | CPC 3.0 67990; narrower |
| covered_products | Transport-purpose natural-gas liquefaction or regasification service with actual net qualified delivered mass |
| excluded_products | Type-rating, GPS/radio-navigation, other unreviewed residual functions, gas commodity production, independent storage/transport and customer end use |
| representative_product | Regasification service corresponding to 1 kg actual qualified net gaseous send-out at specified composition, temperature and pressure |
| production_route | Declare one route/inlet → perform its actual conditioning and phase conversion → manage actual energy/BOG/losses and buffer → verify net accepted outlet |
| market_state | Completed service on customer gas custody; upstream commodity burden belongs to the full gas chain, separately linked |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the selected transport-purpose natural-gas phase-conversion service |
| How much | Service corresponding to 1 kg actual net qualified gas delivered in the declared outlet phase/state; exclude internal recycle, fuel, losses and off-spec stock |
| How well | Actual declared composition, temperature, pressure and quality/acceptance at matched custody interfaces, with composition and mass balance |
| How long or cycle | Actual production/delivery observation period including attributable startup, shutdown, downtime, necessary buffer and stock corrections |
| reference_flow_link | `service_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural-gas transport phase-conversion service, qualified net mass |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | transport purpose; liquefaction OR regasification; actual site/date/route and provider; inlet/outlet custody gates; feed and delivered composition including methane/higher hydrocarbons/CO2/N2/water and relevant contaminants; actual inlet/outlet phase, temperature, pressure and quality/acceptance; net qualifying delivered kg and observation period; actual feed, stock changes, process buffer time, internal recycle, fuel diversion, recovered/exported BOG and each loss fate; compressor/refrigeration cycle or ORV/SCV/air/intermediate-fluid vaporizer and source energy; onshore/floating asset scope; utility source/temperature/pressure; actual water intake/return temperature/chemistry/location; each chemical/refrigerant; emissions/fugitive/flare efficiency evidence; coproduct/provider overlap; real whole-life output denominator and uncertainty |

Declare all qualifiers in the data package. The kg property measures the gas mass basis of this service; it does not change electricity, heat, water, equipment count or waste into kg of service. Customer feed and delivered gas are custody balances, not newly produced gas inputs/outputs with duplicated production burdens. This service-only treatment does not make upstream gas production, consumed gas or losses zero in the complete gas chain: link those upstream burdens and lost-feed replacement once at the owning gas-chain boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_mass to measure actual net qualified outlet mass corresponding to this service. Exactly 1 kg is the reference output; route, composition/state and quality are mandatory and not interchangeable. |
| gas_conversion | service_output; liq_fuelgas; regas_fuelgas | Mass | kg | Mass/volume conversion requires actual composition, pressure, temperature and verified density or metered equation of state. State standard-volume reference conditions explicitly; no universal LNG density or expansion ratio. |
| thermal_energy | liq_steam; regas_steam; regas_heat | Energy | MJ | Use actual net delivered enthalpy and supply/return states with supplier losses boundary; do not infer heat from water volume alone or conflate electricity and fuel energy. |
| component_mass | ref_methane; ref_ethane; ref_propane; ref_ethylene; ref_nitrogen; amine; hypochlorite | Mass | kg | Keep actual chemical component mass distinct from total refrigerant mixture or aqueous solution; record verified composition and stock/recovery. No aggregate VOC/PFAS/refrigerant selector is an atomic exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual customer gas/LNG at the agreed conversion inlet with measured composition/state and custody ownership |
| starting_condition_role | foreground_start |
| product_classification_scope | Transport-purpose natural-gas liquefaction or regasification only |
| recursive_input_rule | Purchased same-function conversion enters once with compatible route/states/output basis and provider coverage; remove overlapping owned utilities/assets |
| upstream_dataset_requirement | Actual externally consumed energy/material/refrigerant, process assets/renewals and actual treatment; customer commodity custody and internal BOG are tracked separately |
| disclosure | transport purpose; liquefaction OR regasification; actual site/date/route and provider; inlet/outlet custody gates; feed and delivered composition including methane/higher hydrocarbons/CO2/N2/water and relevant contaminants; actual inlet/outlet phase, temperature, pressure and quality/acceptance; net qualifying delivered kg and observation period; actual feed, stock changes, process buffer time, internal recycle, fuel diversion, recovered/exported BOG and each loss fate; compressor/refrigeration cycle or ORV/SCV/air/intermediate-fluid vaporizer and source energy; onshore/floating asset scope; utility source/temperature/pressure; actual water intake/return temperature/chemistry/location; each chemical/refrigerant; emissions/fugitive/flare efficiency evidence; coproduct/provider overlap; real whole-life output denominator and uncertainty |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_route | Select one actual liquefaction or regasification route with specified physical states. IFC describes a broader LNG chain; only applicable actual conversion processes and necessary conditioning are included here. Independent transport, storage, handling and upstream gas production remain separately scoped. | un-cpc-transport-phase; ifc-lng-2017 |
| boundary_bog | Reconcile actual BOG generation, return/recondensation/reliquefaction, internal fuel, external return/sale, stock change, venting, flaring and fugitive loss by composition and destination. Internal transfers are not fresh external purchases or duplicate finished output. Fuel use and emissions remain in the responsible service stage even when gas is customer-owned. | ifc-lng-2017 |
| boundary_heat_water | Identify actual compressors/refrigerant cycle or ORV/SCV/air/intermediate-fluid vaporizer and heat source. Keep electricity, fuels, steam and purchased heat separate. Measure source-specific water intake/return quantity, location, temperature/thermal change and residual chemistry; no default temperature limit or claim of zero impact for ambient heat. | ifc-lng-2017 |
| boundary_emissions | Include actual combustion, flare incomplete oxidation/slip, vent, fugitives, separated-feed contaminants and refrigerant loss as individual species/compartments. Do not assume complete flare destruction, assign total gas to methane, merge NOx species or use an aggregate VOC exchange. | ifc-lng-2017 |
| boundary_assets | Retain construction/manufacture, necessary process-buffer assets, maintenance, replacements and real waste receivers with supported life utilization. Storage sold independently, carrier propulsion and customer gas-chain assets do not become process conversion assets. |  |

## 6. Process Inventory Structure

Select exactly one route process, plus actual applicable common management and completion. Initial cards are conditional actual exchanges, not a mandatory recipe. Add each other actual fuel, coolant, adsorbent, waste, co-output or chemical release as one specific row. Custody feed, BOG and qualified delivery reconcile in cp_mass; internal recycle is not another reference output.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| liquefaction | Natural-gas liquefaction | conditional | Selected route or actual applicable common process, never duplicate two routes | foreground | Service per 1 kg qualified net delivered gas |
| regasification | Natural-gas regasification | conditional | Selected route or actual applicable common process, never duplicate two routes | foreground | Service per 1 kg qualified net delivered gas |
| management | Actual utilities, BOG, maintenance and release management | conditional | Selected route or actual applicable common process, never duplicate two routes | foreground | Service per 1 kg qualified net delivered gas |
| completion | Net qualified phase-conversion service delivery | required | Unique service output | foreground | Service per 1 kg qualified net delivered gas |

### Process: Natural-gas liquefaction (`liquefaction`)

#### Inputs

##### Product flows

###### Electricity, natural-gas liquefaction supply (`liq_power`)

Conditional on actual grid/external electricity for the declared liquefaction route: compressors, refrigeration, feed conditioning, pumps and controls. Record actual end uses and losses; exclude power already represented by on-site fuel and generation.

- Selected flow: Electricity, natural-gas liquefaction supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_liquefaction`

###### Natural gas, purchased liquefaction fuel (`liq_fuelgas`)

Conditional on actual externally purchased gas burned by the service operator. Identify composition, fuel meter, compressor/turbine/boiler duty and calorific basis. Internal BOG and customer feed diverted as fuel are separate custody-to-consumption ledger entries, never a second external purchase.

- Selected flow: Natural gas, purchased liquefaction fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_liquefaction`

###### Steam, purchased liquefaction-process heat (`liq_steam`)

Conditional on actual external steam for feed conditioning/regeneration or process heat. Record supply/return pressure, temperature, enthalpy and condensate scope; do not combine with purchased hot water or on-site boiler fuel.

- Selected flow: Steam, purchased liquefaction-process heat
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_liquefaction`

###### Methane, refrigerant makeup (`ref_methane`)

Conditional on this actual component of the declared refrigeration loop. Measure initial attributable charge, actual makeup, recovery and stock change; internal circulating refrigerant is not fresh consumption. Mixed refrigerant is resolved into each verified component, and another actual component needs its own row.

- Selected flow: Methane, refrigerant makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

###### Ethane, refrigerant makeup (`ref_ethane`)

Conditional on this actual component of the declared refrigeration loop. Measure initial attributable charge, actual makeup, recovery and stock change; internal circulating refrigerant is not fresh consumption. Mixed refrigerant is resolved into each verified component, and another actual component needs its own row.

- Selected flow: Ethane, refrigerant makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

###### Propane, refrigerant makeup (`ref_propane`)

Conditional on this actual component of the declared refrigeration loop. Measure initial attributable charge, actual makeup, recovery and stock change; internal circulating refrigerant is not fresh consumption. Mixed refrigerant is resolved into each verified component, and another actual component needs its own row.

- Selected flow: Propane, refrigerant makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

###### Ethylene, refrigerant makeup (`ref_ethylene`)

Conditional on this actual component of the declared refrigeration loop. Measure initial attributable charge, actual makeup, recovery and stock change; internal circulating refrigerant is not fresh consumption. Mixed refrigerant is resolved into each verified component, and another actual component needs its own row.

- Selected flow: Ethylene, refrigerant makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

###### Nitrogen, refrigerant makeup (`ref_nitrogen`)

Conditional on this actual component of the declared refrigeration loop. Measure initial attributable charge, actual makeup, recovery and stock change; internal circulating refrigerant is not fresh consumption. Mixed refrigerant is resolved into each verified component, and another actual component needs its own row.

- Selected flow: Nitrogen, refrigerant makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

###### Methyldiethanolamine, gas-conditioning makeup (`amine`)

Conditional on actual MDEA sweetening necessary within the agreed liquefaction-service inlet boundary. Record solution composition and active MDEA mass; separately account for water and other formulation components. Separately supplied upstream gas treatment must not be repeated.

- Selected flow: Methyldiethanolamine, gas-conditioning makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_liquefaction`

###### Zeolite molecular sieve 3A (`sieve`)

Conditional on actual specified dehydration medium; measure actual supply/replacement and regeneration energy, with support for service-life allocation. Another sieve grade or conditioning route requires its own actual material row.

- Selected flow: Zeolite molecular sieve 3A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_liquefaction`

###### Sulfur-impregnated activated carbon, mercury removal (`mercury_carbon`)

Conditional on actual feed contaminant evidence and this identified removal medium. Include measured replacement share and regeneration/treatment scope; mercury removal is not assumed for every feed.

- Selected flow: Sulfur-impregnated activated carbon, mercury removal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_liquefaction`

###### Configured natural-gas liquefaction train (`liq_train`)

Identify actual compression/refrigeration/conditioning configuration, construction/manufacture, maintenance and renewals with supported whole-life qualified-output denominator, not nameplate capacity alone. Do not allocate the whole train to each kg.

- Selected flow: Configured natural-gas liquefaction train
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets_liquefaction`

### Process: Natural-gas regasification (`regasification`)

#### Inputs

##### Product flows

###### Electricity, natural-gas regasification supply (`regas_power`)

Conditional on actual pumping, compression, recondenser, vaporizer auxiliaries and controls. Meter actual send-out pressure and ORV/SCV/air/intermediate-fluid route; do not infer zero electricity from ambient heat.

- Selected flow: Electricity, natural-gas regasification supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_regasification`

###### Natural gas, purchased regasification fuel (`regas_fuelgas`)

Conditional on actual external fuel-gas combustion, including the real SCV or auxiliary boiler. Source-meter internal send-out/BOG fuel separately without duplicate gas purchase; record actual source composition and combustion.

- Selected flow: Natural gas, purchased regasification fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_regasification`

###### Steam, purchased regasification heat (`regas_steam`)

Conditional on actual purchased steam heat; retain supply/return enthalpy and condensate boundaries. Actual steam is distinct from purchased hot-water heat, ambient water intake and internal SCV combustion.

- Selected flow: Steam, purchased regasification heat
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_regasification`

###### Heat, purchased hot-water regasification supply (`regas_heat`)

Conditional on actual external hot-water heat delivery; measure inlet/outlet temperature, mass/flow and net enthalpy with supplier scope. Waste-heat label does not establish zero burden or an avoided-heat credit.

- Selected flow: Heat, purchased hot-water regasification supply
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy_regasification`

###### Configured natural-gas regasification train (`regas_train`)

Identify actual ORV/SCV/air/shell-and-tube or intermediate-fluid configuration, pumps/recondenser and land/floating plant scope. Use supported whole-life utilization; offshore service assets are not a new customer transport vessel.

- Selected flow: Configured natural-gas regasification train
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets_regasification`

##### Elementary flows

###### Water, ocean, regasification intake (`regas_seawater`)

Conditional on actual direct ORV/coastal seawater withdrawal. Meter exact intake, location, salinity, temperature, pumping and chemical addition; purchased processed water is a different product input. No generic seawater intake is imposed on inland/air/SCV routes.

- Selected flow: Water, ocean, regasification intake
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_regasification`

###### Water, river, regasification intake (`regas_riverwater`)

Conditional on actual direct freshwater river withdrawal; retain source-specific temperature, chemistry, seasonal flow and return location separately from seawater or groundwater.

- Selected flow: Water, river, regasification intake
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_regasification`

#### Outputs

##### Elementary flows

###### Water, ocean, regasification return (`regas_sea_return`)

Conditional on actual return to the ocean; measure actual quantity, source/receiver, temperature/thermal change, salinity and residual chemicals. Chemicals require individual release rows and thermal effects require applicable site methods; volume alone cannot represent them.

- Selected flow: Water, ocean, regasification return
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_regasification`

###### Water, river, regasification return (`regas_river_return`)

Conditional on actual return to the identified freshwater river; preserve receiver, temperature and composition. Do not substitute an ocean return or assume all withdrawn water returns unchanged.

- Selected flow: Water, river, regasification return
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_regasification`

### Process: Actual utilities, BOG, maintenance and release management (`management`)

#### Inputs

##### Product flows

###### Water, supplied LNG-process utility (`process_water`)

Conditional on actual purchased process/boiler make-up/wash/sanitary water, specifying source, treatment and end use. Add each other source/product separately; closed-loop recirculation is not new withdrawal.

- Selected flow: Water, supplied LNG-process utility
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_management`

###### Sodium hypochlorite, water-treatment active chemical (`hypochlorite`)

Conditional on this actual water-treatment chemical. Measure active substance, solution concentration and separately supplied dilution water; record reaction/residual products individually instead of treating input as an unchanged discharge.

- Selected flow: Sodium hypochlorite, water-treatment active chemical
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_management`

###### Nitrogen, compressed, process purge (`nitrogen_purge`)

Conditional on actual process/inerting gas use, with pressure and delivered mass; distinguish refrigerant-loop nitrogen already counted, internal recycle and actual vent composition.

- Selected flow: Nitrogen, compressed, process purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_management`

###### Mineral compressor lubricating oil (`lubricant`)

Conditional on actual compressor oil grade and service; measure consumption/replacement across maintenance interval and attributable route output, avoiding full oil charge per kg.

- Selected flow: Mineral compressor lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chemical_management`

###### Configured process-buffer LNG tank (`buffer_tank`)

Conditional on buffer/turnover genuinely necessary for the declared phase-conversion process. Fix custody interfaces, inventory/time and whole-life construction/maintenance share; independent storage service and its assets/BOG are separately scoped, not counted twice.

- Selected flow: Configured process-buffer LNG tank
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets_management`

#### Outputs

##### Waste flows

###### Spent aqueous methyldiethanolamine solution (`spent_amine`)

Conditional on actual spent segregated solution with measured water/amine/contaminant composition; track actual treatment/reclamation and reconcile active input and waste solution bases.

- Selected flow: Spent aqueous methyldiethanolamine solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent zeolite molecular sieve 3A (`spent_sieve`)

Conditional on actual discharged medium; measure actual mass/adsorbates and trace regeneration/disposal, not a new waste charge for every operating day.

- Selected flow: Spent zeolite molecular sieve 3A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent mercury-loaded sulfur-impregnated activated carbon (`spent_carbon`)

Conditional on actual mercury-removal medium and measured loading; track containment and actual receiver. No assumed mercury-free treatment or complete destruction.

- Selected flow: Spent mercury-loaded sulfur-impregnated activated carbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Used mineral compressor lubricating oil (`used_oil`)

Conditional on actual removed segregated oil; measure actual mass and receiver/treatment, with no automatic recycling credit.

- Selected flow: Used mineral compressor lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Collected oily LNG-process wastewater (`oily_water`)

Conditional on actual closed-drain/process oily water; record composition and real treatment gate. Sanitary sewage and hydrotest waste have separate actual streams if present; do not merge all wastewater.

- Selected flow: Collected oily LNG-process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### Methane, to air (`methane`)

Conditional on actual fugitive, vent, flare-slip or refrigerant methane release, each source separately recorded. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Methane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Ethane, to air (`ethane`)

Conditional on actual gas/refrigerant ethane release with separate source/fate records. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Ethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Propane, to air (`propane`)

Conditional on actual gas/refrigerant propane release with separate source/fate records. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Propane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Ethylene, to air (`ethylene`)

Conditional on actual refrigerant ethylene release. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Ethylene, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Carbon dioxide, fossil, to air (`co2`)

Conditional on actual combustion/flare or separated-feed CO2 release, distinguishing feed-origin CO2 from formed combustion CO2. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Carbon monoxide, to air (`co`)

Conditional on actual incomplete-combustion CO release. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen monoxide, to air (`no`)

Conditional on actual combustion NO release with explicit NOx equivalent/speciation convention. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen dioxide, to air (`no2`)

Conditional on actual combustion NO2 release without duplicating total NOx. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Sulfur dioxide, to air (`so2`)

Conditional on actual sulfur-containing fuel/acid-gas combustion with verified sulfur balance. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Hydrogen sulfide, to air (`h2s`)

Conditional on actual separated acid-gas or fugitive H2S release, not assumed for sweet gas. Quantify the named species at its actual air receiver using measurements or independently verified source-specific methods. No generic VOC/gas aggregate; each other actual species requires its own row.

- Selected flow: Hydrogen sulfide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange measured for the declared conversion service
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

### Process: Net qualified phase-conversion service delivery (`completion`)

#### Outputs

##### Product flows

###### Natural-gas transport phase-conversion service, qualified net mass (`service_output`)

One kg of qualified actual net gas mass delivered in the declared converted state represents the corresponding phase-conversion service only. Choose liquefaction or regasification; the service output is not newly manufactured customer natural gas.

- Selected flow: Natural-gas transport phase-conversion service, qualified net mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_route | Direct-meter each actual route and qualifying output. Shared compression/BOG/utilities use documented physical duty, net enthalpy, measured runtime or causal throughput, with actual startup/shutdown and stock reconciliation. Do not average liquid and gas route kg, nameplate capacities or fees. |  |
| allocate_custody | Track customer gas custody and internal fuel/BOG separately from purchased external fuel; actual consumed customer gas causes real source emissions and a gas-chain replacement obligation, not a zero emission or duplicate gas-production input here. Full chain authors link commodity production/losses once. |  |
| allocate_recovery | Returned/reliquefied/recondensed BOG is an internal balance once. Qualifying gas delivered at the route outlet counts once; gas exported in another state is separately reported with function/burden allocation if it is a co-service, not silently added to the denominator or given an avoided product credit. |  |
| allocate_coproduct | For actual integrated conditioning that produces recovered NGL/sulfur or another co-output, first separate the actual functional processes and meters, then document a causal physical allocation and mass/energy reconciliation if separation is impossible. Add each identified co-output individually; no automatic credit for cold/heat/BOG utilization. |  |
| allocate_life | Divide actual asset manufacture/construction and distinct maintenance/renewal inventory by supported whole-life actual qualifying service utilization. Use expected route output with evidence on capacity, utilization, downtime, yield, degradation and life; conserve all user/period shares without annual reset. No invented life or whole facility per kg. |  |
| allocate_supplier | Reconcile utility/plant/BOG/storage supplier coverage with owned rows before summing. Floating regasification plant construction may be attributable, but carrier voyage or independent storage is separately scoped. Process buffer is counted once at actual inventory/time and cannot be sold again as unreported free storage. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | completion | service_output | Composition-resolved custody and conversion ledger | transport purpose; liquefaction OR regasification; actual site/date/route and provider; inlet/outlet custody gates; feed and delivered composition including methane/higher hydrocarbons/CO2/N2/water and relevant contaminants; actual inlet/outlet phase, temperature, pressure and quality/acceptance; net qualifying delivered kg and observation period; actual feed, stock changes, process buffer time, internal recycle, fuel diversion, recovered/exported BOG and each loss fate; compressor/refrigeration cycle or ORV/SCV/air/intermediate-fluid vaporizer and source energy; onshore/floating asset scope; utility source/temperature/pressure; actual water intake/return temperature/chemistry/location; each chemical/refrigerant; emissions/fugitive/flare efficiency evidence; coproduct/provider overlap; real whole-life output denominator and uncertainty; common source-record and custody-transfer IDs | Use calibrated inlet/outlet mass metering or traceable volume conversion with actual composition, temperature, pressure and density/equation-of-state evidence. Reconcile customer feed plus actual external gas and opening inventory against qualified delivered mass, ending inventory, fuel diversion, separately exported gas/co-output and individual vent/flare/fugitive losses. Internal BOG return/recondensation and refrigerant loops cancel as internal transfers, not additional purchases/production. Measure actual qualifying net outlet only, correcting off-spec/rework/returned material and avoiding repeated throughput count. Retain component and carbon balances, actual buffer custody time and uncertainties. Owned by completion as the single route-wide custody/component reconciliation ledger. Source records from the selected route and management use common record/transfer IDs and reconcile once against cp_mass; this ledger creates neither a management output nor another service denominator. | kg | continuous/batch meters and each custody period | whole actual conversion/delivery period including startups and stock changes | actual selected inlet/outlet and buffer gates | per reference flow | calibrated mass/quality meters; gas analyses; stock/fuel/BOG records; component balance |
| cp_energy_liquefaction | liquefaction | liq_power; liq_fuelgas; liq_steam | Actual source/end-use utility ledger | route/technology; actual meter start/end; external fuel composition/kg and calorific basis; internal customer/BOG fuel separately; kWh/MJ; supply/return state/enthalpy; compressor/pump/vaporizer duty; startup/shutdown; charging/provider scope; actual qualified outlet mass; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Meter actual external electricity, each external fuel, steam and heat separately. Reconcile source-specific internal-fuel combustion against cp_mass without duplicate purchase; include actual generation efficiency/losses once. Measure real thermal supply/return enthalpy, actual throughput and all attributable operating phases; no specific-energy or SCV/ORV default. Apply this protocol only to its listed liquefaction exchanges. Reconcile shared records under validate_protocol_partition. | kWh; kg; MJ | each meter/phase and reconciled observation period | all actual route utilities and attributable downtime | actual compression/refrigeration/vaporizer and supplies | per reference flow | meters; actual fuel/BOG/stock balance; state data; provider overlap; allocation |
| cp_energy_regasification | regasification | regas_power; regas_fuelgas; regas_steam; regas_heat | Actual source/end-use utility ledger | route/technology; actual meter start/end; external fuel composition/kg and calorific basis; internal customer/BOG fuel separately; kWh/MJ; supply/return state/enthalpy; compressor/pump/vaporizer duty; startup/shutdown; charging/provider scope; actual qualified outlet mass; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Meter actual external electricity, each external fuel, steam and heat separately. Reconcile source-specific internal-fuel combustion against cp_mass without duplicate purchase; include actual generation efficiency/losses once. Measure real thermal supply/return enthalpy, actual throughput and all attributable operating phases; no specific-energy or SCV/ORV default. Apply this protocol only to its listed regasification exchanges. Reconcile shared records under validate_protocol_partition. | kWh; kg; MJ | each meter/phase and reconciled observation period | all actual route utilities and attributable downtime | actual compression/refrigeration/vaporizer and supplies | per reference flow | meters; actual fuel/BOG/stock balance; state data; provider overlap; allocation |
| cp_refrigerant | liquefaction | ref_methane; ref_ethane; ref_propane; ref_ethylene; ref_nitrogen | Loop/component refrigerant ledger | actual cycle/loop; each chemical composition; initial charge/life share; additions/recovery/opening/closing stock kg; leak/vent source and receiver; actual route output | Resolve actual mixed/cascade refrigerants into specific chemical components and measure net externally supplied makeup with stock/recovery balance. Circulating mass is not consumption. Attribute initial charge and replacement to supported actual life/use without duplicating supplier stock; quantify each actual chemical loss/receiver, and add a separate route-specific row for another refrigerant. | kg | each refill/recovery and reconciled period | whole actual loop operating/maintenance interval | actual chemical loops and suppliers | per reference flow | component certificates; charge/recovery records; stocks; leak evidence |
| cp_chemical_liquefaction | liquefaction | amine; sieve; mercury_carbon | Specific chemical/medium ledger | route/end use; exact chemical/formulation/grade; measured actual kg and active fraction; separate water; replacement/regeneration; impurities captured; purge pressure; supplier scope; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Measure each actual chemical or medium; distinguish active substance, solution carrier and mixed product components without duplicate supply. Link to real contaminant/task evidence and actual replacement interval, not a compulsory recipe. Track regeneration energy, contaminants removed and resulting waste/release separately. Apply this protocol only to its listed liquefaction exchanges. Reconcile shared records under validate_protocol_partition. | kg | each actual issue/replacement/regeneration interval | actual period and supported replacement share | actual process/supplier gates | per reference flow | purchase/stock/formulation records; actual mass balance; maintenance |
| cp_chemical_management | management | hypochlorite; nitrogen_purge; lubricant | Specific chemical/medium ledger | route/end use; exact chemical/formulation/grade; measured actual kg and active fraction; separate water; replacement/regeneration; impurities captured; purge pressure; supplier scope; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Measure each actual chemical or medium; distinguish active substance, solution carrier and mixed product components without duplicate supply. Link to real contaminant/task evidence and actual replacement interval, not a compulsory recipe. Track regeneration energy, contaminants removed and resulting waste/release separately. Apply this protocol only to its listed management exchanges. Reconcile shared records under validate_protocol_partition. | kg | each actual issue/replacement/regeneration interval | actual period and supported replacement share | actual process/supplier gates | per reference flow | purchase/stock/formulation records; actual mass balance; maintenance |
| cp_water_regasification | regasification | regas_seawater; regas_riverwater; regas_sea_return; regas_river_return | Source/receiver-specific water and thermal ledger | source waterbody/product; actual volume/flow; inlet/outlet temperature/pressure/salinity; season/location; cooling/heating duty; evaporation/retention/return; biocide residuals and reaction products; actual receiver/treatment; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Meter actual source/product separately from recirculation and match actual returns/consumption. Record measured thermal change/heat flux and local receiving conditions without universal temperature limits. Chemical residues require their own species/compartment rows and actual treatment, not a volume-only proxy. Actual seawater, river, groundwater or another source is not interchangeable. Apply this protocol only to its listed regasification exchanges. Reconcile shared records under validate_protocol_partition. | m3 | continuous/representative actual intake and return periods | whole applicable route and actual season/receiving context | actual sources and receivers | per reference flow | flow meters; temperature/chemistry samples; seasonal receiving evidence; water balance |
| cp_water_management | management | process_water | Source/receiver-specific water and thermal ledger | source waterbody/product; actual volume/flow; inlet/outlet temperature/pressure/salinity; season/location; cooling/heating duty; evaporation/retention/return; biocide residuals and reaction products; actual receiver/treatment; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Meter actual source/product separately from recirculation and match actual returns/consumption. Record measured thermal change/heat flux and local receiving conditions without universal temperature limits. Chemical residues require their own species/compartment rows and actual treatment, not a volume-only proxy. Actual seawater, river, groundwater or another source is not interchangeable. Apply this protocol only to its listed management exchanges. Reconcile shared records under validate_protocol_partition. | m3 | continuous/representative actual intake and return periods | whole applicable route and actual season/receiving context | actual sources and receivers | per reference flow | flow meters; temperature/chemistry samples; seasonal receiving evidence; water balance |
| cp_assets_liquefaction | liquefaction | liq_train | Whole-life process asset ledger | configuration/BOM/construction; plant/buffer scope; ownership/provider; manufacture/maintenance/renewals; supported years and actual throughput/utilization/yield/downtime; life qualifying outlet kg; cumulative allocation; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Identify actual process assets and supported whole-life qualifying output, distinguishing one route/state and independent storage/transport assets. Apply attributable share of construction/manufacture plus distinct maintenance/renewals; conserve cumulative user/period shares. Nameplate throughput times arbitrary lifetime is not evidence; unknown denominators require explicit review. Apply this protocol only to its listed liquefaction exchanges. Reconcile shared records under validate_protocol_partition. | Item(s) | each allocation and configuration/renewal update | supported whole life and actual observed service period | actual conversion train/buffer and providers | per reference flow | construction/BOM; actual utilization and yield; life evidence; cumulative shares |
| cp_assets_regasification | regasification | regas_train | Whole-life process asset ledger | configuration/BOM/construction; plant/buffer scope; ownership/provider; manufacture/maintenance/renewals; supported years and actual throughput/utilization/yield/downtime; life qualifying outlet kg; cumulative allocation; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Identify actual process assets and supported whole-life qualifying output, distinguishing one route/state and independent storage/transport assets. Apply attributable share of construction/manufacture plus distinct maintenance/renewals; conserve cumulative user/period shares. Nameplate throughput times arbitrary lifetime is not evidence; unknown denominators require explicit review. Apply this protocol only to its listed regasification exchanges. Reconcile shared records under validate_protocol_partition. | Item(s) | each allocation and configuration/renewal update | supported whole life and actual observed service period | actual conversion train/buffer and providers | per reference flow | construction/BOM; actual utilization and yield; life evidence; cumulative shares |
| cp_assets_management | management | buffer_tank | Whole-life process asset ledger | configuration/BOM/construction; plant/buffer scope; ownership/provider; manufacture/maintenance/renewals; supported years and actual throughput/utilization/yield/downtime; life qualifying outlet kg; cumulative allocation; source_record_id; exchange_id; process_id; attribution driver; assigned share; reporting period | Identify actual process assets and supported whole-life qualifying output, distinguishing one route/state and independent storage/transport assets. Apply attributable share of construction/manufacture plus distinct maintenance/renewals; conserve cumulative user/period shares. Nameplate throughput times arbitrary lifetime is not evidence; unknown denominators require explicit review. Apply this protocol only to its listed management exchanges. Reconcile shared records under validate_protocol_partition. | Item(s) | each allocation and configuration/renewal update | supported whole life and actual observed service period | actual conversion train/buffer and providers | per reference flow | construction/BOM; actual utilization and yield; life evidence; cumulative shares |
| cp_waste | management | spent_amine; spent_sieve; spent_carbon; used_oil; oily_water | Specific waste/receiver ledger | single stream; actual kg/m3; solution/adsorbate/mercury/oil composition; originating route; actual transfer/treatment/reclamation/disposal; provider coverage | Weigh/meter each real stream and trace real final receiver/treatment with actual constituent basis and no presumed harmlessness, destruction, recycling or avoided burden. Keep spent medium distinct from removed contaminant releases; add other actual specific streams separately. | kg; m3 | each actual waste transfer/period | all attributable actual waste | actual origin and receiving treatment gates | per reference flow | transfer tickets; actual analyses; regeneration/disposal scope; balance |
| cp_release | management | methane; ethane; propane; ethylene; co2; co; no; no2; so2; h2s | Source/component-resolved gas fate ledger | route/source; actual gas composition and mass; combustion/fuel/flare efficiency and oxidation; vent/fugitive/refrigerant leak; named species kg and receiver; removed acid gas route; actual monitoring/factors/speciation; carbon/sulfur balance | Measure/speciate actual source streams and reconcile with cp_mass and refrigerant/chemical balances. Calculate actual source-specific combustion and flare emissions using independently verified composition/efficiency methods; report unburned methane and other species rather than assuming complete destruction. Keep CO2 already in feed distinct from oxidation CO2; NO/NO2 from a NOx-equivalent total require documented speciation, never duplicate total. Add every actual other chemical and receiver separately; missing emission evidence is not zero. | kg | each source operation/upset and representative monitoring | all represented normal/upset sources in actual period | actual source/compartment | per reference flow | metering/leak measurements; actual composition; verified methods; gas/carbon/sulfur balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_attribution | all inventory rows | Divide actual attributable exchange by actual qualified net outlet kg of the same route/state/quality and period, with stock/loss/rework reconciliation. Unique service output is exactly 1 kg. | cp_mass; actual exchange protocols | individual exchange per reference flow |  |
| gas_fate_balance | service_output; methane; ethane; propane; co2; co; so2; h2s | Close actual component mass and carbon/sulfur balances across custody, fuel, BOG, losses and stock; cancel internal returns and count qualified delivery once. Document measured conversion/composition and any unresolved residual, not forced zero. | cp_mass; cp_release; cp_refrigerant | component fate and reconciled net delivery |  |
| asset_attribution | liq_train; regas_train; buffer_tank | Apply supported attributable route-output share of actual asset whole-life utilization to actual manufacture/construction and distinct renewals; retain cumulative conservation across all periods/providers. | cp_assets_liquefaction; cp_assets_regasification; cp_assets_management; cp_mass | asset amount per reference flow |  |
| species_fate | methane; ethane; propane; ethylene; co2; co; no; no2; so2; h2s | Use actual species measurement or verified source composition, combustion/flare efficiency and speciation with explicit dataset units and uncertainty. No numerical fuel, leak, flare destruction or recovery factor is supplied. | cp_release; cp_mass; cp_energy_liquefaction; cp_energy_regasification | individual species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | service_output | Actual transport purpose, route, net qualified mass, inlet/outlet state/composition and acceptance are mandatory; no pooling two phase-conversion routes. | cp_mass |
| quality_bog | management | Require actual BOG/fuel/vent/flare/fugitive and stock records and component balance; internal recovery does not become fresh purchase or default credit. | cp_mass; cp_release |
| quality_thermal | regasification; liquefaction | Keep actual technology, heat source, refrigerant components, water source/return thermal state and chemistry; absent applicable thermal/ecological characterization is disclosed, not zero impact. | cp_energy_liquefaction; cp_energy_regasification; cp_refrigerant; cp_water_regasification; cp_water_management |
| quality_life | all asset rows | Support actual inventory and life-output denominator with capacity/utilization/downtime/yield/life evidence and supplier overlap review. Unknown life prevents a complete lifecycle claim. | cp_assets_liquefaction; cp_assets_regasification; cp_assets_management |
| quality_gaps | all inventory rows | Disclose missing identities, component/flare/receiver evidence, upstream gas-chain links, co-output allocation and actual site noise/water/ecological method gaps; missing is not zero. | cp_waste; cp_release; cp_mass |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Only transport-purpose gas liquefaction/regasification is covered; exclude type-rating/GPS/navigation and other residual functions, independent storage/transport and upstream gas commodity production. | un-cpc-transport-phase |
| validate_reference | Unique service_output must equal 1 kg and match measured net qualified outlet mass with mandatory route/state/composition/T/P/quality and actual period. Internal recycle, off-spec stock, fuel and losses are not qualified delivered output. |  |
| validate_balance | Reconcile custody, external fuel, internal BOG, stock and each species destination; no duplicate gas purchase, double qualified output, complete-flare assumption or implicit cold/heat/BOG credit. Service-only boundary does not assert zero upstream commodity burden in the complete gas chain. |  |
| validate_atomic_life | Every row must be one actual exchange with its own correct property/unit and compartment, including source/return water thermal evidence. Verify life fractions and provider coverage; leave unknown identities/method gaps explicit rather than declare publication readiness. |  |
| `validate_protocol_partition` | Each collection protocol must name one existing process_id and only its listed flow rows; each inventory card must link to that protocol for its actual process. Keep one source_record_id and exchange_id for each physical reading, delivery, transfer, emission or asset allocation. Where a source record serves several processes or datasets, record the allocation driver, original total, each assigned share and any out-of-scope residual in one common period ledger; assigned quantities plus the residual must reconcile to the original total. Splitting protocols does not replicate the full reading, create a new service output or restart an asset lifetime allocation. Preserve one matched output denominator for each declared scenario; use process quantities as attribution evidence, not additional normalization. Reconcile internal transfers once and retain cumulative asset shares across all users and periods. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | transport_natural_gas_phase_conversion_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | One compatible transport-purpose liquefaction or regasification component with the same physical route/states and gas-mass service basis, linked once into the gas chain |
| excluded_use | Generic industry support, type-rating/navigation, complete gas commodity lifecycle, unrelated storage/transport, cross-route kg equivalence or automatic avoided cold/heat/BOG benefits |
| required_metadata | transport purpose; liquefaction OR regasification; actual site/date/route and provider; inlet/outlet custody gates; feed and delivered composition including methane/higher hydrocarbons/CO2/N2/water and relevant contaminants; actual inlet/outlet phase, temperature, pressure and quality/acceptance; net qualifying delivered kg and observation period; actual feed, stock changes, process buffer time, internal recycle, fuel diversion, recovered/exported BOG and each loss fate; compressor/refrigeration cycle or ORV/SCV/air/intermediate-fluid vaporizer and source energy; onshore/floating asset scope; utility source/temperature/pressure; actual water intake/return temperature/chemistry/location; each chemical/refrigerant; emissions/fugitive/flare efficiency evidence; coproduct/provider overlap; real whole-life output denominator and uncertainty |
| required_quality_disclosure | Actual meters/route/composition representativeness, commodity custody and upstream links, internal fuel/BOG/species balance, thermal/water/receiver gaps and supported asset-life denominator |
| update_trigger | Changed transport use, route/technology, feed/outlet composition/state/quality, duty/load, BOG/flare/recovery, heat/water/chemical supply, provider/buffer boundary or life-output evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-transport-phase | official_guidance | UNSD CPC3.0 67990 explanatory note; shared draft PDF p378. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67990 | Natural-gas liquefaction/regasification for transportation; type-rating/navigation remain outside the reviewed narrower method |
| ifc-lng-2017 | official_guidance | IFC/World Bank Group, Environmental, Health, and Safety Guidelines: Liquefied Natural Gas Facilities, 11 April 2017, pp1–2,5–9,21–23. https://www.ifc.org/content/dam/ifc/doc/mgrt/20170406-final-lng-ehs-guideline-april-2017.pdf | Qualitative actual-route/process, BOG/fuel/flare/fugitive, water/thermal/chemical and waste-source context only. No numerical limits, LNG density, expansion ratio, efficiency or emission factors adopted; wider LNG transport/storage scope is not automatically included |
