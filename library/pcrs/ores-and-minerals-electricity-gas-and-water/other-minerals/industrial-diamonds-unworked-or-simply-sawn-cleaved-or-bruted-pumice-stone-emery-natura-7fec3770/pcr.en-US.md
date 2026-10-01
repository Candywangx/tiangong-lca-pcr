---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.industrial-diamonds-unworked-or-simply-sawn-cleaved-or-bruted-pumice-stone-emery-natura-7fec3770
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural industrial diamonds, unworked or simply sawn, cleaved or bruted; pumice, emery and other natural abrasives

## 1. Scope and Applicability

Supply of natural industrial diamonds, unworked or only simply sawn, cleaved or bruted, and pumice stone, emery, natural corundum, natural garnet and other confirmed natural abrasives at one declared recovery/preparation/loading gate or explicitly included plant-receipt gate. Natural non-diamond abrasives may be crude, washed, crushed, ground, powdered, sieved or physically concentrated; actual heat-treated natural abrasives are admitted by HS2513 and require declared treatment and retained natural identity. Do not transfer the diamond rough-state restriction to natural abrasive powder, or transfer abrasive powder admission to diamond dust/powder. Every dataset selects one identified whole product and accepted size/performance grade. Actual families have distinct primary quarry/host-rock or placer routes; pumice can use simple surface mining and screening/crushing, emery is a naturally mixed mineral rock rather than pure corundum, natural corundum needs its own ore and supplier identity, and garnet may require actual washing, jigs, gravity/density, magnetic or flotation concentration. Diamond DMS/Xray/grease recovery applies only to an actual appropriate natural-diamond circuit, not to all abrasives. Standalone preparation of externally supplied qualified natural materials is allowed with upstream extraction burdens carried by the supplier. Unworked diamonds do not force sawing/bruting; prepared abrasives do not force washing, flotation, drying or thermal treatment. Additional other natural abrasive varieties require confirmed category/state and a separate atomic mineral/resource/product row; natural novaculite abrasive stone is an example only when its actual category is confirmed, not a license to relabel industrial sand or diatomaceous earth. Synthetic/reconstructed diamonds and manufactured/fused/sintered abrasive minerals are outside this natural category; CPC34560 separately names unworked synthetic/reconstructed precious or semiprecious stones, while CPC38230/HS7105 separately name diamond/gem dust/powder and further worked industrial diamonds. Bonded grinding wheels, coated paper/cloth, abrasive formulations, cleaning preparations, polished gems, jewellery and downstream abrasive use lie beyond this mineral gate. `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.industrial-diamonds-unworked-or-simply-sawn-cleaved-or-bruted-pumice-stone-emery-natura-7fec3770 |
| classification_refs | CPC 3.0:16320 |
| covered_products | Natural industrial rough/simple-sawn/cleaved/bruted diamonds; pumice stone; naturally mixed emery; natural corundum; natural garnet; individually confirmed other natural abrasives, including compatible crude, crushed/ground/powdered and heat-treated non-diamond mineral states |
| excluded_products | Nonindustrial gem reference products; synthetic/reconstructed diamonds; artificial/fused/sintered corundum or other manufactured abrasives; diamond/gem dust and powder or further worked diamonds as reference; formulated bonded/coated abrasive articles and cleaning preparations; jewellery; nonmatching sand/diatomaceous earth/aggregate categories; downstream use |
| representative_product | Natural abrasive garnet at declared mineral gate |
| production_route | Natural deposit extraction; Natural industrial diamond recovery; Natural abrasive preparation; Simple industrial diamond preparation; Natural abrasive drying and heat treatment; Water dust and residue management; Grade acceptance and dispatch |
| market_state | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one independently accepted declared-grade natural industrial diamond or natural abrasive mineral/rock lot at the specified gate |
| How much | 1 kg |
| How well | Natural origin; deposit/mineral or rock identity including emery phase mixture and garnet species; primary/placer/supplied route; actual processing and heat-treatment state; diamond industrial grade and permitted simple-cut state; accepted whole-product grade and size distribution; measured abrasive performance/contaminant specification where claimed; free moisture and structural-water basis; independent positive accepted D; gate/geography/period; provider/grid voltage; cutoff and equipment lifetime; outputs/allocation/waste fate. No assumed hardness, mineral purity, recovery, thermal recipe, price or yield. |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural abrasive garnet at declared mineral gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Natural origin; deposit/mineral or rock identity including emery phase mixture and garnet species; primary/placer/supplied route; actual processing and heat-treatment state; diamond industrial grade and permitted simple-cut state; accepted whole-product grade and size distribution; measured abrasive performance/contaminant specification where claimed; free moisture and structural-water basis; independent positive accepted D; gate/geography/period; provider/grid voltage; cutoff and equipment lifetime; outputs/allocation/waste fate. No assumed hardness, mineral purity, recovery, thermal recipe, price or yield. |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | Reconcile independently measured feed, accepted whole-product D, other accepted grades/co-minerals, waste rock, tailings/fines, dust, saw residue, water/evaporation and opening/closing stock on matched wet and dry-solids bases. kg_dry=kg_as_received*(1-free_moisture_fraction); mineral assay and structural water are separately measured, not subtracted as free water or substituted for whole-product D. Emery retains its natural phase mixture. Thermal treatment changes need actual mass/water/emission evidence, not a universal decomposition factor. Diamond metric carats convert kg=ct*0.0002; grams kg=g*0.001 for the same accepted parcels. Piece count cannot convert without measured paired weights. Measure accepted grade output independently, not as feed minus assumed waste or recovery. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified natural deposit and attributable mine development/closure, or externally supplied qualified natural mineral lot with named upstream provider; include only operations actually reaching the declared rough/mineral gate. Report cutoff criteria, excluded stage burdens, equipment replacement/lifetime and rehabilitation attribution; supplied minerals do not receive zero upstream burden. |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural industrial rough/simple-sawn/cleaved/bruted diamonds; pumice stone; naturally mixed emery; natural corundum; natural garnet; individually confirmed other natural abrasives, including compatible crude, crushed/ground/powdered and heat-treated non-diamond mineral states |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | Natural origin; deposit/mineral or rock identity including emery phase mixture and garnet species; primary/placer/supplied route; actual processing and heat-treatment state; diamond industrial grade and permitted simple-cut state; accepted whole-product grade and size distribution; measured abrasive performance/contaminant specification where claimed; free moisture and structural-water basis; independent positive accepted D; gate/geography/period; provider/grid voltage; cutoff and equipment lifetime; outputs/allocation/waste fate. No assumed hardness, mineral purity, recovery, thermal recipe, price or yield. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of natural industrial diamonds, unworked or only simply sawn, cleaved or bruted, and pumice stone, emery, natural corundum, natural garnet and other confirmed natural abrasives at one declared recovery/preparation/loading gate or explicitly included plant-receipt gate. Natural non-diamond abrasives may be crude, washed, crushed, ground, powdered, sieved or physically concentrated; actual heat-treated natural abrasives are admitted by HS2513 and require declared treatment and retained natural identity. Do not transfer the diamond rough-state restriction to natural abrasive powder, or transfer abrasive powder admission to diamond dust/powder. Every dataset selects one identified whole product and accepted size/performance grade. Actual families have distinct primary quarry/host-rock or placer routes; pumice can use simple surface mining and screening/crushing, emery is a naturally mixed mineral rock rather than pure corundum, natural corundum needs its own ore and supplier identity, and garnet may require actual washing, jigs, gravity/density, magnetic or flotation concentration. Diamond DMS/Xray/grease recovery applies only to an actual appropriate natural-diamond circuit, not to all abrasives. Standalone preparation of externally supplied qualified natural materials is allowed with upstream extraction burdens carried by the supplier. Unworked diamonds do not force sawing/bruting; prepared abrasives do not force washing, flotation, drying or thermal treatment. Additional other natural abrasive varieties require confirmed category/state and a separate atomic mineral/resource/product row; natural novaculite abrasive stone is an example only when its actual category is confirmed, not a license to relabel industrial sand or diatomaceous earth. Synthetic/reconstructed diamonds and manufactured/fused/sintered abrasive minerals are outside this natural category; CPC34560 separately names unworked synthetic/reconstructed precious or semiprecious stones, while CPC38230/HS7105 separately name diamond/gem dust/powder and further worked industrial diamonds. Bonded grinding wheels, coated paper/cloth, abrasive formulations, cleaning preparations, polished gems, jewellery and downstream abrasive use lie beyond this mineral gate. | `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| extraction | Natural deposit extraction | conditional | Only actual primary quarry/host-rock or placer extraction with identified deposit and attributable mine development/closure. | Foreground production | per 1 kg reference flow |
| diamond | Natural industrial diamond recovery | conditional | Only actual natural-diamond liberation/sorting circuit; absent for non-diamond abrasives. | Foreground production | per 1 kg reference flow |
| abrasive | Natural abrasive preparation | conditional | Only actual qualified supplied or extracted abrasive mineral crush/grind/wash/screen/concentration; raw accepted gate omits absent stages. | Foreground production | per 1 kg reference flow |
| rough | Simple industrial diamond preparation | conditional | Only actual admitted simple sawing/cleaving/bruting; unworked gate excludes absent cutting and further worked products. | Foreground production | per 1 kg reference flow |
| thermal | Natural abrasive drying and heat treatment | conditional | Only actual drying or admitted heat treatment retaining confirmed natural abrasive identity; no forced temperature/fuel/reaction. | Foreground production | per 1 kg reference flow |
| controls | Water dust and residue management | conditional | Actual site controls, discharges and final residue management, with no historical no-impact assumption. | Foreground production | per 1 kg reference flow |
| dispatch | Grade acceptance and dispatch | required | Independently weigh one accepted selected-grade lot and separately measure other outputs; packaging/receipt delivery only when actual. | Foreground production | per 1 kg reference flow |

