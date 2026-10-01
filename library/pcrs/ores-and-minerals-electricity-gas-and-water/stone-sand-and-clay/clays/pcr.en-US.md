---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.clays
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Clays

## 1. Scope and Applicability

Supply of kaolin/other kaolinic clays, bentonite, ball/fire/common clays and fuller’s earth, plus the refractory raw minerals andalusite, kyanite, sillimanite, mullite and chamotte/dinas earths within the CPC category defined through HS 2507/2508. Cover one declared raw, dry-ground, wet-beneficiated, slurry, dried or actually calcined raw-material gate, including actual refractory-raw-material thermal conversion where applicable. Expanded clay and downstream shaped/fired ceramic or refractory articles are excluded. Distinguish integrated deposit extraction from standalone processing of supplied burden-bearing mineral. Clay varieties do not share a universal composition, washing yield, swelling/plasticity, water demand, chemical treatment or calcination route. Record each actual excavation/hydraulic/underground route, crushing/milling, blunging/classification, magnetic/flotation/chemical purification, dewatering, drying, activation, thermal conversion, grading and loading without requiring every operation. Refractory mineral separation and supplied alumina/silica routes use actual feed and phase assays; HS identity does not establish a synthesis recipe. Include attributable development/closure and water/dust/waste controls through the gate. `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.clays |
| classification_refs | CPC 3.0:15400 |
| covered_products | Clay raw materials and HS 2507/2508 refractory raw minerals, uncalcined or actually calcined, at fixed mineral identity, grade, moisture/slurry solids and gate |
| excluded_products | Expanded clays; shaped/fired bricks, tiles, ceramic or refractory articles; installed refractory systems; spent oily bleaching earth; bauxite/alumina as reference product; downstream formulated drilling mud/paint/cement and extraction services |
| representative_product | Kaolin at the declared raw-material gate |
| production_route | Deposit development and closure; Clay and refractory-mineral extraction; Mechanical preparation and grading; Wet purification and activation; Drying and refractory-raw-material thermal conversion; Water, residue and emissions management; Accepted mineral-product loading |
| market_state | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg of specified clay/refractory raw material in its declared market state; no performance equivalence between swelling clay, coating kaolin and refractory minerals |
| How much | 1 kg |
| How well | site/year; clay species or refractory mineral/phase identity and origin; actual extraction and beneficiation/activation/thermal route; uncalcined/calcined/slurry state; particle distribution, mineral/oxide/impurity assays; moisture and solids; relevant brightness/plasticity/swelling/adsorption/refractory grade evidence; carbonate and organic carbon, structural water and loss-on-ignition basis; actual loading gate; water basin/return; residue fate; allocation and lifetime output |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kaolin at the declared raw-material gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; clay species or refractory mineral/phase identity and origin; actual extraction and beneficiation/activation/thermal route; uncalcined/calcined/slurry state; particle distribution, mineral/oxide/impurity assays; moisture and solids; relevant brightness/plasticity/swelling/adsorption/refractory grade evidence; carbonate and organic carbon, structural water and loss-on-ignition basis; actual loading gate; water basin/return; residue fate; allocation and lifetime output |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently weighed positive accepted net as-received loading mass in kg of one selected product state, excluding packaging, rejects and other saleable grades. Slurry D includes declared carrier water; record solids fraction separately. Wet-basis free moisture w has 0 <= w < 1; free-moisture-corrected solids = D*(1-w). Do not treat mineral structural water or calcination loss as free moisture. Dry/slurry conversions require matched measured solids/density and actual state. Reconcile mineral/oxide solids, impurities/rejects, additives, stock and thermal transformation separately from new water, circulation, evaporation and discharge. Actual dehydroxylation/phase conversion may change mass; no universal yield or loss-on-ignition factor and no automatic calcination CO2 from aluminosilicate alone. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual mineral deposit for integrated mining, or supplied clay/refractory mineral and actual separately sourced synthesis feed for standalone processing |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Clay raw materials and HS 2507/2508 refractory raw minerals, uncalcined or actually calcined, at fixed mineral identity, grade, moisture/slurry solids and gate |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; clay species or refractory mineral/phase identity and origin; actual extraction and beneficiation/activation/thermal route; uncalcined/calcined/slurry state; particle distribution, mineral/oxide/impurity assays; moisture and solids; relevant brightness/plasticity/swelling/adsorption/refractory grade evidence; carbonate and organic carbon, structural water and loss-on-ignition basis; actual loading gate; water basin/return; residue fate; allocation and lifetime output |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Supply of kaolin/other kaolinic clays, bentonite, ball/fire/common clays and fuller’s earth, plus the refractory raw minerals andalusite, kyanite, sillimanite, mullite and chamotte/dinas earths within the CPC category defined through HS 2507/2508. Cover one declared raw, dry-ground, wet-beneficiated, slurry, dried or actually calcined raw-material gate, including actual refractory-raw-material thermal conversion where applicable. Expanded clay and downstream shaped/fired ceramic or refractory articles are excluded. Distinguish integrated deposit extraction from standalone processing of supplied burden-bearing mineral. Clay varieties do not share a universal composition, washing yield, swelling/plasticity, water demand, chemical treatment or calcination route. Record each actual excavation/hydraulic/underground route, crushing/milling, blunging/classification, magnetic/flotation/chemical purification, dewatering, drying, activation, thermal conversion, grading and loading without requiring every operation. Refractory mineral separation and supplied alumina/silica routes use actual feed and phase assays; HS identity does not establish a synthesis recipe. Include attributable development/closure and water/dust/waste controls through the gate. | `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Deposit development and closure | conditional | Actual integrated mining and attributable rehabilitation | Foreground production | per 1 kg reference flow |
| extraction | Clay and refractory-mineral extraction | conditional | Actual primary deposit extraction | Foreground production | per 1 kg reference flow |
| mechanical | Mechanical preparation and grading | conditional | Actual crushing/grinding/blunging/separation | Foreground production | per 1 kg reference flow |
| refining | Wet purification and activation | conditional | Actual grade-specific wet/chemical route | Foreground production | per 1 kg reference flow |
| thermal | Drying and refractory-raw-material thermal conversion | conditional | Actual drying/calcining/conversion; not default for raw slurry | Foreground production | per 1 kg reference flow |
| controls | Water, residue and emissions management | conditional | Actual control/treatment scope | Foreground production | per 1 kg reference flow |
| dispatch | Accepted mineral-product loading | required | All declared product gates | Foreground production | per 1 kg reference flow |

