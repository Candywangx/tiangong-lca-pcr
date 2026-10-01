---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.precious-stones-including-diamonds-but-not-industrial-diamonds-and-semi-precious-stones-71bf0d87
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Precious and semi-precious stones, including nonindustrial diamonds, unworked or simply sawn or roughly shaped

## 1. Scope and Applicability

Supply of natural precious and semi-precious stones, including nonindustrial diamonds, in an unworked, simply sawn/cleaved/bruted or roughly shaped state at one declared recovery, rough-preparation/loading or expressly included plant-receipt gate. Cover nonindustrial diamond and actual natural coloured-stone grades such as ruby/sapphire, emerald/aquamarine, quartz varieties, garnet, tourmaline, peridot, feldspar and opal; each dataset fixes an identified mineral/variety and accepted rough grade rather than averaging every stone. Actual routes include primary rock or pegmatite extraction, eluvial/residual/placer recovery, manual or mechanized washing/screening/sorting, conditionally appropriate host-rock liberation and concentration, and standalone preparation of supplied qualified natural stones. Primary-diamond dense-medium/Xray/grease recovery is one conditional route, not a recipe for fragile coloured crystals or every placer. Record actual deposit, grade-preserving recovery, supplies, water controls and attributable development/rehabilitation. Rough gate includes only actually performed simple sawing/cleaving/rough shaping; unworked product excludes absent operations. Faceting, polishing, drilling bead holes, final cabochon manufacture, mounting/stringing and finished jewellery are outside. Synthetic or reconstructed unworked gems are separately named CPC34560 and HS7104, not assumed natural because their chemistry resembles a stone; cultivated pearls and natural pearls have separate identities. Heat/dye/impregnation or other treatment exceeding the declared unworked/simple rough state requires a separate boundary/category review, not forced gemstone recovery. Industrial-diamond or abrasive grades are separately classified and may be joint outputs, not this reference product. Unsorted mixed diamond recovery must be graded and partitioned before claiming one accepted nonindustrial output. `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.precious-stones-including-diamonds-but-not-industrial-diamonds-and-semi-precious-stones-71bf0d87 |
| classification_refs | CPC 3.0:16310 |
| covered_products | Natural precious and semi-precious stones including nonindustrial diamonds, unworked or only simply sawn/cleaved/bruted/roughly shaped; individually specified mineral varieties and rough grades |
| excluded_products | Industrial diamonds as reference output; synthetic or reconstructed unworked stones; natural/cultured pearls; otherwise worked polished/faceted gems, beads, jewellery or mounted/strung articles; gem dust/powder as reference product; treated/formulated composite stones outside confirmed rough category; downstream use and transport-only services |
| representative_product | Natural rough precious or semi-precious stone at compatible plant gate |
| production_route | Gem-deposit development and rehabilitation; Natural gemstone extraction; Gemstone washing and recovery; Simple gemstone sawing and rough shaping; Mine water dust and residue controls; Rough-stone grading and dispatch |
| market_state | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg accepted net rough natural gemstone in one identified variety and grade at selected gate; retain measured metric carats and piece counts as supplementary characteristics, not interchangeable product quality |
| How much | 1 kg |
| How well | site/year and origin/custody; natural mineral/variety and nonindustrial status; actual primary/placer/supplied-stone route; grade, size distribution, piece count and net mass; unworked or actual simple saw/cleave/rough state; actual enhancement declaration and category check; product gate/transport included; measured gangue/water/grease exclusion; reject/breakage and stocks; supplier burden and economic/physical allocation; each consumable formulation; basin/discharge/waste fate; lifetime development/closure. Category Product/Mass UUID is only compatible natural rough plant state, not geology, pearls, synthetic or finished stones. Electricity identity is only CN1–35kV grid-average consumer supply when matched; other geographies/voltages/providers require distinct identities |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Precious stones (including diamonds, but not industrial diamonds) and semi-precious stones, unworked or simply sawn or roughly shaped `33921725-a196-40db-9ddf-a6d3a2b9e3bc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year and origin/custody; natural mineral/variety and nonindustrial status; actual primary/placer/supplied-stone route; grade, size distribution, piece count and net mass; unworked or actual simple saw/cleave/rough state; actual enhancement declaration and category check; product gate/transport included; measured gangue/water/grease exclusion; reject/breakage and stocks; supplier burden and economic/physical allocation; each consumable formulation; basin/discharge/waste fate; lifetime development/closure. Category Product/Mass UUID is only compatible natural rough plant state, not geology, pearls, synthetic or finished stones. Electricity identity is only CN1–35kV grid-average consumer supply when matched; other geographies/voltages/providers require distinct identities |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is positive independently calibrated accepted net gemstone mass kg for exactly the selected mineral/variety and grade at gate, excluding gangue, free water, adhering grease, packaging, rejects and returns. Do not infer D from ore grade, ore input or theoretical recovery. Sum independently weighed accepted parcels with stock reconciliation. Metric1 ct=0.2g=0.0002kg,1g=0.001kg: D=sum accepted carats*0.0002 when the same parcels are weighed in metric carats; verify balance resolution/calibration and round only after aggregation. Count cannot convert to kg without measured parcel weights or actual grade/size-specific mean mass and its uncertainty; no generic gem size/weight. Reconcile feed, retained rough stones, co-grades, industrial stones, fragments/dust, host-rock rejects/tailings, internal rescreening and stocks, without equating host-rock dry mass to pure gems. Keep ore/water mass balances separate from the sparse gemstone mass balance and reconcile uncertainty/detection limits. Record actual sawing loss/breakage per variety and shape; no universal recovery or finished-gem yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified gemstone-bearing primary/eluvial/placer geological deposit for integrated recovery, or externally supplied identified natural rough stones with supplier upstream burdens for standalone simple preparation; cancel internal recovery transfers |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural precious and semi-precious stones including nonindustrial diamonds, unworked or only simply sawn/cleaved/bruted/roughly shaped; individually specified mineral varieties and rough grades |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year and origin/custody; natural mineral/variety and nonindustrial status; actual primary/placer/supplied-stone route; grade, size distribution, piece count and net mass; unworked or actual simple saw/cleave/rough state; actual enhancement declaration and category check; product gate/transport included; measured gangue/water/grease exclusion; reject/breakage and stocks; supplier burden and economic/physical allocation; each consumable formulation; basin/discharge/waste fate; lifetime development/closure. Category Product/Mass UUID is only compatible natural rough plant state, not geology, pearls, synthetic or finished stones. Electricity identity is only CN1–35kV grid-average consumer supply when matched; other geographies/voltages/providers require distinct identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of natural precious and semi-precious stones, including nonindustrial diamonds, in an unworked, simply sawn/cleaved/bruted or roughly shaped state at one declared recovery, rough-preparation/loading or expressly included plant-receipt gate. Cover nonindustrial diamond and actual natural coloured-stone grades such as ruby/sapphire, emerald/aquamarine, quartz varieties, garnet, tourmaline, peridot, feldspar and opal; each dataset fixes an identified mineral/variety and accepted rough grade rather than averaging every stone. Actual routes include primary rock or pegmatite extraction, eluvial/residual/placer recovery, manual or mechanized washing/screening/sorting, conditionally appropriate host-rock liberation and concentration, and standalone preparation of supplied qualified natural stones. Primary-diamond dense-medium/Xray/grease recovery is one conditional route, not a recipe for fragile coloured crystals or every placer. Record actual deposit, grade-preserving recovery, supplies, water controls and attributable development/rehabilitation. Rough gate includes only actually performed simple sawing/cleaving/rough shaping; unworked product excludes absent operations. Faceting, polishing, drilling bead holes, final cabochon manufacture, mounting/stringing and finished jewellery are outside. Synthetic or reconstructed unworked gems are separately named CPC34560 and HS7104, not assumed natural because their chemistry resembles a stone; cultivated pearls and natural pearls have separate identities. Heat/dye/impregnation or other treatment exceeding the declared unworked/simple rough state requires a separate boundary/category review, not forced gemstone recovery. Industrial-diamond or abrasive grades are separately classified and may be joint outputs, not this reference product. Unsorted mixed diamond recovery must be graded and partitioned before claiming one accepted nonindustrial output. | `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Gem-deposit development and rehabilitation | conditional | Actual attributable mine/pit/dredge works and closure | Foreground production | per 1 kg reference flow |
| extraction | Natural gemstone extraction | conditional | Actual primary/eluvial/placer extraction; select only relevant deposit | Foreground production | per 1 kg reference flow |
| recovery | Gemstone washing and recovery | conditional | Actual grade-preserving recovery; DMS/Xray/grease only appropriate diamond circuit | Foreground production | per 1 kg reference flow |
| rough | Simple gemstone sawing and rough shaping | conditional | Only actual simple rough preparation before worked/polished gate | Foreground production | per 1 kg reference flow |
| controls | Mine water dust and residue controls | conditional | Actual treatment transfers and environmental releases | Foreground production | per 1 kg reference flow |
| dispatch | Rough-stone grading and dispatch | required | Every selected product gate with weighed accepted parcel | Foreground production | per 1 kg reference flow |

### Process: Gem-deposit development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Gem-mine development diesel (`development_diesel`)

Actual earthworks/rehabilitation, lifetime allocation once; supplier/grade of diesel disclosed.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

### Process: Natural gemstone extraction (`extraction`)

#### Inputs

##### Product flows

###### Gemstone extraction diesel (`mining_diesel`)

Actual excavating/loading/onsite hauling/dredge fuel; manual extraction does not assume mechanized use.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Gemstone mining electricity (`mining_power`)

Actual mining pumping/ventilation, with supplier geography/voltage declared; no universal power demand. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; resolve another flow for any other supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Ammonium-nitrate fuel-oil explosive (`anfo`)

Only actual appropriate blasted host-rock route; fragile crystal/manual/placer routes do not force explosive; other explosives separate.

- Selected flow: Ammonium-nitrate fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Natural diamond in geological deposit (`diamond_resource`)

Actual primary or placer diamond resource; grade sorting separates nonindustrial product.

- Selected flow: Natural diamond in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural corundum in geological deposit (`corundum_resource`)

Only actual ruby/sapphire corundum resource; no industrial corundum automatically accepted as gem.

- Selected flow: Natural corundum in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_corundum_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_corundum_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural beryl in geological deposit (`beryl_resource`)

Only actual emerald/aquamarine beryl resource and identified variety.

- Selected flow: Natural beryl in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_beryl_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_beryl_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural quartz in geological deposit (`quartz_resource`)

Only actual gem quartz resource with selected variety, not all silica feed.

- Selected flow: Natural quartz in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_quartz_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quartz_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural almandine in geological deposit (`almandine_resource`)

Only actual almandine gem recovery; every other garnet species separate.

- Selected flow: Natural almandine in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_almandine_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_almandine_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural elbaite in geological deposit (`elbaite_resource`)

Only actual elbaite tourmaline gemstone; other tourmalines separate actual identities.

- Selected flow: Natural elbaite in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_elbaite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_elbaite_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural opal in geological deposit (`opal_resource`)

Only actual natural opal source retaining hydrated silica gem identity.

- Selected flow: Natural opal in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_opal_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_opal_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural gem olivine in geological deposit (`olivine_resource`)

Only actual peridot olivine resource and measured variety/composition.

- Selected flow: Natural gem olivine in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_olivine_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_olivine_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural labradorite in geological deposit (`labradorite_resource`)

Only actual labradorite gem extraction; other feldspar species separately.

- Selected flow: Natural labradorite in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_labradorite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_labradorite_resource`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Gem-mine waste rock (`waste_rock`)

