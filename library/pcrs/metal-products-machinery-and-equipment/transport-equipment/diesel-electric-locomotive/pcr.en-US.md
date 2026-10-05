---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-electric-locomotive
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# New mainline AC-traction diesel-electric locomotive manufacturing

## 1. Scope and Applicability

Manufacturing one complete new diesel-only mainline heavy-haul diesel-electric locomotive with AC induction traction: actual underframe/carbody fabrication, surface finishing, supplied railway diesel prime mover/main alternator and rectifier/DC-link/inverter chain installation, bogie/wheelset/traction motor and brake assembly, cab/cooling/electrical outfit, bounded factory/static and acceptance testing and corrected net-mass release. Select one actual released locomotive number, gauge, axle/powered-axle arrangement and installed configuration. This scope is narrower than CPC49512.

Exclude DC-traction locomotives, externally powered electric locomotives, battery/hybrid traction, gas/diesel dual-fuel, diesel-hydraulic/mechanical drive, shunters, multiple units, separately sold parts, overhaul and remanufacture. Auxiliary starting batteries are included when fitted and do not imply hybrid traction. Exclude commercial train haulage, tonne-km, operational fuel/maintenance, tracks/depots and end of life. Actual manufacturing-support transfers and acceptance runs require explicit measured endpoints, loads/time and coverage; service fuel or sand stores are not manufacturing consumption or net output mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.diesel-electric-locomotive |
| classification_refs | CPC:3.0:49512; narrower |
| covered_products | Manufacturing one complete new diesel-only mainline heavy-haul diesel-electric locomotive with AC induction traction: actual underframe/carbody fabrication, surface finishing, supplied railway diesel prime mover/main alternator and rectifier/DC-link/inverter chain installation, bogie/wheelset/traction motor and brake assembly, cab/cooling/electrical outfit, bounded factory/static and acceptance testing and corrected net-mass release. Select one actual released locomotive number, gauge, axle/powered-axle arrangement and installed configuration. This scope is narrower than CPC49512. |
| excluded_products | Exclude DC-traction locomotives, externally powered electric locomotives, battery/hybrid traction, gas/diesel dual-fuel, diesel-hydraulic/mechanical drive, shunters, multiple units, separately sold parts, overhaul and remanufacture. Auxiliary starting batteries are included when fitted and do not imply hybrid traction. Exclude commercial train haulage, tonne-km, operational fuel/maintenance, tracks/depots and end of life. Actual manufacturing-support transfers and acceptance runs require explicit measured endpoints, loads/time and coverage; service fuel or sand stores are not manufacturing consumption or net output mass. |
| representative_product | One accepted new diesel-only mainline locomotive with actual AC induction traction chain, exact powered-axle/gauge and supplied body/bogie/engine fit-list; no universal power or weight. |
| production_route | Underframe and carbody fabrication; Surface preparation and coating; Diesel-electric traction-system installation; Bogie, wheelset and brake assembly; Cooling, cab and electrical outfitting; Factory trials and net-mass acceptance |
| market_state | Complete configured accepted locomotive, installed equipment and declared technical oil/coolant/electrolyte included in net M once; fuel, traction sand, persons/stores, detached spares, packaging and temporary testing equipment excluded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of one complete exactly configured new diesel-electric AC-traction locomotive. |
| How much | 1 kg accepted net locomotive manufacturing output derived from actual M kg per accepted complete unit. |
| How well | Released locomotive design and current configuration-specific acceptance/test plan; actual gauge, braking, insulation, powertrain and railway qualification evidence disclosed. No haulage-performance equivalence. |
| How long or cycle | One manufacture/integration/acceptance cycle; no assumed service life, maintenance cycle or commercial mileage. |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Diesel-electric locomotives `ee6ef3e3-ee4c-4116-977a-8f715c974cf6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | locomotive identifier/model; released design/revision, gauge and axle/powered arrangement; underframe/carbody steel grade/thickness/heat certificate and weld route; make-or-buy and prefinished scope; supplied railway engine model/count and independent actual dry/installed kg; alternator/rectifier/DC-link/inverter/motor voltage/type and package containment; bogie/frame/wheelset/gear/brake/suspension configuration and independently measured masses; cab/safety/cooling/auxiliary battery and electrical fit-list; actual coating/SDS; supplier-prefilled versus separately added technical fluids; net delivery tank/sand/technical-fluid state; sites/period/accepted count; actual test loads/time/fuel returns/consumption; current calibrated railway weighing method and full axle/wheel record plus signed net corrections M; uncertainty/mass balance; provider/transport/utility/treatment coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | structure_power; finish_power; traction_power; running_power; outfit_power; acceptance_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Actual below1kV grid-user metered electricity:1kWh =3.6MJ; preserve energy, no fuel heat-value/mass conversion. Other voltage/provider distinct. |
| engine_count | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual supplied assembled railway engines in Item(s) as q_item; independently measure actual received/installed engine kg for complete-locomotive mass reconciliation. Do not relabel count Mass or infer kg from rated power/count. Road-propulsion class43123 excludes rail; non-road class43110 railway applicability is assessed separately. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| glass_area | cab_glass | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure actual supplied flat pane single-face area from traceable cut dimensions, no doubling both faces; preserve m2 numerator divided by M. Independently weigh the supplied/installed pane kg to close complete-unit mass; no theoretical glass-density conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released structural steel and supplied engine/AC traction, bogie and outfit parts received at declared sites. Steelmaking/rolling, engine/motor/electronics/part manufacture upstream unless explicit site measured fabrication; supplier-ready state stated. |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | Manufacturing one complete new diesel-only mainline heavy-haul diesel-electric locomotive with AC induction traction: actual underframe/carbody fabrication, surface finishing, supplied railway diesel prime mover/main alternator and rectifier/DC-link/inverter chain installation, bogie/wheelset/traction motor and brake assembly, cab/cooling/electrical outfit, bounded factory/static and acceptance testing and corrected net-mass release. Select one actual released locomotive number, gauge, axle/powered-axle arrangement and installed configuration. This scope is narrower than CPC49512. |
| recursive_input_rule | No recursive purchased complete locomotive as body/engine stock. Purchased shells, bogies/power/cab packages replace contained stocks/work; internal transfers counted once with exact handover/supplier scope. |
| upstream_dataset_requirement | Expanded assessment requires compatible actual steel/chemical/engine/bogie/electrical/part manufacture, utilities, outsourced finishing, inbound/support transport and waste treatment datasets with provider/version/coverage. This measured foreground alone is not complete cradle-to-gate. |
| disclosure | locomotive identifier/model; released design/revision, gauge and axle/powered arrangement; underframe/carbody steel grade/thickness/heat certificate and weld route; make-or-buy and prefinished scope; supplied railway engine model/count and independent actual dry/installed kg; alternator/rectifier/DC-link/inverter/motor voltage/type and package containment; bogie/frame/wheelset/gear/brake/suspension configuration and independently measured masses; cab/safety/cooling/auxiliary battery and electrical fit-list; actual coating/SDS; supplier-prefilled versus separately added technical fluids; net delivery tank/sand/technical-fluid state; sites/period/accepted count; actual test loads/time/fuel returns/consumption; current calibrated railway weighing method and full axle/wheel record plus signed net corrections M; uncertainty/mass balance; provider/transport/utility/treatment coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | manufacturing | Actual fabrication, package installation and integration, tests and rework included at declared sites; sequence and purchased/site-made scope determined by actual work orders. Moving versus stationary assembly is not a mandatory technology choice or numeric allocation rule. | wabtec-moving-2024 |
| boundary_tests | acceptance | Only bounded manufacturing acceptance/test runs and support transfers included, with actual track/endpoints/load/time and test-fuel consumed separated from retained delivery fuel. External test-track/tow services need measured provider scope, fuel/utility coverage and no duplicate service-contained consumption; tracks are not automatically included infrastructure. |  |
| boundary_packages | traction; running | Exact engine/alternator and powered-bogie supplier containment controls duplicate removal. If a complete powered bogie is purchased, omit its contained frame/wheelset/motor/gear/brake from separate supply cards and add the exact measured complete bogie instead; internal finished bogie transfer not a second output reference. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| structure | Underframe and carbody fabrication | required | Receive actual released steel, cut/form/weld underframe and carbody to drawings; supplier-cut stock and purchased shells replace contained work. | foreground | internal transfer; accepted complete locomotive reference |
| finish | Surface preparation and coating | conditional | Include actual preparation and individual supplied coats where performed; prefinished supplies replace contained site work. No mandatory abrasive/paint recipe. | foreground | internal transfer; accepted complete locomotive reference |
| traction | Diesel-electric traction-system installation | required | Install actual prime mover/alternator, rectifier/DC link/inverters, traction motors and geared interfaces from exact released design. A complete supplied power package replaces its contained separately listed parts. | foreground | internal transfer; accepted complete locomotive reference |
| running | Bogie, wheelset and brake assembly | required | Assemble separately supplied frames, wheelsets, suspension and railway brake parts, marry body and bogies. Purchased complete powered bogies replace contained frame/wheelset/motor/gear/brake stocks; actual alternate supply receives its own complete-product card. | foreground | internal transfer; accepted complete locomotive reference |
| outfit | Cooling, cab and electrical outfitting | required | Fit exact cooling, cab, auxiliary starting battery, wiring/control and safety components; purchased cab/package interiors not repeated. | foreground | internal transfer; accepted complete locomotive reference |
| acceptance | Factory trials and net-mass acceptance | required | Actual released pressure/brake/electrical/static and bounded acceptance runs, rework and current weighing/net-mass release. No commercial haulage inventory or assumed trial load. | foreground | finished_machine |

### Process: Underframe and carbody fabrication (`structure`)

Receive actual released steel, cut/form/weld underframe and carbody to drawings; supplier-cut stock and purchased shells replace contained work.

#### Inputs

##### Product flows

###### Hot-rolled low-alloy structural steel locomotive plate (`body_plate`)

Actual released grade/thickness/state per card; weigh issues/returns for underframe/carbody. Supplier ready-cut stock scope explicit.

- Selected flow: Hot-rolled low-alloy structural steel locomotive plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

###### Hot-rolled structural steel angle (`body_angle`)

One actual angle grade/section; other sections separate, no building-structure proxy.

- Selected flow: Hot-rolled structural steel angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

###### Solid carbon-steel submerged-arc welding wire (`weld_wire`)

Conditional actual SAW grade/diameter/work procedure; wire consumed net mass, other weld route separate.

- Selected flow: Solid carbon-steel submerged-arc welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

###### Fused granular submerged-arc welding flux (`weld_flux`)

Conditional one actual flux formulation/makeup mass; recovered material internal.

- Selected flow: Fused granular submerged-arc welding flux
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

###### Alternating current (`structure_power`)

Actual below1kV grid-user cutting/forming/welding/lifting/ventilation energy, including rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Dry untreated segregated steel offcuts leaving site, oily/painted steel separately characterised; internal usable stock transfer.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

###### Solid submerged-arc welding slag (`weld_slag`)

Conditional segregated weighed flux slag, not wire stubs or captured dust.

- Selected flow: Solid submerged-arc welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Conditional evidenced post-control fabrication particles to immediate air unspecified submedium/size; measured fractions replace generic row, captured dust waste separate.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_structure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_structure`