### Process: Natural deposit extraction (`extraction`)

#### Inputs

##### Product flows

###### Natural-mineral extraction diesel (`mining_diesel`)

Actual mobile quarry/placer/loading fuel with grade and provider; no fixed mechanized requirement.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Ammonium-nitrate fuel-oil explosive (`anfo`)

Only actual blasted primary host rock; pumice/manual/placer routes do not require blasting, other explosive each separate.

- Selected flow: Ammonium-nitrate fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-mineral mining electricity (`mining_power`)

Actual pumping/excavation/ventilation with actual supplier state. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Natural industrial diamond in geological deposit (`diamond_resource`)

Actual natural diamond resource only, measured mineral mass distinct from whole host ore; grade partition measured after recovery.

- Selected flow: Natural industrial diamond in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural pumice in geological deposit (`pumice_resource`)

Actual pumice deposit extraction; not perlite expanded to resemble pumice.

- Selected flow: Natural pumice in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pumice_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pumice_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural emery rock in geological deposit (`emery_resource`)

Actual natural mixed emery rock with measured phases; not pure corundum mass by default.

- Selected flow: Natural emery rock in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_emery_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emery_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural abrasive corundum in geological deposit (`corundum_resource`)

Actual natural corundum mineral extraction, not manufactured alumina or fused/sintered corundum.

