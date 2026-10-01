---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.unroasted-iron-pyrites
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unroasted iron pyrites

## 1. Scope and Applicability

Supply of natural unroasted iron-pyrites mineral ore, mineral concentrate or powder at one declared mine, preparation/loading or expressly included delivery gate. Include actual surface/underground extraction and ore-only loading, or actual physical recovery from jointly mined mineral feed, freshly generated mineral-beneficiation tailings or independently identified old mineral-tailings stocks. Purchased ore/concentrate and waste-classified old tailings have separate provider/fate and upstream allocation or justified cut-off; they are not interchangeable zero-burden feeds. Actual crushing/screening/sorting, gravity/magnetic separation, grinding/flotation, thickening/filtering, free-water drying, pulverization/sizing and packaging are conditional on product and mineralogy, not mandatory flotation or a recipe copied from a copper-mine case. Retain unroasted iron-disulfide mineral identity with measured Fe/S, pyrite phase, impurity and moisture evidence. Other iron-disulfide mineral variants require independent category/phase confirmation; pyrrhotite, chalcopyrite and arsenopyrite are not automatically this product because they contain iron and sulfur. Natural pyrite recovered from geological mineral tailings may qualify with actual state/grade proof; synthetic iron disulfide, smelter slags, chemically precipitated sulfides, roasted pyrite/cinder, iron oxide concentrates, elemental sulfur, sulfur dioxide and sulfuric acid are different products. Roasting, chemical sulfur extraction, smelting and downstream steel/glass/abrasive-wheel manufacture lie outside the unroasted mineral gate. Include attributable mine development/rehabilitation, tailings, acid-drainage/water and dust controls, actual storage losses and explicitly agreed delivery through the selected gate. `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.unroasted-iron-pyrites |
| classification_refs | CPC 3.0:16120 |
| covered_products | Natural unroasted iron-pyrites mineral ore, physically recovered mineral concentrate and coarse/fine/micronized grades retaining confirmed mineral identity, including qualified geological mineral-tailings recovery |
| excluded_products | Roasted pyrite/cinder, chemically transformed or synthetic sulfides, smelter slags, iron oxides/metal, elemental sulfur, SO2/sulfuric acid; other metal-ore references, pyrrhotite/chalcopyrite/arsenopyrite without pyrite-category confirmation; downstream chemical/steel/glass/abrasive articles and transport-only services |
| representative_product | Unroasted iron pyrites at declared plant gate |
| production_route | Mine development and rehabilitation; Pyrite-bearing mineral extraction; Unroasted pyrite physical preparation and recovery; Unroasted mineral drying and sizing; Pyrite tailings water and air control; Accepted pyrite handling packaging and delivery |
| market_state | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg accepted net as-received unroasted iron-pyrites mineral at one declared grade/gate; contained sulfur and FeS2 phase are qualifiers, not1 kg pure sulfur or synthetic FeS2 |
| How much | 1 kg |
| How well | site/year; natural geological/phase identity and unroasted state; integrated mining/joint recovery/supplied-product/old-tailings route; actual mineral preparation/drying and size; dry-basis total versus sulfide sulfur, iron, pyrite-phase and relevant As/Cu/Pb/other impurity assays; free water; grade/acceptance and stocks; source/provider and tailings burden status; separate joint outputs/allocation; water basin, acidity, discharge/waste fate and storage loss; packaging and gate/transport; lifetime development/closure; representative generic unroasted pyrites Product/Mass at a compatible plant gate does not establish purity or a flotation recipe |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unroasted iron pyrites `d39ec36e-8318-4a73-a652-a988fe60a58d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; natural geological/phase identity and unroasted state; integrated mining/joint recovery/supplied-product/old-tailings route; actual mineral preparation/drying and size; dry-basis total versus sulfide sulfur, iron, pyrite-phase and relevant As/Cu/Pb/other impurity assays; free water; grade/acceptance and stocks; source/provider and tailings burden status; separate joint outputs/allocation; water basin, acidity, discharge/waste fate and storage loss; packaging and gate/transport; lifetime development/closure; representative generic unroasted pyrites Product/Mass at a compatible plant gate does not establish purity or a flotation recipe |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received unroasted mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measured dry-basis sulfur fraction gS with0 <= gS <=1 gives contained S kg = D*(1-w)*gS; keep D denominator. Distinguish total S, sulfide S, sulfate S and measured mineral phases; do not infer pure FeS2 content or recovery from theoretical sulfur/iron stoichiometry. Reconcile dry solids and Fe/S plus relevant impurities across feed, accepted grades, separate copper/other co-products, tails/rejects, dust, stock and actual oxidation/dissolution losses. Recovery uses matched dry feed/output masses and assays with stock corrections, never concentrate grade alone. Purchased sulfuric acid adds sulfur separately from geological sulfide; neutralization residues and measured sulfate transfers/releases retain species versus elemental-S basis. Reconcile new/recycled/evaporated/discharged water separately. Drying/handling must retain declared unroasted phase; oxidized/roasted output requires classification review. Stored stock, heat/moisture and actual sulfide loss are measured, not assumed zero or automatic SO2; downstream roasting/acid yield is outside. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified geological pyrite-bearing deposit for integrated extraction; independently identified supplied ore/concentrate or old mineral-tailings stock for standalone preparation/recovery; reconcile joint inputs and cancel internal transfers |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural unroasted iron-pyrites mineral ore, physically recovered mineral concentrate and coarse/fine/micronized grades retaining confirmed mineral identity, including qualified geological mineral-tailings recovery |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; natural geological/phase identity and unroasted state; integrated mining/joint recovery/supplied-product/old-tailings route; actual mineral preparation/drying and size; dry-basis total versus sulfide sulfur, iron, pyrite-phase and relevant As/Cu/Pb/other impurity assays; free water; grade/acceptance and stocks; source/provider and tailings burden status; separate joint outputs/allocation; water basin, acidity, discharge/waste fate and storage loss; packaging and gate/transport; lifetime development/closure; representative generic unroasted pyrites Product/Mass at a compatible plant gate does not establish purity or a flotation recipe |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of natural unroasted iron-pyrites mineral ore, mineral concentrate or powder at one declared mine, preparation/loading or expressly included delivery gate. Include actual surface/underground extraction and ore-only loading, or actual physical recovery from jointly mined mineral feed, freshly generated mineral-beneficiation tailings or independently identified old mineral-tailings stocks. Purchased ore/concentrate and waste-classified old tailings have separate provider/fate and upstream allocation or justified cut-off; they are not interchangeable zero-burden feeds. Actual crushing/screening/sorting, gravity/magnetic separation, grinding/flotation, thickening/filtering, free-water drying, pulverization/sizing and packaging are conditional on product and mineralogy, not mandatory flotation or a recipe copied from a copper-mine case. Retain unroasted iron-disulfide mineral identity with measured Fe/S, pyrite phase, impurity and moisture evidence. Other iron-disulfide mineral variants require independent category/phase confirmation; pyrrhotite, chalcopyrite and arsenopyrite are not automatically this product because they contain iron and sulfur. Natural pyrite recovered from geological mineral tailings may qualify with actual state/grade proof; synthetic iron disulfide, smelter slags, chemically precipitated sulfides, roasted pyrite/cinder, iron oxide concentrates, elemental sulfur, sulfur dioxide and sulfuric acid are different products. Roasting, chemical sulfur extraction, smelting and downstream steel/glass/abrasive-wheel manufacture lie outside the unroasted mineral gate. Include attributable mine development/rehabilitation, tailings, acid-drainage/water and dust controls, actual storage losses and explicitly agreed delivery through the selected gate. | `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and rehabilitation | conditional | Actual attributable development/closure | Foreground production | per 1 kg reference flow |
| extraction | Pyrite-bearing mineral extraction | conditional | Actual surface/underground mining; standalone tailings recovery excludes new extraction | Foreground production | per 1 kg reference flow |
| recovery | Unroasted pyrite physical preparation and recovery | conditional | Actual ore preparation/joint recovery/old-tailings reprocessing through unroasted mineral output | Foreground production | per 1 kg reference flow |
| conditioning | Unroasted mineral drying and sizing | conditional | Only actual free-water drying or pulverization preserving phase | Foreground production | per 1 kg reference flow |
| controls | Pyrite tailings water and air control | conditional | Actual tailings drainage neutralization and release control | Foreground production | per 1 kg reference flow |
| dispatch | Accepted pyrite handling packaging and delivery | required | Every output gate with actual conditional packaging/delivery | Foreground production | per 1 kg reference flow |

### Process: Mine development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Pyrite-mine development diesel (`development_diesel`)

Actual development/closure equipment once over lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Pyrite-bearing mineral extraction (`extraction`)

#### Inputs

##### Product flows

###### Pyrite-mine extraction and onsite-haul diesel (`mining_diesel`)

Actual extraction/loading/haul distinct from later receipt delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Pyrite-bearing mineral extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling/pumping/conveying and underground ventilation where used.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; other explosives and detonators each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Pyrite-bearing natural mineral ore in geological deposit (`pyrite_resource`)

Actual geological feed with measured Fe/S and mineral phases; a product mineral UUID is not elementary resource.

- Selected flow: Pyrite-bearing natural mineral ore in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pyrite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pyrite_resource`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Pyrite-mine rejected waste rock (`waste_rock`)

