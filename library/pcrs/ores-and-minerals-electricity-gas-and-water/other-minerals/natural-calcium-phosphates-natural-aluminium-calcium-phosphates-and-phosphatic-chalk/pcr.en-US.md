---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.natural-calcium-phosphates-natural-aluminium-calcium-phosphates-and-phosphatic-chalk
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural calcium phosphates, natural aluminium calcium phosphates and phosphatic chalk

## 1. Scope and Applicability

Supply all three natural mineral families: natural calcium phosphates (including geologically confirmed apatite-bearing phosphate rock), natural aluminium calcium phosphates, and phosphatic chalk, in crude, washed, physically concentrated, ground or powdered form at one declared extraction, preparation/loading or expressly included receipt gate. Each dataset fixes one actual family, geological mineral assemblage, grade, route and accepted physical output; the phosphate-ore representative does not narrow this category or silently represent its other families. Integrated surface or underground extraction is conditional; standalone preparation starts from independently identified supplied natural mineral or qualified geological tailings with documented upstream burdens. Calcium-phosphate rock may be loaded directly or conditionally crushed, ground, screened, washed/deslimed, physically separated by gravity/magnetic/flotation, dewatered and free-water dried. Natural aluminium-calcium phosphate requires its own mineralogical identification (hydrated crandallite is an example, not all material or pure formula mass), actual weathered-rock/nodule/vein extraction or supplied feed, sorting, disaggregation/grinding and conditional washing or physical separation with phase preservation. Phosphatic chalk requires confirmed naturally phosphatic chalk and measured carbonate/phosphate assemblage; actual selective extraction or supplied chalk, disaggregation, washing/levigation, screening/grinding and conditional dewatering/free-water drying are documented independently. Do not impose the sedimentary US phosphate-rock flotation sequence on aluminium-calcium minerals or chalk. These latter routes are foreground collection alternatives, not externally established industry recipes. Chemical impurity washing qualifies only when it preserves mineral structure; record each actual reagent, dissolution loss and wastewater individually. Drying must remove free water while preserving the declared natural phases; crystal water and hydroxyl loss are not assumed moisture. Roasting, calcination, acidulation/leaching that transforms phosphate identity, synthetic/precipitated phosphates, phosphoric acid, elemental phosphorus, manufactured fertilizer/feed additive and downstream products are separate gates. Ordinary nonphosphatic chalk, carbonate products merely containing incidental phosphorus and finished chalk articles do not enter automatically. Include actual mine development/closure, water and waste management, dust, attributable infrastructure, storage losses and declared transport through the gate; never assume zero wet-route emissions or universal radioactivity. `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.natural-calcium-phosphates-natural-aluminium-calcium-phosphates-and-phosphatic-chalk |
| classification_refs | CPC 3.0:16110 |
| covered_products | Natural calcium phosphate rock/mineral, natural aluminium calcium phosphate mineral and phosphatic chalk; crude or physically prepared accepted ore/concentrate/powder grades retaining natural phosphate identity |
| excluded_products | Calcined/roasted or chemically transformed mineral, synthetic/precipitated phosphate salts, phosphoric acid, elemental phosphorus, manufactured fertilizers and feed additives; ordinary nonphosphatic chalk, incidental-P carbonate outside confirmed category, finished chalk/stone articles and downstream manufacturing or transport-only services |
| representative_product | Compatible feed-grade natural phosphate ore at plant |
| production_route | Mine development and rehabilitation; Natural phosphate mineral extraction; Family-specific mineral preparation; Conditional physical mineral recovery; Phase-preserving free-water drying; Mineral water dust and tailings control; Accepted mineral handling and declared delivery |
| market_state | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg accepted net as-received natural phosphate mineral of one declared family/grade/gate; contained P or analytical P2O5 equivalent is a qualifier, not1 kg pure P, P2O5 or fertilizer |
| How much | 1 kg |
| How well | site/year; actual one of all three mineral families; deposit/provider, mineral phases and natural uncalcined state; raw/physical preparation route and actual units; free water versus crystal water/hydroxyls; dry-basis elemental P versus explicitly labelled P2O5-equivalent assay and Ca/Al/carbonate/Fe/Mg/F/other relevant impurity assays; actual feed/product/tails masses, stock and recovery; accepted use/size/grade and gate; water basin, waste/discharge and relevant radiological screening; joint outputs/allocation; lifetime development/closure; packaging/transport. Representative Phosphate Ore Product/Mass is production mix at plant, feed-grade: only compatible natural mineral grade/gate, not permission to use all mined ore as animal feed or universal identity for aluminium-calcium phosphate/phosphatic chalk |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Phosphate Ore `2d7ed513-8efd-4a7b-9c21-50889bbcb9f1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; actual one of all three mineral families; deposit/provider, mineral phases and natural uncalcined state; raw/physical preparation route and actual units; free water versus crystal water/hydroxyls; dry-basis elemental P versus explicitly labelled P2O5-equivalent assay and Ca/Al/carbonate/Fe/Mg/F/other relevant impurity assays; actual feed/product/tails masses, stock and recovery; accepted use/size/grade and gate; water basin, waste/discharge and relevant radiological screening; joint outputs/allocation; lifetime development/closure; packaging/transport. Representative Phosphate Ore Product/Mass is production mix at plant, feed-grade: only compatible natural mineral grade/gate, not permission to use all mined ore as animal feed or universal identity for aluminium-calcium phosphate/phosphatic chalk |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received natural mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w,0 <= w <1: dry mineral mass = D*(1-w). For declared slurry use independently measured dry-mineral solids fraction s,0 < s <=1: dry mass = D*s, not both corrections. Crystal water/hydroxyls belonging to hydrated phases remain part of mineral mass; loss-on-ignition includes other losses and is not automatically free water. Laboratory free-water protocol must preserve confirmed phases and disclose method. Measured dry-basis elemental phosphorus fraction gP,0 <= gP <=1, gives contained P = dry mineral mass*gP. If reporting analytical P2O5 equivalent, declare fraction gE and molar-mass convention: gP = gE*(2*M(P)/M(P2O5)); inverse gE = gP*M(P2O5)/(2*M(P)). P2O5-equivalent is not free oxide, pure apatite, plant availability or an identical P mass. Use consistent laboratory atomic masses; no fixed assay or conversion from product name. Keep D denominator. Reconcile dry mineral, P, relevant Ca/Al/carbonate/F and impurities across feed, all accepted grades/co-products, rejects, tailings, captured dust, stock and measured dissolution/release losses. Recovery = matched output dry mass*gP / matched input dry mass*gP after stock reconciliation, never output grade alone. Account separately for reagent-introduced phosphorus, water makeup/reuse/evaporation/discharge and actual carbonate/phase changes; no assumed acid-production yield, calcination CO2 or fertilizer credit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual identified geological natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk deposit for integrated extraction; independently supplied named mineral or actually waste-classified geological tailings for standalone preparation; record upstream/cut-off and cancel internal transfers |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural calcium phosphate rock/mineral, natural aluminium calcium phosphate mineral and phosphatic chalk; crude or physically prepared accepted ore/concentrate/powder grades retaining natural phosphate identity |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; actual one of all three mineral families; deposit/provider, mineral phases and natural uncalcined state; raw/physical preparation route and actual units; free water versus crystal water/hydroxyls; dry-basis elemental P versus explicitly labelled P2O5-equivalent assay and Ca/Al/carbonate/Fe/Mg/F/other relevant impurity assays; actual feed/product/tails masses, stock and recovery; accepted use/size/grade and gate; water basin, waste/discharge and relevant radiological screening; joint outputs/allocation; lifetime development/closure; packaging/transport. Representative Phosphate Ore Product/Mass is production mix at plant, feed-grade: only compatible natural mineral grade/gate, not permission to use all mined ore as animal feed or universal identity for aluminium-calcium phosphate/phosphatic chalk |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply all three natural mineral families: natural calcium phosphates (including geologically confirmed apatite-bearing phosphate rock), natural aluminium calcium phosphates, and phosphatic chalk, in crude, washed, physically concentrated, ground or powdered form at one declared extraction, preparation/loading or expressly included receipt gate. Each dataset fixes one actual family, geological mineral assemblage, grade, route and accepted physical output; the phosphate-ore representative does not narrow this category or silently represent its other families. Integrated surface or underground extraction is conditional; standalone preparation starts from independently identified supplied natural mineral or qualified geological tailings with documented upstream burdens. Calcium-phosphate rock may be loaded directly or conditionally crushed, ground, screened, washed/deslimed, physically separated by gravity/magnetic/flotation, dewatered and free-water dried. Natural aluminium-calcium phosphate requires its own mineralogical identification (hydrated crandallite is an example, not all material or pure formula mass), actual weathered-rock/nodule/vein extraction or supplied feed, sorting, disaggregation/grinding and conditional washing or physical separation with phase preservation. Phosphatic chalk requires confirmed naturally phosphatic chalk and measured carbonate/phosphate assemblage; actual selective extraction or supplied chalk, disaggregation, washing/levigation, screening/grinding and conditional dewatering/free-water drying are documented independently. Do not impose the sedimentary US phosphate-rock flotation sequence on aluminium-calcium minerals or chalk. These latter routes are foreground collection alternatives, not externally established industry recipes. Chemical impurity washing qualifies only when it preserves mineral structure; record each actual reagent, dissolution loss and wastewater individually. Drying must remove free water while preserving the declared natural phases; crystal water and hydroxyl loss are not assumed moisture. Roasting, calcination, acidulation/leaching that transforms phosphate identity, synthetic/precipitated phosphates, phosphoric acid, elemental phosphorus, manufactured fertilizer/feed additive and downstream products are separate gates. Ordinary nonphosphatic chalk, carbonate products merely containing incidental phosphorus and finished chalk articles do not enter automatically. Include actual mine development/closure, water and waste management, dust, attributable infrastructure, storage losses and declared transport through the gate; never assume zero wet-route emissions or universal radioactivity. | `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and rehabilitation | conditional | Actual attributable development and closure | Foreground production | per 1 kg reference flow |
| extraction | Natural phosphate mineral extraction | conditional | Actual identified family/deposit; no new mining for supplied-feed-only route | Foreground production | per 1 kg reference flow |
| preparation | Family-specific mineral preparation | conditional | Actual disaggregation crushing grinding screening or sorting matched to each family | Foreground production | per 1 kg reference flow |
| recovery | Conditional physical mineral recovery | conditional | Only actual wash/desliming/levigation gravity magnetic flotation and dewatering preserving phases; no universal recipe | Foreground production | per 1 kg reference flow |
| drying | Phase-preserving free-water drying | conditional | Only actual free-water drying; no calcination or dehydroxylation | Foreground production | per 1 kg reference flow |
| controls | Mineral water dust and tailings control | conditional | Actual control treatment and environmental releases | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral handling and declared delivery | required | Every output gate; actual packaging and receipt transport conditional | Foreground production | per 1 kg reference flow |

### Process: Mine development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Phosphate-mine development diesel (`development_diesel`)

Actual development/rehabilitation allocated once over lifetime accepted output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Natural phosphate mineral extraction (`extraction`)

#### Inputs

##### Product flows

###### Mineral extraction and onsite-haul diesel (`mining_diesel`)

Actual digging/loading/haul distinct from gate delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Natural phosphate mineral extraction electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling/pumping/conveying and only actual underground ventilation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; soft chalk/weathered deposits need not be blasted; other explosives each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Natural calcium-phosphate rock in geological deposit (`calcium_phosphate_resource`)

Only actual natural calcium-phosphate family, phase/assay confirmed; product ore is not geological resource.

- Selected flow: Natural calcium-phosphate rock in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_calcium_phosphate_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_calcium_phosphate_resource`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Natural aluminium-calcium-phosphate mineral in geological deposit (`aluminium_calcium_phosphate_resource`)

