---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.graders-and-levellers-self-propelled
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Self-propelled graders and levellers

## 1. Scope and Applicability

This candidate covers new complete self-propelled graders and levellers whose principal function is grading/levelling earth, minerals or ores. It retains the full category, including verified configurations beyond a conventional motor grader. A towing tractor plus towed leveller, separately sold blade/attachment/part, bulldozer, scraper, roller, loader or excavator is outside this complete-product scope. A host with a temporary levelling attachment is not automatically a grader. Hybrid or ambiguous machines require principal-function and completion review. Later field service, moved soil, operation, maintenance and end-of-life are separate. Sources: `un-cpc3-graders`; `deere-g-series`; `komatsu-gd675`.

Deere documents welded box mainframe/drawbar, welded heat-treated circle with standard/premium bearing alternatives, high-carbon-steel moldboard and direct-drive transmission. Komatsu independently documents a rolled-ring-forged circle, formed/welded drawbar and torque-converter/lock-up powershift alternative. These are architecture examples, not a universal BOM or factory process. Do not infer an all-wheel-drive, electric or battery route without its own shipped BOM. Manufacturer operating masses include full fuel and operator; none is adopted as accepted net mass. Service refill capacity, blade pull, rated engine power, marketing savings, refrigerant nominal charge and field productivity do not quantify factory consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.graders-and-levellers-self-propelled |
| classification_refs | CPC 3.0 44422 |
| covered_products | New complete self-propelled graders and levellers with declared delivered scope |
| excluded_products | Towed levellers; separate blades/parts; other earthmoving categories; earthmoving service |
| representative_product | Declared wheeled diesel motor grader; other verified self-propelled levellers remain eligible |
| production_route | Actual make/buy; conditional fabrication/treatment; configuration-specific assembly; factory acceptance |
| market_state | New complete accepted machine at factory gate; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of declared complete grader/leveller configuration, not field grading service |
| How much | 1 kg accepted complete machine of same configuration |
| How well | Configuration-specific propulsion, steering, blade/levelling system and safety acceptance; mass does not imply equal levelling performance |
| How long or cycle | One manufacture and factory acceptance cycle; no generic lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Graders and levellers, self-propelled `45ddf592-7a5b-41ad-b2f2-a14a68816800` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function; model/configuration; propulsion; wheel/track; blade/circle/drawbar scope; transmission architecture; shipped options; each make/buy interface; retained fills; calibrated net mass; acceptance; factory/period; supply geography and voltage |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| native_basis | each exchange | Mass; Number of items; Net calorific value | kg; Item(s); MJ | Retain each native numerator: engine items are complete supplied units, never inferred engine mass; 1 kWh = 3.6 MJ; litres convert by actual own density/temperature only when needed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-completed materials or modules entering factory |
| starting_condition_role | foreground_input |
| product_classification_scope | Complete self-propelled grader or leveller, not attachment or earthmoving service |
| recursive_input_rule | Bought same-category completed host enters once upstream; disclose conversion/assembly state, cancel paired internal transfers |
| upstream_dataset_requirement | Match supplied completion, architecture, grade, chemistry, provider and geographic/temporal interface; disclose gaps |
| disclosure | Actual BOM, supplier scope, work orders, retained fill, tests and dispatch |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_factory | Include receiving, actual fabrication/treatment/assembly, attributable factory tests/rejects/rework and packaging with supplier inputs upstream; exclude later field use. | un-cpc3-graders |
| boundary_bom | Separate chassis, drawbar/circle/blade/cutting edges, propulsion/transmission, axle/tyre/brakes, hydraulics/cab/control and actual options. Bought complete modules embed their materials, fills and completed operations once; actual in-house manufacture replaces those modules with actual feedstocks and operations. | deere-g-series; komatsu-gd675 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Frame, drawbar and levelling-equipment fabrication | conditional | Actual work order and physical boundary; bought completed operations stay upstream | foreground | 1 kg reference flow |
| surface | Surface and thermal treatment | conditional | Actual work order and physical boundary; bought completed operations stay upstream | foreground | 1 kg reference flow |
| assembly | Complete configuration assembly | required | Actual work order and physical boundary; bought completed operations stay upstream | foreground | 1 kg reference flow |
| test_pack | Factory test, initial fill and dispatch | required | Actual work order and physical boundary; bought completed operations stay upstream | foreground | 1 kg reference flow |
| shared | Unassigned shared services | conditional | Actual work order and physical boundary; bought completed operations stay upstream | foreground | 1 kg reference flow |

