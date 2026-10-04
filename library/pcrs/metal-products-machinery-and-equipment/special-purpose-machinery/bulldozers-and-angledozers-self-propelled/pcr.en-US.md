---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozers-and-angledozers-self-propelled
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Self-propelled bulldozers and angledozers

## 1. Scope and Applicability

This candidate governs new complete self-propelled dozers delivered at the factory gate, including the actual host, running gear and shipped blade configuration. Crawler and wheel machines qualify only when their actual primary product is a dozer; a loader carrying a temporary blade, agricultural tractor, grader, scraper, excavator, separately sold blade or replacement part does not qualify merely through an attachment. Later earthmoving service, moved soil, operation fuel, maintenance and end-of-life are separate. Sources: `un-cpc3-dozers`; `cat-d6xe`; `komatsu-d61`; `shantui-de17`.

OEM examples establish different architectures: Komatsu documents diesel/hydrostatic crawler drive and factory control equipment; Caterpillar D6 XE combines diesel engine with electric traction; Shantui DE17-X documents LFP battery, electric motors/controllers, thermal management and crawler dimensions. Electric-drive wording alone never removes a diesel engine or proves a traction battery. Actual battery hybrid routes retain both installed systems and measured charging/fuel. Shantui narrative and specification battery-energy figures differ: no listed capacity, marketing savings, operating mass or runtime becomes an inventory factor. Caterpillar 824 confirms a wheel-dozer diesel powershift alternative, with torque converter and actual brake/axle equipment. Track/wheel route, blade geometry, arms, cylinders and optional control packages follow actual shipped BOM.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozers-and-angledozers-self-propelled |
| classification_refs | CPC 3.0 44421 |
| covered_products | New complete self-propelled bulldozer/angledozer with actual delivered equipment |
| excluded_products | Separate blades/parts; loaders, graders, agricultural tractors; earthmoving service |
| representative_product | Diesel/hydrostatic crawler dozer with declared blade configuration; other verified architectures remain eligible |
| production_route | Actual make/buy; conditional fabrication/treatment; architecture-specific assembly; factory acceptance |
| market_state | New accepted machine at factory gate; transport packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of declared dozer configuration, not earthmoving service |
| How much | 1 kg accepted complete machine of same configuration |
| How well | Actual propulsion, running gear, blade and safety acceptance; mass does not ensure functional equivalence across dozing capacity |
| How long or cycle | One manufacture and factory acceptance cycle; no universal lifetime |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bulldozers and angledozers, self-propelled `d1abf37d-4e2e-4caa-b6c2-009245d4f4f3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; crawler/wheel; diesel mechanical/hydrostatic/diesel-electric/battery-electric/battery hybrid; battery chemistry; shipped blade/arm/cylinder scope; make/buy; installed options; net mass; retained fluids; plant/period; acceptance; geography/voltage |

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
| declared_starting_condition | Actual supplier-completed materials or components entering factory |
| starting_condition_role | foreground_input |
| product_classification_scope | Complete self-propelled dozer host and actual delivered implements |
| recursive_input_rule | Bought same-category machine/completed host enters once as upstream product; do not recreate embedded manufacture; disclose assembly/conversion/rework nature |
| upstream_dataset_requirement | Match completed operations, grade, component, state, supply interface, geography/year; disclose gaps |
| disclosure | Shipped BOM, each make/buy choice, options, fluids/battery, tests and fixture boundaries |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_factory | Include receiving, actual manufacture/assembly, upstream supplier products, factory tests/rework and packaging; exclude later earthmoving operation. | un-cpc3-dozers |
| boundary_make_buy | Reconcile make/buy for engine, transmission, final drive, motor, battery, cab, electronics and blade. Bought assemblies embed materials, supplier oil and operations upstream; in-house manufacture records actual feedstocks/processes instead. | cat-d6xe; komatsu-d61; shantui-de17 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Chassis and implement fabrication | conditional | Actual in-house fabrication; bought finished assemblies stay upstream. | foreground | 1 kg reference flow |
| surface | Surface and thermal treatment | conditional | Actual in-house treatment specified by work orders. | foreground | 1 kg reference flow |
| assembly | Powertrain, running gear and host assembly | required | Actual propulsion architecture and shipped equipment. | foreground | 1 kg reference flow |
| test_pack | Factory acceptance, first fill and dispatch | required | Factory tests only; later earthmoving service is separate. | foreground | 1 kg reference flow |
| shared | Unassigned shared services | conditional | Only attributable residual after process assignments. | foreground | 1 kg reference flow |

Cards represent conditional single exchanges, not a fixed recipe. Actual cutting gases, filler grades, heat treatment/quench fluids, coating chemistries, batteries, tyres, refrigeration species, bought hydraulic blocks, bearings, brakes and ripper/winch options must each have their own concrete exchange when present. Document absence as not_applicable, never convert unknown into zero or omit a real route because its UUID is unresolved. Thermal treatment, machining and coating occur only in actual foreground work; supplier-completed operations remain upstream.

### Process: Chassis and implement fabrication (`fabrication`)

#### Inputs

##### Product flows

###### S355J2 structural steel plate (`s355_plate`)

Conditional certified S355J2 frame plate; other actual grades need separate exchanges, not an assumed recipe.

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

###### AR400 abrasion-resistant steel plate (`ar400`)

Conditional actual in-house blade wear plate; bought blades embed their material once upstream.

- Selected flow: AR400 abrasion-resistant steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### ER70S-6 steel welding wire (`wire`)

Only actual qualified procedure using this filler; actual alternatives require separate grade-specific rows.

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

Actual argon component of shielding gas; record blend certificates and other components separately.

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

Actual shielding component, separate from combustion carbon dioxide.

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

Conditional actual machining concentrate with SDS and formulation; dilution water separate.

- Selected flow: Water-miscible mineral-oil cutting fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Process water (`water_fab`)

Actual fresh water only; internal return transfers cancel.

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

Only matching CN 1–35 kV grid-average consumer supply; another geography or voltage needs its own matching identity. Actual assigned measured factory demand, including test charging when applicable.

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

Measure each grade and own assay, chips and offcuts; retain reject and rework burden.

- Selected flow: Segregated steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources:

###### Spent mineral-oil cutting emulsion (`spent_emulsion`)

Actual water/oil/metal concentrations and external treatment interface.

- Selected flow: Spent mineral-oil cutting emulsion
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

###### Natural gas (`gas`)

Actual gas-fired thermal treatment only, with composition and calorific value.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources:

###### Steel shot blasting abrasive (`abrasive`)

Actual blasting route and replenishment, not whole circulating stock counted repeatedly.

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

Conditional actual epoxy formulation with species-resolved SDS and solids fraction; actual alternative coating gets its own row.

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

Actual separately added xylene only; paint-embedded solvent is not re-added.

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

Only matching CN 1–35 kV grid-average consumer supply; another geography or voltage needs its own matching identity. Actual assigned measured factory demand, including test charging when applicable.

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

Actual wet mass, water and each contained solvent/metal assay and disposal.

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

Captured waste with own assay and wet/dry basis; uncaptured air particulate separate by actual species.

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

Only measured or reconciled actual species air release after retention, recovery, destruction and non-air wastes.

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

### Process: Powertrain, running gear and host assembly (`assembly`)

#### Inputs

##### Product flows

###### Complete diesel engine assembly (`engine`)

Diesel mechanical/hydrostatic or diesel-electric configuration only; record exact model and emission aftertreatment. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Complete diesel engine assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Complete hydrostatic transmission assembly (`transmission`)

Only actual hydrostatic route; powershift alternative requires its own completed assembly row. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Complete hydrostatic transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Complete powershift transmission assembly (`powershift`)

Only actual powershift route, with torque converter if supplied; absent in a confirmed diesel-electric replacement architecture. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Complete powershift transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Diesel-electric traction generator (`generator`)

Diesel-electric route only; electric drive does not prove battery-electric propulsion. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Diesel-electric traction generator
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Electric traction motor (`motor`)

Actual diesel-electric or battery-electric drive, exact motor specification; bought assembly includes winding and magnets upstream. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Electric traction motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Traction inverter assembly (`inverter`)

Actual electric traction route, record hardware and interface. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Traction inverter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Lithium iron phosphate traction battery pack (`battery`)

Only verified LFP battery-electric configuration; record pack chemistry, included modules, BMS and thermal system. Other chemistry needs separate identity. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Lithium iron phosphate traction battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Planetary final drive assembly (`final_drive`)

Actual shipped drive interface and quantity, excluding anything already inside bought drivetrain. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Planetary final drive assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Steel crawler track assembly (`track`)

Crawler configuration only; reconcile shoes, chains, rollers, idlers and sprockets to bought package scope. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Steel crawler track assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Rubber pneumatic dozer tyre (`tyre`)

Wheel dozer only; actual size, construction, number and rim boundary. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Rubber pneumatic dozer tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Steel wheel rim (`rim`)

Only wheeled route and not embedded in purchased wheel assembly. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Steel wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Hydraulic implement pump (`pump`)

Actual blade/implement hydraulics; separate from hydrostatic traction pump unless combined documented assembly. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Hydraulic implement pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Hydraulic blade cylinder (`cylinder`)

Actual lift/tilt/angle cylinder supply scope; record each model, exclude cylinders embedded in bought blade package. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Hydraulic blade cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Reinforced hydraulic hose (`hose`)

Actual installed hose specification and connectors; upstream completed hose burden once. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Reinforced hydraulic hose
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Complete dozer operator cab (`cab`)

Actual ROPS/FOPS and operator environment; record open canopy alternative separately. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Complete dozer operator cab
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Dozer electronic control unit (`ecu`)

Actual controls and shipped GNSS/remote options; no assumed universal optional hardware. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Dozer electronic control unit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Dozer wiring harness (`harness`)

Actual installed electrical harness; embedded harness inside complete cab stays upstream. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Dozer wiring harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Dozer cooling radiator assembly (`radiator`)

Actual cooling assembly, distinguish engine, hydraulic and battery thermal circuit interfaces. Completed bought item burden once; in-house make route records its actual grade-specific materials and operations instead.

- Selected flow: Dozer cooling radiator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Bulldozer or angledozer blades (`blade`)

Only actual bought complete blade in shipped BOM; define arms, frame, wear parts and cylinder package scope and do not duplicate embedded components.

- Selected flow: Bulldozer or angledozer blades `e2bc45f7-c072-4426-814c-f254a6b821ce`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Alternating current (`electricity_assembly`)

Only matching CN 1–35 kV grid-average consumer supply; another geography or voltage needs its own matching identity. Actual assigned measured factory demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

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

Actual factory diesel tests or dispatch fuel retained in delivered tank, recorded separately; no later earthmoving fuel.

- Selected flow: Ultra-low-sulfur diesel fuel
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### ISO VG 46 mineral hydraulic oil (`hydraulic_oil`)

Only actual grade first fill or consumed test oil; supplier-filled components and returned rig oil not new consumption.

- Selected flow: ISO VG 46 mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### SAE 15W-40 engine lubricating oil (`engine_oil`)

Actual diesel host first fill only if specified; actual other grades separate.

- Selected flow: SAE 15W-40 engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Ethylene glycol engine coolant (`coolant`)

Actual specified formulation, water fraction separate in balance; supplier fill not repeated.

- Selected flow: Ethylene glycol engine coolant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Aqueous urea exhaust-treatment solution (`urea`)

Only actual SCR-equipped factory tests/first fill; declare concentration and solution mass.

- Selected flow: Aqueous urea exhaust-treatment solution
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Sawn softwood packaging timber (`wood`)

Actual dispatch supports outside machine net mass.

- Selected flow: Sawn softwood packaging timber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Low-density polyethylene packaging film (`film`)

Actual dispatch protection weighed separately.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Alternating current (`electricity_test_pack`)

Only matching CN 1–35 kV grid-average consumer supply; another geography or voltage needs its own matching identity. Actual assigned measured factory demand, including test charging when applicable.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulldozers and angledozers, self-propelled (`finished_machine`)

Accepted shipped configuration including its documented installed blade and options.

- Selected flow: Bulldozers and angledozers, self-propelled `d1abf37d-4e2e-4caa-b6c2-009245d4f4f3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

