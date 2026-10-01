---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.nickel-ores-and-concentrates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nickel ores and concentrates

## 1. Scope and Applicability

Supply of nickel mineral ores and concentrates at one declared mine, preparation/loading or explicitly included delivery gate. Cover sulfide ores, lateritic oxide/hydrous-silicate ores and other independently confirmed nickel-category mineral ores, including nickel-cobalt or nickel-copper-bearing grades. Surface and underground mining, standalone supplied-ore preparation and actual crushing, screening, washing/scrubbing, sorting, magnetic/gravity separation, grinding, flotation and concentrate thickening/filtration are conditioned on actual mineralogy and operation. Do not require flotation for laterite or ore-only output; distinguish limonite and saprolite and retain actual clay, moisture, Fe/Mg/Si and associated-metal evidence. Other mineral ores and novel routes require their own geological identity and actual process/exchange collection, not assumed sulfide intensities. Qualified thermal mineral-feed preparation is included only when the output still has confirmed ore/mineral-concentrate identity, with measured phase changes and sulfur/water/offgas balance. Smelting matte, ferronickel/nickel pig iron, dissolved leach solution, chemically precipitated mixed hydroxide/sulfide, nickel sulfate/oxide chemicals and refined nickel metal are separate products; commercial use of the word concentrate does not convert a precipitated chemical into mineral concentrate. Exclude recycled metal and industrial slag as mineral-ore feed; geological material recovered from old mine stocks retains its actual upstream/cut-off and rehabilitation burden. Include attributable development/closure, handling, tailings, water/air control and agreed transport only through the selected gate. `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.nickel-ores-and-concentrates |
| classification_refs | CPC 3.0:14220 |
| covered_products | Nickel mineral ores and concentrates: sulfide, lateritic oxide/hydrous-silicate and other confirmed nickel-category mineral grades; actual qualified normally prepared feeds, with associated metals separately assayed |
| excluded_products | Nickel/copper/cobalt smelting matte; ferronickel and nickel pig iron; metal or recycled scrap; industrial slags; leach solutions; chemically precipitated MHP/MSP, nickel sulfate/oxide chemicals; transport-only services or separately declared cobalt/copper/precious-metal reference categories |
| representative_product | Nickel-cobalt ore at declared plant gate |
| production_route | Mine development and closure; Nickel mineral extraction; Laterite ore preparation; Nickel mineral concentration; Qualified mineral thermal preparation; Tailings water and air management; Included mineral delivery; Accepted mineral-product handling |
| market_state | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg of accepted nickel mineral ore or concentrate in its stated market condition; contained nickel is a separately calculated qualifier, not1 kg nickel metal |
| How much | 1 kg |
| How well | site/year; geological/mineral ore identity; sulfide/laterite-limonite/laterite-saprolite or other confirmed route; surface/underground/supplied-stock route; ore or concentrate; actual preparation and thermal phase; dry-basis Ni, Co, Cu, Fe, Mg, Si, sulfur and relevant deleterious-element assays; free versus bound water; particle size; actual gate/transport; accepted mass and stocks; measured recovery; tailings/waste fate; water basin and return; joint-product/provider allocation and lifetime development output; representative UUID only for nickel-cobalt ore Product/Mass at a compatible plant gate; other ore grades and concentrates need their own exact identities |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nickel-cobalt ore `63f90633-2913-4600-a84e-3cc59f562a03` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; geological/mineral ore identity; sulfide/laterite-limonite/laterite-saprolite or other confirmed route; surface/underground/supplied-stock route; ore or concentrate; actual preparation and thermal phase; dry-basis Ni, Co, Cu, Fe, Mg, Si, sulfur and relevant deleterious-element assays; free versus bound water; particle size; actual gate/transport; accepted mass and stocks; measured recovery; tailings/waste fate; water basin and return; joint-product/provider allocation and lifetime development output; representative UUID only for nickel-cobalt ore Product/Mass at a compatible plant gate; other ore grades and concentrates need their own exact identities |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging, rejects and cancelled internal transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis nickel mass fraction g with0 <= g <=1; contained Ni kg = D*(1-w)*g, with D retained as inventory denominator. Bound water in laterite hydrous minerals is not free moisture; disclose drying assay method and thermal phase so dehydroxylation cannot silently redefine dry basis. Reconcile dry mineral solids and each Ni/Co/Cu component in feed, product, separated concentrates, tailings, rejects and stocks, separately from new/circulating/evaporated/discharged water. Recovery requires matched feed/output dry mass and assays after stock adjustment; neither concentrate grade nor refinery yield establishes mining recovery. Thermal preparation requires measured phase, water, sulfur and actual oxidation/offgas balances; additional actual gases and pollutants each separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified nickel-bearing geological deposit for integrated extraction, or supplied ore with identified provider and upstream burdens for standalone preparation; internal transfers cancel |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Nickel mineral ores and concentrates: sulfide, lateritic oxide/hydrous-silicate and other confirmed nickel-category mineral grades; actual qualified normally prepared feeds, with associated metals separately assayed |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; geological/mineral ore identity; sulfide/laterite-limonite/laterite-saprolite or other confirmed route; surface/underground/supplied-stock route; ore or concentrate; actual preparation and thermal phase; dry-basis Ni, Co, Cu, Fe, Mg, Si, sulfur and relevant deleterious-element assays; free versus bound water; particle size; actual gate/transport; accepted mass and stocks; measured recovery; tailings/waste fate; water basin and return; joint-product/provider allocation and lifetime development output; representative UUID only for nickel-cobalt ore Product/Mass at a compatible plant gate; other ore grades and concentrates need their own exact identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of nickel mineral ores and concentrates at one declared mine, preparation/loading or explicitly included delivery gate. Cover sulfide ores, lateritic oxide/hydrous-silicate ores and other independently confirmed nickel-category mineral ores, including nickel-cobalt or nickel-copper-bearing grades. Surface and underground mining, standalone supplied-ore preparation and actual crushing, screening, washing/scrubbing, sorting, magnetic/gravity separation, grinding, flotation and concentrate thickening/filtration are conditioned on actual mineralogy and operation. Do not require flotation for laterite or ore-only output; distinguish limonite and saprolite and retain actual clay, moisture, Fe/Mg/Si and associated-metal evidence. Other mineral ores and novel routes require their own geological identity and actual process/exchange collection, not assumed sulfide intensities. Qualified thermal mineral-feed preparation is included only when the output still has confirmed ore/mineral-concentrate identity, with measured phase changes and sulfur/water/offgas balance. Smelting matte, ferronickel/nickel pig iron, dissolved leach solution, chemically precipitated mixed hydroxide/sulfide, nickel sulfate/oxide chemicals and refined nickel metal are separate products; commercial use of the word concentrate does not convert a precipitated chemical into mineral concentrate. Exclude recycled metal and industrial slag as mineral-ore feed; geological material recovered from old mine stocks retains its actual upstream/cut-off and rehabilitation burden. Include attributable development/closure, handling, tailings, water/air control and agreed transport only through the selected gate. | `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and closure | conditional | Integrated mining with attributable development/rehabilitation | Foreground production | per 1 kg reference flow |
| extraction | Nickel mineral extraction | conditional | Actual surface/underground mining; other confirmed sources require their own method and additional exchanges | Foreground production | per 1 kg reference flow |
| laterite | Laterite ore preparation | conditional | Actual oxide/hydrous-silicate ore receiving, screening/scrubbing/sorting; not mandatory flotation | Foreground production | per 1 kg reference flow |
| concentration | Nickel mineral concentration | conditional | Actual sulfide or other mineral-specific concentration, including measured magnetic/gravity/flotation circuits | Foreground production | per 1 kg reference flow |
| thermal | Qualified mineral thermal preparation | conditional | Only actual drying or preparation retaining confirmed mineral-feed identity, not downstream metal production | Foreground production | per 1 kg reference flow |
| controls | Tailings water and air management | conditional | Actual waste, drainage and pollution-control scope | Foreground production | per 1 kg reference flow |
| delivery | Included mineral delivery | conditional | Only explicitly included receipt-gate transport | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral-product handling | required | Every declared mineral output gate | Foreground production | per 1 kg reference flow |

