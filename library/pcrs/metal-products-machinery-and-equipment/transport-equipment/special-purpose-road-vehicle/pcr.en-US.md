---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.special-purpose-road-vehicle
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Complete diesel rear-loading refuse compactor road vehicle manufacturing

## 1. Scope and Applicability

Manufacture of complete new diesel single-chamber rear-loading refuse compactor road vehicles, with a purchased runnable cab-chassis, fabricated steel body/subframe and hydraulic packing/discharge equipment integrated and accepted by the vehicle converter. Declare one exact VIN/model and released body/chassis configuration. This is a narrower product and manufacturing-route boundary within CPC49119, not every special-purpose vehicle.

Exclude body-only, chassis-only, rebuilt/remanufactured vehicles, multi-chamber and side/front-load architectures, electric/CNG propulsion, street sweepers, fire engines, mobile cranes, concrete mixers, ambulances and ordinary goods vehicles. Waste collection/transport/treatment service, transported waste mass, driver/crew/payload, operation, maintenance, distribution and end-of-life are outside scope. Factory functional/road tests and rework are manufacturing. No service life, collection yield or waste-throughput denominator is assumed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.special-purpose-road-vehicle |
| classification_refs | CPC:3.0:49119; narrower |
| covered_products | Manufacture of complete new diesel single-chamber rear-loading refuse compactor road vehicles, with a purchased runnable cab-chassis, fabricated steel body/subframe and hydraulic packing/discharge equipment integrated and accepted by the vehicle converter. Declare one exact VIN/model and released body/chassis configuration. This is a narrower product and manufacturing-route boundary within CPC49119, not every special-purpose vehicle. |
| excluded_products | Exclude body-only, chassis-only, rebuilt/remanufactured vehicles, multi-chamber and side/front-load architectures, electric/CNG propulsion, street sweepers, fire engines, mobile cranes, concrete mixers, ambulances and ordinary goods vehicles. Waste collection/transport/treatment service, transported waste mass, driver/crew/payload, operation, maintenance, distribution and end-of-life are outside scope. Factory functional/road tests and rework are manufacturing. No service life, collection yield or waste-throughput denominator is assumed. |
| representative_product | One new accepted diesel rear-loading single-chamber steel-body refuse compactor with declared installed bin-lift and fluid state. Body size, chassis, actuation and loading accessories are configuration variants, not interchangeable kilograms. |
| production_route | Purchased runnable chassis; steel body/subframe cut/form/join; actual finish; chassis mounting and hydraulics/controls; factory tests/weighing/release; actual shipment protection. |
| market_state | Complete quality-released vehicle, empty body/hopper, no crew or payload, actual retained hydraulic/fuel fluid state; packaging outside net vehicle. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and factory acceptance of one declared complete diesel rear-loader refuse compactor vehicle. |
| How much | 1 kg accepted net complete vehicle, normalized from one complete unit by measured M; not one kilogram of carried refuse or a collection service. |
| How well | Conform to actual released drawings/BOM, chassis/body interface and model-specific structural, hydraulic, control/interlock and road-release acceptance. Retain actual approval/test identifiers where held; no universal test pressure, compaction ratio, cycle duration or certification inherited. |
| How long or cycle | One manufacture/acceptance cycle; operational distance, collection capacity and life outside reference basis. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Special-purpose motor vehicles n.e.c. `b593d5fc-0d81-43a6-9689-debda67bcb94` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | VIN/model/BOM revision; purchased diesel chassis supplier and included driveline/cab/wheels/fluids; single-chamber steel body size/grade/thickness and fabrication route; subframe/mounting design; hopper/packing/ejector/tailgate design; exact pump/cylinder/valve/hose/PTO and control specification; fitted bin lifter/accessories; coating formulation and make-or-buy; hydraulic fluid/fuel composition and delivered levels; measured net M; sites/period/accepted count; actual acceptance plan; utility/provider/transport/treatment coverage; detached spares and packing excluded |

