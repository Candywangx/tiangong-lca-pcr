---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.urban-road-bus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Battery-electric single-deck urban road bus manufacturing

## 1. Scope and Applicability

Complete new single-deck battery-electric urban passenger road buses with declared steel load-bearing body-frame route. Declare rigid/articulated layout, model/VIN, body/chassis make-or-buy, passenger layout, battery chemistry/capacity and included pack boundary, electric driveline, auxiliaries and actual delivery fluid/SOC state. This is narrower than CPC49112; manufacturing delivery is the reference function.

Chassis-only and bare-body supply; coaches/intercity, double-deck, diesel/hybrid/fuel-cell/trolley buses and aluminium/composite structural-frame routes. Passenger transport service, passenger-km, driver/passenger/payload mass, depot chargers and infrastructure, route operation, lifetime battery replacement, maintenance and end-of-life are excluded. Factory acceptance charging/tests and rework remain manufacturing; shipment packaging and detached spare packs are outside M and separately disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.urban-road-bus |
| classification_refs | CPC:3.0:49112; narrower |
| covered_products | Complete new single-deck battery-electric urban passenger road buses with declared steel load-bearing body-frame route. Declare rigid/articulated layout, model/VIN, body/chassis make-or-buy, passenger layout, battery chemistry/capacity and included pack boundary, electric driveline, auxiliaries and actual delivery fluid/SOC state. This is narrower than CPC49112; manufacturing delivery is the reference function. |
| excluded_products | Chassis-only and bare-body supply; coaches/intercity, double-deck, diesel/hybrid/fuel-cell/trolley buses and aluminium/composite structural-frame routes. Passenger transport service, passenger-km, driver/passenger/payload mass, depot chargers and infrastructure, route operation, lifetime battery replacement, maintenance and end-of-life are excluded. Factory acceptance charging/tests and rework remain manufacturing; shipment packaging and detached spare packs are outside M and separately disclosed. |
| representative_product | A complete configured single-deck steel-frame electric city bus, with released passenger interior and installed traction storage/driveline. Chemistry, capacity, articulation and body architecture are separate variants, not interchangeable kilograms. |
| production_route | Steel body cut/form/join; actual corrosion/coating; running gear/driveline; battery/electrical integration; interior/auxiliaries; factory tests/charging and acceptance; actual shipment protection. Outsourced work and purchased chassis/bodies replace corresponding site work. |
| market_state | Accepted complete vehicle at manufacturing release in declared fitted battery/SOC and fluid state, without driver/passengers/payload or transport packing. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and factory acceptance of one declared complete urban bus configuration. |
| How much | 1 kg accepted net complete vehicle, a normalized share of the whole accepted unit, not independent passenger transport service. |
| How well | Actual released body/chassis/BOM, battery, electrical/HV, braking, door/glazing/interior and other model-specific acceptance. Record homologation/approval identifiers only when actually held; no universal certification, capacity, test threshold or road-test distance imposed. |
| How long or cycle | One manufacture/acceptance cycle; passenger service life, route distance and lifetime replacement cycles outside normalization. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete battery-electric single-deck urban road bus |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/VIN/BOM revision; single-deck layout and articulation; steel frame material/joints; chassis/body make-or-buy; dimensions; seating/standing layout and doors; pack chemistry/ratio/capacity/count/location/mass and supplier-contained scope; motor/axle/inverter topology; HVAC/refrigerant/coolant specification; fitted accessories; declared delivery SOC/fluid levels; net measured M; site/period; actual tests/rework; meter/provider/transport/treatment boundaries; detached spares/packing exclusions |

Mass reference identity remains unresolved; the available complete-vehicle identity uses item count and the bus-travel identity uses passenger distance. Neither is treated as a mass flow. Product metadata must preserve exact complete vehicle configuration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| electricity_units | body_electricity; coating_electricity; chassis_electricity; electrical_electricity; interior_electricity; release_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert measured wall kWh by3.6 MJ/kWh before normalization; record supply voltage/provider. Battery capacity and stored energy are configuration qualifiers, not vehicle mass. |
| gas_volume | natural_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain measured supplier gas volume with reference temperature/pressure and traceable corrections; no generic density/LHV conversion. |

