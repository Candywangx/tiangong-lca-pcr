---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.wheelchair
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Folding manual steel-frame wheelchair manufacturing

## 1. Scope and Applicability

Manufacture of a new complete adult manual wheelchair with folding cross-brace welded steel-tube frame, powder-coated finish where applied, handrim rear wheels with solid polyurethane tyres, front casters and separately supplied seat/back slings, arm supports, swing-away footrests and mechanical parking wheel locks. Actual released tube cutting/bending/jigging/joining, conditional cleaning/powder/electric cure, component mounting/adjustment and configured factory acceptance form the foreground. Actual stock grade, joints, supplier module contents and complete installed accessories define this route, not a universal chair design or material recipe.

Exclude powered or power-assisted chairs/batteries/motors, attendant-only small-wheel transport chairs without handrims, rigid/sports/carbon/titanium/aluminium-frame chairs, pneumatic-tyre routes, reclining/standing or complex custom seating systems, repair/refurbishment and complete-frame assembly-only manufacture. Brazed-only frame route is outside this welded-frame boundary. Exclude clinical assessment/prescription/fitting, personal mobility service, occupied distance, user/attendant energy, use-phase maintenance and end of life. Bounded factory adjustment/inspection/type or sample tests belong to manufacturing when attributable; this foreground is not a complete cradle-to-gate or clinical-outcome/lifetime service model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.wheelchair |
| classification_refs | CPC:3.0:49922; narrower |
| covered_products | Manufacture of a new complete adult manual wheelchair with folding cross-brace welded steel-tube frame, powder-coated finish where applied, handrim rear wheels with solid polyurethane tyres, front casters and separately supplied seat/back slings, arm supports, swing-away footrests and mechanical parking wheel locks. Actual released tube cutting/bending/jigging/joining, conditional cleaning/powder/electric cure, component mounting/adjustment and configured factory acceptance form the foreground. Actual stock grade, joints, supplier module contents and complete installed accessories define this route, not a universal chair design or material recipe. |
| excluded_products | Exclude powered or power-assisted chairs/batteries/motors, attendant-only small-wheel transport chairs without handrims, rigid/sports/carbon/titanium/aluminium-frame chairs, pneumatic-tyre routes, reclining/standing or complex custom seating systems, repair/refurbishment and complete-frame assembly-only manufacture. Brazed-only frame route is outside this welded-frame boundary. Exclude clinical assessment/prescription/fitting, personal mobility service, occupied distance, user/attendant energy, use-phase maintenance and end of life. Bounded factory adjustment/inspection/type or sample tests belong to manufacturing when attributable; this foreground is not a complete cradle-to-gate or clinical-outcome/lifetime service model. |
| representative_product | One complete accepted adult folding handrim manual wheelchair with welded steel frame, configured solid-polyurethane/composite wheel packages and specified seat/back/support/parking-lock fit-list. Drive SilverSport2 is a configuration illustration, not a compulsory model, clinical prescription or confirmation of its factory joint recipe. |
| production_route | Steel frame and folding-member fabrication; Frame surface preparation and powder finishing; Wheel, seating, support and folding-interface assembly; Configured mechanical acceptance, weighing and dispatch |
| market_state | Complete accepted operationally assembled chair with installed declared wheels/seat/back/arms/footrests/locks/accessories. Folding or removable supports for transport do not change the complete configuration; weigh after complete reassembly. User, test masses, packaging and detached accessories excluded from net M. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of the complete declared folding manual wheelchair, with configuration-specific mechanical function and supplied state. |
| How much | 1kg accepted net manufacturing output from actual measured M kg per one complete accepted same-configuration wheelchair. |
| How well | Actual released drawings/supplier fit-list, current applicable contract/conformity and recorded joint/fold/retention/wheel/parking-lock/seating/support acceptance. No clinical fit or universal patient rating inferred. |
| How long or cycle | One recorded manufacture/acceptance cycle, not a specified life or occupied-mobility service. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete folding manual steel-frame wheelchair |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/released drawing revision/serial; adult manual handrim/folding cross-brace architecture; seat width/depth/back and arm/footrest actual variant; frame tube/sheet grade/geometry/joint and finish; wheel/solid tyre/handrim/caster/fork/axle/lock/bearing specification and supplier contents; upholstery actual fabric/coating/seam/attachment; installed supports and accessories/cushion/anti-tip/belt inclusion; site/period/accepted count/rework and inspection/type/sample test basis; current applicable contract and configuration-specific conformity/acceptance; original complete calibrated weighing/tare/net state and independent installed component mass; net M kg excludes user/test masses/packaging/detached parts, differs from catalogue weight/load rating; upstream stock/component/utility/transport/treatment gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_energy | frame_power; coat_power; assembly_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and multiply by3.6MJ/kWh. No rated equipment power times presumed duty cycle. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received identified circular welded steel tube and conditional sheet/filler/gas plus supplied wheel/seating/support modules and actual utilities at manufacturer; local frame manufacture, conditional finishing, assembly and acceptance to dispatch. No extracted ores or constituent synthesis assumed local. |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:49922; narrower manual folding steel-frame route |
| recursive_input_rule | A received complete chair is not raw material. Bought complete coated frame assembly-only route lies outside this local-frame manufacturing boundary. Purchased complete wheel/support modules contain documented stocks/processes; do not also charge their contained resin/tyre/bearing/paint. |
| upstream_dataset_requirement | Actual compatible stock, chemical, supplied finished wheel/seat/support, utility, transport and treatment modules with grade/property/package/chemistry/supply condition disclosed before extending beyond foreground. |
| disclosure | Site/period, make-or-buy and supplied contents, actual drawing/assembly/test scope, rework/type/sample attribution, exclusions and missing upstream/support/treatment coverage. No default full cradle-to-gate label. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_modules | assembly | Each complete wheel/caster/lock/support package has independently measured installed supplied kg and declared tyre/bearing/handrim/axle/pad/footplate contents. One exact part/configuration per card; physically different left/right parts need distinct records. Local raw wheel/plastic/seat manufacture requires actual atomically expanded stock/process records, not inherited generic module. | intco-components |
| boundary_tests | acceptance | Include attributable manufacturing setup, joint/fold/lock/rotation/clearance inspection and actual type/sample/production tests with support energy and actual destructive rejects. Distinguish sampled burden allocation from per-unit inspection; no imported fatigue-cycle factor or patient mass input. |  |
| boundary_delivery | finished_machine | One complete as-accepted configured chair after installed footrests/arms/seat/wheels and documented accessories are reconciled; transport folding/removal recorded and reassembled before net weighing. Detached cushions/spares, user/test masses and transport packaging outside M. Retained bearing grease contained once. |  |
| boundary_finish | coat | Coating only where actually applied locally, specific supplied powder/SDS/issue-return-reclaim/cure demand. Powder coating does not itself imply solvent-VOC emission; every actual cleaner, wastewater and gas-fuel/heat exchange independently added if present. | drive-silversport |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame` | Steel frame and folding-member fabrication | required | Actual side-frame/cross-brace tube cutting/bending/jigging/welding and conditional bracket fabrication to released drawings; joint and alignment inspection. No bought complete frame also charged. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `coat` | Frame surface preparation and powder finishing | conditional | Only actual additional preparation/powder/electric cure/rework, with exact supplied formulation and metering. Supplier-finished components contain their upstream coating. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `assembly` | Wheel, seating, support and folding-interface assembly | required | Mount actual supplied wheel/caster/handrim/lock/seat/back/arm/footrest packages; folding pivots, axle/retention, alignment/clearance, specified screw torque and adjustments recorded for the complete approved configuration. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |
| `acceptance` | Configured mechanical acceptance, weighing and dispatch | required | Actual fold/unfold and retention, wheel/caster free rotation/tracking, footrest/arm/lock function, seating attachment and finish inspection; attributable type/sample tests and rework; complete net weighing. | foreground_manufacturing | 1kg accepted output; conditional exchanges only where actually used |

### Process: Steel frame and folding-member fabrication (`frame`)

Actual side-frame/cross-brace tube cutting/bending/jigging/welding and conditional bracket fabrication to released drawings; joint and alignment inspection. No bought complete frame also charged.

#### Inputs

##### Product flows

###### Steel Pipe (`steel_tube`)

Actual circular welded non-stainless steel tube, recorded grade/heat/diameter/wall and measured stock issues/returns. Released drawings determine side-frame and locally fabricated cross-brace cuts/bends/joints.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Cold-rolled low-carbon steel wheelchair axle-bracket sheet (`bracket_sheet`)

Conditional actual cut/formed bracket sheet grade/thickness. Supplier-complete bracket replaces contained sheet and work, not both charged.

- Selected flow: Cold-rolled low-carbon steel wheelchair axle-bracket sheet
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

Only actual qualified joining procedure consuming this exact filler chemistry/diameter; autogenous joining does not charge it. Brazing filler has a separate identity, not this wire.

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

###### Pure argon welding shielding gas (`shield_argon`)

Conditional actual joining procedure uses pure argon CAS7440-37-1 and metered kg or physically documented state-specific volume-to-kg conversion; mixed gas separate.

- Selected flow: Pure argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_frame.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_frame`
- Sources:

