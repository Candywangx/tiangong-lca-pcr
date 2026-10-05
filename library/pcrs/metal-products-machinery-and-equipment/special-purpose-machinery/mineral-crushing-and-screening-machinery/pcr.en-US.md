---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crushing-and-screening-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mineral crushing and screening machinery manufacturing

## 1. Scope and Applicability

Complete stationary electrically driven jaw crushers and dry vibrating mineral screens manufactured for delivery in one declared configuration. This narrower category does not cover every activity in CPC44440. Keep crusher and screen families, frame connection, fitted drive, screen media/wear plates and shipment boundary separate. Manufacturing is the reference function; mineral throughput and processed-mineral quality are not the inventory denominator.

Cone/impact crushers, grinding mills, wet washing/separation plants, mineral mixing/kneading/agglomerating/forming and foundry sand-mould machines; mobile tracked/wheeled plants, combustion drive, independent conveyors/feeders/dust collectors, general building foundations, spare-part manufacture as standalone products, customer quarry/mining operation, installation, use, maintenance, lifetime wear replacement and end-of-life. Dedicated fitted drive, guard and control included only within actual complete supply; detached extras are separate products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crushing-and-screening-machinery |
| classification_refs | CPC:3.0:44440; narrower |
| covered_products | Configured stationary electric jaw-crushing machine; configured dry vibrating mineral-screening machine. |
| excluded_products | Cone/impact crushers, grinding mills, wet washing/separation plants, mineral mixing/kneading/agglomerating/forming and foundry sand-mould machines; mobile tracked/wheeled plants, combustion drive, independent conveyors/feeders/dust collectors, general building foundations, spare-part manufacture as standalone products, customer quarry/mining operation, installation, use, maintenance, lifetime wear replacement and end-of-life. Dedicated fitted drive, guard and control included only within actual complete supply; detached extras are separate products. |
| representative_product | One factory-accepted jaw crusher with declared cast/fabricated frame, jaws, eccentric/pitman/toggle mechanism, fitted drive and safety guards; alternatively a separately modelled vibrating screen with specified decks/media, exciter, suspension and drive. These are not one interchangeable BOM. |
| production_route | Receipt of stock/finished components; actual conditional mechanical fabrication/welding/coating; assembly; acceptance; conditional packaging. Casting, motor winding and supplier manufacture are upstream links unless independently measured under an expanded module. |
| market_state | Accepted new complete stationary electric machine ready for shipment; fitted replaceable wear surfaces included, spare sets and transport packing excluded from net mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing delivery of the declared complete mineral crusher or screen; product reference, not tonnes of aggregate processed. |
| How much | 1 kg accepted net complete machine of one configuration; a normalized share of a whole machine, not a separately functional kilogram component. |
| How well | Meets released BOM, drawings and actual acceptance criteria for crushing/screening mechanism, drive, guards, controls, alignment and electrical conformity. No universal capacity, aperture, power, vibration amplitude or service life specified. |
| How long or cycle | One manufacturing and acceptance cycle; quarry operating hours, lifetime tonnes and wear-part replacement cycles excluded. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery for sorting, screening, separating, washing, crushing, grinding, mixing or kneading earth, stone, ores or other mineral substances, in solid form, machinery for agglomerating, shaping or moulding solid mineral fuels, ceramic paste, unhardened cements, plastering materials or other mineral products in powder or paste form, machines for forming foundry moulds of sand `2b2bc8e3-915f-49a6-a0f0-db69b9bba60a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | family/model/BOM revision; serial/batch; jaw or screen function; stationary/electric/dry scope; frame alloy and bolted/welded connection; fitted wear plates or deck media; drive/exciter/bearings/suspension; guards/control included supply; retained grease/oil and empty/filled boundaries; measured net M; released acceptance criteria/test media; site/period; make-or-buy; fabrication/coating route; upstream providers and transport; packaging exclusion |

Declare all qualifiers in the dataset/reference comments. The broad public mineral-machinery identity is narrowed to this actual complete machine. Mass normalization does not establish functional comparability between crushers, screens or configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| electricity_units | fabrication_power; welding_power; coating_power; assembly_power; test_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured kWh using 3.6 MJ/kWh before normalization; retain delivered electricity voltage/provider and actual meter boundary. |
| hydraulic_volume | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve actual m3 of supplied fluid as inventory numerator. Retained fill mass in M uses calibrated weighing or measured same-temperature density; no universal density assumed. |

Weigh accepted complete fitted configuration, including wear surface, dedicated drive/guards/control and retained lubricants. Exclude transport supports/packaging, spare sets, test media, plant structures and independent auxiliary machines. Weigh the complete assembled accepted machine before any shipment disassembly; traceable component records then reconcile dismantled required parts back to that weighed machine and do not replace the M weighing. Unexplained missing parts cannot be filled as mass residual. No per-machine category weight is supplied.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Stock, prepared castings and finished components received at one manufacturer; upstream foundry/steel/motor manufacture not automatically foreground-covered. |
| starting_condition_role | Declared manufacturing module material/assembly starting point. |
| product_classification_scope | Complete stationary electrically driven jaw crushers and dry vibrating mineral screens manufactured for delivery in one declared configuration. This narrower category does not cover every activity in CPC44440. Keep crusher and screen families, frame connection, fitted drive, screen media/wear plates and shipment boundary separate. Manufacturing is the reference function; mineral throughput and processed-mineral quality are not the inventory denominator. |
| recursive_input_rule | Stop each bought-in assembly at documented supplied boundary; do not duplicate included bearings, shafts, coils, coatings or lubricant with separate raw-material exchanges. Internal fabricated transfers are not purchases. |
| upstream_dataset_requirement | Expanded assessment links actual compatible suppliers, inbound transport and waste treatment with material/route/geography disclosed. Missing provider links remain gaps; an identity UUID alone supplies no upstream impact. |
| disclosure | Declare site/period, fitted supply and disassembly, make-or-buy, outsourced operations, manufacturing utilities, acceptance media, packaging, shared demand, capital/bench treatment and exclusions. This foreground module alone does not establish complete cradle-to-gate coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | manufacturing | Include actual receipt-to-release processes, attributable utilities, consumables, losses, rework and tests; conditional routes require site records. Expand any actual unlisted material, chemical, waste or species before claiming inventory completeness. |  |
| boundary_frame | frame | Do not prescribe universal welded construction. Metso pinned/bolted and Sandvik welded frame cases demonstrate route alternatives; current drawings/work orders govern the actual machine. | metso-c-jaw-2024; sandvik-cj613-cj615 |
| boundary_screen | screen | Declare deck, exciter and drive inclusions. CVB flange-mounted vibrators/bearings and weld-free crossmembers are configuration examples only; screen wash/rinse equipment and mobile chassis are outside this dry stationary scope. | metso-cvb |
| boundary_downstream | mineral_use | Exclude customer crushing/screening energy, processed ore/aggregate production and lifetime wear demand. Include actual factory acceptance media and post-control emissions only. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Mechanical frame/part fabrication | conditional | Only actual site cutting/drilling/machining of declared incoming steel plate or cast frame; no foundry assumed. | foreground_production | per 1 kg reference flow |
| welding | Structural welding | conditional | Only released drawings and work orders establish welding; pinned/bolted structures can omit it. | foreground_production | per 1 kg reference flow |
| coating | Cleaning and protective coating | conditional | Only actual site cleaning/coating of this configuration; bought-in coated parts replace duplicate coating. | foreground_production | per 1 kg reference flow |
| assembly | Mechanical/electrical assembly | required | Fit actual frame, crushing or screening mechanism, drive, guards and declared controls; make-or-buy inclusions reconciled. | foreground_production | per 1 kg reference flow |
| acceptance | Acceptance testing and release | required | Apply current released model-specific tests, document actual test media and energy, then weigh accepted complete configuration. | foreground_production | per 1 kg reference flow |
| packing | Transport protection and dispatch | conditional | Only actual packing; packaging excluded from M and no default protective recipe. | foreground_production | per 1 kg reference flow |

Each row is one physically or chemically defined exchange; broad official display names are narrowed by the row note and actual specification, never a mixed bundle. This starting inventory is not a universal BOM: reconcile separate jaw stationary/moving/cheek plates, clamps/pins, pulley, mesh fasteners, deck/frame/suspension parts, seals/hoses/cables and every actual coating component, lubricant purge, machining fluid, captured fume and test dust. Add each separately; bought-in assemblies replace their contained site inputs. Distinguish not-applicable from missing evidence and measured zero.

### Process: Mechanical frame/part fabrication (`fabrication`)

Only actual site cutting/drilling/machining of declared incoming steel plate or cast frame; no foundry assumed.

#### Inputs

##### Product flows

###### Steel Plate (`steel_plate`)

Only actual hot-rolled low-alloy high-strength plate cut/drilled for frame side plates or supporting structure; retain grade/thickness and net issues. Other carbon/stainless grades require distinct identities. No universal plate grade prescribed.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Prepared cast-steel crusher frame section (`frame_casting`)

Only purchased frame casting received for site machining; specify alloy, geometry, supplied heat treatment and stock mass. Finished bought-in frame replaces duplicated casting stock and machining; on-site foundry is outside the starting condition.

- Selected flow: Prepared cast-steel crusher frame section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Alternating current (`fabrication_power`)

Meter actual mechanical cutting/drilling, turning and grinding with extraction; below-1-kV grid-average delivery, actual geography/provider. Thermal cutting, machining fluids and heat treatment require additional specific exchanges if present.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_offcuts`)

