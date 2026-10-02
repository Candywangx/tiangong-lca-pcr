---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dumpers-designed-for-off-highway-use
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Manufacture of off-highway dumpers


## 1. Scope and Applicability

This rule covers new complete off-highway dumpers at the factory gate: actual rigid-frame trucks, articulated haulers and compact site dumpers with installed dump body, tipping system and shipped configuration. An off-road chassis or operating location alone does not establish principal product identity; road freight trucks, water/fuel-service trucks, tractors, separately sold bodies, dumper trailers and replacement parts need separate principal-function review. Later ore/site hauling service, payload, operation fuel, maintenance and end-of-life are outside factory manufacture.

The Volvo A40 original documents diesel engine, torque converter/powershift drive, high-strength welded frame, HB450 body plate and hydraulic tipping; the body material does not establish frame grade. Cat 777F supplies a rigid mild-steel frame with incorporated castings/forgings and contrasting body/liner systems; these do not establish in-house foundry ownership. Wacker DW15e supplies counterevidence to a diesel-only boundary: compact electric dumper with separate drive/hydraulic motors, battery, onboard charger and braking recovery. Actual diesel-electric or hybrid machines retain both installed engine and electric systems; electronic control alone does not prove traction battery. These examples support configurations, not universal mass, thickness, manufacturing energy, yield, lifetime or emissions factors. Missing UUID cannot exclude an electric route. Sources: `volvo-a40-2025`; `wacker-dw15e`; `cat-777f`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dumpers-designed-for-off-highway-use |
| classification_refs | CPC 3.0 44428 |
| covered_products | New complete rigid, articulated or compact off-highway dumper |
| excluded_products | Road trucks; water/service vehicles; separate chassis, bodies and parts; hauling service |
| representative_product | Diesel articulated dumper with declared body/propulsion; actual rigid and compact electric routes retained |
| production_route | Actual make/buy, conditional fabrication/treatment, assembly and acceptance |
| market_state | Accepted new machine at factory gate; transport packaging separate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of declared dumper configuration |
| How much | 1 kg accepted complete machine of same configuration |
| How well | Actual body, steering, tipping, propulsion and safety acceptance; mass does not ensure equivalence across payload capability |
| How long or cycle | One manufacture and factory acceptance cycle; no universal lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dumpers designed for off-highway use `ee6a6a71-ce11-4cd2-baa6-430c2e77a5a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; rigid/articulated/compact; principal function; diesel/diesel-electric/battery-electric/actual hybrid; body and liner; battery chemistry/supply interface; make/buy; options; net mass/retained fluids; plant/period; acceptance; supply geography/voltage |

Declare these qualifiers in the foreground data package; missing qualifiers make its reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| material_basis | physical material and species records | Mass | kg | Each material/species term uses its own assay and wet/dry basis; gross metal mass is not contained iron or another species. |
| energy_basis | electricity and fuels | Net calorific value | MJ | 1 kWh = 3.6 MJ; fuels need actual heating value; rated power is not factory electricity. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-completed materials/components entering factory |
| starting_condition_role | foreground_input |
| product_classification_scope | Complete off-highway dumper and actual shipped body/systems |
| recursive_input_rule | Bought same-category machine/host enters upstream once; disclose assembly/conversion/rework and do not recreate embedded manufacture |
| upstream_dataset_requirement | Match actual grade, module boundary, state, supply interface, geography/year; disclose gaps |
| disclosure | Per-component make/buy matrix, actual body/tyres, propulsion/battery, fluids, tests and packaging |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_factory | Include receiving, actual manufacture/assembly, upstream purchases, factory tests/rework and packaging; later hauling service separate. | volvo-a40-2025; wacker-dw15e; cat-777f |
| boundary_make_buy | Reconcile each frame/body, engine, transmission, axle, pump/cylinder, motor, battery, tyre and cab make/buy. Completed purchases include embedded materials, fluids and operations upstream once. In-house manufacture records actual separate grade/chemistry inputs and operations; paired internal transfers cancel. | volvo-a40-2025; wacker-dw15e; cat-777f |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Frame and dump-body fabrication | conditional | Actual in-house cutting, forming, machining and welding; supplier-completed assemblies remain upstream. | foreground | 1 kg reference flow |
| surface | Surface and thermal treatment | conditional | Actual work-order treatment; no assumed universal paint or heat treatment. | foreground | 1 kg reference flow |
| assembly | Architecture-specific dumper assembly | required | Actual rigid/articulated/compact propulsion, steering, tipping and delivered configuration. | foreground | 1 kg reference flow |
| test_pack | Factory acceptance, first fill and dispatch | required | Factory acceptance only, including actual test fuel or charging. | foreground | 1 kg reference flow |
| shared | Unassigned shared services | conditional | Only measured attributable residual after process assignments. | foreground | 1 kg reference flow |

Cards are conditional atomic exchanges, not a recipe. Actual in-house casting, forging, heat treatment, powder/waterborne coating, tyre, motor or battery manufacture requires work-order branches with separate concrete alloy grades, resin, coating, solvent, electrolyte, copper conductor, magnet, casing, refrigerant, fuels and each waste/emission. Never count a completed purchased module together with its embedded material inputs. The example battery pack does not narrow the category; other actual chemistries/supplied models require explicit identity. Distinguish not_applicable, unknown, missing and zero; UUID gaps cannot remove real routes.

### Process: Frame and dump-body fabrication (`fabrication`)

#### Inputs

##### Product flows

###### S355J2 structural steel plate (`s355_plate`)

Only if mill certificate confirms this frame grade; other actual grades have separate rows. A40 high-strength frame description does not establish S355J2.

- Selected flow: S355J2 structural steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### HB450 abrasion-resistant steel plate (`hb450_plate`)

Only actual HB450 dump-body plate, supported for the A40 example; grade is not universal across bodies or frames. Measure cutting loss.

- Selected flow: HB450 abrasion-resistant steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `volvo-a40-2025`

###### ER70S-6 steel welding wire (`wire`)

Only certificate-confirmed welding consumable; measure issues and stocks.

- Selected flow: ER70S-6 steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Argon shielding gas (`argon`)

Only actual argon supply; match purity, delivery state and measured consumption.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Carbon dioxide shielding gas (`shield_co2`)

Actual separately supplied CO2; supply is not an elementary emission.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Water-miscible mineral-oil cutting fluid concentrate (`cutting_fluid`)

Only actual SDS-confirmed concentrate; dilution water is a separate exchange.

- Selected flow: Water-miscible mineral-oil cutting fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `jrc-metalworking-2020`

###### Process water (`water_fab`)

Actual cleaning, dilution or cooling makeup; measure moisture and paired internal returns.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Alternating current (`electricity_fabrication`)

Only matching CN 1–35 kV grid-average consumer supply; other supply requires matching identity. Actual assigned process demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
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

###### Segregated steel machining scrap (`scrap`)

Measure steel scrap separately with own oil/water fractions and receiving recovery provider.

- Selected flow: Segregated steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `jrc-metalworking-2020`

###### Spent mineral-oil cutting emulsion (`spent_emulsion`)

Measure wet waste, own water/oil assays and actual treatment provider.

- Selected flow: Spent mineral-oil cutting emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `jrc-metalworking-2020`

##### Elementary flows

### Process: Surface and thermal treatment (`surface`)

#### Inputs

##### Product flows

###### Natural gas (`gas`)

Conditional actual oven/thermal fuel; use delivered gas composition, heating value and provider, not machine rated power.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Steel shot blasting abrasive (`abrasive`)

Only actual steel-shot preparation route; record recirculation, replenishment and captured fines.

- Selected flow: Steel shot blasting abrasive
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Solvent-borne epoxy coating (`paint`)

Only actual SDS-confirmed formulation; do not impose epoxy on powder-coated, waterborne or uncoated parts.

- Selected flow: Solvent-borne epoxy coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Xylene thinner (`xylene`)

Only actual added xylene; reconcile embedded solvent separately and confirm isomer/specification.

- Selected flow: Xylene thinner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Alternating current (`electricity_surface`)

Only matching CN 1–35 kV grid-average consumer supply; other supply requires matching identity. Actual assigned process demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
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

###### Epoxy paint sludge (`paint_sludge`)

Conditional wet waste with own solids, water and solvent assays; actual treatment provider.

- Selected flow: Epoxy paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Captured iron-bearing blasting dust (`dust`)

Actual captured dust, own iron assay and wet/dry basis; capture is not an air release.

- Selected flow: Captured iron-bearing blasting dust
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

###### Xylene to air (`xylene_air`)

Actual species-specific release after product retention, recovery, capture-media, stocks, destruction and non-air residues are reconciled.

- Selected flow: Xylene to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

### Process: Architecture-specific dumper assembly (`assembly`)

#### Inputs

##### Product flows

###### Complete dumper frame assembly (`frame`)

Bought completed frame only; replaces embedded steel, welding, machining and coating already supplied.

- Selected flow: Complete dumper frame assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Complete dumper dump-body assembly (`body`)

Bought completed body only; include actual steel/rubber liner and tailgate scope upstream once.

- Selected flow: Complete dumper dump-body assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Complete diesel engine assembly (`engine`)

Diesel or actual hybrid only; supplier-completed engine and included fluids counted once.

- Selected flow: Complete diesel engine assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Complete powershift transmission assembly (`transmission`)

Actual mechanical-drive route, including declared torque-converter interface.

- Selected flow: Complete powershift transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Complete hydrostatic transmission assembly (`hydrostatic`)

Actual hydrostatic route only; electric supply does not by itself exclude hydraulics.

- Selected flow: Complete hydrostatic transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Diesel-electric traction generator (`generator`)

Only an actual verified diesel-electric or hybrid configuration, not inferred from control electronics.

- Selected flow: Diesel-electric traction generator
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Electric traction motor (`motor`)

Actual supplied traction motor, distinct from hydraulic-drive motor; do not expand embedded copper or magnets when bought complete.

- Selected flow: Electric traction motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Electric hydraulic-drive motor (`hydraulic_motor`)

Actual separate motor powering hydraulics in an electric configuration.

- Selected flow: Electric hydraulic-drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Traction inverter assembly (`inverter`)

Actual supplied power electronics, with technology and interface declared.

- Selected flow: Traction inverter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### DW15e traction battery pack (`battery`)

Concrete compact-electric example only; actual chemistry, model, supplied casing, BMS and thermal scope must be documented. No chemistry or universal pack mass inferred from website.

- Selected flow: DW15e traction battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Onboard traction battery charger (`charger`)

Only actual shipped charger; external customer charger excluded unless delivered in declared product scope.

- Selected flow: Onboard traction battery charger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Complete dumper axle assembly (`axle`)

Actual axle/differential/final-drive scope; avoid adding embedded gears or brakes already inside purchased axle.

- Selected flow: Complete dumper axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`