Weigh the accepted complete fitted bus on a calibrated vehicle scale with no driver, passengers or payload and no shipment packing. A separate delivery-state record binds the installed battery and exact SOC, installed spares/accessories and specified retained coolant/refrigerant/lubricants to the same VIN/configuration; recoverable test water is excluded. Record gross reading, tare exclusions and any justified traceable correction. Catalogue curb weight, GVW, axle rating and battery capacity cannot replace measured M. Different fluid/SOC/configuration states require separate records, not an invented standard mass.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Bus manufacturer receives declared steel profiles/sheet, formulated coating products and purchased chassis/components or subassemblies; steelmaking/rolling, cells and supplier components are upstream. |
| starting_condition_role | Declared manufacturing foreground module starting point. |
| product_classification_scope | Complete new single-deck battery-electric urban passenger road buses with declared steel load-bearing body-frame route. Declare rigid/articulated layout, model/VIN, body/chassis make-or-buy, passenger layout, battery chemistry/capacity and included pack boundary, electric driveline, auxiliaries and actual delivery fluid/SOC state. This is narrower than CPC49112; manufacturing delivery is the reference function. |
| recursive_input_rule | Bought-in complete bus cannot be substituted for each part. Purchased painted body/chassis/pack stops at exact documented supply boundary and replaces its contained materials/processes. Internal frames/modules are transfers, not extra purchases; pack and cells must not both be counted. |
| upstream_dataset_requirement | Expanded assessment links compatible actual steel, coating, chassis, battery and other component suppliers, outsourced work, intersite/inbound transport, utilities and waste treatment. UUID is identity, not supplier LCI or numerical factor. Foreground alone is not complete cradle-to-gate. |
| disclosure | Declare all participating sites/periods and make-or-buy boundaries, chemistry variants, retained delivery state, tests/rework, recovery loops, utility carriers, providers and exclusions. Separate charging input from retained energy without double counting. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacturing | Daimler2019 steel-frame eCitaro case supports body joining, corrosion protection, equipment fit, battery integration and factory acceptance as an observed route. Current plant records govern chemistry and test parameters; no historical recipe/quantity made universal. | daimler-ecitaro-manufacture-2019 |
| boundary_sites | supplier_scope | Solaris2024 site roles corroborate separate steel-frame manufacture and electric-component/battery integration. Preserve site-to-site handoffs and actual supplier scope; site roles are not activity totals or allocation weights. | solaris-sustainability-2024 |
| boundary_service | transport | Exclude passenger transport operation and depot infrastructure. Include actual manufacturing acceptance test consumption and recovery; absence of propulsion exhaust does not imply zero factory emissions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| body | Steel body preparation and joining | required | Actual cut/form/join route for steel tube/sheet structure; bought-in subframes replace contained site stock/work. Supplier rolling and frame work remain upstream when outsourced. | foreground_production | per 1 kg reference flow |
| coating | Corrosion protection and body coating | required | Actual declared coating route; cleaning, phosphating, electrodeposition and cure are conditional site steps, not universal recipes. Outsourced painting and intersite transfer must be disclosed without duplicate coating inputs. | foreground_production | per 1 kg reference flow |
| chassis | Axles, wheels and driveline installation | required | Install actual released steering/driven axles, wheels and drive components. Supplier assembly boundaries control contained motor/brake/suspension duplication; purchased complete chassis replaces those individual inputs. | foreground_production | per 1 kg reference flow |
| electrical | Traction storage and electrical integration | required | Install one specified battery chemistry per variant and actual harness/cooling. Pack/cell manufacture is upstream when purchased; site module-to-pack work requires its own explicit inputs and measured utility inventory. | foreground_production | per 1 kg reference flow |
| interior | Passenger interior, glazing and auxiliaries | required | Install actual seating, glazing, doors, HVAC and released interior; optional equipment remains separately specified. Refrigerant contained in supplied unit is not another fill input. | foreground_production | per 1 kg reference flow |
| release | Commissioning, acceptance and weighing | required | Actual HV/electrical, brake/rain/road test and final release plan; record charging at wall, water make-up, recovery, defects/rework and declared handover SOC/fluid levels. No standard test distance or loss fraction assumed. | foreground_production | per 1 kg reference flow |
| packing | Shipment protection | conditional | Actual separately measured protection material only; excludes detached spares from vehicle M, disclose their separate supply. | foreground_production | per 1 kg reference flow |