Weigh untreated low-alloy steel offcuts/chips exported from fabrication; segregate cast iron, manganese-rich alloy and oil-contaminated chips. Internal stock reuse is not an external waste exchange.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

###### Captured low-alloy steel grinding dust (`captured_dust`)

Only separately collected dust of documented composition; weigh handler-bound waste, not residual air emissions. Abrasive/mineral-contaminated dust needs its own composition-specific row.

- Selected flow: Captured low-alloy steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

##### Elementary flows

###### Particulate matter, particle size unspecified (`machining_pm`)

Only measured post-control particulate emitted to outdoor air, particle size and air subcompartment unspecified; no default emission factor, chemistry or assumption that every operation emits. Captured dust remains waste.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`

### Process: Structural welding (`welding`)

Only released drawings and work orders establish welding; pinned/bolted structures can omit it.

#### Inputs

##### Product flows

###### Solid low-alloy steel welding wire (`welding_wire`)

Only actual documented solid-wire welding of fabricated structure; retain alloy/diameter and issue/return mass. Flux-cored wire or stick electrodes are distinct products. Non-welded bolted frames omit this operation.

- Selected flow: Solid low-alloy steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Compressed gaseous argon (`shield_argon`)

Only when actual WPS supplies separate gaseous argon; measured mass withdrawn from cylinders with residual returns. Mixed shielding gas must be a separate declared mixture exchange; no pure-argon requirement imposed on steel welding.

- Selected flow: Compressed gaseous argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

###### Alternating current (`welding_power`)

Meter actual welding and extraction demand, including rework; delivered grid-average electricity below 1 kV. Add each measured fume species separately if present; no assumed fume factor.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding`