###### Articulated dumper rotating hitch assembly (`hitch`)

Articulated route only; actual pivot, bearing and seal scope.

- Selected flow: Articulated dumper rotating hitch assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`

###### Rubber pneumatic off-highway dumper tyre (`tyre`)

Actual delivered tyre carcass and tread specification; not generic road-truck tyre.

- Selected flow: Rubber pneumatic off-highway dumper tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Steel wheel rim (`rim`)

Only separately supplied rim, not an additional mass when included in complete wheel.

- Selected flow: Steel wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Hydraulic tipping pump (`pump`)

Actual bought pump, or actual in-house pump manufacturing branch.

- Selected flow: Hydraulic tipping pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`

###### Hydraulic dump-body lifting cylinder (`cylinder`)

Actual tipping-cylinder count and supplied oil interface; no universal number inferred across dumpers.

- Selected flow: Hydraulic dump-body lifting cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Hydraulic steering cylinder (`steering`)

Actual steering cylinder separately supplied; distinguish from tipping cylinders.

- Selected flow: Hydraulic steering cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`

###### Reinforced hydraulic hose (`hose`)

Actual hose model and fittings; exclude items embedded in purchased hydraulic block.

- Selected flow: Reinforced hydraulic hose
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Complete dumper operator cab (`cab`)

Actual cab route; compact open operator station recorded separately instead of fictitious cab.

- Selected flow: Complete dumper operator cab
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `cat-777f`

###### Open dumper operator station assembly (`station`)

Actual compact configuration supplied station, controls and protective structures.

- Selected flow: Open dumper operator station assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `wacker-dw15e`

###### Dumper electronic control unit (`ecu`)

Actual distinct purchased controller, not whole electronic basket.

- Selected flow: Dumper electronic control unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Dumper wiring harness (`harness`)

Actual harness assembly; purchased cab/controller embedded wiring excluded here.

- Selected flow: Dumper wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Dumper cooling radiator assembly (`radiator`)

Actual radiator/thermal configuration; purchased module included parts counted once.

- Selected flow: Dumper cooling radiator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources:

###### Alternating current (`electricity_assembly`)

Only matching CN 1–35 kV grid-average consumer supply; other supply requires matching identity. Actual assigned process demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

###### Finished steel frame casting (`frame_casting`)

Actual independently bought casting with certificate-confirmed alloy and delivered machining state; exclude when included in complete frame. Supplier casting burdens remain upstream; actual in-house foundry uses separate charge, mould, furnace, slag and species records.

- Selected flow: Finished steel frame casting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-777f`