Only actual Ca-Al phosphate family confirmed by mineralogy, not any aluminium-bearing apatite or pure crandallite assumption.

- Selected flow: Natural aluminium-calcium-phosphate mineral in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_aluminium_calcium_phosphate_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_calcium_phosphate_resource`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Natural phosphatic chalk in geological deposit (`phosphatic_chalk_resource`)

Only confirmed naturally phosphatic chalk with measured phosphate/carbonate phases and dry assays.

- Selected flow: Natural phosphatic chalk in geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_phosphatic_chalk_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_phosphatic_chalk_resource`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected phosphate-mine rock (`waste_rock`)

Actual nonproduct rock with P/carbonate/impurity and fate, not automatically saleable grade.

- Selected flow: Rejected phosphate-mine rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Family-specific mineral preparation (`preparation`)

#### Inputs

##### Product flows

###### Supplied natural calcium-phosphate mineral (`supplied_calcium_phosphate`)

Only actual independently supplied natural calcium-phosphate grade with provider/state/assay; internal transfers cancel.

- Selected flow: Supplied natural calcium-phosphate mineral
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_calcium_phosphate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_calcium_phosphate`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied natural aluminium-calcium-phosphate mineral (`supplied_aluminium_calcium_phosphate`)

Only actual independently supplied Ca-Al phosphate assemblage; confirm hydrated phases and own flow identity.

- Selected flow: Supplied natural aluminium-calcium-phosphate mineral
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_aluminium_calcium_phosphate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_aluminium_calcium_phosphate`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied natural phosphatic chalk (`supplied_phosphatic_chalk`)