### Process: Cleaning and protective coating (`coating`)

Only actual site cleaning/coating of this configuration; bought-in coated parts replace duplicate coating.

#### Inputs

##### Product flows

###### Tap water (`wash_water`)

Only actual municipal potable-water cleaning; weigh demand or convert measured volume using documented site temperature/density. Reference is Mass, not Volume; water resources and direct natural abstraction are separate identities.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Solvent-based epoxy primer formulation (`epoxy_primer`)

Only actual supplier-defined primer part with specified solids, solvents and batch; quantify the supplied formulation mass. Separate hardener/topcoat/cleaner used at site need their own formulation rows; do not count contained solvents twice as purchased thinner.

- Selected flow: Solvent-based epoxy primer formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Xylene (`xylene_thinner`)

Only separately purchased liquid xylene thinner with actual mixed-isomer composition/purity documented; quantify delivered mass. The broad xylene product is narrowed to this supplied chemical, not a generic paint thinner or elementary emission. Ethylbenzene/other solvent additives must be disclosed separately.

- Selected flow: Xylene `55dcefce-e5b7-492d-9f02-5bd5a70c94a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_power`)

Meter actual washing/pumping, coating application, extraction and electric curing if performed; delivered below-1-kV grid-average supply. Gas-fired curing or purchased heat require separate carrier and measured species rows.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Aqueous steel-part washing effluent (`wash_effluent`)

Only actual effluent transferred for treatment; record water, suspended steel and cleaner content and weigh delivered waste. It is not a water resource or automatic direct emission to freshwater; treatment boundary disclosed.

- Selected flow: Aqueous steel-part washing effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Discarded solvent-based epoxy primer residue (`paint_residue`)

Weigh discarded actual primer residue including retained liquid; record solids/solvent and handler. Captured coating residue is not an air emission; unused returned primer is not waste.

