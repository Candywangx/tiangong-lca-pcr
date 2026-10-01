---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.copper-ores-and-concentrates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Copper ores and concentrates

## 1. Scope and Applicability

Supply of copper ores and mineral concentrates at one declared mine, concentrator-loading or explicitly included delivery gate. Cover sulfide, oxide, native-copper and mixed mineral ores, surface or underground extraction, and standalone preparation of supplied ores. Follow actual crushing, sorting, gravity separation, grinding, flotation, thickening, filtration and drying rather than imposing sulfide flotation on oxide/native ores or on a run-of-mine product. Mixed-metal bulk concentrates require confirmed copper-category identity, mineral/metal assays and joint-product allocation; each dataset declares one actual output state. Include any actual thermal ore preparation only when its output remains a qualified ore/mineral-concentrate feed; record transformed phases and sulfur/offgas balance, with separate actual treatment and emission rows. This condition does not automatically classify a calcine as ore. Copper-bearing slag, dross and recycled scrap require separate secondary-material methodologies, not an ore identity inferred from copper content. Dissolution/leach solution, solvent extraction/electrowinning, cement copper, smelting matte, blister/anode/cathode copper and refined compounds are distinct downstream product gates. Do not use their yield or metal kilogram as the mineral-product denominator. Include attributable development, closure, handling, tailings/water/dust controls and transport only through the selected gate. `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.copper-ores-and-concentrates |
| classification_refs | CPC 3.0:14210 |
| covered_products | Copper mineral ores and concentrates, including sulfide, oxide, native-copper and mixed-mineral ore states; confirmed copper-category bulk concentrates and qualified normally prepared mineral feeds |
| excluded_products | Smelting matte; blister/anode/cathode or cement copper; leach solutions and separated refined compounds; copper-industry slag/dross or recycled scrap; transport-only service; precious-metal or other-metal concentrates with a different declared category |
| representative_product | Copper ore at declared mineral-product gate |
| production_route | Mine development and closure; Copper-ore extraction; Ore preparation and concentration; Qualified mineral-feed thermal preparation; Tailings water and emission management; Included product delivery; Accepted mineral-product handling |
| market_state | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg of qualified copper ore or mineral concentrate in its declared state; report contained copper separately without claiming equivalence to1 kg copper metal |
| How much | 1 kg |
| How well | site/year; geological/mineralogical ore identity; sulfide/oxide/native/mixed route; surface/underground or supplied ore; ore versus concentrate and actual processing/thermal state; dry-basis Cu, sulfur, associated metals and deleterious-element assays; free moisture and grading; actual gate and transport inclusion; accepted output and stock; measured recovery and tailings fate; water source/basin/return; co-product classification, upstream provider and allocation; lifetime development output; representative UUID applies only to generic supplied copper ore, not grade-specific concentrate or geological elementary resource |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Copper ore `7f574b09-9b2c-47e2-b38d-a883f15ddeeb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; geological/mineralogical ore identity; sulfide/oxide/native/mixed route; surface/underground or supplied ore; ore versus concentrate and actual processing/thermal state; dry-basis Cu, sulfur, associated metals and deleterious-element assays; free moisture and grading; actual gate and transport inclusion; accepted output and stock; measured recovery and tailings fate; water source/basin/return; co-product classification, upstream provider and allocation; lifetime development output; representative UUID applies only to generic supplied copper ore, not grade-specific concentrate or geological elementary resource |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received mineral-product kg at the declared gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free moisture w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis copper mass fraction g with0 <= g <=1; contained Cu kg = D*(1-w)*g. Retain D as the common inventory denominator; neither dry mineral kg nor contained Cu kg is substituted silently. Reconcile dry ore/concentrate/tailings/reject/stock solids and each measured metal component independently of water intake, recycle, evaporation and discharge. Calculate metal recovery only from matched input/output dry masses and assays after inventory adjustment; do not infer recovery from grade alone or import smelter yield. Thermal preparation needs phase-specific mass, sulfur and actual oxygen/offgas balances; all additional actual chemicals, gases and pollutants require separate cards. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual copper-bearing geological deposit for integrated primary mining, or supplied identified burden-bearing ore for standalone concentration; internal mine-to-mill transfers cancel |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Copper mineral ores and concentrates, including sulfide, oxide, native-copper and mixed-mineral ore states; confirmed copper-category bulk concentrates and qualified normally prepared mineral feeds |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; geological/mineralogical ore identity; sulfide/oxide/native/mixed route; surface/underground or supplied ore; ore versus concentrate and actual processing/thermal state; dry-basis Cu, sulfur, associated metals and deleterious-element assays; free moisture and grading; actual gate and transport inclusion; accepted output and stock; measured recovery and tailings fate; water source/basin/return; co-product classification, upstream provider and allocation; lifetime development output; representative UUID applies only to generic supplied copper ore, not grade-specific concentrate or geological elementary resource |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of copper ores and mineral concentrates at one declared mine, concentrator-loading or explicitly included delivery gate. Cover sulfide, oxide, native-copper and mixed mineral ores, surface or underground extraction, and standalone preparation of supplied ores. Follow actual crushing, sorting, gravity separation, grinding, flotation, thickening, filtration and drying rather than imposing sulfide flotation on oxide/native ores or on a run-of-mine product. Mixed-metal bulk concentrates require confirmed copper-category identity, mineral/metal assays and joint-product allocation; each dataset declares one actual output state. Include any actual thermal ore preparation only when its output remains a qualified ore/mineral-concentrate feed; record transformed phases and sulfur/offgas balance, with separate actual treatment and emission rows. This condition does not automatically classify a calcine as ore. Copper-bearing slag, dross and recycled scrap require separate secondary-material methodologies, not an ore identity inferred from copper content. Dissolution/leach solution, solvent extraction/electrowinning, cement copper, smelting matte, blister/anode/cathode copper and refined compounds are distinct downstream product gates. Do not use their yield or metal kilogram as the mineral-product denominator. Include attributable development, closure, handling, tailings/water/dust controls and transport only through the selected gate. | `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and closure | conditional | Integrated extraction and attributable rehabilitation | Foreground production | per 1 kg reference flow |
| extraction | Copper-ore extraction | conditional | Actual surface/underground mining | Foreground production | per 1 kg reference flow |
| preparation | Ore preparation and concentration | conditional | Actual grade-specific crushing/sorting/grinding/separation; exclude absent operations | Foreground production | per 1 kg reference flow |
| thermal | Qualified mineral-feed thermal preparation | conditional | Only actual drying or ore preparation retaining confirmed mineral-feed identity; not smelting | Foreground production | per 1 kg reference flow |
| controls | Tailings water and emission management | conditional | Actual waste handling, water treatment and dust/air controls | Foreground production | per 1 kg reference flow |
| delivery | Included product delivery | conditional | Only explicitly included delivery through declared receipt gate | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral-product handling | required | Every declared output gate | Foreground production | per 1 kg reference flow |

### Process: Mine development and closure (`development`)

#### Inputs

##### Product flows

###### Mine-development diesel (`development_diesel`)

Actual clearing/roads/earthworks/closure machinery; attribute once over lifetime accepted output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Copper-ore extraction (`extraction`)

#### Inputs

##### Product flows

###### Copper-mine extraction and onsite-haul diesel (`mining_diesel`)

Actual mining machinery/onsite ore and waste-rock haul; distinguish included external delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Copper-mine extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual extraction, underground ventilation, pumping or conveyor meters; no assumed common route.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; other actual explosive formulations and detonators each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Copper-bearing mineral ore in geological deposit (`ore_resource`)

Actual primary geological resource mass and measured mineralogy; a database product labelled in-ground is not an elementary resource.

- Selected flow: Copper-bearing mineral ore in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ore_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ore_resource`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Copper-mine waste rock (`waste_rock`)

