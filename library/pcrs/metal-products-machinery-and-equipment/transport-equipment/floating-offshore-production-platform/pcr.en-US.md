---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.floating-offshore-production-platform
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# New column-stabilised floating offshore production platform manufacturing

## 1. Scope and Applicability

Manufacture of one complete new steel column-stabilised semi-submersible offshore oil/gas production platform: pontoon/column/deck hull fabrication, actual preparation/coating, production/utility/power system assembly, hull–topsides and accommodation integration, yard tests and accepted net-mass release before field deployment. Choose one released platform identifier, hull geometry, actual process train and yard-accepted installed configuration. This scope is narrower than CPC49320.

Exclude drilling/MODU units, ship-shaped FPSO, TLP, spar, submersible seabed-resting platforms, fixed platforms, offshore wind, conversions/repairs and separately sold modules. Exclude field sail-away/tow, anchor/chain/line installation, subsea wells/risers/export pipelines and field hook-up, oil/gas production, produced-water treatment in operation, maintenance and dismantling. Fitted yard-delivered fairleads/winches belong to the fit-list; separately delivered field mooring lines/anchors and subsea assemblies do not. Construction transport between included fabrication/integration yards is explicit measured support, distinct from excluded field deployment. No production-capacity, lifetime or per-tonne-petroleum equivalence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.floating-offshore-production-platform |
| classification_refs | CPC:3.0:49320; narrower |
| covered_products | Manufacture of one complete new steel column-stabilised semi-submersible offshore oil/gas production platform: pontoon/column/deck hull fabrication, actual preparation/coating, production/utility/power system assembly, hull–topsides and accommodation integration, yard tests and accepted net-mass release before field deployment. Choose one released platform identifier, hull geometry, actual process train and yard-accepted installed configuration. This scope is narrower than CPC49320. |
| excluded_products | Exclude drilling/MODU units, ship-shaped FPSO, TLP, spar, submersible seabed-resting platforms, fixed platforms, offshore wind, conversions/repairs and separately sold modules. Exclude field sail-away/tow, anchor/chain/line installation, subsea wells/risers/export pipelines and field hook-up, oil/gas production, produced-water treatment in operation, maintenance and dismantling. Fitted yard-delivered fairleads/winches belong to the fit-list; separately delivered field mooring lines/anchors and subsea assemblies do not. Construction transport between included fabrication/integration yards is explicit measured support, distinct from excluded field deployment. No production-capacity, lifetime or per-tonne-petroleum equivalence. |
| representative_product | One new accepted column-stabilised steel semi-submersible production installation with exact hull/topside fit-list; no universal module count, weight, field depth or production capacity. |
| production_route | Pontoon, column and deck fabrication; Surface preparation and coating; Production and utility module assembly; Hull–topsides and outfit integration; Yard testing and net-mass acceptance |
| market_state | Complete yard-accepted configured installation before field deployment, installed equipment and declared retained technical fluids/permanent installed ballast included; temporary ballast, service fuel, hydrocarbons, persons, stores, detached spares and test gear excluded from net M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and yard acceptance of one exactly configured new complete column-stabilised production platform. |
| How much | 1 kg accepted net complete-unit manufacturing output, from actual M kg per accepted unit. |
| How well | Released design and current platform-specific acceptance, survey and inspection plan; actual authority/class evidence declared when held. No operational petroleum-service equivalence. |
| How long or cycle | One fabrication/integration/acceptance cycle; no assumed operating life or production cycle. |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete column-stabilised floating offshore production platform |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | platform identifier/model; released drawings/revision and hull form, pontoons/columns/deck geometry; steel grades/heat certificates/thickness and actual welding route; make-or-buy scope for hull blocks and each topside module; process train/equipment part numbers/material/pressure and independent supplied masses; power/voltage and cable configuration; accommodation/safety/utility fit-list; fitted mooring versus excluded field hardware; actual coating formulation and outsourced scope; fabrication/integration sites and interyard transport; period/accepted units; current actual whole-unit lightweight/weight inspection, hydrostatic verification and controlled net acceptance M; installed module weighed records and revisions; survey/yard-delivery state and tank inventory; retained technical fill/permanent installed ballast versus excluded temporary ballast/fuel/process fluids; supplier prefills; instrument/software/calibration/uncertainty; utility/provider/treatment/upstream coverage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | hull_power; finish_power; systems_power; integration_power; acceptance_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Measured below1kV grid-user electricity:1kWh =3.6MJ. Energy units cannot become mass; different voltage or provider must be separately matched. |

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| nitrogen_volume | test_nitrogen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Collect actual delivered gaseous nitrogen volume at declared supplier reference temperature/pressure and meter conditions, reconcile stock/vent/retention. No unstated standard volume or assumed density. Independently measure gas density at the same conditions for kg balance; q_item stays m3 before division by M. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied structural steel and released purchased process/power/outfit components received at declared hull/topside yards. Steelmaking, rolling and equipment manufacture are upstream unless explicit site fabrication; declare block/module supplied completion. |
| starting_condition_role | foreground_manufacturing_module |
| product_classification_scope | Manufacture of one complete new steel column-stabilised semi-submersible offshore oil/gas production platform: pontoon/column/deck hull fabrication, actual preparation/coating, production/utility/power system assembly, hull–topsides and accommodation integration, yard tests and accepted net-mass release before field deployment. Choose one released platform identifier, hull geometry, actual process train and yard-accepted installed configuration. This scope is narrower than CPC49320. |
| recursive_input_rule | No recursive same-category complete-platform purchase as structural stock. Purchased block/module replaces contained material/work; interyard and internal transfers counted once with handover boundary and actual measured scope. |
| upstream_dataset_requirement | Expanded assessment requires compatible actual steel, chemicals, equipment/module manufacture, utilities, outsourced finishing, interyard transport and treatment datasets with provider/version/scope. These foreground cards alone are not complete cradle-to-gate. |
| disclosure | platform identifier/model; released drawings/revision and hull form, pontoons/columns/deck geometry; steel grades/heat certificates/thickness and actual welding route; make-or-buy scope for hull blocks and each topside module; process train/equipment part numbers/material/pressure and independent supplied masses; power/voltage and cable configuration; accommodation/safety/utility fit-list; fitted mooring versus excluded field hardware; actual coating formulation and outsourced scope; fabrication/integration sites and interyard transport; period/accepted units; current actual whole-unit lightweight/weight inspection, hydrostatic verification and controlled net acceptance M; installed module weighed records and revisions; survey/yard-delivery state and tank inventory; retained technical fill/permanent installed ballast versus excluded temporary ballast/fuel/process fluids; supplier prefills; instrument/software/calibration/uncertainty; utility/provider/treatment/upstream coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_yard | manufacturing | Count actual hull and topside fabrication/integration and precommissioning at declared sites. Hired heavy lift/interyard tow need actual service endpoints/time/provider and physical coverage; do not also count contained fuel. Field sail-away, hookup and petroleum operation are outside this accepted-yard endpoint. | kbr-semisub-2022; kiewit-appomattox |
| boundary_modules | systems; integration | Exact make-or-buy plan controls stocks: received complete accommodation/process/power modules replace component stocks contained in them. Module interiors must be supplied upstream; site-created structures and separately installed equipment need their own physical exchanges. No double counted steel or engine/generator within package. | kiewit-appomattox |
| boundary_water | sea_resource | Direct ocean withdrawal is an elementary resource, distinct from municipal product water. Actual temporary test ballast/cooling intake, retention and return need measured volume, density, salinity, temperature and actual return medium/chemistry. Separate heat or evidenced pollutant exchanges; do not assume all return as contaminated wastewater. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hull | Pontoon, column and deck fabrication | required | Receive actual drawing-qualified steel; cut/form/weld panels and blocks, erect complete pontoon/column/deck hull. Ready-cut or purchased blocks replace contained work and stocks. | foreground | internal transfer; accepted complete platform reference |
| finish | Surface preparation and coating | conditional | Include actual preparation/individual coat route where performed; coating may precede block assembly or follow integration. Prefinished supplies replace contained work. | foreground | internal transfer; accepted complete platform reference |
| systems | Production and utility module assembly | required | Install exact process separation, compression, injection and power systems actually fitted. The cards are conditional physical examples, not universal process duty or equipment count. Purchased complete module replaces contained component assembly. | foreground | internal transfer; accepted complete platform reference |
| integration | Hull–topsides and outfit integration | required | Lift/connect actual modules to hull; fit declared accommodation, electrical/utility/safety and onboard mooring equipment. Record interfaces and contained masses; no field mooring hookup. | foreground | internal transfer; accepted complete platform reference |
| acceptance | Yard testing and net-mass acceptance | required | Perform actual structural/system/pressure/electrical tests and precommissioning under released plan, including rework; retrieve current complete-unit weight inspection and controlled corrected net M before field deployment. No whole-platform scale presumed. | foreground | finished_machine |

