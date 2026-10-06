---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.backhoe-loader
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of configured wheeled backhoe loaders

## 1. Scope and Applicability

Factory manufacture of a new complete self-propelled wheeled backhoe loader: one chassis integrates front loader arms/bucket, rear backhoe boom/dipper/bucket with limited swing rather than a 360-degree revolving superstructure, stabilizer legs, operator station, drivetrain and hydraulic/control systems. The representative route uses a diesel engine and an enclosed cab; variants must declare their own BOM, operator station, options and M. Battery-electric machines require a separate route expansion before reuse. Historical JCB2015 and Deere2023 originals support configuration examples, not universal construction, quantities or current production. Exclude front-loader-only machines,360-degree revolving excavators, agricultural traction tractors with separately delivered implements, other n.e.c. earthmoving/compacting/boring machines, separately supplied parts, remanufacture, customer excavation/loading service, moved earth, use-phase fuel, maintenance, service life and end of life. Manufacturing mass is the unit of analysis, not digging productivity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.backhoe-loader |
| classification_refs | CPC 3.0 44427; narrower candidate boundary; no mapping acceptance asserted |
| covered_products | Complete configured wheeled backhoe loader with integrated front/rear working equipment and stabilizers |
| excluded_products | Front-loader-only machines; revolving excavators; other earthmoving machinery; components; customer service |
| representative_product | One declared diesel wheeled backhoe loader with enclosed cab and specified installed buckets |
| production_route | Receipt/BOM control; actual structural fabrication and finishing; bought-module integration; first fill; model-specific functional acceptance; optional protection |
| market_state | Accepted new complete configured machine at factory gate, with declared retained fluids/fuel |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete declared wheeled backhoe-loader configuration |
| How much | 1 kg accepted net machine; actual measured M kg represents one complete machine |
| How well | Meet the actual configuration-specific structural, steering/braking, hydraulic leak/pressure/function, loader/backhoe/stabilizer, electrical/control and functional acceptance plan; retain actual limits/results without universal load, reach or stability thresholds |
| How long or cycle | One manufacturing delivery; no service life or earthmoving cycle imposed |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mechanical shovels, excavators and shovel loaders, except front-end shovel loaders and machinery with a 360-degree revolving superstructure, moving, grading, levelling, scraping, excavating, tamping, compacting, extracting or boring machinery n.e.c., self-propelled, for earth, minerals or ores `0ce8b891-f49b-4709-8df2-931146a4bf91` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model/serial; single configuration and BOM revision; wheel/drive/steering layout; engine/transmission/axles; loader arms and front bucket; backhoe boom/dipper/rear bucket and swing limit; stabilizer design; hydraulic pump/valves/cylinder designs; tyres/rims; enclosed-cab or canopy state; controls; supplier completeness; installed options/counterweight; acceptance plan/results; fluid concentration and retained fuel/fill state; measured net M; site/period/gates; packaging/operator/soil/loose-spare exclusions |