Actual nonproduct host-rock reject with tested composition and fate; overburden retained for closure separate.

- Selected flow: Gem-mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

### Process: Gemstone washing and recovery (`recovery`)

#### Inputs

##### Product flows

###### Supplied natural rough nonindustrial diamond (`supplied_diamond`)

Only standalone supplied diamond lot with measured grade/mass and upstream provider; internal recovery cancels.

- Selected flow: Supplied natural rough nonindustrial diamond
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_diamond; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_diamond`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Supplied natural rough sapphire (`supplied_sapphire`)

Only actual supplied sapphire lot; other supplied coloured stones each own atomic row and confirmed origin.

- Selected flow: Supplied natural rough sapphire
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_sapphire; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_sapphire`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Purchased gemstone wash water (`wash_water`)

Only new externally supplied compatible process water; internal settled/reused water cancels, direct river intake separate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Gemstone recovery electricity (`recovery_power`)

Actual wash/screen/sort and conditional host-rock liberation/meters; no forced crushing of every intact gem. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; resolve another flow for any other supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_recovery_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery_power`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Ferrosilicon dense-medium powder (`ferrosilicon`)

Only actual diamond DMS make-up powder; measured grade and loss, internal medium recycling not repeated purchased input.

- Selected flow: Ferrosilicon dense-medium powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ferrosilicon; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ferrosilicon`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Petroleum-jelly diamond-recovery grease (`recovery_grease`)