### Process: Pontoon, column and deck fabrication (`hull`)

Receive actual drawing-qualified steel; cut/form/weld panels and blocks, erect complete pontoon/column/deck hull. Ready-cut or purchased blocks replace contained work and stocks.

#### Inputs

##### Product flows

###### Hot-rolled offshore structural steel plate (`hull_plate`)

One actually approved grade/thickness/condition per card for pontoons, columns and deck; trace heat certificates and weigh issues/returns. No offshore-grade equivalence inferred.

- Selected flow: Hot-rolled offshore structural steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Hot-rolled offshore structural steel angle (`hull_profile`)

One actual angle grade/section per card; other shapes separately measured. Supplier-prefabricated blocks replace their contained stocks and fabrication.

- Selected flow: Hot-rolled offshore structural steel angle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Solid carbon-steel submerged-arc welding wire (`weld_wire`)

Conditional actual qualified SAW procedure, wire grade/diameter and consumed net mass; other weld procedures separate.

- Selected flow: Solid carbon-steel submerged-arc welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Fused granular submerged-arc welding flux (`weld_flux`)

Conditional actual flux formulation and weighed makeup; recovered flux internal, slag separate.

- Selected flow: Fused granular submerged-arc welding flux
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Alternating current (`hull_power`)

Actual below1kV grid-user cutting, forming, welding, lifting and ventilation energy, including rework; different voltage separate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual dry untreated segregated offcuts leaving fabrication yard; painted/oily scrap separate, internal reusable stock not output.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