###### Alternating current (`frame_power`)

Actual below1kV grid-user cutting/forming/joining/jigging/extraction demand, including attributable compressed-air generation once; no rated power assumption.

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

Only actually separated dry untreated non-stainless tube/sheet offcuts to declared treatment, no same internal recycle double counted.

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

Only actual post-control cutting/joining/grinding particle release to immediate unspecified air with sampling and exhaust/time originals. Captured dust is waste; measured size fractions separate.

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

### Process: Frame surface preparation and powder finishing (`coat`)

Only actual additional preparation/powder/electric cure/rework, with exact supplied formulation and metering. Supplier-finished components contain their upstream coating.

#### Inputs

##### Product flows

###### Powder Coating (`coating_powder`)

Conditional actual one supplied dry polymer-resin/additive powder formulation with SDS, chemistry, colour, issued/returned/reclaimed kg and retained film. Public material identity does not establish specific resin or cure recipe.

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

###### Tap water (`coat_water`)

Actual purchased municipal product cleaning makeup kg where used. Recycle transfer, cleaner chemical, abstraction and outgoing wastewater separately identified.

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

###### Alternating current (`coat_power`)

Actual below1kV preparation/powder spraying/electric curing/extraction and rework demand; separately identify actual thermal fuel/heat if this electric configuration changes.

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

