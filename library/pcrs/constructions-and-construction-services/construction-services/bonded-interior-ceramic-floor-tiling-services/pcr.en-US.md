---
pcr_id: pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bonded interior ceramic floor tiling services

## 1. Scope and Applicability

This category measures an installation service on a previously accepted, stable, dry, clean and suitably flat interior substrate. Work covers layout, cutting ceramic floor tile, water-mixed cementitious thinset, bonding and setting, cementitious grouting, specified movement-joint treatment and final cleanup. Wall, stone, epoxy, thick-bed, exterior and submerged systems are excluded. Substrate manufacture, major levelling or repair, waterproofing membranes, demolition and later building use are separate responsibilities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.bonded-interior-ceramic-floor-tiling-services |
| classification_refs | cpc:3.0:54740; narrower |
| covered_products | Interior ceramic floor tile thinset installation on ready substrate |
| excluded_products | Wall/stone/epoxy tiling; substrate construction; membranes; demolition |
| representative_product | Clean accepted ceramic tiled interior floor |
| production_route | Cut → mix thinset → bond and set → mix grout → grout, treat joints and clean |
| market_state | Completed contractor service at acceptance, before building use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted ceramic tiled interior floor installation |
| How much | 1 m2 |
| How well | Declared installation design, bond/grout quality and acceptance inspection; no universal performance value is invented |
| How long or cycle | One work lot through completed cure/acceptance; no service-life claim |
| reference_flow_link | `accepted_tiled_floor` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted bonded interior ceramic tiled floor service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Interior location; substrate readiness record; tile body/finish/dimensions/thickness; thinset and grout product/grade; applied mortar thickness; joint width/depth; movement-joint design and actual sealant chemistry; acceptance criteria; work-lot dates and net-area method |

Required qualifiers must be declared in the foreground data package. The reference measures area of completed work and does not stand for tile material mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_tiled_floor | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A = accepted net installed floor area of the work lot; measure plan geometry and deduct openings, unfinished and rejected areas using cp_grout_finish. |
| wet_dry_basis | mortar_feed; grout_feed | Mass | kg | Keep dry powder, mixing water, wet paste, wet waste and solids separately; wet paste mass is not dry binder mass. |
| tile_conversion | whole_tiles | Mass | kg | Convert counted tiles only with measured same-product unit mass; do not infer kg from m2 without actual area density and thickness. |
| energy_unit | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | Energy | MJ | Preserve meter units; electricity_MJ = electricity_kWh * 3.6; retain original readings. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted ready existing interior substrate; no major correction or membrane work remains |
| starting_condition_role | Supplied prerequisite outside installation service foreground |
| product_classification_scope | Narrower interior ceramic floor subset of cpc:3.0:54740 |
| recursive_input_rule | Do not recurse from intermediate floor-area handoffs into another full tiling service. External same-category subcontract work needs a separate, non-overlapping location and boundary record. |
| upstream_dataset_requirement | Link purchased tile, formulated thinset/grout, water, electricity and actual consumables to compatible upstream datasets; disclose excluded substrate/membrane burdens. |
| disclosure | Declare the ready-substrate supplier gate, omitted work, internal transfers, joint design, shared-resource ownership and waste custody gates. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This category measures an installation service on a previously accepted, stable, dry, clean and suitably flat interior substrate. Work covers layout, cutting ceramic floor tile, water-mixed cementitious thinset, bonding and setting, cementitious grouting, specified movement-joint treatment and final cleanup. Wall, stone, epoxy, thick-bed, exterior and submerged systems are excluded. Substrate manufacture, major levelling or repair, waterproofing membranes, demolition and later building use are separate responsibilities. |  |
| ready_substrate | foreground_boundary | Require a signed readiness inspection; if major repair, levelling or membrane work is needed, stop this scope and assign a separate dataset. | laticrete-thinsets |
| service_gate | all_processes | Finish at accepted net floor area after specified joint treatment and cleanup. Measure actual water, powder, paste and cut-tile transfers; no assumed hydration yield or reaction emission. | mapei-floor-installation |
| burden_ownership | shared_access_service; shared_tool_service | Own shared asset service once in grout_finish with all consuming nodes and dates; meter operational energy at consuming nodes and remove that energy from the shared service. |  |
| waste_gate | all_processes | Captured slurry, dust and residues leave as custodial waste. Actual elementary releases require reported substance, size where relevant, receiving medium and quantity; a blank observation is not zero. |  |

## 6. Process Inventory Structure

Production is indexed by work lot, room, mixing batch and cleanup event. Cutting supplies prepared tiles; mortar mixing supplies wet paste. Bonding joins both onto the supplied substrate, and hydration changes the adhesive to its set state before the measured ungrouted area is released. Grout mixing supplies a separate paste; finishing fills joints, allows actual cementitious setting, treats required movement joints and cleans before acceptance. No pathway, hydration ratio, strength or generic elapsed time is imposed. Defective work returns to its producing operation with burdens retained; removed material is waste, never accepted output.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| layout_cut | Layout and tile cutting | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| mortar_mix | Thinset formulation and mixing | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| bond_cure | Tile bonding and adhesive setting | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| grout_mix | Grout formulation and mixing | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |
| grout_finish | Grouting, joint treatment, cleanup and acceptance | required | Actual work-lot operations; conditional exchanges are declared individually | One owned stage and measured handoff | 1 m2 accepted_tiled_floor via A |

### Process: Layout and tile cutting (`layout_cut`)

#### Inputs

##### Product flows

###### Manufactured ceramic floor tiles (`whole_tiles`)

Record declared ceramic body, finish, dimensions and gross mass crossing layout_cut material custody, including later usable returns; record actual cutting issue separately and retain every rework replacement.

- Selected flow: Manufactured ceramic floor tiles
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied water for cutting and cleanup (`cut_water`)

Conditional on wet cutting or water cleaning; record fresh additions separately from circulating water.

- Selected flow: Supplied water for cutting and cleanup
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Supplied electricity for cutting and extraction (`cut_electricity`)

Meter tools and extraction; include an attributed share of lighting only when this node consumes it.

- Selected flow: Supplied electricity for cutting and extraction
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Measured cut and whole tiles ready for bonding (`prepared_tiles`)

Internal transfer to bond_cure uses transfer id and measured mass; it is not the final reference.

- Selected flow: Measured cut and whole tiles ready for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Unused ceramic tiles transferred outside the job (`tile_return`)

Only external usable returns; closing stock is separate and never recorded again as a return.

- Selected flow: Unused ceramic tiles transferred outside the job
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


##### Waste flows

###### Ceramic tile offcuts and broken tiles to waste custodian (`tile_offcuts`)

Weigh dry pieces separately from water-bearing cutting slurry; retained reusable pieces remain stock.

- Selected flow: Ceramic tile offcuts and broken tiles to waste custodian
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Captured cutting slurry and contaminated cleanup water (`cut_slurry`)

Record wet mass, solids evidence and destination; this is custodial waste, not an elementary discharge.

- Selected flow: Captured cutting slurry and contaminated cleanup water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Discarded tile cardboard packaging (`tile_packaging_cardboard`)

One independently identified discarded tile cardboard packaging. This is a conditional independent object supported within the original tile_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each cardboard, plastic or pallet exchange from records; avoid a generic packaging UUID. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded tile cardboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_tile_packaging_cardboard_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded tile plastic packaging (`tile_packaging_plastic`)

One independently identified discarded tile plastic packaging. This is a conditional independent object supported within the original tile_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each cardboard, plastic or pallet exchange from records; avoid a generic packaging UUID. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded tile plastic packaging
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_tile_packaging_plastic_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded tile pallet (`tile_packaging_pallet`)