### Process: Surface preparation and coating (`finish`)

Include actual preparation and individual supplied coats where performed; prefinished supplies replace contained site work. No mandatory abrasive/paint recipe.

#### Inputs

##### Product flows

###### Cast steel blasting shot (`blast_shot`)

Conditional actual specification/makeup; internal reclaimed shot not new supply.

- Selected flow: Cast steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated industrial epoxy anticorrosion primer (`epoxy_primer`)

Conditional one actual supplied mixed primer; separately purchased base/hardener separate cards; formulation/SDS/solids measured.

- Selected flow: Formulated industrial epoxy anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated industrial polyurethane topcoat (`topcoat`)

Conditional exact supplied product/state and retained dry film; not wood paint or pure resin.

- Selected flow: Formulated industrial polyurethane topcoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Tap water (`finish_water`)

Conditional actual municipal product-water washing; actual density for volume conversion, no direct resource substitution.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Alternating current (`finish_power`)

Actual below1kV blasting/coating/extraction/curing demand; direct combustion curing additional actual fuel/species separately.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

#### Outputs

##### Waste flows

###### Spent steel blasting shot (`spent_shot`)

Conditional separate weighed steel shot with characterised contamination; paint filters/sludge separate.

- Selected flow: Spent steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Waste paint (`paint_residue`)