Only actual segregated unusable dry powder sent to treatment after measured reclaim/return, no captured dust counted as air and waste simultaneously.

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

Only actual measured powder-extraction post-control release to immediate unspecified air, particle size unspecified. No assumed solvent-VOC or inevitable powder loss.

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

### Process: Wheel, seating, support and folding-interface assembly (`assembly`)

Mount actual supplied wheel/caster/handrim/lock/seat/back/arm/footrest packages; folding pivots, axle/retention, alignment/clearance, specified screw torque and adjustments recorded for the complete approved configuration.

#### Inputs

##### Product flows

###### Finished composite wheelchair rear wheel with solid polyurethane tyre and handrim (`rear_wheel`)

One actual model/side wheel package kg with declared tyre/handrim/hub/bearing/axle contents. Distinct sides or sizes separate; contained tyre and bearing not added again.

- Selected flow: Finished composite wheelchair rear wheel with solid polyurethane tyre and handrim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished wheelchair front caster and fork assembly (`front_caster`)

One actual caster/fork/stem/bearing/solid-tyre package kg, trail/clearance/retention specified; different caster types separate and contained bearing not double counted.

- Selected flow: Finished wheelchair front caster and fork assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Brake assembly (`wheel_lock`)

One actual supplied mechanical push-to-lock wheelchair parking wheel-lock module kg and side/model/configuration. Public purchased wheelchair-brake identity qualified to this module; not dynamic service brake, caster or whole chair.