Declare all qualifiers in dataset metadata or equivalent notes. Weigh the accepted configured machine including installed buckets, options and actual retained fluids/fuel; exclude operator, payload, packaging and transport fixtures. JCB physical p.21 and Deere physical p.7 operating weights include fuel and an operator and vary by option. Do not adopt those values as net M or subtract invented operator/fuel masses. Equal mass does not establish equal digging or loading capability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh; convert using1 kWh =3.6 MJ and match actual voltage/source. |
| `fluid_mass` | engine_oil; hydraulic_oil; transmission_oil; grease; coolant; diesel; tap_water; spent_engine_oil; wash_wastewater | Mass | kg | Weigh the actual formulation or solution. Volume-only records need evidenced density/temperature and explicit conversion. Retained delivery fill is distinguished from burned fuel and exported waste; avoid counting ingredients inside a bought mixture twice. |
| `water_resource_volume` | groundwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter freshwater well abstraction using cp_water_resource; numerator m3 remains distinct from kg machine. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified stock and separately specified finished assemblies received at the backhoe-loader factory |
| starting_condition_role | Foreground manufacturing inputs with supplier production and incoming transport separately linked |
| product_classification_scope | Backhoe-loader subset of CPC44427, excluding other n.e.c. machinery |
| recursive_input_rule | A purchased complete machine is supplier-gated input, not a repeated assembly module. Purchased finished chassis/arms/cylinders replace local stock and their fabrication |
| upstream_dataset_requirement | Match grade/state, purchased completeness, tyre and cylinder designs, fluid chemistry, energy source, geography and supplier/transport/receiver gates |
| disclosure | This foreground module is not complete cradle-to-gate. Declare actual site operations, make-or-buy, outsourcing, shared services, packaging and missing supplier/transport/treatment links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | Include receipt inspection and actual plate cutting/forming, joining, pivot/interface machining, grinding/cleaning/finishing, drivetrain/hydraulic/working-equipment assembly, wiring, first fill, acceptance, attributable rejects/rework and dispatch protection. Welding at JCB2015 does not require robot welding at every factory. Do not infer an on-site foundry, heat treatment, cylinder manufacture or engine manufacture from bought parts; actual local/outsourced routes need their own exchanges and gates. | jcb-backhoe-loader-2015 |
| `boundary_bom` | all inventory rows | Crosswalk every actual BOM item and operation to one atomic exchange or justified exclusion. Expand separately supplied cooling radiator, fuel tank, exhaust aftertreatment, filters, seals, pins, hoses/fittings, wiring/sensors, brakes, steering, seat, glazing and counterweights where present; never duplicate internals inside bought engine/cab/axle modules. Add each actual cleaner, separately supplied welding gas or composition-specific purchased premix, heat fuel, DEF formulation, test fixture consumable, waste and monitored release individually. Initial cards are not a universal complete BOM. |  |
| `boundary_test` | factory_test | Record actual steering/braking, hydraulic leak/pressure, loader/backhoe motions, stabilizers, controls and functional acceptance; retain applied load, test duration and results from the actual plan. Include factory engine running, electrical support, fill/makeup/drain and retests only as performed. Factory test fuel is not an operating-life profile; no universal test duration or excavation cycle. |  |
| `boundary_semantic` | reference_product | Independent bucket PCR owns separately delivered attachments and excludes host machine; agricultural tractor PCR owns agricultural traction units; cylinder PCR owns separately supplied cylinders. This integrated front/rear backhoe-loader manufacturing boundary does not duplicate those products. Keep the old classification scaffold/id unchanged and assert no accepted mapping. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural fabrication | conditional | Actual cutting, forming, joining and machining at this site | Foreground stage; internal WIP remains inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Surface preparation and finishing | conditional | Actual cleaning, grinding or coating route | Foreground stage; internal WIP remains inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured machine integration | required | Each complete declared configuration | Foreground stage; internal WIP remains inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `factory_test` | Factory testing and acceptance | required | Model-specific acceptance; powered tests only as actually performed | Foreground stage; internal WIP remains inside module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Actual dispatch packaging | Foreground stage; internal WIP remains inside module | per 1 kg reference flow; collected per one accepted finished machine |

| Operation | Stage | Required actual route record |
| --- | --- | --- |
| Receipt and make-or-buy | assembly | Supplier completeness, stock grade, part identity, delivered fill and installed BOM |
| Structural fabrication | fabrication | Cut/form/join chassis and arms only if local; record settings, procedure, net stock, machining allowance, consumables and separately collected waste |
| Surface preparation/finish | finishing | Actual grinding/rinsing/coating route; one chemical formulation and recovery balance, actual curing heat/electricity |
| Mechanical/hydraulic integration | assembly | Drivetrain; front/rear equipment; each cylinder function; pump/valves/hoses; operator station and wiring; torque/alignment records; supplier internal exclusions |
| Fill and acceptance | factory_test | First fill, actual burn/retention, leakage/functional tests, installed options, acceptance/reject/retest, complete net weighing |
| Dispatch protection | packout | Actual protection mass separately from machine M and loose spares |

### Process: Structural fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy structural steel plate (`steel_plate`)

Only for actual in-house fabrication of one declared grade and thickness. Weigh net issues and returns; a bought finished chassis or arm replaces its stock route. A manufacturer description of steel does not establish alloy grade.

- Selected flow: Hot-rolled non-alloy structural steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Solid ER70S-6 steel welding wire (`weld_wire`)

Only if the actual welding procedure uses this specific solid wire. Record certificate, diameter, net issue and recovered wire; no mandatory filler grade or weld-consumption factor.

- Selected flow: Solid ER70S-6 steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Pure carbon dioxide welding shielding gas (`weld_co2`)

