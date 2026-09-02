---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-comprising-in-the-same-housing-at-least-a-central-pr-d2ad0c9a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Automatic data processing machines, comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined

## 1. Scope and Applicability

This PCR covers a complete automatic data processing machine whose declared product boundary is one housing containing at least a central processing unit and an input/output unit. Covered products include single-enclosure servers, workstations, desktop computers, integrated desktop or all-in-one computers, and comparable stationary computing equipment delivered as one configured machine. A rack-mount form factor does not by itself exclude a product when one rack chassis is the complete declared machine.

The foreground data package shall identify the exact machine type, manufacturer and model or configuration identifier, chassis boundary, CPU population, installed compute accelerators, memory, storage, built-in input/output and network interfaces, power supplies, internal cooling equipment, integrated display or input devices, assembly and test route, net device mass, and expected operating lifetime. Results for materially different configurations shall not be averaged unless configuration shares and the aggregation method are declared.

This PCR excludes portable computers, notebooks, tablets, mobile workstations, portable all-in-one computers, separately delivered displays and peripherals, standalone storage products, separate input or output units, bare components and parts, embedded dedicated-control equipment, blade enclosures, multi-node shared enclosures, clusters, rack-scale products, and automatic data processing machines delivered in system form. A single machine shall not be used as a proxy for a multi-machine system, data centre, cloud service, or computing service.