Actual barren/rejected geological rock transferred to management; distinguish ore stocks and saleable grades, record sulfide/acid-generation evidence.

- Selected flow: Copper-mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Ore preparation and concentration (`preparation`)

#### Inputs

##### Product flows

###### Supplied copper ore (`supplied_ore`)

Only burden-bearing purchased ore in standalone concentration; actual mineral/assay/moisture and provider. Internal mine-to-mill feed is not a new external input.

- Selected flow: Copper ore `7f574b09-9b2c-47e2-b38d-a883f15ddeeb`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_ore`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Copper-ore preparation electricity (`mill_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crusher, sorter, gravity device, mill, flotation and dewatering circuits separately attributable; ore-only gate omits absent concentration.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mill_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mill_power`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Steel grinding balls (`steel_media`)

Only actual consumed steel balls; rods, liners and other grinding materials each separate if used.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_media`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Purchased ore-processing make-up water (`process_water`)

Only new purchased make-up water; internal reclaimed tailings water remains a balance observation, not new supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_process_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Potassium amyl xanthate (`pax`)

Only actual specified collector formulation; different collectors each separate, never impose this reagent on every ore.

- Selected flow: Potassium amyl xanthate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pax; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pax`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Methyl isobutyl carbinol (`mibc`)

Only actual MIBC frother confirmed by supplier composition; pine oil/polyglycol frothers each separate if used.

- Selected flow: Methyl isobutyl carbinol
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mibc; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mibc`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Quicklime for flotation pH control (`lime`)

