---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.precious-metal-ores-and-concentrates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Precious metal ores and concentrates

## 1. Scope and Applicability

Supply of gold, silver and platinum-group mineral ores and concentrates at one declared mine, concentrator-loading or expressly included receipt gate. Platinum-group coverage includes platinum, palladium, rhodium, ruthenium, iridium and osmium-bearing mineral ores, rather than platinum alone. Cover lode and placer deposits, surface/underground mining and actual placer excavation/dredging, plus standalone preparation of supplied geological ore. Follow measured mineralogy: actual crushing, screening, washing, sorting, grinding, gravity, magnetic or dense-medium separation, flotation and concentrate thickening/filtration/drying are conditional; no universal gold cyanidation, PGM flotation recipe or recovery. Fix one actual mineral-product output and assayed metal suite. Mixed precious/base-metal mineral concentrates require confirmed category identity and joint-production allocation; a copper/nickel/lead/zinc concentrate does not become this category merely because it contains traces of precious metal. Actual thermal or oxidative mineral preparation belongs only where the output remains independently confirmed ore/mineral-concentrate feed, with phase/element/offgas balance and every actual chemical/gas exchange individually added. Do not classify every refractory-ore calcine as ore automatically. Dissolved leach solution, pregnant carbon/resin, amalgam, chemically precipitated metal/salt, smelting matte, anode slimes, dore/bullion and clean metallic gold/silver/PGM product gates are separate; commercial concentrate naming alone cannot establish mineral identity. Recycled jewellery, catalyst, electronic scrap and industrial residues need their own secondary-material methodology. Include actual development/closure, water/tailings/sediment/dust controls, handling and transport only through the selected mineral gate. `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.precious-metal-ores-and-concentrates |
| classification_refs | CPC 3.0:14240 |
| covered_products | Gold and silver mineral ores/concentrates; mineral ores/concentrates bearing Pt, Pd, Rh, Ru, Ir or Os; qualified lode/placer and normally prepared mineral feeds with declared actual category and metal suite |
| excluded_products | Dore/bullion or clean metallic precious-metal products; smelting matte/anode slimes; leach solutions, pregnant carbon/resin, amalgam, precipitated chemical/metal products; recycled scrap/catalyst and industrial residue; another declared base-metal concentrate category; transport-only service |
| representative_product | Gold ore at declared plant mineral gate |
| production_route | Mine development and rehabilitation; Precious-metal deposit extraction; Placer mineral washing and gravity concentration; Lode and PGM mineral concentration; Qualified mineral thermal or oxidative preparation; Water sediment tailings and air management; Included mineral delivery; Accepted mineral-product handling |
| market_state | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg of accepted precious-metal mineral ore or concentrate in its declared state; individual contained precious metals are qualifiers, not1 kg refined metal |
| How much | 1 kg |
| How well | site/year; geological/mineral identity and declared precious-metal category; Au/Ag/Pt/Pd/Rh/Ru/Ir/Os suite and each assay; lode/placer/surface/underground/dredging or supplied-stock route; actual gangue/sulfide/chromite/free-metal association and liberation; ore versus mineral concentrate and actual thermal/oxidative phase; free moisture, assay drying method, grain size and deleterious elements; dry-basis assay unit g/t or mass fraction for each element; chosen gate and transport; accepted output/stocks and measured recovery; water basin/return and sediment/waste fate; provider/joint-product allocation and lifetime development output; representative UUID only for compatible gold ore Product/Mass at plant, silver/PGM/concentrates and other states require separate identities |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gold Ore `ca49fc61-8575-4bf4-b072-f96ce6efd56c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; geological/mineral identity and declared precious-metal category; Au/Ag/Pt/Pd/Rh/Ru/Ir/Os suite and each assay; lode/placer/surface/underground/dredging or supplied-stock route; actual gangue/sulfide/chromite/free-metal association and liberation; ore versus mineral concentrate and actual thermal/oxidative phase; free moisture, assay drying method, grain size and deleterious elements; dry-basis assay unit g/t or mass fraction for each element; chosen gate and transport; accepted output/stocks and measured recovery; water basin/return and sediment/waste fate; provider/joint-product allocation and lifetime development output; representative UUID only for compatible gold ore Product/Mass at plant, silver/PGM/concentrates and other states require separate identities |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received mineral-product kg at the selected gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). For each assayed precious-metal element j, explicitly record dry-basis assay a_j in g/t of dry mineral: contained element kg = D*(1-w)*a_j/1000000. If assay is a dimensionless mass fraction g_j, contained element kg = D*(1-w)*g_j; do not confuse percent, ppm, g/t or troy ounces. Keep D as the common inventory denominator, with separate element indicators. Reconcile dry solids and each assayed metal across feed, accepted mineral product, separate co-products, reject/tailings/dust and stocks, independently of new/circulating/evaporated/discharged water. Recovery requires matched feed/product mass and assays after stock adjustment, not concentrate grade or downstream bullion/refinery yield. Actual thermal/oxidative preparation requires measured phase, element, oxygen, bound/free water and offgas balance; chemical/gas exchange additions are mandatory where actual. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified lode/placer geological deposit for integrated primary extraction, or supplied identified ore with provider/upstream burdens for standalone preparation; internal transfers cancel |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Gold and silver mineral ores/concentrates; mineral ores/concentrates bearing Pt, Pd, Rh, Ru, Ir or Os; qualified lode/placer and normally prepared mineral feeds with declared actual category and metal suite |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; geological/mineral identity and declared precious-metal category; Au/Ag/Pt/Pd/Rh/Ru/Ir/Os suite and each assay; lode/placer/surface/underground/dredging or supplied-stock route; actual gangue/sulfide/chromite/free-metal association and liberation; ore versus mineral concentrate and actual thermal/oxidative phase; free moisture, assay drying method, grain size and deleterious elements; dry-basis assay unit g/t or mass fraction for each element; chosen gate and transport; accepted output/stocks and measured recovery; water basin/return and sediment/waste fate; provider/joint-product allocation and lifetime development output; representative UUID only for compatible gold ore Product/Mass at plant, silver/PGM/concentrates and other states require separate identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of gold, silver and platinum-group mineral ores and concentrates at one declared mine, concentrator-loading or expressly included receipt gate. Platinum-group coverage includes platinum, palladium, rhodium, ruthenium, iridium and osmium-bearing mineral ores, rather than platinum alone. Cover lode and placer deposits, surface/underground mining and actual placer excavation/dredging, plus standalone preparation of supplied geological ore. Follow measured mineralogy: actual crushing, screening, washing, sorting, grinding, gravity, magnetic or dense-medium separation, flotation and concentrate thickening/filtration/drying are conditional; no universal gold cyanidation, PGM flotation recipe or recovery. Fix one actual mineral-product output and assayed metal suite. Mixed precious/base-metal mineral concentrates require confirmed category identity and joint-production allocation; a copper/nickel/lead/zinc concentrate does not become this category merely because it contains traces of precious metal. Actual thermal or oxidative mineral preparation belongs only where the output remains independently confirmed ore/mineral-concentrate feed, with phase/element/offgas balance and every actual chemical/gas exchange individually added. Do not classify every refractory-ore calcine as ore automatically. Dissolved leach solution, pregnant carbon/resin, amalgam, chemically precipitated metal/salt, smelting matte, anode slimes, dore/bullion and clean metallic gold/silver/PGM product gates are separate; commercial concentrate naming alone cannot establish mineral identity. Recycled jewellery, catalyst, electronic scrap and industrial residues need their own secondary-material methodology. Include actual development/closure, water/tailings/sediment/dust controls, handling and transport only through the selected mineral gate. | `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and rehabilitation | conditional | Integrated extraction and attributable development/closure | Foreground production | per 1 kg reference flow |
| extraction | Precious-metal deposit extraction | conditional | Actual lode/placer extraction including actual dredging with its own site method/exchanges | Foreground production | per 1 kg reference flow |
| placer | Placer mineral washing and gravity concentration | conditional | Only actual alluvial washing/sizing/gravity/magnetic preparation | Foreground production | per 1 kg reference flow |
| concentration | Lode and PGM mineral concentration | conditional | Actual mineral-specific crushing/grinding/gravity/magnetic/dense-medium/flotation/dewatering | Foreground production | per 1 kg reference flow |
| thermal | Qualified mineral thermal or oxidative preparation | conditional | Only actual drying/preparation retaining independently confirmed mineral-feed identity | Foreground production | per 1 kg reference flow |
| controls | Water sediment tailings and air management | conditional | Actual water/waste/dust/offgas controls and attributed site release | Foreground production | per 1 kg reference flow |
| delivery | Included mineral delivery | conditional | Only expressly included transport through selected receipt gate | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral-product handling | required | Every declared mineral output gate | Foreground production | per 1 kg reference flow |

### Process: Mine development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Mine-development and rehabilitation diesel (`development_diesel`)

Actual development/earthworks/closure attributed once over measured lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Precious-metal deposit extraction (`extraction`)

#### Inputs

##### Product flows

###### Precious-mineral extraction and haul diesel (`mining_diesel`)

Actual extraction/onsite ore-waste haul or diesel-powered placer dredging, with separately attributed meters; not generic marine-fuel substitution.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Precious-mineral extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling/ventilation/dewatering/conveying or electric dredging, route-specific meter attribution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; unblasted excavation excludes; other actual explosives/detonators each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Gold-bearing geological ore in deposit (`gold_resource`)

Actual primary gold ore resource with deposit-specific mineral and assay; supplied gold ore Product flow is not resource.

- Selected flow: Gold-bearing geological ore in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gold_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gold_resource`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Silver-bearing geological ore in deposit (`silver_resource`)