Only actual independently supplied phosphatic chalk; ordinary chalk and incidental phosphorus are not enough.

- Selected flow: Supplied natural phosphatic chalk
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_phosphatic_chalk; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_phosphatic_chalk`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Natural-mineral preparation electricity (`preparation_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual sorting/disaggregation/crushing/grinding/screening with family-specific meters; all units not mandatory.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_preparation_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation_power`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

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
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

##### Waste flows

###### Old natural-phosphate beneficiation tailings (`old_tailings`)

Only actual waste-classified geological tails, matched mineral family, upstream/cut-off and recovery; not phosphogypsum or chemical process residue.

- Selected flow: Old natural-phosphate beneficiation tailings
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_old_tailings; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_old_tailings`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Conditional physical mineral recovery (`recovery`)

#### Inputs

##### Product flows

###### Physical phosphate-mineral recovery electricity (`recovery_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual family-specific washing/levigation/desliming/physical separation/thickening/filtering, not a universal flotation route.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_recovery_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_recovery_power`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Purchased mineral-recovery make-up water (`makeup_water`)

Actual new purchased circuit water; internal reuse is not external supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_makeup_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_makeup_water`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Oleic acid collector (`oleic_acid`)

Only actual chemically confirmed physical-flotation reagent and active content; no universal mineral-family recipe.

- Selected flow: Oleic acid collector
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_oleic_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_oleic_acid`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sodium silicate dispersant (`sodium_silicate`)

