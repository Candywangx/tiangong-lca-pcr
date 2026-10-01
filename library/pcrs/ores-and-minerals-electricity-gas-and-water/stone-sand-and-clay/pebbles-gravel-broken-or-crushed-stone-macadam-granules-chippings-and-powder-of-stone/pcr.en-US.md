---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.pebbles-gravel-broken-or-crushed-stone-macadam-granules-chippings-and-powder-of-stone
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pebbles, gravel, broken or crushed stone, macadam; granules, chippings and powder of stone

## 1. Scope and Applicability

Supply of natural pebbles/gravel, broken or crushed stone and unbound macadam stone, stone granules/chippings and mechanically produced stone powder at one declared loading gate. Cover terrestrial or permitted aquatic gravel extraction, hard-rock quarrying, standalone processing of burden-bearing stone/gravel and compatible dimension-stone offcuts. Distinguish natural-gravel separation, staged rock crushing/screening and optional dry/wet fine grinding/classification, wet beneficiation, concentration and actual drying. Include raw unprocessed gravel only with declared state; do not impose crushing on every gravel route or grinding/drying on every aggregate. Manufactured stone fines remain mechanically reduced stone, not natural sand. This product gate excludes pavement construction and binder mixing. Use actual lithology, provenance and market state, not a universal aggregate composition. Include attributable development/rehabilitation, handling/loading, water, dust and waste management. Industrial-residue macadam of identified slag, dross or similar industrial waste is also covered, with or without compatible stone fractions, when it is actually supplied as qualified unbound aggregate. Declare residue-generating industry/process, incoming waste versus co-product status, upstream allocation/cut-off, actual cooling/conditioning, metal recovery, stock residence, grading, volume stability and applicable environmental-quality evidence. Capture conditioning runoff and actual pollutant species. Do not transfer steel-slag aging/composition to other residues, assume all residues are usable, or infer avoided disposal/metals-production credit. Tarred macadam/binder mixtures and raw metallurgical slag supplied for a different purpose remain separate products. `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`, `wco-hs25-2022`, `fhwa-steel-slag-97148`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.pebbles-gravel-broken-or-crushed-stone-macadam-granules-chippings-and-powder-of-stone |
| classification_refs | CPC 3.0:15320 |
| covered_products | Natural pebbles/gravel; broken/crushed stone and unbound macadam; stone granules/chippings and stone powder, each with fixed origin, lithology, grading and processing gate; qualified unbound macadam of slag, dross or similar industrial residues with actual declared source/conditioning |
| excluded_products | Natural sand as reference; dimension-stone blocks/slabs; recycled concrete aggregate; artificial expanded lightweight aggregate and raw metallurgical slag not supplied as macadam; tarred macadam and binder-bound asphalt/concrete or installed macadam pavement; coated/chemically transformed fillers; calcined lime/cement and separate mineral product categories |
| representative_product | Crushed stone 16/32 at supply gate |
| production_route | Deposit development and rehabilitation; Rock quarrying or natural-gravel extraction; Crushing, screening and washing; Industrial-residue conditioning and metal recovery; Stone-powder grinding and conditioning; Dust, water and residue management; Net accepted stone-product loading |
| market_state | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg of qualified stone aggregate, stone powder or industrial-residue macadam at declared grading, moisture and quality; no universal end-use performance equivalence |
| How much | 1 kg |
| How well | site/year; geology and actual lithology; natural-gravel/quarry/offcut origin; integrated or supplied-feed start; actual crushing stages or dry/wet powder route; particle-size distribution, fines and shape; moisture/solids; quality specifications and impurity/mineral assays; net loading gate; stock/recycle; water basin and return; waste fate; allocation; lifetime development output; verified reference UUID only for compatible crushed stone 16/32, other grades require distinct flow identity; industrial-residue generating process and incoming status; metal recovery; cooling/aging water and stock period; actual free oxides/phase/mineral/metal assays; demonstrated volume stability and source-specific leaching/runoff evidence; reference UUID never reused for slag/dross macadam |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; geology and actual lithology; natural-gravel/quarry/offcut origin; integrated or supplied-feed start; actual crushing stages or dry/wet powder route; particle-size distribution, fines and shape; moisture/solids; quality specifications and impurity/mineral assays; net loading gate; stock/recycle; water basin and return; waste fate; allocation; lifetime development output; verified reference UUID only for compatible crushed stone 16/32, other grades require distinct flow identity; industrial-residue generating process and incoming status; metal recovery; cooling/aging water and stock period; actual free oxides/phase/mineral/metal assays; demonstrated volume stability and source-specific leaching/runoff evidence; reference UUID never reused for slag/dross macadam |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received mass in kg for the selected stone grade, excluding packaging, other saleable grades and rejects. Measure wet-basis moisture w with 0 <= w < 1; dry solids = D*(1-w), retaining D as normalization denominator. Volume-based records require measured bulk density, compaction and moisture for that grade. Reconcile raw dry mineral solids, selected grade, other saleable grades, filter fines/slurry, stocks and releases. Return crusher oversize and captured dust internally without counting them as new resource, duplicated purchased feed or automatic avoided output. Reconcile new water, intrinsic moisture, internal circulation, evaporation and actual discharge separately. For industrial residues reconcile incoming dry residue plus stone/additives and actual hydration uptake against qualified macadam, recovered metal, rejects, stocks and releases. Conditioning hydration or actual carbonation can change dry mass; measure it and disclose any actual atmospheric-carbon transfer separately, without a guessed uptake or permanence credit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual natural rock/gravel deposit for integrated extraction, or supplied stone/gravel/offcuts with upstream burdens for standalone processing; industrial macadam begins with identified supplied residues and documented upstream burden/cut-off |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural pebbles/gravel; broken/crushed stone and unbound macadam; stone granules/chippings and stone powder, each with fixed origin, lithology, grading and processing gate; qualified unbound macadam of slag, dross or similar industrial residues with actual declared source/conditioning |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; geology and actual lithology; natural-gravel/quarry/offcut origin; integrated or supplied-feed start; actual crushing stages or dry/wet powder route; particle-size distribution, fines and shape; moisture/solids; quality specifications and impurity/mineral assays; net loading gate; stock/recycle; water basin and return; waste fate; allocation; lifetime development output; verified reference UUID only for compatible crushed stone 16/32, other grades require distinct flow identity; industrial-residue generating process and incoming status; metal recovery; cooling/aging water and stock period; actual free oxides/phase/mineral/metal assays; demonstrated volume stability and source-specific leaching/runoff evidence; reference UUID never reused for slag/dross macadam |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of natural pebbles/gravel, broken or crushed stone and unbound macadam stone, stone granules/chippings and mechanically produced stone powder at one declared loading gate. Cover terrestrial or permitted aquatic gravel extraction, hard-rock quarrying, standalone processing of burden-bearing stone/gravel and compatible dimension-stone offcuts. Distinguish natural-gravel separation, staged rock crushing/screening and optional dry/wet fine grinding/classification, wet beneficiation, concentration and actual drying. Include raw unprocessed gravel only with declared state; do not impose crushing on every gravel route or grinding/drying on every aggregate. Manufactured stone fines remain mechanically reduced stone, not natural sand. This product gate excludes pavement construction and binder mixing. Use actual lithology, provenance and market state, not a universal aggregate composition. Include attributable development/rehabilitation, handling/loading, water, dust and waste management. Industrial-residue macadam of identified slag, dross or similar industrial waste is also covered, with or without compatible stone fractions, when it is actually supplied as qualified unbound aggregate. Declare residue-generating industry/process, incoming waste versus co-product status, upstream allocation/cut-off, actual cooling/conditioning, metal recovery, stock residence, grading, volume stability and applicable environmental-quality evidence. Capture conditioning runoff and actual pollutant species. Do not transfer steel-slag aging/composition to other residues, assume all residues are usable, or infer avoided disposal/metals-production credit. Tarred macadam/binder mixtures and raw metallurgical slag supplied for a different purpose remain separate products. | `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`, `wco-hs25-2022`, `fhwa-steel-slag-97148` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Deposit development and rehabilitation | conditional | Integrated quarry/gravel extraction with attributable restoration | Foreground production | per 1 kg reference flow |
| extraction | Rock quarrying or natural-gravel extraction | conditional | Actual primary deposit extraction; gravel need not be blasted | Foreground production | per 1 kg reference flow |
| sizing | Crushing, screening and washing | conditional | Actual grade-producing operations; declare bypass and recirculation | Foreground production | per 1 kg reference flow |
| industrial | Industrial-residue conditioning and metal recovery | conditional | Only actual slag/dross/industrial-waste macadam route; natural stone routes bypass | Foreground production | per 1 kg reference flow |
| powder | Stone-powder grinding and conditioning | conditional | Only actual dry/wet stone-powder route | Foreground production | per 1 kg reference flow |
| controls | Dust, water and residue management | conditional | Actual control/management systems | Foreground production | per 1 kg reference flow |
| dispatch | Net accepted stone-product loading | required | All declared product gates | Foreground production | per 1 kg reference flow |

