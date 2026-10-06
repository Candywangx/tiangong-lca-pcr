---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armoured-vehicle-environmental-manufacturing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Armoured vehicle environmental surface-finishing account

## 1. Scope and Applicability

Environmental foreground account for surface finishing of one supplied new complete uncoated non-live motorized armoured vehicle. The factory receives a physically complete unit, records its procurement gate and actual environmental configuration identity, attributes actual conditional cleaning and supplied coating consumption, environmental-control electricity, water, collected wastes and measured releases, then records environmental quality acceptance, independent complete net mass and dispatch. Earlier vehicle and component construction is upstream. This PCR specifies environmental accounting and general metrology only; it provides no vehicle or weapon design, manufacture parameters, assembly sequence, functional details or performance optimization.

Exclude parts-only manufacture or component/weapon integration, design or ballistic/functional testing, armour specifications and operating instructions, ammunition and energetic payload, operation, fuel consumption in service, transport service, refurbishment, dismantling and disposal. Product M excludes external packaging, temporary test/support equipment, operational fuel and live/test payload. This foreground starts with a whole supplied vehicle and is not all vehicle manufacture or complete cradle-to-gate. Any actual additional manufacturing route requires independent applicability and safe evidence review rather than inferred operations.

No material armoured-vehicle environmental method found in the current-worktree manifest scan; old44710 scaffold is not promoted. Ordinary vehicle/tractor methods offer reusable environmental metering and normalization controls but do not establish this supplied complete uncoated non-live starting state and finish-only whole-vehicle reference boundary. This candidate is narrowly bounded by the procurement gate and observed environmental stages, not classification code alone; independent overlap/scientific review remains pending. Military manufacturing or security services are excluded, and no other author unfrozen canonical content was read.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.armoured-vehicle-environmental-manufacturing |
| classification_refs | CPC:3.0:44710; narrower; no accepted mapping claimed |
| covered_products | Environmental foreground account for surface finishing of one supplied new complete uncoated non-live motorized armoured vehicle. The factory receives a physically complete unit, records its procurement gate and actual environmental configuration identity, attributes actual conditional cleaning and supplied coating consumption, environmental-control electricity, water, collected wastes and measured releases, then records environmental quality acceptance, independent complete net mass and dispatch. Earlier vehicle and component construction is upstream. This PCR specifies environmental accounting and general metrology only; it provides no vehicle or weapon design, manufacture parameters, assembly sequence, functional details or performance optimization. |
| excluded_products | Exclude parts-only manufacture or component/weapon integration, design or ballistic/functional testing, armour specifications and operating instructions, ammunition and energetic payload, operation, fuel consumption in service, transport service, refurbishment, dismantling and disposal. Product M excludes external packaging, temporary test/support equipment, operational fuel and live/test payload. This foreground starts with a whole supplied vehicle and is not all vehicle manufacture or complete cradle-to-gate. Any actual additional manufacturing route requires independent applicability and safe evidence review rather than inferred operations. |
| representative_product | One supplied complete new non-live motorized vehicle at the finishing factory gate; actual environmental configuration declared, no technical design information. |
| production_route | Incoming environmental ledger and conditional cleaning; Actual surface-finishing environmental ledger; Environmental acceptance, independent net mass and dispatch |
| market_state | New complete environmentally accepted surface-finished vehicle, external packaging separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Environmental foreground manufacture-stage surface finishing of one supplied complete vehicle. |
| How much | 1kg accepted complete net vehicle output using independent actual M kg per same-configuration vehicle, not paint mass or pooled parts. |
| How well | Complete declared non-live supplied configuration, environmental batch/SDS identity and stock/waste closure, original net mass and procurement boundary accepted under current environmental quality plan. No functional/protection performance claim. |
| How long or cycle | One factory finishing acceptance and dispatch cycle; no service life. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tanks and other armoured fighting vehicles, motorized, and parts thereof `df061b40-6778-4622-adba-644b49be3524` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | environmental product/configuration ID and serial, complete supplied non-live state, received versus finished net mass and retained coating/fluids convention, supplier gate and transport boundary, individual formulation SDS/batch/state and waste destination, actual site/period/meter voltage, same-configuration accepted count and rejects/rework, original whole-unit calibrated net weighing and independent mass closure, optional pollutant CAS/medium/post-control method/uncertainty, upstream/flow gaps and pending scientific review |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | prepare_power; finish_power; dispatch_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and multiply by3.6MJ/kWh; record original meter uncertainty and attribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Environmental foreground account for surface finishing of one supplied new complete uncoated non-live motorized armoured vehicle. The factory receives a physically complete unit, records its procurement gate and actual environmental configuration identity, attributes actual conditional cleaning and supplied coating consumption, environmental-control electricity, water, collected wastes and measured releases, then records environmental quality acceptance, independent complete net mass and dispatch. Earlier vehicle and component construction is upstream. This PCR specifies environmental accounting and general metrology only; it provides no vehicle or weapon design, manufacture parameters, assembly sequence, functional details or performance optimization. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:44710; complete non-live vehicle only, no parts pool |
| recursive_input_rule | Incoming whole vehicle manufacture remains upstream; no engine, armour, weapon or component manufacture invented locally. Match supplier complete-unit content/gate and avoid duplicate upstream components or retained fluid. |
| upstream_dataset_requirement | Before extension require actual supplied whole-unit identity/state, upstream inventory scope, electricity voltage, supplied coating/cleaner SDS, transport and treatment destination. Unknowns disclosed, no complete cradle-to-gate claim. |
| disclosure | Exclude parts-only manufacture or component/weapon integration, design or ballistic/functional testing, armour specifications and operating instructions, ammunition and energetic payload, operation, fuel consumption in service, transport service, refurbishment, dismantling and disposal. Product M excludes external packaging, temporary test/support equipment, operational fuel and live/test payload. This foreground starts with a whole supplied vehicle and is not all vehicle manufacture or complete cradle-to-gate. Any actual additional manufacturing route requires independent applicability and safe evidence review rather than inferred operations. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_environment | all processes | Environmental procurement, energy, water, chemical and waste ledgers only. No weapon/vehicle assembly tutorial, technical parameters, protection criteria, function or operating details enter this PCR. Actual additional operations cannot be assumed from historical EA. | air-environment; water-environment; waste-environment |
| boundary_water | cleaning_effluent | Municipal supply, collected industrial effluent, treatment outputs and actual environmental release are different exchanges. EPA overview applicability depends on actual sector/route/direct discharge; no universal limit prescribed. | discharge-environment |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Incoming environmental ledger and conditional cleaning | required | Receive one physically complete uncoated unit; record whole-unit identity and procurement boundary without internal functional details. Cleaning exchanges only if actual. | foreground_manufacturing | 1kg complete accepted vehicle; conditional exchanges only when actual |
| `finish` | Actual surface-finishing environmental ledger | required | Attribute actual supplied formulations, environmental utilities, wastes and species-specific post-control releases without prescribing coating recipes, parameters or protective performance. | foreground_manufacturing | 1kg complete accepted vehicle; conditional exchanges only when actual |
| `dispatch` | Environmental acceptance, independent net mass and dispatch | required | Reconcile accepted same-configuration count, material/waste/utility balances and independent whole net M before external packaging. No functional or operational test specification. | foreground_manufacturing | 1kg complete accepted vehicle; conditional exchanges only when actual |