Actual segregated coating overspray/residue if generated, excluding filters and aqueous sludge.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Conditional measured xylene CAS1330-20-7 immediate-air unspecified-submedium after controls; not total VOC.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

### Process: Diesel-electric traction-system installation (`traction`)

Install actual prime mover/alternator, rectifier/DC link/inverters, traction motors and geared interfaces from exact released design. A complete supplied power package replaces its contained separately listed parts.

#### Inputs

##### Product flows

###### Diesel engine (`diesel_engine`)

One actual supplied assembled railway prime mover/model, Number of items preserved. Independently measured supplied/installed engine kg required for complete-unit M balance; alternator/prefill containment explicit. Class43110 non-road railway engine applicability checked; class43123 road engine explicitly excludes railway.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Finished locomotive main traction alternator (`main_alternator`)

Exact supplied AC alternator/model and independently measured mass, not another diesel engine or complete generating set; mounted inclusion explicit.

- Selected flow: Finished locomotive main traction alternator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Finished locomotive traction rectifier module (`rectifier`)

One actual rectifier/DC-link supplied assembly/model and measured mass; separate from inverter unless one complete supplier package, no capacitor duplication.

- Selected flow: Finished locomotive traction rectifier module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Finished IGBT locomotive traction inverter (`traction_inverter`)

