---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.root-and-tuber-harvesting-machinery
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Root and tuber harvesting machinery manufacture


## 1. Scope and Applicability

This PCR describes foreground manufacture of new complete machines that lift roots or tubers from soil and provide the configured separation and crop-conveying functions. It covers potato, sugar-beet and comparable root-crop harvesters in declared mounted, trailed or self-propelled configurations. Crop type and installed intake must be specified; multifunctional designs are represented by the delivered lifting configuration, not by averaging incompatible intakes.

The unit supports manufacture datasets, not an equivalence of hectares harvested or crop quality. Farm operation, field losses, soil effects, crop yield, cleaning-loader-only machines, transport vehicles, tractor manufacture, maintenance service, resale and end of life are excluded. Repair parts and incomplete kits require separate reference definitions and are not complete-machine outputs here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.root-and-tuber-harvesting-machinery |
| classification_refs | CPC 3.0 44126 — Root or tuber harvesting machines; context only |
| covered_products | Configured complete root/tuber soil-lifting harvesters, including declared crop intake, separator and delivery mechanism |
| excluded_products | Standalone windrow pickup/cleaner/loaders lacking soil lifting; separately supplied tractor; crop service; incomplete kits |
| representative_product | One serialised accepted potato or sugar-beet harvester of a declared configuration; no representative numeric mass |
| production_route | Measured purchased components plus documented in-house fabrication, joining, finishing, crop-path integration and acceptance as actually performed |
| market_state | New, complete, accepted at stated manufacturing dispatch gate; cargo bunker empty |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide manufactured configured machinery capable of soil lifting, separation and conveying of the stated root/tuber crop |
| How much | 1 kg net accepted complete machine; per-machine collection converted using measured M |
| How well | Meets documented configuration, dimensional, guarding, leak and functional factory acceptance criteria; no field capacity equivalence |
| How long or cycle | One manufacture and factory acceptance cycle; no service-life claim |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Root or tuber harvesting machines `e3e7c424-4195-4bf9-bf45-a8b187b36944` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and model; serial/configuration revision; target crop and soil-lifting intake; mounted/trailed/self-propelled route; installed row layout and working width; separation and conveying design; topper and bunker presence; bunker payload rated separately from net mass; engine/tractor-drive boundary; tyres/axles; hydraulic and electronic options; factory retained fills; accepted net M and weighing state; packaging exclusion; site, period and actual process boundary |

