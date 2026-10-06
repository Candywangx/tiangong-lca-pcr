---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.wheeled-agricultural-tractor
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wheeled agricultural tractor manufacture

## 1. Scope and Applicability

This PCR covers foreground manufacture of new complete ride-on wheeled agricultural traction power units, with declared operator station, drivetrain and tractor-side implement interfaces. Conventional diesel and battery-electric configurations are separate product records. The production basis is stock/component receipt through actual site operations and factory acceptance, with a declared dispatch gate. It is a manufacturing reference, not a hectare, drawbar-work or lifetime service equivalence.

Exclude pedestrian-controlled tractors and full track-laying tractors already covered by separate semantic PCRs; half-track conversions and wheel/track hybrids require their own reviewed reference definition. Exclude separately supplied ploughs, loaders, tillers, trailers and other implements even when sold in one package. Exclude road truck tractors, industrial platform tractors, self-propelled harvesters, incomplete kits, remanufacture, farm use, crop yield, soil effects, maintenance and end of life. Factory evidence initializes actual process routes; it does not require every manufacturer to fabricate, weld or coat all parts in-house.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.wheeled-agricultural-tractor |
| classification_refs | CPC 3.0 44149, Other agricultural tractors; narrower configured wheeled scope; classification context only |
| covered_products | New complete ride-on wheeled agricultural tractors with declared diesel or battery-electric drivetrain |
| excluded_products | Pedestrian and full-track tractors; half-track conversions; external implements; other vehicle functions and lifetime services |
| representative_product | One accepted wheeled tractor configuration with a serial number; measured M, no invented typical machine weight |
| production_route | Identified bought-in components and actual structural manufacture/finishing, drivetrain/wheel/operator-station integration, first fills and factory acceptance |
| market_state | Complete accepted tractor at declared dispatch gate, defined installed ballast and retained fluids, implements excluded |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the stated complete wheeled agricultural traction power unit and installed tractor interfaces |
| How much | 1 kg net accepted complete tractor; per-machine collection converted using measured M |
| How well | Meets documented configuration-specific propulsion, steering, brake, guard, leak and fitted interface factory acceptance criteria; no field-performance equivalence |
| How long or cycle | One manufacture and acceptance cycle; no assumed working life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other agricultural tractors `5e388b2c-6aba-46c1-b7a0-0873b00713a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model and serial; configuration revision; ride-on wheeled agricultural function; driven-wheel and axle layout; tyre/rim and track width; diesel or electric propulsion architecture; engine/emission hardware or battery chemistry/BMS/motor/inverter; transmission type; steering/brakes; cab or open platform/protection/seat; fitted hitch/PTO/hydraulic/control options; supplier assembly boundaries; installed ballast and detachable delivery parts; retained oil/coolant/fuel/refrigerant and electric charge state; net M with tare/acceptance evidence; excluded implements and packaging; factory/site/period; actual route, gate and upstream coverage |

Declare every qualifier in dataset metadata, process notes or reference-flow comments. M is the same accepted delivery configuration: installed parts and retained first fills included, shipping supports, field payload and detached implements excluded. Collect configuration-specific net mass with cp_mass. Rated engine power, battery kWh, catalog shipping mass and operating ballast ratings are not conversion factors for M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `count_engine` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain actual installed engine count as the exchange numerator. Separately weigh its specified assembly for BOM mass reconciliation; no generic item-to-kg conversion is allowed. |
| `meter_units` | electricity, natural gas and liquids | Net calorific value; Volume; Mass | MJ; m3; kg | Preserve each exchange property. Verified energy unit-group conversion is 3.6 MJ/kWh; any liquid/gas mass-volume conversion requires measured density, composition and reference conditions. A property meanValue of 1 is not a fluid density. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of purchased stock, casting blanks and finished specified components at the reporting manufacturing site |
| starting_condition_role | foreground manufacture module |
| product_classification_scope | Complete ride-on wheeled agricultural traction unit; CPC context does not include tractor field services |
| recursive_input_rule | Record a purchased partial or same-category tractor as a single defined assembly with supplier configuration and boundary; count only incremental foreground work and never duplicate its included components |
| upstream_dataset_requirement | Link supplier datasets with matching assembly completeness, route, property, geography and period; keep missing providers and any proxy decisions explicit |
| disclosure | State actual gates, internal transfers, outsourced operations, utility coverage, transport and unlinked upstream stages. Foreground receipt-to-dispatch is not automatically complete cradle-to-gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all processes | Include actual foreground manufacture, assembly, first fills and factory tests. Supplied engines, transmissions and cabs keep their upstream boundaries; outsourced processes require a defined provider link rather than invented in-house exchanges. | `fendt-factory` |
| `boundary_bom` | all inventory rows | Reconcile full configured BOM and add each omitted actual material, component, packaging item, machining lubricant, welding gas, fluid formulation, filter, HVAC refrigerant and waste as its own specific atomic card. Prove absence from design/process records; unknown is not zero. |  |
| `boundary_service` | reference product | Exclude detached agricultural implements, crop output, traction work, lifetime charging/fuel use and field services. Installed propulsion alternatives are kept separate, with no equal-mass performance claim. | `fendt-electric` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural fabrication and housing machining | conditional | These operations occur at the reporting site; finished bought-in assemblies bypass them. | foreground | one accepted configured machine, normalized using M |
| `joining` | Cab and support joining | conditional | Joining is performed in the foreground. | foreground | one accepted configured machine, normalized using M |
| `finishing` | Cleaning and surface coating | conditional | Cleaning or coating occurs within the declared foreground gate. | foreground | one accepted configured machine, normalized using M |
| `powertrain` | Propulsion, transmission and axle integration | required | Every complete tractor; propulsion-specific rows apply only to the delivered route. | foreground | one accepted configured machine, normalized using M |
| `vehicle` | Wheel, steering, brake and operator-station assembly | required | Every complete wheeled tractor; operator-station cards reflect actual cab or open-platform configuration. | foreground | one accepted configured machine, normalized using M |
| `implements_interface` | Hitch, PTO, hydraulic and control integration | conditional | Specified equipment is installed on the tractor; attached implements remain separate products. | foreground | one accepted configured machine, normalized using M |
| `acceptance` | Final assembly and factory acceptance | required | Every accepted complete tractor. | foreground | one accepted configured machine, normalized using M |
| `packing` | Dispatch protection | conditional | Protection is used within the reporting dispatch gate. | foreground | one accepted configured machine, normalized using M |

Actual fabrication → joining → finishing feeds drivetrain, wheel/operator-station and interface integration → final assembly/acceptance → optional dispatch protection. Purchased finished assemblies enter directly at installation; arrows are internal transfers, not additional purchases. Each card is conditional on its specific material and route even inside a required integration stage.

### Process: Structural fabrication and housing machining (`fabrication`)

Record drawing-specific cutting, forming and machining of the hood, cab structure, supports and bought-in casting blanks. The representative starting condition is supplied metal stock and casting blanks, not an assumed in-house foundry. Document outsourced casting and its upstream gap. Internal transfers to joining are not fresh purchases.

#### Inputs

##### Product flows

###### Steel Plate (`steel_plate`)

Only hot-rolled low-alloy high-strength plate matching issued stock specification; reconcile returns and cutting offcuts.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

###### Grey-cast-iron tractor transmission housing blank (`housing_blank`)

Only if this specific casting blank is machined in-house; record grade and blank mass, not generic cast-iron metal.

- Selected flow: Grey-cast-iron tractor transmission housing blank
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

###### Grid alternating-current electricity at factory intake (`fabrication_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Untreated clean cutting offcuts leaving the process; weigh and record recovery destination.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