### Process: Deposit development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Development and rehabilitation diesel (`development_diesel`)

Actual stripping/restoration equipment; charge once over disclosed lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Stone-deposit overburden (`overburden`)

Actual removed cover; retained topsoil and habitat-specific land/aquatic transformation require separate records.

- Selected flow: Stone-deposit overburden
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Rock quarrying or natural-gravel extraction (`extraction`)

#### Inputs

##### Product flows

###### Extraction and haul diesel (`quarry_diesel`)

Actual quarry/excavation/dredging/haul machinery; delineate loading, pumping and downstream delivery boundaries.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_quarry_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quarry_diesel`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Drilling or extraction-pump electricity (`drill_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual metered electrical extraction equipment; separate each different metered exchange where needed.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_drill_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_power`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; nonblasted gravel excludes. Other actual explosives and detonators need separate chemical/product rows.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

##### Elementary flows

###### Granite resource (`granite_resource`)

Only actual granite primary quarrying. Other lithologies and natural gravel require their own actual resource identities, not this granite identity.

- Selected flow: granite `08a91e70-3ddc-11dd-9449-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_granite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_granite_resource`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Crushing, screening and washing (`sizing`)

#### Inputs

##### Product flows

###### Supplied raw stone feed (`supplied_stone`)

Only standalone hard-rock/offcut processing; identify actual lithology, state and supplier burdens. Gravel feed is separate.

- Selected flow: Supplied raw stone feed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_stone; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_stone`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Supplied natural gravel feed (`supplied_gravel`)

