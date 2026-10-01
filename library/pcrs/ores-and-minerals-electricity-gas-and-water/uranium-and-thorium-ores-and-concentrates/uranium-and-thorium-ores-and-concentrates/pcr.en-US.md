---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.uranium-and-thorium-ores-and-concentrates.uranium-and-thorium-ores-and-concentrates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Uranium and thorium ores and concentrates

## 1. Scope and Applicability

Supply uranium AND thorium ores and concentrates at one declared mine, mineral-separation, category-confirmed ore-concentrate mill/loading gate or explicitly included plant-receipt gate. Cover actual uranium-bearing minerals/ores, physical uranium concentrates and documented compatible uranium ore concentrate (UOC), plus thorium-bearing monazite, thorite or other identified thorium ore and its compatible concentrates. Uranium is one representative, not the full category. Actual routes include uranium open-pit/underground extraction and appropriate crushing/grinding/sorting or physical concentration, thorium primary hard-rock recovery and monazite-bearing placer/mineral-sand dry mining/dredging/hydraulic recovery with actual spirals/gravity, drying, electrostatic or magnetic separation, and preparation of supplied qualified ore. Mixed heavy-mineral sand containing trace thorium is not automatically a thorium reference product; its accepted intended ore/concentrate identity must be confirmed. WCO section26.12 includes UOC/yellowcake and footnote65 moves UOC obtained by processes not normal to metallurgical industry to28.44. Therefore do not equate every concentrate with mechanically concentrated ore, or admit every chemically separated uranium/thorium compound. A chemically recovered ore-concentrate gate requires documented actual composition, processing, commodity/category and boundary review against CPC13000 and separately named CPC33610/33630; pending or contradictory classification cannot be labelled confirmed. Include actual conventional mill, heap or in situ leach, solid-liquid separation, solution recovery/precipitation and drying/calcining only when reaching an independently confirmed compatible ore-concentrate gate. An in situ route does not fabricate a mined-solid-ore intermediate. Chemical thorium oxide/nitrate/oxalate/hydroxide products require their own chemical-category review and are not forced stages of thorium mineral recovery. Further purified radioactive chemical products, uranium conversion to UF6/UO2, enrichment/isotope separation, fuel-pellet/element fabrication, reactor use and reprocessing lie outside this ore-concentrate gate. Every dataset fixes one accepted uranium or thorium product/grade/state and measures net whole-product output independently. Physical sorting and monazite separation are optional actual routes, never universal recovery or purity recipes. `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.uranium-and-thorium-ores-and-concentrates.uranium-and-thorium-ores-and-concentrates |
| classification_refs | CPC 3.0:13000 |
| covered_products | Uranium and thorium ores and compatible concentrates, including identified thorium-bearing monazite/thorite mineral grades and documented category-compatible UOC; one declared whole-product grade/gate per dataset |
| excluded_products | Separately classified purified uranium/thorium compounds or radioactive residues as ore reference; unreviewed chemical concentrate; conversion/enrichment/isotope separation; fuel pellets/elements, reactor use/reprocessing; generic mixed sand with no confirmed uranium/thorium ore identity; unrelated rare-earth mineral as proxy |
| representative_product | Unenriched uranium ore at declared ore gate |
| production_route | Uranium and thorium deposit extraction; Uranium ore physical preparation; Thorium mineral concentration; Qualified uranium ore-concentrate recovery; Ore-concentrate drying and conditioning; Water dust radionuclide and residue management; Product acceptance and gate delivery |
| market_state | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one independently accepted declared-grade uranium or thorium ore/concentrate at a confirmed compatible gate |
| How much | 1 kg |
| How well | Uranium/thorium family; mineral/deposit/natural origin; ore versus mineral concentrate versus actual UOC composition; documented category/gate compatibility and chemical-processing review; primary/placer/mill/heap/in-situ/supplied route; accepted grade/size; U and Th assays on explicit dry or wet basis; isotope fractions within uranium separately from elemental uranium within whole ore; moisture/structural water; net independently measured positive D; radionuclide activity, disequilibrium and reference date; actual supplier/geography/voltage/period; water and residue compartments/fates; development/closure/cutoff/lifetime; joint outputs and allocation. No universal ore grade, U3O8 purity, isotope enrichment, yield, recipe or dose. |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unenriched uranium ore at declared ore gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Uranium/thorium family; mineral/deposit/natural origin; ore versus mineral concentrate versus actual UOC composition; documented category/gate compatibility and chemical-processing review; primary/placer/mill/heap/in-situ/supplied route; accepted grade/size; U and Th assays on explicit dry or wet basis; isotope fractions within uranium separately from elemental uranium within whole ore; moisture/structural water; net independently measured positive D; radionuclide activity, disequilibrium and reference date; actual supplier/geography/voltage/period; water and residue compartments/fates; development/closure/cutoff/lifetime; joint outputs and allocation. No universal ore grade, U3O8 purity, isotope enrichment, yield, recipe or dose. |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | Reconcile independently measured accepted selected whole-product D, ore/feed, co-minerals/co-products, mineral or leach residues, water, dissolved streams, dust and stocks. kg_dry=kg_as_received*(1-free_moisture_fraction); U/Th elemental assays, mineral phase composition, hydration and oxide-equivalent reporting are separate measured fields, not D. An oxide-equivalent assay does not prove pure oxide product or fixed stoichiometry. Isotope fraction within U differs from isotope mass fraction of whole ore. Track water abstraction/recycle/discharge/seepage/evaporation with actual compartments. For in situ recovery use measured extracted dissolved U/Th and wellfield solution balance, not imaginary mined ore. Track each measured radionuclide independently with activity unit/reference date/decay and parent-daughter disequilibrium; no secular-equilibrium, radon-release, retained tailing-activity or dose default. Accepted output and grade are measured independently, never feed minus assumed waste or a fixed recovery yield. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified geological uranium/thorium deposit with attributable mine/wellfield development and closure, or qualified external ore/mineral-concentrate lot with named upstream provider. Explicitly declare extraction versus supplied-feed operation, classification-confirmed ending gate, cutoff and equipment/wellfield lifetime-output allocation. Purchased ore is not zero-burden; internal recycling is not new supply. |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Uranium and thorium ores and compatible concentrates, including identified thorium-bearing monazite/thorite mineral grades and documented category-compatible UOC; one declared whole-product grade/gate per dataset |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | Uranium/thorium family; mineral/deposit/natural origin; ore versus mineral concentrate versus actual UOC composition; documented category/gate compatibility and chemical-processing review; primary/placer/mill/heap/in-situ/supplied route; accepted grade/size; U and Th assays on explicit dry or wet basis; isotope fractions within uranium separately from elemental uranium within whole ore; moisture/structural water; net independently measured positive D; radionuclide activity, disequilibrium and reference date; actual supplier/geography/voltage/period; water and residue compartments/fates; development/closure/cutoff/lifetime; joint outputs and allocation. No universal ore grade, U3O8 purity, isotope enrichment, yield, recipe or dose. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply uranium AND thorium ores and concentrates at one declared mine, mineral-separation, category-confirmed ore-concentrate mill/loading gate or explicitly included plant-receipt gate. Cover actual uranium-bearing minerals/ores, physical uranium concentrates and documented compatible uranium ore concentrate (UOC), plus thorium-bearing monazite, thorite or other identified thorium ore and its compatible concentrates. Uranium is one representative, not the full category. Actual routes include uranium open-pit/underground extraction and appropriate crushing/grinding/sorting or physical concentration, thorium primary hard-rock recovery and monazite-bearing placer/mineral-sand dry mining/dredging/hydraulic recovery with actual spirals/gravity, drying, electrostatic or magnetic separation, and preparation of supplied qualified ore. Mixed heavy-mineral sand containing trace thorium is not automatically a thorium reference product; its accepted intended ore/concentrate identity must be confirmed. WCO section26.12 includes UOC/yellowcake and footnote65 moves UOC obtained by processes not normal to metallurgical industry to28.44. Therefore do not equate every concentrate with mechanically concentrated ore, or admit every chemically separated uranium/thorium compound. A chemically recovered ore-concentrate gate requires documented actual composition, processing, commodity/category and boundary review against CPC13000 and separately named CPC33610/33630; pending or contradictory classification cannot be labelled confirmed. Include actual conventional mill, heap or in situ leach, solid-liquid separation, solution recovery/precipitation and drying/calcining only when reaching an independently confirmed compatible ore-concentrate gate. An in situ route does not fabricate a mined-solid-ore intermediate. Chemical thorium oxide/nitrate/oxalate/hydroxide products require their own chemical-category review and are not forced stages of thorium mineral recovery. Further purified radioactive chemical products, uranium conversion to UF6/UO2, enrichment/isotope separation, fuel-pellet/element fabrication, reactor use and reprocessing lie outside this ore-concentrate gate. Every dataset fixes one accepted uranium or thorium product/grade/state and measures net whole-product output independently. Physical sorting and monazite separation are optional actual routes, never universal recovery or purity recipes. | `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| extraction | Uranium and thorium deposit extraction | conditional | Actual hard-rock/underground/open-pit or thorium-bearing placer dry/wet extraction; wellfield development for in-situ recovery separately identified. | Foreground production | per 1 kg reference flow |
| uranium_physical | Uranium ore physical preparation | conditional | Actual uranium crush/grind/radiometric/physical sorting only when appropriate; finely disseminated ore does not force sorting. | Foreground production | per 1 kg reference flow |
| thorium_physical | Thorium mineral concentration | conditional | Actual monazite-bearing mineral-sand spirals/gravity/dry electrostatic/magnetic route or individually evidenced hard-rock thorium preparation. | Foreground production | per 1 kg reference flow |
| hydro | Qualified uranium ore-concentrate recovery | conditional | Only actual documented category-compatible UOC gate; acid/alkaline mill/heap/in-situ and IX/SX/precipitation selected by site. Exclude separately classified chemical product gate. | Foreground production | per 1 kg reference flow |
| conditioning | Ore-concentrate drying and conditioning | conditional | Only actual needed drying or category-compatible concentrate thermal conditioning; absent stages not forced. | Foreground production | per 1 kg reference flow |
| controls | Water dust radionuclide and residue management | conditional | Actual control/monitoring and waste/closure management through declared scope, including measured environmental releases. | Foreground production | per 1 kg reference flow |
| dispatch | Product acceptance and gate delivery | required | Independently weigh selected accepted whole-product grade and each other output; actual packaging and included receipt delivery. | Foreground production | per 1 kg reference flow |