The category product identity is restricted by all required qualifiers to the complete manufactured rear-loader configuration; it supplies neither a generic vehicle average nor numerical upstream LCI. Missing qualifiers make the foreground data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | body_electricity; coating_electricity; integration_electricity; release_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured meter kWh to MJ using3.6 MJ/kWh; preserve actual voltage/provider. Mechanical PTO demand is supplied by test fuel, not an additional electric input. |

Weigh the same accepted complete fitted vehicle on a calibrated vehicle scale: empty hopper/body, no crew, cargo or temporary test ballast, exclude shipment protection and detached spares. A separate VIN-bound delivery-state record declares retained hydraulic oil, fuel and chassis coolant/lubricants, installed accessory/spare status, gross readings and tare exclusions. Recoverable test fills are excluded when not delivered. Catalogue curb weight, GVW, axle limit or approximate body weight cannot replace M. Purchased count-based parts may retain their original count identity with traceable actual part mass and explicit conversion; never relabel a public count/area/volume property Mass.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Converter receives runnable diesel cab-chassis, steel stock and released purchased hydraulic/electronic components. Chassis manufacture/steel rolling/component manufacture occur upstream unless explicitly added as separate site modules. |
| starting_condition_role | Declared vehicle conversion/manufacturing foreground starting point. |
| product_classification_scope | Manufacture of complete new diesel single-chamber rear-loading refuse compactor road vehicles, with a purchased runnable cab-chassis, fabricated steel body/subframe and hydraulic packing/discharge equipment integrated and accepted by the vehicle converter. Declare one exact VIN/model and released body/chassis configuration. This is a narrower product and manufacturing-route boundary within CPC49119, not every special-purpose vehicle. |
| recursive_input_rule | Purchased complete refuse vehicle is not a component proxy. Purchased painted body, chassis or hydraulic subassembly replaces its contained local materials/work. Internal fabrication handoffs are transfers. Separate supplier-contained from additionally fitted components and fluids. |
| upstream_dataset_requirement | Expanded assessment needs actual compatible chassis/steel/chemical/component supplier LCI, outsourced work, inbound/intersite transport, utilities and external treatment. UUID confirms identity, not inventory amount/provider. This foreground module alone is not complete cradle-to-gate. |
| disclosure | Declare sites/period, body/chassis make-or-buy, variants, installed versus detached supply, received/delivered fluid state, acceptance/rework, utility carriers and provider/transport/treatment gaps. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_body | body | Heil case supports a steel body and welded formed-channel subframe; actual released drawings govern fabrication, coatings and wear grade. No brochure steel thickness or universal manufacturing recipe prescribed. | heil-durapack-5000-2025 |
| boundary_interface | integration | Heil hydraulic/chassis tables and Dennis Eagle body variants establish component/interface specificity. Scania historical attachment alternatives require current model-specific mounting evidence; they do not approve this installation or mandate bolt/weld combinations. | heil-durapack-5000-2025; dennis-eagle-olympus; scania-chassis-subframe |
| boundary_service | release | Include actual factory fuel use, leak/packing/road tests and recovery; exclude waste collection/processing and routine operating loads. Test payload must be identified and removed before M measurement. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| body | Steel body and subframe fabrication | required | Actual cut/form/join steel route, hopper, packer panels, ejector and tailgate structures. Purchased completed modules replace their contained site materials/work. | foreground_production | per 1 kg reference flow |
| coating | Body corrosion protection and coating | required | Actual released finish or disclosed supplied finished body; cleaning/primer/topcoat/electric cure are conditional site operations, not required universal chemistry. | foreground_production | per 1 kg reference flow |
| integration | Chassis mounting and hydraulic/control integration | required | Receive complete runnable diesel cab-chassis; mount exact body/subframe, install hydraulic actuation, controls and actual optional lifter. Document interface approvals and contained supplier scope. | foreground_production | per 1 kg reference flow |
| release | Commissioning, acceptance and weighing | required | Actual leak/pressure/packing/ejection, interlock/emergency stop, road/brake and model-specific tests; record measured fuel/utilities/recovery and accepted complete vehicle M. | foreground_production | per 1 kg reference flow |
| packing | Shipment protection | conditional | Only actual separately quantified shipment protection, outside vehicle M; detached spares separately disclosed. | foreground_production | per 1 kg reference flow |

