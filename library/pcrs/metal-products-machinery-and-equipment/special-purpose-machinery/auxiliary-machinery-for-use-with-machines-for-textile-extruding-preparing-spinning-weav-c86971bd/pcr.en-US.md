---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.auxiliary-machinery-for-use-with-machines-for-textile-extruding-preparing-spinning-weav-c86971bd
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Auxiliary machinery for use with machines for textile extruding, preparing, spinning, weaving, knitting or the like

## 1. Scope and Applicability

This candidate governs manufacture of a complete, separately supplied auxiliary apparatus specifically serving textile extrusion, preparation, spinning, weaving or knitting equipment. A rotary dobby and an electronic Jacquard shedding machine are evidenced examples, not a universal construction recipe. Automatic stop motions and shuttle-changing mechanisms may qualify only with an actual delivered apparatus specification. Card-reducing/copying/punching/assembling auxiliary machines need the same evidence. Do not infer auxiliary status from the name of a spindle, hook, harness, sensor or controller.

CPC3 identifies auxiliary machinery separately from main textile machines and textile-machine parts. Exclude complete extrusion/spinning/winding machines, looms and knitting machines, separately sold replacement parts/accessories, general-purpose fans/compressors, textile products and downstream installation or use. A dedicated ventilation system supplied within a Jacquard is an included component, not authority to include stand-alone generic fans. Classification correspondence is corroboration, not acceptance of a mapping. Sources: `un-cpc3-textile`, `un-hs844811`, `staubli-s3200`, `staubli-sx-pro`, `bonas-ji`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.auxiliary-machinery-for-use-with-machines-for-textile-extruding-preparing-spinning-weav-c86971bd |
| classification_refs | CPC 3.0 44614 |
| covered_products | Complete dedicated textile auxiliary apparatus; evidenced dobby and Jacquard; other families require actual apparatus boundary evidence. |
| excluded_products | Main textile machines; separately delivered parts/accessories; generic ventilation; textile products. |
| representative_product | Configured electronic Jacquard head with declared controller and included harness; not a surrogate UUID for the category. |
| production_route | Configuration-controlled make/buy, housing/mechanism fabrication, conditional foundry and surface routes, assembly, factory test, packaging. |
| market_state | New accepted auxiliary at manufacturer gate, net equipment excluding transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the declared auxiliary configuration. |
| How much | 1 kg accepted complete auxiliary, normalized from the same configuration. |
| How well | Released according to actual drawing, control/synchronization specification and acceptance test. Mass is not functional equivalence between technologies. |
| How long or cycle | One factory production and acceptance cycle; service lifetime is outside scope. |
| reference_flow_link | finished_auxiliary |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete textile auxiliary machinery |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | auxiliary family; model/configuration; host-machine interface; dobby shafts or Jacquard hook/modules; drive interface; controller/harness included; net mass; make/buy; factory and year; acceptance criteria; utility voltage and geography |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| unit_energy | electricity and natural_gas | Net calorific value | MJ | Retain the original energy meter basis; 1 kWh = 3.6 MJ. Fuel mass to MJ requires actual fuel heating value, not machine rated power. |
| material_state | material, chemical and species records | actual exchange property | declared unit | Separate gross formulated mass, contained chemical mass, moisture and metal assay. Preserve pressure/temperature for air and supply state for oil. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-delivered verified stock, machined casting or completed component at plant receiving; upstream production is connected once. |
| starting_condition_role | foreground_input |
| product_classification_scope | Complete textile auxiliaries, not host machine or replacement components. |
| recursive_input_rule | A bought auxiliary incorporated in the output is an upstream product; do not recreate its embedded manufacture or assign output identity to its parts. |
| upstream_dataset_requirement | Match material grade, treatment, module configuration, delivery state, geography and period; unresolved provider links are disclosed. |
| disclosure | Record included frame/stand, harness, cooling and controller; distinguish factory-owned test host from delivered apparatus. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_gate | Include receiving, actual in-house fabrication, assembly, factory test, rework, treatment and packaging. Exclude later transport, installation, yarn/fabric production, maintenance and end-of-life; upstream bought burdens enter once. | un-cpc3-textile; bonas-ji |
| boundary_route | Use actual route and make/buy matrix for every subassembly. A bought motor/controller/module includes its embedded metals, winding, board and production oil; no duplicate raw inputs. Conditional routes are neither universal nor zero when unknown. | staubli-s3200; staubli-sx-pro; bonas-ji |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Housing, support and mechanism fabrication | conditional | In-house cutting, welding and machining or bought machined castings; selected by make/buy records. | foreground | 1 kg reference flow |
| foundry | Conditional housing casting | conditional | Only if moulding, melting and casting occur in the foreground; not assumed from a monobloc housing. | foreground | 1 kg reference flow |
| surface | Conditional cleaning and surface treatment | conditional | Actual bath, powder/liquid coat, heat treatment or outsourced completed surface determines inclusion. | foreground | 1 kg reference flow |
| assembly | Technology-specific auxiliary assembly | required | Dobby transmission or Jacquard selection/control system; optional motor, cooling, pneumatic and hydraulic circuits only if present. | foreground | 1 kg reference flow |
| test_pack | Factory acceptance and packaging | required | Record actual control/synchronization/load tests and pre-gate packaging. | foreground | 1 kg reference flow |

