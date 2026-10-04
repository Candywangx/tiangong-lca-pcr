---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.special-purpose-machinery-n-e-c-including-machinery-for-isotopic-separation-machines-fo-66e15395
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Special-purpose machinery n.e.c. (including machinery for isotopic separation, machines for assembling electric lamps in glass envelopes, machines for manufacturing glassware and rope making machines)

## 1. Scope and Applicability

This PCR develops manufacturing foreground data for complete special-purpose machinery n.e.c., preserving all explicitly named families: isotopic separation; assembling electric lamps/tubes/flashbulbs in glass envelopes; manufacturing or hot-working glass/glassware, including optical fibres/preforms and other glass; and making ropes or cables. Other residual machines require an actual principal-function review demonstrating no more-specific product category. CPC defines the full subclass; the retained Schedule B headings and note clarify functions, not alternative canonical identities.

SKLOSTROJ ISS documents servo-driven feeder/section/plunger architectures, an optional pneumatic plunger, conveyor, central lubrication, cooling and electrical distribution; its factory describes precision CNC/NC/conventional component manufacture and assembly. Servo versus pneumatic options and catalogue weight including moulds/conveyors/platforms cannot establish a default configured net mass or material recipe.

Grenzebach supplies float-glass tin-bath equipment with roof/casing/heaters/top rollers/cameras/cooling and utility interfaces. Xinniu fibre-drawing equipment describes a cast-iron turntable, high-strength aluminium head, bearings, direct or belt motor drive and PLC/DCS cabinets. Actual supplied alloy/finish and retained fill require their own proof. Glass-fibre machinery is not automatically optical-fibre machinery. Cold-end cutting and independent furnaces/utilities need separate function review. Customer molten tin, glass, fibre or gas recipes do not become equipment BOM.

The historical LRI brochure describes modular lamp-forming/mounting/jacket-sealing/exhaust equipment, factory machining and electrical assembly, and installation/operation before dispatch for debugging. Its historical readable observations support architecture and actual factory qualification; missing/corrupted text, catalogue lamp rates and customer lamp materials do not establish a current machine recipe. Each integrated machine or independent module needs supplied completion and principal-function review.

POURTIER explicitly describes steel-rope, submarine/control/umbilical cable stranding and armouring. Pioneer describes copper/aluminium/steel-wire stranding, bearing supports, oil-circulation pump/tank, optional band or hysteresis braking, independent AC servomotors and PLC/HMI. Rope/cable making may strand, twist or cable metal wire, textile yarn or combinations, but HERZOG explicitly also covers textile braiding: no complete HERZOG braider or its similar steel/rubber components proves this subclass. Textile lace/gimped-yarn machines require their own category review.

ETC public manufacturer evidence establishes supply/manufacture/installation of isotope-separation equipment and associated pipework/support services. This PCR uses only public supply and manufacturing LCA boundaries, measured materials/energy and accepted hardware; it does not prescribe separation operating design, enrichment conditions or process optimisation. Generic group carbon-fibre manufacturing capability is not evidence of every isotope machine construction. Independent support equipment and services are not automatically physical reference mass.

Reference output is 1 kg of calibrated accepted net physical machine of one declared configuration. Record actual cohort Dnet/Naccepted/M, purchased complete modules versus own manufacture, observed factory tests, actual retained supplied fills/accessories and transport packing separately. Consumed/rejected customer-type trial glass/envelopes/yarn/wire/fuel are manufacturing Qattr only when actually used in factory qualification, never Dnet. Retained first fill requires shipment evidence, not tank capacity. Stand-alone parts, general-purpose drives/pumps/control units, ordinary utility furnaces, customer glass/lamps/ropes and production services are not this finished reference; hybrid and whole-line modules require actual principal-function and physical-boundary review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.special-purpose-machinery-n-e-c-including-machinery-for-isotopic-separation-machines-fo-66e15395 |
| classification_refs | CPC3.0 44930 |
| covered_products | Complete isotopic-separation, glass-envelope lamp assembly, glass manufacture, rope/cable-making and actual reviewed residual machines n.e.c. |
| excluded_products | Independent parts/general-purpose/utility furnaces/cold-glass-working/unclassified textile braiders/customer glass-lamp-rope products and services |
| representative_product | Actual complete accepted special-purpose machine of one supplied configuration |
| production_route | Actual component manufacture or bought completion; mechanical/thermal/electrical/control integration; observed factory qualification/packing |
| market_state | Complete accepted supply; actual hardware and proven retained fills/accessories |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual declared configuration of complete accepted special-purpose machinery n.e.c. |
| How much | 1 kg accepted net physical output |
| How well | Actual principal function/supplied completion/acceptance requirements; no default catalogue mass |
| How long or cycle | Manufacture through cohort accepted release; observed factory qualification, no customer lifetime recipe |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete accepted special-purpose machinery n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/revision/size/serial cohort; full actual family and principal function; actual glass/lamp/rope-cable/isotope or reviewed residual scope; mechanical/thermal/control architecture; each complete supply/make-buy interface; installed retained fill species/state/quantity; excluded test consumption/rejects/packing/services/independent equipment; calibrated Dnet/Naccepted/M and common period; actual provider/geography/voltage; own assays/stocks/returns |