- Selected flow: Brake assembly `5e18162c-b48d-4476-b7f9-23884748e7f7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished vinyl-coated textile wheelchair seat sling (`seat_sling`)

One actual supplied seat sling kg and fabric/coating/edge-seam/attachment specification. Vinyl is not automatically a single PVC resin purity; supplier actual composition required.

- Selected flow: Finished vinyl-coated textile wheelchair seat sling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished vinyl-coated textile wheelchair backrest sling (`back_sling`)

Actual separate supplied backrest model kg, attachment and pocket content declared. Do not merge with seat or infer clinical pressure-relief function.

- Selected flow: Finished vinyl-coated textile wheelchair backrest sling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished swing-away wheelchair footrest with plastic footplate (`footrest`)

Actual one supplied footrest/heel-loop/hanger package kg, side and locking/adjustment interface; elevating/other types need separate physical cards.

- Selected flow: Finished swing-away wheelchair footrest with plastic footplate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished padded wheelchair armrest assembly (`armrest`)

One actual arm model kg with pad/support/side-panel and attachment scope, fixed/detachable actual variant not interchangeable; left/right different types separate.

- Selected flow: Finished padded wheelchair armrest assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Finished moulded elastomer wheelchair push-handle grip (`grip`)

Actual one supplied grip model/elastomer composition kg and retention method; other polymer/composition or handle tube separate.

- Selected flow: Finished moulded elastomer wheelchair push-handle grip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_assembly`
- Sources:

###### Steel screw (`steel_screw`)

One actual screw material/thread/length/coating specification, independently supplied kg and count trace. Other bolt/nut/washer/pin designs get separate cards; not fastener pool.

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

###### Finished steel wheelchair cross-brace pivot pin (`pivot_pin`)

One actual supplied pin grade/diameter/retention kg, not whole cross-brace. Locally fabricated cross-brace stock belongs frame and is not also purchased finished module.

- Selected flow: Finished steel wheelchair cross-brace pivot pin
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

Actual below1kV component mounting/torque/adjustment and inspection equipment demand; human propulsion has no purchased propulsion-electricity row.

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

### Process: Configured mechanical acceptance, weighing and dispatch (`acceptance`)

Actual fold/unfold and retention, wheel/caster free rotation/tracking, footrest/arm/lock function, seating attachment and finish inspection; attributable type/sample tests and rework; complete net weighing.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Actual below1kV production inspection/weighing and attributable type/sample testing equipment energy, with allocation to correct production and rejects.

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

Conditional actual noncellular nonadhesive protective film kg outside M. Cardboard/loose cushion/transport fixtures separately identified where present.

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

###### Complete folding manual steel-frame wheelchair (`finished_machine`)

1kg of complete declared accepted configured manual wheelchair including installed rear wheels/casters/seat/back/arms/footrests/locks and declared accessories once; actual measured net M, not catalogue weight or patient load.