The following atomic cards form a conditional starting schedule, not a fixed recipe. Verify actual grades and formulations from certificates, drawings and SDS; for any different material or additional exchange add its own specific row. Welding wire/shield gas, heat-treatment quench, coating solvent, solder, PCB fabrication chemicals, refrigerant, hydraulic fill, cooling water, dust and emission species are required separately whenever the actual route uses or generates them. Supplier-owned completed operations stay upstream. No universal motor, housing alloy or oil specification is imposed.

### Process: Housing, support and mechanism fabrication (`fabrication`)

#### Inputs

##### Product flows

###### S235JR hot-rolled steel plate (`plate`)

Only when the approved BOM specifies this grade for a fabricated support.

- Selected flow: S235JR hot-rolled steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### C45 steel round bar (`shaft`)

Only for in-house machined shafts with this verified grade; purchased shafts exclude this raw input.

- Selected flow: C45 steel round bar
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### EN-GJL-250 machined housing casting (`casting`)

Only for a bought housing with verified iron grade and completed treatment.

- Selected flow: EN-GJL-250 machined housing casting
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Water-miscible mineral-oil cutting fluid concentrate (`machining_fluid`)

Only for the actual machining formulation; disclose concentration and separately record dilution water.

- Selected flow: Water-miscible mineral-oil cutting fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Deionized process water (`water`)

Only when used for dilution or washing; measure make-up rather than recirculation throughput.

- Selected flow: Deionized process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### Outputs

##### Waste flows

###### C45 steel machining swarf (`steel_scrap`)

Only for this grade; segregate oil and measure dry metal mass and treatment destination.

- Selected flow: C45 steel machining swarf
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_fabrication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### Process: Conditional housing casting (`foundry`)

#### Inputs

##### Product flows

###### EN-GJL-250 iron foundry charge (`iron_charge`)

Only for verified in-house housing casting; split constituent charge grades and additions in the actual dataset.

- Selected flow: EN-GJL-250 iron foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Silica foundry sand (`sand`)

Only for a sand mould route; measure new make-up, internal reclaimed sand transfers cancel.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Sodium silicate foundry binder (`binder`)

Only if this actual binder is documented; other binders require their own chemical rows.

- Selected flow: Sodium silicate foundry binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### Outputs

##### Waste flows

###### Spent silica foundry sand with sodium silicate binder (`spent_sand`)

Only for the corresponding mould route; retain waste composition and receiver interface.

- Selected flow: Spent silica foundry sand with sodium silicate binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_foundry.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_foundry`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### Process: Conditional cleaning and surface treatment (`surface`)

#### Inputs

##### Product flows

###### Epoxy-polyester powder coating (`powder`)

Only for a documented powder-coat route; retained film, overspray and recovered stocks must reconcile.

- Selected flow: Epoxy-polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Sodium carbonate (`cleaner`)

Only when identified in the actual aqueous cleaning bath; record active mass and solution water separately.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Pipeline natural gas (`natural_gas`)

Only for an actual gas-fired curing or heat-treatment burner; meter fuel and measured heating value.

- Selected flow: Pipeline natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### Outputs

##### Waste flows

###### Metal-bearing aqueous cleaning sludge (`sludge`)

Only when generated; record moisture, metal assays and disposal interface.

- Selected flow: Metal-bearing aqueous cleaning sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2`)