Required qualifiers must accompany dataset metadata, process notes or reference-flow comments. M includes only components and retained factory fills in the same delivered configuration; excludes crop cargo, shipping supports and separately supplied tractor. A bunker payload is not net machine mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `meter_units` | process electricity, gas and liquids | Energy; Volume; Mass | MJ; m3; kg | Record each atomic exchange in its declared property. Convert kWh to MJ with the verified energy unit group factor 3.6; volume-to-mass needs measured composition, density and reference state. Flow-property meanValue 1 is not a liquid or gas density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of identified purchased metal stock and finished components at factory; describe any supplier prefabrication and coatings |
| starting_condition_role | foreground manufacture |
| product_classification_scope | Complete root/tuber soil-lifting harvesting machinery; not farm activities |
| recursive_input_rule | Record a purchased same-category machine as one identified upstream product with configuration, net mass and supplier boundary; include only additional foreground transformation, not its already embedded components |
| upstream_dataset_requirement | Use matched supplier datasets for the declared product, route, property, geography and period; disclose every missing or proxy link separately |
| disclosure | Report actual gate, outsourced work, internal transfers, utility coverage and omitted upstream stages. Foreground receipt-to-dispatch is not a complete cradle-to-gate claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_routes` | all processes | Include actual in-house operations and factory acceptance; retain subcontracted finishing as a linked service only with supplier boundary and allocated exchange evidence. Required integration does not require making every component in-house. | `grimme-manufacturing-history` |
| `boundary_extension` | all inventory rows | Expand the actual BOM and process list into additional atomic exchanges, including fitted axles, fasteners, sensors, specific first-fill coolant and refrigerant, actual welding gas and wastes when present. Every absence needs configuration/process evidence; unknown is not zero. | `grimme-multicrop` |
| `boundary_exclusions` | reference product | Exclude lifetime farm operation, crop outputs, agronomic effects and separately supplied tractor; distinguish factory test consumption from retained dispatch fill and subsequent operation. | `ropa-tiger` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Frame and lifting-part fabrication | conditional | Fabricated in the reporting foreground; purchased finished parts bypass this card. | foreground | one accepted configured machine, normalized by M |
| `joining` | Welded frame joining | conditional | Welding occurs in the foreground. | foreground | one accepted configured machine, normalized by M |
| `finishing` | Surface preparation and coating | conditional | Surface preparation or coating is performed in the foreground. | foreground | one accepted configured machine, normalized by M |
| `harvest` | Lifting, separation and crop conveying integration | required | Every covered complete harvester; individual component cards apply to the configured design. | foreground | one accepted configured machine, normalized by M |
| `integration` | Hydraulic and electrical integration | conditional | Configuration has hydraulic or electrical equipment; each card applies only when installed. | foreground | one accepted configured machine, normalized by M |
| `chassis` | Chassis and self-propelled powertrain installation | conditional | Wheeled chassis or self-propelled configuration is included in delivered machine. | foreground | one accepted configured machine, normalized by M |
| `acceptance` | Final assembly and factory acceptance | required | Every accepted complete machine. | foreground | one accepted configured machine, normalized by M |
| `packing` | Dispatch protection | conditional | Protection is actually used within the declared dispatch gate. | foreground | one accepted configured machine, normalized by M |

Fabrication → joining → finishing → harvest-path and hydraulic/electrical integration → chassis/powertrain installation → final acceptance → optional dispatch protection. Purchased finished parts enter at their installation stage. These arrows are internal transfers, not extra purchased exchanges.

### Process: Frame and lifting-part fabrication (`fabrication`)

Trace cut plate, formed welded hollow section and machined lifting or support parts to drawings. Record cutting, bending and drilling separately in work-order energy logs. Internal transfers to joining are not new purchased inputs.

#### Inputs

##### Product flows

###### Steel Plate (`steel_plate`)

Only hot-rolled low-alloy high-strength plate matching the purchase specification; weigh issued stock minus recorded returns.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `grimme-manufacturing-history`

###### Tubes and pipes, of non-circular cross-section, welded, of steel (`welded_section`)

Non-circular welded steel section matching the drawing; weigh issued finished section, excluding duplicated purchased frame assemblies.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `grimme-manufacturing-history`

###### Grid alternating-current electricity at factory intake (`fabrication_power`)

Meter fabrication electricity at declared intake voltage and supply geography. The retrieved 35–330 kV flow is not assigned to unspecified voltage.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `grimme-manufacturing-history`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Untreated clean steel cutting offcuts leaving the plant for documented recovery; weigh separately from chips.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `grimme-manufacturing-history`

###### Steel scrap, machining chips (`steel_chip`)

Only clean steel machining chips from conventional subtractive machining; segregate oil-contaminated swarf as a separate identity and record recovery destination.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `grimme-manufacturing-history`

### Process: Welded frame joining (`joining`)

Identify the actual welding procedure. The wire card applies only to self-shielded carbon-steel flux-cored welding; other procedures require separate specific consumable cards. Measure actual residues; do not infer fumes from a welding label.

#### Inputs

##### Product flows

###### Flux Cored Wire (`weld_wire`)

Self-shielded carbon-steel flux-cored wire only; reconcile spool issues, returns and retained weld.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `grimme-manufacturing-history`

###### Grid alternating-current electricity at factory intake (`joining_power`)

Measure welding-cell and attributable ventilation electricity without re-counting the fabrication meter.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `grimme-manufacturing-history`

#### Outputs

##### Waste flows

###### Solid carbon-steel flux-cored welding slag (`welding_slag`)

Only collected welding slag; weigh and record composition and treatment route. Do not use smelting slag as identity.

- Selected flow: Solid carbon-steel flux-cored welding slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `grimme-manufacturing-history`

### Process: Surface preparation and coating (`finishing`)

Declare dry blasting, wet cleaning and coating separately. Powder coating and gas-fired curing are optional actual routes, not required by the historical factory description. Retained process water is not an elementary water withdrawal.

#### Inputs

##### Product flows

###### Cast steel spherical blasting shot (`blasting_shot`)

Only if spherical steel shot is consumed; record make-up mass and exclude internal circulating stock. The mixed shot/grit display is not an exact identity.

- Selected flow: Cast steel spherical blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

###### Powder Coating (`coating_powder`)

Only actual powder coating; record resin formulation, grade, fresh issue and internal recovered reuse.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

###### Process Water (`cleaning_water`)

Treated industrial process water delivered to wet cleaning; weigh or use measured density to convert meter volume.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

###### Grid alternating-current electricity at factory intake (`finishing_power`)

Meter actual blasting, washing and coating electricity with route-specific submeter coverage.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

###### natural gas in the gaseous state (`curing_gas`)

Only actual piped gaseous natural gas used for curing; document composition, pressure, temperature and meter reference state. No generic mass-volume conversion is assumed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

#### Outputs

##### Waste flows

###### Unrecovered solid coating powder overspray (`powder_residue`)

Only powder overspray leaving for treatment; subtract internal recovery, record resin and destination. Retrieved public waste is China-site limited.

- Selected flow: Unrecovered solid coating powder overspray
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

###### Metal-part cleaning rinse wastewater sent to treatment (`rinse_wastewater`)

Only wastewater transferred to treatment; record contamination and outlet quantity. Do not substitute resource water or a direct-to-water emission.

- Selected flow: Metal-part cleaning rinse wastewater sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

##### Elementary flows

###### carbon dioxide (fossil) (`curing_fossil_co2`)

Only demonstrated fossil CO2 emitted to air, unspecified subcompartment, from actual gas curing; use attributable measured emission mass, not an unsupported factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `grimme-manufacturing-history`

### Process: Lifting, separation and crop conveying integration (`harvest`)

Identify the soil-lifting element and installed crop separation/conveying path. Distinguish digging intake from windrow pickup, row layout, web rod pitch, separator type, topper and bunker. A windrow-only pickup loader without a lifting configuration is excluded. Purchased parts are counted once; internally made parts retain fabrication exchanges.

#### Inputs

##### Product flows

###### Finished steel root-crop lifting share (`lifting_share`)

Only bought-in finished steel lifting share of declared geometry and heat treatment; internally fabricated shares are tracked through fabrication.

- Selected flow: Finished steel root-crop lifting share
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

###### Finished steel sieving-web rod (`sieving_bar`)

Only installed bought-in steel rod of declared pitch and surface treatment; exclude rods already inside a purchased complete web.

- Selected flow: Finished steel sieving-web rod
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

###### Vulcanized rubber crop conveyor belt (`conveyor_belt`)

Only installed conveyor belt; record reinforcement, rubber grade and mass. Broad conveyor/transmission class is not assigned as a specific belt identity.

- Selected flow: Vulcanized rubber crop conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

###### Vulcanized rubber crop separator finger (`separator_finger`)

Only installed rubber separator finger; declare geometry, rubber specification and weighed mass.

- Selected flow: Vulcanized rubber crop separator finger
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

###### Finished steel ball bearing (`ball_bearing`)

Only fitted steel ball bearing; record designation and supplier mass, distinct from roller bearings.

- Selected flow: Finished steel ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

###### Finished agricultural-harvester mechanical gearbox (`drive_gearbox`)

Only installed mechanical gearbox; declare ratio, housing and fill boundary; a wind-turbine gearbox is not suitable.

- Selected flow: Finished agricultural-harvester mechanical gearbox
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_harvest.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest`
- Sources: `grimme-multicrop`

