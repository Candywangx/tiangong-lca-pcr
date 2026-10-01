---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.gypsum-anhydrite-limestone-flux-limestone-and-other-calcareous-stone-of-a-kind-used-for-cb4995bb
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gypsum; anhydrite; limestone flux; limestone and other calcareous stone for lime or cement manufacture

## 1. Scope and Applicability

Supply of uncalcined gypsum, anhydrite, limestone flux and limestone/other calcareous stone of a kind used for lime or cement manufacture at one declared raw-mineral gate. Cover quarry or actual underground extraction and standalone preparation of supplied burden-bearing minerals, including raw or actually crushed, washed, dried or ground grades that retain the declared raw-mineral identity. Do not narrow this category to gypsum. Gypsum dihydrate and natural anhydrite are distinct mineral states; drying must not silently become plaster calcination. Limestone flux and calcareous chemical-manufacture feed use actual mineral/oxide/impurity and reactive-quality evidence rather than a universal pure-CaCO3 composition. Where an industrial by-product gypsum is actually supplied under this uncalcined category, confirm its identity/grade and generating-process allocation/cut-off, record actual receiving, dewatering/washing/drying and supplier burdens separately; natural-gypsum evidence cannot establish its purity or zero upstream burden. Include attributable development/closure, handling, controls and delivery only through the explicitly chosen gate. Exclude calcined plaster, lime, clinker/cement manufacture and finished gypsum articles. `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.gypsum-anhydrite-limestone-flux-limestone-and-other-calcareous-stone-of-a-kind-used-for-cb4995bb |
| classification_refs | CPC 3.0:15200 |
| covered_products | Uncalcined gypsum and anhydrite; limestone flux; limestone and other calcareous lime/cement feed, with one actual phase, origin, grade and raw-mineral gate |
| excluded_products | Calcined gypsum/stucco/plaster; gypsum wallboard and formulated articles; quicklime/slaked lime; clinker/cement; dimension-stone articles or ordinary aggregate reference; spent contaminated mineral waste not qualified as this product |
| representative_product | Natural gypsum delivered at the declared plant gate |
| production_route | Mineral-deposit development and closure; Sulfate/carbonate mineral extraction; Raw-mineral preparation and conditioning; Water, residue and dust controls; Included mineral delivery; Accepted mineral supply |
| market_state | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply1 kg of qualified uncalcined gypsum, anhydrite or calcareous flux/feed in its declared state; no performance-equivalence claim across sulfate/carbonate minerals |
| How much | 1 kg |
| How well | site/year; gypsum/anhydrite/carbonate phase and origin; quarry/underground or supplied/by-product route; actual processing and absence of calcination; sulfate/carbonate/oxide and impurity assays; free moisture versus crystal water; grading/purity/reactivity for declared use; quarry/plant-receipt gate and included transport; accepted net output and stocks; water basin/return; waste fate; supplier allocation/cut-off; lifetime development output; representative UUID only for China natural gypsum quarried and delivered to plant, other minerals/source states/gates require distinct identity |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural gypsum `a4be0b17-8763-439c-a818-30b9b4afeed3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; gypsum/anhydrite/carbonate phase and origin; quarry/underground or supplied/by-product route; actual processing and absence of calcination; sulfate/carbonate/oxide and impurity assays; free moisture versus crystal water; grading/purity/reactivity for declared use; quarry/plant-receipt gate and included transport; accepted net output and stocks; water basin/return; waste fate; supplier allocation/cut-off; lifetime development output; representative UUID only for China natural gypsum quarried and delivered to plant, other minerals/source states/gates require distinct identity |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received raw-mineral mass in kg at the declared gate, excluding packaging, returns and rejects. Measure wet-basis free moisture w with0 <= w <1; free-moisture-corrected mineral mass = D*(1-w), retaining D as reference denominator. Gypsum crystal water is part of its mineral phase, not free moisture; natural anhydrite is not assumed to have gypsum water content. Reconcile raw accepted mineral solids/phase, impurities, reject/slurry solids, stocks and dust separately from water intake/circulation/evaporation/discharge. Volume records require measured bulk density and moisture. Any observed dehydration or decarbonation triggers product-state and gate review, not automatic equivalence to raw gypsum or limestone. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual gypsum/anhydrite/calcareous deposit for primary extraction, or supplied identified raw mineral/by-product with upstream burdens for standalone conditioning |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Uncalcined gypsum and anhydrite; limestone flux; limestone and other calcareous lime/cement feed, with one actual phase, origin, grade and raw-mineral gate |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; gypsum/anhydrite/carbonate phase and origin; quarry/underground or supplied/by-product route; actual processing and absence of calcination; sulfate/carbonate/oxide and impurity assays; free moisture versus crystal water; grading/purity/reactivity for declared use; quarry/plant-receipt gate and included transport; accepted net output and stocks; water basin/return; waste fate; supplier allocation/cut-off; lifetime development output; representative UUID only for China natural gypsum quarried and delivered to plant, other minerals/source states/gates require distinct identity |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of uncalcined gypsum, anhydrite, limestone flux and limestone/other calcareous stone of a kind used for lime or cement manufacture at one declared raw-mineral gate. Cover quarry or actual underground extraction and standalone preparation of supplied burden-bearing minerals, including raw or actually crushed, washed, dried or ground grades that retain the declared raw-mineral identity. Do not narrow this category to gypsum. Gypsum dihydrate and natural anhydrite are distinct mineral states; drying must not silently become plaster calcination. Limestone flux and calcareous chemical-manufacture feed use actual mineral/oxide/impurity and reactive-quality evidence rather than a universal pure-CaCO3 composition. Where an industrial by-product gypsum is actually supplied under this uncalcined category, confirm its identity/grade and generating-process allocation/cut-off, record actual receiving, dewatering/washing/drying and supplier burdens separately; natural-gypsum evidence cannot establish its purity or zero upstream burden. Include attributable development/closure, handling, controls and delivery only through the explicitly chosen gate. Exclude calcined plaster, lime, clinker/cement manufacture and finished gypsum articles. | `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mineral-deposit development and closure | conditional | Integrated primary mining with attributable rehabilitation | Foreground production | per 1 kg reference flow |
| extraction | Sulfate/carbonate mineral extraction | conditional | Actual quarry or underground mining | Foreground production | per 1 kg reference flow |
| preparation | Raw-mineral preparation and conditioning | conditional | Actual crushing/screening/washing/dewatering/drying/grinding, retaining raw state | Foreground production | per 1 kg reference flow |
| controls | Water, residue and dust controls | conditional | Actual site control/management | Foreground production | per 1 kg reference flow |
| delivery | Included mineral delivery | conditional | Only delivery explicitly within declared gate | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral supply | required | Declared loading or plant-receipt gate | Foreground production | per 1 kg reference flow |

### Process: Mineral-deposit development and closure (`development`)

#### Inputs

##### Product flows

###### Development and rehabilitation diesel (`development_diesel`)

Actual stripping/restoration equipment, with measured lifetime-output attribution once.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mineral-deposit overburden (`overburden`)

Actual stripped covering material, distinct from mineral rejects, retained topsoil and habitat-specific land transformation.

- Selected flow: Mineral-deposit overburden
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Sulfate/carbonate mineral extraction (`extraction`)

#### Inputs

##### Product flows

###### Mining and onsite-haul diesel (`mining_diesel`)

Actual quarry/underground machinery and movement; distinguish delivery fuel and loading meters.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Extraction machinery electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling/pumping/underground ventilation/handling; record each actual route and avoid repeated shared metering.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only actual ANFO blasting; unblasted gypsum/limestone routes exclude. Other actual explosives and detonators each separate.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Gypsum mineral in deposit (`gypsum_resource`)

Only actual primary gypsum deposit mass; retain dihydrate/mineral assay, no pure-CaSO4 assumption.

- Selected flow: Gypsum mineral in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gypsum_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gypsum_resource`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Anhydrite mineral in deposit (`anhydrite_resource`)

