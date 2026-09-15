---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-not-incorporating-television-reception-apparatus-and-not-princi-bb48c1b5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Monitors and projectors, not incorporating television reception apparatus and not principally used in an automatic data processing system

## 1. Scope and Applicability

This PCR applies to finished, independently operable commercial displays, industrial displays, digital-signage display units, video-wall display units, and front-projection systems that do not incorporate a television broadcast tuner/receiver and are not designed principally as output units of an automatic data processing system. It covers both the display route and the projector route, but a foreground data package shall select exactly one route and shall not average the two routes into one reference product.

The display route includes finished LCD, OLED, microLED, direct-view LED, and comparable electronic display equipment for commercial, industrial, public-information, control-room, broadcast-production, or installed audiovisual use when the product boundary satisfies the exclusions below. The projector route includes finished front projectors using LCD/3LCD, DLP/DMD, LCoS, laser, laser-hybrid, LED, lamp, or comparable electronic projection technology for commercial, industrial, installed audiovisual, or presentation use.

Excluded products are television receivers or any product incorporating a terrestrial, cable, or satellite broadcast tuner/receiver; monitors or projectors principally used in an automatic data processing system; integrated status displays or control panels that cannot operate independently; medical displays; virtual-reality headsets; rear-projection units; cinematographic projectors classified separately; bare display panels, light engines, optical modules, printed circuit board assemblies, and other parts sold as components; projection screens, standalone lenses, mounts, controllers, and accessories sold separately.