These are single-exchange candidates, not a universal complete BOM. Complete each actual released route: add every separately supplied hinge/pin/bearing/seal/filter/fitting/bracket/nut/washer, packer panel, cylinder design, pipe, display/switch/sensor/lamp/camera, lift assembly and coating ingredient not contained in another purchase. Required processes remain required while chemical/technology candidates are conditional. Add actual machining/blasting/heat treatment and their exact abrasive, lubricant, utility and waste flows when performed. Document outsourcing and all factory emissions/wastes; captured welding dust is separate from air particulate.

### Process: Steel body and subframe fabrication (`body`)

Actual cut/form/join steel route, hopper, packer panels, ejector and tailgate structures. Purchased completed modules replace their contained site materials/work.

#### Inputs

##### Product flows

###### Hot-rolled high-tensile steel sheet for compactor body (`body_sheet`)

Actual drawing grade, sheet thickness and supplied state; net issues/returns and nesting loss. Bought-in completed panels replace contained sheet and local forming.

- Selected flow: Hot-rolled high-tensile steel sheet for compactor body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### AR400 abrasion-resistant steel plate for refuse hopper (`wear_plate`)

Conditional actual released AR400 supply, thickness/heat treatment and mass; other wear grades separately identified. Manufacturer case is not a universal grade requirement.

- Selected flow: AR400 abrasion-resistant steel plate for refuse hopper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Formed steel channel for compactor subframe (`subframe_channel`)

Actual purchased formed channel, drawing grade/section and mass; site forming from sheet counts sheet and forming once, not purchased channel as well.

- Selected flow: Formed steel channel for compactor subframe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Solid low-alloy steel MIG welding wire (`welding_wire`)

Conditional actual MIG solid wire with released grade/diameter and measured net issue; other joining routes add their own exact consumables.

- Selected flow: Solid low-alloy steel MIG welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Argon welding shielding gas (`argon`)

Conditional actual pure argon route, measured net cylinder supply by mass. Argon/CO2 mixtures are distinct formulated gas products; do not substitute pure gas for a mix.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Alternating current (`body_electricity`)

Actual below1kV grid-user cut/form/weld demand and extraction fans, including rejects/rework; consumed energy from meters.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual dry untreated segregated steel offcuts leaving factory; internal reusable offcuts remain transfers without avoided-steel credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

##### Elementary flows

###### Particulate matter, particle size unspecified (`weld_pm`)

Only measured post-control weld/cut particulate released to outdoor unspecified air when size fraction is unspecified. Captured filter dust is a separate waste, not this release.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

### Process: Body corrosion protection and coating (`coating`)

Actual released finish or disclosed supplied finished body; cleaning/primer/topcoat/electric cure are conditional site operations, not required universal chemistry.

#### Inputs

##### Product flows

###### Tap water (`wash_water`)

Conditional actual external municipal washing/rinse make-up. Internal recirculation remains transfer, not repeated purchased supply.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Sodium hydroxide solution, 50% (`sodium_hydroxide`)

Only actual cleaner ingredient supplied as50% solution; quantity is supplied solution mass, not active NaOH or operating bath concentration.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Formulated epoxy anticorrosion primer (`epoxy_primer`)

Conditional actual supplied primer with formulation/solids and net issue; separate hardener or solvent purchases receive separate cards; outsourcing replaces local coating.

- Selected flow: Formulated epoxy anticorrosion primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Formulated polyurethane vehicle body topcoat (`pu_topcoat`)

Conditional one actual supplied mixed polyurethane topcoat with recorded resin/solvent/solids; different separately supplied components are separate exchanges.