##### Waste flows

##### Elementary flows

###### Carbon dioxide, fossil, to air (`test_co2`)

Actual test fuel carbon and complete carbon balance or applicable measured test evidence; no use-phase factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Carbon monoxide to air (`test_co`)

Species-specific actual factory test measurement or applicable factor; carbon balance alone does not establish CO.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

###### Nitrogen oxides to air (`test_nox`)

Actual factory test evidence specifying NO/NO2 convention and reference species; no rated-power proxy.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `cat-d6xe`; `komatsu-d61`; `shantui-de17`

### Process: Unassigned shared services (`shared`)

#### Inputs

##### Product flows

###### Process water (`water_shared`)

Only allocated unassigned residual water demand after all process water assignments.

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

###### Alternating current (`electricity_shared`)

Only matching CN 1–35 kV grid-average consumer supply; another geography or voltage needs its own matching identity. Only unassigned residual, never full site meter added to process submeters.

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

Actual wet mass, water fraction, each species concentration and receiving treatment provider.

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
| allocation_separate | First separate by configuration work orders and submeters; allocate shared demand by measured causal drivers. Rated host power, blade capacity and moved-soil quantity do not substitute for factory measurements. |  |
| allocation_losses | Retain reject/rework, production scrap and captured-waste burdens; accepted denominator excludes rejects, packaging and unmatched configurations. Link wastes to actual providers; no default avoided virgin material credit. |  |

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