The default foreground boundary is receipt of purchased materials, components, and subassemblies at the manufacturing site through route-specific subassembly work performed at that site, final assembly, functional and power-state testing, rework, and packaging of the finished product at the factory gate. Upstream production of purchased panels, optical engines, electronic boards, power supplies, cooling assemblies, housings, cables, accessories, and packaging remains represented by linked upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-not-incorporating-television-reception-apparatus-and-not-princi-bb48c1b5 |
| classification_refs | CPC 3.0: 47314 (exact) |
| covered_products | independently operable commercial and industrial displays; digital-signage and video-wall display units; non-ADP front-projection systems without television reception apparatus |
| excluded_products | television receivers and tuner-equipped products; CPC 47315 ADP-principal monitors/projectors; integrated control/status panels; medical and VR displays; rear-projection and separately classified cinematographic projectors; bare components and separately sold screens/lenses/mounts/controllers/accessories |
| representative_product | one finished, saleable display unit or front projector in its as-shipped configuration at the factory gate |
| production_route | exactly one of display_route or projector_route; declare technology and site-controlled subassembly depth |
| market_state | finished, tested, packaged equipment for commercial, industrial, public-information, control-room, broadcast-production, installed audiovisual, or presentation use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | finished display or front projector meeting this PCR scope at the factory gate |
| How much | 1 kg net mass of finished equipment, excluding tertiary transport packaging and separately sold accessories |
| How well | saleable, functionally tested unit in the declared as-shipped configuration, with route and technical qualifiers complete |
| How long or cycle | one completed production batch normalized from the declared foreground reporting period |
| reference_flow_link | packaged_product_output in packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Monitors and projectors, not incorporating television reception apparatus and not principally used in an automatic data processing system `327360e4-f3be-43e9-81b1-e0cb3a51d782` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route: display_route or projector_route; display or projection technology; model/family and intended non-ADP use; absence of television broadcast tuner/receiver; native resolution; display viewable dimensions, diagonal and screen area or projector rated light output and maximum projected image size; normal/as-shipped configuration; measured on, standby, networked-standby, off and ECO power states when present; panel or optical-engine identity; electronic-board and power-supply composition; cooling architecture; housing/chassis material; included accessories; net product mass; manufacturing geography; reporting period |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. A missing route, exclusion declaration, visual specification, power-state profile, or component disclosure makes the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize site totals to 1 kg net finished equipment. Record packaging separately and do not include tertiary transport packaging or separately sold accessories in reference mass. |
| `route_visual_specification` | reference product identity | route-specific visual performance | display: mm, inch, cm2, pixels, cd/m2; projector: lm, pixels, inch or m | For display_route, record technology, viewable width/height, diagonal, screen area, native resolution and normal/as-shipped luminance. For projector_route, record projection technology and light-source type, rated light output, native resolution, and maximum declared projected image size under the cited test/specification method. |
| `power_state_measurement` | functional testing and product specification | active electrical power and electricity | W; kWh | Record normal/on power and each available ECO, standby, networked-standby and off state separately. Preserve test voltage, frequency, configuration, picture/test pattern, brightness or light-output setting, warm-up/stabilization rule, connected modules and measurement method; do not substitute nameplate maximum power for measured power. |
| `component_mass_balance` | panel/optical engine, electronics, cooling, housing, accessories and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Sum quantity times measured or supplier-declared unit mass by component family and reconcile net finished-product mass, removed test/rework parts, manufacturing waste and packaging as separate balances. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased route-specific materials, components and subassemblies received at the reporting manufacturing site |
| starting_condition_role | gate at which upstream component production ends and site-controlled subassembly, final assembly, testing, rework and packaging begin |
| product_classification_scope | finished CPC 3.0 47314 equipment only; route-specific display or projector output without television reception apparatus and not principally used in ADP systems |
| recursive_input_rule | A same-category display or projector purchased as an input remains a visible product input with a separate upstream dataset and declared role; do not recursively recreate its production inside the consuming process. |
| upstream_dataset_requirement | Link every purchased panel, optical engine, PCB assembly, power supply, cooling assembly, housing, cable/accessory set and packaging material to a geographically and technologically appropriate upstream dataset; disclose proxy use. |
| disclosure | Declare route, technology, site-controlled manufacturing depth, purchased-versus-made status of each major assembly, product and packaging mass balances, rejected/reworked units, measured power states, geography, reporting period and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | all foreground data packages | Select exactly one of display_route and projector_route. Shared lines may be subdivided by metered batch records, but display and projector reference outputs shall not be averaged into one dataset. | `eu-2019-2021-electronic-displays`; `iec-61947-1-2002`; `iec-62906-5-1-2021` |
| `boundary_product_exclusions` | product identity | Reject a product that incorporates a television broadcast tuner/receiver, is principally an ADP output unit, is a non-independent integrated panel, or belongs to another explicitly excluded category. Internet unicast or network control alone is not television reception apparatus. | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `boundary_component_completeness` | site-controlled manufacturing and assembly | Record, as separate component families, the display panel assembly for display_route or optical engine/light-source assembly for projector_route, plus electronic boards, power supply, cooling system, housing/chassis, cables/connectors, included accessories and packaging. Record purchased versus site-made status for each family. | `ecma-370-2026`; `barco-ecoscore-objective-criteria` |
| `boundary_foreground_operations` | manufacturing-site gate-to-gate inventory | Include incoming inspection and route-specific subassembly work when site-controlled, final assembly, firmware/configuration loading when performed, functional and power-state testing, rework, packaging, direct site energy and water, manufacturing waste, wastewater and direct emissions. Link purchased inputs to upstream datasets. | `iec-63366-2025`; `iso-14040-2006` |
| `boundary_display_applicability` | display_route | Apply display definitions and measurement requirements only where their stated scope fits the declared product. EU on-mode requirements exempt some professional and digital-signage displays and the EU regulation excludes projectors; do not transfer exempted limits or display equations to projector_route. | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `boundary_projector_performance` | projector_route | Document fixed-resolution projection technology, integral light source and projection optics, rated light output, native resolution and projected-image size using a declared applicable projector specification or measurement method. | `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `subassembly_production` | Route-specific subassembly production | conditional | include only for panel, optical-engine, PCBA, power-supply, cooling or housing work physically controlled by the reporting site | foreground manufacturing | kg prepared subassemblies transferred to final assembly |
| `final_assembly` | Final equipment assembly | required | always | foreground assembly | kg assembled equipment sent to testing |
| `functional_testing` | Configuration, functional and power-state testing | required | always | foreground testing and rework | kg accepted tested equipment sent to packaging |
| `packaging` | Final packaging and factory-gate release | required | always | foreground packaging and release | 1 kg net finished reference product at factory gate |

### Process: Route-specific subassembly production (`subassembly_production`)

#### Inputs

##### Product flows

###### Route-specific core and electronic component inputs (`subassembly_component_inputs`)

Record materials and purchased parts consumed in any site-controlled panel/backlight, optical-engine/light-source, PCB assembly, power-supply, cooling-system, housing or chassis production. Keep display-route and projector-route components in separate batch records.

- Selected flow: Route-specific component and material inputs
- Flow property / unit: Mass / kg
- Amount rule: sum accepted quantity multiplied by measured or supplier-declared unit mass, net of returned unused items
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared subassemblies transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `barco-ecoscore-objective-criteria`

###### Electricity for subassembly production (`subassembly_electricity`)

Record metered electricity for site-controlled fabrication, soldering, joining, cleaning, curing and inspection of route-specific subassemblies.

- Selected flow: Electricity supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: metered subassembly-line electricity minus separately metered non-process loads, allocated only under section 7 when a dedicated meter is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared subassemblies transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

###### Subassembly manufacturing scrap and rejects (`subassembly_scrap`)

Record rejected boards, panel or optical parts, metals, plastics, solder residues, filters and contaminated materials by measured mass and destination.

- Selected flow: Route-specific manufacturing scrap by treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass by waste code and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared subassemblies transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared route-specific subassemblies (`prepared_subassemblies`)

Record the measured mass of accepted panel/optical-engine, electronic-board, power-supply, cooling and enclosure subassemblies transferred to final assembly.

- Selected flow: Prepared route-specific subassemblies
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass by subassembly family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Final equipment assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Display panel assembly (`display_panel_assembly`)

For display_route only, record the panel/display module, backlight or emitting module, protective glass and touch layer when present. Declare technology, supplier, part number, purchased-versus-site-made status and mass.

- Selected flow: Display panel assembly
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled display equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-2019-2021-electronic-displays`; `barco-ecoscore-objective-criteria`