###### Finished steel frame forging (`frame_forging`)

Actual independently bought forging with its own alloy/certificate and machining state; no assumed Cat forging count. In-house forging records actual billet, heating, pressing, scale and energy instead.

- Selected flow: Finished steel frame forging
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-777f`

###### Oil-pneumatic dumper suspension cylinder (`suspension`)

Actual rigid suspension design only, separate from lifting/steering cylinders; purchased oil and nitrogen prefill remain included upstream once.

- Selected flow: Oil-pneumatic dumper suspension cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-777f`

###### Hydraulic return oil filter assembly (`filter`)

Actual separately supplied return filter; purchased hydraulic module embedded filter is not added again.

- Selected flow: Hydraulic return oil filter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `volvo-a40-2025`

###### Rubber dump-body wear liner (`liner`)

Actual separately supplied rubber liner with formulation/specification and mounting scope; omit here if bought body already contains liner.

- Selected flow: Rubber dump-body wear liner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-777f`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance, first fill and dispatch (`test_pack`)

#### Inputs

##### Product flows

###### Ultra-low-sulfur diesel fuel (`diesel`)

Actual factory test consumption and delivered retained fuel separately reconciled; density and heating value measured if converting units.

- Selected flow: Ultra-low-sulfur diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### ISO VG 46 mineral hydraulic oil (`hydraulic_oil`)

Only actual oil specification; record fill, drained recovery and supplier-prefilled volumes, never use nominal tank capacity.

- Selected flow: ISO VG 46 mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### SAE 15W-40 engine lubricating oil (`engine_oil`)

Conditional actual engine lubricant; replace with actual distinct grade when different.

- Selected flow: SAE 15W-40 engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Ethylene glycol engine coolant (`coolant`)

Only actual declared coolant formulation and water fraction; supplier fill counted once.

- Selected flow: Ethylene glycol engine coolant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Aqueous urea exhaust-treatment solution (`urea`)

Only actual SCR factory tests/retained fill; record actual concentration, not assumed use-phase demand.

- Selected flow: Aqueous urea exhaust-treatment solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `volvo-a40-2025`

###### Sawn softwood packaging timber (`wood`)

Actual dispatch wood, separate from accepted net machine denominator.

- Selected flow: Sawn softwood packaging timber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Low-density polyethylene packaging film (`film`)

Actual dispatch film measured separately; no gross-mass denominator.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Alternating current (`electricity_test_pack`)

Only matching CN 1–35 kV grid-average consumer supply; other supply requires matching identity. Actual assigned process demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dumpers designed for off-highway use (`finished_machine`)

Accepted complete dumper with actual dump body, installed systems/options and specified retained fluids, excluding payload and transport packaging.

- Selected flow: Dumpers designed for off-highway use `ee6a6a71-ce11-4cd2-baa6-430c2e77a5a6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `volvo-a40-2025`; `wacker-dw15e`; `cat-777f`