The default production boundary ends at the producer gate after configuration and production testing. Packaging, distribution, use, maintenance, external facility cooling, and end-of-life are included only when the declared study boundary requires them, but the machine configuration, measured power profile, cooling boundary, and expected operating lifetime shall still be reported so downstream use-stage modelling is reproducible.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-comprising-in-the-same-housing-at-least-a-central-pr-d2ad0c9a |
| classification_refs | CPC 3.0 `45230` exact mapping context |
| covered_products | Complete single-enclosure servers, workstations, stationary desktop computers, integrated desktop or all-in-one computers, and comparable one-housing automatic data processing machines containing at least a CPU and an input/output unit |
| excluded_products | Portable computers and mobile workstations; multi-machine systems; blade or multi-node shared enclosures; clusters and rack-scale systems; standalone storage, input, output, display, or peripheral units; parts; embedded dedicated equipment; computing services |
| representative_product | One operational, configured and production-tested automatic data processing machine in a single declared housing at the producer gate |
| production_route | Supplier component and subassembly production; receipt and BOM reconciliation; system assembly and integration; firmware and software configuration; production testing; optional packaging and downstream life-cycle stages |
| market_state | Finished configured equipment, manufactured and production-tested, before detachable transport packaging unless packaging is separately declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of a finished, configured automatic data processing machine within the covered single-housing boundary; downstream projections may extend this machine through its declared operating lifetime |
| How much | 1 kg net mass of the finished machine at the producer gate, excluding detachable packaging and separately delivered peripherals |
| How well | Operational and released after the declared production tests, with machine type, chassis, CPU/accelerator, memory, storage, built-in I/O, power supply, internal cooling and integrated-device configuration declared |
| How long or cycle | One represented production period or batch at the producer gate; any use-stage projection shall additionally state expected operating lifetime, annual operating schedule, workload and maintenance scenario |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished machine |
| Reference product flow | Automatic data processing machines, comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined `3c41eabb-f2b2-4e96-b24d-3485673d505f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | machine type and form factor; manufacturer, model and configuration id; chassis or enclosure boundary; net mass per machine and machine count; CPU model, socket population and core count; accelerator or discrete GPU model, count and enabled state; installed memory type and capacity; storage technology, device count and capacity; built-in input/output and network interfaces; power-supply type, count and rating; internal air or liquid cooling hardware; integrated display and input devices; firmware and operating-system state used for testing; assembly and test site and route; production test and burn-in profile; power test method, operating modes, workload and settings; external cooling boundary and allocation; expected operating lifetime and use schedule; included accessories and packaging; geography and reference period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent structured fields. A missing qualifier makes the reference-flow definition incomplete for the represented configuration.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished reference machine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the released configured machine including components installed inside the declared housing. Exclude detachable transport packaging, separately shipped display, keyboard, mouse, cables, rack, external UPS and other peripherals unless physically integrated and declared within the product boundary. |
| `device_count_mass` | Machine count and mass conversion | Mass and number of items | kg and item | Record both net mass per machine and machine count for the same configuration and lot. Convert item records to kg only from verified configuration-specific mass; do not apply a generic computer or server mass factor. |
| `configuration_identity` | CPU, accelerators, memory, storage, built-in I/O and cooling | Configuration-specific counts and capacities | item; socket; core; GB; TB; W as applicable | Preserve the as-built configuration linked to the BOM and serial or lot record. Do not combine configuration variants whose component population or power behaviour materially differs without declared production-weighted shares. |
| `energy_preservation` | Assembly, test, use and maintenance energy | Energy and power | kWh; W; native fuel or thermal-energy unit retained | Preserve electricity, fuels, heat and cooling carriers separately. Convert measured power and time to electricity using kWh = W x hours / 1000. Do not treat rated PSU power, thermal design power or nameplate power as measured device energy. |
| `operating_mode_power` | Device use electricity | Power and time | W and h | Record measured power for the declared active workload, idle, sleep or alternative low-power, and off states that occur in the use scenario, together with test method, settings, peripherals, network state and measurement uncertainty. Use only modes applicable to the represented machine. |
| `cooling_boundary` | Internal and external cooling | Electricity, heat or cooling service | kWh; MJ; other metered cooling-service unit | Internal fans, pumps and integrated cooling controls are part of measured device power. External room, rack or data-centre cooling shall be a separate conditional burden based on measured facility records and a disclosed causal allocation; it shall not be embedded again in device power. |
| `service_life` | Use, maintenance and result interpretation | Time | year; operating hour | State expected operating lifetime, evidence basis, operating hours, workload evolution, downtime, repairs and refurbishment. Do not infer lifetime from warranty or depreciation alone when actual-use or fleet-retirement evidence is available. |
| `packaging_boundary` | Packaging and in-box accessories | Mass and item count | kg and item | Keep detachable packaging and separately delivered accessories outside reference-product mass and inventory them separately. An integrated display, built-in input unit or permanently installed cable remains inside the machine boundary when part of the as-built configuration. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received configuration-specific components, subassemblies and direct materials identified by the as-built BOM at the system assembly site |
| starting_condition_role | Physical foreground starting point for assembly and testing; component manufacture remains upstream and shall be represented by supplier-specific or reviewed secondary datasets |
| product_classification_scope | One complete CPC 45230 single-housing automatic data processing machine, not a portable computer, component, peripheral, storage unit, multi-node enclosure or system-form delivery |
| recursive_input_rule | A purchased complete machine in the same category shall be recorded as a separate upstream product input with its configuration, quantity and dataset; do not reopen it into the current assembly BOM and double count its burdens |
| upstream_dataset_requirement | Every material component or subassembly group in the BOM shall link to supplier-specific data or an explicitly disclosed secondary proxy matching technology, geography, time and component function as closely as available |
| disclosure | Declare machine type and configuration, included housing and accessories, component-data coverage, assembly and test sites, packaging and distribution scope, use and cooling scenario, maintenance, expected lifetime, end-of-life route, cut-offs, allocation and every proxy |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_configuration` | Product identity and all processes | Model one homogeneous as-built configuration or a transparently weighted configuration mix. The BOM, device mass, power tests, production tests, use profile and lifetime shall refer to the same configuration or to explicitly reconciled configuration shares. | `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |
| `boundary_component_supply` | Upstream component production | Include the CPU and other processors, accelerators, memory, storage, motherboard and printed circuit assemblies, power supplies, chassis and mechanical parts, built-in I/O and networking, internal cooling, integrated display or input equipment, wiring and other installed parts through linked upstream datasets. Do not treat missing supplier data as zero. | `itu-t-l1410-2024` |
| `boundary_assembly_test` | Producer foreground | Include component receiving and internal transport, system assembly, fastening and interconnection, firmware loading, configuration, functional and safety tests, burn-in when performed, test failures and rework, direct materials, electricity, utilities, wastes and on-site treatment attributable to the represented production. | `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |
| `boundary_packaging_distribution` | Post-test logistics | Record detachable packaging and in-box accessories separately. Include outbound distribution only when the study boundary extends beyond the producer gate, with origin, destination, transport mode, load factor and distance declared. | `itu-t-l1410-2024` |
| `boundary_use_and_cooling` | Use-stage projections | Include measured or reproducibly calculated device electricity for the declared workload and operating modes over the expected lifetime. Include external facility cooling only when within study scope and causally allocated; keep internal cooling inside device power and prevent double counting. | `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-617-2013`; `eu-regulation-2019-424` |
| `boundary_maintenance_eol` | Full life-cycle projections | Include replacement parts, repair and refurbishment that occur in the declared lifetime, and applicable collection, preparation for reuse, dismantling, recycling and disposal at end of life. State the boundary between first use, refurbishment and any second life. | `itu-t-l1410-2024`; `eu-regulation-2019-424` |
| `boundary_scope_exclusions` | Category separation | Exclude and separately model portable computers, mobile workstations, blade or multi-node shared enclosures, clusters, rack-scale or system-form deliveries, standalone storage or peripheral units, facility racks, UPS, network infrastructure and computing services. A single-machine record shall not stand in for any excluded system. | `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bom_upstream` | Configuration BOM reconciliation and upstream component linking | required | Always required | Establish the as-built component population and connect every material component group to upstream production data | Component and subassembly input per kg released machine |
| `assembly_integration` | System assembly and hardware integration | required | Always required | Assemble, fasten, interconnect and integrate the configured machine in its declared housing | Assembled machine transferred to configuration and test |
| `configuration_testing` | Firmware configuration, production testing and producer-gate release | required | Always required | Configure, test, burn in when applicable, rework and release the operational machine; inventory packaging separately | 1 kg net released reference product |
| `use_maintenance` | Use, cooling, maintenance and repair | conditional | Required when the study extends beyond the producer gate; configuration, power profile and expected lifetime metadata remain mandatory otherwise | Provide the declared computing use over the expected lifetime and account for attributable cooling and maintenance | One declared machine-use scenario, normalized to kg reference product |
| `end_of_life` | Collection, preparation for reuse, dismantling, recycling and disposal | conditional | Required for cradle-to-grave studies and when an end-of-life scenario is reported | Treat the used machine and packaging without silently crediting recovered outputs | Used machine entering declared end-of-life routes |

