---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.salt-and-pure-sodium-chloride-sea-water
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Salt and pure sodium chloride; sea water

## 1. Scope and Applicability

Supply of salt and pure sodium chloride, including actual rock salt, harvested solar salt, vacuum/open-pan salt, refined grades, declared aqueous NaCl solutions, table or denatured salt and actual anti-caking/free-flowing variants that retain salt product identity; also supply of sea water itself at a separately declared intake/loading or receipt gate. Each dataset fixes one accepted product state, route and gate, not a weighted mixture of solid salt and sea water. Salt routes include actual mining or solution extraction, sea/saline-water intake, solar concentration/harvesting, supplied-salt dissolution or washing, brine purification, mechanical evaporation/crystallization, dewatering/drying, additive dosing and packaging only where performed. Sea-water product supply includes actual marine abstraction, pumping, screening/filtration, storage and declared delivery without forcing concentration, evaporation, crystallization or desalination. Sea water remains mixed saline water, not pure NaCl or freshwater. Externally supplied sea water/brine is a product input with upstream provider, distinct from elementary marine-water abstraction; internal brine transfers cancel. Include attributable intake/pond/mine development, lifetime rehabilitation, controls, wastes and measured releases through the gate. Chloralkali, soda ash, desalinated fresh water, food formulation and downstream salt use are separate downstream product systems. Cultured NaCl crystals for optical or other separately classified articles and medicines are outside this bulk-material supply scope. `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.salt-and-pure-sodium-chloride-sea-water |
| classification_refs | CPC 3.0:16200 |
| covered_products | Salt and pure sodium chloride as declared solid grades or aqueous solutions, with actual anticaking/free-flowing agents; sea water supplied as a product, distinct from manufactured brine |
| excluded_products | Chlorine, caustic soda, soda ash and other chemical transformations; desalinated freshwater; other isolated mineral salts as the reference product; formulated foods or medicines, cultured/optical NaCl articles, downstream uses and transport-only services |
| representative_product | Compatible refined sodium chloride at plant |
| production_route | Intake pond and mine development; Halite and solution extraction; Sea-water intake and supply; Solar salt concentration and harvesting; Salt and brine purification; Mechanical crystallization and drying; Saline water waste and emissions control; Salt or sea-water product dispatch |
| market_state | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg net accepted as-received product in one declared salt, NaCl solution or sea-water state; solution/sea-water kg is not dry salt kg |
| How much | 1 kg |
| How well | site/year; one product state and selected gate; actual rock/solution/solar/mechanical evaporation/refining/sea-water supply route; origin/geology or marine intake coordinates and season; accepted net mass and stocks/returns; salt free moisture and dry-basis NaCl assay; solution NaCl mass fraction; sea-water salinity method and ionic composition, not salinity as pure NaCl; measured density at temperature if volume conversion; grade/particle size; each actual additive and fraction; bulk/bagged/tank/pipeline; upstream provider and allocation; transport included; pond climate and measured water/ion balance; waste fate/discharge compartment; attributable lifetime development/closure. Representative UUID is only compatible ≥99.5% NaCl Product/Mass at plant, never all salts, brine or sea water |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; one product state and selected gate; actual rock/solution/solar/mechanical evaporation/refining/sea-water supply route; origin/geology or marine intake coordinates and season; accepted net mass and stocks/returns; salt free moisture and dry-basis NaCl assay; solution NaCl mass fraction; sea-water salinity method and ionic composition, not salinity as pure NaCl; measured density at temperature if volume conversion; grade/particle size; each actual additive and fraction; bulk/bagged/tank/pipeline; upstream provider and allocation; transport included; pond climate and measured water/ion balance; waste fate/discharge compartment; attributable lifetime development/closure. Representative UUID is only compatible ≥99.5% NaCl Product/Mass at plant, never all salts, brine or sea water |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently measured positive accepted net as-received kg of exactly the selected gate product, excluding packaging, rejects and returns; do not derive D from resource input or an assumed yield. Solid salt: dry solids = D*(1-w), with measured free-water fraction0 <= w <1; dry-basis NaCl fraction x gives NaCl mass D*(1-w)*x, with additives separately assayed. Solution: actual NaCl mass = D*c using measured as-received NaCl mass fraction c. Sea water: D = sum of independently metered shipment V times measured matching density rho if not directly weighed; temperature/salinity and composition matched to each batch; no default rho, salinity or NaCl fraction. Total dissolved-salt salinity is not NaCl assay. Keep D as denominator in every case and disclose dry/active equivalent only as supplementary qualifiers. Reconcile water and sodium/chloride or measured ionic balances, rainfall, measured pond evaporation/seepage, each co-salt/bittern, moisture, rejects and stock changes on consistent period/basis. Cancel internal circulating brine once. One dataset never sums solid salt, solution and sea water into D. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual halite geological resource, marine/saline-water abstraction, or external supplied salt/brine/sea-water product carrying its upstream burdens, according to actual route |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Salt and pure sodium chloride as declared solid grades or aqueous solutions, with actual anticaking/free-flowing agents; sea water supplied as a product, distinct from manufactured brine |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; one product state and selected gate; actual rock/solution/solar/mechanical evaporation/refining/sea-water supply route; origin/geology or marine intake coordinates and season; accepted net mass and stocks/returns; salt free moisture and dry-basis NaCl assay; solution NaCl mass fraction; sea-water salinity method and ionic composition, not salinity as pure NaCl; measured density at temperature if volume conversion; grade/particle size; each actual additive and fraction; bulk/bagged/tank/pipeline; upstream provider and allocation; transport included; pond climate and measured water/ion balance; waste fate/discharge compartment; attributable lifetime development/closure. Representative UUID is only compatible ≥99.5% NaCl Product/Mass at plant, never all salts, brine or sea water |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of salt and pure sodium chloride, including actual rock salt, harvested solar salt, vacuum/open-pan salt, refined grades, declared aqueous NaCl solutions, table or denatured salt and actual anti-caking/free-flowing variants that retain salt product identity; also supply of sea water itself at a separately declared intake/loading or receipt gate. Each dataset fixes one accepted product state, route and gate, not a weighted mixture of solid salt and sea water. Salt routes include actual mining or solution extraction, sea/saline-water intake, solar concentration/harvesting, supplied-salt dissolution or washing, brine purification, mechanical evaporation/crystallization, dewatering/drying, additive dosing and packaging only where performed. Sea-water product supply includes actual marine abstraction, pumping, screening/filtration, storage and declared delivery without forcing concentration, evaporation, crystallization or desalination. Sea water remains mixed saline water, not pure NaCl or freshwater. Externally supplied sea water/brine is a product input with upstream provider, distinct from elementary marine-water abstraction; internal brine transfers cancel. Include attributable intake/pond/mine development, lifetime rehabilitation, controls, wastes and measured releases through the gate. Chloralkali, soda ash, desalinated fresh water, food formulation and downstream salt use are separate downstream product systems. Cultured NaCl crystals for optical or other separately classified articles and medicines are outside this bulk-material supply scope. | `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Intake pond and mine development | conditional | Actual attributable development and rehabilitation | Foreground production | per 1 kg reference flow |
| extraction | Halite and solution extraction | conditional | Only actual rock mining or solution mining | Foreground production | per 1 kg reference flow |
| intake | Sea-water intake and supply | conditional | Actual marine intake or supplied saline feed; sea-water product may stop here | Foreground production | per 1 kg reference flow |
| solar | Solar salt concentration and harvesting | conditional | Only actual solar pond concentration and harvest | Foreground production | per 1 kg reference flow |
| refining | Salt and brine purification | conditional | Actual washing/dissolution/chemical brine purification | Foreground production | per 1 kg reference flow |
| evaporation | Mechanical crystallization and drying | conditional | Actual vacuum/open-pan evaporation and solid drying; absent for unprocessed sea-water gate | Foreground production | per 1 kg reference flow |
| controls | Saline water waste and emissions control | conditional | Actual transfers and environmental releases | Foreground production | per 1 kg reference flow |
| dispatch | Salt or sea-water product dispatch | required | Every selected gate; grade additives and packaging only when present | Foreground production | per 1 kg reference flow |