Actual rejected rock with sulfide/acid-generation assays and final management.

- Selected flow: Pyrite-mine rejected waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Unroasted pyrite physical preparation and recovery (`recovery`)

#### Inputs

##### Product flows

###### Supplied unroasted iron pyrites (`supplied_pyrite`)

Actual independently supplied unroasted mineral product with provider/grade and upstream; internal transfer cancels.

- Selected flow: Unroasted iron pyrites `d39ec36e-8318-4a73-a652-a988fe60a58d`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_pyrite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_pyrite`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Pyrite mineral-recovery electricity (`recovery_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crushing/grinding/sorting/gravity/magnetic/flotation/thickening/filtering, assign meters once; no mandatory circuit.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_recovery_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery_power`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Steel grinding balls (`steel_media`)

Only actual consumed grinding balls; other media and liners separate.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_media`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Purchased pyrite-recovery make-up water (`process_water`)

Actual new purchased circuit water; internal reclaim not external supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_process_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sulfuric acid flotation-conditioning reagent (`sulfuric_acid`)

Only actual measured sulfuric-acid conditioning, not mandatory case pH or upstream/downstream acid manufacture; acid sulfur separately balanced.

- Selected flow: Sulfuric acid flotation-conditioning reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfuric_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfuric_acid`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sodium ethyl xanthate collector (`xanthate`)

Only actual confirmed formulation; case commercial M200 does not prove this identity; other actual collectors each separate.

- Selected flow: Sodium ethyl xanthate collector
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_xanthate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_xanthate`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Methyl isobutyl carbinol frother (`mibc`)