### Process: Configuration BOM reconciliation and upstream component linking (`bom_upstream`)

#### Inputs

##### Product flows

###### Configuration-specific components and subassemblies (`configured_components`)

All installed components and direct material groups in the as-built BOM cross the upstream boundary through this row, with separate identities and upstream datasets retained in the data package.

- Selected flow: Configuration-specific CPU, accelerator, memory, storage, motherboard, power, chassis, I/O, cooling and integrated-device component inputs
- Flow property / unit: Mass / kg; item counts and capacities retained as qualifiers
- Amount rule: Measured or supplier-declared mass and installed count for every BOM line, reconciled to the represented configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_bom`
- Sources: `itu-t-l1410-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reconciled component kit for assembly (`component_kit`)

The reconciled component kit transfers the as-built BOM into system assembly without changing upstream component quantities.

- Selected flow: Reconciled component and subassembly kit
- Flow property / unit: Mass / kg
- Amount rule: Sum of installed component and direct-material mass assigned to the configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_bom`

##### Waste flows

###### Incoming component packaging and rejected receipts (`incoming_component_waste`)

Supplier packaging managed at the assembly site and rejected or damaged received components are reported gross by material and destination.

- Selected flow: Incoming packaging waste and rejected received components
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste transfers and rejected-receipt records; do not net recycling proceeds or returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_waste`

##### Elementary flows

### Process: System assembly and hardware integration (`assembly_integration`)

#### Inputs

##### Product flows

###### Reconciled component kit input (`component_kit_input`)

The configuration-specific kit enters the physical assembly line.

- Selected flow: Reconciled component and subassembly kit
- Flow property / unit: Mass / kg
- Amount rule: Quantity transferred from `component_kit` for the same configuration and batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_bom`

###### Assembly electricity and utilities (`assembly_energy`)

Electricity and other utilities used for fastening, soldering or joining when performed, cabling, handling, firmware stations and assembly-area environmental control are recorded by carrier.

- Selected flow: Electricity and separately metered assembly utilities
- Flow property / unit: Energy / kWh; other carriers in native units
- Amount rule: Metered line or equipment consumption; otherwise documented allocation from reconciled facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_waste`

###### Assembly consumables (`assembly_consumables`)

Fasteners, thermal interface materials, solders, adhesives, cleaning agents and other consumables are included when used by the declared assembly route.

- Selected flow: Route-specific assembly consumables
- Flow property / unit: Mass / kg; native purchase unit retained
- Amount rule: Inventory issues or batch records reconciled to the represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_waste`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled configured machine (`assembled_machine`)

The mechanically and electrically integrated configuration leaves assembly for firmware configuration and production testing.

- Selected flow: Assembled configured automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Weighed assembled output before test, linked to BOM configuration and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_yield`

##### Waste flows

###### Assembly scrap, failed parts and rework losses (`assembly_waste`)

Scrap, failed components, cleaning waste and material losses are reported before any off-site recycling or treatment credit.

- Selected flow: Assembly scrap and failed component waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-reconciled gross output from the represented assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_energy_waste`

##### Elementary flows

### Process: Firmware configuration, production testing and producer-gate release (`configuration_testing`)

#### Inputs

##### Product flows

###### Assembled machine input (`assembled_machine_input`)

The assembled configuration enters firmware loading, functional testing, burn-in where required, final inspection and release.

- Selected flow: Assembled configured automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Quantity transferred from `assembled_machine` for the same batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per test batch input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_yield`

###### Test and burn-in electricity (`test_energy`)