Only actual confirmed petroleum-jelly formulation in grease-table circuit; other formulation distinct row; not forced for Xray-only or coloured gems.

- Selected flow: Petroleum-jelly diamond-recovery grease
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_recovery_grease; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery_grease`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Freshwater abstracted from river (`river_water`)

Actual river intake with basin/season; other sources each specific resource, not purchased water counted twice.

- Selected flow: Freshwater abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Gem-recovery mineral tailings (`tailings`)

Actual washed/processed host-rock residue after recovered gems with dry solids/water and fate; do not infer zero gems in residue.

- Selected flow: Gem-recovery mineral tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

### Process: Simple gemstone sawing and rough shaping (`rough`)

#### Inputs

##### Product flows

###### Simple rough-stone preparation electricity (`saw_power`)

Only actual simple saw/cleave/brute/rough shaping, not faceting/polishing; unworked gate excludes absent operation. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; resolve another flow for any other supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_power`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Diamond-segment gemstone saw blade (`diamond_saw`)

Actual consumed/worn saw assembly for simple cut; replacement mass/lifetime attributed once.

- Selected flow: Diamond-segment gemstone saw blade
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_saw; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_saw`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Silicon carbide rough-shaping grit (`sic_grit`)

Only actual coarse rough-shaping grit within confirmed gate; final fine polishing excluded; other grit each separate.

- Selected flow: Silicon carbide rough-shaping grit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sic_grit; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sic_grit`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Industrial diamond sawing powder (`diamond_powder`)