### Process: Deposit development and closure (`development`)

#### Inputs

##### Product flows

###### Development and rehabilitation diesel (`development_diesel`)

Actual stripping/restoration, charged once over measured lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mineral-deposit overburden (`overburden`)

Actual stripped cover, with separate topsoil reuse and habitat-specific land exchanges.

- Selected flow: Mineral-deposit overburden
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Clay and refractory-mineral extraction (`extraction`)

#### Inputs

##### Product flows

###### Mineral-extraction diesel (`mining_diesel`)

Actual excavation/hydraulic/underground haul machinery; no universal open-pit route.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Extraction machinery electricity (`mining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual hydraulic pumps or underground ventilation/handling; distinguish meters and route applicability.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_power`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Kaolin resource in deposit (`kaolin_resource`)

Only confirmed primary kaolin resource; other clays and each refractory mineral need their own specific resource identity. No resource duplication under supplied feed.

- Selected flow: kaolin `fe0acd60-3ddc-11dd-aab8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_kaolin_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kaolin_resource`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Mechanical preparation and grading (`mechanical`)

#### Inputs

##### Product flows

###### Supplied raw kaolin (`supplied_kaolin`)

Only standalone kaolin processing; other mineral feeds require separate named input cards and supplier burdens.

- Selected flow: Supplied raw kaolin
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_kaolin; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_kaolin`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Supplied raw kyanite concentrate (`supplied_kyanite`)

Only actual refractory-mineral preparation or conversion from supplied kyanite; andalusite/sillimanite/chamotte/dinas feed are separate actual identities.

- Selected flow: Supplied raw kyanite concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_kyanite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_kyanite`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-preparation electricity (`mechanical_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crusher/mill/classifier/blunger or mineral-separation equipment; record grade-specific operations and meter allocation.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_mechanical_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mechanical_power`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Purchased process make-up water (`process_water`)

Actual new purchased water for blunging/washing/slurry; direct abstraction has specific resource/basin rows, circulation cancels.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_process_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_process_water`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Wet purification and activation (`refining`)

#### Inputs

##### Product flows

###### Wet-purification electricity (`refining_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual hydroclassification, magnetic/flotation separation, filters and dewatering; no duplicated mechanical meter.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_refining_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refining_power`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sulfuric acid reagent (`sulfuric_acid`)

Only actual sulfuric-acid refining; record delivered concentration and active mass and residue fate, not a universal clay reagent.

- Selected flow: Sulfuric acid reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfuric_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfuric_acid`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sodium dithionite bleaching reagent (`sodium_dithionite`)

Only actual confirmed sodium-dithionite route; source hydrosulfite terminology alone cannot establish salt identity/dose.

- Selected flow: Sodium dithionite bleaching reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_dithionite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_dithionite`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Sodium carbonate activation reagent (`sodium_carbonate`)

Only actual bentonite soda-ash activation; quantify active fraction, retained reagent and water. Other additives each separate.

- Selected flow: Sodium carbonate activation reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_carbonate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_carbonate`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mineral-purification grit and impurity solids (`refining_reject`)

One actual mineral-impurity reject stream with measured composition and wet/dry basis; chemically different streams need separate cards.

- Selected flow: Mineral-purification grit and impurity solids
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_refining_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refining_reject`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Drying and refractory-raw-material thermal conversion (`thermal`)

#### Inputs

##### Product flows

###### Dryer natural gas (`drying_gas`)

Only actual gas-fired drying with composition/calorific basis; no assumed drying for slurry supplied wet. Each other fuel/heat is separate.

- Selected flow: Dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_drying_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drying_gas`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Calciner natural gas (`calciner_gas`)

Only actual gas-fired raw-material calcination/conversion distinct from drying; no standard temperature or gas dose.

- Selected flow: Calciner natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_calciner_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_calciner_gas`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Thermal-conversion electricity (`thermal_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual furnace or thermal auxiliaries, including only actual electrically produced mullite route; disclose furnace scope and duty.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Alumina synthesis feed (`alumina_feed`)

Only actual supplied alumina for refractory raw mullite synthesis; mineral-conversion routes need no invented alumina addition.

- Selected flow: Alumina synthesis feed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_alumina_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_alumina_feed`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Silica synthesis feed (`silica_feed`)

Only actual supplied silica for refractory raw mullite synthesis, with measured phase/composition and supplier burdens, no fixed stoichiometric recipe.

- Selected flow: Silica synthesis feed
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_silica_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_silica_feed`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected calcined mineral solids (`thermal_reject`)

Actual off-spec raw calcined material transferred to management; internal regrinding cancels and finished refractory article waste is outside gate.

- Selected flow: Rejected calcined mineral solids
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_reject`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Water, residue and emissions management (`controls`)

#### Inputs

##### Product flows

###### Water and dust-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual collectors, effluent treatment and recycle pumps; shared-meter allocation once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mineral collector dust transferred to disposal (`filter_dust`)

Actual captured dust transferred to management; internal reuse excluded, sold qualified mineral grade separate.

- Selected flow: Mineral collector dust transferred to disposal
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_filter_dust; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_filter_dust`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-process wastewater transferred for treatment (`wastewater`)

Actual treatment transfer with solids/pH/chemical assays and volume; direct environmental discharges need specific receiving compartment and species.

- Selected flow: Mineral-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

##### Elementary flows

###### Mineral PM10 to outdoor air (`pm10_air`)

Actual extraction/milling/drying/calciner particulate releases after controls, with actual mineral composition and size; no assumed zero from wet operation.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Actual foreground fossil fuel combustion only; mineral-carbonate decomposition and raw organic carbon need separate origin-specific CO2 records if actually present.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### Mineral-dehydroxylation water vapor to air (`structural_water_air`)

Only actual structural-water release from raw-mineral thermal conversion; distinguish free water drying, measured phase change and other mass losses.

- Selected flow: Mineral-dehydroxylation water vapor to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_structural_water_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_structural_water_air`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### Process: Accepted mineral-product loading (`dispatch`)

#### Inputs

##### Product flows

###### Mineral-product loading diesel (`loading_diesel`)

Actual net accepted-product loading, excluding separately metered mining haul and downstream delivery outside gate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Kaolin at the declared raw-material gate (`final_product`)

Representative kaolin product identity remains unresolved. Other clays and refractory raw minerals require actual specific product reference and matched state; resource kaolin never substitutes for a product UUID.

- Selected flow: Kaolin at the declared raw-material gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide mining, grade purification, slurry dispatch and thermal conversion where possible. Retain unallocated inventories for jointly separated grades and mineral by-products; justify physical causality or economic alternatives with consistent quality/moisture/period sensitivity. Purchased refractory mineral or synthesis feed carries its own upstream burden; no automatic burden-free residue assumption. Charge development/closure once over disclosed lifetime accepted output. Internal grit/slurry/dust recycling receives no duplicate new feed or automatic avoided-product credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_kaolin_resource | extraction | `kaolin_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_power | extraction | `mining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_kaolin | mechanical | `supplied_kaolin` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_kyanite | mechanical | `supplied_kyanite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mechanical_power | mechanical | `mechanical_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_process_water | mechanical | `process_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_refining_power | refining | `refining_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfuric_acid | refining | `sulfuric_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile delivered net chemical/feed mass, concentration/active or mineral-phase assay, stock changes and actually retained/removed fraction; link supplier burden. Record each additive separately without assumed recipe or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_dithionite | refining | `sodium_dithionite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile delivered net chemical/feed mass, concentration/active or mineral-phase assay, stock changes and actually retained/removed fraction; link supplier burden. Record each additive separately without assumed recipe or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_carbonate | refining | `sodium_carbonate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile delivered net chemical/feed mass, concentration/active or mineral-phase assay, stock changes and actually retained/removed fraction; link supplier burden. Record each additive separately without assumed recipe or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_refining_reject | refining | `refining_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_drying_gas | thermal | `drying_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_calciner_gas | thermal | `calciner_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_alumina_feed | thermal | `alumina_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile delivered net chemical/feed mass, concentration/active or mineral-phase assay, stock changes and actually retained/removed fraction; link supplier burden. Record each additive separately without assumed recipe or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_silica_feed | thermal | `silica_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile delivered net chemical/feed mass, concentration/active or mineral-phase assay, stock changes and actually retained/removed fraction; link supplier burden. Record each additive separately without assumed recipe or dose. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_reject | thermal | `thermal_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_filter_dust | controls | `filter_dust` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_structural_water_air | controls | `structural_water_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use matched feed/product mineral-phase, free-water and thermal mass-loss assays, with actual throughput, captured/condensed water and measured gas moisture where available. Isolate structural water from free-water evaporation and carbon/other losses; document uncertainties and reconcile to post-conversion accepted D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted net loaded kg D with calibrated scale/flow-weighing and reconcile stocks, returns and packaging. Record product species/phase and wet-basis free moisture or slurry solids; slurry volume converts with matched measured density. Calcined grades require post-conversion mass/phase and separate structural-water/carbon/loss assays, not raw-kaolin mass substitution. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual clay or refractory raw-mineral grade at loading, stating raw/beneficiated/slurry/dried/calcined status and measured moisture/solids | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently weighed positive accepted net as-received loading mass in kg of one selected product state, excluding packaging, rejects and other saleable grades. Slurry D includes declared carrier water; record solids fraction separately. Wet-basis free moisture w has 0 <= w < 1; free-moisture-corrected solids = D*(1-w). Do not treat mineral structural water or calcination loss as free moisture. Dry/slurry conversions require matched measured solids/density and actual state. Reconcile mineral/oxide solids, impurities/rejects, additives, stock and thermal transformation separately from new water, circulation, evaporation and discharge. Actual dehydroxylation/phase conversion may change mass; no universal yield or loss-on-ignition factor and no automatic calcination CO2 from aluminosilicate alone. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently weighed positive accepted net as-received loading mass in kg of one selected product state, excluding packaging, rejects and other saleable grades. Slurry D includes declared carrier water; record solids fraction separately. Wet-basis free moisture w has 0 <= w < 1; free-moisture-corrected solids = D*(1-w). Do not treat mineral structural water or calcination loss as free moisture. Dry/slurry conversions require matched measured solids/density and actual state. Reconcile mineral/oxide solids, impurities/rejects, additives, stock and thermal transformation separately from new water, circulation, evaporation and discharge. Actual dehydroxylation/phase conversion may change mass; no universal yield or loss-on-ignition factor and no automatic calcination CO2 from aluminosilicate alone. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg of specified clay/refractory raw material in its declared market state; no performance equivalence between swelling clay, coating kaolin and refractory minerals |
| excluded_use | Expanded clays; shaped/fired bricks, tiles, ceramic or refractory articles; installed refractory systems; spent oily bleaching earth; bauxite/alumina as reference product; downstream formulated drilling mud/paint/cement and extraction services |
| required_metadata | site/year; clay species or refractory mineral/phase identity and origin; actual extraction and beneficiation/activation/thermal route; uncalcined/calcined/slurry state; particle distribution, mineral/oxide/impurity assays; moisture and solids; relevant brightness/plasticity/swelling/adsorption/refractory grade evidence; carbonate and organic carbon, structural water and loss-on-ignition basis; actual loading gate; water basin/return; residue fate; allocation and lifetime output |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-clay-1995 | official_guidance | US EPA, AP-42 section 11.25 Clay Processing, January 1995, original PDF pp.1–3 and 8. https://www.epa.gov/sites/default/files/2020-10/documents/c11s25.pdf | Clay-type-specific extraction, dry/wet mechanical processing, chemical purification and thermal conditioning; qualitative routes only, no historical yields, moisture, temperatures or emission factors adopted. |
| wco-hs25-2022 | official_guidance | WCO, HS Nomenclature 2022, Chapter 25, original PDF p.2, headings 2507/2508. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | Product boundary for CPC-defined clay headings, including refractory raw minerals and calcined states; not a process recipe or quantity source. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
