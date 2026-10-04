---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.full-slewing-hydraulic-excavator
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Full-slewing diesel hydraulic excavator manufacture

## 1. Scope and Applicability

This PCR covers manufacture of new complete self-propelled diesel-powered hydraulic digging excavators with a 360-degree revolving upper structure. Crawler and wheeled chassis, boom/stick/bucket and installed cab/power/hydraulic configuration are separate reference products. Manufacture begins with purchased stock and specified components entering the reporting site and ends at acceptance and the declared dispatch gate. It is a foreground manufacturing module; upstream coverage must be declared and linked before a complete cradle-to-gate claim.

Exclude front-end shovel loaders, backhoe loaders, excavators lacking full rotation, cable/rope excavators, stand-alone attachments, purpose-built material handlers and demolition machines, incomplete kits, remanufacture and all customer-site excavation, productivity, maintenance and end-of-life services. Battery-electric, externally powered and hybrid machines require a separately reviewed power-system inventory and reference definition; diesel-only records cannot represent them. Named factory evidence supports candidate operations, not mandatory in-house fabrication or coating for every manufacturer.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.full-slewing-hydraulic-excavator |
| classification_refs | CPC 3.0 44426: self-propelled 360-degree revolving excavation machinery; this diesel hydraulic scope is narrower, classification context only |
| covered_products | Complete new diesel hydraulic digging excavators, crawler or wheeled, full revolving upper structure |
| excluded_products | Loaders, limited-rotation or cable machines; external attachments; other power architectures without reviewed extension; lifetime services |
| representative_product | One serialized accepted configuration; measured M, no assumed per-machine weight |
| production_route | Actual conditional structural fabrication/joining/finishing, required travel/slew/digging-hydraulic/power-cab integration and factory acceptance |
| market_state | Accepted complete excavator at declared dispatch gate, installed bucket/counterweight and delivery fills defined |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture the configured complete full-slewing diesel hydraulic digging machine |
| How much | 1 kg net accepted complete machine, converted from per-machine records with measured M |
| How well | Document configuration-specific acceptance of travel, slew, hydraulic operation, brakes/interlocks, guarding and leakage; no equal-mass digging-performance equivalence |
| How long or cycle | One manufacture and factory acceptance cycle; no imposed service life |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mechanical shovels, excavators and shovel loaders, self-propelled, with a 360-degree revolving superstructure, except front-end shovel loaders `6970cd56-054c-4ec5-9258-37356541f7d3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/model; serial and configuration revision; diesel/hydraulic full-slewing function; crawler or wheeled undercarriage and travel/steering/brake layout; track shoe or tyre/rim specifications; boom/stick lengths, bucket and coupler completeness; slew bearing/drive, counterweight and auxiliary circuits; engine and actual installed emission hardware; cab/seat/protection/HVAC; controller and harness; supplier assembly inclusion; retained hydraulic/engine oil, coolant, diesel and refrigerant; transport-disassembled delivery parts; accepted net M and tare; factory/site/period; actual route/gate and unlinked upstream stages |

Declare every qualifier in dataset metadata, process notes or reference-flow comments. M includes the accepted installed configuration and separately weighed transport-disassembled parts belonging to it, including retained first fills. Exclude operator, excavated soil, test payload, detached extra attachments and shipping packaging. Catalog operating weight, bucket volume, lift rating, engine kW and service fuel consumption do not establish M.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `engine_count` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Exchange numerator is actual installed engine count; separately measure the included engine assembly mass for BOM reconciliation. No universal engine count-to-mass factor. |
| `energy_and_fluid_units` | electricity and liquids | Net calorific value; Mass | MJ; kg | Use verified energy-group kWh to MJ conversion, 3.6 MJ/kWh. Liquid volume-to-mass conversion requires actual measured density, composition and temperature; an alternate flow-property meanValue is not density. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased stock and discrete finished components received at reporting manufacturing site |
| starting_condition_role | Foreground manufacturing receipt-to-dispatch module |
| product_classification_scope | Complete diesel full-slewing hydraulic digging machine; upstream components retain their identities |
| recursive_input_rule | Record a purchased complete machine for finishing as a disclosed input; never recursively create it from this same output, and exclude its already completed constituent operations |
| upstream_dataset_requirement | Link matching material/component, technology, geography, supply state and property datasets; disclose all unlinked stages and avoid duplicate supplier internals |
| disclosure | State site/period, actual in-house and outsourced operations, received component completeness, gate, M/fills, upstream exclusions and unresolved identity/quantity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | Include actual site manufacture, assembly, first fills, rework and attributable acceptance tests. Exclude customer-site excavation, commissioning services, distribution beyond the gate, maintenance and end of life. Factory testing fuel must not use a jobsite service consumption rate. | `volvo-factory` |
| `boundary_completeness` | supplier assemblies | Map full configured BOM to purchased components or internal manufacture, once only. Crawler and wheeled layouts are separate; do not infer hydraulic-cylinder, track-shoe or counterweight manufacturing inside the assembly site. | `volvo-machine` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural cutting, forming and machining | conditional | Declared structural parts are made at the reporting site. | foreground | one accepted configured machine, normalized with M |
| `joining` | Structural joining | conditional | Welded excavator structures are made in the foreground. | foreground | one accepted configured machine, normalized with M |
| `finishing` | Surface preparation and coating | conditional | Declared structures receive preparation or coating at this site. | foreground | one accepted configured machine, normalized with M |
| `chassis` | Lower chassis, travel and revolving platform integration | required | Every complete excavator; crawler and wheeled layouts separately declared. | foreground | one accepted configured machine, normalized with M |
| `hydraulics` | Digging linkage and hydraulic integration | required | Every complete hydraulic digging excavator. | foreground | one accepted configured machine, normalized with M |
| `power_cab` | Diesel power unit, cab and controls integration | required | Every diesel-powered configured machine within this PCR. | foreground | one accepted configured machine, normalized with M |
| `acceptance` | First fills, factory testing and acceptance | required | Every accepted complete machine. | foreground | one accepted configured machine, normalized with M |
| `packing` | Dispatch protection | conditional | Packaging/supports cross the declared dispatch gate. | foreground | one accepted configured machine, normalized with M |

Actual stock fabrication → structural joining → finishing → chassis/slew and digging hydraulic integration → power/cab/controls → fills/test/acceptance → optional dispatch protection. Purchased finished assemblies enter at their actual installation stage. Cards are conditional on the named material and supply boundary even within required stages. Internal transfers are not new inputs. These cards initialize data collection; reconcile the full configuration BOM and add exact omitted components, utilities, reagents and demonstrated wastes/emissions before completing a dataset.

### Process: Structural cutting, forming and machining (`fabrication`)

Cut and form drawing-specific plate for the lower frame, revolving platform, boom, stick and bucket; machine bores, pin interfaces and mounting faces only where performed. Purchased finished structures bypass corresponding plate operations. Casting counterweights, forging pins and producing track shoes are not assumed at the assembly site. Add their own measured operations if performed.

#### Inputs

##### Product flows

###### Steel Plate (`steel_plate`)

Only actual uncoated hot-rolled high-strength low-alloy plate matching the drawing; document grade, thickness and supplier route. Other steel grades have their own cards.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `liebherr-manufacture`

###### Grid alternating-current electricity at factory intake (`fabrication_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `liebherr-manufacture`