### Process: Uranium and thorium deposit extraction (`extraction`)

#### Inputs

##### Product flows

###### Ore extraction diesel (`mining_diesel`)

Actual mining/dredging/loading/site haulage fuel with actual grade and provider, not a universal demand.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Ammonium-nitrate fuel-oil explosive (`anfo`)

Only actual hard-rock blasting; placer/soft ore/in-situ route does not force explosives.

- Selected flow: Ammonium-nitrate fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Ore mining electricity (`mining_power`)

Actual mine/wellfield pumping/ventilation or dredge supply, with actual supplier state and separate site meters. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

##### Elementary flows

###### Uranium in geological deposit (`uranium_resource`)

Actual geological uranium resource mass from matched extraction/assay, distinct from whole ore Product and uranium oxide equivalent.

- Selected flow: Uranium in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_uranium_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uranium_resource`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Thorium in geological deposit (`thorium_resource`)

Actual geological thorium resource mass in monazite/thorite/other identified ore; no elemental purity assumption for mixed ore.

- Selected flow: Thorium in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_thorium_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thorium_resource`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Waste flows

###### Uranium-thorium mine waste rock (`waste_rock`)

Actual nonproduct host-rock reject with U/Th/radionuclides and fate; retained overburden for rehabilitation separately recorded.