###### Solid submerged-arc welding slag (`weld_slag`)

Conditional measured segregated slag, excluding steel stubs and captured dust.

- Selected flow: Solid submerged-arc welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Conditional evidenced post-control fabrication emission to immediate air, unspecified submedium and particle size; measured fractions replace unspecified row, captured dust separate waste.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hull.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hull`

### Process: Surface preparation and coating (`finish`)

Include actual preparation/individual coat route where performed; coating may precede block assembly or follow integration. Prefinished supplies replace contained work.

#### Inputs

##### Product flows

###### Cast steel blasting shot (`blast_shot`)

Conditional one actual abrasive specification/makeup; recovery internal.

- Selected flow: Cast steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated offshore epoxy anticorrosion primer (`epoxy_primer`)

Conditional one actual supplied mixed coating; separate base/hardener rows when separately purchased; retain SDS/solids and dry-film mass.

- Selected flow: Formulated offshore epoxy anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Formulated offshore polyurethane topcoat (`polyurethane_topcoat`)

Conditional actual formulation/state; not wood paint or pure resin. Other coats separate.

- Selected flow: Formulated offshore polyurethane topcoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

###### Tap water (`finish_water`)

Conditional municipal product water for actual washing; recycled internal water not another supply, volume needs actual measured density/state.

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

Actual below1kV preparation, coating, extraction and curing energy; combustion route requires independent fuel/species rows.

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

Conditional weighed spent shot with declared coating contamination; filters and paint sludge distinct.

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

Actual segregated coating overspray/residue if generated; no combined sludge/filter card.

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

Conditional measured xylene CAS1330-20-7 immediate air unspecified submedium after controls, not total VOC.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish`

### Process: Production and utility module assembly (`systems`)

Install exact process separation, compression, injection and power systems actually fitted. The cards are conditional physical examples, not universal process duty or equipment count. Purchased complete module replaces contained component assembly.

#### Inputs

##### Product flows

###### Finished offshore three-phase separation pressure vessel (`separator`)

One exact purchased vessel model/pressure/material and supplied dry mass; internal trim/instruments identified. Site manufacture instead expands actual stocks, forming/welding/testing without purchased-vessel duplication.