Only actual individual saw abrasive consumable; industrial diamond is input rather than reference product, with provider burden; never natural gemstone resource.

- Selected flow: Industrial diamond sawing powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_powder; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_powder`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Purchased simple-saw cooling water (`cut_water`)

Only actual new compatible process water not duplicated wash meter; dry/manual operation excludes absent input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_cut_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_water`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Rough-gemstone sawing sludge (`saw_sludge`)

Actual waste transfer with gem/abrasive solids and water; recovered accepted fragment is product only with confirmed grade.

- Selected flow: Rough-gemstone sawing sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_sludge`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

### Process: Mine water dust and residue controls (`controls`)

#### Inputs

##### Product flows

###### Anionic polyacrylamide flocculant (`polyacrylamide`)

Only actual individual treatment polymer with active fraction; settling-only route does not assume chemical use.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Gem-mine water and dust-control electricity (`control_power`)

Actual treatment/drainage/reuse/dust controls, avoiding duplicated recovery meters. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; resolve another flow for any other supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Gem-mine water-treatment sludge (`treatment_sludge`)

Actual removed silt/sludge with solids/chemical content and final fate; internal return not waste transfer.

- Selected flow: Gem-mine water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Gem-mine wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer with volume/quality; not simultaneously own receiving-water release.

- Selected flow: Gem-mine wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Suspended mineral solids released to river water (`tss_water`)

Actual controlled receiving-compartment TSS with paired volume and concentration; managed sludge not emission.

- Selected flow: Suspended mineral solids released to river water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Mineral PM10 released to air (`pm10_air`)

Actual size-specific uncontrolled fraction after dust controls; coarse dust and captured material separate.

- Selected flow: Mineral PM10 released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Fossil carbon dioxide released to air (`co2_air`)

Actual foreground fossil fuel combustion, upstream counted once; no default chemical gemstone CO2.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

### Process: Rough-stone grading and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Polypropylene rough-stone container (`pp_container`)

Only actual consumed packaging allocated by reuse/lifetime, excluding net gemstone mass; other components each separate.

- Selected flow: Polypropylene rough-stone container
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pp_container; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp_container`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Included rough-stone delivery diesel (`delivery_diesel`)

