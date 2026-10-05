---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.trailer-support-assembly
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Paired manual telescopic trailer support assembly manufacturing

## 1. Scope and Applicability

Manufacture of a new complete paired mechanical semi-trailer support assembly: matched driven two-speed internal-gear leg and follower leg, welded square-steel telescopic housings, screw/nut lifting mechanisms, rigid steel feet, connecting cross shaft and manual crank. This route fabricates housings, mounting flanges/stiffeners and rigid feet locally from identified stock and assembles supplied finished screw/gear/shaft components. Conditional actual local powder coating with electric cure is included. Gear cutting, casting, heat treatment or spindle machining inside bought modules is upstream, not presumed local. Actual released drawing, travel/mount/foot configuration and supplier contents control applicability.

Exclude complete trailers/tractors, separately supplied spare single legs, general-purpose jacks, hydraulic/powered/electric landing gear, drop-leg/pin-only supports, airbag/cushion feet, complete-leg assembly-only routes and raw casting/gear-making routes. Other trailer axles, suspension, braking, couplings and freight-body parts are outside this output. Exclude installation onto a customer trailer, coupling/parking/lifting services, load transport, in-use maintenance and end of life. Factory setup, inspection and actual attributable acceptance/type/sample tests remain foreground; this module alone is not complete cradle-to-gate.

This is a scientific-review-pending candidate methodology, not an approved product rule. Mechanical support manufacture differs from complete-trailer manufacture and from general lifting service; per-kg outputs do not establish equivalent load-support performance.