Declare every required qualifier in dataset metadata or equivalent notes; missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `native_numerator` | all inventory rows | actual native reference property | kg; MJ; m; m3 | Preserve each native numerator; q_ref=q_item/M. Cable m uses own same-construction kg/m, hydraulic-oil m3 measured liquid-temperature density, compressed-gas m3 own absolute T/P/wet-dry density for physical balances only. No power/capacity-to-mass conversion. Additional solid volume needs own solid geometry/same-grade density, not gas T/P. |
| `energy_conversion` | electricity and actual heat | Energy | MJ | Electricity kWh×3.6; actual matched voltage/geography. Supply/return heat own mass/enthalpy/common datum, gross/net return once; not rated power/customer production energy/supplier boiler fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual external feedstock/completed components at factory by actual supply completion |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete four explicit families and reviewed residual special-purpose machinery; independent parts/utilities/adjacent functions separately reviewed |
| recursive_input_rule | Complete bought input embeds upstream once; site-made actual inputs/operations; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual matched supply completion/grade/formulation/geography/period/treatment |
| disclosure | Manufacturing foreground; incomplete upstream forbids complete cradle-to-gate footprint claim |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual machine-component receipt/fabrication/finish, mechanical/thermal/control integration, observed factory qualification, attributable rejects/rework, packing/wastes/common services through accepted release. |  |
| `make_buy` | supplier_interface | Each retained module/component chooses actual bought completion versus own manufacture. Bought complete engine/housing/PCB/module includes upstream materials/processes once; site-made instead records separately measured queried raw inputs and site operations. Pair and cancel internal transfers. |  |
| `factory_use` | production | Actual factory electrical/mechanical/thermal/alignment functional trials are manufacturing burden, not customer glass/lamp/rope production or separation service. Measured trial feedstock, rejects/rework/recovery/stocks outside Dnet; retained actual hardware/fills only with accepted shipment proof. Independent utility furnaces, cold-glass machines or general handling equipment not automatically machine mass, even in a marketed bundle. |  |
| `bom_extension` | route | Conditional atomic cards are not a universal BOM. Each actual missing alloy/polymer grade, abrasive/blast medium, release agent, coolant/refrigerant, gas, drive/control/heating part, retained accessory/fill, trial formulation, waste or emitted species requires its own bounded directed identity query and independent measurement. Unknown differs from zero/not_applicable; absence needs evidence. |  |
| `upstream` | links | Match actual supplied completion, grade/formulation, geography/voltage/period and external treatment route. Actual special-purpose principal function and complete machine versus intermediate module or independent ancillary require individual review. Missing upstream forbids full footprint claim. |  |

### Actual architecture and supplied variants

| variant | actual_configuration | scope_condition |
| --- | --- | --- |
| Isotopic separation | Public complete equipment supply/manufacture only; actual accepted configuration | No operating-design/optimisation recipes or group-capability-to-BOM assumption |
| Glass-envelope lamp assembly | Actual forming/mounting/sealing/exhaust supplied completion and integrated function | Historical LRI evidence conditional; customer lamp feed not equipment BOM |
| Glass manufacture | Actual hot glass/float/container/fibre and optical/preform function reviewed | Cold working44221 and independent utility equipment separate |
| Rope/cable making | Actual stranding/twisting/cabling metal wire/textile yarn/combinations | POURTIER/Pioneer support actual cable/steel rope; HERZOG textile braiding taxonomy unconfirmed |
| Residual and hybrid | Other actual complete special-purpose machine only with no more-specific category | Actual principal function and independent line modules reviewed individually |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual structural and component fabrication | conditional | Actual casting/machining/welding/finishing or operations after bought completed inputs; own verified material grades only | foreground | per 1 kg reference flow |
| `assembly` | Configured mechanical, thermal and control integration | required | Actual retained drive, fluid, heating, electrical and control hardware, actual supplied configuration and make/buy interfaces | foreground | per 1 kg reference flow |
| `qualification` | Observed factory qualification | required | Actual alignment, electrical/mechanical/leak tests and observed functional trials; rejects/rework attributable, customer production excluded | foreground | per 1 kg reference flow |
| `dispatch` | Accepted configured machine release and packing | required | Actual complete accepted hardware configuration and proven retained fills; packing separately measured outside net output | foreground | per 1 kg reference flow |
| `services` | Unassigned common manufacturing services | conditional | Only reconciled unassigned same-period energy/water residual after subprocess attribution | foreground | per 1 kg reference flow |

### Process: Actual structural and component fabrication (`fabrication`)

Actual casting/machining/welding/finishing or operations after bought completed inputs; own verified material grades only.

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel coil (`steel`)

Actual BF hot-rolled NON-alloy coil, thickness2–7mm/width600–2100mm, supplied compatible steelmaking/rolling interface; not any structural plate, stainless steel or cast iron. Own received grade/cut stock/returns/installed mass.