- Selected flow: Formulated polyurethane vehicle body topcoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_electricity`)

Actual below1kV coating equipment, pumps, fans and electric cure only. Non-electric heat requires separately identified measured carrier.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Spent alkaline body washing solution for treatment (`wash_effluent`)

Conditional actual one alkaline purge wet mass and chemistry to treatment; neither elementary freshwater emission nor assumed15% NaOH.

- Selected flow: Spent alkaline body washing solution for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Waste paint (`paint_waste`)

Conditional single formulated polyurethane topcoat overspray residue, wet/as-collected mass sent for treatment; exclude separate filters/sludge/primer waste and recovered paint.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Conditional measured actual xylene isomers after controls to outdoor unspecified air; SDS/speciation establish chemical identity. Total VOC and pure m-xylene do not substitute.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Chassis mounting and hydraulic/control integration (`integration`)

Receive complete runnable diesel cab-chassis; mount exact body/subframe, install hydraulic actuation, controls and actual optional lifter. Document interface approvals and contained supplier scope.

#### Inputs

##### Product flows

###### Truck base vehicle (`cab_chassis`)

One new runnable diesel cab-chassis with driveline and actual included wheels/brakes/cab equipment and received fluid state. Record exact model/VIN, measured net supplier mass and boundary; excludes refuse body.

- Selected flow: Truck base vehicle `de07c0fa-13b3-488f-bb1b-266641dc5f7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### High-pressure hydraulic gear pump for compactor (`hydraulic_pump`)

Actual one released standalone gear pump with net supplied mass and pressure/rating. Complete hydraulic power unit cannot be substituted for standalone pump.

- Selected flow: High-pressure hydraulic gear pump for compactor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Double-acting hydraulic packing cylinder (`packing_cylinder`)

Actual one complete packing-cylinder part number, bore/stroke and supplied mass; distinct upper/lower packing-cylinder designs require separate rows.

- Selected flow: Double-acting hydraulic packing cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Single-acting hydraulic tailgate lift cylinder (`tailgate_cylinder`)

Actual complete released lift-cylinder part number and supplied net mass; no brochure bore, count or mandatory acting type generalized.

- Selected flow: Single-acting hydraulic tailgate lift cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Telescopic double-acting hydraulic ejector cylinder (`ejector_cylinder`)

Conditional actual released telescopic ejector-cylinder design and net supplied mass; alternative discharge architecture separately recorded.

- Selected flow: Telescopic double-acting hydraulic ejector cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Hydraulic spool valve for compactor control (`spool_valve`)

Actual one released spool valve part number/pressure/ports and supplied mass; other valve designs individually identified.

- Selected flow: Hydraulic spool valve for compactor control
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Hydraulic hose (`hydraulic_hose`)

Actual vulcanized rubber hydraulic hose with released reinforcement/pressure/length and mass; supplied end fittings declared, separately supplied metal pipes added separately.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished steel hydraulic oil reservoir (`oil_reservoir`)

Actual finished reservoir part number/capacity and net dry mass; site fabricated reservoir replaces this purchase with exact plate/weld/finish inventory.

- Selected flow: Finished steel hydraulic oil reservoir
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Truck power-take-off gearbox for compactor pump (`pto`)

Conditional separately supplied actual gearbox including declared coupling; omit if included in supplied cab-chassis.

- Selected flow: Truck power-take-off gearbox for compactor pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Steel screw (`steel_screw`)

Actual one released steel screw specification for mounting, grade/coating/dimensions and net mass. Add each distinct nut/washer/bracket separately; no industry-average quantity taken from identity narrative.

- Selected flow: Steel screw `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished refuse compactor electronic controller (`body_controller`)

Actual released road-vehicle body controller hardware/firmware and supplied mass; distinct display/switch/sensor/harness recorded separately when not contained.

- Selected flow: Finished refuse compactor electronic controller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished insulated copper compactor-body wiring harness (`body_harness`)

One released end-tested harness part number, insulation/connectors/length and mass; cab-chassis harness already contained is not another input.

- Selected flow: Finished insulated copper compactor-body wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Formulated mineral antiwear hydraulic oil, ISO VG 46 (`hydraulic_oil`)

Conditional exact supplier mineral antiwear formulation/grade supplied by mass, actual net fill/flush/recovery and delivered retained fill; other grades separately specified.

- Selected flow: Formulated mineral antiwear hydraulic oil, ISO VG 46
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Alternating current (`integration_electricity`)

Actual below1kV lifting/installing, wiring and external-electric hydraulic test bench demand; PTO engine test fuel is in release, not counted twice.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

###### Finished rear-mounted hydraulic refuse-bin lifter (`bin_lifter`)

Optional actual released lifter part number, accepted bin-interface and supplied mass; included cylinder/control scope declared. Hand-loaded vehicle does not require a lifter.

- Selected flow: Finished rear-mounted hydraulic refuse-bin lifter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

#### Outputs

##### Waste flows

###### Used lubricating oil (`used_oil`)

Conditional actual single used petroleum hydraulic lubricating fluid from factory flush/test contamination, measured waste mass to declared handler. Recoverable clean oil remains transfer; no mixed solvent/water waste.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integration`