One actual traction-rated module/model/mass, controls/cooling contained as declared; no photovoltaic BOS substitution.

- Selected flow: Finished IGBT locomotive traction inverter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Traction motor (`traction_motor`)

One actual supplied AC induction traction motor design/model and measured kg; separately supplied from bogie, otherwise no duplicate. Public source expert mass shares not adopted as inventory.

- Selected flow: Traction motor `c1704402-e49d-43aa-baef-c84209588243`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Finished locomotive traction reduction gear set (`gear_set`)

Actual wheelset motor gear ratio/material, measured supplied mass and containment; no internal gear duplicate.

- Selected flow: Finished locomotive traction reduction gear set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

###### Alternating current (`traction_power`)

Actual below1kV engine/alternator mounting, electrical integration/inspection utilities; supplier motor manufacture upstream.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_traction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_traction`

### Process: Bogie, wheelset and brake assembly (`running`)

Assemble separately supplied frames, wheelsets, suspension and railway brake parts, marry body and bogies. Purchased complete powered bogies replace contained frame/wheelset/motor/gear/brake stocks; actual alternate supply receives its own complete-product card.

#### Inputs

##### Product flows

###### Finished steel locomotive bogie frame (`bogie_frame`)

One actual purchased frame design/material/supplied mass, exclude wheels/motors/suspension. Site-made frame instead expands actual steel/joining without purchased-frame duplicate.

- Selected flow: Finished steel locomotive bogie frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Finished steel locomotive wheelset (`wheelset`)

One actual configured axle and fitted wheels, profile/gauge and measured mass; axleboxes/gears only included if explicitly supplied within scope.

- Selected flow: Finished steel locomotive wheelset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Finished locomotive axlebox bearing assembly (`axlebox`)

Exact actual bearing/box/seal supplied scope and mass; not generic brake assembly.

- Selected flow: Finished locomotive axlebox bearing assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Finished steel locomotive suspension coil spring (`spring`)

One released spring specification and weighed supply; other suspension members separate.

- Selected flow: Finished steel locomotive suspension coil spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Air or vacuum pumps, air or other gas compressors (`air_compressor`)

One complete actual locomotive brake-air compressor/model and measured mass, supplied motor/drive inclusion explicit, upstream category no railway qualification inferred.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Finished locomotive pneumatic brake control valve (`brake_valve`)

One exact railway valve/model/rating and supplied mass; brake cylinders/pipe/discs are distinct exchanges, not components collection.

- Selected flow: Finished locomotive pneumatic brake control valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Finished locomotive pneumatic brake cylinder (`brake_cylinder`)

One actual supplied cylinder/model/scope and weighed mass; supplier complete bogie brake containment excludes duplicate.

- Selected flow: Finished locomotive pneumatic brake cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

###### Alternating current (`running_power`)

Actual below1kV bogie/wheelset/brake assembly and carbody marriage energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_running.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_running`

### Process: Cooling, cab and electrical outfitting (`outfit`)