### Process: Incoming environmental ledger and conditional cleaning (`prepare`)

Receive one physically complete uncoated unit; record whole-unit identity and procurement boundary without internal functional details. Cleaning exchanges only if actual.

#### Inputs

##### Product flows

###### Supplied complete uncoated non-live motorized armoured vehicle (`incoming_vehicle`)

One actual whole new incoming unit. Prior construction entirely upstream; environmental configuration ID and original net mass only, no technical or functional detail.

- Selected flow: Supplied complete uncoated non-live motorized armoured vehicle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Tap water (`water`)

Conditional actual municipal cleaning makeup measured kg. Technosphere supply, not water resource or contaminated discharge.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Single supplied aqueous industrial cleaning formulation (`cleaner`)

Only actual identified supplier batch/SDS formulation, received kg and stock closure. Separate distinct supplied chemicals; no composition or dilution instruction.

- Selected flow: Single supplied aqueous industrial cleaning formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

###### Alternating current (`prepare_power`)

Actual below1kV metered environmental-stage demand. No rated equipment power or weapon functional test consumption inferred; attributable environmental utilities only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected aqueous cleaning effluent sent to industrial treatment (`cleaning_effluent`)

Conditional one measured contaminated liquid stream with analytical identity and documented treatment recipient, kg. No assumed direct water discharge.