#### Outputs

##### Waste flows

###### Steel scrap, offcuts (`steel_offcut`)

Only clean untreated uncoated cutting offcuts exported after internal reuse; weigh and record destination.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `liebherr-manufacture`

###### Steel scrap, machining chips (`steel_chips`)

Only separately collected untreated clean steel machining chips, not oily mixed swarf; record actual treatment destination.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fabrication.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `liebherr-manufacture`

### Process: Structural joining (`joining`)

Join configured frame, boom, stick and bucket weldments under actual weld procedures; document fit-up, weld length, inspection and rework. The selected self-shielded carbon-steel wire is one conditional technique, not a prescription for excavator welding. Gas-shielded solid wire, its individual shielding gases, electrodes and actual welding residues require distinct exact exchanges.

#### Inputs

##### Product flows

###### Flux Cored Wire (`self_shield_wire`)

Only the documented self-shielded carbon-steel flux-cored technique compatible with the actual weld procedure; no external shielding-gas omission is inferred for other techniques.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `liebherr-manufacture`

###### Grid alternating-current electricity at factory intake (`joining_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_joining`
- Sources: `liebherr-manufacture`

### Process: Surface preparation and coating (`finishing`)

Follow actual surface cleaning, blasting and coating specification. Epoxy primer and polyurethane topcoat cards apply only to these documented formulations; do not infer their use from a generic paint capability. Purchased pre-coated parts bypass the operation. Add each actual abrasive, degreaser, hardener and thinner as separate exchanges, and distinguish captured residues from demonstrated substance-specific emissions.