Only actual confirmed MIBC; other actual frothers separately specified.

- Selected flow: Methyl isobutyl carbinol frother
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mibc; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mibc`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`flocculant`)

Only actual specified thickening/tailings polymer with active fraction.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_flocculant; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flocculant`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

##### Waste flows

###### Old pyrite-bearing mineral-beneficiation tailings (`old_tails`)

Only actually waste-classified geological tailings transferred/recovered; not smelter slag or new joint internal tails; declare cut-off/upstream/rehabilitation.

- Selected flow: Old pyrite-bearing mineral-beneficiation tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_old_tails; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_old_tails`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Saleable copper mineral concentrate (`copper_cooutput`)

Only actually separated and weighed joint copper concentrate; copper within pyrite is not separate physical output.

- Selected flow: Saleable copper mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_copper_cooutput; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_cooutput`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

##### Waste flows

###### Pyrite-recovery residual mineral tailings slurry (`tailings`)

Actual final unrecovered tailings with solids/Fe/S/metals and fate; internal middlings cancel.

- Selected flow: Pyrite-recovery residual mineral tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Unroasted mineral drying and sizing (`conditioning`)

#### Inputs

##### Product flows

###### Unroasted-pyrite dryer natural gas (`dryer_gas`)

Only actual gas-fired free-water drying retaining unroasted phase; other fuels/heat sources separate.