Only actual declared primary silver ore deposit; if gold/silver share one extracted ore, identify one geological resource and avoid duplicate ore mass.

- Selected flow: Silver-bearing geological ore in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_silver_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_silver_resource`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Platinum-bearing chromitite ore in deposit (`platinum_resource`)

Only confirmed actual chromitite mineral deposit; other Pt/Pd/Rh/Ru/Ir/Os ore lithologies require distinct resource identities, not pure-metal defaults.

- Selected flow: Platinum-bearing chromitite ore in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_platinum_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_platinum_resource`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Precious-metal mine waste rock (`waste_rock`)

Actual rejected geological rock with mineral/sulfide/metal and fate evidence; exclude ore stocks and do not assume all overburden equals waste rock.

- Selected flow: Precious-metal mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Placer mineral washing and gravity concentration (`placer`)

#### Inputs

##### Product flows

###### Supplied gold-bearing alluvial mineral feed (`supplied_placer`)

Only standalone supplied actual alluvial ore with supplier allocation/burden; integrated internal feed cancels.

- Selected flow: Supplied gold-bearing alluvial mineral feed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_placer; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_placer`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Placer washing and gravity-concentration electricity (`placer_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual wash screen/sluice/jig/table/centrifugal/pump drives as present; no universal device or recovery.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_placer_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placer_power`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Purchased placer-washing make-up water (`placer_water`)

Only new purchased water, distinct from direct abstraction and internal settling-pond reclaim.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_placer_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placer_water`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected placer coarse mineral gravel (`placer_reject`)