###### Steel scrap, machining chips (`steel_chips`)

Only clean conventional steel machining chips; contaminated swarf must use a separate composition-specific row.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

###### Grey-cast-iron machining chips (`iron_chips`)

Only machining chips from the declared grey-iron housing; segregate from steel.

- Selected flow: Grey-cast-iron machining chips
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `fendt-factory`

### Process: Cab and support joining (`joining`)

Follow actual welding procedures for cab and support parts; robotic and manual stations are measured individually where they have different utility coverage. The self-shielded wire row is conditional, not a universal welding prescription. Collect slag only when generated; no mandatory fume emission is assumed.

#### Inputs

##### Product flows

###### Flux Cored Wire (`welding_wire`)

Only self-shielded flux-cored carbon-steel welding; record grade, spool issues and returns. Other welding routes require their separate consumable rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `fendt-factory`

###### Grid alternating-current electricity at factory intake (`joining_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `fendt-factory`

#### Outputs

##### Waste flows

###### Solid carbon-steel flux-cored welding slag (`welding_slag`)

Only collected solid slag from the installed welding route; weigh and retain composition and treatment receipts, not steelmaking slag.

- Selected flow: Solid carbon-steel flux-cored welding slag
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `fendt-factory`

### Process: Cleaning and surface coating (`finishing`)