Only actual natural anhydrite primary extraction; do not replace with generic sulfate released to environmental water/air.

- Selected flow: Anhydrite mineral in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anhydrite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anhydrite_resource`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Limestone mineral in deposit (`limestone_resource`)

Only actual primary limestone deposit; other calcareous lithologies need their own resource identity/composition.

- Selected flow: Limestone mineral in deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_limestone_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_limestone_resource`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Raw-mineral preparation and conditioning (`preparation`)

#### Inputs

##### Product flows

###### Supplied raw gypsum (`supplied_gypsum`)

Only standalone natural-gypsum preparation, with supplier phase/state and burden; integrated internal feed cancels.

- Selected flow: Supplied raw gypsum
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_gypsum; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_gypsum`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied raw anhydrite (`supplied_anhydrite`)

Only actual supplied anhydrite with mineral/impurity assay and upstream burdens; no gypsum hydration identity substitution.

- Selected flow: Supplied raw anhydrite
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_anhydrite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_anhydrite`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied raw limestone for chemical manufacture (`supplied_limestone`)

Only standalone limestone flux/lime-cement feed preparation, actual carbonate/impurity grade and supplier burdens.

- Selected flow: Supplied raw limestone for chemical manufacture
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_limestone; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_limestone`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied uncalcined FGD gypsum co-product (`supplied_fgd_gypsum`)

Only confirmed uncalcined FGD gypsum product with generating-process allocation/cut-off, impurity/moisture/state evidence and actual supplier burdens. Waste-classified feed requires a separate waste identity; other industrial gypsum each separate.

- Selected flow: Supplied uncalcined FGD gypsum co-product
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_fgd_gypsum; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_fgd_gypsum`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-preparation electricity (`preparation_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crushers/screens/mills/classifiers/filter/dewatering pumps; no universal grinding/drying stage, do not import calciner operations.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_preparation_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_preparation_power`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Purchased mineral-washing make-up water (`wash_water`)

Only new purchased water for actual washing; direct abstraction requires its own resource/basin row, internal circulation excluded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Raw-mineral dryer natural gas (`dryer_natural_gas`)

Only actual gas-fired removal of free moisture, with confirmed retained mineral phase. Other fuels/heat each separate. If gypsum is calcined, revise to a different product gate.

- Selected flow: Raw-mineral dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_natural_gas`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected mineral rock pieces (`mineral_reject`)

Actual off-spec solid rock transferred to management; identify actual gypsum/anhydrite/carbonate grade separately, no assumed disposal credit.

- Selected flow: Rejected mineral rock pieces
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mineral_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mineral_reject`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-washing sludge (`wash_sludge`)

Actual wet washed-out fines/impurity stream with measured solids/mineral state and management fate; internal recovered solids exclude.

- Selected flow: Mineral-washing sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_sludge`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Water, residue and dust controls (`controls`)

#### Inputs

##### Product flows

###### Water and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual collector fans/treatment/recycle pumps; shared meters attributed once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mineral collector dust transferred to disposal (`collector_dust`)

Actual captured dust transferred to management; saleable product and internal return have distinct balance roles.

- Selected flow: Mineral collector dust transferred to disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_collector_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_collector_dust`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-process wastewater transferred for treatment (`wastewater`)

Actual purge/treatment transfer with volume and sulfate/carbonate/impurity assays; environmental discharge has its own volume and named species.

- Selected flow: Mineral-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Mineral PM10 to outdoor air (`pm10_air`)

Actual quarry/haul/crusher/mill/dryer particulate releases after control, with mineral and particle-size basis.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Actual foreground fuel combustion only, traceable fuel/carbon factor; mechanical limestone processing is not decarbonation and gypsum crystal water is not carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### Dissolved sulfate released to receiving water (`sulfate_water`)

Only actual sulfate-bearing discharge with identified receiving compartment; measure dissolved sulfate, net water volume and background separately, not assumed total gypsum loss.

- Selected flow: Dissolved sulfate released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfate_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfate_water`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Included mineral delivery (`delivery`)

#### Inputs

##### Product flows

###### Included mineral-delivery diesel (`delivery_diesel`)

Only fuel within explicitly foreground-modelled delivery through chosen receipt gate; record actual route/load/empty return. Outsourced transport provider burdens are linked distinctly and must not duplicate this fuel. Quarry-loading-only gate excludes downstream delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_delivery_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery_diesel`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Accepted mineral supply (`dispatch`)

#### Inputs

##### Product flows

###### Accepted mineral handling diesel (`loading_diesel`)

Actual loading/receipt handling within gate, distinct from extraction haul and delivery fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Natural gypsum delivered at the declared plant gate (`final_product`)

Verified representative is China natural gypsum quarried and delivered to plant. Include agreed delivery to that receipt gate; quarry-only gypsum, other origins, industrial gypsum, anhydrite, limestone flux and other calcareous feed require their own actual product identities.

- Selected flow: Natural gypsum `a4be0b17-8763-439c-a818-30b9b4afeed3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide mineral extraction, grade preparation and optional delivery where possible. Retain unallocated joint-grade inventory and justify physical causality or economic alternative with matched quality/moisture/period. Industrial by-product gypsum carries a documented generating-process allocation/cut-off and actual conditioning/transport; neither disposal avoidance nor natural-gypsum substitution automatically creates credit. Attribute development/closure once over measured lifetime accepted output. Reject sold for another use is not automatically a burden-free co-product; internal recycle receives no duplicate new-supply burden. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gypsum_resource | extraction | `gypsum_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anhydrite_resource | extraction | `anhydrite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_limestone_resource | extraction | `limestone_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_gypsum | preparation | `supplied_gypsum` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net received mass, free moisture, actual crystal/mineral phase and impurity/reactive-grade assays to supplier batches; reconcile opening/closing stock and internal transfers. Retain source/generating-process identity, upstream allocation/cut-off and delivery provider, not an assumed virgin substitute or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_anhydrite | preparation | `supplied_anhydrite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net received mass, free moisture, actual crystal/mineral phase and impurity/reactive-grade assays to supplier batches; reconcile opening/closing stock and internal transfers. Retain source/generating-process identity, upstream allocation/cut-off and delivery provider, not an assumed virgin substitute or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_limestone | preparation | `supplied_limestone` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net received mass, free moisture, actual crystal/mineral phase and impurity/reactive-grade assays to supplier batches; reconcile opening/closing stock and internal transfers. Retain source/generating-process identity, upstream allocation/cut-off and delivery provider, not an assumed virgin substitute or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_fgd_gypsum | preparation | `supplied_fgd_gypsum` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Match net received mass, free moisture, actual crystal/mineral phase and impurity/reactive-grade assays to supplier batches; reconcile opening/closing stock and internal transfers. Retain source/generating-process identity, upstream allocation/cut-off and delivery provider, not an assumed virgin substitute or zero burden. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_preparation_power | preparation | `preparation_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | preparation | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_natural_gas | preparation | `dryer_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Meter actual fuel and composition/calorific basis for matched drying campaign, record inlet/outlet free moisture, mineral-phase checks and thermal settings; distinguish free-water removal from chemically bound-water release before assigning raw-product output. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mineral_reject | preparation | `mineral_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_sludge | preparation | `wash_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_collector_dust | controls | `collector_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfate_water | controls | `sulfate_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair representative dissolved-sulfate concentration mg/L with calibrated net receiving-water discharge m3 for the same period: sulfate kg = concentration mg/L * volume m3 /1000. Retain background/reference-water sampling and uncertainty separately, no automatic chemical stoichiometry conversion. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh positive net accepted kg D at chosen loading or plant receipt with calibrated scale; reconcile packaging, returns and stocks. Match mineral phase, free moisture and chemical/grade assays to the same batches. Volume records require measured bulk density/moisture; phase changes require gate review. The representative plant-delivered UUID cannot represent a quarry-only gate without a distinct identity. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One raw/processed uncalcined mineral grade with actual moisture and chemical phase, at declared quarry/processing loading or explicitly included plant-receipt delivery gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received raw-mineral mass in kg at the declared gate, excluding packaging, returns and rejects. Measure wet-basis free moisture w with0 <= w <1; free-moisture-corrected mineral mass = D*(1-w), retaining D as reference denominator. Gypsum crystal water is part of its mineral phase, not free moisture; natural anhydrite is not assumed to have gypsum water content. Reconcile raw accepted mineral solids/phase, impurities, reject/slurry solids, stocks and dust separately from water intake/circulation/evaporation/discharge. Volume records require measured bulk density and moisture. Any observed dehydration or decarbonation triggers product-state and gate review, not automatic equivalence to raw gypsum or limestone. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received raw-mineral mass in kg at the declared gate, excluding packaging, returns and rejects. Measure wet-basis free moisture w with0 <= w <1; free-moisture-corrected mineral mass = D*(1-w), retaining D as reference denominator. Gypsum crystal water is part of its mineral phase, not free moisture; natural anhydrite is not assumed to have gypsum water content. Reconcile raw accepted mineral solids/phase, impurities, reject/slurry solids, stocks and dust separately from water intake/circulation/evaporation/discharge. Volume records require measured bulk density and moisture. Any observed dehydration or decarbonation triggers product-state and gate review, not automatic equivalence to raw gypsum or limestone. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply1 kg of qualified uncalcined gypsum, anhydrite or calcareous flux/feed in its declared state; no performance-equivalence claim across sulfate/carbonate minerals |
| excluded_use | Calcined gypsum/stucco/plaster; gypsum wallboard and formulated articles; quicklime/slaked lime; clinker/cement; dimension-stone articles or ordinary aggregate reference; spent contaminated mineral waste not qualified as this product |
| required_metadata | site/year; gypsum/anhydrite/carbonate phase and origin; quarry/underground or supplied/by-product route; actual processing and absence of calcination; sulfate/carbonate/oxide and impurity assays; free moisture versus crystal water; grading/purity/reactivity for declared use; quarry/plant-receipt gate and included transport; accepted net output and stocks; water basin/return; waste fate; supplier allocation/cut-off; lifetime development output; representative UUID only for China natural gypsum quarried and delivered to plant, other minerals/source states/gates require distinct identity |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-gypsum-1993 | official_guidance | US EPA, AP-42 section 11.16 Gypsum Manufacturing, July 1993, reformatted January 1995, original PDF pp.1–2. https://www.epa.gov/sites/default/files/2020-10/documents/c11s16.pdf | Raw-gypsum quarry/underground extraction, crushing/screening and actual drying/grinding before calcination; qualitative process/gate support only, no historic quantity defaults. |
| epa-crushed-stone-2004 | official_guidance | US EPA, AP-42 section 11.19.2 Crushed Stone Processing and Pulverized Mineral Processing, August 2004, original PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c11s1902.pdf | Actual limestone/calcareous-rock extraction, crushing/screening, grinding and dust controls; not lime/cement calcination or an assumed pure composition. |
| wco-hs25-2022 | official_guidance | WCO, HS Nomenclature 2022 Chapter25, original PDF p.4, headings2520/2521 and downstream2522/2523. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Gypsum/anhydrite and limestone-flux/lime-cement raw-stone boundary, distinct from plasters/lime/cement; identity only, no process quantities. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