### Process: Intake pond and mine development (`development`)

#### Inputs

##### Product flows

###### Development and closure diesel (`development_diesel`)

Actual intake/pond/well/mine works, attributed once by lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Halite and solution extraction (`extraction`)

#### Inputs

##### Product flows

###### Salt extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual mining ventilation, crushing, pumping and wells; cancel internal brine.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Rock-salt extraction diesel (`mining_diesel`)

Actual digging/loading/onsite haul without duplicate dispatch.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Ammonium-nitrate fuel-oil explosive (`anfo`)

Only actual blasting; continuous mining excludes absent explosive; each other explosive separate.

- Selected flow: Ammonium-nitrate fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Purchased solution-mining water (`solution_water`)

Actual new injected water; other directly abstracted sources separate; return brine not new purchased water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_solution_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solution_water`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### Elementary flows

###### Natural halite in geological deposit (`halite_resource`)

Actual halite geological withdrawal; not Product NaCl as a geological resource.

- Selected flow: Natural halite in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_halite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_halite_resource`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### Outputs

##### Waste flows

###### Rejected salt-mine rock (`rejected_rock`)

Actual removed rock with fate; no universal zero-waste assumption from one mine report.

- Selected flow: Rejected salt-mine rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_rejected_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_rock`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Sea-water intake and supply (`intake`)

#### Inputs

##### Product flows

###### Externally supplied sea water (`supplied_seawater`)

Only actual provider sea-water product with upstream pumping/delivery; never also count its supplier intake as own marine resource.

- Selected flow: Externally supplied sea water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_seawater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_seawater`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Externally supplied sodium-chloride brine (`supplied_brine`)