- Selected flow: Finished offshore three-phase separation pressure vessel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Air or vacuum pumps, air or other gas compressors (`gas_compressor`)

One complete actual centrifugal process-gas compressor, specified gas duty/material/pressure and measured supplied mass; skid driver, cooler and piping only included when supplier scope says so. Broad manufactured category identity gives no performance or offshore certification.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Pump (`injection_pump`)

One complete actual centrifugal water-injection liquid pump with exact material/pressure/model and measured supplied mass; supplied motor containment declared; other fire/ballast pumps separate.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Finished shell-and-tube process heat exchanger (`heat_exchanger`)

Conditional one actual manufactured exchanger model/material/pressure and supplied dry mass; not tubing feedstock.

- Selected flow: Finished shell-and-tube process heat exchanger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Seamless carbon-steel offshore process pipe (`steel_pipe`)

One actual approved grade/diameter/wall/condition per card; fittings separate; no casing/drill-pipe substitution.

- Selected flow: Seamless carbon-steel offshore process pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Steel valve (`ball_valve`)

One actual approved body/material/bore/pressure/model; supplied actuator scope and measured mass specified, other functions separate.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Complete industrial gas-turbine electric generating set (`gas_turbine_genset`)

Conditional actual complete received set, turbine/generator/base scope and mass, exclude separately supplied ancillary equipment; no wind/hydraulic turbine or electricity supply identity.

- Selected flow: Complete industrial gas-turbine electric generating set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Complete offshore diesel electric generating set (`diesel_genset`)

Conditional actual complete standby set scope/mass; do not duplicate contained engine and generator, or use burned-diesel flow as equipment.

- Selected flow: Complete offshore diesel electric generating set
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

###### Alternating current (`systems_power`)