Only expressly included actual foreground receipt delivery; provider road/air service separately without duplicated fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Product flows

###### Recovered natural industrial diamond (`industrial_diamond_coproduct`)

Only actual sorted accepted industrial co-output with independent specification/mass and allocation; excluded from nonindustrial reference D.

- Selected flow: Recovered natural industrial diamond
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_industrial_diamond_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_industrial_diamond_coproduct`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

###### Natural rough precious or semi-precious stone at compatible plant gate (`final_product`)

Confirmed category Product/Mass identity with unspecified treatment at plant is usable only with one declared natural mineral/variety, accepted rough state and compatible gate. It does not establish diamond-only route, purity, gem-quality recovery, mineral resource or supplier geography. Other delivery states need own confirmed identity.

- Selected flow: Precious stones (including diamonds, but not industrial diamonds) and semi-precious stones, unworked or simply sawn or roughly shaped `33921725-a196-40db-9ddf-a6d3a2b9e3bc`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `cpc-gems-2025`, `wco-gems-2022`, `ngja-gem-mining`, `gia-diavik-2016`, `nist-carat`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide actual benches/deposits, recovery lines and independently handled mineral/grade lots. Retain unallocated joint inventories for accepted gem varieties, grades and industrial-diamond co-output. Gem mass alone does not establish physical causality across radically different grades; use measured causal relationships where defensible, otherwise documented grade-specific gate prices, quantities, currency and period for economic allocation with price/quality sensitivity. Never invent gem prices or infer value from stone count. Recovered old-tailings or supplied stones carry actual supplier burdens or justified cut-off and collection/processing burdens, not automatic zero. Allocate attributable development, tailings rehabilitation and closure once over measured lifetime accepted outputs. Reject or unusable fragment is not a co-product merely because it may be sold; confirm spec/fate. No default avoided gemstone, aggregate, disposal or jewellery credits. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_resource | extraction | `diamond_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_corundum_resource | extraction | `corundum_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_beryl_resource | extraction | `beryl_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_quartz_resource | extraction | `quartz_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_almandine_resource | extraction | `almandine_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_elbaite_resource | extraction | `elbaite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_opal_resource | extraction | `opal_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_olivine_resource | extraction | `olivine_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_labradorite_resource | extraction | `labradorite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently weighed/estimated-with-uncertainty wet and dry residue mass, moisture, mineral phases, possible retained gems/abrasives and final management for same feed/output period. Gem recovery residual cannot be used to invent a product output or universal recovery rate. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_diamond | recovery | `supplied_diamond` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated clean net parcel mass at declared gate, excluding measured surface free water without altering structural water or damaging opal/other fragile stones; document variety, natural origin, rough processing, grade, size distribution, counted pieces, rejected/broken stones and opening/closing stocks. D is independently measured positive accepted selected-grade kg; metric-carats convert kg=ct*0.0002 and grams kg=g*0.001 for the exact same parcels. Count is supplementary, not a mass denominator; paired individual/parcel weights required for any count conversion. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_sapphire | recovery | `supplied_sapphire` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated clean net parcel mass at declared gate, excluding measured surface free water without altering structural water or damaging opal/other fragile stones; document variety, natural origin, rough processing, grade, size distribution, counted pieces, rejected/broken stones and opening/closing stocks. D is independently measured positive accepted selected-grade kg; metric-carats convert kg=ct*0.0002 and grams kg=g*0.001 for the exact same parcels. Count is supplementary, not a mass denominator; paired individual/parcel weights required for any count conversion. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | recovery | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | recovery | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovery_power | recovery | `recovery_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ferrosilicon | recovery | `ferrosilicon` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, composition and active/solid fraction, net consumed kg, stock changes, internally recovered fraction, water and fate for matched circuit/period. Material amount counts only new consumption; no fixed recipe or recycled medium counted again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovery_grease | recovery | `recovery_grease` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, composition and active/solid fraction, net consumed kg, stock changes, internally recovered fraction, water and fate for matched circuit/period. Material amount counts only new consumption; no fixed recipe or recycled medium counted again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings | recovery | `tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently weighed/estimated-with-uncertainty wet and dry residue mass, moisture, mineral phases, possible retained gems/abrasives and final management for same feed/output period. Gem recovery residual cannot be used to invent a product output or universal recovery rate. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_power | rough | `saw_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_saw | rough | `diamond_saw` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sic_grit | rough | `sic_grit` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, composition and active/solid fraction, net consumed kg, stock changes, internally recovered fraction, water and fate for matched circuit/period. Material amount counts only new consumption; no fixed recipe or recycled medium counted again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_powder | rough | `diamond_powder` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, composition and active/solid fraction, net consumed kg, stock changes, internally recovered fraction, water and fate for matched circuit/period. Material amount counts only new consumption; no fixed recipe or recycled medium counted again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_cut_water | rough | `cut_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_sludge | rough | `saw_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently weighed/estimated-with-uncertainty wet and dry residue mass, moisture, mineral phases, possible retained gems/abrasives and final management for same feed/output period. Gem recovery residual cannot be used to invent a product output or universal recovery rate. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | controls | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, composition and active/solid fraction, net consumed kg, stock changes, internally recovered fraction, water and fate for matched circuit/period. Material amount counts only new consumption; no fixed recipe or recycled medium counted again. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently weighed/estimated-with-uncertainty wet and dry residue mass, moisture, mineral phases, possible retained gems/abrasives and final management for same feed/output period. Gem recovery residual cannot be used to invent a product output or universal recovery rate. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched net discharge V m3 and TSS concentration C mg/L give kg=C*V/1000; preserve background, mineral composition, site/season, receiving compartment, sampler and uncertainty. Each additional dissolved pollutant is its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pp_container | dispatch | `pp_container` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_industrial_diamond_coproduct | dispatch | `industrial_diamond_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated clean net parcel mass at declared gate, excluding measured surface free water without altering structural water or damaging opal/other fragile stones; document variety, natural origin, rough processing, grade, size distribution, counted pieces, rejected/broken stones and opening/closing stocks. D is independently measured positive accepted selected-grade kg; metric-carats convert kg=ct*0.0002 and grams kg=g*0.001 for the exact same parcels. Count is supplementary, not a mass denominator; paired individual/parcel weights required for any count conversion. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated clean net parcel mass at declared gate, excluding measured surface free water without altering structural water or damaging opal/other fragile stones; document variety, natural origin, rough processing, grade, size distribution, counted pieces, rejected/broken stones and opening/closing stocks. D is independently measured positive accepted selected-grade kg; metric-carats convert kg=ct*0.0002 and grams kg=g*0.001 for the exact same parcels. Count is supplementary, not a mass denominator; paired individual/parcel weights required for any count conversion. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One identified natural mineral/variety and accepted nonindustrial rough grade, clean net stone mass excluding attached gangue, free water, grease, packaging and rejected pieces; declared mine/recovery or compatible plant gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is positive independently calibrated accepted net gemstone mass kg for exactly the selected mineral/variety and grade at gate, excluding gangue, free water, adhering grease, packaging, rejects and returns. Do not infer D from ore grade, ore input or theoretical recovery. Sum independently weighed accepted parcels with stock reconciliation. Metric1 ct=0.2g=0.0002kg,1g=0.001kg: D=sum accepted carats*0.0002 when the same parcels are weighed in metric carats; verify balance resolution/calibration and round only after aggregation. Count cannot convert to kg without measured parcel weights or actual grade/size-specific mean mass and its uncertainty; no generic gem size/weight. Reconcile feed, retained rough stones, co-grades, industrial stones, fragments/dust, host-rock rejects/tailings, internal rescreening and stocks, without equating host-rock dry mass to pure gems. Keep ore/water mass balances separate from the sparse gemstone mass balance and reconcile uncertainty/detection limits. Record actual sawing loss/breakage per variety and shape; no universal recovery or finished-gem yield. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is positive independently calibrated accepted net gemstone mass kg for exactly the selected mineral/variety and grade at gate, excluding gangue, free water, adhering grease, packaging, rejects and returns. Do not infer D from ore grade, ore input or theoretical recovery. Sum independently weighed accepted parcels with stock reconciliation. Metric1 ct=0.2g=0.0002kg,1g=0.001kg: D=sum accepted carats*0.0002 when the same parcels are weighed in metric carats; verify balance resolution/calibration and round only after aggregation. Count cannot convert to kg without measured parcel weights or actual grade/size-specific mean mass and its uncertainty; no generic gem size/weight. Reconcile feed, retained rough stones, co-grades, industrial stones, fragments/dust, host-rock rejects/tailings, internal rescreening and stocks, without equating host-rock dry mass to pure gems. Keep ore/water mass balances separate from the sparse gemstone mass balance and reconcile uncertainty/detection limits. Record actual sawing loss/breakage per variety and shape; no universal recovery or finished-gem yield. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg accepted net rough natural gemstone in one identified variety and grade at selected gate; retain measured metric carats and piece counts as supplementary characteristics, not interchangeable product quality |
| excluded_use | Industrial diamonds as reference output; synthetic or reconstructed unworked stones; natural/cultured pearls; otherwise worked polished/faceted gems, beads, jewellery or mounted/strung articles; gem dust/powder as reference product; treated/formulated composite stones outside confirmed rough category; downstream use and transport-only services |
| required_metadata | site/year and origin/custody; natural mineral/variety and nonindustrial status; actual primary/placer/supplied-stone route; grade, size distribution, piece count and net mass; unworked or actual simple saw/cleave/rough state; actual enhancement declaration and category check; product gate/transport included; measured gangue/water/grease exclusion; reject/breakage and stocks; supplier burden and economic/physical allocation; each consumable formulation; basin/discharge/waste fate; lifetime development/closure. Category Product/Mass UUID is only compatible natural rough plant state, not geology, pearls, synthetic or finished stones. Electricity identity is only CN1–35kV grid-average consumer supply when matched; other geographies/voltages/providers require distinct identities |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc-gems-2025 | official_guidance | UNSD CPC Version3.0 Explanatory Notes,30June2025, original PDFpp.61,164,189, subclasses16310/16320/34560/38210/38220. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full rough natural precious/semiprecious category; synthetic/reconstructed unworked stones, pearls and further worked gems are separately named categories. No universal process route. |
| wco-gems-2022 | official_guidance | WCO HS Nomenclature2022 Chapter71, original PDFp.3 headings7101–7104. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1471_2022e.pdf?la=en | Rough versus worked natural diamonds/coloured stones, industrial/nonindustrial distinction and separate pearls/synthetic stones. Classification boundaries only, no new HS mapping. |
| ngja-gem-mining | official_guidance | Sri Lanka National Gem and Jewellery Authority, Gemstone Mining Industry, original webpage snapshot1October2026, mining methods, mining areas, environmental friendly mining and rehabilitation paragraphs. https://ngja.gov.lk/gems/gemstone-mining-industry/ | Conditional coloured-gem pit/tunnel/placer/dredging, wash-water settling/reuse and separate overburden rehabilitation; Sri Lankan examples do not fix every gemstone route or imply zero impact. |
| gia-diavik-2016 | literature | Shigley et al., Mining Diamonds in the Canadian Arctic: The Diavik Mine, Gems and Gemology Summer2016, original PDFpp.21–23 / printedpp.120–122, Figure20. https://www.gia.edu/doc/Summer-2016-Gems-Gemology-v5.pdf | One primary-diamond case: crushing/scrubbing/sizing, ferrosilicon DMS recycling, Xray/grease recovery and weighed sorted rough parcels. No Diavik grade, recovery, intensity or gem-price default. |
| nist-carat | official_guidance | NIST Office of Weights and Measures, Precious Metals Conversion Information, first substantive paragraph, original snapshot1October2026. https://www.nist.gov/pml/owm/metric-si/unit-conversion/precious-metals-conversion-information | Metric gemstone carat mass conversion0.2g /200mg; not precious-metal purity karat or a count-to-mass factor. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