- Selected flow: steel hot rolled coil `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alloy steel bars for machined parts (`steel_bar`)

Actual hot-forged/rolled/drawn/extruded alloy steel bar under41244, excluding high-speed or silicomanganese steel; own grade/completion, not reinforcement bar or any metal.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Stainless steel sheet (`stainless`)

Only actual separately measured supplied stainless steel sheet with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Structural aluminium profile (`aluminium_profile`)

Actual42190 prepared structural extruded aluminium profile, own alloy/temper/finish and installed/cut stock; not Xinniu cast aluminium head, unwrought metal or assumed6063.

- Selected flow: Aluminium Profile `d7de8999-a129-4f8b-8d6e-8856d87c470c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sklostroj-manufacture

###### Machined cast-iron base blank (`cast_iron`)

Only actual separately measured supplied machined cast-iron base blank with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Machined cast-iron base blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: xinniu-fibre

###### Self-shielded carbon-steel welding wire (`welding`)

Actual completed self-shielded all-position single-pass carbon-steel flux-cored wire, own sheath/flux/grade and compatible route; not generic MIG solid wire. Any actual shielding gas requires an additional independent queried/measured row.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Water-miscible metalworking fluid concentrate (`cutting_fluid`)

Only actual separately measured supplied water-miscible metalworking fluid concentrate with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyester powder coating compound (`powder_coat`)

Actual completed formulated powder coating under35110; use only with supplier-confirmed polyester resin/additives/colour/cure state matching this row. No generic polymer powder, fixed resin recipe or powder coating on every machine.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water`)

Only actual separately measured supplied process water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Artificial corundum abrasive grains (`abrasive`)

Actual finished artificial-corundum abrasive grains under37960, own particle grade/assay and measured blasting/finishing recovery; not chemical alumina or customer glass composition.

- Selected flow: Artificial corundum `a6e3c50f-7479-4004-9825-dc60fb6e696d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Electricity (`fabrication_electricity`)

Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel machining offcuts (`steel_scrap`)

Actual measured outgoing steel machining offcuts only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. Actual untreated steel offcuts39340, own assay/moisture/receiver; no universal credit.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Aluminium offcuts (`al_scrap`)

Actual measured outgoing aluminium offcuts only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. Actual cast/contaminated aluminium39363 and processing/recycling receiver must match.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent metalworking oil (`oil_waste`)

Actual measured outgoing spent metalworking oil only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. The dataset comment1% is not a quantity factor.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Metal-cleaning wastewater sent for treatment (`effluent`)

Actual measured outgoing metal-cleaning wastewater sent for treatment only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Metal-cleaning wastewater sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste polyester coating powder (`coating_waste`)

Actual measured outgoing waste polyester coating powder only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Configured mechanical, thermal and control integration (`assembly`)

Actual retained drive, fluid, heating, electrical and control hardware, actual supplied configuration and make/buy interfaces.

#### Inputs

##### Product flows

###### AC servomotor (`motor`)

Only actual separately measured supplied ac servomotor with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Electric drive, servo motor `89a4fdf2-5cce-4df3-b372-14407f92dd28`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: pioneer-strander; sklostroj-iss

###### Ball or roller bearing (`bearing`)

Only actual separately measured supplied ball or roller bearing with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: pioneer-strander; xinniu-fibre

###### Complete industrial reduction gearbox (`gearbox`)

Only actual separately measured supplied complete industrial reduction gearbox with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Complete industrial reduction gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete lubricating-oil liquid pump (`pump`)

Actual complete liquid lubricating-oil pump with own compatible technology/model and provider; not vacuum pump, hydraulic service or generic rated capacity. Bought completed pump includes internal manufacture once.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: pioneer-strander

###### Complete vacuum pump (`vacuum_pump`)

Only actual separately measured supplied complete vacuum pump with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete pneumatic cylinder (`pneumatic`)

Only actual separately measured supplied complete pneumatic cylinder with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Complete pneumatic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: sklostroj-iss

###### Complete programmable logic controller (`plc`)

Only actual separately measured supplied complete programmable logic controller with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Complete programmable logic controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: pioneer-strander; xinniu-fibre

###### Electrical heating resistor (`heater`)

Actual complete non-carbon electrical heating resistor under44818 with matched supplier element/construction, not carbon resistor, lamp, whole furnace or conversion from wattage to mass.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: grenzebach-glass

###### Complete industrial gas burner (`burner`)

Actual complete industrial gas burner under43410 with verified fuel/technology/supply completion; not pre-finishing/QA intermediate burner subassembly or whole furnace. Actual factory test fuel separately measured, no catalogue burner rate.

- Selected flow: Furnace burners for liquid fuel, for pulverized solid fuel or for gas, mechanical stokers, mechanical grates, mechanical ash dischargers and similar appliances `25b61b3f-31a8-4618-9025-db11814c43e2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Vulcanized NBR rubber sealing element (`seal`)

Actual completed vulcanized NBR sealing element under36270 with supplier formulation/fit; not all PTFE/TPU/metal seals or unspecified rubber.

- Selected flow: Sealing elements `a9943e4e-1a21-412c-859e-df09a2b5ee6f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steel screw (`fastener`)

