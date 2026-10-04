---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozer-or-angledozer-blades
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Bulldozer or angledozer blades

## 1. Scope and Applicability

This candidate governs factory manufacture of a complete bulldozer or angledozer blade, not a self-propelled machine or earthmoving service. Straight, U, semi-U and angle/tilt variants require a declared delivery configuration. The blade includes its moldboard, structural backing/side plates and installed cutting-edge/end-bit/wear group. Push arms, C-frame, pivot connections and tilt/angle cylinders are included only when the actual shipped BOM supplies them; a blade fitting existing tractor push arms does not inherit those arms or the tractor hydraulic system. Exclude engines, tracks, traction transmission, later installation/use, moved soil and working diesel. Detached replacement edges, liners, end bits and hydraulic parts require separate semantic/classification review and are not automatically complete blades. Sources: `un-cpc3-blades`; `dymax-abrasion-blades`; `cat-blade-components`.

The Dymax guide distinguishes model, liner, capacity and weight; these are specific configurations, not category defaults. Its abrasion blade fits existing outside-mounted arms and offers different wear packages. Caterpillar describes several blade/control variants. The Caterpillar patent contrasts separately formed welded panels with a one-piece cut/formed moldboard: neither route is mandatory. Measure actual accepted net mass and dimensions; no OEM listed weight, tractor horsepower or nominal blade capacity becomes a universal inventory factor. Sources: `dymax-dozer-guide`; `cat-moldboard-patent`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bulldozer-or-angledozer-blades |
| classification_refs | CPC 3.0 44429 |
| covered_products | Actual configured complete bulldozer or angledozer blade |
| excluded_products | Complete self-propelled dozer; separately sold parts; earthmoving service; snowploughs and rakes |
| representative_product | Steel U-blade with declared installed wear group; not a universal recipe |
| production_route | Actual make/buy matrix; cut/form/weld; conditional machining, heat and surface treatment; assembly and acceptance |
| market_state | New accepted blade at factory gate; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the declared delivered blade configuration |
| How much | 1 kg accepted complete blade of the same configuration |
| How well | Meets actual dimensional, attachment, weld and control acceptance; mass does not establish equivalence across capacity/functions |
| How long or cycle | One factory manufacturing/acceptance cycle; no service lifetime imposed |
| reference_flow_link | finished_blade |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bulldozer or angledozer blades `e2bc45f7-c072-4426-814c-f254a6b821ce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | blade type; model; host interface; width/height and actual capacity definition; moldboard/side plate grade; wear package; shipped arms/frame/cylinder scope; net mass; make/buy; factory/year; acceptance; utility geography/voltage |

## 4. Measurement and Unit Rules

In the measurement and collection clauses, unit means the complete delivered blade, excluding the self-propelled host. Mass, accepted count, BOM, acceptance and every exchange use the same delivered configuration.

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| material_assay | physical material and species records | Mass | kg | Each input, product, scrap, sludge, wastewater and emission term uses its own matched assay and wet/dry basis; gross mass is not contained iron or solvent. |
| energy_basis | electricity and fuel | Net calorific value | MJ | 1 kWh = 3.6 MJ; fuel mass to energy needs actual heating value; rated host power is not factory energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual certified plate or completed components delivered by suppliers into plant |
| starting_condition_role | foreground_input |
| product_classification_scope | Complete dozer/angle blade, distinguished from host and separately sold parts |
| recursive_input_rule | Bought moldboard or blade assembly enters once as upstream product; do not recreate its embedded manufacture |
| upstream_dataset_requirement | Match grade, state, completed operations, supply interface, geography and year; disclose unresolved links |
| disclosure | Complete delivered BOM, wear options, arm/hydraulic boundary and test-rig ownership |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_factory | Include actual receiving, in-house operations, upstream outsourced products, assembly, factory tests, rework and packaging; later earthmoving, installation, maintenance and disposal are separate. | un-cpc3-blades; dymax-abrasion-blades |
| boundary_make_buy | Declare make/buy per moldboard, edge, end bit, side plate, frame, arm, pin and cylinder. Embedded plate, wire, treatment and supplier fill in bought completed components are not added again in foreground. | dymax-abrasion-blades; cat-moldboard-patent |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Plate cutting, forming, welding and machining | conditional | Actual in-house blade or frame fabrication, including one-piece or panel-built moldboard. | foreground | 1 kg reference flow |
| surface | Heat treatment and wear/surface treatment | conditional | Only actual foreground heat treatment, hardfacing, blasting or coating; bought pretreated stock stays upstream. | foreground | 1 kg reference flow |
| assembly | Blade configuration assembly | required | Assemble actual delivered blade BOM, including wear parts and only supplied arms/cylinders. | foreground | 1 kg reference flow |
| test_pack | Factory acceptance and packaging | required | Actual dimensional, weld, attachment and conditional hydraulic tests before release. | foreground | 1 kg reference flow |
| shared | Unassigned shared factory services | conditional | Only measured residual after process loads have been assigned. | foreground | 1 kg reference flow |

Cards below are conditional atomic exchanges, not a fixed blade recipe. Record actual material certificates, weld procedure, SDS and procurement interfaces. Another grade, fuel, chemical, component or emission species needs its own specific exchange with its own property/unit and identity review. A not-applicable route has evidence of absence; unknown is not zero. Bought Hardox/AR stock heat treatment stays upstream; foreground annealing/quenching, hardfacing, machining and coating occur only if work orders prove them. Record actual CO, NOx and metal aerosol species separately when present using measurements or route-specific factors; fuel carbon does not establish CO or NOx.

### Process: Plate cutting, forming, welding and machining (`fabrication`)

#### Inputs

##### Product flows

###### AR400 abrasion-resistant steel plate (`ar400`)

Only actual certified AR400 plate in the BOM; do not replace with A36 or assume all blade plates are AR400.

- Selected flow: AR400 abrasion-resistant steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Hardox 500 steel plate (`hardox500`)

Only actual selected Hardox 500 wear package, separate from the AR400 alternative.

- Selected flow: Hardox 500 steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### ASTM A514 quenched and tempered steel plate (`t1_plate`)

Only when T1 side plate/support procurement certificates establish ASTM A514 and its grade; supplier shorthand alone is insufficient.

- Selected flow: ASTM A514 quenched and tempered steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### ER70S-6 carbon steel welding wire (`weld_wire`)

Only if the actual qualified weld procedure specifies this wire; record another filler as a separate exact-grade exchange.

- Selected flow: ER70S-6 carbon steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Argon shielding gas (`argon`)

Only actual argon use; gas mixtures require individual component masses and supplier blend specification.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Carbon dioxide shielding gas (`shield_co2`)

Only actual carbon dioxide shielding, separate from combustion emissions.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Oxygen cutting gas (`oxygen`)

Only actual oxygen cutting; plasma/laser/mechanical cutting has its own actual consumables.

- Selected flow: Oxygen cutting gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Acetylene cutting fuel (`acetylene`)

Only oxyacetylene cutting; actual propane or another fuel is a different atomic row, not a substitution inside this card.

- Selected flow: Acetylene cutting fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Water-miscible mineral-oil cutting fluid concentrate (`cutting_fluid`)

Only actual machining concentrate with declared SDS/formulation; dilution water is separate.

- Selected flow: Water-miscible mineral-oil cutting fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Process water (`water_fab`)

Only fresh water crossing the boundary; internal return is paired transfer, not a new fresh-water input.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Alternating current (`electricity_fabrication`)

Conditional CN 1–35 kV grid-average supply to user. Other geography/voltage needs a matching provider identity. Use assigned actual process demand, not rated power or earthmoving-use diesel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel cutting scrap (`steel_scrap`)

Weigh actual grade-specific offcuts and chips; external recycling is a waste/provider link, not automatic avoided virgin steel.

- Selected flow: Segregated steel cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Spent mineral-oil cutting emulsion (`spent_fluid`)

Record actual water/oil/metal assay and destination.

- Selected flow: Spent mineral-oil cutting emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Captured iron-bearing welding and cutting dust (`filter_dust`)

Captured dust is a waste, distinct from uncaptured airborne release.

- Selected flow: Captured iron-bearing welding and cutting dust
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Elementary flows

### Process: Heat treatment and wear/surface treatment (`surface`)

#### Inputs

##### Product flows

###### Natural gas (`natural_gas`)

Only actual in-house gas-fired heat treatment; record fuel composition and heating value, not rated furnace power.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Mineral-oil quenching oil (`quench_oil`)

Only actual oil quench with formulation and make-up; bought quenched plate has no foreground quenching operation.

- Selected flow: Mineral-oil quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Chromium-carbide hardfacing cored wire (`carbide_wire`)

Only in-house hardfacing using this exact consumable; bought carbide wear blocks enter as components.

- Selected flow: Chromium-carbide hardfacing cored wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Steel blasting grit (`blast_grit`)

Only actual blasting media make-up; recirculated grit is not repeatedly purchased.

- Selected flow: Steel blasting grit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Two-component epoxy coating (`epoxy_coat`)

Only actual documented epoxy formulation; component ratio and contained solvent are recorded, another coating gets a distinct row.

- Selected flow: Two-component epoxy coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Xylene coating thinner (`xylene`)

Only actual separately added xylene; do not add contained paint solvent again as purchased thinner.

- Selected flow: Xylene coating thinner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Alternating current (`electricity_surface`)

Conditional CN 1–35 kV grid-average supply to user. Other geography/voltage needs a matching provider identity. Use assigned actual process demand, not rated power or earthmoving-use diesel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Epoxy paint overspray sludge (`paint_sludge`)

Use actual wet mass, water/solvent/resin/metal assays and destination.

- Selected flow: Epoxy paint overspray sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Spent mineral-oil quenching oil (`spent_quench`)

Only waste crossing boundary; retained bath stock and internal recovery are reconciled.

- Selected flow: Spent mineral-oil quenching oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Elementary flows

###### Xylene to air (`xylene_air`)

Only measured or species-resolved balance emission after retention, recovery, capture and actual destruction.

- Selected flow: Xylene to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Only actual fossil combustion; composition-based carbon accounting excludes carbon retained in residuals.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

### Process: Blade configuration assembly (`assembly`)

#### Inputs

##### Product flows

###### Fabricated steel dozer moldboard (`bought_moldboard`)

Only bought finished moldboard; embedded stock/forming/welding is upstream once, not duplicate foreground material.

- Selected flow: Fabricated steel dozer moldboard
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Heat-treated steel bolt-on dozer cutting edge (`bought_edge`)

Only an edge installed in this delivered blade; a separately sold edge is outside this reference product.

- Selected flow: Heat-treated steel bolt-on dozer cutting edge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Heat-treated steel dozer end bit (`bought_endbit`)

Only actual supplied end bit; grade, heat treatment and supplier are required.

- Selected flow: Heat-treated steel dozer end bit
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Fabricated steel dozer push arm (`bought_arm`)

Only if supplied in the declared blade assembly; existing tractor arms are excluded.

- Selected flow: Fabricated steel dozer push arm
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Hydraulic blade tilt cylinder (`bought_cylinder`)

Only supplied tilt cylinder; angle cylinder is a distinct component row when included.

- Selected flow: Hydraulic blade tilt cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Hydraulic blade angle cylinder (`bought_angle`)

Only actual shipped angle-control cylinder; no host hydraulic pump or engine is assumed.

- Selected flow: Hydraulic blade angle cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Machined steel blade pivot pin (`bought_pin`)

Only actual bought finished pin; bought cylinder or arm embedded pins are not re-added.

- Selected flow: Machined steel blade pivot pin
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### High-strength steel blade bolt (`bolt`)

Only actual fasteners installed with grade and count/mass reconciliation.

- Selected flow: High-strength steel blade bolt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Alternating current (`electricity_assembly`)

Conditional CN 1–35 kV grid-average supply to user. Other geography/voltage needs a matching provider identity. Use assigned actual process demand, not rated power or earthmoving-use diesel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and packaging (`test_pack`)

#### Inputs

##### Product flows

###### ISO VG 46 mineral hydraulic oil (`hydraulic_oil`)

Only actual first fill or consumed test oil of this grade; returned test-rig oil and cylinder supplier fill remain distinct.

- Selected flow: ISO VG 46 mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Sawn softwood packaging timber (`wood`)

Only actual cradle timber outside accepted blade net mass.

- Selected flow: Sawn softwood packaging timber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Low-density polyethylene packaging film (`film`)

Only actual transport film, separately weighed.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Alternating current (`electricity_test_pack`)

Conditional CN 1–35 kV grid-average supply to user. Other geography/voltage needs a matching provider identity. Use assigned actual process demand, not rated power or earthmoving-use diesel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulldozer or angledozer blades (`finished_blade`)

Accepted complete configuration only, including documented installed wear group and supplied attachments.

- Selected flow: Bulldozer or angledozer blades `e2bc45f7-c072-4426-814c-f254a6b821ce`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

### Process: Unassigned shared factory services (`shared`)

#### Inputs

##### Product flows

###### Process water (`water_shared`)

Only causally assigned unallocated site residual; exclude water already assigned to fabrication and treatment.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

###### Alternating current (`electricity_shared`)

Conditional CN 1–35 kV grid-average supply to user. Other geography/voltage needs a matching provider identity. Residual only, after all measured process assignments; never the full site meter added to submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-bearing process wastewater (`wastewater`)

Only actual discharge/treatment transfer with wet mass, water content and each metal species concentration.

- Selected flow: Metal-bearing process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_shared.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shared`
- Sources: `dymax-abrasion-blades`; `cat-moldboard-patent`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_separate | First separate by same-configuration work orders and submeters; allocate shared services by measured causal drivers and disclose other lines. Blade capacity or host power does not substitute for measurement. |  |
| allocation_scrap | Retain reject, rework, cutting-loss and captured-waste burdens; reject and packaging mass are excluded from accepted-net-mass denominator. Recycling uses actual waste/provider links, with no default virgin-substitution credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