### Process: Commissioning, acceptance and weighing (`release`)

Actual leak/pressure/packing/ejection, interlock/emergency stop, road/brake and model-specific tests; record measured fuel/utilities/recovery and accepted complete vehicle M.

#### Inputs

##### Product flows

###### Diesel fuel (`diesel_fuel`)

Actual mass of new factory fuel supply for engine/PTO tests and retained delivery charge, separately reconciled to opening/closing tank stock and incoming chassis fuel. Declare fossil/biogenic composition; no density/LHV/exhaust factor from identity.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Tap water (`test_water`)

Conditional actual new wash/leak-test water make-up only; internal reclaimed loop and retained temporary test ballast are not new supply or delivered M.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Alternating current (`release_electricity`)

Actual below1kV final inspection, brake/electrical/control tests and factory release demand, including rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

#### Outputs

##### Product flows

###### Special-purpose motor vehicles n.e.c. (`finished_machine`)

1kg normalized share of one complete new accepted diesel single-chamber rear-loading refuse compactor with fitted steel body, chassis and declared delivered accessories/fluids. Physical identity is qualified to this configuration, not a generic mix or collection service.

- Selected flow: Special-purpose motor vehicles n.e.c. `b593d5fc-0d81-43a6-9689-debda67bcb94`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional actual immediate fossil CO2 from factory engine/PTO tests to outdoor unspecified air, measured or from site fuel-carbon balance with retained carbon separated. Biogenic CO2 and other exhaust species require separate rows.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

### Process: Shipment protection (`packing`)