#### Inputs

##### Product flows

###### Formulated epoxy primer coating (`epoxy_primer`)

Only documented epoxy primer as supplied, with formulation/solids and hardener inclusion recorded; separate hardener if issued independently.

- Selected flow: Formulated epoxy primer coating
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

###### Formulated polyurethane topcoat (`pu_topcoat`)

Only documented polyurethane topcoat; specify supplied formulation and separately issued curing agent, with measured quantities.

- Selected flow: Formulated polyurethane topcoat
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

###### Process Water (`cleaning_water`)

Only treated supplied industrial water used in actual surface cleaning; no groundwater withdrawal or internal circulation counted as fresh supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

###### Grid alternating-current electricity at factory intake (`finishing_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

#### Outputs

##### Waste flows

###### Surface-cleaning aqueous effluent sent to treatment (`cleaning_effluent`)

Only exported cleaning effluent with measured mass, contamination and receiving treatment specified; not a direct environmental water discharge.

- Selected flow: Surface-cleaning aqueous effluent sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

###### Captured epoxy-primer overspray residue (`epoxy_paint_residue`)

Only actual segregated captured epoxy paint residue; record solvent/cured fraction and waste outlet, with no automatic emission assignment.

- Selected flow: Captured epoxy-primer overspray residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `volvo-factory`

### Process: Lower chassis, travel and revolving platform integration (`chassis`)

Integrate the specified lower frame, travel drive and 360-degree revolving platform with slew bearing/drive and counterweight. Track chain/shoe assemblies are distinct from final drives; wheeled chassis has separate tyres, rims, axle and steering/brake equipment. Bought-in complete modules include only documented constituents. Site transfers of in-house structures are not purchases.

#### Inputs

##### Product flows

###### Finished welded excavator lower frame (`lower_frame`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished welded excavator lower frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Finished excavator revolving upper frame (`upper_frame`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished excavator revolving upper frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Excavator slewing-ring bearing (`slew_bearing`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator slewing-ring bearing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Excavator hydraulic swing-motor assembly (`slew_motor`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator hydraulic swing-motor assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Excavator steel crawler track-chain and shoe assembly (`track_chain`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly. Crawler configuration only.