In the measurement and collection clauses, unit means the complete delivered blade, excluding the self-propelled host. Mass, accepted count, BOM, acceptance and every exchange use the same delivered configuration.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference_product | weighing_record | model; configuration; serial number; accepted net mass M; accepted count N | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | per accepted unit | same production period | declared delivered blade, not host | accepted net mass per unit | calibration, tare, configuration and acceptance records |
| cp_fabrication | fabrication | atomic_exchanges | production_record | exchange identity; Q; N; configuration; meter units; stock opening/closing; wet/dry basis; own assay; route; period; provider | Meters, weighing, procurement, work orders, sampling and provider records; retain reject/rework burdens. | MJ for energy; kg for mass | per batch and meter interval | same production period | actual plant and delivered configuration | attributable exchange amount / accepted units | calibration, sampling, stocks, allocation and uncertainty evidence |
| cp_surface | surface | atomic_exchanges | production_record | exchange identity; Q; N; configuration; meter units; stock opening/closing; wet/dry basis; own assay; route; period; provider | Meters, weighing, procurement, work orders, sampling and provider records; retain reject/rework burdens. | MJ for energy; kg for mass | per batch and meter interval | same production period | actual plant and delivered configuration | attributable exchange amount / accepted units | calibration, sampling, stocks, allocation and uncertainty evidence |
| cp_assembly | assembly | atomic_exchanges | production_record | exchange identity; Q; N; configuration; meter units; stock opening/closing; wet/dry basis; own assay; route; period; provider | Meters, weighing, procurement, work orders, sampling and provider records; retain reject/rework burdens. | MJ for energy; kg for mass | per batch and meter interval | same production period | actual plant and delivered configuration | attributable exchange amount / accepted units | calibration, sampling, stocks, allocation and uncertainty evidence |
| cp_test_pack | test_pack | atomic_exchanges | production_record | exchange identity; Q; N; configuration; meter units; stock opening/closing; wet/dry basis; own assay; route; period; provider | Meters, weighing, procurement, work orders, sampling and provider records; retain reject/rework burdens. | MJ for energy; kg for mass | per batch and meter interval | same production period | actual plant and delivered configuration | attributable exchange amount / accepted units | calibration, sampling, stocks, allocation and uncertainty evidence |
| cp_shared | shared | atomic_exchanges | production_record | exchange identity; Q; N; configuration; meter units; stock opening/closing; wet/dry basis; own assay; route; period; provider | Meters, weighing, procurement, work orders, sampling and provider records; retain reject/rework burdens. | MJ for energy; kg for mass | per batch and meter interval | same production period | actual plant and delivered configuration | attributable exchange amount / accepted units | calibration, sampling, stocks, allocation and uncertainty evidence |