Only actual separately measured supplied steel screw with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Vulcanized rubber hose (`hose`)

Actual completed vulcanized-rubber hose under36230 with own reinforcement/construction/fluid/pressure compatibility; not TPU hose, metal pipe or every air/water tube.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated copper power cable (`cable`)

Actual completed0.6/1kV Cu/Al power cable under GB/T12706.1-2020 and supplier construction, not generic flex/signal cord. Native Length/m measured installed/cut/returned/stocks; own same-construction measured kg/m for physical balance only, no electrical-rating conversion.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### Furfural re-refined mineral lubricating oil (`lubricant`)

Actual furfural re-refined mineral lubricating oil from used oil, with supplier-confirmed refinery route, composition, viscosity and phase. A compatible finished-oil identity is not confirmed; a solvent CAS or PAO synthetic oil is not a substitute. Measure retained charge, factory consumption, returns and stocks separately; a bought charged module embeds its upstream fill once.

- Selected flow: Furfural re-refined mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: pioneer-strander; sklostroj-iss

###### Hydraulic oil (`hydraulic_oil`)

Actual petroleum-based hydraulic oil with≥70% petroleum oil basis, supplier grade/phase matching; native liquid Volume/m3. Measure actual liquid volume and corresponding temperature/own density for physical kg reconciliation, not gas T/P or bulk void volume. Retained/consumed/stocks separately tracked.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_liquid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid`
- Sources: pioneer-strander

###### Electricity (`assembly_electricity`)

Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Observed factory qualification (`qualification`)

Actual alignment, electrical/mechanical/leak tests and observed functional trials; rejects/rework attributable, customer production excluded.

#### Inputs

##### Product flows

###### Soda-lime glass gob for observed factory test (`test_glass`)

Only actual separately measured supplied soda-lime glass gob for observed factory test with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Soda-lime glass gob for observed factory test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Empty glass lamp envelope for observed factory assembly test (`test_bulb`)

Only actual separately measured supplied empty glass lamp envelope for observed factory assembly test with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Empty glass lamp envelope for observed factory assembly test
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyester multifilament yarn for observed rope test (`test_yarn`)

Actual PET continuous filament yarn CAS25038-59-9, not sewing/multiple/cabled or retail yarn, with verified multifilament construction and actual rope/cable host function. Actual observed factory test only; issued/returned/stocks/assay separately measured, consumed yarn outside Dnet. HERZOG textile brochure alone does not prove this host or test.

- Selected flow: Polyester Filament `30173859-61d4-4518-ba9e-6846b8491c1b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Copper wire for observed stranding test (`test_copper`)

Actual bare drawn copper wire under41513 with own grade/purity/diameter/supply interface and measured observed factory stranding trials/returns/stocks. Not wire rod, solder or insulated power cable; consumed wire not Dnet.

- Selected flow: copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous oxygen (`oxygen`)

Actual gaseous air-separation O2, verified purity/provider/phase, separately measured kg in observed factory thermal qualification only. No catalogue customer glass combustion recipe, liquid O2 or unpublished/mixed gas substitute.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Natural gas (`natural_gas`)

Actual observed factory thermal-test fuel, own composition/phase/interface/assay and calibrated mass; no compatible published identity confirmed. Native volume if actual supplier interface requires its own absolute T/P/wet-dry/standard basis and matched density/calorific basis; no generic LNG or unpublished substitute.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous nitrogen (`nitrogen`)

Actual gaseous N2 air-separation supply matching purity/provider/phase/pressure, separately measured kg; actual factory trial or shipment-proven retained charge only. Property mean1.25 is not density or quantity factor. No customer float-bath recipe or assumed isotope working gas.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`water_test`)

Only actual separately measured supplied process water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol cleaning solvent (`ipa`)

Actual CN chemical isopropanol at plant with verified supplied assay/formulation, not a cleaning mixture inferred pure. Independent issue, retained product, recovered/captured liquid or media, wastewater and actual species air release use their own assays/stocks; unknown residual never becomes air.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Compressed air (`compressed_air`)

Actual supplied compressed air, native Volume/m3 at declared absolute pressure/temperature and wet/dry or standard conditions; own corresponding density for physical mass only. Purchased import versus own compressor generation reconciled without double import+electricity burden.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_gas.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources:

###### Electricity (`qualification_electricity`)

Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste glass test pieces (`glass_waste`)

Actual measured outgoing waste glass test pieces only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Waste glass test pieces
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Waste polyester test yarn (`yarn_waste`)

Actual measured outgoing waste polyester test yarn only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Waste polyester test yarn
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Copper wire test scrap (`copper_waste`)

Actual measured outgoing copper wire test scrap only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Copper wire test scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropanol cleaning solvent (`solvent_waste`)

Actual measured outgoing spent isopropanol cleaning solvent only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide fossil (`co2`)

Only independently measured carbon dioxide fossil to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide fossil (`co`)

