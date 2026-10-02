---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.chalk-and-dolomite
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Chalk and dolomite

## 1. Scope and Applicability

Supply of natural chalk and uncalcined, unsintered dolomite at one declared quarry, preparation/loading or explicitly included plant-receipt gate. Cover crude and actually washed, crushed, screened, ground, powdered or physically concentrated mineral grades retaining their natural carbonate identity, and raw dolomite roughly trimmed or merely cut into rectangular blocks/slabs. Include actual selective surface or independently confirmed underground extraction, supplied-mineral preparation, dry/wet grinding and classification, conditional washing/flotation or other physical purification, dewatering, free-moisture drying, handling and packaging. Processes are actual-route conditions, not a universal chalk or dolomite recipe. Raw geological mineral lots may be homogenized only while retaining the same confirmed mineral product identity; separately identify every supplied lot and exchange. Formulated blends, coatings, chemically precipitated calcium carbonate, chemically transformed carbonate/oxide products and writing/drawing/tailors/billiard chalk are different products. Calcined/sintered/agglomerated dolomite and dolime belong to a separate product category; CPC3 separately names calcinated or agglomerated dolomite. Do not enlarge this raw-mineral boundary because the full HS dolomite heading also mentions calcined material. Phosphatic chalk, general calcareous chemical-manufacture stone, building-stone or construction aggregate reference products use their confirmed specific category; actual aggregate co-output is weighed and allocated rather than double-counted as chalk/dolomite output. Include attributable development/rehabilitation, waste, dust and water controls through the declared gate. Chemical-industry, glass, agriculture, lime/cement and refractory use are downstream of mineral supply, not mandatory foreground operations. `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.chalk-and-dolomite |
| classification_refs | CPC 3.0:16330 |
| covered_products | Natural chalk and uncalcined/unsintered dolomite: actual crude, physically prepared or powdered grades; raw dolomite roughly trimmed or merely cut into rectangular blocks/slabs |
| excluded_products | Calcined/sintered/agglomerated dolomite or dolime, dolomite ramming mixes and refractory articles; quick/slaked/hydraulic lime and cement; precipitated or chemically transformed calcium carbonate, coated/formulated mineral products, writing/drawing/tailors/billiard chalk; phosphatic chalk; separately classified aggregate, dimension stone or general calcareous feed; downstream use and transport-only services |
| representative_product | Raw dolomite at compatible declared plant gate |
| production_route | Quarry development and rehabilitation; Raw chalk or dolomite extraction; Raw mineral mechanical preparation; Conditional wet mineral purification; Uncalcined mineral drying; Quarry water dust and waste control; Mineral packaging and declared delivery |
| market_state | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg accepted net as-received chalk or uncalcined dolomite at a declared mineral gate; a slurry states its solids fraction and is not1 kg pure dry carbonate or oxide |
| How much | 1 kg |
| How well | site/year; chalk or dolomite geological/mineral identity; actual quarry/underground/supplied-stock route; uncalcined phase and preparation; intended grade/product classification; particle size or block geometry; free moisture/slurry solids; dry-basis Ca/Mg carbonate and impurity assays with oxide-equivalent versus actual-oxide distinction; loss-on-ignition method; accepted output/stocks/returns; provider allocation; bagged or bulk; gate and explicitly included transport; water basin/discharge; waste fate and lifetime rehabilitation basis; representative UUID only compatible raw dolomite at a plant gate for glass-batch feed, not chalk or calcined dolomite |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; chalk or dolomite geological/mineral identity; actual quarry/underground/supplied-stock route; uncalcined phase and preparation; intended grade/product classification; particle size or block geometry; free moisture/slurry solids; dry-basis Ca/Mg carbonate and impurity assays with oxide-equivalent versus actual-oxide distinction; loss-on-ignition method; accepted output/stocks/returns; provider allocation; bagged or bulk; gate and explicitly included transport; water basin/discharge; waste fate and lifetime rehabilitation basis; representative UUID only compatible raw dolomite at a plant gate for glass-batch feed, not chalk or calcined dolomite |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging and rejects. Free-moisture mass fraction w has0 <= w <1; dry mineral solids = D*(1-w). For slurry measure dry solids fraction s with0 < s <=1 and dry solids = D*s; use one consistent free-water/solids basis, never both corrections. Retain D as inventory denominator and disclose dry-basis output as qualifier. Reconcile dry feed, all accepted grades/co-products, rejected fines, sludge, captured dust and stocks separately from new, recycled, evaporated and discharged water. Match actual carbonate phases and Ca/Mg/impurity assays on the same basis; reported CaO/MgO equivalents are not proof of free oxides or calcination. Loss-on-ignition includes potential carbonate decomposition and is not automatically moisture. Drying that changes carbonate identity requires product-boundary review and measured actual gases, not an assumed drying loss. Ordinary mechanical carbonate preparation produces no calcination CO2 or downstream carbonation credit; actual combustion, confirmed chemical loss or emissions are individually measured. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified chalk/dolomite geological deposit for integrated quarrying, or supplied raw mineral with independent upstream provider for standalone preparation; cancel internal quarry/plant transfers |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural chalk and uncalcined/unsintered dolomite: actual crude, physically prepared or powdered grades; raw dolomite roughly trimmed or merely cut into rectangular blocks/slabs |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; chalk or dolomite geological/mineral identity; actual quarry/underground/supplied-stock route; uncalcined phase and preparation; intended grade/product classification; particle size or block geometry; free moisture/slurry solids; dry-basis Ca/Mg carbonate and impurity assays with oxide-equivalent versus actual-oxide distinction; loss-on-ignition method; accepted output/stocks/returns; provider allocation; bagged or bulk; gate and explicitly included transport; water basin/discharge; waste fate and lifetime rehabilitation basis; representative UUID only compatible raw dolomite at a plant gate for glass-batch feed, not chalk or calcined dolomite |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of natural chalk and uncalcined, unsintered dolomite at one declared quarry, preparation/loading or explicitly included plant-receipt gate. Cover crude and actually washed, crushed, screened, ground, powdered or physically concentrated mineral grades retaining their natural carbonate identity, and raw dolomite roughly trimmed or merely cut into rectangular blocks/slabs. Include actual selective surface or independently confirmed underground extraction, supplied-mineral preparation, dry/wet grinding and classification, conditional washing/flotation or other physical purification, dewatering, free-moisture drying, handling and packaging. Processes are actual-route conditions, not a universal chalk or dolomite recipe. Raw geological mineral lots may be homogenized only while retaining the same confirmed mineral product identity; separately identify every supplied lot and exchange. Formulated blends, coatings, chemically precipitated calcium carbonate, chemically transformed carbonate/oxide products and writing/drawing/tailors/billiard chalk are different products. Calcined/sintered/agglomerated dolomite and dolime belong to a separate product category; CPC3 separately names calcinated or agglomerated dolomite. Do not enlarge this raw-mineral boundary because the full HS dolomite heading also mentions calcined material. Phosphatic chalk, general calcareous chemical-manufacture stone, building-stone or construction aggregate reference products use their confirmed specific category; actual aggregate co-output is weighed and allocated rather than double-counted as chalk/dolomite output. Include attributable development/rehabilitation, waste, dust and water controls through the declared gate. Chemical-industry, glass, agriculture, lime/cement and refractory use are downstream of mineral supply, not mandatory foreground operations. | `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Quarry development and rehabilitation | conditional | Attributable actual land/overburden infrastructure and closure | Foreground production | per 1 kg reference flow |
| extraction | Raw chalk or dolomite extraction | conditional | Actual identified geological extraction; blasting only when used | Foreground production | per 1 kg reference flow |
| preparation | Raw mineral mechanical preparation | conditional | Actual crushing/grinding/classification and conditional block trimming/sawing | Foreground production | per 1 kg reference flow |
| wet | Conditional wet mineral purification | conditional | Actual washing/levigation or physically separating impurities, retaining mineral structure; slurry gate stops before drying | Foreground production | per 1 kg reference flow |
| drying | Uncalcined mineral drying | conditional | Only actual removal of free water retaining raw carbonate identity | Foreground production | per 1 kg reference flow |
| controls | Quarry water dust and waste control | conditional | Actual treatment/release and residue management | Foreground production | per 1 kg reference flow |
| dispatch | Mineral packaging and declared delivery | required | Every declared output gate; packaging/receipt transport conditional | Foreground production | per 1 kg reference flow |