Overlap decision: the existing pulley-tackle/hoists/winches/jacks PCR supplies reusable generic stock, utility, mass-normalization and allocation methods. This paired trailer-component output adds matched driven/follower synchronization, cross-shaft/crank interfaces, mounting/overlap and rigid-foot load-path checks, grease-content closure and independent complete-pair dispatch weighing. A standalone lifting jack or complete trailer cannot use this paired-component identity. The distinction is actual architecture and product dispatch state, not CPC code.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.trailer-support-assembly |
| classification_refs | CPC:3.0:49232; narrower; coverage context, no accepted mapping |
| covered_products | Manufacture of a new complete paired mechanical semi-trailer support assembly: matched driven two-speed internal-gear leg and follower leg, welded square-steel telescopic housings, screw/nut lifting mechanisms, rigid steel feet, connecting cross shaft and manual crank. This route fabricates housings, mounting flanges/stiffeners and rigid feet locally from identified stock and assembles supplied finished screw/gear/shaft components. Conditional actual local powder coating with electric cure is included. Gear cutting, casting, heat treatment or spindle machining inside bought modules is upstream, not presumed local. Actual released drawing, travel/mount/foot configuration and supplier contents control applicability. |
| excluded_products | Exclude complete trailers/tractors, separately supplied spare single legs, general-purpose jacks, hydraulic/powered/electric landing gear, drop-leg/pin-only supports, airbag/cushion feet, complete-leg assembly-only routes and raw casting/gear-making routes. Other trailer axles, suspension, braking, couplings and freight-body parts are outside this output. Exclude installation onto a customer trailer, coupling/parking/lifting services, load transport, in-use maintenance and end of life. Factory setup, inspection and actual attributable acceptance/type/sample tests remain foreground; this module alone is not complete cradle-to-gate. |
| representative_product | One complete accepted mechanical driven/follower leg pair with rigid feet, cross shaft, crank and exact supplied drawing configuration. JOST internal-gear products illustrate interfaces; no model or numeric specification mandated. |
| production_route | Telescopic steel housing and rigid-foot fabrication; Conditional housing surface preparation and powder finish; Screw, gear, leg-pair and crank assembly; Pair function acceptance, complete weighing and dispatch |
| market_state | New complete paired support assembly at its own manufacturer dispatch, before mounting to a customer trailer; retain assembled grease/finish, exclude trailer/test load/packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of one complete specified manual trailer-support pair. |
| How much | 1kg accepted net manufactured output from actual M kg per one complete same-configuration pair. One accepted unit means the complete pair, not each leg or an installed trailer. |
| How well | Actual current released drawings and contract-defined weld/geometry/stroke/gear/synchronization/retention/grease and factory test acceptance. No universal static capacity, input torque or test load adopted. |
| How long or cycle | One manufacture/acceptance cycle; no operating life or parking/lifting-service reference. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete paired manual telescopic trailer support assembly |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/drawing revision/serial or lot; matched drive/follower pair; internal two-speed gear architecture; square tube grade/heat/section/wall/straightness/overlap; mounting flanges and rigid-foot geometry; actual stroke/gear ratio/crank/shaft interfaces; screw/nut/bearing/gear materials and supplier heat-treatment/contents; coating formulation and actual cure route; grease identity/incremental fill/precharged contents; complete dispatch inclusion of feet/shaft/crank/covers/fasteners; site/period/accepted pair count/rework/test attribution; current contractual acceptance; original calibrated complete-pair net M kg and independent installed BOM mass; upstream missing identities and scope |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | fabrication_power; coating_power; assembly_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and multiply by3.6MJ/kWh; no rated power or assumed duty. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received identified welded square tube/plate, actual joining inputs, supplied finished mechanisms/shaft/crank/fasteners and utilities; local housing/foot fabrication, conditional finishing, assembly and acceptance to support-assembly dispatch. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:49232; narrower paired manual telescopic internal-gear support route |
| recursive_input_rule | Purchased complete legs cannot also be charged with their contained housing stock/work. Complete-leg assembly-only route outside scope. Supplied lifting/shift modules contain declared components, finish and grease; expand local mechanism manufacture only from new actual stock/process evidence. |
| upstream_dataset_requirement | Compatible stock/material/finished module/utility/transport/treatment datasets with actual grade, property, composition and supply state before extending scope beyond foreground. |
| disclosure | Site/period, make-or-buy, modules/grease contents, actual weld/finish/test stages, missing upstream/support/treatment coverage; this module alone not complete cradle-to-gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_supplied | assembly | Each input card one defined finished part or assembly model and separately supplied kg. Contained spindle/nut/bearings/gears/grease not added again. Different driven/follower interfaces require distinct records; purchased wind-turbine drives not substitutes. | parts-method |
| boundary_delivery | finished_machine | Reference is a complete paired unit with fitted feet, connecting shaft/crank/covers and declared retention hardware. If detached for transport, restore the same complete acceptance state for weighing or retain independently traceable complete assembly weighing records. Trailer mounting bolts/braces not supplied as part of this output and loose spares/packaging remain outside M. Retained grease counted once. |  |
| boundary_tests | acceptance | Only actual attributable factory test and setup demand, including support fixtures and destructive rejects. Distinguish single-pair routine checks and sampled/type load tests. Subsequent trailer bracing/customer installation/in-use lifting outside; catalogue capacities depend on installed support conditions and are not universal factory thresholds. | jost-method |
| boundary_finish | coat | Actual coating route only; purchased finished parts coating upstream. JOST pretreatment capability supports process possibility, not mandatory ten stages, thickness or cure fuel. Add every actual cleaner/wastewater/fuel separately when present. | finish-method |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame` | Telescopic steel housing and rigid-foot fabrication | required | Actual stock cutting/forming/drilling, flange/stiffener/foot jig welding and deburring; verify paired straightness/clearance and welds against released drawings. | foreground_manufacturing | 1kg accepted output; actual conditional exchanges only |
| `coat` | Conditional housing surface preparation and powder finish | conditional | Only actual local cleaning/powder/electric cure/rework with identified formulation, meters and residues; no blanket10-stage pretreatment requirement. | foreground_manufacturing | 1kg accepted output; actual conditional exchanges only |
| `assembly` | Screw, gear, leg-pair and crank assembly | required | Mount supplied matched lifting and drive components, thrust bearings, actual separate followers, cross shaft/crank/covers, foot retention and controlled lubrication. Verify contents to avoid duplicate components/grease. | foreground_manufacturing | 1kg accepted output; actual conditional exchanges only |
| `acceptance` | Pair function acceptance, complete weighing and dispatch | required | Actual stroke/shift/synchronized travel/retention/sealing and weld/finish inspection; actual contract-defined proof/type/sample tests and rejects with attributed demand; complete paired mass measurement. | foreground_manufacturing | 1kg accepted output; actual conditional exchanges only |

### Process: Telescopic steel housing and rigid-foot fabrication (`frame`)

Actual stock cutting/forming/drilling, flange/stiffener/foot jig welding and deburring; verify paired straightness/clearance and welds against released drawings.

#### Inputs

##### Product flows

###### Tubes and pipes, of non-circular cross-section, welded, of steel (`outer_tube`)

One actual outer-housing square welded steel tube grade/heat/cross-section/wall, received kg and offcut/return records. Different grades/dimensions separate.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Tubes and pipes, of non-circular cross-section, welded, of steel (`inner_tube`)

One actual telescoping inner-leg welded square tube specification, separately measured kg, clearance and straightness to matched outer leg; not same stock twice.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Hot-rolled unalloyed steel mounting-and-foot plate stock (`plate`)

One actual unalloyed plate grade/thickness for locally cut/formed/welded mounting flange, stiffener and rigid foot; other grade stock separate. Supplied complete foot replaces local foot stock/work.

- Selected flow: Hot-rolled unalloyed steel mounting-and-foot plate stock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Solid carbon-steel welding filler wire (`weld_wire`)

Only actual qualified solid-wire joining procedure: one identified chemistry/diameter and issued-returned kg; autogenous welding does not require filler.

- Selected flow: Solid carbon-steel welding filler wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Supplied pure carbon dioxide welding shielding gas (`shield_co2`)

Conditional actual pure CO2 shielding input kg with cylinder issue/return or independently documented gas-state conversion. Argon/CO2 mix is separately qualified, not replaced by pure CO2.

- Selected flow: Supplied pure carbon dioxide welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Alternating current (`fabrication_power`)

Actual below1kV terminal cutting/forming/drilling/jigging/welding/extraction demand. Site compressed-air generation attributable once, not purchased electricity plus duplicated generation.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual separated dry non-stainless uncoated tube/plate offcuts and reject stock to disclosed destination. Internally reused stock not external waste.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`particle_air`)

Only actual measured post-control fabrication release to immediate unspecified air, unspecified particle size; captured dust separately waste, measured size fractions separate.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

### Process: Conditional housing surface preparation and powder finish (`coat`)

Only actual local cleaning/powder/electric cure/rework with identified formulation, meters and residues; no blanket10-stage pretreatment requirement.

#### Inputs

##### Product flows

###### Powder Coating (`powder`)

Conditional one supplied dry polymer powder formulation with actual SDS/resin/pigment, issued/returned/reclaimed kg and retained film; no universal recipe.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Tap water (`water`)

Actual purchased municipal product cleaning makeup kg; resource abstraction, chemical cleaner and wastewater separately identified.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

###### Alternating current (`coating_power`)

Actual below1kV preparation/spray/electric cure/extraction/rework equipment demand in this electric finish subroute. Gas or purchased heat routes need separate inventories.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Unusable dry polymer powder-coating residue (`powder_residue`)

Only actual segregated unreusable dry formulated powder after reclaim/return, sent to declared treatment, no double air/waste loss.

- Selected flow: Unusable dry polymer powder-coating residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

##### Elementary flows

###### Particulate matter, particle size unspecified (`powder_particle_air`)

Only actual post-control measured powder release to immediate unspecified air. No assumed solvent VOC or inevitable powder loss.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coat.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_coat`
- Sources:

### Process: Screw, gear, leg-pair and crank assembly (`assembly`)

Mount supplied matched lifting and drive components, thrust bearings, actual separate followers, cross shaft/crank/covers, foot retention and controlled lubrication. Verify contents to avoid duplicate components/grease.

#### Inputs

##### Product flows

###### Finished steel elevating screw and matched lifting-nut assembly (`screw_nut`)

One actual matched supplied screw/nut lifting module model/thread/pitch/material/load configuration kg; contents and factory lubricant declared. Not a fastening screw or complete leg.

- Selected flow: Finished steel elevating screw and matched lifting-nut assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished two-speed input gear and shift-housing assembly (`shift_module`)

One exact supplied input/shift module kg with actual gears/shaft/detent/spring/housing included. Different one-speed follower parts recorded separately; wind-turbine gearbox not substituted.

- Selected flow: Finished two-speed input gear and shift-housing assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished ductile-iron landing-gear bevel gear (`bevel_gear`)

One actual supplied bevel-gear specification kg with drawing/tooth/heat-treatment record. Actual ductile-iron grade/treatment qualified by supplier; not all gears assumed this material.

- Selected flow: Finished ductile-iron landing-gear bevel gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Ball or roller bearings (`bearing`)

One actual supplied thrust ball bearing model kg and matched screw load path, factory grease content declared; not charged if already contained in lifting module.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished steel landing-leg connecting cross shaft (`cross_shaft`)

One actual supplied cross shaft model/length/interface kg linking drive and follower legs. Trailer axle/wind turbine main shaft not interchangeable.

- Selected flow: Finished steel landing-leg connecting cross shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished steel landing-gear hand-crank assembly (`crank`)