- Selected flow: Uranium-thorium mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Uranium ore physical preparation (`uranium_physical`)

#### Inputs

##### Product flows

###### Supplied unenriched uranium ore (`supplied_uranium_ore`)

Only actual supplied qualified uranium ore with measured whole-ore assay/isotope basis, state and upstream provider; internal ore transfer cancels.

- Selected flow: Supplied unenriched uranium ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_uranium_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_uranium_ore`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Uranium physical preparation electricity (`uranium_physical_power`)

Actual crush/grind/size/radiometric/density/magnetic/flotation operations, no universal sorter. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_uranium_physical_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uranium_physical_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Steel ore-grinding balls (`steel_grinding_media`)

Only actual consumed/worn mill media with allocated replacement mass; direct ore gate excludes absent milling.

- Selected flow: Steel ore-grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_grinding_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_grinding_media`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Sodium oleate mineral-flotation collector (`sodium_oleate`)

Only actual supplier-confirmed individual collector in applicable physical flotation; other formulations each named separately, not a source-imposed recipe.

- Selected flow: Sodium oleate mineral-flotation collector
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_oleate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_oleate`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Waste flows

###### Rejected uranium-bearing sorted rock (`uranium_sort_reject`)

Actual sorter/physical preparation reject with independent assay/activity, never assumed radiologically clean.

- Selected flow: Rejected uranium-bearing sorted rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_uranium_sort_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uranium_sort_reject`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Thorium mineral concentration (`thorium_physical`)

#### Inputs

##### Product flows

###### Supplied thorium-bearing monazite mineral sand (`supplied_monazite`)

Actual external lot confirmed as compatible thorium ore/mineral concentrate with phases/U/Th and provider; mixed bulk sand not automatically monazite product.

- Selected flow: Supplied thorium-bearing monazite mineral sand
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_monazite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_monazite`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Supplied thorite-bearing ore (`supplied_thorite`)

Only actual qualified thorite-bearing primary ore, distinct from monazite sand or pure thorium oxide.

- Selected flow: Supplied thorite-bearing ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_thorite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_thorite`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Thorium mineral separation electricity (`thorium_physical_power`)

Actual gravity/spiral/magnetic/electrostatic/crush/size operations per actual route; no uranium-leach recipe by analogy. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thorium_physical_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thorium_physical_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Purchased mineral-sand wash water (`wash_water`)

Only actual new compatible externally supplied process water; recirculation cancels, direct resource intake separate.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

##### Elementary flows

###### Freshwater abstracted from river (`river_water`)

Actual river intake with basin/season; pond recycle is internal, other abstraction sources separately named.

- Selected flow: Freshwater abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Waste flows

###### Thorium-bearing mineral-sand tailings (`mineral_sand_tailings`)

Actual separated sand/slimes with retained monazite/U/Th/activity and backfill or other management; no avoided-credit assumption.

- Selected flow: Thorium-bearing mineral-sand tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mineral_sand_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mineral_sand_tailings`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Qualified uranium ore-concentrate recovery (`hydro`)

#### Inputs

##### Product flows

###### Supplied uranium mineral concentrate (`supplied_u_concentrate`)

Only actual external category-confirmed feed with mineral/chemical state, assay, provider and upstream burden; recycled eluate is not new input.

- Selected flow: Supplied uranium mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_u_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_u_concentrate`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Qualified UOC recovery electricity (`hydro_power`)