Only for on-site fossil combustion, from metered carbon and oxidation evidence; no purchased-power stack emissions here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_surface.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### Process: Technology-specific auxiliary assembly (`assembly`)

#### Inputs

##### Product flows

###### Dobby cam transmission assembly (`cam_module`)

Only when bought complete for the declared dobby configuration; internal fabrication is separately modelled.

- Selected flow: Dobby cam transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Jacquard electronic micro-selector module (`selection_module`)

Only for a configured Jacquard with this bought module; record module revision and channel count.

- Selected flow: Jacquard electronic micro-selector module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Jacquard electronic controller (`controller`)

Only when supplied inside the reference assembly; a shared loom controller is outside unless included at release.

- Selected flow: Jacquard electronic controller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Steel deep-groove ball bearing (`bearing`)

Only when present; identify actual dimensions, seals and lubrication state per separate bearing specification.

- Selected flow: Steel deep-groove ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Jacquard polyester cord harness (`harness`)

Only when this material and harness are included in the released configuration; separately supplied replacement harness excluded.

- Selected flow: Jacquard polyester cord harness
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Three-phase induction electric motor (`motor`)

Only when the auxiliary has its own included motor; loom-driven auxiliaries have no imposed motor input.

- Selected flow: Three-phase induction electric motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Pneumatic directional control valve (`pneumatic`)

Only for an evidenced pneumatic actuator configuration; record size and supply pressure interface.

- Selected flow: Pneumatic directional control valve
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Hydraulic cylinder (`hydraulic`)

Only for an evidenced hydraulic configuration; record stroke, seals and filled or dry supply state.

- Selected flow: Hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### ISO VG 68 mineral lubricating oil (`oil`)

Only when actual specification requires it; distinguish shipped fill, test loss and recovered oil.

- Selected flow: ISO VG 68 mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

### Process: Factory acceptance and packaging (`test_pack`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Chinese 1–35 kV user-side grid electricity only. Allocate fabrication, assembly and factory tests using meters; other countries or voltages need a matched interface.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Compressed air, at factory supply pressure (`air`)

Only when purchased for actual tests or assembly; disclose pressure, temperature and dry-volume basis. In-house compression uses electricity once, not bought air plus its electricity.

- Selected flow: Compressed air, at factory supply pressure
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Polyester filament yarn (`test_yarn`)

Only if consumed in factory acceptance testing; specify yarn count, loss and recovered stock. This is not downstream commercial textile production.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Kiln-dried pine timber crate (`pack_wood`)

Only for this actual packaging type; exclude transport packaging from accepted net machine mass.

- Selected flow: Kiln-dried pine timber crate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Low-density polyethylene stretch film (`pack_film`)

Only when used for release packaging; other packaging materials are separate rows.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

#### Outputs

##### Product flows

###### Complete textile auxiliary machinery (`finished_auxiliary`)

Accepted declared configuration excluding transport packaging.

- Selected flow: Complete textile auxiliary machinery
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

##### Waste flows

###### Spent ISO VG 68 mineral lubricating oil (`waste_oil`)

Only discharged factory test oil; shipped fill stays in product, recovered internal oil is not double-counted.

- Selected flow: Spent ISO VG 68 mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

###### Waste polyester filament yarn (`test_waste`)

Only actual test residue; document retained product, recovery and waste separately.