Electricity used for firmware configuration, functional tests, active workloads, idle checks, burn-in, final inspection and attributable test-area cooling is recorded separately from later use electricity.

- Selected flow: Electricity for configuration, production testing and burn-in
- Flow property / unit: Energy / kWh
- Amount rule: Metered test-station energy including duration and tested configuration; allocate shared test-area energy with a documented causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_yield`
- Sources: `energy-star-computers-v8-2022`; `eu-regulation-2019-424`

###### Detachable packaging and in-box accessories (`packaging_accessories`)

Packaging and accessories shipped with the machine but outside the declared housing are inventoried separately and never added to reference-product mass.

- Selected flow: Detachable packaging and separately delivered in-box accessories
- Flow property / unit: Mass / kg and item
- Amount rule: Verified mass per packaging or accessory article multiplied by issued count, with reusable trips and losses disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released single-housing automatic data processing machine (`reference_product`)

The reference product is the operational configuration that passed the declared production release criteria.

- Selected flow: Automatic data processing machines, comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined `3c41eabb-f2b2-4e96-b24d-3485673d505f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net released machine, with configuration-specific mass per item and item count retained
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `itu-t-l1410-2024`

##### Waste flows

###### Test failures, rework losses and packaging waste (`test_release_waste`)

Failed units or parts, rework losses and packaging waste generated before release are reported gross and linked to their treatment destinations.

- Selected flow: Test failure, rework and producer-gate packaging waste
- Flow property / unit: Mass / kg and item
- Amount rule: Test log and weighed waste transfer for the represented configuration and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_yield`

##### Elementary flows

### Process: Use, cooling, maintenance and repair (`use_maintenance`)

#### Inputs

##### Product flows

###### Released machine entering use (`machine_entering_use`)

The released configuration enters only the declared use scenario; it shall not be expanded to represent a cluster, rack or service.

- Selected flow: Released single-housing automatic data processing machine
- Flow property / unit: Mass / kg and item
- Amount rule: Same net machine mass and item count as the producer-gate reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine-use scenario
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime`

###### Device use electricity (`use_electricity`)

Electricity is calculated from measured configuration-specific power and hours in applicable active, idle, sleep, alternative low-power and off modes.

- Selected flow: Electricity consumed by the declared machine during use
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured mode power multiplied by scenario hours, divided by 1000, over the declared expected operating lifetime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime, then normalized to kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime`
- Sources: `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-617-2013`; `eu-regulation-2019-424`

###### External facility cooling (`external_cooling`)

Room, rack or data-centre cooling is included only when the study scope requires it and measured facility energy can be causally assigned without duplicating internal fan or pump electricity.

- Selected flow: Externally supplied cooling energy or electricity allocated to the machine
- Flow property / unit: Energy / kWh or MJ; native cooling-service unit retained
- Amount rule: Metered facility cooling attributable to the represented operating interval multiplied by the disclosed causal allocation share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime, then normalized to kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_external_cooling`
- Sources: `itu-t-l1410-2024`; `eu-regulation-2019-424`

###### Replacement parts and repair inputs (`maintenance_inputs`)

Parts, technician travel and repair energy are included when they occur within the declared operating lifetime.

- Selected flow: Configuration-compatible replacement parts and repair services
- Flow property / unit: Mass / kg; item; energy and transport service retained separately
- Amount rule: Actual fleet or service records for replacements and repairs; scenario estimates shall be identified and sensitivity-tested
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime, then normalized to kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_use_lifetime`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Used machine transferred to reuse or end-of-life decision (`used_machine`)

At the end of the declared first use, the complete remaining machine is transferred to reuse, refurbishment or waste treatment according to the stated scenario.

- Selected flow: Used single-housing automatic data processing machine
- Flow property / unit: Mass / kg and item
- Amount rule: Remaining machine mass and count after separately recorded replacement and removed parts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_lifetime`

##### Waste flows

###### Removed and failed parts (`maintenance_waste`)

Parts removed during maintenance are reported gross by material or component type and destination.

- Selected flow: Removed electronic, mechanical, storage, battery and cooling-component waste
- Flow property / unit: Mass / kg and item
- Amount rule: Service record and weighed or supplier-declared mass of removed parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime, then normalized to kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_use_lifetime`

##### Elementary flows

### Process: Collection, preparation for reuse, dismantling, recycling and disposal (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Used machine entering end-of-life treatment (`used_machine_waste`)

Only the share not transferred to a documented next life enters waste treatment in the current life cycle.

- Selected flow: Used single-housing automatic data processing machine for treatment
- Flow property / unit: Mass / kg and item
- Amount rule: Scenario-specific collected mass and count reconciled to reuse, refurbishment, recycling and disposal shares
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared machine lifetime
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life`
- Sources: `itu-t-l1410-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered materials and reusable components (`recovered_outputs`)

Recovered metals, plastics, glass, components and prepared-for-reuse products are reported gross without an implicit avoided-burden credit.

- Selected flow: Recovered material and reusable component outputs by type and quality
- Flow property / unit: Mass / kg and item
- Amount rule: Measured treatment outputs assigned to the incoming machine stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg used machine entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`