Cards define individual candidate exchanges, not a complete universal bus BOM. Complete each actual vehicle BOM/route before claiming inventory coverage: add each distinct suspension, brake, steering, wheel-bearing, gearbox, driver seat, floor/side/roof panel, handrail, window, lamp, control unit, low-voltage battery, charging inlet, cable, heater, fluid, joining chemical and test purge not already contained in purchased assemblies. Select chemistry separately; absent conditional rows are not-applicable with evidence. Captured dust/sludge and treatment-bound liquid are waste, not elementary emissions. Add each actual measured release species and receiving medium separately. HFC-134a has no official Chinese baseName; the canonical chemical code is retained without inventing a localized official name.

### Process: Steel body preparation and joining (`body`)

Actual cut/form/join route for steel tube/sheet structure; bought-in subframes replace contained site stock/work. Supplier rolling and frame work remain upstream when outsourced.

#### Inputs

##### Product flows

###### Welded rectangular steel tube for bus load-bearing frame (`steel_tube`)

Actual released steel grade, cross-section, wall thickness and supplied tube state; bought-in frame replaces contained tube.

- Selected flow: Welded rectangular steel tube for bus load-bearing frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Cold-rolled low-carbon steel bus body sheet (`steel_sheet`)

Actual drawing grade/thickness and cold-rolled supply for each body panel; preserve net issues and nesting loss.

- Selected flow: Cold-rolled low-carbon steel bus body sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Solid low-alloy steel MIG welding wire (`welding_wire`)

Conditional actual MIG route with one grade/diameter; resistance or other joins use separate actual consumables, not assumed filler.

- Selected flow: Solid low-alloy steel MIG welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Argon welding shielding gas (`argon`)

Only actual pure argon supplied for one released weld route; mixed argon/CO2 gas is a separate exact formulated gas, not this row.

- Selected flow: Argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

###### Alternating current (`body_electricity`)

Actual below1kV grid-user cut/form/join/ventilation demand; no laser nameplate power as consumed energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Actual dry untreated segregated steel offcuts discharged; internal reusable tube remains transfer; no avoided-steel credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

##### Elementary flows

###### Particulate matter, particle size unspecified (`weld_pm`)

Conditional actual post-control outdoor-air weld/cutting particulate with unspecified size and subcompartment; measured outlet amount only, not captured filter dust.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_body`

### Process: Corrosion protection and body coating (`coating`)

Actual declared coating route; cleaning, phosphating, electrodeposition and cure are conditional site steps, not universal recipes. Outsourced painting and intersite transfer must be disclosed without duplicate coating inputs.

#### Inputs

##### Product flows

###### Tap water (`wash_water`)

Actual external municipal cleaning/rinse make-up; internal recirculation not repeated as purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Sodium hydroxide solution, 50% (`sodium_hydroxide`)

Conditional exact50% supplied cleaner ingredient mass, not NaOH active mass or50% operating bath; SDS controls actual recipe.

- Selected flow: Sodium hydroxide solution, 50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Zinc-phosphate conversion-coating solution (`zinc_phosphate`)

Conditional actual supplier formulation/concentration and supplied solution mass; other phosphates/pretreatment separate.

- Selected flow: Zinc-phosphate conversion-coating solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Waterborne epoxy cathodic electrodeposition primer (`epoxy_primer`)

Only actual epoxy-formulated primer and supplied solids/solution basis; external painted body replaces matching local primer.

- Selected flow: Waterborne epoxy cathodic electrodeposition primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Formulated polyurethane bus body topcoat (`pu_topcoat`)

Actual supplied mixed coating with declared resin, solvent, hardener ratio and solids; if purchased separately, split each chemical product.

- Selected flow: Formulated polyurethane bus body topcoat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Solvent free polyurethane adhesive (`pu_adhesive`)

Conditional actual moisture-cured solvent-free zero-VOC polyurethane adhesive per supplier composition; no automatic zero emissions or cure-CO2 factor.

- Selected flow: Solvent free polyurethane adhesive `669d2f68-79e9-47c2-96fa-316fc7d33b62`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Alternating current (`coating_electricity`)

Actual below1kV pumps, coating equipment, fans and electric cure demand including rejects/rework.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Natural gas for bus coating cure (`natural_gas`)

Conditional purchased furnace gas measured m3 at explicit billing/reference state and current supplier composition; no generic density/LHV.

- Selected flow: Natural gas for bus coating cure
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

#### Outputs

##### Waste flows

###### Spent bus-body alkaline washing solution for treatment (`wash_effluent`)

Actual segregated alkaline bath purge transferred to treatment with composition and wet mass; not elementary water emission.

- Selected flow: Spent bus-body alkaline washing solution for treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Wet zinc-phosphate pretreatment sludge (`phosphate_sludge`)

Conditional actual zinc-phosphating sludge wet mass with dry solids and handler; not generic coating slag.

- Selected flow: Wet zinc-phosphate pretreatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### Discarded polyurethane topcoat overspray (`paint_waste`)

Only actual unused unrecovered one formulated topcoat residue sent for treatment; retained solvent/moisture basis recorded.

- Selected flow: Discarded polyurethane topcoat overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional immediate fossil CO2 to outdoor air unspecified from actual site curing/adhesive carbon balance or monitoring; no vehicle exhaust assumed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

###### xylene (all isomers) (`xylene_air`)

Conditional measured total xylene isomers to outdoor unspecified air after controls; SDS and speciation establish identity, not total VOC or pure m-xylene.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_coating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating`