Only for an actual pure-CO2 welding procedure. Weigh gas net issues or convert measured volume using actual pressure, temperature and evidenced density. Separately purchased pure gases used for onsite blending need separate input rows and their own delivery records. A purchased premix needs one composition-specific supplied-mixture exchange with actual issue, return and delivery evidence; do not also record its contained constituents as pure-gas purchases. No mandatory welding gas.

- Selected flow: Pure carbon dioxide welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-voltage grid electricity (`electricity_fabrication`)

Meter this actual stage including attributable rework. The identity is user-side grid-average AC below1kV; another voltage or source requires a matching separate exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Unprocessed clean non-alloy steel offcut (`steel_offcut`)

Weigh actual segregated clean offcuts exported from the declared plate route. Internal reuse is not an export; oily chips and welding spatter are distinct.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Collected dry steel grinding dust (`collected_steel_dust`)

Only for actual captured dust exported to a receiver; record steel grade, abrasive contamination and wet/dry state. It is separate from an airborne release.

- Selected flow: Collected dry steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate emitted to air, size unspecified (`particulate_fabrication`)

Only if actual post-control monitoring establishes particulate mass to air with unspecified size and air subcompartment. Retain sampling and exhaust-volume basis. Specific size fractions require their own identities; fabrication or engine testing alone does not prove release.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Surface preparation and finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter this actual stage including attributable rework. The identity is user-side grid-average AC below1kV; another voltage or source requires a matching separate exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Dry powder paint (`powder_paint`)

Only for one actual dry-powder formulation. Weigh net issue after returns/recovery and record actual curing energy. Other coating chemistry and heating sources need individual rows; this route is not compulsory.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Finished aluminium-oxide abrasive disc (`abrasive_disc`)

Only if actual finishing consumes this single binder/grade/design. Allocate measured replacement mass to serviced orders using evidenced work records. Raw alumina is not a finished disc.

- Selected flow: Finished aluminium-oxide abrasive disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality tap water (`tap_water`)

Only for actual surface rinsing with supplied drinking-quality water. Measure kg or retain actual density/temperature for conversion. Do not count water inside bought ready-mixed coolant or the same well abstraction again.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

###### Abstracted freshwater groundwater (`groundwater`)