### Process: Quarry development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Quarry-development diesel (`development_diesel`)

Actual earthmoving/rehabilitation once over measured lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Raw chalk or dolomite extraction (`extraction`)

#### Inputs

##### Product flows

###### Quarry-extraction and onsite-haul diesel (`extraction_diesel`)

Actual drilling/digging/loading/onsite haul; no double gate delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_diesel`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Mineral-extraction electricity (`extraction_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual powered extraction/dewatering, and ventilation only for actual underground route.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; absent for nonblasted chalk/dolomite; detonators/other explosives separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### Elementary flows

###### Natural chalk in geological deposit (`chalk_resource`)

Actual chalk resource with measured carbonate and impurities; not precipitated calcium carbonate.

- Selected flow: Natural chalk in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_chalk_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chalk_resource`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Uncalcined dolomite rock in geological deposit (`dolomite_resource`)

Actual dolomite geology/phase, not every magnesium-bearing limestone.

- Selected flow: Uncalcined dolomite rock in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dolomite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dolomite_resource`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Rejected quarry mineral rock (`rejected_rock`)

Actual nonproduct reject with mineral content and fate, distinct from kept overburden/saleable grades.

- Selected flow: Rejected quarry mineral rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_rejected_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rejected_rock`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Raw mineral mechanical preparation (`preparation`)

#### Inputs

##### Product flows

###### Supplied natural chalk (`supplied_chalk`)

Standalone preparation with matched uncalcined provider grade, water/assay and upstream; internal transfers cancel.

- Selected flow: Supplied natural chalk
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_chalk; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_chalk`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Supplied raw dolomite for glass-batch feed (`supplied_dolomite`)