### Process: Axles, wheels and driveline installation (`chassis`)

Install actual released steering/driven axles, wheels and drive components. Supplier assembly boundaries control contained motor/brake/suspension duplication; purchased complete chassis replaces those individual inputs.

#### Inputs

##### Product flows

###### Finished bus front steering axle assembly (`front_axle`)

One released bus steering axle with supplier-contained brakes/suspension scope documented; avoid duplication.

- Selected flow: Finished bus front steering axle assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### Finished electric bus driven axle assembly (`drive_axle`)

One actual electric driven axle specification; declare whether hub motors/inverter included; standalone motor row only when separately supplied.

- Selected flow: Finished electric bus driven axle assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### Standalone bus traction motor (`traction_motor`)

Conditional separately supplied motor with actual topology/rating and mass; exclude motor already inside drive axle.

- Selected flow: Standalone bus traction motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### Bus traction inverter assembly (`inverter`)

Actual one released traction DC-to-AC inverter supply and cooling boundary; not cable or switchgear substitute.

- Selected flow: Bus traction inverter assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### New cured radial pneumatic bus tyre (`bus_tyre`)

Actual tyre size/load rating and supplied net mass, including only fitted/spare tyres in released BOM; no carcass/uncured tyre substitute.

- Selected flow: New cured radial pneumatic bus tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### Finished steel bus road wheel (`steel_wheel`)

One actual wheel drawing/finish and mass, excludes tyre and separately supplied axle.

- Selected flow: Finished steel bus road wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

###### Alternating current (`chassis_electricity`)

Actual below1kV axle/wheel/driveline installation demand.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis`

### Process: Traction storage and electrical integration (`electrical`)

Install one specified battery chemistry per variant and actual harness/cooling. Pack/cell manufacture is upstream when purchased; site module-to-pack work requires its own explicit inputs and measured utility inventory.

#### Inputs

##### Product flows

###### New LFP traction battery pack (`lfp_pack`)

Conditional actual complete LFP pack with cells, housing, BMS/cooling boundary, mass and capacity; not active cathode powder.

- Selected flow: New LFP traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### New NMC traction battery pack (`nmc_pack`)

Conditional actual NMC chemistry/ratio pack with complete declared BMS/housing scope; not LFP/NCA or recycled degraded powder.

- Selected flow: New NMC traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### New NCA traction battery pack (`nca_pack`)

Conditional actual separately identified NCA pack; chemistry is established only by supplier released records; no mixed battery-type row.

- Selected flow: New NCA traction battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Finished insulated copper bus wiring harness (`vehicle_harness`)

One released fitted harness part number including actual insulation/connectors/length and mass; no copper-only proxy.

- Selected flow: Finished insulated copper bus wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Formulated ethylene-glycol battery cooling liquid, 50% by mass (`coolant`)

Conditional actual50% glycol aqueous premix with inhibitor composition and supplied mass; drain/recover test liquid separately and retain only delivered fill in M.

- Selected flow: Formulated ethylene-glycol battery cooling liquid, 50% by mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

###### Alternating current (`electrical_electricity`)

Actual below1kV battery/harness installation and coolant-system leak-test demand; supplier precharge belongs upstream.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_electrical.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical`

### Process: Passenger interior, glazing and auxiliaries (`interior`)

Install actual seating, glazing, doors, HVAC and released interior; optional equipment remains separately specified. Refrigerant contained in supplied unit is not another fill input.