##### Waste flows

###### Treatment residues and final disposal (`treatment_residues`)

Residual hazardous and non-hazardous fractions sent to further treatment or final disposal are reported gross.

- Selected flow: End-of-life treatment residues by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measured treatment output and transfer records reconciled to incoming mass and recovered outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg used machine entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Mixed models, configurations and shared lines | Prefer separate BOMs, batches, meters and test records for each materially different configuration. Apply allocation only after practical subdivision and direct assignment have been attempted. | `itu-t-l1410-2024` |
| `allocation_shared_facility` | Assembly, test, HVAC and facility utilities | Allocate unmetered shared burdens using the closest causal driver, such as equipment meter readings, line or test-station time, measured load, occupied area-time, airflow or cooling load, and report shares that sum to one. Production mass is a fallback only when causally defensible. | `itu-t-l1410-2024` |
| `allocation_multi_output` | Co-produced saleable products and recovered outputs | Use a demonstrated physical causal relationship when subdivision is unavailable. Economic allocation may be used only when no defensible physical relationship exists and shall disclose prices, period, currency, shares and sensitivity. Waste with no intended product function receives no production burden as a co-product. | `itu-t-l1410-2024` |
| `allocation_recycling` | Reuse, refurbishment, recycling and recovered materials | State the selected recycled-content, cut-off, substitution or other allocation approach and apply it consistently. Never combine approaches or grant an avoided-burden credit implicitly; keep gross waste and recovered-output quantities visible. | `itu-t-l1410-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_configuration_bom` | `bom_upstream`; `assembly_integration` | Product identity, as-built BOM and component kit | Product lifecycle management, ERP, supplier specification, serial and weigh record | model; configuration id; serial or lot; chassis; machine type; CPU model, sockets and cores; accelerator model and count; memory type and GB; storage type, count and capacity; built-in I/O and network interfaces; PSU type, count and rating; cooling equipment; integrated display or input; component part number; supplier; mass; count; upstream dataset; proxy | Export the released as-built BOM, reconcile it to installed serial or lot records, and verify masses by supplier data or representative weighing | kg; item; socket; core; GB; TB; W | Every released configuration and BOM revision | Full represented production period | All included component supply and assembly sites | Sum component mass and counts by homogeneous configuration; retain configuration shares and upstream dataset links by BOM line | Released BOM, change-control record, supplier specification, scale record, serial genealogy and proxy review |
| `cp_material_energy_waste` | `bom_upstream`; `assembly_integration` | Direct materials, assembly utilities and waste | Meter, invoice, stock, batch, equipment and waste-transfer record | carrier or material; opening and closing stock or meter; purchase or generated quantity; equipment or line; operating time; batch; configuration; allocation driver; waste type; gross mass; destination | Use dedicated meters and material issues first; otherwise reconcile facility totals and apply documented causal allocation | kWh; MJ; kg; native carrier unit | Meter interval, material issue and every waste transfer | Full production period; continuous sites should normally cover 12 months or justify a shorter campaign | All included assembly buildings, lines and waste points | Preserve carriers and material identities; sum gross inputs and wastes by process and configuration before normalization | Calibration, invoice reconciliation, stock variance, equipment log, waste ticket and allocation workbook |
| `cp_assembly_test_yield` | `assembly_integration`; `configuration_testing` | Assembly output, firmware state, production test, burn-in, release and failures | Manufacturing execution system, test-station export, quality and rework record | configuration id; serial; firmware and OS image; assembly start and finish; test method; workload; settings; mode power where measured; test duration; burn-in duration; pass or fail; defect; rework; released mass; reject mass | Link assembly and test records by serial or homogeneous lot; meter test-station electricity and retain test procedure and calibration | kg; item; kWh; W; h | Every unit or statistically controlled lot, with coverage declared | Full represented production period | All assembly, configuration, test and rework stations | Count and mass-balance passed, reworked and rejected units by configuration; sum test energy and normalize to released mass | Test report, calibrated instrument record, firmware checksum, quality release, rework log and yield reconciliation |
| `cp_packaging` | `configuration_testing` | Detachable packaging and accessories | Packaging BOM, issue, return and sample-weigh record | article; material; mass per item; issued count; return count; reusable trips; recycled content; accessory identity; destination configuration | Weigh representative articles and reconcile issue and return counts to released units | kg; item; trip | Each packaging specification and production lot | Full represented production period | All producer-gate packaging operations | Multiply verified mass per item by net issued count; keep accessories and packaging separate from machine mass | Packaging specification, sample weighing, stock reconciliation and return log |
| `cp_use_lifetime` | `use_maintenance` | Power modes, workload, operating schedule, lifetime, repairs and removed parts | Laboratory power test, fleet telemetry, energy meter, asset, retirement and service record | configuration; firmware and settings; test method; voltage and frequency; active workload; active, idle, sleep, low-power and off W; uncertainty; annual mode hours; network state; internal cooling state; expected and observed lifetime; downtime; repair event; replacement part; removed mass | Prefer calibrated configuration-specific measurements and observed fleet schedules and retirement data; document scenario construction and sensitivity when records are incomplete | W; h/year; kWh; year; kg; item | Each configuration test and each fleet reporting interval or service event | Representative use period and complete observed lifetime where available | Declared user sites or use geography | Calculate mode-weighted electricity; aggregate only comparable workload and settings; retain lifetime distribution and repairs by configuration | Test report, meter calibration, telemetry coverage, asset register, retirement reason and service ticket |
| `cp_external_cooling` | `use_maintenance` | External room, rack or data-centre cooling | Facility electricity, cooling meter, environmental-control and IT-load record | cooling carrier; facility cooling energy; IT energy; device or rack load; temperature; humidity; interval; allocation boundary; driver; share; excluded internal cooling | Use measured cooling and IT loads for matching intervals; allocate with a physical driver and document whether UPS or other infrastructure is separate | kWh; MJ; cooling-service unit; % | Meter interval | Same representative period as device-use records | Only facilities included in the declared use boundary | Assign gross external cooling using the declared causal share; never add internal fan or pump electricity a second time | Calibrated meters, building-management export, matching timestamps, allocation workbook and boundary diagram |
| `cp_end_of_life` | `end_of_life` | Reuse, refurbishment, dismantling, recovery and disposal | Asset disposition, recycler, weighbridge and treatment record | configuration or equipment class; collected mass and count; direct reuse; refurbishment; dismantled component; recovered material; residue; destination; treatment; data-deletion route; allocation approach | Reconcile asset disposition and recycler outputs for the declared route; use scenario evidence only when foreground treatment records are unavailable and disclose it | kg; item; % route share | Every shipment or treatment batch; scenario review at study update | Declared end-of-life reference period | All included collection and treatment routes | Route shares sum to one; reconcile incoming mass to reuse, recovered outputs, residues and disclosed balance residual | Transfer note, certified recycler report, scale ticket, dismantling record, data-deletion evidence and mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Released reference product | Net machine mass = gross weighed release unit - detachable packaging - separately delivered accessories and peripherals. Integrated display, built-in I/O and internal cooling remain included. | `cp_configuration_bom`; `cp_packaging`; `cp_assembly_test_yield` | kg net machine and item/kg | `itu-t-l1410-2024` |
| `calc_bom_balance` | As-built configuration | Reconcile installed component and direct-material mass to assembled and released mass + producer waste + measured stock change + disclosed residual. Report the residual and its investigation. | `cp_configuration_bom`; `cp_material_energy_waste`; `cp_assembly_test_yield` | kg and mass-balance residual % | `itu-t-l1410-2024` |
| `calc_inventory_normalization` | Every production inventory row | Normalized amount = configuration-specific gross amount assigned to released units / net released machine mass for the same batch or represented period. | Applicable collection protocol; `cp_assembly_test_yield` | amount per kg reference product |  |
| `calc_test_yield` | Assembly and test | First-pass yield = units passing without rework / units tested; final release yield = released units / units entering test. Report rework and rejects separately and never use yield to net waste from input. | `cp_assembly_test_yield` | % yield, item and kg rejects |  |
| `calc_use_electricity` | Declared use scenario | Lifetime device electricity = sum over applicable modes of measured mode power W x hours in that mode / 1000, repeated over the declared lifetime. Preserve yearly values where workload or settings change. | `cp_use_lifetime` | kWh per machine lifetime and kWh/kg reference product | `energy-star-computers-v8-2022`; `eu-regulation-617-2013`; `eu-regulation-2019-424` |
| `calc_external_cooling` | External facility cooling | Allocated external cooling = measured facility cooling for matching interval x declared causal allocation share. Report the driver and sensitivity; exclude internal fans and pumps already captured in device power. | `cp_external_cooling`; `cp_use_lifetime` | kWh or MJ per machine lifetime and per kg reference product | `itu-t-l1410-2024`; `eu-regulation-2019-424` |
| `calc_lifetime_results` | Result interpretation | Lifetime-normalized result = total burden over declared first life / declared operating years; any second life or refurbishment shall use a separately stated boundary and allocation rather than silently extending the first-life denominator. | `cp_use_lifetime`; `cp_end_of_life` | burden per operating year and per declared lifetime | `itu-t-l1410-2024` |
| `calc_eol_balance` | End-of-life | Reconcile collected used-machine mass = direct reuse + refurbishment input + recovered material outputs + treatment residues + measured stock change + disclosed residual; route shares shall sum to one. | `cp_end_of_life` | kg, route shares and residual % | `itu-t-l1410-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration_traceability` | Product and BOM | Every result shall trace to a model or configuration id and BOM revision that identifies CPU/accelerators, memory, storage, I/O, power, cooling and integrated devices. | Released BOM, serial genealogy, configuration record and change control |
| `dq_measurement` | Mass, power, energy and waste | Use calibrated or verified instruments suitable for the measured range. Retain raw readings, conversions, uncertainty, allocation and reconciliation residuals. | Calibration certificate, meter export, scale check, test report and calculation workbook |
| `dq_temporal` | Foreground production and use | Cover the complete represented production period and all material routes. Continuous production should normally cover 12 consecutive months; shorter campaigns shall disclose seasonality, start-up and utilisation limitations. | Dated production, meter, purchase, test, shipment and maintenance records |
| `dq_component_coverage` | Upstream inventory | Provide upstream datasets for all material BOM groups and disclose supplier-data coverage by mass and by environmentally relevant component class. Missing semiconductor, display, battery or precious-metal-bearing components shall not be justified by mass cut-off alone. | BOM-to-dataset matrix, supplier data, proxy assessment and cut-off register |
| `dq_power_profile` | Use electricity | Power measurements and hours shall refer to the same configuration, firmware, settings, workload, voltage, network and internal-cooling state. Rated power is not acceptable as measured consumption. | Test method, test report, telemetry, workload definition and uncertainty record |
| `dq_lifetime_representativeness` | Expected lifetime and maintenance | Prefer actual fleet retirement and service evidence for comparable machines. Report source, sample size, distribution or scenario, excluded storage time, repair and refurbishment assumptions, and sensitivity. | Asset register, retirement and service records, survey or reviewed statistics |
| `dq_boundary_completeness` | Full inventory | Quantify every required process and applicable conditional stage, or explicitly justify omission. Keep production testing, packaging, use electricity, external cooling, maintenance and end-of-life distinct. | Process map, boundary diagram, omission register and reviewer sign-off |
| `dq_proxy_disclosure` | Secondary data | Match component technology, geography, production period and function as closely as available. State every proxy and expected direction of bias; do not use another computer PCR as component evidence. | Dataset metadata and documented proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product scope | Fail when the dataset does not identify one complete single-housing machine with at least a CPU and I/O, or when a portable computer, component, peripheral, standalone storage unit, multi-node enclosure, system-form delivery or computing service is mixed into the reference product. | `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |
| `validation_reference_flow` | Reference product | Fail when the reference flow is not UUID `3c41eabb-f2b2-4e96-b24d-3485673d505f` with Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg, or when detachable packaging or separate peripherals are included in reference mass. |  |
| `validation_configuration` | Required qualifiers | Fail when machine type/configuration, CPU/accelerators, memory, storage, built-in I/O, power supply, internal cooling, integrated devices, net mass per item, production test, power-test conditions or expected lifetime is missing. | `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |
| `validation_bom_upstream` | BOM and component supply | Fail when any material component group lacks mass or count and an upstream dataset or disclosed proxy, when BOM revision and configuration are not linked, or when significant electronic components are removed only by a mass cut-off. | `itu-t-l1410-2024` |
| `validation_assembly_test` | Producer foreground | Fail when assembly, firmware configuration, functional test, burn-in when performed, rework, release yield, test electricity or producer waste is omitted or not assigned to the represented configuration. | `itu-t-l1410-2024`; `energy-star-computers-v8-2022`; `eu-regulation-2019-424` |
| `validation_mass_balance` | Production and end-of-life | Fail when the BOM-to-release or end-of-life mass balance cannot be reproduced, gross rejects and recovered outputs are netted, or an unexplained residual is omitted. | `itu-t-l1410-2024` |
| `validation_use_energy` | Use-stage electricity | Fail when use electricity relies only on PSU rating, TDP or nameplate values; when power and hours refer to different configurations or settings; or when operating modes, workload, voltage, test method and expected lifetime are not disclosed. | `energy-star-computers-v8-2022`; `eu-regulation-617-2013`; `eu-regulation-2019-424` |
| `validation_cooling` | Cooling | Fail when internal cooling energy is added outside measured device power, when external facility cooling is included without a declared boundary and causal allocation, or when cooling and device electricity are double counted. | `itu-t-l1410-2024`; `eu-regulation-2019-424` |
| `validation_lifetime` | Lifetime and maintenance | Fail when use-stage results lack an expected operating lifetime and evidence basis, when storage time is counted as operation, or when repair, refurbishment and second life are silently merged into the first-life boundary. | `itu-t-l1410-2024` |
| `validation_allocation` | Shared operations and recovered outputs | Fail when practical subdivision was skipped, shares do not sum to one, the allocation driver is unrelated to burden causation, economic allocation lacks price basis and sensitivity, or recycling credits are implicit. | `itu-t-l1410-2024` |
| `validation_no_system_proxy` | Downstream use | Fail any claim that a one-machine result represents a rack, cluster, data centre, multi-machine system, cloud or computing service without separately modelled quantities, infrastructure, networking, cooling and allocation. | `itu-t-l1410-2024`; `eu-regulation-2019-424` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground producer-gate data package for one complete single-housing automatic data processing machine, with optional separately reported downstream modules |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for equipment manufacturing and may support downstream `process` and `lifecyclemodel` projections when configuration, use, cooling, lifetime and end-of-life assumptions are compatible |
| allowed_use | Product footprinting, supply-chain inventory, procurement comparison within functionally comparable configurations, manufacturing improvement, and equipment-level life-cycle modelling with representative geography, technology and use scenario |
| excluded_use | Portable computers; components or peripherals; standalone storage; multi-node enclosures; system-form delivery; automatic substitution across servers, workstations and desktops; representing racks, clusters, data centres, cloud or computing services from one-machine results |
| required_metadata | PCR id and version; CPC context; machine type; manufacturer/model/configuration; chassis boundary; net mass and count; CPU/accelerator, memory, storage, I/O, power and cooling configuration; integrated devices; BOM revision and upstream coverage; assembly/test site, route and period; firmware and test profile; packaging; allocation; power modes, workload and test method; external cooling boundary; expected lifetime; maintenance; end-of-life; proxies and cut-offs |
| required_quality_disclosure | Primary-data share; BOM and upstream dataset coverage; geographic, temporal and technological representativeness; instrument calibration and uncertainty; production and test yield; mass-balance residuals; shared-facility allocation; power-profile coverage; cooling allocation; lifetime evidence; repair and end-of-life evidence; proxy limitations; shared legacy-alias integration blocker |
| update_trigger | Change in chassis or machine type, CPU or accelerator, memory, storage, built-in I/O, PSU or cooling architecture, integrated display or input, BOM or supplier route, assembly/test site, firmware or power management, workload, packaging, allocation, expected lifetime, maintenance, end-of-life, reference UUID or resolution of the shared alias conflict |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `itu-t-l1410-2024` | official_guidance | International Telecommunication Union, *Recommendation ITU-T L.1410 (11/2024): Methodology for environmental life cycle assessments of information and communication technology goods, networks and services*, https://handle.itu.int/11.1002/1000/16010 and official record https://www.itu.int/rec/T-REC-L.1410-202411-I/en (retrieved 2026-08-09) | ICT-goods BOM and part coverage, functional-unit and reference-flow context, life-cycle stages and unit processes, use and support activities, operating-lifetime disclosure, reuse/refurbishment boundary, end-of-life, allocation, data quality and reporting |
| `energy-star-computers-v8-2022` | official_guidance | U.S. Environmental Protection Agency, *ENERGY STAR Program Requirements for Computers, Eligibility Criteria Version 8.0, Rev. July 2022*, https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Computers%20Version%208.0%20Final%20Specification%20Rev.%20July%202022.pdf (retrieved 2026-08-09) | Desktop, integrated desktop, small-scale server and workstation definitions; configuration and product-family differentiation; CPU, GPU, memory and storage declarations; active, idle, sleep and off power modes; reproducible testing |
| `eu-regulation-617-2013` | standard | European Commission, *Commission Regulation (EU) No 617/2013 with regard to ecodesign requirements for computers and computer servers*, consolidated official text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013R0617 (retrieved 2026-08-09; used as technical definition and measurement evidence, not as a statement of current applicability in every market) | Stationary desktop, integrated desktop and workstation distinctions; CPU, memory, graphics and storage configuration; power modes, power measurement, PSU information and manufacturer disclosure |
| `eu-regulation-2019-424` | standard | European Commission, *Commission Regulation (EU) 2019/424 laying down ecodesign requirements for servers and data storage products*, consolidated official text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019R0424 (retrieved 2026-08-09; used as technical definition and measurement evidence, not as a statement of current applicability in every market) | Server and multi-node boundary definitions; CPU, memory, storage, I/O, PSU, configuration-family, idle and active power, operating-condition and testing disclosure; external cooling relevance; repair, upgrade, data deletion, critical-component and end-of-life information |