- Selected flow: Complete folding manual steel-frame wheelchair
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
| allocation_direct | all processes | Prefer actual drawing/configuration work orders and stock/meter attribution. Match accepted complete chair count to the same manufacturing period; include actual rejects/rework/destructive test burden. Do not divide by sales, mixed configurations or assumed universal batch yield. |  |
| allocation_shared | shared operations | First separate operations. If inseparable, actual causal machine occupancy/joint work, coated surface/cure occupancy and inspection/test equipment demand determine documented drivers. Reconcile shared meter totals and compare plausible alternatives; fixed inspection burden is not automatically proportional to chair mass. |  |
| allocation_scrap | waste | Separate internal recycle, outgoing scrap/powder waste, treatment and genuine co-products. No automatic avoided virgin steel/paint credit. Economic allocation only for documented genuine co-products when causal physical basis unavailable, with actual price period and sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | accepted complete output | measurement | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete unit of the same configuration. | kg | every accepted wheelchair | matched manufacture/acceptance period | actual complete weighing/acceptance station | accepted net mass per unit | calibrated all-wheel platform readings/tare; complete installed accessories and no operator/test masses/packaging; independent component mass |
| cp_frame | frame | independent atomic exchanges | foreground_record | tube/sheet grade/heat/dimensions and issued-returned kg; drawing/joint procedure/jig orders; actual filler/gas if used; kWh; dry scrap; post-control species sampling | Record each actual exchange separately by identified supplier issue/return and independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | supplier formulation/fit-list, calibration/sampling uncertainty, issue-return-stock and count closure |
| cp_coat | coat | independent atomic exchanges | foreground_record | actual formulation/SDS and treated surface; powder issue/return/reclaim/retained film; cleaning water/chemicals; cure/extraction meters and segregated residues | Record each actual exchange separately by identified supplier issue/return and independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | supplier formulation/fit-list, calibration/sampling uncertainty, issue-return-stock and count closure |
| cp_assembly | assembly | independent atomic exchanges | foreground_record | actual wheel/caster/tyre/handrim/axle/lock and seat/back/support fit-list; supplier package contents; installed independent kg; pivot/fastener/retention and alignment/clearance/torque checks | Record each actual exchange separately by identified supplier issue/return and independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | supplier formulation/fit-list, calibration/sampling uncertainty, issue-return-stock and count closure |
| cp_acceptance | acceptance | independent atomic exchanges | foreground_record | serial/configuration; released acceptance/type/sample plan/results/period/accepted/rejected count; test equipment meters; calibrated complete weighing/tare/accessory/temporary test mass and independent installed BOM | Record each actual exchange separately by identified supplier issue/return and independently weighed installed kg, calibrated utility meters or actual post-control species sampling/exhaust/time. Record model/drawing/configuration, work orders, stock/rework, same-configuration accepted count and waste destination. | kg; MJ | per batch/unit/test and full period | same configuration manufacture and acceptance cycle | actual manufacturing/test sites and declared subcontractors | attributable process exchange / accepted units | supplier formulation/fit-list, calibration/sampling uncertainty, issue-return-stock and count closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; bracket_sheet; weld_wire; shield_argon; frame_power; steel_scrap; particle_air; coating_powder; coat_water; coat_power; powder_residue; powder_particle_air; rear_wheel; front_caster; wheel_lock; seat_sling; back_sling; footrest; armrest; grip; steel_screw; pivot_pin; assembly_power; test_power; film | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