- Selected flow: Unroasted-pyrite dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_gas`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Unroasted-pyrite drying and sizing electricity (`conditioning_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual dryer/fans/pulverizer/classifier, with phase and moisture-loss check; not roaster power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_conditioning_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_power`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Pyrite tailings water and air control (`controls`)

#### Inputs

##### Product flows

###### Pyrite drainage and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual tailings drainage/reclaim/neutralization and dust control; avoid double processing meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Quicklime for acidic-water neutralization (`neutralization_lime`)

Only actual CaO reagent with active content; other neutralizers each separate.

- Selected flow: Quicklime for acidic-water neutralization
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_neutralization_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_neutralization_lime`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`river_water`)

Actual basin/season river intake; groundwater source each separate if used.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Pyrite-water neutralization sludge (`neutralization_sludge`)

Actual transferred sludge with dry solids, sulfate/metal and final fate.

- Selected flow: Pyrite-water neutralization sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_neutralization_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_neutralization_sludge`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Pyrite-process wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer distinct from direct receiving-water release.

- Selected flow: Pyrite-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Disposed unroasted-pyrite collector dust (`collector_dust`)

Actual captured dust disposal, distinguish internal recovered mineral.

- Selected flow: Disposed unroasted-pyrite collector dust
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Pyrite-mineral PM10 released to outdoor air (`pm10_air`)

Actual after-control dust with size/mineral/metal composition and compartment.

- Selected flow: Pyrite-mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground combustion evidence; upstream fuel supply and burning not duplicated.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Dissolved sulfate released to receiving water (`sulfate_water`)

Actual measured sulfate species/net discharge/background; distinguish sulfur-equivalent from sulfate mass and managed tailings S.

- Selected flow: Dissolved sulfate released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfate_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfate_water`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Dissolved iron released to receiving water (`iron_water`)

Actual dissolved Fe/net receiving discharge with compartment/background; solid Fe in tailings is not dissolved release.

- Selected flow: Dissolved iron released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_iron_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_iron_water`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Accepted pyrite handling packaging and delivery (`dispatch`)

#### Inputs

##### Product flows

###### Pyrite gate-handling diesel (`handling_diesel`)

Actual loading/handling distinct from extraction and delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_handling_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handling_diesel`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Included unroasted-pyrite delivery diesel (`delivery_diesel`)

Only actual foreground receipt-gate delivery expressly included; provider transport separate with no duplicate fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

###### Woven polypropylene pyrite bag (`polypropylene_bag`)

Only actual consumed PP packaging excludes product net mass; liners/drums/pallets each separate if used.