Only actual off-spec coarse geological fraction with residual metal and actual placement/management fate.

- Selected flow: Rejected placer coarse mineral gravel
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_placer_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placer_reject`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Placer-washing fine mineral sludge (`placer_fines`)

Actual fine wet solids with dry fraction/metal and settling-management fate; distinguish internal solids recovery.

- Selected flow: Placer-washing fine mineral sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_placer_fines; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placer_fines`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Lode and PGM mineral concentration (`concentration`)

#### Inputs

##### Product flows

###### Supplied gold ore (`supplied_gold_ore`)

Only compatible burden-bearing gold-ore supply at plant; other grades and internal transfers distinct.

- Selected flow: Gold Ore `ca49fc61-8575-4bf4-b072-f96ce6efd56c`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_gold_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_gold_ore`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Supplied silver mineral ore (`supplied_silver_ore`)

Only actual supplied silver ore with mineral/assay/moisture and upstream provider.

- Selected flow: Supplied silver mineral ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_silver_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_silver_ore`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Supplied platinum-bearing chromitite ore (`supplied_platinum_ore`)

Only actual compatible supplied chromitite ore; other palladium/PGM mineral feeds individually separate.

- Selected flow: Supplied platinum-bearing chromitite ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_platinum_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_platinum_ore`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Precious-mineral preparation electricity (`mill_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crusher/mill/gravity/magnetic/dense-medium/flotation/dewatering circuits, shared attribution once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mill_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mill_power`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Steel grinding balls (`steel_media`)

Only actual consumed balls; other media and liners each separate.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_media`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Ferrosilicon dense-medium powder (`ferrosilicon`)

Only actual fresh/consumed specified ferrosilicon medium; internal recovered medium not new supply; magnetite medium each separate if used.