###### Projector optical engine and light-source assembly (`projector_optical_engine`)

For projector_route only, record the optical engine, projection/magnification optics, imaging device, light source, driver/ballast and filters when supplied together. Declare LCD/3LCD, DLP/DMD, LCoS or other technology and lamp, LED, laser or hybrid light source.

- Selected flow: Projector optical engine and light-source assembly
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled projector equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `iec-61947-1-2002`; `iec-62906-5-1-2021`

###### Electronic boards and power supply (`electronics_power_supply`)

Record main/control/interface boards, power boards, external or internal power supplies, wiring, connectors, memory and embedded control modules as separately identifiable BOM families.

- Selected flow: Electronic boards and power-supply assemblies
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### Cooling system (`cooling_system`)

Record heat sinks, heat pipes, fans, pumps, air filters and cooling-control hardware present in the declared model.

- Selected flow: Cooling-system components
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `barco-ecoscore-objective-criteria`

###### Housing, chassis and mechanical hardware (`housing_chassis`)

Record housing and bezel plastics, metal chassis, stand or mounting hardware shipped with the unit, fasteners, coatings and adhesives by material and mass.

- Selected flow: Housing, chassis and mechanical hardware
- Flow property / unit: Mass / kg
- Amount rule: calculated from accepted BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `eu-2019-2021-electronic-displays`; `ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### Included cables, remote controls and accessories (`included_accessories`)

Record only cables, remote controls, batteries, detachable stands/mounts and accessories shipped in the declared product package; separately sold accessories remain outside the reference product.

- Selected flow: Included cable and accessory set
- Flow property / unit: Mass / kg
- Amount rule: calculated from as-shipped accessory quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources: `ecma-370-2026`; `barco-ecoscore-objective-criteria`

###### Electricity for final assembly (`assembly_electricity`)

Record metered electricity for mechanical joining, wiring, firmware loading performed at assembly, material handling and assembly-line utilities.

- Selected flow: Electricity supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: metered final-assembly electricity for the declared reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

###### Assembly scrap and rejected components (`assembly_scrap`)

Record damaged components, cut cables, fasteners, adhesives, protective films and other assembly waste by measured mass and destination; reusable returned components remain product flows.

- Selected flow: Assembly waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass by waste code and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled equipment sent to testing (`assembled_equipment`)

Record net assembled mass transferred to functional testing, separated by route and model family.

- Selected flow: Assembled display or projector equipment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Configuration, functional and power-state testing (`functional_testing`)

#### Inputs

##### Product flows

###### Assembled equipment under test (`equipment_under_test`)

Record assembled units entering testing and preserve model, route, configuration and serial or batch identity.

- Selected flow: Assembled display or projector equipment
- Flow property / unit: Mass / kg
- Amount rule: measured mass of units entering testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted tested equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Electricity for configuration and testing (`testing_electricity`)

Record metered electricity consumed by warm-up, image tests, firmware/configuration, burn-in, power-state measurement and repeated testing after rework.

- Selected flow: Electricity supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: metered test-area electricity, including failed tests and retests, for the declared reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted tested equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `energy-star-displays-v8-2020`; `barco-ecoscore-objective-criteria`

##### Waste flows

###### Failed-test parts and unrecoverable units (`test_reject_waste`)

Record only parts or units declared as waste after testing and rework. Units returned to assembly or repaired remain visible product flows and are not waste.

- Selected flow: Failed-test waste by component and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured mass after final disposition decision
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted tested equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested equipment (`tested_equipment`)

Record accepted units that pass route-specific visual performance, electrical safety, functional and declared power-state checks.

- Selected flow: Accepted tested display or projector equipment
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `energy-star-displays-v8-2020`; `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020`

###### Rework return (`rework_return`)

Record the mass and reason of units or subassemblies returned to assembly, together with replacement parts and retest cycles.

- Selected flow: Equipment returned for rework
- Flow property / unit: Mass / kg
- Amount rule: measured mass returned to the identified upstream foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted tested equipment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rework_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Final packaging and factory-gate release (`packaging`)

#### Inputs

##### Product flows

###### Tested equipment entering packaging (`tested_equipment_input`)

Record accepted equipment mass entering the as-shipped package.

- Selected flow: Accepted tested display or projector equipment
- Flow property / unit: Mass / kg
- Amount rule: measured input mass reconciled to packaged reference-product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources:

###### Product packaging materials (`packaging_materials`)

Record corrugated board, molded fibre or foam, plastic films/bags, pallets included in the declared packaging boundary, labels, manuals and other packaging by material, recycled content and mass.

- Selected flow: Product packaging materials by material type
- Flow property / unit: Mass / kg
- Amount rule: calculated from packaging BOM quantity and measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- Sources: `ecma-370-2026`; `barco-ecoscore-objective-criteria`

##### Waste flows

###### Packaging-line waste (`packaging_waste`)

Record damaged cartons, films, cushioning, labels and other packaging losses by measured mass and treatment destination.

- Selected flow: Packaging waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged finished product (`packaged_product_output`)

The quantitative reference is the net mass of finished equipment; product packaging remains a separate input and is disclosed independently.

- Selected flow: Monitors and projectors, not incorporating television reception apparatus and not principally used in an automatic data processing system `327360e4-f3be-43e9-81b1-e0cb3a51d782`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished equipment output after reconciliation of product mass and separately reported packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared lines and route-specific batches | Prefer direct metering and batch subdivision so display_route, projector_route, model families and site-controlled subassemblies receive their measured inputs, energy, waste and rework without allocation. | `iso-14040-2006`; `iec-63366-2025` |
| `allocation_rework` | rework and retesting | Assign replacement parts, rework energy, rejected mass and retesting to the accepted production batch that caused them; do not treat rework return as a co-product. |  |
| `allocation_shared_utilities` | inseparable shared utilities | If direct metering and subdivision are not feasible, use an auditable causal driver such as machine time, test hours or line hours. Use mass only when no better physical relationship exists, and disclose the driver and sensitivity. |  |
| `allocation_scrap` | recyclable scrap and waste | Record gross waste and scrap outputs and their treatment destination. Keep any revenue or downstream recycling-credit scenario separate from site inventory; do not reduce input mass or foreground burdens by sale value. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | subassembly_production; final_assembly | panel/optical engine, electronics, power supply, cooling, housing, cables and accessories | controlled BOM plus receiving/issue records | route; model; part number; component family; description; technology; supplier; purchased_or_made; quantity issued; quantity returned; unit mass; mass source; material; recycled content | join revision-controlled BOM to receiving and line-issue records; verify unit mass by calibrated scale or supplier declaration | item; kg | each BOM revision and production batch | entire reporting period | all reporting-site assembly and subassembly lines | sum net issued quantity times verified unit mass by route, model and component family | approved BOM revision; supplier declaration; scale calibration; issue/return records |
| `cp_process_energy` | subassembly_production; final_assembly; functional_testing | electricity | revenue/submeter and equipment log | meter id; start/end reading; timestamp; voltage; process/line; operating hours; test cycle; allocation driver | calibrated meter or utility-grade submeter; reconcile to facility bill and subtract separately metered excluded loads | kWh | continuous or each batch/test cycle, aggregated monthly | preferably 12 consecutive months; shorter startup period declared | reporting-site process and test areas | sum metered kWh and normalize to accepted process output; disclose any shared-utility driver | meter calibration; bill reconciliation; coverage log |
| `cp_waste_dispatch` | subassembly_production; final_assembly; functional_testing; packaging | manufacturing and packaging waste | waste scale ticket and transfer record | date; process; route; waste code; material/component; mass; destination; treatment; hazardous status | calibrated site scale or licensed waste-contractor ticket | kg | each dispatch | entire reporting period | all reporting-site foreground processes | sum by process, material, waste code and destination; retain gross mass before any revenue | scale ticket; transfer manifest; contractor receipt |
| `cp_output_mass` | subassembly_production; final_assembly; functional_testing; packaging | transferred and accepted product mass | production and transfer record | route; model; batch; serial count; gross unit mass; net unit mass; packaging mass; accepted/rejected status; transfer process | calibrated scale linked to batch/serial production records | kg; item | each batch or model-mass verification with count reconciliation | entire reporting period | all reporting-site foreground processes | sum accepted net mass by route/model/process; reconcile transfers and final output | scale calibration; batch closure; serial/count reconciliation |
| `cp_rework_records` | functional_testing | rework and retest | defect and rework log | serial/batch; route; failure mode; return process; replaced part and mass; labor event; retest duration; final disposition | link test-system result to work order and parts issue/return records | item; kg; h | each failed test and retest | entire reporting period | reporting-site test and rework areas | assign each rework event and replacement part to its accepted batch or final waste disposition | test log; work order; parts record; disposition approval |
| `cp_product_specification` | functional_testing | route, visual performance and exclusion identity | approved specification and compliance record | route; intended use; tuner/receiver present; display technology; width; height; diagonal; screen area; luminance; projector technology; light source; light output; native resolution; maximum image size; normal configuration; included modules | extract from approved model specification and verify against route-appropriate test report | route; mm; inch; cm2; cd/m2; lm; pixels | each model or specification revision | specification valid during reporting period | every model included in dataset | preserve model-level fields; mass-weight aggregation is not allowed for route identity or exclusion fields | signed specification; compliance declaration; test report |
| `cp_power_state_test` | functional_testing | normal/on, ECO, standby, networked-standby and off power | laboratory or production power test | model; serial; route; state; W; voltage; frequency; test pattern; configuration; brightness/light output; warm-up; stabilization; connected modules; method; timestamp | calibrated power analyzer under declared route-appropriate method and as-shipped/normal configuration | W | each model/specification revision and after power-affecting change | test valid during reporting period | every model included in dataset | retain model/state result; use production-weighted average only after reporting model-level range and configuration | analyzer calibration; complete test record; specification approval |
| `cp_packaging_bom` | packaging | packaging materials and included accessories | packaging BOM and packing record | model; packaging part; material; quantity; unit mass; recycled content; dimensions; included accessory; pallet inclusion | join approved packaging BOM to packing issue records and verify representative unit mass | kg; item; mm | each packaging revision and production batch | entire reporting period | reporting-site packaging line | sum quantity times verified unit mass by material and model; report packaging separately from reference mass | approved packaging BOM; scale calibration; supplier declaration; issue records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_component_mass` | each component family | net component mass = sum((issued quantity - returned unused quantity) x verified unit mass) | cp_component_bom | kg component family per kg reference product | `barco-ecoscore-objective-criteria` |
| `calculate_screen_area` | display_route | viewable screen area = maximum viewable image width x maximum viewable image height measured along the panel surface | cp_product_specification | cm2 or m2 screen area by model | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `calculate_native_resolution` | all routes | total native resolution = native horizontal pixels x native vertical pixels; preserve both pixel dimensions and total count | cp_product_specification | pixels and megapixels by model | `energy-star-displays-v8-2020`; `iso-iec-21118-2020` |
| `normalize_inventory` | all foreground rows | normalized amount = reporting-period process amount / accepted net finished-product kg | cp_component_bom; cp_process_energy; cp_waste_dispatch; cp_output_mass; cp_rework_records; cp_packaging_bom | inventory amount per 1 kg reference product | `iec-63366-2025` |
| `reconcile_product_mass` | final assembly through packaging | accepted product mass = component mass entering accepted units - removed/rejected parts + accepted replacement parts; packaging mass is reconciled separately | cp_component_bom; cp_output_mass; cp_rework_records; cp_packaging_bom | product mass-balance difference and packaging mass by model/batch |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | every model | Route, intended use, tuner/receiver absence, non-ADP-principal use and classification scope shall be explicitly approved; model families shall not cross route or exclusion boundaries. | approved specification; compliance declaration; cp_product_specification |
| `dq_component_completeness` | BOM and mass balance | BOM mapping shall separately cover panel or optical engine, electronics/power supply, cooling, housing/chassis, cables/accessories and packaging; unclassified BOM mass and mass-balance difference shall be disclosed. | BOM revision; supplier mass evidence; calibrated scale; reconciliation report; cp_component_bom |
| `dq_energy_coverage` | process electricity | Meter coverage, excluded loads and shared-utility drivers shall be disclosed and reconciled to facility totals; testing energy shall include failed tests and retests. | meter map; calibration; facility bill; cp_process_energy; cp_rework_records |
| `dq_visual_power_test` | model specification and tests | Visual-performance and power-state records shall identify the applicable method, model, configuration, test conditions and calibrated equipment. Do not apply display limits to projectors or exempt display subclasses without an applicability statement. | approved test report; equipment calibration; cp_product_specification; cp_power_state_test |
| `dq_temporal_geographic` | all foreground data | Prefer at least 12 consecutive months representative of normal production. Declare shorter startup or low-volume coverage, site geography, supplier geography, technology age and any proxy dataset. | reporting-period register; production volumes; supplier and upstream-dataset metadata |
| `dq_waste_destination` | all waste | Every waste row shall identify material/component, hazardous status, measured mass, destination and treatment; reusable returns and rework shall not be reported as waste. | waste manifest; contractor receipt; rework disposition; cp_waste_dispatch |
| `dq_source_traceability` | externally constrained fields | Retain the exact standard edition, official page or technical document used and record applicability limitations; web-hosted sources shall retain retrieval date. | source register linked to section 11 source ids |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_exclusions` | reference product | Pass only if exactly one route is declared and evidence confirms no television broadcast tuner/receiver, no principally ADP-system use and no other excluded product identity. | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020` |
| `validate_reference_flow` | reference flow | The product UUID, Mass UUID, Units of mass UUID and kg reference unit shall match section 3, and packaged_product_output shall equal 1 kg net finished equipment. |  |
| `validate_required_qualifiers` | model metadata | Fail completeness when any required route, technology, size/light-output, resolution, power-state, component, geography or reporting-period qualifier is absent or replaced by an unlabelled family average. | `energy-star-displays-v8-2020`; `iec-61947-1-2002`; `iec-62906-5-1-2021`; `iso-iec-21118-2020` |
| `validate_component_routes` | process inventory | display_route shall contain a display-panel row and shall mark projector_optical_engine not applicable; projector_route shall contain an optical-engine/light-source row and shall mark display_panel_assembly not applicable. Both routes shall contain electronics/power supply, cooling and housing/chassis rows. | `ecma-370-2026`; `barco-ecoscore-objective-criteria` |
| `validate_power_states` | power testing | Require normal/on and every available ECO, standby, networked-standby and off result with W, voltage, frequency, configuration and method. A missing physical state shall be declared not applicable rather than recorded as zero. | `eu-2019-2021-electronic-displays`; `energy-star-displays-v8-2020`; `barco-ecoscore-objective-criteria` |
| `validate_mass_energy_waste_balance` | foreground processes | Require accepted transfer masses to reconcile across process gates, component mass to reconcile to net product mass, packaging to remain separate, testing energy to include retests, and all rejected material to have a final product-return or waste destination. |  |
| `validate_source_applicability` | all external rules | Each source-dependent rule shall identify the edition and applicability. Explicitly reject transfer of EU electronic-display limits to projectors and transfer of ADP-monitor product data to this PCR reference product. | `eu-2019-2021-electronic-displays`; `iec-63366-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | manufacturing datasets for finished commercial/industrial displays or non-ADP front projectors matching the declared route, technology, intended use, geography, gate and required qualifiers |
| excluded_use | television receivers; ADP-principal monitors/projectors; mixed display/projector averages; integrated panels; bare components; cinematographic projectors; use-phase datasets without a declared scenario |
| required_metadata | reference-flow UUID and mass basis; route; technology; model/family; intended use and exclusion declarations; size or light output; native resolution; normal/as-shipped configuration; power states; panel/optical-engine, electronics, cooling and housing disclosures; net and packaging mass; geography; reporting period; allocation and proxy decisions |
| required_quality_disclosure | foreground coverage and meter map; BOM mass coverage and balance difference; model coverage; test methods and calibration; rejected/rework treatment; waste destinations; supplier/upstream proxy quality; temporal, geographic and technological representativeness; source applicability limitations |
| update_trigger | change in route, display/projection or light-source technology, panel/optical engine, power architecture, cooling, housing material, native resolution, size/light output, measured power states, site, supplier mix, process depth, allocation driver, packaging, regulatory scope or data older than the declared review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | horizontal EEPS LCA/PCR framework, default-scenario and reporting context |
| `iso-14040-2006` | standard | ISO 14040:2006 with Amendment 1:2020, Environmental management - Life cycle assessment - Principles and framework, https://www.iso.org/standard/37456.html (retrieved 2026-08-09) | LCA goal/scope, inventory, reporting and limitation context |
| `eu-2019-2021-electronic-displays` | official_guidance | Commission Regulation (EU) 2019/2021, electronic displays, CELEX 32019R2021, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019R2021 (retrieved 2026-08-09) | display, television/tuner, digital-signage and projector definitions; normal configuration; display power modes; material efficiency; explicit projector and subclass applicability limits |
| `energy-star-displays-v8-2020` | official_guidance | U.S. EPA ENERGY STAR Program Requirements, Product Specification for Displays, Version 8.0, Rev. February 2020, https://www.energystar.gov/sites/default/files/Displays%20Version%208.0%20Program%20Requirements%20Rev.%20Feb-2020.pdf (retrieved 2026-08-09) | commercial/signage display identity, tuner exclusion, screen area, resolution, luminance, configuration and on/sleep/off testing fields |
| `iec-61947-1-2002` | standard | IEC 61947-1:2002, Electronic projection - Measurement and documentation of key performance criteria - Part 1: Fixed resolution projectors, https://webstore.iec.ch/en/publication/6147 (retrieved 2026-08-09) | fixed-resolution projector technology, integral light source/optics and key performance documentation |
| `iec-62906-5-1-2021` | standard | IEC 62906-5-1:2021, Laser displays - Part 5-1: Measurement of optical performance for laser front projection, https://webstore.iec.ch/en/publication/33582 (retrieved 2026-08-09) | laser/hybrid front-projection measurement and DMD, LCoS and LCD projector technology disclosure |
| `iso-iec-21118-2020` | standard | ISO/IEC 21118:2020, Information technology - Office equipment - Information to be included in specification sheets for data projectors, https://www.iso.org/standard/74674.html (retrieved 2026-08-09) | front-projector specification-sheet fields and explicit exclusion of rear-screen projection units |
| `ecma-370-2026` | standard | ECMA-370, The ECO Declaration, 7th edition, June 2026, https://ecma-international.org/publications-and-standards/standards/ecma-370/ (retrieved 2026-08-09) | environmental attribute declarations for ICT/CE products and subassemblies, including housing, PCBs, batteries, energy modes, packaging and treatment information; not used as manufacturing-process evidence |
| `barco-ecoscore-objective-criteria` | handbook | Barco, Ecoscore Objective Criteria questionnaire, https://assets.barco.com/m/685f7d65d1e69c9f/original/Ecoscore_ObjectiveCriteria.pdf (retrieved 2026-08-09) | first-party display/projector component, PCB/cable, plastic housing, battery, packaging, disassembly, active/ECO/standby/off power and projector test-condition disclosure fields |