Only independently measured carbon monoxide fossil to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Isopropanol to air (`ipa_air`)

Only independently measured isopropanol to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to air (`vapour`)

Only independently measured water vapour to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Particulate matter PM10 to air (`dust`)

Only independently measured particulate matter pm10 to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Accepted configured machine release and packing (`dispatch`)

Actual complete accepted hardware configuration and proven retained fills; packing separately measured outside net output.

#### Inputs

##### Product flows

###### Corrugated paperboard packing sheet (`cardboard`)

Actual corrugated C/E/F paperboard sheet under32151 with cellulose fibre≥80% and actual own recycled share;≥80% does not mean recycled content. Sheet distinct from completed carton32153, each actual packing net mass measured.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE packaging film (`film`)

Actual non-self-adhesive, non-cellular, non-reinforced, non-laminated unsupported LDPE film under36330, own formulation/thickness/pack mass; not generic plastic, PVAc or wrong film identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Only actual separately measured supplied wooden euro pallet with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted special-purpose machinery n.e.c. (`reference_product`)

Selected complete accepted configuration includes actual retained fills/accessories, excluding packaging and rejects.

- Selected flow: Complete accepted special-purpose machinery n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44930; census-special

##### Waste flows

##### Elementary flows

### Process: Unassigned common manufacturing services (`services`)

Only reconciled unassigned same-period energy/water residual after subprocess attribution.

#### Inputs

##### Product flows

###### Electricity (`electricity`)

Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased heat (`heat`)

Actual CN natural-gas district/industrial heat only with matching delivery provider and Gross calorific value Energy/MJ interface; no onsite supplier boiler fuel invented. Each steam supply/return uses own measured kg and MJ/kg common datum, deduct return once; already-net supply never double deducted.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Tap water (`tap_water`)

Only actual separately measured supplied tap water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machining functions or different supplied configurations or use machine mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per unit | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted units | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted units | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted units | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted units | sampling/flow/combined uncertainty |
| cp_gas | all | specific supplied gas | meter | compressed-air identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter compressed-air volume at actual state; mass conversion uses corresponding measured density, not a generic gas factor. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted units | T/P/flow/density/calibration |
| cp_length | assembly | specific native-length cable | length_measurement | cable construction; conductor/insulation; supplier; issued/cut/installed/returned length; own kg/m; Q; N | Measure actual matching cable length, paired returns and stocks; same-construction measured kg/m only for physical mass balance. Native m retained, never infer mass from electrical rating. | m | each installation lot | common manufacturing period | same component configuration/site and supplier | attributable length / accepted units | construction/length/stock/mass records |
| cp_liquid | assembly | specific supplied liquid | volume_measurement | liquid grade/phase; actual volume/temperature; own density; stocks/retained/consumed/returns; Q; N | Measure actual liquid volume and corresponding supplier-grade density at measured temperature; native m3 retained, only own density converts physical mass. Not gas T/P or bulk void volume. | m3 | each fill/transfer lot | common manufacturing period | same liquid supply interface | attributable volume / accepted units | actual liquid temperature/volume/density/stocks |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| supplied_reference_config | actual special-purpose configuration | Accepted complete machine has actual isotope-separation, glass-envelope-lamp assembly, glass manufacture or rope/cable function; other residual only with no more-specific category. Declare principal function/model/size/serial cohort, mechanical/thermal/control architecture, completed supply and each installed physical interface. Dnet calibrated accepted hardware and proven retained fill only; packing/reject/consumed trial media/software/services excluded. No catalogue netmass. | actual function/shipment/calibrated net weighing |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| dust_overlap | actual particulate releases | PM10 is measured gross particulate mass of the specified size fraction. When actually present, independently measure contained crystalline silica or another species; that contained mass is not additional gross particulate mass. Each actual species needs its own identity and measurement row; declare LCIA reporting conventions and prevent repeated full characterization of the same release, without inventing silica release. | actual test-media species/size-fraction sampling and LCIA reporting convention |
| machine_architecture | actual reference object | Preserve all four explicit machine families and reviewed residual functions, not just hot-glass equipment. SKLOSTROJ servo/pneumatic variants, LRI modular lamp equipment, Grenzebach float hardware, Xinniu glass-fibre equipment and POURTIER/Pioneer stranding are actual conditional architectures. HERZOG rope/textile braiding is an adjacent classification counterexample, not proof of44930 or a default BOM. Independent cold-glass/utility/general-purpose machines and44949 parts require their own boundary; hybrids actual principal function. | un-cpc-44930; census-special; actual manufacturer function |
| test_install_roles | actual factory records | Own measured factory test media include trial glass/envelope/yarn/wire/gas/fuel only when actually used for this cohort, with issue/recovery/stocks/cured state and waste or non-air fate separately measured; no catalogue recipe. None of consumed or rejected specimens enters Dnet. Retained first fill/included consumable requires actual accepted shipment/physical state/quantity evidence, not tank capacity. Bought charged module already includes its upstream charge once. | actual trial/acceptance/retained shipment/stock records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