- Selected flow: Natural abrasive corundum in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_corundum_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_corundum_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural industrial garnet in geological deposit (`garnet_resource`)

Confirmed Elementary/Mass geological resource only; actual garnet mineral mass/species with resource assessment, not whole ore or supplied product.

- Selected flow: garnet, industrial `10a3f88a-2b80-47e8-92c4-2ae94ce757f8`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_garnet_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_garnet_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural abrasive novaculite in geological deposit (`novaculite_resource`)

Only actual specifically identified natural novaculite abrasive with confirmed category; other abrasive rocks each separate.

- Selected flow: Natural abrasive novaculite in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_novaculite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_novaculite_resource`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Natural-mineral mine waste rock (`waste_rock`)

Actual rejected host rock excluding accepted co-products; overburden stocks/rehabilitation separately recorded.

- Selected flow: Natural-mineral mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Natural industrial diamond recovery (`diamond`)

#### Inputs

##### Product flows

###### Supplied natural rough industrial diamond (`supplied_diamond`)

Only externally supplied confirmed natural industrial rough lot with upstream provider; internal recovered diamond cancels.

- Selected flow: Supplied natural rough industrial diamond
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_diamond; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_diamond`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-diamond recovery electricity (`diamond_power`)

Actual appropriate crushing/scrubbing/sizing/DMS/Xray/grease recovery; no abrasive-family default. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Ferrosilicon diamond dense-medium powder (`ferrosilicon`)