q_item is actual attributed exchange after measured issue/return/stock/reclaim and rework divided by matched same-configuration accepted count; M independently measured for the same complete installed state. Preserve kg or MJ numerator (electricity MJ/kg). Screw/module q_item is actually supplied installed kg, with counts supplementary for traceability. Other count/area/volume conversions require original same-part mass/geometry/state and uncertainty; no catalogue chair weight, rated user load, design density or hypothetical25% parts share.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | Weigh the complete accepted same-configuration chair on a calibrated platform supporting all wheels, with controlled tare and no operator, support handle/fixture or added test load. Retain serial/configuration, original readings, instrument/calibration, date, repeats and uncertainty. Independent installed frame, cross-brace, wheel/caster, seating/support/lock/fastener/accessory masses reconcile M; missing physical originals prevent dataset use. | original complete weighing and independent component records |
| quality_complete | finished_machine | Declare exact installed arm/footrest/seat/back/wheel and accessory configuration, including installed cushion/belt/anti-tip devices when supplied as part of the reference. Reassemble detached delivery supports before weighing; detached spares/cushions and packaging outside M. Retained bearing grease contained once. Catalogue folded/unfolded dimensions, brochure41lb or transport shipping weight cannot replace current complete M. | actual released installed fit-list and signed weighing state |
| quality_identity | all flows | One exact stock grade/formulation/part/medium per exchange. A frame-only or brake identity cannot represent complete wheelchair, even if Mass/kg agrees. Adopted purchased wheelchair brake is qualified to actual mechanical parking lock, not dynamic brake. Supplied powder is one identified dry formulation, not a coating service; powder-waste Aluminium-content property not total waste Mass. Actual public property retained; conversions need original evidence. | direct public identity/property and actual supplier drawings/SDS |
| quality_architecture | frame; assembly | Trace actual welded steel tube/joint procedure and folding cross-brace/pivots to released drawings. Verify folding retention, axle/caster/handrim compatibility and clearances, seat/back attachment, footrest/arm locking and parking-lock alignment. Material name, cross-brace count or a standard citation alone does not prove strength or clinical fit. RESNA2004 brazed prototype is counterevidence to treating all steel chairs as one weld recipe. | intco-components; resna-india-2004; actual released drawings |
| quality_acceptance | acceptance | Retain current applicable model/configuration conformity and factory inspection/test plans/results for joint/frame alignment, fold/pivot/retention, wheel/caster rotation/tracking, parking-lock holding/function, seating/arm/footrest attachment and finish. Type/sample/destructive tests need actual tested configuration, method/edition/laboratory/result, sampled count/period, support demand and reject attribution. No ISO threshold/cycle number/patient load or universal lifetime copied from source; actual contractual requirements independently evidenced. | intco-components; actual released inspection/test plans |
| quality_release | elementary | Only actual evidenced post-control particulate release, immediate air/unspecified size with concentration/exhaust/time or directly measured mass. Captured powder/dust goes to waste, not air. Expand actual size-resolved particles or chemical species with distinct compatible identities if found; powder coating does not justify assumed solvent VOC, and upstream electricity emissions are not direct factory emissions. | original post-control sampling and measured waste balances |
| quality_coverage | dataset | Reconcile every installed drawing/fit-list item with supplier/stock/meter totals. Add actual different rear wheels/casters, bearings/axles/handrims, grips, arm pads, heel loops, cross-brace bushings, pins/bolts/nuts/washers, labels, optional anti-tip/belt/cushion and actual coating cleaners/wastewater/carton whenever not contained. Each physical/chemical exchange one card/protocol and quantity basis; no generic wheelchair-parts pool. Identify measured/calculated/estimated/missing/excluded/not-applicable status and uncertainty; disclose upstream stock/module/support/transport/treatment gaps. | complete actual fit-list, independently closed stocks/meters |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Exactly1kg complete accepted declared manual chair; reference name equals finished_machine name. Blank product UUID permitted only with precise candidate identity gap. cp_mass actual M and independent complete configuration/installed mass reconciliation required; formula pass does not approve physical data or methodology. |  |
| validation_basis | inventory | Every row links supported lowercase IDs/protocols and normalize_mass. Verify same-configuration actual accepted count, period and numerator unit; reject mixed configurations, invalid enums, Mass/Energy/content/count substitution and catalogue conversions. |  |
| validation_scope | dataset | Require actual manual handrim/solid-tyre folding welded-steel architecture, declared make-or-buy local fabrication, mechanical acceptance and identity/upstream gaps. Clinical fit, mobility outcomes and cradle-to-gate completeness cannot be inferred from this foreground. |  |
| validation_release | elementary | Verify actual immediate-air particle state/medium and conditional quantity. Purchased tap water product, outgoing wastewater/waste dust treatment, resource abstraction and direct emission remain separate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacture of a new complete adult manual wheelchair with folding cross-brace welded steel-tube frame, powder-coated finish where applied, handrim rear wheels with solid polyurethane tyres, front casters and separately supplied seat/back slings, arm supports, swing-away footrests and mechanical parking wheel locks. Actual released tube cutting/bending/jigging/joining, conditional cleaning/powder/electric cure, component mounting/adjustment and configured factory acceptance form the foreground. Actual stock grade, joints, supplier module contents and complete installed accessories define this route, not a universal chair design or material recipe. |
| excluded_use | Exclude powered or power-assisted chairs/batteries/motors, attendant-only small-wheel transport chairs without handrims, rigid/sports/carbon/titanium/aluminium-frame chairs, pneumatic-tyre routes, reclining/standing or complex custom seating systems, repair/refurbishment and complete-frame assembly-only manufacture. Brazed-only frame route is outside this welded-frame boundary. Exclude clinical assessment/prescription/fitting, personal mobility service, occupied distance, user/attendant energy, use-phase maintenance and end of life. Bounded factory adjustment/inspection/type or sample tests belong to manufacturing when attributable; this foreground is not a complete cradle-to-gate or clinical-outcome/lifetime service model. |
| required_metadata | model/released drawing revision/serial; adult manual handrim/folding cross-brace architecture; seat width/depth/back and arm/footrest actual variant; frame tube/sheet grade/geometry/joint and finish; wheel/solid tyre/handrim/caster/fork/axle/lock/bearing specification and supplier contents; upholstery actual fabric/coating/seam/attachment; installed supports and accessories/cushion/anti-tip/belt inclusion; site/period/accepted count/rework and inspection/type/sample test basis; current applicable contract and configuration-specific conformity/acceptance; original complete calibrated weighing/tare/net state and independent installed component mass; net M kg excludes user/test masses/packaging/detached parts, differs from catalogue weight/load rating; upstream stock/component/utility/transport/treatment gaps |
| required_quality_disclosure | Exact chair drawing/installed configuration and supplied-package state; actual complete M/calibration/tare/independent component mass/uncertainty; actual stock/meter/test periods and accepted/rejected counts; type/sample/inspection attribution and causal shared allocation sensitivity; missing physical records/identities and upstream/support/treatment scope; scientific review pending. |
| update_trigger | Frame grade/joint/folding mechanism/finish, wheel/caster/lock or seating/support configuration, supplier/make-or-buy/site/period, test scope, weighing/delivery state and new identities/evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| drive-silversport | handbook | Drive Medical, SilverSport2 SSP218FA-SF official product page, undated, About This Item steel frame/vinyl/solid polyurethane-composite wheels/supports/wheel locks and configuration options; unpaginated. https://shop.drivemedical.com/us/en/products/mobility/wheelchairs/standard-wheelchairs/silver-sport-2-wheelchair/p/SSP218FA-SF | Specific finished configuration illustration only; no current clinical conformity, compulsory model/recipe,41lb net M, rated load, warranty life or factory quantity adopted. Actual supplier composition/complete installed weighing and released drawings govern. |
| intco-components | handbook | INTCO, Manual Wheelchair Anatomy and Components, site date3September2026; Frame and cross-brace / Wheels, casters... / Seating, backrest... / Brakes, locks...; unpaginated. https://www.intcowheelchair.com/news/manual-wheelchair-structure-and-components | Component interfaces, exact configuration/fit-list, join/fold/retention/lock and supplier inspection/control context. Does not prove specific compliance or clinical suitability. Listed ISO numbers not adopted as numeric rules/current legal requirements; actual applicable contract/test originals required. |
| resna-india-2004 | literature | RESNA2004 original proceedings, Design and development of a manual wheelchair for India, DESIGN and DEVELOPMENT, unpaginated HTML. https://www.resna.org/sites/default/files/legacy/conference/proceedings/2004/Papers/StudentScientific/Winners/Wheelchair.html | Historical folding steel-tube/flat-stock manufacturing and component-quality illustration only; separates welded description from brazed prototype. No1020grade,2mmthickness, prototype mass, fatigue cycles, life, universal joint process or present standard compliance inferred. |