Fit exact cooling, cab, auxiliary starting battery, wiring/control and safety components; purchased cab/package interiors not repeated.

#### Inputs

##### Product flows

###### Finished locomotive diesel-engine cooling radiator (`radiator`)

Actual circuit/model/material and measured supply, fan and pump contained only if declared; not room-heating radiator.

- Selected flow: Finished locomotive diesel-engine cooling radiator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Finished insulated copper locomotive power cable (`copper_cable`)

Actual voltage/conductor/insulation supplied kg, railway qualification actual, no energy-to-mass assumption.

- Selected flow: Finished insulated copper locomotive power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V (`switchboard`)

One actual complete auxiliary/control distribution board rated at most1000V, exact supplied configuration/mass; higher voltage traction cabinets distinct.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Finished lead-acid locomotive starter battery (`starter_battery`)

Actual chemistry/capacity/model supplied kg and electrolyte containment; auxiliary start battery not hybrid traction energy store.

- Selected flow: Finished lead-acid locomotive starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Laminated Glass (`cab_glass`)

Actual supplied flat laminated cab pane construction/thickness/interlayer and measured single-face m2 at supplied cut size, preserving public Area. Independently weigh supplied/installed pane kg for whole-locomotive M balance, no catalogue density/thickness mass guess; actual railway qualification separate.

- Selected flow: Laminated Glass `78005a08-9828-4750-8aec-1526a2abd288`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### rock wool (`insulation`)

Conditional actual cab acoustic/thermal grade/density/binder/facing kg, already-contained insulation omitted, separate facing if separately purchased.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

###### Alternating current (`outfit_power`)

Actual below1kV cab, cooling, cable/control installation demand including rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_outfit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outfit`

### Process: Factory trials and net-mass acceptance (`acceptance`)

Actual released pressure/brake/electrical/static and bounded acceptance runs, rework and current weighing/net-mass release. No commercial haulage inventory or assumed trial load.

#### Inputs

##### Product flows

###### Diesel fuel (`test_diesel`)

Measured actual fossil fuel consumed during bounded factory/static and acceptance runs, issued less returned/retained; provider/grade/sulfur/carbon independently evidenced. No service fuel stock as test consumption.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Formulated mineral diesel-engine lubricating oil (`engine_oil`)

One actual grade/formulation separately added kg beyond supplier prefill; retained versus consumed/removed reconciled.

- Selected flow: Formulated mineral diesel-engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Formulated ethylene-glycol locomotive coolant (`coolant`)

Actual measured formulation/concentration/state, not pure glycol; supplier prefill versus site addition explicit; retained circuit fluid mass reconciled.

- Selected flow: Formulated ethylene-glycol locomotive coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Tap water (`test_water`)

Actual municipal flushing/testing product water, fresh makeup versus internal reuse, measured density for volumes; coolant contained water not counted twice.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Dried graded silica locomotive traction sand (`test_sand`)

Conditional actual measured sand consumed in acceptance adhesion tests, grain/moisture and supplier drying recorded; delivered reservoir stock excluded from M and test consumption.

- Selected flow: Dried graded silica locomotive traction sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Alternating current (`acceptance_power`)

Actual below1kV shore inspection, test rig and weighing demand. Internally generated diesel-electric trial energy transfer, not additional purchased electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Diesel-electric locomotives (`finished_machine`)

1kg share of actual accepted configured complete new diesel-only mainline heavy-haul AC traction locomotive, measured corrected net M, supplied engine/AC chain/bogie/body and installed fit-list complete.

- Selected flow: Diesel-electric locomotives `ee6ef3e3-ee4c-4116-977a-8f715c974cf6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Used lubricating oil (`used_oil`)

Actual segregated spent mineral test machinery oil, not coolant/water mixture or retained fill.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Locomotive circuit flushing wastewater sent to treatment (`test_wastewater`)

Conditional actual characterised aqueous flushing stream, glycol/oil concentration and route recorded; coolant concentrate waste separate.

- Selected flow: Locomotive circuit flushing wastewater sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional actual test fossilCO2 CAS124-38-9 immediate-air unspecified-submedium measured release; no commercial haulage factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### nitrogen monoxide (`nitric_oxide_air`)