#### Outputs

### Process: Hydraulic and electrical integration (`integration`)

Record hydraulic circuit drive source, pressures, hose material and first-fill grade; distinguish tractor supply from on-machine pump. Electronic controller and copper cable remain separate exchanges. Add each fitted sensor, valve and terminal as its own defined exchange if absent from a purchased assembly.

#### Inputs

##### Product flows

###### Finished double-acting hydraulic cylinder (`hydraulic_cylinder`)

Only fitted hydraulic cylinder; declare bore, stroke and rated pressure; do not substitute pneumatic-cylinder class.

- Selected flow: Finished double-acting hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Finished agricultural-machine hydraulic pump (`hydraulic_pump`)

Only fitted on-machine hydraulic pump; state displacement and included motor boundary. Tractor hydraulic supply is outside product manufacture.

- Selected flow: Finished agricultural-machine hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Finished hydraulic crop-web drive motor (`hydraulic_motor`)

Only installed hydraulic drive motor, with displacement and supplier assembly boundary.

- Selected flow: Finished hydraulic crop-web drive motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Hydraulic hose (`hydraulic_hose`)

Only fitted hydraulic hose; record reinforcement, pressure rating and mass net of separately recorded fittings.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Hydraulic Fluid (`hydraulic_oil`)

Only actual refined mineral-oil hydraulic fluid added in factory; record grade and retained quantity, exclude supplier prefill already counted.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Insulated copper control cable (`copper_cable`)