Actual manufactured/recovered brine with density/composition and provider allocation; distinct from raw sea water.

- Selected flow: Externally supplied sodium-chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_brine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_brine`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sea-water intake and screening electricity (`intake_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual pump/screens/filter/storage; excludes downstream desalination.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_intake_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intake_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### Elementary flows

###### Sea water abstracted from marine environment (`marine_water`)

Actual gross marine intake with coordinates/season, distinct from supplied technosphere sea water and from freshwater resource.

- Selected flow: Sea water abstracted from marine environment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_marine_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_marine_water`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Solar salt concentration and harvesting (`solar`)

#### Inputs

##### Product flows

###### Solar salt pond pumping electricity (`solar_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual seawater/brine transfers within solar route; sunlight is not purchased electricity.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_solar_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solar_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Solar salt harvesting diesel (`harvest_diesel`)

Only actual harvest/load machines, matched seasonal accepted stock.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_harvest_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_diesel`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### Outputs

##### Product flows

###### Saleable salt-production bittern (`bittern_product`)

Only actually recovered accepted bittern specification and customer; otherwise record waste brine, not both.

- Selected flow: Saleable salt-production bittern
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_bittern_product; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bittern_product`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Salt and brine purification (`refining`)

#### Inputs

##### Product flows

###### Supplied compatible refined sodium chloride (`supplied_nacl`)