One independently identified discarded tile pallet. This is a conditional independent object supported within the original tile_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Resolve each cardboard, plastic or pallet exchange from records; avoid a generic packaging UUID. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded tile pallet
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_tile_packaging_pallet_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_layout_cut`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


### Process: Thinset formulation and mixing (`mortar_mix`)

#### Inputs

##### Product flows

###### Cementitious thinset dry mix (`mortar_powder`)

Collect product grade, formulation, dry mass and actual supplier instructions; do not substitute pure cement.

- Selected flow: Cementitious thinset dry mix
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied mixing and equipment wash water (`mortar_water`)

Separate mixing water, fresh wash water and recirculation by batch.

- Selected flow: Supplied mixing and equipment wash water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.



###### Supplied electricity for mixing (`mortar_electricity`)

Meter the mixer for the batch, including attributed cleaning events.

- Selected flow: Supplied electricity for mixing
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cementitious thinset paste (`fresh_mortar`)

Weigh usable wet paste at handoff with transfer and batch ids; exclude off-spec paste and retained stock.

- Selected flow: Fresh cementitious thinset paste
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


##### Waste flows

###### Off-spec and residual thinset mixture (`mortar_mix_residue`)

Keep wet/dry basis, setting state and actual destination; separate from equipment wash effluent.

- Selected flow: Off-spec and residual thinset mixture
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Collected mixer wash effluent (`mortar_wash_effluent`)

Record wet mass and composition where known; no unmeasured drain or air release is inferred.

- Selected flow: Collected mixer wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Discarded product bag (`mortar_packaging_bag`)

One actual discarded product bag. This is a conditional independent object supported within the original mortar_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product bag
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mortar_packaging_bag_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded product container (`mortar_packaging_container`)

One actual discarded product container. This is a conditional independent object supported within the original mortar_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product container
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mortar_packaging_container_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded product pallet (`mortar_packaging_pallet`)

One actual discarded product pallet. This is a conditional independent object supported within the original mortar_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product pallet
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_mortar_packaging_pallet_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mortar_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


### Process: Tile bonding and adhesive setting (`bond_cure`)

#### Inputs

##### Product flows

###### Measured tiles received for bonding (`tiles_feed`)

Pair prepared_tiles transfer id and quantity; count upstream tile burdens once.

- Selected flow: Measured tiles received for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 5
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Measured fresh thinset received for bonding (`mortar_feed`)

Pair fresh_mortar transfer with the measured wet paste mass; never force this feed to 1.

- Selected flow: Measured fresh thinset received for bonding
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Consumed tile spacer (`bond_consumables_spacer`)

One independently identified consumed tile spacer. This is a conditional independent object supported within the original bond_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record spacers, levelling aids and protective consumables; distinguish reusable assets from consumed materials. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Consumed tile spacer
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_bond_consumables_spacer_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed tile levelling aid (`bond_consumables_levelling`)

One independently identified consumed tile levelling aid. This is a conditional independent object supported within the original bond_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record spacers, levelling aids and protective consumables; distinguish reusable assets from consumed materials. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Consumed tile levelling aid
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_bond_consumables_levelling_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Consumed tile protective product (`bond_consumables_protection`)

One independently identified consumed tile protective product. This is a conditional independent object supported within the original bond_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record spacers, levelling aids and protective consumables; distinguish reusable assets from consumed materials. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Consumed tile protective product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_bond_consumables_protection_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Supplied electricity during bonding and setting (`bond_electricity`)

Conditional tool, lighting and ventilation use; elapsed setting time alone does not imply energy.

- Selected flow: Supplied electricity during bonding and setting
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Measured bonded and set floor awaiting grout (`ungrouted_floor`)

Record area released to finishing after adhesive setting under the actual product instructions; internal area is measured.

- Selected flow: Measured bonded and set floor awaiting grout
- Flow property / unit: Area / m2
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The internal-area screen allows measured work-in-progress and rework relative to accepted area; it never fixes the transfer quantity.


##### Waste flows

###### Removed rejected bonded tile-adhesive assembly (`bond_reject_assembly`)

One independently identified removed rejected bonded tile-adhesive assembly. This is a conditional independent object supported within the original bond_reject scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Link each defect to its producing batch and rework route; embedded tile/adhesive rejects are not accepted area. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Removed rejected bonded tile-adhesive assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_bond_reject_assembly_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bond_cure`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


### Process: Grout formulation and mixing (`grout_mix`)

#### Inputs

##### Product flows

###### Cementitious grout dry mix (`grout_powder`)

Collect product grade, formulation, dry mass and actual supplier instructions; do not substitute pure cement.

- Selected flow: Cementitious grout dry mix
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied mixing and equipment wash water (`grout_water`)

Separate mixing water, fresh wash water and recirculation by batch.

- Selected flow: Supplied mixing and equipment wash water
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.



###### Supplied electricity for mixing (`grout_electricity`)

Meter the mixer for the batch, including attributed cleaning events.

- Selected flow: Supplied electricity for mixing
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 50
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh cementitious grout paste (`fresh_grout`)

Weigh usable wet paste at handoff with transfer and batch ids; exclude off-spec paste and retained stock.

- Selected flow: Fresh cementitious grout paste
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


##### Waste flows

###### Off-spec and residual grout mixture (`grout_mix_residue`)

Keep wet/dry basis, setting state and actual destination; separate from equipment wash effluent.

- Selected flow: Off-spec and residual grout mixture
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 40
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Collected mixer wash effluent (`grout_wash_effluent`)

Record wet mass and composition where known; no unmeasured drain or air release is inferred.

- Selected flow: Collected mixer wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.


###### Discarded product bag (`grout_packaging_bag`)

One actual discarded product bag. This is a conditional independent object supported within the original grout_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product bag
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_grout_packaging_bag_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded product container (`grout_packaging_container`)

One actual discarded product container. This is a conditional independent object supported within the original grout_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product container
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_grout_packaging_container_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Discarded product pallet (`grout_packaging_pallet`)

One actual discarded product pallet. This is a conditional independent object supported within the original grout_packaging scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Discarded product pallet
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_grout_packaging_pallet_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_mix`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


##### Elementary flows


### Process: Grouting, joint treatment, cleanup and acceptance (`grout_finish`)

#### Inputs

##### Product flows

###### Measured set ungrouted floor received for finishing (`floor_feed`)

Pair ungrouted_floor by location and transfer id; there is no second upstream construction input.

- Selected flow: Measured set ungrouted floor received for finishing
- Flow property / unit: Area / m2
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 3
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The internal-area screen allows measured work-in-progress and rework relative to accepted area; it never fixes the transfer quantity.


###### Measured fresh cementitious grout received (`grout_feed`)

Pair fresh_grout batch and wet mass; actual joint geometry governs consumption.

- Selected flow: Measured fresh cementitious grout received
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0.01
  - Upper: 60
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.


###### Supplied water for finishing and cleanup (`finish_water`)

Record fresh water by cleanup event and distinguish captured wastewater from recirculation.

- Selected flow: Supplied water for finishing and cleanup
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
Water screening spans dry operations through wet cutting/mixing and cleanup; recirculation and actual recipe remain measured separately.


###### Movement-joint sealant formulation (`movement_joint_materials_sealant`)

One independently identified movement-joint sealant formulation. This is a conditional independent object supported within the original movement_joint_materials scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Apply when required by the actual joint design; record sealant chemistry, backing, length, cross-section and cure requirement. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Movement-joint sealant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_movement_joint_materials_sealant_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Movement-joint backing product (`movement_joint_materials_backing`)

One independently identified movement-joint backing product. This is a conditional independent object supported within the original movement_joint_materials scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Apply when required by the actual joint design; record sealant chemistry, backing, length, cross-section and cure requirement. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Movement-joint backing product
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_movement_joint_materials_backing_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Tile-finishing cleaner formulation (`finish_consumables_cleaner`)

One independently identified tile-finishing cleaner formulation. This is a conditional independent object supported within the original finish_consumables scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Record cleaning products only when used, with formulation and safety information; split reusable equipment. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value.

- Selected flow: Tile-finishing cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_consumables_cleaner_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Single identified work-access facility availability (`shared_access_service`)

Conditional on evidenced actual provision. One specified work-access facility and its access function, capacity and acceptance state; exclude personal travel and the installation service itself. Owned once at grout_finish for the complete job across all five actual consuming nodes; never repeat the job share at each node. This card selects one actual identity/provider/contract/boundary, not a sum of all services of this kind. Separate additional independent identities into distinct concrete rows before finalization; compatible repeated records of the same identity may be summed only over exclusive source periods. Keep native bill unit and documented hour conversion; h is usable only for this fixed-capacity service and compatible upstream per-hour basis. No duration is inferred from mere asset presence.

- Selected flow: Single identified work-access facility availability
- Flow property / unit: Duration / h
- Amount rule: H_shared_access_service / A; H_shared_access_service is the independently attributed unnormalized availability in h for this one actual service identity and job/node, including attributable paid idle. Divide once by the same accepted A; A=0 blocks normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shared_access_service`