PM10 is measured gross particulate mass of the specified size fraction; a separately measured contained chemical species is not additional gross particulate mass. Add each actual species according to tested medium and release, declare LCIA reporting conventions and prevent repeated full characterization.

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| optical_acceptance | actual technical evidence | ETC public supply/manufacture evidence supports only manufacturing LCA boundaries and actual measured materials/energy, not separation operating design/optimisation or a universal carbon-fibre recipe. Glass-machine rated power/catalogue mass/utility flow, rope reel counts, customer recipes and historical lamp rates are not factory quantities. Optional servo/pneumatic, direct/belt drives and braking architectures require actual configuration. Only measured actual factory trials contribute Qattr; retained supplied fills/accessories require shipment proof. | actual source-limited function/drawings/supplier completion/factory records |

### Supplied identity and native measurement conditions

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| qualified_steel | steel | Actual BF hot-rolled NON-alloy coil, thickness2–7mm/width600–2100mm, supplied compatible steelmaking/rolling interface; not any structural plate, stainless steel or cast iron. Own received grade/cut stock/returns/installed mass. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_steel_bar | steel_bar | Actual hot-forged/rolled/drawn/extruded alloy steel bar under41244, excluding high-speed or silicomanganese steel; own grade/completion, not reinforcement bar or any metal. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_aluminium_profile | aluminium_profile | Actual42190 prepared structural extruded aluminium profile, own alloy/temper/finish and installed/cut stock; not Xinniu cast aluminium head, unwrought metal or assumed6063. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_welding | welding | Actual completed self-shielded all-position single-pass carbon-steel flux-cored wire, own sheath/flux/grade and compatible route; not generic MIG solid wire. Any actual shielding gas requires an additional independent queried/measured row. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_cutting_fluid | cutting_fluid | Only actual separately measured supplied water-miscible metalworking fluid concentrate with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_water | water | Only actual separately measured supplied process water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_abrasive | abrasive | Actual finished artificial-corundum abrasive grains under37960, own particle grade/assay and measured blasting/finishing recovery; not chemical alumina or customer glass composition. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_steel_scrap | steel_scrap | Actual measured outgoing steel machining offcuts only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. Actual untreated steel offcuts39340, own assay/moisture/receiver; no universal credit. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_al_scrap | al_scrap | Actual measured outgoing aluminium offcuts only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. Actual cast/contaminated aluminium39363 and processing/recycling receiver must match. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_oil_waste | oil_waste | Actual measured outgoing spent metalworking oil only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. The dataset comment1% is not a quantity factor. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_coating_waste | coating_waste | Actual measured outgoing waste polyester coating powder only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_motor | motor | Only actual separately measured supplied ac servomotor with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_bearing | bearing | Only actual separately measured supplied ball or roller bearing with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_pump | pump | Actual complete liquid lubricating-oil pump with own compatible technology/model and provider; not vacuum pump, hydraulic service or generic rated capacity. Bought completed pump includes internal manufacture once. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_vacuum_pump | vacuum_pump | Only actual separately measured supplied complete vacuum pump with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_heater | heater | Actual complete non-carbon electrical heating resistor under44818 with matched supplier element/construction, not carbon resistor, lamp, whole furnace or conversion from wattage to mass. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_burner | burner | Actual complete industrial gas burner under43410 with verified fuel/technology/supply completion; not pre-finishing/QA intermediate burner subassembly or whole furnace. Actual factory test fuel separately measured, no catalogue burner rate. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_seal | seal | Actual completed vulcanized NBR sealing element under36270 with supplier formulation/fit; not all PTFE/TPU/metal seals or unspecified rubber. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_fastener | fastener | Only actual separately measured supplied steel screw with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_hose | hose | Actual completed vulcanized-rubber hose under36230 with own reinforcement/construction/fluid/pressure compatibility; not TPU hose, metal pipe or every air/water tube. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_cable | cable | Actual completed0.6/1kV Cu/Al power cable under GB/T12706.1-2020 and supplier construction, not generic flex/signal cord. Native Length/m measured installed/cut/returned/stocks; own same-construction measured kg/m for physical balance only, no electrical-rating conversion. Native property/unit group: 838aaa23-0117-11db-92e3-0800200c9a66; 838aaa22-0117-11db-92e3-0800200c9a66 | supplier specification/actual native metering |
| qualified_hydraulic_oil | hydraulic_oil | Actual petroleum-based hydraulic oil with≥70% petroleum oil basis, supplier grade/phase matching; native liquid Volume/m3. Measure actual liquid volume and corresponding temperature/own density for physical kg reconciliation, not gas T/P or bulk void volume. Retained/consumed/stocks separately tracked. Native property/unit group: 93a60a56-a3c8-22da-a746-0800200c9a66; 93a60a57-a3c8-12da-a746-0800200c9a66 | supplier specification/actual native metering |
| unconfirmed_lubricant | lubricant | Actual furfural re-refined mineral lubricating oil from used oil, with supplier-confirmed refinery route, composition, viscosity and phase. A compatible finished-oil identity is not confirmed; a solvent CAS or PAO synthetic oil is not a substitute. Measure retained charge, factory consumption, returns and stocks separately; a bought charged module embeds its upstream fill once. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_test_yarn | test_yarn | Actual PET continuous filament yarn CAS25038-59-9, not sewing/multiple/cabled or retail yarn, with verified multifilament construction and actual rope/cable host function. Actual observed factory test only; issued/returned/stocks/assay separately measured, consumed yarn outside Dnet. HERZOG textile brochure alone does not prove this host or test. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_test_copper | test_copper | Actual bare drawn copper wire under41513 with own grade/purity/diameter/supply interface and measured observed factory stranding trials/returns/stocks. Not wire rod, solder or insulated power cable; consumed wire not Dnet. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_nitrogen | nitrogen | Actual gaseous N2 air-separation supply matching purity/provider/phase/pressure, separately measured kg; actual factory trial or shipment-proven retained charge only. Property mean1.25 is not density or quantity factor. No customer float-bath recipe or assumed isotope working gas. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_oxygen | oxygen | Actual gaseous air-separation O2, verified purity/provider/phase, separately measured kg in observed factory thermal qualification only. No catalogue customer glass combustion recipe, liquid O2 or unpublished/mixed gas substitute. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_ipa | ipa | Actual CN chemical isopropanol at plant with verified supplied assay/formulation, not a cleaning mixture inferred pure. Independent issue, retained product, recovered/captured liquid or media, wastewater and actual species air release use their own assays/stocks; unknown residual never becomes air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_compressed_air | compressed_air | Actual supplied compressed air, native Volume/m3 at declared absolute pressure/temperature and wet/dry or standard conditions; own corresponding density for physical mass only. Purchased import versus own compressor generation reconciled without double import+electricity burden. Native property/unit group: 93a60a56-a3c8-22da-a746-0800200c9a66; 93a60a57-a3c8-12da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_co2 | co2 | Only independently measured carbon dioxide fossil to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_co | co | Only independently measured carbon monoxide fossil to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_ipa_air | ipa_air | Only independently measured isopropanol to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_vapour | vapour | Only independently measured water vapour to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_dust | dust | Only independently measured particulate matter pm10 to air to ordinary unspecified air with matched species/origin: post-control species concentration times same-period gas flow/time and actual T/P/wet-dry/unit basis plus measured fugitives, or demonstrated species balance including all non-air fates. Capture not destruction; unknown residual not air. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_cardboard | cardboard | Actual corrugated C/E/F paperboard sheet under32151 with cellulose fibre≥80% and actual own recycled share;≥80% does not mean recycled content. Sheet distinct from completed carton32153, each actual packing net mass measured. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_film | film | Actual non-self-adhesive, non-cellular, non-reinforced, non-laminated unsupported LDPE film under36330, own formulation/thickness/pack mass; not generic plastic, PVAc or wrong film identity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_pallet | pallet | Only actual separately measured supplied wooden euro pallet with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_electricity | electricity | Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200c9a66; 93a60a57-a3c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_heat | heat | Actual CN natural-gas district/industrial heat only with matching delivery provider and Gross calorific value Energy/MJ interface; no onsite supplier boiler fuel invented. Each steam supply/return uses own measured kg and MJ/kg common datum, deduct return once; already-net supply never double deducted. Native property/unit group: 93a60a56-a3c8-14da-a746-0800200c9a66; 93a60a57-a3c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_tap_water | tap_water | Only actual separately measured supplied tap water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_powder_coat | powder_coat | Actual completed formulated powder coating under35110; use only with supplier-confirmed polyester resin/additives/colour/cure state matching this row. No generic polymer powder, fixed resin recipe or powder coating on every machine. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_water_test | water_test | Only actual separately measured supplied process water with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. Native property/unit group: 93a60a56-a3c8-11da-a746-0800200b9a66; 93a60a57-a4c8-11da-a746-0800200c9a66 | supplier specification/actual native metering |
| qualified_fabrication_electricity | fabrication_electricity | Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours. | matched delivery interface/submeter records |
| qualified_assembly_electricity | assembly_electricity | Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours. | matched delivery interface/submeter records |
| qualified_qualification_electricity | qualification_electricity | Only actual CN user-side 1–35kV electricity delivery matching provider, voltage and period; not every geography. Native Energy/MJ, actual kWh converted by 3.6; process loads and common unassigned residual reconcile with imports, generation, exports and stocks, no rated-power-times-default-hours. | matched delivery interface/submeter records |
| outgoing_effluent | effluent | Actual measured outgoing metal-cleaning wastewater sent for treatment only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_glass_waste | glass_waste | Actual measured outgoing waste glass test pieces only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_yarn_waste | yarn_waste | Actual measured outgoing waste polyester test yarn only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_copper_waste | copper_waste | Actual measured outgoing copper wire test scrap only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. | sampling/weighing/stocks/actual receiver tickets |
| outgoing_solvent_waste | solvent_waste | Actual measured outgoing spent isopropanol cleaning solvent only: own species/assay/formulation, water fraction/contamination/state, transfer/stocks, paired internal returns and actual external receiver/treatment. Separate captured solvent and non-air fates; no fresh input, air residual or default recycling credit. | sampling/weighing/stocks/actual receiver tickets |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| unconfirmed_stainless | stainless | Only actual separately measured supplied stainless steel sheet with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_cast_iron | cast_iron | Only actual separately measured supplied machined cast-iron base blank with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_gearbox | gearbox | Only actual separately measured supplied complete industrial reduction gearbox with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_pneumatic | pneumatic | Only actual separately measured supplied complete pneumatic cylinder with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_plc | plc | Only actual separately measured supplied complete programmable logic controller with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_test_glass | test_glass | Only actual separately measured supplied soda-lime glass gob for observed factory test with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_test_bulb | test_bulb | Only actual separately measured supplied empty glass lamp envelope for observed factory assembly test with verified specific grade/formulation, completion, model fit and provider. Complete bought component embeds upstream manufacture once; own fabrication instead requires independently queried actual raw inputs/operations. Source architecture is not proof of any grade or universal quantity. | own supplied-state/specification/measurement |
| unconfirmed_natural_gas | natural_gas | Actual observed factory thermal-test fuel, own composition/phase/interface/assay and calibrated mass; no compatible published identity confirmed. Native volume if actual supplier interface requires its own absolute T/P/wet-dry/standard basis and matched density/calorific basis; no generic LNG or unpublished substitute. | own supplied-state/specification/measurement |
| unconfirmed_reference_product | reference_product | Reference output is 1 kg of calibrated accepted net physical machine of one declared configuration. Record actual cohort Dnet/Naccepted/M, purchased complete modules versus own manufacture, observed factory tests, actual retained supplied fills/accessories and transport packing separately. Consumed/rejected customer-type trial glass/envelopes/yarn/wire/fuel are manufacturing Qattr only when actually used in factory qualification, never Dnet. Retained first fill requires shipment evidence, not tank capacity. Stand-alone parts, general-purpose drives/pumps/control units, ordinary utility furnaces, customer glass/lamps/ropes and production services are not this finished reference; hybrid and whole-line modules require actual principal-function and physical-boundary review. | own supplied-state/specification/measurement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Verify complete special-purpose machinery n.e.c., full explicit isotope/glass-envelope-lamp/glass/rope-cable or reviewed residual family, principal function and delivered configuration. Reference finished44930 excludes intermediate structures/components, customer products/services, partial machines and automatically included independent ancillary equipment. Each exchange needs own species/grade/completion/state/native quantity/provider; zero/absent/unknown distinct. | un-cpc-44930; census-special |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/finish/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-special-purpose-machine functional equivalence, default customer glass/lamp/rope production or separation service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| sklostroj-iss | handbook | Container Glass Forming Machines ISS; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.sklostroj.cz/files/attachments/web-container-glass-forming-machines-iss.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| sklostroj-manufacture | handbook | Homepage - Precision Machines with a hot Heart ｜ Sklostroj Turnov CZ, s.r.o.; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.sklostroj.cz/en | Product architecture/category boundary; not factory recipe or quantitative default |
| herzog-rope | handbook | Braiding Machines for Ropes and Textile Applications; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://herzog-online.com/cms/wp-content/uploads/2020/12/Produktflyer_RopeTextile_Web.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| herzog-design | handbook | Rope Braiding Machines Type SE; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://exhibitorsearch.messefrankfurt.com/images/original/document_downloads/10000008202601/504750/1770822193294_3408344184.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| lri-lamp | handbook | LRI Lamp Manufacturing Equipment; Undated historical OEM LRI brochure; retained Lamptech mirror filename199x is not verified publication year; https://www.lamptech.co.uk/Documents/Machines/LRI%20-%20Lamp%20Machinery%20-%20199x%20US.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| etc-brochure | handbook | ETC Unique Technology; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://enritec.com/app/uploads/2023/02/brochure-en.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| pioneer-strander | handbook | Tubular Stranding Machine - Pioneer Machinery Co., Ltd.; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.pioneerm.com/en/pioneer_product/tubular-stranding-machine/ | Product architecture/category boundary; not factory recipe or quantitative default |
| pourtier-planetary | handbook | • Planetary Stranders for Stranding and Armouring - SETIC; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.setic-pourtier.com/machine/planetary-stranders-2/ | Product architecture/category boundary; not factory recipe or quantitative default |
| grenzebach-glass | handbook | Grenzebach Glass Technology; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.grenzebach.com/fileadmin/Grenzebach_Group/Glas/Grenzebach_Glass_Technology_Brochure_EN.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| xinniu-fibre | handbook | Glass Fiber Drawing Machine - xinniuzj; Undated original; actual retained snapshot2026-10-03; publication date not inferred from URL or copyright; https://www.xinniuzj.com/product/glass-fiber-drawing-machine/ | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44930 | official_guidance | Central Product Classification (CPC) Version 3.0 Explanatory Notes; 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| census-special | official_guidance | Schedule B Book - Chapter 84; 2022 Schedule B chapter; https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Product architecture/category boundary; not factory recipe or quantitative default |