Record surface area, formulation and curing route for each coated part. Powder and waterborne epoxy electrodeposition cards are separate possible routes and can coexist only when actual layer records support them. Factory body-painting evidence does not specify these recipes or require gas heating. Distinguish recirculated water and recovered powder from fresh input.

#### Inputs

##### Product flows

###### Powder Coating (`powder_coating`)

Only actual resin powder coating; record grade, fresh powder, recovered recirculation and film area.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### Waterborne epoxy electrodeposition coating formulation (`epoxy_ecoat`)

Only an actual documented epoxy e-coat formulation; retain solids content and formulation mass.

- Selected flow: Waterborne epoxy electrodeposition coating formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### Process Water (`process_water`)

Treated supplied industrial water for wet cleaning; weigh or convert measured volume using actual density and conditions.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### natural gas in the gaseous state (`curing_gas`)

Only piped gaseous natural gas actually used for curing; record composition and meter pressure/temperature/reference state. Gas heating is not compulsory.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### Grid alternating-current electricity at factory intake (`finishing_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

#### Outputs

##### Waste flows

###### Unrecovered solid resin powder-coating overspray (`powder_overspray`)

Only overspray exported for treatment after subtracting internal powder recovery; record resin and destination.

- Selected flow: Unrecovered solid resin powder-coating overspray
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### Epoxy electrodeposition paint sludge (`ecoat_sludge`)

Only segregated epoxy e-coat sludge actually removed from the process; record water/solids content and treatment destination.

- Selected flow: Epoxy electrodeposition paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

###### Metal-part cleaning rinse wastewater sent to treatment (`rinse_wastewater`)

Only transfer to treatment; record outlet quantity and contamination; not an elementary water withdrawal or direct aquatic pollutant flow.

- Selected flow: Metal-part cleaning rinse wastewater sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

##### Elementary flows

###### carbon dioxide (fossil) (`curing_fossil_co2`)

Only attributable measured fossil CO2 from actual gas curing to air, unspecified subcompartment. A factor requires separately verified fuel composition and methodology; none is prescribed here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `fendt-factory`

### Process: Propulsion, transmission and axle integration (`powertrain`)

Record a single declared drivetrain configuration, including driven wheels, transmission and axle layout. Diesel-engine and battery-electric rows are alternative installed designs; do not force both into a conventional diesel tractor. Count a purchased transmission or axle once, retaining the supplier assembly boundary; do not duplicate its housing in fabrication. A bought-in diesel engine uses an item-count exchange and a separately measured part mass for BOM reconciliation.

#### Inputs

##### Product flows

###### Diesel engine (`diesel_engine`)

Only an installed bought-in diesel engine in the diesel configuration; collect installed count and actual part mass separately, with emissions hardware completeness. Do not treat Item(s) as kg.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `mf-factory`

###### Finished wheeled-tractor transmission assembly (`transmission`)

Only one specified mechanical/hydrostatic transmission assembly; record exact type and included housing, clutch and oil boundary.

- Selected flow: Finished wheeled-tractor transmission assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `mf-factory`

###### Finished wheeled-tractor drive axle assembly (`drive_axle`)

Only installed driven axle with specified differential and final reduction; identify included brake and oil to avoid duplicates.

- Selected flow: Finished wheeled-tractor drive axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `mf-factory`

###### Complete tractor lithium-ion traction battery pack (`traction_battery`)

Only installed battery-electric pack; declare cell chemistry, capacity, enclosure, BMS and cooling boundary, and measured assembly mass. Fendt announcement does not identify cell chemistry.

- Selected flow: Complete tractor lithium-ion traction battery pack
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `fendt-electric`

###### Electric wheeled-tractor traction motor assembly (`traction_motor`)

Only installed electric traction motor; state winding/magnet architecture and assembly boundary.

- Selected flow: Electric wheeled-tractor traction motor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `fendt-electric`

###### Wheeled-tractor traction-motor inverter assembly (`traction_inverter`)

Only fitted propulsion inverter; record rating, cooling and housing boundary.

- Selected flow: Wheeled-tractor traction-motor inverter assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `fendt-electric`

###### Grid alternating-current electricity at factory intake (`powertrain_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_powertrain.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_powertrain`
- Sources: `mf-factory`

#### Outputs