#### Inputs

##### Product flows

###### Finished bus passenger seat assembly (`passenger_seat`)

One released seat part number with actual frame/upholstery/restraints scope and mass; distinct driver seat separately added.

- Selected flow: Finished bus passenger seat assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

###### Finished laminated bus windscreen (`windscreen`)

One shaped released laminated windscreen including interlayer/heating when supplied; record mass and dimensions; other glass separate.

- Selected flow: Finished laminated bus windscreen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

###### Finished powered bus passenger door assembly (`passenger_door`)

One released door part number and actuating mechanism scope; different doors individually quantified.

- Selected flow: Finished powered bus passenger door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

###### Air-conditioning machines (`air_conditioner`)

Only actual separately supplied finished electric bus air-conditioning machine with recorded model/mass/refrigerant-contained boundary; heating unit and ducts are separate, no universal HVAC mix.

- Selected flow: Air-conditioning machines `a38dcbe4-4dd1-4ce8-a67b-5455ff82e9e0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

###### R134a refrigerant for factory charging (`r134a_charge`)

Conditional actual pure R134a factory net supply, charge/recovery/mass reconciled; omit if contained in supplied machine; other refrigerants separate.

- Selected flow: R134a refrigerant for factory charging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

###### Alternating current (`interior_electricity`)

Actual below1kV door/glazing/seat/interior fit-out demand.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_interior.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interior`

### Process: Commissioning, acceptance and weighing (`release`)

Actual HV/electrical, brake/rain/road test and final release plan; record charging at wall, water make-up, recovery, defects/rework and declared handover SOC/fluid levels. No standard test distance or loss fraction assumed.

#### Inputs

##### Product flows

###### Tap water (`rain_test_water`)

Actual external rain-test/wash make-up only; recycled test loop not purchased repeatedly; purge/treatment distinct.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

###### Alternating current (`release_electricity`)

Actual below1kV charging at wall including losses, HV checks, rain/brake and factory road tests; avoid battery-discharge energy input counted twice.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

#### Outputs

##### Product flows

###### Complete battery-electric single-deck urban road bus (`finished_machine`)

1kg normalized share of complete accepted bus with fitted battery, cabin and declared delivery fluid/SOC state; no passengers, driver, payload or shipment packing in M.

- Selected flow: Complete battery-electric single-deck urban road bus
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Elementary flows

###### HFC-134a (`hfc_air`)