Only actual compatible mill/heap/in-situ leach/recovery/pumping circuit; uranium ore-only or thorium physical gate does not force hydrometallurgy. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_hydro_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydro_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Sulfuric acid uranium-leach reagent (`sulfuric_acid`)

Only actual acid route fresh reagent; alkaline route does not inherit acid usage.

- Selected flow: Sulfuric acid uranium-leach reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfuric_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfuric_acid`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Sodium carbonate uranium-leach reagent (`sodium_carbonate`)

Only actual alkaline leach/strip component with supplier formulation and fresh consumption.

- Selected flow: Sodium carbonate uranium-leach reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_carbonate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_carbonate`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Sodium bicarbonate uranium-leach reagent (`sodium_bicarbonate`)

Only actual separately measured alkaline buffer, not combined carbonate mass.

- Selected flow: Sodium bicarbonate uranium-leach reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_bicarbonate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_bicarbonate`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Sodium chlorate leach oxidant (`sodium_chlorate`)

Only actual individual oxidant in qualified uranium circuit, no fixed oxidation dose.

- Selected flow: Sodium chlorate leach oxidant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_chlorate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_chlorate`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Manganese dioxide leach oxidant (`manganese_dioxide`)

Only actual separately confirmed oxidant, not an alternative selector row.

- Selected flow: Manganese dioxide leach oxidant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_manganese_dioxide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_manganese_dioxide`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Purchased oxygen leach oxidant (`oxygen`)

Only actual supplied oxygen with grade/state; compressed air if used is separately metered, not atmospheric resource by default.

- Selected flow: Purchased oxygen leach oxidant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_oxygen; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oxygen`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Tri-n-octylamine extraction reagent (`tri_n_octylamine`)

Only actual supplier-confirmed individual tertiary amine; other extractant identity must be separately named.

- Selected flow: Tri-n-octylamine extraction reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tri_n_octylamine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tri_n_octylamine`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Kerosene extraction-solvent diluent (`kerosene`)

Only actual identified SX diluent make-up, formulation/loss measured; not fuel combustion input.

- Selected flow: Kerosene extraction-solvent diluent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_kerosene; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kerosene`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### 1-Decanol extraction-solvent modifier (`decanol`)

Only actual confirmed individual solvent modifier; absence not assumed mandatory.

- Selected flow: 1-Decanol extraction-solvent modifier
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_decanol; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_decanol`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Quaternary-ammonium polystyrene-divinylbenzene ion-exchange resin (`ion_exchange_resin`)

Only actual supplier-confirmed whole resin formulation; replacement/lifetime allocated, not repeated circulating resin.

- Selected flow: Quaternary-ammonium polystyrene-divinylbenzene ion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ion_exchange_resin; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ion_exchange_resin`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Magnesium oxide uranium-precipitation reagent (`magnesium_oxide`)

Only actual magnesia precipitation route; no universal UOC chemical form or purity.

- Selected flow: Magnesium oxide uranium-precipitation reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_magnesium_oxide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_magnesium_oxide`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Ammonia uranium-precipitation reagent (`ammonia`)

Only actual independently specified ammonia form/solution strength for precipitation or pH adjustment.

- Selected flow: Ammonia uranium-precipitation reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ammonia; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ammonia`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Hydrogen peroxide uranium-precipitation reagent (`hydrogen_peroxide`)

Only actual peroxide precipitation component with strength and new active mass, separate from other oxidants.

- Selected flow: Hydrogen peroxide uranium-precipitation reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_hydrogen_peroxide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrogen_peroxide`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Purchased UOC recovery process water (`hydro_water`)

Only actual new externally supplied compatible water, separately metered from wash water; internal loop cancels.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_hydro_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydro_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Waste flows

###### Uranium ore-leach residue (`leach_residue`)

Actual insoluble mineral/chemical residue with remaining U/Th/daughters/activity and water; separately classify management, not zero-burden gangue.

- Selected flow: Uranium ore-leach residue
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_leach_residue; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_leach_residue`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Spent kerosene uranium-extraction solvent (`spent_solvent`)

Only actual externally managed spent kerosene formulation with radionuclides and final fate, not circulating solvent.

- Selected flow: Spent kerosene uranium-extraction solvent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_solvent; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_solvent`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Spent uranium-recovery ion-exchange resin (`spent_resin`)

Actual discarded resin with composition/U/Th/activity and management destination; replacement burden not counted twice.

- Selected flow: Spent uranium-recovery ion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_resin; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_resin`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Ore-concentrate drying and conditioning (`conditioning`)

#### Inputs

##### Product flows

###### Ore-concentrate conditioning electricity (`dry_power`)

Actual drying of monazite/mineral concentrate or compatible UOC thermal operation; retain gate classification after treatment. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_dry_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dry_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Natural gas for ore-concentrate drying (`natural_gas`)