For one configuration and common production period, Q is each attributable period exchange including reject/rework burden, N is accepted units, D is sum of calibrated accepted net masses, M = D/N and q_item = Q/N. Applying normalize_mass gives q_ref = Q/D. Reconcile stocks/work in progress and retained fluids to that configuration; exclude packaging and rejected mass from D. Do not average different crawler/wheel or propulsion configurations or use nominal operating weight.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Reconcile site utilities in the same period and units: imports plus actual on-site generation minus exports and storage changes equal already assigned fabrication, treatment, assembly, test/dispatch demand plus unassigned residual and evidenced conversion losses. Shared rows carry only measured causally allocated residual. Never add site totals to submeters; investigate negative residual using period/unit alignment, calibration and combined allocation uncertainty, never clip to zero. On-site generation records fuel/water/species once; paired internal power transfers cancel and are not also purchased electricity. Test charging records imported energy, recuperated/exported energy and storage change, not battery capacity or rated charger power.

Close water using each actual input moisture, dilution/cleaning/coolant water, retained product/fluid water, wet scrap/sludge, wastewater, evaporation, stocks and actual reaction production/consumption. Paired internal returns cancel within the boundary. Close each contained metal/species using each term’s own measured assay, concentration, wet/dry conversion and amount for inputs, accepted product, scrap, slag, captured dust, sludge, wastewater, releases and stocks; include reactions changing species. Gross material mass never equals contained element. Investigate differences using actual combined measurement, sampling and allocation uncertainty; no universal tolerance, yield or invented balance coefficient.