Only actual new diamond DMS medium make-up with grade/loss; internal medium recycle cancels.

- Selected flow: Ferrosilicon diamond dense-medium powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ferrosilicon; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ferrosilicon`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Petroleum-jelly diamond-recovery grease (`recovery_grease`)

Only actual confirmed petroleum-jelly formulation for grease-table recovery; other formulation separate; Xray-only route does not force grease.

- Selected flow: Petroleum-jelly diamond-recovery grease
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_recovery_grease; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery_grease`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Natural-diamond host-rock tailings (`diamond_tailings`)

Actual processed mineral reject with measured solids/moisture and retained diamonds, separate from accepted industrial/nonindustrial parcels.

- Selected flow: Natural-diamond host-rock tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_tailings`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Natural abrasive preparation (`abrasive`)

#### Inputs

##### Product flows

###### Supplied natural pumice stone (`supplied_pumice`)

Only actual supplied pumice stone lot with state and provider; not lightweight concrete or perlite.

- Selected flow: Supplied natural pumice stone
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_pumice; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_pumice`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Supplied natural emery rock (`supplied_emery`)

Only actual natural mixed emery supplied lot, separately assay phases without pure-corundum normalization.

- Selected flow: Supplied natural emery rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_emery; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_emery`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Supplied natural abrasive corundum (`supplied_corundum`)

Only confirmed natural abrasive corundum with upstream mineral route; synthetic alumina incompatible.

- Selected flow: Supplied natural abrasive corundum
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_corundum; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_corundum`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Supplied natural abrasive garnet (`supplied_garnet`)

Only external natural abrasive garnet with species/size/moisture/provider; resource UUID is not this product.

- Selected flow: Supplied natural abrasive garnet
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_garnet; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_garnet`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Supplied natural abrasive novaculite stone (`supplied_novaculite`)

Only actual confirmed natural abrasive novaculite product; other qualified natural abrasive separately named.

- Selected flow: Supplied natural abrasive novaculite stone
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_novaculite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_novaculite`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-abrasive preparation electricity (`abrasive_power`)

Actual family-specific crush/grind/screen/wash/gravity/magnetic/flotation plant, no forced diamond DMS/Xray. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_abrasive_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abrasive_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Purchased natural-mineral wash water (`wash_water`)

Only actual new compatible externally supplied process water; internal recycles cancel; dry-screen route excludes absent wash.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Magnetite garnet dense-medium powder (`magnetite_medium`)

Only actual independently confirmed magnetite garnet medium make-up; ferrosilicon or another actual medium needs its own card, no universal recipe.

- Selected flow: Magnetite garnet dense-medium powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_magnetite_medium; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_magnetite_medium`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Sodium oleate flotation collector (`sodium_oleate`)

Only actual confirmed individual collector in mineral flotation with measured formulation; evidence does not impose this reagent on all garnet.

- Selected flow: Sodium oleate flotation collector
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_oleate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_oleate`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Methyl isobutyl carbinol flotation frother (`mibc`)

Only actual confirmed individual frother; other collector/frother/modifier has its own named row and active fraction.