Only actual gas-fired conditioning with gas composition/calorific basis and actual operating state; no fixed calcining temperature or chemical yield.

- Selected flow: Natural gas for ore-concentrate drying
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Water dust radionuclide and residue management (`controls`)

#### Inputs

##### Product flows

###### Calcium hydroxide effluent-neutralization reagent (`calcium_hydroxide`)

Only actual specified hydrated-lime treatment; quicklime if used is its own separate identity and stoichiometry.

- Selected flow: Calcium hydroxide effluent-neutralization reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_calcium_hydroxide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_calcium_hydroxide`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Barium chloride radium-treatment reagent (`barium_chloride`)

Only actual individual radium-removal treatment reagent with hydrate/active fraction; no default dosing or removal.

- Selected flow: Barium chloride radium-treatment reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_barium_chloride; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_barium_chloride`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Anionic polyacrylamide process flocculant (`polyacrylamide`)

Only actual individually specified polymer for settling/thickening; no assumption from pond use alone.

- Selected flow: Anionic polyacrylamide process flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Mine water dust and monitoring electricity (`controls_power`)

Actual ventilation/control/reuse/monitoring energy with separate meters and lifetime attribution; no double counting mining supply. This UUID only matches CN1–35kV grid-average alternating-current consumption mix delivered to user; all other suppliers/geographies/voltages require appropriate independent flow identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_controls_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls_power`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Waste flows

###### Radionuclide-bearing water-treatment sludge (`treatment_sludge`)

Actual removed mineral/chemical/radium sludge with dry solids/water/activity and managed final destination.

- Selected flow: Radionuclide-bearing water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Captured uranium-thorium mineral dust (`captured_dust`)

Actual captured discarded dust with mineral/radionuclide assay; internal recovered accepted product is separate and not emission.

- Selected flow: Captured uranium-thorium mineral dust
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_captured_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_captured_dust`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Radionuclide-bearing wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer, not simultaneously own environmental discharge; quality/activity and receiving provider declared.

- Selected flow: Radionuclide-bearing wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

##### Elementary flows

###### Suspended ore solids released to river water (`tss_water`)

Actual post-control river discharge solids with volume/concentration and mineral/radionuclide characterization; not managed sludge.

- Selected flow: Suspended ore solids released to river water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Ore PM10 released to air (`pm10_air`)

Actual post-control size-specific airborne mineral particulate; record isotope composition, do not conflate dust mass with radioactivity.

- Selected flow: Ore PM10 released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Radon-222 released to air (`rn222_air`)

Actual measured Rn222 release after ventilation/controls, with time/decay basis; no source activity equals emitted activity assumption.

- Selected flow: Radon-222 released to air
- Flow property / unit: Radioactivity / Bq
- Amount rule: Collect the attributable reporting-period quantity under cp_rn222_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rn222_air`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Radon-220 released to air (`rn220_air`)

Actual individually measured thoron release from thorium chain with sampling delay and source/fate, no Rn222 substitution.

- Selected flow: Radon-220 released to air
- Flow property / unit: Radioactivity / Bq
- Amount rule: Collect the attributable reporting-period quantity under cp_rn220_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rn220_air`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Radium-226 released to river water (`ra226_water`)

Actual measured isotope-specific aqueous release with dissolved/particulate phase and net discharge; managed sludge is not release.

- Selected flow: Radium-226 released to river water
- Flow property / unit: Radioactivity / Bq
- Amount rule: Collect the attributable reporting-period quantity under cp_ra226_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ra226_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Thorium-232 released to river water (`th232_water`)

Actual isotope-specific receiving-water release with measured activity/phase; not total Th mass or assumed equilibrium daughters.

- Selected flow: Thorium-232 released to river water
- Flow property / unit: Radioactivity / Bq
- Amount rule: Collect the attributable reporting-period quantity under cp_th232_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_th232_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Uranium-238 released to river water (`u238_water`)

Actual individually measured U238 release; U235/U234 or other radionuclides need their own row if present, not combined uranium activity.

- Selected flow: Uranium-238 released to river water
- Flow property / unit: Radioactivity / Bq
- Amount rule: Collect the attributable reporting-period quantity under cp_u238_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u238_water`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Fossil carbon dioxide released to air (`co2_air`)

Actual included foreground combustion; upstream energy/chemical provider emissions counted once, no universal ore CO2 factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Nitrogen dioxide released to air (`no2_air`)

Only actual measured/speciated NO2 from included combustion/blasting; total NOx is not automatically pure NO2.

- Selected flow: Nitrogen dioxide released to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_no2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_no2_air`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

### Process: Product acceptance and gate delivery (`dispatch`)

#### Inputs

##### Product flows

###### Steel ore-concentrate drum (`steel_drum`)

Actual drum consumed or attributed by reuse/lifetime; independently measure tare/capacity, no WCO example mass default.

- Selected flow: Steel ore-concentrate drum
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_drum; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_drum`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Polyethylene ore-concentrate drum liner (`pe_liner`)

Only actual separate liner; exclude from net product and avoid duplicate drum assembly components.

- Selected flow: Polyethylene ore-concentrate drum liner
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pe_liner; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pe_liner`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Included ore-concentrate receipt-delivery diesel (`delivery_diesel`)

