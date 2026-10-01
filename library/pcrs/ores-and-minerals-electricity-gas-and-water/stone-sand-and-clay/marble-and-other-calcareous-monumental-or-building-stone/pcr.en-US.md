---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.marble-and-other-calcareous-monumental-or-building-stone
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Marble and other calcareous monumental or building stone

## 1. Scope and Applicability

This PCR covers marble and other calcareous stone supplied as quarry blocks or rough-cut monumental/building blanks at one declared quarry or rough-processing gate. Distinguish integrated extraction from standalone processing of supplied burden-bearing stone. Include actual site development, extraction, cutting/splitting, sorting, storage/loading, water/waste/dust controls and attributable rehabilitation through the gate. Keep carbonate stone as a mined material: quarrying and mechanical cutting do not justify a calcination CO2 release. Treat marble and other calcareous varieties by actual mineralogy and cutting/reject records, not an assumed pure-CaCO3 composition. Subsequent finishing, installation and building-service performance are separate datasets. `ifc-construction-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.marble-and-other-calcareous-monumental-or-building-stone |
| classification_refs | CPC 3.0:15120 |
| covered_products | marble and other calcareous stone supplied as quarry blocks or rough-cut monumental/building blanks |
| excluded_products | lime/cement feed at its chemical-manufacture gate; calcined lime; stone powder as reference; finished polished/resin-treated articles; granite and sandstone |
| representative_product | Marble and other calcareous monumental or building stone at the declared rough gate |
| production_route | Quarry development and rehabilitation; Rock extraction and block handling; Rough cutting, splitting and sorting; Water, waste and dust management; Accepted-product loading |
| market_state | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg of qualified calcareous dimension stone; no equivalence claim per installed area or service lifetime |
| How much | 1 kg |
| How well | site/year; geology and extraction method; integrated/standalone start; actual lithology and carbonate mineralogy; block/slab dimensions; fissures/veins and usable grade; raw/rough-cut state; moisture; declared strength/absorption evidence; loading gate; net mass and stock change; cut/split losses; water source/return; waste fate; allocation; development/closure lifetime-output basis |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marble and other calcareous monumental or building stone at the declared rough gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; geology and extraction method; integrated/standalone start; actual lithology and carbonate mineralogy; block/slab dimensions; fissures/veins and usable grade; raw/rough-cut state; moisture; declared strength/absorption evidence; loading gate; net mass and stock change; cut/split losses; water source/return; waste fate; allocation; development/closure lifetime-output basis |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is positive accepted net as-received stone mass in kg at the declared gate, excluding packaging, reject pieces and returned product. Independently weigh net loads or validate piece/volume records against measured mass/density and actual shape; never assume a universal density or per-piece mass. Reconcile extracted/supplied stone, saleable stone, scrap, saw kerf/slurry solids, stock changes and dust. Measure moisture and solid fraction separately; circulated cutting water is not repeated new intake. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual rock deposit for integrated quarrying, or purchased raw stone for standalone rough processing |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | marble and other calcareous stone supplied as quarry blocks or rough-cut monumental/building blanks |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; geology and extraction method; integrated/standalone start; actual lithology and carbonate mineralogy; block/slab dimensions; fissures/veins and usable grade; raw/rough-cut state; moisture; declared strength/absorption evidence; loading gate; net mass and stock change; cut/split losses; water source/return; waste fate; allocation; development/closure lifetime-output basis |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers marble and other calcareous stone supplied as quarry blocks or rough-cut monumental/building blanks at one declared quarry or rough-processing gate. Distinguish integrated extraction from standalone processing of supplied burden-bearing stone. Include actual site development, extraction, cutting/splitting, sorting, storage/loading, water/waste/dust controls and attributable rehabilitation through the gate. Keep carbonate stone as a mined material: quarrying and mechanical cutting do not justify a calcination CO2 release. Treat marble and other calcareous varieties by actual mineralogy and cutting/reject records, not an assumed pure-CaCO3 composition. Subsequent finishing, installation and building-service performance are separate datasets. | `ifc-construction-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Quarry development and rehabilitation | conditional | Integrated quarry and attributable closure | Foreground production | per 1 kg reference flow |
| extraction | Rock extraction and block handling | conditional | Integrated primary quarrying | Foreground production | per 1 kg reference flow |
| roughing | Rough cutting, splitting and sorting | conditional | Actual rough-processing operations | Foreground production | per 1 kg reference flow |
| controls | Water, waste and dust management | conditional | Actual site controls | Foreground production | per 1 kg reference flow |
| dispatch | Accepted-product loading | required | All declared sites | Foreground production | per 1 kg reference flow |