- Selected flow: Methyl isobutyl carbinol flotation frother
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mibc; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mibc`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Sulfuric acid mineral-wash reagent (`sulfuric_acid`)

Only actual structure-preserving impurity removal with confirmed natural abrasive state; absent for purely physical wash; reaction/emissions separately measured.

- Selected flow: Sulfuric acid mineral-wash reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfuric_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfuric_acid`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Steel mineral-grinding balls (`steel_grinding_media`)

Only actual consumed/worn grinding balls in abrasive milling; no force for screen-only product, other tool component separate.

- Selected flow: Steel mineral-grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_grinding_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_grinding_media`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Freshwater abstracted from river (`river_water`)

Actual river intake with basin/season and net withdrawal; groundwater/other source each own resource, not purchased process water.

- Selected flow: Freshwater abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Natural-abrasive mineral tailings (`abrasive_tailings`)

Actual concentration rejects with phases/moisture/fate; accepted alternative size grades separately measured products.

- Selected flow: Natural-abrasive mineral tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_abrasive_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abrasive_tailings`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Rejected natural-abrasive fines (`abrasive_fines`)

Actual unspecification dry/screen fines; powder meeting accepted reference grade is product, not automatically waste or recovered credit.

- Selected flow: Rejected natural-abrasive fines
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_abrasive_fines; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_abrasive_fines`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Simple industrial diamond preparation (`rough`)

#### Inputs

##### Product flows

###### Simple rough-diamond preparation electricity (`saw_power`)

Only actual admitted simple saw/cleave/brute, not downstream worked diamond/powder manufacture. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Diamond-segment simple-cut saw blade (`diamond_saw`)

Actual consumed/worn tool attributed by replacement/lifetime and actual cutting campaign.

- Selected flow: Diamond-segment simple-cut saw blade
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_saw; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_saw`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Industrial diamond saw-abrasive powder (`saw_diamond_powder`)

Only actual sourced consumable input; diamond powder remains outside this reference category, natural/synthetic supplier identity declared.

- Selected flow: Industrial diamond saw-abrasive powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_diamond_powder; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_diamond_powder`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Simple-diamond sawing sludge (`saw_sludge`)

Actual discarded diamond/tool/cooling residue with solids/water/fate; accepted rough fragments distinct output, not powder reference.

- Selected flow: Simple-diamond sawing sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_sludge`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Natural abrasive drying and heat treatment (`thermal`)

#### Inputs

##### Product flows

###### Natural-abrasive drying and heat-treatment electricity (`thermal_power`)

Only actual electric drying/thermal conditioning retaining admitted natural state, matched meter no double count preparation power. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural gas for natural-abrasive drying (`natural_gas`)

Only actual separately identified gas-fired drying/heat treatment with composition, mass and calorific basis; no forced gas recipe/temperature.

- Selected flow: Natural gas for natural-abrasive drying
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Water dust and residue management (`controls`)

#### Inputs

##### Product flows

###### Anionic polyacrylamide water-treatment flocculant (`polyacrylamide`)

Only actual individual polymer with formulation/active mass; gravity settling alone does not imply chemical demand.

- Selected flow: Anionic polyacrylamide water-treatment flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-mineral water and dust-control electricity (`control_power`)

Actual pumping/settling/reuse/capture control with separate allocation and meters. This UUID only matches CN1–35kV grid-average alternating-current consumption mix to user; resolve an appropriate flow for all other supplier/geography/voltage states.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Waste flows

###### Natural-mineral water-treatment sludge (`treatment_sludge`)

Actual removed sludge with mineral/chemical solids and final treatment; internal return cancels.

- Selected flow: Natural-mineral water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Captured natural-mineral dust for disposal (`captured_dust`)

Only actual captured discarded dust; accepted recovered fine-grade product separate; not simultaneously airborne emission.