Only installed copper control cable; collect weighed mass and insulation type. Retrieved energy-property cable cannot represent this mass exchange.

- Selected flow: Insulated copper control cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

###### Agricultural-harvester electronic control module (`electronic_controller`)

Only installed specific controller module; record hardware revision and mass. Machine-tool PLC/cabinet collection is not a harvester module identity.

- Selected flow: Agricultural-harvester electronic control module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_integration.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_integration`
- Sources: `grimme-multicrop`

#### Outputs

### Process: Chassis and self-propelled powertrain installation (`chassis`)

Record wheel assembly as tyre plus rim when bought separately; declare axle and brake configuration. Engine, cab and starter battery cards apply only to fitted self-propelled equipment. A tractor used with a trailed harvester is excluded from product mass. Expand any purchased assembly only if its supplier boundary omits those components.

#### Inputs

##### Product flows

###### Finished non-road diesel engine for self-propelled harvester (`diesel_engine`)

Only installed self-propelled engine; record model, emission configuration and measured net assembly mass. Retrieved engine has Number of items, not a verified mass property.

- Selected flow: Finished non-road diesel engine for self-propelled harvester
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `ropa-tiger`

###### New pneumatic rubber agricultural tyre (`pneumatic_tyre`)

Only fitted agricultural pneumatic rubber tyre; record size, construction and weighed mass. Generic Tire has count basis and unspecified rubber/metal identity.

- Selected flow: New pneumatic rubber agricultural tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `ropa-tiger`

###### Steel agricultural-harvester wheel rim (`steel_rim`)

Only fitted wheel rim; record dimensions and load rating. Public trailer rim does not cover an unspecified self-propelled rim.

- Selected flow: Steel agricultural-harvester wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `ropa-tiger`

###### Lead Acid Battery (`starter_battery`)

Only fitted lead-acid starter battery; record capacity, electrolyte-inclusive mass and supplier boundary. No electrical-capacity-to-mass conversion is assumed.

- Selected flow: Lead Acid Battery `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `ropa-tiger`

###### Agricultural-harvester operator cab assembly (`operator_cab`)

Only fitted bought-in cab; record glazing and fittings included. Add refrigerant charge as a separate chemical-specific row if actual air conditioning is installed.

- Selected flow: Agricultural-harvester operator cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `ropa-tiger`

#### Outputs

### Process: Final assembly and factory acceptance (`acceptance`)

Use serial-linked torque, guard, hydraulic leak and configured functional test records. Factory tests are included; crop production and lifetime field operation are excluded. Diesel input applies only to a measured fuel-burning factory test. Declare factory fill retained at dispatch and exclude test fuel consumed before net weighing.