### Process: Wheel, steering, brake and operator-station assembly (`vehicle`)

Record tyre construction, rim and track width, steering and brake assemblies. A purchased cab can include glass, seat, HVAC and controls: disclose its scope and add excluded components separately. Open-platform tractors retain their installed seat and protection frame without a fictitious cab. Include installed ballast only if in the defined delivery; exclude external payload.

#### Inputs

##### Product flows

###### New pneumatic rubber agricultural tractor tyre (`pneumatic_tyre`)

Record each fitted tyre size/type and weighed mass; separate tyre from rim. Collect mass without assuming a per-tyre weight.

- Selected flow: New pneumatic rubber agricultural tractor tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Steel agricultural tractor wheel rim (`steel_rim`)

Only fitted steel rim of declared size/load rating.

- Selected flow: Steel agricultural tractor wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Agricultural tractor steering gear assembly (`steering_gear`)

Only the declared steering gear; collect supplier completeness and net mass. Separate hydraulic steering actuator if not included.

- Selected flow: Agricultural tractor steering gear assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Agricultural tractor disc brake assembly (`brake_assembly`)

Only specified disc-brake assembly where fitted; retain friction-material and axle supplier boundaries. Other brake types require own rows.

- Selected flow: Agricultural tractor disc brake assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Agricultural tractor operator cab assembly (`cab_assembly`)

Only a fitted bought-in complete cab, with declared glazing/HVAC/seat inclusion; do not add its included parts twice. Open platform has no cab row.

- Selected flow: Agricultural tractor operator cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Agricultural tractor operator seat assembly (`operator_seat`)

Only seat purchased separately from the cab; record suspension and weighed assembly mass.

- Selected flow: Agricultural tractor operator seat assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Steel agricultural tractor rollover protection frame (`protection_frame`)

Only installed frame not included in a purchased cab; state configuration and documented acceptance evidence without inventing a certification standard.

- Selected flow: Steel agricultural tractor rollover protection frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

###### Grid alternating-current electricity at factory intake (`vehicle_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_vehicle.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vehicle`
- Sources: `fendt-factory`

#### Outputs

### Process: Hitch, PTO, hydraulic and control integration (`implements_interface`)

Distinguish built-in hitch, PTO, valve circuit and electronics from an implement coupled to them. Collect actual installed options and first fills with supplier-prefill reconciliation. Mineral hydraulic oil is a specific route; bio-based or synthetic alternatives require their own precise exchange rather than substitution under this identity.

#### Inputs

##### Product flows

###### Steel tractor three-point hitch assembly (`hitch`)

Only installed tractor linkage, not a trailer hitch or attached plough; state link geometry and included cylinder boundary.

- Selected flow: Steel tractor three-point hitch assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Tractor power-take-off shaft assembly (`pto`)

Only installed PTO unit with speed/coupling and guarding configuration; not the external implement drive shaft.

- Selected flow: Tractor power-take-off shaft assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Agricultural tractor hydraulic pump assembly (`hydraulic_pump`)

Only specified pump of actual circuit type and displacement; do not substitute a complete hydraulic power unit.

- Selected flow: Agricultural tractor hydraulic pump assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Double-acting tractor hydraulic cylinder (`hydraulic_cylinder`)

Only fitted hydraulic cylinder, with bore/stroke/pressure.

- Selected flow: Double-acting tractor hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Hydraulic hose (`hydraulic_hose`)

Record installed hose mass, reinforcement and pressure rating; exclude fittings already counted in supplier assemblies.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Hydraulic Fluid (`hydraulic_fluid`)

Only actual refined mineral-oil hydraulic fill matching the stated route; collect grade, retained mass and supplier prefill. Bio-oil is a separate row.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Insulated copper tractor control cable (`control_cable`)

Only installed copper control cable with defined insulation and mass. Cable length requires measured construction-specific mass per length for conversion.

- Selected flow: Insulated copper tractor control cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Agricultural tractor electronic control module (`controller`)

Only exact fitted controller revision, not a collection of PLCs, sensors and cabinet internals.

- Selected flow: Agricultural tractor electronic control module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

###### Grid alternating-current electricity at factory intake (`implements_interface_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_implements_interface.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_implements_interface`
- Sources: `fendt-electric`

#### Outputs

### Process: Final assembly and factory acceptance (`acceptance`)