Only actual separately quantified shipment protection, outside vehicle M; detached spares separately disclosed.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Conditional actual PE protective film recipe/thickness and net mass, outside vehicle M; no compulsory whole-vehicle wrapping.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Conditional actual C/E/F flute, fiber≥80% recycled-containing board; declare one actual specification. Other board separate; outside M.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_demand | shared_operations | Subdivide by site/configuration/work order first. Shared cutting/welding, coating, crane handling and test demand use measured causal load/time or attributable exchange from cp_allocation, reconciled to total meter and excluded work. No default mass, GVW, body-volume or refuse-throughput allocation. |  |
| allocation_variants | variants | Keep body size, chassis, actuation, coatings and lifter variants separate; normalize each by its measured M. Any residual physical/economic fallback requires actual supporting records, sensitivity and review. Scrap/reject/rework burdens remain with accepted production. |  |
| allocation_recovery | outputs | Internal steel/paint/water/oil recovery is a transfer; no automatic avoided-production or recycling credit. External scrap and waste treatment recorded explicitly. Marketable coproduct claims require actual quality, quantity and independently reviewed treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each VIN or traceable same-configuration batch | same declared manufacturing period | same accepted complete delivery configuration | accepted net mass per unit | vehicle-scale calibration; empty-body record; delivery-fluid/BOM binding; signed release |
| cp_body | body | each atomic process row | measurement | steel grade/heat/thickness/drawing; purchased-channel versus site-forming; net issues/returns; weld map/wire/gas; meter kWh; rejects/scrap; captured dust; outlet particle concentration/flow/time | Weigh net stock issues and segregated offcuts; trace cut/form/weld jobs and actual utilities. Measure post-control outlet particulate with receiving-air conditions and recorded size fraction, not a generic welding factor. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing-data log |
| cp_coating | coating | each atomic process row | measurement | supplier SDS/recipe/concentration/solids; net ingredient issues; wet purge/residue chemistry; retained film; kWh; outsourced route; xylene speciation/air flow/time | Measure each supplied chemical/coating and separate wet waste; reconcile bath/paint stocks and recovered material to retained film. Meter actual utilities and sample post-control xylene species; do not infer all VOC as xylene. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing-data log |
| cp_integration | integration | each atomic process row | measurement | chassis VIN/supply scope/received mass and fuel-fluid state; exact component part numbers/dry masses; mounting design/torque; pump/cylinder/hose/control specification; oil grade/density/temperature/net fill/recovery; kWh | Reconcile purchased chassis and each installed body/hydraulic/control component to released BOM, measured or traceable supplier net mass. Record contained versus separate PTO/lifter/components; meter electric installation/test work and weigh oil fill/recovery/waste. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing-data log |
| cp_release | release | each atomic process row | measurement | VIN/test plan/results; engine/PTO operating time; new fuel mass; incoming/opening/closing tank stock; fossil/bio carbon composition; retained fuel/oil; actual road/leak/interlock tests; utilities; empty-body M | Collect actual factory fuel/test utilities and accepted counts including rework. Separate imported chassis fill, additional supply, recovery, consumption and delivered stock. For fossil CO2 use measured exhaust or measured consumed fossil-carbon balance, separating retained carbon and other carbon products; no fixed fuel factor. Record all other species individually when evidenced, never NOx as NO2. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing-data log |
| cp_packing | packing | each atomic process row | measurement | actual PE formulation/thickness/mass; board flute/fiber/recycled-content/mass; returns; detached spare list | Weigh each actual packaging component separately and keep outside M; record detached spare supply separately. | kg | each work order/batch/VIN; monthly closure | complete declared year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; supplier/BOM release; stock/count closure; missing-data log |
| cp_allocation | manufacturing | shared_load | measurement | total supplied demand; submeter load/time; served variants; excluded work | Measure exchange-specific causal demand/time and served work orders; justify driver and reconcile all shares to meter total. | MJ; h | each shared batch; monthly reconciliation | same production period | all served sites/variants | partition measured causal demand; attributable amount / accepted units | meter closure; sensitivity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | body_sheet; wear_plate; subframe_channel; welding_wire; argon; body_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; epoxy_primer; pu_topcoat; coating_electricity; wash_effluent; paint_waste; xylene_air; cab_chassis; hydraulic_pump; packing_cylinder; tailgate_cylinder; ejector_cylinder; spool_valve; hydraulic_hose; oil_reservoir; pto; steel_screw; body_controller; body_harness; hydraulic_oil; used_oil; integration_electricity; bin_lifter; diesel_fuel; test_water; release_electricity; fossil_co2_air; pe_film; corrugated_board | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is the same-period/configuration attributable net exchange divided by accepted complete units, after stock/reject/rework reconciliation. Divide by measured M, keeping each numerator in kg or MJ. If supplier counts or liquid volumes are used for mass, retain actual part-specific weighing or same-formulation measured density/temperature evidence and explicit conversion records; no default part mass/density. Received fuel contained in chassis, new fuel supply, consumed test fuel and retained delivery fuel must reconcile without counting contained supply twice. Compatible variants may be aggregated only after separate normalization with disclosed measured weights and uncertainty.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Verify exact material grade/state, supplied formulation and component completeness; distinguish chassis/body/service, parts/complete cylinders and commodity oil/formulated fluid. Preserve public reference properties. | released supplier specifications; identity/property/unit audit |
| quality_complete | vehicle | Reconcile fitted components and delivered retained fluids to actual complete M. No invented residual mass, assumed body weight or invisible chassis emissions. Document upstream/treatment coverage gaps. | VIN BOM; calibrated scale; supplier scope; stock closure |
| quality_acceptance | release | Retain actual mounting, leak/pressure, packing/ejector, interlock/emergency-stop, road/brake and applicable release results; no brochure values as acceptance defaults. | signed tests and release; calibrated instruments; actual approvals |
| quality_period | records | Declare sites/representative period, supplier versions, primary coverage, allocation uncertainty and missing/excluded/not-applicable status. Historical interface examples are not current numerical plant data. | work orders; meter closure; sampling conditions; uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg complete reference output and measured cp_mass M linked to exact empty-body VIN/BOM and delivered fluid/accessory state. GVW, approximate body mass, refuse tonnes or service distance cannot be the denominator. |  |
| validation_basis | inventory | Every applicable non-reference row applies normalize_mass and its declared collection protocol, with the same accepted count/period/configuration. Validate numerator units and original reference properties. |  |
| validation_supply | components | Purchased chassis, painted body, cylinders, lifter and PTO scopes must remove duplicate contained steel/consumables/fluids/components. Separate conditional exchanges from necessary processes; absent candidates require supported not-applicable records. |  |
| validation_emissions | elementary | Require evidence of actual post-control particle size/air medium, xylene speciation and immediate fossil CO2 versus biogenic/retained carbon. Captured dust/treatment liquid are wastes. Add each actual NO, NO2, N2O, CO and other evidenced species separately; NOx totals establish neither NO2 nor NO amount. No default exhaust or leakage. |  |
| validation_coverage | dataset | Distinguish measured/calculated/estimated/missing/excluded/not-applicable. Report unresolved identities/amounts/providers and omitted route coverage. Structural pass does not approve methodology or establish complete cradle-to-gate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Exact configured complete diesel steel-body single-chamber rear-loader vehicle manufacturing module for declared sites/period. Expanded upstream modelling only after independent supplier/transport/treatment completeness assessment. |
| excluded_use | Waste collection/service comparisons, generic special-vehicle mix, other powertrain/loading architectures, remanufacture or unsupported full cradle-to-gate claims. |
| required_metadata | VIN/model/BOM revision; purchased diesel chassis supplier and included driveline/cab/wheels/fluids; single-chamber steel body size/grade/thickness and fabrication route; subframe/mounting design; hopper/packing/ejector/tailgate design; exact pump/cylinder/valve/hose/PTO and control specification; fitted bin lifter/accessories; coating formulation and make-or-buy; hydraulic fluid/fuel composition and delivered levels; measured net M; sites/period/accepted count; actual acceptance plan; utility/provider/transport/treatment coverage; detached spares and packing excluded |
| required_quality_disclosure | Measured coverage, current BOM/supplier boundaries, missing identities/amounts/providers, accepted count/M, tests/rework/recovery, balances, allocation/uncertainty, omitted routes and source limitations/review state. |
| update_trigger | Chassis/body size/grade/route or supplier change, loading/hydraulic/control/lifter changes, coatings or delivery-fluid state, test plan/sites/utility/period revision or resolved evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| heil-durapack-5000-2025 | handbook | Heil DuraPack5000 High-Compaction Rear Loader,2025-labelled official brochure, PDFpp.2–4: construction, component options, chassis/hydraulic tables and specifications disclaimer. https://www.heil.com/wp-content/uploads/2021/09/DuraPack-5000-brochure-2025.pdf | Manufacturer-specific steel/welded-subframe and component/interface architecture only. No material thickness, approximate weight, capacity, pressure, flow, performance, lifetime or LCI factors adopted. Actual drawings and foreground govern applicability. |
| dennis-eagle-olympus | handbook | Dennis Eagle Olympus official product page, THE OLYMPUS and SAFETY sections; undated page. https://www.dennis-eagle.co.uk/products/olympus-body/olympus/ | Independent single-compartment, lift adaptation and hydraulic actuation case; not numerical production, universal controls, hydraulic demand, capacity or life. |
| scania-chassis-subframe | handbook | Scania Parts for Bodybuilding: Chassis frame and subframe, PDFp.1 attachment tables; no printed edition, PDF metadata modified October2021. https://truckbodybuilder.scania.com/content/dam/bodybuilder/tbb-files/scania-parts-for-bodybuilding/Chassis_frame_and_subframe.pdf | Historical manufacturer-specific interface alternatives only; not current installation approval, part availability or universal fastener size/grade/torque. Current chassis/body documents required. |