Cards are conditional atomic exchanges, not a universal recipe. Each actual additional grade, separate circle/gear/torque-converter/valve/cutting-edge/wheel-rim/ripper/sensor, welding gas, heat-treatment medium, abrasive, solvent, DEF formulation, waste or emission species must have its own qualified row and collection record. Unknown is not zero; not_applicable requires physical absence evidence. OEM examples cannot establish factory grades, purchased quantities, tests or make/buy choices.

### Process: Frame, drawbar and levelling-equipment fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_fabrication`)

Only matching CN user-side grid-average below1kV supply. Measure electricity directly assigned to this process; exclude shared residual and other already assigned processes. Other geography/voltage needs its own matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:


###### Hot-rolled structural steel plate (`plate`)

Only certified actual frame/drawbar plate; grade, width and finished state must match. Supplier-fabricated chassis embeds plate upstream.

- Selected flow: Hot-rolled structural steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Steel flux-cored welding wire (`wire`)

Actual qualified welding procedure and filler grade; do not infer self-shielded wire or shielding-gas absence from a generic name.

- Selected flow: Steel flux-cored welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`scrap`)

Only untreated machining/forming steel scrap leaving the plant; oily chips require separately matching state and assay.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

##### Elementary flows

### Process: Surface and thermal treatment (`surface`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_surface`)

Only matching CN user-side grid-average below1kV supply. Measure electricity directly assigned to this process; exclude shared residual and other already assigned processes. Other geography/voltage needs its own matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:


###### Waterborne acrylic industrial coating (`paint`)

Actual coating formulation and process; supplier-coated parts embed treatment once upstream. Each thinner and actual solvent needs a separate atomic row.

- Selected flow: Waterborne acrylic industrial coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Process Water (`water`)

Actual treated industrial process water supply; identify treatment, quality, supplier and boundary; internal recirculation cancels.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Acrylic-coating wash wastewater (`wastewater`)

Actual discharged wash wastewater with own water fraction and species assays; not a sewerage service or pharmaceutical wastewater.

- Selected flow: Acrylic-coating wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

##### Elementary flows

### Process: Complete configuration assembly (`assembly`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_assembly`)

Only matching CN user-side grid-average below1kV supply. Measure electricity directly assigned to this process; exclude shared residual and other already assigned processes. Other geography/voltage needs its own matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:


###### Diesel engine (`engine`)

Only bought complete non-road compression-ignition engine compatible with actual grader specification and supply interface; native item count, not an invented engine mass.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader powershift transmission assembly (`transmission`)

Actual bought complete transmission; direct-drive and torque-converter variants remain distinct. Add actual torque converter as separate purchased unit when not embedded.

- Selected flow: Grader powershift transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader moldboard assembly (`blade`)

Bought complete actual moldboard only; do not bind bulldozer blade or complete host. Cutters, end bits and circle are included only when supplier scope proves it.

- Selected flow: Grader moldboard assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Variable-displacement hydraulic piston pump (`pump`)

Actual independent bought piston pump; not an unspecified centrifugal pump or complete hydraulic power unit.

- Selected flow: Variable-displacement hydraulic piston pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### New off-road pneumatic rubber tyre (`tyre`)

Only actual complete tyre for delivered running gear; no passenger-car tyre, green tyre or rubber powder substitute.

- Selected flow: New off-road pneumatic rubber tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader operator cab assembly (`cab`)

Actual supplied cab scope including declared glazing, ROPS/FOPS, seat and wiring; separately bought items remain separate.

- Selected flow: Grader operator cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader tandem axle assembly (`axle`)

Actual finished axle/final-drive scope; measure configuration and exclude double-counted embedded gears or housing materials.

- Selected flow: Grader tandem axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Hydraulic blade-lift cylinder (`cylinder`)

One actual cylinder identity with geometry/pressure and supply scope; other cylinders are additional distinct rows.

- Selected flow: Hydraulic blade-lift cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Steel-reinforced hydraulic hose (`hose`)

Actual construction, diameter, pressure and fittings; no generic plastic hose substitute.

- Selected flow: Steel-reinforced hydraulic hose
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Lead-acid starter battery (`battery`)

Only actual installed starter battery chemistry and completion; it does not establish electric traction.

- Selected flow: Lead-acid starter battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader blade-control electronic module (`control`)

Actual independent supplied controller; grade-control sensors and displays each need additional rows if not embedded.

- Selected flow: Grader blade-control electronic module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Grader wet-disc brake assembly (`brake`)

Actual independent bought brake unit; do not add again when axle supplier includes it.