Only actual confirmed formulation preserving natural mineral phase; other agents each separate.

- Selected flow: Sodium silicate dispersant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_silicate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_silicate`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Anionic polyacrylamide flocculant (`polyacrylamide`)

Only actual specified settling/thickening polymer with active fraction; never assumed required.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyacrylamide; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyacrylamide`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Saleable recovered quartz sand (`sand_coproduct`)

Only actual independently weighed specification-confirmed sand co-output, not all separated silica.

- Selected flow: Saleable recovered quartz sand
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sand_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sand_coproduct`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Saleable recovered natural calcium carbonate mineral (`carbonate_coproduct`)

Only actual separated weighed carbonate co-output with separate category/provider; carbonate within chalk is not second output.

- Selected flow: Saleable recovered natural calcium carbonate mineral
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_carbonate_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carbonate_coproduct`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

##### Waste flows

###### Natural-phosphate mineral reject tailings slurry (`tailings_slurry`)

Actual final unrecovered mineral tails with dry solids/phases/P and fate; internal middlings/reuse cancel.

- Selected flow: Natural-phosphate mineral reject tailings slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tailings_slurry; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tailings_slurry`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Phase-preserving free-water drying (`drying`)

#### Inputs

##### Product flows

###### Phase-preserving mineral dryer natural gas (`dryer_gas`)

Only actual gas-fired removal of free water preserving natural phosphate/hydrated/carbonate phases; other fuels or heat each separate.

- Selected flow: Phase-preserving mineral dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_gas`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Free-water mineral dryer electricity (`dryer_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual dryer/fan within natural mineral gate; no calciner, acidulation or dehydroxylation power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_power`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Mineral water dust and tailings control (`controls`)

#### Inputs

##### Product flows

###### Mineral water and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual tailings drainage/reclaim/treatment/dust control; avoid repeated processing meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Fresh water abstracted from river (`river_water`)

Actual basin/season river intake; groundwater separately if used.

- Selected flow: Fresh water abstracted from river
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Disposed natural-phosphate collector dust (`collector_dust`)

Actual captured dust disposal; distinguish recovered/saleable mineral and emitted dust.

- Selected flow: Disposed natural-phosphate collector dust
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-preparation wastewater transferred for treatment (`wastewater`)

Actual external treatment transfer; direct receiving-water release is separate.

- Selected flow: Mineral-preparation wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Natural-phosphate mineral PM10 released to outdoor air (`pm10_air`)

Actual after-control dust with particle size/mineral/impurity/compartment; captured tails not emissions.

- Selected flow: Natural-phosphate mineral PM10 released to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide released to outdoor air (`co2_air`)

Actual foreground fossil-fuel combustion, not assumed phosphate/chalk calcination; upstream counted once.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Dissolved orthophosphate on phosphate-ion mass basis released to receiving water (`dissolved_p_water`)

Only actually measured and speciated dissolved orthophosphate in net receiving-water discharge, reported on a declared PO4 phosphate-ion mass basis. Dissolved total P is not assumed orthophosphate; other dissolved P species, suspended mineral P and their identities are recorded separately.

- Selected flow: Dissolved orthophosphate on phosphate-ion mass basis released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dissolved_p_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dissolved_p_water`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Dissolved fluoride ion released to receiving water (`fluoride_water`)

Only actual measured fluoride/net receiving volume/background and compartment; mineral-bound F not automatically release.

- Selected flow: Dissolved fluoride ion released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_fluoride_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluoride_water`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Suspended mineral solids released to receiving water (`tss_water`)

Only actual receiving-water TSS discharge with mineral composition; managed tailings are not release.

- Selected flow: Suspended mineral solids released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_tss_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tss_water`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Accepted mineral handling and declared delivery (`dispatch`)

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
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Included natural-mineral delivery diesel (`delivery_diesel`)

Only actual expressly included receipt-gate foreground delivery; supplier transport separately without double fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

###### Woven polypropylene mineral bag (`pp_bag`)

Only actual consumed bag excluding mineral net D; each other liner/pallet/package separately.

- Selected flow: Woven polypropylene mineral bag
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pp_bag; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pp_bag`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Compatible feed-grade natural phosphate ore at plant (`final_product`)

Representative verified Phosphate Ore / 磷矿石 Product/Mass is production mix at plant, feed-grade. Use only a natural untransformed mineral with compatible independently confirmed grade/state/gate; this does not attest feed safety or impose feed use. Other calcium-phosphate grades, aluminium-calcium phosphates and phosphatic chalk require their own confirmed product flow before completed dataset use; never reuse generic ore for transformed feed phosphate.

- Selected flow: Phosphate Ore `2d7ed513-8efd-4a7b-9c21-50889bbcb9f1`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-phosphate-1993`, `museum-crandallite-2026`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide actual mineral-family extraction and independent ore preparation/accepted-grade circuits. Retain unallocated joint phosphate, saleable sand/carbonate and other actual co-products; demonstrate physical causality or use matched specification/price/period economic allocation with sensitivity. P and carbonate within one phosphatic-chalk product are compositional qualifiers, not simultaneous separate outputs. Recovered sand or carbonate is a co-product only with actual specification, separate mass and fate; rejected sludge is not automatically fertilizer or construction product. Supplied ore and old-tailings upstream allocation/cut-off require durable justification and actual recovery/rehabilitation burdens. Attribute development and closure once over measured lifetime accepted output. No automatic avoided fertilizer, phosphoric acid, virgin ore, tailings disposal or recycled-water credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_calcium_phosphate_resource | extraction | `calcium_phosphate_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_aluminium_calcium_phosphate_resource | extraction | `aluminium_calcium_phosphate_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_phosphatic_chalk_resource | extraction | `phosphatic_chalk_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_calcium_phosphate | preparation | `supplied_calcium_phosphate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_aluminium_calcium_phosphate | preparation | `supplied_aluminium_calcium_phosphate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_phosphatic_chalk | preparation | `supplied_phosphatic_chalk` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_old_tailings | preparation | `old_tailings` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_preparation_power | preparation | `preparation_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_steel_media | preparation | `steel_media` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_recovery_power | recovery | `recovery_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_makeup_water | recovery | `makeup_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_oleic_acid | recovery | `oleic_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure each actual individual formulation, active fraction, consumed product mass, dilution water and matching circuit/period; reconcile stock/reuse and any dissolution/phase change. Other actual chemicals get individual rows; no imposed reagent dose or pooled recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_silicate | recovery | `sodium_silicate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure each actual individual formulation, active fraction, consumed product mass, dilution water and matching circuit/period; reconcile stock/reuse and any dissolution/phase change. Other actual chemicals get individual rows; no imposed reagent dose or pooled recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyacrylamide | recovery | `polyacrylamide` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure each actual individual formulation, active fraction, consumed product mass, dilution water and matching circuit/period; reconcile stock/reuse and any dissolution/phase change. Other actual chemicals get individual rows; no imposed reagent dose or pooled recipe. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sand_coproduct | recovery | `sand_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_carbonate_coproduct | recovery | `carbonate_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tailings_slurry | recovery | `tailings_slurry` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_gas | drying | `dryer_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_power | drying | `dryer_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | controls | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | For each actual mineral family identify geological origin and phases using traceable mineralogical/assay evidence; weigh matched wet/dry feed/output/tails and stocks, measure free-water-preserving phases and explicit dry-basis elemental-P or P2O5-equivalent assays with declared conversion. Preserve crystal water, Ca/Al/carbonate/impurity and actual supplier/fate. Recovery requires matched dry masses and P assays, never default purity/yield or product name. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dissolved_p_water | controls | `dissolved_p_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure dissolved orthophosphate with a traceable species-selective laboratory method and matched net receiving-water volume V m3; retain sample filtration, pH, speciation, background, compartment, period and uncertainty. If concentration cPO4 is mg/L on PO4 mass basis, released phosphate-ion kg = cPO4*V/1000. If verified orthophosphate concentration cP is mg/L as P, cPO4 = cP*M(PO4)/M(P) using declared consistent molar masses; inverse cP = cPO4*M(P)/M(PO4). Define which phosphate ionic/protonation species the selected Tiangong flow represents and convert its mass using that species molar mass before resolving identity; PO4-equivalent analytical reporting is not proof that all molecules are free PO4 ions. Do not convert dissolved total P to orthophosphate without measured speciation, or substitute P2O5-equivalent solids assay. Record other dissolved phosphorus species and particulate mineral P separately without double-counting one physical release; divide attributable phosphate-ion mass by the same positive D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_fluoride_water | controls | `fluoride_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net receiving-water discharge m3 and species concentration mg/L: released kg = concentration*volume/1000. Declare the specific dissolved-fluoride or suspended-mineral analytical mass basis as applicable; phosphorus speciation and phosphate-ion conversion use cp_dissolved_p_water. retain background, compartment, period, stocks and uncertainty. Do not double-count particulate P as an additional physical TSS output; contaminant characterization is explicit. Actual radionuclide emissions require separately resolved species, activity property/unit and site evidence; geological content alone is not environmental release. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_tss_water | controls | `tss_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net receiving-water discharge m3 and species concentration mg/L: released kg = concentration*volume/1000. Declare the specific dissolved-fluoride or suspended-mineral analytical mass basis as applicable; phosphorus speciation and phosphate-ion conversion use cp_dissolved_p_water. retain background, compartment, period, stocks and uncertainty. Do not double-count particulate P as an additional physical TSS output; contaminant characterization is explicit. Actual radionuclide emissions require separately resolved species, activity property/unit and site evidence; geological content alone is not environmental release. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pp_bag | dispatch | `pp_bag` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated independent net weighing of positive accepted as-received natural mineral D kg, excluding packaging/rejects/returns and adjusting stock. Identify actual family and phases; match free-water w or independently measured slurry dry-mineral solids s, dry-basis elemental P or explicit P2O5 equivalent with declared molar-mass conversion, Ca/Al/carbonate/F/impurities and accepted grade/gate. Keep D denominator and hydrate crystalline water; no default assay or universal representative. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One accepted natural calcium-phosphate, aluminium-calcium-phosphate or phosphatic-chalk mineral grade with identified phases, free water/crystal-water distinction, dry-basis P and impurities, size and selected gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received natural mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w,0 <= w <1: dry mineral mass = D*(1-w). For declared slurry use independently measured dry-mineral solids fraction s,0 < s <=1: dry mass = D*s, not both corrections. Crystal water/hydroxyls belonging to hydrated phases remain part of mineral mass; loss-on-ignition includes other losses and is not automatically free water. Laboratory free-water protocol must preserve confirmed phases and disclose method. Measured dry-basis elemental phosphorus fraction gP,0 <= gP <=1, gives contained P = dry mineral mass*gP. If reporting analytical P2O5 equivalent, declare fraction gE and molar-mass convention: gP = gE*(2*M(P)/M(P2O5)); inverse gE = gP*M(P2O5)/(2*M(P)). P2O5-equivalent is not free oxide, pure apatite, plant availability or an identical P mass. Use consistent laboratory atomic masses; no fixed assay or conversion from product name. Keep D denominator. Reconcile dry mineral, P, relevant Ca/Al/carbonate/F and impurities across feed, all accepted grades/co-products, rejects, tailings, captured dust, stock and measured dissolution/release losses. Recovery = matched output dry mass*gP / matched input dry mass*gP after stock reconciliation, never output grade alone. Account separately for reagent-introduced phosphorus, water makeup/reuse/evaporation/discharge and actual carbonate/phase changes; no assumed acid-production yield, calcination CO2 or fertilizer credit. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received natural mineral kg at selected gate, excluding packaging/rejects. Measure wet-basis free-water fraction w,0 <= w <1: dry mineral mass = D*(1-w). For declared slurry use independently measured dry-mineral solids fraction s,0 < s <=1: dry mass = D*s, not both corrections. Crystal water/hydroxyls belonging to hydrated phases remain part of mineral mass; loss-on-ignition includes other losses and is not automatically free water. Laboratory free-water protocol must preserve confirmed phases and disclose method. Measured dry-basis elemental phosphorus fraction gP,0 <= gP <=1, gives contained P = dry mineral mass*gP. If reporting analytical P2O5 equivalent, declare fraction gE and molar-mass convention: gP = gE*(2*M(P)/M(P2O5)); inverse gE = gP*M(P2O5)/(2*M(P)). P2O5-equivalent is not free oxide, pure apatite, plant availability or an identical P mass. Use consistent laboratory atomic masses; no fixed assay or conversion from product name. Keep D denominator. Reconcile dry mineral, P, relevant Ca/Al/carbonate/F and impurities across feed, all accepted grades/co-products, rejects, tailings, captured dust, stock and measured dissolution/release losses. Recovery = matched output dry mass*gP / matched input dry mass*gP after stock reconciliation, never output grade alone. Account separately for reagent-introduced phosphorus, water makeup/reuse/evaporation/discharge and actual carbonate/phase changes; no assumed acid-production yield, calcination CO2 or fertilizer credit. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg accepted net as-received natural phosphate mineral of one declared family/grade/gate; contained P or analytical P2O5 equivalent is a qualifier, not1 kg pure P, P2O5 or fertilizer |
| excluded_use | Calcined/roasted or chemically transformed mineral, synthetic/precipitated phosphate salts, phosphoric acid, elemental phosphorus, manufactured fertilizers and feed additives; ordinary nonphosphatic chalk, incidental-P carbonate outside confirmed category, finished chalk/stone articles and downstream manufacturing or transport-only services |
| required_metadata | site/year; actual one of all three mineral families; deposit/provider, mineral phases and natural uncalcined state; raw/physical preparation route and actual units; free water versus crystal water/hydroxyls; dry-basis elemental P versus explicitly labelled P2O5-equivalent assay and Ca/Al/carbonate/Fe/Mg/F/other relevant impurity assays; actual feed/product/tails masses, stock and recovery; accepted use/size/grade and gate; water basin, waste/discharge and relevant radiological screening; joint outputs/allocation; lifetime development/closure; packaging/transport. Representative Phosphate Ore Product/Mass is production mix at plant, feed-grade: only compatible natural mineral grade/gate, not permission to use all mined ore as animal feed or universal identity for aluminium-calcium phosphate/phosphatic chalk |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-phosphate-1993 | official_guidance | US EPA AP42 Section11.21 Phosphate Rock Processing, July1993 reformatted January1995, original PDF pp.1–5, sections11.21.1–11.21.2 and Figure11.21-1. https://www.epa.gov/sites/default/files/2020-10/documents/c11s21.pdf | Conditional phosphate-rock physical preparation and actual emissions; historical USA fertilizer-related routes are not universal aluminium-calcium phosphate or phosphatic-chalk recipes. No numeric factors, moisture, sieve limits, grade or recovery adopted. |
| museum-crandallite-2026 | official_guidance | Museum Wales, Mineral Database: Crandallite, original institutional page, snapshot1 October2026, formula/composition, verification, geological context and occurrence paragraphs. https://museum.wales/mineralogy-of-wales/database/?mineral=206&name=Crandallite | Natural calcium aluminium phosphate hydroxide hydrate identity and mineralogical distinction; local occurrence is not industrial preparation, purity or yield evidence. |
| wco-hs25-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF pp.1–2, Note1 and heading2510 unground/ground products. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Full three-family natural phosphate mineral scope and physical-preparation versus chemical-transformation boundary; no new HS mapping or quantities. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