Retain serial-linked assembly, torque, leak, steering/brake and configured propulsion/PTO/hitch test evidence. Only fitted functions are tested. Fuel consumed in a factory engine test is separated from residual delivered fuel. For electric machines, meter charge/test electricity and disclose state of charge; do not convert stored kWh into a battery mass. No lifetime farm operation is included.

#### Inputs

##### Product flows

###### Steel screw (`steel_screw`)

Only specified steel screws; nuts, bolts and washers are additional separate exchanges where present.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

###### Lead Acid Battery (`starter_battery`)

Only actual lead-acid starter battery, generally in the diesel route; collect electrolyte-inclusive net mass and avoid supplier duplicate.

- Selected flow: Lead Acid Battery `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

###### Refined mineral engine lubricating oil (`engine_oil`)

Only actual mineral engine first fill not included in engine supply; record grade and retained mass. Do not substitute a synthetic oil under the mineral-oil definition.

- Selected flow: Refined mineral engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

###### Ethylene-glycol aqueous tractor cooling fluid (`coolant`)

Only this actually specified coolant formulation; record glycol mass fraction, additives and measured blend mass. Record the actual concentration instead of assuming a generic blend.

- Selected flow: Ethylene-glycol aqueous tractor cooling fluid
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

###### Diesel fuel (`test_diesel`)

Only measured fuel consumed in a factory diesel-engine test; record fossil/biogenic fraction and distinguish fuel retained at delivery.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

###### Grid alternating-current electricity at factory intake (`acceptance_power`)

Meter only this process, at documented factory intake voltage/geography. Use the voltage-specific supply identity matched to the measured intake. Electric charging/test electricity is included only in acceptance.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

#### Outputs

##### Product flows

###### Other agricultural tractors (`finished_machine`)

Exactly 1 kg net accepted configured complete tractor, including its installed parts; separately supplied spare parts and external implements are excluded from this output.

- Selected flow: Other agricultural tractors `5e388b2c-6aba-46c1-b7a0-0873b00713a6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `mf-factory`

##### Elementary flows

###### carbon dioxide (fossil) (`test_fossil_co2`)

Only attributable measured fossil CO2 from factory combustion to air, unspecified subcompartment; no farm operation or biogenic emission is represented.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `mf-factory`

### Process: Dispatch protection (`packing`)