Actual below1kV module assembly, pipe welding and inspection energy; supplier-contained fabrication not repeated.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_systems.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_systems`

### Process: Hull–topsides and outfit integration (`integration`)

Lift/connect actual modules to hull; fit declared accommodation, electrical/utility/safety and onboard mooring equipment. Record interfaces and contained masses; no field mooring hookup.

#### Inputs

##### Product flows

###### Finished offshore mooring winch (`mooring_winch`)

Conditional fitted actual winch model and mass, supplied drives included as declared; field anchors/lines not part of yard-accepted configured output.

- Selected flow: Finished offshore mooring winch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished offshore pedestal crane (`pedestal_crane`)

Conditional actual complete installed crane configuration and supplied mass, not hired integration crane service.

- Selected flow: Finished offshore pedestal crane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished offshore accommodation module (`accommodation_module`)

One actual complete purchased accommodation module, released installed fit-list and measured mass; contained insulation/electrical/finishing omitted from additional site issues. Site-built rooms instead expand own atomic fabrication exchanges.

- Selected flow: Finished offshore accommodation module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### rock wool (`insulation`)

Conditional separately supplied actual grade/density/binder/facing mass; exclude already contained module insulation; separately purchased facing distinct.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished insulated copper offshore power cable (`copper_cable`)

One actual voltage/conductor/insulation specification, measured supplied kg and route qualification; no calorific-value-to-mass estimate.

- Selected flow: Finished insulated copper offshore power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V (`switchboard`)

One actual complete received distribution board rated at most1000V, exact installed configuration and supplied mass; higher-voltage switchgear separate; category identity not certification.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Alternating current (`integration_power`)

Actual below1kV topsides lift/integration, accommodation/electrical fit and connection energy; shared heavy lift measured attributable demand, not lifted-weight proxy alone.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

### Process: Yard testing and net-mass acceptance (`acceptance`)

Perform actual structural/system/pressure/electrical tests and precommissioning under released plan, including rework; retrieve current complete-unit weight inspection and controlled corrected net M before field deployment. No whole-platform scale presumed.

#### Inputs

##### Product flows

###### Diesel fuel (`test_diesel`)

Actual fossil diesel consumed in declared yard testing/support, weighed issued less returns and retained stock; provider/grade/carbon provenance recorded, no default combustion factors.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Formulated mineral hydraulic oil (`hydraulic_oil`)

Conditional actual grade/formulation and separately added kg beyond contained supplier prefill; retained fill versus removed/consumed measured.

- Selected flow: Formulated mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Nitrogen gas (`test_nitrogen`)

Conditional actual China plant industrial gas for purging/leak testing, supplied gas purity and measured m3 at supplier-defined actual pressure/temperature reference conditions. Preserve public Volume; separately measured actual density gives independent kg for retained-fluid balance, not a relabelled property. Different geography/provider/reference condition separately resolved.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Tap water (`test_water`)

Actual municipal water for pressure/flushing tests, net fresh supply excluding recirculation; measured density for volume conversion, retained circuit water reconciled.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Alternating current (`acceptance_power`)

Actual below1kV shore testing/inspection electricity; onboard test generation instead counts actual fuel/releases once, internal generated electricity transfer.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

##### Elementary flows

###### Ocean seawater withdrawn for yard ballast tests (`sea_resource`)

Conditional direct marine resource input, actual volume/density/salinity/temperature; reconcile temporary retained ballast and separately evidenced clean return.

- Selected flow: Ocean seawater withdrawn for yard ballast tests
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Complete column-stabilised floating offshore production platform (`finished_machine`)

1kg actual accepted configured new steel semi-submersible hull with installed production/utility/power/accommodation topsides and declared retained technical fluids, before field deployment; measured corrected net M.

- Selected flow: Complete column-stabilised floating offshore production platform
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

Conditional segregated spent mineral lubricating oil from actual test machinery, excluding hydraulic-water mixtures and retained fill.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Hydrostatic-test wastewater sent to treatment (`test_wastewater`)

Conditional independently measured aqueous spent test water with actual contaminant concentrations and route; not an elementary unspecified-water release.

- Selected flow: Hydrostatic-test wastewater sent to treatment
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

Conditional evidenced actual test fossilCO2 CAS124-38-9 immediate air unspecified submedium; current outlet/carbon-origin records, no operational petroleum-production emissions.

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

Conditional separately measured actual NO CAS10102-43-9 immediate air unspecified submedium, not NO2,N2O or total NOx.

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
| allocation_causal | shared_operations | Subdivide work by hull/module/accepted configuration and yard first. Shared welding, finishing, heavy lifting and testing use exchange-specific measured demand/load/time from cp_allocation, with all served work and total supply reconciled. No default platform displacement, production capacity or lifted-weight share. |  |
| allocation_rework | configurations | Accepted units receive attributable rework and rejected-part construction burdens. Normalize each actual configuration using its own M and matched numerator before any measured-output weighted pooling. Residual allocation requires actual driver evidence, sensitivity and review. |  |
| allocation_recovery | outputs | Internal recovered steel/abrasive/flux/water is transfer, not automatic saleable coproduct or avoided-production credit. Outgoing scrap/waste condition, responsibility and treatment retained. Actual saleable coproduct requires documented quality/market and reviewed handling; no future recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Use controlled acceptance records for the accepted complete unit of the same configuration. | kg | each accepted complete platform | current completed acceptance cycle | same exact installed yard-delivery configuration | accepted net mass per unit | quality_survey and quality_delivery_mass original survey; signed correction schedule; module weighing and independent balance; uncertainty |
| cp_hull | hull | each atomic process row | measurement | drawing/grade/heat; stock issues/returns; block weld procedure/consumables; electricity; steel offcuts/slag; outdoor particle size/species and controls | Measure each actual physical supplied exchange, issues less returns and stock change, and independently characterized outgoing stream; meter attributable job demand. Reconcile module-contained scope, rework and matched accepted units. Sample actual release species/medium after controls only where evidenced. | kg; MJ | each platform/module work order; reporting stock/meter closure | whole declared construction cycle including rework | all included fabrication/integration yards and outsourced operations | attributable exchange amount / accepted units | calibration; stock and supplier fit-list; work/test/acceptance records; physical coverage log |
| cp_finish | finish | each atomic process row | measurement | surface locations; supplied formulation/SDS/solids; abrasive/coating makeup/recovery/retained film; water; electricity; characterized residue; post-control xylene concentration, flow/time | Measure each actual physical supplied exchange, issues less returns and stock change, and independently characterized outgoing stream; meter attributable job demand. Reconcile module-contained scope, rework and matched accepted units. Sample actual release species/medium after controls only where evidenced. | kg; MJ | each platform/module work order; reporting stock/meter closure | whole declared construction cycle including rework | all included fabrication/integration yards and outsourced operations | attributable exchange amount / accepted units | calibration; stock and supplier fit-list; work/test/acceptance records; physical coverage log |
| cp_systems | systems | each atomic process row | measurement | equipment part/model/pressure/material; measured received kg and supplier contained trim/driver/skid/prefill; actual module bill; pressure/weld test records; electricity | Measure each actual physical supplied exchange, issues less returns and stock change, and independently characterized outgoing stream; meter attributable job demand. Reconcile module-contained scope, rework and matched accepted units. Sample actual release species/medium after controls only where evidenced. | kg; MJ | each platform/module work order; reporting stock/meter closure | whole declared construction cycle including rework | all included fabrication/integration yards and outsourced operations | attributable exchange amount / accepted units | calibration; stock and supplier fit-list; work/test/acceptance records; physical coverage log |
| cp_integration | integration | each atomic process row | measurement | module/hull identifiers; received installed masses and revisions; lift/connection and outfit fit-list; cable/voltage; contained insulation/equipment; actual shared lifting demand | Measure each actual physical supplied exchange, issues less returns and stock change, and independently characterized outgoing stream; meter attributable job demand. Reconcile module-contained scope, rework and matched accepted units. Sample actual release species/medium after controls only where evidenced. | kg; MJ | each platform/module work order; reporting stock/meter closure | whole declared construction cycle including rework | all included fabrication/integration yards and outsourced operations | attributable exchange amount / accepted units | calibration; stock and supplier fit-list; work/test/acceptance records; physical coverage log |
| cp_acceptance | acceptance | each atomic process row | measurement | platform/configuration; approved actual acceptance plan; test fuel/fluid issued, consumed, retained and removed; gas purity/state; water/density/salinity/return; test loads/time; outlet species/flow; wastes; current signed weight-survey originals and net corrections | Measure each actual physical supplied exchange, issues less returns and stock change, and independently characterized outgoing stream; meter attributable job demand. Reconcile module-contained scope, rework and matched accepted units. Sample actual release species/medium after controls only where evidenced. | kg; MJ; m3 | each platform/module work order; reporting stock/meter closure | whole declared construction cycle including rework | all included fabrication/integration yards and outsourced operations | attributable exchange amount / accepted units | calibration; stock and supplier fit-list; work/test/acceptance records; physical coverage log |
| cp_allocation | manufacturing | shared_load | measurement | total supply; submeter demand; actual load/time; served units and excluded work | Measure actual exchange-specific causal demands and all served work; document driver, reconcile shares to total physical supply, retain uncertainty and sensitivity. | MJ; h | each shared job and reporting period | same construction period | all served fabrication/integration sites | partition measured causal demand; attributable amount / accepted units | meter totals; driver records; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | hull_plate; hull_profile; weld_wire; weld_flux; hull_power; steel_scrap; weld_slag; particle_air; blast_shot; epoxy_primer; polyurethane_topcoat; finish_water; finish_power; spent_shot; paint_residue; xylene_air; separator; gas_compressor; injection_pump; heat_exchanger; steel_pipe; ball_valve; gas_turbine_genset; diesel_genset; systems_power; mooring_winch; pedestal_crane; accommodation_module; insulation; copper_cable; switchboard; integration_power; test_diesel; hydraulic_oil; test_nitrogen; test_water; sea_resource; acceptance_power; used_oil; test_wastewater; fossil_co2_air; nitric_oxide_air | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is the measured attributable physical exchange for the same accepted configuration and complete reporting cycle divided by matching accepted units. Preserve kg, MJ or gas m3 numerator. Component count alone cannot replace independent measured kg; any count/mass, volume/density or formulation/concentration conversion requires actual same-product/state measurement and uncertainty. Net-M generation is independently specified below, not another algebraic clause in normalize_mass.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_survey | finished_machine | cp_mass must retrieve current signed platform-specific actual lightweight/weight inspection records for the accepted near-complete unit under a qualified responsible survey plan. ABS2022 explicitly includes column-stabilised installations and describes inclining-test conditions; it is historical method support, not a current compliance claim. Retain actual inclining/weight-survey procedure, date, positions and raw draft/freeboard readings, observed water density, verified as-built hydrostatic geometry and software/version, trim/heel corrections, tank soundings/densities and measured missing/added/removed items. Apply the actual column-stabilised pontoon/waterplane condition under project-approved method; document effects of braces or other interfering geometry. Independently reconcile accepted hull weight and separately weighed module/equipment records, later changes and completed fit-list; propagate uncertainty and investigate residual. Do not use the TLP-only alternate hull-plus-topside paragraph as permission to omit actual whole-unit verification. | abs-fpi-2022 |
| quality_delivery_mass | finished_machine | Reconcile survey lightweight to declared net yard-delivered installed configuration item by item using actual measured corrections. Include complete installed steel/equipment and declared retained technical circuit fluids/permanent installed ballast once. Exclude temporary test/transport ballast, fuel bunkers, process oil/gas, operating water stocks, persons/stores, staging/test weights, packaging and detached spares. Record tank/fill condition and material density; actual fluids retained in permanent technical circuits are distinct from operational feed. Displacement alone, full-load fuel mass, deadweight, gross/net tonnage, design/catalogue weight or an unexplained balancing estimate cannot replace M. Missing actual survey, configuration or physical correction evidence blocks dataset use. No imaginary whole-platform scale. | current survey; measured corrections and signed acceptance balance |
| quality_prefill | components | Independently measured supplied hull, topsides, pressure equipment and power packages must reconcile to installed configuration and whole-unit M. Identify engine/generator/driver/skid and all supplier-prefilled fluids within each received scope. Site additions counted only beyond prefill; testing consumption/removal and delivery retained stock separate. No double counted package equipment or contained steel/insulation. | supplier boundaries; weighed handover/fit-list/fill and tank records |
| quality_identity | flows | Verify actual grade, pressure/voltage, formulation, state, route and installed supplied scope against each public identity; preserve public reference properties. Speciated immediate-air PM/xylene/fossilCO2/NO require actual medium/time/control records; no total VOC as xylene or NOx as NO. Water product, ocean resource and spent test water are separate. No assumed emissions, density, power-to-mass, module weights or life. | supplier certificates/SDS; species-specific samples; actual physical records |
| quality_acceptance | acceptance | Retain current released platform-specific structural/weld, watertight, pressure, electrical, shutdown/safety and actual precommissioning acceptance evidence with loads/duration and rework. Project authorities/class requirements must be checked for current applicable design; cited historical rules and manufacturer cases do not establish approval or universal numeric pass limits. | current released plan; actual survey/test acceptance |
| quality_coverage | dataset | Declare measured/calculated/estimated/missing/excluded/not-applicable states for every actual route/fit-list exchange. Expand separate atomic cards for actual additional fairleads, hull openings, fire pumps, flare boom, instruments, insulation facings, sacrificial anodes, other coating/welding chemistry, packaging, hired lifting/transport and treatment. Only list as necessary when released configuration requires them. Selected examples are not complete plant LCI; actual records and compatible upstream datasets needed before completeness claims. | fit-list/work orders; inventory/meter closure; coverage/uncertainty register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg accepted complete output with exactly matching corrected net M, controlled cp_mass and physical quality_survey/quality_delivery_mass evidence. Candidate unresolved reference identity must remain an explicit reviewed gap; structural check does not establish scientific survey adequacy. | abs-fpi-2022 |
| validation_basis | inventory | Verify same accepted configuration, unit count, period, numerator units and q_item/M protocol. Independently measured component masses and retained fluids close whole-unit fit-list; no count or rated power as kg. |  |
| validation_scope | manufacturing | Audit actual make-or-buy/module containment, construction transfer support and field-deployment exclusion. No operational hydrocarbon inventory, transport service output, duplicate supplied module inputs or internal generated electricity. | kbr-semisub-2022 |
| validation_release | elementary | Check species/CAS, fossil origin, immediate/long-term timing and actual medium/submedium after controls; NO not NO2/N2O/totalNOx. Ocean resource not wastewater/product-water; actual return chemistry/heat exchange separately evidenced. |  |
| validation_completeness | dataset | Block use where actual mass inspection/corrections, acceptance plan/results, route records, fit-list or critical upstream/treatment coverage cannot be established. Keep scientific review and identity gaps explicit; check pass is not methodology approval or complete cradle-to-gate declaration. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of one complete new steel column-stabilised semi-submersible offshore oil/gas production platform: pontoon/column/deck hull fabrication, actual preparation/coating, production/utility/power system assembly, hull–topsides and accommodation integration, yard tests and accepted net-mass release before field deployment. Choose one released platform identifier, hull geometry, actual process train and yard-accepted installed configuration. This scope is narrower than CPC49320. |
| excluded_use | Exclude drilling/MODU units, ship-shaped FPSO, TLP, spar, submersible seabed-resting platforms, fixed platforms, offshore wind, conversions/repairs and separately sold modules. Exclude field sail-away/tow, anchor/chain/line installation, subsea wells/risers/export pipelines and field hook-up, oil/gas production, produced-water treatment in operation, maintenance and dismantling. Fitted yard-delivered fairleads/winches belong to the fit-list; separately delivered field mooring lines/anchors and subsea assemblies do not. Construction transport between included fabrication/integration yards is explicit measured support, distinct from excluded field deployment. No production-capacity, lifetime or per-tonne-petroleum equivalence. |
| required_metadata | platform identifier/model; released drawings/revision and hull form, pontoons/columns/deck geometry; steel grades/heat certificates/thickness and actual welding route; make-or-buy scope for hull blocks and each topside module; process train/equipment part numbers/material/pressure and independent supplied masses; power/voltage and cable configuration; accommodation/safety/utility fit-list; fitted mooring versus excluded field hardware; actual coating formulation and outsourced scope; fabrication/integration sites and interyard transport; period/accepted units; current actual whole-unit lightweight/weight inspection, hydrostatic verification and controlled net acceptance M; installed module weighed records and revisions; survey/yard-delivery state and tank inventory; retained technical fill/permanent installed ballast versus excluded temporary ballast/fuel/process fluids; supplier prefills; instrument/software/calibration/uncertainty; utility/provider/treatment/upstream coverage |
| required_quality_disclosure | Actual hull/topside configuration, supplied module boundaries, independent weight inspection and net correction evidence with uncertainty; all installed components/fluids and mass balance; yard/period/accepted units/test loads/rework; stock/utility coverage, allocation sensitivity, unresolved identities, actual physical-data gaps and scientific review status. |
| update_trigger | Hull type/geometry, equipment/topside or delivery state, steel/weld/coating route, supplier/make-or-buy, yards/period, testing/mass method, applicable physical evidence or public identity changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| abs-fpi-2022 | standard | ABS Rules for Building and Classing Floating Production Installations, July2022; Part3 Chapter3 Section1/1,/3 printed p49 (PDF56); Part5B Chapter1 Section3/1.5 printed pp507–508 (PDF514–515). https://ww2.eagle.org/content/dam/eagle/rules-and-guides/archives/offshore/82_FPI_2022/fpi-rules-july22.pdf | Historical applicable-type and lightweight/inclining method architecture, including column-stabilised pontoon/waterplane condition. Not current compliance, numerical limits, M or permission to transfer TLP alternative methods. Actual current survey and independently measured net-delivery correction required. |
| kbr-semisub-2022 | literature | Richard D’Souza and Shiladitya Basu, A Critical Assessment of Contracting Strategies and Cycle Times of Post-2014 Sanctioned Floating Platforms in the US Gulf of Mexico, Proceedings27th Offshore Symposium,22February2022; Appomattox Development, printed/PDF p3, publisher-retained technical paper. https://www.kbr.com/sites/default/files/documents/2023-10/TechnicalJournal2023_2028_Critical_Assessment_Contracting_Strategies_Cycle_Times_Post-2014_Sanctioned_Floating_Platforms_US_Gulf_of_Mexico_0.pdf | Historical semisub case: separate hull/topsides fabrication, transport to integration yard, module lifting and precommissioning before field mooring/riser hook-up. No case weights/displacement, capacity, count, duration or life adopted. |
| kiewit-appomattox | handbook | Kiewit Appomattox Platform, undated official project HTML, project scope paragraphs, unpaginated. https://www.kiewit.com/projects/appomattox-platform/ | Independent fabricator corroborates topsides utility/power/process/accommodation and water-injection construction/integration; field suction piles separated from our yard-accepted output. No manufacturer numeric weights/capacity or universal process inventory adopted. |