- Selected flow: Discarded solvent-based epoxy primer residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Elementary flows

###### xylene (all isomers) (`xylene_air`)

Only actual xylene isomer-total CAS1330-20-7 emitted after capture to outdoor air with unspecified subcompartment; measure species mass or close a solvent-specific balance with documented purity, recovery, retained coatings and wastes. Never substitute indoor/urban/high-altitude identities or total VOC for xylene. No emitted fraction presumed.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Mechanical/electrical assembly (`assembly`)

Fit actual frame, crushing or screening mechanism, drive, guards and declared controls; make-or-buy inclusions reconciled.

#### Inputs

##### Product flows

###### Finished cast-steel crusher frame (`frame_finished`)

Only externally purchased complete frame including explicitly listed attached sections; replace its duplicated casting/plate fabrication. Site-built frame is internal transfer. Declare welded or pinned/bolted construction from current drawings.

- Selected flow: Finished cast-steel crusher frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished alloy-steel eccentric crusher shaft (`eccentric_shaft`)

Only separately purchased finished shaft for jaw-crusher drive; retain alloy/dimensions and included bearing boundary. Omit if already in a purchased pitman assembly.

- Selected flow: Finished alloy-steel eccentric crusher shaft
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished cast-steel crusher pitman body (`pitman`)

Only jaw-crusher separately bought pitman body, with included shaft/bearing boundary explicit; no duplication of contained subparts.

- Selected flow: Finished cast-steel crusher pitman body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished cast manganese-steel jaw plate (`jaw_plate`)

Only actual installed wear plate of declared manganese grade/profile; weigh each physical stationary or moving plate as separate exchange instance. Spare replacement sets are excluded from M unless independently declared extra products.

- Selected flow: Finished cast manganese-steel jaw plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel crusher toggle plate (`toggle_plate`)

Only configured finished toggle plate of actual steel specification; non-steel actual variants need a separate material-defined row.

- Selected flow: Finished steel crusher toggle plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished cast-iron crusher flywheel (`flywheel`)

Only actual finished cast-iron flywheel including machined/balanced state; not generic cast iron stock or wind-turbine pitch hardware.

- Selected flow: Finished cast-iron crusher flywheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Wire Mesh (`screen_mesh`)

Only actual separately fitted woven steel screening mesh; narrow broad metal mesh by steel grade, aperture, wire diameter and woven state. Quantify supplied mesh mass; synthetic panels/plate decks are separate physical exchanges.

- Selected flow: Wire Mesh `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished vibrating-screen exciter assembly (`exciter`)

Only externally supplied configured exciter with bearing/lubricant/shaft inclusions declared; do not duplicate contained bearings or oils.

- Selected flow: Finished vibrating-screen exciter assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Ball or roller bearings (`bearing`)

Only separately fitted complete steel spherical roller bearing; narrow the category identity to actual supplier type/material and measure each physical bearing. Bought-in exciter/pitman bearing inclusions replace this separate row.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished three-phase induction motor (`motor`)

Actual installed motor type/output/mounting and voltage declared; complete bought-in motor includes winding and rotor, not separate upstream copper inputs.

- Selected flow: Finished three-phase induction motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel helical compression spring (`spring`)

Only actual screen suspension or configured jaw tension spring of declared geometry; each physical spring quantified, no universal count or stiffness.

- Selected flow: Finished steel helical compression spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Conveyor or transmission belts or belting, of vulcanized rubber (`belt`)

Only actual vulcanized-rubber V transmission belt; narrow broad conveyor/transmission category to documented V profile, length and reinforcement. Each physical belt is one exchange; no conveyor service included.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Steel fasteners (`steel_bolt`)

Only one declared steel bolt specification crossing assembly boundary; actual strength/coating/dimensions and per-bolt mass recorded. Split nuts, washers, pins and each other fastener specification into separate rows; not a mixed fastening-kit mass.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel drive guard (`guard`)

Only separately bought finished steel guard; site-fabricated guard is internal transfer already represented by plate fabrication. Required installed guards and safety fittings enter M.

- Selected flow: Finished steel drive guard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished steel motor-control cabinet with electronics (`control`)

Only dedicated cabinet delivered as part of the accepted machine; record included drives, wiring and enclosure, exclude general plant controls. Not separate raw steel plus cabinet duplication.

- Selected flow: Finished steel motor-control cabinet with electronics
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Finished hydraulic jaw-setting power unit (`hydraulic_unit`)

Only actual fitted jaw-setting unit; document pump/motor/reservoir/valve inclusions and empty/filled state. It is not presumed for every jaw machine.

- Selected flow: Finished hydraulic jaw-setting power unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Hydraulic Fluid (`hydraulic_oil`)

Only separately filled formulated mineral hydraulic fluid with supplier grade/viscosity/additives and temperature recorded. Reference property is Volume: collect actual m3 without using mass as volume. For retained fill mass inside M use direct before/after weighing or supplier/site measured density at the same temperature; no database mean value is a generic density. Omit oil already contained in bought-in filled unit.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Formulated lithium-soap lubricating grease (`grease`)

Only separately issued actual grease of documented mineral base, thickener and grade; retained fill in M, purge/waste measured separately. Omit contained grease in bought-in bearings/assemblies.

- Selected flow: Formulated lithium-soap lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

###### Alternating current (`assembly_power`)

Meter lifting, fitting, tightening and electrical/control connection demand attributable to this configuration; low-voltage delivered grid supply. Include actual seals, nuts/washers, hoses, cables and fitted liners through additional physical-specific rows rather than mass residuals.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`