### Process: Mine development and closure (`development`)

#### Inputs

##### Product flows

###### Nickel-mine development diesel (`development_diesel`)

Actual development/rehabilitation machinery attributed once over measured lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Nickel mineral extraction (`extraction`)

#### Inputs

##### Product flows

###### Nickel-mine extraction and onsite-haul diesel (`mining_diesel`)

Actual machinery/ore and waste-rock haul; distinguish later external delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Nickel-mine extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling/conveying/dewatering/underground ventilation with circuit attribution.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; laterite digging without blasting excludes, other explosive/detonators each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Nickel-bearing sulfide mineral ore in geological deposit (`sulfide_resource`)

Actual geological sulfide extraction with measured mineralogy/assays; a product ore is not elementary resource.

- Selected flow: Nickel-bearing sulfide mineral ore in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfide_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfide_resource`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Nickel-bearing laterite mineral ore in geological deposit (`laterite_resource`)

Actual laterite geological extraction with measured limonite/saprolite horizon and assays; other mineral deposits each need their own identity.

- Selected flow: Nickel-bearing laterite mineral ore in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_laterite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laterite_resource`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Nickel-mine waste rock (`waste_rock`)

Actual rejected rock transferred to management with acid-generation/mineral assays; distinguish placed overburden and ore stock.