Only expressly included actual foreground receipt delivery; provider service without duplicated fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

#### Outputs

##### Product flows

###### Accepted thorium-bearing monazite concentrate (`monazite_coproduct`)

Only actual independently accepted category-confirmed co-output when another uranium product is reference; own mineral/grade identity and allocation, not waste retained for future recovery.

- Selected flow: Accepted thorium-bearing monazite concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_monazite_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_monazite_coproduct`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Accepted zircon mineral concentrate (`zircon_coproduct`)

Actual accepted separately measured zircon from shared mineral sands, with provider/state and allocation.

- Selected flow: Accepted zircon mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_zircon_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_zircon_coproduct`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Accepted ilmenite mineral concentrate (`ilmenite_coproduct`)

Actual accepted individual titanium-mineral output, not combined ilmenite/rutile selector.

- Selected flow: Accepted ilmenite mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ilmenite_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ilmenite_coproduct`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Accepted rutile mineral concentrate (`rutile_coproduct`)

Only actual accepted separate rutile output with own mass/state and shared burdens.

- Selected flow: Accepted rutile mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_rutile_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rutile_coproduct`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

###### Unenriched uranium ore at declared ore gate (`final_product`)

Representative is one accepted natural uranium ore whole-product grade with unresolved exact Product UUID; neither oxide-equivalent assay nor a nuclear-compound flow establishes this identity. Thorium ores/mineral concentrates and admitted UOC each need their own confirmed reference identity/state with the same independent whole-product denominator.