### Process: Quarry development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Development and rehabilitation diesel (`development_diesel`)

Actual stripping/rehabilitation equipment; retain lifetime-output attribution and avoid repeated annual full charge.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Quarry overburden (`overburden`)

Actual removed overburden; topsoil stock/reuse and habitat-specific land change require separate records.

- Selected flow: Quarry overburden
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `ifc-construction-2007`

### Process: Rock extraction and block handling (`extraction`)

#### Inputs

##### Product flows

###### Extraction and quarry-haul diesel (`quarry_diesel`)

Actual equipment and loaded/empty movement, excluding downstream road transport outside the gate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_quarry_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quarry_diesel`
- Sources: `ifc-construction-2007`

###### Extraction machinery electricity (`extraction_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drilling, diamond-wire cutting or powered lifting; exclude rough-cutting meter duplication.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_power`
- Sources: `ifc-construction-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo`)

Only an actual ANFO blasting route; retain charge and product quality effects. Other explosives need individual identities; nonblasted routes exclude this row.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo`
- Sources: `ifc-construction-2007`

##### Elementary flows

###### Calcareous dimension stone in the geological deposit (`rock_resource`)

Only integrated primary extraction; record actual lithology, mass and deposits, separately from overburden.

- Selected flow: Calcareous dimension stone in the geological deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_rock_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rock_resource`
- Sources: `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Calcareous dimension stone quarry reject (`quarry_reject`)

Actual damaged or unsuitable extracted rock transferred to management; define recovery to fill or aggregate separately.

- Selected flow: Calcareous dimension stone quarry reject
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_quarry_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quarry_reject`
- Sources: `ifc-construction-2007`

### Process: Rough cutting, splitting and sorting (`roughing`)

#### Inputs

##### Product flows

###### Supplied raw calcareous dimension stone (`supplied_stone`)

Only standalone processing; supplier carries extraction and agreed transport. Cancel integrated internal block transfer.

- Selected flow: Supplied raw calcareous dimension stone
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_stone; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_stone`
- Sources: `ifc-construction-2007`

###### Rough-cutting and splitting electricity (`roughing_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual saws/splitters/compressors; manual splitting retains actual other utilities without invented electricity.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_roughing_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_roughing_power`
- Sources: `ifc-construction-2007`

###### Replacement diamond cutting wire (`diamond_wire`)

Only actual diamond-wire equipment; allocate replaced wire mass by measured lifetime cutting output. Each blade or different tool is separate.

- Selected flow: Replacement diamond cutting wire
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_diamond_wire; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_diamond_wire`
- Sources: `ifc-construction-2007`

###### Supplied cutting-water make-up (`cutting_water`)

Only purchased new water; circulating slurry/water is internal. Direct abstraction needs its own resource/basin record.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_cutting_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cutting_water`
- Sources: `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Calcareous dimension stone cutting/splitting offcuts (`cut_reject`)

Only actual rejected solid pieces; distinguish from kerf slurry and from accepted product grades.

- Selected flow: Calcareous dimension stone cutting/splitting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_cut_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cut_reject`
- Sources: `ifc-construction-2007`

### Process: Water, waste and dust management (`controls`)

#### Inputs

##### Product flows

###### Site-control electricity (`control_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual pumping, settlement/dewatering and dust control; shared meters allocated once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_control_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_control_power`
- Sources: `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Calcareous dimension stone sawing sludge (`saw_sludge`)

Actual transferred wet kerf sludge; measure dry solids, moisture and management fate; do not count recycled solids twice.

- Selected flow: Calcareous dimension stone sawing sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_saw_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_saw_sludge`
- Sources: `ifc-construction-2007`

###### Stone-process wastewater transferred for treatment (`water_purge`)

Only actual purge/treatment transfer; receiving-water discharge needs species and compartment rows plus returned volume.