### Process: Acceptance testing and release (`acceptance`)

Apply current released model-specific tests, document actual test media and energy, then weigh accepted complete configuration.

#### Inputs

##### Product flows

###### Alternating current (`test_power`)

Meter actual factory acceptance/no-load and prescribed loaded-test demand, duration, failed tests and rework. Do not multiply nameplate kW by an invented duration or import operational quarry energy/throughput into manufacturing.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

###### Crushed limestone acceptance-test feed (`test_stone`)

Only when actual release protocol consumes such feed; document size/moisture and net new feed after reuse. Other test mineral species are separate rows; no loaded-stone test presumed for every machine.

- Selected flow: Crushed limestone acceptance-test feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

#### Outputs

##### Product flows

###### Machinery for sorting, screening, separating, washing, crushing, grinding, mixing or kneading earth, stone, ores or other mineral substances, in solid form, machinery for agglomerating, shaping or moulding solid mineral fuels, ceramic paste, unhardened cements, plastering materials or other mineral products in powder or paste form, machines for forming foundry moulds of sand (`finished_machine`)

Accepted complete configured stationary electric jaw crusher or dry vibrating screen with declared fitted drive/guards/wear surface/suspension/control and retained fluids. Broad public category is narrowed by actual metadata; no equivalence between crushing and screening functions by mass alone.

- Selected flow: Machinery for sorting, screening, separating, washing, crushing, grinding, mixing or kneading earth, stone, ores or other mineral substances, in solid form, machinery for agglomerating, shaping or moulding solid mineral fuels, ceramic paste, unhardened cements, plastering materials or other mineral products in powder or paste form, machines for forming foundry moulds of sand `2b2bc8e3-915f-49a6-a0f0-db69b9bba60a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Discarded crushed limestone test residue (`test_stone_waste`)

Only removed discarded residue sent to handler, moisture and contamination documented. Recirculated test stone is an internal reuse, and exported saleable stone is a distinct product with co-product treatment, not automatically waste.

- Selected flow: Discarded crushed limestone test residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`

### Process: Transport protection and dispatch (`packing`)

Only actual packing; packaging excluded from M and no default protective recipe.

#### Inputs

##### Product flows

###### Polyethylene film (`film`)

Actual PE protective film measured separately from net machine M; record formulation, thickness and net shipment issues.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Kiln-dried sawn coniferous timber, at mill (`timber`)