Only ≥99.5% plant-state compatible supplied NaCl; other salt grades each independent identity; internal salt not external input.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_nacl; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_nacl`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Purchased salt-refining water (`refining_water`)

Only actual new wash/dissolution/makeup water, with reused water excluded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_refining_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refining_water`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Salt purification electricity (`refining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual washing/mixing/filtration/centrifuge; no fixed chemical recipe.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_refining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refining_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sodium carbonate (`soda_ash`)

Actual individual purification reagent only; record active fraction and reaction fate.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_soda_ash; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_soda_ash`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sodium hydroxide (`caustic_soda`)

Actual individual purification reagent only; not downstream chloralkali production.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_caustic_soda; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_caustic_soda`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Calcium hydroxide (`lime`)

Only actual slaked-lime purification reagent; no mandatory universal use.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lime`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### Outputs

##### Waste flows

###### Salt-brine purification sludge (`purification_sludge`)

Actual calcium/magnesium precipitate sludge with phase, solids and treatment fate; no assumed safe cavern disposal.

- Selected flow: Salt-brine purification sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_purification_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purification_sludge`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Mechanical crystallization and drying (`evaporation`)

#### Inputs

##### Product flows

###### Salt crystallization and dryer electricity (`evap_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual vacuum/MVR/pumps/centrifuge/dryer within gate; meter allocation prevents duplication.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_evap_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_evap_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Purchased process steam (`purchased_steam`)

Actual externally purchased evaporation/drying steam; not also onsite fuel generating same steam.

- Selected flow: Purchased process steam
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_purchased_steam; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_steam`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Natural gas for onsite salt-process heat (`boiler_gas`)

Only actual gas-fired evaporation/drying or boiler; composition and calorific value measured; other fuels separate.

- Selected flow: Natural gas for onsite salt-process heat
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_boiler_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_boiler_gas`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Saline water waste and emissions control (`controls`)

#### Inputs

##### Product flows

###### Salt water and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual treatment/control meters not already included.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### Outputs

##### Waste flows

###### Salt-production waste brine transferred for treatment (`waste_brine`)

Actual final brine/bittern waste transfer with composition; not environmental release or sold bittern.

- Selected flow: Salt-production waste brine transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_brine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_brine`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sea-water intake screen rejects (`screenings`)

Actual captured intake debris transferred with fate; organism loss and habitat impacts disclose separately.

- Selected flow: Sea-water intake screen rejects
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_screenings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_screenings`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### Elementary flows

###### Water discharged to sea (`water_to_sea`)

Actual net marine discharge including measured salinity/temperature and origin; not freshwater return or assumed offset of gross intake.

- Selected flow: Water discharged to sea
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_water_to_sea; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_to_sea`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Chloride released to sea water (`chloride_to_sea`)

Actual individual dissolved chloride load with intake/background reference and net/gross convention disclosed.

- Selected flow: Chloride released to sea water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_chloride_to_sea; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chloride_to_sea`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Suspended solids released to sea water (`tss_water`)

Only actual measured TSS discharge to sea; captured sludge is not release.

- Selected flow: Suspended solids released to sea water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Fossil carbon dioxide released to air (`co2_air`)

Actual foreground fossil combustion, not a default salt chemical emission; upstream counted once.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Nitrogen dioxide released to air (`nox_air`)

Actual individual NO2 from combustion with method; NO and other pollutants each separate.

- Selected flow: Nitrogen dioxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_nox_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nox_air`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sodium chloride particulate released to air (`salt_dust`)

Actual uncollected salt dust by size/compartment; returned collector dust is not emission.

- Selected flow: Sodium chloride particulate released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_salt_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_salt_dust`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### Process: Salt or sea-water product dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Sodium ferrocyanide anticaking agent (`sodium_ferrocyanide`)

Only actually used named additive with grade, hydrate and active fraction; no mandatory dosing.

- Selected flow: Sodium ferrocyanide anticaking agent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_ferrocyanide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_ferrocyanide`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Silicon dioxide free-flowing agent (`silica`)

Only actually used named additive; every other denaturant/anticaking agent separate and identity reviewed.

- Selected flow: Silicon dioxide free-flowing agent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_silica; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_silica`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Polyethylene salt bag (`pe_bag`)

Only actual bag excluding product net mass; each pallet/liner/paper component separate if present.

- Selected flow: Polyethylene salt bag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pe_bag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pe_bag`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Included salt or sea-water delivery diesel (`delivery_diesel`)

Only actual foreground delivery inside expressly selected receipt gate; no duplicated provider transport.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### Outputs

##### Product flows

###### Rock salt at declared gate (`rock_salt_product`)

Selected rock-salt product only; measure its own D and grade/moisture; co-grades separately allocated; not pure NaCl UUID.

- Selected flow: Rock salt at declared gate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_rock_salt_product; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rock_salt_product`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Harvested solar salt at declared gate (`solar_salt_product`)

Selected solar-salt product only with own D, moisture and assays; no imposed refined purity.

- Selected flow: Harvested solar salt at declared gate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_solar_salt_product; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solar_salt_product`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sodium chloride aqueous solution at declared gate (`solution_product`)

Selected manufactured NaCl solution only with own positive as-received D and concentration; not dry NaCl kg or raw sea water.

- Selected flow: Sodium chloride aqueous solution at declared gate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_solution_product; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_solution_product`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Sea water at declared supply gate (`seawater_product`)

Selected raw/physically screened sea-water product only with own D and salinity/density; exclude all absent evaporation/refining salt operations.

- Selected flow: Sea water at declared supply gate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_seawater_product; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_seawater_product`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### Compatible refined sodium chloride at plant (`final_product`)

Representative confirmed ≥99.5% NaCl Product/Mass only when this compatible plant product is selected. Other salt grades, NaCl solution and sea-water outputs require their own identities and replace the dataset reference, not this UUID. Actual mechanical/solar production is recorded, not inferred from flow name. Exactly one selected accepted product defines D; alternative reference cards are not joint quantities summed into D.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide mine/intake, purification, evaporation and independently handled grades wherever possible. Retain unallocated inventories for actual joint NaCl, bittern and separately recovered calcium/magnesium/potassium salts; demonstrate physical causality or use matched economic allocation with price sensitivity when needed. Bittern or purification sludge is not automatically a saleable co-product; document composition, specification and actual fate. Account for recovered/purchased-brine supplier burdens and any justified cut-off, not zero burdens by origin. Allocate attributable intake/pond/well/mine development and closure once over measured lifetime accepted output; storage-cavern downstream use gives no automatic credit. No default avoided salt, chemical, desalinated-water or disposal credits. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_halite_resource | extraction | `halite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_solution_water | extraction | `solution_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rejected_rock | extraction | `rejected_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_marine_water | intake | `marine_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_seawater | intake | `supplied_seawater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_brine | intake | `supplied_brine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_intake_power | intake | `intake_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_solar_power | solar | `solar_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_harvest_diesel | solar | `harvest_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_bittern_product | solar | `bittern_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_nacl | refining | `supplied_nacl` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_refining_water | refining | `refining_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_refining_power | refining | `refining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_soda_ash | refining | `soda_ash` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record individually named supplier formulation and hydrate, net consumed formulation kg, active fraction, added water and actual process fate, same period as output; no pooled chemicals or imposed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_caustic_soda | refining | `caustic_soda` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record individually named supplier formulation and hydrate, net consumed formulation kg, active fraction, added water and actual process fate, same period as output; no pooled chemicals or imposed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lime | refining | `lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record individually named supplier formulation and hydrate, net consumed formulation kg, active fraction, added water and actual process fate, same period as output; no pooled chemicals or imposed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purification_sludge | refining | `purification_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_evap_power | evaporation | `evap_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purchased_steam | evaporation | `purchased_steam` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_boiler_gas | evaporation | `boiler_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_brine | controls | `waste_brine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_screenings | controls | `screenings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_water_to_sea | controls | `water_to_sea` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_chloride_to_sea | controls | `chloride_to_sea` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measured matched discharge volume V m3 and species concentration C mg/L give load kg=C*V/1000; preserve intake/background paired concentration, gross/net convention, environmental compartment and uncertainty. Net incremental load only when matched gross intake/background subtraction is justified and declared; do not automatically count natural sea-water chloride as newly generated pollution. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measured matched discharge volume V m3 and species concentration C mg/L give load kg=C*V/1000; preserve intake/background paired concentration, gross/net convention, environmental compartment and uncertainty. Net incremental load only when matched gross intake/background subtraction is justified and declared; do not automatically count natural sea-water chloride as newly generated pollution. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_nox_air | controls | `nox_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_salt_dust | controls | `salt_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_ferrocyanide | dispatch | `sodium_ferrocyanide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record individually named supplier formulation and hydrate, net consumed formulation kg, active fraction, added water and actual process fate, same period as output; no pooled chemicals or imposed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_silica | dispatch | `silica` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record individually named supplier formulation and hydrate, net consumed formulation kg, active fraction, added water and actual process fate, same period as output; no pooled chemicals or imposed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pe_bag | dispatch | `pe_bag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rock_salt_product | dispatch | `rock_salt_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_solar_salt_product | dispatch | `solar_salt_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_solution_product | dispatch | `solution_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_seawater_product | dispatch | `seawater_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter gross intake and accepted gate shipments separately; match calibrated net kg or measured V m3 and density rho kg/m3 at recorded temperature and salinity for each batch. Record origin, seasonal samples, Na/Cl and other ionic assays, stocks, transfers, rainfall, evaporation, leakage and actual discharge. D derives only from selected accepted gate output; D=sum(V*rho) if volume-derived, without assumed seawater density or salinity. Solution NaCl fraction and seawater total salinity remain distinct. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh net accepted product or actual transfer kg for matched batch/period; assay free moisture, solids, NaCl and actual other phases/ions/additives on explicit wet/dry basis. Reconcile stocks and flows; reject/packaging not D. Selected product D is independently measured and positive, never theoretical yield. Retain dry-solids D*(1-w), NaCl D*(1-w)*x or solution D*c as supplementary equivalents only. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted solid salt grade, NaCl aqueous solution or sea-water product; measured as-received composition and selected loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently measured positive accepted net as-received kg of exactly the selected gate product, excluding packaging, rejects and returns; do not derive D from resource input or an assumed yield. Solid salt: dry solids = D*(1-w), with measured free-water fraction0 <= w <1; dry-basis NaCl fraction x gives NaCl mass D*(1-w)*x, with additives separately assayed. Solution: actual NaCl mass = D*c using measured as-received NaCl mass fraction c. Sea water: D = sum of independently metered shipment V times measured matching density rho if not directly weighed; temperature/salinity and composition matched to each batch; no default rho, salinity or NaCl fraction. Total dissolved-salt salinity is not NaCl assay. Keep D as denominator in every case and disclose dry/active equivalent only as supplementary qualifiers. Reconcile water and sodium/chloride or measured ionic balances, rainfall, measured pond evaporation/seepage, each co-salt/bittern, moisture, rejects and stock changes on consistent period/basis. Cancel internal circulating brine once. One dataset never sums solid salt, solution and sea water into D. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently measured positive accepted net as-received kg of exactly the selected gate product, excluding packaging, rejects and returns; do not derive D from resource input or an assumed yield. Solid salt: dry solids = D*(1-w), with measured free-water fraction0 <= w <1; dry-basis NaCl fraction x gives NaCl mass D*(1-w)*x, with additives separately assayed. Solution: actual NaCl mass = D*c using measured as-received NaCl mass fraction c. Sea water: D = sum of independently metered shipment V times measured matching density rho if not directly weighed; temperature/salinity and composition matched to each batch; no default rho, salinity or NaCl fraction. Total dissolved-salt salinity is not NaCl assay. Keep D as denominator in every case and disclose dry/active equivalent only as supplementary qualifiers. Reconcile water and sodium/chloride or measured ionic balances, rainfall, measured pond evaporation/seepage, each co-salt/bittern, moisture, rejects and stock changes on consistent period/basis. Cancel internal circulating brine once. One dataset never sums solid salt, solution and sea water into D. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg net accepted as-received product in one declared salt, NaCl solution or sea-water state; solution/sea-water kg is not dry salt kg |
| excluded_use | Chlorine, caustic soda, soda ash and other chemical transformations; desalinated freshwater; other isolated mineral salts as the reference product; formulated foods or medicines, cultured/optical NaCl articles, downstream uses and transport-only services |
| required_metadata | site/year; one product state and selected gate; actual rock/solution/solar/mechanical evaporation/refining/sea-water supply route; origin/geology or marine intake coordinates and season; accepted net mass and stocks/returns; salt free moisture and dry-basis NaCl assay; solution NaCl mass fraction; sea-water salinity method and ionic composition, not salinity as pure NaCl; measured density at temperature if volume conversion; grade/particle size; each actual additive and fraction; bulk/bagged/tank/pipeline; upstream provider and allocation; transport included; pond climate and measured water/ion balance; waste fate/discharge compartment; attributable lifetime development/closure. Representative UUID is only compatible ≥99.5% NaCl Product/Mass at plant, never all salts, brine or sea water |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bgs-salt-2006 | official_guidance | BGS, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Salt, January 2006, original pp.6–7. https://nora.nerc.ac.uk/id/eprint/534431/1/mpf_salt.pdf | Qualitative rock/solution extraction, brine purification and plant transport states; historical UK assays, yields, reserve recovery, waste totals and zero-waste claims are not general defaults. |
| usgs-salt-2018 | official_guidance | USGS, Wallace P. Bolen, 2018 Minerals Yearbook: Salt, June2023 advance release, original PDF p.2 / printed63.1. https://pubs.usgs.gov/myb/vol1/2018/myb1-2018-salt.pdf | Actual rock, solution-brine, solar and vacuum/open-pan routes and solar climate/season geography; USGS anhydrous brine statistics are not as-received solution mass. No historical capacities or intensities adopted. |
| wco-salt-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF p.1 heading2501 and Notes1–2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Salt, pure NaCl, aqueous solutions, anticaking/free-flowing variants and sea water product-state scope; no new HS mapping or production quantity. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