Only standalone natural-gravel processing with source/supplier burdens; cancel integrated internal transfer.

- Selected flow: Supplied natural gravel feed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_gravel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_gravel`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Rock-crushing electricity (`crusher_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crusher stages and recirculation, including manufactured stone fines; uncrushed natural gravel bypasses.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_crusher_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crusher_power`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Screening and washing electricity (`screen_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual screens/conveyors/wash/dewatering machines; allocate common meters once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_screen_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_screen_power`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Purchased stone-washing make-up water (`wash_water`)

Purchased new water only. Direct abstraction has its own resource and basin identity; recycled process water is internal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Stone-washing mineral slime (`wash_slime`)

Actual fine solids transferred to management; measured moisture/mineral state, not all stone fines automatically waste.

- Selected flow: Stone-washing mineral slime
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_slime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_slime`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Rejected stone pieces (`reject_stone`)

Actual rejected/unmarketable pieces; sold grades and internal crusher returns are excluded.

- Selected flow: Rejected stone pieces
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_reject_stone; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reject_stone`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Industrial-residue conditioning and metal recovery (`industrial`)

#### Inputs

##### Product flows

###### Supplied steel furnace slag co-product (`steel_slag_coproduct`)

Only actual burden-bearing co-product feed under declared generating-process allocation; do not also count the same slag as incoming waste.

- Selected flow: Supplied steel furnace slag co-product
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_slag_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_slag_coproduct`
- Sources: `fhwa-steel-slag-97148`

###### Residue-conditioning and metal-recovery electricity (`industrial_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual separators/conditioning equipment; crusher and screen meters remain separately attributed once. Other residue technologies need actual evidence.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_industrial_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_industrial_power`
- Sources: `fhwa-steel-slag-97148`

###### Purchased residue-conditioning make-up water (`conditioning_water`)