Only compatible raw dolomite Product/Mass plant state; database identity does not define purity or a glass recipe; other grades need own identities.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_dolomite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_dolomite`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Raw-mineral preparation electricity (`preparation_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crushing, dry/wet grinding, classification and conveying with meters attributed once; never assumed all circuits.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_preparation_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Raw-dolomite block-sawing electricity (`saw_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only rough trimming or simple rectangular-block/slab cutting; finished worked stone has another gate.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Diamond-segment saw blade (`diamond_saw_tool`)

Only actual consumed block-cutting tool; other tools/segments each separate actual exchange.

- Selected flow: Diamond-segment saw blade
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_saw_tool; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_saw_tool`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Steel grinding balls (`grinding_balls`)

Only actual consumed mineral grinding balls; other media/liners separately.

- Selected flow: Steel grinding balls
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_grinding_balls; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grinding_balls`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### Outputs

##### Product flows

###### Saleable dolomite construction aggregate (`aggregate_coproduct`)

Only separately recovered/weighed specification-confirmed aggregate co-output with distinct category/provider allocation.

- Selected flow: Saleable dolomite construction aggregate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_aggregate_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aggregate_coproduct`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Conditional wet mineral purification (`wet`)

#### Inputs

##### Product flows

###### Purchased wet-preparation make-up water (`wet_water`)

Actual new purchased wash/grinding/saw-cooling water attributed by use; exclude internal reuse.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wet_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wet_water`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Wet-mineral purification and dewatering electricity (`wet_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual washing/levigation/flotation/thickening/filtration circuit; dry-only or slurry-before-drying gate excludes absent units.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_wet_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wet_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Oleic acid collector (`oleic_acid`)

Only actual confirmed oleic-acid physical mineral flotation; not universal carbonate reagent; every other used reagent its own row.

- Selected flow: Oleic acid collector
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_oleic_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oleic_acid`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Sodium silicate dispersant (`sodium_silicate`)

Only actual named supplier formulation retaining mineral identity; other dispersants each separate.

- Selected flow: Sodium silicate dispersant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_silicate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_silicate`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Anionic polyacrylamide flocculant (`polyacrylamide`)

Only actual specified thickening/settling polymer with active fraction; not assumed necessary.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Carbonate-mineral wet-preparation reject sludge (`wet_sludge`)

Actual final transferred washing/flotation/saw sludge with solids/phase and fate; internal recovery not waste transfer.

- Selected flow: Carbonate-mineral wet-preparation reject sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wet_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wet_sludge`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Uncalcined mineral drying (`drying`)

#### Inputs

##### Product flows

###### Raw-mineral dryer natural gas (`dryer_natural_gas`)

Only actual gas-fired free-water drying preserving carbonate phase; other fuel/heat sources each separate.

- Selected flow: Raw-mineral dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_natural_gas`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Raw-mineral dryer electricity (`dryer_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual dryer/fan within raw mineral gate; no dolomite kiln or lime-calcination power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Quarry water dust and waste control (`controls`)

#### Inputs

##### Product flows

###### Mineral water and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drainage/reclaim/treatment/dust control; avoid duplicated preparation meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### Elementary flows

###### Fresh water abstracted from river (`river_water`)

Actual direct river intake with basin/season and matched site use; groundwater separate if used.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Disposed carbonate-mineral collector dust (`collector_dust`)

Actual captured dust disposal, distinct from returned/saleable mineral.

- Selected flow: Disposed carbonate-mineral collector dust
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Mineral-preparation wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer; receiving-water volume and pollutant separately measured.

- Selected flow: Mineral-preparation wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

##### Elementary flows

###### Carbonate-mineral PM10 released to outdoor air (`pm10_air`)

Actual controlled mine/plant/loading releases with particle-size and compartment; captured dust is not emission.

- Selected flow: Carbonate-mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground fossil-fuel combustion, not carbonate calcination; upstream combustion counted once.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Suspended mineral solids released to receiving water (`tss_water`)

Only actual receiving-compartment TSS discharge, matched background and net water volume; managed sludge not automatically release.

- Selected flow: Suspended mineral solids released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

### Process: Mineral packaging and declared delivery (`dispatch`)

#### Inputs

##### Product flows

###### Mineral gate-handling diesel (`loading_diesel`)

Actual gate loading/handling distinct from onsite haul and delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Included mineral-delivery diesel (`delivery_diesel`)

Only actual foreground delivery expressly inside receipt gate; provider transport separately without duplicated fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

###### Kraft paper mineral bag (`paper_bag`)

Only actual consumed kraft paper packaging excluding product net mass; plastic bag/liner/pallet each separate if used.

- Selected flow: Kraft paper mineral bag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_paper_bag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paper_bag`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

#### Outputs

##### Product flows

###### Raw dolomite at compatible declared plant gate (`final_product`)

Representative verified Dolomite / 白云石 Product/Mass, production mix at plant, raw material input to glass batch. Use only compatible raw-mineral plant loading/receipt gate, with delivery if included. Chalk, other raw grades, slurry and raw blocks need their own confirmed identities. Do not reuse this UUID for calcined dolime or impose a glass formula.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `bgs-dolomite-2006`, `bgs-limestone-2006`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-construction-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide actual mining benches, raw-block sawing, powder preparation and independently handled grades. Retain unallocated joint mineral/aggregate/other recovered-product inventories; use measured physical causality or matched economic allocation and price sensitivity if necessary. Quality rejected for industrial use may be accepted aggregate or aglime only with confirmed specification/fate, not automatically waste or free co-product. Attribute supplier and old-stock upstream burdens or justified cut-off and actual rehabilitation; allocate lifetime development/closure once over measured accepted output. No automatic avoided virgin mineral, disposal or future carbon-uptake credits. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_chalk_resource | extraction | `chalk_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dolomite_resource | extraction | `dolomite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_diesel | extraction | `extraction_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rejected_rock | extraction | `rejected_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_chalk | preparation | `supplied_chalk` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_dolomite | preparation | `supplied_dolomite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_preparation_power | preparation | `preparation_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_power | preparation | `saw_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_saw_tool | preparation | `diamond_saw_tool` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_grinding_balls | preparation | `grinding_balls` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_aggregate_coproduct | preparation | `aggregate_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wet_water | wet | `wet_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wet_power | wet | `wet_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_oleic_acid | wet | `oleic_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and reuse. Product and active-chemical masses use measured conversion, no pooled reagent or imposed recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_silicate | wet | `sodium_silicate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and reuse. Product and active-chemical masses use measured conversion, no pooled reagent or imposed recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | wet | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record actual individual supplier formulation, active fraction, consumed mass, dilution water and matched circuit/period; reconcile stocks and reuse. Product and active-chemical masses use measured conversion, no pooled reagent or imposed recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wet_sludge | wet | `wet_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_natural_gas | drying | `dryer_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_power | drying | `dryer_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | controls | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match calibrated net wet/dry mineral mass, free moisture or slurry solids, mineral phases and dry-basis Ca/Mg carbonate/impurity assays for the same batches and period; reconcile stocks, internal recovery and actual provider/fate. Distinguish oxide-equivalent analytical reporting from free oxides, loss-on-ignition from free water, accepted co-product from waste; no purity or yield default. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair measured net receiving-water discharge m3 and matched TSS concentration mg/L: solids kg = concentration mg/L * volume m3 /1000. Preserve background/reference water, mineral composition, compartment, same period and uncertainty; distinguish untreated sludge transfer and dissolved pollutants, each actual additional species its own row. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_paper_bag | dispatch | `paper_bag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated independent net weighing of positive accepted as-received mineral kg D at selected gate, excluding packaging/rejects/returns and adjusting stocks. Match phase and batch free moisture w or independently measured slurry solids s; dry mass D*(1-w) or D*s, never both. Retain D denominator, carbonate phase, dry-basis Ca/Mg/impurity assays and raw plant-gate state. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted uncalcined natural chalk or dolomite mineral grade, dry granular/powder, raw block/slab or expressly declared aqueous mineral slurry, with measured net mineral solids, free water, carbonate phase and gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging and rejects. Free-moisture mass fraction w has0 <= w <1; dry mineral solids = D*(1-w). For slurry measure dry solids fraction s with0 < s <=1 and dry solids = D*s; use one consistent free-water/solids basis, never both corrections. Retain D as inventory denominator and disclose dry-basis output as qualifier. Reconcile dry feed, all accepted grades/co-products, rejected fines, sludge, captured dust and stocks separately from new, recycled, evaporated and discharged water. Match actual carbonate phases and Ca/Mg/impurity assays on the same basis; reported CaO/MgO equivalents are not proof of free oxides or calcination. Loss-on-ignition includes potential carbonate decomposition and is not automatically moisture. Drying that changes carbonate identity requires product-boundary review and measured actual gases, not an assumed drying loss. Ordinary mechanical carbonate preparation produces no calcination CO2 or downstream carbonation credit; actual combustion, confirmed chemical loss or emissions are individually measured. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received mineral-product kg at the stated gate, excluding packaging and rejects. Free-moisture mass fraction w has0 <= w <1; dry mineral solids = D*(1-w). For slurry measure dry solids fraction s with0 < s <=1 and dry solids = D*s; use one consistent free-water/solids basis, never both corrections. Retain D as inventory denominator and disclose dry-basis output as qualifier. Reconcile dry feed, all accepted grades/co-products, rejected fines, sludge, captured dust and stocks separately from new, recycled, evaporated and discharged water. Match actual carbonate phases and Ca/Mg/impurity assays on the same basis; reported CaO/MgO equivalents are not proof of free oxides or calcination. Loss-on-ignition includes potential carbonate decomposition and is not automatically moisture. Drying that changes carbonate identity requires product-boundary review and measured actual gases, not an assumed drying loss. Ordinary mechanical carbonate preparation produces no calcination CO2 or downstream carbonation credit; actual combustion, confirmed chemical loss or emissions are individually measured. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg accepted net as-received chalk or uncalcined dolomite at a declared mineral gate; a slurry states its solids fraction and is not1 kg pure dry carbonate or oxide |
| excluded_use | Calcined/sintered/agglomerated dolomite or dolime, dolomite ramming mixes and refractory articles; quick/slaked/hydraulic lime and cement; precipitated or chemically transformed calcium carbonate, coated/formulated mineral products, writing/drawing/tailors/billiard chalk; phosphatic chalk; separately classified aggregate, dimension stone or general calcareous feed; downstream use and transport-only services |
| required_metadata | site/year; chalk or dolomite geological/mineral identity; actual quarry/underground/supplied-stock route; uncalcined phase and preparation; intended grade/product classification; particle size or block geometry; free moisture/slurry solids; dry-basis Ca/Mg carbonate and impurity assays with oxide-equivalent versus actual-oxide distinction; loss-on-ignition method; accepted output/stocks/returns; provider allocation; bagged or bulk; gate and explicitly included transport; water basin/discharge; waste fate and lifetime rehabilitation basis; representative UUID only compatible raw dolomite at a plant gate for glass-batch feed, not chalk or calcined dolomite |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bgs-dolomite-2006 | official_guidance | BGS, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Dolomite, January2006, original PDF pp.6–7. https://nora.nerc.ac.uk/id/eprint/534435/1/mpf_dolomite.pdf | Qualitative selective quarrying, raw crushing/screening/grading/handling, joint grades and distinction from calcined dolime and refractory products; no historical temperatures, yields, grade limits or market statistics. |
| bgs-limestone-2006 | official_guidance | BGS, Harrison, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Limestone, January2006, original PDF p.1 and pp.6–7. https://nora.nerc.ac.uk/id/eprint/534436/1/mpf_limestone.pdf | Natural chalk carbonate identity; actual quarrying/crushing/grinding/classification versus separate lime calcination; no universal chalk purity, size or recipe. |
| epa-crushed-stone-2004 | official_guidance | US EPA, AP-42 Section11.19.2 Crushed Stone Processing and Pulverized Mineral Processing, August2004, original PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c11s1902.pdf | Actual carbonate-rock preparation, dry/wet mineral grinding/classification and dust/water controls, conditional on site route; no historic size, capacity or emission-factor defaults. |
| wco-hs25-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF pp.1–4, Notes1–3 and headings2509/2510/2517/2518/2522. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Product-state and raw/calcined dolomite distinction; natural chalk versus phosphatic chalk, articles and aggregate gate; no new HS mapping or process quantity. |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | Quarry route, dust, water, waste and land scope; no universal consumption range. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