Range evidence need: independent actual identity-specific quantities, conversion, uncertainty and comparable reviewed observations; no parent interval or default hours inherited.

###### Single identified tool or equipment availability (`shared_tool_service`)

Conditional on evidenced actual provision. One specified tool or equipment asset providing one declared function, with model/capacity and supplied state; do not combine independently supplied tools or functions. Owned once at grout_finish for the complete job across all five actual consuming nodes; never repeat the job share at each node. This card selects one actual identity/provider/contract/boundary, not a sum of all services of this kind. Separate additional independent identities into distinct concrete rows before finalization; compatible repeated records of the same identity may be summed only over exclusive source periods. Keep native bill unit and documented hour conversion; h is usable only for this fixed-capacity service and compatible upstream per-hour basis. No duration is inferred from mere asset presence.

- Selected flow: Single identified tool or equipment availability
- Flow property / unit: Duration / h
- Amount rule: H_shared_tool_service / A; H_shared_tool_service is the independently attributed unnormalized availability in h for this one actual service identity and job/node, including attributable paid idle. Divide once by the same accepted A; A=0 blocks normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_shared_tool_service`

Range evidence need: independent actual identity-specific quantities, conversion, uncertainty and comparable reviewed observations; no parent interval or default hours inherited.

###### Supplied electricity for finishing and cleanup (`finish_electricity`)

Meter or attribute actual tools, cleanup and lighting without duplicating energy already included in shared_access_service or shared_tool_service.

- Selected flow: Supplied electricity for finishing and cleanup
- Flow property / unit: Energy / MJ
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 100
  - Unit: MJ
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide energy screen allows electric/manual tool choice, extraction, lighting and shared-event attribution; it is not a supplier or equipment specification.


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted bonded interior ceramic tiled floor service (`accepted_tiled_floor`)

The accepted net floor area includes completed joints, specified sealant where applicable and cleanup; exclude rejected and unfinished areas.

- Selected flow: Accepted bonded interior ceramic tiled floor service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Normalization identity only; not yield evidence
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `calculated_from_collection`

##### Waste flows

###### Cured grout residue (`finish_residue_cured`)

One independently identified cured grout residue. This is a conditional independent object supported within the original finish_residue scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate cured residue, unused paste and removed assemblies; link internal rework without crediting avoided materials. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Cured grout residue
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_residue_cured_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Unused grout paste waste (`finish_residue_paste`)

One independently identified unused grout paste waste. This is a conditional independent object supported within the original finish_residue scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate cured residue, unused paste and removed assemblies; link internal rework without crediting avoided materials. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Unused grout paste waste
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_residue_paste_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.

###### Removed rejected finished tile assembly (`finish_residue_assembly`)

One independently identified removed rejected finished tile assembly. This is a conditional independent object supported within the original finish_residue scope; activate only when actually independently supplied, used or dispatched. Keep actual SKU, material/formulation, specification, state and provider or receiver. Preserve complete supplied products, formulations, assemblies, bounded services and actual mixed-waste carriers as whole views; do not add their already included constituents. Usable outward exits match the original input property/unit and require actual custody transfer; closing stock is not an exit and usable original-state items are not waste. Waste retains its producing node, actual contamination/state, receiver and treatment boundary and is not an environmental emission. The same physical cable or SKU serving several duties is counted once, with duty observations nonadditive. Evidence is required for nonoccurrence; this card assumes no occurrence, composition, count or loss factor.

Original role-specific boundary and operating constraints apply only to this independent child; the former family/screen text is neither another exchange nor an inherited Range: Separate cured residue, unused paste and removed assemblies; link internal rework without crediting avoided materials. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.

- Selected flow: Removed rejected finished tile assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently collect actual_finish_residue_assembly_quantity in kg. Net weigh this actual object/dispatch, or convert actual count/length with independently evidenced same-SKU/state item or linear mass only when needed; one exchange quantity remains. Apply the original CP opening/receipts/intact-unused closing, installed/consumed, usable exits, waste, processed WIP, real correction and period method without changing its gross/fate convention. Normalize once by the original independently accepted reference denominator A; A=0 blocks accepted-service normalization. Never copy a family total, assumed proportion or parent Range; require independent child measurement, conversion and uncertainty evidence. Original quantity convention with original CP operands: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`

Range evidence need: independent actual child quantities, identity/state, conversions, uncertainty and comparable independent observations; no family interval or default coefficient is inherited.


###### Collected finishing wash effluent (`finish_effluent`)

Record wet mass, solids and destination with custody evidence; direct discharge requires its own concrete elementary exchange.

- Selected flow: Collected finishing wash effluent
- Flow property / unit: Mass / kg
- Amount rule: q_lot / A
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_grout_finish`
- Range: Provisional broad screening estimate; replace with reviewed records
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`
The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate.