- Selected flow: Captured natural-mineral dust for disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_captured_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_captured_dust`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-mineral wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer, not simultaneously own receiving-water release.

- Selected flow: Natural-mineral wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

##### Elementary flows

###### Suspended mineral solids released to river water (`tss_water`)

Actual net discharge after controls, paired measured TSS and volume/compartment; no default clear effluent.

- Selected flow: Suspended mineral solids released to river water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural-mineral PM10 released to air (`pm10_air`)

Actual size-specific airborne mineral particulate after controls, mineral content measured; captured dust excluded.

- Selected flow: Natural-mineral PM10 released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Fossil carbon dioxide released to air (`co2_air`)

Actual foreground fuel combustion with measured factor/activity; upstream supplier and purchased electricity burdens counted once.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Nitrogen dioxide released to air (`no2_air`)

Only actual measured/speciated NO2 from included combustion; do not relabel total NOx as pure NO2.

- Selected flow: Nitrogen dioxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_no2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2_air`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

### Process: Grade acceptance and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Polypropylene abrasive-product bag (`pp_bag`)

Actual consumed packaging with measured reuse/lifetime separate from net product mass.

- Selected flow: Polypropylene abrasive-product bag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pp_bag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp_bag`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Polyethylene abrasive-product bag liner (`pe_liner`)

Only actual separate PE liner, not included twice in bag assembly mass.

- Selected flow: Polyethylene abrasive-product bag liner
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pe_liner; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pe_liner`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Included natural-mineral delivery diesel (`delivery_diesel`)

Only expressly included actual foreground receipt delivery fuel; provider transport service separately without duplicated fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

#### Outputs

##### Product flows

###### Recovered natural nonindustrial rough diamond (`gem_diamond_coproduct`)

Actual accepted separately graded gem parcel and allocation, excluded from industrial reference D.

- Selected flow: Recovered natural nonindustrial rough diamond
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gem_diamond_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gem_diamond_coproduct`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Recovered natural wollastonite co-product (`co_wollastonite`)

Only actual accepted co-mineral from shared deposit/circuit with separate identity/mass/specification; no assumed co-output.

- Selected flow: Recovered natural wollastonite co-product
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co_wollastonite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_wollastonite`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

###### Natural abrasive garnet at declared mineral gate (`final_product`)

Representative is one confirmed natural garnet whole-product grade, with unresolved Product/Mass UUID; geological garnet Elementary UUID cannot identify this output. Other family products each require their own confirmed natural origin, market state and flow identity; full category is not reduced to garnet or diamonds.