Record measured shipping supports by material; exclude them from tractor M. Self-driven dispatch does not imply a wooden crate. Additional protective films or straps require separate material-specific exchanges.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only actually used kiln-dried coniferous sawn timber support; record species/route and exclude from M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `fendt-factory`

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | Separate orders by exact drivetrain and delivery configuration; use direct stock issues, measurements and work orders first. When shared operations cannot be directly separated, collect a causal driver such as actual machine-hours or metered load and assign the order share as its driver divided by all covered order drivers. Record justification and covered denominator; unexplained cross-model machine-count allocation is not permitted. |  |
| `allocation_recovery` | waste and internal reuse | Reconcile internal reuse with stock, fresh input and returned powder/offcuts; do not count recirculation as repeated fresh purchase. Exported wastes carry measured quantity and destination without an automatic avoided virgin-material credit. Any valuable co-product requires separate status and reviewed residual allocation after direct process separation. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net tractor | weighing_record | model; configuration; serial number; accepted net mass M; scale_id; fill_state; ballast; excluded_implements; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same reporting manufacturing period as orders | declared manufacturing site/configuration | accepted net mass per machine | scale calibration, tare, configuration and acceptance receipts |
| `cp_fabrication` | fabrication | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Structural fabrication and housing machining | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_joining` | joining | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Cab and support joining | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_finishing` | finishing | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Cleaning and surface coating | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_powertrain` | powertrain | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Propulsion, transmission and axle integration | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_vehicle` | vehicle | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Wheel, steering, brake and operator-station assembly | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_implements_interface` | implements_interface | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Hitch, PTO, hydraulic and control integration | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_acceptance` | acceptance | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Final assembly and factory acceptance | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |
| `cp_packing` | packing | each defined atomic exchange | measured_order_record | order; serial/configuration; item/grade; issues; returns; stock_change; exchange_amount; installed_count; part_mass; supplier_scope; meter_unit/state; accepted_count; waste_outlet; allocation_driver; emission_mass | Use item-specific BOM weights/counts and issue-return-stock reconciliation; calibrated utilities submeters and measured reference states; segregated waste weighing/receipts; attributable measured emissions for active combustion rows. Keep traceable part and supplier scope evidence. | kg, MJ, m3 or Item(s) as the row declares | each order, aggregated per batch | declared continuous manufacturing period | Dispatch protection | attributable exchange amount / accepted machines | BOM, meter calibration, waste transfer and test records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For a homogeneous configured order, reconcile material issues/returns and measured stock changes, meter actual operations, allocate documented shared burdens, then divide attributable totals by accepted tractor count to obtain q_item. Rework/reject burdens within the period remain in accepted output burden; disclose unfinished stock and waste. Measure M at the same delivery fill/ballast state. Item-count inputs remain item numerators per kg after normalization. Where net masses vary within the same configuration, use total attributable exchange divided by total accepted net mass with serial-level records; separate incompatible configurations rather than averaging them.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all rows | Trace product, installed options and component completeness to serial/configuration; reconcile first fills and bought-in assembly inclusion to avoid duplicate mass or inputs. | configuration BOM and supplier boundaries |
| `quality_balance` | stock and utilities | Reconcile raw stock, parts, accepted net mass, reject/waste and inventory change; explain losses and density/reference-state conversions with measured evidence. No unsupported yield factor. | weighing, stock, meter and transfer records |
| `quality_coverage` | all processes | Cover the stated site and continuous period; disclose start/end, outsource gaps, missing quantities and inactive routes. Set configuration-specific QA limits from measured records; manufacturer descriptions provide no manufacturing intensity range. | order coverage, calibration and completeness reconciliation |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require a complete ride-on wheeled traction unit with positive measured M, configured delivery fills/ballast and explicit excluded implements/tare. Reject a track/pedestrian tractor or incomplete kit under this reference. |  |
| `validate_identity` | all inventory rows | Check one atomic exchange, public flow identity, reference property/unit group, numerator unit and route. Engine count is not mass; battery capacity is not pack mass; water resource is not treatment wastewater. Resolve blank identities before a fully linked dataset is released. |  |
| `validate_amount` | all inventory rows | Require linked collection and normalization evidence for accepted output; no duplicate supplier components or internal transfers. Verify actual BOM extensions, stock/rework allocation and meter coverage. Unknown is pending evidence, not zero. |  |
| `validate_emissions` | combustion rows | Activate fossil CO2 only with attributable measured factory combustion emissions in the stated air subcompartment; no field operation or biogenic CO2 substitution. Other demonstrated emissions require separate substance and medium cards; NO, NO2 and N2O are different identities. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground configured wheeled agricultural tractor manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review with explicit upstream coverage |
| allowed_use | Supply-chain manufacture modelling for the same configuration, property, gate, site and period |
| excluded_use | Hectare/crop-yield or lifetime-energy comparison; equal-mass traction equivalence; crawler/pedestrian tractor proxy; complete cradle-to-gate claim without upstream linkage |
| required_metadata | Reference qualifiers; measured M and acceptance/fill state; exact propulsion and transmission; full BOM and supplier scopes; site/period/gates; actual process route; collection, allocation and background links |
| required_quality_disclosure | Missing flow identities/quantities; measurement uncertainty; inactive alternatives; actual added exchanges; historic source conditions; outsourcing and unlinked upstream stages |
| update_trigger | Drivetrain, wheel, operator-station or implement-interface change; supplier completeness or coating/fill change; revised measured M; site/period/supply change; resolved evidence gap |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fendt-factory` | literature | [Fendt Brand — Factory network](https://www.fendt.com/au/about-us/locations) | Named tractor factory/cab-production paragraphs: metal processing, joining, body painting, wheel and cab installation. Factory examples only, not universal process recipes or amounts; sections about mowers and forage harvesters are excluded. |
| `mf-factory` | handbook | [A classic visit with Massey Ferguson](https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/assets/discover-mf/manufacturing/beauvais/brochure/17756_MF_Factory_tour_brochure_PDF_V11B_Angl_UB.pdf) | A-A-17756, 2023 English; PDF page 4, factory-tour paragraph identifies GIMA transmission production and tractor assembly lines. Historical site example only; no schedule, capacity, energy or machine mass inferred. |
| `fendt-electric` | literature | [Fully battery-electric: The Fendt e100 V Vario](https://www.fendt.com/us/fully-battery-electric-the-fendt-e100-v-vario-pc-23) | 2023-11-12 model announcement, e107 V Vario drivetrain paragraph; historical battery/motor/transmission configuration alternative. Does not establish current availability, cell chemistry, manufacturing quantities, net mass or lifetime. |