Conditional measured actual factory R134a charging/test leakage after recovery to outdoor unspecified air; no default loss, lifetime leakage or high-stack assumption.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`

### Process: Shipment protection (`packing`)

Actual separately measured protection material only; excludes detached spares from vehicle M, disclose their separate supply.

#### Inputs

##### Product flows

###### Polyethylene film (`pe_film`)

Conditional actual PE shipment protection, supplier recipe/thickness and mass; no universal whole-bus wrapping requirement; excluded from M.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

###### Corrugated cardboard (`corrugated_board`)

Conditional actual C/E/F board fiber≥80% containing recycled material per identity; otherwise separate exact board. Packaging outside M.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_demand | shared_operations | Subdivide by site/configuration/work order using measured cp_allocation demand first. Allocate shared cut/join, bath/oven, assembly and test load using measured causal load/time or attributable consumption, reconciled to total meter and excluded loads. No default kg, seat-count or passenger-km allocation. |  |
| allocation_variants | bus_variants | Keep pack chemistry/capacity, articulation, body/coating and supplied chassis variants separate. A residual mass/economic fallback needs measured justification, sensitivity and review; acceptance rejects/rework burden accepted output. |  |
| allocation_recovery | outputs | Internal reusable steel/water/paint/charged energy transfers do not earn avoided-production credits. Record external scrap and actual treatment; no automatic recycling/module-D credit. Genuine marketable coproducts need explicit quality, amount and reviewed treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each VIN/configuration or traceable homogeneous batch | same manufacturing period | same site and accepted complete delivery state | accepted net mass per unit | vehicle-scale calibration; empty-payload weighing; bound delivery-state record; signed release |
| cp_body | body | each atomic process row | measurement | tube/sheet grade/drawing/dimensions; issues/returns; weld map/wire/gas specification; cut/join time/kWh; scrap mass; captured dust; post-control particulate concentration/volume | Weigh each material net issue and segregated scrap; trace drawing/nesting/join work, meter electricity and actual gases; measure outdoor outlet particulate with sampling conditions, not a nameplate or default welding factor. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_coating | coating | each atomic process row | measurement | supplier formulation/SDS/concentration/solids; bath make-up/purge/recovery; coating retained dry mass; kWh/gas reference state; sludge moisture; treatment handler; xylene speciation; fossil carbon retention/releases | Measure each supplied solution/coating and wet waste separately, reconcile bath stock and retained film; meter actual cure carriers. Measure post-control xylene species and gas volume/time; use actual fossil-carbon balance or direct monitoring for CO2. No historical bath volumes/cure temperatures or recipe assumed. | kg; MJ; m3 | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_chassis | chassis | each atomic process row | measurement | supplier axle/driveline/wheel/tyre part numbers; supplied masses; included motor/brake/suspension scope; torque/fit records; kWh; rejects | Reconcile released fitted BOM and individual component masses with purchased chassis/subassembly boundary; no rail/trailer substitute or item-count UUID passed as kg. Meter actual assembly work including rework. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_electrical | electrical | each atomic process row | measurement | pack supplier/chemistry/ratio/model/mass/capacity/SOC; cell/module versus complete pack boundary; BMS/cooling/harness scope; coolant recipe/retained fill/recovery; kWh; leak/HV results | Trace every installed pack and its contained cooling/BMS inventory, actual issue/return and precharge boundary; weigh fluid supply/recovery and retained mass. Meter installation/test utilities; site pack assembly adds exact housing/connectors/thermal material operations rather than guessing cell manufacture. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_interior | interior | each atomic process row | measurement | each seat/door/glass/HVAC part number and mass; supplier-contained refrigerant/coolant; net charge/recovery; actual floor/trim/duct/handrail and driver-seat BOM; kWh | Weigh or use traceable supplier mass for each finished installed item; distinguish glass area from mass and unfinished from released seat. Reconcile separately supplied refrigerant against contained charge to prevent duplicate supply. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_release | release | each atomic process row | measurement | VIN/configuration/test plan/results; wall charging kWh and start/end SOC; imported precharge; rain water make-up/purge; charging/refrigerant recovery and leaks; brake/road-test records; retained fluids; M | Retain actual acceptance results and metered wall charging/test demand, including charger losses and rework, without a second battery discharge input; measure new rain water and actual refrigerant loss net of recovery. Bind empty-payload scale record to exact delivery SOC/fluid/BOM. | kg; MJ | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_packing | packing | each atomic process row | measurement | PE recipe/thickness/mass; board flute/fiber/recycled content/mass; issues/returns; detached spare supply | Weigh each actual protection material and keep outside M; separately disclose detached spare parts/packs and actual other packaging as atomic exchanges. | kg | each work order/batch/VIN; monthly closure | complete declared production year or justified shorter complete batch; matched accepted count | same configuration/sites; outsourcing disclosed | attributable exchange amount / accepted units | calibration; released supplier/BOM; stock/count closure; missing data |
| cp_allocation | manufacturing | shared_load | measurement | total supplied demand; submeter load/time; served variants; excluded loads | Measure exchange-specific causal demand/time and served work orders; justify allocation driver and reconcile all shares to meter total. | MJ; m3; h | each shared batch; monthly reconciliation | same production period | all served sites/variants | partition measured causal demand; attributable amount / accepted units | meter closure; sensitivity; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; steel_sheet; welding_wire; argon; body_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; zinc_phosphate; epoxy_primer; pu_topcoat; pu_adhesive; coating_electricity; natural_gas; wash_effluent; phosphate_sludge; paint_waste; fossil_co2_air; xylene_air; front_axle; drive_axle; traction_motor; inverter; bus_tyre; steel_wheel; chassis_electricity; lfp_pack; nmc_pack; nca_pack; vehicle_harness; coolant; electrical_electricity; passenger_seat; windscreen; passenger_door; air_conditioner; r134a_charge; interior_electricity; rain_test_water; release_electricity; hfc_air; pe_film; corrugated_board | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Derive q_item from same variant/period net issues or attributable utility/waste/species divided by accepted count; retain stock change and reject/rework treatment. Normalize by measured M with unchanged kg, MJ or gas m3 numerator. Actual count-based supplier quantities require measured mass per exact part and a separately recorded conversion; do not reuse a count/area/energy-reference UUID as a mass identity. Wall charge, precharged purchased pack energy and retained delivery SOC are distinct records. Aggregate separately normalized compatible variants only with disclosed mass weights and uncertainty.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | flows | Verify actual supplied material/state/chemistry/component boundaries and reference-property units; battery powder/cell/pack and transport service/vehicle are distinct. | supplier specifications; state100 identity/property/unit audit |
| quality_complete | bus | Reconcile all fitted BOM components and retained fluids to measured complete M; no residual mass invented for unknown components. Complete actual route and supplier/waste/transport coverage before asserting completeness. | vehicle scale; VIN BOM; inventory/stock balances |
| quality_acceptance | release | Retain actual released HV, electrical, brake, leak, door and other relevant tests with parameters/results; no inherited manufacturer approval or generic thresholds. | signed release; calibrated instruments; homologation records if held |
| quality_period | records | Declare participating sites, matched representative period, make-or-buy/variants, primary coverage, allocation uncertainty and source age. Historical source architecture is not current numerical LCI. | work orders; supplier versions; meter closure; uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | Require1kg reference output and cp_mass measured complete-unit M; bind empty-payload weighing to exact VIN/BOM and delivery fluid/SOC state. No GVW, curb catalogue value, passenger distance or battery capacity denominator. |  |
| validation_basis | inventory | Each applicable non-reference row explicitly applies normalize_mass with linked protocol and same accepted count/period/configuration; units and reference properties must match one atomic exchange. |  |
| validation_supply | assemblies | Check bought-in body/chassis/pack boundaries, motors inside axle, refrigerant inside HVAC and internal subassemblies/recovery to prevent duplicate inputs. Three pack chemistries are conditional separate variants, not a recipe requiring all three. |  |
| validation_emissions | elementary | Require measured or measured-balance post-control particulate, xylene species, immediate fossil CO2 and factory R134a leakage with exact receiving medium. Captured dust, wastewater to treatment, biogenic CO2 and total VOC are not substitutes; no default leaks/exhaust or lifetime rates. |  |
| validation_coverage | dataset | Distinguish measured/calculated/estimated/missing/excluded/not-applicable. Report unresolved identities/providers/amounts and omitted route coverage; passing structural checks neither approves science nor establishes full cradle-to-gate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Exact configured steel-frame single-deck electric urban bus manufacturing module for declared sites/period, with expanded upstream modelling only after independent supplier/transport/treatment completeness assessment. |
| excluded_use | Passenger-km or lifetime public-transport comparison, generic bus average, operation/charging infrastructure, other structural/powertrain routes or unsupported complete cradle-to-gate claims. |
| required_metadata | PCR id; VIN/model/BOM; body/chassis/pack supplier boundaries; steel structure/articulation; passenger layout; chemistry/capacity/pack mass; driveline/HVAC/fluid/SOC state; measured M; site/period; actual tests/rework; utilities/providers/transport/waste; allocation; packing/exclusions; source version. |
| required_quality_disclosure | Primary measured coverage; unresolved identities/provider/amount; make-or-buy and omitted routes; balances/recovery; source-age/limits; allocation and unit corrections; uncertain release measurements and review status. |
| update_trigger | Body/chassis structure, battery chemistry/capacity/supplier boundary, driveline, interior/HVAC, delivery-state or test change; supplier/site/utility revision; new representative period or resolved gap. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| daimler-ecitaro-manufacture-2019 | handbook | Daimler Truck,9May2019, manufacture of Mercedes-Benz eCitaro at Mannheim; named Bodyshell, Cathodic dip painting, Installation, Main assembly, Finishing shop and Thorough test drive sections. https://www.daimlertruck.com/en/newsroom/pressrelease/completely-integrated-into-the-production-process-the-manufacture-of-the-mercedes-benz-ecitaro-at-the-bus-plant-in-mannheim-43250877 | Historical steel-body process decomposition, installed battery/cooling and acceptance architecture only; current foreground governs actual recipe, topology and parameters. No temperatures, bath volume, thickness, pack counts, masses, test distance, emissions or cycle duration adopted. |
| solaris-sustainability-2024 | handbook | Sustainability at Solaris2024,PDF/printedp.5, Solaris sites, as at31December2024. https://www.solarisbus.com/public/assets/content/firma/esg/2025/Sustainability_at_Solaris_2024.pdf | Independent manufacturer steel-frame and electric-component/battery-integration site roles; not numerical LCI, universal factory route, allocation weights or methodology approval. |