- Selected flow: Ferrosilicon dense-medium powder
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_ferrosilicon; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ferrosilicon`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Purchased mineral-concentration make-up water (`process_water`)

Only new purchased water in actual circuit; exclude internal reclaimed supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_process_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Potassium amyl xanthate (`pax`)

Only actual collector formulation in compatible mineral flotation; other chemicals individually, no compulsory reagent recipe.

- Selected flow: Potassium amyl xanthate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pax; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pax`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Methyl isobutyl carbinol (`mibc`)

Only actual confirmed MIBC frother; other frothers individually.

- Selected flow: Methyl isobutyl carbinol
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mibc; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mibc`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Quicklime for flotation pH control (`lime`)

Only actual calcium-oxide supply with active fraction; not cyanidation reagent default or hydrated-lime substitute.

- Selected flow: Quicklime for flotation pH control
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lime`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`flocculant`)

Only actual confirmed thickening/tailings formulation; other polymers separate.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_flocculant; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flocculant`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Saleable chromite mineral concentrate (`chromite_concentrate`)

Only actual independently recovered chromite concentrate with assay/net output and co-product allocation; embedded chromite in PGM ore not separate product.

- Selected flow: Saleable chromite mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_chromite_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chromite_concentrate`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Saleable copper mineral concentrate (`copper_concentrate`)

Only separate physically recovered copper concentrate; embedded Cu/Au/Ag/PGM in one bulk output is not counted again.

- Selected flow: Saleable copper mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_copper_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_concentrate`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Waste flows

###### Precious-mineral beneficiation tailings slurry (`tailings`)

Actual final unrecovered tailings with measured solids/mineral/metal/sulfide assays and management fate; internal middlings exclude.

- Selected flow: Precious-mineral beneficiation tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Qualified mineral thermal or oxidative preparation (`thermal`)

#### Inputs

##### Product flows

###### Mineral-feed thermal-preparation natural gas (`thermal_natural_gas`)

Only actual gas-fired drying or independently qualified thermal mineral preparation; fuels/oxygen/reactants each additional separate when used.

- Selected flow: Mineral-feed thermal-preparation natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_natural_gas`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Mineral-feed thermal-preparation electricity (`thermal_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual mineral preparation equipment through mineral gate; not bullion/matte refinery output.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Water sediment tailings and air management (`controls`)

#### Inputs

##### Product flows

###### Sediment-tailings-water and air-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual settling/treatment/reclaim/dust/offgas controls, shared process meters once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Water-treatment quicklime (`water_treatment_lime`)

Only actual drainage neutralization chemical distinct from flotation pH supply.

- Selected flow: Water-treatment quicklime
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_water_treatment_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_treatment_lime`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`surface_water`)

Only actual direct river basin/season supply with site-use attribution; groundwater or saline source each separate.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_surface_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_water`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Precious-metal mine water-treatment sludge (`treatment_sludge`)

Actual treatment precipitate with measured dry solids/metals and management fate; not a mineral product by name alone.

- Selected flow: Precious-metal mine water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Mineral-process wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer; receiving-water discharge volume/species separate.

- Selected flow: Mineral-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Precious-mineral collector dust disposed (`collector_dust`)

Only actual collector disposal, distinguish internal return/saleable recovery.

- Selected flow: Precious-mineral collector dust disposed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Precious-mineral PM10 released to outdoor air (`pm10_air`)

Actual controlled mine/haul/preparation dust with size and metal composition; other pollutants separate.

- Selected flow: Precious-mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground fuel combustion with measured/traceable carbon basis; exclude upstream double-count and downstream smelting.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Sulfur dioxide released to outdoor air (`so2_air`)

Only actual fuel sulfur or qualified thermal mineral offgas after controls, not assumed total ore-sulfur emission.

- Selected flow: Sulfur dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_so2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2_air`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Suspended mineral solids released to receiving water (`suspended_solids_water`)

Only actual net sediment/TSS discharge with receiving compartment, not all managed placer sludge or tailings.

- Selected flow: Suspended mineral solids released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_suspended_solids_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_suspended_solids_water`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

###### Dissolved arsenic released to receiving water (`arsenic_water`)

Only actual ore-associated arsenic release measured with receiving compartment; other metals and chemical species each separate when released.

- Selected flow: Dissolved arsenic released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_arsenic_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_arsenic_water`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Included mineral delivery (`delivery`)