Conditional separately measured actual NO CAS10102-43-9 immediate-air unspecified-submedium; NO2/N2O/totalNOx not interchangeable.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared_operations | Subdivide work orders by accepted locomotive configuration and stage first. Shared cutting/welding/coating, lifting, mixed-model assembly and test rigs use actual exchange-specific metered causal demand/load/time from cp_allocation. Reconcile all served work to supplied totals; no universal installed mass, rated power, line speed or production-count share. | wabtec-moving-2024 |
| allocation_rework | configurations | Attribute actual rejected-part/rework burden to accepted construction. Each configuration retains independently measured M and matched numerator before pooling by disclosed measured accepted mass. Any residual physical/economic fallback requires actual driver/cost/market records, sensitivity and review; no invented percentages. |  |
| allocation_recovery | outputs | Recovered internal steel/abrasive/flux/water is transfer, not automatic co-product or avoided production. Outgoing wastes keep condition, treatment and responsibility. Saleable co-product needs actual quality/market and reviewed allocation; no future locomotive-recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted locomotive | current completed acceptance cycle | same complete installed delivery configuration | accepted net mass per unit | quality_weighing actual calibrated rail/axle/wheel record; tank/net corrections; fit-list mass balance and uncertainty |
| cp_structure | structure | each atomic process row | measurement | steel grade/heat/thickness; stock issues/returns; cut/form/weld job; wire/flux; actual energy; offcuts/slag/particle controls | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_finish | finish | each atomic process row | measurement | surface/formulation/SDS/solids; supplied primer/topcoat; abrasive makeup/recovery; retained film; residue; water/energy; post-control xylene flow/concentration/time | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_traction | traction | each atomic process row | measurement | engine model/count and independent measured supplied kg; AC chain voltage/models/masses; supplied package and prefill scope; alignment/wiring/tests; actual utilities | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ; Item(s) | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_running | running | each atomic process row | measurement | bogie frame/wheelset/axlebox/gear/spring/brake part identifiers and supplied/installed masses; completed module containment; track gauge/axle wheel record; assembly utilities | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_outfit | outfit | each atomic process row | measurement | cab/cooling/battery/cable/board/pane/insulation fit-list and supplied masses; voltage/formulation and contained fluids; actual installation demand | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ; m2 | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_acceptance | acceptance | each atomic process row | measurement | locomotive configuration; current released plan; test loads/time/track; fuel issued/returned/retained; oil/coolant/tank state; actual gas species/flow; wastes; wheel/axle weighing and calibrated complete-unit M with signed corrections | Measure each actual physical supply issue less return and stock change, independently characterised outgoing stream and attributable metered job demand. Trace part/package containment, rework and matched accepted units; sample actual post-control release species/air flow/time only where evidenced. | kg; MJ | each locomotive/work order; reporting stock and meter closure | whole declared manufacture including rework | all included fabrication/assembly/test sites and outsourced work | attributable exchange amount / accepted units | calibration; supplier fit-list/part labels; actual stock/work/test/acceptance logs; uncertainty |
| cp_allocation | manufacturing | shared_load | measurement | total supply; actual meter/load/time; all served configurations; excluded work | Measure actual exchange-specific causal demand for all served work, document driver and reconcile shares to total supply; retain uncertainty and sensitivity. | MJ; h | each shared batch and report period | same construction period | all served sites/configurations | partition measured causal demand; attributable amount / accepted units | total meter/work-order closure and driver evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | body_plate; body_angle; weld_wire; weld_flux; structure_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; topcoat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; diesel_engine; main_alternator; rectifier; traction_inverter; traction_motor; gear_set; traction_power; bogie_frame; wheelset; axlebox; spring; air_compressor; brake_valve; brake_cylinder; running_power; radiator; copper_cable; switchboard; starter_battery; cab_glass; insulation; outfit_power; test_diesel; engine_oil; coolant; test_water; test_sand; acceptance_power; used_oil; test_wastewater; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is measured attributable same-configuration exchange after issue/return, stock and rework reconciliation divided by matched accepted units. Keep kg, MJ, supplied pane m2 or actual engine Item(s) numerator; independently measured engine kg closes installed mass rather than numerically adding items to kg. Volume/density, part count/mass or supplied formulation/concentration conversions need actual same-product/state evidence with uncertainty. No rated-power-to-mass or assumed catalogue weight.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | cp_mass requires actual current accepted complete-locomotive weighing with a calibrated railway scale/traceable wheel- or axle-load measuring system appropriate to the method used. Keep original serial/configuration, date, instrument/calibration/tare, all wheel/axle identifiers/readings, repeated checks and actual static/dynamic method conditions. The signed result must account for every axle once, support total mass without duplicated wheel/axle sums, and correct documented actual fuel/sand/test fixtures and other excluded stocks. Independently reconcile supplied installed engine, body, bogie, traction equipment, outfit and retained technical fluids against complete fit-list, actual measured corrections and uncertainty. Missing actual weighing or corrected delivery-state evidence blocks dataset use. Catalogue operating/adhesion weight, axle limit times count, rated power, fuel-full weight and guessed residual cannot replace M. | calibration and original locomotive-specific axle/wheel weighing; independent installed BOM |
| quality_delivery | finished_machine | Reference output includes complete declared fitted body/bogies/traction/cab/cooling/braking/safety and auxiliary starter battery with retained technical oil/coolant/electrolyte once. Exclude fuel/sand service stores, persons/cargo, packaging, detached spares, temporary test rigs/load banks and transport attachments outside released product. Identify any permanent designed ballast in installed configuration; actual measured mass only. Document dry versus wet equipment and each measured tank/net correction; no assumed empty/full tank. | released fit-list; supplier containment; measured tank/correction and acceptance state |
| quality_engine | diesel_engine | Keep actual supplied engine count under public Number of items and independently measured received dry/installed kg, model and serial. Railway prime mover class43110 differs from road-propulsion class43123 which excludes railway/tram rolling stock. Supplier contained alternator, starter, cooling or fluids must be reconciled to independently supplied items and whole M, with no second alternator/engine counted inside package. Taxonomy source supports distinction only, not engine weight or railway performance approval. | un-engine-scope; supplier model/serial and independent engine weighing |
| quality_identity | flows | Require actual grade, chemical/formulation, route/state, voltage and supplied configuration; preserve public properties. Traction motor public expert mass-share example is not this locomotive inventory. Cable/battery energy property cannot be rewritten kg; same-product conversion evidence required or identity gap retained. Mineral oil not PAO, formulated coolant not pure glycol, dry traction sand not unqualified silica. PM/xylene/fossilCO2/NO need species/CAS/source and immediate-air medium evidence; no totalNOx as NO or totalVOC as xylene. | supplier certificates/SDS; outlet samples and physical identity records |
| quality_tests | acceptance | Retain actual current released factory plan/results for weld/dimensional inspection, electrical insulation/controls, prime mover/traction chain, brake/air leak, cooling and static/load/acceptance running tests where applicable, plus exact loads/duration/endpoints and rework. Current authority/operator approvals only when actually established. Progress brochure case emission class, maintenance interval, power, fuel capacity and operating mass are not generic acceptance thresholds or lifetime rules. Separate test fuel consumed from retained delivery fuel and technical fills; no assumed emission factor. | released configuration-specific test records; progress-sd70ace |
| quality_coverage | dataset | Every actual fit-list/route exchange needs measured/calculated/estimated/missing/excluded/not-applicable disclosure. Add specific cards for actual additional couplers/draft gear, air reservoirs/pipes/hoses, exhaust/silencer/aftertreatment when fitted, resistor grid/fans, controls/safety cab parts, joining chemistry, separate coolant waste, packaging and contracted support/treatment. No mixture/collection row. Foreground records and compatible upstream modules required before complete-data or cradle-to-gate claims. | complete fit-list/work orders; coverage and stock/meter closure; uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1kg accepted complete configured output and same-unit cp_mass actual weighing/net corrections with independent fit-list mass balance. The finite declared q_item/M check is not a physical weighing or scientific approval. |  |
| validation_basis | inventory | Match configuration, accepted count, reporting cycle, numerator units and linked collection to normalize_mass. Engine Item(s) must retain separate actual kg evidence; no count/property rewriting. |  |
| validation_packages | manufacturing | Audit engine/alternator/powered-bogie/cab supplier scope and prefill against independent installed BOM. Reject duplicates and missing supplied interfaces. Check AC induction versus DC, hybrid/dual-fuel and excluded service-route differences before use. | progress-sd70ace |
| validation_release | elementary | Verify actual post-control species/CAS, fossil provenance, medium/submedium/time and test boundary. NO is not NO2/N2O/totalNOx; captured dust not air release, wastewater not freshwater resource. Expand actual additional emissions when measured, never make all conditional releases mandatory. |  |
| validation_completeness | dataset | Keep unresolved identities and missing physical records explicit. Complete actual weighing/corrections, route/acceptance records, fit-list and supplier/utility/transport/treatment coverage before use; structural pass cannot confer methodology approval or complete cradle-to-gate coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing one complete new diesel-only mainline heavy-haul diesel-electric locomotive with AC induction traction: actual underframe/carbody fabrication, surface finishing, supplied railway diesel prime mover/main alternator and rectifier/DC-link/inverter chain installation, bogie/wheelset/traction motor and brake assembly, cab/cooling/electrical outfit, bounded factory/static and acceptance testing and corrected net-mass release. Select one actual released locomotive number, gauge, axle/powered-axle arrangement and installed configuration. This scope is narrower than CPC49512. |
| excluded_use | Exclude DC-traction locomotives, externally powered electric locomotives, battery/hybrid traction, gas/diesel dual-fuel, diesel-hydraulic/mechanical drive, shunters, multiple units, separately sold parts, overhaul and remanufacture. Auxiliary starting batteries are included when fitted and do not imply hybrid traction. Exclude commercial train haulage, tonne-km, operational fuel/maintenance, tracks/depots and end of life. Actual manufacturing-support transfers and acceptance runs require explicit measured endpoints, loads/time and coverage; service fuel or sand stores are not manufacturing consumption or net output mass. |
| required_metadata | locomotive identifier/model; released design/revision, gauge and axle/powered arrangement; underframe/carbody steel grade/thickness/heat certificate and weld route; make-or-buy and prefinished scope; supplied railway engine model/count and independent actual dry/installed kg; alternator/rectifier/DC-link/inverter/motor voltage/type and package containment; bogie/frame/wheelset/gear/brake/suspension configuration and independently measured masses; cab/safety/cooling/auxiliary battery and electrical fit-list; actual coating/SDS; supplier-prefilled versus separately added technical fluids; net delivery tank/sand/technical-fluid state; sites/period/accepted count; actual test loads/time/fuel returns/consumption; current calibrated railway weighing method and full axle/wheel record plus signed net corrections M; uncertainty/mass balance; provider/transport/utility/treatment coverage |
| required_quality_disclosure | Actual configuration/gauge/axles and package boundaries; calibrated complete-unit weighing originals/conditions and corrected net M uncertainty; supplied engine count/independent mass and technical fills; full installed BOM; sites/period/accepted count/rework; bounded trials, stock/utility closure, allocation evidence/sensitivity, upstream gaps and unresolved identities; scientific review state. |
| update_trigger | Locomotive drive/engine/AC chain/gauge/axle/bogie/cab configuration; steel/coating/joining or supplier/make-or-buy scope; factory/test/weighing route or period; delivery fluids/state, physical evidence and identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| progress-sd70ace | handbook | Progress Rail SD70ACe Freight Locomotive, document16-0096.4, undated official retained brochure, PDF pp1–2, product architecture/Features and Benefits. https://s7d2.scene7.com/is/content/Caterpillar/CM20170915-63120-28925 | Case diesel prime mover/control/AC traction and optional variants. No numeric weight, axle count, power, fuel capacity, operating factors, emission approval or maintenance/service life adopted; current released configuration/tests required. |
| wabtec-moving-2024 | handbook | Wabtec On the Move,4December2024, official HTML, Contagem mixed-model assembly paragraphs, unpaginated. https://www.wabteccorp.com/trains-of-thought/on-the-move | Independent manufacturer configuration-specific/shared assembly architecture; actual work orders, demand and allocation required. No moving-line mandate, line-speed factor, site requirement or fixed burden share. |
| un-engine-scope | official_guidance | UNSD ISIC Revision4, class2811 Manufacture of engines and turbines, except aircraft, vehicle and cycle engines; explanatory includes marine and railway engines and detailed structure CPC43110 link; unpaginated official classification HTML. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/en/27/2811 | Historical taxonomy distinction supports separate railway versus road-propulsion engine applicability alongside public original scope. No manufacturing LCI, engine mass, current railway approval or numeric conversion inferred. |