One supplied crank model kg including declared grip/hanger/retainer contents; actual shaft interface and stowage retention verified.

- Selected flow: Finished steel landing-gear hand-crank assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Supplied low-temperature gear-and-spindle lubricating grease (`grease`)

One actual supplier-approved grease formulation/SDS/base-oil/thickener kg, metered incremental charge and retained mass. Precharged supplier contents not additionally charged.

- Selected flow: Supplied low-temperature gear-and-spindle lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Steel screw (`cover_screw`)

One actual steel cover-screw size/thread/grade/finish specification supplied kg, counts trace only. Bolts, nuts, pins, washers and other sizes individually added when not contained.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Alternating current (`assembly_power`)

Actual below1kV fit/press/torque/lubrication equipment demand; manual operation not use-phase electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Pair function acceptance, complete weighing and dispatch (`acceptance`)

Actual stroke/shift/synchronized travel/retention/sealing and weld/finish inspection; actual contract-defined proof/type/sample tests and rejects with attributed demand; complete paired mass measurement.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Actual below1kV factory stroke/shift/synchronization/retention tests, attributable proof/type/sample test supports, calibrated weighing equipment demand.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Conditional actual noncellular nonadhesive protective film kg outside net M; other packaging individually identified.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_acceptance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete paired manual telescopic trailer support assembly (`finished_machine`)

1kg complete accepted matched drive/follower leg pair with installed rigid feet, elevating/drive mechanisms, connecting cross shaft, crank and declared retained grease. Actual net M, not trailer mass fraction or rated load.