- Selected flow: Natural abrasive garnet at declared mineral gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `wco-natural-abrasives-2022`, `wco-diamond-boundary-2022`, `usgs-industrial-garnet-2006`, `epa-natural-abrasives-1976`, `gia-diavik-2016`, `nist-carat`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Separate industrial/nonindustrial diamond parcels, abrasive size/performance grades and actually accepted co-minerals before reference normalization. Subdivide separately metered stages first; allocate genuinely shared mine/recovery burdens by a documented causal physical relationship when demonstrated, otherwise justified actual economic shares using independently measured quantities and matched observed prices/currency/period, with sensitivity. Retain unallocated totals and output weights. No invented gem price, universal recovery or hardness-based allocation. Unsold reject is waste by actual fate; neither sale nor a co-output name alone creates an avoided-product credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_diamond_resource | extraction | `diamond_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pumice_resource | extraction | `pumice_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_emery_resource | extraction | `emery_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_corundum_resource | extraction | `corundum_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_garnet_resource | extraction | `garnet_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_novaculite_resource | extraction | `novaculite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Identify actual natural deposit, mineral/rock phases and resource definition. Measure extracted resource mineral/rock kg with independently sampled grade and extraction/stock records and uncertainty; host ore kg and recovered product kg are separate fields, not interchangeable. Geological resource is not a purchased product and this protocol does not fix ore grade or recovery. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_diamond | diamond | `supplied_diamond` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_pumice | abrasive | `supplied_pumice` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_emery | abrasive | `supplied_emery` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_corundum | abrasive | `supplied_corundum` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_garnet | abrasive | `supplied_garnet` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_novaculite | abrasive | `supplied_novaculite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_power | diamond | `diamond_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ferrosilicon | diamond | `ferrosilicon` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovery_grease | diamond | `recovery_grease` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_tailings | diamond | `diamond_tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_abrasive_power | abrasive | `abrasive_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | abrasive | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | abrasive | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_magnetite_medium | abrasive | `magnetite_medium` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_oleate | abrasive | `sodium_oleate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mibc | abrasive | `mibc` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfuric_acid | abrasive | `sulfuric_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_grinding_media | abrasive | `steel_grinding_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_abrasive_tailings | abrasive | `abrasive_tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_abrasive_fines | abrasive | `abrasive_fines` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_power | rough | `saw_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_saw | rough | `diamond_saw` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_diamond_powder | rough | `saw_diamond_powder` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_sludge | rough | `saw_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_natural_gas | thermal | `natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure actual natural-gas consumed kg, supplier composition and heating value; any metered volume-to-mass conversion requires paired actual pressure/temperature/composition density, not an assumed universal gas density. Record actual thermal operating state and emitted species. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | controls | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier chemical/formulation identity, component/active/solid fractions, net new consumed kg, stock changes, internal recovered medium, water and fate for the matched circuit/period. Never apply a source-case recipe or aggregate unnamed chemicals; every additional actual component needs its own atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_captured_dust | controls | `captured_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh wet and dry waste/residue with free moisture, mineral and chemical phases, stock changes, transfer destination and final management in the same matched period. Report retained mineral and uncertainty; accepted product is measured separately. No zero treatment burden or automatic avoided credit. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair net receiving-river discharge V m3 and TSS C mg/L; kg=C*V/1000. Preserve compartment, season/background, sampling and uncertainty; dissolved pollutants each separate atomic row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_no2_air | controls | `no2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pp_bag | dispatch | `pp_bag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pe_liner | dispatch | `pe_liner` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gem_diamond_coproduct | dispatch | `gem_diamond_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co_wollastonite | dispatch | `co_wollastonite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted whole-product net lot at declared gate, exclude packaging/rejected matter, record species/natural origin, grade, size distribution/performance, heat/cut state, free moisture, structural water and stock changes. Positive selected-grade D is independently measured net accepted as-received kg, not mineral assay, hardness, feed-derived yield or total mixed-family output. Diamond parcels additionally pair metric carats/grams and kg; count requires paired weights. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted identified whole natural mineral/rock product and size/performance grade at a fixed gate; net as-received kg excludes packaging/rejected matter and has measured free moisture. Natural garnet is a representative only; diamond, pumice, mixed emery, corundum and other compatible grades require their own confirmed product identities. Natural origin, processing and thermal state are mandatory; unresolved product UUIDs prevent completed identity claims. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | Reconcile independently measured feed, accepted whole-product D, other accepted grades/co-minerals, waste rock, tailings/fines, dust, saw residue, water/evaporation and opening/closing stock on matched wet and dry-solids bases. kg_dry=kg_as_received*(1-free_moisture_fraction); mineral assay and structural water are separately measured, not subtracted as free water or substituted for whole-product D. Emery retains its natural phase mixture. Thermal treatment changes need actual mass/water/emission evidence, not a universal decomposition factor. Diamond metric carats convert kg=ct*0.0002; grams kg=g*0.001 for the same accepted parcels. Piece count cannot convert without measured paired weights. Measure accepted grade output independently, not as feed minus assumed waste or recovery. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Reconcile independently measured feed, accepted whole-product D, other accepted grades/co-minerals, waste rock, tailings/fines, dust, saw residue, water/evaporation and opening/closing stock on matched wet and dry-solids bases. kg_dry=kg_as_received*(1-free_moisture_fraction); mineral assay and structural water are separately measured, not subtracted as free water or substituted for whole-product D. Emery retains its natural phase mixture. Thermal treatment changes need actual mass/water/emission evidence, not a universal decomposition factor. Diamond metric carats convert kg=ct*0.0002; grams kg=g*0.001 for the same accepted parcels. Piece count cannot convert without measured paired weights. Measure accepted grade output independently, not as feed minus assumed waste or recovery. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply one independently accepted declared-grade natural industrial diamond or natural abrasive mineral/rock lot at the specified gate |
| excluded_use | Nonindustrial gem reference products; synthetic/reconstructed diamonds; artificial/fused/sintered corundum or other manufactured abrasives; diamond/gem dust and powder or further worked diamonds as reference; formulated bonded/coated abrasive articles and cleaning preparations; jewellery; nonmatching sand/diatomaceous earth/aggregate categories; downstream use |
| required_metadata | Natural origin; deposit/mineral or rock identity including emery phase mixture and garnet species; primary/placer/supplied route; actual processing and heat-treatment state; diamond industrial grade and permitted simple-cut state; accepted whole-product grade and size distribution; measured abrasive performance/contaminant specification where claimed; free moisture and structural-water basis; independent positive accepted D; gate/geography/period; provider/grid voltage; cutoff and equipment lifetime; outputs/allocation/waste fate. No assumed hardness, mineral purity, recovery, thermal recipe, price or yield. |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wco-natural-abrasives-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, Note1 and heading2513, original PDFpp.1,3. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Natural abrasive crude/washed/crushed/ground/powdered and physical concentration states; heading2513 expressly admits heat treatment. No new HS mapping or synthetic/article inclusion. |
| wco-diamond-boundary-2022 | official_guidance | WCO HS Nomenclature2022 Chapter71, headings7102,7104,7105, original PDFpp.3–4. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1471_2022e.pdf?la=en | Natural industrial diamonds unworked or simply sawn/cleaved/bruted; synthetic diamonds and diamond dust/powder separately named. |
| usgs-industrial-garnet-2006 | official_guidance | Evans and Moyle, U.S. Industrial Garnet, USGS Bulletin2209-L2006, original PDFp.15 / printedp.9, Barton Mines process paragraph. https://pubs.usgs.gov/bul/b2209-l/b2209l.pdf | Conditional garnet crushing/sizing, gravity/heavy-media/flotation separation, drying and heat treatment; site evidence required for medium/reagent identities. No historical grade, recovery, price, temperature or intensity default. |
| epa-natural-abrasives-1976 | official_guidance | EPA, Development Document for Interim Final Effluent Limitations Guidelines and Standards of Performance, Mineral Mining and Processing Industry, June1976, original PDFpp.80–81,124–125,213–214 / printedpp.71–72,117–118,206–207, Figures24,51. https://nepis.epa.gov/Exe/ZyPDF.cgi/2000JKPT.PDF?Dockey=2000JKPT.PDF | Natural corundum and mixed-mineral emery identity, simple pumice surface mining/screen-crush, primary/placer garnet wet/dry preparation and water/residue routes. Historical US cases do not establish universal zero impact, recipes or present intensities; limited emery/corundum route detail requires actual site records. |
| gia-diavik-2016 | literature | Shigley et al., Mining Diamonds in the Canadian Arctic: The Diavik Mine, Gems and Gemology Summer2016, original PDFpp.21–23 / printedpp.120–122, Figure20. https://www.gia.edu/doc/Summer-2016-Gems-Gemology-v5.pdf | One primary natural-diamond host-rock recovery case: crush/scrub/screen, ferrosilicon DMS recycling, Xray and grease recovery and weighed sorted rough parcels. Industrial-grade partition must be measured; no case recovery/grade default or forced route for abrasives. |
| nist-carat | official_guidance | NIST Office of Weights and Measures, Precious Metals Conversion Information, first substantive paragraph, original snapshot1October2026. https://www.nist.gov/pml/owm/metric-si/unit-conversion/precious-metals-conversion-information | 1 metric carat=0.2g=200mg; mass conversion only, not quality, recovery or count conversion. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