Only actual calcium-oxide supply with active fraction/hydration water; hydrated lime is a separate product.

- Selected flow: Quicklime for flotation pH control
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lime`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Sodium hydrosulfide (`sodium_hydrosulfide`)

Only actual sulfide conditioning or molybdenum/copper separation with mineralogical and supplier evidence; do not assume oxide flotation is universally viable.

- Selected flow: Sodium hydrosulfide
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_hydrosulfide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_hydrosulfide`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Sodium silicate (`sodium_silicate`)

Only actual specified dispersant/depressant formulation with active fraction.

- Selected flow: Sodium silicate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_silicate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_silicate`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`flocculant`)

Only actual thickening/tailings flocculant with formulation and active fraction; separate other polymers.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_flocculant; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flocculant`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`surface_water`)

Only actual direct river abstraction with basin and season; groundwater abstraction needs a distinct resource identity/card.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_surface_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_water`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Saleable molybdenum mineral concentrate (`molybdenum_concentrate`)

Only independently recovered accepted molybdenum concentrate; assay and moisture, not molybdenum already embedded in the copper concentrate.

- Selected flow: Saleable molybdenum mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_molybdenum_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_molybdenum_concentrate`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Waste flows

###### Copper-beneficiation tailings slurry (`tailings`)

Actual final unrecovered tailings with solids fraction, mineral/metal/sulfide assays and management fate; exclude internal circulating middlings.

- Selected flow: Copper-beneficiation tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Copper-ore sorting reject (`sorting_reject`)

Only actual rejected mineral stream distinct from extraction waste rock and final flotation tailings.