- Selected flow: Collected aqueous cleaning effluent sent to industrial treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_prepare.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_prepare`
- Sources:

##### Elementary flows

### Process: Actual surface-finishing environmental ledger (`finish`)

Attribute actual supplied formulations, environmental utilities, wastes and species-specific post-control releases without prescribing coating recipes, parameters or protective performance.

#### Inputs

##### Product flows

###### Single supplied industrial vehicle primer formulation (`primer`)

Actual supplied single batch formulation wet kg and SDS, no recipe, grades, coating geometry or application parameters. Multiple separately supplied formulations require separate identities.

- Selected flow: Single supplied industrial vehicle primer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Single supplied industrial vehicle finishing-coating formulation (`finish_coating`)

Actual supplied wet formulation and supplier SDS/lot measured kg, original inventory/returns. No coating recipe, mixing ratio, cure setting or protective performance prescribed.

- Selected flow: Single supplied industrial vehicle finishing-coating formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Finished glass-fibre paint-exhaust filter pad (`filter_pad`)

Only when actual installed environmental control uses this specific finished filter medium; received dry kg, supplier formulation/state. Raw glass fibre is not finished filter pad.

- Selected flow: Finished glass-fibre paint-exhaust filter pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Alternating current (`finish_power`)

Actual below1kV metered environmental-stage demand. No rated equipment power or weapon functional test consumption inferred; attributable environmental utilities only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste paint (`paint_residue`)

Conditional separately collected wet finishing-paint residue kg with actual SDS/waste classification and recipient. Do not combine primer waste, filters, solvents or wastewater.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### Paint-contaminated spent glass-fibre filter pad (`spent_filter`)

Conditional one spent physical filter stream including retained contaminant, measured outgoing kg and qualified treatment. Captured particles not air emissions.

- Selected flow: Paint-contaminated spent glass-fibre filter pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Only actual measured post-control release to immediate unspecified ambient air, unspecified particle size. No necessary emission inferred from finishing; captured material separate waste.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

###### xylene (all isomers) (`xylene_air`)

Only actual supplied chemical identity CAS1330-20-7 and species-specific post-control mass/time evidence to immediate unspecified ambient air. Total VOC is not xylene. Historical2021 VOHAP-free source does not prove xylene present.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_finish`
- Sources:

### Process: Environmental acceptance, independent net mass and dispatch (`dispatch`)

Reconcile accepted same-configuration count, material/waste/utility balances and independent whole net M before external packaging. No functional or operational test specification.

#### Inputs

##### Product flows

###### Alternating current (`dispatch_power`)

Actual below1kV metered environmental-stage demand. No rated equipment power or weapon functional test consumption inferred; attributable environmental utilities only.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_dispatch`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive PE-LD external foil kg, outside net M; other real packaging each separately identified.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_dispatch`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tanks and other armoured fighting vehicles, motorized, and parts thereof (`finished_machine`)

Exactly one supplied new complete motorized vehicle after environmental surface finishing, same declared non-live configuration. The public broad identity is restricted here to one complete vehicle, never a mixed parts pool. No live load or functional detail; actual net M kg.