Actual new cooling/hydration/aging water; precipitation and recycled water recorded separately, no universal required amount or aging duration.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_conditioning_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_water`
- Sources: `fhwa-steel-slag-97148`

##### Waste flows

###### Incoming waste steel furnace slag (`steel_slag_waste`)

Only actual waste-classified steel furnace slag accepted for aggregate conditioning; document source and transfer. Co-product feed excludes this row.

- Selected flow: Incoming waste steel furnace slag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_steel_slag_waste; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steel_slag_waste`
- Sources: `fhwa-steel-slag-97148`

###### Incoming aluminum dross for macadam processing (`aluminum_dross`)

Only a documented eligible aluminum-dross macadam route with source-specific conditioning and quality evidence. This row does not establish suitability or steel-slag equivalence; other residues require separate identities.

- Selected flow: Incoming aluminum dross for macadam processing
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_aluminum_dross; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminum_dross`
- Sources: `wco-hs25-2022`

#### Outputs

##### Product flows

###### Recovered ferrous metallic scrap (`recovered_ferrous`)

Only actual qualified ferrous metal recovered from steel slag, measured separate from aggregate D. Other metals are separate outputs; no automatic substitution credit.

- Selected flow: Recovered ferrous metallic scrap
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_recovered_ferrous; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovered_ferrous`
- Sources: `fhwa-steel-slag-97148`

##### Waste flows

###### Rejected steel-slag mineral residue (`industrial_reject`)

Actual steel-slag reject sent to management; characterize actual composition/stability and fate. Other source-specific rejects require distinct rows.

- Selected flow: Rejected steel-slag mineral residue
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_industrial_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_industrial_reject`
- Sources: `fhwa-steel-slag-97148`

### Process: Stone-powder grinding and conditioning (`powder`)

#### Inputs

##### Product flows

###### Stone-grinding electricity (`grinding_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual dry/wet mills and classifiers, attributable to declared powder grade; no assumed grinding for coarse stone.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_grinding_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grinding_power`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Replacement steel grinding balls (`grinding_balls`)

Only actual steel-ball mills; record wear/replacement mass and steel type. Other grinding media/liners require individual rows.

- Selected flow: Replacement steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_grinding_balls; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grinding_balls`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Purchased wet-grinding make-up water (`wet_grind_water`)

Only actual new purchased water for wet powder processing, excluding recycled slurry. Each actual flotation reagent needs a named independent row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wet_grind_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wet_grind_water`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Stone-powder dryer natural gas (`dryer_natural_gas`)

Only actual natural-gas-fired drying; other actual fuel or purchased heat requires its own row, no generic drying burden.

- Selected flow: Stone-powder dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_natural_gas`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Stone-powder beneficiation reject (`powder_reject`)

Only actual separated impurity waste; assay mineralogy/reagent residues and actual fate. No default waste hazard.

- Selected flow: Stone-powder beneficiation reject
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_powder_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powder_reject`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Dust, water and residue management (`controls`)

#### Inputs

##### Product flows

###### Dust and water-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual baghouse fans/settlement/dewatering/recycle pumps; no duplicate process-meter charge.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Stone dust transferred to disposal (`filter_dust`)

Actual captured dust sent to management only. Internal return cancels; accepted sold powder has separate product identity/allocation.

- Selected flow: Stone dust transferred to disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_filter_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filter_dust`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Stone-process wastewater transferred for treatment (`wastewater`)

Actual purge/treatment transfer with measured volume/solids/chemistry; receiving-water discharge requires separate actual compartment/species exchanges.

- Selected flow: Stone-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

##### Elementary flows

###### Mineral PM10 to outdoor air (`pm10_air`)

Actual quarry/haul/crusher/screen/mill/dryer releases after controls, with particle and mineral composition; wet suppression does not justify zero.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Actual foreground combustion; use measured fuel/carbon and traceable factor. Mechanical carbonate crushing is not calcination.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Net accepted stone-product loading (`dispatch`)

#### Inputs

##### Product flows

###### Stone-product loading diesel (`loading_diesel`)

Actual final accepted-product loading, distinct from quarry handling and downstream haul outside gate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Product flows

###### Crushed stone 16/32 at supply gate (`final_product`)