- Selected flow: Copper-ore sorting reject
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sorting_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_reject`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Qualified mineral-feed thermal preparation (`thermal`)

#### Inputs

##### Product flows

###### Mineral-feed thermal-preparation natural gas (`thermal_natural_gas`)

Only actual gas-fired drying or qualified thermal mineral preparation; retain product phase/gate and distinguish fuel drying from sulfur oxidation heat. Other fuels/heat each separate.

- Selected flow: Mineral-feed thermal-preparation natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_natural_gas`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Mineral-feed thermal-preparation electricity (`thermal_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual drying/thermal preparation and associated offgas-control equipment; shared controls must not be metered twice.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Tailings water and emission management (`controls`)

#### Inputs

##### Product flows

###### Tailings-water and emission-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual tailings pumps, reclaim water, effluent and dust controls; avoid duplication with process/thermal meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Water-treatment quicklime (`water_treatment_lime`)

Only actual mine/tailings-water neutralization; distinct from flotation pH input and actual dose/purity.

- Selected flow: Water-treatment quicklime
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_water_treatment_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_treatment_lime`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Copper-mine water-treatment sludge (`treatment_sludge`)

Actual neutralization/precipitation sludge transferred to management with measured dry solids/metals.

- Selected flow: Copper-mine water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Copper-process wastewater transferred for treatment (`wastewater`)

Only actual external treatment transfer; direct environmental discharge volume and species are separate exchanges.

- Selected flow: Copper-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Copper-mineral collector dust transferred to disposal (`collector_dust`)

Only actual collected dust disposed; internal return cancels and product recovery is distinct.

- Selected flow: Copper-mineral collector dust transferred to disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Copper-mineral PM10 released to outdoor air (`pm10_air`)

Actual controlled mine/haul/plant dust with particulate and metal composition; other size fractions/species each separate.

- Selected flow: Copper-mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground fuel combustion with measured fuel/carbon basis; exclude upstream provider combustion counted again.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Sulfur dioxide released to outdoor air (`so2_air`)

Only actual fuel-sulfur or qualified thermal-preparation offgas after controls; no assumed sulfate-to-SO2 factor or smelter emissions inside ore-only gate.

- Selected flow: Sulfur dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_so2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2_air`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Dissolved copper released to receiving water (`copper_water`)

Only actual release with identified water compartment; measure dissolved Cu, net volume and background, not all Cu in managed tailings as water emission.

- Selected flow: Dissolved copper released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_copper_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_water`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Included product delivery (`delivery`)

#### Inputs

##### Product flows

###### Included copper-mineral delivery diesel (`delivery_diesel`)

Only actual foreground delivery through an explicitly included receipt gate with route/load/return. Outsourced provider transport links separately without duplicate fuel. Mine/plant-loading gate excludes later delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Accepted mineral-product handling (`dispatch`)

#### Inputs

##### Product flows

###### Copper-mineral gate-handling diesel (`loading_diesel`)

Actual product loading/receipt distinct from extraction haul and delivery fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Copper ore at declared mineral-product gate (`final_product`)

Verified representative is generic Copper ore Product/Mass. Use only compatible actual ore state with measured moisture/grade. Concentrates, qualified thermally prepared feeds and grade-specific variants need distinct exact product identities; a transport service or copper slag is not a concentrate substitute.

- Selected flow: Copper ore `7f574b09-9b2c-47e2-b38d-a883f15ddeeb`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-copper-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide extraction, ore sorting, separate concentrate circuits and dispatch when possible. Retain joint bulk-concentrate and associated-metal inventories before allocation; contained-metal mass is not automatically physical causality. Justify actual physical relationship or economic allocation with matched grades, payable terms, treatment charges, prices and reporting period, without counting an embedded precious metal again as a separate physical output. Separate saleable molybdenum concentrate from copper mineral output; tailings do not become burden-free co-products merely because sold. Attribute development/closure once over measured lifetime accepted output. No automatic avoided-metal, avoided-disposal or internal-recycle credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ore_resource | extraction | `ore_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_ore | preparation | `supplied_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mill_power | preparation | `mill_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | preparation | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_process_water | preparation | `process_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_surface_water | preparation | `surface_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pax | preparation | `pax` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mibc | preparation | `mibc` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lime | preparation | `lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_hydrosulfide | preparation | `sodium_hydrosulfide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_silicate | preparation | `sodium_silicate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_flocculant | preparation | `flocculant` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_molybdenum_concentrate | preparation | `molybdenum_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings | preparation | `tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sorting_reject | preparation | `sorting_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids content and dry-basis Cu/associated-metal/mineral/sulfur assays for the same batches and period. Reconcile stocks and transfers. Identify geological resource versus supplied product versus waste/co-product and its provider or management fate; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_natural_gas | thermal | `thermal_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_water_treatment_lime | controls | `water_treatment_lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass, assay or active fraction and dilution water for the matched circuit; reconcile chemical stocks and internal reuse. Product mass and active-chemical mass are distinct, with explicit measured conversion. No pooled reagent or historical industry dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_so2_air | controls | `so2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_copper_water | controls | `copper_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair sampled dissolved-Cu concentration mg/L with calibrated net receiving-water discharge m3 for the same period: Cu kg = concentration mg/L * volume m3 /1000. Retain total/dissolved distinction, background/reference-water measurements, compartment and uncertainty separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated independently weighed positive accepted net mineral kg D at the chosen gate, excluding packaging/returns/rejects and reconciling stocks. Measure representative batch wet-basis moisture w and dry-basis Cu fraction g with sampling/assay uncertainty. Dry mass = D*(1-w); contained copper = D*(1-w)*g; keep D as denominator. Concentrate is a mineral product, not pure copper or smelter recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted mineral ore or concentrate grade, with measured moisture and dry-basis Cu/associated-element assay, at the declared loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received mineral-product kg at the declared gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free moisture w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis copper mass fraction g with0 <= g <=1; contained Cu kg = D*(1-w)*g. Retain D as the common inventory denominator; neither dry mineral kg nor contained Cu kg is substituted silently. Reconcile dry ore/concentrate/tailings/reject/stock solids and each measured metal component independently of water intake, recycle, evaporation and discharge. Calculate metal recovery only from matched input/output dry masses and assays after inventory adjustment; do not infer recovery from grade alone or import smelter yield. Thermal preparation needs phase-specific mass, sulfur and actual oxygen/offgas balances; all additional actual chemicals, gases and pollutants require separate cards. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received mineral-product kg at the declared gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free moisture w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis copper mass fraction g with0 <= g <=1; contained Cu kg = D*(1-w)*g. Retain D as the common inventory denominator; neither dry mineral kg nor contained Cu kg is substituted silently. Reconcile dry ore/concentrate/tailings/reject/stock solids and each measured metal component independently of water intake, recycle, evaporation and discharge. Calculate metal recovery only from matched input/output dry masses and assays after inventory adjustment; do not infer recovery from grade alone or import smelter yield. Thermal preparation needs phase-specific mass, sulfur and actual oxygen/offgas balances; all additional actual chemicals, gases and pollutants require separate cards. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg of qualified copper ore or mineral concentrate in its declared state; report contained copper separately without claiming equivalence to1 kg copper metal |
| excluded_use | Smelting matte; blister/anode/cathode or cement copper; leach solutions and separated refined compounds; copper-industry slag/dross or recycled scrap; transport-only service; precious-metal or other-metal concentrates with a different declared category |
| required_metadata | site/year; geological/mineralogical ore identity; sulfide/oxide/native/mixed route; surface/underground or supplied ore; ore versus concentrate and actual processing/thermal state; dry-basis Cu, sulfur, associated metals and deleterious-element assays; free moisture and grading; actual gate and transport inclusion; accepted output and stock; measured recovery and tailings fate; water source/basin/return; co-product classification, upstream provider and allocation; lifetime development output; representative UUID applies only to generic supplied copper ore, not grade-specific concentrate or geological elementary resource |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-copper-1994 | official_guidance | US EPA, Technical Resource Document: Extraction and Beneficiation of Ores and Minerals, Volume4 Copper, EPA530-R-94-031, August1994, PartA original PDF pp.31–34,48–49. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/copper1a.pdf | Qualitative sulfide-ore crushing, grinding, flotation, concentrate dewatering and tailings/water route; named reagent candidates only. Historic plant dimensions and national consumption totals are not site factors. |
| wco-hs26-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, original PDF pp.1–2, Note2 and heading2603. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | Ore/concentrate mineral identity and separation from smelting matte and industrial slag/residue; no new HS mapping or process quantity. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