- Selected flow: Excavator steel crawler track-chain and shoe assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Excavator hydraulic travel final-drive assembly (`travel_drive`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator hydraulic travel final-drive assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Finished cast-iron excavator counterweight (`counterweight`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished cast-iron excavator counterweight
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Steel wheeled-excavator wheel rim (`wheel_rim`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly. Wheeled configuration only.

- Selected flow: Steel wheeled-excavator wheel rim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Wheeled-excavator steering axle assembly (`steering_axle`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly. Wheeled configuration only.

- Selected flow: Wheeled-excavator steering axle assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Rubber pneumatic wheeled-excavator tyre (`pneumatic_tyre`)

Only installed pneumatic rubber tyre of stated size/construction; mass measured without rim and declared supplier tyre completeness.

- Selected flow: Rubber pneumatic wheeled-excavator tyre
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

###### Grid alternating-current electricity at factory intake (`chassis_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_chassis.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chassis`
- Sources: `volvo-machine`

### Process: Digging linkage and hydraulic integration (`hydraulics`)

Install boom, stick, one declared digging bucket, cylinder actuators, main pump, valve block, reservoir, filters and hose circuit. Bucket size, arm geometry, coupler and auxiliary circuits define the reference configuration, not a digging-volume service unit. Purchased cylinders and pumps are finished assemblies; do not count their steel and seals again. Omitted BOM items require separately defined measured cards before data completion.

#### Inputs

##### Product flows

###### Finished hydraulic-excavator boom (`boom`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished hydraulic-excavator boom
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Finished hydraulic-excavator stick (`stick`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished hydraulic-excavator stick
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Finished steel excavator digging bucket (`digging_bucket`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished steel excavator digging bucket
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Variable-displacement excavator main hydraulic pump (`hydraulic_pump`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Variable-displacement excavator main hydraulic pump
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Double-acting excavator boom hydraulic-cylinder assembly (`boom_cylinder`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Double-acting excavator boom hydraulic-cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Double-acting excavator stick hydraulic-cylinder assembly (`stick_cylinder`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Double-acting excavator stick hydraulic-cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Double-acting excavator bucket hydraulic-cylinder assembly (`bucket_cylinder`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Double-acting excavator bucket hydraulic-cylinder assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Excavator main hydraulic control-valve block (`main_valve`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator main hydraulic control-valve block
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Finished steel excavator hydraulic-oil reservoir (`oil_reservoir`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Finished steel excavator hydraulic-oil reservoir
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Hydraulic hose (`hydraulic_hose`)

Only supplied complete hydraulic hose matching circuit pressure and construction; declare coupling inclusion and do not duplicate supplier-installed hose.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

###### Grid alternating-current electricity at factory intake (`hydraulics_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_hydraulics.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydraulics`
- Sources: `volvo-machine`

### Process: Diesel power unit, cab and controls integration (`power_cab`)

Install documented engine, cooling and exhaust system, operator cab with seat/protection, starter battery, dedicated controller and harness. Cab HVAC, safety equipment and aftertreatment are included only at their actual installed boundary; record separately supplied equipment and refrigerant first charge by exact identity. No generic engine power-to-mass, emission compliance or battery capacity conversion is allowed.

#### Inputs

##### Product flows

###### Diesel engine (`diesel_engine`)

Only installed diesel engine assembly; collect actual Item(s) per machine, measured assembly mass separately for BOM reconciliation and explicit included cooling/exhaust accessories.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Complete excavator operator-cab assembly (`cab`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Complete excavator operator-cab assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Excavator radiator and oil-cooler heat-exchanger assembly (`cooling_pack`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator radiator and oil-cooler heat-exchanger assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Configured diesel-excavator exhaust-aftertreatment assembly (`exhaust`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Configured diesel-excavator exhaust-aftertreatment assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Excavator electronic machine-controller module (`controller`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Excavator electronic machine-controller module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Insulated copper excavator wiring-harness assembly (`harness`)

Only the named bought-in finished part, with drawing/part revision and measured installed mass; omit this purchase when made in-house or already contained in a larger supplier assembly.

- Selected flow: Insulated copper excavator wiring-harness assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Lead Acid Battery (`starter_battery`)

Only actual installed lead-acid starter battery with lead/dilute-sulfuric-acid construction and documented state; no traction-battery inference.

- Selected flow: Lead Acid Battery `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Steel screw (`steel_screw`)

Only actual steel screws issued to assembly; bolts, nuts and washers must be separate precise exchanges if independently supplied.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

###### Grid alternating-current electricity at factory intake (`power_cab_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_power_cab.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power_cab`
- Sources: `volvo-machine`

### Process: First fills, factory testing and acceptance (`acceptance`)

Record first fills, retained delivery fuel and actual fuel consumed during factory tests separately by balance. Test installed travel, slew, hydraulic linkage, brakes/interlocks, leakage and completeness to configuration-specific documented factory criteria. Acceptance is not customer-site excavation performance. Factory test emissions are conditional on actual measured combustion and medium; no generic NOx, VOC or particle emission is imposed.

#### Inputs

##### Product flows

###### Hydraulic Fluid (`mineral_hydraulic_oil`)

Only supplied mineral hydraulic fluid of verified refining route and actual grade; meter fresh additions less returns, distinguish delivery-retained fill from drained test fill.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

###### Mineral-base formulated diesel-engine lubricating oil (`engine_oil`)

Only documented supplied engine-oil formulation; supplier-pre-filled oil is not an additional purchase; collect actual first fill.

- Selected flow: Mineral-base formulated diesel-engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

###### Aqueous ethylene-glycol engine coolant (`engine_coolant`)

Only an actual documented premixed aqueous ethylene-glycol coolant with recorded concentration/inhibitors and mass; neat glycol and unspecified antifreeze cannot substitute.

- Selected flow: Aqueous ethylene-glycol engine coolant
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

###### Diesel fuel (`factory_diesel`)

Record diesel actually entering factory filling/testing: purchased input equals consumed test fuel plus delivery-retained fuel plus measured other balance terms. Disclose actual grade/biofraction; fossil-only accounting uses only verified fossil fraction.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

###### Grid alternating-current electricity at factory intake (`acceptance_electricity`)

Meter attributable actual stage work at the declared intake voltage and provider; include factory trials only, not excavation service.

- Selected flow: Grid alternating-current electricity at factory intake
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

#### Outputs

##### Product flows

###### Mechanical shovels, excavators and shovel loaders, self-propelled, with a 360-degree revolving superstructure, except front-end shovel loaders (`finished_machine`)

Exactly 1 kg net accepted configured complete excavator, including installed counterweight, declared bucket and retained first fills; excludes shipping supports, operator and digging payload.

- Selected flow: Mechanical shovels, excavators and shovel loaders, self-propelled, with a 360-degree revolving superstructure, except front-end shovel loaders `6970cd56-054c-4ec5-9258-37356541f7d3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `volvo-factory`

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only attributable measured fossil CO2 from actual factory test combustion emitted to air, unspecified subcompartment. No fixed fuel factor, use-phase emission or biogenic substitution.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `volvo-factory`

### Process: Dispatch protection (`packing`)

Include actual dispatch supports and protective film separately, excluded from machine M. Transport-disassembled delivery parts belonging to the accepted machine remain in M and the completeness record; detached additional service tools and shipping supports do not.

#### Inputs

##### Product flows

###### Kiln-dried sawn coniferous timber, at mill (`timber_support`)

Only actual kiln-dried sawn coniferous shipping timber, with measured mass; excluded from net machine M.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `volvo-factory`

###### Low-density polyethylene foil (PE-LD) (`ldpe_film`)

Only actual supplied LDPE protective film with thickness and measured mass; excluded from M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources: `volvo-factory`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | Separate model, chassis, attachment, power and fill configurations by work order; directly assign issues, returns, meters and rework first. Unseparated shared stations use measured causal station time or metered load, with order driver divided by all covered order drivers; document causal justification, period and denominator. No unexplained equal-count allocation across differently sized models. |  |
| `allocation_reuse` | material recovery | Internal reuse is a stock transfer, not repeated fresh input. Exported steel scrap, drained fluid and paint residue carry measured quantities and destinations without automatic avoided-product credit. Identify valuable co-products separately and obtain reviewed residual allocation after direct separation. Include test/reject/rework burdens in accepted output for the recorded period; disclose unfinished stock. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | accepted net machine mass | weighing_record | model; configuration; serial number; accepted net mass M; scale_id; calibration; counterweight; bucket; retained_fills; detached_delivery_parts; packaging_tare | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each machine or representative same-configuration batch | same manufacturing period as orders | declared factory/configuration | accepted net mass per machine | calibration, tare, component completeness and acceptance receipts |
| `cp_fabrication` | fabrication | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Collect grade/thickness stock issues, returns and inventory changes; weigh accepted part outputs, uncoated offcuts and machining chips separately; submeter actual stations. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Structural cutting, forming and machining | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_joining` | joining | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Record weld procedure, wire grade and issue-return quantities, weld inspection/rework and station electricity; weigh demonstrated residue by composition and outlet. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Structural joining | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_finishing` | finishing | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Collect batch formulation/SDS, each coating issue/return, area and cured mass, process water and actual exported wastewater, captured paint waste and booth electricity. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Surface preparation and coating | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_chassis` | chassis | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Trace lower/upper frame and travel/slew part numbers, measured installed masses, supplier completeness and track/wheel configuration; reconcile in-house transfers separately. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Lower chassis, travel and revolving platform integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_hydraulics` | hydraulics | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Record circuit and part-level BOM, pump/cylinder type, displacement/pressure specification, hose construction, net masses and supplier inclusions; document cleanliness and leak test records. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Digging linkage and hydraulic integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_power_cab` | power_cab | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Collect installed engine count and separately measured assembly mass, cab/powertrain BOM, battery construction, controller revision and harness mass; reconcile supplier-contained components. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Diesel power unit, cab and controls integration | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_acceptance` | acceptance | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Measure fresh fluid/fuel additions, returns, retained fills and consumed fuel; collect factory test sheets, emission measurements and positive calibrated accepted net mass M without payload or packaging. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | First fills, factory testing and acceptance | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |
| `cp_packing` | packing | each atomic exchange | measured_order_record | order; serial/configuration; part/grade; supplier_scope; issues; returns; stock_change; exchange_amount; engine_count; part_mass; meter_unit; voltage; density_temperature; accepted_count; rework; allocation_driver; waste_outlet; measured_emission_mass | Weigh each support/film input and document dispatch quantity, packaging tare and any actual reusable-support cycles. | kg, MJ or Item(s) as declared by each row | each order, batch reconciliation | declared continuous manufacturing period | Dispatch protection | attributable exchange amount / accepted machines | BOM, weighing, submeter calibration, test and transfer receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

For a homogeneous configured order, reconcile issues minus returns and measured stock changes, collect actual utilities and emissions, apply documented shared shares, then divide attributable totals by accepted count to obtain q_item. Normalize by the same measured delivery-state M. Engine-count numerator remains Item(s) per kg; separately measured engine mass supports BOM completeness, not conversion of its flow property. If net M varies within a compatible configuration, retain serial-level records and divide attributable order exchange by total accepted net mass; incompatible configurations remain separate. Document metering uncertainty, quantity gaps and inactive routes; unknown does not equal zero.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | Reconcile every installed structure, actuator, drive, cab, power system and first fill to configuration BOM and supplier boundary; avoid part/stock and prefilled-fluid duplication. | serial BOM and supplier scope |
| `quality_balance` | mass and utilities | Reconcile stock, parts, installed M, exported waste, retained fluids, test consumption and rework; measure density/temperature for actual liquid conversion. Establish site/configuration QA limits from measured records rather than assumed yield or brochure operating weight. | stock, weighing, meter and test receipts |
| `quality_coverage` | all processes | State period/geography, meter and order coverage, conditional absence, outsourcing and upstream linkage. Manufacturer capability/configuration descriptions do not provide net machine mass or manufacturing exchange intensities. | order coverage and evidence register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require a positive measured M for the accepted full-slewing diesel hydraulic machine with explicit chassis, boom/stick/bucket, counterweight, supplier completeness and delivery fills. Reject operating-service, infrastructure amortization or dismantling flow substitution. |  |
| `validate_identity` | all inventory rows | Require one physically defined exchange and matching public identity, actual reference property, unit group, route and medium. Leave conflicting identities unresolved until data completion; item count is not mass, coolant is not neat glycol, treatment effluent is not direct water emission. |  |
| `validate_conversion` | all inventory rows | Check collection scope and normalize_mass against the same accepted configuration and M; require no duplicate internal transfers, purchased complete-module components or retained/test fuel. Unknown exchanges need evidence, not zero defaults. |  |
| `validate_emissions` | elementary exchanges | Fossil CO2 requires attributable measured factory combustion and air-unspecified medium; separately identify any other demonstrated substance/medium. Do not substitute biogenic carbon, service-phase fuel rates or NO/NO2/N2O identities. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured full-slewing diesel hydraulic excavator foreground manufacture dataset |
| downstream_use | secondary_dataset; background_dataset after qualified review with explicit upstream coverage |
| allowed_use | Manufacturing supply-chain modelling for the same configuration, property, gate, site and period |
| excluded_use | Excavated m3 or lifetime emissions/service comparison; equal-mass digging equivalence; other propulsion proxy; complete cradle-to-gate claim with missing upstream stages |
| required_metadata | Reference qualifiers, serial/configuration BOM, measured M/fills, actual operations, supplier scopes, site/period/gates, collection and allocation evidence, matching upstream links |
| required_quality_disclosure | Missing identities/quantities, uncertainty, conditional absent rows, extra BOM exchanges, historical evidence limits and unlinked outsourced/upstream stages |
| update_trigger | Chassis/power/hydraulic/boom/bucket/cab change, supplier completeness, measured M/fills, coating route, factory geography/period or resolved evidence gap |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `volvo-factory` | literature | [Volvo CE Shippensburg Facility](https://www.volvoce.com/united-states/en-us/about-us/shippensburg-facility/) | What we do: named mixed-product manufacturing site lists welding, machining, paint, assembly and testing. Retrieved 2026-10-04 UTC. Site competency example only; no universal route, coating formulation, quantity or net machine mass. |
| `volvo-machine` | literature | [Volvo EC220E crawler excavator](https://www.volvoce.com/europe/en/products/excavators/ec220e/) | Optimized hydraulics, Volvo engine, Main Control Valve and Software, and cab sections; retrieved 2026-10-04 UTC. Configuration example only. Contradictory engine-stage marketing is not a compliance basis; operating-weight or fuel/productivity claims are not manufacturing conversion factors. |
| `liebherr-manufacture` | literature | [170 million euro investment: New Liebherr production site in Alsace](https://www.liebherr.com/shared/media/corporate/news/news-2023/06/21/lfr/liebherr-press-release-eco-rhena-investment-alsace.pdf) | 21 June 2023 press release, PDF/printed page 1, Two different production activities: planned structural welding/machining and cab assembly for crawler/mobile excavators. Historical planned activity only; not confirmation of opening, current manufacturing, amounts or net mass. |