- Selected flow: Waste polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_mass; cp_test_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_pack`
- Sources: `bonas-ji`; `staubli-s3200`; `staubli-sx-pro`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_causal | Subdivide configuration, route and meter records first. Allocate unavoidable shared shop electricity, air, heat and rejects by documented causal machine-hours/load; never by nameplate rating alone. Retain before/after allocation totals and sensitivity. This is a foreground collection requirement. |  |
| allocation_scrap | Segregate steel swarf, foundry returns, coating recovery and discarded modules. Cancel paired internal transfers; record external recoverable scrap and treatment once under the declared recycling model, without unsupported avoided-product credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_pack | reference output | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each configuration and release | production reporting period | declared plant gate | accepted net mass per machine | calibration and weighing certificate |
| cp_fabrication | fabrication | atomic exchanges | factory records | row_id; material/specification; gross/contained amount; meter; batch; inventory opening/closing; accepted count; allocation driver; test load and duration; recipient | Reconcile issue/return ledgers, calibrated meters, BOM revision, waste manifests and accepted serial numbers. Derive each attributable raw amount per accepted machine of the same configuration; retain shared period totals and causal allocation. | row unit | batch and monthly reconciliation | same production reporting period | declared route at plant | attributable exchange amount / accepted machines | purchase/SDS/grade certificates; meters; stock reconciliation; acceptance logs |
| cp_foundry | foundry | atomic exchanges | factory records | row_id; material/specification; gross/contained amount; meter; batch; inventory opening/closing; accepted count; allocation driver; test load and duration; recipient | Reconcile issue/return ledgers, calibrated meters, BOM revision, waste manifests and accepted serial numbers. Derive each attributable raw amount per accepted machine of the same configuration; retain shared period totals and causal allocation. | row unit | batch and monthly reconciliation | same production reporting period | declared route at plant | attributable exchange amount / accepted machines | purchase/SDS/grade certificates; meters; stock reconciliation; acceptance logs |
| cp_surface | surface | atomic exchanges | factory records | row_id; material/specification; gross/contained amount; meter; batch; inventory opening/closing; accepted count; allocation driver; test load and duration; recipient | Reconcile issue/return ledgers, calibrated meters, BOM revision, waste manifests and accepted serial numbers. Derive each attributable raw amount per accepted machine of the same configuration; retain shared period totals and causal allocation. | row unit | batch and monthly reconciliation | same production reporting period | declared route at plant | attributable exchange amount / accepted machines | purchase/SDS/grade certificates; meters; stock reconciliation; acceptance logs |
| cp_assembly | assembly | atomic exchanges | factory records | row_id; material/specification; gross/contained amount; meter; batch; inventory opening/closing; accepted count; allocation driver; test load and duration; recipient | Reconcile issue/return ledgers, calibrated meters, BOM revision, waste manifests and accepted serial numbers. Derive each attributable raw amount per accepted machine of the same configuration; retain shared period totals and causal allocation. | row unit | batch and monthly reconciliation | same production reporting period | declared route at plant | attributable exchange amount / accepted machines | purchase/SDS/grade certificates; meters; stock reconciliation; acceptance logs |
| cp_test_pack | test_pack | atomic exchanges | factory records | row_id; material/specification; gross/contained amount; meter; batch; inventory opening/closing; accepted count; allocation driver; test load and duration; recipient | Reconcile issue/return ledgers, calibrated meters, BOM revision, waste manifests and accepted serial numbers. Derive each attributable raw amount per accepted machine of the same configuration; retain shared period totals and causal allocation. | row unit | batch and monthly reconciliation | same production reporting period | declared route at plant | attributable exchange amount / accepted machines | purchase/SDS/grade certificates; meters; stock reconciliation; acceptance logs |

For a single configuration reporting period, let N be accepted units, Q be the attributable exchange total, and the accepted net masses be measured individually. Compute q_item = Q / N and the configuration-average M = sum of accepted net masses / N; then q_ref = Q / sum of accepted net masses, equivalent to normalize_mass. The BOM, production, meter and test periods must match. Include rejected production and rework burdens in Q; rejected mass never enters the accepted denominator. Do not average different auxiliary technologies, delivered options or module counts. Preserve individual measurements and the causal allocation record.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all inventory rows | Never pool dobby/Jacquard or different module/drive counts without disclosed separate configurations. Every bought assembly versus fabricated material is mutually reconciled. | drawings; approved make/buy BOM |
| balances | material, chemical and species records | For each actual material and chemical species close inputs plus opening stocks against accepted product, rejected product, external scrap, treatment transfers, emissions and closing stocks, including measured reaction formation/consumption. Measure moisture and the relevant metal/species assay separately on EACH applicable term: feedstock, product, swarf, dust, slag, sludge and residual solution; do not impose one common assay or equate gross metal/sludge mass with contained element. Paired internal transfers cancel only with matched material, species, period and quantity. Report residual and combined uncertainty from actual weighing, sampling, assays, meters and allocation; investigate significant disagreement using that documented uncertainty, never an invented universal tolerance. | weighing; assays; stock records |
| water_closure | water and moisture records | Close purchased and extracted make-up water, input moisture and opening liquid stocks against shipped moisture, wastewater, sludge/sand moisture, test discharge, evaporation and closing stocks; include reaction water formed/consumed when relevant. Internal cooling, dilution and return water cancel as paired transfers, not fresh inputs. Use actual evaporation measurement or independently supported calculation and quantify its uncertainty. | water meters; moisture samples; stock and reaction records |
| solvent_closure | actual solvent or organic coating records | For each actual solvent species, reconcile charged amount and opening stock to retained film, recovered solvent, capture media, wastewater, sludge, air release and closing stock; destruction requires actual control-device destruction evidence and reaction products. Capture is not destruction, and non-air residuals do not disappear. Keep uncertainties from flow, composition and control performance explicit. | SDS; species assays; control reports; residue manifests |
| emissions | emission species records | Add each actual species and air/water/soil compartment separately. Fuel carbon balance cannot prove CO, NOx or coating solvent emissions; use species-specific measured/factor evidence and controls. No default empirical range is supplied. | test reports; SDS; factor provenance |
| coverage | all inventory rows | Document present, absent, not applicable and unknown separately. Unknown grade, UUID, provider or amount is a gap, not zero. Include actual scrap, rework, packaging and pre-gate test textile/utility media. | route coverage and gap register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Verify complete auxiliary delivery boundary and actual host interface; reject main-machine, spare-part or textile-product reference substitution. | un-cpc3-textile; un-hs844811 |
| validate_measurement | Require positive measured same-configuration net mass, accepted output linkage, every row protocol and explicit q_item/M conversion; packaging excluded from M. Factory metering rather than rated power establishes consumption. |  |
| validate_completeness | Check full route/make-buy coverage, stock balances and upstream burdens once. Require supplier identity for each concrete dataset and species-specific emissions. Unresolved generic output identity blocks finalized identity/publication even when measurement contract passes. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing datasets for the declared complete auxiliary configuration and downstream process/lifecyclemodel projections. |
| excluded_use | Textile mill operation, host-loom manufacture, generic accessory production or mass-only comparisons of function. |
| required_metadata | Family, model, interfaces, module/shaft count, included components, make/buy route, plant/year, measured net mass and acceptance. |
| required_quality_disclosure | UUID/provider and chemical-grade gaps, actual measured values, allocation, exclusions and source limits. No invented lifetime or efficiency. |
| update_trigger | BOM/configuration, route, supplier, controller/selection mechanism or acceptance test changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-textile | official_guidance | UNSD CPC Version 3.0 Explanatory Notes (30 June 2025), pp. 237–238. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current auxiliary/main-machine/parts boundary. |
| un-hs844811 | official_guidance | UNSD HS 2012 844811. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/32/844811 | Dobby/Jacquard and card machinery examples; correspondence expressly CPC2.1, corroborative only. |
| staubli-s3200 | handbook | Stäubli Rotary dobby series S3200, public product specification. https://www.staubli.com/global/en/textile/products/dobby-machine/rotary-dobby-series-s3200.html | Housing, transmission, control and conditional cooling configuration; no grade or factory energy defaults. |
| staubli-sx-pro | handbook | Stäubli SX PRO, public product specification. https://www.staubli.com/global/en/textile/products/jacquard-machine/flat-terry-technical-fabric-sx-pro.html | Knife/selection modules, integrated power, controller, ventilation and configured harness; counterexample to universal dobby recipe. |
| bonas-ji | handbook | BONAS Ji Jacquards, Product tour. https://bonas.be/components/ji-jacquards | Independent electronic microselection, double-cam drive, controller and customized harness technology. No manufacturing mass/energy factor. |