- Selected flow: Nickel-mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Laterite ore preparation (`laterite`)

#### Inputs

##### Product flows

###### Supplied nickel-bearing laterite ore (`supplied_laterite`)

Standalone actual oxide/hydrous-silicate supplied ore with upstream provider, horizon, moisture/assays; integrated internal feed cancels.

- Selected flow: Supplied nickel-bearing laterite ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_laterite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_laterite`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Laterite-preparation electricity (`laterite_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual screening/scrubbing/sorting/conveying/dewatering; no imposed sulfide milling or flotation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_laterite_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laterite_power`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Purchased laterite-washing make-up water (`laterite_water`)

Only actual new purchased washing water; separate direct source if used; recycled water not new supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_laterite_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laterite_water`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected laterite mineral coarse fraction (`laterite_reject`)

Only actual off-spec solid fraction with retained Ni and management fate; not every coarse size is barren.

- Selected flow: Rejected laterite mineral coarse fraction
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_laterite_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laterite_reject`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Laterite-washing fines sludge (`laterite_sludge`)

Only actual transferred fines with solids/mineral/metal content; saleable nickel-rich fines or internal recovery classified separately.

- Selected flow: Laterite-washing fines sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_laterite_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laterite_sludge`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Nickel mineral concentration (`concentration`)

#### Inputs

##### Product flows

###### Supplied nickel-cobalt ore (`supplied_ore`)

Only compatible supplied ore Product/Mass at plant with actual sulfide or other mineral route confirmed; generic identity does not prove a sulfide assay. Other ore grades need own identities.

- Selected flow: Nickel-cobalt ore `63f90633-2913-4600-a84e-3cc59f562a03`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_ore`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Nickel-mineral concentration electricity (`mill_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crushing, magnetic/gravity separation, grinding, flotation and dewatering circuits; assign meters once, exclude absent operations.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mill_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mill_power`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Steel grinding balls (`steel_media`)

Only actual consumed grinding balls; rods/liners/other media individually if used.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_media; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_media`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Purchased concentration make-up water (`process_water`)

Only new purchased water for actual circuit; internal reclaim excluded as external supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_process_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Potassium amyl xanthate (`pax`)

Only actual confirmed collector formulation/dose for actual mineral circuit; other collectors each separate.

- Selected flow: Potassium amyl xanthate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pax; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pax`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Methyl isobutyl carbinol (`mibc`)

Only actual confirmed MIBC frother; other actual frothers each separate.

- Selected flow: Methyl isobutyl carbinol
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mibc; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mibc`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Quicklime for flotation pH control (`lime`)

Only actual calcium-oxide reagent with active fraction; hydrated lime requires separate product identity.

- Selected flow: Quicklime for flotation pH control
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lime`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`flocculant`)

Only actual specified polymer for thickening/tailings; other formulations separate.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_flocculant; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flocculant`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Saleable copper mineral concentrate (`copper_concentrate`)

Only actually separated/weighed copper concentrate; embedded copper in nickel bulk concentrate is not a separate physical output.

- Selected flow: Saleable copper mineral concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_copper_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_concentrate`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### Waste flows

###### Nickel-mineral beneficiation tailings slurry (`tailings`)

Actual final unrecovered tailings with solids/mineral/metal/sulfur content and management fate; internal middlings excluded.

- Selected flow: Nickel-mineral beneficiation tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Qualified mineral thermal preparation (`thermal`)

#### Inputs

##### Product flows

###### Mineral-feed thermal-preparation natural gas (`thermal_natural_gas`)

Only actual gas-fired drying or confirmed mineral-feed preparation; distinguish free moisture/bound water/phase changes and sulfur oxidation. Other fuel/heat separately.

- Selected flow: Mineral-feed thermal-preparation natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_natural_gas`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Mineral-feed thermal-preparation electricity (`thermal_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual dryer/preparation equipment within mineral gate; not smelter, HPAL/refinery power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Tailings water and air management (`controls`)

#### Inputs

##### Product flows

###### Tailings-water and air-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual tailings/reclaim/drainage treatment and air control; shared process/thermal meters attributed once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Water-treatment quicklime (`water_treatment_lime`)

Only actual drainage neutralization chemical, distinct from flotation pH input.

- Selected flow: Water-treatment quicklime
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_water_treatment_lime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_treatment_lime`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`surface_water`)