- Selected flow: Grader wet-disc brake assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory test, initial fill and dispatch (`test_pack`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_test_pack`)

Only matching CN user-side grid-average below1kV supply. Measure electricity directly assigned to this process; exclude shared residual and other already assigned processes. Other geography/voltage needs its own matching identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:


###### Petroleum-based hydraulic oil (`oil`)

Actual oil grade/assay and retained fill versus flushed/test-consumed fractions; generic mineral/synthetic identity cannot prove the actual petroleum formulation.

- Selected flow: Petroleum-based hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Diesel-engine lubricating oil (`engineoil`)

Actual qualified grade added at factory; exclude supplier prefill already embedded in engine input.

- Selected flow: Diesel-engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Grader transmission lubricating oil (`gearoil`)

Actual transmission grade, retained fill, drained test oil and stocks; axle/tandem/circle lubricants require their own grade-specific exchanges.

- Selected flow: Grader transmission lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Prepared diesel-engine antifreeze coolant (`coolant`)

Actual engine-compatible mixture, concentration and supplier state; wind-farm maintenance coolant is not an automatic match.

- Selected flow: Prepared diesel-engine antifreeze coolant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Refrigerant R134a (`r134a`)

Only actual R134a cab-air-conditioning route; separately measured retained charge, recovered charge and factory losses, never OEM nominal charge as default.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Diesel fuel (`diesel`)

Actual generic purchased gas oil; independently establish grade/formulation/provider/density/heating value. Separate retained delivered fuel from measured burned test fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Wooden pallet (`pallet`)

One actual wooden load board when used for separately supplied equipment; not assumed support for every whole grader. Other packing identities need additional atomic rows.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graders and levellers, self-propelled (`finished_machine`)

Accepted complete declared self-propelled grader or leveller; calibrated net mass excludes operator, packaging, rejected units and consumed test media; actual retained delivered fills and options are disclosed.

- Selected flow: Graders and levellers, self-propelled `45ddf592-7a5b-41ad-b2f2-a14a68816800`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Waste oil (`wasteoil`)

Actual spent lubricating/cutting oil as generated from factory work; no treated recovery product, mixed solvent or coolant automatically substituted.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

##### Elementary flows

###### carbon dioxide (fossil) (`co2`)

Only measured/evidenced fossil CO2 from actual factory combustion to ordinary unspecified air; no long-term compartment or downstream-use emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### carbon monoxide (fossil) (`co`)

Actual measured molecular fossil CO to ordinary unspecified air; carbon closure does not determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Nitrogen dioxide to air (`no2`)

Actual molecular NO2 measurement, not NOx as NO2-equivalent or nitrite; other actual species require separate rows.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### HFC-134a to air (`r134a_air`)

Only actual molecular R134a factory leakage after retention/recovery/stock reconciliation; product charge is not release.

- Selected flow: HFC-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

### Process: Unassigned shared services (`shared`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Only matching CN user-side grid-average below1kV supply. Record process assignments and the remaining attributable shared residual without double counting; other geography/voltage requires its own identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_direct | Assign measured work-order exchanges directly to configuration; split shared causally using measured machine-hours/work/orders where justified. State driver, scope, uncertainty and alternatives; no universal mass or value allocation factor. |  |
| allocation_rework | Keep attributable reject/rework/test burden with accepted output; rejected product and consumed test medium are not accepted denominator. Waste outputs receive no automatic substitution credit; disclose recovery boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | accepted_reference | weighing_record | model; configuration; serial; accepted net mass M; Naccepted; Dnet; retained fill; scale; acceptance | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.  | kg | each accepted unit | same production period | same factory/configuration | accepted net mass per machine | calibration, serial and acceptance evidence |
| cp_fabrication | fabrication | atomic_exchanges | production_record | exchange; Qattr; configuration; period; Naccepted; native units; provider; opening/closing stocks; WIP; returns; make/buy; retention; own assay | Use calibrated weighing/meters, actual BOM, certificates/SDS, work orders and supplier interfaces; measure each retained fill separately from burned/drained test consumption and recirculation. Preserve engine item count and actual complete scope. | kg; Item(s); MJ | batch and meter interval | same production period | same factory/configuration | attributable exchange amount / accepted machines | meters, calibration, certificates, stocks, sampling, allocation uncertainty |
| cp_surface | surface | atomic_exchanges | production_record | exchange; Qattr; configuration; period; Naccepted; native units; provider; opening/closing stocks; WIP; returns; make/buy; retention; own assay | Use calibrated weighing/meters, actual BOM, certificates/SDS, work orders and supplier interfaces; measure each retained fill separately from burned/drained test consumption and recirculation. Preserve engine item count and actual complete scope. | kg; Item(s); MJ | batch and meter interval | same production period | same factory/configuration | attributable exchange amount / accepted machines | meters, calibration, certificates, stocks, sampling, allocation uncertainty |
| cp_assembly | assembly | atomic_exchanges | production_record | exchange; Qattr; configuration; period; Naccepted; native units; provider; opening/closing stocks; WIP; returns; make/buy; retention; own assay | Use calibrated weighing/meters, actual BOM, certificates/SDS, work orders and supplier interfaces; measure each retained fill separately from burned/drained test consumption and recirculation. Preserve engine item count and actual complete scope. | kg; Item(s); MJ | batch and meter interval | same production period | same factory/configuration | attributable exchange amount / accepted machines | meters, calibration, certificates, stocks, sampling, allocation uncertainty |
| cp_test_pack | test_pack | atomic_exchanges | production_record | exchange; Qattr; configuration; period; Naccepted; native units; provider; opening/closing stocks; WIP; returns; make/buy; retention; own assay | Use calibrated weighing/meters, actual BOM, certificates/SDS, work orders and supplier interfaces; measure each retained fill separately from burned/drained test consumption and recirculation. Preserve engine item count and actual complete scope. | kg; Item(s); MJ | batch and meter interval | same production period | same factory/configuration | attributable exchange amount / accepted machines | meters, calibration, certificates, stocks, sampling, allocation uncertainty |
| cp_shared | shared | atomic_exchanges | production_record | exchange; Qattr; configuration; period; Naccepted; native units; provider; opening/closing stocks; WIP; returns; make/buy; retention; own assay | Use calibrated weighing/meters, actual BOM, certificates/SDS, work orders and supplier interfaces; measure each retained fill separately from burned/drained test consumption and recirculation. Preserve engine item count and actual complete scope. | kg; Item(s); MJ | batch and meter interval | same production period | same factory/configuration | attributable exchange amount / accepted machines | meters, calibration, certificates, stocks, sampling, allocation uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_denominator | reference and inventory | For one configuration/common period Qattr includes attributable reject/rework/test burdens; Naccepted is accepted complete count; Dnet sums calibrated accepted net masses; M = Dnet/Naccepted; q_item = Qattr/Naccepted; q_ref = Qattr/Dnet. Exclude packaging, operator, rejected units, consumed test load/media and other configurations from Dnet; reconcile WIP and stocks. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_make_buy | each BOM item | Reconcile actual part number, delivered completion/grade/assay, provider and make/buy. Bought engine/cab/axle/blade embeds supplier materials/processes/fills once; partial parts record remaining actual operations. Pair/cancel internal transfers and reconcile accepted retained BOM plus scrap, rework, returns and stocks; no invented material shares. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_fills | first fill and tests | Each fuel/oil/coolant/refrigerant/DEF identity reconciles own incoming mass/volume, supplier embedded prefill, opening/closing stocks, retained delivery, measured factory consumption, recovered/drained material and release. Retained delivery and burned test fuel are distinct fates; never apply service refill capacity as actual factory charge. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_utilities | meters and shared services | Same-period imports plus actual on-site generation minus exports/storage changes reconcile assigned fabrication/treatment/assembly/test/dispatch, evidenced conversion losses and unassigned residual. Shared rows only allocate the residual; never add total meters to subprocess meters or clip negative residuals. Investigate period/unit/calibration/allocation uncertainty. Internal energy transfers cancel; supplier boiler fuel is not fictional on-site combustion. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_water | each physical water stream | Each stream uses own measured gross mass, water fraction and documented density at actual temperature if collected by volume. Reconcile input moisture/process/coolant water with retained water, wet scrap/sludge, wastewater, evaporation, stocks and reaction water production/consumption. Paired returns cancel; investigate combined sampling/measurement uncertainty, no universal tolerance. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_species | each material and emission species | Each element/species term uses its own gross mass and own assay/concentration, wet/dry basis, stocks, reaction and returns. Gross steel/sludge is not contained iron/carbon. Solvent retention, recovery, capture-media/wastewater and actual destruction are distinct non-air fates; an unexplained residual never becomes air. Species-specific post-control concentration times matched gas/liquid flow over same period needs actual state/unit corrections and independent fugitive evidence. Carbon closure cannot derive CO/NOx; molecular NO2 differs from NOx as NO2 equivalent. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |
| quality_identity | each exchange | Declare actual collected/calculated/not_applicable/unknown/missing status and each identity/source/range gap. Match type, supplied state, chemistry/CAS, classification, native property/unit and exact official bilingual name; generic label does not prove grade. No universal mass, recipe, loss, factor or service life. | Actual same-period BOM, meters, calibrated weighing, assays, stocks, work orders and supplier evidence |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Verify complete self-propelled grader/leveller principal function and delivered configuration; exclude towed/attachment/other earthmoving categories; a motor-grader example does not narrow the category. | un-cpc3-graders; deere-g-series; komatsu-gd675 |
| validate_measurement | Require positive finite accepted count/net mass and same-configuration q_item-to-q_ref conversion with each native numerator preserved. |  |
| validate_denominator | For one configuration/common period Qattr includes attributable reject/rework/test burdens; Naccepted is accepted complete count; Dnet sums calibrated accepted net masses; M = Dnet/Naccepted; q_item = Qattr/Naccepted; q_ref = Qattr/Dnet. Exclude packaging, operator, rejected units, consumed test load/media and other configurations from Dnet; reconcile WIP and stocks. |  |
| validate_make_buy | Reconcile actual part number, delivered completion/grade/assay, provider and make/buy. Bought engine/cab/axle/blade embeds supplier materials/processes/fills once; partial parts record remaining actual operations. Pair/cancel internal transfers and reconcile accepted retained BOM plus scrap, rework, returns and stocks; no invented material shares. |  |
| validate_fills | Each fuel/oil/coolant/refrigerant/DEF identity reconciles own incoming mass/volume, supplier embedded prefill, opening/closing stocks, retained delivery, measured factory consumption, recovered/drained material and release. Retained delivery and burned test fuel are distinct fates; never apply service refill capacity as actual factory charge. |  |
| validate_utilities | Same-period imports plus actual on-site generation minus exports/storage changes reconcile assigned fabrication/treatment/assembly/test/dispatch, evidenced conversion losses and unassigned residual. Shared rows only allocate the residual; never add total meters to subprocess meters or clip negative residuals. Investigate period/unit/calibration/allocation uncertainty. Internal energy transfers cancel; supplier boiler fuel is not fictional on-site combustion. |  |
| validate_water | Each stream uses own measured gross mass, water fraction and documented density at actual temperature if collected by volume. Reconcile input moisture/process/coolant water with retained water, wet scrap/sludge, wastewater, evaporation, stocks and reaction water production/consumption. Paired returns cancel; investigate combined sampling/measurement uncertainty, no universal tolerance. |  |
| validate_species | Each element/species term uses its own gross mass and own assay/concentration, wet/dry basis, stocks, reaction and returns. Gross steel/sludge is not contained iron/carbon. Solvent retention, recovery, capture-media/wastewater and actual destruction are distinct non-air fates; an unexplained residual never becomes air. Species-specific post-control concentration times matched gas/liquid flow over same period needs actual state/unit corrections and independent fugitive evidence. Carbon closure cannot derive CO/NOx; molecular NO2 differs from NOx as NO2 equivalent. |  |
| validate_identity | Declare actual collected/calculated/not_applicable/unknown/missing status and each identity/source/range gap. Match type, supplied state, chemistry/CAS, classification, native property/unit and exact official bilingual name; generic label does not prove grade. No universal mass, recipe, loss, factor or service life. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing foreground package and process/lifecyclemodel projection for declared configuration |
| excluded_use | Field levelling service; universal functional equivalence by mass; unreviewed configuration substitution |
| required_metadata | principal function; configuration/BOM; make/buy; blade/circle/transmission scope; retained fills; factory/period; calibrated mass; tests; provider/energy interfaces |
| required_quality_disclosure | identity/route/source/range gaps; uncertainty; factory evidence; distinction between manufacturer specification and measurement |
| update_trigger | architecture, principal function, scope, grade, supplier, route or energy interface changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-graders | official_guidance | UNSD Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025, pp234–235: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full44422 and adjacent complete/blade/nonself-propelled scope only |
| deere-g-series | handbook | John Deere Motor Grader 4WD G-Series620G/GP670G/GP770G/GP870G/GP, DKAGGDR (20-03), pp14–16: https://www.deere.com/assets/pdfs/region-1/campaigns/620-670-770-870-g-gp-motor-graders-2021.pdf | Welded structures, circle alternatives, direct-drive and retained-fluid interfaces; operating-weight exclusions; no factory quantities |
| komatsu-gd675 | handbook | Komatsu GD675-6 Motor Grader EU Stage IV Engine, EENSS20153 07/2017, pp6,13–14: https://www.komatsu.eu/Assets/GetBrochureByProductName.aspx?id=GD675-6&langID=en | Levelling equipment, ring-forged circle, torque-converter alternative and mass qualifiers; not universal route or charge |