#### Inputs

##### Product flows

###### Steel screw (`assembly_screw`)

Only steel screws individually specified in the assembly BOM; do not treat bolts, nuts or washers as this exchange.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `grimme-manufacturing-history`

###### Grid alternating-current electricity at factory intake (`assembly_power`)

Meter assembly and factory functional-test electricity; exclude duplicated utility totals and field operating energy.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `grimme-manufacturing-history`

###### Diesel fuel (`test_diesel`)

Only measured diesel consumed in a factory engine test; record grade and fossil/biogenic fraction; exclude residual dispatch fill and farm use.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `grimme-manufacturing-history`

#### Outputs

##### Product flows

###### Root or tuber harvesting machines (`finished_machine`)

Accepted net configured complete machine at the declared dispatch gate; output is exactly 1 kg, not a field-harvesting service.

- Selected flow: Root or tuber harvesting machines `e3e7c424-4195-4bf9-bf45-a8b187b36944`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `grimme-manufacturing-history`

##### Elementary flows

###### carbon dioxide (fossil) (`test_fossil_co2`)

Only demonstrated fossil CO2 from factory fuel combustion to air, unspecified subcompartment; collect attributable measured emission mass; do not assign biogenic CO2 here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `grimme-manufacturing-history`

### Process: Dispatch protection (`packing`)