Only actual kiln-dried sawn coniferous transport blocking of declared species/moisture; quantify mass, not cubic metres. At-mill supply requires separate actual onward transport/provider linkage; no density conversion or heat-treatment/quarantine rule presumed.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | Prefer direct work-order issues and submeters. Partition shared machine/crane/extraction/coating/bench demand under cp_allocation using measured load and time or measured batch-specific demand; validate causal driver for each exchange and reconcile allocated plus excluded demand to original total. No fixed percentage or universal mass allocation prescribed. |  |
| allocation_variants | product_mix | Keep jaw and screen configurations separate. Do not allocate all shared burdens by machine count when mass, fabrication or test demand differs. A fallback mass/economic basis needs measured justification, uncertainty and sensitivity; review before reuse. |  |
| allocation_scrap | waste_and_test_media | Retain stock input and actual waste output without automatic avoided-metal/mineral credits. Internal reused stock/test stone remains internal. If test mineral output is genuinely sold as product, disclose independent output quality/quantity and justified co-product method instead of relabelling all residue waste. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted serial/configuration | same manufacturing period | same manufacturer and fitted supply boundary | accepted net mass per machine | calibration; BOM; fluid fill; component closure; signed release |
| cp_fabrication | fabrication | each atomic row in this process | measurement | steel grade/thickness; casting supplied condition; issues/returns; work orders; kWh; chips/dust; measured post-control particle mass | Weigh actual issues, valid stock returns and separately handled chip/dust streams; meter machine/extraction demand and monitor emitted mass with documented period, controls and size coverage. | kg; MJ | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_welding | welding | each atomic row in this process | measurement | WPS/joint map; wire alloy/form; shielding gas composition; cylinder issue/return mass; kWh; rejects/rework; fume capture/monitoring | Confirm actual welded versus bolted site route; weigh consumables and returned gas and meter actual welding/extraction; add individual fume and residue rows from actual monitoring. | kg; MJ | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_coating | coating | each atomic row in this process | measurement | primer components/solids/solvent purity; water mass or temperature/density/volume; issues/returns; retained coating; kWh; recovery; residue/effluent; xylene emitted mass | Retain supplier formulation and actual recipe; measure stock/returns, film retention, capture and waste; meter utilities. Species-specific monitoring or closed xylene balance must subtract documented recovery/retained/waste, without universal evaporated fraction or treating all VOC as xylene. | kg; MJ | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_assembly | assembly | each atomic row in this process | measurement | BOM/supplier; supplied included-part boundaries; each part mass/type; motor/frame route; separate grease and fluid volume/temperature; retained fill mass; kWh; serial | Use traceable receipts/issues/returns and weigh each physical supplied part; measure oil volume and retained mass separately, reconcile included bearings and lubricant and meter fitting/connection demand. | kg; MJ; m3 | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_acceptance | acceptance | each atomic row in this process | measurement | configuration/serial; signed test plan; mode/time; electrical/guard/control checks; alignment and vibration/speed results; pass/fail/rework; kWh; test stone size/moisture/net feed/reuse; residue handler; measured M | Retain current released model acceptance results and actual bench meter demand; weigh net new test feed and removed waste separately from recirculation. No nameplate-times-assumed-duration or quarry capacity imported. | kg; MJ | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_packing | packing | each atomic row in this process | measurement | PE formulation/thickness and mass; timber species/moisture/drying and mass; issues/returns; shipment serial | Weigh actual protective film and each blocking member separately, exclude from M, reconcile shipment; mass basis does not imply a volume/density conversion. | kg | each batch/work order/test; monthly reconciliation | one complete declared production year or justified shorter complete batch; same as accepted counts | same site/configuration; outsourcing declared | attributable exchange amount / accepted machines | calibration; supplier specification; stock/accepted-count closure; missing records |
| cp_allocation | manufacturing | shared_demand | measurement | total metered utility; measured load; actual machine/crane/bench time; products served; excluded demand | Submeter or measure shared load and causal operating time; substantiate why each driver tracks this demand and reconcile against total supply. | MJ; h | each shared batch; monthly reconciliation | same production interval | all consuming configurations and excluded operations | partition by measured causal demand; attributable amount / accepted machines | closure; submeter comparison; uncertainty; sensitivity; justified driver |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_plate; frame_casting; fabrication_power; steel_offcuts; captured_dust; machining_pm; welding_wire; shield_argon; welding_power; wash_water; epoxy_primer; xylene_thinner; coating_power; wash_effluent; paint_residue; xylene_air; frame_finished; eccentric_shaft; pitman; jaw_plate; toggle_plate; flywheel; screen_mesh; exciter; bearing; motor; spring; belt; steel_bolt; guard; control; hydraulic_unit; hydraulic_oil; grease; assembly_power; test_power; test_stone; test_stone_waste; film; timber | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Derive q_item before normalize_mass from matched configuration/period records: net issues after valid returns, attributable utility demand, or measured waste/species divided by accepted machine count. Include rejects and rework in burdens carried by accepted output, not the count of all starts. Preserve kg/M, MJ/M or m3/M numerators; never multiply or divide mass and volume by an assumed density. Keep utility unit conversions and measured allocation arithmetic as separate traceable calculations. Combine variants only with disclosed compatible scope and mass weighting after configuration-specific normalization.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Check material/alloy, supplied state, chemical composition, route, geography, reference property/unit and receiving medium. UUID supports identity only; blank identity and missing provider are distinct gaps. | supplier sheets; direct identity/property/unit audit |
| quality_complete | machine | Reconcile all fitted BOM parts and retained fluids to accepted net M, complete process consumables/utilities and separately tracked loss streams. Do not assign absent part weights from a residual. | BOM; calibrated weigh sheets; stock/material balances |
| quality_period | records | Declare representative complete period, factory, outsourcing, primary coverage, configuration changes, idle demand and uncertainty. Historical manufacturer cases inform architecture, not current production amounts. | work orders; calibration; acceptance records; evidence limits |
| quality_acceptance | release | Use actual signed model test plan and results for mechanism, alignment, drive, guards/control, electrical conformity and any prescribed loaded test. Brochure capacities and lifetime claims are not universal factory thresholds. | released specification; serial tests; calibrated bench |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require 1 kg output, measured cp_mass M, one accepted complete jaw/screen configuration and fitted supply reconciliation. Exclude spare sets, packing and test media from M; preserve retained fluid mass versus separately recorded oil volume. |  |
| validation_normalization | inventory | Every non-reference applicable row uses normalize_mass and its declared collection protocol; check matching period/configuration, division direction and numerator units. |  |
| validation_route | processes | Match conditional fabrication/welding/coating to actual work orders. Exclude duplicated finished frame/casting/plate and exciter/pitman-contained shaft/bearings/lubricant. Missing actual operations remain gaps before completeness claims. |  |
| validation_species | elementary_flows | Confirm particulate size coverage and xylene isomer-total CAS1330-20-7 with outdoor-air unspecified compartment and post-control mass. Captured solids/effluent remain waste; total VOC, indoor exposure and water-resource flows are not these emissions. |  |
| validation_coverage | dataset | Report measured/calculated/estimated/excluded/not-applicable/missing distinctly, reconcile accepted output and losses and check allocation closure. Passing projection/measurement checks does not approve science or establish cradle-to-gate completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing module for declared exact machine/period; upstream-connected assessment only with separately established suppliers/transport/treatment coverage. |
| excluded_use | Quarry/mineral processing services, operating energy/throughput or lifetime-normalized comparisons, generic crusher/screen equivalence and unsupported full cradle-to-gate claims. |
| required_metadata | PCR id; exact family/model/configuration/BOM; measured M/fitted fluids; acceptance criteria; site/period; frame/material routes; make-or-buy; process/energy boundaries; provider/transport links; packing; allocation; sources; version. |
| required_quality_disclosure | Primary measured coverage, gaps in identities/providers/amounts, excluded routes, source age and limits, conversions/allocation evidence, emissions monitoring, uncertainty and independent review status. |
| update_trigger | BOM or fitted supply change; revised frame/drive/coating route or acceptance criteria; supplier/energy change; new representative period; resolved identity or evidence gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| metso-c-jaw-2024 | handbook | Metso Nordberg C Series jaw crushers,4226-04-24, historical April2024 brochure, PDF/printed p.4. https://www.metso.com/globalassets/brochure-nordberg-c-series-4226-04-24-en-agg.pdf | Model-family-specific non-welded pinned/bolted steel-casting and bearing architecture only; no masses, power, capacities or lifetime adopted. |
| sandvik-cj613-cj615 | handbook | Sandvik CJ613/CJ615 Jaw crushers technical specification, TS5-1504/ENG ©2025, historical retained manufacturer edition, retrieved2026-10-05; PDF p.1 and PDF/printed p.3 Frame assembly. https://www.rockprocessing.sandvik/siteassets/products/stationary-crushers-and-screens/pdf/ts5-15~1.pdf | Independent maker counterexample: welded frame with cast-steel front/back, steel side plate and cast manganese wear plate; model-specific architecture, not universal material or rounded per-machine weight. |
| metso-cvb | handbook | Metso CVB Series inclined screens, manufacturer page dated updated Aug2026, retrieved2026-10-05, Durable screen design paragraphs. https://www.metso.com/portfolio/cvb-series/ | Configurable screen with flange-mounted vibrators/bearings and weld-free crossmembers; no service-life, angle/speed, mass or operational energy factor adopted. Wet/mobile offerings do not extend this dry stationary scope. |