Actual direct river source, basin and season across separately attributed site uses; groundwater source requires its own row.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_surface_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_surface_water`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Nickel-mine water-treatment sludge (`treatment_sludge`)

Actual sludge with dry solids/metals transferred to management.

- Selected flow: Nickel-mine water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Nickel-process wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer; direct receiving-water volume/species separate.

- Selected flow: Nickel-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Nickel-mineral collector dust disposed (`collector_dust`)

Only actual captured dust disposal, distinct from internal return/saleable mineral recovery.

- Selected flow: Nickel-mineral collector dust disposed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### Elementary flows

###### Nickel-mineral PM10 released to outdoor air (`pm10_air`)

Actual mine/haul/plant releases after controls with measured particle-size and metal basis; other pollutant species each separate.

- Selected flow: Nickel-mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground combustion with traceable fuel/carbon evidence; no double upstream fuel combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Sulfur dioxide released to outdoor air (`so2_air`)

Only actual fuel-sulfur or qualified thermal mineral preparation after controls; no assumed ore-sulfur emission or smelter inclusion.

- Selected flow: Sulfur dioxide released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_so2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_so2_air`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### Dissolved nickel released to receiving water (`nickel_water`)

Only actual receiving-compartment release with matched dissolved Ni/net volume/background; managed tailings Ni is not automatically water emission.