For each actual solvent, distinguish paint-embedded and added solvent, retained product, recovered solvent, capture media, stocks, actual destruction and non-air residuals before calculating a measured species-specific air release. For test combustion, actual fuel carbon and all carbon outputs constrain carbon closure but cannot establish CO or NOx; those require species-specific test measurements or an applicable evidenced factor and declared species convention. Refrigerant leaks, uncaptured metal aerosols and other emissions, if present, need separate species/compartment records and matching evidence.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_config | reference and inventory | Same actual configuration, shipped scope, acceptance period/net mass; real make/buy and supply interfaces. | shipped BOM, calibrated weighing, work orders and supply records |
| quality_gaps | each exchange | Row-specific collected/calculated/not_applicable/unknown/missing status; disclose UUID/range/source gaps; unknown is not zero. | route matrix, identity review, sampling and uncertainty |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_configuration | Confirm self-propelled dozer semantics, crawler/wheel and propulsion architecture; reference/inventory share shipped BOM; separate sold blades and later use. | un-cpc3-dozers; cat-d6xe; komatsu-d61; shantui-de17 |
| validate_measurement | Require positive accepted count/mass, finite exchanges and explicit conversion; verify rework/loss, term-specific water/species balances, shared residual and actual uncertainty. |  |
| validate_identity | Adopt UUIDs only with direct type, official bilingual name, reference property/unit, state/supply interface and geography confirmation; disclose unresolved identities/ranges for prepublication review. |  |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_denominator | For each configuration/period Q retains reject/rework burden, N is accepted count, D is sum of calibrated accepted net masses, M = D/N, q_item = Q/N and q_ref = Q/D; denominator excludes packaging/rejects/other configurations and stocks/WIP use the same period. |  |
| validate_utility_residual | Same period/units: imports plus actual on-site generation minus exports/storage change equal assigned fabrication/treatment/assembly/test/dispatch plus unassigned residual and conversion losses; shared rows allocate only residual. Never add site meter to submeters; investigate negative residual/calibration/combined uncertainty without clipping. |  |
| validate_charging_balance | Test charging reconciles imported energy, recuperated/exported energy, storage change and actual conversion losses. Diesel-electric is not battery-electric; capacity/rated charging power cannot replace meters; internal transfers cancel and on-site generation fuel/emissions count once. |  |
| validate_water_closure | Actual input moisture and dilution/cleaning/coolant water reconcile with product/fluid retention, wet scrap/sludge water, wastewater, evaporation and stocks, adjusted for reaction water production/consumption; paired returns cancel, each term uses its own water content and differences are investigated against actual combined sampling/measurement uncertainty. |  |
| validate_contained_species | For each metal/species apply each term’s own measured assay, concentration and wet/dry conversion to its own amount for input/product/scrap/slag/dust/sludge/wastewater/releases/stocks, including reactions changing species; gross mass is not element mass. No universal tolerance. |  |
| validate_solvent_combustion | Solvent supply reconciles retention/recovery/capture-media/stocks/actual destruction/non-air residual before confirming species air release. Actual fuel carbon closure cannot establish CO or NOx; each requires species test measurement or applicable evidenced factor and declared species convention. |  |
| validate_foreground_route | OEM equipment establishes architecture options, not factory grades or manufacturing recipes. Make/buy, each grade, cut/weld/thermal/coating route and actual test need work orders, certificates, SDS, supplier and foreground measurement evidence; not_applicable is distinct from unknown/zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing foreground package and process/lifecyclemodel projections of declared configuration |
| excluded_use | Earthmoving service or universal power/capacity/lifetime equivalence; unreviewed configuration substitution |
| required_metadata | shipped BOM; propulsion/running gear; each make/buy choice; net mass/fluids; plant/period; energy interfaces; tests/acceptance |
| required_quality_disclosure | unknown UUIDs/ranges; source conflicts; route gaps; measurement/allocation uncertainty |
| update_trigger | architecture, configuration, supplier, chemistry/grade, plant route or energy-interface change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-dozers | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, 44421 and 44429: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Host/blade classification boundary, not process recipe |
| cat-d6xe | handbook | Caterpillar D6 XE, standard/optional equipment: https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=323&it=product&lid=en&nc=1&pid=15969752&sc=X350 | Diesel-electric drive, final drives, cab and conditional equipment; no universal emissions/energy factor |
| komatsu-d61 | handbook | Komatsu D61EXi/PXi-24: https://www.komatsu.eu/en/crawler-dozers/d61exipxi-24 | Diesel/hydrostatic and factory control alternative; not all machine configurations |
| cat-wheel-824 | handbook | Caterpillar 824 Wheel Dozer Technical Specifications, AEXQ3632-01 (11-2024), replaces AEXQ3632-00, standard/optional equipment page 6: https://s7d2.scene7.com/is/content/Caterpillar/CM20240214-bacd2-f3c9d | Wheel diesel powershift, brake and cab equipment alternatives; no power/mass factor |
| shantui-de17 | handbook | Shantui DE17-X, technical features and specifications: https://www.shantui.com/product/pro-detail-3892996.htm | LFP electric, thermal management and crawler equipment alternative; battery-energy conflict, no numeric factor adopted |