Weigh any fitted shipping support independently of net machine mass. The timber card covers kiln-dried coniferous timber only; other packaging requires its own material-specific card. No universal packaging requirement is inferred.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only kiln-dried coniferous sawn timber actually used for dispatch support; identify species and drying route; exclude from net machine M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `grimme-manufacturing-history`

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | shared production | Separate orders by configuration and use direct meters, issue records and work orders first. For inseparable shared utility use measured machine-hours or metered load with documented causal basis; calculate order share as its measured driver divided by the sum of all covered order drivers. Do not use machine count across different configurations as an unexplained proxy. |  |
| `allocation_recovery` | waste outputs | Internal reused offcuts, powder and process water are internal transfers with fresh-input and stock reconciliation. Record exported waste quantity and destination; no automatic avoided virgin steel or disposal credit. If a valuable co-product exists, document status, separate process burdens where possible and scientifically review any residual allocation before claiming comparability. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net machine | weighing_record | serial; model; configuration; accepted net mass M; scale_id; fill_state; packaging_tare | Weigh the accepted complete machine using a calibrated platform scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative configuration batch | same manufacturing period as orders | declared manufacturing site and configuration | accepted net mass per machine | scale calibration, tare and acceptance record |
| `cp_fabrication` | fabrication | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Frame and lifting-part fabrication | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_joining` | joining | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Welded frame joining | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_finishing` | finishing | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Surface preparation and coating | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_harvest` | harvest | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Lifting, separation and crop conveying integration | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_integration` | integration | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Hydraulic and electrical integration | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_chassis` | chassis | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Chassis and self-propelled powertrain installation | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_acceptance` | acceptance | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Final assembly and factory acceptance | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |
| `cp_packing` | packing | each specific atomic exchange | measured_order_record | order; serial/configuration; item_id; grade; issued; returned; stock_change; exchange_amount; meter_unit; meter_state; accepted_count; waste_destination; allocation_driver; measured_emission_mass | Use item-specific BOM weights and issue/return reconciliation; calibrated submeters for utilities; segregated waste weighing and transfer receipts; attributable measured emission records for an active combustion row. Retain inlet/outlet, composition and calibration evidence. | kg, MJ or m3 as row declares | per order, summed over covered period | declared continuous manufacturing period | Dispatch protection | attributable exchange amount / accepted machines | material reconciliation, meter calibration, transfer and emission records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For each homogeneous configuration order, reconcile issued-minus-returned material and measured stock change, allocate only documented shared burdens, then divide attributable exchange totals by accepted machine count to obtain q_item. Rejected and reworked production burdens within the period remain attributed to accepted output; disclose scrap and unfinished-stock changes. Measure M for the same acceptance/fill state. A mixed model batch must be separated; division by an average of incompatible machine masses is forbidden. Where per-machine masses vary within one configuration, use total attributable exchanges divided by total accepted net mass and retain serial-level evidence.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_config` | all rows | Trace each input and test to exact configuration; reconcile supplier assembly boundaries, crop intake and self-propelled options. | configuration BOM and serials |
| `quality_balance` | material and utility records | Reconcile input stock, net output, waste and losses; explain unmatched quantities, meter coverage, density/reference-state conversions and uncertainty. No unsupported loss factor is allowed. | weighing/stock ledger and meter records |
| `quality_coverage` | all processes | Cover declared site and continuous reporting period; disclose start/end, outsourcing, missing months, omissions and excluded stages. Establish QA limits from actual configuration records; public model descriptions supply no intensity range. | order coverage, calibration and completeness reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require complete delivered lifting configuration, positive measured M with cp_mass, empty cargo bunker and stated fill/tare; reject payload capacity as machine mass and incomplete-kit outputs. |  |
| `validate_identity` | all inventory rows | Verify one atomic exchange, correct direction/type, property, unit, route and public identity; separate treatment wastewater from resource water and emitted pollutants. Blank UUIDs require explicit identity resolution before release of a fully linked dataset. |  |
| `validate_amount` | all inventory rows | Check cp links and normalization against accepted output, stock and rework. Require independent meter coverage and no duplicate supplier assembly or internal-transfer burden. Unknown quantity is pending evidence, not zero. |  |
| `validate_emissions` | combustion rows | Activate only when actual factory combustion and attributable measured emission mass exist; verify fossil/biogenic source and air subcompartment. Add other measured pollutants as separate substance/medium rows; never identify NO as NO2 or N2O. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing process dataset for declared complete machinery |
| downstream_use | secondary_dataset; background_dataset, only after qualified review and with disclosed upstream coverage |
| allowed_use | Manufacturing supply-chain modelling for the same configured product, declared gate, mass property and production period |
| excluded_use | Per-hectare crop comparisons, lifetime harvesting efficiency, soil-impact inference, incomplete machines, other crop intakes without reconfiguration, complete cradle-to-gate claims without linked upstream coverage |
| required_metadata | Exact product configuration and qualifiers; geography/site/period; measured M; supplier boundaries; process route; collection/normalization records; background links; allocation and exclusions |
| required_quality_disclosure | Missing identities and amounts, measurement uncertainty, route-specific inactive rows, actual BOM extensions, historical source limits, outsourced and unlinked upstream stages |
| update_trigger | Configuration/intake or powertrain change; supplier assembly boundary or coating change; revised M/fill state; changed site energy supply or reporting period; resolved evidence gaps |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `grimme-manufacturing-history` | handbook | [GRIMME: Traces of success](https://static.grimme.com/files/2015/07/31/86784c2fc98fae5ef67a744c1f46f4347ceae8d0.pdf) | Retained 2015 URL edition, PDF page 11, printed pp. 20–21: pre- to final assembly paragraph. Historical example of fabrication, joining, finishing, webs and factory tests only; not current universal requirements or quantitative ranges. |
| `grimme-multicrop` | literature | [The new EVO 280 MultiCrop](https://products.grimme.com/en/p/evo-280-gen2-multicrop) | Named product introduction and MultiCrop intake description: modular trailed lifting configuration, hydraulic web and electrical interfaces. Factory amounts, net mass and lifetime are not provided; bunker payload is not machine mass. |
| `ropa-tiger` | literature | [ROPA at PotatoEurope and Sugar Beet Expo 2026](https://www.ropa-maschinenbau.de/us/news/ropa-auf-der-potatoeurope-und-sugar-beet-expo-2026/) | ROPA Tiger 6S section only: self-propelled sugar beet lifting configuration, engine and hydraulic/electronic equipment. Adjacent Maus cleaner-loader and Taurus transport descriptions are outside this harvester scope; no inventory factor inferred. |