- Selected flow: Tanks and other armoured fighting vehicles, motorized, and parts thereof `df061b40-6778-4622-adba-644b49be3524`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Separate configuration work orders, original meters, issue/return/stock and waste ledgers first. Attribute actual rework/reject environmental burden to accepted same-configuration output; ordered/started count is not accepted count. Prior whole vehicle manufacture not duplicated. |  |
| allocation_shared | shared utilities | Use measured causal environmental equipment time or submetered demand, document actual denominator and uncertainty. If physical allocation genuinely unavailable justify economic basis and sensitivity. No fixed scrap credit or unmeasured generic ratio. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | each accepted whole vehicle | matching finishing acceptance period | actual suitable complete-unit weighing facility | accepted net mass per unit | calibration/tare/raw whole-unit readings and independent incoming-plus-retained-additions mass closure |
| cp_prepare | prepare | independent atomic exchanges | foreground_record | environmental configuration ID; supplier SDS/lot/supply state; original kg issue/return/stock/waste; original kWh and sampling/time/medium; same-configuration accepted count | Record actual individual supplier formulation or physical exchange, original calibrated utility meters and post-control species measurement only if present. Preserve stock/return/accepted-count closure, environmental work-order attribution and waste recipient; no inferred functional operations. | kg; MJ | per unit and full actual period | same-configuration finishing acceptance cycle | actual environmental factory boundary | attributable process exchange / accepted units | actual formulation identity, calibrated readings, uncertainty and stock/count closure |
| cp_finish | finish | independent atomic exchanges | foreground_record | environmental configuration ID; supplier SDS/lot/supply state; original kg issue/return/stock/waste; original kWh and sampling/time/medium; same-configuration accepted count | Record actual individual supplier formulation or physical exchange, original calibrated utility meters and post-control species measurement only if present. Preserve stock/return/accepted-count closure, environmental work-order attribution and waste recipient; no inferred functional operations. | kg; MJ | per unit and full actual period | same-configuration finishing acceptance cycle | actual environmental factory boundary | attributable process exchange / accepted units | actual formulation identity, calibrated readings, uncertainty and stock/count closure |
| cp_dispatch | dispatch | independent atomic exchanges | foreground_record | environmental configuration ID; supplier SDS/lot/supply state; original kg issue/return/stock/waste; original kWh and sampling/time/medium; same-configuration accepted count | Record actual individual supplier formulation or physical exchange, original calibrated utility meters and post-control species measurement only if present. Preserve stock/return/accepted-count closure, environmental work-order attribution and waste recipient; no inferred functional operations. | kg; MJ | per unit and full actual period | same-configuration finishing acceptance cycle | actual environmental factory boundary | attributable process exchange / accepted units | actual formulation identity, calibrated readings, uncertainty and stock/count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | incoming_vehicle; water; cleaner; cleaning_effluent; primer; finish_coating; filter_pad; paint_residue; spent_filter; particle_air; xylene_air; prepare_power; finish_power; dispatch_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is the attributable original exchange balance divided by the actual accepted count of the same complete configuration. Measure M independently for that same net delivery state. Preserve kg or MJ numerators; count traces cannot replace supplied mass. Count/area/volume reference identities need actual measured supported conversion, never a rewritten public Mass property.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_mass | finished_machine | Use actual calibrated suitable whole-unit weighing facility with original serial/date/configuration/readings/tare/repeat uncertainty. Do not invent a vehicle scale or net weight. M contains the same complete supplied non-live unit, retained dry finish and explicitly declared permanently retained supplied fluids counted once. Exclude operational fuel/live or test payload, temporary test/support equipment, external packaging and loose spares. Independently reconcile incoming whole net mass plus actual retained additions minus measured removals with finished M. Catalogue/combat/capacity/gross shipping mass cannot replace physical net records. | actual original whole-unit metrology and independent environmental mass balance |
| quality_supply | incoming_vehicle; primer; finish_coating; cleaner | Trace actual complete incoming uncoated procurement state and environmental ID without describing internal systems. Each received chemical is one actual identified supplier formulation, SDS/version/lot/wet supply state and issue/return balance. A broad wall/cosmetic primer or PTFE/alkyd coating original does not establish vehicle industrial formulation. Separate individually supplied components, but never publish mixing ratios or use instructions. No duplicated complete vehicle plus component inventory. | actual supplier gate/SDS/batch ledger; waste-environment |
| quality_emissions | particle_air; xylene_air | Only actual measured post-control mass/time/species/medium with original method, detection limit and uncertainty. CAS1330-20-7 identifies all-isomer xylene; total VOC, indoor exposure or long-term soil flows are not substitutions. Particle size unspecified only when genuinely unspecified. Captured filters/residue are waste, not airborne release. Historical2021 environmental report includes VOHAP-free coatings; it is not proof any xylene occurs. Zero, below-detection and unmeasured are distinguished. Background electricity emissions not local releases. | air-environment; actual species-specific sampling originals |
| quality_water_waste | water; cleaning_effluent; paint_residue; spent_filter | Record actual supplied water and mass/volume metrology separately from contaminated collected liquids, wet paint residue and spent physical filter. Do not assume1kg/L for an industrial contaminated liquid; any volume-to-mass conversion requires measured same-stream density. Each waste composition/state, actual kg, recipient and treatment boundary independent. Direct discharge and treatment transfer differ. No universal EPA limit or pooled waste. | water-environment; waste-environment; discharge-environment |
| quality_complete | dataset | Reconcile all real supplier/chemical stock, electricity and water meters, waste transfer and same-configuration accepted counts/rework. Add each actually present additional chemical, wiping medium, waste and packaging separately with identity evidence; do not omit a real exchange because no UUID matches. Process map is environmental bookkeeping, not a manufacturing instruction or assertion of mandatory cleaning/coating technology. Actual complete-unit physical and environmental originals required before dataset use; scientific review remains pending. | actual complete original ledgers and qualification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg whole accepted non-live vehicle output. Public finished44710 Mass/kg reference and output names identical in each language; restrict category to whole unit. Require original independent M and mass closure; checker pass does not approve methodology. |  |
| validation_basis | inventory | Stable lowercase row/rule/protocol IDs and both-language kg/MJ basis, accepted same-configuration denominator and independent M agree. Unmeasured exchanges and inconsistent supply states remain review gaps. |  |
| validation_scope | dataset | Only safe environmental foreground from a supplied complete uncoated non-live unit. No weapon technical details or construction route inferred; missing upstream/actual dataset evidence disclosed. |  |
| validation_atomic | all flows | One actual supplied formulation, physical material/waste or chemical/environmental species per row. Official Chinese UUID names, actual property/unit/state retained; conditional emissions require originals. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Environmental foreground account for surface finishing of one supplied new complete uncoated non-live motorized armoured vehicle. The factory receives a physically complete unit, records its procurement gate and actual environmental configuration identity, attributes actual conditional cleaning and supplied coating consumption, environmental-control electricity, water, collected wastes and measured releases, then records environmental quality acceptance, independent complete net mass and dispatch. Earlier vehicle and component construction is upstream. This PCR specifies environmental accounting and general metrology only; it provides no vehicle or weapon design, manufacture parameters, assembly sequence, functional details or performance optimization. |
| excluded_use | Exclude parts-only manufacture or component/weapon integration, design or ballistic/functional testing, armour specifications and operating instructions, ammunition and energetic payload, operation, fuel consumption in service, transport service, refurbishment, dismantling and disposal. Product M excludes external packaging, temporary test/support equipment, operational fuel and live/test payload. This foreground starts with a whole supplied vehicle and is not all vehicle manufacture or complete cradle-to-gate. Any actual additional manufacturing route requires independent applicability and safe evidence review rather than inferred operations. |
| required_metadata | environmental product/configuration ID and serial, complete supplied non-live state, received versus finished net mass and retained coating/fluids convention, supplier gate and transport boundary, individual formulation SDS/batch/state and waste destination, actual site/period/meter voltage, same-configuration accepted count and rejects/rework, original whole-unit calibrated net weighing and independent mass closure, optional pollutant CAS/medium/post-control method/uncertainty, upstream/flow gaps and pending scientific review |
| required_quality_disclosure | Candidate scientific review pending, actual complete incoming/final state and independent M/uncertainty, suppliers and environmental formulation identities, meters/stock/waste/species originals, period/site/configuration/accepted count/rework/allocation, unresolved flow IDs and upstream/transport/treatment gaps. Per-kg whole-vehicle finishing account cannot compare operation or protective performance and is not full cradle-to-gate. |
| update_trigger | Actual incoming supply state or environmental configuration, formulation SDS/supplier, site/period/meter/control route, waste recipient, mass method, source/flow identity or scientific overlap review changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| air-environment | handbook | U.S. Army, Life Cycle Environmental Assessment for the Mobile Protected Firepower (MPF) System, August2021, printedp17 / PDFpage23, manufacturing environmental air discussion only. https://home.army.mil/stewart/application/files/6016/3975/0650/Final_Life_Cycle_EA_for_MPF_on_Army_Installations.pdf | Historical qualitative coating/air accounting context, not recipes, military standards, VOC thresholds, current quantities or proof of pollutant presence; no minimal-impact conclusion adopted. |
| water-environment | handbook | Same Army August2021 EA, printedp23 / PDFpage29, manufacturing industrial-water containment/treatment passage only. | Historical manufacturing effluent collection and treatment distinction; not mandatory present route or direct-discharge limit. |
| waste-environment | handbook | Same Army August2021 EA, printedp34 / PDFpage40, manufacturing cleaner/paint/filtration environmental waste passage only. | Historical environmental chemical/waste separation context, no coating selection, recipe or application instruction; actual supplied state and current records govern. |
| discharge-environment | handbook | U.S. EPA, Metal Products and Machinery Effluent Guidelines, official HTML overview, updated May13,2026, unpaginated industry/applicability sections. https://www.epa.gov/eg/metal-products-and-machinery-effluent-guidelines | Generic sector/route/direct-discharge applicability distinction; not jurisdiction-specific legal compliance, universal discharge limit or proof actual vehicle factory belongs to this category. |