- Selected flow: Woven polypropylene pyrite bag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polypropylene_bag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polypropylene_bag`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Unroasted iron pyrites at declared plant gate (`final_product`)

Representative verified Unroasted iron pyrites / 未焙烧的黄铁矿 Product/Mass, production mix at plant, unspecified treatment. Actual ore/concentrate/powder grade, mineralogy, state and loading/receipt gate must be confirmed; identity proves no assay, purity, recovery or flotation recipe. Incompatible phase/route/gate needs own identity.

- Selected flow: Unroasted iron pyrites `d39ec36e-8318-4a73-a652-a988fe60a58d`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-pyrite-recovery-1994`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide extraction and distinct pyrite-recovery/drying/micronizing circuits where possible. Retain unallocated jointly mined copper/pyrite/other mineral inventory; use demonstrated physical causality or matched payable-grade/price economic allocation and sensitivity. One mixed pyrite concentrate with trace metals is one physical output, not simultaneous contained-metal output masses. Separate current joint tails, purchased mineral product and genuinely waste-classified old tails with documented upstream allocation/cut-off and actual recovery/rehabilitation burdens; neither historical tails nor idle equipment is automatically burden-free. Development/closure attributed once over measured lifetime output. No automatic credit for avoided acid drainage, tailings disposal, elemental sulfur, virgin pyrite or recycled water. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pyrite_resource | extraction | `pyrite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_pyrite | recovery | `supplied_pyrite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_old_tails | recovery | `old_tails` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovery_power | recovery | `recovery_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | recovery | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_process_water | recovery | `process_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfuric_acid | recovery | `sulfuric_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, active fraction, consumed mass and dilution water, stocks/circuit/period; distinguish product/active mass with measured conversion. Record acid sulfur/neutralization reactions separately from ore sulfide; no assumed collector identity or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_xanthate | recovery | `xanthate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, active fraction, consumed mass and dilution water, stocks/circuit/period; distinguish product/active mass with measured conversion. Record acid sulfur/neutralization reactions separately from ore sulfide; no assumed collector identity or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mibc | recovery | `mibc` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, active fraction, consumed mass and dilution water, stocks/circuit/period; distinguish product/active mass with measured conversion. Record acid sulfur/neutralization reactions separately from ore sulfide; no assumed collector identity or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_flocculant | recovery | `flocculant` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, active fraction, consumed mass and dilution water, stocks/circuit/period; distinguish product/active mass with measured conversion. Record acid sulfur/neutralization reactions separately from ore sulfide; no assumed collector identity or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_copper_cooutput | recovery | `copper_cooutput` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings | recovery | `tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_gas | conditioning | `dryer_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_conditioning_power | conditioning | `conditioning_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | controls | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_neutralization_lime | controls | `neutralization_lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, active fraction, consumed mass and dilution water, stocks/circuit/period; distinguish product/active mass with measured conversion. Record acid sulfur/neutralization reactions separately from ore sulfide; no assumed collector identity or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_neutralization_sludge | controls | `neutralization_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated wet mass, free water/solids and dry-basis Fe, total/sulfide/sulfate S, mineral phase and relevant impurity assays for same batches/period; reconcile stocks and individual provider/fate. Distinguish mineral feed, current joint tails and waste-classified old tailings; record actual oxidation/dissolution losses, not theoretical pure FeS2, recovery or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfate_water | controls | `sulfate_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair measured named dissolved-species concentration mg/L and calibrated net receiving-water discharge m3 for same period: species kg = concentration mg/L * volume m3 /1000. Retain sulfate versus S-equivalent or dissolved versus total Fe, background/reference water, receiving compartment and uncertainty; each actual additional pollutant needs its own row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_iron_water | controls | `iron_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair measured named dissolved-species concentration mg/L and calibrated net receiving-water discharge m3 for same period: species kg = concentration mg/L * volume m3 /1000. Retain sulfate versus S-equivalent or dissolved versus total Fe, background/reference water, receiving compartment and uncertainty; each actual additional pollutant needs its own row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_handling_diesel | dispatch | `handling_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polypropylene_bag | dispatch | `polypropylene_bag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated weighing of positive accepted net as-received mineral D kg; adjust packaging/rejects/returns and stocks. Match batch free water w, dry-basis total/sulfide S, Fe, mineral phase and impurity assays. Dry mass D*(1-w), contained S D*(1-w)*gS; keep D denominator, unroasted state and actual grade. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted unroasted natural iron-pyrites ore/concentrate/powder grade with declared mineral phase, free moisture, dry-basis Fe/S and impurity assays, size and loading/receipt gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received unroasted mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measured dry-basis sulfur fraction gS with0 <= gS <=1 gives contained S kg = D*(1-w)*gS; keep D denominator. Distinguish total S, sulfide S, sulfate S and measured mineral phases; do not infer pure FeS2 content or recovery from theoretical sulfur/iron stoichiometry. Reconcile dry solids and Fe/S plus relevant impurities across feed, accepted grades, separate copper/other co-products, tails/rejects, dust, stock and actual oxidation/dissolution losses. Recovery uses matched dry feed/output masses and assays with stock corrections, never concentrate grade alone. Purchased sulfuric acid adds sulfur separately from geological sulfide; neutralization residues and measured sulfate transfers/releases retain species versus elemental-S basis. Reconcile new/recycled/evaporated/discharged water separately. Drying/handling must retain declared unroasted phase; oxidized/roasted output requires classification review. Stored stock, heat/moisture and actual sulfide loss are measured, not assumed zero or automatic SO2; downstream roasting/acid yield is outside. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received unroasted mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measured dry-basis sulfur fraction gS with0 <= gS <=1 gives contained S kg = D*(1-w)*gS; keep D denominator. Distinguish total S, sulfide S, sulfate S and measured mineral phases; do not infer pure FeS2 content or recovery from theoretical sulfur/iron stoichiometry. Reconcile dry solids and Fe/S plus relevant impurities across feed, accepted grades, separate copper/other co-products, tails/rejects, dust, stock and actual oxidation/dissolution losses. Recovery uses matched dry feed/output masses and assays with stock corrections, never concentrate grade alone. Purchased sulfuric acid adds sulfur separately from geological sulfide; neutralization residues and measured sulfate transfers/releases retain species versus elemental-S basis. Reconcile new/recycled/evaporated/discharged water separately. Drying/handling must retain declared unroasted phase; oxidized/roasted output requires classification review. Stored stock, heat/moisture and actual sulfide loss are measured, not assumed zero or automatic SO2; downstream roasting/acid yield is outside. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg accepted net as-received unroasted iron-pyrites mineral at one declared grade/gate; contained sulfur and FeS2 phase are qualifiers, not1 kg pure sulfur or synthetic FeS2 |
| excluded_use | Roasted pyrite/cinder, chemically transformed or synthetic sulfides, smelter slags, iron oxides/metal, elemental sulfur, SO2/sulfuric acid; other metal-ore references, pyrrhotite/chalcopyrite/arsenopyrite without pyrite-category confirmation; downstream chemical/steel/glass/abrasive articles and transport-only services |
| required_metadata | site/year; natural geological/phase identity and unroasted state; integrated mining/joint recovery/supplied-product/old-tailings route; actual mineral preparation/drying and size; dry-basis total versus sulfide sulfur, iron, pyrite-phase and relevant As/Cu/Pb/other impurity assays; free water; grade/acceptance and stocks; source/provider and tailings burden status; separate joint outputs/allocation; water basin, acidity, discharge/waste fate and storage loss; packaging and gate/transport; lifetime development/closure; representative generic unroasted pyrites Product/Mass at a compatible plant gate does not establish purity or a flotation recipe |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-pyrite-recovery-1994 | official_guidance | US EPA, Innovative Methods of Managing Environmental Releases at Mine Sites, EPA530-R-94-012, April1994, section2.2 original PDF pp.18–22 (printed13–17), operating description and limitations. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/innovate.pdf | Qualitative geological-tailings pyrite recovery, actual flotation/dewatering/drying/sizing/micronizing/packaging and case-transfer limits; no default pH, grade, moisture, recovery, recipe or environmental credit. |
| wco-hs25-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF p.1, Note1 and heading2502. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Unroasted iron-pyrites mineral identity and physical-preparation boundary, distinct from roasted mineral or chemically transformed products; no new HS mapping or quantity. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