##### Waste flows

##### Elementary flows

###### Carbon dioxide, fossil, to air (`test_co2`)

Actual test fuel carbon and complete carbon outputs or applicable measured test evidence.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Carbon monoxide to air (`test_co`)

Species-specific factory test measurement or applicable factor; carbon closure alone cannot determine CO.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources:

###### Nitrogen oxides to air (`test_nox`)

Record actual NO and NO2 species masses separately, or explicitly declared NOx-as-NO2-equivalent reporting with molar-mass conversion. Equivalent mass is not actual pure NO2 mass; use a matching flow projection and retain species composition.

- Selected flow: Nitrogen oxides to air
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

###### Process water (`water_shared`)

Only allocated unassigned water residual; not whole-site total added to fabrication water.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources:

###### Purchased process steam (`steam`)

Actual imported steam only; supplier enthalpy, pressure/temperature/dryness and condensate returns use common datum.

- Selected flow: Purchased process steam
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_purchased_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_heat`
- Sources:

###### Alternating current (`electricity_shared`)

Only matching CN 1–35 kV grid-average consumer supply; other supply requires matching identity. Only attributable unassigned residual after all process assignments.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
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

###### Metal-bearing process wastewater (`wastewater`)

Actual wet wastewater with own water fraction, metal concentrations and receiving treatment interface.

- Selected flow: Metal-bearing process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_separate | First separate same-configuration work orders/submeters; allocate shared load by measured causal drivers. Payload, rated power and ore tonne-km cannot replace manufacturing collection. |  |
| allocation_losses | Retain reject/rework and waste burdens; accepted denominator excludes rejected mass, packaging and other configurations. Connect waste to actual providers; no default avoided virgin-material credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference_product | weighing_record | model; configuration; serial number; accepted net mass M; accepted count N | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | per accepted unit | same production period | actual shipped host, installed equipment and specified retained fluids | accepted net mass per machine | calibration, tare, configuration, retained fluid and acceptance records |
| cp_fabrication | fabrication | atomic_exchanges | production_record | exchange identity; Q; N; configuration; period; meter units; opening/closing stock; own assay; wet/dry basis; provider; route | Meters, calibrated weighing, procurement, work orders, sampling and provider records; include reject/rework, separate test fuel/charging and retained fill. | MJ for energy; kg for mass | per batch and meter interval | same production period | same factory/delivered configuration | attributable exchange amount / accepted machines | measurements, sampling, stocks, allocation, supply and uncertainty |
| cp_surface | surface | atomic_exchanges | production_record | exchange identity; Q; N; configuration; period; meter units; opening/closing stock; own assay; wet/dry basis; provider; route | Meters, calibrated weighing, procurement, work orders, sampling and provider records; include reject/rework, separate test fuel/charging and retained fill. | MJ for energy; kg for mass | per batch and meter interval | same production period | same factory/delivered configuration | attributable exchange amount / accepted machines | measurements, sampling, stocks, allocation, supply and uncertainty |
| cp_assembly | assembly | atomic_exchanges | production_record | exchange identity; Q; N; configuration; period; meter units; opening/closing stock; own assay; wet/dry basis; provider; route | Meters, calibrated weighing, procurement, work orders, sampling and provider records; include reject/rework, separate test fuel/charging and retained fill. | MJ for energy; kg for mass | per batch and meter interval | same production period | same factory/delivered configuration | attributable exchange amount / accepted machines | measurements, sampling, stocks, allocation, supply and uncertainty |
| cp_test_pack | test_pack | atomic_exchanges | production_record | exchange identity; Q; N; configuration; period; meter units; opening/closing stock; own assay; wet/dry basis; provider; route | Meters, calibrated weighing, procurement, work orders, sampling and provider records; include reject/rework, separate test fuel/charging and retained fill. | MJ for energy; kg for mass | per batch and meter interval | same production period | same factory/delivered configuration | attributable exchange amount / accepted machines | measurements, sampling, stocks, allocation, supply and uncertainty |
| cp_shared | shared | atomic_exchanges | production_record | exchange identity; Q; N; configuration; period; meter units; opening/closing stock; own assay; wet/dry basis; provider; route | Meters, calibrated weighing, procurement, work orders, sampling and provider records; include reject/rework, separate test fuel/charging and retained fill. | MJ for energy; kg for mass | per batch and meter interval | same production period | same factory/delivered configuration | attributable exchange amount / accepted machines | measurements, sampling, stocks, allocation, supply and uncertainty |
| cp_purchased_heat | shared | purchased_heat | meter_record | supply mass; return mass; own enthalpies; common datum; pressure; temperature; dryness; heat meter; gross/net provider interface; period; configuration; N | Steam/condensate meters, calibrated mass or heat meters; supplier contract confirms gross versus net heat scope; exclude own-boiler internal supply. | MJ | per meter interval | same production period | actual supply and return boundary | attributable net steam heat / accepted machines | meter calibration, thermal state, common datum, supplier contract and uncertainty |

For one configuration and common production period, Q is each attributable period exchange including reject/rework burden, N is accepted units, D is sum of calibrated accepted net masses, M = D/N and q_item = Q/N. Applying normalize_mass gives q_ref = Q/D. Reconcile stocks/work in progress and retained fluids to that configuration; exclude packaging and rejected mass from D. Do not average different rigid/articulated/compact or propulsion configurations or use nominal operating weight.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| purchased_heat | steam | Net steam heat = supply mass × supply specific enthalpy − return mass × return specific enthalpy; independently measure both masses and use actual pressure/temperature or dryness with one enthalpy datum, or a calibrated net heat meter. Declare gross-delivered versus net-heat provider interface first, never purchase both; count condensate once in water closure and exclude own-boiler internal steam. | cp_purchased_heat | net supplied heat / MJ |  |
| utility_closure | site utility records | Same-period/unit imports plus actual on-site output minus exports and storage change equal assigned fabrication, treatment, assembly, test/dispatch demand plus unassigned residual and actual conversion losses. Shared rows allocate residual only. Investigate negative residual against periods, units, meter calibration and actual combined measurement/sampling/allocation uncertainty without clipping; paired internal transfers cancel and generation is not also purchased. | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | same-period utility closure |  |
| water_closure | physical water records | Each input moisture and dilution/cleaning/cooling water plus actual reaction water production minus reaction consumption equal product/fluid retained water, scrap/sludge water, wastewater, evaporation and water stock change. Each term uses its own water assay and wet/dry conversion; paired internal returns cancel. Investigate difference against actual combined measurement/sampling/allocation uncertainty, with no universal tolerance. | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | actual water closure |  |
| contained_species_closure | physical material and species records | For each actual metal/species, each input own mass times own assay plus reaction generation minus reaction consumption equals each product, scrap, slag, dust, sludge, wastewater, release and stock-change own mass times own assay. Each term uses its own sampling, moisture and wet/dry basis; internal transfers cancel, gross mass is not contained-element mass, and investigate with actual combined uncertainty. | cp_fabrication; cp_surface; cp_assembly; cp_test_pack; cp_shared | actual species closure |  |
| solvent_closure | actual solvent records | Reconcile paint-embedded and added solvent, product retention, recovery, capture media, stock change, actual destruction and non-air residual separately; capture is not destruction and unexplained residual cannot be assigned to air. Species air release requires measurement or applicable evidence; fuel carbon closure cannot replace CO or NOx species measurement. | cp_surface; cp_test_pack | reconciled species destinations |  |

Reconcile site utilities in the same period and units: imports plus actual on-site generation minus exports and storage changes equal already assigned fabrication, treatment, assembly, test/dispatch demand plus unassigned residual and evidenced conversion losses. Shared rows carry only measured causally allocated residual. Never add site totals to submeters; investigate negative residual using period/unit alignment, calibration and combined allocation uncertainty, never clip to zero. On-site generation records fuel/water/species once; paired internal power transfers cancel and are not also purchased electricity. Test charging records imported energy, recuperated/exported energy and storage change, not battery capacity or rated charger power.

Close water using each actual input moisture, dilution/cleaning/coolant water, retained product/fluid water, wet scrap/sludge, wastewater, evaporation, stocks and actual reaction production/consumption. Paired internal returns cancel within the boundary. Close each contained metal/species using each term’s own measured assay, concentration, wet/dry conversion and amount for inputs, accepted product, scrap, slag, captured dust, sludge, wastewater, releases and stocks; include reactions changing species. Gross material mass never equals contained element. Investigate differences using actual combined measurement, sampling and allocation uncertainty; no universal tolerance, yield or invented balance coefficient.

For each actual solvent, distinguish paint-embedded and added solvent, retained product, recovered solvent, capture media, stocks, actual destruction and non-air residuals before calculating a measured species-specific air release. For test combustion, actual fuel carbon and all carbon outputs constrain carbon closure but cannot establish CO or NOx; those require species-specific test measurements or an applicable evidenced factor and declared species convention. Refrigerant leaks, uncaptured metal aerosols and other emissions, if present, need separate species/compartment records and matching evidence.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_config | reference and inventory | Same actual configuration, shipped scope, acceptance period/net mass; real make/buy and supply interfaces. | shipped BOM, calibrated weighing, work orders and supply records |
| quality_gaps | each exchange | Row-specific collected/calculated/not_applicable/unknown/missing status; disclose UUID/range/source gaps; unknown is not zero. | route matrix, identity review, sampling and uncertainty |

Purchased steam and condensate returns use one enthalpy datum, actual pressure/temperature or dryness and measured masses; net heat equals imported mass times supply enthalpy minus returned mass times return enthalpy. Count returned water once in water closure; paired internal steam loops cancel and are not purchased steam. Add atomic rows for each actual additional fuel, refrigerant/chemical and emitted species, measured for the same factory period.

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_configuration | Confirm rigid/articulated/compact dumper principal function, shipped body and propulsion; road freight or water service does not match merely through chassis. | volvo-a40-2025; wacker-dw15e; cat-777f |
| validate_measurement | For same configuration/period Q includes reject/rework burden, N accepted units, D summed calibrated accepted net mass, M = D/N, q_item = Q/N and q_ref = Q/D; exclude packaging, payload and rejected mass. |  |
| validate_utility | Reconcile same-period/unit imports, actual generation, exports/storage changes with assigned demand, residual and actual losses; no additive site-meter double count. Investigate negative residual against calibration/sampling/allocation uncertainty without clipping. Test charging reconciles imports, recovery/exports and storage changes. |  |
| validate_water_species | Each physical/species balance term uses its own moisture/assay and wet/dry basis for input, product, scrap, sludge, wastewater, releases, stocks and reactions; paired returns cancel. Explain closure against actual combined uncertainty; gross mass is not contained element and no universal tolerance applies. |  |
| validate_solvent | Distinguish solvent retention, recovery, capture media, stocks, actual destruction and non-air residual; capture is not destruction and residual is not air release. Carbon closure cannot determine CO/NOx; require species test or applicable evidence. |  |
| validate_identity | Adopt UUID only after direct type, official bilingual name, reference property/unit, state and supply/geography interface match; avoid module/embedded-input duplication. Disclose missing UUID, formulation, factory or range evidence rather than zero; review publication after actual foreground completion. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing foreground package and process/lifecyclemodel projections of declared configuration |
| excluded_use | Ore/site hauling service; unreviewed payload/lifetime/configuration substitution |
| required_metadata | Shipped BOM; principal function/body/liner/propulsion; make/buy; net mass/fluids; plant/period/supply/acceptance |
| required_quality_disclosure | UUID/empirical-range gaps; route/original factory evidence gaps; uncertainty; unknown battery chemistry |
| update_trigger | Propulsion/body/configuration/supplier/chemistry/factory-route/energy-interface change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| volvo-a40-2025 | handbook | Volvo A40 Product Guide, Ref. No 20064351_C / English-21 / 2025.01, pages 6–7, footer page 12: https://www.volvoce.com/-/media/aprimo/pdf/articulated-haulers/a40/product-guide-a40-stv-en-21-20064351-c.pdf | Articulated diesel drive, welded frame and HB450 body example; no universal grade, mass or energy |
| wacker-dw15e | handbook | Wacker Neuson DW15e Electric Wheel Dumper, original product body and installed charging/recovery, snapshot 2026-10-02: https://www.wackerneuson.com/cemea/products/dumpers/wheel-dumpers/dw15e | Compact electric, independent systems and charger; no inferred chemistry or zero manufacturing emissions |
| cat-777f | handbook | Caterpillar Cat 777F, Structures and Truck Body Systems, original HTML snapshot 2026-10-02; edition date unstated: https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=307&it=product&lid=en&nc=1&pid=16922003&sc=US | Rigid frame manufacture and contrasting body/liner systems; no old-model numerical defaults |
| jrc-metalworking-2020 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN (2020), section 4.1, printed page 190 / PDF page 192, DOI 10.2760/894966: https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Route-dependent machining-fluid forms and separate concentrate/dilution water; no manufacturing quantity default |