Within each single configuration and common period, Q is the attributable exchange including reject/rework consumption, N the accepted blade count and M the sum of calibrated accepted net masses divided by N. Collect q_item = Q/N and convert with normalize_mass; consequently q_ref = Q/sum(accepted net masses). Never average dissimilar blade variants, add gross packing/reject mass to the denominator, or use nominal OEM weight as measured M. Allocate stocks and work in progress consistently to the period and delivered configuration.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Reconcile utilities in identical site periods and units: purchased imports plus actual on-site generation minus exports and storage change equals assigned fabrication/surface/assembly/test demand plus unassigned shared residual and evidenced conversion losses. Shared cards carry only that unassigned residual. Investigate negative residuals against period alignment, calibration, allocation and combined uncertainty; never clip them to zero. In-house generation has its fuel, water and emissions recorded once and its internal electricity transfer paired; do not also purchase that electricity.

Close water on actual water content of every input moisture, dilution/quench/cleaning water, retained product and fluids, wet scrap/sludge, wastewater, evaporation and stock change; include water produced/consumed by actual reactions. Paired internal return transfers cancel within the same boundary. For each contained metal/species, apply that term's own grade assay, concentration, wet/dry conversion and amount to input, product, scrap, slag, captured dust, sludge, wastewater, release and stock terms; include reactions where the species changes. Gross steel mass is not iron mass, and wastewater mass is not metal mass. Investigate closure with combined measurement/sampling/allocation uncertainty, no universal tolerance or yield.