- Selected flow: Complete paired manual telescopic trailer support assembly
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

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Attribute actual issues/returns/meters/work orders to the same drawing/configuration and accepted complete pair count. Include actual rejects/rework/sample-test burden; no sales/mixed-leg count, assumed yield or1% trailer-mass estimate. |  |
| allocation_shared | shared operations | Separate operations first. If inseparable, document actual causal welding/fixture time, treated area/cure occupancy and test-station demand. Reconcile meter totals and test alternative drivers; fixed pair inspection not automatically mass-proportional. |  |
| allocation_scrap | waste | Distinguish internal reuse, outgoing scrap/residue treatment and genuine co-products. No automatic avoided steel/powder credit. Economic allocation only when actual genuine co-product and no causal physical driver, with actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted complete pair | matched manufacturing period | actual complete weighing station | accepted net mass per unit | complete-pair calibrated weighing/tare/configuration; independent installed stock/module/grease mass closure |
| cp_frame | frame | independent atomic exchanges | foreground_record | stock grade/heat/section/drawing; issues/returns/cuts; weld procedure/filler/shield identity; metered electricity; dry scrap and actual post-control sampling | Record each actual exchange separately by identified supplier issues/returns, independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier part contents/formulation; calibration/sampling uncertainty; issue-return-stock/count closure |
| cp_coat | coat | independent atomic exchanges | foreground_record | actual cleaner/SDS/powder issue-return-reclaim/retained film; makeup water; electric cure/extraction; segregated wastewater/residue | Record each actual exchange separately by identified supplier issues/returns, independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier part contents/formulation; calibration/sampling uncertainty; issue-return-stock/count closure |
| cp_assembly | assembly | independent atomic exchanges | foreground_record | matched pair/supplier part numbers and contents; installed component kg/count trace; thread/tooth/shaft/clearance/retention; incremental grease kg and precharged closure | Record each actual exchange separately by identified supplier issues/returns, independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier part contents/formulation; calibration/sampling uncertainty; issue-return-stock/count closure |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | pair serial/drawing/configuration; current inspection/test plan results; accepted/reject/tested count; test-support meter; complete calibrated net weighing/tare and independent BOM mass | Record each actual exchange separately by identified supplier issues/returns, independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test site and declared subcontractors | attributable process exchange / accepted units | supplier part contents/formulation; calibration/sampling uncertainty; issue-return-stock/count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | outer_tube; inner_tube; plate; weld_wire; shield_co2; fabrication_power; steel_scrap; particle_air; powder; water; coating_power; powder_residue; powder_particle_air; screw_nut; shift_module; bevel_gear; bearing; cross_shaft; crank; grease; cover_screw; assembly_power; test_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is actual attributed process exchange divided by the matched accepted complete-pair count after measured issues/returns/stock/reclaim/rework; M independently measured for the same complete configuration. Preserve original kg or MJ numerator, including actual supplied installed bearing/screw/module kg; counts supplementary only. Count/area/volume conversions require actual same-part physical records, gas state or geometry and uncertainty; no density, catalogue pair mass, lifting capacity or trailer-mass share assumed.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Weigh the complete accepted same-configuration pair on a calibrated platform with all installed feet/shaft/crank/covers/retention and grease, controlled tare and no trailer, operator, test load or temporary support fixture in net M. Retain original readings/serial/configuration/date/instrument/calibration/repeats/uncertainty; independently reconcile housing/foot, supplied mechanisms, shafts/crank/fasteners/finish and retained grease masses to M. Missing originals block dataset use. | original complete-pair weighing and independent installed BOM masses |
| quality_pair | finished_machine; assembly | One accepted unit means the matched drive/follower pair, not one leg. Declare actual travel/mount, rigid foot, cross-shaft length/interface, crank/hanger, covers and supplied bracket inclusion. Different leg types/variants separated; detached transport parts reassembled for complete weighing. Customer-trailer bracing/mount hardware excluded unless explicitly supplied in this reference; no loose spares/packaging in M. | parts-method; actual current fit-list and dispatch records |
| quality_loadpath | frame; assembly | Trace released square tube grades/geometry, weld procedure/inspection, stiffener/foot interfaces, telescopic alignment/overlap/clearance, screw/nut thread/retention and thrust-bearing load path. Confirm actual two-speed shift engagement and synchronized drive/follower travel with compatible shaft/crank. Manufacturer weld slide supports fabrication example, not universal weld length/grade/thickness. Supplier heat treatment is upstream unless actually local. | build-method; jost-method; actual drawings and joint/fit acceptance |
| quality_grease | grease; screw_nut; shift_module; bearing | Retain actual lubricant SDS/formulation/base-oil/thickener/temperature suitability and weighed initial fill/return/loss/retained mass. Supplier precharged grease counted inside modules once; only actual additional grease separately input. No wax-solvent lubricant, lithium hydroxide or generic oil substituted. Seal/pin/bushing contents tracked individually when not inside module. | jost-method; supplier SDS and measured fill balance |
| quality_identity | all flows | Retain actual public reference properties. Noncircular welded tube matches square stock, not circular Steel Pipe. Public Semi-trailer landing gear does not establish this exact complete standalone paired output and its classification49129 discrepancy/illustrative1% trailer share are disclosed, not adopted. Unresolved reference registered by exact finished_machine and matching name. Shield gas Volume*time is not measured kg; powder-waste Aluminium content not total mass. | direct public flow/property/unit-chain originals and supplier configuration |
| quality_acceptance | acceptance | Require current released model-specific inspection/test plan and actual results for weld/geometry, full permitted stroke, shift engagement, paired travel, shaft/crank/foot retention, sealing/lubrication and finish. Actual contractual proof/type/sample load tests record configuration, support/bracing method, load/torque instruments, edition, laboratory, test count/period, consumed support and rejects; do not apply capacities conditional on installed trailer bracing as universal standalone acceptance or prescribe numeric test thresholds. | jost-method; actual current inspection/test contract and originals |
| quality_release | elementary | Only actual evidenced post-control immediate-air particulate mass from sampling/concentration/exhaust/time or direct mass measurement. Captured dust/residue waste separate. No automatic VOC, welding-gas carbon emission or upstream electricity emissions as direct factory emissions; any actual species/gas/fuel needs separate matched atomic record. | actual original sampling and waste balance |
| quality_coverage | dataset | Close all actual drawing/fit-list/stock/meter items, including separate follower gear/shaft, pins/bushings/seals/springs/nuts/washers/grease fittings/covers/crank hanger, other plate grades, actual cleaners/wastewater/captured dust/packaging and utilities when not already contained. Add each actual physical/chemical exchange separately with quantity/protocol. Distinguish measured/calculated/estimated/missing/excluded/not-applicable; disclose upstream module/stock/transport/support/treatment gaps. No generic trailer-parts pool or invented completeness. | parts-method; current complete fit-list, stock/meter and supplier records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg of complete accepted declared matched support pair; reference name equals finished_machine. Candidate blank UUID only with precise registered identity. Require original cp_mass M kg and independent complete-pair mass closure; finite checks do not approve physical data or methodology. |  |
| validation_basis | inventory | Check actual lowercase row/rule/protocol references, same-configuration accepted pair denominator, period, original quantity units and normalize_mass links. Reject mixed pair/single-leg counts, catalogue/load/1% conversions and property substitution. |  |
| validation_scope | dataset | Verify actual local housing/foot fabrication, manual internal two-speed paired screw architecture, declared purchased contents and complete factory acceptance. Whole trailer manufacture/service, powered/hydraulic/drop legs and purchased complete-leg-only assembly do not inherit this scope. |  |
| validation_release | elementary | Actual medium/particle state and post-control mass only. Purchased tap-water product, resource abstraction, wastewater, captured dust treatment and direct air release remain separate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new complete paired mechanical semi-trailer support assembly: matched driven two-speed internal-gear leg and follower leg, welded square-steel telescopic housings, screw/nut lifting mechanisms, rigid steel feet, connecting cross shaft and manual crank. This route fabricates housings, mounting flanges/stiffeners and rigid feet locally from identified stock and assembles supplied finished screw/gear/shaft components. Conditional actual local powder coating with electric cure is included. Gear cutting, casting, heat treatment or spindle machining inside bought modules is upstream, not presumed local. Actual released drawing, travel/mount/foot configuration and supplier contents control applicability. |
| excluded_use | Exclude complete trailers/tractors, separately supplied spare single legs, general-purpose jacks, hydraulic/powered/electric landing gear, drop-leg/pin-only supports, airbag/cushion feet, complete-leg assembly-only routes and raw casting/gear-making routes. Other trailer axles, suspension, braking, couplings and freight-body parts are outside this output. Exclude installation onto a customer trailer, coupling/parking/lifting services, load transport, in-use maintenance and end of life. Factory setup, inspection and actual attributable acceptance/type/sample tests remain foreground; this module alone is not complete cradle-to-gate. |
| required_metadata | model/drawing revision/serial or lot; matched drive/follower pair; internal two-speed gear architecture; square tube grade/heat/section/wall/straightness/overlap; mounting flanges and rigid-foot geometry; actual stroke/gear ratio/crank/shaft interfaces; screw/nut/bearing/gear materials and supplier heat-treatment/contents; coating formulation and actual cure route; grease identity/incremental fill/precharged contents; complete dispatch inclusion of feet/shaft/crank/covers/fasteners; site/period/accepted pair count/rework/test attribution; current contractual acceptance; original calibrated complete-pair net M kg and independent installed BOM mass; upstream missing identities and scope |
| required_quality_disclosure | Candidate scientific review pending. Actual pair net M originals/uncertainty/BOM closure, configuration and supplier prefill, current weld/fit/test results and count attribution, causal shared allocation, unresolved identities and upstream/support/transport/treatment gaps. Per-kg manufacture not lifting-service equivalence or approved complete cradle-to-gate. |
| update_trigger | Tube/plate/weld/foot/gear/shaft/crank/grease/finish and supply route changes; site/period/test scope/net weighing/configuration changes; new identities or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jost-method | handbook | JOST International, A440 Series official overview and gearbox/grease features; undated, unpaginated. https://jostinternational.com/landing-gear-a440-series | Internal mechanical gearing, screw enclosure, supplier gear material/prefill and conditional installed-bracing context. Model-specific architecture only; no catalogue load/ratio/warranty life or universal material/process requirement adopted. |
| build-method | handbook | JOST International, Why I Should Buy A JOST Landing Gear, undated; PDF physical pages4-5, printed slides4-5. https://jostinternational.com/hubfs/Jost_International_April_2024/Pdf/Why-I-Should-Buy-A-JOST-Landing-Gear.pptx-compressed.pdf?hsLang=en | Visually checked welded formed stiffeners and telescoping upper/lower housing as manufacturing example. No pictured dimensions, thickness or load threshold mandated. Current drawings determine actual stock and joint procedure. |
| parts-method | handbook | JOST International, LT LG400-01 RevD Parts Breakdown; undated historical diagram, PDF physical page1, printed page8of8. https://jostinternational.com/hubfs/Jost_International_April_2024/Pdf/Parts-Breakdown.pdf?hsLang=en | Distinct housing, drive/follower, cross shaft, crank, bearings, gears and contents interfaces; historical assembly depiction only. No current interchangeability, fixed quantities or part numbers prescribed. Current actual supplied BOM overrides example. |
| finish-method | handbook | JOST International, Powder Coating official capability page; undated, unpaginated, Powder coating to the highest quality standards/Available services. https://jostinternational.com/powder-coating | Surface preparation/powder finishing possibility, not proof every leg or factory uses it. No10-stage recipe, thickness, certifications, generic cure energy or life adopted; actual local process/SDS/meters required. |