#### Inputs

##### Product flows

###### Included precious-mineral delivery diesel (`delivery_diesel`)

Only actual foreground transport through explicitly included receipt gate with route/load/return; provider transport separately without duplicate fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Accepted mineral-product handling (`dispatch`)

#### Inputs

##### Product flows

###### Precious-mineral gate-handling diesel (`loading_diesel`)

Actual product loading/receipt distinct from extraction haul and delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Gold ore at declared plant mineral gate (`final_product`)

Verified representative is Gold Ore Product/Mass, production mix at plant. Use only compatible actual gold ore and declared plant loading/receipt state. Silver/PGM ores, mineral concentrates, placer variants and thermal states need their own exact product identities, not bullion or a generic all-metal ore flow.

- Selected flow: Gold Ore `ca49fc61-8575-4bf4-b072-f96ce6efd56c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `bgs-platinum-2009`, `epa-gold-placer-1994`, `epa-gold-lode-1994`, `wco-hs26-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide mines, mineral zones and independent separation circuits where possible; retain the full unallocated joint precious/base-metal inventory. Embedded Au/Ag/PGM in one bulk mineral concentrate are not multiple physical-output masses. Separately recovered copper, nickel or chromite mineral concentrate is weighed and assigned its own identity; actual payability, refining/treatment charges, prices and matched period support any justified economic allocation when physical causality is unavailable. Precious-metal assay alone is not an environmental-burden allocation formula. Supplied/old-stock geological feed retains supplier allocation or justified cut-off and actual rehabilitation burden. Development/closure is attributed once by measured lifetime accepted output. No automatic avoided-metal, disposal or internal-recycle credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gold_resource | extraction | `gold_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_silver_resource | extraction | `silver_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_platinum_resource | extraction | `platinum_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_placer | placer | `supplied_placer` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_placer_power | placer | `placer_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_placer_water | placer | `placer_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_placer_reject | placer | `placer_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_placer_fines | placer | `placer_fines` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_gold_ore | concentration | `supplied_gold_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_silver_ore | concentration | `supplied_silver_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_platinum_ore | concentration | `supplied_platinum_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mill_power | concentration | `mill_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | concentration | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_ferrosilicon | concentration | `ferrosilicon` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_process_water | concentration | `process_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pax | concentration | `pax` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mibc | concentration | `mibc` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lime | concentration | `lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_flocculant | concentration | `flocculant` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_chromite_concentrate | concentration | `chromite_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_copper_concentrate | concentration | `copper_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings | concentration | `tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free-moisture/solids fraction and representative dry-basis mineral/Au/Ag/individual-PGM/base-metal/sulfur assays for same batches/period, with explicit assay units, sampling and analytical uncertainty. Reconcile stocks/transfers and individually identify resource, supplied product or waste/co-product and provider/fate; do not assume grade/recovery or count embedded metals twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_natural_gas | thermal | `thermal_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_surface_water | controls | `surface_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_water_treatment_lime | controls | `water_treatment_lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation, purchased/consumed mass and active fraction, dilution water and matched process/period; reconcile chemical/medium stock and internal recovery. Supplied product and active-component mass are distinct with explicit measured conversion. No pooled reagent or dose default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_so2_air | controls | `so2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_suspended_solids_water | controls | `suspended_solids_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair named-species concentration mg/L with calibrated net receiving-water discharge m3 for same period: released kg = concentration mg/L * volume m3 /1000. Retain TSS versus dissolved-metal analytical basis, background/reference-water sampling, compartment and uncertainty separately; retained treatment/tailings solids are not environmental release. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_arsenic_water | controls | `arsenic_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair named-species concentration mg/L with calibrated net receiving-water discharge m3 for same period: released kg = concentration mg/L * volume m3 /1000. Retain TSS versus dissolved-metal analytical basis, background/reference-water sampling, compartment and uncertainty separately; retained treatment/tailings solids are not environmental release. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh positive accepted net mineral kg D at selected gate using calibrated scale, reconciling packaging/returns/rejects and stock. Match wet-basis free moisture w and each dry-basis precious-metal assay a_j with explicit g/t unit and representative batch sampling; dry mass = D*(1-w); contained element kg = D*(1-w)*a_j/1000000. Preserve separate elemental quantities and assay uncertainty, retaining D as mineral inventory denominator. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted precious-metal mineral ore or concentrate at stated loading/receipt gate, with measured wet-basis free moisture and individual dry-basis precious/base-metal assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received mineral-product kg at the selected gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). For each assayed precious-metal element j, explicitly record dry-basis assay a_j in g/t of dry mineral: contained element kg = D*(1-w)*a_j/1000000. If assay is a dimensionless mass fraction g_j, contained element kg = D*(1-w)*g_j; do not confuse percent, ppm, g/t or troy ounces. Keep D as the common inventory denominator, with separate element indicators. Reconcile dry solids and each assayed metal across feed, accepted mineral product, separate co-products, reject/tailings/dust and stocks, independently of new/circulating/evaporated/discharged water. Recovery requires matched feed/product mass and assays after stock adjustment, not concentrate grade or downstream bullion/refinery yield. Actual thermal/oxidative preparation requires measured phase, element, oxygen, bound/free water and offgas balance; chemical/gas exchange additions are mandatory where actual. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received mineral-product kg at the selected gate, excluding packaging, rejected material and cancelled transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). For each assayed precious-metal element j, explicitly record dry-basis assay a_j in g/t of dry mineral: contained element kg = D*(1-w)*a_j/1000000. If assay is a dimensionless mass fraction g_j, contained element kg = D*(1-w)*g_j; do not confuse percent, ppm, g/t or troy ounces. Keep D as the common inventory denominator, with separate element indicators. Reconcile dry solids and each assayed metal across feed, accepted mineral product, separate co-products, reject/tailings/dust and stocks, independently of new/circulating/evaporated/discharged water. Recovery requires matched feed/product mass and assays after stock adjustment, not concentrate grade or downstream bullion/refinery yield. Actual thermal/oxidative preparation requires measured phase, element, oxygen, bound/free water and offgas balance; chemical/gas exchange additions are mandatory where actual. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg of accepted precious-metal mineral ore or concentrate in its declared state; individual contained precious metals are qualifiers, not1 kg refined metal |
| excluded_use | Dore/bullion or clean metallic precious-metal products; smelting matte/anode slimes; leach solutions, pregnant carbon/resin, amalgam, precipitated chemical/metal products; recycled scrap/catalyst and industrial residue; another declared base-metal concentrate category; transport-only service |
| required_metadata | site/year; geological/mineral identity and declared precious-metal category; Au/Ag/Pt/Pd/Rh/Ru/Ir/Os suite and each assay; lode/placer/surface/underground/dredging or supplied-stock route; actual gangue/sulfide/chromite/free-metal association and liberation; ore versus mineral concentrate and actual thermal/oxidative phase; free moisture, assay drying method, grain size and deleterious elements; dry-basis assay unit g/t or mass fraction for each element; chosen gate and transport; accepted output/stocks and measured recovery; water basin/return and sediment/waste fate; provider/joint-product allocation and lifetime development output; representative UUID only for compatible gold ore Product/Mass at plant, silver/PGM/concentrates and other states require separate identities |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bgs-platinum-2009 | official_guidance | British Geological Survey, Platinum Mineral Commodity Profile, September2009, original PDF pp.14–15. https://nora.nerc.ac.uk/id/eprint/8726/1/1278_Platinum_Profile.pdf | Qualitative PGM ore comminution, actual magnetic/dense-medium separation, flotation and distinction from smelting/refining. No moisture cutoff, recovery, thermal setting or market default. |
| epa-gold-placer-1994 | official_guidance | US EPA, Technical Resource Document Volume6 Gold Placers Part1, October1994, original PDF pp.18–19. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/placer1.pdf | Actual placer excavation/washing/gravity concentration, tailings/settling/reclaimed-water route and mineral concentrate versus bullion gate; historic quantities and legal/technology-share claims not adopted. |
| epa-gold-lode-1994 | official_guidance | US EPA, Technical Resource Document Volume2 Gold Chapter1, EPA530-R-94-013, August1994, original PDF pp.28–30. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/goldch1.pdf | Qualitative lode mining, mineral flotation/gravity route and distinction from amalgamation/cyanidation metal recovery. No historic grade, recovery, national production or reagent-dose default. |
| wco-hs26-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, original PDF pp.1–2, mineralogical Note2 and heading2616 silver/other precious-metal ores and concentrates. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | Full precious-metal mineral ore/concentrate identity and separation from industrial residues/matte; no new HS mapping or quantity. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