- Selected flow: Dissolved nickel released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_nickel_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nickel_water`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Included mineral delivery (`delivery`)

#### Inputs

##### Product flows

###### Included nickel-mineral delivery diesel (`delivery_diesel`)

Actual foreground delivery through expressly included receipt gate with route/load/return; provider transport separate without duplicate fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### Process: Accepted mineral-product handling (`dispatch`)

#### Inputs

##### Product flows

###### Nickel-mineral gate-handling diesel (`loading_diesel`)

Actual loading/receipt handling distinct from mine haul and delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Nickel-cobalt ore at declared plant gate (`final_product`)

Representative is verified nickel-cobalt ore Product/Mass, production mix at plant. Use only compatible actual ore state and chosen plant loading/receipt boundary. Nickel mineral concentrates, cobalt-free/other grades and thermal feeds need distinct actual identities; verified8.6% Ni concentrate is not a universal grade default.

- Selected flow: Nickel-cobalt ore `63f90633-2913-4600-a84e-3cc59f562a03`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide actual mining zones, ore preparation and independently separated concentrates when possible. Retain unallocated nickel-copper-cobalt/precious-metal joint inventories and justify physical causality or matched economic allocation with actual payable assays, treatment charges, prices and sensitivity. Embedded metals in one bulk concentrate are not multiple physical output masses; count a separate copper/cobalt mineral concentrate only when actually recovered and weighed. Assign supplied/old-stock ore upstream allocation or justified cut-off and actual rehabilitation/transport burdens; no zero-burden assumption. Attribute development/closure once over measured lifetime accepted output; no automatic avoided-metal/disposal or internal-recycle credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfide_resource | extraction | `sulfide_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_laterite_resource | extraction | `laterite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_laterite | laterite | `supplied_laterite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_laterite_power | laterite | `laterite_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_laterite_water | laterite | `laterite_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_laterite_reject | laterite | `laterite_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_laterite_sludge | laterite | `laterite_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_ore | concentration | `supplied_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mill_power | concentration | `mill_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | concentration | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_process_water | concentration | `process_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_surface_water | controls | `surface_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pax | concentration | `pax` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation and active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and internal reuse. Product mass and active-chemical mass are distinct with measured conversion. No pooled reagent or assumed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mibc | concentration | `mibc` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation and active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and internal reuse. Product mass and active-chemical mass are distinct with measured conversion. No pooled reagent or assumed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lime | concentration | `lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation and active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and internal reuse. Product mass and active-chemical mass are distinct with measured conversion. No pooled reagent or assumed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_flocculant | concentration | `flocculant` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation and active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and internal reuse. Product mass and active-chemical mass are distinct with measured conversion. No pooled reagent or assumed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_copper_concentrate | concentration | `copper_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings | concentration | `tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet mass, free moisture/solids fraction and dry-basis Ni/Co/Cu, mineral, sulfur and relevant Fe/Mg/Si assays for same batches/period. Reconcile stocks/transfers and independently identify resource, supplied product or waste/co-product/provider/fate. Preserve laterite horizon and drying assay method; no grade or recovery default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_natural_gas | thermal | `thermal_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_water_treatment_lime | controls | `water_treatment_lime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record one actual supplier formulation and active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and internal reuse. Product mass and active-chemical mass are distinct with measured conversion. No pooled reagent or assumed dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_so2_air | controls | `so2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_nickel_water | controls | `nickel_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair dissolved-Ni concentration mg/L and calibrated net receiving-water discharge m3 for same period: Ni kg = concentration mg/L * volume m3 /1000. Retain total versus dissolved, background/reference water, compartment and uncertainty separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh positive accepted net mineral kg D at selected gate with calibrated scale, reconciling packaging/returns/rejects and stock. Pair batch free moisture w and dry-basis Ni fraction g with mineral/horizon and Co/Cu assays. Dry mass = D*(1-w); contained nickel = D*(1-w)*g; retain D as denominator. State drying/assay method so laterite bound water is not silently treated as free water. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted nickel mineral ore or concentrate grade at a stated loading/receipt gate, with measured free moisture, mineral phase and dry-basis nickel/associated-element assays | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging, rejects and cancelled internal transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis nickel mass fraction g with0 <= g <=1; contained Ni kg = D*(1-w)*g, with D retained as inventory denominator. Bound water in laterite hydrous minerals is not free moisture; disclose drying assay method and thermal phase so dehydroxylation cannot silently redefine dry basis. Reconcile dry mineral solids and each Ni/Co/Cu component in feed, product, separated concentrates, tailings, rejects and stocks, separately from new/circulating/evaporated/discharged water. Recovery requires matched feed/output dry mass and assays after stock adjustment; neither concentrate grade nor refinery yield establishes mining recovery. Thermal preparation requires measured phase, water, sulfur and actual oxidation/offgas balances; additional actual gases and pollutants each separate. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging, rejects and cancelled internal transfers. Measure wet-basis free-moisture fraction w with0 <= w <1; dry mineral mass = D*(1-w). Measure dry-basis nickel mass fraction g with0 <= g <=1; contained Ni kg = D*(1-w)*g, with D retained as inventory denominator. Bound water in laterite hydrous minerals is not free moisture; disclose drying assay method and thermal phase so dehydroxylation cannot silently redefine dry basis. Reconcile dry mineral solids and each Ni/Co/Cu component in feed, product, separated concentrates, tailings, rejects and stocks, separately from new/circulating/evaporated/discharged water. Recovery requires matched feed/output dry mass and assays after stock adjustment; neither concentrate grade nor refinery yield establishes mining recovery. Thermal preparation requires measured phase, water, sulfur and actual oxidation/offgas balances; additional actual gases and pollutants each separate. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg of accepted nickel mineral ore or concentrate in its stated market condition; contained nickel is a separately calculated qualifier, not1 kg nickel metal |
| excluded_use | Nickel/copper/cobalt smelting matte; ferronickel and nickel pig iron; metal or recycled scrap; industrial slags; leach solutions; chemically precipitated MHP/MSP, nickel sulfate/oxide chemicals; transport-only services or separately declared cobalt/copper/precious-metal reference categories |
| required_metadata | site/year; geological/mineral ore identity; sulfide/laterite-limonite/laterite-saprolite or other confirmed route; surface/underground/supplied-stock route; ore or concentrate; actual preparation and thermal phase; dry-basis Ni, Co, Cu, Fe, Mg, Si, sulfur and relevant deleterious-element assays; free versus bound water; particle size; actual gate/transport; accepted mass and stocks; measured recovery; tailings/waste fate; water basin and return; joint-product/provider allocation and lifetime development output; representative UUID only for nickel-cobalt ore Product/Mass at a compatible plant gate; other ore grades and concentrates need their own exact identities |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bgs-nickel-2008 | official_guidance | British Geological Survey, Bide, Hetherington and Gunn, Nickel Mineral Commodity Profile, September2008, original PDF pp.6–9. https://nora.nerc.ac.uk/id/eprint/8725/1/0910_Nickel_Profile.pdf | Qualitative surface/underground sulfide and laterite mining, actual sulfide mineral separation, concentrate dewatering and distinction from downstream smelting/leaching/refining. No historic grade, recovery, mine dimensions, leach conditions or market defaults. |
| wco-hs26-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, original PDF pp.1–2, mineralogical Note2 and heading2604. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | Mineral ore/concentrate identity and matte/residue distinction; product boundary only, no new HS mapping or process quantity. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