For xylene or another actual solvent, distinguish solvent supplied inside paint and separate thinner, product retention, recovery, capture-media content, stock change, actual destruction and non-air wastes. Only the reconciled species-specific remainder supported by measurement becomes an air emission; captured or recovered solvent is not an air release. Combustion carbon requires actual fuel carbon and other carbon outputs; CO, NOx and particulate metal need their own measurement or applicable emission evidence.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | Actual type, chemical/component identity, delivery state, geography, units and provider interface; no mixed-metal candidate substitutes for an exact steel grade. | certificates, SDS and direct identity review |
| quality_complete | data package | Disclose collected/calculated/not-applicable/unknown/missing state per row, UUID/range gaps; unknown is not zero. | route matrix, raw records, measurements and uncertainty |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_configuration | Reference product, acceptance, mass denominator and inventory must share one delivered configuration; verify excluded host/parts and supplied-option status. | dymax-dozer-guide; un-cpc3-blades |
| validate_balance | Reconcile atomic exchanges, upstream counted once, water/species/metal balances, shared residual, stocks and rework against measured uncertainty; no invented universal range. |  |
| validate_identity | Adopt UUID only with directly confirmed type, official bilingual name, property/unit, state/interface and geography. CN medium-voltage user power is conditional; disclose unresolved identities/ranges for prepublication review. |  |
| validate_denominator | For each configuration and matched period, retain attributable Q including reject/rework burdens; N is accepted delivered blades and M is sum of calibrated accepted net blade masses / N. q_item = Q/N and q_ref = Q/sum of accepted net masses. Exclude packaging/reject mass and other blade configurations from denominator; align stocks and work in progress. |  |
| validate_utility_residual | Use the same site period and units to reconcile purchased imports plus actual on-site generation minus exports and storage change against assigned fabrication/surface/assembly/test demand plus shared residual and evidenced conversion losses. Shared rows include only unassigned residual. Investigate negative residual with period, calibration, allocation and combined uncertainty, never clip. Record generation fuel/water/emissions once and cancel paired internal transfers. |  |
| validate_water_closure | For each water-bearing input and output use its own actual water content and wet/dry basis: input moisture, fresh/dilution/quench/cleaning water, product/fluid retention, wet scrap/sludge, wastewater, evaporation, opening/closing stocks and actual reaction water production/consumption. Cancel paired internal returns. Investigate closure against combined measurement/sampling/allocation uncertainty; no universal tolerance. |  |
| validate_contained_species | For every metal/chemical species, match each term independently with its own grade assay, concentration, amount and wet/dry conversion for inputs, product, scrap, slag, captured dust, sludge, wastewater, releases and opening/closing stocks. Include actual species reactions and cancel paired internal returns. Gross steel/wastewater mass never equals contained iron/species mass. Closure uses combined measurement/sampling/allocation uncertainty, not invented yield. |  |
| validate_solvent_emissions | Balance each actual solvent supplied inside paint separately from added thinner against product retention, recovery, capture-media content, stocks, actual destruction and non-air wastes before assigning measured species-resolved air release. Captured/recovered solvent is not air emission. Fuel carbon balance may support actual CO2 with matched fuel carbon and other carbon outputs, but never establishes CO, NOx or metal aerosol; use separate applicable species evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing data for same delivered configuration, projected to process/lifecyclemodel |
| excluded_use | Earthmoving service, host manufacture, universal capacity equivalence or unreviewed separately sold part substitution |
| required_metadata | model, delivered BOM, make/buy, routes, net mass, period, plant, supply interfaces and collection protocols |
| required_quality_disclosure | unresolved UUIDs, missing empirical ranges, conditional routes, allocation and uncertainty |
| update_trigger | design, grade, wear package, provider, route, geography or voltage change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-blades | official_guidance | UNSD CPC Version 3.0 explanatory notes (2025-06-30), 44421 and 44429: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Blade versus self-propelled host classification; label does not prove route |
| dymax-abrasion-blades | handbook | Dymax Heavy Duty Abrasion U Blades: https://dymaxinc.com/attachments/abrasion-u-dozer-blades/ | Wear options, cutting-edge group and existing-arm interface, not universal recipe |
| dymax-dozer-guide | handbook | Dymax Dozer Product Guide, coal U-blade table and variant pages: https://dymaxinc.com/wp-content/uploads/2024/05/Dozer-Product-Guide-web.pdf | Model/liner/capacity/weight variants; no universal mass |
| cat-blade-components | handbook | Caterpillar, Your Cat Dozer Blade Level Indicator: https://www.cat.com/en_US/articles/for-owners/small-dozers/small-dozer-blade-level-indicator.html | OEM blade types, attachment/control components, not every sale configuration |
| cat-moldboard-patent | literature | Caterpillar Inc., WO2009002409A1 (filed 2008-06-13; published 2008-12-31), detailed description and figures 2–7: https://patents.google.com/patent/WO2009002409A1/en | Manufacturer original disclosure: panel versus one-piece cut/form/weld alternatives; not industry-wide process |