- Selected flow: Stone-process wastewater transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_water_purge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_purge`
- Sources: `ifc-construction-2007`

##### Elementary flows

###### Mineral PM10 to outdoor air (`pm10_air`)

Actual quarry, haul and cutting dust after controls; retain measured particle/composition basis and actual mineral dust identity.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `ifc-construction-2007`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Only actual foreground fuel combustion; retain measured fuel/carbon balance and traceable factor. Carbonate rock is not automatically a combustion/calcination emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `ifc-construction-2007`

### Process: Accepted-product loading (`dispatch`)

#### Inputs

##### Product flows

###### Loading diesel (`loading_diesel`)

Actual accepted-product loading equipment; separate quarry handling and downstream transport.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `ifc-construction-2007`

#### Outputs

##### Product flows

###### Marble and other calcareous monumental or building stone at the declared rough gate (`final_product`)

One actual lithology and market state; net accepted stone mass excludes packaging, slurry and reject pieces.

- Selected flow: Marble and other calcareous monumental or building stone at the declared rough gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `ifc-construction-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide extraction, rough cutting/splitting and downstream finishing where possible. Attribute development and closure once by disclosed lifetime accepted output. Retain unallocated inventory for true jointly produced grades or by-products. Scrap sold as aggregate or reused as fill does not automatically gain avoided-product credit; disclose its actual burden and destination. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_rock_resource | extraction | `rock_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_quarry_diesel | extraction | `quarry_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo | extraction | `anfo` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_quarry_reject | extraction | `quarry_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use matched-period weighing, surveyed volume with measured bulk density or calibrated slurry flow and solids assay. Record wet/dry basis, actual rock type, stock changes, recycling fraction and treatment/fill/aggregate destination; reconcile solids and water separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_stone | roughing | `supplied_stone` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_roughing_power | roughing | `roughing_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_diamond_wire | roughing | `diamond_wire` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Retain purchased and retired tool masses, actual replaced fraction, tool service life and measured attributable output over that life. Count reusable wire once; no generic kg/tool or wire-per-stone factor. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_cutting_water | roughing | `cutting_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_cut_reject | roughing | `cut_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use matched-period weighing, surveyed volume with measured bulk density or calibrated slurry flow and solids assay. Record wet/dry basis, actual rock type, stock changes, recycling fraction and treatment/fill/aggregate destination; reconcile solids and water separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_control_power | controls | `control_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_saw_sludge | controls | `saw_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use matched-period weighing, surveyed volume with measured bulk density or calibrated slurry flow and solids assay. Record wet/dry basis, actual rock type, stock changes, recycling fraction and treatment/fill/aggregate destination; reconcile solids and water separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_water_purge | controls | `water_purge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use matched-period weighing, surveyed volume with measured bulk density or calibrated slurry flow and solids assay. Record wet/dry basis, actual rock type, stock changes, recycling fraction and treatment/fill/aggregate destination; reconcile solids and water separately. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently record positive accepted net loading kg D by calibrated weighbridge/scale, subtract packaging/returns/rejects and reconcile stocks. If collected by piece, area or volume, sample measured dimensions, actual shape and density/net mass to document conversion to kg for that product state, with uncertainty; no assumed block or piece weight. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared raw block, quarry slab or simple rough blank at loading, with measured moisture | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is positive accepted net as-received stone mass in kg at the declared gate, excluding packaging, reject pieces and returned product. Independently weigh net loads or validate piece/volume records against measured mass/density and actual shape; never assume a universal density or per-piece mass. Reconcile extracted/supplied stone, saleable stone, scrap, saw kerf/slurry solids, stock changes and dust. Measure moisture and solid fraction separately; circulated cutting water is not repeated new intake. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is positive accepted net as-received stone mass in kg at the declared gate, excluding packaging, reject pieces and returned product. Independently weigh net loads or validate piece/volume records against measured mass/density and actual shape; never assume a universal density or per-piece mass. Reconcile extracted/supplied stone, saleable stone, scrap, saw kerf/slurry solids, stock changes and dust. Measure moisture and solid fraction separately; circulated cutting water is not repeated new intake. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg of qualified calcareous dimension stone; no equivalence claim per installed area or service lifetime |
| excluded_use | lime/cement feed at its chemical-manufacture gate; calcined lime; stone powder as reference; finished polished/resin-treated articles; granite and sandstone |
| required_metadata | site/year; geology and extraction method; integrated/standalone start; actual lithology and carbonate mineralogy; block/slab dimensions; fissures/veins and usable grade; raw/rough-cut state; moisture; declared strength/absorption evidence; loading gate; net mass and stock change; cut/split losses; water source/return; waste fate; allocation; development/closure lifetime-output basis |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | Quarry route, dust, water, waste and land scope; no universal consumption range. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