- Selected flow: Unenriched uranium ore at declared ore gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `wco-uranium-thorium-2022`, `wco-uoc-boundary-2023`, `iaea-thorium-resources-2019`, `iaea-uranium-extraction-1993`, `iaea-uranium-development-1991`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide separately metered uranium and thorium mineral recovery or downstream chemical stages first. Shared ore/mineral-sand recovery may jointly yield accepted monazite, zircon, ilmenite/rutile or another independently specified product; distinguish actual products from radioactive waste retained only for management. Use documented causal physical allocation if demonstrated, otherwise justified actual economic shares with measured quantities, observed prices/currency/period and sensitivity. Retain unallocated totals/output weights. Trace U/Th and radionuclide distributions as balance observations, not assumed valuable coproducts or automatic economic/avoided credits. Long-lived tailing/wellfield management and closure remain attributable with disclosed time scope, lifetime basis and uncertainty. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_uranium_resource | extraction | `uranium_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match actual deposit/extracted material quantity and independently sampled elemental U or Th grade with isotope/mineral basis and stock changes; report geological resource kg of the specified element separately from whole ore kg. For in-situ extraction reconcile measured dissolved recovered element with wellfield solution and resource assessment. No pure-oxide or whole-ore grade inferred from natural isotope fraction. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thorium_resource | extraction | `thorium_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match actual deposit/extracted material quantity and independently sampled elemental U or Th grade with isotope/mineral basis and stock changes; report geological resource kg of the specified element separately from whole ore kg. For in-situ extraction reconcile measured dissolved recovered element with wellfield solution and resource assessment. No pure-oxide or whole-ore grade inferred from natural isotope fraction. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_uranium_ore | uranium_physical | `supplied_uranium_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_uranium_physical_power | uranium_physical | `uranium_physical_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_grinding_media | uranium_physical | `steel_grinding_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_oleate | uranium_physical | `sodium_oleate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_uranium_sort_reject | uranium_physical | `uranium_sort_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_monazite | thorium_physical | `supplied_monazite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_thorite | thorium_physical | `supplied_thorite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thorium_physical_power | thorium_physical | `thorium_physical_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | thorium_physical | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | thorium_physical | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mineral_sand_tailings | thorium_physical | `mineral_sand_tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_u_concentrate | hydro | `supplied_u_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_hydro_power | hydro | `hydro_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfuric_acid | hydro | `sulfuric_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_carbonate | hydro | `sodium_carbonate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_bicarbonate | hydro | `sodium_bicarbonate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_chlorate | hydro | `sodium_chlorate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_manganese_dioxide | hydro | `manganese_dioxide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_oxygen | hydro | `oxygen` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tri_n_octylamine | hydro | `tri_n_octylamine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_kerosene | hydro | `kerosene` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_decanol | hydro | `decanol` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ion_exchange_resin | hydro | `ion_exchange_resin` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_magnesium_oxide | hydro | `magnesium_oxide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ammonia | hydro | `ammonia` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_hydrogen_peroxide | hydro | `hydrogen_peroxide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_hydro_water | hydro | `hydro_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_leach_residue | hydro | `leach_residue` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_solvent | hydro | `spent_solvent` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_resin | hydro | `spent_resin` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dry_power | conditioning | `dry_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_natural_gas | conditioning | `natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Actual supplied gas consumed kg/composition/calorific basis and thermal state; volume-to-mass conversion needs measured applicable pressure/temperature/density, no generic gas density or heat requirement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_calcium_hydroxide | controls | `calcium_hydroxide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_barium_chloride | controls | `barium_chloride` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | controls | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Supplier-confirmed individual identity/formulation, hydrate/active/solid fraction, gross and active new consumed mass, stock changes, internal recovery and waste fate for matched actual circuit. Each additional chemical is an atomic row. No fixed recipe, equilibrium, precipitate stoichiometry or source-case recovery; circulating resin/solvent counted only by attributable new make-up/replacement. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_controls_power | controls | `controls_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_captured_dust | controls | `captured_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match independently measured wet/dry residue mass, moisture, mineral/chemical and U/Th assays, individual radionuclide activity/reference date/disequilibrium, stock and managed destination/closure scope. Preserve uncertainty and no measured-as-zero assumption; no automatic treatment cutoff or avoided-product credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently meter transferred wastewater volume in m3, paired dissolved/particulate U/Th assays and individual radionuclide Bq per volume with reference date, destination/provider, sampling and uncertainty. Reconcile external transfer separately from internal recycle and actual receiving-water discharge; use measured density only for an explicitly required volume/mass conversion. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Net receiving-water V m3 and measured TSS C mg/L give kg=C*V/1000; keep U/Th/radionuclide composition as separate quality fields and isotope release rows with no duplicate property representation. Report actual net release, compartment and uncertainty. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rn222_air | controls | `rn222_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated isotope-specific activity measurements paired with actual discharge volume or integrated gas flux, sampling time/delay, decay/reference date, compartment, background and uncertainty; report emitted Bq per matched production period. Do not infer daughters from total U/Th assay or assume secular equilibrium. Preserve one inventory property per isotope exchange; any Bq-to-mass conversion needs independently verified isotope-specific activity data and must not double count the same release. | Bq | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rn220_air | controls | `rn220_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated isotope-specific activity measurements paired with actual discharge volume or integrated gas flux, sampling time/delay, decay/reference date, compartment, background and uncertainty; report emitted Bq per matched production period. Do not infer daughters from total U/Th assay or assume secular equilibrium. Preserve one inventory property per isotope exchange; any Bq-to-mass conversion needs independently verified isotope-specific activity data and must not double count the same release. | Bq | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ra226_water | controls | `ra226_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated isotope-specific activity measurements paired with actual discharge volume or integrated gas flux, sampling time/delay, decay/reference date, compartment, background and uncertainty; report emitted Bq per matched production period. Do not infer daughters from total U/Th assay or assume secular equilibrium. Preserve one inventory property per isotope exchange; any Bq-to-mass conversion needs independently verified isotope-specific activity data and must not double count the same release. | Bq | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_th232_water | controls | `th232_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated isotope-specific activity measurements paired with actual discharge volume or integrated gas flux, sampling time/delay, decay/reference date, compartment, background and uncertainty; report emitted Bq per matched production period. Do not infer daughters from total U/Th assay or assume secular equilibrium. Preserve one inventory property per isotope exchange; any Bq-to-mass conversion needs independently verified isotope-specific activity data and must not double count the same release. | Bq | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_u238_water | controls | `u238_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated isotope-specific activity measurements paired with actual discharge volume or integrated gas flux, sampling time/delay, decay/reference date, compartment, background and uncertainty; report emitted Bq per matched production period. Do not infer daughters from total U/Th assay or assume secular equilibrium. Preserve one inventory property per isotope exchange; any Bq-to-mass conversion needs independently verified isotope-specific activity data and must not double count the same release. | Bq | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_no2_air | controls | `no2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_drum | dispatch | `steel_drum` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pe_liner | dispatch | `pe_liner` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_monazite_coproduct | dispatch | `monazite_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_zircon_coproduct | dispatch | `zircon_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ilmenite_coproduct | dispatch | `ilmenite_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rutile_coproduct | dispatch | `rutile_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently calibrated net whole-product lot weight and acceptance records excluding packaging/reject; specify product/mineral/chemical state, uranium/thorium family, grade, wet/dry basis, moisture, assay, isotope fractions and activity reference date, stock changes and actual classification/gate review. D is independently measured positive accepted selected-grade net as-received kg, never uranium-metal kg, oxide equivalent, mixed co-output total or feed-derived yield. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uranium or thorium ore/concentrate, specified mineral or actual UOC composition, net whole-product as-received kg at fixed gate with measured moisture/grade/isotope basis; uranium ore is a representative only. Each thorium mineral concentrate or chemical UOC needs its own confirmed identity. Unresolved reference UUID and chemical-category questions remain candidate gaps, not purity or isotope defaults. | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | Reconcile independently measured accepted selected whole-product D, ore/feed, co-minerals/co-products, mineral or leach residues, water, dissolved streams, dust and stocks. kg_dry=kg_as_received*(1-free_moisture_fraction); U/Th elemental assays, mineral phase composition, hydration and oxide-equivalent reporting are separate measured fields, not D. An oxide-equivalent assay does not prove pure oxide product or fixed stoichiometry. Isotope fraction within U differs from isotope mass fraction of whole ore. Track water abstraction/recycle/discharge/seepage/evaporation with actual compartments. For in situ recovery use measured extracted dissolved U/Th and wellfield solution balance, not imaginary mined ore. Track each measured radionuclide independently with activity unit/reference date/decay and parent-daughter disequilibrium; no secular-equilibrium, radon-release, retained tailing-activity or dose default. Accepted output and grade are measured independently, never feed minus assumed waste or a fixed recovery yield. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Reconcile independently measured accepted selected whole-product D, ore/feed, co-minerals/co-products, mineral or leach residues, water, dissolved streams, dust and stocks. kg_dry=kg_as_received*(1-free_moisture_fraction); U/Th elemental assays, mineral phase composition, hydration and oxide-equivalent reporting are separate measured fields, not D. An oxide-equivalent assay does not prove pure oxide product or fixed stoichiometry. Isotope fraction within U differs from isotope mass fraction of whole ore. Track water abstraction/recycle/discharge/seepage/evaporation with actual compartments. For in situ recovery use measured extracted dissolved U/Th and wellfield solution balance, not imaginary mined ore. Track each measured radionuclide independently with activity unit/reference date/decay and parent-daughter disequilibrium; no secular-equilibrium, radon-release, retained tailing-activity or dose default. Accepted output and grade are measured independently, never feed minus assumed waste or a fixed recovery yield. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply one independently accepted declared-grade uranium or thorium ore/concentrate at a confirmed compatible gate |
| excluded_use | Separately classified purified uranium/thorium compounds or radioactive residues as ore reference; unreviewed chemical concentrate; conversion/enrichment/isotope separation; fuel pellets/elements, reactor use/reprocessing; generic mixed sand with no confirmed uranium/thorium ore identity; unrelated rare-earth mineral as proxy |
| required_metadata | Uranium/thorium family; mineral/deposit/natural origin; ore versus mineral concentrate versus actual UOC composition; documented category/gate compatibility and chemical-processing review; primary/placer/mill/heap/in-situ/supplied route; accepted grade/size; U and Th assays on explicit dry or wet basis; isotope fractions within uranium separately from elemental uranium within whole ore; moisture/structural water; net independently measured positive D; radionuclide activity, disequilibrium and reference date; actual supplier/geography/voltage/period; water and residue compartments/fates; development/closure/cutoff/lifetime; joint outputs and allocation. No universal ore grade, U3O8 purity, isotope enrichment, yield, recipe or dose. |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wco-uranium-thorium-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, Note2 and heading2612, original PDFpp.1–2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | Both uranium and thorium ore/concentrate mineral categories and normal-metallurgical-process boundary; no new HS mapping. |
| wco-uoc-boundary-2023 | official_guidance | WCO Strategic Trade Control Enforcement Implementation Guide2023, section26.12, original PDFp.60 / printedp.58 including footnote65. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/enforcement-and-compliance/tools-and-instruments/stce-implementation-guide/stce-implementation-guide-2023-en.pdf?la=en | Uranium ore concentrate/yellowcake can belong to ore heading; processes not normal to metallurgical industry move UOC to28.44. Actual gate/category review required; no generic drum mass, purity or automatic chemical-product admission. |
| iaea-thorium-resources-2019 | official_guidance | IAEA, Thorium Resources as Co- and By-products of Rare Earth Deposits, IAEA-TECDOC-1892,2019, section5.3.1.1–5.3.1.2, original PDFpp.39–40 / printedpp.30–31. https://www-pub.iaea.org/MTCD/Publications/PDF/TE-1892web.pdf | Actual thorium-bearing monazite mineral-sand dry/wet extraction, spirals/gravity, drying/electrostatic/magnetic separation, co-minerals and separate downstream hydrometallurgy. No fixed Th content, purity, yield or dose. |
| iaea-uranium-extraction-1993 | official_guidance | IAEA, Uranium Extraction Technology, Technical Reports Series359,1993, original PDFpp.54–56 / printedpp.35–37 Figure3.1 and PDFpp.63–64 / printedpp.44–45 Table4.2, sections3 and4.3. https://www-pub.iaea.org/MTCD/Publications/PDF/trs359_web.pdf | Site-dependent uranium physical preconcentration/radiometric sorting and conditional acid/alkaline mill recovery, solid-liquid separation, IX/SX, precipitation/drying/calcining. Historical commercial limitations and mineralogy retained; no default recipe or recovery. |
| iaea-uranium-development-1991 | official_guidance | IAEA, Guidebook on the Development of Projects for Uranium Mining and Ore Processing, IAEA-TECDOC-595,1991, original PDFpp.136,148 / printedpp.139,151, sections12.2.3 and14. https://www-pub.iaea.org/mtcd/publications/pdf/te_0595.pdf | Actual uranium mine development/haulage/ventilation and water, dust, radon, radionuclide-bearing waste/closure; conditional lime/barium-chloride treatment. No historic pH, activity or consumption default. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