Only for actual factory freshwater well abstraction for this route. Meter m3, retain country/site and expand pumping/treatment inputs. Internal circulation is not new abstraction; do not also count tap supply for this same water.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_resource.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water_resource`
- Sources:

#### Outputs

##### Waste flows

###### Spent aluminium-oxide abrasive disc (`spent_disc`)

Weigh the actual exported spent disc separately from dust. Retain binder, abrasive and adherent steel; narrow the public polishing-media category to this one design.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Unrecovered solid powder-paint overspray (`powder_overspray`)

Weigh actual unrecovered solid overspray exported after internal recovery; retain formulation and receiver. Do not impose a universal paint-loss rate.

- Selected flow: Unrecovered solid powder-paint overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Oil-contaminated steel washing wastewater (`wash_wastewater`)

Only for actual contained aqueous washing effluent exported to treatment. Record solution mass, oil content, cleaning chemicals and receiver gate; elementary discharge after treatment needs separate measured species and medium.

- Selected flow: Oil-contaminated steel washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Configured machine integration (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter this actual stage including attributable rework. The identity is user-side grid-average AC below1kV; another voltage or source requires a matching separate exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Finished welded steel backhoe-loader chassis (`chassis`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished welded steel backhoe-loader chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: jcb-backhoe-loader-2015

###### Finished front loader-arm assembly (`loader_arm`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished front loader-arm assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: jcb-backhoe-loader-2015

###### Finished rear backhoe boom (`backhoe_boom`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished rear backhoe boom
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rear backhoe dipper (`dipper`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished rear backhoe dipper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel stabilizer leg (`stabilizer_leg`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steel stabilizer leg
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished diesel engine assembly (`diesel_engine`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished diesel engine assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished powershift transmission assembly (`transmission`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished powershift transmission assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steerable front drive axle (`front_axle`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steerable front drive axle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rear drive axle (`rear_axle`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished rear drive axle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydraulic directional valve block (`valve_block`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished hydraulic directional valve block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel-wire-reinforced rubber hydraulic hose (`hydraulic_hose`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steel-wire-reinforced rubber hydraulic hose
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished enclosed backhoe-loader operator cab (`operator_cab`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished enclosed backhoe-loader operator cab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Finished front pneumatic rubber tyre (`front_tyre`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished front pneumatic rubber tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rear pneumatic rubber tyre (`rear_tyre`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished rear pneumatic rubber tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished front steel wheel rim (`front_rim`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished front steel wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rear steel wheel rim (`rear_rim`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished rear steel wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished lead-acid starter battery (`starter_battery`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished lead-acid starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel front loader bucket (`front_bucket`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steel front loader bucket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel rear backhoe bucket (`rear_bucket`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steel rear backhoe bucket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hardened steel pivot pin (`pivot_pin`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished hardened steel pivot pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel hexagon-head bolt (`hex_bolt`)

Record one actual part number, design, specification, measured delivered mass and included subparts. Count only installed separately supplied items; exclude internals already inside a bought assembly. For structure purchases, replace local stock/fabrication. For cab, retain glazing/seat/control inclusion; open-canopy variants need their own rows. Tyres/rims are separate and each size is separate; buckets are included only as declared installed configuration.

- Selected flow: Finished steel hexagon-head bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydraulic piston pump (`hydraulic_pump`)

Weigh one actual finished liquid pump design and retain rated pressure/flow, drive interface and included subparts. The public liquid-pump category is narrowed to this hydraulic piston pump; a complete power unit or included engine pump is not another standalone issue.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Front loader lift cylinder (`loader_lift_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Front loader bucket cylinder (`loader_bucket_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Rear backhoe boom cylinder (`backhoe_boom_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Rear backhoe dipper cylinder (`backhoe_dipper_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Rear backhoe bucket cylinder (`backhoe_bucket_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Rear backhoe swing cylinder (`backhoe_swing_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Stabilizer hydraulic cylinder (`stabilizer_cylinder`)

One separately supplied finished double-acting hydraulic cylinder design in this function. Retain bore, rod, stroke, seals, fittings, delivery oil state, measured mass and actual installed count; the broad public linear-cylinder identity is narrowed to this design. Different designs require separate rows, not a pooled cylinder issue.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: deere-backhoe-loader-2023

###### Finished steel ball bearing (`ball_bearing`)

Only one specified separately supplied ball-bearing design. Record accuracy, dimensions, lubrication and installed mass; no duplicate bearing inside a bought axle, engine or cylinder.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Formulated mineral engine lubricating oil (`engine_oil`)

Only if the actual fill specification declares this formulation. Weigh net first fill and test makeup; retain grade, mixture concentration/basis and density/temperature if converting volume. Identify fluid already included by suppliers and final retained mass in M; do not duplicate supplier fill or ingredients of a purchased mixture. Different formulas need separate rows.

- Selected flow: Formulated mineral engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Formulated mineral hydraulic oil (`hydraulic_oil`)

Only if the actual fill specification declares this formulation. Weigh net first fill and test makeup; retain grade, mixture concentration/basis and density/temperature if converting volume. Identify fluid already included by suppliers and final retained mass in M; do not duplicate supplier fill or ingredients of a purchased mixture. Different formulas need separate rows.

- Selected flow: Formulated mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Formulated mineral transmission lubricating oil (`transmission_oil`)

Only if the actual fill specification declares this formulation. Weigh net first fill and test makeup; retain grade, mixture concentration/basis and density/temperature if converting volume. Identify fluid already included by suppliers and final retained mass in M; do not duplicate supplier fill or ingredients of a purchased mixture. Different formulas need separate rows.

- Selected flow: Formulated mineral transmission lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Lithium-soap mineral-oil lubricating grease (`grease`)

Only if the actual fill specification declares this formulation. Weigh net first fill and test makeup; retain grade, mixture concentration/basis and density/temperature if converting volume. Identify fluid already included by suppliers and final retained mass in M; do not duplicate supplier fill or ingredients of a purchased mixture. Different formulas need separate rows.

- Selected flow: Lithium-soap mineral-oil lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Ready-mixed 50% ethylene-glycol aqueous engine coolant (`coolant`)

Only if the actual fill specification declares this formulation. Weigh net first fill and test makeup; retain grade, mixture concentration/basis and density/temperature if converting volume. Identify fluid already included by suppliers and final retained mass in M; do not duplicate supplier fill or ingredients of a purchased mixture. Different formulas need separate rows.

- Selected flow: Ready-mixed 50% ethylene-glycol aqueous engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

### Process: Factory testing and acceptance (`factory_test`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_factory_test`)

Meter this actual stage including attributable rework. The identity is user-side grid-average AC below1kV; another voltage or source requires a matching separate exchange.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Declared fossil-only diesel fuel (`diesel`)

For actual factory filling and powered acceptance only. Weigh attributable net issues including consumed test fuel and declared final retained tank fuel; retain supplier origin/blend certificate and actual density for litres conversion. Retained fuel belongs in declared M; no full-tank requirement, rated-power fuel factor or customer duty. Another blend needs its own identity and fossil/biogenic attribution.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fuel`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete configured wheeled backhoe loader (`finished_machine`)

Reference output after model-specific functional, hydraulic, steering/braking, stability-device and acceptance checks. Includes declared installed front/rear buckets, stabilizers, options and retained fluids/fuel. Excludes operator, earth payload, packaging, transport fixtures and loose spares. The public finished-manufactured CPC44427 category is narrowed to this dual-function complete machine.

- Selected flow: Mechanical shovels, excavators and shovel loaders, except front-end shovel loaders and machinery with a 360-degree revolving superstructure, moving, grading, levelling, scraping, excavating, tamping, compacting, extracting or boring machinery n.e.c., self-propelled, for earth, minerals or ores `0ce8b891-f49b-4709-8df2-931146a4bf91`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources: jcb-backhoe-loader-2015; deere-backhoe-loader-2023

##### Waste flows

###### Exported spent mineral engine lubricating oil (`spent_engine_oil`)

Only if oil is actually drained during manufacture/testing and exported. Weigh contaminated oil and retain composition/receiver; delivery retained oil is not waste. No mandatory drain or later customer oil change.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Particulate emitted to air, size unspecified (`particulate_factory_test`)

Only if actual post-control monitoring establishes particulate mass to air with unspecified size and air subcompartment. Retain sampling and exhaust-volume basis. Specific size fractions require their own identities; fabrication or engine testing alone does not prove release.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon dioxide emitted to air (`fossil_co2`)

Only when actual post-control measurement or evidenced fuel-specific carbon balance establishes fossil CO2 to air, unspecified subcompartment. Retain carbon source, actual burned fuel and balance terms; retained fuel is not combusted. No universal oxidation/emission factor or substitution of long-term air/soil identities.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Nitric oxide emitted to air (`nitric_oxide`)

Only if actual speciation and post-control monitoring establish this single substance and actual air subcompartment. Record concentration, exhaust volume and shared sampling basis. NO, NO2, N2O and aggregated NOx reported as NO2 equivalents are distinct; do not invent a split or a mandatory emission.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide emitted to air (`nitrogen_dioxide`)

Only if actual speciation and post-control monitoring establish this single substance and actual air subcompartment. Record concentration, exhaust volume and shared sampling basis. NO, NO2, N2O and aggregated NOx reported as NO2 equivalents are distinct; do not invent a split or a mandatory emission.

- Selected flow: Nitrogen dioxide emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### C-flute corrugated cardboard (`cardboard`)

Only actual C-flute protection with recycled fibre and at least80% fibre; weigh net issue and exclude from M. Other specifications require separate exchanges.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### LDPE protective foil (`ldpe_film`)

Only actual non-cellular, non-adhesive, unreinforced LDPE protection. Weigh net issue; retain grade and exclude from M without assuming recycled fraction or fossil origin.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | Subdivide by work order, stage and configuration first. Assign traceable stock/component issues, fabrication, rework and tests directly. Different cab, bucket, drivetrain and option configurations cannot share an assumed per-machine inventory. |  |
| `allocation_physical` | shared_energy_support | Use measured causal drivers: actual load/power with fabrication or assembly/test hours, coating-batch load, consumable use across served orders, or fuel issues/burn/retention. Reconcile assignments to measured totals and accepted same-configuration count. Unsupported relationships require review/sensitivity; no default mass split, equal-count split or economic percentage. |  |
| `allocation_recovery` | rejects_waste | Include attributable failed units, rejected parts, rework and retests per accepted same-configuration output in the same period. Net documented returns and internal recovery. Waste exports do not automatically earn avoided-primary-material credits. Genuine co-products need documented market/boundary decisions. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | factory_test | finished_machine | calibrated weighing and acceptance | model; configuration; serial number; accepted net mass M; installed buckets/options; retained fluid/fuel; operator/soil/packaging exclusion | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or justified configuration-specific sample | same declared production period; gaps disclosed | declared manufacturing site | accepted net mass per machine | calibration; installed BOM; fill state; acceptance; sampling |
| cp_configuration | all processes | actual route | BOM and route review | single configuration; BOM revision; supplier completeness; make-or-buy; each cylinder/tyre/bucket design; acceptance count; gates; rejects/rework | Crosswalk every actual item and operation to one row or justified exclusion; reconcile front/rear working equipment, stabilizers, operator station, drivetrain, hydraulic/control systems and installed options. Retain configuration-specific acceptance limits/results and fill/retention state. | record | each change and batch | same declared production period; gaps disclosed | declared manufacturing site | one coherent configuration record | BOM; suppliers; routing; acceptance; outsourcing |
| cp_material | fabrication; finishing; assembly; packout | individual material | weighed stock/formulation issues | one grade/design/formulation; net issue/return; WIP; recovery; concentration/basis; density/temperature; accepted count | Weigh attributable net issues and reconcile stock, returns, recovery and served orders. Retain supplier chemistry and delivered state. Convert volume only with evidenced actual density/temperature; account for supplier fill and exclude ingredients inside bought ready mixtures. No standard consumption or dilution factor. | kg | each issue and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable net material mass / accepted machines of the same configuration | scale; ledger; SDS; recipe; certificate; density |
| cp_parts | assembly | single finished component | receipt weighing and build list | one part number/design; actual count; mass; included subparts; delivered fill; installed state; accepted count | Use measured delivered mass or verified lot-specific count-to-mass records. Reconcile each design of cylinder, tyre/rim, bucket and drivetrain, included subparts and installation. No engine power, bucket volume or hydraulic displacement-to-mass factor; a purchased assembly excludes its internal parts from additional issues. | kg | each lot and build batch | same declared production period; gaps disclosed | declared manufacturing site | attributable installed component mass / accepted machines of the same configuration | scale; supplier inclusion; installed BOM; lot mass |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | meter and causal driver ledger | stage; voltage/source; meter kWh; interval; shared total; driver; idle/rework; accepted count | Meter actual stages; convert kWh to MJ using1 kWh =3.6 MJ. Reconcile measured shared totals, actual load/time drivers, idle, rejects and retests. No rated-power-times-invented-hours quantity. | MJ | each interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable electrical energy / accepted machines of the same configuration | meter calibration; bills; driver/time records |
| cp_fuel | factory_test | diesel | fuel issue/burn/retention balance | fuel certificate/origin/blend; issued/returned mass; initial/final tanks; burned test fuel; retained delivery fuel; density/temperature; accepted count | Weigh attributable net factory fuel issues and reconcile actual test burn, returns, tank changes and final delivery retention. Retain actual density for litres conversion and fossil-only certificate for this row. Delivered retained fuel is included once in M and is not burned for emission calculation. | kg | each test unit and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable net issued diesel mass / accepted machines of the same configuration | scale; fuel ledger; supplier certificate; tanks; actual burn |
| cp_waste | fabrication; finishing; factory_test | individual exported waste | segregated weighing and receiver receipts | individual waste; composition; wet/dry; oil contamination; mass; recovery; receiver/treatment; accepted count | Weigh segregated exports and reconcile stock and recovery. Keep clean steel offcuts, collected steel dust, spent abrasive disc, overspray, oil and washing solution separate. Retain receiver gate/composition and evidenced mass conversion. Internal circulation and retained machine fill are not exported waste. | kg | each export and batch balance | same declared production period; gaps disclosed | declared manufacturing site | attributable exported waste mass / accepted machines of the same configuration | scale; composition; receiver/treatment evidence |
| cp_emission | fabrication; factory_test | single air substance | post-control monitoring/speciation | substance; source; concentration; exhaust volume; interval; temperature/pressure/moisture; medium/submedium; size; control; actual fuel/carbon terms; accepted count | Calculate one substance mass from same-interval post-control concentration and exhaust volume with evidenced conversion/sampling. A fuel-specific carbon balance must document actual burned fuel carbon, fossil origin, carbon in other outputs and uncertainty; no universal factor. NO, NO2, N2O and NOx equivalents are not interchangeable. Separate captured solids and retained fuel; missing measurements are not zero. | kg | representative actual emitting intervals | same declared production period; gaps disclosed | declared manufacturing site | attributable measured substance mass / accepted machines of the same configuration | monitoring; calibration; speciation; carbon balance; conversion |
| cp_water_resource | finishing | groundwater | well meter and site record | freshwater source; well; country/site; m3; interval; stage use; reuse; accepted count | Read calibrated well volume meter for actual factory freshwater groundwater abstraction. Retain location, reconcile stage water use and separately account for pumping/treatment. Do not count recirculation as new abstraction or the same resource as supplied tap water. | m3 | each interval and batch | same declared production period; gaps disclosed | declared manufacturing site | attributable abstracted water volume / accepted machines of the same configuration | meter; source/location; stage water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use the same configuration and period for positive M, exchange numerators and accepted count. Reconcile installed buckets/options, supplier internals/fills, stock versus finished modules, fuel burn/retention, WIP, rejects and recovery; retain measurement/sampling uncertainty. | cp_mass; cp_configuration; cp_parts; cp_material; cp_fuel |
| `quality_coverage` | inventory_and_links | Disclose missing BOM/route items, UUIDs, supplier/transport/treatment links, measurements and causal allocation. Record non-applicable stages with actual route evidence. No generic machine mass, lifetime, fuel duty, material yield, fluid ratio or emission factor adopted. | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | JCB November2015 issue1 and Deere May2023 are historical model examples only. Their construction/cylinder/options illustrations do not establish current BOM, universal grades/counts or factory quantities. Operating weights include operator and fuel and cannot replace measured net M. Verify actual suppliers and foreground records. | jcb-backhoe-loader-2015; deere-backhoe-loader-2023 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require one positive measured M with installed front/rear equipment, stabilizers, operator-station completeness, actual retained fill/fuel and exclusions. Reference output is1kg; other rows explicitly use normalize_mass with kg, MJ or m3 numerators. |  |
| `validation_bom` | inventory | Reconcile each actual chassis, drivetrain, wheel/steering/brake system, hydraulic system, loader, backhoe, stabilizer, cab/control and installed option. Verify purchased-internal exclusions, make-or-buy, tests/retests/rejects, fuel balance and receiver gates. Initial cards require actual BOM expansion before a completeness claim. |  |
| `validation_identity` | all inventory rows | Check public type, delivered grade/state/concentration, route/geography, actual reference property/unit group and official localized names. NO is not NO2/N2O/NOx equivalent; unspecified air is not long-term air/soil; resource water is not wastewater; energy and component counts are not total mass. |  |
| `validation_claims` | dataset_claims | No full cradle-to-gate claim without actual route and supplier/transport/treatment coverage. Manufacturing mass cannot establish earthmoving-service equivalence, productivity, service life, regulatory conformity or scientific approval. This candidate requires independent methodology review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground wheeled backhoe-loader manufacturing module; this heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same declared complete configuration manufacturing, scaled by actual M with separately declared supplier/transport/treatment links |
| excluded_use | Excavation/loading service, moved soil, lifetime fuel, maintenance, other CPC44427 machines, loose attachment bundles or methodology approval |
| required_metadata | All reference qualifiers; full configured BOM; supplier completeness and make-or-buy; cylinder/tyre/bucket designs; cab state; installed options; acceptance; actual M and fluid/fuel boundary; site/period/gates; measurements/allocation; supplier/receiver links |
| required_quality_disclosure | Coverage and missing identities/measurements/links; sampling uncertainty; fuel balance; causal allocation; rejects/retests; historical source limitations |
| update_trigger | Configuration, engine/drive, working equipment, cab/options, supplier completeness, fluid chemistry/retention, make-or-buy, acceptance plan, site/period/route, energy/fuel source or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jcb-backhoe-loader-2015 | handbook | JCB, BACKHOE LOADER3CX/4CX,9999/5934 en-GB11/15 Issue1(T4F), historical November2015; physical/printed pp.5 and21. https://www.jcb.co.nz/media/qwobn5qq/3cx-eco-brochure.pdf | Welded chassis and loader-arm construction example; operating-weight inclusion and options. No universal welding route, grade, manufacturing amount, catalogue net mass or life adopted. |
| deere-backhoe-loader-2023 | handbook | John Deere,310 P-Tier Backhoe Loader,MB310PAU(23-05), historical May2023; physical/printed p.7, edition footer physical p.12. https://www.deere.com/assets/pdfs/common/products/sync/MB310PAU-310-p-tier-backhoe-loader.pdf | Separate loader/backhoe/stabilizer cylinder functions, operator-station/tyre options, refill and operating-weight boundary. No cylinder count/dimension, fluid capacity, factory consumption, compliance threshold or operating factor adopted. |