Verified representative only for compatible crushed stone 16/32. Pebbles, gravel, macadam stone, other grades, granules/chippings and powder require distinct actual flow identities and reference descriptions. The crushed-stone reference identity cannot identify industrial-residue macadam; resolve its own actual product flow.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-crushed-stone-2004`, `epa-sand-gravel-1995`, `ifc-construction-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide gravel separation, each crushing/grinding route and grade-specific operations where practical. Retain unallocated inventory for jointly produced sieve grades and natural sand/gravel. Use demonstrated physical causality, with economic alternatives and sensitivity only when justified; the same as-received mass share can conceal moisture differences and needs disclosure. Offcut feed requires its supplier allocation/cut-off convention, not automatic zero burden. Attribute development and closure once over disclosed measured lifetime accepted output. Actual fines sold as stone powder have a declared product gate; disposal or internal return does not create an avoided-product credit. Industrial residue starts at a declared generating-process allocation/cut-off boundary with its actual transport, conditioning and quality-control burdens. Retain unallocated aggregate/metal recovery inventory and justify allocation; incoming waste does not remove foreground processing, and recovered metal does not automatically earn virgin-metal credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched-period net weighing and representative solids/moisture/composition sampling, or surveyed volume with measured bulk density. Reconcile stocks/internal return, sale versus disposal, actual transfer and management fate without duplicate material burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_granite_resource | extraction | `granite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_quarry_diesel | extraction | `quarry_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_drill_power | extraction | `drill_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_stone | sizing | `supplied_stone` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_gravel | sizing | `supplied_gravel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_crusher_power | sizing | `crusher_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_screen_power | sizing | `screen_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | sizing | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_slime | sizing | `wash_slime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched-period net weighing and representative solids/moisture/composition sampling, or surveyed volume with measured bulk density. Reconcile stocks/internal return, sale versus disposal, actual transfer and management fate without duplicate material burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_reject_stone | sizing | `reject_stone` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched-period net weighing and representative solids/moisture/composition sampling, or surveyed volume with measured bulk density. Reconcile stocks/internal return, sale versus disposal, actual transfer and management fate without duplicate material burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_grinding_power | powder | `grinding_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_grinding_balls | powder | `grinding_balls` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile purchased, installed, retired and retained ball stock with measured wear, steel type and actual lifetime grade output. Attribute replacement mass once; no universal media kg per tonne. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wet_grind_water | powder | `wet_grind_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_natural_gas | powder | `dryer_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_powder_reject | powder | `powder_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched-period net weighing and representative solids/moisture/composition sampling, or surveyed volume with measured bulk density. Reconcile stocks/internal return, sale versus disposal, actual transfer and management fate without duplicate material burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_filter_dust | controls | `filter_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Matched-period net weighing and representative solids/moisture/composition sampling, or surveyed volume with measured bulk density. Reconcile stocks/internal return, sale versus disposal, actual transfer and management fate without duplicate material burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_slag_waste | industrial | `steel_slag_waste` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_slag_coproduct | industrial | `steel_slag_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_aluminum_dross | industrial | `aluminum_dross` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_industrial_power | industrial | `industrial_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_conditioning_water | industrial | `conditioning_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovered_ferrous | industrial | `recovered_ferrous` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_industrial_reject | industrial | `industrial_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record generating industry/process, waste/co-product identity, source-separated net transfer, measured moisture/solids/metal/mineral/free-oxide composition, opening/closing stocks and actual conditioning/recovery records. Collect utility meters and water balance with matched residence period and demonstrated stability/grade and source-specific leaching/runoff evidence. Normalize attributable quantities to independently weighed accepted macadam D; document recovered metal and rejects separately. No assumed duration, density, chemistry, eligibility or recovery credit. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh positive accepted net loaded kg D by calibrated scale; reconcile stocks, returns, grade-specific dispatch and packaging subtraction. Match sieve/shape/mineral specification and measured wet-basis moisture. Volume sales require actual grade bulk density/compaction/moisture; never a universal stone density. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One specified lithology and pebble/gravel/crushed/ground grade, washed/unwashed or actually dried, with measured moisture at supply loading; industrial macadam fixes residue composition and qualified conditioned state | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received mass in kg for the selected stone grade, excluding packaging, other saleable grades and rejects. Measure wet-basis moisture w with 0 <= w < 1; dry solids = D*(1-w), retaining D as normalization denominator. Volume-based records require measured bulk density, compaction and moisture for that grade. Reconcile raw dry mineral solids, selected grade, other saleable grades, filter fines/slurry, stocks and releases. Return crusher oversize and captured dust internally without counting them as new resource, duplicated purchased feed or automatic avoided output. Reconcile new water, intrinsic moisture, internal circulation, evaporation and actual discharge separately. For industrial residues reconcile incoming dry residue plus stone/additives and actual hydration uptake against qualified macadam, recovered metal, rejects, stocks and releases. Conditioning hydration or actual carbonation can change dry mass; measure it and disclose any actual atmospheric-carbon transfer separately, without a guessed uptake or permanence credit. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received mass in kg for the selected stone grade, excluding packaging, other saleable grades and rejects. Measure wet-basis moisture w with 0 <= w < 1; dry solids = D*(1-w), retaining D as normalization denominator. Volume-based records require measured bulk density, compaction and moisture for that grade. Reconcile raw dry mineral solids, selected grade, other saleable grades, filter fines/slurry, stocks and releases. Return crusher oversize and captured dust internally without counting them as new resource, duplicated purchased feed or automatic avoided output. Reconcile new water, intrinsic moisture, internal circulation, evaporation and actual discharge separately. For industrial residues reconcile incoming dry residue plus stone/additives and actual hydration uptake against qualified macadam, recovered metal, rejects, stocks and releases. Conditioning hydration or actual carbonation can change dry mass; measure it and disclose any actual atmospheric-carbon transfer separately, without a guessed uptake or permanence credit. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg of qualified stone aggregate, stone powder or industrial-residue macadam at declared grading, moisture and quality; no universal end-use performance equivalence |
| excluded_use | Natural sand as reference; dimension-stone blocks/slabs; recycled concrete aggregate; artificial expanded lightweight aggregate and raw metallurgical slag not supplied as macadam; tarred macadam and binder-bound asphalt/concrete or installed macadam pavement; coated/chemically transformed fillers; calcined lime/cement and separate mineral product categories |
| required_metadata | site/year; geology and actual lithology; natural-gravel/quarry/offcut origin; integrated or supplied-feed start; actual crushing stages or dry/wet powder route; particle-size distribution, fines and shape; moisture/solids; quality specifications and impurity/mineral assays; net loading gate; stock/recycle; water basin and return; waste fate; allocation; lifetime development output; verified reference UUID only for compatible crushed stone 16/32, other grades require distinct flow identity; industrial-residue generating process and incoming status; metal recovery; cooling/aging water and stock period; actual free oxides/phase/mineral/metal assays; demonstrated volume stability and source-specific leaching/runoff evidence; reference UUID never reused for slag/dross macadam |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-crushed-stone-2004 | official_guidance | US EPA, AP-42 section 11.19.2 Crushed Stone Processing and Pulverized Mineral Processing, August 2004, original PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c11s1902.pdf | Quarry/crushing/screening and dry/wet stone-powder routes; qualitative process support only. |
| epa-sand-gravel-1995 | official_guidance | US EPA, AP-42 section 11.19.1 Sand and Gravel Processing, November 1995, original PDF pp.1–3. https://www.epa.gov/sites/default/files/2020-10/documents/c11s19-1.pdf | Natural gravel extraction, screening/washing and sand separation; no default quantities. |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | Quarry route, dust, water, waste and land scope; no universal consumption range. |
| wco-hs25-2022 | official_guidance | WCO, HS Nomenclature 2022 Chapter 25, original PDF p.3, heading 2517. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Industrial-residue macadam product identity; no new CPC correspondence, recipe or quantity evidence. |
| fhwa-steel-slag-97148 | official_guidance | FHWA, FHWA-RD-97-148 User Guidelines for Waste and Byproduct Materials in Pavement Construction, Steel Slag Material Description, archived page last modified 8 March 2016, Market Sources and Highway Uses/Processing Requirements. https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/97148/059.cfm | Steel-furnace slag segregation, metal recovery, conditioning and aggregate grading; historical qualitative support only, no standard duration, composition or current legal limits. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