##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | all_processes | First subdivide by room, lot, batch and measured event. For shared meters allocate by logged operating time and power or actual submeter evidence, documenting residual uncertainty; sum shares to the measured total. |  |
| single_owner | shared_access_service; shared_tool_service | Keep one event owner for common access/equipment service; record all five consumers and period. Exclude metered energy and duplicated contractor invoices from this service. |  |
| rework | all_processes | Charge rework inputs, cleanup and rejected material to the same accepted work lot. Link replacement operations and exits by defect id. Do not count an intermediate area or a failed area as final output. |  |
| stock | whole_tiles | Gross tile issue = opening stock + receipts - closing stock; use gross issue as whole_tiles input and record external usable returns once as tile_return output. Net consumption = gross issue - external returns is a separate upstream burden attribution quantity, not another physical exchange or negative credit. Only original upstream burdens of the actual unused returned material may follow the return; installation and rework burdens stay with the accepted service, with no automatic avoided-production credit. Closing stock and external returns are mutually exclusive; waste is already inside consumption and is never deducted again. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol owns one node. Use transfer ids to pair sending and receiving records, separate fresh water from recirculation and identify cleanup/changeover ownership. Record all materials as dry/wet state and product/lot. Actual supplier instructions govern water dose, trowel selection, cure and cleaning conditions. Do not borrow numeric defaults from a different product. Provisional ranges are deliberately broad prompts for checking missing records; they are neither observed facts nor defaults, conformity limits or evidence of zero when inactive. Investigate an outlier and retain its evidence rather than clipping it.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_layout_cut | layout_cut | whole_tiles; cut_water; cut_electricity; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging; cut_air_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; opening_stock; receipts; closing_stock; external_return; stock_event_id; actual_processing_draw; cut_layout; cutting_method; reuse_piece_id; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Count or weigh actual tiles issued to cutting separately from purchasing receipts and mutually exclusive closing stock/returns; preserve layout and reusable-piece records. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_mortar_mix | mortar_mix | mortar_powder; mortar_water; mortar_additives; mortar_electricity; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging; mortar_mix_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Record actual powder_issued, mixing_water and additive_issued with batch grade/recipe, opening/closing wetstock and paste handoff mass. Keep the mixing pool and wash-water pool separately, measure slurry solids/moisture and actual material carried into washing; retain crystallization-water basis and unknown fate as a balance gap rather than an assumed emission. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_bond_cure | bond_cure | tiles_feed; mortar_feed; bond_consumables; bond_electricity; ungrouted_floor; bond_reject; bond_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; substrate_acceptance_record; mortar_batch_id; trowel_geometry; bed_thickness; tile_back_coverage; set_condition; cure_start; cure_end; cure_temperature; cure_humidity; supplier_gate_instruction; set_acceptance_record; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Measure its own set-floor transfer geometry and record actual substrate release, mortar batch, bed/trowel evidence, cure start/end and conditions, supplier gate instructions and signed set acceptance before handoff. Link A to final acceptance; do not remeasure final A here. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; MJ; m2 | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_grout_mix | grout_mix | grout_powder; grout_water; grout_additives; grout_electricity; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging; grout_mix_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; powder_issued; mixing_water; additive_issued; opening_wetstock; closing_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; unexplained_balance; wash_addition; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; wetstock_moisture; residue_solids; wash_solids; crystallization_water_basis; mix_recipe_version; water_grade; batch_grade; formulation_record; batch_times; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Record actual powder_issued, mixing_water and additive_issued with batch grade/recipe, opening/closing wetstock and paste handoff mass. Keep the mixing pool and wash-water pool separately, measure slurry solids/moisture and actual material carried into washing; retain crystallization-water basis and unknown fate as a balance gap rather than an assumed emission. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | kg; MJ | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| cp_grout_finish | grout_finish | floor_feed; grout_feed; finish_water; movement_joint_materials; finish_consumables; shared_access_service; shared_tool_service; finish_electricity; accepted_tiled_floor; finish_residue; finish_effluent; finish_packaging; finish_release | Work-lot measurement and custody ledger | row_id; measurement_id; gross; tare; count; unit_mass; volume; density; measurement_route; unit; unit_conversion; lot_id; room_id; batch_id; event_id; record_event_uid; defect_id; rework_iteration; transfer_id; product_grade; composition; moisture_basis; meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers; run_time; cleanup_owner; waste_destination; concentration; exhaust_volume; species; particle_size; receiving_medium; accepted_area_record_id; A; length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; accepted_area; deduction_region_ids; joint_width; joint_depth; joint_length; sealant_chemistry; cure_record; acceptance_date; service_start; service_end; shared_asset; shared_period; allocation_driver; actual_child_id; atomic_flow_row_id; parent_ledger_id; actual_object_sku_or_bounded_service; actual_state_gate; actual_receiving_medium_or_custodian; exchange_property; exchange_unit; independent_physical_quantity; same_identity_conversion_evidence; actual_activation_or_absence_evidence; source_stock_event_id; actual_owner_id; actual_period_id; package_inclusion_exclusion; one_burden_owner_evidence; child_reconciliation_status; child_range_evidence; legacy_parent_role; source_component_role; source_component_row_id; paired_atomic_row_id; actual_transfer_event_id; child_quantity_operands; own_node_helper_id; quantity_ledger_group_key; source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status | Use row_id to identify each actual exchange in the event table. Weigh gross/tare or use count and measured same-product unit_mass; for water use measured mass or volume and measured density; Retain meter_start/end, meter_unit, all shared_consumers and driver_node/drivers_total; For each actual release record species, size, receiving_medium, concentration, exhaust_volume and unit_conversion, or direct measured mass. Select one documented measurement_route per event; record calibration and wet/dry state. Pair transfers and record inactive exchanges explicitly; obtain A from signed grout_finish acceptance for the same lot. Survey gross plan parts and deduct each mutually exclusive opening/incomplete/failed region once; inspect grout, movement-joint treatment and cleanup. Retain service_start/end in hours; link shared-service invoices and all actual consumers once. Retain the original PCR stock, event, denominator, attribution and closure methods above. Maintain an actual-child register by node, period and parent_ledger_id. Each quantity-bearing exchange has one independent physical product, complete formulation/assembly, defined bounded service, actual waste carrier or substance/medium, one fixed property/unit and its independently collected numerator. Retain all original roles, corrections and stock/WIP/fate records. Former family quantities remain non-exchange custody or closure diagnostics only; never copy/divide a family total or Range into children or sum unlike units as an exchange. Each actual SKU/state/provider/receiver is separate when it represents an independent exchange. A supplied complete package and its already included constituents are exclusive views; identical physical cables serving multiple duties are counted once. Missing actual child roster, quantity, activation/absence, identity/state/medium, method or unit support blocks final foreground completion; it is never zero or implicitly not applicable. Foreground records provide the operands; they cannot choose another reference denominator, allocation, stock or fate convention. actual_<row_id>_quantity aliases this record independent physical quantity keyed by atomic_flow_row_id under the original CP method and atomic_child_normalization, never another parent quantity. Actual child records retain legacy_parent_role and own_node_helper_id; independently collect every original role helper operand in child_quantity_operands, grouped by quantity_ledger_group_key material/source-state/current-state/period/unit. Real internal source and recipient match by paired_atomic_row_id and actual_transfer_event_id, never derived from a parent total or unexplained residual. Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. Service-source records are nonexchange reconciliation records; each actual service function/identity now uses its dedicated child protocol (cp_shared_access_service; cp_shared_tool_service). Evaluate service totals per actual identity/provider/contract/capacity/source period, never as a multifunction sum. Existing electricity attribution and meter topology above remain unchanged. Preserve all original source/revision records and use the current child helper outputs as H for the corresponding identity only. | kg; MJ; m2; h | Every batch, transfer and cleanup; acceptance once per lot | Full work lot including rejected work and rework | One declared interior job site | per reference flow | Calibrations; signed area sheet; supplier instructions; stock/transfer reconciliation; invoices; waste receipts; emission measurements where applicable |
| `cp_shared_access_service` | `grout_finish` | `shared_access_service` | Identity-specific service-source ledger | job_id; lot_id; node_id; actual_service_identity; service_function; actual_asset_id; asset_model_capacity; service_state; actual_space_capacity; provider_id; contract_id; service_component_boundary; source_id; source_period; contract_start; contract_end; bill_start; bill_end; shared_consumers; service_start; service_end; bill_unit; bill_quantity; documented_hours_per_bill_unit; conversion_evidence; charged_hours; paid_idle_hours; all_consumer_ids; consumer_node; consumer_job; driver_node; drivers_total; positive_weight_node; all_consumer_weight_sum; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope; already_included_energy; source_reconciliation; source_record_id; exclusive_period_key; actual_occurrence_or_absence_evidence; measurement_record_id; measurement_revision_id; predecessor_measurement_revision_id; correction_reason; correction_author; correction_timestamp; original_reading_value_unit; corrected_reading_value_unit; downstream_recalculation_links; A; H_shared_access_service | Record only the actual access function selected by shared_access_service: One specified work-access facility and its access function, capacity and acceptance state; exclude personal travel and the installation service itself. Require identity/provider/asset or space/capacity/state, contract, source period, occurrence evidence and original native quantity. Apply event_service independently to this identity and source period to obtain H_shared_access_service, retaining all job/node consumers, paid idle, direct/shared ownership, conversions and source reconciliation. Owned once at grout_finish for the complete job across all five actual consuming nodes; never repeat the job share at each node. Never reuse a parent total or a different child H. Preserve original contract/invoice and immutable measurement revisions with predecessor, correction reason/author/time, original/corrected values/units, source and downstream recalculation links; physical rework does not replace this chain. Record every actual rework/waiting/reserved period under its real owner once. Investigate overlap against electricity, asset capital, maintenance, setup/delivery/removal and provider-included components before adding separate burdens. Retain unnormalized hours until the card divides once by positive A. Actual source unit without a same-service hour bridge or compatible upstream Duration/h support blocks this h exchange, requiring a separately reviewed correct-unit card; never change this card to multiple property/unit pairs. Unknown provision or missing quantity is a gap, not zero; evidenced absence alone closes a nonoccurring branch. | h | Each actual source/contract period and measurement revision | Complete job including waiting, failed work, rework and actual cutoff | Actual node/job and all source-period co-consumers | per reference flow | Actual identity/specification; contract/bill; conversion; consumer weights; overlap and source reconciliation; correction chain |
| `cp_shared_tool_service` | `grout_finish` | `shared_tool_service` | Identity-specific service-source ledger | job_id; lot_id; node_id; actual_service_identity; service_function; actual_asset_id; asset_model_capacity; service_state; actual_space_capacity; provider_id; contract_id; service_component_boundary; source_id; source_period; contract_start; contract_end; bill_start; bill_end; shared_consumers; service_start; service_end; bill_unit; bill_quantity; documented_hours_per_bill_unit; conversion_evidence; charged_hours; paid_idle_hours; all_consumer_ids; consumer_node; consumer_job; driver_node; drivers_total; positive_weight_node; all_consumer_weight_sum; direct_service_h; total_service_h; all_direct_service_h; eligible_residual_service_h; eligible_weight; all_eligible_weights; weight_evidence; included_provider_scope; already_included_energy; source_reconciliation; source_record_id; exclusive_period_key; actual_occurrence_or_absence_evidence; measurement_record_id; measurement_revision_id; predecessor_measurement_revision_id; correction_reason; correction_author; correction_timestamp; original_reading_value_unit; corrected_reading_value_unit; downstream_recalculation_links; A; H_shared_tool_service | Record only the actual tool function selected by shared_tool_service: One specified tool or equipment asset providing one declared function, with model/capacity and supplied state; do not combine independently supplied tools or functions. Require identity/provider/asset or space/capacity/state, contract, source period, occurrence evidence and original native quantity. Apply event_service independently to this identity and source period to obtain H_shared_tool_service, retaining all job/node consumers, paid idle, direct/shared ownership, conversions and source reconciliation. Owned once at grout_finish for the complete job across all five actual consuming nodes; never repeat the job share at each node. Never reuse a parent total or a different child H. Preserve original contract/invoice and immutable measurement revisions with predecessor, correction reason/author/time, original/corrected values/units, source and downstream recalculation links; physical rework does not replace this chain. Record every actual rework/waiting/reserved period under its real owner once. Investigate overlap against electricity, asset capital, maintenance, setup/delivery/removal and provider-included components before adding separate burdens. Retain unnormalized hours until the card divides once by positive A. Actual source unit without a same-service hour bridge or compatible upstream Duration/h support blocks this h exchange, requiring a separately reviewed correct-unit card; never change this card to multiple property/unit pairs. Unknown provision or missing quantity is a gap, not zero; evidenced absence alone closes a nonoccurring branch. | h | Each actual source/contract period and measurement revision | Complete job including waiting, failed work, rework and actual cutoff | Actual node/job and all source-period co-consumers | per reference flow | Actual identity/specification; contract/bill; conversion; consumer weights; overlap and source reconciliation; correction chain |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_mass | whole_tiles; cut_water; prepared_tiles; tile_return; tile_offcuts; cut_slurry; tile_packaging_cardboard; tile_packaging_plastic; tile_packaging_pallet; atomic_tile_packaging; mortar_powder; mortar_water; atomic_mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; mortar_packaging_bag; mortar_packaging_container; mortar_packaging_pallet; atomic_mortar_packaging; grout_powder; grout_water; atomic_grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; grout_packaging_bag; grout_packaging_container; grout_packaging_pallet; atomic_grout_packaging; tiles_feed; mortar_feed; bond_consumables_spacer; bond_consumables_levelling; bond_consumables_protection; atomic_bond_consumables; bond_reject_assembly; atomic_bond_reject; grout_feed; finish_water; movement_joint_materials_sealant; movement_joint_materials_backing; atomic_movement_joint_materials; finish_consumables_cleaner; atomic_finish_consumables; finish_residue_cured; finish_residue_paste; finish_residue_assembly; atomic_finish_residue; finish_effluent; atomic_finish_packaging | event_quantity = gross - tare for weighing; alternatively event_quantity = count * unit_mass or volume * density using the selected measurement_route and consistent units; select exactly one route per event and retain the measured product/wet-dry identity. | gross; tare; count; unit_mass; volume; density; measurement_route | event_quantity |  |
| event_energy | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | meter_delta = meter_end - meter_start; share = driver_node / drivers_total; event_quantity = meter_delta * share; drivers_total must be positive and sum of consuming shares must equal 1; dedicated meter uses share = 1; convert kWh by electricity_convert after attribution and retain MJ readings unchanged. | meter_start; meter_end; meter_unit; driver_node; drivers_total; shared_consumers | event_quantity |  |
| event_area | ungrouted_floor; floor_feed; accepted_tiled_floor | survey_area = length * width for each measured rectangular part; use surveyed area for other geometry; A = sum of gross surveyed plan parts - openings - unfinished_area - rejected_area; these deduction regions are mutually exclusive and each is deducted exactly once; for ungrouted_floor and floor_feed, event_quantity = internal_area at the respective actual transfer; for accepted_tiled_floor, event_quantity = A; never assign A to an internal handoff by default. | length; width; area; internal_area; plan_dimensions; gross_plan_parts; openings; unfinished_area; rejected_area; cp_bond_cure; cp_grout_finish | A; event_quantity |  |
| event_service | shared_access_service; shared_tool_service | For each one actual child identity/provider/contract/capacity/source period independently, H_source = actual evidenced availability in hours from service_start/service_end or bill_quantity * documented_hours_per_bill_unit, reconciled to the same contract period and paid idle where applicable. driver_node and drivers_total are evidenced nonnegative causal weights for that same service; drivers_total is the positive complete sum including all external consumers. H_job_period = H_source * sum(drivers of this job consumers) / drivers_total; H_child = sum of exclusive H_job_period. Retain every consuming node but record the complete job share only once in grout_finish. No assumed working-day length, asset lifetime, shared identity pool or duplicated period. Hours remain unnormalized; each child card divides once by A. | actual_service_identity; provider_id; contract_id; source_period; service_start; service_end; bill_quantity; documented_hours_per_bill_unit; paid_idle_hours; driver_node; drivers_total; shared_consumers; all_consumer_ids; source_reconciliation; cp_shared_access_service; cp_shared_tool_service | H_child; H_shared_access_service; H_shared_tool_service |  |
| event_release | atomic_cut_air_release; atomic_mortar_mix_release; atomic_grout_mix_release; atomic_bond_release; atomic_finish_release | event_quantity = concentration * exhaust_volume * unit_conversion for a measured substance/size and receiving medium; alternatively use directly measured net mass; select one documented method and do not infer zero from missing samples. | concentration; exhaust_volume; unit_conversion; gross; tare; species; particle_size; receiving_medium | event_quantity |  |
| card_quantity | all inventory rows | q_lot = sum of event_quantity for the same row_id and lot_id after same-node event ownership and unit checks; remove only duplicate records of the same physical event, retaining every actual repeated rework operation with its iteration; whole_tiles and tile_return use stock_draw, and mixing-material/paste/waste/release cards use their node card bridge, instead of a second event sum; measured transfers remain unforced; avoid adding recirculated water as fresh supply. Service children use their own identity-keyed H_child from event_service and their dedicated service protocol instead of q_lot; do not apply a second event sum or normalize twice. | event_quantity; row_id; lot_id; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_lot |  |
| mortar_card_bridge | mortar_powder; mortar_water; atomic_mortar_additives; fresh_mortar; mortar_mix_residue; mortar_wash_effluent; atomic_mortar_mix_release | mortar_powder_lot = powder_issued; mortar_water_lot = mixing_water + wash_addition; mortar_additives_lot = additive_issued; fresh_mortar_lot = transferred_wetpaste; mortar_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; mortar_wash_effluent_lot = effluent_transferred; mortar_mix_release_lot = measured_mix_releases + measured_wash_release; water totals are fresh additions only, excluding recirculation; residues assigned to the mix-residue card are disjoint from transferred wash effluent; tag each concrete actual species release by its owned pool/event and count it once; these row-specific lot totals become q_lot for area division. | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_mortar_mix | q_lot |  |
| grout_card_bridge | grout_powder; grout_water; atomic_grout_additives; fresh_grout; grout_mix_residue; grout_wash_effluent; atomic_grout_mix_release | grout_powder_lot = powder_issued; grout_water_lot = mixing_water + wash_addition; grout_additives_lot = additive_issued; fresh_grout_lot = transferred_wetpaste; grout_mix_residue_lot = captured_mix_residue + retained_captured_wash_residue; grout_wash_effluent_lot = effluent_transferred; grout_mix_release_lot = measured_mix_releases + measured_wash_release; water totals are fresh additions only, excluding recirculation; residues assigned to the mix-residue card are disjoint from transferred wash effluent; tag each concrete actual species release by its owned pool/event and count it once; these row-specific lot totals become q_lot for area division. | powder_issued; mixing_water; wash_addition; additive_issued; transferred_wetpaste; captured_mix_residue; retained_captured_wash_residue; effluent_transferred; measured_mix_releases; measured_wash_release; cp_grout_mix | q_lot |  |
| mix_state_balance | mortar_mix; grout_mix | powder_issued + mixing_water + additive_issued + opening_wetstock = transferred_wetpaste + captured_mix_residue + mix_material_in_wash + measured_mix_releases + closing_wetstock + unexplained_balance; compare compatible measured wet masses, with original powder crystallization water included in its issued mass and retained hydration water remaining in paste/residue; unknown fate is unexplained_balance, not an emission or a forced yield. | powder_issued; mixing_water; additive_issued; opening_wetstock; transferred_wetpaste; captured_mix_residue; mix_material_in_wash; measured_mix_releases; closing_wetstock; unexplained_balance; cp_mortar_mix; cp_grout_mix | mix_balance |  |
| wash_state_balance | mortar_mix; grout_mix | wash_addition + mix_material_in_wash + opening_washstock = effluent_transferred + retained_captured_wash_residue + measured_wash_release + closing_washstock + unexplained_wash_balance; exclude wash_addition from mixing_water and exclude material sent to washing from captured_mix_residue; retain measured wet mass/solids basis and each custody event once, without inventing a direct discharge. | wash_addition; mix_material_in_wash; opening_washstock; effluent_transferred; retained_captured_wash_residue; measured_wash_release; closing_washstock; unexplained_wash_balance; cp_mortar_mix; cp_grout_mix | wash_balance |  |
| lot_to_area | all inventory rows | q_norm = q_lot / A; q_lot is the measured or attributed exchange of the declared node in its recorded unit; A is the same lot accepted net floor area in m2 and must be positive. | q_lot; A; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | q_norm |  |
| stock_draw | whole_tiles; tile_return | gross_issue = opening_stock + receipts - closing_stock; whole_tiles_lot = gross_issue; tile_return_lot = external_return; net_consumed = gross_issue - external_return; reconcile net_consumed to independently measured actual_processing_draw, meaning actual processing withdrawals excluding unused external returns, including cutting losses and new materials for rework but excluding repeated internal recutting of the same piece, never purchasing receipts; keep physical gross input and return output distinct from net burden attribution; stock and return event ids are disjoint, and waste is not deducted again. | opening_stock; receipts; closing_stock; external_return; actual_processing_draw; cp_layout_cut | gross_issue; tile_return_lot; net_consumed |  |
| electricity_convert | cut_electricity; mortar_electricity; bond_electricity; grout_electricity; finish_electricity | electricity_MJ = electricity_kWh * 3.6 | electricity_kWh | electricity_MJ |  |
| transfer_reconcile | all inventory rows | sending_quantity = receiving_quantity + documented_transfer_loss; compare same transfer id, unit and wet/dry state; charge loss once to the sending node, using kg for material and m2 for floor transfers. | sending_quantity; receiving_quantity; documented_transfer_loss | transfer_balance |  |
| atomic_child_normalization | tile_packaging_cardboard; tile_packaging_plastic; tile_packaging_pallet; mortar_packaging_bag; mortar_packaging_container; mortar_packaging_pallet; bond_consumables_spacer; bond_consumables_levelling; bond_consumables_protection; bond_reject_assembly; grout_packaging_bag; grout_packaging_container; grout_packaging_pallet; movement_joint_materials_sealant; movement_joint_materials_backing; finish_consumables_cleaner; finish_residue_cured; finish_residue_paste; finish_residue_assembly | Record independent_physical_quantity separately by atomic_flow_row_id; actual_<row_id>_quantity is its named alias only, never a copied family amount. Materials retain original CP per-identity/state gross/net stock and outward-return conventions; transfers use actual paired custody quantity; usable exits and wastes use independent actual fate quantities. Number-of-items owned asset equivalents use this PCR original job_driver/full_life_driver complete-life fraction including manufacture, maintenance, replacement and end of life, with every consumer and a positive complete denominator. Duration/h service children instead use actual attributable job hours with the matching complete-life burden per hour; never multiply hours by the fraction again. Purchased services use only actual complete physical tasks whose real contract defines Item(s), with original actual attribution; hours, days and prices cannot become event counts. atomic_child_intensity = independent_physical_quantity / A, where A is unique finally accepted net installed tiled-floor area in m2 under net_area under the original acceptance rule; A=0 blocks normalization. Non-exchange parent role ledgers and original CP operands retain their stock, transfer, closure and ownership functions, without adding a second exchange or changing the method. | atomic_flow_row_id; independent_physical_quantity; exchange_property; exchange_unit; A; cp_layout_cut; cp_mortar_mix; cp_bond_cure; cp_grout_mix; cp_grout_finish | atomic_child_intensity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Resolve every actual exchange to a compatible concrete flow before TIDAS publication; umbrella cards may expand to multiple exchanges without changing service scope. | Flow detail and support property/unit evidence |
| completeness | all_processes | Cover full batch, cleanup, changeover, stock, rejected and shared events; record conditional absence with evidence, never blank=zero. | Event ledger and reconciliations |
| qualifiers | accepted_tiled_floor | Preserve ready-substrate, product, geometry, joint, cure and acceptance qualifiers; no unverified durability or bond-strength claim. | Design, product sheet and signed inspection |
| screening | all inventory rows | Replace provisional ranges using independent reviewed sites/lots; the same lot maximum cannot validate itself. Report uncertainty and outliers. | Independent range review and data-quality statement |
| atomic_tile_packaging | layout_cut; cp_layout_cut | Former tile_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Resolve each cardboard, plastic or pallet exchange from records; avoid a generic packaging UUID. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_layout_cut; actual_child_register; parent_ledger_id |
| atomic_cut_air_release | layout_cut; cp_layout_cut | Former cut_air_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional actual release only; record substance, particle size, air compartment and control system. Captured dust belongs to waste. The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_layout_cut; actual_child_register; parent_ledger_id |
| atomic_mortar_additives | mortar_mix; cp_mortar_mix | Former mortar_additives is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional zero, one or multiple products; collect chemistry and total formulated product mass without assuming an active fraction. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_mortar_mix; actual_child_register; parent_ledger_id |
| atomic_mortar_packaging | mortar_mix; cp_mortar_mix | Former mortar_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_mortar_mix; actual_child_register; parent_ledger_id |
| atomic_mortar_mix_release | mortar_mix; cp_mortar_mix | Former mortar_mix_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed. The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_mortar_mix; actual_child_register; parent_ledger_id |
| atomic_bond_consumables | bond_cure; cp_bond_cure | Former bond_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record spacers, levelling aids and protective consumables; distinguish reusable assets from consumed materials. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_bond_cure; actual_child_register; parent_ledger_id |
| atomic_bond_reject | bond_cure; cp_bond_cure | Former bond_reject is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Link each defect to its producing batch and rework route; embedded tile/adhesive rejects are not accepted area. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_bond_cure; actual_child_register; parent_ledger_id |
| atomic_bond_release | bond_cure; cp_bond_cure | Former bond_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed. The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_bond_cure; actual_child_register; parent_ledger_id |
| atomic_grout_additives | grout_mix; cp_grout_mix | Former grout_additives is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional zero, one or multiple products; collect chemistry and total formulated product mass without assuming an active fraction. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_mix; actual_child_register; parent_ledger_id |
| atomic_grout_packaging | grout_mix; cp_grout_mix | Former grout_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Segregate actual bag, container and pallet materials and retained/reused packaging. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_mix; actual_child_register; parent_ledger_id |
| atomic_grout_mix_release | grout_mix; cp_grout_mix | Former grout_mix_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional actual releases only; measure and declare substance, particle size where relevant, receiving medium and event. Captured material remains waste; no hydration gas or evaporation yield is assumed. The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_mix; actual_child_register; parent_ledger_id |
| atomic_movement_joint_materials | grout_finish; cp_grout_finish | Former movement_joint_materials is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Apply when required by the actual joint design; record sealant chemistry, backing, length, cross-section and cure requirement. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_finish; actual_child_register; parent_ledger_id |
| atomic_finish_consumables | grout_finish; cp_grout_finish | Former finish_consumables is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Record cleaning products only when used, with formulation and safety information; split reusable equipment. The material screen is broad because product thickness, formulation, geometry, temporary aids and rework vary; actual product/lot measurements determine the value. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_finish; actual_child_register; parent_ledger_id |
| atomic_finish_residue | grout_finish; cp_grout_finish | Former finish_residue is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate cured residue, unused paste and removed assemblies; link internal rework without crediting avoided materials. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_finish; actual_child_register; parent_ledger_id |
| atomic_finish_packaging | grout_finish; cp_grout_finish | Former finish_packaging is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Separate packaging by composition and destination; retained items remain stock. The wide waste screen accommodates wet/dry state, retained water, cutting layout, batch residue and rework; it is not an expected waste rate. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_finish; actual_child_register; parent_ledger_id |
| atomic_finish_release | grout_finish; cp_grout_finish | Former finish_release is a mandatory non-exchange refinement scope and custody/closure ledger key, not a mixed quantity-bearing inventory card. Preserve the original scope: Conditional emissions from actual products and operations; collect species and compartment before selecting any identity. The broad emission screen only flags order-of-magnitude or unit mistakes after species and medium are known; there is no emission factor or presumed occurrence. Named children cover only the listed conditional objects; every other real independent object remains required in the actual register. At this node use the original CP to collect each object's identity/state/medium or receiver, one fixed property/unit, independent quantity/conversion, activation or evidenced absence, source-ledger event, ownership and upstream coverage. The PCR denominator, stock/fate, allocation and closure methods remain unchanged; foreground records cannot choose a different method. Parent totals are non-exchange diagnostics, never copied to children or summed across unlike units as an exchange; do not duplicate a complete formulation/assembly/actual mixed carrier as constituents. Incomplete actual roster, quantity, identity/support, method or coverage blocks final foreground completion, never zero, implicit nonapplicability or manifest-only disclosure. | cp_grout_finish; actual_child_register; parent_ledger_id |
| atomic_legacy_role_mapping | layout_cut; mortar_mix; bond_cure; grout_mix; grout_finish | Legacy roles are non-exchange stock, activity, fate or closure keys in the original CP. Independent child exchanges carry quantities; atomic_ requirements retain mandatory remaining-roster refinement and finalization blocks. Original raw fields, helpers and native-unit operands retain their responsibilities and reconcile by child identity and compatible unit, never adding parent totals or unlike units. Source-table Applies-to migration: tile_packaging => tile_packaging_cardboard, tile_packaging_plastic, tile_packaging_pallet, atomic_tile_packaging; cut_air_release => atomic_cut_air_release; mortar_additives => atomic_mortar_additives; mortar_packaging => mortar_packaging_bag, mortar_packaging_container, mortar_packaging_pallet, atomic_mortar_packaging; mortar_mix_release => atomic_mortar_mix_release; bond_consumables => bond_consumables_spacer, bond_consumables_levelling, bond_consumables_protection, atomic_bond_consumables; bond_reject => bond_reject_assembly, atomic_bond_reject; bond_release => atomic_bond_release; grout_additives => atomic_grout_additives; grout_packaging => grout_packaging_bag, grout_packaging_container, grout_packaging_pallet, atomic_grout_packaging; grout_mix_release => atomic_grout_mix_release; movement_joint_materials => movement_joint_materials_sealant, movement_joint_materials_backing, atomic_movement_joint_materials; finish_consumables => finish_consumables_cleaner, atomic_finish_consumables; finish_residue => finish_residue_cured, finish_residue_paste, finish_residue_assembly, atomic_finish_residue; finish_packaging => atomic_finish_packaging; finish_release => atomic_finish_release | original_protocols; actual_child_register; parent_ledger_id |
| atomic_child_routing | layout_cut; mortar_mix; bond_cure; grout_mix; grout_finish | The following routes each child to its original role, node, unique unit and method CP. Independently apply that original role measurement, stock, source/fate, rework, share, conversion and normalization method to each actual identity/state child. Retain the original helper/selector role parameter as legacy_parent_role, but supply quantity operands from this child independent records; ROW_UNIT(child_row_id) is the explicit unit below. Reconcile stocks/transfers only within the same identity/state and compatible native unit, grouping different materials, media, states and units separately. Parent totals are non-exchange diagnostics, never copied as child operands or summed across unlike units. Unsupported original-helper applicability or missing actual conversion, denominator or evidence blocks finalization; field records cannot choose a new method. Original role-named formula operands remain ledger names rather than duplicate exchanges. A cross-unit legacy role executes by this mapping and actual child unit instead of inheriting a wrong fixed unit. Routing: tile_packaging_cardboard => role=tile_packaging, node=layout_cut, property=Mass, unit=kg, CP=cp_layout_cut; tile_packaging_plastic => role=tile_packaging, node=layout_cut, property=Mass, unit=kg, CP=cp_layout_cut; tile_packaging_pallet => role=tile_packaging, node=layout_cut, property=Mass, unit=kg, CP=cp_layout_cut; mortar_packaging_bag => role=mortar_packaging, node=mortar_mix, property=Mass, unit=kg, CP=cp_mortar_mix; mortar_packaging_container => role=mortar_packaging, node=mortar_mix, property=Mass, unit=kg, CP=cp_mortar_mix; mortar_packaging_pallet => role=mortar_packaging, node=mortar_mix, property=Mass, unit=kg, CP=cp_mortar_mix; bond_consumables_spacer => role=bond_consumables, node=bond_cure, property=Mass, unit=kg, CP=cp_bond_cure; bond_consumables_levelling => role=bond_consumables, node=bond_cure, property=Mass, unit=kg, CP=cp_bond_cure; bond_consumables_protection => role=bond_consumables, node=bond_cure, property=Mass, unit=kg, CP=cp_bond_cure; bond_reject_assembly => role=bond_reject, node=bond_cure, property=Mass, unit=kg, CP=cp_bond_cure; grout_packaging_bag => role=grout_packaging, node=grout_mix, property=Mass, unit=kg, CP=cp_grout_mix; grout_packaging_container => role=grout_packaging, node=grout_mix, property=Mass, unit=kg, CP=cp_grout_mix; grout_packaging_pallet => role=grout_packaging, node=grout_mix, property=Mass, unit=kg, CP=cp_grout_mix; movement_joint_materials_sealant => role=movement_joint_materials, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish; movement_joint_materials_backing => role=movement_joint_materials, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish; finish_consumables_cleaner => role=finish_consumables, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish; finish_residue_cured => role=finish_residue, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish; finish_residue_paste => role=finish_residue, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish; finish_residue_assembly => role=finish_residue, node=grout_finish, property=Mass, unit=kg, CP=cp_grout_finish | actual_child_register; legacy_parent_role; atomic_flow_row_id; independent_physical_quantity; exchange_unit; original_protocols |
| atomic_range_noninheritance | tile_packaging_cardboard; tile_packaging_plastic; tile_packaging_pallet; mortar_packaging_bag; mortar_packaging_container; mortar_packaging_pallet; bond_consumables_spacer; bond_consumables_levelling; bond_consumables_protection; bond_reject_assembly; grout_packaging_bag; grout_packaging_container; grout_packaging_pallet; movement_joint_materials_sealant; movement_joint_materials_backing; finish_consumables_cleaner; finish_residue_cured; finish_residue_paste; finish_residue_assembly | Retired parent numerical ranges, per-exchange screening instructions and rationales are retained only in implementation audit, applying to neither new child exchanges nor parent-family sums and never proportionally allocated. Each new child has independent evidence needs for actual quantity, identity/state, measurement/conversion, uncertainty and comparable independent observations. Add its own interval only after review confirms applicability to this independent object; never validate a batch with its own maximum. Original ranges of unchanged semantically compatible atomic objects retain their original status. | independent_child_measurement; independent_range_evidence; implementation_range_audit |
| atomic_paired_quantity_provenance | actual internal child source and recipient transfers | Internal I=F is a reconciliation condition for the same actual material/SKU, state, event, custody boundary and gate, never an assignment formula. Each child retains its own actual dispatch quantity and receipt/custody evidence. The same signed custody measurement may be traceably reused without inventing another weighing. Never copy a family total into each child, overwrite a real receipt or force unknown quantities equal. Preserve discrepancies with original values/units, measurement uncertainty, actual transfer loss, state change and responsible-owner evidence; unresolved differences block completion. Internal quantities remain unnormalized physical amounts, divided by the original reference denominator only at each card final step; parent-role sums are QA only. | source_actual_child_quantity; recipient_actual_child_quantity; signed_custody_measurement_id; source_receipt_provenance; paired_quantity_uncertainty; transfer_discrepancy_record; actual_loss_or_state_change_owner; pair_reconciliation_status |
| `service_refinement_grout_finish` | shared_access_service; shared_tool_service | The former multifunction shared_service inventory card is retired. Preserve its full original service-source roster as a nonexchange completeness ledger. Confirm every actual access/tool identity and occurrence/absence separately, with independently determinable quantity, one fixed property/unit, provider scope, period, source reconciliation and one burden owner. Do not copy/divide parent hours, numeric ranges or UUIDs, or sum different identities. Same supplier/invoice alone does not define one service. A genuinely indivisible single-function provider package may be counted once under its compatible child boundary, excluding its included components elsewhere. If an actual service has no compatible child, or another independent identity exists under a selected function, require a reviewed additional explicit identity/card and protocol before completion; never omit it or resurrect the multifunction exchange. Unresolved occurrence, identity, quantity, method, support or inclusion scope blocks final foreground completion; candidate checker success cannot close these site-data gates. | actual service register; contract/source/consumer reconciliation |
| `service_child_range_and_overlap` | shared_access_service; shared_tool_service | New service children have no inherited numeric Range. Retain independent quantities, actual identity/capacity, contract/hour conversion, uncertainty and independently reviewed comparable observations. Add a child interval only with evidence for that specific service; no default hours, arbitrary parent split or same-batch self-validation. A compatible per-hour upstream service already carrying lifetime capital/maintenance burdens must not receive those burdens again or a second lifetime-share multiplier. For actual separately owned assets retain the evidenced original attribution method and one burden owner. Keep operating electricity at its actual node; if it is in a provider package, subtract/reconcile the evidenced included component or use a compatible nonoverlapping service dataset before counting it separately. If inseparable overlap cannot be resolved, block finalization instead of inventing a deduction. | independent quantity/contract/support and component-boundary evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| area_gate | accepted_tiled_floor | Require A > 0 and one accepted output. Rejected, unfinished and intermediate areas are excluded from A and final sales output. |  |
| transfer_gate | all_processes | Pair all tile, paste and floor transfers; reconcile stock and wet/dry balance without demanding water-losing hydrated paste equal dry powder. |  |
| event_gate | all_processes | Check run/batch linkage, rework paths, waste custody, shared consumer shares and single event ownership. Missing evidence fails completeness. |  |
| identity_gate | all inventory rows | Verify actual formulation, service gate, flow type, property/unit and emission compartment; do not relabel manufactured tile as service or guess sealant/dust identity. |  |
| range_gate | all inventory rows | Investigate broad-screen outliers using measurement evidence. Provisional screening bounds do not establish conformity, publication readiness or missing-flow zeros. |  |
| close_atomic_tile_packaging | layout_cut; cp_layout_cut | Block final foreground completion until every actual object in atomic_tile_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_cut_air_release | layout_cut; cp_layout_cut | Block final foreground completion until every actual object in atomic_cut_air_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_mortar_additives | mortar_mix; cp_mortar_mix | Block final foreground completion until every actual object in atomic_mortar_additives is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_mortar_packaging | mortar_mix; cp_mortar_mix | Block final foreground completion until every actual object in atomic_mortar_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_mortar_mix_release | mortar_mix; cp_mortar_mix | Block final foreground completion until every actual object in atomic_mortar_mix_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_bond_consumables | bond_cure; cp_bond_cure | Block final foreground completion until every actual object in atomic_bond_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_bond_reject | bond_cure; cp_bond_cure | Block final foreground completion until every actual object in atomic_bond_reject is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_bond_release | bond_cure; cp_bond_cure | Block final foreground completion until every actual object in atomic_bond_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_grout_additives | grout_mix; cp_grout_mix | Block final foreground completion until every actual object in atomic_grout_additives is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_grout_packaging | grout_mix; cp_grout_mix | Block final foreground completion until every actual object in atomic_grout_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_grout_mix_release | grout_mix; cp_grout_mix | Block final foreground completion until every actual object in atomic_grout_mix_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_movement_joint_materials | grout_finish; cp_grout_finish | Block final foreground completion until every actual object in atomic_movement_joint_materials is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_consumables | grout_finish; cp_grout_finish | Block final foreground completion until every actual object in atomic_finish_consumables is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_residue | grout_finish; cp_grout_finish | Block final foreground completion until every actual object in atomic_finish_residue is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_packaging | grout_finish; cp_grout_finish | Block final foreground completion until every actual object in atomic_finish_packaging is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| close_atomic_finish_release | grout_finish; cp_grout_finish | Block final foreground completion until every actual object in atomic_finish_release is reconciled to independent actual child exchanges or evidenced nonactivation. Check one property/unit, independent physical quantity normalized by the original reference denominator, source/fate/period, one burden owner and the original stock/WIP/rework closure. Candidate structural success cannot close this method gate. |  |
| atomic_pair_provenance_complete | actual internal child source and recipient transfers | Verify actual source/receipt evidence, original physical quantities/units and ownership for the same material/state/event/gate. Traceable reuse of the same signed measurement is allowed; copied parent totals, overwritten receipts and forced unknown equality are prohibited. Unexplained differences without uncertainty, actual loss or state-transition responsibility evidence block completion; verify exactly one normalization per card. |  |
| `close_service_refinement_grout_finish` | shared_access_service; shared_tool_service | Require each actual service to have exactly one compatible child identity and independently collected numerator; confirm all source consumers/periods and exclusive component coverage. Check unchanged accepted denominator, paid idle, correction lineage, no copied parent totals/ranges/UUIDs, no mixed identity/unit sum and no omitted actual service. Unknown occurrence or unsupported hours blocks finalization. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package; secondary_dataset |
| downstream_use | Compatible process and lifecyclemodel projections; may become a background_dataset for the same declared installation gate after review |
| allowed_use | Area-based interior ceramic floor thinset service with matching substrate, product, joint and acceptance qualifiers |
| excluded_use | Manufactured tile production, wall/stone/epoxy routes, substrate/membrane work, building use and universal lifetime comparisons |
| required_metadata | Geography/site; lot/date; accepted A; substrate supply gate; tile/mortar/grout grades; joint/sealant design; process mode; transfers; supplier/upstream links; shared resource ownership |
| required_quality_disclosure | Measured/calculated coverage; absent/unknown exchanges; unresolved identities; provisional range status; allocation/stock/rework evidence; uncertainty; excluded upstream work |
| update_trigger | Change in tile system, substrate gate, chemistry, joint design, technology, supplier instructions, site practice or material measurement evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mapei-floor-installation | handbook | MAPEI Home, Floors (accessed 2026-10-12): https://mapeihome.com/flooranddecor/projects/floors/ | Route stages, actual-product instructions and joint/cleanup responsibilities; not universal amounts or times |
| laticrete-thinsets | handbook | LATICRETE, Thinsets FAQ (accessed 2026-10-12): https://www.laticrete.com/support-and-training/downloads-and-faq/faqs/planning-a-job/thinsets | Ready-substrate prerequisite and separate correction responsibility |
